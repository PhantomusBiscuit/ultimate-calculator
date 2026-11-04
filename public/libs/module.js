(function() {
  const consoleTypes = ['log', 'info', 'warn', 'error', 'debug'];
  const stamp = () => (performance.now() / 1000).toFixed(4).padStart(10);
  const orig = () => location.pathname.toString().split(/\.|\//).slice(-2, -1)[0].slice(0, 8).padStart(8);
  const stampStyle = type =>
    `border-bottom: 2px solid ${
      type === 'info' ? '#26d' :
      type === 'warn' ? '#db1' :
      type === 'error' ? '#c22' :
      type === 'debug' ? '#3bd' : '#888'
    };`;
  console.raw = {};
  Object.defineProperty(console.raw, Symbol.toStringTag, {
    enumerable: false, value: 'raw console'
  });
  for (const type of consoleTypes) {
    const original = console[type];
    if (typeof original !== 'function') continue;
    console.raw[type] = console[type];
    console[type] = (...args) => {
      const fmt = typeof args[0] === 'string' ? args.shift() : '';
      return original.apply(console, [`${orig()} %c${stamp()}%c ${fmt}`, stampStyle(type), '', ...args]);
    };
  }
})();

const codeStyle = 'background-color: canvas; padding: 1.5px 6px; border-radius: 4px';
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach(entry => {
    if (entry.domComplete === 0) return;
    console.log(`DOM loading completed in %c${entry.domComplete.toFixed(4).padStart(10)}%cms`, codeStyle, '');
    observer.disconnect();
  });
});

observer.observe({ type: 'navigation', buffered: true });

/**
 * @typedef {(button: Button, text: string) => void} ButtonCallback
 * @typedef {(
 *  'Ctrl' | 'Shift' | 'Alt' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' |
 *  'F11' | 'F12' | 'Escape' | 'Enter' | 'Tab' | 'Backspace' | 'Delete' | 'ArrowUp' | 'ArrowDown' |
 *  'ArrowLeft' | 'ArrowRight' | 'Home' | 'End' | 'PageUp' | 'PageDown' | 'A' | 'B' | 'C' | 'D' | 'E' |
 *  'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' |
 *  'V' | 'W' | 'X' | 'Y' | 'Z' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0' | '-' |
 *  '=' | '\[' | '\]' | '\\' | ';' | "'" | ',' | '.' | '/' | '`' | '!' | '@' | '#' | '$' | '%' | '^' |
 *  '&' | '*' | '\(' | '\)' | '_' | '+' | '\x7B' | '\x7D' | '|' | ':' | '"' | '<' | '>' | '?' | '~'
 * )} Shortcut
 */
try {
  math.import({
    // logn(a, b) { return math.divide(math.log10(a), math.log10(b)) },
    ln(a) { return math.log(a, math.e) },
    Sigma(x, start, end) {
      let t = o.findByType(x, math.SymbolNode);
      x = x.toString();
      let a = math.parse('0').value;
      for (let i = start; i < end; i++) {
        a = math.add(a, math.evaluate(x, { [t]: math.parse(i.toString()).value }).toString());
      };
      return a
    },
    get Sum() { return this.Sigma },
    trunc(n) { return math.chain(n).abs().floor().multiply(math.sign(n)).done() },
    timestamp() {
      let date = new Date;
      return date;
    },
    timetodate(time) {
      return new Date(time ?? 0);
    },
    nounit(unit) { return unit.toNumeric() },
    // nerdamer,
    cis(theta = 0) { return math.evaluate('cos(θ) + i * sin(θ)', { θ: theta }); },
    fourthRoot(n) { return math.nthRoot(n, 4); },
    intDiv(a, b) { return math.trunc(math.divide(a, b)) },
    unicode(...n) { return String.fromCodePoint(...n); },
    pol(x, y) { return { r: math.evaluate('sqrt(x^2+y^2)', { x, y }), θ: math.atan2(y, x) } },
    rec(r, theta) { return { x: math.evaluate('r cos(theta)', { r, theta }), y: math.evaluate('r sin(theta)', { r, theta }) } },
    sqrt(n, b) { return math.nthRoot(n, b ?? 2); }
  });
  // math.Unit.isValidAlpha = e => /[a-zA-Z\u0391-\u03C9]/giu.test(e);
  math.Unit.isValidAlpha = e => /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/giu.test(e);
  math.createUnit({
    turn: { definition: '360deg', prefixes: 'long', aliases: ['tr', 'trn', 'trs', 'trns'] },
    gon: { definition: '1grad', prefixes: 'short' },
    Ω: { definition: 'ohm' },
    px: { definition: '0.026458333333333333 cm', aliases: ['pixel', 'pixels'], prefixes: 'short' },
    point: { definition: '0.03527777777777777 cm', aliases: ['points', 'pts'], prefixes: 'none' },
    pica: { definition: '0.42333333333333333 cm', aliases: ['picas', 'pcs'], prefixes: 'none' },
    Q: { definition: '0.25 mm', aliases: ['quartermm', 'qtmm', 'quartermillimeter'], prefixes: 'none' },
    permille: { definition: '0.001', aliases: ['ppk'] },
    pertenk: { definition: '0.0001', aliases: ['pp10k', 'per10k', 'pptenk', 'ppmyriad', 'permyriad'] },
    permillion: { definition: '0.000001', aliases: ['ppm', 'permilo'] },
    perbillion: { definition: '0.000000001', aliases: ['ppb', 'perbil'] },
    pertrillion: { definition: '0.000000000001', aliases: ['ppt', 'pertril'] },
  });
  // #region - Adding `mu` (µ) support
  let p = math.Unit.PREFIXES;
  p.CUBIC.μ =/*  p.CUBIC.mu = */ p.CUBIC.u;
  p.CUBIC.μ.name = 'μ';
  // p.CUBIC.mu.name = 'μ';

  p.SHORT.μ =/*  p.SHORT.mu = */ p.SHORT.u;
  p.SHORT.μ.name = 'μ';
  // p.SHORT.mu.name = 'μ';

  p.SHORTLONG.μ =/*  p.SHORTLONG.mu = */ p.SHORTLONG.u;
  p.SHORTLONG.μ.name = 'μ';
  // p.SHORTLONG.mu.name = 'μ';

  p.SQUARED.μ =/*  p.SQUARED.mu = */ p.SQUARED.u;
  p.SQUARED.μ.name = 'μ';
  // p.SQUARED.mu.name = 'μ';
  // #endregion
  setTimeout(() => {
    o.syncContrast();
    o.syncTheme();
    o.syncTitle();
  }, 500);
} catch {}
try {
  if (location.hash === '#embed') {
    document.querySelector('.global-actions').style.backgroundColor = 'linear-gradient(\
    to bottom,\
    var(--button-o) 0%, var(--button-o) 5%,\
    var(--button) 5%, transparent 80%) !important';
    document.querySelector('main').style.paddingTop = 'auto';
  }
  if (!window.queryLocalFonts) {
    window.queryLocalFonts = function() {
      return new Promise(res => res([]));
    };
  };
  Object.defineProperty(window, 'legacyApi', {
    get() {
      if (!('ultimate-calculator' in navigator.app))
        console.warn('Please avoid using %clegacyApi%c, use it specifically for other browsers.', codeStyle, '');
      return {
        close: function() { window.close() },
        getMenuNames: async function() { return ['File', 'Debug', 'Help', 'About'] },
        getZoom: async function() { return (window?.devicePixelRatio ?? 0).toFixed(4) },
        getZoomLevel: async function() { return 0 },
        isAlwaysOnTop: async function() { return false },
        isFullscreen: async function() { return false },
        isMaximized: async function() { return false },
        maximize: async function() { console.warn('Cannot maximize') },
        minHeight: 0,
        minWidth: 0,
        minimize: async function() { console.warn('Cannot minimize') },
        onWindowState: async function() { console.warn('%conWindowState%c is not defined', codeStyle, '') },
        openNewWindow: async function(loc) {
          let parentFrame = $n('section');
          let frame = $n('iframe');

          parentFrame.className = 'iframe-section';
          parentFrame.innerHTML = '<div class="dragger"></div>';
          parentFrame.style.width = '0';
          parentFrame.style.height = '0';

          let frameButtons = Object.assign($n('div'), { className: 'frame-buttons' });
          frameButtons.append(
            Object.assign($n('span'), {
              className: 'frame-title',
              innerHTML: '<i dim>Subwindow – Loading…</i><br><code class="frame-url">about:blank</code>'
            }),
            Object.assign($n('i'), { style: 'width:8px' }),
            Object.assign($n('button'), {
              className: 'btn-transparent reload-iframe',
              onclick: () => frame.contentWindow.location.reload(),
              innerHTML: '<i class="mdi mdi-reload"></i>',
            }),
            Object.assign($n('button'), {
              className: 'btn-transparent force-close-iframe',
              onclick: () => { frame.contentWindow.close(); parentFrame.remove(); },
              innerHTML: '<i class="mdi mdi-window-close"></i>',
            }),
          );
          parentFrame.append(frameButtons);
          parentFrame.append(frame);

          frame.src = loc + '#embed';
          frame.className = 'iframe-window';
          frame.addEventListener('load', () => {
            frameButtons.$('.frame-title').innerHTML =
              (frame.contentDocument?.title ?? 'Window').toSafeHTML() +
              `<br><code class="frame-url">${frame.src.toSafeHTML()}</code>`;
            const observer = new MutationObserver(() => {
              frameButtons.$('.frame-title').textContent = frame.contentDocument?.title ?? 'Window';
            });

            try {
              observer.observe(frame.contentDocument?.querySelector?.('title'), {
                childList: true,
                characterData: true,
                subtree: true,
              });
            } catch { console.warn('Cannot get title of subwindow'); }
          });
          $body.append(parentFrame);

          let handle = parentFrame.$('.dragger'),
          offsetX = 0, offsetY = 0, isDragging = false;

          handle.addEventListener('click', () => {
            frame.focus();
          });
          handle.addEventListener('pointerdown', (e) => {
            if (e.button !== 0) return;
            isDragging = true;
            handle.style.cursor = 'grabbing';
            const rect = parentFrame.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            handle.setPointerCapture(e.pointerId);
            e.preventDefault();
          });
          handle.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
            const width = parentFrame.offsetWidth;
            const height = parentFrame.offsetHeight;
            let newLeft = e.clientX - offsetX;
            let newTop = e.clientY - offsetY;
            newLeft = Math.max(4, Math.min(newLeft, window.innerWidth - width));
            newTop = Math.max(32+4, Math.min(newTop, window.innerHeight - height));
            parentFrame.style.left = `${newLeft}px`;
            parentFrame.style.top = `${newTop}px`;
          });
          handle.addEventListener('pointerup', (e) => {
            isDragging = false;
            handle.style.cursor = 'grab';
            handle.releasePointerCapture(e.pointerId);
          });
          handle.addEventListener('pointercancel', () => {
            isDragging = false;
            handle.style.cursor = 'grab';
          });
        },
        openNewFunctionPreviewWindow: function(fn) { this.openNewWindow(`./function-preview.html?function=${encodeURIComponent(String(fn))}`) },
        pid: function() { return -1 },
        screenshot: async function() { console.warn('Cannot screenshot') },
        setMinSize: async function() { console.warn('Cannot set minimum size') },
        showContextMenu: async function() {},
        simulateBackspace: async function() { window.dispatchEvent(new KeyboardEvent('keydown', {altKey:false,code:'Backspace',key:'Backspace'})) },
        simulateChar: async function(e) { window.dispatchEvent(new KeyboardEvent('keydown', {altKey:false,key:e,code:`${!/\d/i.test(e) ? 'Digit' : 'Key'}${e}`})) },
        simulateKey: async function(e) { console.warn('Cannot simulate key %c' + e, codeStyle) },
        system: function() { return { platform: navigator.userAgentData.platform.toLowerCase(), distro: null, wm: null, kernel: null, desktop: null } },
        toggleDevTools: async function() { console.warn('Cannot open DevTools') },
        toggleKeepOnTop: async function() { console.warn('Cannot toggle Always On Top') },
        toggleMaximize: async function() { console.warn('Cannot maximize/restore') },
        versions: async function() {
          return {
            node: null, chrome: navigator.app?.Chrome ?? navigator.app?.Firefox,
            electron: null, v8: null
          }
        },
        zoom: function(e) { console.warn('Cannot zoom ' + e) },
        uptime: function() { return performance.now() },
        refresh: function() { location.reload(true); },
        isOpenedByParent: async function() { return location.hash === '#embed' },
        changeOverlayColor: async function(color, symbolColor, height) {
          $('.global-actions').style.backgroundColor = color;
          $('.global-actions').style.color = symbolColor;
          $('html').style.setProperty('--global-actions-height', height + 'px');
        },
        appUptime: function() {
          return performance.now();
        },
        __proto__: {
          [Symbol.toStringTag]: 'LegacyElectronAPI'
        },
      };
    }
  });
  Object.defineProperty(navigator, 'app', {
    get() {
      return Object.fromEntries(
        ((navigator?.userAgent ?? '')
          .replace(/\([^\)]*\)/g, '')
          .match(/[\w\-_\.]*\/[0-9\-\._]+/gi) ?? [])
          .map(a => a.split('/'))
      );
    },
  });
  if ((!('api' in window) || window.api?.isNull) && !('ultimate-calculator'in navigator.app)) {
    window.api = legacyApi;
  };
} catch (e) {
  new Toast('An error has occured:\n' + e.toString(), 'warning', 'assets/icons/warning.svg');
}
if (!('ultimate-calculator' in navigator.app)) {
  setTimeout(() => {
    document.querySelector('.global-actions').style.display = 'none !important';
    document.querySelector('main').style.paddingTop = '6px !important';
  }, 500);
}

class CompressedStorage {
  /**
   * @param {string} namespace
   * @param {Compressor} compressor
   */
  constructor(namespace = 'app', compressor) {
    if (arguments.length < 2) throw new TypeError(`Failed to construct '${this.constructor.name}': 2 argument required, but only ${arguments.length} present.`);
    this.namespace = new (class Namespace extends String {})(namespace);
    this.compressor = compressor;

    Object.defineProperties(this.__proto__, {
      size: {
        enumerable: false,
        configurable: false,
        get() {
          let _size = 0;
          Object.keys(localStorage).map(key => {
            if (key.startsWith(this.namespace + ':')) _size++;
          });
          return _size;
        },
      },
    });
  }

  async set(key, value) {
    const json = JSON.stringify(value);
    const compressed = await this.compressor.compressText(json);
    localStorage.setItem(`${this.namespace}:${key}`, compressed);
  }
  async get(key) {
    const compressed = localStorage.getItem(`${this.namespace}:${key}`);
    if (!compressed) return null;

    const json = await this.compressor.decompressText(compressed);
    return JSON.parse(json);
  }
  remove(key) {
    localStorage.removeItem(`${this.namespace}:${key}`);
  }
}
class Compressor {
  /**
   * @param {Object} options
   * @param {'gzip' | 'deflate' | 'deflate-raw'} [options.format='gzip']
   * @param {'base64' | 'uint8' | 'blob'} [options.output='base64']
   */
  constructor(options = {}) {
    this.format = options.format ?? 'gzip';
    this.output = options.output ?? 'base64';
    // Validate format
    const validFormats = ['gzip', 'deflate', 'deflate-raw'];
    if (!validFormats.includes(this.format)) {
      throw new Error(`Invalid format: ${this.format}. Use: ${validFormats.join(', ')}`);
    }
    // Validate output
    const validOutputs = ['base64', 'uint8', 'blob'];
    if (!validOutputs.includes(this.output)) {
      throw new Error(`Invalid output: ${this.output}. Use: ${validOutputs.join(', ')}`);
    }
    // Check for CompressionStream support
    if (typeof CompressionStream === 'undefined') {
      throw new Error('CompressionStream is not supported in this environment');
    }
  }

  /**
   * Compress data
   * @param {string | Uint8Array | Blob | ArrayBuffer} data
   * @returns {Promise<string | Uint8Array | Blob>}
   */
  async compress(data) {
    const buffer = await this.#toUint8Array(data);

    const stream = new Blob([buffer]).stream();
    const compressedStream = stream.pipeThrough(new CompressionStream(this.format));
    const compressed = await new Response(compressedStream).arrayBuffer();

    return this.#formatOutput(new Uint8Array(compressed));
  }

  /**
   * Decompress data
   * @param {string | Uint8Array | Blob | ArrayBuffer} data
   * @returns {Promise<Uint8Array>}
   */
  async decompress(data) {
    const buffer = await this.#toUint8Array(data);

    const stream = new Blob([buffer]).stream();
    const decompressedStream = stream.pipeThrough(new DecompressionStream(this.format));
    const decompressed = await new Response(decompressedStream).arrayBuffer();

    return new Uint8Array(decompressed);
  }

