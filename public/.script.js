try { math = require('mathjs') } catch {}

// ── Settings State ──────────────────────────────────────────────
const calcSettings = {
  mathIO: 'math',
  precision: 16,
  numberMode: 'number',
  complexOutput: 'algebraic',
};

// ── CalcDisplay ─────────────────────────────────────────────────
const calcDisplay = new CalcDisplay(
  CSS.percent(100),
  CSS.px(250),
  { append: true, },
  ['calculator', 'modes', 'settings', 'mem', 'hyp', 'toolbox', 'vars', 'si']
);

calcDisplay.screen('calculator').append($n('calc-input'), $n('calc-res'));
calcDisplay.screen('calculator').style.height =
  `calc(${calcDisplay.height} - 22px - ${
    getComputedStyle(calcDisplay.screen('calculator')).padding.slice(0, -2) * 2
  }px)`;

// ── Screen Content ──────────────────────────────────────────────
calcDisplay.screen('modes').innerHTML = `
  <button onclick="switchScreen('calculator')">
    <i class="mdi mdi-calculator-variant-outline"></i>
    <span>Calculation</span>
  </button>
  <button>
    <i class="mdi mdi-language-javascript"></i>
    <span>JavaScript</span>
  </button>
  <button>
    <i class="mdi mdi-equal"></i>
    <span>Equations</span>
  </button>`;

function renderSettingsScreen() {
  const maxPrec = calcSettings.numberMode === 'BigNumber' ? 99 : 16;
  const modes = ['number', 'bigint', 'BigNumber', 'Fraction'];
  calcDisplay.screen('settings').innerHTML = `
    <div class="setting-row">
      <span class="setting-label">Math I/O</span>
      <div class="setting-value">
        <button class="${calcSettings.mathIO === 'math' ? 'active' : ''}" onclick="setSetting('mathIO','math')">Math</button>
        <button class="${calcSettings.mathIO === 'line' ? 'active' : ''}" onclick="setSetting('mathIO','line')">Line</button>
      </div>
    </div>
    <div class="setting-row">
      <span class="setting-label">Precision (${calcSettings.precision})</span>
      <div class="setting-value">
        <button onclick="cyclePrecision(-1)">−</button>
        <button onclick="cyclePrecision(1)">+</button>
      </div>
    </div>
    <div class="setting-row">
      <span class="setting-label">Number</span>
      <div class="setting-value">
        ${modes.map(m => `<button class="${calcSettings.numberMode === m ? 'active' : ''}" onclick="setSetting('numberMode','${m}')">${m}</button>`).join('')}
      </div>
    </div>
    <div class="setting-row">
      <span class="setting-label">Complex</span>
      <div class="setting-value">
        <button class="${calcSettings.complexOutput === 'algebraic' ? 'active' : ''}" onclick="setSetting('complexOutput','algebraic')">a+bi</button>
        <button class="${calcSettings.complexOutput === 'polar' ? 'active' : ''}" onclick="setSetting('complexOutput','polar')">r∠θ</button>
      </div>
    </div>`;
}

function setSetting(key, value) {
  calcSettings[key] = value;
  if (key === 'numberMode') {
    math.config({ number: value });
    if (value !== 'BigNumber' && calcSettings.precision > 16) calcSettings.precision = 16;
  }
  renderSettingsScreen();
}
function cyclePrecision(delta) {
  const max = calcSettings.numberMode === 'BigNumber' ? 99 : 16;
  calcSettings.precision = Math.max(0, Math.min(max, calcSettings.precision + delta));
  renderSettingsScreen();
}

calcDisplay.screen('mem').innerHTML = `
  <span class="screen-title">Memory</span>
  <div class="screen-content">
    <table class="mem-table">
      <thead><tr><th>#</th><th>Action</th><th>Description</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>MC</td><td>Memory Clear</td></tr>
        <tr><td>2</td><td>M+</td><td>Memory Add</td></tr>
        <tr><td>3</td><td>M−</td><td>Memory Subtract</td></tr>
        <tr><td>4</td><td>M</td><td>Insert Memory variable</td></tr>
      </tbody>
    </table>
  </div>`;

calcDisplay.screen('hyp').innerHTML = `
  <span class="screen-title">Hyperbolic</span>
  <div class="screen-content">
    <table class="mem-table">
      <thead><tr><th>#</th><th>Function</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>sinh</td></tr>
        <tr><td>2</td><td>cosh</td></tr>
        <tr><td>3</td><td>tanh</td></tr>
        <tr><td>4</td><td>sinh⁻¹</td></tr>
        <tr><td>5</td><td>cosh⁻¹</td></tr>
        <tr><td>6</td><td>tanh⁻¹</td></tr>
      </tbody>
    </table>
  </div>`;

