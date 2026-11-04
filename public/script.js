import {
  CalcDisplay, ButtonDisplay, colors, N, codeStyle,
  $, $$, $n, $body, $main, parser, m, o, lastCursorNode,
  getSettings, storage, getHelpMenuItems
} from './libs/module.js';
let settings = getSettings();
// #region - This part is only present in development
Object.entries({
  $, $$, $n, $body, $main, parser, m, o, getSettings,
  storage, storage, getHelpMenuItems
}).forEach(item => window[item[0]] = item[1]);
// #endregion

var _append = function() { return append(arguments[1]) };
var evaluate = async function() {
  let res = N;
  try {
    res = parser.evaluate(calcDisplay.content[0]);
  } catch {}
  try {
    if (res && BigInt.isInteger(res?.toString() ?? 0))
      calcDisplay.setResultText(
        math.parse((() => {
          const counts = new Map();
          for (const f of m.factorize(BigInt(res?.toFixed?.() ?? res?.toString?.()))) counts.set(f, (counts.get(f) ?? 0n) + 1n);
          const result = [];
          for (const [base, count] of counts) result.push(count > 1n ? [base, count] : base);
          const res = result.map(a => !a[0] ? a.toString() : a.join('^')).join('*');
        })())
      );
    else calcDisplay.setResultText(new SyntaxError('Not an integer'));
  } catch (error) {
    if (error.message.includes('to a BigInt'))
      calcDisplay.setResultText(new SyntaxError('Not an integer'));
  }
};
var globalSettings = {
  outputMode: 'evaluate',
};

const PARENTHESIS = new Set(['(', ')', '[', ']', '{', '}']);
const OPERATORS = new Set([
  '+', '-', '*', '/', '%', '‰', '‱',
  '^', '!', '&', '|', '~',
  '×', '–', '—', '.*', '.*', '<<', '=',
  '>>', '>>>', '==', '!=', '<', '>', '<=', '>=',
  'and', 'or', 'not', 'xor', 'in', 'to', 'mod',
]);
// const FUNCTIONS = new Set(
//   Object.entries(math)
//     .filter(a => typeof a[1] === 'function')
//     .filter(a => {
//       try {
//         if (math.help(a[1]) === undefined)
//           throw new Error('No documentation found on "' + a[1] + '"');;
//         return true;
//       } catch (e) {
//         return false;
//       }
//     })
//     .map(a => a[0])
// );

// const FUNCTIONS = new Set(
//   Object.keys(math).filter(a => {
//     try {
//       math.evaluate(a);
//       return true && (typeof math[a] === 'function');
//     } catch (e) {
//       return !e.message?.includes?.('Undefined symbol');
//     }
//   }).sort()
// );
const MATH_ENTRIES = new Set(Object.keys(math.expression.mathWithTransform));
const FUNCTIONS = new Set([...MATH_ENTRIES.keys()].filter(a => typeof math.expression.mathWithTransform[a] === 'function'));
const FUNCTION_PATTERN = new RegExp(`\\b(${[...FUNCTIONS].join('|')})\\b`, 'g');

var calcDisplay = new CalcDisplay(
  null, CSS.px(225), { append: true },
  ['calculator']
);
window.calcDisplay = calcDisplay;
const primary = new ButtonDisplay({ append: true });
primary.fromArray(calcDisplay, [
  [
    [
      [
        'SHIFT',
        '',
        '',
        () => {
          calcDisplay.shift(true);
          calcDisplay.alpha(false);
        },
        () => {
          calcDisplay.shift(false);
          calcDisplay.alpha(false);
        },
        () => {
          calcDisplay.shift(true);
          calcDisplay.alpha(false);
        },
        2,
        colors.orange,
      ],
      [
        'ALPHA',
        '',
        '',
        () => {
          calcDisplay.shift(false);
          calcDisplay.alpha(true);
        },
        () => {
          calcDisplay.shift(false);
          calcDisplay.alpha(true);
        },
        () => {
          calcDisplay.shift(false);
          calcDisplay.alpha(false);
        },
        2,
        colors.orange,
      ],
      [null],
      ['<i class="mdi-arrow-left"></i>', '', '', () => buttonCallback('', -1), N, N, 2, colors.red],
      ['<i class="mdi-arrow-down"></i>', '', '', N, N, N, 2, colors.red],
      ['<i class="mdi-arrow-up"></i>', '', '', N, N, N, 2, colors.red],
      ['<i class="mdi-arrow-right"></i>', '', '', () => buttonCallback('', 1), N, N, 2, colors.red],
      [null],
    // ], [
      [
        'Simp', '', '',
        () =>
          calcDisplay.evaluate({}, {
            toggleOutputMode: true,
            number:
              calcDisplay.resultSettings.number === 'fraction'
                ? ((globalSettings.outputMode = 'evaluate'), 'number')
                : ((globalSettings.outputMode = 'simplify'), 'fraction'),
          }),
        N, N, 2, colors.purple
      ],
      [
        'All', '', '',
        () => (constantsMenu.open ? constantsMenu.close() : constantsMenu.showModal()),
        N, N, 2, colors.purple
      ],
      [
        'Vars', '', '',
        () => (scopeMenu.open ? scopeMenu.close() : scopeMenu.showModal()),
        N, N, 2, colors.purple
      ],
      [
        'Exact', '', '',
        () =>
          calcDisplay.evaluate({}, {
            parse:
              globalSettings.outputMode === 'parse'
                ? ((globalSettings.outputMode = 'evaluate'), false)
                : ((globalSettings.outputMode = 'parse'), true),
          }),
        N, N, 2, colors.purple
      ],
    ],
  ],
]);
console.debug('Added %cprimary%c buttons', codeStyle, '');