  /**
   * Decompress and decode as text
   * @param {string | Uint8Array | Blob | ArrayBuffer} data
   * @returns {Promise<string>}
   */
  async decompressToText(data) {
    const bytes = await this.decompress(data);
    return new TextDecoder().decode(bytes);
  }

  /**
   * Compress a string and return a URL-safe base64 string
   * @param {string} text
   * @returns {Promise<string>}
   */
  async compressText(text) {
    const bytes = new TextEncoder().encode(text);
    const compressed = await this.compress(bytes);
    // Convert to base64
    if (typeof compressed === 'string') return compressed;

    return this.#uint8ToBase64(compressed).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  /**
   * Decompress a URL-safe base64 string back to text
   * @param {string} base64
   * @returns {Promise<string>}
   */
  async decompressText(base64) {
    // Restore base64 padding and characters
    let normalized = base64.replace(/-/g, '+').replace(/_/g, '/');

    const padding = 4 - (normalized.length % 4);
    if (padding !== 4) {
      normalized += '='.repeat(padding);
    }

    const bytes = this.#base64ToUint8(normalized);
    return this.decompressToText(bytes);
  }

  // ============================================================
  // Private helpers
  // ============================================================

  /**
   * @private
   */
  async #toUint8Array(data) {
    if (data instanceof Uint8Array) return data;
    if (data instanceof ArrayBuffer) return new Uint8Array(data);
    if (data instanceof Blob) return new Uint8Array(await data.arrayBuffer());
    if (typeof data === 'string') return new TextEncoder().encode(data);
    throw new TypeError(`Unsupported data type: ${typeof data}`);
  }

  /**
   * @private
   */
  #formatOutput(bytes) {
    switch (this.output) {
      case 'uint8':
        return bytes;
      case 'blob':
        return new Blob([bytes], { type: 'application/octet-stream' });
      case 'base64':
        return this.#uint8ToBase64(bytes);
      default:
        return bytes;
    }
  }

  /**
   * @private
   */
  #uint8ToBase64(bytes) {
    // Handle large arrays in chunks to avoid call stack overflow
    const CHUNK_SIZE = 0x8000;
    let result = '';

    for (let i = 0; i < bytes.length; i += CHUNK_SIZE) {
      const chunk = bytes.subarray(i, i + CHUNK_SIZE);
      result += String.fromCharCode(...chunk);
    }

    return btoa(result);
  }

  /**
   * @private
   */
  #base64ToUint8(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);

    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }

    return bytes;
  }
}
class Null {constructor(){this.valueOf=()=>null;this.toString=()=>'null';}}
let /** @type {math.Parser} */ parser = null;
try {
  parser = math.parser();
} catch { console.warn('%cmathjs%c is probably not imported', codeStyle, ''); }

let storage = new CompressedStorage('ultimate-calculator', new Compressor);

document.querySelector('.global-actions img').onclick = function(e) {
  if (e.ctrlKey) { api.toggleDevTools(); return; }
  let rect = e.target.getBoundingClientRect();
  api.showContextMenu(rect.left, rect.bottom + 8);
};

const favicon = document.getElementById('app-favicon');
if (favicon) favicon.src = location.protocol === 'uc:' ? '//local/favicon.svg' : '../favicon.svg';
console.debug('Added %cfavicon%c image', codeStyle, '');

window.addEventListener('blur', () => document.querySelector('.global-actions').style.opacity = 0.5);
window.addEventListener('focus', () => document.querySelector('.global-actions').style.opacity = 1);
if (!document.hasFocus()) window.dispatchEvent(new Event('blur'));
resizeTo(innerWidth, innerHeight);

var $body = document.querySelector('body');
var $main = document.querySelector('main');
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var $n = document.createElement.bind(document);
var /** @type {HTMLDialogElement} */ resultTypesDialog = $('#result-types-dialog');
var lastCursorNode;
var colors = Object.create(null, {
  red: { value: 'var(--color-red)' },
  orange: { value: 'var(--color-orange)' },
  yellow: { value: 'var(--color-yellow)' },
  lime: { value: 'var(--color-lime)' },
  green: { value: 'var(--color-green)' },
  cyan: { value: 'var(--color-cyan)' },
  blue: { value: 'var(--color-blue)' },
  purple: { value: 'var(--color-purple)' },
  pink: { value: 'var(--color-pink)' },
});
class Settings {
  /** @type {string} */ fontFamily = 'system-ui';
  /** @type {string} */ fontFamilyMonospace = 'monospace';
  /** @type {number} */ accentColor = 190;
  /** @type {'a11y-dark' | 'a11y-light' | 'androidstudio' | 'arduino-light' | 'atom-one-dark' | 'atom-one-light' | 'color-brewer' | 'github-dark' | 'github' | 'gml' | 'googlecode' | 'idea' | 'intellij-light' | 'lightfair' | 'lioshi' | 'monokai' | 'night-owl' | 'nord' | 'panda-syntax-dark' | 'shades-of-purple' | 'tokyo-night-dark' | 'vs' | 'vs2015' | 'xcode'} */ javascriptTheme =
    'a11y-dark';
  // /** @type {'dark' | 'light'} */
  // theme = 'dark';

  /** @type {boolean} */ colorButtons = true;
  /** @type {number} */ fontSize = 14;
  /** @type {'reduce' | 'no-reduce' | 'auto'} */ reduceMotion = 'auto';
  math = {
    /** @type {number} */ precision: 15,
    /** @type {'number' | 'BigNumber'} */ numberMode: 'number',
    /** @type {'rectangular' | 'polar'} */ complexMode: 'rectangular',
    /** @type {'double' | 'single'} */ quoteNotation: 'single',
    /** @type {',' | "'" | ' ' | ''} */ thousandsSeparator: ' ',
    /** @type {',' | "'" | ' ' | ''} */ thousandthsSeparator: ' ',
    /** @type {boolean} */ livePreview: true,
    /** @type {'deg' | 'rad' | 'grad'} */ angleMode: 'rad',
    /** @type {'auto'|'fixed'|'exponential'|'engineering'|'bin'|'oct'|'hex'} */ notation: 'auto',
    /** @type {number} */ maxSignificantDigits: 512,
  };
  history = { /** @type {number} */ maxEntries: 100 };

  /**
   * @typedef {{
   *   label?: string; description?: string; type: 'list' | 'check' | 'number' | 'content';
   *   values: ({ label: string; value: string } | SettingsContent)[]; min?: number; max?: number; default: number;
   *   id: string;
   * }} SettingsContent
   * @type {Object<string, SettingsContent>}
   */
  html = {
    general: {
      label: 'General',
      type: 'content',
      values: [
        (async () => {
          return {
            label: 'Font Family (Sans-serif)',
            values: [
              { label: 'System', value: 'system-ui' },
              { label: 'Sans serif', value: 'sans-serif' },
              { label: 'Serif', value: 'serif' },
              { label: 'Monospace', value: 'monospace' },
              ...[...new Set((await queryLocalFonts()).map(a => a.family))].map((/** @type {string} */ a) => {
                return { label: a, value: a };
              }),
            ],
            type: 'list',
            default: 0,
            id: 'fontFamily',
          };
        })(),
        (async () => {
          return {
            label: 'Font Family (Monospace)',
            values: [
              { label: 'System', value: 'system-ui' },
              { label: 'Sans serif', value: 'sans-serif' },
              { label: 'Serif', value: 'serif' },
              { label: 'Monospace', value: 'monospace' },
              ...[...new Set((await queryLocalFonts()).map(a => a.family))].map((/** @type {string} */ a) => {
                return { label: a, value: a };
              }),
            ],
            type: 'list',
            default: 3,
            id: 'fontFamilyMonospace',
          };
        })(),
        { label: 'Accent color', type: 'number', min: 0, max: 360, default: 220, id: 'accentColor' },
        {
          label: 'JS theme',
          values: [
            { label: 'A11Y Dark', value: 'a11y-dark' },
            { label: 'A11Y Light', value: 'a11y-light' },
            { label: 'Android Studio', value: 'androidstudio' },
            { label: 'Arduino Light', value: 'arduino-light' },
            { label: 'Atom One Dark', value: 'atom-one-dark' },
            { label: 'Atom One Light', value: 'atom-one-light' },
            { label: 'Color Brewer', value: 'color-brewer' },
            { label: 'GitHub Dark', value: 'github-dark' },
            { label: 'GitHub Light', value: 'github' },
            { label: 'GML', value: 'gml' },
            { label: 'Googlecode', value: 'googlecode' },
            { label: 'Idea Light', value: 'idea' },
            { label: 'Intellij Light', value: 'intellij-light' },
            { label: 'Lightfair', value: 'lightfair' },
            { label: 'Lioshi', value: 'lioshi' },
            { label: 'Monokai', value: 'monokai' },
            { label: 'Night Owl', value: 'night-owl' },
            { label: 'Nord', value: 'nord' },
            { label: 'Panda Syntax Dark', value: 'panda-syntax-dark' },
            { label: 'Shades Of Purple', value: 'shades-of-purple' },
            { label: 'Tokyo Night Dark', value: 'tokyo-night-dark' },
            { label: 'Visual Studio', value: 'vs' },
            { label: 'Visual Studio 2015', value: 'vs2015' },
            { label: 'Xcode', value: 'xcode' },
          ],
          type: 'list',
          default: 7,
          id: 'javascriptTheme',
        },
        { description: "Color the keys' background", type: 'check', default: 1, id: 'colorButtons' },
        { label: 'Font size', type: 'number', min: 4, max: 48, default: 14, id: 'fontSize' },
        {
          label: 'Reduce motion',
          type: 'list',
          values: [
            { label: 'Auto', value: 'auto' },
            { label: 'Reduce', value: 'reduce' },
            { label: 'Normal', value: 'no-reduce' },
          ],
          default: 0,
          id: 'reduceMotion',
        },
      ],
    },
    math: {
      label: 'Math',
      type: 'content',
      values: [
        { label: 'Number precision', type: 'number', min: 0, max: 100, default: 15, id: 'math.precision' },
        {
          label: 'Number mode',
          type: 'list',
          values: [
            { label: 'Big number', value: 'BigNumber' },
            { label: 'Number', value: 'number' },
          ],
          default: 0,
          id: 'math.numberMode',
        },
        {
          label: 'Complex mode',
          type: 'list',
          values: [
            { label: `Rectangular (a+bi)`, value: 'rectangular' },
            { label: `Polar (r∠θ)`, value: 'polar' },
          ],
          default: 0,
          id: 'math.complexMode',
        },
        {
          label: 'Quote notation',
          type: 'list',
          values: [
            { label: "Single (')", value: "'" },
            { label: 'Double (")', value: '"' },
          ],
          default: 1,
          id: 'math.quoteNotation',
        },
        {
          label: 'Thousands separator (123 456)',
          type: 'list',
          values: [
            { label: 'Comma (,)', value: ',' },
            { label: "Quote (')", value: "'" },
            { label: 'Space (" ")', value: ' ' },
            { label: 'None', value: '' },
          ],
          default: 2,
          id: 'math.thousandsSeparator',
        },
        {
          label: 'Thousandths separator (0.123 456)',
          type: 'list',
          values: [
            { label: 'Comma (,)', value: ',' },
            { label: "Quote (')", value: "'" },
            { label: 'Space (" ")', value: ' ' },
            { label: 'None', value: '' },
          ],
          default: 2,
          id: 'math.thousandthsSeparator',
        },
        {
          label: 'Live preview',
          description: "Evaluate the expression while you're typing",
          type: 'check',
          default: 0,
          id: 'math.livePreview',
        },
        {
          label: 'Angle mode',
          type: 'list',
          values: [
            { label: `Degrees (sin(π/2) = 1)`, value: 'deg' },
            { label: `Radians (sin(90) = 1)`, value: 'rad' },
            { label: `Degrees (sin(100) = 1)`, value: 'grad' },
          ],
          default: 1,
          id: 'math.angleMode',
        },
        {
          label: 'Result notation',
          type: 'list',
          values: [
            { label: 'Automatic', value: 'auto' },
            { label: 'Fixed', value: 'fixed' },
            { label: 'Scientific (2.55e+2)', value: 'exponential' },
            { label: 'Engineering (255e+0)', value: 'engineering' },
            { label: 'Binary (0b…)', value: 'bin' },
            { label: 'Octal (0o…)', value: 'oct' },
            { label: 'Hexadecimal (0x…)', value: 'hex' },
          ],
          default: 0,
          id: 'math.notation',
        },
        {
          label: 'Max significant digits',
          description: 'Shows the result in scientific format after 10<sup>n</sup> on any format',
          type: 'number',
          min: 100,
          max: 2048,
          default: 512,
          id: 'math.maxSignificantDigits',
        },
      ],
    },
    history: {
      label: 'History',
      type: 'content',
      values: [{ label: 'Max entries', type: 'number', min: 100, max: 1000, default: 100, id: 'history.maxEntries' }],
    },
  };
  /** @type {Map<string, Set<CallableFunction>>} */
  _listeners = new Map();
  constructor() {
    Object.defineProperties(this, {
      _listeners: { enumerable: false, writable: false, configurable: false },
      html: { enumerable: false, writable: false },
    });
  }

  /**
   * Add a listener for a specific key (or '*' for any)
   * @param {string} key - Setting key (e.g., 'theme', 'math.quoteNotation', '*')
   * @param {Function} callback - Called with ({ key, value, oldValue })
   */
  addEventListener(key, callback) {
    if (!this._listeners.has(key)) {
      this._listeners.set(key, new Set());
    }
    this._listeners.get(key).add(callback);
  }
  /**
   * Remove a listener
   * @param {string} key
   * @param {CallableFunction} callback
   */
  removeEventListener(key, callback) {
    this._listeners.get(key)?.delete(callback);
  }
  /**
   * Emit a change event
   */
  async #emit(key, value, oldValue) {
    const detail = { key, value, oldValue };

    // Fire key-specific listeners
    await [...(this._listeners.get(key) ?? [])]?.forEachAsync(async cb => {
      await cb(detail);
    });

    // Fire wildcard listeners
    await [...(this._listeners.get('*') ?? [])]?.forEachAsync(async cb => {
      await cb(detail);
    });
  }
  /**
   * Set a value and emit the event
   */
  set(key, value) {
    const oldValue = this.get(key);
    this.#setByPath(key, value);
    this.#emit(key, value, oldValue);
  }
  /**
   * Get a value by path
   */
  get(key) {
    return key.split('.').reduce((obj, k) => obj?.[k], this);
  }
  #setByPath(key, value) {
    const parts = key.split('.');
    const last = parts.pop();
    const target = parts.reduce((obj, k) => obj[k], this);
    target[last] = value;
  }

  static fromJSON(json) {
    delete json?.html;
    delete json?._listeners;
    return Object.assign(new this(), json);
  }
}
/** @type {Settings} */
var settings;

// #region    ======== SETTINGS ==============================
const setSettings = () => {
  $('html').style.setProperty('--accent', settings.accentColor);
  $('html').dataset.colorButtons = settings.colorButtons;
  $('html').dataset.reduceMotion = settings.reduceMotion;
  // Theme is automatic (from system)
  // $('html').setAttribute('data-theme', settings.theme);
  $body.style.fontSize = CSS.px(settings.fontSize);
  $('html').style.setProperty('--font-main', JSON.stringify(settings.fontFamily) + ', system-ui, sans-serif');
  $('html').style.setProperty('--font-mono', JSON.stringify(settings.fontFamilyMonospace) + ', system-ui, sans-serif');

  $body.setAttribute('quote', settings.math.quoteNotation === "'" ? 'single' : 'double');
  try {
    math.config({ precision: settings.math.precision - 0, number: settings.math.numberMode });
  } catch { console.warn('%cmathjs%c is probably not imported', codeStyle, ''); }
};
/*
 * Copy
 * Copy parsed expression
 * ---
 * Copy in fixed notation
 * Copy in scientific notation
 * Copy in engineering notation
 * Copy in binary notation
 * Copy in octal notation
 * Copy in hexadecimal notation
 */

