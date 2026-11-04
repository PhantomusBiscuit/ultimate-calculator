const { readFileSync, writeFileSync } = require('fs');
const os = require('node:os');
if (process.argv.includes('--version')) {
  let versions = process.versions;
  console.log(
    Object.entries(versions)
      .map(a => `\x1b[1;2;94m${a[0]}\x1b[0m: ${a[1] ?? '\x1b[0;2;3munknown\x1b[0m'}`)
      .join('\n')
  );
  process.exit(0);
}
if (process.argv.includes('--builtin-modules')) {
  const { builtinModules } = require('node:module');
  console.log(
    builtinModules.map(a => `\x1b[1;34m${a}\x1b[0m`).join(
      '\x1b[0;2m,\x1b[0m' + (process.argv.includes('-1') ? '\n' : ' ')
    )
  );
  process.exit(0);
}
if (process.argv.includes('--system')) {
  const sessionType = process.env?.XDG_SESSION_TYPE;
  const isWayland = sessionType === 'wayland' || !!process.env?.WAYLAND_DISPLAY;

  let distro = null;
  try {
    const content = readFileSync('/etc/os-release', 'utf8');
    distro = content.match(/^ID=(.+)$/m)?.[1]?.replace(/"/g, '') ?? null;
  } catch {}

  let systemStats = {
    platform: process.platform,
    wm: isWayland ? 'wayland' : 'x11',
    distro,
    kernel: os.release(),
    desktop: process.env?.XDG_CURRENT_DESKTOP,
  };
  console.log(
    Object.entries(systemStats)
      .map(a => `\x1b[1;2;94m${a[0]}\x1b[0m: ${a[1] ?? '\x1b[0;2;3munknown\x1b[0m'}`)
      .join('\n')
  );
  process.exit(0);
}
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  const C = {
    reset:   '\x1b[0m',
    bold:    '\x1b[1m',
    dim:     '\x1b[2m',
    italic:  '\x1b[3m',
    blue:    '\x1b[1;2;94m',
    cyan:    '\x1b[1;36m',
    yellow:  '\x1b[1;33m',
    gray:    '\x1b[0;2m',
    white:   '\x1b[1;97m',
    lime:    '\x1b[1;92m'
  };

  const help = `
${C.white}USAGE${C.reset}
  `/* ${C.lime}$${C.reset} node ${C.yellow}<main.js>${C.reset} ${C.gray}[options]${C.reset} */ + `
  ${C.lime}$${C.reset} ./start ${C.gray}[options]${C.reset}

${C.white}OPTIONS${C.reset}
  ${C.yellow}-h${C.reset}, ${C.yellow}--help${C.reset}              ${C.gray}Show this help message${C.reset}
  ${C.yellow}--version${C.reset}               ${C.gray}Print Node.js version info${C.reset}
  ${C.yellow}--builtin-modules${C.reset}       ${C.gray}List all built-in Node.js modules${C.reset}
      ${C.yellow}-1${C.reset}                  ${C.gray}Print modules one per line (with --builtin-modules)${C.reset}
  ${C.yellow}--system${C.reset}                ${C.gray}Print OS, WM, distro, kernel, and desktop info${C.reset}

${C.white}EXAMPLES${C.reset}
  ${C.lime}$${C.reset} ./start ${C.cyan}--version${C.reset}
  ${C.lime}$${C.reset} ./start ${C.cyan}--builtin-modules${C.reset} ${C.gray}-1${C.reset}
  ${C.lime}$${C.reset} ./start ${C.cyan}--system${C.reset}

${C.white}ABOUT${C.reset}
  A small CLI utility for inspecting the Node.js environment.
  Detects platform, Wayland/X11, Linux distro, and lists built-in modules.
`.trimStart();

  console.log(help);
  process.exit(0);
}

const { app, BrowserWindow, protocol, ipcMain, Menu, dialog, MenuItem } = require('electron');
const { lookup } = require('mime-types');
const path = require('path');
const { platform } = require('process');

app.on('window-all-closed', () => {
  if (platform === 'darwin') return;
  app.quit();
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length !== 0) return;
  createWindow();
});

protocol.registerSchemesAsPrivileged([
  { scheme: 'uc', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true } },
]);