const buttons = new ButtonDisplay({ append: true });
buttons.fromArray(calcDisplay, [
  [
    [
      [
        '<i class="mdi-keyboard"></i>',
        '',
        '',
        () => (
          $('calc-btns:nth-of-type(3)').toggleAttribute('hidden'),
          $('calc-btns:nth-of-type(2)').toggleAttribute('hidden'),
          calcDisplay.showScreen('calculator')
        ),
        N,
        N,
        1,
        colors.purple,
      ],
      ['[', '', '', _append, N, N, 1, colors.pink],
      [']', '', '', _append, N, N, 1, colors.pink],
      ['frac', '', '', () => buttonCallback('fraction()', -1), N, N, 1, colors.green],
      ['floor', '', '', (_, text) => buttonCallback(text + '()', -1), N, N, 1, colors.green],
      ['ceil', '', '', (_, text) => buttonCallback(text + '()', -1), N, N, 1, colors.green],
      ['trunc', '', '', (_, text) => buttonCallback(text + '()', -1), N, N, 1, colors.green],
    ],
    [
      ['(', '', '', _append, N, N, 1, colors.pink],
      [')', '', '', _append, N, N, 1, colors.pink],
      ['{', '', '', _append, N, N, 1, colors.pink],
      ['}', '', '', _append, N, N, 1, colors.pink],
      [',', ';', ':', _append, _append, _append, 1, colors.pink],
      [
        '<calc-frac><span>d</span><hr><span>dx</span></calc-frac>',
        '',
        '',
        () => buttonCallback('derivative()', -1),
        N,
        N,
        1,
        colors.green,
      ],
      ['2×…', '', '', () => evaluate(), N, N, 1, colors.green],
    ],
    [
      ['MR', '', '', () => append('mem'), N, N, 1, colors.yellow],
      ['10<sup>x</sup>', '', '', () => append('10^'), N, N, 1, colors.blue],
      ['2<sup>x</sup>', '', '', () => append('2^'), N, N, 1, colors.blue],
      ['e<sup>x</sup>', '', '', () => append('e^'), N, N, 1, colors.blue],
      [
        'sin',
        'sin<sup>–1</sup>',
        '',
        () => buttonCallback('sin()', -1),
        () => buttonCallback('asin()', -1),
        N,
        1,
        colors.lime,
      ],
      [
        'cos',
        'cos<sup>–1</sup>',
        '',
        () => buttonCallback('cos()', -1),
        () => buttonCallback('acos()', -1),
        N,
        1,
        colors.lime,
      ],
      [
        'tan',
        'tan<sup>–1</sup>',
        '',
        () => buttonCallback('tan()', -1),
        () => buttonCallback('atan()', -1),
        N,
        1,
        colors.lime,
      ],
    ],
    [
      ['MC', '', '', () => (parser.set('mem', 0), alert('memory = 0')), N, N, 1, colors.yellow],
      ['log<sub>10</sub>', '', '', () => buttonCallback('log10()', -1), N, N, 1, colors.blue],
      ['log<sub>2</sub>', '', '', () => buttonCallback('log2()', -1), N, N, 1, colors.blue],
      ['ln', '', '', () => buttonCallback('ln()', -1), N, N, 1, colors.blue],
      [
        'sinh',
        'sinh<sup>–1</sup>',
        '',
        () => buttonCallback('sinh()', -1),
        () => buttonCallback('asinh()', -1),
        N,
        1,
        colors.lime,
      ],
      [
        'cosh',
        'cosh<sup>–1</sup>',
        '',
        () => buttonCallback('cosh()', -1),
        () => buttonCallback('acosh()', -1),
        N,
        1,
        colors.lime,
      ],
      [
        'tanh',
        'tanh<sup>–1</sup>',
        '',
        () => buttonCallback('tanh()', -1),
        () => buttonCallback('atanh()', -1),
        N,
        1,
        colors.lime,
      ],
    ],
    [
      [
        'M+', '', '',
        () => (
          parser.set('mem', math.add(parser.get('mem'), (calcDisplay.evaluate(), calcDisplay.content[2]))),
          alert('memory = ' + parser.get('mem').valueOf())
        ), N, N, 1, colors.yellow,
      ],
      ['x<sup>2</sup>', '', '', () => append('^2'), N, N, 1, colors.blue],
      ['x<sup>3</sup>', '', '', () => append('^3'), N, N, 1, colors.blue],
      ['x<sup>y</sup>', '', '', () => append('^'), N, N, 1, colors.blue],
      [
        'sec',
        'sec<sup>–1</sup>',
        '',
        () => buttonCallback('sec()', -1),
        () => buttonCallback('asec()', -1),
        N,
        1,
        colors.lime,
      ],
      [
        'csc',
        'csc<sup>–1</sup>',
        '',
        () => buttonCallback('csc()', -1),
        () => buttonCallback('acsc()', -1),
        N,
        1,
        colors.lime,
      ],
      [
        'cot',
        'cot<sup>–1</sup>',
        '',
        () => buttonCallback('cot()', -1),
        () => buttonCallback('acot()', -1),
        N,
        1,
        colors.lime,
      ],
    ],
    [
      [
        'M–', '', '',
        () => (
          parser.set('mem', math.subtract(parser.get('mem'), (calcDisplay.evaluate(), calcDisplay.content[2]))),
          alert('memory = ' + parser.get('mem').valueOf())
        ), N, N, 1, colors.yellow,
      ],
      ['sqrt', '', '', () => buttonCallback('√()', -1), N, N, 1, colors.blue],
      ['cbrt', '', '', () => buttonCallback('∛()', -1), N, N, 1, colors.blue],
      ['root', '', '', () => buttonCallback('√()', -1), N, N, 1, colors.blue],
      [
        'sech',
        'sech<sup>–1</sup>',
        '',
        () => buttonCallback('sech()', -1),
        () => buttonCallback('asech()', -1),
        N,
        1,
        colors.lime,
      ],
      [
        'csch',
        'csch<sup>–1</sup>',
        '',
        () => buttonCallback('csch()', -1),
        () => buttonCallback('acsch()', -1),
        N,
        1,
        colors.lime,
      ],
      [
        'coth',
        'coth<sup>–1</sup>',
        '',
        () => buttonCallback('coth()', -1),
        () => buttonCallback('acoth()', -1),
        N,
        1,
        colors.lime,
      ],
    ],
  ],
  [
    [
      ['C', '', '', () => setText(''), N, N, 1, colors.red],
      // ['±', '', '', N, N, N, 1, colors.red],
      ['%', '‰', '‱', _append, _append, _append, 1, colors.red],
      [
        '<i class="mdi mdi-backspace"></i>',
        '<i class="mdi mdi-backspace-reverse"></i>',
        '',
        () => backspace(),
        () => _delete(),
        N,
        2,
        colors.red,
      ],
    ],
    [
      ['<calc-frac><span>1</span><hr><span>x</span></calc-frac>', '', '', () => append('^-1'), N, N, 1, colors.orange],
      ['abs', '', '', () => buttonCallback('abs()', -1), N, N, 1, colors.orange],
      ['x!', '', '', () => append('!'), N, N, 1, colors.orange],
      ['÷', '', '', _append, N, N, 1, colors.orange],
    ],
    [
      ['7', '', '', _append, N, N, 1, colors.cyan],
      ['8', '', '', _append, N, N, 1, colors.cyan],
      ['9', '', '', _append, N, N, 1, colors.cyan],
      ['×', '', '', _append, N, N, 1, colors.orange],
    ],
    [
      ['4', '', '', _append, N, N, 1, colors.cyan],
      ['5', '', '', _append, N, N, 1, colors.cyan],
      ['6', '', '', _append, N, N, 1, colors.cyan],
      ['–', '', '', _append, N, N, 1, colors.orange],
    ],
    [
      ['1', '', '', _append, N, N, 1, colors.cyan],
      ['2', '', '', _append, N, N, 1, colors.cyan],
      ['3', '', '', _append, N, N, 1, colors.cyan],
      ['+', '', '', _append, N, N, 1, colors.orange],
    ],
    [
      ['0', '', '', _append, N, N, 1, colors.cyan],
      ['.', '', '', _append, N, N, 1, colors.orange],
      ['=', '', '', _append, N, N, 1, colors.red],
      ['EXE', '→', '', () => calcDisplay.evaluate(), _append, N, 1, colors.orange],
    ],
  ],
]);
console.debug('Added %cgeneric functions%c buttons', codeStyle, '');