let message = new BroadcastChannel('ultimate-calculator:settings');
message.addEventListener('message', (/** @type {MessageEvent} */ mes) => {
  console.log('data:', mes.data);
  if (
    mes.data?.type === 'ultimate-calculator-settings-changed'
    && mes.data?.changed === true
  ) {
    storage.get('settings').then(data => {
      settings = Settings.fromJSON(mes.data.settings);
      settings.addEventListener('*', async () => {
        message.postMessage({ type: 'ultimate-calculator-settings-changed', changed: true, settings: JSON.parse(JSON.stringify(settings)) });
        setSettings();
        await storage.set('settings', settings);
        console.debug('Saved settings');
      });
      setSettings();
    });
  }
});
window.addEventListener('beforeunload', () => {
  message.close();
});

storage.get('settings').then(value => {
  settings = Settings.fromJSON(value);
  setSettings();
  console.debug('Loaded settings');
  settings.addEventListener('*', async () => {
    message.postMessage({ type: 'ultimate-calculator-settings-changed', changed: true, settings: JSON.parse(JSON.stringify(settings)) });
    setSettings();
    await storage.set('settings', settings);
    console.debug('Saved settings');
  });
});
// #endregion ======== SETTINGS ==============================

var fullUnicodeMap = {
  // ─── Roots ───
  '√': 'sqrt', '∛': 'cbrt', '∜': 'fourthRoot',

  // ─── Greek Letters ───
  // α: 'alpha', β: 'beta', γ: 'gamma', δ: 'delta',
  // ε: 'epsilon', ζ: 'zeta', η: 'eta', θ: 'theta',
  // ι: 'iota', κ: 'kappa', λ: 'lambda', μ: 'mu',
  // ν: 'nu', ξ: 'xi', ο: 'omicron', π: 'pi',
  // ρ: 'rho', σ: 'sigma', τ: 'tau', υ: 'upsilon',
  // φ: 'phi', χ: 'chi', ψ: 'psi', ω: 'omega',
  // Α: 'Alpha', Β: 'Beta', Γ: 'Gamma', Δ: 'Delta',
  // Ε: 'Epsilon', Ζ: 'Zeta', Η: 'Eta', Θ: 'Theta',
  // Ι: 'Iota', Κ: 'Kappa', Λ: 'Lambda', Μ: 'Mu',
  // Ν: 'Nu', Ξ: 'Xi', Ο: 'Omicron', Π: 'Pi',
  // Ρ: 'Rho', Σ: 'Sigma', Τ: 'Tau', Υ: 'Upsilon',
  // Φ: 'Phi', Χ: 'Chi', Ψ: 'Psi', Ω: 'Omega',
  // µ: 'mu',

  // ─── Superscripts ───
  '⁰': '^0', '¹': '^1', '²': '^2', '³': '^3',
  '⁴': '^4', '⁵': '^5', '⁶': '^6', '⁷': '^7',
  '⁸': '^8', '⁹': '^9', '⁻': '^-', '⁺': '^+',

  // ─── Subscripts ───
  '₀': '_0', '₁': '_1', '₂': '_2', '₃': '_3',
  '₄': '_4', '₅': '_5', '₆': '_6', '₇': '_7',
  '₈': '_8', '₉': '_9',

  // ─── Fractions ───
  '½': '1/2', '⅓': '1/3', '⅔': '2/3', '¼': '1/4',
  '¾': '3/4', '⅕': '1/5', '⅖': '2/5', '⅗': '3/5',
  '⅘': '4/5', '⅙': '1/6', '⅚': '5/6', '⅛': '1/8',
  '⅜': '3/8', '⅝': '5/8', '⅞': '7/8',

  // ─── Operators ───
  '×': '*', '⋅': '*', '·': '*', '÷': '/',
  '⁄': '/', '−': '-', '–': '-', '—': '-',
  '≠': '!=', '≤': '<=', '≥': '>=', '≈': '~=',
  '∞': 'Infinity', '∠': 'cis ',

  // ─── Others ───
  '→': ' to ',
  '←': '<-',
  '↔': '<->',
  '∂': 'derivative',
  '∫': 'integral',
  '∑': 'Sum',
  '∏': 'Product',
  '⊥': 'perp',
  '∥': 'parallel',
  '∘': 'circle',
  '•': 'dot',
  '◦': 'smallcircle',
  '‰': 'ppk', '‱': 'pp10k',
};
var N = null;
Array.prototype.forEachAsync = async function(predicate) {
  let i = 0;
  for (const item of this) {
    if (await predicate(item, i, this)) return item;
    i++
  }
  return undefined
};
Array.prototype.mapAsync = async function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(await callback(this[i], i, this))
  }
  return result
};
Object.defineProperty(Array.prototype, 'forEachAsync', { enumerable: false, configurable: false, writable: false });
Object.defineProperty(Array.prototype, 'mapAsync', { enumerable: false, configurable: false, writable: false });