calcDisplay.screen('toolbox').innerHTML = `
  <span class="screen-title">Toolbox</span>
  <div class="screen-content">
    <span style="opacity:0.5; font-size:0.8rem; text-align:center;">Physical constants &amp; units<br>coming soon</span>
  </div>`;

calcDisplay.screen('vars').innerHTML = `
  <span class="screen-title">Variables</span>
  <div class="screen-content">
    <table class="vars-table" id="vars-table">
      <thead><tr><th>Name</th><th>Value</th></tr></thead>
      <tbody></tbody>
    </table>
    <span style="opacity:0.5; font-size:0.8rem; text-align:center; margin-top:4px;">No variables defined</span>
  </div>`;

calcDisplay.screen('si').innerHTML = `
  <span class="screen-title">SI Prefixes</span>
  <div class="screen-content">
    <table class="si-table">
      <thead><tr><th>Symbol</th><th>Prefix</th><th>Factor</th></tr></thead>
      <tbody>
        <tr><td>E</td><td>exa</td><td>10¹⁸</td></tr>
        <tr><td>P</td><td>peta</td><td>10¹⁵</td></tr>
        <tr><td>T</td><td>tera</td><td>10¹²</td></tr>
        <tr><td>G</td><td>giga</td><td>10⁹</td></tr>
        <tr><td>M</td><td>mega</td><td>10⁶</td></tr>
        <tr><td>k</td><td>kilo</td><td>10³</td></tr>
        <tr><td>h</td><td>hecto</td><td>10²</td></tr>
        <tr><td>da</td><td>deca</td><td>10¹</td></tr>
        <tr><td></td><td>(base)</td><td>10⁰</td></tr>
        <tr><td>d</td><td>deci</td><td>10⁻¹</td></tr>
        <tr><td>c</td><td>centi</td><td>10⁻²</td></tr>
        <tr><td>m</td><td>milli</td><td>10⁻³</td></tr>
        <tr><td>μ</td><td>micro</td><td>10⁻⁶</td></tr>
        <tr><td>n</td><td>nano</td><td>10⁻⁹</td></tr>
        <tr><td>p</td><td>pico</td><td>10⁻¹²</td></tr>
        <tr><td>f</td><td>femto</td><td>10⁻¹⁵</td></tr>
      </tbody>
    </table>
  </div>`;

renderSettingsScreen();

// ── Helpers ─────────────────────────────────────────────────────
function primeFactorize(n) {
  n = Math.abs(Math.round(n));
  if (n <= 1) return [n];
  const factors = [];
  let d = 2;
  while (d * d <= n) {
    while (n % d === 0) { factors.push(d); n /= d; }
    d++;
  }
  if (n > 1) factors.push(n);
  return factors;
}

function backspace() {
  const el = calcDisplay.display.$('calc-input');
  calcDisplay.setInputText(el.getAttribute('data-content').slice(0, -1));
}

let currentContext = 'calc';

function switchScreen(screen) {
  if (screen !== 'calculator' && calcDisplay.currentScreen === screen) {
    calcDisplay.showScreen('calculator');
    switchGroup2Context('calc');
    return;
  }
  calcDisplay.showScreen(screen);
  if (['mem', 'hyp', 'toolbox', 'vars', 'si', 'settings'].includes(screen)) {
    switchGroup2Context(screen);
  } else {
    switchGroup2Context('calc');
  }
}

// ── ButtonDisplays ──────────────────────────────────────────────
const group1Buttons = new ButtonDisplay({ append: true });
const group2Buttons = new ButtonDisplay({ append: true });