const keyboardButtons = new ButtonDisplay({ append: true });
keyboardButtons.fromArray(calcDisplay, [
  [
    [
      ['`', '~', 'α', _append, _append, _append, 2, colors.cyan],
      ['1', '!', 'β', _append, _append, _append, 3, colors.cyan],
      ['2', '@', 'γ', _append, _append, _append, 3, colors.cyan],
      ['3', '#', 'δ', _append, _append, _append, 3, colors.cyan],
      ['4', '$', 'ε', _append, _append, _append, 3, colors.cyan],
      ['5', '%', 'ζ', _append, _append, _append, 3, colors.cyan],
      ['6', '^', 'η', _append, _append, _append, 3, colors.cyan],
      ['7', '&', 'θ', _append, _append, _append, 3, colors.cyan],
      ['8', '*', 'ι', _append, _append, _append, 3, colors.cyan],
      ['9', '(', 'κ', _append, _append, _append, 3, colors.cyan],
      ['0', ')', 'λ', _append, _append, _append, 3, colors.cyan],
      ['-', '_', 'μ', _append, _append, _append, 3, colors.cyan],
      ['=', '+', 'ν', _append, _append, _append, 3, colors.cyan],
      [
        '<i class="mdi mdi-backspace"></i>',
        '<i class="mdi mdi-backspace-reverse"></i>',
        '',
        () => backspace(),
        () => _delete(),
        N,
        6,
        colors.red,
      ],
    ],
    [
      [
        '<i class="mdi mdi-calculator-variant"></i>',
        '',
        '',
        () => (
          $('calc-btns:nth-of-type(3)').toggleAttribute('hidden'),
          $('calc-btns:nth-of-type(2)').toggleAttribute('hidden'),
          calcDisplay.showScreen('calculator')
        ),
        N,
        N,
        3,
        colors.purple,
      ],
      ['q', 'Q', 'ξ', _append, _append, _append, 2, colors.cyan],
      ['w', 'W', 'ο', _append, _append, _append, 2, colors.cyan],
      ['e', 'E', 'π', _append, _append, _append, 2, colors.cyan],
      ['r', 'R', 'ρ', _append, _append, _append, 2, colors.cyan],
      ['t', 'T', 'σ', _append, _append, _append, 2, colors.cyan],
      ['y', 'Y', 'τ', _append, _append, _append, 2, colors.cyan],
      ['u', 'U', 'υ', _append, _append, _append, 2, colors.cyan],
      ['i', 'I', 'φ', _append, _append, _append, 2, colors.cyan],
      ['o', 'O', 'χ', _append, _append, _append, 2, colors.cyan],
      ['p', 'P', 'ψ', _append, _append, _append, 2, colors.cyan],
      ['[', '{', 'ω', _append, _append, _append, 2, colors.cyan],
      [']', '}', 'Α', _append, _append, _append, 2, colors.cyan],
      ['\\', '|', 'Β', _append, _append, _append, 3, colors.cyan],
    ],
    [
      ['Clear', '', '', () => setText(''), N, N, 4, colors.red],
      ['a', 'A', 'Γ', _append, _append, _append, 2, colors.cyan],
      ['s', 'S', 'Δ', _append, _append, _append, 2, colors.cyan],
      ['d', 'D', 'Ε', _append, _append, _append, 2, colors.cyan],
      ['f', 'F', 'Ζ', _append, _append, _append, 2, colors.cyan],
      ['g', 'G', 'Η', _append, _append, _append, 2, colors.cyan],
      ['h', 'H', 'Θ', _append, _append, _append, 2, colors.cyan],
      ['j', 'J', 'Ι', _append, _append, _append, 2, colors.cyan],
      ['k', 'K', 'Κ', _append, _append, _append, 2, colors.cyan],
      ['l', 'L', 'Λ', _append, _append, _append, 2, colors.cyan],
      [';', ':', 'Μ', _append, _append, _append, 2, colors.cyan],
      ["'", '"', 'Ν', _append, _append, _append, 2, colors.cyan],
      ['EXE', '→', '', () => calcDisplay.evaluate(), _append, N, 4, colors.orange],
    ],
    [
      ['Space', '', 'Ξ', () => append(' '), N, N, 5, colors.orange],
      ['z', 'Z', 'Ο', _append, _append, _append, 2, colors.cyan],
      ['x', 'X', 'Π', _append, _append, _append, 2, colors.cyan],
      ['c', 'C', 'Ρ', _append, _append, _append, 2, colors.cyan],
      ['v', 'V', 'Σ', _append, _append, _append, 2, colors.cyan],
      ['b', 'B', 'Τ', _append, _append, _append, 2, colors.cyan],
      ['n', 'N', 'Υ', _append, _append, _append, 2, colors.cyan],
      ['m', 'M', 'Φ', _append, _append, _append, 2, colors.cyan],
      [',', '&lt;', 'Χ', _append, () => append('<'), _append, 2, colors.cyan],
      ['.', '&gt;', 'Ψ', _append, () => append('>'), _append, 2, colors.cyan],
      ['/', '?', 'Ω', _append, _append, _append, 2, colors.cyan],
      ['αβγ', '', 'abc', () => requestAnimationFrame(() => calcDisplay.alpha(true)), N, () => requestAnimationFrame(() => calcDisplay.alpha(false)), 5, colors.orange],
    ],
  ],
]);
keyboardButtons.display.setAttribute('hidden', '');
console.debug('Added %ckeyboard%c buttons', codeStyle, '');