var o = {
  generateUID() {
    return [...crypto.getRandomValues(new Uint8Array(12))].map(a => a.toString(16).padStart(2, 0)).with(0, 'id-').join('');
  },
  /**
   *
   * @param {string} name
   * @param {any} value
   * @returns {object}
   */
  createObject(name = 'Object', value) {
    const proto = {};
    Object.defineProperty(proto, Symbol.toStringTag, {
      enumerable: false, configurable: false, value: name,
    });
    const obj = Object.create(proto);
    Object.assign(obj, value);
    return obj;
  },
  /**
   * @param {string} name
   * @param {Array} value
   * @returns {Array<any>}
   */
  createArray(name, value = []) {
    const className = name.replace(/[\x20-\x2F\x3A-\x40\x5B-\x5E\x60\x7B-\x7E]/gi, '') || 'CustomArray';

    const dynamicClass = new Function(
      'items',
      `class ${className} extends Array{};return new ${className}(...items);`
    );

    return dynamicClass(value);
  },
  rgb(r = 0, g = 0, b = 0) { return `rgb(${r}, ${g}, ${b})` },
  hsl(h = 0, s = 100, l = 50) {
    s = s / 100; l = l / 100;

    let c = s * (1 - Math.abs(2 * l - 1));
    let huePrime = h / 60;
    let x = c * (1 - Math.abs((huePrime % 2) - 1));
    let arr = (
      0 <= huePrime <= 1 ? [c, x, 0] :
      1 <= huePrime <= 2 ? [x, c, 0] :
      2 <= huePrime <= 3 ? [0, c, x] :
      3 <= huePrime <= 4 ? [0, x, c] :
      4 <= huePrime <= 5 ? [x, 0, c] :
      5 <= huePrime <= 6 ? [c, 0, x] : [c, x, 0]
    );
    let m = l - (c / 2);
    return o.rgb(...arr.map(a => 255 * (a + m)));
  },
  evalString: str => eval(`\`${str.replace(/`/g, '\\`')}\``),
  runJSParse: async el => {
    var cmd = `return (async function() {
      ${el.textContent}
    })()`;
    // globalConsole.log('cmd:', cmd);
    try {
      el.outerHTML = await new Function(cmd)();
    } catch (e) {
      el.outerHTML = 'Error: <code>' + e + '</code>';
    }
  },
  parsePath: (p = '') => {
    if (p === '/') return '<f onclick="loadFolder(&quot;/&quot;)">/</f>';
    return p
      .split('/')
      .map(
        (a, i, { length }) =>
          `<f onclick="loadFolder(${o.safeHTML(
            JSON.stringify(join('/', ...p.split('/'), ...Array(length - i - 1).fill('..')))
          )})">${o.safeHTML(a) === '' ? '/' : o.safeHTML(a)}</f>`
      )
      .join('<sep></sep>');
  },
  parseStringPath: (text = '') => (text === '/' ? '/ ›' : '/' + (text === '' ? '/' : text).split('/').join(' › ')),
  syncTitle() {
    const target = $('title');
    const observer = new MutationObserver(() => {
      $('.title').innerHTML = document.title
        .split(' | ')
        .map(a => a.toSafeHTML())
        .join('<m>|</m>');
    });
    observer.observe(target, { characterData: true, subtree: true, childList: true });
    delete o.syncTitle;
  },
  syncTheme() {
    function hslUnparsedToHex(hsl) {
      return (
        '#' +
        o.hsl(
            ...hsl
              .toString()
              .replaceAll(/\s|%/g, '')
              .match(/\([^\)]*\)/g)[0]
              .slice(1, -1)
              .split(',')
              .slice(0, 3)
          ).match(/\d+\.\d+|\d+/g)
          .map(a => parseInt(a).toString(16).padStart(2, 0))
          .join('')
      );
    }
    matchMedia('(prefers-color-scheme: dark)').onchange = event => {
      $('html').dataset.theme = event.matches ? 'dark' : 'light';
      api.changeOverlayColor(
        hslUnparsedToHex($('html').computedStyleMap().get('--bg-light')),
        hslUnparsedToHex($('html').computedStyleMap().get('--text')),
        32
      );
    };
    $('html').dataset.theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    api.changeOverlayColor(
      hslUnparsedToHex($('html').computedStyleMap().get('--bg-light')),
      hslUnparsedToHex($('html').computedStyleMap().get('--text')),
      32
    );
    delete o.syncTheme;
  },
  syncContrast() {
    const stripContrast = theme => theme.endsWith('-contrast') ? theme.slice(0, -9) : theme;
    const apply = () => {
      const base = stripContrast($('html').dataset.theme);
      $('html').dataset.theme = matchMedia('(prefers-contrast: more)').matches ? (base + '-contrast') : base;
    };
    matchMedia('(prefers-contrast: more)').onchange = () => apply();
    apply();
    delete o.syncContrast;
  },
  formatTime: e =>
    !e && e !== 0 ? '–:––.–' : (
      e < 3600 ?
      `${Math.floor(e / 60)}:${Math.floor(e / 10) % 6}${Math.floor(e) % 10}.${Math.floor(10 * e) % 10}`
      : `${Math.floor(e / 3600)}:${Math.floor(e / 600) % 6}${Math.floor(e / 60) % 10}:${Math.floor(e / 10) % 6}${Math.floor(e) % 10}.${Math.floor(10 * e) % 10}`
    ),
  formatUnit: (number, unit, interval = 1000) => {
    if (!Number.isFinite(number)) return '-- ' + unit;
    const units = [unit, 'k' + unit, 'M' + unit, 'G' + unit, 'T' + unit];
    let unitIndex = 0;
    let value = number;
    while (value >= interval && unitIndex < units.length - 1) {
      value /= interval;
      unitIndex++;
    }
    return `${value.toFixed(2)} ${units[unitIndex]}`;
  },
  getCursorNodeInfo() {
    const sel = window.getSelection();
    if (!sel.rangeCount) return null;

    const range = sel.getRangeAt(0);
    return {
      startContainer: range.startContainer,
      startOffset: range.startOffset,
      endContainer: range.endContainer,
      endOffset: range.endOffset,
      // The actual text node and offset
      node: range.startContainer,
      offset: range.startOffset,
    };
  },
  setCursorPosition(element, position) {
    if (!element?.isContentEditable) return false;

    const range = document.createRange();
    const sel = window.getSelection();

    // Walk through text nodes to find the right position
    let charCount = 0;
    let foundNode = null;
    let foundOffset = 0;

    function walk(node) {
      if (foundNode) return;

      if (node.nodeType === Node.TEXT_NODE) {
        const length = node.textContent.length;
        if (charCount + length >= position) {
          foundNode = node;
          foundOffset = position - charCount;
          return;
        }
        charCount += length;
      } else {
        for (const child of node.childNodes) {
          walk(child);
          if (foundNode) return;
        }
      }
    }

    walk(element);

    if (foundNode) {
      range.setStart(foundNode, Math.max(Math.min(foundOffset, foundNode.textContent.length), 0));
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
      return true;
    }

    // Fallback: put cursor at the end
    range.selectNodeContents(element);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    return false;
  },
  /**
   * Builds and shows a context menu for a button, given an Electron `MenuItemConstructorOptions`-style template.
   * Supported fields per item: `label`, `type` (`'normal'|'separator'|'submenu'|'checkbox'|'radio'`),
   * `click`/`radioGroup`, `enabled`, `checked`, `accelerator`, `submenu`.
   *
   * @typedef {Button | HTMLElement} ContextMenuTarget
   * @typedef {Electron.MenuItemConstructorOptions | 'separator' | null | undefined} ContextMenuItem
   *
   * @param {ContextMenuTarget} target
   * @param {Array<ContextMenuItem>} items
   * @returns {() => void} a function that closes the menu
   */
  contextMenu(target, items) {
    const existing = $('.context-menu');
    const anchor = target?.button ?? target;
    const /** @type {Set<HTMLDivElement>} */ openPopovers = new Set();
    let submenuTimer = null;
    let /** @type {HTMLDivElement | null} */ activeSub = null;

    let closeAll = () => {
      clearTimeout(submenuTimer);
      activeSub = null;
      for (const subPop of openPopovers) {
        if (subPop.className !== 'context-menu') subPop.remove?.();
      }
      openPopovers.clear();
      existing.hidePopover?.();
      existing.innerHTML = '';
    };

    /**
     * @param {HTMLDivElement} pop
     * @param {number} x
     * @param {number} y
     */
    const positionMenu = (pop, x, y) => {
      pop.style.visibility = 'hidden';
      // measure, then clamp
      const w = pop.offsetWidth;
      const h = pop.offsetHeight;
      pop.style.visibility = '';
      const nx = Math.min(x, window.innerWidth - w - 4);
      const ny = Math.min(y, window.innerHeight - h - 4);
      pop.style.left = Math.max(0, nx) + 'px';
      pop.style.top = Math.max(0, ny) + 'px';
    };

    /**
     * @param {ContextMenuItem} item
     * @param {HTMLDivElement} pop
     */
    const buildRow = (item, pop) => {
      if (item === 'separator' || item?.type === 'separator') {
        pop.append(Object.assign($n('hr'), { className: 'hr' }));
        return;
      }
      if (item === null || item === undefined) return;

      const isLabel =
        item.type === 'label' &&
          (item.label && item.click === undefined && !item.submenu &&
          item.type !== 'checkbox' && item.type !== 'radio' && !('enabled' in item));

      if (isLabel) {
        const label = Object.assign($n('div'), { className: 'label' });
        label.textContent = item.label ?? '';
        pop.append(label);
        return;
      }

      const row = $n('button');
      row.className = 'item';
      row.type = 'button';
      if (item.enabled === false) { row.classList.add('disabled'); row.disabled = true; }

      // checkbox / radio marker
      if (item.type === 'checkbox' || item.type === 'radio') {
        const marker = $n('span');
        marker.className = 'marker';
        marker.innerHTML = item.checked
          ? '<i class="mdi mdi-checkbox-marked-outline"></i>'
          : '<i class="mdi mdi-checkbox-blank-outline"></i>';
        marker.style.minWidth = '1.1em';
        marker.style.textAlign = 'center';
        row.append(marker);
        if (item.checked) row.classList.add('checked');
      }

      const text = Object.assign($n('span'), { className: 'text' });
      text.textContent = item.label ?? item.role ?? '';
      text.style.flex = '1';
      row.append(text);

      if (item.accelerator) {
        const acc = Object.assign($n('span'), { className: 'accelerator' });
        acc.textContent = item.accelerator;
        row.append(acc);
      }

      // submenu
      if (item.submenu) {
        const chevron = $n('span');
        chevron.innerHTML = '<i class="mdi mdi-chevron-right"></i>';
        chevron.style.opacity = '0.5';
        row.append(chevron);
        row.classList.add('has-submenu');

        let subPop = null;
        const closeSub = () => {
          if (subPop) {
            // only hide this row's submenu if it's still the active one
            if (activeSub === subPop) activeSub = null;
            subPop.remove();
            openPopovers.delete(subPop);
            subPop = null;
          }
        };
        const openSub = () => {
          // clearTimeout(submenuTimer);
          // a different row's submenu is already showing -> replace it
          if (activeSub && activeSub !== subPop) {
            activeSub.remove();
            openPopovers.delete(activeSub);
            activeSub = null;
          }
          // forbidden line :3
          if (subPop) return;
          subPop = Object.assign($n('div'), { className: 'context-menu sub' });
          document.body.append(subPop);
          for (const subItem of item.submenu) buildRow(subItem, subPop);
          openPopovers.add(subPop);
          activeSub = subPop;
          const pr = row.getBoundingClientRect();
          positionMenu(subPop, pr.right + 8, pr.top - 4);
          // keep it open while hovering over the submenu itself
          subPop.addEventListener('mouseenter', () => clearTimeout(submenuTimer));
          subPop.addEventListener('mouseleave', () => {
            submenuTimer = setTimeout(closeSub, 250);
          });
        };
        row.addEventListener('mouseenter', openSub);
        row.addEventListener('mouseleave', () => {
          submenuTimer = setTimeout(closeSub, 250);
        });
      }

      const enabled = item.enabled !== false;
      if (enabled) {
        row.addEventListener('click', () => {
          if (item.type === 'checkbox' || item.type === 'radio') item.checked = !item.checked;
          item.click?.(item);
          closeAll();
        });
      }

      pop.append(row);
    };

    const open = () => {
      closeAll();
      const pop = existing;
      pop.innerHTML = '';
      pop.setAttribute('popover', 'manual');
      if (!pop.isConnected) document.body.append(pop);
      for (const item of items) buildRow(item, pop);
      openPopovers.add(pop);
      pop.showPopover();
      const rect = anchor?.getBoundingClientRect?.() ?? { left: window.innerWidth / 2, bottom: window.innerHeight / 2 };
      positionMenu(pop, rect.left, rect.bottom + 6);

      const isInsideMenu = (e) => e.composedPath?.().some(n =>
        openPopovers.has(n) || (n instanceof Element && n.classList?.contains('context-menu'))
      );
      const onDocDown = (e) => { if (!isInsideMenu(e)) closeAll(); };
      const onDocKeydown = (e) => { if (e.key === 'Escape') closeAll(); };
      document.addEventListener('mousedown', onDocDown, true);
      document.addEventListener('keydown', onDocKeydown);
      const origClose = closeAll;
      closeAll = () => {
        document.removeEventListener('mousedown', onDocDown, true);
        document.removeEventListener('keydown', onDocKeydown);
        origClose();
      };
    };

    open();
    return () => closeAll();
  },
  /**
   * @typedef {object} K
   *
   * @param {K} obj
   * @param {ConstructorParameters<K>} Ctor
   * @param {string} path
   * @param {WeakSet} seen
   * @param {boolean} setObject
   * @returns {string}
   */
  findByType: function(obj, Ctor, path = '', seen = new WeakSet(), setObject = true) {
    if (setObject) window.object = obj;
    if (obj && typeof obj === 'object') {
      if (seen.has(obj)) return undefined;
      seen.add(obj);
      if (obj.constructor === Ctor) {
        return path || obj;
      }
      for (const [key, val] of Object.entries(obj)) {
        const result = o.findByType(val, Ctor, path ? [path, key].flat(2) : key, seen, false);
        if (result !== undefined) {
          return eval(`window.object${result.map(a => `?.[${JSON.stringify(a)}]`).join('')}`);
        }
      }
    }
  },
  /**
   *
   * @param {string} fontFamily
   * @param {string} url
   * @param {FontFaceDescriptors} options
   * @returns {Promise<FontFace> | null}
   */
  async loadFont(fontFamily, url, options = {}) {
    const formattedFont = Object.entries(options).map(a => `${a[0]}: ${a[1]}`).join(', ');
    const format = font => Object.keys(font.__proto__).map(a => `${a}: ${font[a]}`).join(', ');
    if ([...document.fonts].map(a => format(a)).includes(format(new FontFace(fontFamily, `url(${url})`, options)))) {
      console.warn(`Already loaded %c${fontFamily}%c font (${formattedFont}), not loading`, codeStyle, '');
      return;
    }
    const font = new FontFace(fontFamily, `url(${url})`, options);
    try {
      const loaded = await font.load();
      document.fonts.add(loaded);
      console.debug(`Loaded %c${fontFamily}%c font (${formattedFont})`, codeStyle, '');
      return loaded;
    } catch (error) {
      console.error(`Failed to load font %c${fontFamily}%c. Reason:\n%s`, codeStyle, '', error.toString());
      return null;
    }
  },
  async sleep(time = 0) { return await new Promise(r => setTimeout(r, time)); },
};
var m = {
  /**
   * @param {string | any} text
   * @param {FormatOptions} debug
   *
   * @typedef {{
   *  formatNumber: boolean; formatSymbols: boolean;
   *  notation: 'auto' | 'fixed' | 'exponential' | 'engineering' | 'hex' | 'bin' | 'oct';
   *  debug: boolean;
   * }} FormatOptions
   * @returns {string}
   */
  format(text, debug) {
    debug ??= false;
    let localConsole = { log: function() {} };
    if (debug === true || debug.debug === true) localConsole = console;
    let parsedText = text;
    console.debug('Ran %cm.format%c %o', codeStyle, '', {text, debug});
    function formatNumber(str, interval = 3) {
      str = String(str);

      // Matches: optional sign, integer, optional decimal, optional exponent
      // Lookbehinds/lookaheads ensure it's a standalone number, not part of a word.
      const numberRegex = /(?<![\w.])([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)(?![\w.])/g;

      return str.replace(numberRegex, (match) => {
        try {
          return _formatNumber(match, interval);
        } catch (e) {
          return match; // Fallback to original if formatting fails
        }
      });
    }
    function _formatNumber(n, interval = 3) {
      n = String(n);
      const sign = n.startsWith('-') ? '-' : (n.startsWith('+') ? '+' : '');
      if (sign) n = n.slice(1);

      const eIndex = n.search(/[eE]/);
      let exponent = '';
      if (eIndex !== -1) {
        exponent = n.slice(eIndex);
        n = n.slice(0, eIndex);
      }

      const dotIndex = n.indexOf('.');
      let intPart = dotIndex === -1 ? n : n.slice(0, dotIndex);
      let fracPart = dotIndex === -1 ? '' : n.slice(dotIndex + 1);

      let formattedInt = '';
      if (intPart) {
        const chunks = intPart.match(new RegExp(`\\d{1,${interval}}(?=(\\d{${interval}})*$)`, 'g'));
        formattedInt = chunks ? chunks.join(settings.get('math.thousandsSeparator')) : intPart;
      }
      let formattedFrac = '';
      if (fracPart) {
        const chunks = fracPart.match(new RegExp(`\\d{1,${interval}}`, 'g'));
        formattedFrac = chunks ? chunks.join(settings.get('math.thousandthsSeparator')) : fracPart;
      }
      return sign + formattedInt + (dotIndex !== -1 ? '.' : '') + formattedFrac + exponent;
    }

    // let parsedText = {};
    // if (typeof text !== 'string') parsedText = text;
    // else parsedText = math.parse(String(text).replaceAll('...', '___three_dots___ '));
    const constants = {
      greek: {
        Alpha: 'Α', Beta: 'Β', Gamma: 'Γ',
        Delta: 'Δ', Epsilon: 'Ε', Zeta: 'Ζ',
        Eta: 'Η', Theta: 'Θ', Iota: 'Ι',
        Kappa: 'Κ', Lambda: 'Λ', Mu: 'Μ',
        Nu: 'Ν', Xi: 'Ξ', Omicron: 'Ο',
        Pi: 'Π', Rho: 'Ρ', Sigma: 'Σ',
        Tau: 'Τ', Upsilon: 'Υ', Phi: 'Φ',
        Chi: 'Χ', Psi: 'Ψ', Omega: 'Ω',
        alpha: 'α', beta: 'β', gamma: 'γ',
        delta: 'δ', epsilon: 'ε', zeta: 'ζ',
        eta: 'η', theta: 'θ', iota: 'ι',
        kappa: 'κ', lambda: 'λ', mu: 'μ',
        nu: 'ν', xi: 'ξ', omicron: 'ο',
        pi: 'π', rho: 'ρ', sigma: 'σ',
        tau: 'τ', upsilon: 'υ', phi: 'φ',
        chi: 'χ', psi: 'ψ', omega: 'ω',
      },
      LN2: 'ln(2)',
      LN10: 'ln(10)',
      LOG2E: 'log(e)',
      LOG10E: 'log<sub>10</sub>\u2006e',
      SQRT2: '<calc-func calc-type="√"><calc-num>2</calc-num></calc-func>',
      SQRT1_2: `<calc-func calc-type="√"><calc-num>½</calc-num></calc-func>`,
      Infinity: '∞',
      NaN: 'NaN',
      null: 'null',
      undefined: 'undefined',

      ___three_dots___: '…',
    };
    /**
     * @param {math.MathNode} arg
     * @param {string} type
     * @returns {string}
     */
    function check(arg) {
      let type = (arg?.type ?? typeof arg).replace(/\d/gi, '').toLowerCase();
      localConsole.log('(ƒ) check', 'type', type);
      if (arg?.isFunctionNode) return checkFunctionNode(arg);
      if (arg?.isOperatorNode) return checkOperatorNode(arg);
      if (arg?.isBigNumber || arg?.__proto__ === BigInt.prototype || arg?.__proto__ === Number.prototype ||
        arg?.isComplex || arg?.isConstantNode || arg?.__proto__ === String.prototype || arg?.__proto__ === Boolean.prototype)
        return checkConstantNode(arg);
      if (arg?.isSymbolNode) return checkSymbolNode(arg);
      if (arg?.isParenthesisNode) return `<calc-op>(</calc-op>${check(arg.content)}<calc-op>)</calc-op>`;
      if (arg?.isAssignmentNode) return checkAssignmentNode(arg);
      if (arg?.isFunctionAssignmentNode) return checkFunctionAssignmentNode(arg);
      if (arg?.constructor?.name === 'Array') return checkArray(arg);
      if (arg?.isArrayNode) return checkArrayNode(arg);
      if (arg?.isMatrix || arg?.isDenseMatrix || arg?.isSparseMatrix) return checkMatrix(arg);
      if (arg?.isRangeNode) return checkRangeNode(arg);
      if (arg?.isConditionalNode) return checkConditionalNode(arg);
      if (arg?.isFraction) return checkFraction(arg);
      if (arg?.isUnit) return checkUnit(arg);
      if (arg?.isObjectNode) return checkObjectNode(arg);
      if (arg?.isIndex) return checkArray(arg.toArray());
      if (arg?.isAccessorNode) return checkAccessorNode(arg);
      if (arg?.isIndexNode) return checkIndexNode(arg);
      if (arg?.isResultSet) return [1, 0].includes(arg.entries.length) ? check(arg.entries[0]) : checkArray(arg.entries);
      if (arg?.isHelp) return checkHelp(arg);
      if (arg?.isBlockNode) return checkBlockNode(arg);

      if (arg?.__proto__ === Object.prototype) return checkObject(arg);
      if (arg?.__proto__ === Date.prototype) return checkDate(arg);
      if (arg?.__proto__ === Function.prototype) return checkFunction(arg);
      if (arg === null) return '<calc-null></calc-null>';
      if (arg === undefined) return '<calc-undef></calc-undef>';
      else
        return `<calc-i><calc-obj>${math.typeOf(arg).replace(/\d/gi, '').toSafeHTML()}</calc-obj></calc-i><calc-op>&lt;</calc-op>${String(arg).toSafeHTML()}<calc-op>&gt;</calc-op>`;
    }
    /**
     * @param {math.FunctionNode} arg
     * @returns {string}
     */
    function checkFunctionNode(arg) {
      let el = $n('calc-func');
      el.setAttribute('calc-type', arg.fn.toString());
      el.innerHTML =
        `<span class="func-name">${check(arg.fn)}</span><calc-op>(</calc-op>`+
        arg.args
          .map((a, i) => {
            localConsole.log(`(ƒ) functionNode #${i}`, 'type', a.type);
            return check(a);
          })
          .join('<calc-sep>,</calc-sep>') +
        '<calc-op>)</calc-op>';
      return el.outerHTML;
    }
    /**
     * @param {math.OperatorNode} arg
     * @returns {string}
     */
    function checkOperatorNode(arg) {
      localConsole.log('(ƒ) operatorNode', 'arg', arg);
      if (arg.args.length === 1) {
        const op = arg.op || arg.fn || '-';
        const child = check(arg.args[0]);
        let result = `<calc-op unary>${op === '*' ? '×' : op}</calc-op>`;
        if (['+','-','~','not'].includes(op)) result += child;
        else result = [child, result].join('');
        return result;
      }
      if (arg.args.length === 2) {
        const left = check(arg.args[0].isParenthesisNode ? arg.args[0].content : arg.args[0]);
        const op = arg.op || arg.fn || '?';
        const right = check(arg.args[1].isParenthesisNode ? arg.args[1].content : arg.args[1]);
        return op === '/'
          ? `<calc-div div-type="divide"><span>${left}</span><hr><span><div class="division">/</div>${right}</span></calc-div>`
          : op === '^'
            ? `<calc-pow><span>${left}</span><span>${right}</span></calc-pow>`
            : // : arg.args[1]?.args?.[1]?.name === 'i' || arg.args[1]?.args?.[0]?.name === 'i'
              // : math.complex(arg.toString().replace(/\s/g,'')).im !== 0
              // ? `<calc-op>(</calc-op>${
              //   checkConstantNode(math.complex(arg.toString().replace(/\s/g,'')).re)
              // }<calc-sep>,</calc-sep>${
              //   checkConstantNode(math.complex(arg.toString().replace(/\s/g,'')).im)
              // }<calc-op>)</calc-op>`
              `${left}${op === '*' ? (arg.implicit ? '' : '<calc-op>×</calc-op>') : `<calc-op>${op}</calc-op>`}${right}`;
      }
      // if (arg.args.length > 2) {
      //   const op = arg.op || arg.fn || '+';
      //   return arg.args
      //     .map(a => check(a, a.type))
      //     .join(`<calc-op>${op === '*' ? '×' : op}</calc-op>`);
      // }

      return `<calc-error error-level="parse"><span>Unknown operator: ${arg}<span></calc-error>`;
    }
    /**
     * @param {math.ConstantNode} arg
     * @returns {string}
     */
    function checkConstantNode(arg) {
      localConsole.log('(ƒ) constantNode', 'arg', arg);
      const value = String(arg?.value ?? arg);
      const argType = ((arg?.value ?? arg).type ?? (
        typeof arg?.value === 'undefined' ? typeof arg : typeof arg?.value
      )).toLowerCase();
      // Only notations mathjs understands are accepted; anything else is 'auto'.
      // The settings fallback only applies when the caller passes an options
      // object, matching the previous `debug.notation ??= settings…` behaviour
      // (`debug` is usually `false`/`true`, where that assignment was a no-op).
      const requestedNotation = debug && typeof debug === 'object'
        ? (debug.notation ?? settings?.get?.('math.notation'))
        : undefined;
      const notation = ['auto', 'fixed', 'exponential', 'engineering', 'bin', 'oct', 'hex'].includes(requestedNotation)
        ? requestedNotation
        : 'auto';
      const radixBase = { bin: 2, oct: 8, hex: 16 }[notation];
      const isRadix = radixBase !== undefined;
      const expSettings = { upperExp: 10, lowerExp: -9 };
      localConsole.log('(ƒ) constantNode', 'argValueType', argType, 'notation', notation);

      /** `mantissa × 10^exponent`, e.g. `7.4735 × 10^4`; `× 10^0` is dropped. */
      function replacedText(mantissa, exponent) {
        const power = exponent - 0;
        if (!power) return mantissa;
        const pow = `<calc-pow><span>10</span><span>${formatNumber(power)}</span></calc-pow>`;
        return mantissa - 0 === 1 ? pow : `${mantissa}<calc-op>×</calc-op>${pow}`;
      }

      if (['number', 'bignumber', 'bigint'].includes(argType)) {
        const bignum = math.bignumber(value);
        const absTolReached = bignum.dp() > math.config().precision;

        let text;
        const maxSignificantDigits = settings?.get?.('math.maxSignificantDigits') ?? 512;
        if (['fixed', 'bin', 'oct', 'hex'].includes(notation) && bignum.isFinite()
          && Math.abs(bignum.e) >= maxSignificantDigits) {
          // Very long values are split into `mantissa × base^exponent`. The
          // magnitude is used together with `floor` (it is non-negative, so this
          // equals truncation): a negative input would otherwise take log(-n)
          // and produce a Complex/garbage result.
          const base = math.bignumber(radixBase ?? 10);
          const [fraction, exponent] = math.evaluate('[b^(log(n, b) % 1), floor(log(n, b))]', {
            n: bignum.abs(),
            b: base,
          }).toArray();
          const mantissa = isRadix
            ? String(math.format(fraction, { notation }))
            : formatNumber(math.format(fraction, { notation }), 3);
          const head = math.equal(fraction, 1) ? '' : `${mantissa}<calc-op>×</calc-op>`;
          text = `${bignum.isNegative() ? '-' : ''}${head}`
            + `<calc-pow><span>${base}</span><span>${math.format(exponent, { notation: 'fixed' })}</span></calc-pow>`;
        } else {
          text = String(math.format(absTolReached ? (arg?.value ?? arg) : bignum, {
            notation,
            ...expSettings,
          }));
          if (isRadix) {
            // Radix digits are not decimal: `0x123ef` is a single number whose `e`
            // is a digit, and decimal separators must never be inserted into it.
          } else {
            // Split the exponent *before* formatting, so separators only ever
            // touch the mantissa (`1.5e+10`, not `1.5e +10`).
            const exponentMatch = /^(.*?)[eE]([+-]?\d+)$/.exec(text);
            text = exponentMatch
              ? replacedText(formatNumber(exponentMatch[1], 3), exponentMatch[2])
              : formatNumber(text, 3);
          }
        }
        return `<calc-num${absTolReached ? ` title="${value.toSafeHTML()}"` : ''} num-type="${argType}">${text}</calc-num>`;
      } else if (['string'].includes(argType)) return `<calc-str>${value.toSafeHTML()}</calc-str>`;
      else if (['boolean'].includes(argType)) return `<calc-cond>${value.toSafeHTML()}</calc-cond>`;
      else if (['complex'].includes(argType)) {
        if (settings.get('math.complexMode') === 'rectangular')
          return check(math.parse(arg.toString()));
        let polar = arg.toPolar();
        return `${check(new math.ConstantNode(polar.r))}<calc-op>∠</calc-op>${check(new math.ConstantNode(polar.phi))}`;
      } else if (['fraction'].includes(argType)) return check(arg.value);
      else return check(arg.value);
    }
    /**
     * @param {math.Unit} arg
     * @returns {string}
     */
    function checkUnit(arg) {
      arg.skipAutomaticSimplification = true;
      let value = check(math.parse(math.string(arg.toNumeric() ?? '')));
      let unit = check(math.parse(arg.formatUnits()));
      return `${value === '<calc-undef></calc-undef>' ? '' : value} ${unit}`.trim();
    }
    /**
     * @param {math.SymbolNode} arg
     * @returns {string}
     */
    function checkSymbolNode(arg) {
      localConsole.log('(ƒ) symbolNode', 'arg', arg);
      return `<calc-i>${
        debug?.formatSymbols === true
          ? ((arg.name ?? '').replaceAll(
              new RegExp(`(?<![a-zA-Z0-9])(${Object.keys(constants.greek).join('|')})(?![a-zA-Z0-9])`, 'g'),
              a => constants.greek[a]
            ))
          : (constants[arg.name] ?? arg.name?.toSafeHTML?.())
      }</calc-i>`;
    }
    /**
     * @param {math.AssignmentNode} arg
     */
    function checkAssignmentNode(arg) {
      return `${check(arg.object)}<calc-op>=</calc-op>${check(arg.value)}`;
      // return `${check(arg.value)}<calc-op>→</calc-op>${check(arg.object)}`;
    }
    /**
     * @param {math.FunctionAssignmentNode} arg
     * @returns {string}
     */
    function checkFunctionAssignmentNode(arg) {
      return `${check(new math.SymbolNode(arg.name))}<calc-op>(</calc-op>${arg.params
        .map(a => new math.SymbolNode(a))
        .join('<calc-sep>,</calc-sep>')}<calc-op>)</calc-op><calc-op>=</calc-op>${check(arg.expr)}`;
    }
    /**
     * @param {math.ArrayNode} arg
     * @returns {string}
     */
    function checkArrayNode(arg) {
      if (arg.items.toString().length > 100)
        return `<calc-op>[</calc-op><span underline onclick="api.openNewWindow('uc://public/show-array.html?array=${arg.toString()}')">…</span>${arg.items.length}<calc-op>]</calc-op>`;
      return `<calc-op>[</calc-op>${arg.items.map(subarg => check(subarg)).join('<calc-sep>,</calc-sep>')}<calc-op>]</calc-op>`;
    }
    /**
     * @param {math.MathNode[]} arg
     * @returns {string}
     */
    function checkArray(arg) {
      if (arg.join(', ').length + 2 > 100)
        return `<calc-op>[</calc-op><span underline onclick="api.openNewWindow('${
          location.protocol === 'uc:' ? 'uc://public/' : './'
        }show-array.html?array=${encodeURIComponent(
          btoa(`[${arg.join(', ')}]`)
        )}')">…</span>${arg.length}<calc-op>]</calc-op>`;
      return `<calc-op>[</calc-op>${arg.map(subarg => check(subarg)).join('<calc-sep>,</calc-sep>')}<calc-op>]</calc-op>`;
    }
    /**
     * @param {math.RangeNode} arg
     * @returns {string}
     */
    function checkRangeNode(arg) {
      return `<calc-op>{</calc-op>${check(arg.start)}<calc-op>→</calc-op>${check(arg.end)}<calc-sep>;\u2006</calc-sep>${check(arg.step ?? 1)}<calc-op>}</calc-op>`;
    }
    /**
     * @param {math.Matrix} arg
     * @returns {string}
     */
    function checkMatrix(arg) {
      if (arg.toString().length > 100)
        return `<calc-op>[</calc-op><span underline onclick="api.openNewWindow('${
          location.protocol === 'uc:' ? 'uc://public/' : './'
        }show-array.html?array=${encodeURIComponent(
          btoa(arg.toString())
        )}')">…</span>${arg.size()[0]}<calc-op>]</calc-op>`;
      return `<calc-op>[</calc-op>${arg
        .toArray()
        .map(subarg => check(subarg))
        .join('<calc-sep>,</calc-sep>')}<calc-op>]</calc-op>`;
    }
    /**
     * @param {{ s: -1n | 1n; n: bigint; d: bigint } | math.Fraction} arg
     */
    function checkFraction(arg) {
      return `<calc-div div-type="fraction"><span>${arg.n * arg.s}</span><hr><span><div class="division">/</div>${arg.d}</span></calc-div>`;
    }
    /**
     * @param {Date} arg
     * @returns {string}
     */
    function checkDate(arg) {
      return `<calc-date>${arg.toISOString()}</calc-date>`;
    }
    /**
     * @param {math.IndexNode} arg
     * @returns {string}
     */
    function checkIndexNode(arg) {
      return arg.dotNotation
        ? `<calc-op>.</calc-op>${check(new math.SymbolNode(arg.dimensions[0].value))}`
        : `<calc-op>[</calc-op>${check(arg.dimensions[0])}<calc-op>]</calc-op>`;
    }
    /**
     * @param {math.AccessorNode} arg
     * @returns {string}
     */
    function checkAccessorNode(arg) {
      return `${check(arg.object)}${check(arg.index)}`;
    }
    /**
     * @param {math.Help} arg
     * @returns {string}
     */
    function checkHelp(arg) {
      return `<calc-help><span underline onclick="api.openNewWindow('./help.html?function=${arg.doc.name}')">${arg.doc.name}</span></calc-help>`;
    }
    /**
     * @param {Function} arg
     * @returns {string}
     */
    function checkFunction(arg) {
      return `<calc-f>${
        arg.toString().startsWith('async') ? '<i class="mdi mdi-sync-off" title="async"></i>' : ''
      }<i class="mdi mdi-function"></i> ${
        arg.name.toSafeHTML() == '' ? '<calc-undef></calc-undef>' : arg.name.toSafeHTML()
      }</calc-f>`;
    }
    /**
     * @param {math.ConditionalNode} arg
     */
    function checkConditionalNode(arg) {
      return `<calc-op>&lt;</calc-op><calc-obj>if</calc-obj>&nbsp;${
        check(arg.condition)
      }&nbsp;<calc-obj>do</calc-obj>&nbsp;${
        check(arg.trueExpr)
      }&nbsp;<calc-obj>else</calc-obj>&nbsp;${
        check(arg.falseExpr)
      }<calc-op>&gt;</calc-op>`;
    }
    /**
     * @param {math.ObjectNode} arg
     * @returns {string}
     */
    function checkObjectNode(arg) {
      let finalText = '<calc-op>{</calc-op>';
      Object.entries(arg.properties).forEach(([property, value], index, { length }) => {
        finalText += `<calc-i>${property.toSafeHTML()}</calc-i><calc-sep>:</calc-sep>${check(value)}${
          length - index !== 1 ? '<calc-sep>,</calc-sep>' : ''
        }`;
      });
      finalText += '<calc-op>}</calc-op>';
      return finalText;
    }
    /**
     * @param {Object<string, any>} arg
     * @returns {string}
     */
    function checkObject(arg) {
      let finalText = '<calc-op>{</calc-op>';
      Object.entries(arg).forEach(([property, value], index, { length }) => {
        finalText += `<calc-i>${property.toSafeHTML()}</calc-i><calc-sep>:</calc-sep>${check(value)}${
          length - index !== 1 ? '<calc-sep>,</calc-sep>' : ''
        }`;
      });
      finalText += '<calc-op>}</calc-op>';
      return finalText;
    }
    /**
     * @param {math.BlockNode} arg
     * @returns {string}
     */
    function checkBlockNode(arg) {
      let final = '';
      arg.blocks.forEach((node, i) => {
        if (!node.visible) return;
        final += check(node.node) + (i === arg.blocks.length - 1 ? '' : '<calc-op>;&nbsp;</calc-op>');
      });
      return final;
    }
    const result = check(parsedText) + (parsedText?.comment ? `<calc-comment>${(parsedText?.comment ?? '').slice(1).trimStart().toSafeHTML()}</calc-comment>` : '');
    return `<calc>${result}</calc>`;
  },
  /**
   * @param {string} text
   * @returns {string}
   */
  parse(text) {
    return String(text).toSafeHTML();
  },
  normalizeMathExpression(input = '') {
    let result = input;
    const multiCharMap = {
      eˣ: 'e^x',
      'e²': 'e^2',
      'e³': 'e^3',
      '×10ˣ': '*10^',
      '×10²': '*10^2',
      '×10³': '*10^3',
      ħ: 'hbar',
      ε: 'epsilon',
      ₑ: '_e',
      ₚ: '_p',
      ₘ: '_m',
      ₙ: '_n',
      ᵤ: '_u',
    };
    for (const [key, value] of [...Object.entries(multiCharMap), ...Object.entries(fullUnicodeMap)]) {
      result = result.replaceAll(key, value);
    }
    result = result.replace(/cis[\s]([^\s]*)/gi, 'cis($1)');

    return result;
  },
  hasForbiddenConfigCall(input) {
    try {
      if (input.type === 'FunctionNode') {
        const funcName = input.fn.name || input.fn.toString();
        if (funcName === 'config') throw new Error('Access to config() is disabled in expressions');
      }
      input.forEach(child => m.hasForbiddenConfigCall(child));
    } catch (/** @type {Error} */ e) {
      if (e.message.includes('Access to config()')) return true;
      else throw e;
    }
    return false;
  },
  async toggleResultTypesDialog() {
    if (resultTypesDialog.open) {
      resultTypesDialog.close();
      return;
    }
    let output = $n('div');
    output.style.display = 'grid';
    output.style.gridTemplateColumns = 'auto 1fr';
    output.style.gridTemplateRows = 'auto';
    output.style.gap = '4px 8px';
    const value = calcDisplay.content[2];
    const safe = (fn, fallback = '&mdash;') => { try { return fn(); } catch { return fallback; } };
    /**
     * Sign-aware 0x/0o/0b cell: strips the radix prefix, groups the digits in
     * blocks of 16, and escapes the digits only (so <br>/<sub> survive).
     * Non-prefixed output (Infinity, 3/4, booleans, …) falls back to plain text.
     */
    const baseCell = notation => safe(() => {
      const prefix = { hex: '0x', oct: '0o', bin: '0b' }[notation];
      const text = m.format(value, { notation });
      const sign = text.startsWith('-') ? '-' : '';
      const body = sign ? text.slice(1) : text;
      if (!body.startsWith(prefix)) return text;
      const digits = body.slice(prefix.length);
      const grouped = (digits.match(/.{1,16}(?=(.{16})*$)/g) ?? [digits])
        .join('<br>');
      const base = notation === 'hex' ? 16 : notation === 'oct' ? 8 : 2;
      return `${sign}${grouped}`;
    });

    let infos = [
      ['Hex', baseCell('hex')],
      ['Bin', baseCell('bin')],
      ['Oct', baseCell('oct')],
      ['Exponential', safe(() => m.format(value, { notation: 'exponential' }))],
      ['Engineering', safe(() => m.format(value, { notation: 'engineering' }))],
      ['Simplified', safe(() => m.format(math.parse(math.format(math.simplifyConstant(calcDisplay.content[1]), { fraction: 'ratio' }))))],
      ['Prime factorisation', safe(() => {
        let orig = math.config();
        try {
          math.config({ number: 'number' });

          const counts = new Map();
          for (const f of m.factorize(BigInt(math.evaluate(calcDisplay.content[2])?.toFixed?.() ?? math.evaluate(calcDisplay.content[2])?.toString?.()))) counts.set(f, (counts.get(f) ?? 0n) + 1n);
          const result = [];
          for (const [base, count] of counts) result.push(count > 1n ? [base, count] : base);
          const res = result.map(a => !a[0] ? a.toString() : a.join('^')).join('*');

          let text = m.format(math.parse(res));
          return text;
        } catch {
          return m.format(null);
        } finally {
          math.config(orig);
        }
      })],
      ['DMS', safe((function() {
        let res = math.evaluate(calcDisplay.content[1]);
        return `${
          math.chain(res).bignumber().trunc().done()
        }<calc-op>°</calc-op>${
          math.chain(res).multiply(60).bignumber().trunc().mod(60).done()
        }<calc-op>′</calc-op>${
          math.chain(res).multiply(3600).bignumber().mod(60).done().toFixed(2)
        }<calc-op>″</calc-op>`
      }))]
    ];
    infos = infos
      .map((item, i) => {
        const promotable = i < 5; // Hex / Bin / Oct / Exponential / Engineering map to a notation
        return `<span class="dim small item">${item[0].toSafeHTML()}</span>`
          + `<span class="notation-opt${promotable ? ' promotable' : ''}"${promotable ? ` data-notation="${item[0].toLowerCase()}"` : ''}>${item[1]}</span>`;
      })
      .join('');
    output.innerHTML = infos;

    resultTypesDialog.innerHTML =
      '<div class="header">' +
        '<span>Additional results</span>' +
        '<button class="btn-neutral" commandfor="result-types-dialog" command="close"><i class="mdi mdi-close"></i></button>' +
      '</div>' +
      '<div class="text">' +
      output.outerHTML +
      '</div>';
    const currentNotation = calcDisplay.notation;
    resultTypesDialog.querySelectorAll('.notation-opt[data-notation]').forEach(el => {
      el.classList.toggle('active', el.dataset.notation === currentNotation);
      el.title = 'Show the result in this notation';
      el.onclick = () => calcDisplay.setNotation(el.dataset.notation);
    });
    resultTypesDialog.showModal();
  },
  simplifySqrt(value, { tolerance = 1e-10, maxK = 1000, maxM = 1000, maxN = 1000 } = {}) {
    const sign = value < 0 ? -1 : 1;
    const abs = Math.abs(value);
    const target = abs * abs;

    const sqrtN = new Float64Array(maxN + 1);
    for (let n = 1; n <= maxN; n++) sqrtN[n] = Math.sqrt(n);

    for (let m = 1; m <= maxM; m++) {
      const m2 = m * m;
      for (let n = 1; n <= maxN; n++) {
        const root = Math.round(sqrtN[n]);
        if (root * root === n) continue;

        const kIdeal = Math.sqrt((target * m2) / n);
        for (const k of [Math.floor(kIdeal), Math.ceil(kIdeal)]) {
          if (k < 1 || k > maxK) continue;
          const approx = (k * sqrtN[n]) / m;
          if (Math.abs(approx - abs) < tolerance) {
            return {
              k: sign * k,
              n, m, value: sign * approx,
              error: Math.abs(approx - abs),
              __proto__: {
                toString() {
                  return (() => {
                    if (n === 0) return '0';
                    if (n === 1) return m === 1 ? `${k}` : `${k}/${m}`;
                    const num = k === 1 ? `sqrt(${n})` : k === -1 ? `-sqrt(${n})` : `${k}*sqrt(${n})`;
                    return m === 1 ? num : `(${num})/${m}`;
                  })();
                },
                [Symbol.toStringTag]: 'MixedFraction'
              }
            };
          }
        }
      }
    }
    return null;
  },
  simplifyPi(value) {
    let result = 1;
    if ((value / Math.PI) - math.fraction(value / Math.PI) === 0) {
      result = math.fraction(value / Math.PI);
      return {
        n: result.n * result.s,
        m: result.d,
        pi: Math.PI,
        __proto__: {
          toString() { return `${result.n * result.s}/${result.d} pi` },
          toDecimal() { return `${result.n * result.s / result.d} pi` },
          valueOf() { return result.n * result.s / result.d * Math.PI },
          [Symbol.toStringTag]: 'MixedFraction'
        }
      };
    }
    return value;
  },
  // Miller-Rabin primality test for BigInt
  isPrime(n) {
    n = BigInt(n);
    if (n < 2n) return false;
    for (const p of [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n]) {
      if (n === p) return true;
      if (n % p === 0n) return false;
    }
    let d = n - 1n, r = 0n;
    while (d % 2n === 0n) { d /= 2n; r++; }
    const witnesses = [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n];
    outer: for (const a of witnesses) {
      let x = m.modPow(a, d, n);
      if (x === 1n || x === n - 1n) continue;
      for (let i = 1n; i < r; i++) {
        x = (x * x) % n;
        if (x === n - 1n) continue outer;
      }
      return false;
    }
    return true;
  },

  // Fast modular exponentiation
  modPow(base, exp, mod) {
    let result = 1n;
    base %= mod;
    while (exp > 0n) {
      if (exp & 1n) result = (result * base) % mod;
      base = (base * base) % mod;
      exp >>= 1n;
    }
    return result;
  },

  // Pollard's Rho with Brent's improvement
  pollardRho(n) {
    if (n % 2n === 0n) return 2n;
    let x = 2n, y = 2n, d = 1n, c = 1n;
    const f = (v) => (v * v + c) % n;
    while (d === 1n) {
      x = f(x);
      y = f(f(y));
      d = m.gcd(m.abs(x - y), n);
      if (d === n) { c++; x = 2n; y = 2n; d = 1n; }
    }
    return d;
  },

  gcd(a, b) { while (b) [a, b] = [b, a % b]; return a; },
  abs(x) { return x < 0n ? -x : x; },

  // Full factorization
  factorize(n) {
    if (n === 1n) return [];
    if (m.isPrime(n)) return [n];
    const d = m.pollardRho(n);
    return [...m.factorize(d), ...m.factorize(n / d)].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  },
  copyOutput() {
    if (navigator.clipboard) {
      navigator.clipboard?.writeText?.($('calc-res').dataset.content).then(() => {
        new Toast('Result copied successfully.', 'success', '../assets/icons/success.svg');
      }).catch(error => {
        new Toast('An error has occured while copying result.\n' + error, 'error', '../assets/icons/error.svg');
      });
    }
    const textarea = document.createElement('textarea');
    textarea.value = $('calc-res').dataset.content;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);

    textarea.select();
    try { /** @deprecated */ document.execCommand('copy'); }
    catch (error) { new Toast('An error has occured while copying result.\n' + error, 'error', '../assets/icons/error.svg');; }

    document.body.removeChild(textarea);
  },
  /**
   * The inverse of mathjs' toJSON(): revives BigNumber / Complex / Fraction /
   * Unit / matrix values out of JSON text via math.reviver, so a whole
   * serialized history comes back as live mathjs values in one call. Values
   * without a `mathjs` type tag (strings, numbers, plain objects) pass through
   * untouched, so mixed structures survive the round-trip.
   *
   * @param {string | object | null | undefined} json JSON text, or an already
   * parsed structure (it gets re-serialized so the reviver can run on it).
   * @param {{ dates?: boolean }} [options] `dates: true` also converts ISO-8601
   * strings back into Date objects — JSON.stringify flattens Dates otherwise.
   * @returns {any} the revived value, or `json` itself when it is nullish.
   * @throws {Error} if `json` is present but not valid JSON.
   */
  fromJSON(json, options = {}) {
    // if (json === null || json === undefined) return json;
    // const mathjsReviver = typeof math !== 'undefined' && typeof math?.reviver === 'function' ? math.reviver : undefined;
    // if (!mathjsReviver) {
    //   console.warn('%cm.fromJSON%c mathjs is probably not imported, falling back to plain JSON', codeStyle, '');
    // }
    // // mathjs' reviver only runs while parsing, so dates are handled by wrapping it.
    // const reviver = options?.dates
    //   ? (key, value) => {
    //       const revived = mathjsReviver ? mathjsReviver(key, value) : value;
    //       return typeof revived === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(revived)
    //         ? new Date(revived)
    //         : revived;
    //     }
    //   : mathjsReviver;
    // try {
    //   return typeof json === 'string' ? JSON.parse(json, reviver) : JSON.parse(JSON.stringify(json), reviver);
    // } catch (error) {
    //   throw new Error('Invalid JSON:\n' + (error?.stack ?? error));
    // }
    return JSON.parse(json, math.reviver);
  },
  formatNumber(input) {
    const thousands = settings.get('math.thousandsSeparator') ?? '\'';
    const thousandths = settings.get('math.thousandthsSeparator') ?? ' ';
    let str = String(input).trim();

    let sign = '';
    if (str[0] === '-' || str[0] === '+') { sign = str[0]; str = str.slice(1); }

    let exponent = '';
    const eIndex = str.search(/[eE]/);
    if (eIndex !== -1) { exponent = str.slice(eIndex); str = str.slice(0, eIndex); }

    const dotIndex = str.indexOf('.');
    let intPart, fracPart;
    if (dotIndex === -1) { intPart = str; fracPart = ''; }
    else { intPart = str.slice(0, dotIndex); fracPart = str.slice(dotIndex + 1); }

    intPart = intPart.replace(/^0+(?=\d)/, '') || '0';
    let groupedInt = '';
    const intLen = intPart.length;
    for (let i = 0; i < intLen; i++) {
      if (i > 0 && (intLen - i) % 3 === 0) groupedInt += thousands;
      groupedInt += intPart[i];
    }

    let groupedFrac = '';
    for (let i = 0; i < fracPart.length; i++) {
      if (i > 0 && i % 3 === 0) groupedFrac += thousandths;
      groupedFrac += fracPart[i];
    }

    let out = sign + groupedInt;
    if (dotIndex !== -1) { out += '.'; if (groupedFrac) out += groupedFrac; }
    out += exponent;
    return out;
  },
  get physicalConstants() {
    try {
      math
      return [
        ['c_0', math['speedOfLight'], 'speedOfLight'],
        ['_h', math['planckConstant'], 'planckConstant'],
        ['h_bar', math['reducedPlanckConstant'], 'reducedPlanckConstant'],
        ['G', math['gravitationConstant'], 'gravitationConstant'],
        ['e_charge', math['elementaryCharge'], 'elementaryCharge'],
        ['epsilon_0', math['electricConstant'], 'electricConstant'],
        ['mu_0', math['magneticConstant'], 'magneticConstant'],
        ['k_e', math['coulomb'], 'coulomb'],
        ['Z_0', math['vacuumImpedance'], 'vacuumImpedance'],
        ['m_e', math['electronMass'], 'electronMass'],
        ['m_p', math['protonMass'], 'protonMass'],
        ['m_n', math['neutronMass'], 'neutronMass'],
        ['m_d', math['deuteronMass'], 'deuteronMass'],
        ['m_u', math['atomicMass'], 'atomicMass'],
        ['M', math['molarMass'], 'molarMass'],
        ['M12C', math['molarMassC12'], 'molarMassC12'],
        ['k', math['boltzmann'], 'boltzmann'],
        ['R', math['gasConstant'], 'gasConstant'],
        ['n_0', math['loschmidt'], 'loschmidt'],
        ['sigma', math['stefanBoltzmann'], 'stefanBoltzmann'],
        ['_b', math['wienDisplacement'], 'wienDisplacement'],
        ['V_m', math['molarVolume'], 'molarVolume'],
        ['c_1', math['firstRadiation'], 'firstRadiation'],
        ['c_2', math['secondRadiation'], 'secondRadiation'],
        ['mu_B', math['bohrMagneton'], 'bohrMagneton'],
        ['Phi_0', math['magneticFluxQuantum'], 'magneticFluxQuantum'],
        ['G_0', math['conductanceQuantum'], 'conductanceQuantum'],
        // ['G_0inv', math['inverseConductanceQuantum'], 'inverseConductanceQuantum'],
        ['R_K', math['klitzing'], 'klitzing'],
        ['a_0', math['bohrRadius'], 'bohrRadius'],
        ['r_e', math['classicalElectronRadius'], 'classicalElectronRadius'],
        // ['Frd', math['faraday'], 'faraday'],
        // ['G_F', math['fermiCoupling'], 'fermiCoupling'],
        ['mu_N', math['nuclearMagneton'], 'nuclearMagneton'],
        ['E_h', math['hartreeEnergy'], 'hartreeEnergy'],
        ['Ry', math['rydberg'], 'rydberg'],
        ['q_P', math['planckCharge'], 'planckCharge'],
        ['l_P', math['planckLength'], 'planckLength'],
        ['m_P', math['planckMass'], 'planckMass'],
        ['t_P', math['planckTime'], 'planckTime'],
        ['T_P', math['planckTemperature'], 'planckTemperature'],
        // ['qoC', math['quantumOfCirculation'], 'quantumOfCirculation'],
        ['alpha', math['fineStructure'], 'fineStructure'],
        ['N_A', math['avogadro'], 'avogadro'],
        ['sigma_T', math['thomsonCrossSection'], 'thomsonCrossSection'],
        ['Å', math.unit('angstrom'), 'angstrom'],
      ]
    } catch {
      console.warn('%cmathjs%c is probably not imported', codeStyle, '');
      return [];
    }
  },
};