// ── Group 1: Always Visible ─────────────────────────────────────
group1Buttons.fromArray([
  [  // Row 1: system
    [
      [calcDisplay, 'SHIFT', '', '', btn => calcDisplay.shift(true), btn => calcDisplay.shift(false), btn => calcDisplay.shift(true), 1.2],
      [calcDisplay, 'ALPHA', '', '', btn => calcDisplay.alpha(true), btn => calcDisplay.alpha(false), btn => calcDisplay.alpha(true), 1.2],
      [calcDisplay, '<i class="mdi mdi-arrow-left"></i>', '', '', btn => {}],
      [calcDisplay, '<i class="mdi mdi-arrow-right"></i>', '', '', btn => {}],
      [calcDisplay, 'MODE', 'SETTINGS', '',
        () => switchScreen(calcDisplay.currentScreen === 'modes' ? 'calculator' : 'modes'),
        () => switchScreen(calcDisplay.currentScreen === 'settings' ? 'calculator' : 'settings')],
      [calcDisplay, 'SETTINGS', '', '', btn => switchScreen('settings')],
    ],
  ],
  [  // Row 2: menus
    [
      [calcDisplay, 'MEM', '', '', btn => switchScreen('mem')],
      [calcDisplay, 'TOOLBOX', '', '', btn => switchScreen('toolbox')],
      [calcDisplay, '<i class="mdi mdi-arrow-down"></i>', '', '', btn => {}],
      [calcDisplay, '<i class="mdi mdi-arrow-up"></i>', '', '', btn => {}],
      [calcDisplay, 'VARS', '', '', btn => switchScreen('vars')],
      [calcDisplay, 'SI', '', '', btn => switchScreen('si')],
    ],
  ],
]);