// var originalDerivative = math.derivative;
// /**
//  * @param {MathNode | string} expr The expression to differentiate
//  * @param {MathNode | string} variable The variable over which to differentiate
//  * @param {{ simplify: boolean }} options There is one option available, simplify, which is true
//  * by default. When false, output will not be simplified.
//  * @returns The derivative of expr
//  */
// math.derivative = function(expr, variable, options) {
//   if (typeof arguments[0] === 'string')
//     return originalDerivative(...arguments);
//   else return originalDerivative([...arguments].map(arg => String(arg)));
// };

async function main() {
  // math.config({ number: 'BigNumber', precision: 10 });

  document.addEventListener('selectionchange', () => {
    const activeElement = document.activeElement;
    if (activeElement === $('calc-input') || $('calc-input').contains(activeElement)) {
      const cursorNode = o.getCursorNodeInfo();
      try {
        lastCursorNode = cursorNode;
      } catch {}
    }
  });
  calcDisplay.screen('calculator').append($n('calc-input'), $n('calc-res'));
  let /** @type {HTMLElement} */ calcInput = calcDisplay.screen('calculator').$('calc-input');
  let /** @type {ChildNode} */ textNode = calcInput.firstChild;
  let lastHighlightText = '';
  calcInput.setAttribute('contenteditable', 'plaintext-only');
  calcInput.setAttribute('spellcheck', 'false');

  function keydownEvent() {
    calcInput = calcDisplay.screen('calculator').$('calc-input');
    textNode = calcInput.firstChild;
    calcDisplay.setInputText(calcInput.textContent);
    calcDisplay.evaluate({}, { saveToHistory: false });
    if (calcInput.innerHTML === '<br>') calcInput.innerHTML = '';

    const ranges = { parenthesis: [], operators: [], functions: [], strings: [], comments: [] };
    const spans = [];

    // Get the text node (assumes single text node)
    if (!textNode || textNode.nodeType !== Node.TEXT_NODE) return;
    const text = textNode.textContent;
    if (text === lastHighlightText) return;
    lastHighlightText = text;

    const makeRange = (start, end) => {
      const range = new Range();
      range.setStart(textNode, start);
      range.setEnd(textNode, end);
      return range;
    };

    // Single pass: strings & comments are opaque — parens, operators and function
    // names inside them don't get highlighted (no overlapping ranges).
    let i = 0;
    let commentStart = -1, quote = null, stringStart = -1;
    while (i < text.length) {
      const char = text[i];
      if (commentStart >= 0) { i++; continue; }                // in comment → skip to EOL
      if (quote) {                                             // in string
        if (char === '\\') { i++; continue; }                   // escaped char (\" etc.)
        if (char === quote) {
          ranges.strings.push(makeRange(stringStart, i + 1));
          spans.push([stringStart, i + 1]);
          quote = null;
        }
        i++;
        continue;
      }
      if (char === '"' || char === "'") { quote = char; stringStart = i; i++; continue; }
      if (char === '#') { commentStart = i; i++; continue; }
      if (PARENTHESIS.has(char)) { ranges.parenthesis.push(makeRange(i, i + 1)); i++; continue; }
      if (OPERATORS.has(char))   { ranges.operators.push(makeRange(i, i + 1));  i++; continue; }
      i++;
    }
    if (commentStart >= 0) {
      ranges.comments.push(makeRange(commentStart, text.length));
      spans.push([commentStart, text.length]);
    }

    // Function names, only outside strings/comments
    const inSpan = index => spans.some(([start, end]) => index >= start && index < end);
    for (const match of text.matchAll(FUNCTION_PATTERN))
      if (!inSpan(match.index))
        ranges.functions.push(makeRange(match.index, match.index + match[0].length));

    // Register the highlights
    CSS.highlights.set('parenthesis', new Highlight(...ranges.parenthesis));
    CSS.highlights.set('operators', new Highlight(...ranges.operators));
    if (ranges.functions.length > 0) CSS.highlights.set('functions', new Highlight(...ranges.functions));
    else CSS.highlights.delete('functions');
    if (ranges.strings.length > 0) CSS.highlights.set('strings', new Highlight(...ranges.strings));
    else CSS.highlights.delete('strings');
    if (ranges.comments.length > 0) CSS.highlights.set('comments', new Highlight(...ranges.comments));
    else CSS.highlights.delete('comments');
  }
  let m = new MutationObserver(() => {
    requestAnimationFrame(() => keydownEvent());
  });
  m.observe(calcInput, { characterData: true, subtree: true });
  calcInput.addEventListener('keydown', e => {
    if (e.key !== 'Enter' || e.shiftKey) return;
    e.preventDefault();
    calcDisplay.evaluate({}, { saveToHistory: true });
  });
  // calcInput.addEventListener('paste', e => {
  //   e.preventDefault();
  //   const text = e.clipboardData.getData('text/plain').replaceAll(/\n|\r/gi, '').toWellFormed();
  //   document.execCommand('insertText', false, text);
  // });
  uc.setMinSize?.();
  // calcInput.addEventListener('change', e => requestAnimationFrame(() => keydownEvent()));
  // calcInput.addEventListener('keydown', (event) => {
  //   console.log('keydown');
  //   if (event.code === 'Enter') {
  //     event.preventDefault();
  //     calcDisplay.evaluate();
  //   }
  //   calcDisplay.setInputText(calcInput.textContent);
  //   calcDisplay.evaluate({}, { saveToHistory: false });
  // });
  // m.physicalConstants.forEach(([symbol, name]) => {
  //   try {
  //     // math.createUnit(symbol, { definition: math.evaluate(name).toString(), override: true }, { prefixes: 'none' });
  //     // math[symbol] = math.evaluate(name);
  //     math.import({ [symbol]: { definition: math.evaluate(name) } });
  //   } catch (e) { console.warn(e.message); }
  // });
  console.debug('Initialized input and output');
}