try {
  delete math.expression.mathWithTransform.___format___;
  delete math.expression.mathWithTransform.___preview___;
  // delete math.expression.mathWithTransform.config;
  for (const [name, value, originalName] of m.physicalConstants) {
    math[name] = value;
    math.expression.mathWithTransform[name] = math[name];
    math.docs[name] = {
      description: `Alias of ${originalName}`,
      examples: [originalName],
    };
  }
  parser.set('ans', 0);
  parser.set('mem', 0);
} catch {
  console.warn('%cmathjs%c is probably not imported', codeStyle, '');
}

// const /** @type {Set<[string, string, FontFaceDescriptors]>} */ fonts = new Set([
//   ['--font-sans', 'fonts/notosans.woff2'],
//   ['--font-sans', 'fonts/notosans-italic.woff2', { style: 'italic' }],
//   ['--font-sans', 'fonts/notosans-bold.woff2', { weight: '700' }],
//   ['--font-sans', 'fonts/notosans-bolditalic.woff2', { weight: '400', style: 'italic' }],

//   ['--font-mono', 'fonts/notosans-mono.woff2'],
//   ['--font-mono', 'fonts/notosans-mono-bold.woff2', { weight: 'bold' }],

//   ['--font-mono-2', 'fonts/main-mono.ttf'],
//   ['--font-mono-2', 'fonts/main-mono-italic.ttf', { style: 'italic' }],
// ]);
// [...fonts].forEach(font => o.loadFont(...font));