const serveFile = filePath => {
  try {
    const data = readFileSync(filePath);
    const ext = path.extname(filePath).toLowerCase();
    return new Response(data, {
      headers: { 'Content-Type': lookup(ext) || 'application/octet-stream', /* only for developing */ 'Cache-Control': 'no-cache' },
    });
  } catch {
    return new Response(null, { status: 404 });
  }
};
// function getHelpMenuItems(fn) {
// const grouped = {};
// const scope = math.expression.mathWithTransform;
// for (const key of Object.keys(scope)) {
//   const doc = mathjs.docs[key];
//   if (!doc) continue;
//   const category = doc.category || 'Other';
//   const isFunction = typeof scope[key] === 'function';
//   const prefix = isFunction ? '(ƒ) ' : '(c) ';
//   if (!grouped[category]) grouped[category] = [];
//   grouped[category].push({ label: `${prefix}${key}`, id: key, click: a=>fn(a.id), });
// }
// return Object.keys(grouped)
//   .sort()
//   .map(categoryName => ({
//     label: categoryName,
//     submenu: grouped[categoryName].sort(
//       (a, b) => a.label.localeCompare(b.label)
//     ),
//   }));
// }

app.whenReady().then(() => {
  app.setAsDefaultProtocolClient('uc');
  protocol.handle('uc', request => {
    const url = new URL(request.url);
    switch (url.hostname) {
      case 'public':
        return serveFile(path.join(__dirname, 'public', url.pathname));
      case 'local':
        return serveFile(path.join(__dirname, url.pathname));
      case 'libs':
        return serveFile(path.join(__dirname, 'public', 'libs', url.pathname));
      default:
        return new Response(null, { status: 404 });
    }
  });
  createWindow();
});