var origAlert = window.alert;
/**
 * @param {string} text
 * @param {number} timeout
 */
var alert = function(text, timeout = 3000) {
  try {
    const alertElement = $n('calc-alert');
    alertElement.id = o.generateUID();
    alertElement.style = `z-index: ${Math.trunc(performance.now()) + 100}`;
    alertElement.innerHTML = `<span>${text.toSafeHTML()}</span>`;
    calcDisplay.display.append(alertElement);
    setTimeout(() => alertElement.remove(), timeout);
  } catch { origAlert(text); }
};
var focusInput = () => $('calc-input').focus();
var append = async text => {
  focusInput();
  // await [...text].forEachAsync(async char => {
  //   $('calc-input').dispatchEvent(new KeyboardEvent('keydown'));
  //   await uc.simulateChar(char);
  // });
  document.execCommand('insertText', false, text);
};
var setText = text => {
  calcDisplay.setInputText(text);
  $('calc-input').textContent = text;
  $('calc-input').dispatchEvent(new InputEvent('input', { data: [...text].at(-1) ?? '' }));
};
// var moveCursor = offset => o.setCursorPosition($('calc-input'), o.getCursorNodeInfo().startOffset + offset);
var moveCursor = offset => {
  // if (offset == 0) return;
  // if (offset < 0)
  //   Array(-offset).fill().forEach(() => o.setCursorPosition($('calc-input'), -1));
  // else
  //   Array(offset).fill().forEach(() => o.setCursorPosition($('calc-input'), 1));
  o.setCursorPosition($('calc-input'), o.getCursorNodeInfo().startOffset + offset);
};
var backspace = () => {
  focusInput(); uc.simulateBackspace();
};
var _delete = () => {
  focusInput(); uc.simulateKey('Delete');
};
var buttonCallback = async (text, offset) => {
  focusInput();
  await append(text);
  requestAnimationFrame(() => {
    focusInput();
    moveCursor(offset);
  });
};
main();