Object.defineProperties(String.prototype, {
  sum: {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function () {
      return eval([...new TextEncoder().encode(this)].map((a, i) => `${a}n*256n**${i}n`).join('+'));
    },
  },
  reverse: {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function () {
      return [...this].reverse().join('');
    },
  },
});
Object.defineProperties(Object.prototype, {
  toSafeHTML: {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function () {
      // return Object.assign($n('_'), { textContent: this }).innerHTML.replace(/"/g, '&quot;');
      return [...String(this)].map(a => '&#' + a.codePointAt() + ';').join('');
    },
  },
  __objectSum: {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function objectSum() {
      try {
        return Object.keys(this).length;
      } catch {
        return -1;
      }
    },
  },
});
Object.defineProperty(BigInt, 'isInteger', {
  enumerable: false,
  value: function (number) {
    try {
      BigInt(number);
      return true;
    } catch {
      return false;
    }
  },
});
Element.prototype.$ = Element.prototype.querySelector;
Element.prototype.$$ = Element.prototype.querySelectorAll;

class GridDisplay {
  constructor(width = 24, height = 4, options = { append: false }) {
    width = width ?? 24;
    height = height ?? 4;
    options = options ?? { append: false };

    const display = $n('div');
    display.className = 'display';
    display.id = o.generateUID();
    display.style.gridTemplateColumns = `repeat(${width}, 1ch)`;
    display.style.gridTemplateRows = `repeat(${height}, 1lh)`;

    this.display = display;
    this.width = width; this.height = height;
    this.content = o.createArray('GridDisplayContent',
      Array.from({ length: height }, () =>
        Array.from({ length: width }, () => {
          return o.createObject('GDCItem', { value: '', style: new DisplayStyle() });
        })
      )
    );
    Object.defineProperties(this, {
      content: { enumerable: false, configurable: false },
      display: { enumerable: false, configurable: false },
    });
    if (options?.append) $main.appendChild(display);
  }

  /**
   * Adds a character to the display at the specified coordinates.
   * @param {string} char
   * @param {number} x
   * @param {number} y
   */
  addChar(char, x = 0, y = 0, style = new DisplayStyle) {
    char = char ?? String(char);
    x = x ?? 0; y = y ?? 0; style = style ?? new DisplayStyle;
    if (x >= -this.width && x < this.width && y >= -this.height && y < this.height) {
      this.content[
        (y + this.height) % this.height
      ][
        (x + this.width) % this.width
      ] = o.createObject('DCItem', { value: char[0], style: new DisplayStyle(style) });
    }
    if (char.length > 1)
      console.warn(`Text "${char}" is not a single character. Only the first character will be displayed.`);
    this.#updateDisplay();
  }
  /**
   * Adds text to the display at the specified coordinates with alignment.
   * @param {string} text
   * @param {number} x
   * @param {number} y
   * @param {'left' | 'right'} align
   */
  addText(text, x = 0, y = 0, align = 'left', style = new DisplayStyle) {
    text = text ?? String(text);
    x = x ?? 0; y = y ?? 0; align = align ?? 'left';
    style = style ?? new DisplayStyle;
    if (align === 'right') [...text].toReversed().forEach((c, i) => this.addChar(c, x - i, y));
    else [...text].forEach((c, i) => this.addChar(c, x + i, y));

    if (!['right', 'left'].includes(align))
      console.warn(`Alignment "${align}" is not a valid option. Defaulting to "left".`);
    this.#updateDisplay();
  }
  toString() { return this.textContent }
  /** @private */
  #updateDisplay() {
    this.display.innerHTML = this.content
      .map(row =>
        row.map(char =>
          `<char${!!char.style?.cssText ? ' style="' + char.style.cssText?.toSafeHTML() + '"' : ''}>${char.value?.toSafeHTML()}</char>`
        ).join('')
      ).join('');
  }
  clear() {
    this.content = Array.from({ length: this.height }, () =>
      Array.from({ length: this.width }, () => {
        return { value: '', style: new DisplayStyle() };
      })
    );
    this.#updateDisplay();
  }
  get textContent() {
    return this.content
      .map(row =>
        row.map(char => (char.value === '' ? ' ' : char.value)).join('')
      )
      .join('\n');
  }
}
/** Notations cycled by the top-bar chip, in cycle order. */
const NOTATIONS = ['auto', 'fixed', 'exponential', 'engineering', 'bin', 'oct', 'hex'];
const NOTATION_LABELS = { auto: 'AUTO', fixed: 'FIX', exponential: 'SCI', engineering: 'ENG', bin: 'BIN', oct: 'OCT', hex: 'HEX' };
class CalcDisplay {
  constructor(width, height, options = { append: false }, screens = o.createArray('CalcDisplayScreens', [])) {
    width = String(width ?? 'revert-layer');
    height = String(height ?? 'revert-layer');
    screens = screens ?? o.createArray('CalcDisplayScreens', []);

    const display = $n('div');
    display.className = 'calc-display';
    display.id = o.generateUID();
    display.style.width = width;
    display.style.height = height;

    screens = screens.map(screen => {
      const el = $n('calc-screen');
      // let height = display.scrollHeight;
      // console.log(height-22);
      // el.style.height = `${height - 22}px`;
      el.setAttribute('screen', screen);
      return el;
    });

    // calculator display screen
    const calculatorTopBar = $n('calc-top-bar');
    calculatorTopBar.innerHTML =
      '<calc-icon title="Shift" class="mdi mdi-alpha-s-box shift-indicator indicator inactive"></calc-icon>' +
      '<calc-icon title="Alpha" class="mdi mdi-alpha-a-box alpha-indicator indicator inactive"></calc-icon>' +
      // '<br>'+
      // '<calc-icon title="Number: Number" class="mdi big mdi-light mdi-alpha-n number-number-indicator"></calc-icon>'+
      // '<calc-icon title="Number: BigNumber" class="mdi big mdi-light mdi-alpha-b number-bignum-indicator"></calc-icon>'+
      // '<calc-icon title="Number: BigInt" class="mdi big mdi-light mdi-alpha-i number-bigint-indicator"></calc-icon>'+
      // '<calc-icon title="Number: Fraction" class="mdi big mdi-light mdi-alpha-f number-fraction-indicator"></calc-icon>'+
      '<span class="mode-indicator center wide" style="margin:auto;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);">CALCULATOR</span>' +
      '<span class="wide"></span>' +
      '<button class="notation-indicator" title="Result notation (Ctrl+Alt+B)" onclick="calcDisplay.setNotation()">AUTO</button>' +
      '<calc-icon title="Warning" class="mdi mdi-alert warning-indicator indicator inactive"></calc-icon>';
    // '<calc-icon title="Radians" class="mdi mdi-alpha-r-circle"></calc-icon>';

    display.setAttribute('current-screen', screens[0]?.getAttribute('screen'));
    display.append(calculatorTopBar, ...screens);

    this.width = width;
    this.height = height;
    this.display = display;
    this.content = o.createArray('CalcDisplayContent', ['', '', new math.ConstantNode(undefined)]);
    this.screens = o.createArray('CalcDisplayScreens', screens);
    Object.defineProperties(this, {
      content: { enumerable: false, configurable: false },
      display: { enumerable: false, configurable: false },
      screens: { enumerable: false, configurable: false },
    });
    if (options?.append) $main.appendChild(display);

    try {
      this.showScreen(screens[0]?.getAttribute('screen'));
    } catch (e) {
      console.warn('Screen #0 is not found.', e.toString());
    }
  }