const /** @type {Electron.BrowserWindowConstructorOptions} */ presetWindow = {
  width: 750, height: 600,
  // resizable: false,
  minWidth: 750, minHeight: 600,
  fullscreenable: false,
  frame: true, center: true,
  roundedCorners: false,
  backgroundColor: '#000000',
  hasShadow: false,
  titleBarStyle: 'hidden',
  ...(
    process.platform !== 'darwin' ? {
      titleBarOverlay: {
        color: '#000000',
        symbolColor: '#ffffff',
        height: 32,
      }
    } : {}
  ),
  // transparent: true,
  webPreferences: {
    preload: path.join(__dirname, 'preload.js'),
    contextIsolation: true,
    nodeIntegration: false,
    // devTools: false,
    backgroundThrottling: true,
    sandbox: false,
    webgl: true,
  },
};
function createWindow(url) {
  const win = new BrowserWindow(presetWindow);
  win.loadURL(url ?? 'uc://public/index.html');

  ipcMain.on('window', (_, action, ...args) => {
    switch (action) {
      case 'toggleDevTools':
        win.webContents.toggleDevTools();
        break;
      case 'minimize':
        win.minimize();
        break;
      case 'maximize':
        win.maximize();
        break;
      case 'toggleMaximize':
        win.isMaximized() ? win.unmaximize() : win.maximize();
        break;
      case 'close':
        win.close();
        break;
      case 'openNewWindow':
        newWindow(
          { maximizable: false, minimizable: true },
          args[0]
        )
        break;
      case 'openNewFunctionPreviewWindow':
        functionPreviewWindow(args[0]);
        break;
      case 'setMinSize':
        win.setMinimumSize(0, 0);
        const [currentW, currentH] = win.getSize();
        win.setSize(Math.max(currentW, args[0].x), Math.max(currentH, args[0].y));
        win.setMinimumSize(args[0].x, args[0].y);
        break;
      case 'zoom':
        win.webContents.setZoomLevel(
          win.webContents.getZoomLevel() +
            (args[0] === 'in' ? 0.5 : args[0] === 'out' ? -0.5 : -win.webContents.getZoomLevel())
        );
        break;
      case 'refresh':
        win.webContents.reloadIgnoringCache();
        break;
      case 'changeColorOfOverlay':
        BrowserWindow.getAllWindows().forEach(window => {
          window.setTitleBarOverlay({
            color: args[0]?.color,
            symbolColor: args[0]?.symbolColor,
            height: parseFloat(args[0]?.height) || 32,
          });
        });
        break;
      default:
        break;
    }
  });
  function helpWindow(fn) {
    newWindow(
      { maximizable: false, minimizable: true },
      `uc://public/help.html?function=${encodeURIComponent(fn)}`
    );
  }
  /**
   * @param {Function | string} fn
   */
  function functionPreviewWindow(fn) {
    newWindow(
      { maximizable: true, minimizable: true },
      `uc://public/function-preview.html?function=${encodeURIComponent(String(fn))}`
    );
  }
  /**
   * @param {Electron.BrowserWindowConstructorOptions} options
   * @param {string} url
   */
  function newWindow(options, url) {
    const subwin = new BrowserWindow({
      ...presetWindow,
      width: 500, height: 600,
      minWidth: 500, minHeight: 600,
      resizable: true, icon: path.join(__dirname, 'favicon.svg'),
      ...options,
      webPreferences: {
        ...presetWindow.webPreferences, additionalArguments: ['--opened-by-parent'],
        ...options,
      }
    });
    subwin.loadURL(url); subwin.focus(); subwin.setMenu(otherMenu);
  }
  ipcMain.on('debug:simulateBackspace', () => {
    win.webContents.sendInputEvent({
      type: 'keyDown',
      keyCode: 'Backspace', // The key to simulate
    });
  });
  ipcMain.on('keyboard:simulateChar', (_, char) => {
    console.log({ _, key: char });
    win.webContents.sendInputEvent({ type: 'char', keyCode: char });
  });
  ipcMain.on('keyboard:simulateKey', (_, key) => {
    console.log({ _, key });
    win.webContents.sendInputEvent({ type: 'keyDown', keyCode: key });
  });
  ipcMain.handle('exec', (_, command) => {
    return eval(command);
  });

  ipcMain.handle('handle-window', async (_, action, ...args) => {
    switch (action) {
      case 'toggleKeepOnTop':
        win.setAlwaysOnTop(!win.isAlwaysOnTop(), 'screen-saver');
        return win.isAlwaysOnTop();
      case 'isAlwaysOnTop':
        return win.isAlwaysOnTop();
      case 'isMaximized':
        return win.isMaximized();
      case 'isFullscreen':
        return win.isFullScreen();
      case 'zoom':
        return win.webContents.getZoomFactor();
      case 'zoomLevel':
        return win.webContents.getZoomLevel() * 2;
      case 'screenshot':
        let path = await saveScreenshot(args[0], `Code screenshot at ${new Date().toISOString()}.png`);
        return path;
      default:
        break;
    }
  });
  async function saveScreenshot(imageData, defaultName = 'screenshot.png') {
    const win = BrowserWindow.getFocusedWindow();
    const result = await dialog.showSaveDialog(win, {
      title: 'Save Screenshot',
      defaultPath: path.join(process.env.HOME || process.env.USERPROFILE, 'Pictures', defaultName),
      filters: [{ name: 'PNG Image', extensions: ['png'] }],
    });
    if (!result.canceled && result.filePath) {
      const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');
      writeFileSync(result.filePath, buffer);
      return result.filePath;
    }
    return null;
  }

  ipcMain.handle('window:getMenuNames', () => {
    return menu.items.filter(item => item.visible).map(item => item.label);
  });
  function sendWindowStateCallback() {
    win.webContents.send('window:stateCallback', {
      isAlwaysOnTop: win.isAlwaysOnTop(),
      isMaximized: win.isMaximized(),
      isFullscreen: win.isFullScreen(),
    });
  };

  let menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        { label: 'Zoom: 0 (100%)', enabled: false, id: 'zoom-indicator' },
        { label: 'Zoom in', accelerator: 'CmdOrCtrl+=', role: 'zoomIn' },
        { label: 'Zoom out', accelerator: 'CmdOrCtrl+-', role: 'zoomOut' },
        { label: 'Zoom reset', accelerator: 'CmdOrCtrl+0', role: 'resetZoom' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', role: 'cut' },
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', role: 'copy' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', role: 'paste' },
        { type: 'separator' },
        { label: 'Reload', accelerator: 'CmdOrCtrl+R', role: 'reload' },
        { label: 'Force reload', accelerator: 'CmdOrCtrl+Shift+R', role: 'forceReload' },
        {
          label: 'Preferences',
          click: () => newWindow({ maximizable: false, minimizable: true }, 'uc://public/settings.html'),
          accelerator: 'CmdOrCtrl+,',
        },
        { type: 'separator' },
        { label: 'Quit', accelerator: 'CmdOrCtrl+Q', role: 'close' },
      ],
    },
    { label: 'Debug', submenu: [{ label: 'Toggle DevTools', accelerator: 'F12', role: 'toggleDevTools' }] },
    { label: 'Help', id: 'help-entry', submenu: [{ label: 'Loading...', enabled: false }] },
    {
      label: 'Alt. shortcuts',
      visible: false,
      submenu: [{ label: 'Zoom in', accelerator: 'CmdOrCtrl+Shift+=', role: 'zoomIn' }],
    },
    {
      label: 'About',
      submenu: [
        {
          label: 'Manual',
          click: () => newWindow({ maximizable: true, minimizable: true }, 'uc://public/manual.html'),
        },
        { label: 'Version: 1.0.0', enabled: false },
      ],
    },
  ]);
  let otherMenu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        { label: 'Zoom: 0 (100%)', enabled: false, id: 'zoom-indicator' },
        { label: 'Zoom in', accelerator: 'CmdOrCtrl+=', role: 'zoomIn' },
        { label: 'Zoom out', accelerator: 'CmdOrCtrl+-', role: 'zoomOut' },
        { label: 'Zoom reset', accelerator: 'CmdOrCtrl+0', role: 'resetZoom' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', role: 'cut' },
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', role: 'copy' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', role: 'paste' },
        { type: 'separator' },
        { label: 'Reload', accelerator: 'CmdOrCtrl+R', role: 'reload' },
        { label: 'Force reload', accelerator: 'CmdOrCtrl+Shift+R', role: 'forceReload' },
        { type: 'separator' },
        { label: 'Quit', accelerator: 'CmdOrCtrl+Q', role: 'close' },
      ],
    },
    { label: 'Debug', submenu: [{ label: 'Toggle DevTools', accelerator: 'F12', role: 'toggleDevTools' }] },
    {
      label: 'Alt. shortcuts',
      visible: false,
      submenu: [{ label: 'Zoom in', accelerator: 'CmdOrCtrl+Shift+=', role: 'zoomIn' }],
    },
    {
      label: 'About',
      submenu: [
        {
          label: 'Manual',
          click: () => newWindow({ maximizable: true, minimizable: true }, 'uc://public/manual.html'),
        },
        { label: 'Version: 1.0.0', enabled: false },
      ],
    },
  ]);
  ipcMain.handle('update-help', (_, str) => {
    const helpEntry = menu.getMenuItemById('help-entry');
    if (helpEntry.submenu.items.length !== 1) return;
    helpEntry.submenu.items = [];
    str = str.split(';').map(item => {
      let splitItem = item.split(/:|,/);
      let obj = {
        label: splitItem[0], submenu: splitItem.slice(1).map(subitem => {
          return { label: subitem, id: subitem, click: () => helpWindow(subitem) }
        })
      };

      helpEntry.submenu.append(new MenuItem(obj));
    });
  });
  win.setMenu(menu);
  win.webContents.on('ipc-message', (_, channel, params, submenuString) => {
    switch (channel) {
      case 'window:showContextMenu':
        if (!submenuString) {
          menu.popup({ window: win, x: Math.ceil(params.x), y: Math.ceil(params.y) });
          return;
        }
        let submenu = menu.items.find(item => item.label === submenuString).submenu;
        const newSubmenu = Menu.buildFromTemplate(submenu.items);
        newSubmenu.popup({ window: win, x: Math.ceil(params.x), y: Math.ceil(params.y) });
        break;
      default:
        break;
    }
  });
  // TODO
  // win.webContents.on('context-menu', (_, params) => {
  //   let obj = JSON.parse(params.altText);
  // });

  win.on('always-on-top-changed', sendWindowStateCallback);

  win.on('maximize', sendWindowStateCallback);
  win.on('unmaximize', sendWindowStateCallback);

  win.on('enter-full-screen', sendWindowStateCallback);
  win.on('leave-full-screen', sendWindowStateCallback);
  win.webContents.on('enter-html-full-screen', sendWindowStateCallback);
  win.webContents.on('leave-html-full-screen', sendWindowStateCallback);
  win.on('unresponsive', async () => {
    let d = await dialog.showMessageBox(
      win, {
        title: 'Ultimate Calculator',
        message: 'It looks like Ultimate Calculator is frozen.',
        detail: 'Do you want to:',
        buttons: ['Force close', 'Wait'],
        cancelId: 1, defaultId: 1, type: 'warning'
      }
    );
    if (!d.response) {
      win.destroy(); win.close();
      process.exit(1);
    }
  });

  let lastState = {
    isAlwaysOnTop: win.isAlwaysOnTop(),
    isMaximized: win.isMaximized(),
    isFullscreen: win.isFullScreen(),
    zoom: win.webContents.zoomLevel * 2,
  };
  setInterval(() => {
    try {
      if (!win) return;
      const currentState = {};
      currentState.isAlwaysOnTop = win.isAlwaysOnTop();
      currentState.isMaximized = win.isMaximized();
      currentState.isFullscreen = win.isFullScreen();
      currentState.zoom = win.webContents.zoomLevel * 2;
      if (
        currentState.isAlwaysOnTop !== lastState.isAlwaysOnTop ||
        currentState.isMaximized !== lastState.isMaximized ||
        currentState.isFullscreen !== lastState.isFullscreen
      ) {
        lastState = currentState;
        sendWindowStateCallback();
      }
      if (currentState.zoom !== lastState.zoom)
        menu.getMenuItemById('zoom-indicator').label =
          `Zoom: ${currentState.zoom} (${(100 * win.webContents.zoomFactor).toFixed(2)}%)`;
    } catch {}
  }, 500);
}