const /** @type {HTMLElement} */ menus = $('.menus');
uc.getMenuNames().then(items => {
  items.forEachAsync(async item => {
    let menu = $n('button');
    menu.className = 'btn-transparent';
    menu.textContent = item;
    menu.onclick = async () => {
      let { x, y, height } = menu.getBoundingClientRect();
      height = Math.ceil(height);
      uc.showContextMenu(
        Math.ceil(x * (await uc.getZoom())),
        Math.ceil((await uc.getZoom()) * (y + height) + 8),
        item
      );
    };
    menus.append(menu);
  });
  // let zoomMenu = $n('button');
  // zoomMenu.className = 'btn-transparent';
  // zoomMenu.innerHTML = '<i class="mdi mdi-magnify-expand"></i>';
  // zoomMenu.style = 'height: 100%;';
  // zoomMenu.onclick = async () => {
  //   const zoomPopup = $n('div');
  //   zoomPopup.style = `position: absolute; top: ${
  //     zoomMenu.getBoundingClientRect().bottom + 8
  //   }px; left: ${
  //     zoomMenu.getBoundingClientRect().left +
  //     zoomMenu.getBoundingClientRect().width / 2
  //   }px; transform: translateX(-50%); background: var(--bg-dark);
  //   outline: 2px solid var(--bg-dark-2); border-radius: 4px;
  //   padding: 2px 6px; display: grid; grid-template-columns: auto auto auto 1fr;
  //   z-index: 10; align-items: center; justify-content: center; gap: 6px;`;
  //   zoomPopup.innerHTML =
  //     '<button class="btn-transparent" onclick="uc.zoom(\'in\')"><i class="mdi mdi-plus"></i></button>'+
  //     '<button class="btn-transparent" onclick="uc.zoom(\'out\')"><i class="mdi mdi-minus"></i></button>'+
  //     `<span class="zoom-indicator">${await uc.getZoomLevel()}</span>`+
  //     '<button class="btn-transparent" onclick="uc.zoom(\'reset\')">Reset</button>';
  //   $body.append(zoomPopup);
  //   document.onclick = e => {
  //     if (zoomPopup !== e.target || (!zoomPopup.contains(e.target))) {
  //       zoomPopup.remove();
  //       document.onclick = null;
  //     }
  //   };
  // };
  // menus.append(zoomMenu);
  console.debug('Added top bar buttons');
});

// #region - Constants Menu
const constantsMenu = $n('dialog');
$body.append(constantsMenu);
constantsMenu.id = 'constant-menu';
let entries = [...MATH_ENTRIES]
  .sort().sort((a, b) => (typeof math[a]).toLowerCase().localeCompare((typeof math[b]).toLowerCase()));
let helpFn = fn => {
  let help = '(No description found)';
  if (math.docs[fn]?.description)
    help = math.docs[fn].description;
  return help;
};