// ── Group 2: Dynamic Context ────────────────────────────────────
function switchGroup2Context(context) {
  currentContext = context;
  switch (context) {
    case 'calc':
      group2Buttons.fromArray([
        [  // Row 1: hyp, trig, ×10^x
          [
            [calcDisplay, 'hyp', '', '', btn => switchScreen('hyp')],
            [calcDisplay, 'sin', 'sin⁻¹', '', btn => calcDisplay.addInputText('sin('), btn => calcDisplay.addInputText('asin(')],
            [calcDisplay, 'cos', 'cos⁻¹', '', btn => calcDisplay.addInputText('cos('), btn => calcDisplay.addInputText('acos(')],
            [calcDisplay, 'tan', 'tan⁻¹', '', btn => calcDisplay.addInputText('tan('), btn => calcDisplay.addInputText('atan(')],
            [calcDisplay, '×10<sup>x</sup>', '', '', btn => calcDisplay.addInputText('*10^(')],
          ],
        ],
        [  // Row 2: powers, roots, DMS
          [
            [calcDisplay, 'x²', 'x⁻¹', '', btn => calcDisplay.addInputText('^2'), btn => calcDisplay.addInputText('^(-1)')],
            [calcDisplay, 'x³', '∛', '', btn => calcDisplay.addInputText('^3'), btn => calcDisplay.addInputText('cbrt(')],
            [calcDisplay, 'x<sup>y</sup>', 'n√', '', btn => calcDisplay.addInputText('^'), btn => calcDisplay.addInputText('nthRoot(')],
            [calcDisplay, '√', 'x!', '', btn => calcDisplay.addInputText('sqrt('), btn => calcDisplay.addInputText('!')],
            [calcDisplay, '°′″', '', '', btn => calcDisplay.addInputText('°')],
          ],
        ],
        [  // Row 3: exp/log, factorize, i
          [
            [calcDisplay, '10<sup>x</sup>', 'log', '', btn => calcDisplay.addInputText('10^('), btn => calcDisplay.addInputText('log(')],
            [calcDisplay, '2<sup>x</sup>', 'log₂', '', btn => calcDisplay.addInputText('2^('), btn => calcDisplay.addInputText('log2(')],
            [calcDisplay, 'e<sup>x</sup>', 'ln', '', btn => calcDisplay.addInputText('e^('), btn => calcDisplay.addInputText('ln(')],
            [calcDisplay, '2×…', '', '', btn => {
              try {
                const res = math.evaluate(calcDisplay.content[0], { ans: calcDisplay.previousAnswer });
                const factors = primeFactorize(Number(res));
                calcDisplay.setResultText(factors.join(' × '));
                calcDisplay.previousAnswer = res.toString();
              } catch (e) { calcDisplay.setResultText('Error'); }
            }],
            [calcDisplay, 'i', '', '', btn => calcDisplay.addInputText('i')],
          ],
        ],
        [  // Row 4: constants, parens, convert
          [
            [calcDisplay, 'π', 'e', 'φ', btn => calcDisplay.addInputText('pi'), btn => calcDisplay.addInputText('e'), btn => calcDisplay.addInputText('phi')],
            [calcDisplay, '⏴⏵', '', '', btn => {}],
            [calcDisplay, '(', '', '', btn => calcDisplay.addInputText('(')],
            [calcDisplay, ')', ',', '', btn => calcDisplay.addInputText(')'), btn => calcDisplay.addInputText(',')],
            [calcDisplay, '→', '', '', btn => calcDisplay.addInputText('→')],
          ],
        ],
        [  // Row 5: 7-9, backspace, AC
          [
            [calcDisplay, '7', '', '', btn => calcDisplay.addInputText('7')],
            [calcDisplay, '8', '', '', btn => calcDisplay.addInputText('8')],
            [calcDisplay, '9', '', '', btn => calcDisplay.addInputText('9')],
            [calcDisplay, '<i class="mdi mdi-backspace-outline"></i>', '', '', btn => backspace()],
            [calcDisplay, 'AC', 'RELOAD', 'QUIT', btn => calcDisplay.setInputText(''), btn => location.reload(), btn => api.close()],
          ],
        ],
        [  // Row 6: 4-6, ×, ÷
          [
            [calcDisplay, '4', '', '', btn => calcDisplay.addInputText('4')],
            [calcDisplay, '5', '', '', btn => calcDisplay.addInputText('5')],
            [calcDisplay, '6', '', '', btn => calcDisplay.addInputText('6')],
            [calcDisplay, '×', '', '', btn => calcDisplay.addInputText('*')],
            [calcDisplay, '÷', '', '', btn => calcDisplay.addInputText('/')],
          ],
        ],
        [  // Row 7: 1-3, +, −
          [
            [calcDisplay, '1', '', '', btn => calcDisplay.addInputText('1')],
            [calcDisplay, '2', '', '', btn => calcDisplay.addInputText('2')],
            [calcDisplay, '3', '', '', btn => calcDisplay.addInputText('3')],
            [calcDisplay, '+', '', '', btn => calcDisplay.addInputText('+')],
            [calcDisplay, '−', '', '', btn => calcDisplay.addInputText('-')],
          ],
        ],
        [  // Row 8: 0, ., ans, exe
          [
            [calcDisplay, '0', '', '', btn => calcDisplay.addInputText('0')],
            [calcDisplay, '.', '', '', btn => calcDisplay.addInputText('.')],
            [calcDisplay, 'Ans', '', '', btn => calcDisplay.addInputText('ans')],
            [calcDisplay, 'exe', '', '', btn => calcDisplay.evaluate(), btn => {}, btn => {}, 2],
          ],
        ],
      ]);
      break;

    case 'mem':
      group2Buttons.fromArray([
        [[
          [calcDisplay, '1', '', '', btn => calcDisplay.addInputText('MC(')],
          [calcDisplay, '2', '', '', btn => calcDisplay.addInputText('M+(')],
          [calcDisplay, '3', '', '', btn => calcDisplay.addInputText('M-(')],
          [calcDisplay, '4', '', '', btn => calcDisplay.addInputText('M')],
        ]],
      ]);
      break;

    case 'hyp':
      group2Buttons.fromArray([
        [[
          [calcDisplay, '1', '', '', btn => calcDisplay.addInputText('sinh(')],
          [calcDisplay, '2', '', '', btn => calcDisplay.addInputText('cosh(')],
          [calcDisplay, '3', '', '', btn => calcDisplay.addInputText('tanh(')],
        ]],
        [[
          [calcDisplay, '4', '', '', btn => calcDisplay.addInputText('asinh(')],
          [calcDisplay, '5', '', '', btn => calcDisplay.addInputText('acosh(')],
          [calcDisplay, '6', '', '', btn => calcDisplay.addInputText('atanh(')],
        ]],
      ]);
      break;

    case 'toolbox':
      group2Buttons.fromArray([
        [[
          [calcDisplay, 'π', '', '', btn => calcDisplay.addInputText('pi')],
          [calcDisplay, 'e', '', '', btn => calcDisplay.addInputText('e')],
          [calcDisplay, 'φ', '', '', btn => calcDisplay.addInputText('phi')],
          [calcDisplay, 'c', '', '', btn => calcDisplay.addInputText('299792458')],
          [calcDisplay, 'G', '', '', btn => calcDisplay.addInputText('6.674e-11')],
        ]],
      ]);
      break;

    case 'vars':
      group2Buttons.fromArray([
        [[
          [calcDisplay, 'x', '', '', btn => calcDisplay.addInputText('x')],
          [calcDisplay, 'y', '', '', btn => calcDisplay.addInputText('y')],
          [calcDisplay, 'z', '', '', btn => calcDisplay.addInputText('z')],
          [calcDisplay, 'a', '', '', btn => calcDisplay.addInputText('a')],
          [calcDisplay, 'b', '', '', btn => calcDisplay.addInputText('b')],
          [calcDisplay, 'n', '', '', btn => calcDisplay.addInputText('n')],
        ]],
      ]);
      break;

    case 'si':
      group2Buttons.fromArray([
        [[
          [calcDisplay, 'E', '', '', btn => calcDisplay.addInputText('*1e18')],
          [calcDisplay, 'P', '', '', btn => calcDisplay.addInputText('*1e15')],
          [calcDisplay, 'T', '', '', btn => calcDisplay.addInputText('*1e12')],
          [calcDisplay, 'G', '', '', btn => calcDisplay.addInputText('*1e9')],
          [calcDisplay, 'M', '', '', btn => calcDisplay.addInputText('*1e6')],
        ]],
        [[
          [calcDisplay, 'k', '', '', btn => calcDisplay.addInputText('*1e3')],
          [calcDisplay, 'h', '', '', btn => calcDisplay.addInputText('*1e2')],
          [calcDisplay, 'da', '', '', btn => calcDisplay.addInputText('*1e1')],
          [calcDisplay, 'd', '', '', btn => calcDisplay.addInputText('*1e-1')],
          [calcDisplay, 'c', '', '', btn => calcDisplay.addInputText('*1e-2')],
        ]],
        [[
          [calcDisplay, 'm', '', '', btn => calcDisplay.addInputText('*1e-3')],
          [calcDisplay, 'μ', '', '', btn => calcDisplay.addInputText('*1e-6')],
          [calcDisplay, 'n', '', '', btn => calcDisplay.addInputText('*1e-9')],
          [calcDisplay, 'p', '', '', btn => calcDisplay.addInputText('*1e-12')],
          [calcDisplay, 'f', '', '', btn => calcDisplay.addInputText('*1e-15')],
        ]],
      ]);
      break;

    case 'settings':
      group2Buttons.fromArray([
        [[
          [calcDisplay, '<i class="mdi mdi-keyboard-return"></i>', '', '', btn => switchScreen('calculator')],
        ]],
      ]);
      break;

    default:
      switchGroup2Context('calc');
      break;
  }
}