// setInterval(() => {
//   let memory = memoryUsage();
//   console.log(
//     '\x1b[H\x1b[2K\x1b[44m Memory \x1b[0m\x1b[1;94m %s MiB \x1b[0m\n',
//     ((memory.arrayBuffers + memory.external + memory.heapUsed + memory.rss) / 1048576).toFixed(2)
//   );
// }, 50);

app?.disableHardwareAcceleration();
// app?.commandLine?.appendSwitch('enable-low-end-device-mode');
// app?.commandLine?.appendSwitch('disable-gpu');
app?.commandLine?.appendSwitch('js-flags', '--max-old-space-size=512');

// const windows = new Map();
// ipcMain.handle('create-window', async (event, options) => {
//   const win = new BrowserWindow({
//     ...presetWindow,
//     width: options?.width || 450,
//     height: options?.height || 300,
//     frame: options?.frame !== undefined ? options?.frame : true,
//     webPreferences: {
//       nodeIntegration: false,
//       contextIsolation: true,
//       preload: path.join(__dirname, 'preload.js')
//     },
//   });

//   win.loadURL(options?.file ?? 'uc://public/index.html');

//   const windowId = win.id;
//   windows.set(windowId, win);

//   return `{
//     id: ${windowId},
//     close: function() {
//       const w = windows.get(windowId);
//       if (!w && w.isDestroyed()) return;
//       w.close();
//       windows.delete(windowId);
//     },
//     minimize: function() {
//       const w = windows.get(windowId);
//       if (w && !w.isDestroyed()) w.minimize();
//     },
//     maximize: function() {
//       const w = windows.get(windowId);
//       if (!w && w.isDestroyed()) return;
//       w.isMaximized() ? w.unmaximize() : w.maximize();
//     },
//     focus: function() {
//       const w = windows.get(windowId);
//       if (w && !w.isDestroyed()) w.focus();
//     },
//     isClosed: function() {
//       const w = windows.get(windowId);
//       return !w || w.isDestroyed();
//     },
//     getBounds: function() {
//       const w = windows.get(windowId);
//       if (w && !w.isDestroyed()) return null;
//       return w.getBounds();
//     }
//   }`;
// });