constantsMenu.innerHTML =
  '<div class="text">' +
  `<div class="autocomplete">${
    entries
    .map(a =>
      `<div class="autocomplete-opt" opt-type="${math.typeOf(math[a]).toLowerCase()}" hint="${
        helpFn(a).toSafeHTML()
      }">${a.toSafeHTML()}</div>`
    ).join('')}</div>` +
  '<input type="text" class="input-field" id="constants-input"' +
    'placeholder="Type a function (ex: sin)" spellcheck="false">' +
  '<button class="btn-transparent close"><i class="mdi mdi-close"></i></button>' +
  '</div>';

constantsMenu.$('.close').onclick = () => constantsMenu.close();
constantsMenu.$('.input-field').oninput = (/** @type {InputEvent} */ f) => {
  const input = /** @type {HTMLInputElement} */ (f.target);
  const search = input.value.toLowerCase().trim();
  const autocomplete = input.parentElement?.querySelector('.autocomplete');
  if (!autocomplete) return;

  CSS.highlights.delete('autocomplete-match');

  let options = [...autocomplete.querySelectorAll('.autocomplete-opt')];
  const ranges = [];
  let firstVisible = null;

  if (!search) {
    options.forEach(opt => {
      opt.hidden = false;
      opt.removeAttribute('data-selected');
    });
    return;
  }

  options = options.sort((a, b) => a.textContent.length - b.textContent.length);
  options.forEach(opt => {
    const text = opt.textContent.toLowerCase();
    const index = text.indexOf(search);

    if (index === -1) { opt.hidden = true; return; }
    opt.hidden = false;
    opt.removeAttribute('data-selected');
    if (!firstVisible) firstVisible = opt;
    const textNode = opt.firstChild;
    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      const range = new Range();
      range.setStart(textNode, index);
      range.setEnd(textNode, index + search.length);
      ranges.push(range);
    }
  });

  if (ranges.length > 0)
    CSS.highlights.set('autocomplete-match', new Highlight(...ranges));
  if (firstVisible) firstVisible.setAttribute('data-selected', '');
};
constantsMenu.$('.input-field').onkeydown = (/** @type {KeyboardEvent} */ e) => {
  const input = e.target;
  const autocomplete = input.parentElement.querySelector('.autocomplete');
  const options = [...autocomplete.querySelectorAll('.autocomplete-opt:not([hidden])')];
  const current = options.findIndex(opt => opt.hasAttribute('data-selected'));
  options[current]?.scrollIntoView({ block: 'nearest' });

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const next = options[Math.min(current + 1, options.length - 1)];
    options.forEach(o => o.removeAttribute('data-selected'));
    next?.setAttribute('data-selected', '');
    next?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    const prev = options[Math.max(current - 1, 0)];
    options.forEach(o => o.removeAttribute('data-selected'));
    prev?.setAttribute('data-selected', '');
    prev?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if ($body.contains(constantsMenu)) {
      requestAnimationFrame(() => {
        constantsMenu?.close();
        constantsMenu?.blur();
      });
    }
    buttonCallback(
      options[current]?.textContent +
        ((options[current]?.getAttribute('opt-type') ?? '') === 'function' ? '()' : ''),
        !(((options[current]?.getAttribute('opt-type') ?? '') !== 'function') - 1) - 1
    );
  }
};
console.debug('Initialized constants menu');
// #endregion
// #region - Scope menu
const /** @type {HTMLDialogElement} */ scopeMenu = $n('dialog');
scopeMenu.id = 'scope-menu';
scopeMenu.innerHTML =
  '<div class="text">'+
    '<div class="scopes"></div>'+
    '<input class="input-field" type="text" id="scope-input" placeholder="Type a variable name (ex: mem)" spellcheck="false">'+
    '<button class="btn-neutral remove"><i class="mdi mdi-trash-can-outline"></i></button>' +
    '<button class="btn-neutral close"><i class="mdi mdi-close"></i></button>' +
  '</div>';
$body.append(scopeMenu);

let oldSize = parser.scope.size;
function updateScopeMenu() {
  scopeMenu.$('.close').onclick = () => scopeMenu.close();
  scopeMenu.$('.remove').onclick = () => {
    try {
      parser.remove(scopeMenu.$('[data-selected]').name);
    } catch (e) {
      if (e instanceof TypeError)
        new Toast('No entry is selected')
    }
  };

  let scopes = scopeMenu.$('.scopes');
  scopes.innerHTML = '';
  [...parser.scope].forEach(item => {
    let div = Object.assign($n('div'), {
      className: 'scope-item',
      innerHTML: `<span class="key">${m.format(math.parse(item[0]))}</span><span class="value">${m.format(item[1])}</span>`,
    });
    div.setAttribute('name', item[0]);
    scopes.append(div);
  });
  scopeMenu.$('.input-field').oninput = (/** @type {InputEvent} */ f) => {
    const /** @type {HTMLInputElement} */ input = f.target;
    const search = input.value.toLowerCase().trim();
    const scopes = input.parentElement?.querySelector('.scopes');
    if (!scopes) return;

    CSS.highlights.delete('scope-match');

    let options = [...scopes.$$('.scope-item')];
    const ranges = [];
    let firstVisible = null;

    if (!search) {
      options.forEach(opt => {
        opt.hidden = false;
        opt.removeAttribute('data-selected');
      });
      return;
    }

    options = options.sort((a, b) => (a.getAttribute('name') ?? '').length - (b.getAttribute('name') ?? '').length);
    options.forEach(opt => {
      const text = opt.textContent.toLowerCase();
      const index = text.indexOf(search);

      if (index === -1) { opt.hidden = true; return; }
      opt.hidden = false;
      opt.removeAttribute('data-selected');
      if (!firstVisible) firstVisible = opt;
      const textNode = opt.firstChild;
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        const range = new Range();
        range.setStart(textNode, index);
        range.setEnd(textNode, index + search.length);
        ranges.push(range);
      }
    });

    if (ranges.length > 0)
      CSS.highlights.set('scope-match', new Highlight(...ranges));
    if (firstVisible) firstVisible.setAttribute('data-selected', '');
  };
  scopeMenu.$('.input-field').onkeydown = (/** @type {KeyboardEvent} */ e) => {
    function hide() {
      if ($body.contains(scopeMenu)) {
        requestAnimationFrame(() => {
          scopeMenu?.close();
          scopeMenu?.blur();
        });
      }
    }
    const input = e.target;
    const autocomplete = input.parentElement.querySelector('.scopes');
    const options = [...autocomplete.querySelectorAll('.scope-item:not([hidden])')];
    const current = options.findIndex(opt => opt.hasAttribute('data-selected'));
    options[current]?.scrollIntoView({ block: 'nearest' });

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = options[Math.min(current + 1, options.length - 1)];
      options.forEach(o => o.removeAttribute('data-selected'));
      next?.setAttribute('data-selected', '');
      next?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = options[Math.max(current - 1, 0)];
      options.forEach(o => o.removeAttribute('data-selected'));
      prev?.setAttribute('data-selected', '');
      prev?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter' && !e.ctrlKey && !e.shiftKey) {
      if (options[current] === undefined) return;
      e.preventDefault();
      hide();
      buttonCallback(options[current]?.getAttribute('name'));
    } else if (e.key === 'Enter' && e.shiftKey && !e.ctrlKey) {
      if (options[current] === undefined) return;
      e.preventDefault();
      buttonCallback(options[current]?.getAttribute('name'));
    } else if (e.key === 'Enter' && !e.shiftKey && e.ctrlKey) {
      if (options[current] === undefined) return;
      e.preventDefault();
      hide();
      buttonCallback(
        math.format(parser.get(options[current]?.getAttribute('name')))
      );
    }
  };
}
parser.set = function(...args) {
  let res = math.Parser.prototype.set.call(parser, ...args);
  updateScopeMenu();
  return res;
};
parser.clear = function(...args) {
  let res = math.Parser.prototype.clear.call(parser, ...args);
  updateScopeMenu();
  return res;
}
updateScopeMenu();
console.debug('Initialized scope menu');
setInterval(() => {
  if (oldSize === parser.scope.size) return;
  updateScopeMenu();
  oldSize = parser.scope.size;
}, 500);
// #endregion
// #region - History menu
const historyMenu = $n('dialog');
historyMenu.id = 'history-menu';
historyMenu.innerHTML =
  '<div class="text">'+
    '<div class="items"></div>'+
    '<input class="input-field" type="text" id="scope-input" placeholder="Type a variable name (ex: mem)" spellcheck="false">'+
    '<button class="btn-neutral remove"><i class="mdi mdi-trash-can-outline"></i></button>' +
    '<button class="btn-neutral close"><i class="mdi mdi-close"></i></button>' +
  '</div>'
;
// #endregion

window.addEventListener('focus', () => $('calc-input').focus());
const shortcuts = Object.fromEntries([
  ['Ctrl+Shift+S', 'Toggle shift key'],
  ['Ctrl+Shift+A', 'Toggle alpha key'],
  ['Ctrl+Alt+C', 'Show constants menu'],
  ['Ctrl+Alt+S', 'Show scope menu'],
  ['Ctrl+Alt+B', 'Toggle output notation'],
  ['Ctrl+Shift+I', 'Focus input'],
  ['Alt+0', 'Show global menu'],
  ['Esc', 'Hide menus'],
  ['Ctrl+Space', 'Toggle minimal mode'],
]);
Object.defineProperty(shortcuts, Symbol.toStringTag, { value: 'Shortcuts', enumerable: false });
document.addEventListener('keydown', async (e) => {
  let keybind = [e.ctrlKey ? 'Ctrl' : '', e.altKey ? 'Alt' : '', e.shiftKey ? 'Shift' : '', e.code].filter(Boolean).join('+');

  if (/Alt\+Digit[1234]$/g.test(keybind)) {
    let digit = keybind.at(-1);
    let rect = $(`.menus :nth-of-type(${digit})`).getBoundingClientRect();
    uc.showContextMenu(rect.left, rect.bottom + 8, $(`.menus :nth-of-type(${digit})`).textContent);
    return;
  }
  switch (keybind) {
    case 'Ctrl+Shift+KeyS':
      calcDisplay.shift();
      break;
    case 'Ctrl+Shift+KeyA':
      calcDisplay.alpha();
      break;
    case 'Ctrl+Alt+KeyC':
      constantsMenu.showModal();
      constantsMenu.$('.input-field').focus();
      break;
    case 'Ctrl+Alt+KeyS':
      scopeMenu.showModal();
      scopeMenu.$('.input-field').focus();
      break;
    case 'Ctrl+Alt+KeyB':
      calcDisplay.setNotation();
      break;
    case 'Ctrl+Shift+KeyI':
      $('calc-input').focus();
      break;
    case 'Alt+Digit0':
      let rect = $('img').getBoundingClientRect();
      uc.showContextMenu(rect.left, rect.bottom + 8);
      break;
    case 'Escape':
      constantsMenu.close(); scopeMenu.close();
      break;
    case 'Ctrl+Space':
      $('html').toggleAttribute('minimal-mode');
      const isMinimalMode = $('html').hasAttribute('minimal-mode');
      console.log(isMinimalMode);
      if (isMinimalMode) {
        let height = 100;
        $('html').removeAttribute('minimal-mode');
        height = parseFloat(calcDisplay.display.style.height)
          + parseFloat(getComputedStyle(primary.display).height)
          + parseFloat(getComputedStyle($main).paddingTop)
          + parseFloat(getComputedStyle($main).paddingBottom);

        $('html').setAttribute('minimal-mode', '');
        let dimensions = [uc.minWidth, height];
        uc.setMinSize(...dimensions);
        requestAnimationFrame(() => {
          resizeTo(...dimensions);
        });
      } else {
        setTimeout(() => { uc.setMinSize() }, 100);
      }
      break;
    case 'Shift+F12':
      console.debug('Coming soon (debug screen)');
    default:
      break;
  }
});
window.addEventListener('resize', () => {
  let injectedSS = $('head .__uc_injected_stylesheet');
  if (innerWidth / innerHeight < 0.65) {
    if ($('head .__uc_injected_stylesheet')) {
      injectedSS.textContent = 'calc-btns { flex-direction: column; }';
      $$('calc-group').forEach(item => {
        item.style.flex = item.childElementCount;
      });
    } else {
      let newInjectedSS = $n('style');
      newInjectedSS.className = '__uc_injected_stylesheet';
      newInjectedSS.textContent = 'calc-btns { flex-direction: column; }';
      $('head').appendChild(newInjectedSS);
    }
  } else {
    if (injectedSS && injectedSS.textContent !== '') {
      injectedSS.textContent = '';
      $$('calc-group').forEach(item => {
        item.style.flex = Math.max(...[...item.children].map(a => {
          return a.style.gridTemplateColumns.match(/\d+/)[0] ?? 0;
        }));
      });
    } else {
      let newInjectedSS = $n('style');
      newInjectedSS.className = '__uc_injected_stylesheet';
      newInjectedSS.textContent = '';
      $('head').appendChild(newInjectedSS);
    }
  }
});
window.addEventListener('beforeunload', (e) => {
  console.log(e);
  e.preventDefault();
  return setTimeout(() => {}, 1000);
}, { once: true });