switchGroup2Context('calc');

// ── Math Config Wrapper ─────────────────────────────────────────
const originalMathDotConfig = math.config;
math.config = (...args) => {
  const res = originalMathDotConfig(...args);
  const indicators = {
    number: calcDisplay.display.$('.number-number-indicator'),
    bignum: calcDisplay.display.$('.number-bignum-indicator'),
    bigint: calcDisplay.display.$('.number-bigint-indicator'),
    fraction: calcDisplay.display.$('.number-fraction-indicator'),
  };
  switch (originalMathDotConfig().number) {
    case 'number':
      indicators.number.classList.remove('mdi-inactive');
      indicators.bignum.classList.add('mdi-inactive');
      indicators.bigint.classList.add('mdi-inactive');
      indicators.fraction.classList.add('mdi-inactive');
      break;
    case 'BigNumber':
      indicators.number.classList.add('mdi-inactive');
      indicators.bignum.classList.remove('mdi-inactive');
      indicators.bigint.classList.add('mdi-inactive');
      indicators.fraction.classList.add('mdi-inactive');
      break;
    case 'bigint':
      indicators.number.classList.add('mdi-inactive');
      indicators.bignum.classList.add('mdi-inactive');
      indicators.bigint.classList.remove('mdi-inactive');
      indicators.fraction.classList.add('mdi-inactive');
      break;
    case 'Fraction':
      indicators.number.classList.add('mdi-inactive');
      indicators.bignum.classList.add('mdi-inactive');
      indicators.bigint.classList.add('mdi-inactive');
      indicators.fraction.classList.remove('mdi-inactive');
      break;
    default: break;
  };
  return res;
};
math.config();
math.import({
  logn: (a, b) => math.divide(math.log10(a), math.log10(b)),
  ln: a => math.log(a, math.e),
  log2: a => math.log(a, 2),
  Sum: (x, from, to, t) => {
    let a = 0;
    for (let i = from; i < to; i++) {
      a = math.add(a, math.evaluate(t, { [x]: i }));
    };
    return a
  },
  if: (a, b, c) => math.evaluate(new math.ConditionalNode(
    math.parse(a), math.parse(b), math.parse(c)
  ))
});
math.log = (a, b = 10) => math.logn(a, b);

// ── Init ────────────────────────────────────────────────────────
math.config({ number: 'number' });
function main() {
  calcDisplay.setInputText('');
};

requestAnimationFrame(() => main());
/**
 * @param {string} text
 * @param {number} timeout
 */
var alert = function(text, timeout = 5000) {
  const alertElement = $n('calc-alert');
  alertElement.id = o.generateUID();
  alertElement.innerHTML = `<span>${text.toSafeHTML()}</span>`;
  calcDisplay.display.append(alertElement);
  setTimeout(() => {
    alertElement.remove();
  }, timeout);
};