  addInputText(text) {
    this.display
      .$('calc-input')
      .setAttribute('data-content', (this.display.$('calc-input').dataset.content ?? '') + text);
    this.#updateInputText();
  }
  setInputText(text) {
    this.display.$('calc-input').setAttribute('data-content', String(text));
    this.#updateInputText();
  }
  setResultText(text) {
    this.display.$('calc-res').setAttribute('data-content', math.format(text));
    this.content[2] = text;
    this.#updateResultText();
  }
  /**
   * @param {math.FormatOptions} options
   * @param {{
   *  saveToHistory: boolean; number: 'number' | 'fraction' | 'hex' | 'dec' | 'bin' | 'oct' | 'exponential';
   *  precision: number; parse: boolean;
   * }} varOptions
   */
  evaluate(options, varOptions = { saveToHistory: true, number: 'number', precision: this.resultSettings.precision, parse: false }) {
    this.resultSettings.number = varOptions.number;
    this.resultSettings.precision = varOptions.precision;
    let res;
    try {
      let parsedExpr = math.parse(m.normalizeMathExpression(this.content[0]));

      if (m.hasForbiddenConfigCall(parsedExpr))
        throw new SyntaxError(`Access to config() is disabled in expressions`);
      if (varOptions?.parse) {
        $('calc-res').setAttribute('output-mode', 'parsed');
        this.setResultText(parsedExpr);
        return;
      }
    } catch (e) {
      $('calc-res').setAttribute('output-mode', 'errored');
      this.screen('calculator').$('calc-res').innerHTML = `<calc-error error-level="parse"><span>${e.message}</span></calc-error>`;
      return;
    }

    try {
      $('calc-res').setAttribute('output-mode', 'evaluated');
      if (varOptions?.saveToHistory === true) {
        res = parser.evaluate(m.normalizeMathExpression(this.content[0]));
      } else {
        res = math.evaluate(m.normalizeMathExpression(this.content[0]), new Map(parser.scope));
      }
    } catch (e) {
      if (e.message.includes('Undefined symbol')) {
        $('calc-res').setAttribute('output-mode', 'simplified');
        try {
          res = math.parse(math.simplify(m.normalizeMathExpression(this.content[0])).toString());
        } catch (e) {
          $('calc-res').setAttribute('output-mode', 'errored');
          this.screen('calculator').$('calc-res').innerHTML = `<calc-error error-level="simplification"><span>${e.message}</span></calc-error>`;
          return;
        }
      } else {
        $('calc-res').setAttribute('output-mode', 'errored');
        console.error(`Evaluation error: ${e.message}`);
        this.screen('calculator').$('calc-res').innerHTML = `<calc-error error-level="evaluation"><span>${e.message}</span></calc-error>`;
        return;
      }
    }
    // Flag results that a plain double can no longer represent exactly. Only
    // scalars are considered: BigNumbers are exact, MathNodes are symbolic, and
    // Complex/Unit/Matrix/ResultSet all coerce to NaN. The range is capped at
    // 1e21 because from there on JS switches to exponential notation, where the
    // missing digits are already obvious. The indicator is always rewritten
    // (never left over from a previous evaluation).
    let numeric;
    try { numeric = Number(res); } catch { numeric = NaN; }
    const magnitude = Math.abs(numeric);
    const inexact = magnitude > Number.MAX_SAFE_INTEGER
      && magnitude < 1e21
      && math.config().number === 'number'
      && !math.isBigNumber(res)
      && !math.isNode(res);
    const warning = this.display.$('.warning-indicator');
    warning.classList.toggle('inactive', !inexact);
    warning.title = inexact ? 'Warning: The result might not be accurate.' : 'Warning';
    this.setResultText(
      // math.parse(
        // math.format(
          varOptions?.parse ? res :
          (
            varOptions.number === 'fraction' ?
              math.simplifyConstant(math.parse(m.normalizeMathExpression(this.content[1])))
            : res
          )
            /* , {
            ...(options ?? {}),
            notation: 'fixed',
            precision: varOptions.precision ?? this.resultSettings.precision ?? math.config().precision,
            number: varOptions.number?.replaceAll('fraction', math.config().number) ?? math.config().number
          } */
        // )
      // )
    );
    this.resultSettings.number = varOptions.number ?? 'number';
    if (varOptions?.saveToHistory) {
      console.debug('stored to history');
      parser.set('ans', res);
      return (async () => {
        return await storage.set(
          'history',
          ((await storage.get('history') ?? []).concat([
            { input: this.content[0], output: this.content[2], timestamp: Date.now() },
          ])).slice(-settings.get('history.maxEntries'))
        );
      })();
    }
  }
  /**
   * @param {boolean} state
   */
  shift(state = !this.modifierKeyStates.shift) {
    this.modifierKeyStates.shift = state;
    const indicator = this.display.$('.shift-indicator');
    if (!state) indicator.classList.add('inactive');
    else indicator.classList.remove('inactive');
    $body.setAttribute('shift', state);
  }
  /**
   * @param {boolean} state
   */
  alpha(state = !this.modifierKeyStates.alpha) {
    this.modifierKeyStates.alpha = state;
    const indicator = this.display.$('.alpha-indicator');
    if (!state) indicator.classList.add('inactive');
    else indicator.classList.remove('inactive');
    $body.setAttribute('alpha', state);
  }
  /**
   * @param {string} screen
   */
  showScreen(screen) {
    const availableScreens = this.screens.map(a => a.getAttribute('screen'));
    if (!availableScreens.includes(screen))
      throw new TypeError(
        `The screen '${screen}' is not a valid screen. Choose one of ${availableScreens.map(a => `'${a}'`).join(', ')}`
      );

    this.display.setAttribute('current-screen', screen);
    this.screens.forEach(item => item.setAttribute('hidden', ''));
    this.screen(screen).removeAttribute('hidden');
    this.display.$('calc-top-bar .mode-indicator').textContent = screen;
  }
  get currentScreen() {
    return this.screens.find(item => !item.hasAttribute('hidden'))?.getAttribute('screen');
  }
  /** @returns {string} The notation currently in effect for the main result. */
  get notation() {
    return this.#notation();
  }
  screen(screen) {
    return this.screens.find(item => item.getAttribute('screen') === screen);
  }

  /** @private @type {{ shift: boolean; alpha: boolean }} */
  modifierKeyStates = o.createObject('CalcDisplayModifierKeys', { shift: false, alpha: false });
  /** @type {{ number: 'number' | 'fraction'; notation: null | 'auto' | 'fixed' | 'exponential' | 'engineering' | 'bin' | 'oct' | 'hex'; precision: number }} */
  resultSettings = o.createObject('CalcResSettings', { number: 'number', notation: null, precision: 64 });
  /** @private */
  #updateInputText() {
    this.content[0] = this.display.$('calc-input').dataset.content;
  }
  /**
   * Cycle or set the main result's notation. `auto` is mathjs' default
   * formatting (current behaviour); the rest map to mathjs' `notation` option.
   * @param {string} [notation] Target notation; omit to cycle to the next one.
   * @returns {string} The notation now in effect.
   */
  setNotation(notation) {
    if (notation === undefined)
      notation = NOTATIONS[(NOTATIONS.indexOf(this.#notation()) + 1) % NOTATIONS.length];
    if (!NOTATIONS.includes(notation)) notation = 'auto';
    this.resultSettings.notation = notation;
    settings?.set?.('math.notation', notation);
    this.#updateResultText();
    return notation;
  }
  /** @private @returns {string} */
  #notation() {
    return this.resultSettings.notation ?? settings?.math?.notation ?? 'auto';
  }
  /** @private */
  #updateResultText() {
    const notation = this.#notation();
    const value = this.content[2];
    // Symbolic output (Exact mode / unresolved simplify) keeps its plain form:
    // hex/bin/oct would otherwise rewrite its literals (x^2 -> x ^ 0x2 + 0x1).
    const symbolic = typeof math?.isNode === 'function' ? math.isNode(value) : value instanceof math.Node;
    let text;
    if (notation === 'auto' || symbolic) text = m.format(value);
    else { text = m.format(value, { notation });}

    const chip = this.display.$('.notation-indicator');
    if (chip) {
      chip.textContent = NOTATION_LABELS[notation] ?? String(notation).toUpperCase();
      chip.classList.toggle('active', notation !== 'auto');
    }

    this.display.$('calc-res').innerHTML =
      '<button class="result-types-btn" onclick="m.toggleResultTypesDialog()"><i class="mdi mdi-dots-horizontal"></i></button>' +
      '<div class="result">' + text + '</div>';
    this.display.$('calc-res .result calc').onclick = () => m.copyOutput();
    this.display.$('calc-res .result-types-btn').onclick = () => m.toggleResultTypesDialog();
    this.content[1] = this.display.$('calc-res').dataset.content;
  }
}
class DisplayStyle {
  constructor(styles) {
    styles = styles ?? {
      backgroundColor: 'revert-layer',
      color: 'revert-layer',
      fontWeight: 'revert-layer',
      fontStyle: 'revert-layer',
    };
    Object.defineProperties(this, (
      Object.fromEntries(Object.entries(styles).map(([key, value]) => {
        return [ key, { value, enumerable: false, configurable: false, writable: true } ]
      }))
    ));

    Object.defineProperty(this, 'cssText', {
      get: () => [
        ['backgroundColor', this.backgroundColor],
        ['color', this.color],
        ['fontWeight', this.fontWeight],
        ['fontStyle', this.fontStyle],
      ].filter(a => a[1] !== 'revert-layer')
        .map(a => a[0].replace(/[A-Z]/g, m => '-' + m.toLowerCase()) + ': ' + a[1] + ';')
        .join(' '),
      set: (text = '') => {
        const i = $n('i'); i.style.cssText = text;
        this.backgroundColor = (e => e === '' ? 'revert-layer' : e)(i.style.backgroundColor);
        this.color = (e => e === '' ? 'revert-layer' : e)(i.style.color);
        this.fontWeight = (e => e === '' ? 'revert-layer' : e)(i.style.fontWeight);
        this.fontStyle = (e => e === '' ? 'revert-layer' : e)(i.style.fontStyle);
        return {
          backgroundColor: i.style.backgroundColor,
          color: i.style.color,
          fontWeight: i.style.fontWeight,
          fontStyle: i.style.fontStyle,
        }
      },
    });

    this.backgroundColor = styles.backgroundColor ?? 'revert-layer';
    this.color = styles.color ?? 'revert-layer';
    this.fontWeight = styles.fontWeight ?? 'revert-layer';
    this.fontStyle = styles.fontStyle ?? 'revert-layer';
    this.cssText = '';
  }
  toString() { return this.cssText }
  toJSON() {
    return {
      backgroundColor: this.backgroundColor,
      color: this.color,
      fontWeight: this.fontWeight,
      fontStyle: this.fontStyle,
      cssText: this.cssText,
    }
  }
}

class ButtonDisplay {
  constructor(options = { append: false }) {
    const display = $n('calc-btns');
    this.content = o.createArray('ButtonDisplayContent', []);
    this.display = display;
    Object.defineProperties(this, {
      content: { configurable: false, enumerable: false },
      display: { configurable: false, enumerable: false },
    });

    if (options?.append) $main.appendChild(display);
  }
  /**
   * @param  {...ButtonGroup} groups
   */
  append(...groups) {
    // console.log('method:', 'groups', groups.map(group => group.group));
    this.display.append(...groups.map(group => { group.group.id = o.generateUID(); return group.group }));
    this.#updateContent();
  }
  /**
   * @param {CalcDisplay} calcDisplay
   * @param {(
   *  (
   *    [ string, string, string, ButtonCallback, ButtonCallback, ButtonCallback, number, string ][]
   *  )[]
   * )[]} array
   */
  async fromArray(calcDisplay, array) {
    this.display.innerHTML = '';
    this.append(
      ...array.map(group => {
        const newGroup = new ButtonGroup();
        newGroup.append(
          ...group.map(row => {
            const newRow = new ButtonRow();
            newRow.append(
              ...row.map(button => {
                let origButton0 = button[0];
                button[0] = button[0] ?? '';
                button[1] = button[1] ?? '';
                button[2] = button[2] ?? '';
                button[3] = button[3];
                button[4] = button[4];
                button[5] = button[5];
                button[6] = button[6] ?? 1;
                button[7] = button[7] ?? 'revert-layer';
                return new Button(origButton0 === null ? null : calcDisplay, ...button);
              })
            );
            return newRow;
          })
        );
        return newGroup;
      })
    );
    return this.content;
  }

  /** @private */
  #updateContent() {
    const children = this.display.children;
    this.content = o.createArray('ButtonDisplayContent', Array.from({ length: this.display.childElementCount })
      .map((_, i) => (
        o.createArray('ButtonGroupContent', Array.from({ length: children.item(i).childElementCount })
          .map((_, j) => (
            o.createArray('ButtonRowContent', Array.from({ length: children.item(i).children.item(j).childElementCount })
              .map((_, k) => children.item(i).children.item(j).children.item(k))
            )
          ))
        )
      ))
    );
    this.display.$$('*:empty:is(.shift-text, .alpha-text)')
      .forEach(item => item.remove());
  }
};
class Button {
  /**
   * @param {CalcDisplay} parent
   * @param {string} text
   * @param {string} shiftText
   * @param {string} alphaText
   * @param {ButtonCallback} onclick
   * @param {ButtonCallback} shiftOnclick
   * @param {ButtonCallback} alphaOnclick
   * @param {number} width
   */
  constructor(parent, text, shiftText = '', alphaText = '', onclick, shiftOnclick, alphaOnclick, width = 1, color = 'revert-layer') {
    const nullish = [null, undefined];
    const canBeSeparator = nullish.includes(arguments[0]) && (arguments[1] === '' || nullish.includes(arguments[1]));
    if (canBeSeparator) {
      this.button = $n('span');
      this.button.style.gridColumn = 'span ' + (arguments[2] ?? 1);
      [this.text, this.shiftText, this.alphaText, this.onclick, this.shiftOnclick, this.alphaOnclick, this.color] =
        Array(7).fill(null);
      return;
    }
    if (arguments.length < 2)
      throw new TypeError(
        `Failed to construct 'Button': 2 argument required, but only ${arguments.length} present.`
      );

    let originalText = text;
    text =
      text === 'SHIFT'
      ? '<i class="mdi-apple-keyboard-shift"></i>'
      : text === 'ALPHA'
      ? '<i class="mdi-apple-keyboard-command"></i>'
      : (text ?? '');
    shiftText ??= '';
    alphaText ??= '';

    onclick ??= (() => N);
    shiftOnclick ??= (() => N);
    alphaOnclick ??= (() => N);
    width ??= 1;
    color ??= 'revert-layer';

    const button = $n('button'); button.className = 'calc-btn';
    button.tabIndex = 0;
    button.style.gridColumn = 'span ' + width;
    button.style.setProperty('--v', color);
    button.innerHTML =
      `<span class="regular-text">${text}</span>`+
      `<span class="shift-text">${shiftText}</span>`+
      `<span class="alpha-text">${alphaText}</span>`;
    button.onclick = () => {
      if (parent.modifierKeyStates?.shift) this.shiftOnclick();
      else if (parent.modifierKeyStates?.alpha) this.alphaOnclick();
      else this.onclick();

      if (!['SHIFT', 'ALPHA'].includes(originalText)) {
        parent.shift(false); parent.alpha(false);
      }
    };
    button.oncontextmenu = () => {
      if (button.hasAttribute('previewing')) return;
      let { width: originalWidth, height: originalHeight } = button.getBoundingClientRect();
      let originalText = button.style.cssText;

      button.style.cssText = `${originalText}; flex: 0 !important; transform: translate(-50%, -50%); zoom: 3; transform-origin: center center; position: absolute; top: 50%; left: 50%; width: ${originalWidth + 'px'}; height: ${originalHeight + 'px'}; z-index: 100000;`;
      button.setAttribute('previewing', undefined);
      setTimeout(() => {
        button.style.cssText = originalText;
        button.removeAttribute('previewing');
      }, 3000);
    };
    this.button = button;
    this.text = text;
    this.shiftText = shiftText;
    this.alphaText = alphaText;
    this.onclick = () => { onclick(this, text); };
    this.shiftOnclick = () => { shiftOnclick(this, shiftText); };
    this.alphaOnclick = () => { alphaOnclick(this, alphaText); };
    this.color = color;
    Object.defineProperties(this, {
      onclick: { writable: false, configurable: false, enumerable: false },
      shiftOnclick: { writable: false, configurable: false, enumerable: false },
      alphaOnclick: { writable: false, configurable: false, enumerable: false },
      button: { writable: false, configurable: false, enumerable: false },
    })
  }
};
class ButtonRow {
  constructor() {
    const row = $n('calc-row');
    this.content = o.createArray('ButtonRowContent', []);
    this.row = row;
    Object.defineProperties(this, {
      content: { configurable: false, enumerable: false },
      row: { configurable: false, enumerable: false },
    });
  }
  /**
   * @param {...Button} buttons
   */
  append(...buttons) {
    // console.log('method:', 'buttons', buttons.map(button => button.button));
    this.row.append(...buttons.map(button => { button.button.id = o.generateUID(); return button.button }));
    this.#updateContent();
  }

