(function () {
  const consoleTypes = ['log', 'info', 'warn', 'error', 'debug'];
  const stamp = () => (performance.now() / 1000).toFixed(4).padStart(11);
  const stampStyle = type =>
    `border-bottom: 2px solid ${
      type === 'info'
        ? '#26d'
        : type === 'warn'
          ? '#db1'
          : type === 'error'
            ? '#c22'
            : type === 'debug'
              ? '#3bd'
              : '#888'
    };`;
  console.raw = {};
  Object.defineProperty(console.raw, Symbol.toStringTag, { enumerable: false, value: 'raw console' });
  for (const type of consoleTypes) {
    const original = console[type];
    if (typeof original !== 'function') continue;
    console.raw[type] = console[type];
    console[type] = (...args) => {
      const fmt = typeof args[0] === 'string' ? args.shift() : '';
      return original.apply(console, [`%c${stamp()}%c ${fmt}`, stampStyle(type), '', ...args]);
    };
  }
})();

const { contextBridge, ipcRenderer, webFrame } = require('electron');
const { versions, env, pid, platform } = require('process');
const { release } = require('os');
const { readFileSync, readdirSync, existsSync, statSync, statfsSync } = require('fs');
const api = {
  versions() {
    return { node: versions.node, chrome: versions.chrome, electron: versions.electron, v8: versions.v8 };
  },
  pid() {
    return pid;
  },
  toggleDevTools() {
    ipcRenderer.send('window', 'toggleDevTools');
  },
  minimize() {
    ipcRenderer.send('window', 'minimize');
  },
  maximize() {
    ipcRenderer.send('window', 'maximize');
  },
  toggleMaximize() {
    ipcRenderer.send('window', 'toggleMaximize');
  },
  close() {
    ipcRenderer.send('window', 'close');
  },
  toggleKeepOnTop() {
    if (env?.XDG_SESSION_TYPE === 'wayland')
      console.warn(
        'Keep On Top may %cnot%c be supported on Wayland sessions.',
        'font-weight: bold; font-style: italic;',
        ''
      );
    ipcRenderer.invoke('handle-window', 'toggleKeepOnTop');
  },
  isAlwaysOnTop() {
    return ipcRenderer.invoke('handle-window', 'isAlwaysOnTop');
  },
  isMaximized() {
    return ipcRenderer.invoke('handle-window', 'isMaximized');
  },
  isFullscreen() {
    return ipcRenderer.invoke('handle-window', 'isFullscreen');
  },
  onWindowState(callback) {
    ipcRenderer.on('window:stateCallback', (_, state) => callback(state));
  },
  /**
   * @param {number | undefined} x
   * @param {number | undefined} y
   * @param {string} menu
   */
  showContextMenu(x = 0, y = 0, menu) {
    ipcRenderer.send('window:showContextMenu', { x: Math.trunc(x), y: Math.trunc(y) }, menu);
  },
  /**
   * @returns {string[]}
   */
  getMenuNames() {
    return ipcRenderer.invoke('window:getMenuNames');
  },
  simulateBackspace() {
    ipcRenderer.send('debug:simulateBackspace');
  },
  simulateKey(key) {
    ipcRenderer.send('keyboard:simulateKey', key);
  },
  simulateChar(char) {
    ipcRenderer.send('keyboard:simulateChar', char);
  },
  openNewWindow(location) {
    ipcRenderer.send('window', 'openNewWindow', location);
  },
  openNewFunctionPreviewWindow(location) {
    ipcRenderer.send('window', 'openNewFunctionPreviewWindow', location);
  },
  screenshot(dataURI) {
    return ipcRenderer.invoke('handle-window', 'screenshot', dataURI);
  },
  setMinSize(x, y) {
    ipcRenderer.send('window', 'setMinSize', { x: x || 750, y: y || 600 });
  },
  system: function () {
    const sessionType = env?.XDG_SESSION_TYPE;
    const isWayland = sessionType === 'wayland' || !!env?.WAYLAND_DISPLAY;

    let distro = null;
    try {
      const content = readFileSync('/etc/os-release', 'utf8');
      distro = content.match(/^ID=(.+)$/m)?.[1]?.replace(/"/g, '') ?? null;
    } catch {}

    let res = Object.create(null);
    res.platform = platform;
    res.wm = isWayland ? 'wayland' : 'x11';
    res.distro = distro;
    res.kernel = release();
    res.desktop = env?.XDG_CURRENT_DESKTOP;
    return res;
  },
  /**
   * @param {string} bg
   * @param {string} symbolColor
   * @param {number} height
   */
  changeOverlayColor: function (bg, symbolColor, height) {
    height = parseInt(String(height)) || 32;
    ipcRenderer.send('window', 'changeColorOfOverlay', { color: bg, symbolColor, height });
  },
  minWidth: 750,
  minHeight: 600,

  getZoom() {
    return ipcRenderer.invoke('handle-window', 'zoom');
  },
  getZoomLevel() {
    return ipcRenderer.invoke('handle-window', 'zoomLevel');
  },

  zoom(/** @type {'in' | 'out' | 'reset'} */ type) {
    ipcRenderer.send('window', 'zoom', type);
  },
  uptime() {
    return performance.now();
  },
  appUptime() {
    return process.uptime() * 1000;
  },
  refresh() {
    ipcRenderer.send('window', 'refresh');
  },
  isOpenedByParent() {
    return process.argv.includes('--opened-by-parent');
  },
  /**
   * @param {object} obj
   */
  updateHelp(obj) {
    return ipcRenderer.invoke('update-help', obj);
  },
  exec() {
    console.warn('Consider %cnot%c using `api.exec` in the renderer process for security reasons.\nThis is only for development purposes.', 'font-weight: bold; font-style: italic;', '');
    return ipcRenderer.invoke('exec', cmd);
  },

  [Symbol.toStringTag]: 'UltimateCalculatorAPI',
};

contextBridge.exposeInMainWorld('uc', api);
contextBridge.exposeInMainWorld('fs', {
  readFileSync(...args) {
    return readFileSync(...args);
  },
  readdirSync(...args) {
    return readdirSync(...args);
  },
  existsSync(...args) {
    return existsSync(...args);
  },
  statSync(...args) {
    return statSync(...args);
  },
  statfsSync(...args) {
    return statfsSync(...args);
  },
  getType(input) {
    if (typeof input === 'string') {
      try {
        const stats = statSync(input);
        return stats.isFile()
          ? 'file'
          : stats.isDirectory()
            ? 'dir'
            : stats.isFIFO()
              ? 'fifo'
              : stats.isSocket()
                ? 'socket'
                : stats.isCharacterDevice()
                  ? 'char'
                  : stats.isBlockDevice()
                    ? 'block'
                    : stats.isSymbolicLink()
                      ? 'symlink'
                      : 'unknown';
      } catch (err) {
        if (err.code === 'ENOENT') return 'not_found';
        throw err;
      }
    }
    if (input && typeof input === 'object') {
      const typeSymbol = Object.getOwnPropertySymbols(input).find(sym => sym.description === 'type');

      if (!typeSymbol) return 'unknown';
      const typeValue = input[typeSymbol];
      switch (typeValue) {
        case 1:
          return 'file';
        case 2:
          return 'dir';
        case 3:
          return 'fifo';
        case 4:
          return 'socket';
        case 5:
          return 'char';
        case 6:
          return 'block';
        case 7:
          return 'symlink';
        default:
          return 'unknown';
      }
    }

    return 'unknown';
  },
});

window.addEventListener('DOMContentLoaded', () => {
  let $ = document.querySelector.bind(document);
  let parse = function () {
    const text = arguments[0];
    const el = document.createElement('_');
    el.innerHTML = text;
    return el.firstChild;
  };
  if (!$('.global-actions')) {
    $('html').dataset.theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    $('html').style.setProperty('--accent', 210);
    $('head').append(
      parse(
        '<link class="__ultimate_calculator_injected_stylesheet" href="uc://public/assets/style.css" rel="stylesheet">'
      )
    );
    $('body').prepend(
      parse(
        `<header class="global-actions"><button class="btn-transparent close" title="Close" onclick="api.close()"><i class="mdi-window-close"></i></button><button class="btn-transparent maximize" title="Maximize" onclick="api.toggleMaximize()"><i class="mdi-window-maximize"></i></button><button class="btn-transparent minimize" title="Minimize" onclick="api.minimize()"><i class="mdi-minus"></i></button><i style="width: 8px;"></i><button class="btn-transparent keep-above" title="Keep this window above others" data-on="false"><i class="mdi-chevron-up"></i></button><span class="title"><code style="overflow:hidden;text-overflow:ellipsis;width:100%">${[...location.href].map(a => '&#x' + a.codePointAt().toString(16) + ';').join('')}</code></span><img id="app-favicon" src="uc://local/favicon.svg" alt="TuneFlow"></header>`
      )
    );
    $('body').style.cssText =
      'padding: 4px !important; padding-top: calc(env(titlebar-area-height, var(--global-actions-height)) + 4px) !important;';

    const maximizeBtn = $('.global-actions .maximize [class^=mdi]');
    const alwaysOnTopBtn = $('.global-actions .keep-above');

    $('.global-actions .keep-above').onclick = () => api?.toggleKeepOnTop?.();
    api?.onWindowState?.(state => {
      alwaysOnTopBtn.setAttribute('data-on', `${state?.isAlwaysOnTop ?? false}`);
      maximizeBtn.className = state?.isMaximized ? 'mdi-window-restore' : 'mdi-window-maximize';
      maximizeBtn.setAttribute('data-on', state.isFullScreen);
    });
    api?.isAlwaysOnTop?.()?.then(state => {
      alwaysOnTopBtn.setAttribute('data-on', `${state ?? false}`);
    });
    api?.isMaximized?.()?.then(state => {
      maximizeBtn.className = state ? 'mdi-window-restore' : 'mdi-window-maximize';
    });
  }
});

let prevZoomLevel = webFrame.getZoomLevel();
window.addEventListener('resize', () => {
  const newZoomLevel = webFrame.getZoomLevel();
  if (newZoomLevel !== prevZoomLevel) {
    api.changeOverlayColor(null, null, (32 * outerWidth) / innerWidth);
    prevZoomLevel = newZoomLevel;
  }
});