  /** @private */
  #updateContent() {
    const children = this.row.children;
    this.content = o.createArray('ButtonRowContent', Array.from({ length: this.row.childElementCount })
      .map((_, i) => children.item(i))
    );
    this.row.style.gridTemplateColumns =
      `repeat(${
        eval([...children].map(child => child.style.gridColumn.match(/\d+/g)?.[0] ?? 1).join('+'))
      }, 1fr)`;
  }
};
class ButtonGroup {
  constructor() {
    const group = $n('calc-group');
    this.content = o.createArray('ButtonGroupContent', []);
    this.group = group;
    Object.defineProperties(this, {
      content: { configurable: false, enumerable: false },
      group: { configurable: false, enumerable: false },
    })
  }
  /**
   * @param {...ButtonRow} rows
   */
  append(...rows) {
    // console.log('method:', 'rows', rows.map(row => row.row));
    this.group.append(...rows.map(row => { row.row.id = o.generateUID(); return row.row ?? 'undefined' }));
    this.#updateContent();
  }

  /** @private */
  #updateContent() {
    const children = this.group.children;
    this.content = o.createArray('ButtonGroupContent', Array.from({ length: this.group.childElementCount })
      .map((_, i) => (
        o.createArray('ButtonRowContent', Array.from({ length: children.item(i).childElementCount })
          .map((_, j) => children.item(i).children.item(j))
        )
      ))
    );
    // this.group.style.gridRow = 'span ' + children.length;
    this.group.style.flex = eval(
      [...children.item(0).children]
      .map(child => child.style.gridColumn.match(/\d+/g)?.[0] ?? 1)
      .join('+')
    );
  }
};

class Toast {
  /**
   * @param {string} text
   * @param {'info' | 'warning' | 'error' | 'success'} type
   * @param {'favicon.ico'} icon
   * @param {number} timeout
   */
  constructor(text = 'This is a toast', type = 'info', icon = './assets/icons/info.svg', timeout = 5000) {
    const toasts = $('.toasts');
    const toast = $n('div');
    toast.innerHTML = `
      <img src="${icon}" alt="Icon" class="icon">
      <div class="title">${text.toSafeHTML()}</div>
      <div class="buttons">
        <button class="btn-transparent close">
          <i class="mdi-close"></i>
          <span class="text">Close<br><span dim style="font-size:0.75em">Hold <div class="shortcut" style="transform:scale(0.75)"><div key="ctrl"></div></div> to close all</span></span>
        </button>
        <button class="btn-transparent copy">
          <i class="mdi-content-copy"></i>
          <span class="text">Copy</span>
        </button>
      </div>`;
    toast.className = 'toast toast-' + type;
    toast.$('.icon').src = icon;
    toast.$('.title').textContent = text;

    toast.$('.close').onclick = e => {
      if (e.ctrlKey) $$('.toast').forEach(item => item.remove());
      else toast.remove();
    };
    toast.$('.copy').onclick = async () => {
      try {
        await navigator.clipboard?.writeText?.(`${type.toUpperCase()}: ${text}`);
      } catch {
        let text = $n('textarea');
        text.value = `${type.toUpperCase()}: ${text}`;
        text.select();
        text.style.zoom = '0.001';
        $body.append(text);
        document.execCommand('copy');
        $body.removeChild(text);
      }
    };

    toast.id = o.generateUID();
    toasts.append(toast);

    this.text = text; this.type = type; this.icon = icon; this.timeout = timeout;
    this.node = toast; this.id = toast.id;
    let removed = false;
    Object.defineProperties(this, {
      isRemoved: {
        configurable: false,
        enumerable: true,
        get() { return removed; },
      },
      node: { enumerable: false },
    });
    this.remove = function() { toast.remove(); };
    setTimeout(() => {
      toast.remove();
      removed = true;
    }, timeout);
  }
  toString() { return `${this.type.toUpperCase()}: ${this.text}`; }
  valueOf() { return `${this.type.toUpperCase()}: ${this.text}`; }
}
class Console {
  constructor() {
    this.logs = []; this.warnings = []; this.errors = [];
    this.debugs = [];
  }
  log(...args) {
    console.log('[ GLOBAL CONSOLE ]\n', ...args);
    return this.logs.push({ type: 'log', message: args, timestamp: new Date() })
  };
  warn(...args) {
    console.warn('[ GLOBAL CONSOLE ]\n', ...args);
    return this.warnings.push({ type: 'warn', message: args, timestamp: new Date() })
  };
  error(...args) {
    console.error('[ GLOBAL CONSOLE ]\n', ...args);
    return this.errors.push({ type: 'error', message: args, timestamp: new Date() })
  };
  debug(...args) {
    console.debug('[ GLOBAL CONSOLE ]\n', ...args);
    return this.debugs.push({ type: 'debug', message: args, timestamp: new Date() })
  }
  clear() {
    console.clear();
    this.logs = []; this.warnings = []; this.errors = []; this.debugs = [];
    return 0;
  }
  toString(opts = { includeTimeStamp: false }) {
    return this.all
      .map(log =>
        `[${log.type.toUpperCase().padStart(5)}${opts.includeTimeStamp ? ` | ${log.timestamp.toTimeString()}` : ''}] ${[...log.message].map(a => String(a).split('\n').join('\n' + ' '.repeat(7 + (opts.includeTimeStamp ? 15 : 0)))).join(' ')}`
      ).join('\n');
  };
  toPretty(opts = { includeTimeStamp: false }) {
    const uuid = o.generateUID();
    console.log(...
      this.all.map(log => {
        return [
          [
            `%c${log.type.toUpperCase().padStart(5)
            }${opts.includeTimeStamp ? `%c${log.timestamp.toTimeString().match(/(\d+:){2}\d+/g)[0]}` : '%c'
            }\n%c${[...log.message,]
              .map(a => {
                if (typeof a !== 'object' || a === null) return a === null ? 'null' : a;
                if (Array.isArray(a)) return 'Array ' + JSON.stringify(a, null, 2);
                const tag = Object.prototype.toString.call(a).slice(8, -1);
                const name = tag === 'Object' ? (a.constructor?.name || 'Object') : tag;
                try { return name + ' ' + JSON.stringify(a, null, 2); }
                catch { return name + ' ' + String(a); }
              })
              .join(' ')}`,
          ],
          [
            `${uuid}: padding: 2px 8px; border-radius: 4px 0 0 4px; background-color: ${log.type === 'log' ? '#2a612c' : log.type === 'warn' ? '#915700' : '#82231d'}; color: #fff; font-weight: bold;`,
            ...(opts.includeTimeStamp
              ? [`${uuid}: padding: 2px 8px; background-color: #061725; color: #4794e6; font-weight: bold; border-radius: 0 4px 4px 0;`]
              : [`${uuid}: `]),
            `${uuid}: padding: 2px 8px; border-radius: 0 4px 4px 0; background-color: #000; color: #e0e0e0;`,
          ],
        ];
      }).flat(10).sort((a) => a.startsWith(uuid) ? 1 : -1).divide().map((a, i) => !i ? a.join('\n') : a.map(b => b.replace(uuid + ': ', ''))).flat(10)
    );
  };
  toConsole() {
    return [...this.all].forEach(item => console[item.type](...item.message));
  };
  /**
   * @returns { { type: 'log' | 'warn' | 'error' | 'debug'; message: any[]; timestamp: Date }[] }
   */
  get all() { return [...this.logs, ...this.warnings, ...this.errors, ...this.debugs] }
  get size() { return this.all.length }
};
/**
 * @typedef {Object} KeyLevel
 * @property {{
 *  name: string; value: any | Null;
 *  descriptor: { enumerable: boolean; configurable: boolean; writable: boolean }
 * }[]} keys                       - All own keys at this level
 * @property {string[]} prototype  - The prototype chain entry (or empty)
 */
class KeyInspector {
  /**
   * @param {Object} obj - The object to inspect
   * @param {Object} [options]
   * @param {boolean} [options.includeSymbols=false] - Include Symbol keys
   * @param {boolean} [options.stringifySymbols=true]  - Convert Symbols to strings
   */
  constructor(obj, options = {}) {
    this.obj = obj;
    this.options = { includeSymbols: false, stringifySymbols: true, ...options };
  }

  /**
   * Get ALL keys from the object and its prototype chain.
   * @returns {KeyLevel[]}
   */
  inspect() {
    const levels = [];
    let current = this.obj;

    while (current !== null) {
      const keys = this.#getKeys(current);
      const proto = Object.getPrototypeOf(current);
      levels.push({ keys: o.createArray('KeyInspectorKeys', keys), prototype: proto ? [this.#getName(proto)] : [] });
      current = proto;
    }

    return o.createArray('KeyInspectorArray', levels);
  }

  /**
   * @private
   */
  #getKeys(obj) {
    let keys = Reflect.ownKeys(obj);

    if (!this.options.includeSymbols) {
      keys = keys.filter(k => typeof k === 'string');
    } else if (this.options.stringifySymbols) {
      keys = keys.map(k => (typeof k === 'symbol' ? k.toString() : k));
    }
    keys = keys.map(k => {
      let prop = Object.getOwnPropertyDescriptor(obj, k);
      let stringProp = {};
      stringProp.toString = () =>
        `${prop.enumerable ? 'e' : '-'}${prop.configurable ? 'c' : '-'}${prop.writable ? 'w' : '-'}`;
      stringProp.valueOf = () =>
        `${prop.enumerable ? 'e' : '-'}${prop.configurable ? 'c' : '-'}${prop.writable ? 'w' : '-'}`;

      return {
        name: k, value: prop.value ?? new Null, descriptor: {
          enumerable: prop.enumerable ?? false,
          configurable: prop.configurable ?? false,
          writable: prop.writable ?? false,
          string: `${prop.enumerable ? 'e' : '-'}${prop.configurable ? 'c' : '-'}${prop.writable ? 'w' : '-'}`,
          __proto__: { ...stringProp }
        }
      };
    });

    return keys;
  }

  /**
   * @private
   */
  #getName(obj) {
    if (obj === null) return '<null>';
    // 1) Symbol.toStringTag-aware tag (built-ins, custom tags) via Object.prototype.toString
    const tag = toString.call(obj).slice(8, -1);
    if (tag && tag !== 'Object') return tag;
    // 2) Fallback to constructor (covers mathjs classes, which set no @@toStringTag)
    const ctor = obj.constructor;
    if (ctor && ctor.name) return `${ctor.name}.prototype`;
    // 3) Nothing found
    return 'Unknown';
  }

  /**
   * Flatten all keys into a single array.
   * @returns {string[]}
   */
  allKeys() { return this.inspect().flatMap(level => level.keys); }

  /**
   * Check if a key exists anywhere in the chain.
   * @param {string} key
   * @returns {boolean}
   */
  has(key) { return this.allKeys().includes(key); }

  /**
   * Pretty-print the result.
   * @returns {string}
   */
  toString() {
    return this.inspect()
      .map((level, i) => {
        const indent = '  '.repeat(i + 1);
        const proto = level.prototype.length ? level.prototype[0] : 'null';
        const keys = level.keys.length
          ? level.keys
              .map(
                (l, j) =>
                  `${String(l.name)} (${(typeof l.value).slice(0, 3)} | ${l.descriptor})${(j + 1) % 3 === 0 ? ',\n' + indent : ', '}`
              )
              .join('')
          : '(none)';
        return `${indent.slice(2)}${proto}\n${indent}${keys}`;
      })
      .join('\n');
  }
}
// NOT TODO
// class ContextMenu {
//   constructor() {
//     let menu = $('.context-menu');
//     this.element = menu;
//   }
//   /**
//    * @param {...ContextMenuItem} items
//    */
//   append(...items) {
//     this.element.append(...items.map(item => item.element));
//   }
// }
// class ContextMenuItem {
//   /**
//    * @param {{ label: string; shortcut?: Shortcut[]; enabled?: boolean; }} options
//    */
//   constructor(options) {
//     if (arguments.length === 0) throw new TypeError(`Failed to construct 'ContextMenuItem': 1 argument required, but only 0 present.`);
//     this.label = options.label;
//     this.shortcut = options.shortcut;

//     { label ??= '', shortcut ??= [''] }

//     let element = $n('button');
//     this.element = element;
//     element.className = 'item btn-transparent';
//     let items = {
//       label: $n('span'), shortcut: $n('div'),
//     };

//     items.label.className = 'text';
//     items.label.textContent = options.label;
//   }
// }


let removeLoading = () => {
  document.querySelector('main > .loading')?.remove?.();
};
document.addEventListener('DOMContentLoaded', () => {
  removeLoading();
  if ($body.innerHTML.includes('class="toasts"')) $body.append(Object.assign($n('section'), { className: 'toasts' }));
});
if (!location.pathname.includes('index.html') && location.hash === '#embed') {
  let _close = close;
  var close = () => {
    window.parent.postMessage({ type: 'close-iframe', id: navigation.currentEntry.key }, '*');
    _close();
  };
} else if (location.pathname.includes('index.html')) {
  window.addEventListener('message', event => {
    if (event.data?.type === 'close-iframe') {
      // Find the iframe that sent the message
      const iframeWindow = [...document.querySelectorAll('iframe')].find(
        f => f.contentWindow === event.source && f.contentWindow.navigation.currentEntry.key === event.data?.id
      )?.parentElement;
      if (iframeWindow) iframeWindow.remove();
    }
  });
}

function getHelpMenuItems() {
  const grouped = {};
  const scope = math.expression.mathWithTransform;
  for (const key of Object.keys(scope)) {
    const doc = math.docs[key];
    if (!doc) continue;
    const /** @type {string} */ category = doc.category || 'Other';
    const isFunction = typeof scope[key] === 'function';
    const prefix = isFunction ? '(ƒ) ' : '(c) ';
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push({
      label: key, click: () => api.openNewWindow(`uc://public/help.html?function=${key}`)
    });
  }
  return Object.keys(grouped)
    .sort()
    .map(categoryName => ({
      label: categoryName,
      submenu: grouped[categoryName].sort(
        (a, b) => a.label.localeCompare(b.label)
      ),
    }));
}
try {
  api.updateHelp(
    getHelpMenuItems()
      .map(a => a.label + ':' + a.submenu.map(a => a.label).join(','))
      .join(';')
  );
} catch { console.warn('%cmathjs%c is probably not imported', codeStyle, ''); }

const getSettings = function() { return settings };
export {
  codeStyle, storage, parser, message, getHelpMenuItems,

  $body, $main, $, $$, $n, lastCursorNode,

  colors, getSettings, N, o, m,

  CompressedStorage, Compressor,
  Toast, Console, KeyInspector,
  Button, ButtonDisplay, ButtonGroup,
  ButtonRow, CalcDisplay,
}
