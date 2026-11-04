import typedFunction from "./typed-function.js";
import Decimal from "./decimaljs.js";
import naturalSort from "./javascript-natural-sort.js";
import escapeLatexLib from "./escape-latex.js";
import seedrandom2 from "./seedrandom.js";
import {c as createCommonjsModule} from "./_commonjsHelpers-8c19dec8.js";
import Emitter from "./tiny-emitter.js";
var _extends_1 = createCommonjsModule(function(module) {
  function _extends() {
    module.exports = _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  module.exports = _extends;
});
var DEFAULT_CONFIG = {
  epsilon: 1e-12,
  matrix: "Matrix",
  number: "number",
  precision: 64,
  predictable: false,
  randomSeed: null
};
function isNumber(x) {
  return typeof x === "number";
}
function isBigNumber(x) {
  if (!x || typeof x !== "object" || typeof x.constructor !== "function") {
    return false;
  }
  if (x.isBigNumber === true && typeof x.constructor.prototype === "object" && x.constructor.prototype.isBigNumber === true) {
    return true;
  }
  if (typeof x.constructor.isDecimal === "function" && x.constructor.isDecimal(x) === true) {
    return true;
  }
  return false;
}
function isComplex(x) {
  return x && typeof x === "object" && Object.getPrototypeOf(x).isComplex === true || false;
}
function isFraction(x) {
  return x && typeof x === "object" && Object.getPrototypeOf(x).isFraction === true || false;
}
function isUnit(x) {
  return x && x.constructor.prototype.isUnit === true || false;
}
function isString(x) {
  return typeof x === "string";
}
var isArray = Array.isArray;
function isMatrix(x) {
  return x && x.constructor.prototype.isMatrix === true || false;
}
function isCollection(x) {
  return Array.isArray(x) || isMatrix(x);
}
function isDenseMatrix(x) {
  return x && x.isDenseMatrix && x.constructor.prototype.isMatrix === true || false;
}
function isSparseMatrix(x) {
  return x && x.isSparseMatrix && x.constructor.prototype.isMatrix === true || false;
}
function isRange(x) {
  return x && x.constructor.prototype.isRange === true || false;
}
function isIndex(x) {
  return x && x.constructor.prototype.isIndex === true || false;
}
function isBoolean(x) {
  return typeof x === "boolean";
}
function isResultSet(x) {
  return x && x.constructor.prototype.isResultSet === true || false;
}
function isHelp(x) {
  return x && x.constructor.prototype.isHelp === true || false;
}
function isFunction(x) {
  return typeof x === "function";
}
function isDate(x) {
  return x instanceof Date;
}
function isRegExp(x) {
  return x instanceof RegExp;
}
function isObject(x) {
  return !!(x && typeof x === "object" && x.constructor === Object && !isComplex(x) && !isFraction(x));
}
function isNull(x) {
  return x === null;
}
function isUndefined(x) {
  return x === void 0;
}
function isAccessorNode(x) {
  return x && x.isAccessorNode === true && x.constructor.prototype.isNode === true || false;
}
function isArrayNode(x) {
  return x && x.isArrayNode === true && x.constructor.prototype.isNode === true || false;
}
function isAssignmentNode(x) {
  return x && x.isAssignmentNode === true && x.constructor.prototype.isNode === true || false;
}
function isBlockNode(x) {
  return x && x.isBlockNode === true && x.constructor.prototype.isNode === true || false;
}
function isConditionalNode(x) {
  return x && x.isConditionalNode === true && x.constructor.prototype.isNode === true || false;
}
function isConstantNode(x) {
  return x && x.isConstantNode === true && x.constructor.prototype.isNode === true || false;
}
function rule2Node(node) {
  return isConstantNode(node) || isOperatorNode(node) && node.args.length === 1 && isConstantNode(node.args[0]) && "-+~".includes(node.op);
}
function isFunctionAssignmentNode(x) {
  return x && x.isFunctionAssignmentNode === true && x.constructor.prototype.isNode === true || false;
}
function isFunctionNode(x) {
  return x && x.isFunctionNode === true && x.constructor.prototype.isNode === true || false;
}
function isIndexNode(x) {
  return x && x.isIndexNode === true && x.constructor.prototype.isNode === true || false;
}
function isNode(x) {
  return x && x.isNode === true && x.constructor.prototype.isNode === true || false;
}
function isObjectNode(x) {
  return x && x.isObjectNode === true && x.constructor.prototype.isNode === true || false;
}
function isOperatorNode(x) {
  return x && x.isOperatorNode === true && x.constructor.prototype.isNode === true || false;
}
function isParenthesisNode(x) {
  return x && x.isParenthesisNode === true && x.constructor.prototype.isNode === true || false;
}
function isRangeNode(x) {
  return x && x.isRangeNode === true && x.constructor.prototype.isNode === true || false;
}
function isRelationalNode(x) {
  return x && x.isRelationalNode === true && x.constructor.prototype.isNode === true || false;
}
function isSymbolNode(x) {
  return x && x.isSymbolNode === true && x.constructor.prototype.isNode === true || false;
}
function isChain(x) {
  return x && x.constructor.prototype.isChain === true || false;
}
function typeOf(x) {
  var t = typeof x;
  if (t === "object") {
    if (x === null)
      return "null";
    if (isBigNumber(x))
      return "BigNumber";
    if (x.constructor && x.constructor.name)
      return x.constructor.name;
    return "Object";
  }
  return t;
}
function clone(x) {
  var type = typeof x;
  if (type === "number" || type === "string" || type === "boolean" || x === null || x === void 0) {
    return x;
  }
  if (typeof x.clone === "function") {
    return x.clone();
  }
  if (Array.isArray(x)) {
    return x.map(function(value) {
      return clone(value);
    });
  }
  if (x instanceof Date)
    return new Date(x.valueOf());
  if (isBigNumber(x))
    return x;
  if (x instanceof RegExp)
    throw new TypeError("Cannot clone " + x);
  return mapObject(x, clone);
}
function mapObject(object, callback) {
  var clone2 = {};
  for (var key in object) {
    if (hasOwnProperty$1(object, key)) {
      clone2[key] = callback(object[key]);
    }
  }
  return clone2;
}
function extend(a, b) {
  for (var prop in b) {
    if (hasOwnProperty$1(b, prop)) {
      a[prop] = b[prop];
    }
  }
  return a;
}
function deepExtend(a, b) {
  if (Array.isArray(b)) {
    throw new TypeError("Arrays are not supported by deepExtend");
  }
  for (var prop in b) {
    if (hasOwnProperty$1(b, prop) && !(prop in Object.prototype) && !(prop in Function.prototype)) {
      if (b[prop] && b[prop].constructor === Object) {
        if (a[prop] === void 0) {
          a[prop] = {};
        }
        if (a[prop] && a[prop].constructor === Object) {
          deepExtend(a[prop], b[prop]);
        } else {
          a[prop] = b[prop];
        }
      } else if (Array.isArray(b[prop])) {
        throw new TypeError("Arrays are not supported by deepExtend");
      } else {
        a[prop] = b[prop];
      }
    }
  }
  return a;
}
function deepStrictEqual(a, b) {
  var prop, i, len;
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (i = 0, len = a.length; i < len; i++) {
      if (!deepStrictEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  } else if (typeof a === "function") {
    return a === b;
  } else if (a instanceof Object) {
    if (Array.isArray(b) || !(b instanceof Object)) {
      return false;
    }
    for (prop in a) {
      if (!(prop in b) || !deepStrictEqual(a[prop], b[prop])) {
        return false;
      }
    }
    for (prop in b) {
      if (!(prop in a)) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
}
function deepFlatten(nestedObject) {
  var flattenedObject = {};
  _deepFlatten(nestedObject, flattenedObject);
  return flattenedObject;
}
function _deepFlatten(nestedObject, flattenedObject) {
  for (var prop in nestedObject) {
    if (hasOwnProperty$1(nestedObject, prop)) {
      var value = nestedObject[prop];
      if (typeof value === "object" && value !== null) {
        _deepFlatten(value, flattenedObject);
      } else {
        flattenedObject[prop] = value;
      }
    }
  }
}
function lazy(object, prop, valueResolver) {
  var _uninitialized = true;
  var _value;
  Object.defineProperty(object, prop, {
    get: function get() {
      if (_uninitialized) {
        _value = valueResolver();
        _uninitialized = false;
      }
      return _value;
    },
    set: function set(value) {
      _value = value;
      _uninitialized = false;
    },
    configurable: true,
    enumerable: true
  });
}
function hasOwnProperty$1(object, property) {
  return object && Object.hasOwnProperty.call(object, property);
}
function isLegacyFactory(object) {
  return object && typeof object.factory === "function";
}
function pickShallow(object, properties2) {
  var copy = {};
  for (var i = 0; i < properties2.length; i++) {
    var key = properties2[i];
    var value = object[key];
    if (value !== void 0) {
      copy[key] = value;
    }
  }
  return copy;
}
function values(object) {
  return Object.keys(object).map((key) => object[key]);
}
var MATRIX_OPTIONS = ["Matrix", "Array"];
var NUMBER_OPTIONS = ["number", "BigNumber", "Fraction"];
function configFactory(config3, emit) {
  function _config(options) {
    if (options) {
      var prev = mapObject(config3, clone);
      validateOption(options, "matrix", MATRIX_OPTIONS);
      validateOption(options, "number", NUMBER_OPTIONS);
      deepExtend(config3, options);
      var curr = mapObject(config3, clone);
      var changes = mapObject(options, clone);
      emit("config", curr, prev, changes);
      return curr;
    } else {
      return mapObject(config3, clone);
    }
  }
  _config.MATRIX_OPTIONS = MATRIX_OPTIONS;
  _config.NUMBER_OPTIONS = NUMBER_OPTIONS;
  Object.keys(DEFAULT_CONFIG).forEach((key) => {
    Object.defineProperty(_config, key, {
      get: () => config3[key],
      enumerable: true,
      configurable: true
    });
  });
  return _config;
}
function contains(array, item) {
  return array.indexOf(item) !== -1;
}
function validateOption(options, name2, values2) {
  if (options[name2] !== void 0 && !contains(values2, options[name2])) {
    console.warn('Warning: Unknown value "' + options[name2] + '" for configuration option "' + name2 + '". Available options: ' + values2.map((value) => JSON.stringify(value)).join(", ") + ".");
  }
}
var config = function config2(options) {
  if (options) {
    throw new Error("The global config is readonly. \nPlease create a mathjs instance if you want to change the default configuration. \nExample:\n\n  import { create, all } from 'mathjs';\n  const mathjs = create(all);\n  mathjs.config({ number: 'BigNumber' });\n");
  }
  return Object.freeze(DEFAULT_CONFIG);
};
_extends_1(config, DEFAULT_CONFIG, {
  MATRIX_OPTIONS,
  NUMBER_OPTIONS
});
function isInteger(value) {
  if (typeof value === "boolean") {
    return true;
  }
  return isFinite(value) ? value === Math.round(value) : false;
}
var sign = Math.sign || function(x) {
  if (x > 0) {
    return 1;
  } else if (x < 0) {
    return -1;
  } else {
    return 0;
  }
};
var log2 = Math.log2 || function log22(x) {
  return Math.log(x) / Math.LN2;
};
var log10 = Math.log10 || function log102(x) {
  return Math.log(x) / Math.LN10;
};
var log1p = Math.log1p || function(x) {
  return Math.log(x + 1);
};
var cbrt = Math.cbrt || function cbrt2(x) {
  if (x === 0) {
    return x;
  }
  var negate = x < 0;
  var result;
  if (negate) {
    x = -x;
  }
  if (isFinite(x)) {
    result = Math.exp(Math.log(x) / 3);
    result = (x / (result * result) + 2 * result) / 3;
  } else {
    result = x;
  }
  return negate ? -result : result;
};
var expm1 = Math.expm1 || function expm12(x) {
  return x >= 2e-4 || x <= -2e-4 ? Math.exp(x) - 1 : x + x * x / 2 + x * x * x / 6;
};
function formatNumberToBase(n, base, size) {
  var prefixes = {
    2: "0b",
    8: "0o",
    16: "0x"
  };
  var prefix = prefixes[base];
  var suffix = "";
  if (size) {
    if (size < 1) {
      throw new Error("size must be in greater than 0");
    }
    if (!isInteger(size)) {
      throw new Error("size must be an integer");
    }
    if (n > 2 ** (size - 1) - 1 || n < -(2 ** (size - 1))) {
      throw new Error("Value must be in range [-2^".concat(size - 1, ", 2^").concat(size - 1, "-1]"));
    }
    if (!isInteger(n)) {
      throw new Error("Value must be an integer");
    }
    if (n < 0) {
      n = n + 2 ** size;
    }
    suffix = "i".concat(size);
  }
  var sign2 = "";
  if (n < 0) {
    n = -n;
    sign2 = "-";
  }
  return "".concat(sign2).concat(prefix).concat(n.toString(base)).concat(suffix);
}
function format(value, options) {
  if (typeof options === "function") {
    return options(value);
  }
  if (value === Infinity) {
    return "Infinity";
  } else if (value === -Infinity) {
    return "-Infinity";
  } else if (isNaN(value)) {
    return "NaN";
  }
  var notation = "auto";
  var precision;
  var wordSize;
  if (options) {
    if (options.notation) {
      notation = options.notation;
    }
    if (isNumber(options)) {
      precision = options;
    } else if (isNumber(options.precision)) {
      precision = options.precision;
    }
    if (options.wordSize) {
      wordSize = options.wordSize;
      if (typeof wordSize !== "number") {
        throw new Error('Option "wordSize" must be a number');
      }
    }
  }
  switch (notation) {
    case "fixed":
      return toFixed(value, precision);
    case "exponential":
      return toExponential(value, precision);
    case "engineering":
      return toEngineering(value, precision);
    case "bin":
      return formatNumberToBase(value, 2, wordSize);
    case "oct":
      return formatNumberToBase(value, 8, wordSize);
    case "hex":
      return formatNumberToBase(value, 16, wordSize);
    case "auto":
      return toPrecision(value, precision, options && options).replace(/((\.\d*?)(0+))($|e)/, function() {
        var digits2 = arguments[2];
        var e2 = arguments[4];
        return digits2 !== "." ? digits2 + e2 : e2;
      });
    default:
      throw new Error('Unknown notation "' + notation + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function splitNumber(value) {
  var match = String(value).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
  if (!match) {
    throw new SyntaxError("Invalid number " + value);
  }
  var sign2 = match[1];
  var digits2 = match[2];
  var exponent = parseFloat(match[4] || "0");
  var dot = digits2.indexOf(".");
  exponent += dot !== -1 ? dot - 1 : digits2.length - 1;
  var coefficients = digits2.replace(".", "").replace(/^0*/, function(zeros2) {
    exponent -= zeros2.length;
    return "";
  }).replace(/0*$/, "").split("").map(function(d) {
    return parseInt(d);
  });
  if (coefficients.length === 0) {
    coefficients.push(0);
    exponent++;
  }
  return {
    sign: sign2,
    coefficients,
    exponent
  };
}
function toEngineering(value, precision) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }
  var split = splitNumber(value);
  var rounded = roundDigits(split, precision);
  var e2 = rounded.exponent;
  var c = rounded.coefficients;
  var newExp = e2 % 3 === 0 ? e2 : e2 < 0 ? e2 - 3 - e2 % 3 : e2 - e2 % 3;
  if (isNumber(precision)) {
    while (precision > c.length || e2 - newExp + 1 > c.length) {
      c.push(0);
    }
  } else {
    var missingZeros = Math.abs(e2 - newExp) - (c.length - 1);
    for (var i = 0; i < missingZeros; i++) {
      c.push(0);
    }
  }
  var expDiff = Math.abs(e2 - newExp);
  var decimalIdx = 1;
  while (expDiff > 0) {
    decimalIdx++;
    expDiff--;
  }
  var decimals = c.slice(decimalIdx).join("");
  var decimalVal = isNumber(precision) && decimals.length || decimals.match(/[1-9]/) ? "." + decimals : "";
  var str = c.slice(0, decimalIdx).join("") + decimalVal + "e" + (e2 >= 0 ? "+" : "") + newExp.toString();
  return rounded.sign + str;
}
function toFixed(value, precision) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }
  var splitValue = splitNumber(value);
  var rounded = typeof precision === "number" ? roundDigits(splitValue, splitValue.exponent + 1 + precision) : splitValue;
  var c = rounded.coefficients;
  var p = rounded.exponent + 1;
  var pp = p + (precision || 0);
  if (c.length < pp) {
    c = c.concat(zeros(pp - c.length));
  }
  if (p < 0) {
    c = zeros(-p + 1).concat(c);
    p = 1;
  }
  if (p < c.length) {
    c.splice(p, 0, p === 0 ? "0." : ".");
  }
  return rounded.sign + c.join("");
}
function toExponential(value, precision) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }
  var split = splitNumber(value);
  var rounded = precision ? roundDigits(split, precision) : split;
  var c = rounded.coefficients;
  var e2 = rounded.exponent;
  if (c.length < precision) {
    c = c.concat(zeros(precision - c.length));
  }
  var first = c.shift();
  return rounded.sign + first + (c.length > 0 ? "." + c.join("") : "") + "e" + (e2 >= 0 ? "+" : "") + e2;
}
function toPrecision(value, precision, options) {
  if (isNaN(value) || !isFinite(value)) {
    return String(value);
  }
  var lowerExp = options && options.lowerExp !== void 0 ? options.lowerExp : -3;
  var upperExp = options && options.upperExp !== void 0 ? options.upperExp : 5;
  var split = splitNumber(value);
  var rounded = precision ? roundDigits(split, precision) : split;
  if (rounded.exponent < lowerExp || rounded.exponent >= upperExp) {
    return toExponential(value, precision);
  } else {
    var c = rounded.coefficients;
    var e2 = rounded.exponent;
    if (c.length < precision) {
      c = c.concat(zeros(precision - c.length));
    }
    c = c.concat(zeros(e2 - c.length + 1 + (c.length < precision ? precision - c.length : 0)));
    c = zeros(-e2).concat(c);
    var dot = e2 > 0 ? e2 : 0;
    if (dot < c.length - 1) {
      c.splice(dot + 1, 0, ".");
    }
    return rounded.sign + c.join("");
  }
}
function roundDigits(split, precision) {
  var rounded = {
    sign: split.sign,
    coefficients: split.coefficients,
    exponent: split.exponent
  };
  var c = rounded.coefficients;
  while (precision <= 0) {
    c.unshift(0);
    rounded.exponent++;
    precision++;
  }
  if (c.length > precision) {
    var removed = c.splice(precision, c.length - precision);
    if (removed[0] >= 5) {
      var i = precision - 1;
      c[i]++;
      while (c[i] === 10) {
        c.pop();
        if (i === 0) {
          c.unshift(0);
          rounded.exponent++;
          i++;
        }
        i--;
        c[i]++;
      }
    }
  }
  return rounded;
}
function zeros(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(0);
  }
  return arr;
}
function digits(value) {
  return value.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length;
}
var DBL_EPSILON = Number.EPSILON || 2220446049250313e-31;
function nearlyEqual(x, y, epsilon) {
  if (epsilon === null || epsilon === void 0) {
    return x === y;
  }
  if (x === y) {
    return true;
  }
  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  if (isFinite(x) && isFinite(y)) {
    var diff = Math.abs(x - y);
    if (diff < DBL_EPSILON) {
      return true;
    } else {
      return diff <= Math.max(Math.abs(x), Math.abs(y)) * epsilon;
    }
  }
  return false;
}
var acosh = Math.acosh || function(x) {
  return Math.log(Math.sqrt(x * x - 1) + x);
};
var asinh = Math.asinh || function(x) {
  return Math.log(Math.sqrt(x * x + 1) + x);
};
var atanh = Math.atanh || function(x) {
  return Math.log((1 + x) / (1 - x)) / 2;
};
var cosh = Math.cosh || function(x) {
  return (Math.exp(x) + Math.exp(-x)) / 2;
};
var sinh = Math.sinh || function(x) {
  return (Math.exp(x) - Math.exp(-x)) / 2;
};
var tanh = Math.tanh || function(x) {
  var e2 = Math.exp(2 * x);
  return (e2 - 1) / (e2 + 1);
};
function copysign(x, y) {
  var signx = x > 0 ? true : x < 0 ? false : 1 / x === Infinity;
  var signy = y > 0 ? true : y < 0 ? false : 1 / y === Infinity;
  return signx ^ signy ? -x : x;
}
function formatBigNumberToBase(n, base, size) {
  var BigNumberCtor = n.constructor;
  var big2 = new BigNumberCtor(2);
  var suffix = "";
  if (size) {
    if (size < 1) {
      throw new Error("size must be in greater than 0");
    }
    if (!isInteger(size)) {
      throw new Error("size must be an integer");
    }
    if (n.greaterThan(big2.pow(size - 1).sub(1)) || n.lessThan(big2.pow(size - 1).mul(-1))) {
      throw new Error("Value must be in range [-2^".concat(size - 1, ", 2^").concat(size - 1, "-1]"));
    }
    if (!n.isInteger()) {
      throw new Error("Value must be an integer");
    }
    if (n.lessThan(0)) {
      n = n.add(big2.pow(size));
    }
    suffix = "i".concat(size);
  }
  switch (base) {
    case 2:
      return "".concat(n.toBinary()).concat(suffix);
    case 8:
      return "".concat(n.toOctal()).concat(suffix);
    case 16:
      return "".concat(n.toHexadecimal()).concat(suffix);
    default:
      throw new Error("Base ".concat(base, " not supported "));
  }
}
function format$1(value, options) {
  if (typeof options === "function") {
    return options(value);
  }
  if (!value.isFinite()) {
    return value.isNaN() ? "NaN" : value.gt(0) ? "Infinity" : "-Infinity";
  }
  var notation = "auto";
  var precision;
  var wordSize;
  if (options !== void 0) {
    if (options.notation) {
      notation = options.notation;
    }
    if (typeof options === "number") {
      precision = options;
    } else if (options.precision) {
      precision = options.precision;
    }
    if (options.wordSize) {
      wordSize = options.wordSize;
      if (typeof wordSize !== "number") {
        throw new Error('Option "wordSize" must be a number');
      }
    }
  }
  switch (notation) {
    case "fixed":
      return toFixed$1(value, precision);
    case "exponential":
      return toExponential$1(value, precision);
    case "engineering":
      return toEngineering$1(value, precision);
    case "bin":
      return formatBigNumberToBase(value, 2, wordSize);
    case "oct":
      return formatBigNumberToBase(value, 8, wordSize);
    case "hex":
      return formatBigNumberToBase(value, 16, wordSize);
    case "auto": {
      var lowerExp = options && options.lowerExp !== void 0 ? options.lowerExp : -3;
      var upperExp = options && options.upperExp !== void 0 ? options.upperExp : 5;
      if (value.isZero())
        return "0";
      var str;
      var rounded = value.toSignificantDigits(precision);
      var exp = rounded.e;
      if (exp >= lowerExp && exp < upperExp) {
        str = rounded.toFixed();
      } else {
        str = toExponential$1(value, precision);
      }
      return str.replace(/((\.\d*?)(0+))($|e)/, function() {
        var digits2 = arguments[2];
        var e2 = arguments[4];
        return digits2 !== "." ? digits2 + e2 : e2;
      });
    }
    default:
      throw new Error('Unknown notation "' + notation + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function toEngineering$1(value, precision) {
  var e2 = value.e;
  var newExp = e2 % 3 === 0 ? e2 : e2 < 0 ? e2 - 3 - e2 % 3 : e2 - e2 % 3;
  var valueWithoutExp = value.mul(`1e${-newExp}`);
  var valueStr = valueWithoutExp.toPrecision(precision);
  if (valueStr.indexOf("e") !== -1) {
    valueStr = valueWithoutExp.toString();
  }
  return valueStr + "e" + (e2 >= 0 ? "+" : "") + newExp.toString();
}
function toExponential$1(value, precision) {
  if (precision !== void 0) {
    return value.toExponential(precision - 1);
  } else {
    return value.toExponential();
  }
}
function toFixed$1(value, precision) {
  return value.toFixed(precision);
}
function endsWith(text, search) {
  var start = text.length - search.length;
  var end = text.length;
  return text.substring(start, end) === search;
}
function format$2(value, options) {
  var result = _format(value, options);
  if (options && typeof options === "object" && "truncate" in options && result.length > options.truncate) {
    return result.substring(0, options.truncate - 3) + "...";
  }
  return result;
}
function _format(value, options) {
  if (typeof value === "number") {
    return format(value, options);
  }
  if (isBigNumber(value)) {
    return format$1(value, options);
  }
  if (looksLikeFraction(value)) {
    if (!options || options.fraction !== "decimal") {
      return value.s * value.n + "/" + value.d;
    } else {
      return value.toString();
    }
  }
  if (Array.isArray(value)) {
    return formatArray(value, options);
  }
  if (isString(value)) {
    return '"' + value + '"';
  }
  if (typeof value === "function") {
    return value.syntax ? String(value.syntax) : "function";
  }
  if (value && typeof value === "object") {
    if (typeof value.format === "function") {
      return value.format(options);
    } else if (value && value.toString(options) !== {}.toString()) {
      return value.toString(options);
    } else {
      var entries = Object.keys(value).map((key) => {
        return '"' + key + '": ' + format$2(value[key], options);
      });
      return "{" + entries.join(", ") + "}";
    }
  }
  return String(value);
}
function stringify(value) {
  var text = String(value);
  var escaped = "";
  var i = 0;
  while (i < text.length) {
    var c = text.charAt(i);
    if (c === "\\") {
      escaped += c;
      i++;
      c = text.charAt(i);
      if (c === "" || '"\\/bfnrtu'.indexOf(c) === -1) {
        escaped += "\\";
      }
      escaped += c;
    } else if (c === '"') {
      escaped += '\\"';
    } else {
      escaped += c;
    }
    i++;
  }
  return '"' + escaped + '"';
}
function escape(value) {
  var text = String(value);
  text = text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return text;
}
function formatArray(array, options) {
  if (Array.isArray(array)) {
    var str = "[";
    var len = array.length;
    for (var i = 0; i < len; i++) {
      if (i !== 0) {
        str += ", ";
      }
      str += formatArray(array[i], options);
    }
    str += "]";
    return str;
  } else {
    return format$2(array, options);
  }
}
function looksLikeFraction(value) {
  return value && typeof value === "object" && typeof value.s === "number" && typeof value.n === "number" && typeof value.d === "number" || false;
}
function compareText(x, y) {
  if (!isString(x)) {
    throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + typeOf(x) + ", index: 0)");
  }
  if (!isString(y)) {
    throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + typeOf(y) + ", index: 1)");
  }
  return x === y ? 0 : x > y ? 1 : -1;
}
function DimensionError(actual, expected, relation) {
  if (!(this instanceof DimensionError)) {
    throw new SyntaxError("Constructor must be called with the new operator");
  }
  this.actual = actual;
  this.expected = expected;
  this.relation = relation;
  this.message = "Dimension mismatch (" + (Array.isArray(actual) ? "[" + actual.join(", ") + "]" : actual) + " " + (this.relation || "!=") + " " + (Array.isArray(expected) ? "[" + expected.join(", ") + "]" : expected) + ")";
  this.stack = new Error().stack;
}
DimensionError.prototype = new RangeError();
DimensionError.prototype.constructor = RangeError;
DimensionError.prototype.name = "DimensionError";
DimensionError.prototype.isDimensionError = true;
function IndexError(index, min, max) {
  if (!(this instanceof IndexError)) {
    throw new SyntaxError("Constructor must be called with the new operator");
  }
  this.index = index;
  if (arguments.length < 3) {
    this.min = 0;
    this.max = min;
  } else {
    this.min = min;
    this.max = max;
  }
  if (this.min !== void 0 && this.index < this.min) {
    this.message = "Index out of range (" + this.index + " < " + this.min + ")";
  } else if (this.max !== void 0 && this.index >= this.max) {
    this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")";
  } else {
    this.message = "Index out of range (" + this.index + ")";
  }
  this.stack = new Error().stack;
}
IndexError.prototype = new RangeError();
IndexError.prototype.constructor = RangeError;
IndexError.prototype.name = "IndexError";
IndexError.prototype.isIndexError = true;
function arraySize(x) {
  var s = [];
  while (Array.isArray(x)) {
    s.push(x.length);
    x = x[0];
  }
  return s;
}
function _validate(array, size, dim) {
  var i;
  var len = array.length;
  if (len !== size[dim]) {
    throw new DimensionError(len, size[dim]);
  }
  if (dim < size.length - 1) {
    var dimNext = dim + 1;
    for (i = 0; i < len; i++) {
      var child = array[i];
      if (!Array.isArray(child)) {
        throw new DimensionError(size.length - 1, size.length, "<");
      }
      _validate(array[i], size, dimNext);
    }
  } else {
    for (i = 0; i < len; i++) {
      if (Array.isArray(array[i])) {
        throw new DimensionError(size.length + 1, size.length, ">");
      }
    }
  }
}
function validate(array, size) {
  var isScalar = size.length === 0;
  if (isScalar) {
    if (Array.isArray(array)) {
      throw new DimensionError(array.length, 0);
    }
  } else {
    _validate(array, size, 0);
  }
}
function validateIndex(index, length) {
  if (!isNumber(index) || !isInteger(index)) {
    throw new TypeError("Index must be an integer (value: " + index + ")");
  }
  if (index < 0 || typeof length === "number" && index >= length) {
    throw new IndexError(index, length);
  }
}
function resize(array, size, defaultValue) {
  if (!Array.isArray(array) || !Array.isArray(size)) {
    throw new TypeError("Array expected");
  }
  if (size.length === 0) {
    throw new Error("Resizing to scalar is not supported");
  }
  size.forEach(function(value) {
    if (!isNumber(value) || !isInteger(value) || value < 0) {
      throw new TypeError("Invalid size, must contain positive integers (size: " + format$2(size) + ")");
    }
  });
  var _defaultValue = defaultValue !== void 0 ? defaultValue : 0;
  _resize(array, size, 0, _defaultValue);
  return array;
}
function _resize(array, size, dim, defaultValue) {
  var i;
  var elem;
  var oldLen = array.length;
  var newLen = size[dim];
  var minLen = Math.min(oldLen, newLen);
  array.length = newLen;
  if (dim < size.length - 1) {
    var dimNext = dim + 1;
    for (i = 0; i < minLen; i++) {
      elem = array[i];
      if (!Array.isArray(elem)) {
        elem = [elem];
        array[i] = elem;
      }
      _resize(elem, size, dimNext, defaultValue);
    }
    for (i = minLen; i < newLen; i++) {
      elem = [];
      array[i] = elem;
      _resize(elem, size, dimNext, defaultValue);
    }
  } else {
    for (i = 0; i < minLen; i++) {
      while (Array.isArray(array[i])) {
        array[i] = array[i][0];
      }
    }
    for (i = minLen; i < newLen; i++) {
      array[i] = defaultValue;
    }
  }
}
function reshape(array, sizes) {
  var flatArray = flatten(array);
  var currentLength = flatArray.length;
  if (!Array.isArray(array) || !Array.isArray(sizes)) {
    throw new TypeError("Array expected");
  }
  if (sizes.length === 0) {
    throw new DimensionError(0, currentLength, "!=");
  }
  sizes = processSizesWildcard(sizes, currentLength);
  var newLength = product(sizes);
  if (currentLength !== newLength) {
    throw new DimensionError(newLength, currentLength, "!=");
  }
  try {
    return _reshape(flatArray, sizes);
  } catch (e2) {
    if (e2 instanceof DimensionError) {
      throw new DimensionError(newLength, currentLength, "!=");
    }
    throw e2;
  }
}
function processSizesWildcard(sizes, currentLength) {
  var newLength = product(sizes);
  var processedSizes = sizes.slice();
  var WILDCARD = -1;
  var wildCardIndex = sizes.indexOf(WILDCARD);
  var isMoreThanOneWildcard = sizes.indexOf(WILDCARD, wildCardIndex + 1) >= 0;
  if (isMoreThanOneWildcard) {
    throw new Error("More than one wildcard in sizes");
  }
  var hasWildcard = wildCardIndex >= 0;
  var canReplaceWildcard = currentLength % newLength === 0;
  if (hasWildcard) {
    if (canReplaceWildcard) {
      processedSizes[wildCardIndex] = -currentLength / newLength;
    } else {
      throw new Error("Could not replace wildcard, since " + currentLength + " is no multiple of " + -newLength);
    }
  }
  return processedSizes;
}
function product(array) {
  return array.reduce((prev, curr) => prev * curr, 1);
}
function _reshape(array, sizes) {
  var tmpArray = array;
  var tmpArray2;
  for (var sizeIndex = sizes.length - 1; sizeIndex > 0; sizeIndex--) {
    var size = sizes[sizeIndex];
    tmpArray2 = [];
    var length = tmpArray.length / size;
    for (var i = 0; i < length; i++) {
      tmpArray2.push(tmpArray.slice(i * size, (i + 1) * size));
    }
    tmpArray = tmpArray2;
  }
  return tmpArray;
}
function squeeze(array, size) {
  var s = size || arraySize(array);
  while (Array.isArray(array) && array.length === 1) {
    array = array[0];
    s.shift();
  }
  var dims = s.length;
  while (s[dims - 1] === 1) {
    dims--;
  }
  if (dims < s.length) {
    array = _squeeze(array, dims, 0);
    s.length = dims;
  }
  return array;
}
function _squeeze(array, dims, dim) {
  var i, ii;
  if (dim < dims) {
    var next = dim + 1;
    for (i = 0, ii = array.length; i < ii; i++) {
      array[i] = _squeeze(array[i], dims, next);
    }
  } else {
    while (Array.isArray(array)) {
      array = array[0];
    }
  }
  return array;
}
function unsqueeze(array, dims, outer, size) {
  var s = size || arraySize(array);
  if (outer) {
    for (var i = 0; i < outer; i++) {
      array = [array];
      s.unshift(1);
    }
  }
  array = _unsqueeze(array, dims, 0);
  while (s.length < dims) {
    s.push(1);
  }
  return array;
}
function _unsqueeze(array, dims, dim) {
  var i, ii;
  if (Array.isArray(array)) {
    var next = dim + 1;
    for (i = 0, ii = array.length; i < ii; i++) {
      array[i] = _unsqueeze(array[i], dims, next);
    }
  } else {
    for (var d = dim; d < dims; d++) {
      array = [array];
    }
  }
  return array;
}
function flatten(array) {
  if (!Array.isArray(array)) {
    return array;
  }
  var flat = [];
  array.forEach(function callback(value) {
    if (Array.isArray(value)) {
      value.forEach(callback);
    } else {
      flat.push(value);
    }
  });
  return flat;
}
function map(array, callback) {
  return Array.prototype.map.call(array, callback);
}
function forEach(array, callback) {
  Array.prototype.forEach.call(array, callback);
}
function filter(array, callback) {
  if (arraySize(array).length !== 1) {
    throw new Error("Only one dimensional matrices supported");
  }
  return Array.prototype.filter.call(array, callback);
}
function filterRegExp(array, regexp) {
  if (arraySize(array).length !== 1) {
    throw new Error("Only one dimensional matrices supported");
  }
  return Array.prototype.filter.call(array, (entry) => regexp.test(entry));
}
function join(array, separator) {
  return Array.prototype.join.call(array, separator);
}
function identify(a) {
  if (!Array.isArray(a)) {
    throw new TypeError("Array input expected");
  }
  if (a.length === 0) {
    return a;
  }
  var b = [];
  var count = 0;
  b[0] = {
    value: a[0],
    identifier: 0
  };
  for (var i = 1; i < a.length; i++) {
    if (a[i] === a[i - 1]) {
      count++;
    } else {
      count = 0;
    }
    b.push({
      value: a[i],
      identifier: count
    });
  }
  return b;
}
function generalize(a) {
  if (!Array.isArray(a)) {
    throw new TypeError("Array input expected");
  }
  if (a.length === 0) {
    return a;
  }
  var b = [];
  for (var i = 0; i < a.length; i++) {
    b.push(a[i].value);
  }
  return b;
}
function getArrayDataType(array, typeOf2) {
  var type;
  var length = 0;
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    var isArray2 = Array.isArray(item);
    if (i === 0 && isArray2) {
      length = item.length;
    }
    if (isArray2 && item.length !== length) {
      return void 0;
    }
    var itemType = isArray2 ? getArrayDataType(item, typeOf2) : typeOf2(item);
    if (type === void 0) {
      type = itemType;
    } else if (type !== itemType) {
      return "mixed";
    } else
      ;
  }
  return type;
}
function contains$1(array, item) {
  return array.indexOf(item) !== -1;
}
function factory(name2, dependencies2, create2, meta) {
  function assertAndCreate(scope) {
    var deps = pickShallow(scope, dependencies2.map(stripOptionalNotation));
    assertDependencies(name2, dependencies2, scope);
    return create2(deps);
  }
  assertAndCreate.isFactory = true;
  assertAndCreate.fn = name2;
  assertAndCreate.dependencies = dependencies2.slice().sort();
  if (meta) {
    assertAndCreate.meta = meta;
  }
  return assertAndCreate;
}
function isFactory(obj) {
  return typeof obj === "function" && typeof obj.fn === "string" && Array.isArray(obj.dependencies);
}
function assertDependencies(name2, dependencies2, scope) {
  var allDefined = dependencies2.filter((dependency) => !isOptionalDependency(dependency)).every((dependency) => scope[dependency] !== void 0);
  if (!allDefined) {
    var missingDependencies = dependencies2.filter((dependency) => scope[dependency] === void 0);
    throw new Error('Cannot create function "'.concat(name2, '", ') + "some dependencies are missing: ".concat(missingDependencies.map((d) => '"'.concat(d, '"')).join(", "), "."));
  }
}
function isOptionalDependency(dependency) {
  return dependency && dependency[0] === "?";
}
function stripOptionalNotation(dependency) {
  return dependency && dependency[0] === "?" ? dependency.slice(1) : dependency;
}
function getSafeProperty(object, prop) {
  if (isPlainObject(object) && isSafeProperty(object, prop)) {
    return object[prop];
  }
  if (typeof object[prop] === "function" && isSafeMethod(object, prop)) {
    throw new Error('Cannot access method "' + prop + '" as a property');
  }
  throw new Error('No access to property "' + prop + '"');
}
function setSafeProperty(object, prop, value) {
  if (isPlainObject(object) && isSafeProperty(object, prop)) {
    object[prop] = value;
    return value;
  }
  throw new Error('No access to property "' + prop + '"');
}
function hasSafeProperty(object, prop) {
  return prop in object;
}
function isSafeProperty(object, prop) {
  if (!object || typeof object !== "object") {
    return false;
  }
  if (hasOwnProperty$1(safeNativeProperties, prop)) {
    return true;
  }
  if (prop in Object.prototype) {
    return false;
  }
  if (prop in Function.prototype) {
    return false;
  }
  return true;
}
function validateSafeMethod(object, method) {
  if (!isSafeMethod(object, method)) {
    throw new Error('No access to method "' + method + '"');
  }
}
function isSafeMethod(object, method) {
  if (object === null || object === void 0 || typeof object[method] !== "function") {
    return false;
  }
  if (hasOwnProperty$1(object, method) && Object.getPrototypeOf && method in Object.getPrototypeOf(object)) {
    return false;
  }
  if (hasOwnProperty$1(safeNativeMethods, method)) {
    return true;
  }
  if (method in Object.prototype) {
    return false;
  }
  if (method in Function.prototype) {
    return false;
  }
  return true;
}
function isPlainObject(object) {
  return typeof object === "object" && object && object.constructor === Object;
}
var safeNativeProperties = {
  length: true,
  name: true
};
var safeNativeMethods = {
  toString: true,
  valueOf: true,
  toLocaleString: true
};
class ObjectWrappingMap {
  constructor(object) {
    this.wrappedObject = object;
  }
  keys() {
    return Object.keys(this.wrappedObject);
  }
  get(key) {
    return getSafeProperty(this.wrappedObject, key);
  }
  set(key, value) {
    setSafeProperty(this.wrappedObject, key, value);
    return this;
  }
  has(key) {
    return hasSafeProperty(this.wrappedObject, key);
  }
}
function createEmptyMap() {
  return new Map();
}
function createMap(mapOrObject) {
  if (!mapOrObject) {
    return createEmptyMap();
  }
  if (isMap(mapOrObject)) {
    return mapOrObject;
  }
  if (isObject(mapOrObject)) {
    return new ObjectWrappingMap(mapOrObject);
  }
  throw new Error("createMap can create maps from objects or Maps");
}
function toObject(map2) {
  if (map2 instanceof ObjectWrappingMap) {
    return map2.wrappedObject;
  }
  var object = {};
  for (var key of map2.keys()) {
    var value = map2.get(key);
    setSafeProperty(object, key, value);
  }
  return object;
}
function isMap(object) {
  if (!object) {
    return false;
  }
  return object instanceof Map || object instanceof ObjectWrappingMap || typeof object.set === "function" && typeof object.get === "function" && typeof object.keys === "function" && typeof object.has === "function";
}
function assign(map2) {
  for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    objects[_key - 1] = arguments[_key];
  }
  for (var args of objects) {
    if (!args) {
      continue;
    }
    if (isMap(args)) {
      for (var key of args.keys()) {
        map2.set(key, args.get(key));
      }
    } else if (isObject(args)) {
      for (var _key2 of Object.keys(args)) {
        map2.set(_key2, args[_key2]);
      }
    }
  }
  return map2;
}
var _createTyped2 = function _createTyped() {
  _createTyped2 = typedFunction.create;
  return typedFunction;
};
var dependencies = ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"];
var createTyped = /* @__PURE__ */ factory("typed", dependencies, function createTyped2(_ref) {
  var {
    BigNumber,
    Complex,
    DenseMatrix,
    Fraction
  } = _ref;
  var typed = _createTyped2();
  typed.clear();
  typed.addTypes([
    {
      name: "number",
      test: isNumber
    },
    {
      name: "Complex",
      test: isComplex
    },
    {
      name: "BigNumber",
      test: isBigNumber
    },
    {
      name: "Fraction",
      test: isFraction
    },
    {
      name: "Unit",
      test: isUnit
    },
    {
      name: "identifier",
      test: (s) => isString && /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(s)
    },
    {
      name: "string",
      test: isString
    },
    {
      name: "Chain",
      test: isChain
    },
    {
      name: "Array",
      test: isArray
    },
    {
      name: "Matrix",
      test: isMatrix
    },
    {
      name: "DenseMatrix",
      test: isDenseMatrix
    },
    {
      name: "SparseMatrix",
      test: isSparseMatrix
    },
    {
      name: "Range",
      test: isRange
    },
    {
      name: "Index",
      test: isIndex
    },
    {
      name: "boolean",
      test: isBoolean
    },
    {
      name: "ResultSet",
      test: isResultSet
    },
    {
      name: "Help",
      test: isHelp
    },
    {
      name: "function",
      test: isFunction
    },
    {
      name: "Date",
      test: isDate
    },
    {
      name: "RegExp",
      test: isRegExp
    },
    {
      name: "null",
      test: isNull
    },
    {
      name: "undefined",
      test: isUndefined
    },
    {
      name: "AccessorNode",
      test: isAccessorNode
    },
    {
      name: "ArrayNode",
      test: isArrayNode
    },
    {
      name: "AssignmentNode",
      test: isAssignmentNode
    },
    {
      name: "BlockNode",
      test: isBlockNode
    },
    {
      name: "ConditionalNode",
      test: isConditionalNode
    },
    {
      name: "ConstantNode",
      test: isConstantNode
    },
    {
      name: "FunctionNode",
      test: isFunctionNode
    },
    {
      name: "FunctionAssignmentNode",
      test: isFunctionAssignmentNode
    },
    {
      name: "IndexNode",
      test: isIndexNode
    },
    {
      name: "Node",
      test: isNode
    },
    {
      name: "ObjectNode",
      test: isObjectNode
    },
    {
      name: "OperatorNode",
      test: isOperatorNode
    },
    {
      name: "ParenthesisNode",
      test: isParenthesisNode
    },
    {
      name: "RangeNode",
      test: isRangeNode
    },
    {
      name: "RelationalNode",
      test: isRelationalNode
    },
    {
      name: "SymbolNode",
      test: isSymbolNode
    },
    {
      name: "Map",
      test: isMap
    },
    {
      name: "Object",
      test: isObject
    }
  ]);
  typed.addConversions([{
    from: "number",
    to: "BigNumber",
    convert: function convert(x) {
      if (!BigNumber) {
        throwNoBignumber(x);
      }
      if (digits(x) > 15) {
        throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + x + "). Use function bignumber(x) to convert to BigNumber.");
      }
      return new BigNumber(x);
    }
  }, {
    from: "number",
    to: "Complex",
    convert: function convert(x) {
      if (!Complex) {
        throwNoComplex(x);
      }
      return new Complex(x, 0);
    }
  }, {
    from: "BigNumber",
    to: "Complex",
    convert: function convert(x) {
      if (!Complex) {
        throwNoComplex(x);
      }
      return new Complex(x.toNumber(), 0);
    }
  }, {
    from: "Fraction",
    to: "BigNumber",
    convert: function convert(x) {
      throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.");
    }
  }, {
    from: "Fraction",
    to: "Complex",
    convert: function convert(x) {
      if (!Complex) {
        throwNoComplex(x);
      }
      return new Complex(x.valueOf(), 0);
    }
  }, {
    from: "number",
    to: "Fraction",
    convert: function convert(x) {
      if (!Fraction) {
        throwNoFraction(x);
      }
      var f = new Fraction(x);
      if (f.valueOf() !== x) {
        throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + x + "). Use function fraction(x) to convert to Fraction.");
      }
      return f;
    }
  }, {
    from: "string",
    to: "number",
    convert: function convert(x) {
      var n = Number(x);
      if (isNaN(n)) {
        throw new Error('Cannot convert "' + x + '" to a number');
      }
      return n;
    }
  }, {
    from: "string",
    to: "BigNumber",
    convert: function convert(x) {
      if (!BigNumber) {
        throwNoBignumber(x);
      }
      try {
        return new BigNumber(x);
      } catch (err) {
        throw new Error('Cannot convert "' + x + '" to BigNumber');
      }
    }
  }, {
    from: "string",
    to: "Fraction",
    convert: function convert(x) {
      if (!Fraction) {
        throwNoFraction(x);
      }
      try {
        return new Fraction(x);
      } catch (err) {
        throw new Error('Cannot convert "' + x + '" to Fraction');
      }
    }
  }, {
    from: "string",
    to: "Complex",
    convert: function convert(x) {
      if (!Complex) {
        throwNoComplex(x);
      }
      try {
        return new Complex(x);
      } catch (err) {
        throw new Error('Cannot convert "' + x + '" to Complex');
      }
    }
  }, {
    from: "boolean",
    to: "number",
    convert: function convert(x) {
      return +x;
    }
  }, {
    from: "boolean",
    to: "BigNumber",
    convert: function convert(x) {
      if (!BigNumber) {
        throwNoBignumber(x);
      }
      return new BigNumber(+x);
    }
  }, {
    from: "boolean",
    to: "Fraction",
    convert: function convert(x) {
      if (!Fraction) {
        throwNoFraction(x);
      }
      return new Fraction(+x);
    }
  }, {
    from: "boolean",
    to: "string",
    convert: function convert(x) {
      return String(x);
    }
  }, {
    from: "Array",
    to: "Matrix",
    convert: function convert(array) {
      if (!DenseMatrix) {
        throwNoMatrix();
      }
      return new DenseMatrix(array);
    }
  }, {
    from: "Matrix",
    to: "Array",
    convert: function convert(matrix) {
      return matrix.valueOf();
    }
  }]);
  typed.onMismatch = (name2, args, signatures) => {
    var usualError = typed.createError(name2, args, signatures);
    if (["wrongType", "mismatch"].includes(usualError.data.category) && args.length === 1 && isCollection(args[0]) && signatures.some((sig) => !sig.params.includes(","))) {
      var err = new TypeError("Function '".concat(name2, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(name2, ")'."));
      err.data = usualError.data;
      throw err;
    }
    throw usualError;
  };
  typed.onMismatch = (name2, args, signatures) => {
    var usualError = typed.createError(name2, args, signatures);
    if (["wrongType", "mismatch"].includes(usualError.data.category) && args.length === 1 && isCollection(args[0]) && signatures.some((sig) => !sig.params.includes(","))) {
      var err = new TypeError("Function '".concat(name2, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(name2, ")'."));
      err.data = usualError.data;
      throw err;
    }
    throw usualError;
  };
  return typed;
});
function throwNoBignumber(x) {
  throw new Error("Cannot convert value ".concat(x, " into a BigNumber: no class 'BigNumber' provided"));
}
function throwNoComplex(x) {
  throw new Error("Cannot convert value ".concat(x, " into a Complex number: no class 'Complex' provided"));
}
function throwNoMatrix() {
  throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided");
}
function throwNoFraction(x) {
  throw new Error("Cannot convert value ".concat(x, " into a Fraction, no class 'Fraction' provided."));
}
var name = "ResultSet";
var dependencies$1 = [];
var createResultSet = /* @__PURE__ */ factory(name, dependencies$1, () => {
  function ResultSet(entries) {
    if (!(this instanceof ResultSet)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
    this.entries = entries || [];
  }
  ResultSet.prototype.type = "ResultSet";
  ResultSet.prototype.isResultSet = true;
  ResultSet.prototype.valueOf = function() {
    return this.entries;
  };
  ResultSet.prototype.toString = function() {
    return "[" + this.entries.join(", ") + "]";
  };
  ResultSet.prototype.toJSON = function() {
    return {
      mathjs: "ResultSet",
      entries: this.entries
    };
  };
  ResultSet.fromJSON = function(json) {
    return new ResultSet(json.entries);
  };
  return ResultSet;
}, {
  isClass: true
});
var name$1 = "Range";
var dependencies$2 = [];
var createRangeClass = /* @__PURE__ */ factory(name$1, dependencies$2, () => {
  function Range(start, end, step) {
    if (!(this instanceof Range)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
    var hasStart = start !== null && start !== void 0;
    var hasEnd = end !== null && end !== void 0;
    var hasStep = step !== null && step !== void 0;
    if (hasStart) {
      if (isBigNumber(start)) {
        start = start.toNumber();
      } else if (typeof start !== "number") {
        throw new TypeError("Parameter start must be a number");
      }
    }
    if (hasEnd) {
      if (isBigNumber(end)) {
        end = end.toNumber();
      } else if (typeof end !== "number") {
        throw new TypeError("Parameter end must be a number");
      }
    }
    if (hasStep) {
      if (isBigNumber(step)) {
        step = step.toNumber();
      } else if (typeof step !== "number") {
        throw new TypeError("Parameter step must be a number");
      }
    }
    this.start = hasStart ? parseFloat(start) : 0;
    this.end = hasEnd ? parseFloat(end) : 0;
    this.step = hasStep ? parseFloat(step) : 1;
  }
  Range.prototype.type = "Range";
  Range.prototype.isRange = true;
  Range.parse = function(str) {
    if (typeof str !== "string") {
      return null;
    }
    var args = str.split(":");
    var nums = args.map(function(arg) {
      return parseFloat(arg);
    });
    var invalid = nums.some(function(num) {
      return isNaN(num);
    });
    if (invalid) {
      return null;
    }
    switch (nums.length) {
      case 2:
        return new Range(nums[0], nums[1]);
      case 3:
        return new Range(nums[0], nums[2], nums[1]);
      default:
        return null;
    }
  };
  Range.prototype.clone = function() {
    return new Range(this.start, this.end, this.step);
  };
  Range.prototype.size = function() {
    var len = 0;
    var start = this.start;
    var step = this.step;
    var end = this.end;
    var diff = end - start;
    if (sign(step) === sign(diff)) {
      len = Math.ceil(diff / step);
    } else if (diff === 0) {
      len = 0;
    }
    if (isNaN(len)) {
      len = 0;
    }
    return [len];
  };
  Range.prototype.min = function() {
    var size = this.size()[0];
    if (size > 0) {
      if (this.step > 0) {
        return this.start;
      } else {
        return this.start + (size - 1) * this.step;
      }
    } else {
      return void 0;
    }
  };
  Range.prototype.max = function() {
    var size = this.size()[0];
    if (size > 0) {
      if (this.step > 0) {
        return this.start + (size - 1) * this.step;
      } else {
        return this.start;
      }
    } else {
      return void 0;
    }
  };
  Range.prototype.forEach = function(callback) {
    var x = this.start;
    var step = this.step;
    var end = this.end;
    var i = 0;
    if (step > 0) {
      while (x < end) {
        callback(x, [i], this);
        x += step;
        i++;
      }
    } else if (step < 0) {
      while (x > end) {
        callback(x, [i], this);
        x += step;
        i++;
      }
    }
  };
  Range.prototype.map = function(callback) {
    var array = [];
    this.forEach(function(value, index, obj) {
      array[index[0]] = callback(value, index, obj);
    });
    return array;
  };
  Range.prototype.toArray = function() {
    var array = [];
    this.forEach(function(value, index) {
      array[index[0]] = value;
    });
    return array;
  };
  Range.prototype.valueOf = function() {
    return this.toArray();
  };
  Range.prototype.format = function(options) {
    var str = format(this.start, options);
    if (this.step !== 1) {
      str += ":" + format(this.step, options);
    }
    str += ":" + format(this.end, options);
    return str;
  };
  Range.prototype.toString = function() {
    return this.format();
  };
  Range.prototype.toJSON = function() {
    return {
      mathjs: "Range",
      start: this.start,
      end: this.end,
      step: this.step
    };
  };
  Range.fromJSON = function(json) {
    return new Range(json.start, json.end, json.step);
  };
  return Range;
}, {
  isClass: true
});
function lruQueue(limit) {
  var size = 0;
  var base = 1;
  var queue = Object.create(null);
  var map2 = Object.create(null);
  var index = 0;
  var del = function del2(id) {
    var oldIndex = map2[id];
    if (!oldIndex)
      return;
    delete queue[oldIndex];
    delete map2[id];
    --size;
    if (base !== oldIndex)
      return;
    if (!size) {
      index = 0;
      base = 1;
      return;
    }
    while (!hasOwnProperty.call(queue, ++base))
      continue;
  };
  limit = Math.abs(limit);
  return {
    hit: function hit(id) {
      var oldIndex = map2[id];
      var nuIndex = ++index;
      queue[nuIndex] = id;
      map2[id] = nuIndex;
      if (!oldIndex) {
        ++size;
        if (size <= limit)
          return void 0;
        id = queue[base];
        del(id);
        return id;
      }
      delete queue[oldIndex];
      if (base !== oldIndex)
        return void 0;
      while (!hasOwnProperty.call(queue, ++base))
        continue;
      return void 0;
    },
    delete: del,
    clear: function clear() {
      size = index = 0;
      base = 1;
      queue = Object.create(null);
      map2 = Object.create(null);
    }
  };
}
function memoize(fn) {
  var {
    hasher: hasher2,
    limit
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  limit = limit == null ? Number.POSITIVE_INFINITY : limit;
  hasher2 = hasher2 == null ? JSON.stringify : hasher2;
  return function memoize2() {
    if (typeof memoize2.cache !== "object") {
      memoize2.cache = {
        values: new Map(),
        lru: lruQueue(limit || Number.POSITIVE_INFINITY)
      };
    }
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }
    var hash = hasher2(args);
    if (memoize2.cache.values.has(hash)) {
      memoize2.cache.lru.hit(hash);
      return memoize2.cache.values.get(hash);
    }
    var newVal = fn.apply(fn, args);
    memoize2.cache.values.set(hash, newVal);
    memoize2.cache.values.delete(memoize2.cache.lru.hit(hash));
    return newVal;
  };
}
function maxArgumentCount(fn) {
  return Object.keys(fn.signatures || {}).reduce(function(args, signature) {
    var count = (signature.match(/,/g) || []).length + 1;
    return Math.max(args, count);
  }, -1);
}
var name$2 = "clone";
var dependencies$3 = ["typed"];
var createClone = /* @__PURE__ */ factory(name$2, dependencies$3, (_ref) => {
  var {
    typed
  } = _ref;
  return typed(name$2, {
    any: clone
  });
});
function _switch(mat) {
  var I = mat.length;
  var J = mat[0].length;
  var i, j;
  var ret = [];
  for (j = 0; j < J; j++) {
    var tmp = [];
    for (i = 0; i < I; i++) {
      tmp.push(mat[i][j]);
    }
    ret.push(tmp);
  }
  return ret;
}
function containsCollections(array) {
  for (var i = 0; i < array.length; i++) {
    if (isCollection(array[i])) {
      return true;
    }
  }
  return false;
}
function deepForEach(array, callback) {
  if (isMatrix(array)) {
    array = array.valueOf();
  }
  for (var i = 0, ii = array.length; i < ii; i++) {
    var value = array[i];
    if (Array.isArray(value)) {
      deepForEach(value, callback);
    } else {
      callback(value);
    }
  }
}
function deepMap(array, callback, skipZeros) {
  if (array && typeof array.map === "function") {
    return array.map(function(x) {
      return deepMap(x, callback);
    });
  } else {
    return callback(array);
  }
}
function reduce(mat, dim, callback) {
  var size = Array.isArray(mat) ? arraySize(mat) : mat.size();
  if (dim < 0 || dim >= size.length) {
    throw new IndexError(dim, size.length);
  }
  if (isMatrix(mat)) {
    return mat.create(_reduce(mat.valueOf(), dim, callback));
  } else {
    return _reduce(mat, dim, callback);
  }
}
function _reduce(mat, dim, callback) {
  var i, ret, val, tran;
  if (dim <= 0) {
    if (!Array.isArray(mat[0])) {
      val = mat[0];
      for (i = 1; i < mat.length; i++) {
        val = callback(val, mat[i]);
      }
      return val;
    } else {
      tran = _switch(mat);
      ret = [];
      for (i = 0; i < tran.length; i++) {
        ret[i] = _reduce(tran[i], dim - 1, callback);
      }
      return ret;
    }
  } else {
    ret = [];
    for (i = 0; i < mat.length; i++) {
      ret[i] = _reduce(mat[i], dim - 1, callback);
    }
    return ret;
  }
}
function scatter(a, j, w, x, u, mark, cindex, f, inverse, update, value) {
  var avalues = a._values;
  var aindex = a._index;
  var aptr = a._ptr;
  var k, k0, k1, i;
  if (x) {
    for (k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++) {
      i = aindex[k];
      if (w[i] !== mark) {
        w[i] = mark;
        cindex.push(i);
        if (update) {
          x[i] = inverse ? f(avalues[k], value) : f(value, avalues[k]);
          u[i] = mark;
        } else {
          x[i] = avalues[k];
        }
      } else {
        x[i] = inverse ? f(avalues[k], x[i]) : f(x[i], avalues[k]);
        u[i] = mark;
      }
    }
  } else {
    for (k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++) {
      i = aindex[k];
      if (w[i] !== mark) {
        w[i] = mark;
        cindex.push(i);
      } else {
        u[i] = mark;
      }
    }
  }
}
var n1 = "number";
var n2 = "number, number";
function absNumber(a) {
  return Math.abs(a);
}
absNumber.signature = n1;
function addNumber(a, b) {
  return a + b;
}
addNumber.signature = n2;
function subtractNumber(a, b) {
  return a - b;
}
subtractNumber.signature = n2;
function multiplyNumber(a, b) {
  return a * b;
}
multiplyNumber.signature = n2;
function divideNumber(a, b) {
  return a / b;
}
divideNumber.signature = n2;
function unaryMinusNumber(x) {
  return -x;
}
unaryMinusNumber.signature = n1;
function unaryPlusNumber(x) {
  return x;
}
unaryPlusNumber.signature = n1;
function cbrtNumber(x) {
  return cbrt(x);
}
cbrtNumber.signature = n1;
function cubeNumber(x) {
  return x * x * x;
}
cubeNumber.signature = n1;
function expNumber(x) {
  return Math.exp(x);
}
expNumber.signature = n1;
function expm1Number(x) {
  return expm1(x);
}
expm1Number.signature = n1;
function gcdNumber(a, b) {
  if (!isInteger(a) || !isInteger(b)) {
    throw new Error("Parameters in function gcd must be integer numbers");
  }
  var r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a < 0 ? -a : a;
}
gcdNumber.signature = n2;
function lcmNumber(a, b) {
  if (!isInteger(a) || !isInteger(b)) {
    throw new Error("Parameters in function lcm must be integer numbers");
  }
  if (a === 0 || b === 0) {
    return 0;
  }
  var t;
  var prod = a * b;
  while (b !== 0) {
    t = b;
    b = a % t;
    a = t;
  }
  return Math.abs(prod / a);
}
lcmNumber.signature = n2;
function logNumber(x, y) {
  if (y) {
    return Math.log(x) / Math.log(y);
  }
  return Math.log(x);
}
function log10Number(x) {
  return log10(x);
}
log10Number.signature = n1;
function log2Number(x) {
  return log2(x);
}
log2Number.signature = n1;
function log1pNumber(x) {
  return log1p(x);
}
log1pNumber.signature = n1;
function modNumber(x, y) {
  if (y > 0) {
    return x - y * Math.floor(x / y);
  } else if (y === 0) {
    return x;
  } else {
    throw new Error("Cannot calculate mod for a negative divisor");
  }
}
modNumber.signature = n2;
function nthRootNumber(a) {
  var root = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  var inv = root < 0;
  if (inv) {
    root = -root;
  }
  if (root === 0) {
    throw new Error("Root must be non-zero");
  }
  if (a < 0 && Math.abs(root) % 2 !== 1) {
    throw new Error("Root must be odd when a is negative.");
  }
  if (a === 0) {
    return inv ? Infinity : 0;
  }
  if (!isFinite(a)) {
    return inv ? 0 : a;
  }
  var x = Math.pow(Math.abs(a), 1 / root);
  x = a < 0 ? -x : x;
  return inv ? 1 / x : x;
}
function signNumber(x) {
  return sign(x);
}
signNumber.signature = n1;
function sqrtNumber(x) {
  return Math.sqrt(x);
}
sqrtNumber.signature = n1;
function squareNumber(x) {
  return x * x;
}
squareNumber.signature = n1;
function xgcdNumber(a, b) {
  var t;
  var q;
  var r;
  var x = 0;
  var lastx = 1;
  var y = 1;
  var lasty = 0;
  if (!isInteger(a) || !isInteger(b)) {
    throw new Error("Parameters in function xgcd must be integer numbers");
  }
  while (b) {
    q = Math.floor(a / b);
    r = a - q * b;
    t = x;
    x = lastx - q * x;
    lastx = t;
    t = y;
    y = lasty - q * y;
    lasty = t;
    a = b;
    b = r;
  }
  var res;
  if (a < 0) {
    res = [-a, -lastx, -lasty];
  } else {
    res = [a, a ? lastx : 0, lasty];
  }
  return res;
}
xgcdNumber.signature = n2;
function powNumber(x, y) {
  if (x * x < 1 && y === Infinity || x * x > 1 && y === -Infinity) {
    return 0;
  }
  return Math.pow(x, y);
}
powNumber.signature = n2;
function roundNumber(value) {
  var decimals = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!isInteger(decimals) || decimals < 0 || decimals > 15) {
    throw new Error("Number of decimals in function round must be an integer from 0 to 15 inclusive");
  }
  return parseFloat(toFixed(value, decimals));
}
function normNumber(x) {
  return Math.abs(x);
}
normNumber.signature = n1;
var n1$1 = "number";
var n2$1 = "number, number";
function bitAndNumber(x, y) {
  if (!isInteger(x) || !isInteger(y)) {
    throw new Error("Integers expected in function bitAnd");
  }
  return x & y;
}
bitAndNumber.signature = n2$1;
function bitNotNumber(x) {
  if (!isInteger(x)) {
    throw new Error("Integer expected in function bitNot");
  }
  return ~x;
}
bitNotNumber.signature = n1$1;
function bitOrNumber(x, y) {
  if (!isInteger(x) || !isInteger(y)) {
    throw new Error("Integers expected in function bitOr");
  }
  return x | y;
}
bitOrNumber.signature = n2$1;
function bitXorNumber(x, y) {
  if (!isInteger(x) || !isInteger(y)) {
    throw new Error("Integers expected in function bitXor");
  }
  return x ^ y;
}
bitXorNumber.signature = n2$1;
function leftShiftNumber(x, y) {
  if (!isInteger(x) || !isInteger(y)) {
    throw new Error("Integers expected in function leftShift");
  }
  return x << y;
}
leftShiftNumber.signature = n2$1;
function rightArithShiftNumber(x, y) {
  if (!isInteger(x) || !isInteger(y)) {
    throw new Error("Integers expected in function rightArithShift");
  }
  return x >> y;
}
rightArithShiftNumber.signature = n2$1;
function rightLogShiftNumber(x, y) {
  if (!isInteger(x) || !isInteger(y)) {
    throw new Error("Integers expected in function rightLogShift");
  }
  return x >>> y;
}
rightLogShiftNumber.signature = n2$1;
function product$1(i, n) {
  if (n < i) {
    return 1;
  }
  if (n === i) {
    return n;
  }
  var half = n + i >> 1;
  return product$1(i, half) * product$1(half + 1, n);
}
function combinationsNumber(n, k) {
  if (!isInteger(n) || n < 0) {
    throw new TypeError("Positive integer value expected in function combinations");
  }
  if (!isInteger(k) || k < 0) {
    throw new TypeError("Positive integer value expected in function combinations");
  }
  if (k > n) {
    throw new TypeError("k must be less than or equal to n");
  }
  var nMinusk = n - k;
  var answer = 1;
  var firstnumerator = k < nMinusk ? nMinusk + 1 : k + 1;
  var nextdivisor = 2;
  var lastdivisor = k < nMinusk ? k : nMinusk;
  for (var nextnumerator = firstnumerator; nextnumerator <= n; ++nextnumerator) {
    answer *= nextnumerator;
    while (nextdivisor <= lastdivisor && answer % nextdivisor === 0) {
      answer /= nextdivisor;
      ++nextdivisor;
    }
  }
  if (nextdivisor <= lastdivisor) {
    answer /= product$1(nextdivisor, lastdivisor);
  }
  return answer;
}
combinationsNumber.signature = "number, number";
var pi = Math.PI;
var tau = 2 * Math.PI;
var e = Math.E;
var phi = 1.618033988749895;
var n1$2 = "number";
var n2$2 = "number, number";
function notNumber(x) {
  return !x;
}
notNumber.signature = n1$2;
function orNumber(x, y) {
  return !!(x || y);
}
orNumber.signature = n2$2;
function xorNumber(x, y) {
  return !!x !== !!y;
}
xorNumber.signature = n2$2;
function andNumber(x, y) {
  return !!(x && y);
}
andNumber.signature = n2$2;
function gammaNumber(n) {
  var x;
  if (isInteger(n)) {
    if (n <= 0) {
      return isFinite(n) ? Infinity : NaN;
    }
    if (n > 171) {
      return Infinity;
    }
    return product$1(1, n - 1);
  }
  if (n < 0.5) {
    return Math.PI / (Math.sin(Math.PI * n) * gammaNumber(1 - n));
  }
  if (n >= 171.35) {
    return Infinity;
  }
  if (n > 85) {
    var twoN = n * n;
    var threeN = twoN * n;
    var fourN = threeN * n;
    var fiveN = fourN * n;
    return Math.sqrt(2 * Math.PI / n) * Math.pow(n / Math.E, n) * (1 + 1 / (12 * n) + 1 / (288 * twoN) - 139 / (51840 * threeN) - 571 / (2488320 * fourN) + 163879 / (209018880 * fiveN) + 5246819 / (75246796800 * fiveN * n));
  }
  --n;
  x = gammaP[0];
  for (var i = 1; i < gammaP.length; ++i) {
    x += gammaP[i] / (n + i);
  }
  var t = n + gammaG + 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
}
gammaNumber.signature = "number";
var gammaG = 4.7421875;
var gammaP = [0.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -0.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, 1580887032249125e-19, -21026444172410488e-20, 21743961811521265e-20, -1643181065367639e-19, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22];
var lnSqrt2PI = 0.9189385332046728;
var lgammaG = 5;
var lgammaN = 7;
var lgammaSeries = [1.000000000190015, 76.18009172947146, -86.50532032941678, 24.01409824083091, -1.231739572450155, 0.001208650973866179, -5395239384953e-18];
function lgammaNumber(n) {
  if (n < 0)
    return NaN;
  if (n === 0)
    return Infinity;
  if (!isFinite(n))
    return n;
  if (n < 0.5) {
    return Math.log(Math.PI / Math.sin(Math.PI * n)) - lgammaNumber(1 - n);
  }
  n = n - 1;
  var base = n + lgammaG + 0.5;
  var sum = lgammaSeries[0];
  for (var i = lgammaN - 1; i >= 1; i--) {
    sum += lgammaSeries[i] / (n + i);
  }
  return lnSqrt2PI + (n + 0.5) * Math.log(base) - base + Math.log(sum);
}
lgammaNumber.signature = "number";
var n1$3 = "number";
var n2$3 = "number, number";
function acosNumber(x) {
  return Math.acos(x);
}
acosNumber.signature = n1$3;
function acoshNumber(x) {
  return acosh(x);
}
acoshNumber.signature = n1$3;
function acotNumber(x) {
  return Math.atan(1 / x);
}
acotNumber.signature = n1$3;
function acothNumber(x) {
  return isFinite(x) ? (Math.log((x + 1) / x) + Math.log(x / (x - 1))) / 2 : 0;
}
acothNumber.signature = n1$3;
function acscNumber(x) {
  return Math.asin(1 / x);
}
acscNumber.signature = n1$3;
function acschNumber(x) {
  var xInv = 1 / x;
  return Math.log(xInv + Math.sqrt(xInv * xInv + 1));
}
acschNumber.signature = n1$3;
function asecNumber(x) {
  return Math.acos(1 / x);
}
asecNumber.signature = n1$3;
function asechNumber(x) {
  var xInv = 1 / x;
  var ret = Math.sqrt(xInv * xInv - 1);
  return Math.log(ret + xInv);
}
asechNumber.signature = n1$3;
function asinNumber(x) {
  return Math.asin(x);
}
asinNumber.signature = n1$3;
function asinhNumber(x) {
  return asinh(x);
}
asinhNumber.signature = n1$3;
function atanNumber(x) {
  return Math.atan(x);
}
atanNumber.signature = n1$3;
function atan2Number(y, x) {
  return Math.atan2(y, x);
}
atan2Number.signature = n2$3;
function atanhNumber(x) {
  return atanh(x);
}
atanhNumber.signature = n1$3;
function cosNumber(x) {
  return Math.cos(x);
}
cosNumber.signature = n1$3;
function coshNumber(x) {
  return cosh(x);
}
coshNumber.signature = n1$3;
function cotNumber(x) {
  return 1 / Math.tan(x);
}
cotNumber.signature = n1$3;
function cothNumber(x) {
  var e2 = Math.exp(2 * x);
  return (e2 + 1) / (e2 - 1);
}
cothNumber.signature = n1$3;
function cscNumber(x) {
  return 1 / Math.sin(x);
}
cscNumber.signature = n1$3;
function cschNumber(x) {
  if (x === 0) {
    return Number.POSITIVE_INFINITY;
  } else {
    return Math.abs(2 / (Math.exp(x) - Math.exp(-x))) * sign(x);
  }
}
cschNumber.signature = n1$3;
function secNumber(x) {
  return 1 / Math.cos(x);
}
secNumber.signature = n1$3;
function sechNumber(x) {
  return 2 / (Math.exp(x) + Math.exp(-x));
}
sechNumber.signature = n1$3;
function sinNumber(x) {
  return Math.sin(x);
}
sinNumber.signature = n1$3;
function sinhNumber(x) {
  return sinh(x);
}
sinhNumber.signature = n1$3;
function tanNumber(x) {
  return Math.tan(x);
}
tanNumber.signature = n1$3;
function tanhNumber(x) {
  return tanh(x);
}
tanhNumber.signature = n1$3;
var n1$4 = "number";
function isIntegerNumber(x) {
  return isInteger(x);
}
isIntegerNumber.signature = n1$4;
function isNegativeNumber(x) {
  return x < 0;
}
isNegativeNumber.signature = n1$4;
function isPositiveNumber(x) {
  return x > 0;
}
isPositiveNumber.signature = n1$4;
function isZeroNumber(x) {
  return x === 0;
}
isZeroNumber.signature = n1$4;
function isNaNNumber(x) {
  return Number.isNaN(x);
}
isNaNNumber.signature = n1$4;
var name$3 = "isNumeric";
var dependencies$4 = ["typed"];
var createIsNumeric = /* @__PURE__ */ factory(name$3, dependencies$4, (_ref) => {
  var {
    typed
  } = _ref;
  return typed(name$3, {
    "number | BigNumber | Fraction | boolean": () => true,
    "Complex | Unit | string | null | undefined | Node": () => false,
    "Array | Matrix": typed.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$4 = "hasNumericValue";
var dependencies$5 = ["typed", "isNumeric"];
var createHasNumericValue = /* @__PURE__ */ factory(name$4, dependencies$5, (_ref) => {
  var {
    typed,
    isNumeric
  } = _ref;
  return typed(name$4, {
    boolean: () => true,
    string: function string(x) {
      return x.trim().length > 0 && !isNaN(Number(x));
    },
    any: function any(x) {
      return isNumeric(x);
    }
  });
});
var name$5 = "typeOf";
var dependencies$6 = ["typed"];
var createTypeOf = /* @__PURE__ */ factory(name$5, dependencies$6, (_ref) => {
  var {
    typed
  } = _ref;
  return typed(name$5, {
    any: typeOf
  });
});
function nearlyEqual$1(x, y, epsilon) {
  if (epsilon === null || epsilon === void 0) {
    return x.eq(y);
  }
  if (x.eq(y)) {
    return true;
  }
  if (x.isNaN() || y.isNaN()) {
    return false;
  }
  if (x.isFinite() && y.isFinite()) {
    var diff = x.minus(y).abs();
    if (diff.isZero()) {
      return true;
    } else {
      var max = x.constructor.max(x.abs(), y.abs());
      return diff.lte(max.times(epsilon));
    }
  }
  return false;
}
function complexEquals(x, y, epsilon) {
  return nearlyEqual(x.re, y.re, epsilon) && nearlyEqual(x.im, y.im, epsilon);
}
var createCompareUnits = /* @__PURE__ */ factory("compareUnits", ["typed"], (_ref) => {
  var {
    typed
  } = _ref;
  return {
    "Unit, Unit": typed.referToSelf((self) => (x, y) => {
      if (!x.equalBase(y)) {
        throw new Error("Cannot compare units with different base");
      }
      return typed.find(self, [x.valueType(), y.valueType()])(x.value, y.value);
    })
  };
});
var name$6 = "equalScalar";
var dependencies$7 = ["typed", "config"];
var createEqualScalar = /* @__PURE__ */ factory(name$6, dependencies$7, (_ref) => {
  var {
    typed,
    config: config3
  } = _ref;
  var compareUnits = createCompareUnits({
    typed
  });
  return typed(name$6, {
    "boolean, boolean": function booleanBoolean(x, y) {
      return x === y;
    },
    "number, number": function numberNumber(x, y) {
      return nearlyEqual(x, y, config3.epsilon);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.eq(y) || nearlyEqual$1(x, y, config3.epsilon);
    },
    "Fraction, Fraction": function FractionFraction(x, y) {
      return x.equals(y);
    },
    "Complex, Complex": function ComplexComplex(x, y) {
      return complexEquals(x, y, config3.epsilon);
    }
  }, compareUnits);
});
var createEqualScalarNumber = factory(name$6, ["typed", "config"], (_ref2) => {
  var {
    typed,
    config: config3
  } = _ref2;
  return typed(name$6, {
    "number, number": function numberNumber(x, y) {
      return nearlyEqual(x, y, config3.epsilon);
    }
  });
});
var name$7 = "number";
var dependencies$8 = ["typed"];
function getNonDecimalNumberParts(input) {
  var nonDecimalWithRadixMatch = input.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);
  if (nonDecimalWithRadixMatch) {
    var radix = {
      "0b": 2,
      "0o": 8,
      "0x": 16
    }[nonDecimalWithRadixMatch[1]];
    var integerPart = nonDecimalWithRadixMatch[2];
    var fractionalPart = nonDecimalWithRadixMatch[3];
    return {
      input,
      radix,
      integerPart,
      fractionalPart
    };
  } else {
    return null;
  }
}
function makeNumberFromNonDecimalParts(parts) {
  var n = parseInt(parts.integerPart, parts.radix);
  var f = 0;
  for (var i = 0; i < parts.fractionalPart.length; i++) {
    var digitValue = parseInt(parts.fractionalPart[i], parts.radix);
    f += digitValue / Math.pow(parts.radix, i + 1);
  }
  var result = n + f;
  if (isNaN(result)) {
    throw new SyntaxError('String "' + parts.input + '" is no valid number');
  }
  return result;
}
var createNumber = /* @__PURE__ */ factory(name$7, dependencies$8, (_ref) => {
  var {
    typed
  } = _ref;
  var number = typed("number", {
    "": function _() {
      return 0;
    },
    number: function number2(x) {
      return x;
    },
    string: function string(x) {
      if (x === "NaN")
        return NaN;
      var nonDecimalNumberParts = getNonDecimalNumberParts(x);
      if (nonDecimalNumberParts) {
        return makeNumberFromNonDecimalParts(nonDecimalNumberParts);
      }
      var size = 0;
      var wordSizeSuffixMatch = x.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
      if (wordSizeSuffixMatch) {
        size = Number(wordSizeSuffixMatch[2]);
        x = wordSizeSuffixMatch[1];
      }
      var num = Number(x);
      if (isNaN(num)) {
        throw new SyntaxError('String "' + x + '" is no valid number');
      }
      if (wordSizeSuffixMatch) {
        if (num > 2 ** size - 1) {
          throw new SyntaxError('String "'.concat(x, '" is out of range'));
        }
        if (num >= 2 ** (size - 1)) {
          num = num - 2 ** size;
        }
      }
      return num;
    },
    BigNumber: function BigNumber(x) {
      return x.toNumber();
    },
    Fraction: function Fraction(x) {
      return x.valueOf();
    },
    Unit: function Unit(x) {
      throw new Error("Second argument with valueless unit expected");
    },
    null: function _null(x) {
      return 0;
    },
    "Unit, string | Unit": function UnitStringUnit(unit, valuelessUnit) {
      return unit.toNumber(valuelessUnit);
    },
    "Array | Matrix": typed.referToSelf((self) => (x) => deepMap(x, self))
  });
  number.fromJSON = function(json) {
    return parseFloat(json.value);
  };
  return number;
});
var name$8 = "string";
var dependencies$9 = ["typed"];
var createString = /* @__PURE__ */ factory(name$8, dependencies$9, (_ref) => {
  var {
    typed
  } = _ref;
  return typed(name$8, {
    "": function _() {
      return "";
    },
    number: format,
    null: function _null(x) {
      return "null";
    },
    boolean: function boolean(x) {
      return x + "";
    },
    string: function string(x) {
      return x;
    },
    "Array | Matrix": typed.referToSelf((self) => (x) => deepMap(x, self)),
    any: function any(x) {
      return String(x);
    }
  });
});
var name$9 = "boolean";
var dependencies$a = ["typed"];
var createBoolean = /* @__PURE__ */ factory(name$9, dependencies$a, (_ref) => {
  var {
    typed
  } = _ref;
  return typed(name$9, {
    "": function _() {
      return false;
    },
    boolean: function boolean(x) {
      return x;
    },
    number: function number(x) {
      return !!x;
    },
    null: function _null(x) {
      return false;
    },
    BigNumber: function BigNumber(x) {
      return !x.isZero();
    },
    string: function string(x) {
      var lcase = x.toLowerCase();
      if (lcase === "true") {
        return true;
      } else if (lcase === "false") {
        return false;
      }
      var num = Number(x);
      if (x !== "" && !isNaN(num)) {
        return !!num;
      }
      throw new Error('Cannot convert "' + x + '" to a boolean');
    },
    "Array | Matrix": typed.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$a = "apply";
var dependencies$b = ["typed", "isInteger"];
var createApply = /* @__PURE__ */ factory(name$a, dependencies$b, (_ref) => {
  var {
    typed,
    isInteger: isInteger2
  } = _ref;
  return typed(name$a, {
    "Array | Matrix, number | BigNumber, function": function ArrayMatrixNumberBigNumberFunction(mat, dim, callback) {
      if (!isInteger2(dim)) {
        throw new TypeError("Integer number expected for dimension");
      }
      var size = Array.isArray(mat) ? arraySize(mat) : mat.size();
      if (dim < 0 || dim >= size.length) {
        throw new IndexError(dim, size.length);
      }
      if (isMatrix(mat)) {
        return mat.create(_apply(mat.valueOf(), dim, callback));
      } else {
        return _apply(mat, dim, callback);
      }
    }
  });
});
function _apply(mat, dim, callback) {
  var i, ret, tran;
  if (dim <= 0) {
    if (!Array.isArray(mat[0])) {
      return callback(mat);
    } else {
      tran = _switch$1(mat);
      ret = [];
      for (i = 0; i < tran.length; i++) {
        ret[i] = _apply(tran[i], dim - 1, callback);
      }
      return ret;
    }
  } else {
    ret = [];
    for (i = 0; i < mat.length; i++) {
      ret[i] = _apply(mat[i], dim - 1, callback);
    }
    return ret;
  }
}
function _switch$1(mat) {
  var I = mat.length;
  var J = mat[0].length;
  var i, j;
  var ret = [];
  for (j = 0; j < J; j++) {
    var tmp = [];
    for (i = 0; i < I; i++) {
      tmp.push(mat[i][j]);
    }
    ret.push(tmp);
  }
  return ret;
}
var name$b = "matAlgo11xS0s";
var dependencies$c = ["typed", "equalScalar"];
var createMatAlgo11xS0s = /* @__PURE__ */ factory(name$b, dependencies$c, (_ref) => {
  var {
    typed,
    equalScalar
  } = _ref;
  return function matAlgo11xS0s(s, b, callback, inverse) {
    var avalues = s._values;
    var aindex = s._index;
    var aptr = s._ptr;
    var asize = s._size;
    var adt = s._datatype;
    if (!avalues) {
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var eq = equalScalar;
    var zero = 0;
    var cf = callback;
    if (typeof adt === "string") {
      dt = adt;
      eq = typed.find(equalScalar, [dt, dt]);
      zero = typed.convert(0, dt);
      b = typed.convert(b, dt);
      cf = typed.find(callback, [dt, dt]);
    }
    var cvalues = [];
    var cindex = [];
    var cptr = [];
    for (var j = 0; j < columns; j++) {
      cptr[j] = cindex.length;
      for (var k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++) {
        var i = aindex[k];
        var v = inverse ? cf(b, avalues[k]) : cf(avalues[k], b);
        if (!eq(v, zero)) {
          cindex.push(i);
          cvalues.push(v);
        }
      }
    }
    cptr[columns] = cindex.length;
    return s.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    });
  };
});
var name$c = "matAlgo12xSfs";
var dependencies$d = ["typed", "DenseMatrix"];
var createMatAlgo12xSfs = /* @__PURE__ */ factory(name$c, dependencies$d, (_ref) => {
  var {
    typed,
    DenseMatrix
  } = _ref;
  return function matAlgo12xSfs(s, b, callback, inverse) {
    var avalues = s._values;
    var aindex = s._index;
    var aptr = s._ptr;
    var asize = s._size;
    var adt = s._datatype;
    if (!avalues) {
      throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var cf = callback;
    if (typeof adt === "string") {
      dt = adt;
      b = typed.convert(b, dt);
      cf = typed.find(callback, [dt, dt]);
    }
    var cdata = [];
    var x = [];
    var w = [];
    for (var j = 0; j < columns; j++) {
      var mark = j + 1;
      for (var k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++) {
        var r = aindex[k];
        x[r] = avalues[k];
        w[r] = mark;
      }
      for (var i = 0; i < rows; i++) {
        if (j === 0) {
          cdata[i] = [];
        }
        if (w[i] === mark) {
          cdata[i][j] = inverse ? cf(b, x[i]) : cf(x[i], b);
        } else {
          cdata[i][j] = inverse ? cf(b, 0) : cf(0, b);
        }
      }
    }
    return new DenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });
  };
});
var name$d = "matAlgo14xDs";
var dependencies$e = ["typed"];
var createMatAlgo14xDs = /* @__PURE__ */ factory(name$d, dependencies$e, (_ref) => {
  var {
    typed
  } = _ref;
  return function matAlgo14xDs(a, b, callback, inverse) {
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    var dt;
    var cf = callback;
    if (typeof adt === "string") {
      dt = adt;
      b = typed.convert(b, dt);
      cf = typed.find(callback, [dt, dt]);
    }
    var cdata = asize.length > 0 ? _iterate(cf, 0, asize, asize[0], adata, b, inverse) : [];
    return a.createDenseMatrix({
      data: cdata,
      size: clone(asize),
      datatype: dt
    });
  };
  function _iterate(f, level, s, n, av, bv, inverse) {
    var cv = [];
    if (level === s.length - 1) {
      for (var i = 0; i < n; i++) {
        cv[i] = inverse ? f(bv, av[i]) : f(av[i], bv);
      }
    } else {
      for (var j = 0; j < n; j++) {
        cv[j] = _iterate(f, level + 1, s, s[level + 1], av[j], bv, inverse);
      }
    }
    return cv;
  }
});
var name$e = "ceil";
var dependencies$f = ["typed", "config", "round", "matrix", "equalScalar", "zeros", "DenseMatrix"];
var createCeilNumber = /* @__PURE__ */ factory(name$e, ["typed", "config", "round"], (_ref) => {
  var {
    typed,
    config: config3,
    round
  } = _ref;
  return typed(name$e, {
    number: function number(x) {
      if (nearlyEqual(x, round(x), config3.epsilon)) {
        return round(x);
      } else {
        return Math.ceil(x);
      }
    },
    "number, number": function numberNumber(x, n) {
      if (nearlyEqual(x, round(x, n), config3.epsilon)) {
        return round(x, n);
      } else {
        var [number, exponent] = "".concat(x, "e").split("e");
        var result = Math.ceil(Number("".concat(number, "e").concat(Number(exponent) + n)));
        [number, exponent] = "".concat(result, "e").split("e");
        return Number("".concat(number, "e").concat(Number(exponent) - n));
      }
    }
  });
});
var createCeil = /* @__PURE__ */ factory(name$e, dependencies$f, (_ref2) => {
  var {
    typed,
    config: config3,
    round,
    matrix,
    equalScalar,
    zeros: zeros2,
    DenseMatrix
  } = _ref2;
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed,
    equalScalar
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed,
    DenseMatrix
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed
  });
  var ceilNumber = createCeilNumber({
    typed,
    config: config3,
    round
  });
  return typed("ceil", {
    number: ceilNumber.signatures.number,
    "number,number": ceilNumber.signatures["number,number"],
    Complex: function Complex(x) {
      return x.ceil();
    },
    "Complex, number": function ComplexNumber(x, n) {
      return x.ceil(n);
    },
    "Complex, BigNumber": function ComplexBigNumber(x, n) {
      return x.ceil(n.toNumber());
    },
    BigNumber: function BigNumber(x) {
      if (nearlyEqual$1(x, round(x), config3.epsilon)) {
        return round(x);
      } else {
        return x.ceil();
      }
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, n) {
      if (nearlyEqual$1(x, round(x, n), config3.epsilon)) {
        return round(x, n);
      } else {
        return x.toDecimalPlaces(n.toNumber(), Decimal.ROUND_CEIL);
      }
    },
    Fraction: function Fraction(x) {
      return x.ceil();
    },
    "Fraction, number": function FractionNumber(x, n) {
      return x.ceil(n);
    },
    "Fraction, BigNumber": function FractionBigNumber(x, n) {
      return x.ceil(n.toNumber());
    },
    "Array | Matrix": typed.referToSelf((self) => (x) => {
      return deepMap(x, self);
    }),
    "Array, number | BigNumber": typed.referToSelf((self) => (x, n) => {
      return deepMap(x, (i) => self(i, n));
    }),
    "SparseMatrix, number | BigNumber": typed.referToSelf((self) => (x, y) => {
      return matAlgo11xS0s(x, y, self, false);
    }),
    "DenseMatrix, number | BigNumber": typed.referToSelf((self) => (x, y) => {
      return matAlgo14xDs(x, y, self, false);
    }),
    "number | Complex | Fraction | BigNumber, Array": typed.referToSelf((self) => (x, y) => {
      return matAlgo14xDs(matrix(y), x, self, true).valueOf();
    }),
    "number | Complex | Fraction | BigNumber, Matrix": typed.referToSelf((self) => (x, y) => {
      if (equalScalar(x, 0))
        return zeros2(y.size(), y.storage());
      if (y.storage() === "dense") {
        return matAlgo14xDs(y, x, self, true);
      }
      return matAlgo12xSfs(y, x, self, true);
    })
  });
});
var name$f = "fix";
var dependencies$g = ["typed", "Complex", "matrix", "ceil", "floor", "equalScalar", "zeros", "DenseMatrix"];
var createFixNumber = /* @__PURE__ */ factory(name$f, ["typed", "ceil", "floor"], (_ref) => {
  var {
    typed,
    ceil,
    floor
  } = _ref;
  return typed(name$f, {
    number: function number(x) {
      return x > 0 ? floor(x) : ceil(x);
    },
    "number, number": function numberNumber(x, n) {
      return x > 0 ? floor(x, n) : ceil(x, n);
    }
  });
});
var createFix = /* @__PURE__ */ factory(name$f, dependencies$g, (_ref2) => {
  var {
    typed,
    Complex: _Complex,
    matrix,
    ceil,
    floor,
    equalScalar,
    zeros: zeros2,
    DenseMatrix
  } = _ref2;
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed,
    DenseMatrix
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed
  });
  var fixNumber = createFixNumber({
    typed,
    ceil,
    floor
  });
  return typed("fix", {
    number: fixNumber.signatures.number,
    "number, number | BigNumber": fixNumber.signatures["number,number"],
    Complex: function Complex(x) {
      return new _Complex(x.re > 0 ? Math.floor(x.re) : Math.ceil(x.re), x.im > 0 ? Math.floor(x.im) : Math.ceil(x.im));
    },
    "Complex, number": function ComplexNumber(x, n) {
      return new _Complex(x.re > 0 ? floor(x.re, n) : ceil(x.re, n), x.im > 0 ? floor(x.im, n) : ceil(x.im, n));
    },
    "Complex, BigNumber": function ComplexBigNumber(x, bn) {
      var n = bn.toNumber();
      return new _Complex(x.re > 0 ? floor(x.re, n) : ceil(x.re, n), x.im > 0 ? floor(x.im, n) : ceil(x.im, n));
    },
    BigNumber: function BigNumber(x) {
      return x.isNegative() ? ceil(x) : floor(x);
    },
    "BigNumber, number | BigNumber": function BigNumberNumberBigNumber(x, n) {
      return x.isNegative() ? ceil(x, n) : floor(x, n);
    },
    Fraction: function Fraction(x) {
      return x.s < 0 ? x.ceil() : x.floor();
    },
    "Fraction, number | BigNumber": function FractionNumberBigNumber(x, n) {
      return x.s < 0 ? ceil(x, n) : floor(x, n);
    },
    "Array | Matrix": typed.referToSelf((self) => (x) => {
      return deepMap(x, self);
    }),
    "Array | Matrix, number | BigNumber": typed.referToSelf((self) => (x, n) => {
      return deepMap(x, (i) => self(i, n));
    }),
    "number | Complex | Fraction | BigNumber, Array": typed.referToSelf((self) => (x, y) => {
      return matAlgo14xDs(matrix(y), x, self, true).valueOf();
    }),
    "number | Complex | Fraction | BigNumber, Matrix": typed.referToSelf((self) => (x, y) => {
      if (equalScalar(x, 0))
        return zeros2(y.size(), y.storage());
      if (y.storage() === "dense") {
        return matAlgo14xDs(y, x, self, true);
      }
      return matAlgo12xSfs(y, x, self, true);
    })
  });
});
var name$g = "floor";
var dependencies$h = ["typed", "config", "round", "matrix", "equalScalar", "zeros", "DenseMatrix"];
var createFloorNumber = /* @__PURE__ */ factory(name$g, ["typed", "config", "round"], (_ref) => {
  var {
    typed,
    config: config3,
    round
  } = _ref;
  return typed(name$g, {
    number: function number(x) {
      if (nearlyEqual(x, round(x), config3.epsilon)) {
        return round(x);
      } else {
        return Math.floor(x);
      }
    },
    "number, number": function numberNumber(x, n) {
      if (nearlyEqual(x, round(x, n), config3.epsilon)) {
        return round(x, n);
      } else {
        var [number, exponent] = "".concat(x, "e").split("e");
        var result = Math.floor(Number("".concat(number, "e").concat(Number(exponent) + n)));
        [number, exponent] = "".concat(result, "e").split("e");
        return Number("".concat(number, "e").concat(Number(exponent) - n));
      }
    }
  });
});
var createFloor = /* @__PURE__ */ factory(name$g, dependencies$h, (_ref2) => {
  var {
    typed,
    config: config3,
    round,
    matrix,
    equalScalar,
    zeros: zeros2,
    DenseMatrix
  } = _ref2;
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed,
    equalScalar
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed,
    DenseMatrix
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed
  });
  var floorNumber = createFloorNumber({
    typed,
    config: config3,
    round
  });
  return typed("floor", {
    number: floorNumber.signatures.number,
    "number,number": floorNumber.signatures["number,number"],
    Complex: function Complex(x) {
      return x.floor();
    },
    "Complex, number": function ComplexNumber(x, n) {
      return x.floor(n);
    },
    "Complex, BigNumber": function ComplexBigNumber(x, n) {
      return x.floor(n.toNumber());
    },
    BigNumber: function BigNumber(x) {
      if (nearlyEqual$1(x, round(x), config3.epsilon)) {
        return round(x);
      } else {
        return x.floor();
      }
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, n) {
      if (nearlyEqual$1(x, round(x, n), config3.epsilon)) {
        return round(x, n);
      } else {
        return x.toDecimalPlaces(n.toNumber(), Decimal.ROUND_FLOOR);
      }
    },
    Fraction: function Fraction(x) {
      return x.floor();
    },
    "Fraction, number": function FractionNumber(x, n) {
      return x.floor(n);
    },
    "Fraction, BigNumber": function FractionBigNumber(x, n) {
      return x.floor(n.toNumber());
    },
    "Array | Matrix": typed.referToSelf((self) => (x) => {
      return deepMap(x, self);
    }),
    "Array, number | BigNumber": typed.referToSelf((self) => (x, n) => {
      return deepMap(x, (i) => self(i, n));
    }),
    "SparseMatrix, number | BigNumber": typed.referToSelf((self) => (x, y) => {
      return matAlgo11xS0s(x, y, self, false);
    }),
    "DenseMatrix, number | BigNumber": typed.referToSelf((self) => (x, y) => {
      return matAlgo14xDs(x, y, self, false);
    }),
    "number | Complex | Fraction | BigNumber, Array": typed.referToSelf((self) => (x, y) => {
      return matAlgo14xDs(matrix(y), x, self, true).valueOf();
    }),
    "number | Complex | Fraction | BigNumber, Matrix": typed.referToSelf((self) => (x, y) => {
      if (equalScalar(x, 0))
        return zeros2(y.size(), y.storage());
      if (y.storage() === "dense") {
        return matAlgo14xDs(y, x, self, true);
      }
      return matAlgo12xSfs(y, x, self, true);
    })
  });
});
var name$h = "matAlgo13xDD";
var dependencies$i = ["typed"];
var createMatAlgo13xDD = /* @__PURE__ */ factory(name$h, dependencies$i, (_ref) => {
  var {
    typed
  } = _ref;
  return function matAlgo13xDD(a, b, callback) {
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    var bdata = b._data;
    var bsize = b._size;
    var bdt = b._datatype;
    var csize = [];
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }
    for (var s = 0; s < asize.length; s++) {
      if (asize[s] !== bsize[s]) {
        throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
      }
      csize[s] = asize[s];
    }
    var dt;
    var cf = callback;
    if (typeof adt === "string" && adt === bdt) {
      dt = adt;
      cf = typed.find(callback, [dt, dt]);
    }
    var cdata = csize.length > 0 ? _iterate(cf, 0, csize, csize[0], adata, bdata) : [];
    return a.createDenseMatrix({
      data: cdata,
      size: csize,
      datatype: dt
    });
  };
  function _iterate(f, level, s, n, av, bv) {
    var cv = [];
    if (level === s.length - 1) {
      for (var i = 0; i < n; i++) {
        cv[i] = f(av[i], bv[i]);
      }
    } else {
      for (var j = 0; j < n; j++) {
        cv[j] = _iterate(f, level + 1, s, s[level + 1], av[j], bv[j]);
      }
    }
    return cv;
  }
});
var name$i = "broadcast";
var dependancies = ["concat"];
var createBroadcast = /* @__PURE__ */ factory(name$i, dependancies, (_ref) => {
  var {
    concat
  } = _ref;
  return function(A, B) {
    var N = Math.max(A._size.length, B._size.length);
    if (A._size.length === B._size.length) {
      if (A._size.every((dim2, i) => dim2 === B._size[i])) {
        return [A, B];
      }
    }
    var sizeA = _padLeft(A._size, N, 0);
    var sizeB = _padLeft(B._size, N, 0);
    var sizeMax = [];
    for (var dim = 0; dim < N; dim++) {
      sizeMax[dim] = Math.max(sizeA[dim], sizeB[dim]);
    }
    for (var _dim = 0; _dim < N; _dim++) {
      _checkRules(sizeA, sizeMax, _dim);
      _checkRules(sizeB, sizeMax, _dim);
    }
    var AA = A.clone();
    var BB = B.clone();
    if (AA._size.length < N) {
      AA.reshape(_padLeft(AA._size, N, 1));
    } else if (BB._size.length < N) {
      BB.reshape(_padLeft(BB._size, N, 1));
    }
    for (var _dim2 = 0; _dim2 < N; _dim2++) {
      if (AA._size[_dim2] < sizeMax[_dim2]) {
        AA = _stretch(AA, sizeMax[_dim2], _dim2);
      }
      if (BB._size[_dim2] < sizeMax[_dim2]) {
        BB = _stretch(BB, sizeMax[_dim2], _dim2);
      }
    }
    return [AA, BB];
  };
  function _padLeft(shape, N, filler) {
    return [...Array(N - shape.length).fill(filler), ...shape];
  }
  function _stretch(arrayToStretch, sizeToStretch, dimToStretch) {
    return concat(...Array(sizeToStretch).fill(arrayToStretch), dimToStretch);
  }
  function _checkRules(shape, sizeMax, dim) {
    if (shape[dim] < sizeMax[dim] & shape[dim] > 1) {
      throw new Error("shape missmatch: missmatch is found in arg with shape (".concat(shape, ") not possible to broadcast dimension ").concat(dim, " with size ").concat(shape[dim], " to size ").concat(sizeMax[dim]));
    }
  }
});
var name$j = "matrixAlgorithmSuite";
var dependencies$j = ["typed", "matrix", "concat"];
var createMatrixAlgorithmSuite = /* @__PURE__ */ factory(name$j, dependencies$j, (_ref) => {
  var {
    typed,
    matrix,
    concat
  } = _ref;
  var matAlgo13xDD = createMatAlgo13xDD({
    typed
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed
  });
  var broadcast = createBroadcast({
    concat
  });
  return function matrixAlgorithmSuite(options) {
    var elop = options.elop;
    var SD = options.SD || options.DS;
    var matrixSignatures;
    if (elop) {
      matrixSignatures = {
        "DenseMatrix, DenseMatrix": (x, y) => matAlgo13xDD(...broadcast(x, y), elop),
        "Array, Array": (x, y) => matAlgo13xDD(...broadcast(matrix(x), matrix(y)), elop).valueOf(),
        "Array, DenseMatrix": (x, y) => matAlgo13xDD(...broadcast(matrix(x), y), elop),
        "DenseMatrix, Array": (x, y) => matAlgo13xDD(...broadcast(x, matrix(y)), elop)
      };
      if (options.SS) {
        matrixSignatures["SparseMatrix, SparseMatrix"] = (x, y) => options.SS(...broadcast(x, y), elop, false);
      }
      if (options.DS) {
        matrixSignatures["DenseMatrix, SparseMatrix"] = (x, y) => options.DS(...broadcast(x, y), elop, false);
        matrixSignatures["Array, SparseMatrix"] = (x, y) => options.DS(...broadcast(matrix(x), y), elop, false);
      }
      if (SD) {
        matrixSignatures["SparseMatrix, DenseMatrix"] = (x, y) => SD(...broadcast(y, x), elop, true);
        matrixSignatures["SparseMatrix, Array"] = (x, y) => SD(...broadcast(matrix(y), x), elop, true);
      }
    } else {
      matrixSignatures = {
        "DenseMatrix, DenseMatrix": typed.referToSelf((self) => (x, y) => {
          return matAlgo13xDD(...broadcast(x, y), self);
        }),
        "Array, Array": typed.referToSelf((self) => (x, y) => {
          return matAlgo13xDD(...broadcast(matrix(x), matrix(y)), self).valueOf();
        }),
        "Array, DenseMatrix": typed.referToSelf((self) => (x, y) => {
          return matAlgo13xDD(...broadcast(matrix(x), y), self);
        }),
        "DenseMatrix, Array": typed.referToSelf((self) => (x, y) => {
          return matAlgo13xDD(...broadcast(x, matrix(y)), self);
        })
      };
      if (options.SS) {
        matrixSignatures["SparseMatrix, SparseMatrix"] = typed.referToSelf((self) => (x, y) => {
          return options.SS(...broadcast(x, y), self, false);
        });
      }
      if (options.DS) {
        matrixSignatures["DenseMatrix, SparseMatrix"] = typed.referToSelf((self) => (x, y) => {
          return options.DS(...broadcast(x, y), self, false);
        });
        matrixSignatures["Array, SparseMatrix"] = typed.referToSelf((self) => (x, y) => {
          return options.DS(...broadcast(matrix(x), y), self, false);
        });
      }
      if (SD) {
        matrixSignatures["SparseMatrix, DenseMatrix"] = typed.referToSelf((self) => (x, y) => {
          return SD(...broadcast(y, x), self, true);
        });
        matrixSignatures["SparseMatrix, Array"] = typed.referToSelf((self) => (x, y) => {
          return SD(...broadcast(matrix(y), x), self, true);
        });
      }
    }
    var scalar = options.scalar || "any";
    var Ds = options.Ds || options.Ss;
    if (Ds) {
      if (elop) {
        matrixSignatures["DenseMatrix," + scalar] = (x, y) => matAlgo14xDs(x, y, elop, false);
        matrixSignatures[scalar + ", DenseMatrix"] = (x, y) => matAlgo14xDs(y, x, elop, true);
        matrixSignatures["Array," + scalar] = (x, y) => matAlgo14xDs(matrix(x), y, elop, false).valueOf();
        matrixSignatures[scalar + ", Array"] = (x, y) => matAlgo14xDs(matrix(y), x, elop, true).valueOf();
      } else {
        matrixSignatures["DenseMatrix," + scalar] = typed.referToSelf((self) => (x, y) => {
          return matAlgo14xDs(x, y, self, false);
        });
        matrixSignatures[scalar + ", DenseMatrix"] = typed.referToSelf((self) => (x, y) => {
          return matAlgo14xDs(y, x, self, true);
        });
        matrixSignatures["Array," + scalar] = typed.referToSelf((self) => (x, y) => {
          return matAlgo14xDs(matrix(x), y, self, false).valueOf();
        });
        matrixSignatures[scalar + ", Array"] = typed.referToSelf((self) => (x, y) => {
          return matAlgo14xDs(matrix(y), x, self, true).valueOf();
        });
      }
    }
    var sS = options.sS !== void 0 ? options.sS : options.Ss;
    if (elop) {
      if (options.Ss) {
        matrixSignatures["SparseMatrix," + scalar] = (x, y) => options.Ss(x, y, elop, false);
      }
      if (sS) {
        matrixSignatures[scalar + ", SparseMatrix"] = (x, y) => sS(y, x, elop, true);
      }
    } else {
      if (options.Ss) {
        matrixSignatures["SparseMatrix," + scalar] = typed.referToSelf((self) => (x, y) => {
          return options.Ss(x, y, self, false);
        });
      }
      if (sS) {
        matrixSignatures[scalar + ", SparseMatrix"] = typed.referToSelf((self) => (x, y) => {
          return sS(y, x, self, true);
        });
      }
    }
    if (elop && elop.signatures) {
      extend(matrixSignatures, elop.signatures);
    }
    return matrixSignatures;
  };
});
function ArgumentsError(fn, count, min, max) {
  if (!(this instanceof ArgumentsError)) {
    throw new SyntaxError("Constructor must be called with the new operator");
  }
  this.fn = fn;
  this.count = count;
  this.min = min;
  this.max = max;
  this.message = "Wrong number of arguments in function " + fn + " (" + count + " provided, " + min + (max !== void 0 && max !== null ? "-" + max : "") + " expected)";
  this.stack = new Error().stack;
}
ArgumentsError.prototype = new Error();
ArgumentsError.prototype.constructor = Error;
ArgumentsError.prototype.name = "ArgumentsError";
ArgumentsError.prototype.isArgumentsError = true;
var name$k = "matAlgo03xDSf";
var dependencies$k = ["typed"];
var createMatAlgo03xDSf = /* @__PURE__ */ factory(name$k, dependencies$k, (_ref) => {
  var {
    typed
  } = _ref;
  return function matAlgo03xDSf(denseMatrix, sparseMatrix, callback, inverse) {
    var adata = denseMatrix._data;
    var asize = denseMatrix._size;
    var adt = denseMatrix._datatype;
    var bvalues = sparseMatrix._values;
    var bindex = sparseMatrix._index;
    var bptr = sparseMatrix._ptr;
    var bsize = sparseMatrix._size;
    var bdt = sparseMatrix._datatype;
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
    }
    if (!bvalues) {
      throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var zero = 0;
    var cf = callback;
    if (typeof adt === "string" && adt === bdt) {
      dt = adt;
      zero = typed.convert(0, dt);
      cf = typed.find(callback, [dt, dt]);
    }
    var cdata = [];
    for (var z = 0; z < rows; z++) {
      cdata[z] = [];
    }
    var x = [];
    var w = [];
    for (var j = 0; j < columns; j++) {
      var mark = j + 1;
      for (var k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++) {
        var i = bindex[k];
        x[i] = inverse ? cf(bvalues[k], adata[i][j]) : cf(adata[i][j], bvalues[k]);
        w[i] = mark;
      }
      for (var y = 0; y < rows; y++) {
        if (w[y] === mark) {
          cdata[y][j] = x[y];
        } else {
          cdata[y][j] = inverse ? cf(zero, adata[y][j]) : cf(adata[y][j], zero);
        }
      }
    }
    return denseMatrix.createDenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });
  };
});
var name$l = "matAlgo05xSfSf";
var dependencies$l = ["typed", "equalScalar"];
var createMatAlgo05xSfSf = /* @__PURE__ */ factory(name$l, dependencies$l, (_ref) => {
  var {
    typed,
    equalScalar
  } = _ref;
  return function matAlgo05xSfSf(a, b, callback) {
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var asize = a._size;
    var adt = a._datatype;
    var bvalues = b._values;
    var bindex = b._index;
    var bptr = b._ptr;
    var bsize = b._size;
    var bdt = b._datatype;
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var eq = equalScalar;
    var zero = 0;
    var cf = callback;
    if (typeof adt === "string" && adt === bdt) {
      dt = adt;
      eq = typed.find(equalScalar, [dt, dt]);
      zero = typed.convert(0, dt);
      cf = typed.find(callback, [dt, dt]);
    }
    var cvalues = avalues && bvalues ? [] : void 0;
    var cindex = [];
    var cptr = [];
    var xa = cvalues ? [] : void 0;
    var xb = cvalues ? [] : void 0;
    var wa = [];
    var wb = [];
    var i, j, k, k1;
    for (j = 0; j < columns; j++) {
      cptr[j] = cindex.length;
      var mark = j + 1;
      for (k = aptr[j], k1 = aptr[j + 1]; k < k1; k++) {
        i = aindex[k];
        cindex.push(i);
        wa[i] = mark;
        if (xa) {
          xa[i] = avalues[k];
        }
      }
      for (k = bptr[j], k1 = bptr[j + 1]; k < k1; k++) {
        i = bindex[k];
        if (wa[i] !== mark) {
          cindex.push(i);
        }
        wb[i] = mark;
        if (xb) {
          xb[i] = bvalues[k];
        }
      }
      if (cvalues) {
        k = cptr[j];
        while (k < cindex.length) {
          i = cindex[k];
          var wai = wa[i];
          var wbi = wb[i];
          if (wai === mark || wbi === mark) {
            var va = wai === mark ? xa[i] : zero;
            var vb = wbi === mark ? xb[i] : zero;
            var vc = cf(va, vb);
            if (!eq(vc, zero)) {
              cvalues.push(vc);
              k++;
            } else {
              cindex.splice(k, 1);
            }
          }
        }
      }
    }
    cptr[columns] = cindex.length;
    return a.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    });
  };
});
var name$m = "matAlgo07xSSf";
var dependencies$m = ["typed", "DenseMatrix"];
var createMatAlgo07xSSf = /* @__PURE__ */ factory(name$m, dependencies$m, (_ref) => {
  var {
    typed,
    DenseMatrix
  } = _ref;
  return function matAlgo07xSSf(a, b, callback) {
    var asize = a._size;
    var adt = a._datatype;
    var bsize = b._size;
    var bdt = b._datatype;
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var zero = 0;
    var cf = callback;
    if (typeof adt === "string" && adt === bdt) {
      dt = adt;
      zero = typed.convert(0, dt);
      cf = typed.find(callback, [dt, dt]);
    }
    var i, j;
    var cdata = [];
    for (i = 0; i < rows; i++) {
      cdata[i] = [];
    }
    var xa = [];
    var xb = [];
    var wa = [];
    var wb = [];
    for (j = 0; j < columns; j++) {
      var mark = j + 1;
      _scatter(a, j, wa, xa, mark);
      _scatter(b, j, wb, xb, mark);
      for (i = 0; i < rows; i++) {
        var va = wa[i] === mark ? xa[i] : zero;
        var vb = wb[i] === mark ? xb[i] : zero;
        cdata[i][j] = cf(va, vb);
      }
    }
    return new DenseMatrix({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });
  };
  function _scatter(m, j, w, x, mark) {
    var values2 = m._values;
    var index = m._index;
    var ptr = m._ptr;
    for (var k = ptr[j], k1 = ptr[j + 1]; k < k1; k++) {
      var i = index[k];
      w[i] = mark;
      x[i] = values2[k];
    }
  }
});
var name$n = "filter";
var dependencies$n = ["typed"];
var createFilter = /* @__PURE__ */ factory(name$n, dependencies$n, (_ref) => {
  var {
    typed
  } = _ref;
  return typed("filter", {
    "Array, function": _filterCallback,
    "Matrix, function": function MatrixFunction(x, test) {
      return x.create(_filterCallback(x.toArray(), test));
    },
    "Array, RegExp": filterRegExp,
    "Matrix, RegExp": function MatrixRegExp(x, test) {
      return x.create(filterRegExp(x.toArray(), test));
    }
  });
});
function _filterCallback(x, callback) {
  var args = maxArgumentCount(callback);
  return filter(x, function(value, index, array) {
    if (args === 1) {
      return callback(value);
    } else if (args === 2) {
      return callback(value, [index]);
    } else {
      return callback(value, [index], array);
    }
  });
}
var name$o = "forEach";
var dependencies$o = ["typed"];
var createForEach = /* @__PURE__ */ factory(name$o, dependencies$o, (_ref) => {
  var {
    typed
  } = _ref;
  return typed(name$o, {
    "Array, function": _forEach,
    "Matrix, function": function MatrixFunction(x, callback) {
      x.forEach(callback);
    }
  });
});
function _forEach(array, callback) {
  var args = maxArgumentCount(callback);
  var recurse = function recurse2(value, index) {
    if (Array.isArray(value)) {
      forEach(value, function(child, i) {
        recurse2(child, index.concat(i));
      });
    } else {
      if (args === 1) {
        callback(value);
      } else if (args === 2) {
        callback(value, index);
      } else {
        callback(value, index, array);
      }
    }
  };
  recurse(array, []);
}
var name$p = "map";
var dependencies$p = ["typed"];
var createMap$1 = /* @__PURE__ */ factory(name$p, dependencies$p, (_ref) => {
  var {
    typed
  } = _ref;
  return typed(name$p, {
    "Array, function": _map,
    "Matrix, function": function MatrixFunction(x, callback) {
      return x.map(callback);
    }
  });
});
function _map(array, callback) {
  var args = maxArgumentCount(callback);
  var recurse = function recurse2(value, index) {
    if (Array.isArray(value)) {
      return value.map(function(child, i) {
        return recurse2(child, index.concat(i));
      });
    } else {
      try {
        if (args === 1) {
          return callback(value);
        } else if (args === 2) {
          return callback(value, index);
        } else {
          return callback(value, index, array);
        }
      } catch (err) {
        if (err instanceof TypeError && "data" in err && err.data.category === "wrongType") {
          var newmsg = "map attempted to call '".concat(err.data.fn, "(").concat(value);
          var indexString = JSON.stringify(index);
          if (args === 2) {
            newmsg += "," + indexString;
          } else if (args !== 1) {
            newmsg += ",".concat(indexString, ",").concat(array);
          }
          newmsg += ")' but argument ".concat(err.data.index + 1, " of type ");
          newmsg += "".concat(err.data.actual, " does not match expected type ");
          newmsg += err.data.expected.join(" or ");
          throw new TypeError(newmsg);
        }
        throw err;
      }
    }
  };
  return recurse(array, []);
}
function noBignumber() {
  throw new Error('No "bignumber" implementation available');
}
function noFraction() {
  throw new Error('No "fraction" implementation available');
}
function noMatrix() {
  throw new Error('No "matrix" implementation available');
}
function noIndex() {
  throw new Error('No "index" implementation available');
}
function noSubset() {
  throw new Error('No "matrix" implementation available');
}
var name$q = "range";
var dependencies$q = ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq"];
var createRange = /* @__PURE__ */ factory(name$q, dependencies$q, (_ref) => {
  var {
    typed,
    config: config3,
    matrix,
    bignumber,
    smaller,
    smallerEq,
    larger,
    largerEq
  } = _ref;
  return typed(name$q, {
    string: _strRange,
    "string, boolean": _strRange,
    "number, number": function numberNumber(start, end) {
      return _out(_rangeEx(start, end, 1));
    },
    "number, number, number": function numberNumberNumber(start, end, step) {
      return _out(_rangeEx(start, end, step));
    },
    "number, number, boolean": function numberNumberBoolean(start, end, includeEnd) {
      return includeEnd ? _out(_rangeInc(start, end, 1)) : _out(_rangeEx(start, end, 1));
    },
    "number, number, number, boolean": function numberNumberNumberBoolean(start, end, step, includeEnd) {
      return includeEnd ? _out(_rangeInc(start, end, step)) : _out(_rangeEx(start, end, step));
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(start, end) {
      var BigNumber = start.constructor;
      return _out(_bigRangeEx(start, end, new BigNumber(1)));
    },
    "BigNumber, BigNumber, BigNumber": function BigNumberBigNumberBigNumber(start, end, step) {
      return _out(_bigRangeEx(start, end, step));
    },
    "BigNumber, BigNumber, boolean": function BigNumberBigNumberBoolean(start, end, includeEnd) {
      var BigNumber = start.constructor;
      return includeEnd ? _out(_bigRangeInc(start, end, new BigNumber(1))) : _out(_bigRangeEx(start, end, new BigNumber(1)));
    },
    "BigNumber, BigNumber, BigNumber, boolean": function BigNumberBigNumberBigNumberBoolean(start, end, step, includeEnd) {
      return includeEnd ? _out(_bigRangeInc(start, end, step)) : _out(_bigRangeEx(start, end, step));
    }
  });
  function _out(arr) {
    if (config3.matrix === "Matrix") {
      return matrix ? matrix(arr) : noMatrix();
    }
    return arr;
  }
  function _strRange(str, includeEnd) {
    var r = _parse(str);
    if (!r) {
      throw new SyntaxError('String "' + str + '" is no valid range');
    }
    var fn;
    if (config3.number === "BigNumber") {
      if (bignumber === void 0) {
        noBignumber();
      }
      fn = includeEnd ? _bigRangeInc : _bigRangeEx;
      return _out(fn(bignumber(r.start), bignumber(r.end), bignumber(r.step)));
    } else {
      fn = includeEnd ? _rangeInc : _rangeEx;
      return _out(fn(r.start, r.end, r.step));
    }
  }
  function _rangeEx(start, end, step) {
    var array = [];
    var x = start;
    if (step > 0) {
      while (smaller(x, end)) {
        array.push(x);
        x += step;
      }
    } else if (step < 0) {
      while (larger(x, end)) {
        array.push(x);
        x += step;
      }
    }
    return array;
  }
  function _rangeInc(start, end, step) {
    var array = [];
    var x = start;
    if (step > 0) {
      while (smallerEq(x, end)) {
        array.push(x);
        x += step;
      }
    } else if (step < 0) {
      while (largerEq(x, end)) {
        array.push(x);
        x += step;
      }
    }
    return array;
  }
  function _bigRangeEx(start, end, step) {
    var zero = bignumber(0);
    var array = [];
    var x = start;
    if (step.gt(zero)) {
      while (smaller(x, end)) {
        array.push(x);
        x = x.plus(step);
      }
    } else if (step.lt(zero)) {
      while (larger(x, end)) {
        array.push(x);
        x = x.plus(step);
      }
    }
    return array;
  }
  function _bigRangeInc(start, end, step) {
    var zero = bignumber(0);
    var array = [];
    var x = start;
    if (step.gt(zero)) {
      while (smallerEq(x, end)) {
        array.push(x);
        x = x.plus(step);
      }
    } else if (step.lt(zero)) {
      while (largerEq(x, end)) {
        array.push(x);
        x = x.plus(step);
      }
    }
    return array;
  }
  function _parse(str) {
    var args = str.split(":");
    var nums = args.map(function(arg) {
      return Number(arg);
    });
    var invalid = nums.some(function(num) {
      return isNaN(num);
    });
    if (invalid) {
      return null;
    }
    switch (nums.length) {
      case 2:
        return {
          start: nums[0],
          end: nums[1],
          step: 1
        };
      case 3:
        return {
          start: nums[0],
          end: nums[2],
          step: nums[1]
        };
      default:
        return null;
    }
  }
});
var name$r = "size";
var dependencies$r = ["typed", "config", "?matrix"];
var createSize = /* @__PURE__ */ factory(name$r, dependencies$r, (_ref) => {
  var {
    typed,
    config: config3,
    matrix
  } = _ref;
  return typed(name$r, {
    Matrix: function Matrix(x) {
      return x.create(x.size());
    },
    Array: arraySize,
    string: function string(x) {
      return config3.matrix === "Array" ? [x.length] : matrix([x.length]);
    },
    "number | Complex | BigNumber | Unit | boolean | null": function numberComplexBigNumberUnitBooleanNull(x) {
      return config3.matrix === "Array" ? [] : matrix ? matrix([]) : noMatrix();
    }
  });
});
var name$s = "erf";
var dependencies$s = ["typed"];
var createErf = /* @__PURE__ */ factory(name$s, dependencies$s, (_ref) => {
  var {
    typed
  } = _ref;
  return typed("name", {
    number: function number(x) {
      var y = Math.abs(x);
      if (y >= MAX_NUM) {
        return sign(x);
      }
      if (y <= THRESH) {
        return sign(x) * erf1(y);
      }
      if (y <= 4) {
        return sign(x) * (1 - erfc2(y));
      }
      return sign(x) * (1 - erfc3(y));
    },
    "Array | Matrix": typed.referToSelf((self) => (n) => deepMap(n, self))
  });
  function erf1(y) {
    var ysq = y * y;
    var xnum = P[0][4] * ysq;
    var xden = ysq;
    var i;
    for (i = 0; i < 3; i += 1) {
      xnum = (xnum + P[0][i]) * ysq;
      xden = (xden + Q[0][i]) * ysq;
    }
    return y * (xnum + P[0][3]) / (xden + Q[0][3]);
  }
  function erfc2(y) {
    var xnum = P[1][8] * y;
    var xden = y;
    var i;
    for (i = 0; i < 7; i += 1) {
      xnum = (xnum + P[1][i]) * y;
      xden = (xden + Q[1][i]) * y;
    }
    var result = (xnum + P[1][7]) / (xden + Q[1][7]);
    var ysq = parseInt(y * 16) / 16;
    var del = (y - ysq) * (y + ysq);
    return Math.exp(-ysq * ysq) * Math.exp(-del) * result;
  }
  function erfc3(y) {
    var ysq = 1 / (y * y);
    var xnum = P[2][5] * ysq;
    var xden = ysq;
    var i;
    for (i = 0; i < 4; i += 1) {
      xnum = (xnum + P[2][i]) * ysq;
      xden = (xden + Q[2][i]) * ysq;
    }
    var result = ysq * (xnum + P[2][4]) / (xden + Q[2][4]);
    result = (SQRPI - result) / y;
    ysq = parseInt(y * 16) / 16;
    var del = (y - ysq) * (y + ysq);
    return Math.exp(-ysq * ysq) * Math.exp(-del) * result;
  }
});
var THRESH = 0.46875;
var SQRPI = 0.5641895835477563;
var P = [[3.1611237438705655, 113.86415415105016, 377.485237685302, 3209.3775891384694, 0.18577770618460315], [0.5641884969886701, 8.883149794388377, 66.11919063714163, 298.6351381974001, 881.952221241769, 1712.0476126340707, 2051.0783778260716, 1230.3393547979972, 21531153547440383e-24], [0.30532663496123236, 0.36034489994980445, 0.12578172611122926, 0.016083785148742275, 6587491615298378e-19, 0.016315387137302097]];
var Q = [[23.601290952344122, 244.02463793444417, 1282.6165260773723, 2844.236833439171], [15.744926110709835, 117.6939508913125, 537.1811018620099, 1621.3895745666903, 3290.7992357334597, 4362.619090143247, 3439.3676741437216, 1230.3393548037495], [2.568520192289822, 1.8729528499234604, 0.5279051029514285, 0.06051834131244132, 0.0023352049762686918]];
var MAX_NUM = Math.pow(2, 53);
var name$t = "mode";
var dependencies$t = ["typed", "isNaN", "isNumeric"];
var createMode = /* @__PURE__ */ factory(name$t, dependencies$t, (_ref) => {
  var {
    typed,
    isNaN: isNaN2,
    isNumeric
  } = _ref;
  return typed(name$t, {
    "Array | Matrix": _mode,
    "...": function _(args) {
      return _mode(args);
    }
  });
  function _mode(values2) {
    values2 = flatten(values2.valueOf());
    var num = values2.length;
    if (num === 0) {
      throw new Error("Cannot calculate mode of an empty array");
    }
    var count = {};
    var mode = [];
    var max = 0;
    for (var i = 0; i < values2.length; i++) {
      var value = values2[i];
      if (isNumeric(value) && isNaN2(value)) {
        throw new Error("Cannot calculate mode of an array containing NaN values");
      }
      if (!(value in count)) {
        count[value] = 0;
      }
      count[value]++;
      if (count[value] === max) {
        mode.push(value);
      } else if (count[value] > max) {
        max = count[value];
        mode = [value];
      }
    }
    return mode;
  }
});
function improveErrorMessage(err, fnName, value) {
  var details;
  if (String(err).indexOf("Unexpected type") !== -1) {
    details = arguments.length > 2 ? " (type: " + typeOf(value) + ", value: " + JSON.stringify(value) + ")" : " (type: " + err.data.actual + ")";
    return new TypeError("Cannot calculate " + fnName + ", unexpected type of argument" + details);
  }
  if (String(err).indexOf("complex numbers") !== -1) {
    details = arguments.length > 2 ? " (type: " + typeOf(value) + ", value: " + JSON.stringify(value) + ")" : "";
    return new TypeError("Cannot calculate " + fnName + ", no ordering relation is defined for complex numbers" + details);
  }
  return err;
}
var name$u = "prod";
var dependencies$u = ["typed", "config", "multiplyScalar", "numeric"];
var createProd = /* @__PURE__ */ factory(name$u, dependencies$u, (_ref) => {
  var {
    typed,
    config: config3,
    multiplyScalar,
    numeric: numeric2
  } = _ref;
  return typed(name$u, {
    "Array | Matrix": _prod,
    "Array | Matrix, number | BigNumber": function ArrayMatrixNumberBigNumber(array, dim) {
      throw new Error("prod(A, dim) is not yet supported");
    },
    "...": function _(args) {
      return _prod(args);
    }
  });
  function _prod(array) {
    var prod;
    deepForEach(array, function(value) {
      try {
        prod = prod === void 0 ? value : multiplyScalar(prod, value);
      } catch (err) {
        throw improveErrorMessage(err, "prod", value);
      }
    });
    if (typeof prod === "string") {
      prod = numeric2(prod, config3.number);
    }
    if (prod === void 0) {
      throw new Error("Cannot calculate prod of an empty array");
    }
    return prod;
  }
});
var name$v = "format";
var dependencies$v = ["typed"];
var createFormat = /* @__PURE__ */ factory(name$v, dependencies$v, (_ref) => {
  var {
    typed
  } = _ref;
  return typed(name$v, {
    any: format$2,
    "any, Object | function | number": format$2
  });
});
var name$w = "print";
var dependencies$w = ["typed"];
var createPrint = /* @__PURE__ */ factory(name$w, dependencies$w, (_ref) => {
  var {
    typed
  } = _ref;
  return typed(name$w, {
    "string, Object | Array": _print,
    "string, Object | Array, number | Object": _print
  });
});
function _print(template, values2, options) {
  return template.replace(/\$([\w.]+)/g, function(original, key) {
    var keys = key.split(".");
    var value = values2[keys.shift()];
    while (keys.length && value !== void 0) {
      var k = keys.shift();
      value = k ? value[k] : value + ".";
    }
    if (value !== void 0) {
      if (!isString(value)) {
        return format$2(value, options);
      } else {
        return value;
      }
    }
    return original;
  });
}
var name$x = "isPrime";
var dependencies$x = ["typed"];
var createIsPrime = /* @__PURE__ */ factory(name$x, dependencies$x, (_ref) => {
  var {
    typed
  } = _ref;
  return typed(name$x, {
    number: function number(x) {
      if (x * 0 !== 0) {
        return false;
      }
      if (x <= 3) {
        return x > 1;
      }
      if (x % 2 === 0 || x % 3 === 0) {
        return false;
      }
      for (var i = 5; i * i <= x; i += 6) {
        if (x % i === 0 || x % (i + 2) === 0) {
          return false;
        }
      }
      return true;
    },
    BigNumber: function BigNumber(n) {
      if (n.toNumber() * 0 !== 0) {
        return false;
      }
      if (n.lte(3))
        return n.gt(1);
      if (n.mod(2).eq(0) || n.mod(3).eq(0))
        return false;
      if (n.lt(Math.pow(2, 32))) {
        var x = n.toNumber();
        for (var i = 5; i * i <= x; i += 6) {
          if (x % i === 0 || x % (i + 2) === 0) {
            return false;
          }
        }
        return true;
      }
      function modPow(base, exponent, modulus) {
        var accumulator = 1;
        while (!exponent.eq(0)) {
          if (exponent.mod(2).eq(0)) {
            exponent = exponent.div(2);
            base = base.mul(base).mod(modulus);
          } else {
            exponent = exponent.sub(1);
            accumulator = base.mul(accumulator).mod(modulus);
          }
        }
        return accumulator;
      }
      var Decimal2 = n.constructor.clone({
        precision: n.toFixed(0).length * 2
      });
      n = new Decimal2(n);
      var r = 0;
      var d = n.sub(1);
      while (d.mod(2).eq(0)) {
        d = d.div(2);
        r += 1;
      }
      var bases = null;
      if (n.lt("3317044064679887385961981")) {
        bases = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41].filter((x2) => x2 < n);
      } else {
        var max = Math.min(n.toNumber() - 2, Math.floor(2 * Math.pow(n.toFixed(0).length * Math.log(10), 2)));
        bases = [];
        for (var _i = 2; _i <= max; _i += 1) {
          bases.push(max);
        }
      }
      for (var _i2 = 0; _i2 < bases.length; _i2 += 1) {
        var a = bases[_i2];
        var adn = modPow(n.sub(n).add(a), d, n);
        if (!adn.eq(1)) {
          for (var _i3 = 0, _x = adn; !_x.eq(n.sub(1)); _i3 += 1, _x = _x.mul(_x).mod(n)) {
            if (_i3 === r - 1) {
              return false;
            }
          }
        }
      }
      return true;
    },
    "Array | Matrix": typed.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$y = "numeric";
var dependencies$y = ["number", "?bignumber", "?fraction"];
var createNumeric = /* @__PURE__ */ factory(name$y, dependencies$y, (_ref) => {
  var {
    number: _number,
    bignumber,
    fraction
  } = _ref;
  var validInputTypes = {
    string: true,
    number: true,
    BigNumber: true,
    Fraction: true
  };
  var validOutputTypes = {
    number: (x) => _number(x),
    BigNumber: bignumber ? (x) => bignumber(x) : noBignumber,
    Fraction: fraction ? (x) => fraction(x) : noFraction
  };
  return function numeric2(value) {
    var outputType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "number";
    var check = arguments.length > 2 ? arguments[2] : void 0;
    if (check !== void 0) {
      throw new SyntaxError("numeric() takes one or two arguments");
    }
    var inputType = typeOf(value);
    if (!(inputType in validInputTypes)) {
      throw new TypeError("Cannot convert " + value + ' of type "' + inputType + '"; valid input types are ' + Object.keys(validInputTypes).join(", "));
    }
    if (!(outputType in validOutputTypes)) {
      throw new TypeError("Cannot convert " + value + ' to type "' + outputType + '"; valid output types are ' + Object.keys(validOutputTypes).join(", "));
    }
    if (outputType === inputType) {
      return value;
    } else {
      return validOutputTypes[outputType](value);
    }
  };
});
var name$z = "compare";
var dependencies$z = ["typed", "config", "matrix", "equalScalar", "BigNumber", "Fraction", "DenseMatrix", "concat"];
var createCompare = /* @__PURE__ */ factory(name$z, dependencies$z, (_ref) => {
  var {
    typed,
    config: config3,
    equalScalar,
    matrix,
    BigNumber,
    Fraction,
    DenseMatrix,
    concat
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed
  });
  var matAlgo05xSfSf = createMatAlgo05xSfSf({
    typed,
    equalScalar
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed,
    DenseMatrix
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed,
    matrix,
    concat
  });
  var compareUnits = createCompareUnits({
    typed
  });
  return typed(name$z, createCompareNumber({
    typed,
    config: config3
  }), {
    "boolean, boolean": function booleanBoolean(x, y) {
      return x === y ? 0 : x > y ? 1 : -1;
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return nearlyEqual$1(x, y, config3.epsilon) ? new BigNumber(0) : new BigNumber(x.cmp(y));
    },
    "Fraction, Fraction": function FractionFraction(x, y) {
      return new Fraction(x.compare(y));
    },
    "Complex, Complex": function ComplexComplex() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo05xSfSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var createCompareNumber = /* @__PURE__ */ factory(name$z, ["typed", "config"], (_ref2) => {
  var {
    typed,
    config: config3
  } = _ref2;
  return typed(name$z, {
    "number, number": function numberNumber(x, y) {
      return nearlyEqual(x, y, config3.epsilon) ? 0 : x > y ? 1 : -1;
    }
  });
});
var name$A = "compareNatural";
var dependencies$A = ["typed", "compare"];
var createCompareNatural = /* @__PURE__ */ factory(name$A, dependencies$A, (_ref) => {
  var {
    typed,
    compare
  } = _ref;
  var compareBooleans = compare.signatures["boolean,boolean"];
  return typed(name$A, {
    "any, any": _compareNatural
  });
  function _compareNatural(x, y) {
    var typeX = typeOf(x);
    var typeY = typeOf(y);
    var c;
    if ((typeX === "number" || typeX === "BigNumber" || typeX === "Fraction") && (typeY === "number" || typeY === "BigNumber" || typeY === "Fraction")) {
      c = compare(x, y);
      if (c.toString() !== "0") {
        return c > 0 ? 1 : -1;
      } else {
        return naturalSort(typeX, typeY);
      }
    }
    var matTypes = ["Array", "DenseMatrix", "SparseMatrix"];
    if (matTypes.includes(typeX) || matTypes.includes(typeY)) {
      c = compareMatricesAndArrays(_compareNatural, x, y);
      if (c !== 0) {
        return c;
      } else {
        return naturalSort(typeX, typeY);
      }
    }
    if (typeX !== typeY) {
      return naturalSort(typeX, typeY);
    }
    if (typeX === "Complex") {
      return compareComplexNumbers(x, y);
    }
    if (typeX === "Unit") {
      if (x.equalBase(y)) {
        return _compareNatural(x.value, y.value);
      }
      return compareArrays(_compareNatural, x.formatUnits(), y.formatUnits());
    }
    if (typeX === "boolean") {
      return compareBooleans(x, y);
    }
    if (typeX === "string") {
      return naturalSort(x, y);
    }
    if (typeX === "Object") {
      return compareObjects(_compareNatural, x, y);
    }
    if (typeX === "null") {
      return 0;
    }
    if (typeX === "undefined") {
      return 0;
    }
    throw new TypeError('Unsupported type of value "' + typeX + '"');
  }
  function compareMatricesAndArrays(compareNatural, x, y) {
    if (isSparseMatrix(x) && isSparseMatrix(y)) {
      return compareArrays(compareNatural, x.toJSON().values, y.toJSON().values);
    }
    if (isSparseMatrix(x)) {
      return compareMatricesAndArrays(compareNatural, x.toArray(), y);
    }
    if (isSparseMatrix(y)) {
      return compareMatricesAndArrays(compareNatural, x, y.toArray());
    }
    if (isDenseMatrix(x)) {
      return compareMatricesAndArrays(compareNatural, x.toJSON().data, y);
    }
    if (isDenseMatrix(y)) {
      return compareMatricesAndArrays(compareNatural, x, y.toJSON().data);
    }
    if (!Array.isArray(x)) {
      return compareMatricesAndArrays(compareNatural, [x], y);
    }
    if (!Array.isArray(y)) {
      return compareMatricesAndArrays(compareNatural, x, [y]);
    }
    return compareArrays(compareNatural, x, y);
  }
  function compareArrays(compareNatural, x, y) {
    for (var i = 0, ii = Math.min(x.length, y.length); i < ii; i++) {
      var v = compareNatural(x[i], y[i]);
      if (v !== 0) {
        return v;
      }
    }
    if (x.length > y.length) {
      return 1;
    }
    if (x.length < y.length) {
      return -1;
    }
    return 0;
  }
  function compareObjects(compareNatural, x, y) {
    var keysX = Object.keys(x);
    var keysY = Object.keys(y);
    keysX.sort(naturalSort);
    keysY.sort(naturalSort);
    var c = compareArrays(compareNatural, keysX, keysY);
    if (c !== 0) {
      return c;
    }
    for (var i = 0; i < keysX.length; i++) {
      var v = compareNatural(x[keysX[i]], y[keysY[i]]);
      if (v !== 0) {
        return v;
      }
    }
    return 0;
  }
});
function compareComplexNumbers(x, y) {
  if (x.re > y.re) {
    return 1;
  }
  if (x.re < y.re) {
    return -1;
  }
  if (x.im > y.im) {
    return 1;
  }
  if (x.im < y.im) {
    return -1;
  }
  return 0;
}
var name$B = "compareText";
var dependencies$B = ["typed", "matrix", "concat"];
compareText.signature = "any, any";
var createCompareText = /* @__PURE__ */ factory(name$B, dependencies$B, (_ref) => {
  var {
    typed,
    matrix,
    concat
  } = _ref;
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed,
    matrix,
    concat
  });
  return typed(name$B, compareText, matrixAlgorithmSuite({
    elop: compareText,
    Ds: true
  }));
});
var createCompareTextNumber = /* @__PURE__ */ factory(name$B, ["typed"], (_ref2) => {
  var {
    typed
  } = _ref2;
  return typed(name$B, compareText);
});
var name$C = "equal";
var dependencies$C = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"];
var createEqual = /* @__PURE__ */ factory(name$C, dependencies$C, (_ref) => {
  var {
    typed,
    matrix,
    equalScalar,
    DenseMatrix,
    concat
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed,
    DenseMatrix
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed,
    DenseMatrix
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed,
    matrix,
    concat
  });
  return typed(name$C, createEqualNumber({
    typed,
    equalScalar
  }), matrixAlgorithmSuite({
    elop: equalScalar,
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var createEqualNumber = factory(name$C, ["typed", "equalScalar"], (_ref2) => {
  var {
    typed,
    equalScalar
  } = _ref2;
  return typed(name$C, {
    "any, any": function anyAny(x, y) {
      if (x === null) {
        return y === null;
      }
      if (y === null) {
        return x === null;
      }
      if (x === void 0) {
        return y === void 0;
      }
      if (y === void 0) {
        return x === void 0;
      }
      return equalScalar(x, y);
    }
  });
});
var name$D = "equalText";
var dependencies$D = ["typed", "compareText", "isZero"];
var createEqualText = /* @__PURE__ */ factory(name$D, dependencies$D, (_ref) => {
  var {
    typed,
    compareText: compareText2,
    isZero
  } = _ref;
  return typed(name$D, {
    "any, any": function anyAny(x, y) {
      return isZero(compareText2(x, y));
    }
  });
});
var name$E = "smaller";
var dependencies$E = ["typed", "config", "matrix", "DenseMatrix", "concat"];
var createSmaller = /* @__PURE__ */ factory(name$E, dependencies$E, (_ref) => {
  var {
    typed,
    config: config3,
    matrix,
    DenseMatrix,
    concat
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed,
    DenseMatrix
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed,
    DenseMatrix
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed,
    matrix,
    concat
  });
  var compareUnits = createCompareUnits({
    typed
  });
  return typed(name$E, createSmallerNumber({
    typed,
    config: config3
  }), {
    "boolean, boolean": (x, y) => x < y,
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.lt(y) && !nearlyEqual$1(x, y, config3.epsilon);
    },
    "Fraction, Fraction": (x, y) => x.compare(y) === -1,
    "Complex, Complex": function ComplexComplex(x, y) {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var createSmallerNumber = /* @__PURE__ */ factory(name$E, ["typed", "config"], (_ref2) => {
  var {
    typed,
    config: config3
  } = _ref2;
  return typed(name$E, {
    "number, number": function numberNumber(x, y) {
      return x < y && !nearlyEqual(x, y, config3.epsilon);
    }
  });
});
var name$F = "smallerEq";
var dependencies$F = ["typed", "config", "matrix", "DenseMatrix", "concat"];
var createSmallerEq = /* @__PURE__ */ factory(name$F, dependencies$F, (_ref) => {
  var {
    typed,
    config: config3,
    matrix,
    DenseMatrix,
    concat
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed,
    DenseMatrix
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed,
    DenseMatrix
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed,
    matrix,
    concat
  });
  var compareUnits = createCompareUnits({
    typed
  });
  return typed(name$F, createSmallerEqNumber({
    typed,
    config: config3
  }), {
    "boolean, boolean": (x, y) => x <= y,
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.lte(y) || nearlyEqual$1(x, y, config3.epsilon);
    },
    "Fraction, Fraction": (x, y) => x.compare(y) !== 1,
    "Complex, Complex": function ComplexComplex() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var createSmallerEqNumber = /* @__PURE__ */ factory(name$F, ["typed", "config"], (_ref2) => {
  var {
    typed,
    config: config3
  } = _ref2;
  return typed(name$F, {
    "number, number": function numberNumber(x, y) {
      return x <= y || nearlyEqual(x, y, config3.epsilon);
    }
  });
});
var name$G = "larger";
var dependencies$G = ["typed", "config", "matrix", "DenseMatrix", "concat"];
var createLarger = /* @__PURE__ */ factory(name$G, dependencies$G, (_ref) => {
  var {
    typed,
    config: config3,
    matrix,
    DenseMatrix,
    concat
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed,
    DenseMatrix
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed,
    DenseMatrix
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed,
    matrix,
    concat
  });
  var compareUnits = createCompareUnits({
    typed
  });
  return typed(name$G, createLargerNumber({
    typed,
    config: config3
  }), {
    "boolean, boolean": (x, y) => x > y,
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.gt(y) && !nearlyEqual$1(x, y, config3.epsilon);
    },
    "Fraction, Fraction": (x, y) => x.compare(y) === 1,
    "Complex, Complex": function ComplexComplex() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var createLargerNumber = /* @__PURE__ */ factory(name$G, ["typed", "config"], (_ref2) => {
  var {
    typed,
    config: config3
  } = _ref2;
  return typed(name$G, {
    "number, number": function numberNumber(x, y) {
      return x > y && !nearlyEqual(x, y, config3.epsilon);
    }
  });
});
var name$H = "largerEq";
var dependencies$H = ["typed", "config", "matrix", "DenseMatrix", "concat"];
var createLargerEq = /* @__PURE__ */ factory(name$H, dependencies$H, (_ref) => {
  var {
    typed,
    config: config3,
    matrix,
    DenseMatrix,
    concat
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed,
    DenseMatrix
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed,
    DenseMatrix
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed,
    matrix,
    concat
  });
  var compareUnits = createCompareUnits({
    typed
  });
  return typed(name$H, createLargerEqNumber({
    typed,
    config: config3
  }), {
    "boolean, boolean": (x, y) => x >= y,
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.gte(y) || nearlyEqual$1(x, y, config3.epsilon);
    },
    "Fraction, Fraction": (x, y) => x.compare(y) !== -1,
    "Complex, Complex": function ComplexComplex() {
      throw new TypeError("No ordering relation is defined for complex numbers");
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var createLargerEqNumber = /* @__PURE__ */ factory(name$H, ["typed", "config"], (_ref2) => {
  var {
    typed,
    config: config3
  } = _ref2;
  return typed(name$H, {
    "number, number": function numberNumber(x, y) {
      return x >= y || nearlyEqual(x, y, config3.epsilon);
    }
  });
});
var name$I = "deepEqual";
var dependencies$I = ["typed", "equal"];
var createDeepEqual = /* @__PURE__ */ factory(name$I, dependencies$I, (_ref) => {
  var {
    typed,
    equal
  } = _ref;
  return typed(name$I, {
    "any, any": function anyAny(x, y) {
      return _deepEqual(x.valueOf(), y.valueOf());
    }
  });
  function _deepEqual(x, y) {
    if (Array.isArray(x)) {
      if (Array.isArray(y)) {
        var len = x.length;
        if (len !== y.length) {
          return false;
        }
        for (var i = 0; i < len; i++) {
          if (!_deepEqual(x[i], y[i])) {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    } else {
      if (Array.isArray(y)) {
        return false;
      } else {
        return equal(x, y);
      }
    }
  }
});
var name$J = "unequal";
var dependencies$J = ["typed", "config", "equalScalar", "matrix", "DenseMatrix", "concat"];
var createUnequal = /* @__PURE__ */ factory(name$J, dependencies$J, (_ref) => {
  var {
    typed,
    config: config3,
    equalScalar,
    matrix,
    DenseMatrix,
    concat
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed,
    DenseMatrix
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed,
    DenseMatrix
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed,
    matrix,
    concat
  });
  return typed(name$J, createUnequalNumber({
    typed,
    equalScalar
  }), matrixAlgorithmSuite({
    elop: _unequal,
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
  function _unequal(x, y) {
    return !equalScalar(x, y);
  }
});
var createUnequalNumber = factory(name$J, ["typed", "equalScalar"], (_ref2) => {
  var {
    typed,
    equalScalar
  } = _ref2;
  return typed(name$J, {
    "any, any": function anyAny(x, y) {
      if (x === null) {
        return y !== null;
      }
      if (y === null) {
        return x !== null;
      }
      if (x === void 0) {
        return y !== void 0;
      }
      if (y === void 0) {
        return x !== void 0;
      }
      return !equalScalar(x, y);
    }
  });
});
var name$K = "partitionSelect";
var dependencies$K = ["typed", "isNumeric", "isNaN", "compare"];
var createPartitionSelect = /* @__PURE__ */ factory(name$K, dependencies$K, (_ref) => {
  var {
    typed,
    isNumeric,
    isNaN: isNaN2,
    compare
  } = _ref;
  var asc = compare;
  var desc = (a, b) => -compare(a, b);
  return typed(name$K, {
    "Array | Matrix, number": function ArrayMatrixNumber(x, k) {
      return _partitionSelect(x, k, asc);
    },
    "Array | Matrix, number, string": function ArrayMatrixNumberString(x, k, compare2) {
      if (compare2 === "asc") {
        return _partitionSelect(x, k, asc);
      } else if (compare2 === "desc") {
        return _partitionSelect(x, k, desc);
      } else {
        throw new Error('Compare string must be "asc" or "desc"');
      }
    },
    "Array | Matrix, number, function": _partitionSelect
  });
  function _partitionSelect(x, k, compare2) {
    if (!isInteger(k) || k < 0) {
      throw new Error("k must be a non-negative integer");
    }
    if (isMatrix(x)) {
      var size = x.size();
      if (size.length > 1) {
        throw new Error("Only one dimensional matrices supported");
      }
      return quickSelect(x.valueOf(), k, compare2);
    }
    if (Array.isArray(x)) {
      return quickSelect(x, k, compare2);
    }
  }
  function quickSelect(arr, k, compare2) {
    if (k >= arr.length) {
      throw new Error("k out of bounds");
    }
    for (var i = 0; i < arr.length; i++) {
      if (isNumeric(arr[i]) && isNaN2(arr[i])) {
        return arr[i];
      }
    }
    var from = 0;
    var to = arr.length - 1;
    while (from < to) {
      var r = from;
      var w = to;
      var pivot = arr[Math.floor(Math.random() * (to - from + 1)) + from];
      while (r < w) {
        if (compare2(arr[r], pivot) >= 0) {
          var tmp = arr[w];
          arr[w] = arr[r];
          arr[r] = tmp;
          --w;
        } else {
          ++r;
        }
      }
      if (compare2(arr[r], pivot) > 0) {
        --r;
      }
      if (k <= r) {
        to = r;
      } else {
        from = r + 1;
      }
    }
    return arr[k];
  }
});
var name$L = "max";
var dependencies$L = ["typed", "config", "numeric", "larger"];
var createMax = /* @__PURE__ */ factory(name$L, dependencies$L, (_ref) => {
  var {
    typed,
    config: config3,
    numeric: numeric2,
    larger
  } = _ref;
  return typed(name$L, {
    "Array | Matrix": _max,
    "Array | Matrix, number | BigNumber": function ArrayMatrixNumberBigNumber(array, dim) {
      return reduce(array, dim.valueOf(), _largest);
    },
    "...": function _(args) {
      if (containsCollections(args)) {
        throw new TypeError("Scalar values expected in function max");
      }
      return _max(args);
    }
  });
  function _largest(x, y) {
    try {
      return larger(x, y) ? x : y;
    } catch (err) {
      throw improveErrorMessage(err, "max", y);
    }
  }
  function _max(array) {
    var res;
    deepForEach(array, function(value) {
      try {
        if (isNaN(value) && typeof value === "number") {
          res = NaN;
        } else if (res === void 0 || larger(value, res)) {
          res = value;
        }
      } catch (err) {
        throw improveErrorMessage(err, "max", value);
      }
    });
    if (res === void 0) {
      throw new Error("Cannot calculate max of an empty array");
    }
    if (typeof res === "string") {
      res = numeric2(res, config3.number);
    }
    return res;
  }
});
var name$M = "min";
var dependencies$M = ["typed", "config", "numeric", "smaller"];
var createMin = /* @__PURE__ */ factory(name$M, dependencies$M, (_ref) => {
  var {
    typed,
    config: config3,
    numeric: numeric2,
    smaller
  } = _ref;
  return typed(name$M, {
    "Array | Matrix": _min,
    "Array | Matrix, number | BigNumber": function ArrayMatrixNumberBigNumber(array, dim) {
      return reduce(array, dim.valueOf(), _smallest);
    },
    "...": function _(args) {
      if (containsCollections(args)) {
        throw new TypeError("Scalar values expected in function min");
      }
      return _min(args);
    }
  });
  function _smallest(x, y) {
    try {
      return smaller(x, y) ? x : y;
    } catch (err) {
      throw improveErrorMessage(err, "min", y);
    }
  }
  function _min(array) {
    var min;
    deepForEach(array, function(value) {
      try {
        if (isNaN(value) && typeof value === "number") {
          min = NaN;
        } else if (min === void 0 || smaller(value, min)) {
          min = value;
        }
      } catch (err) {
        throw improveErrorMessage(err, "min", value);
      }
    });
    if (min === void 0) {
      throw new Error("Cannot calculate min of an empty array");
    }
    if (typeof min === "string") {
      min = numeric2(min, config3.number);
    }
    return min;
  }
});
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var defineProperty = _defineProperty;
var createBigNumberE = memoize(function(BigNumber) {
  return new BigNumber(1).exp();
}, {
  hasher
});
var createBigNumberPhi = memoize(function(BigNumber) {
  return new BigNumber(1).plus(new BigNumber(5).sqrt()).div(2);
}, {
  hasher
});
var createBigNumberPi = memoize(function(BigNumber) {
  return BigNumber.acos(-1);
}, {
  hasher
});
var createBigNumberTau = memoize(function(BigNumber) {
  return createBigNumberPi(BigNumber).times(2);
}, {
  hasher
});
function hasher(args) {
  return args[0].precision;
}
var name$N = "hypot";
var dependencies$N = ["typed", "abs", "addScalar", "divideScalar", "multiplyScalar", "sqrt", "smaller", "isPositive"];
var createHypot = /* @__PURE__ */ factory(name$N, dependencies$N, (_ref) => {
  var {
    typed,
    abs,
    addScalar,
    divideScalar,
    multiplyScalar,
    sqrt,
    smaller,
    isPositive
  } = _ref;
  return typed(name$N, {
    "... number | BigNumber": _hypot,
    Array: _hypot,
    Matrix: (M) => _hypot(flatten(M.toArray()))
  });
  function _hypot(args) {
    var result = 0;
    var largest = 0;
    for (var i = 0; i < args.length; i++) {
      if (isComplex(args[i])) {
        throw new TypeError("Unexpected type of argument to hypot");
      }
      var value = abs(args[i]);
      if (smaller(largest, value)) {
        result = multiplyScalar(result, multiplyScalar(divideScalar(largest, value), divideScalar(largest, value)));
        result = addScalar(result, 1);
        largest = value;
      } else {
        result = addScalar(result, isPositive(value) ? multiplyScalar(divideScalar(value, largest), divideScalar(value, largest)) : value);
      }
    }
    return multiplyScalar(largest, sqrt(result));
  }
});
var keywords = new Set(["end"]);
var name$O = "Node";
var dependencies$O = ["mathWithTransform"];
var createNode = /* @__PURE__ */ factory(name$O, dependencies$O, (_ref) => {
  var {
    mathWithTransform
  } = _ref;
  function _validateScope(scope) {
    for (var symbol of [...keywords]) {
      if (scope.has(symbol)) {
        throw new Error('Scope contains an illegal symbol, "' + symbol + '" is a reserved keyword');
      }
    }
  }
  class Node {
    get type() {
      return "Node";
    }
    get isNode() {
      return true;
    }
    evaluate(scope) {
      return this.compile().evaluate(scope);
    }
    compile() {
      var expr = this._compile(mathWithTransform, {});
      var args = {};
      var context = null;
      function evaluate(scope) {
        var s = createMap(scope);
        _validateScope(s);
        return expr(s, args, context);
      }
      return {
        evaluate
      };
    }
    _compile(math, argNames) {
      throw new Error("Method _compile must be implemented by type " + this.type);
    }
    forEach(callback) {
      throw new Error("Cannot run forEach on a Node interface");
    }
    map(callback) {
      throw new Error("Cannot run map on a Node interface");
    }
    _ifNode(node) {
      if (!isNode(node)) {
        throw new TypeError("Callback function must return a Node");
      }
      return node;
    }
    traverse(callback) {
      callback(this, null, null);
      function _traverse(node, callback2) {
        node.forEach(function(child, path, parent) {
          callback2(child, path, parent);
          _traverse(child, callback2);
        });
      }
      _traverse(this, callback);
    }
    transform(callback) {
      function _transform(child, path, parent) {
        var replacement = callback(child, path, parent);
        if (replacement !== child) {
          return replacement;
        }
        return child.map(_transform);
      }
      return _transform(this, null, null);
    }
    filter(callback) {
      var nodes = [];
      this.traverse(function(node, path, parent) {
        if (callback(node, path, parent)) {
          nodes.push(node);
        }
      });
      return nodes;
    }
    clone() {
      throw new Error("Cannot clone a Node interface");
    }
    cloneDeep() {
      return this.map(function(node) {
        return node.cloneDeep();
      });
    }
    equals(other) {
      return other ? this.type === other.type && deepStrictEqual(this, other) : false;
    }
    toString(options) {
      var customString = this._getCustomString(options);
      if (typeof customString !== "undefined") {
        return customString;
      }
      return this._toString(options);
    }
    toJSON() {
      throw new Error("Cannot serialize object: toJSON not implemented by " + this.type);
    }
    toHTML(options) {
      var customString = this._getCustomString(options);
      if (typeof customString !== "undefined") {
        return customString;
      }
      return this.toHTML(options);
    }
    _toString() {
      throw new Error("_toString not implemented for " + this.type);
    }
    toTex(options) {
      var customString = this._getCustomString(options);
      if (typeof customString !== "undefined") {
        return customString;
      }
      return this._toTex(options);
    }
    _toTex(options) {
      throw new Error("_toTex not implemented for " + this.type);
    }
    _getCustomString(options) {
      if (options && typeof options === "object") {
        switch (typeof options.handler) {
          case "object":
          case "undefined":
            return;
          case "function":
            return options.handler(this, options);
          default:
            throw new TypeError("Object or function expected as callback");
        }
      }
    }
    getIdentifier() {
      return this.type;
    }
    getContent() {
      return this;
    }
  }
  return Node;
}, {
  isClass: true,
  isNode: true
});
function errorTransform(err) {
  if (err && err.isIndexError) {
    return new IndexError(err.index + 1, err.min + 1, err.max !== void 0 ? err.max + 1 : void 0);
  }
  return err;
}
function accessFactory(_ref) {
  var {
    subset
  } = _ref;
  return function access(object, index) {
    try {
      if (Array.isArray(object)) {
        return subset(object, index);
      } else if (object && typeof object.subset === "function") {
        return object.subset(index);
      } else if (typeof object === "string") {
        return subset(object, index);
      } else if (typeof object === "object") {
        if (!index.isObjectProperty()) {
          throw new TypeError("Cannot apply a numeric index as object property");
        }
        return getSafeProperty(object, index.getObjectProperty());
      } else {
        throw new TypeError("Cannot apply index: unsupported type of object");
      }
    } catch (err) {
      throw errorTransform(err);
    }
  };
}
var name$P = "AccessorNode";
var dependencies$P = ["subset", "Node"];
var createAccessorNode = /* @__PURE__ */ factory(name$P, dependencies$P, (_ref) => {
  var {
    subset,
    Node
  } = _ref;
  var access = accessFactory({
    subset
  });
  function needParenthesis(node) {
    return !(isAccessorNode(node) || isArrayNode(node) || isConstantNode(node) || isFunctionNode(node) || isObjectNode(node) || isParenthesisNode(node) || isSymbolNode(node));
  }
  class AccessorNode extends Node {
    constructor(object, index) {
      super();
      if (!isNode(object)) {
        throw new TypeError('Node expected for parameter "object"');
      }
      if (!isIndexNode(index)) {
        throw new TypeError('IndexNode expected for parameter "index"');
      }
      this.object = object;
      this.index = index;
    }
    get name() {
      if (this.index) {
        return this.index.isObjectProperty() ? this.index.getObjectProperty() : "";
      } else {
        return this.object.name || "";
      }
    }
    get type() {
      return name$P;
    }
    get isAccessorNode() {
      return true;
    }
    _compile(math, argNames) {
      var evalObject = this.object._compile(math, argNames);
      var evalIndex = this.index._compile(math, argNames);
      if (this.index.isObjectProperty()) {
        var prop = this.index.getObjectProperty();
        return function evalAccessorNode(scope, args, context) {
          return getSafeProperty(evalObject(scope, args, context), prop);
        };
      } else {
        return function evalAccessorNode(scope, args, context) {
          var object = evalObject(scope, args, context);
          var index = evalIndex(scope, args, object);
          return access(object, index);
        };
      }
    }
    forEach(callback) {
      callback(this.object, "object", this);
      callback(this.index, "index", this);
    }
    map(callback) {
      return new AccessorNode(this._ifNode(callback(this.object, "object", this)), this._ifNode(callback(this.index, "index", this)));
    }
    clone() {
      return new AccessorNode(this.object, this.index);
    }
    _toString(options) {
      var object = this.object.toString(options);
      if (needParenthesis(this.object)) {
        object = "(" + object + ")";
      }
      return object + this.index.toString(options);
    }
    toHTML(options) {
      var object = this.object.toHTML(options);
      if (needParenthesis(this.object)) {
        object = '<span class="math-parenthesis math-round-parenthesis">(</span>' + object + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }
      return object + this.index.toHTML(options);
    }
    _toTex(options) {
      var object = this.object.toTex(options);
      if (needParenthesis(this.object)) {
        object = "\\left(' + object + '\\right)";
      }
      return object + this.index.toTex(options);
    }
    toJSON() {
      return {
        mathjs: name$P,
        object: this.object,
        index: this.index
      };
    }
    static fromJSON(json) {
      return new AccessorNode(json.object, json.index);
    }
  }
  defineProperty(AccessorNode, "name", name$P);
  return AccessorNode;
}, {
  isClass: true,
  isNode: true
});
var name$Q = "ArrayNode";
var dependencies$Q = ["Node"];
var createArrayNode = /* @__PURE__ */ factory(name$Q, dependencies$Q, (_ref) => {
  var {
    Node
  } = _ref;
  class ArrayNode extends Node {
    constructor(items) {
      super();
      this.items = items || [];
      if (!Array.isArray(this.items) || !this.items.every(isNode)) {
        throw new TypeError("Array containing Nodes expected");
      }
    }
    get type() {
      return name$Q;
    }
    get isArrayNode() {
      return true;
    }
    _compile(math, argNames) {
      var evalItems = map(this.items, function(item) {
        return item._compile(math, argNames);
      });
      var asMatrix = math.config.matrix !== "Array";
      if (asMatrix) {
        var matrix = math.matrix;
        return function evalArrayNode(scope, args, context) {
          return matrix(map(evalItems, function(evalItem) {
            return evalItem(scope, args, context);
          }));
        };
      } else {
        return function evalArrayNode(scope, args, context) {
          return map(evalItems, function(evalItem) {
            return evalItem(scope, args, context);
          });
        };
      }
    }
    forEach(callback) {
      for (var i = 0; i < this.items.length; i++) {
        var node = this.items[i];
        callback(node, "items[" + i + "]", this);
      }
    }
    map(callback) {
      var items = [];
      for (var i = 0; i < this.items.length; i++) {
        items[i] = this._ifNode(callback(this.items[i], "items[" + i + "]", this));
      }
      return new ArrayNode(items);
    }
    clone() {
      return new ArrayNode(this.items.slice(0));
    }
    _toString(options) {
      var items = this.items.map(function(node) {
        return node.toString(options);
      });
      return "[" + items.join(", ") + "]";
    }
    toJSON() {
      return {
        mathjs: name$Q,
        items: this.items
      };
    }
    static fromJSON(json) {
      return new ArrayNode(json.items);
    }
    toHTML(options) {
      var items = this.items.map(function(node) {
        return node.toHTML(options);
      });
      return '<span class="math-parenthesis math-square-parenthesis">[</span>' + items.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>';
    }
    _toTex(options) {
      function itemsToTex(items, nested) {
        var mixedItems = items.some(isArrayNode) && !items.every(isArrayNode);
        var itemsFormRow = nested || mixedItems;
        var itemSep = itemsFormRow ? "&" : "\\\\";
        var itemsTex = items.map(function(node) {
          if (node.items) {
            return itemsToTex(node.items, !nested);
          } else {
            return node.toTex(options);
          }
        }).join(itemSep);
        return mixedItems || !itemsFormRow || itemsFormRow && !nested ? "\\begin{bmatrix}" + itemsTex + "\\end{bmatrix}" : itemsTex;
      }
      return itemsToTex(this.items, false);
    }
  }
  defineProperty(ArrayNode, "name", name$Q);
  return ArrayNode;
}, {
  isClass: true,
  isNode: true
});
function assignFactory(_ref) {
  var {
    subset,
    matrix
  } = _ref;
  return function assign2(object, index, value) {
    try {
      if (Array.isArray(object)) {
        return matrix(object).subset(index, value).valueOf();
      } else if (object && typeof object.subset === "function") {
        return object.subset(index, value);
      } else if (typeof object === "string") {
        return subset(object, index, value);
      } else if (typeof object === "object") {
        if (!index.isObjectProperty()) {
          throw TypeError("Cannot apply a numeric index as object property");
        }
        setSafeProperty(object, index.getObjectProperty(), value);
        return object;
      } else {
        throw new TypeError("Cannot apply index: unsupported type of object");
      }
    } catch (err) {
      throw errorTransform(err);
    }
  };
}
var properties = [{
  AssignmentNode: {},
  FunctionAssignmentNode: {}
}, {
  ConditionalNode: {
    latexLeftParens: false,
    latexRightParens: false,
    latexParens: false
  }
}, {
  "OperatorNode:or": {
    op: "or",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:xor": {
    op: "xor",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:and": {
    op: "and",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:bitOr": {
    op: "|",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:bitXor": {
    op: "^|",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:bitAnd": {
    op: "&",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:equal": {
    op: "==",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:unequal": {
    op: "!=",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:smaller": {
    op: "<",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:larger": {
    op: ">",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:smallerEq": {
    op: "<=",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:largerEq": {
    op: ">=",
    associativity: "left",
    associativeWith: []
  },
  RelationalNode: {
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:leftShift": {
    op: "<<",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:rightArithShift": {
    op: ">>",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:rightLogShift": {
    op: ">>>",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:to": {
    op: "to",
    associativity: "left",
    associativeWith: []
  }
}, {
  RangeNode: {}
}, {
  "OperatorNode:add": {
    op: "+",
    associativity: "left",
    associativeWith: ["OperatorNode:add", "OperatorNode:subtract"]
  },
  "OperatorNode:subtract": {
    op: "-",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:multiply": {
    op: "*",
    associativity: "left",
    associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"]
  },
  "OperatorNode:divide": {
    op: "/",
    associativity: "left",
    associativeWith: [],
    latexLeftParens: false,
    latexRightParens: false,
    latexParens: false
  },
  "OperatorNode:dotMultiply": {
    op: ".*",
    associativity: "left",
    associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "OperatorNode:dotMultiply", "OperatorNode:doDivide"]
  },
  "OperatorNode:dotDivide": {
    op: "./",
    associativity: "left",
    associativeWith: []
  },
  "OperatorNode:mod": {
    op: "mod",
    associativity: "left",
    associativeWith: []
  }
}, {
  "OperatorNode:multiply": {
    associativity: "left",
    associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"]
  }
}, {
  "OperatorNode:unaryPlus": {
    op: "+",
    associativity: "right"
  },
  "OperatorNode:unaryMinus": {
    op: "-",
    associativity: "right"
  },
  "OperatorNode:bitNot": {
    op: "~",
    associativity: "right"
  },
  "OperatorNode:not": {
    op: "not",
    associativity: "right"
  }
}, {
  "OperatorNode:pow": {
    op: "^",
    associativity: "right",
    associativeWith: [],
    latexRightParens: false
  },
  "OperatorNode:dotPow": {
    op: ".^",
    associativity: "right",
    associativeWith: []
  }
}, {
  "OperatorNode:factorial": {
    op: "!",
    associativity: "left"
  }
}, {
  "OperatorNode:ctranspose": {
    op: "'",
    associativity: "left"
  }
}];
function unwrapParen(_node, parenthesis) {
  if (!parenthesis || parenthesis !== "auto")
    return _node;
  var node = _node;
  while (isParenthesisNode(node))
    node = node.content;
  return node;
}
function getPrecedence(_node, parenthesis, implicit, parent) {
  var node = _node;
  if (parenthesis !== "keep") {
    node = _node.getContent();
  }
  var identifier = node.getIdentifier();
  var precedence = null;
  for (var i = 0; i < properties.length; i++) {
    if (identifier in properties[i]) {
      precedence = i;
      break;
    }
  }
  if (identifier === "OperatorNode:multiply" && node.implicit && implicit !== "show") {
    var leftArg = unwrapParen(node.args[0], parenthesis);
    if (!(isConstantNode(leftArg) && parent && parent.getIdentifier() === "OperatorNode:divide" && rule2Node(unwrapParen(parent.args[0], parenthesis))) && !(leftArg.getIdentifier() === "OperatorNode:divide" && rule2Node(unwrapParen(leftArg.args[0], parenthesis)) && isConstantNode(unwrapParen(leftArg.args[1])))) {
      precedence += 1;
    }
  }
  return precedence;
}
function getAssociativity(_node, parenthesis) {
  var node = _node;
  if (parenthesis !== "keep") {
    node = _node.getContent();
  }
  var identifier = node.getIdentifier();
  var index = getPrecedence(node, parenthesis);
  if (index === null) {
    return null;
  }
  var property = properties[index][identifier];
  if (hasOwnProperty$1(property, "associativity")) {
    if (property.associativity === "left") {
      return "left";
    }
    if (property.associativity === "right") {
      return "right";
    }
    throw Error("'" + identifier + "' has the invalid associativity '" + property.associativity + "'.");
  }
  return null;
}
function isAssociativeWith(nodeA, nodeB, parenthesis) {
  var a = parenthesis !== "keep" ? nodeA.getContent() : nodeA;
  var b = parenthesis !== "keep" ? nodeA.getContent() : nodeB;
  var identifierA = a.getIdentifier();
  var identifierB = b.getIdentifier();
  var index = getPrecedence(a, parenthesis);
  if (index === null) {
    return null;
  }
  var property = properties[index][identifierA];
  if (hasOwnProperty$1(property, "associativeWith") && property.associativeWith instanceof Array) {
    for (var i = 0; i < property.associativeWith.length; i++) {
      if (property.associativeWith[i] === identifierB) {
        return true;
      }
    }
    return false;
  }
  return null;
}
function getOperator(fn) {
  var identifier = "OperatorNode:" + fn;
  for (var group of properties) {
    if (identifier in group) {
      return group[identifier].op;
    }
  }
  return null;
}
var name$R = "AssignmentNode";
var dependencies$R = [
  "subset",
  "?matrix",
  "Node"
];
var createAssignmentNode = /* @__PURE__ */ factory(name$R, dependencies$R, (_ref) => {
  var {
    subset,
    matrix,
    Node
  } = _ref;
  var access = accessFactory({
    subset
  });
  var assign2 = assignFactory({
    subset,
    matrix
  });
  function needParenthesis(node, parenthesis, implicit) {
    if (!parenthesis) {
      parenthesis = "keep";
    }
    var precedence = getPrecedence(node, parenthesis, implicit);
    var exprPrecedence = getPrecedence(node.value, parenthesis, implicit);
    return parenthesis === "all" || exprPrecedence !== null && exprPrecedence <= precedence;
  }
  class AssignmentNode extends Node {
    constructor(object, index, value) {
      super();
      this.object = object;
      this.index = value ? index : null;
      this.value = value || index;
      if (!isSymbolNode(object) && !isAccessorNode(object)) {
        throw new TypeError('SymbolNode or AccessorNode expected as "object"');
      }
      if (isSymbolNode(object) && object.name === "end") {
        throw new Error('Cannot assign to symbol "end"');
      }
      if (this.index && !isIndexNode(this.index)) {
        throw new TypeError('IndexNode expected as "index"');
      }
      if (!isNode(this.value)) {
        throw new TypeError('Node expected as "value"');
      }
    }
    get name() {
      if (this.index) {
        return this.index.isObjectProperty() ? this.index.getObjectProperty() : "";
      } else {
        return this.object.name || "";
      }
    }
    get type() {
      return name$R;
    }
    get isAssignmentNode() {
      return true;
    }
    _compile(math, argNames) {
      var evalObject = this.object._compile(math, argNames);
      var evalIndex = this.index ? this.index._compile(math, argNames) : null;
      var evalValue = this.value._compile(math, argNames);
      var name2 = this.object.name;
      if (!this.index) {
        if (!isSymbolNode(this.object)) {
          throw new TypeError("SymbolNode expected as object");
        }
        return function evalAssignmentNode(scope, args, context) {
          var value = evalValue(scope, args, context);
          scope.set(name2, value);
          return value;
        };
      } else if (this.index.isObjectProperty()) {
        var prop = this.index.getObjectProperty();
        return function evalAssignmentNode(scope, args, context) {
          var object = evalObject(scope, args, context);
          var value = evalValue(scope, args, context);
          setSafeProperty(object, prop, value);
          return value;
        };
      } else if (isSymbolNode(this.object)) {
        return function evalAssignmentNode(scope, args, context) {
          var childObject = evalObject(scope, args, context);
          var value = evalValue(scope, args, context);
          var index = evalIndex(scope, args, childObject);
          scope.set(name2, assign2(childObject, index, value));
          return value;
        };
      } else {
        var evalParentObject = this.object.object._compile(math, argNames);
        if (this.object.index.isObjectProperty()) {
          var parentProp = this.object.index.getObjectProperty();
          return function evalAssignmentNode(scope, args, context) {
            var parent = evalParentObject(scope, args, context);
            var childObject = getSafeProperty(parent, parentProp);
            var index = evalIndex(scope, args, childObject);
            var value = evalValue(scope, args, context);
            setSafeProperty(parent, parentProp, assign2(childObject, index, value));
            return value;
          };
        } else {
          var evalParentIndex = this.object.index._compile(math, argNames);
          return function evalAssignmentNode(scope, args, context) {
            var parent = evalParentObject(scope, args, context);
            var parentIndex = evalParentIndex(scope, args, parent);
            var childObject = access(parent, parentIndex);
            var index = evalIndex(scope, args, childObject);
            var value = evalValue(scope, args, context);
            assign2(parent, parentIndex, assign2(childObject, index, value));
            return value;
          };
        }
      }
    }
    forEach(callback) {
      callback(this.object, "object", this);
      if (this.index) {
        callback(this.index, "index", this);
      }
      callback(this.value, "value", this);
    }
    map(callback) {
      var object = this._ifNode(callback(this.object, "object", this));
      var index = this.index ? this._ifNode(callback(this.index, "index", this)) : null;
      var value = this._ifNode(callback(this.value, "value", this));
      return new AssignmentNode(object, index, value);
    }
    clone() {
      return new AssignmentNode(this.object, this.index, this.value);
    }
    _toString(options) {
      var object = this.object.toString(options);
      var index = this.index ? this.index.toString(options) : "";
      var value = this.value.toString(options);
      if (needParenthesis(this, options && options.parenthesis, options && options.implicit)) {
        value = "(" + value + ")";
      }
      return object + index + " = " + value;
    }
    toJSON() {
      return {
        mathjs: name$R,
        object: this.object,
        index: this.index,
        value: this.value
      };
    }
    static fromJSON(json) {
      return new AssignmentNode(json.object, json.index, json.value);
    }
    toHTML(options) {
      var object = this.object.toHTML(options);
      var index = this.index ? this.index.toHTML(options) : "";
      var value = this.value.toHTML(options);
      if (needParenthesis(this, options && options.parenthesis, options && options.implicit)) {
        value = '<span class="math-paranthesis math-round-parenthesis">(</span>' + value + '<span class="math-paranthesis math-round-parenthesis">)</span>';
      }
      return object + index + '<span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + value;
    }
    _toTex(options) {
      var object = this.object.toTex(options);
      var index = this.index ? this.index.toTex(options) : "";
      var value = this.value.toTex(options);
      if (needParenthesis(this, options && options.parenthesis, options && options.implicit)) {
        value = "\\left(".concat(value, "\\right)");
      }
      return object + index + ":=" + value;
    }
  }
  defineProperty(AssignmentNode, "name", name$R);
  return AssignmentNode;
}, {
  isClass: true,
  isNode: true
});
var name$S = "BlockNode";
var dependencies$S = ["ResultSet", "Node"];
var createBlockNode = /* @__PURE__ */ factory(name$S, dependencies$S, (_ref) => {
  var {
    ResultSet,
    Node
  } = _ref;
  class BlockNode extends Node {
    constructor(blocks) {
      super();
      if (!Array.isArray(blocks))
        throw new Error("Array expected");
      this.blocks = blocks.map(function(block) {
        var node = block && block.node;
        var visible = block && block.visible !== void 0 ? block.visible : true;
        if (!isNode(node))
          throw new TypeError('Property "node" must be a Node');
        if (typeof visible !== "boolean") {
          throw new TypeError('Property "visible" must be a boolean');
        }
        return {
          node,
          visible
        };
      });
    }
    get type() {
      return name$S;
    }
    get isBlockNode() {
      return true;
    }
    _compile(math, argNames) {
      var evalBlocks = map(this.blocks, function(block) {
        return {
          evaluate: block.node._compile(math, argNames),
          visible: block.visible
        };
      });
      return function evalBlockNodes(scope, args, context) {
        var results = [];
        forEach(evalBlocks, function evalBlockNode(block) {
          var result = block.evaluate(scope, args, context);
          if (block.visible) {
            results.push(result);
          }
        });
        return new ResultSet(results);
      };
    }
    forEach(callback) {
      for (var i = 0; i < this.blocks.length; i++) {
        callback(this.blocks[i].node, "blocks[" + i + "].node", this);
      }
    }
    map(callback) {
      var blocks = [];
      for (var i = 0; i < this.blocks.length; i++) {
        var block = this.blocks[i];
        var node = this._ifNode(callback(block.node, "blocks[" + i + "].node", this));
        blocks[i] = {
          node,
          visible: block.visible
        };
      }
      return new BlockNode(blocks);
    }
    clone() {
      var blocks = this.blocks.map(function(block) {
        return {
          node: block.node,
          visible: block.visible
        };
      });
      return new BlockNode(blocks);
    }
    _toString(options) {
      return this.blocks.map(function(param) {
        return param.node.toString(options) + (param.visible ? "" : ";");
      }).join("\n");
    }
    toJSON() {
      return {
        mathjs: name$S,
        blocks: this.blocks
      };
    }
    static fromJSON(json) {
      return new BlockNode(json.blocks);
    }
    toHTML(options) {
      return this.blocks.map(function(param) {
        return param.node.toHTML(options) + (param.visible ? "" : '<span class="math-separator">;</span>');
      }).join('<span class="math-separator"><br /></span>');
    }
    _toTex(options) {
      return this.blocks.map(function(param) {
        return param.node.toTex(options) + (param.visible ? "" : ";");
      }).join("\\;\\;\n");
    }
  }
  defineProperty(BlockNode, "name", name$S);
  return BlockNode;
}, {
  isClass: true,
  isNode: true
});
var name$T = "ConditionalNode";
var dependencies$T = ["Node"];
var createConditionalNode = /* @__PURE__ */ factory(name$T, dependencies$T, (_ref) => {
  var {
    Node
  } = _ref;
  function testCondition(condition) {
    if (typeof condition === "number" || typeof condition === "boolean" || typeof condition === "string") {
      return !!condition;
    }
    if (condition) {
      if (isBigNumber(condition)) {
        return !condition.isZero();
      }
      if (isComplex(condition)) {
        return !!(condition.re || condition.im);
      }
      if (isUnit(condition)) {
        return !!condition.value;
      }
    }
    if (condition === null || condition === void 0) {
      return false;
    }
    throw new TypeError('Unsupported type of condition "' + typeOf(condition) + '"');
  }
  class ConditionalNode extends Node {
    constructor(condition, trueExpr, falseExpr) {
      super();
      if (!isNode(condition)) {
        throw new TypeError("Parameter condition must be a Node");
      }
      if (!isNode(trueExpr)) {
        throw new TypeError("Parameter trueExpr must be a Node");
      }
      if (!isNode(falseExpr)) {
        throw new TypeError("Parameter falseExpr must be a Node");
      }
      this.condition = condition;
      this.trueExpr = trueExpr;
      this.falseExpr = falseExpr;
    }
    get type() {
      return name$T;
    }
    get isConditionalNode() {
      return true;
    }
    _compile(math, argNames) {
      var evalCondition = this.condition._compile(math, argNames);
      var evalTrueExpr = this.trueExpr._compile(math, argNames);
      var evalFalseExpr = this.falseExpr._compile(math, argNames);
      return function evalConditionalNode(scope, args, context) {
        return testCondition(evalCondition(scope, args, context)) ? evalTrueExpr(scope, args, context) : evalFalseExpr(scope, args, context);
      };
    }
    forEach(callback) {
      callback(this.condition, "condition", this);
      callback(this.trueExpr, "trueExpr", this);
      callback(this.falseExpr, "falseExpr", this);
    }
    map(callback) {
      return new ConditionalNode(this._ifNode(callback(this.condition, "condition", this)), this._ifNode(callback(this.trueExpr, "trueExpr", this)), this._ifNode(callback(this.falseExpr, "falseExpr", this)));
    }
    clone() {
      return new ConditionalNode(this.condition, this.trueExpr, this.falseExpr);
    }
    _toString(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : "keep";
      var precedence = getPrecedence(this, parenthesis, options && options.implicit);
      var condition = this.condition.toString(options);
      var conditionPrecedence = getPrecedence(this.condition, parenthesis, options && options.implicit);
      if (parenthesis === "all" || this.condition.type === "OperatorNode" || conditionPrecedence !== null && conditionPrecedence <= precedence) {
        condition = "(" + condition + ")";
      }
      var trueExpr = this.trueExpr.toString(options);
      var truePrecedence = getPrecedence(this.trueExpr, parenthesis, options && options.implicit);
      if (parenthesis === "all" || this.trueExpr.type === "OperatorNode" || truePrecedence !== null && truePrecedence <= precedence) {
        trueExpr = "(" + trueExpr + ")";
      }
      var falseExpr = this.falseExpr.toString(options);
      var falsePrecedence = getPrecedence(this.falseExpr, parenthesis, options && options.implicit);
      if (parenthesis === "all" || this.falseExpr.type === "OperatorNode" || falsePrecedence !== null && falsePrecedence <= precedence) {
        falseExpr = "(" + falseExpr + ")";
      }
      return condition + " ? " + trueExpr + " : " + falseExpr;
    }
    toJSON() {
      return {
        mathjs: name$T,
        condition: this.condition,
        trueExpr: this.trueExpr,
        falseExpr: this.falseExpr
      };
    }
    static fromJSON(json) {
      return new ConditionalNode(json.condition, json.trueExpr, json.falseExpr);
    }
    toHTML(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : "keep";
      var precedence = getPrecedence(this, parenthesis, options && options.implicit);
      var condition = this.condition.toHTML(options);
      var conditionPrecedence = getPrecedence(this.condition, parenthesis, options && options.implicit);
      if (parenthesis === "all" || this.condition.type === "OperatorNode" || conditionPrecedence !== null && conditionPrecedence <= precedence) {
        condition = '<span class="math-parenthesis math-round-parenthesis">(</span>' + condition + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }
      var trueExpr = this.trueExpr.toHTML(options);
      var truePrecedence = getPrecedence(this.trueExpr, parenthesis, options && options.implicit);
      if (parenthesis === "all" || this.trueExpr.type === "OperatorNode" || truePrecedence !== null && truePrecedence <= precedence) {
        trueExpr = '<span class="math-parenthesis math-round-parenthesis">(</span>' + trueExpr + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }
      var falseExpr = this.falseExpr.toHTML(options);
      var falsePrecedence = getPrecedence(this.falseExpr, parenthesis, options && options.implicit);
      if (parenthesis === "all" || this.falseExpr.type === "OperatorNode" || falsePrecedence !== null && falsePrecedence <= precedence) {
        falseExpr = '<span class="math-parenthesis math-round-parenthesis">(</span>' + falseExpr + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }
      return condition + '<span class="math-operator math-conditional-operator">?</span>' + trueExpr + '<span class="math-operator math-conditional-operator">:</span>' + falseExpr;
    }
    _toTex(options) {
      return "\\begin{cases} {" + this.trueExpr.toTex(options) + "}, &\\quad{\\text{if }\\;" + this.condition.toTex(options) + "}\\\\{" + this.falseExpr.toTex(options) + "}, &\\quad{\\text{otherwise}}\\end{cases}";
    }
  }
  defineProperty(ConditionalNode, "name", name$T);
  return ConditionalNode;
}, {
  isClass: true,
  isNode: true
});
var latexSymbols = {
  Alpha: "A",
  alpha: "\\alpha",
  Beta: "B",
  beta: "\\beta",
  Gamma: "\\Gamma",
  gamma: "\\gamma",
  Delta: "\\Delta",
  delta: "\\delta",
  Epsilon: "E",
  epsilon: "\\epsilon",
  varepsilon: "\\varepsilon",
  Zeta: "Z",
  zeta: "\\zeta",
  Eta: "H",
  eta: "\\eta",
  Theta: "\\Theta",
  theta: "\\theta",
  vartheta: "\\vartheta",
  Iota: "I",
  iota: "\\iota",
  Kappa: "K",
  kappa: "\\kappa",
  varkappa: "\\varkappa",
  Lambda: "\\Lambda",
  lambda: "\\lambda",
  Mu: "M",
  mu: "\\mu",
  Nu: "N",
  nu: "\\nu",
  Xi: "\\Xi",
  xi: "\\xi",
  Omicron: "O",
  omicron: "o",
  Pi: "\\Pi",
  pi: "\\pi",
  varpi: "\\varpi",
  Rho: "P",
  rho: "\\rho",
  varrho: "\\varrho",
  Sigma: "\\Sigma",
  sigma: "\\sigma",
  varsigma: "\\varsigma",
  Tau: "T",
  tau: "\\tau",
  Upsilon: "\\Upsilon",
  upsilon: "\\upsilon",
  Phi: "\\Phi",
  phi: "\\phi",
  varphi: "\\varphi",
  Chi: "X",
  chi: "\\chi",
  Psi: "\\Psi",
  psi: "\\psi",
  Omega: "\\Omega",
  omega: "\\omega",
  true: "\\mathrm{True}",
  false: "\\mathrm{False}",
  i: "i",
  inf: "\\infty",
  Inf: "\\infty",
  infinity: "\\infty",
  Infinity: "\\infty",
  oo: "\\infty",
  lim: "\\lim",
  undefined: "\\mathbf{?}"
};
var latexOperators = {
  transpose: "^\\top",
  ctranspose: "^H",
  factorial: "!",
  pow: "^",
  dotPow: ".^\\wedge",
  unaryPlus: "+",
  unaryMinus: "-",
  bitNot: "\\~",
  not: "\\neg",
  multiply: "\\cdot",
  divide: "\\frac",
  dotMultiply: ".\\cdot",
  dotDivide: ".:",
  mod: "\\mod",
  add: "+",
  subtract: "-",
  to: "\\rightarrow",
  leftShift: "<<",
  rightArithShift: ">>",
  rightLogShift: ">>>",
  equal: "=",
  unequal: "\\neq",
  smaller: "<",
  larger: ">",
  smallerEq: "\\leq",
  largerEq: "\\geq",
  bitAnd: "\\&",
  bitXor: "\\underline{|}",
  bitOr: "|",
  and: "\\wedge",
  xor: "\\veebar",
  or: "\\vee"
};
var latexFunctions = {
  abs: {
    1: "\\left|${args[0]}\\right|"
  },
  add: {
    2: "\\left(${args[0]}".concat(latexOperators.add, "${args[1]}\\right)")
  },
  cbrt: {
    1: "\\sqrt[3]{${args[0]}}"
  },
  ceil: {
    1: "\\left\\lceil${args[0]}\\right\\rceil"
  },
  cube: {
    1: "\\left(${args[0]}\\right)^3"
  },
  divide: {
    2: "\\frac{${args[0]}}{${args[1]}}"
  },
  dotDivide: {
    2: "\\left(${args[0]}".concat(latexOperators.dotDivide, "${args[1]}\\right)")
  },
  dotMultiply: {
    2: "\\left(${args[0]}".concat(latexOperators.dotMultiply, "${args[1]}\\right)")
  },
  dotPow: {
    2: "\\left(${args[0]}".concat(latexOperators.dotPow, "${args[1]}\\right)")
  },
  exp: {
    1: "\\exp\\left(${args[0]}\\right)"
  },
  expm1: "\\left(e".concat(latexOperators.pow, "{${args[0]}}-1\\right)"),
  fix: {
    1: "\\mathrm{${name}}\\left(${args[0]}\\right)"
  },
  floor: {
    1: "\\left\\lfloor${args[0]}\\right\\rfloor"
  },
  gcd: "\\gcd\\left(${args}\\right)",
  hypot: "\\hypot\\left(${args}\\right)",
  log: {
    1: "\\ln\\left(${args[0]}\\right)",
    2: "\\log_{${args[1]}}\\left(${args[0]}\\right)"
  },
  log10: {
    1: "\\log_{10}\\left(${args[0]}\\right)"
  },
  log1p: {
    1: "\\ln\\left(${args[0]}+1\\right)",
    2: "\\log_{${args[1]}}\\left(${args[0]}+1\\right)"
  },
  log2: "\\log_{2}\\left(${args[0]}\\right)",
  mod: {
    2: "\\left(${args[0]}".concat(latexOperators.mod, "${args[1]}\\right)")
  },
  multiply: {
    2: "\\left(${args[0]}".concat(latexOperators.multiply, "${args[1]}\\right)")
  },
  norm: {
    1: "\\left\\|${args[0]}\\right\\|",
    2: void 0
  },
  nthRoot: {
    2: "\\sqrt[${args[1]}]{${args[0]}}"
  },
  nthRoots: {
    2: "\\{y : $y^{args[1]} = {${args[0]}}\\}"
  },
  pow: {
    2: "\\left(${args[0]}\\right)".concat(latexOperators.pow, "{${args[1]}}")
  },
  round: {
    1: "\\left\\lfloor${args[0]}\\right\\rceil",
    2: void 0
  },
  sign: {
    1: "\\mathrm{${name}}\\left(${args[0]}\\right)"
  },
  sqrt: {
    1: "\\sqrt{${args[0]}}"
  },
  square: {
    1: "\\left(${args[0]}\\right)^2"
  },
  subtract: {
    2: "\\left(${args[0]}".concat(latexOperators.subtract, "${args[1]}\\right)")
  },
  unaryMinus: {
    1: "".concat(latexOperators.unaryMinus, "\\left(${args[0]}\\right)")
  },
  unaryPlus: {
    1: "".concat(latexOperators.unaryPlus, "\\left(${args[0]}\\right)")
  },
  bitAnd: {
    2: "\\left(${args[0]}".concat(latexOperators.bitAnd, "${args[1]}\\right)")
  },
  bitNot: {
    1: latexOperators.bitNot + "\\left(${args[0]}\\right)"
  },
  bitOr: {
    2: "\\left(${args[0]}".concat(latexOperators.bitOr, "${args[1]}\\right)")
  },
  bitXor: {
    2: "\\left(${args[0]}".concat(latexOperators.bitXor, "${args[1]}\\right)")
  },
  leftShift: {
    2: "\\left(${args[0]}".concat(latexOperators.leftShift, "${args[1]}\\right)")
  },
  rightArithShift: {
    2: "\\left(${args[0]}".concat(latexOperators.rightArithShift, "${args[1]}\\right)")
  },
  rightLogShift: {
    2: "\\left(${args[0]}".concat(latexOperators.rightLogShift, "${args[1]}\\right)")
  },
  bellNumbers: {
    1: "\\mathrm{B}_{${args[0]}}"
  },
  catalan: {
    1: "\\mathrm{C}_{${args[0]}}"
  },
  stirlingS2: {
    2: "\\mathrm{S}\\left(${args}\\right)"
  },
  arg: {
    1: "\\arg\\left(${args[0]}\\right)"
  },
  conj: {
    1: "\\left(${args[0]}\\right)^*"
  },
  im: {
    1: "\\Im\\left\\lbrace${args[0]}\\right\\rbrace"
  },
  re: {
    1: "\\Re\\left\\lbrace${args[0]}\\right\\rbrace"
  },
  and: {
    2: "\\left(${args[0]}".concat(latexOperators.and, "${args[1]}\\right)")
  },
  not: {
    1: latexOperators.not + "\\left(${args[0]}\\right)"
  },
  or: {
    2: "\\left(${args[0]}".concat(latexOperators.or, "${args[1]}\\right)")
  },
  xor: {
    2: "\\left(${args[0]}".concat(latexOperators.xor, "${args[1]}\\right)")
  },
  cross: {
    2: "\\left(${args[0]}\\right)\\times\\left(${args[1]}\\right)"
  },
  ctranspose: {
    1: "\\left(${args[0]}\\right)".concat(latexOperators.ctranspose)
  },
  det: {
    1: "\\det\\left(${args[0]}\\right)"
  },
  dot: {
    2: "\\left(${args[0]}\\cdot${args[1]}\\right)"
  },
  expm: {
    1: "\\exp\\left(${args[0]}\\right)"
  },
  inv: {
    1: "\\left(${args[0]}\\right)^{-1}"
  },
  pinv: {
    1: "\\left(${args[0]}\\right)^{+}"
  },
  sqrtm: {
    1: "{${args[0]}}".concat(latexOperators.pow, "{\\frac{1}{2}}")
  },
  trace: {
    1: "\\mathrm{tr}\\left(${args[0]}\\right)"
  },
  transpose: {
    1: "\\left(${args[0]}\\right)".concat(latexOperators.transpose)
  },
  combinations: {
    2: "\\binom{${args[0]}}{${args[1]}}"
  },
  combinationsWithRep: {
    2: "\\left(\\!\\!{\\binom{${args[0]}}{${args[1]}}}\\!\\!\\right)"
  },
  factorial: {
    1: "\\left(${args[0]}\\right)".concat(latexOperators.factorial)
  },
  gamma: {
    1: "\\Gamma\\left(${args[0]}\\right)"
  },
  lgamma: {
    1: "\\ln\\Gamma\\left(${args[0]}\\right)"
  },
  equal: {
    2: "\\left(${args[0]}".concat(latexOperators.equal, "${args[1]}\\right)")
  },
  larger: {
    2: "\\left(${args[0]}".concat(latexOperators.larger, "${args[1]}\\right)")
  },
  largerEq: {
    2: "\\left(${args[0]}".concat(latexOperators.largerEq, "${args[1]}\\right)")
  },
  smaller: {
    2: "\\left(${args[0]}".concat(latexOperators.smaller, "${args[1]}\\right)")
  },
  smallerEq: {
    2: "\\left(${args[0]}".concat(latexOperators.smallerEq, "${args[1]}\\right)")
  },
  unequal: {
    2: "\\left(${args[0]}".concat(latexOperators.unequal, "${args[1]}\\right)")
  },
  erf: {
    1: "erf\\left(${args[0]}\\right)"
  },
  max: "\\max\\left(${args}\\right)",
  min: "\\min\\left(${args}\\right)",
  variance: "\\mathrm{Var}\\left(${args}\\right)",
  acos: {
    1: "\\cos^{-1}\\left(${args[0]}\\right)"
  },
  acosh: {
    1: "\\cosh^{-1}\\left(${args[0]}\\right)"
  },
  acot: {
    1: "\\cot^{-1}\\left(${args[0]}\\right)"
  },
  acoth: {
    1: "\\coth^{-1}\\left(${args[0]}\\right)"
  },
  acsc: {
    1: "\\csc^{-1}\\left(${args[0]}\\right)"
  },
  acsch: {
    1: "\\mathrm{csch}^{-1}\\left(${args[0]}\\right)"
  },
  asec: {
    1: "\\sec^{-1}\\left(${args[0]}\\right)"
  },
  asech: {
    1: "\\mathrm{sech}^{-1}\\left(${args[0]}\\right)"
  },
  asin: {
    1: "\\sin^{-1}\\left(${args[0]}\\right)"
  },
  asinh: {
    1: "\\sinh^{-1}\\left(${args[0]}\\right)"
  },
  atan: {
    1: "\\tan^{-1}\\left(${args[0]}\\right)"
  },
  atan2: {
    2: "\\mathrm{atan2}\\left(${args}\\right)"
  },
  atanh: {
    1: "\\tanh^{-1}\\left(${args[0]}\\right)"
  },
  cos: {
    1: "\\cos\\left(${args[0]}\\right)"
  },
  cosh: {
    1: "\\cosh\\left(${args[0]}\\right)"
  },
  cot: {
    1: "\\cot\\left(${args[0]}\\right)"
  },
  coth: {
    1: "\\coth\\left(${args[0]}\\right)"
  },
  csc: {
    1: "\\csc\\left(${args[0]}\\right)"
  },
  csch: {
    1: "\\mathrm{csch}\\left(${args[0]}\\right)"
  },
  sec: {
    1: "\\sec\\left(${args[0]}\\right)"
  },
  sech: {
    1: "\\mathrm{sech}\\left(${args[0]}\\right)"
  },
  sin: {
    1: "\\sin\\left(${args[0]}\\right)"
  },
  sinh: {
    1: "\\sinh\\left(${args[0]}\\right)"
  },
  tan: {
    1: "\\tan\\left(${args[0]}\\right)"
  },
  tanh: {
    1: "\\tanh\\left(${args[0]}\\right)"
  },
  to: {
    2: "\\left(${args[0]}".concat(latexOperators.to, "${args[1]}\\right)")
  },
  numeric: function numeric(node, options) {
    return node.args[0].toTex();
  },
  number: {
    0: "0",
    1: "\\left(${args[0]}\\right)",
    2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
  },
  string: {
    0: '\\mathtt{""}',
    1: "\\mathrm{string}\\left(${args[0]}\\right)"
  },
  bignumber: {
    0: "0",
    1: "\\left(${args[0]}\\right)"
  },
  complex: {
    0: "0",
    1: "\\left(${args[0]}\\right)",
    2: "\\left(\\left(${args[0]}\\right)+".concat(latexSymbols.i, "\\cdot\\left(${args[1]}\\right)\\right)")
  },
  matrix: {
    0: "\\begin{bmatrix}\\end{bmatrix}",
    1: "\\left(${args[0]}\\right)",
    2: "\\left(${args[0]}\\right)"
  },
  sparse: {
    0: "\\begin{bsparse}\\end{bsparse}",
    1: "\\left(${args[0]}\\right)"
  },
  unit: {
    1: "\\left(${args[0]}\\right)",
    2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
  }
};
var defaultTemplate = "\\mathrm{${name}}\\left(${args}\\right)";
var latexUnits = {
  deg: "^\\circ"
};
function escapeLatex(string) {
  return escapeLatexLib(string, {
    preserveFormatting: true
  });
}
function toSymbol(name2, isUnit2) {
  isUnit2 = typeof isUnit2 === "undefined" ? false : isUnit2;
  if (isUnit2) {
    if (hasOwnProperty$1(latexUnits, name2)) {
      return latexUnits[name2];
    }
    return "\\mathrm{" + escapeLatex(name2) + "}";
  }
  if (hasOwnProperty$1(latexSymbols, name2)) {
    return latexSymbols[name2];
  }
  return escapeLatex(name2);
}
var name$U = "ConstantNode";
var dependencies$U = ["Node"];
var createConstantNode = /* @__PURE__ */ factory(name$U, dependencies$U, (_ref) => {
  var {
    Node
  } = _ref;
  class ConstantNode extends Node {
    constructor(value) {
      super();
      this.value = value;
    }
    get type() {
      return name$U;
    }
    get isConstantNode() {
      return true;
    }
    _compile(math, argNames) {
      var value = this.value;
      return function evalConstantNode() {
        return value;
      };
    }
    forEach(callback) {
    }
    map(callback) {
      return this.clone();
    }
    clone() {
      return new ConstantNode(this.value);
    }
    _toString(options) {
      return format$2(this.value, options);
    }
    toHTML(options) {
      var value = this._toString(options);
      switch (typeOf(this.value)) {
        case "number":
        case "BigNumber":
        case "Fraction":
          return '<span class="math-number">' + value + "</span>";
        case "string":
          return '<span class="math-string">' + value + "</span>";
        case "boolean":
          return '<span class="math-boolean">' + value + "</span>";
        case "null":
          return '<span class="math-null-symbol">' + value + "</span>";
        case "undefined":
          return '<span class="math-undefined">' + value + "</span>";
        default:
          return '<span class="math-symbol">' + value + "</span>";
      }
    }
    toJSON() {
      return {
        mathjs: name$U,
        value: this.value
      };
    }
    static fromJSON(json) {
      return new ConstantNode(json.value);
    }
    _toTex(options) {
      var value = this._toString(options);
      switch (typeOf(this.value)) {
        case "string":
          return "\\mathtt{" + escapeLatex(value) + "}";
        case "number":
        case "BigNumber":
          {
            if (!isFinite(this.value)) {
              return this.value.valueOf() < 0 ? "-\\infty" : "\\infty";
            }
            var index = value.toLowerCase().indexOf("e");
            if (index !== -1) {
              return value.substring(0, index) + "\\cdot10^{" + value.substring(index + 1) + "}";
            }
          }
          return value;
        case "Fraction":
          return this.value.toLatex();
        default:
          return value;
      }
    }
  }
  defineProperty(ConstantNode, "name", name$U);
  return ConstantNode;
}, {
  isClass: true,
  isNode: true
});
var name$V = "FunctionAssignmentNode";
var dependencies$V = ["typed", "Node"];
var createFunctionAssignmentNode = /* @__PURE__ */ factory(name$V, dependencies$V, (_ref) => {
  var {
    typed,
    Node
  } = _ref;
  function needParenthesis(node, parenthesis, implicit) {
    var precedence = getPrecedence(node, parenthesis, implicit);
    var exprPrecedence = getPrecedence(node.expr, parenthesis, implicit);
    return parenthesis === "all" || exprPrecedence !== null && exprPrecedence <= precedence;
  }
  class FunctionAssignmentNode extends Node {
    constructor(name2, params, expr) {
      super();
      if (typeof name2 !== "string") {
        throw new TypeError('String expected for parameter "name"');
      }
      if (!Array.isArray(params)) {
        throw new TypeError('Array containing strings or objects expected for parameter "params"');
      }
      if (!isNode(expr)) {
        throw new TypeError('Node expected for parameter "expr"');
      }
      if (keywords.has(name2)) {
        throw new Error('Illegal function name, "' + name2 + '" is a reserved keyword');
      }
      var paramNames = new Set();
      for (var param of params) {
        var _name = typeof param === "string" ? param : param.name;
        if (paramNames.has(_name)) {
          throw new Error('Duplicate parameter name "'.concat(_name, '"'));
        } else {
          paramNames.add(_name);
        }
      }
      this.name = name2;
      this.params = params.map(function(param2) {
        return param2 && param2.name || param2;
      });
      this.types = params.map(function(param2) {
        return param2 && param2.type || "any";
      });
      this.expr = expr;
    }
    get type() {
      return name$V;
    }
    get isFunctionAssignmentNode() {
      return true;
    }
    _compile(math, argNames) {
      var childArgNames = Object.create(argNames);
      forEach(this.params, function(param) {
        childArgNames[param] = true;
      });
      var evalExpr = this.expr._compile(math, childArgNames);
      var name2 = this.name;
      var params = this.params;
      var signature = join(this.types, ",");
      var syntax = name2 + "(" + join(this.params, ", ") + ")";
      return function evalFunctionAssignmentNode(scope, args, context) {
        var signatures = {};
        signatures[signature] = function() {
          var childArgs = Object.create(args);
          for (var i = 0; i < params.length; i++) {
            childArgs[params[i]] = arguments[i];
          }
          return evalExpr(scope, childArgs, context);
        };
        var fn = typed(name2, signatures);
        fn.syntax = syntax;
        scope.set(name2, fn);
        return fn;
      };
    }
    forEach(callback) {
      callback(this.expr, "expr", this);
    }
    map(callback) {
      var expr = this._ifNode(callback(this.expr, "expr", this));
      return new FunctionAssignmentNode(this.name, this.params.slice(0), expr);
    }
    clone() {
      return new FunctionAssignmentNode(this.name, this.params.slice(0), this.expr);
    }
    _toString(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : "keep";
      var expr = this.expr.toString(options);
      if (needParenthesis(this, parenthesis, options && options.implicit)) {
        expr = "(" + expr + ")";
      }
      return this.name + "(" + this.params.join(", ") + ") = " + expr;
    }
    toJSON() {
      var types = this.types;
      return {
        mathjs: name$V,
        name: this.name,
        params: this.params.map(function(param, index) {
          return {
            name: param,
            type: types[index]
          };
        }),
        expr: this.expr
      };
    }
    static fromJSON(json) {
      return new FunctionAssignmentNode(json.name, json.params, json.expr);
    }
    toHTML(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : "keep";
      var params = [];
      for (var i = 0; i < this.params.length; i++) {
        params.push('<span class="math-symbol math-parameter">' + escape(this.params[i]) + "</span>");
      }
      var expr = this.expr.toHTML(options);
      if (needParenthesis(this, parenthesis, options && options.implicit)) {
        expr = '<span class="math-parenthesis math-round-parenthesis">(</span>' + expr + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }
      return '<span class="math-function">' + escape(this.name) + '</span><span class="math-parenthesis math-round-parenthesis">(</span>' + params.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-round-parenthesis">)</span><span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + expr;
    }
    _toTex(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : "keep";
      var expr = this.expr.toTex(options);
      if (needParenthesis(this, parenthesis, options && options.implicit)) {
        expr = "\\left(".concat(expr, "\\right)");
      }
      return "\\mathrm{" + this.name + "}\\left(" + this.params.map(toSymbol).join(",") + "\\right):=" + expr;
    }
  }
  defineProperty(FunctionAssignmentNode, "name", name$V);
  return FunctionAssignmentNode;
}, {
  isClass: true,
  isNode: true
});
var name$W = "IndexNode";
var dependencies$W = ["Node", "size"];
var createIndexNode = /* @__PURE__ */ factory(name$W, dependencies$W, (_ref) => {
  var {
    Node,
    size
  } = _ref;
  class IndexNode extends Node {
    constructor(dimensions, dotNotation) {
      super();
      this.dimensions = dimensions;
      this.dotNotation = dotNotation || false;
      if (!Array.isArray(dimensions) || !dimensions.every(isNode)) {
        throw new TypeError('Array containing Nodes expected for parameter "dimensions"');
      }
      if (this.dotNotation && !this.isObjectProperty()) {
        throw new Error("dotNotation only applicable for object properties");
      }
    }
    get type() {
      return name$W;
    }
    get isIndexNode() {
      return true;
    }
    _compile(math, argNames) {
      var evalDimensions = map(this.dimensions, function(dimension, i) {
        var needsEnd = dimension.filter((node) => node.isSymbolNode && node.name === "end").length > 0;
        if (needsEnd) {
          var childArgNames = Object.create(argNames);
          childArgNames.end = true;
          var _evalDimension = dimension._compile(math, childArgNames);
          return function evalDimension(scope, args, context) {
            if (!isMatrix(context) && !isArray(context) && !isString(context)) {
              throw new TypeError('Cannot resolve "end": context must be a Matrix, Array, or string but is ' + typeOf(context));
            }
            var s = size(context).valueOf();
            var childArgs = Object.create(args);
            childArgs.end = s[i];
            return _evalDimension(scope, childArgs, context);
          };
        } else {
          return dimension._compile(math, argNames);
        }
      });
      var index = getSafeProperty(math, "index");
      return function evalIndexNode(scope, args, context) {
        var dimensions = map(evalDimensions, function(evalDimension) {
          return evalDimension(scope, args, context);
        });
        return index(...dimensions);
      };
    }
    forEach(callback) {
      for (var i = 0; i < this.dimensions.length; i++) {
        callback(this.dimensions[i], "dimensions[" + i + "]", this);
      }
    }
    map(callback) {
      var dimensions = [];
      for (var i = 0; i < this.dimensions.length; i++) {
        dimensions[i] = this._ifNode(callback(this.dimensions[i], "dimensions[" + i + "]", this));
      }
      return new IndexNode(dimensions, this.dotNotation);
    }
    clone() {
      return new IndexNode(this.dimensions.slice(0), this.dotNotation);
    }
    isObjectProperty() {
      return this.dimensions.length === 1 && isConstantNode(this.dimensions[0]) && typeof this.dimensions[0].value === "string";
    }
    getObjectProperty() {
      return this.isObjectProperty() ? this.dimensions[0].value : null;
    }
    _toString(options) {
      return this.dotNotation ? "." + this.getObjectProperty() : "[" + this.dimensions.join(", ") + "]";
    }
    toJSON() {
      return {
        mathjs: name$W,
        dimensions: this.dimensions,
        dotNotation: this.dotNotation
      };
    }
    static fromJSON(json) {
      return new IndexNode(json.dimensions, json.dotNotation);
    }
    toHTML(options) {
      var dimensions = [];
      for (var i = 0; i < this.dimensions.length; i++) {
        dimensions[i] = this.dimensions[i].toHTML();
      }
      if (this.dotNotation) {
        return '<span class="math-operator math-accessor-operator">.</span><span class="math-symbol math-property">' + escape(this.getObjectProperty()) + "</span>";
      } else {
        return '<span class="math-parenthesis math-square-parenthesis">[</span>' + dimensions.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>';
      }
    }
    _toTex(options) {
      var dimensions = this.dimensions.map(function(range) {
        return range.toTex(options);
      });
      return this.dotNotation ? "." + this.getObjectProperty() + "" : "_{" + dimensions.join(",") + "}";
    }
  }
  defineProperty(IndexNode, "name", name$W);
  return IndexNode;
}, {
  isClass: true,
  isNode: true
});
var name$X = "ObjectNode";
var dependencies$X = ["Node"];
var createObjectNode = /* @__PURE__ */ factory(name$X, dependencies$X, (_ref) => {
  var {
    Node
  } = _ref;
  class ObjectNode extends Node {
    constructor(properties2) {
      super();
      this.properties = properties2 || {};
      if (properties2) {
        if (!(typeof properties2 === "object") || !Object.keys(properties2).every(function(key) {
          return isNode(properties2[key]);
        })) {
          throw new TypeError("Object containing Nodes expected");
        }
      }
    }
    get type() {
      return name$X;
    }
    get isObjectNode() {
      return true;
    }
    _compile(math, argNames) {
      var evalEntries = {};
      for (var key in this.properties) {
        if (hasOwnProperty$1(this.properties, key)) {
          var stringifiedKey = stringify(key);
          var parsedKey = JSON.parse(stringifiedKey);
          if (!isSafeProperty(this.properties, parsedKey)) {
            throw new Error('No access to property "' + parsedKey + '"');
          }
          evalEntries[parsedKey] = this.properties[key]._compile(math, argNames);
        }
      }
      return function evalObjectNode(scope, args, context) {
        var obj = {};
        for (var _key in evalEntries) {
          if (hasOwnProperty$1(evalEntries, _key)) {
            obj[_key] = evalEntries[_key](scope, args, context);
          }
        }
        return obj;
      };
    }
    forEach(callback) {
      for (var key in this.properties) {
        if (hasOwnProperty$1(this.properties, key)) {
          callback(this.properties[key], "properties[" + stringify(key) + "]", this);
        }
      }
    }
    map(callback) {
      var properties2 = {};
      for (var key in this.properties) {
        if (hasOwnProperty$1(this.properties, key)) {
          properties2[key] = this._ifNode(callback(this.properties[key], "properties[" + stringify(key) + "]", this));
        }
      }
      return new ObjectNode(properties2);
    }
    clone() {
      var properties2 = {};
      for (var key in this.properties) {
        if (hasOwnProperty$1(this.properties, key)) {
          properties2[key] = this.properties[key];
        }
      }
      return new ObjectNode(properties2);
    }
    _toString(options) {
      var entries = [];
      for (var key in this.properties) {
        if (hasOwnProperty$1(this.properties, key)) {
          entries.push(stringify(key) + ": " + this.properties[key].toString(options));
        }
      }
      return "{" + entries.join(", ") + "}";
    }
    toJSON() {
      return {
        mathjs: name$X,
        properties: this.properties
      };
    }
    static fromJSON(json) {
      return new ObjectNode(json.properties);
    }
    toHTML(options) {
      var entries = [];
      for (var key in this.properties) {
        if (hasOwnProperty$1(this.properties, key)) {
          entries.push('<span class="math-symbol math-property">' + escape(key) + '</span><span class="math-operator math-assignment-operator math-property-assignment-operator math-binary-operator">:</span>' + this.properties[key].toHTML(options));
        }
      }
      return '<span class="math-parenthesis math-curly-parenthesis">{</span>' + entries.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-curly-parenthesis">}</span>';
    }
    _toTex(options) {
      var entries = [];
      for (var key in this.properties) {
        if (hasOwnProperty$1(this.properties, key)) {
          entries.push("\\mathbf{" + key + ":} & " + this.properties[key].toTex(options) + "\\\\");
        }
      }
      var tex = "\\left\\{\\begin{array}{ll}" + entries.join("\n") + "\\end{array}\\right\\}";
      return tex;
    }
  }
  defineProperty(ObjectNode, "name", name$X);
  return ObjectNode;
}, {
  isClass: true,
  isNode: true
});
var name$Y = "OperatorNode";
var dependencies$Y = ["Node"];
var createOperatorNode = /* @__PURE__ */ factory(name$Y, dependencies$Y, (_ref) => {
  var {
    Node
  } = _ref;
  function startsWithConstant(expr, parenthesis) {
    var curNode = expr;
    if (parenthesis === "auto") {
      while (isParenthesisNode(curNode))
        curNode = curNode.content;
    }
    if (isConstantNode(curNode))
      return true;
    if (isOperatorNode(curNode)) {
      return startsWithConstant(curNode.args[0], parenthesis);
    }
    return false;
  }
  function calculateNecessaryParentheses(root, parenthesis, implicit, args, latex) {
    var precedence = getPrecedence(root, parenthesis, implicit);
    var associativity = getAssociativity(root, parenthesis);
    if (parenthesis === "all" || args.length > 2 && root.getIdentifier() !== "OperatorNode:add" && root.getIdentifier() !== "OperatorNode:multiply") {
      return args.map(function(arg) {
        switch (arg.getContent().type) {
          case "ArrayNode":
          case "ConstantNode":
          case "SymbolNode":
          case "ParenthesisNode":
            return false;
          default:
            return true;
        }
      });
    }
    var result;
    switch (args.length) {
      case 0:
        result = [];
        break;
      case 1:
        {
          var operandPrecedence = getPrecedence(args[0], parenthesis, implicit, root);
          if (latex && operandPrecedence !== null) {
            var operandIdentifier;
            var rootIdentifier;
            if (parenthesis === "keep") {
              operandIdentifier = args[0].getIdentifier();
              rootIdentifier = root.getIdentifier();
            } else {
              operandIdentifier = args[0].getContent().getIdentifier();
              rootIdentifier = root.getContent().getIdentifier();
            }
            if (properties[precedence][rootIdentifier].latexLeftParens === false) {
              result = [false];
              break;
            }
            if (properties[operandPrecedence][operandIdentifier].latexParens === false) {
              result = [false];
              break;
            }
          }
          if (operandPrecedence === null) {
            result = [false];
            break;
          }
          if (operandPrecedence <= precedence) {
            result = [true];
            break;
          }
          result = [false];
        }
        break;
      case 2:
        {
          var lhsParens;
          var lhsPrecedence = getPrecedence(args[0], parenthesis, implicit, root);
          var assocWithLhs = isAssociativeWith(root, args[0], parenthesis);
          if (lhsPrecedence === null) {
            lhsParens = false;
          } else if (lhsPrecedence === precedence && associativity === "right" && !assocWithLhs) {
            lhsParens = true;
          } else if (lhsPrecedence < precedence) {
            lhsParens = true;
          } else {
            lhsParens = false;
          }
          var rhsParens;
          var rhsPrecedence = getPrecedence(args[1], parenthesis, implicit, root);
          var assocWithRhs = isAssociativeWith(root, args[1], parenthesis);
          if (rhsPrecedence === null) {
            rhsParens = false;
          } else if (rhsPrecedence === precedence && associativity === "left" && !assocWithRhs) {
            rhsParens = true;
          } else if (rhsPrecedence < precedence) {
            rhsParens = true;
          } else {
            rhsParens = false;
          }
          if (latex) {
            var _rootIdentifier;
            var lhsIdentifier;
            var rhsIdentifier;
            if (parenthesis === "keep") {
              _rootIdentifier = root.getIdentifier();
              lhsIdentifier = root.args[0].getIdentifier();
              rhsIdentifier = root.args[1].getIdentifier();
            } else {
              _rootIdentifier = root.getContent().getIdentifier();
              lhsIdentifier = root.args[0].getContent().getIdentifier();
              rhsIdentifier = root.args[1].getContent().getIdentifier();
            }
            if (lhsPrecedence !== null) {
              if (properties[precedence][_rootIdentifier].latexLeftParens === false) {
                lhsParens = false;
              }
              if (properties[lhsPrecedence][lhsIdentifier].latexParens === false) {
                lhsParens = false;
              }
            }
            if (rhsPrecedence !== null) {
              if (properties[precedence][_rootIdentifier].latexRightParens === false) {
                rhsParens = false;
              }
              if (properties[rhsPrecedence][rhsIdentifier].latexParens === false) {
                rhsParens = false;
              }
            }
          }
          result = [lhsParens, rhsParens];
        }
        break;
      default:
        if (root.getIdentifier() === "OperatorNode:add" || root.getIdentifier() === "OperatorNode:multiply") {
          result = args.map(function(arg) {
            var argPrecedence = getPrecedence(arg, parenthesis, implicit, root);
            var assocWithArg = isAssociativeWith(root, arg, parenthesis);
            var argAssociativity = getAssociativity(arg, parenthesis);
            if (argPrecedence === null) {
              return false;
            } else if (precedence === argPrecedence && associativity === argAssociativity && !assocWithArg) {
              return true;
            } else if (argPrecedence < precedence) {
              return true;
            }
            return false;
          });
        }
        break;
    }
    if (args.length >= 2 && root.getIdentifier() === "OperatorNode:multiply" && root.implicit && parenthesis !== "all" && implicit === "hide") {
      for (var i = 1; i < result.length; ++i) {
        if (startsWithConstant(args[i], parenthesis) && !result[i - 1] && (parenthesis !== "keep" || !isParenthesisNode(args[i - 1]))) {
          result[i] = true;
        }
      }
    }
    return result;
  }
  class OperatorNode extends Node {
    constructor(op, fn, args, implicit, isPercentage) {
      super();
      if (typeof op !== "string") {
        throw new TypeError('string expected for parameter "op"');
      }
      if (typeof fn !== "string") {
        throw new TypeError('string expected for parameter "fn"');
      }
      if (!Array.isArray(args) || !args.every(isNode)) {
        throw new TypeError('Array containing Nodes expected for parameter "args"');
      }
      this.implicit = implicit === true;
      this.isPercentage = isPercentage === true;
      this.op = op;
      this.fn = fn;
      this.args = args || [];
    }
    get type() {
      return name$Y;
    }
    get isOperatorNode() {
      return true;
    }
    _compile(math, argNames) {
      if (typeof this.fn !== "string" || !isSafeMethod(math, this.fn)) {
        if (!math[this.fn]) {
          throw new Error("Function " + this.fn + ' missing in provided namespace "math"');
        } else {
          throw new Error('No access to function "' + this.fn + '"');
        }
      }
      var fn = getSafeProperty(math, this.fn);
      var evalArgs = map(this.args, function(arg) {
        return arg._compile(math, argNames);
      });
      if (evalArgs.length === 1) {
        var evalArg0 = evalArgs[0];
        return function evalOperatorNode(scope, args, context) {
          return fn(evalArg0(scope, args, context));
        };
      } else if (evalArgs.length === 2) {
        var _evalArg = evalArgs[0];
        var evalArg1 = evalArgs[1];
        return function evalOperatorNode(scope, args, context) {
          return fn(_evalArg(scope, args, context), evalArg1(scope, args, context));
        };
      } else {
        return function evalOperatorNode(scope, args, context) {
          return fn.apply(null, map(evalArgs, function(evalArg) {
            return evalArg(scope, args, context);
          }));
        };
      }
    }
    forEach(callback) {
      for (var i = 0; i < this.args.length; i++) {
        callback(this.args[i], "args[" + i + "]", this);
      }
    }
    map(callback) {
      var args = [];
      for (var i = 0; i < this.args.length; i++) {
        args[i] = this._ifNode(callback(this.args[i], "args[" + i + "]", this));
      }
      return new OperatorNode(this.op, this.fn, args, this.implicit, this.isPercentage);
    }
    clone() {
      return new OperatorNode(this.op, this.fn, this.args.slice(0), this.implicit, this.isPercentage);
    }
    isUnary() {
      return this.args.length === 1;
    }
    isBinary() {
      return this.args.length === 2;
    }
    _toString(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : "keep";
      var implicit = options && options.implicit ? options.implicit : "hide";
      var args = this.args;
      var parens = calculateNecessaryParentheses(this, parenthesis, implicit, args, false);
      if (args.length === 1) {
        var assoc = getAssociativity(this, parenthesis);
        var operand = args[0].toString(options);
        if (parens[0]) {
          operand = "(" + operand + ")";
        }
        var opIsNamed = /[a-zA-Z]+/.test(this.op);
        if (assoc === "right") {
          return this.op + (opIsNamed ? " " : "") + operand;
        } else if (assoc === "left") {
          return operand + (opIsNamed ? " " : "") + this.op;
        }
        return operand + this.op;
      } else if (args.length === 2) {
        var lhs = args[0].toString(options);
        var rhs = args[1].toString(options);
        if (parens[0]) {
          lhs = "(" + lhs + ")";
        }
        if (parens[1]) {
          rhs = "(" + rhs + ")";
        }
        if (this.implicit && this.getIdentifier() === "OperatorNode:multiply" && implicit === "hide") {
          return lhs + " " + rhs;
        }
        return lhs + " " + this.op + " " + rhs;
      } else if (args.length > 2 && (this.getIdentifier() === "OperatorNode:add" || this.getIdentifier() === "OperatorNode:multiply")) {
        var stringifiedArgs = args.map(function(arg, index) {
          arg = arg.toString(options);
          if (parens[index]) {
            arg = "(" + arg + ")";
          }
          return arg;
        });
        if (this.implicit && this.getIdentifier() === "OperatorNode:multiply" && implicit === "hide") {
          return stringifiedArgs.join(" ");
        }
        return stringifiedArgs.join(" " + this.op + " ");
      } else {
        return this.fn + "(" + this.args.join(", ") + ")";
      }
    }
    toJSON() {
      return {
        mathjs: name$Y,
        op: this.op,
        fn: this.fn,
        args: this.args,
        implicit: this.implicit,
        isPercentage: this.isPercentage
      };
    }
    static fromJSON(json) {
      return new OperatorNode(json.op, json.fn, json.args, json.implicit, json.isPercentage);
    }
    toHTML(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : "keep";
      var implicit = options && options.implicit ? options.implicit : "hide";
      var args = this.args;
      var parens = calculateNecessaryParentheses(this, parenthesis, implicit, args, false);
      if (args.length === 1) {
        var assoc = getAssociativity(this, parenthesis);
        var operand = args[0].toHTML(options);
        if (parens[0]) {
          operand = '<span class="math-parenthesis math-round-parenthesis">(</span>' + operand + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        if (assoc === "right") {
          return '<span class="math-operator math-unary-operator math-lefthand-unary-operator">' + escape(this.op) + "</span>" + operand;
        } else {
          return operand + '<span class="math-operator math-unary-operator math-righthand-unary-operator">' + escape(this.op) + "</span>";
        }
      } else if (args.length === 2) {
        var lhs = args[0].toHTML(options);
        var rhs = args[1].toHTML(options);
        if (parens[0]) {
          lhs = '<span class="math-parenthesis math-round-parenthesis">(</span>' + lhs + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        if (parens[1]) {
          rhs = '<span class="math-parenthesis math-round-parenthesis">(</span>' + rhs + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        if (this.implicit && this.getIdentifier() === "OperatorNode:multiply" && implicit === "hide") {
          return lhs + '<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>' + rhs;
        }
        return lhs + '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + escape(this.op) + "</span>" + rhs;
      } else {
        var stringifiedArgs = args.map(function(arg, index) {
          arg = arg.toHTML(options);
          if (parens[index]) {
            arg = '<span class="math-parenthesis math-round-parenthesis">(</span>' + arg + '<span class="math-parenthesis math-round-parenthesis">)</span>';
          }
          return arg;
        });
        if (args.length > 2 && (this.getIdentifier() === "OperatorNode:add" || this.getIdentifier() === "OperatorNode:multiply")) {
          if (this.implicit && this.getIdentifier() === "OperatorNode:multiply" && implicit === "hide") {
            return stringifiedArgs.join('<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>');
          }
          return stringifiedArgs.join('<span class="math-operator math-binary-operator math-explicit-binary-operator">' + escape(this.op) + "</span>");
        } else {
          return '<span class="math-function">' + escape(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + stringifiedArgs.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>';
        }
      }
    }
    _toTex(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : "keep";
      var implicit = options && options.implicit ? options.implicit : "hide";
      var args = this.args;
      var parens = calculateNecessaryParentheses(this, parenthesis, implicit, args, true);
      var op = latexOperators[this.fn];
      op = typeof op === "undefined" ? this.op : op;
      if (args.length === 1) {
        var assoc = getAssociativity(this, parenthesis);
        var operand = args[0].toTex(options);
        if (parens[0]) {
          operand = "\\left(".concat(operand, "\\right)");
        }
        if (assoc === "right") {
          return op + operand;
        } else if (assoc === "left") {
          return operand + op;
        }
        return operand + op;
      } else if (args.length === 2) {
        var lhs = args[0];
        var lhsTex = lhs.toTex(options);
        if (parens[0]) {
          lhsTex = "\\left(".concat(lhsTex, "\\right)");
        }
        var rhs = args[1];
        var rhsTex = rhs.toTex(options);
        if (parens[1]) {
          rhsTex = "\\left(".concat(rhsTex, "\\right)");
        }
        var lhsIdentifier;
        if (parenthesis === "keep") {
          lhsIdentifier = lhs.getIdentifier();
        } else {
          lhsIdentifier = lhs.getContent().getIdentifier();
        }
        switch (this.getIdentifier()) {
          case "OperatorNode:divide":
            return op + "{" + lhsTex + "}{" + rhsTex + "}";
          case "OperatorNode:pow":
            lhsTex = "{" + lhsTex + "}";
            rhsTex = "{" + rhsTex + "}";
            switch (lhsIdentifier) {
              case "ConditionalNode":
              case "OperatorNode:divide":
                lhsTex = "\\left(".concat(lhsTex, "\\right)");
            }
            break;
          case "OperatorNode:multiply":
            if (this.implicit && implicit === "hide") {
              return lhsTex + "~" + rhsTex;
            }
        }
        return lhsTex + op + rhsTex;
      } else if (args.length > 2 && (this.getIdentifier() === "OperatorNode:add" || this.getIdentifier() === "OperatorNode:multiply")) {
        var texifiedArgs = args.map(function(arg, index) {
          arg = arg.toTex(options);
          if (parens[index]) {
            arg = "\\left(".concat(arg, "\\right)");
          }
          return arg;
        });
        if (this.getIdentifier() === "OperatorNode:multiply" && this.implicit && implicit === "hide") {
          return texifiedArgs.join("~");
        }
        return texifiedArgs.join(op);
      } else {
        return "\\mathrm{" + this.fn + "}\\left(" + args.map(function(arg) {
          return arg.toTex(options);
        }).join(",") + "\\right)";
      }
    }
    getIdentifier() {
      return this.type + ":" + this.fn;
    }
  }
  defineProperty(OperatorNode, "name", name$Y);
  return OperatorNode;
}, {
  isClass: true,
  isNode: true
});
var name$Z = "ParenthesisNode";
var dependencies$Z = ["Node"];
var createParenthesisNode = /* @__PURE__ */ factory(name$Z, dependencies$Z, (_ref) => {
  var {
    Node
  } = _ref;
  class ParenthesisNode extends Node {
    constructor(content) {
      super();
      if (!isNode(content)) {
        throw new TypeError('Node expected for parameter "content"');
      }
      this.content = content;
    }
    get type() {
      return name$Z;
    }
    get isParenthesisNode() {
      return true;
    }
    _compile(math, argNames) {
      return this.content._compile(math, argNames);
    }
    getContent() {
      return this.content.getContent();
    }
    forEach(callback) {
      callback(this.content, "content", this);
    }
    map(callback) {
      var content = callback(this.content, "content", this);
      return new ParenthesisNode(content);
    }
    clone() {
      return new ParenthesisNode(this.content);
    }
    _toString(options) {
      if (!options || options && !options.parenthesis || options && options.parenthesis === "keep") {
        return "(" + this.content.toString(options) + ")";
      }
      return this.content.toString(options);
    }
    toJSON() {
      return {
        mathjs: name$Z,
        content: this.content
      };
    }
    static fromJSON(json) {
      return new ParenthesisNode(json.content);
    }
    toHTML(options) {
      if (!options || options && !options.parenthesis || options && options.parenthesis === "keep") {
        return '<span class="math-parenthesis math-round-parenthesis">(</span>' + this.content.toHTML(options) + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }
      return this.content.toHTML(options);
    }
    _toTex(options) {
      if (!options || options && !options.parenthesis || options && options.parenthesis === "keep") {
        return "\\left(".concat(this.content.toTex(options), "\\right)");
      }
      return this.content.toTex(options);
    }
  }
  defineProperty(ParenthesisNode, "name", name$Z);
  return ParenthesisNode;
}, {
  isClass: true,
  isNode: true
});
var name$_ = "RangeNode";
var dependencies$_ = ["Node"];
var createRangeNode = /* @__PURE__ */ factory(name$_, dependencies$_, (_ref) => {
  var {
    Node
  } = _ref;
  function calculateNecessaryParentheses(node, parenthesis, implicit) {
    var precedence = getPrecedence(node, parenthesis, implicit);
    var parens = {};
    var startPrecedence = getPrecedence(node.start, parenthesis, implicit);
    parens.start = startPrecedence !== null && startPrecedence <= precedence || parenthesis === "all";
    if (node.step) {
      var stepPrecedence = getPrecedence(node.step, parenthesis, implicit);
      parens.step = stepPrecedence !== null && stepPrecedence <= precedence || parenthesis === "all";
    }
    var endPrecedence = getPrecedence(node.end, parenthesis, implicit);
    parens.end = endPrecedence !== null && endPrecedence <= precedence || parenthesis === "all";
    return parens;
  }
  class RangeNode extends Node {
    constructor(start, end, step) {
      super();
      if (!isNode(start))
        throw new TypeError("Node expected");
      if (!isNode(end))
        throw new TypeError("Node expected");
      if (step && !isNode(step))
        throw new TypeError("Node expected");
      if (arguments.length > 3)
        throw new Error("Too many arguments");
      this.start = start;
      this.end = end;
      this.step = step || null;
    }
    get type() {
      return name$_;
    }
    get isRangeNode() {
      return true;
    }
    needsEnd() {
      var endSymbols = this.filter(function(node) {
        return isSymbolNode(node) && node.name === "end";
      });
      return endSymbols.length > 0;
    }
    _compile(math, argNames) {
      var range = math.range;
      var evalStart = this.start._compile(math, argNames);
      var evalEnd = this.end._compile(math, argNames);
      if (this.step) {
        var evalStep = this.step._compile(math, argNames);
        return function evalRangeNode(scope, args, context) {
          return range(evalStart(scope, args, context), evalEnd(scope, args, context), evalStep(scope, args, context));
        };
      } else {
        return function evalRangeNode(scope, args, context) {
          return range(evalStart(scope, args, context), evalEnd(scope, args, context));
        };
      }
    }
    forEach(callback) {
      callback(this.start, "start", this);
      callback(this.end, "end", this);
      if (this.step) {
        callback(this.step, "step", this);
      }
    }
    map(callback) {
      return new RangeNode(this._ifNode(callback(this.start, "start", this)), this._ifNode(callback(this.end, "end", this)), this.step && this._ifNode(callback(this.step, "step", this)));
    }
    clone() {
      return new RangeNode(this.start, this.end, this.step && this.step);
    }
    _toString(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : "keep";
      var parens = calculateNecessaryParentheses(this, parenthesis, options && options.implicit);
      var str;
      var start = this.start.toString(options);
      if (parens.start) {
        start = "(" + start + ")";
      }
      str = start;
      if (this.step) {
        var step = this.step.toString(options);
        if (parens.step) {
          step = "(" + step + ")";
        }
        str += ":" + step;
      }
      var end = this.end.toString(options);
      if (parens.end) {
        end = "(" + end + ")";
      }
      str += ":" + end;
      return str;
    }
    toJSON() {
      return {
        mathjs: name$_,
        start: this.start,
        end: this.end,
        step: this.step
      };
    }
    static fromJSON(json) {
      return new RangeNode(json.start, json.end, json.step);
    }
    toHTML(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : "keep";
      var parens = calculateNecessaryParentheses(this, parenthesis, options && options.implicit);
      var str;
      var start = this.start.toHTML(options);
      if (parens.start) {
        start = '<span class="math-parenthesis math-round-parenthesis">(</span>' + start + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }
      str = start;
      if (this.step) {
        var step = this.step.toHTML(options);
        if (parens.step) {
          step = '<span class="math-parenthesis math-round-parenthesis">(</span>' + step + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        str += '<span class="math-operator math-range-operator">:</span>' + step;
      }
      var end = this.end.toHTML(options);
      if (parens.end) {
        end = '<span class="math-parenthesis math-round-parenthesis">(</span>' + end + '<span class="math-parenthesis math-round-parenthesis">)</span>';
      }
      str += '<span class="math-operator math-range-operator">:</span>' + end;
      return str;
    }
    _toTex(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : "keep";
      var parens = calculateNecessaryParentheses(this, parenthesis, options && options.implicit);
      var str = this.start.toTex(options);
      if (parens.start) {
        str = "\\left(".concat(str, "\\right)");
      }
      if (this.step) {
        var step = this.step.toTex(options);
        if (parens.step) {
          step = "\\left(".concat(step, "\\right)");
        }
        str += ":" + step;
      }
      var end = this.end.toTex(options);
      if (parens.end) {
        end = "\\left(".concat(end, "\\right)");
      }
      str += ":" + end;
      return str;
    }
  }
  defineProperty(RangeNode, "name", name$_);
  return RangeNode;
}, {
  isClass: true,
  isNode: true
});
var name$$ = "RelationalNode";
var dependencies$$ = ["Node"];
var createRelationalNode = /* @__PURE__ */ factory(name$$, dependencies$$, (_ref) => {
  var {
    Node
  } = _ref;
  var operatorMap = {
    equal: "==",
    unequal: "!=",
    smaller: "<",
    larger: ">",
    smallerEq: "<=",
    largerEq: ">="
  };
  class RelationalNode extends Node {
    constructor(conditionals, params) {
      super();
      if (!Array.isArray(conditionals)) {
        throw new TypeError("Parameter conditionals must be an array");
      }
      if (!Array.isArray(params)) {
        throw new TypeError("Parameter params must be an array");
      }
      if (conditionals.length !== params.length - 1) {
        throw new TypeError("Parameter params must contain exactly one more element than parameter conditionals");
      }
      this.conditionals = conditionals;
      this.params = params;
    }
    get type() {
      return name$$;
    }
    get isRelationalNode() {
      return true;
    }
    _compile(math, argNames) {
      var self = this;
      var compiled = this.params.map((p) => p._compile(math, argNames));
      return function evalRelationalNode(scope, args, context) {
        var evalLhs;
        var evalRhs = compiled[0](scope, args, context);
        for (var i = 0; i < self.conditionals.length; i++) {
          evalLhs = evalRhs;
          evalRhs = compiled[i + 1](scope, args, context);
          var condFn = getSafeProperty(math, self.conditionals[i]);
          if (!condFn(evalLhs, evalRhs)) {
            return false;
          }
        }
        return true;
      };
    }
    forEach(callback) {
      this.params.forEach((n, i) => callback(n, "params[" + i + "]", this), this);
    }
    map(callback) {
      return new RelationalNode(this.conditionals.slice(), this.params.map((n, i) => this._ifNode(callback(n, "params[" + i + "]", this)), this));
    }
    clone() {
      return new RelationalNode(this.conditionals, this.params);
    }
    _toString(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : "keep";
      var precedence = getPrecedence(this, parenthesis, options && options.implicit);
      var paramStrings = this.params.map(function(p, index) {
        var paramPrecedence = getPrecedence(p, parenthesis, options && options.implicit);
        return parenthesis === "all" || paramPrecedence !== null && paramPrecedence <= precedence ? "(" + p.toString(options) + ")" : p.toString(options);
      });
      var ret = paramStrings[0];
      for (var i = 0; i < this.conditionals.length; i++) {
        ret += " " + operatorMap[this.conditionals[i]];
        ret += " " + paramStrings[i + 1];
      }
      return ret;
    }
    toJSON() {
      return {
        mathjs: name$$,
        conditionals: this.conditionals,
        params: this.params
      };
    }
    static fromJSON(json) {
      return new RelationalNode(json.conditionals, json.params);
    }
    toHTML(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : "keep";
      var precedence = getPrecedence(this, parenthesis, options && options.implicit);
      var paramStrings = this.params.map(function(p, index) {
        var paramPrecedence = getPrecedence(p, parenthesis, options && options.implicit);
        return parenthesis === "all" || paramPrecedence !== null && paramPrecedence <= precedence ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + p.toHTML(options) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : p.toHTML(options);
      });
      var ret = paramStrings[0];
      for (var i = 0; i < this.conditionals.length; i++) {
        ret += '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + escape(operatorMap[this.conditionals[i]]) + "</span>" + paramStrings[i + 1];
      }
      return ret;
    }
    _toTex(options) {
      var parenthesis = options && options.parenthesis ? options.parenthesis : "keep";
      var precedence = getPrecedence(this, parenthesis, options && options.implicit);
      var paramStrings = this.params.map(function(p, index) {
        var paramPrecedence = getPrecedence(p, parenthesis, options && options.implicit);
        return parenthesis === "all" || paramPrecedence !== null && paramPrecedence <= precedence ? "\\left(" + p.toTex(options) + "\right)" : p.toTex(options);
      });
      var ret = paramStrings[0];
      for (var i = 0; i < this.conditionals.length; i++) {
        ret += latexOperators[this.conditionals[i]] + paramStrings[i + 1];
      }
      return ret;
    }
  }
  defineProperty(RelationalNode, "name", name$$);
  return RelationalNode;
}, {
  isClass: true,
  isNode: true
});
var name$10 = "SymbolNode";
var dependencies$10 = ["math", "?Unit", "Node"];
var createSymbolNode = /* @__PURE__ */ factory(name$10, dependencies$10, (_ref) => {
  var {
    math,
    Unit,
    Node
  } = _ref;
  function isValuelessUnit(name2) {
    return Unit ? Unit.isValuelessUnit(name2) : false;
  }
  class SymbolNode extends Node {
    constructor(name2) {
      super();
      if (typeof name2 !== "string") {
        throw new TypeError('String expected for parameter "name"');
      }
      this.name = name2;
    }
    get type() {
      return "SymbolNode";
    }
    get isSymbolNode() {
      return true;
    }
    _compile(math2, argNames) {
      var name2 = this.name;
      if (argNames[name2] === true) {
        return function(scope, args, context) {
          return args[name2];
        };
      } else if (name2 in math2) {
        return function(scope, args, context) {
          return scope.has(name2) ? scope.get(name2) : getSafeProperty(math2, name2);
        };
      } else {
        var isUnit2 = isValuelessUnit(name2);
        return function(scope, args, context) {
          return scope.has(name2) ? scope.get(name2) : isUnit2 ? new Unit(null, name2) : SymbolNode.onUndefinedSymbol(name2);
        };
      }
    }
    forEach(callback) {
    }
    map(callback) {
      return this.clone();
    }
    static onUndefinedSymbol(name2) {
      throw new Error("Undefined symbol " + name2);
    }
    clone() {
      return new SymbolNode(this.name);
    }
    _toString(options) {
      return this.name;
    }
    toHTML(options) {
      var name2 = escape(this.name);
      if (name2 === "true" || name2 === "false") {
        return '<span class="math-symbol math-boolean">' + name2 + "</span>";
      } else if (name2 === "i") {
        return '<span class="math-symbol math-imaginary-symbol">' + name2 + "</span>";
      } else if (name2 === "Infinity") {
        return '<span class="math-symbol math-infinity-symbol">' + name2 + "</span>";
      } else if (name2 === "NaN") {
        return '<span class="math-symbol math-nan-symbol">' + name2 + "</span>";
      } else if (name2 === "null") {
        return '<span class="math-symbol math-null-symbol">' + name2 + "</span>";
      } else if (name2 === "undefined") {
        return '<span class="math-symbol math-undefined-symbol">' + name2 + "</span>";
      }
      return '<span class="math-symbol">' + name2 + "</span>";
    }
    toJSON() {
      return {
        mathjs: "SymbolNode",
        name: this.name
      };
    }
    static fromJSON(json) {
      return new SymbolNode(json.name);
    }
    _toTex(options) {
      var isUnit2 = false;
      if (typeof math[this.name] === "undefined" && isValuelessUnit(this.name)) {
        isUnit2 = true;
      }
      var symbol = toSymbol(this.name, isUnit2);
      if (symbol[0] === "\\") {
        return symbol;
      }
      return " " + symbol;
    }
  }
  return SymbolNode;
}, {
  isClass: true,
  isNode: true
});
function createSubScope(parentScope) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (typeof parentScope.createSubScope === "function") {
    return assign(parentScope.createSubScope(), ...args);
  }
  return assign(createEmptyMap(), parentScope, ...args);
}
var name$11 = "FunctionNode";
var dependencies$11 = ["math", "Node", "SymbolNode"];
var createFunctionNode = /* @__PURE__ */ factory(name$11, dependencies$11, (_ref) => {
  var {
    math,
    Node,
    SymbolNode
  } = _ref;
  var strin = (entity) => format$2(entity, {
    truncate: 78
  });
  function expandTemplate(template, node, options) {
    var latex = "";
    var regex = /\$(?:\{([a-z_][a-z_0-9]*)(?:\[([0-9]+)\])?\}|\$)/gi;
    var inputPos = 0;
    var match;
    while ((match = regex.exec(template)) !== null) {
      latex += template.substring(inputPos, match.index);
      inputPos = match.index;
      if (match[0] === "$$") {
        latex += "$";
        inputPos++;
      } else {
        inputPos += match[0].length;
        var property = node[match[1]];
        if (!property) {
          throw new ReferenceError("Template: Property " + match[1] + " does not exist.");
        }
        if (match[2] === void 0) {
          switch (typeof property) {
            case "string":
              latex += property;
              break;
            case "object":
              if (isNode(property)) {
                latex += property.toTex(options);
              } else if (Array.isArray(property)) {
                latex += property.map(function(arg, index) {
                  if (isNode(arg)) {
                    return arg.toTex(options);
                  }
                  throw new TypeError("Template: " + match[1] + "[" + index + "] is not a Node.");
                }).join(",");
              } else {
                throw new TypeError("Template: " + match[1] + " has to be a Node, String or array of Nodes");
              }
              break;
            default:
              throw new TypeError("Template: " + match[1] + " has to be a Node, String or array of Nodes");
          }
        } else {
          if (isNode(property[match[2]] && property[match[2]])) {
            latex += property[match[2]].toTex(options);
          } else {
            throw new TypeError("Template: " + match[1] + "[" + match[2] + "] is not a Node.");
          }
        }
      }
    }
    latex += template.slice(inputPos);
    return latex;
  }
  class FunctionNode extends Node {
    constructor(fn, args) {
      super();
      if (typeof fn === "string") {
        fn = new SymbolNode(fn);
      }
      if (!isNode(fn))
        throw new TypeError('Node expected as parameter "fn"');
      if (!Array.isArray(args) || !args.every(isNode)) {
        throw new TypeError('Array containing Nodes expected for parameter "args"');
      }
      this.fn = fn;
      this.args = args || [];
    }
    get name() {
      return this.fn.name || "";
    }
    get type() {
      return name$11;
    }
    get isFunctionNode() {
      return true;
    }
    _compile(math2, argNames) {
      var evalArgs = this.args.map((arg) => arg._compile(math2, argNames));
      if (isSymbolNode(this.fn)) {
        var _name = this.fn.name;
        if (!argNames[_name]) {
          var fn = _name in math2 ? getSafeProperty(math2, _name) : void 0;
          var isRaw = typeof fn === "function" && fn.rawArgs === true;
          var resolveFn = (scope) => {
            var value;
            if (scope.has(_name)) {
              value = scope.get(_name);
            } else if (_name in math2) {
              value = getSafeProperty(math2, _name);
            } else {
              return FunctionNode.onUndefinedFunction(_name);
            }
            if (typeof value === "function") {
              return value;
            }
            throw new TypeError("'".concat(_name, "' is not a function; its value is:\n  ").concat(strin(value)));
          };
          if (isRaw) {
            var rawArgs = this.args;
            return function evalFunctionNode(scope, args, context) {
              var fn2 = resolveFn(scope);
              return fn2(rawArgs, math2, createSubScope(scope, args), scope);
            };
          } else {
            switch (evalArgs.length) {
              case 0:
                return function evalFunctionNode(scope, args, context) {
                  var fn2 = resolveFn(scope);
                  return fn2();
                };
              case 1:
                return function evalFunctionNode(scope, args, context) {
                  var fn2 = resolveFn(scope);
                  var evalArg0 = evalArgs[0];
                  return fn2(evalArg0(scope, args, context));
                };
              case 2:
                return function evalFunctionNode(scope, args, context) {
                  var fn2 = resolveFn(scope);
                  var evalArg0 = evalArgs[0];
                  var evalArg1 = evalArgs[1];
                  return fn2(evalArg0(scope, args, context), evalArg1(scope, args, context));
                };
              default:
                return function evalFunctionNode(scope, args, context) {
                  var fn2 = resolveFn(scope);
                  var values2 = evalArgs.map((evalArg) => evalArg(scope, args, context));
                  return fn2(...values2);
                };
            }
          }
        } else {
          var _rawArgs = this.args;
          return function evalFunctionNode(scope, args, context) {
            var fn2 = args[_name];
            if (typeof fn2 !== "function") {
              throw new TypeError("Argument '".concat(_name, "' was not a function; received: ").concat(strin(fn2)));
            }
            if (fn2.rawArgs) {
              return fn2(_rawArgs, math2, createSubScope(scope, args), scope);
            } else {
              var values2 = evalArgs.map((evalArg) => evalArg(scope, args, context));
              return fn2.apply(fn2, values2);
            }
          };
        }
      } else if (isAccessorNode(this.fn) && isIndexNode(this.fn.index) && this.fn.index.isObjectProperty()) {
        var evalObject = this.fn.object._compile(math2, argNames);
        var prop = this.fn.index.getObjectProperty();
        var _rawArgs2 = this.args;
        return function evalFunctionNode(scope, args, context) {
          var object = evalObject(scope, args, context);
          validateSafeMethod(object, prop);
          var isRaw2 = object[prop] && object[prop].rawArgs;
          if (isRaw2) {
            return object[prop](_rawArgs2, math2, createSubScope(scope, args), scope);
          } else {
            var values2 = evalArgs.map((evalArg) => evalArg(scope, args, context));
            return object[prop].apply(object, values2);
          }
        };
      } else {
        var fnExpr = this.fn.toString();
        var evalFn = this.fn._compile(math2, argNames);
        var _rawArgs3 = this.args;
        return function evalFunctionNode(scope, args, context) {
          var fn2 = evalFn(scope, args, context);
          if (typeof fn2 !== "function") {
            throw new TypeError("Expression '".concat(fnExpr, "' did not evaluate to a function; value is:") + "\n  ".concat(strin(fn2)));
          }
          if (fn2.rawArgs) {
            return fn2(_rawArgs3, math2, createSubScope(scope, args), scope);
          } else {
            var values2 = evalArgs.map((evalArg) => evalArg(scope, args, context));
            return fn2.apply(fn2, values2);
          }
        };
      }
    }
    forEach(callback) {
      callback(this.fn, "fn", this);
      for (var i = 0; i < this.args.length; i++) {
        callback(this.args[i], "args[" + i + "]", this);
      }
    }
    map(callback) {
      var fn = this._ifNode(callback(this.fn, "fn", this));
      var args = [];
      for (var i = 0; i < this.args.length; i++) {
        args[i] = this._ifNode(callback(this.args[i], "args[" + i + "]", this));
      }
      return new FunctionNode(fn, args);
    }
    clone() {
      return new FunctionNode(this.fn, this.args.slice(0));
    }
    toString(options) {
      var customString;
      var name2 = this.fn.toString(options);
      if (options && typeof options.handler === "object" && hasOwnProperty$1(options.handler, name2)) {
        customString = options.handler[name2](this, options);
      }
      if (typeof customString !== "undefined") {
        return customString;
      }
      return super.toString(options);
    }
    _toString(options) {
      var args = this.args.map(function(arg) {
        return arg.toString(options);
      });
      var fn = isFunctionAssignmentNode(this.fn) ? "(" + this.fn.toString(options) + ")" : this.fn.toString(options);
      return fn + "(" + args.join(", ") + ")";
    }
    toJSON() {
      return {
        mathjs: name$11,
        fn: this.fn,
        args: this.args
      };
    }
    toHTML(options) {
      var args = this.args.map(function(arg) {
        return arg.toHTML(options);
      });
      return '<span class="math-function">' + escape(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + args.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>';
    }
    toTex(options) {
      var customTex;
      if (options && typeof options.handler === "object" && hasOwnProperty$1(options.handler, this.name)) {
        customTex = options.handler[this.name](this, options);
      }
      if (typeof customTex !== "undefined") {
        return customTex;
      }
      return super.toTex(options);
    }
    _toTex(options) {
      var args = this.args.map(function(arg) {
        return arg.toTex(options);
      });
      var latexConverter;
      if (latexFunctions[this.name]) {
        latexConverter = latexFunctions[this.name];
      }
      if (math[this.name] && (typeof math[this.name].toTex === "function" || typeof math[this.name].toTex === "object" || typeof math[this.name].toTex === "string")) {
        latexConverter = math[this.name].toTex;
      }
      var customToTex;
      switch (typeof latexConverter) {
        case "function":
          customToTex = latexConverter(this, options);
          break;
        case "string":
          customToTex = expandTemplate(latexConverter, this, options);
          break;
        case "object":
          switch (typeof latexConverter[args.length]) {
            case "function":
              customToTex = latexConverter[args.length](this, options);
              break;
            case "string":
              customToTex = expandTemplate(latexConverter[args.length], this, options);
              break;
          }
      }
      if (typeof customToTex !== "undefined") {
        return customToTex;
      }
      return expandTemplate(defaultTemplate, this, options);
    }
    getIdentifier() {
      return this.type + ":" + this.name;
    }
  }
  defineProperty(FunctionNode, "name", name$11);
  defineProperty(FunctionNode, "onUndefinedFunction", function(name2) {
    throw new Error("Undefined function " + name2);
  });
  defineProperty(FunctionNode, "fromJSON", function(json) {
    return new FunctionNode(json.fn, json.args);
  });
  return FunctionNode;
}, {
  isClass: true,
  isNode: true
});
var name$12 = "parse";
var dependencies$12 = ["typed", "numeric", "config", "AccessorNode", "ArrayNode", "AssignmentNode", "BlockNode", "ConditionalNode", "ConstantNode", "FunctionAssignmentNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "RangeNode", "RelationalNode", "SymbolNode"];
var createParse = /* @__PURE__ */ factory(name$12, dependencies$12, (_ref) => {
  var {
    typed,
    numeric: numeric2,
    config: config3,
    AccessorNode,
    ArrayNode,
    AssignmentNode,
    BlockNode,
    ConditionalNode,
    ConstantNode,
    FunctionAssignmentNode,
    FunctionNode,
    IndexNode,
    ObjectNode,
    OperatorNode,
    ParenthesisNode,
    RangeNode,
    RelationalNode,
    SymbolNode
  } = _ref;
  var parse = typed(name$12, {
    string: function string(expression) {
      return parseStart(expression, {});
    },
    "Array | Matrix": function ArrayMatrix(expressions) {
      return parseMultiple(expressions, {});
    },
    "string, Object": function stringObject(expression, options) {
      var extraNodes = options.nodes !== void 0 ? options.nodes : {};
      return parseStart(expression, extraNodes);
    },
    "Array | Matrix, Object": parseMultiple
  });
  function parseMultiple(expressions) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var extraNodes = options.nodes !== void 0 ? options.nodes : {};
    return deepMap(expressions, function(elem) {
      if (typeof elem !== "string")
        throw new TypeError("String expected");
      return parseStart(elem, extraNodes);
    });
  }
  var TOKENTYPE = {
    NULL: 0,
    DELIMITER: 1,
    NUMBER: 2,
    SYMBOL: 3,
    UNKNOWN: 4
  };
  var DELIMITERS = {
    ",": true,
    "(": true,
    ")": true,
    "[": true,
    "]": true,
    "{": true,
    "}": true,
    '"': true,
    "'": true,
    ";": true,
    "+": true,
    "-": true,
    "*": true,
    ".*": true,
    "/": true,
    "./": true,
    "%": true,
    "^": true,
    ".^": true,
    "~": true,
    "!": true,
    "&": true,
    "|": true,
    "^|": true,
    "=": true,
    ":": true,
    "?": true,
    "==": true,
    "!=": true,
    "<": true,
    ">": true,
    "<=": true,
    ">=": true,
    "<<": true,
    ">>": true,
    ">>>": true
  };
  var NAMED_DELIMITERS = {
    mod: true,
    to: true,
    in: true,
    and: true,
    xor: true,
    or: true,
    not: true
  };
  var CONSTANTS = {
    true: true,
    false: false,
    null: null,
    undefined: void 0
  };
  var NUMERIC_CONSTANTS = ["NaN", "Infinity"];
  function initialState() {
    return {
      extraNodes: {},
      expression: "",
      comment: "",
      index: 0,
      token: "",
      tokenType: TOKENTYPE.NULL,
      nestingLevel: 0,
      conditionalLevel: null
    };
  }
  function currentString(state, length) {
    return state.expression.substr(state.index, length);
  }
  function currentCharacter(state) {
    return currentString(state, 1);
  }
  function next(state) {
    state.index++;
  }
  function prevCharacter(state) {
    return state.expression.charAt(state.index - 1);
  }
  function nextCharacter(state) {
    return state.expression.charAt(state.index + 1);
  }
  function getToken(state) {
    state.tokenType = TOKENTYPE.NULL;
    state.token = "";
    state.comment = "";
    while (true) {
      if (currentCharacter(state) === "#") {
        while (currentCharacter(state) !== "\n" && currentCharacter(state) !== "") {
          state.comment += currentCharacter(state);
          next(state);
        }
      }
      if (parse.isWhitespace(currentCharacter(state), state.nestingLevel)) {
        next(state);
      } else {
        break;
      }
    }
    if (currentCharacter(state) === "") {
      state.tokenType = TOKENTYPE.DELIMITER;
      return;
    }
    if (currentCharacter(state) === "\n" && !state.nestingLevel) {
      state.tokenType = TOKENTYPE.DELIMITER;
      state.token = currentCharacter(state);
      next(state);
      return;
    }
    var c1 = currentCharacter(state);
    var c2 = currentString(state, 2);
    var c3 = currentString(state, 3);
    if (c3.length === 3 && DELIMITERS[c3]) {
      state.tokenType = TOKENTYPE.DELIMITER;
      state.token = c3;
      next(state);
      next(state);
      next(state);
      return;
    }
    if (c2.length === 2 && DELIMITERS[c2]) {
      state.tokenType = TOKENTYPE.DELIMITER;
      state.token = c2;
      next(state);
      next(state);
      return;
    }
    if (DELIMITERS[c1]) {
      state.tokenType = TOKENTYPE.DELIMITER;
      state.token = c1;
      next(state);
      return;
    }
    if (parse.isDigitDot(c1)) {
      state.tokenType = TOKENTYPE.NUMBER;
      var _c = currentString(state, 2);
      if (_c === "0b" || _c === "0o" || _c === "0x") {
        state.token += currentCharacter(state);
        next(state);
        state.token += currentCharacter(state);
        next(state);
        while (parse.isHexDigit(currentCharacter(state))) {
          state.token += currentCharacter(state);
          next(state);
        }
        if (currentCharacter(state) === ".") {
          state.token += ".";
          next(state);
          while (parse.isHexDigit(currentCharacter(state))) {
            state.token += currentCharacter(state);
            next(state);
          }
        } else if (currentCharacter(state) === "i") {
          state.token += "i";
          next(state);
          while (parse.isDigit(currentCharacter(state))) {
            state.token += currentCharacter(state);
            next(state);
          }
        }
        return;
      }
      if (currentCharacter(state) === ".") {
        state.token += currentCharacter(state);
        next(state);
        if (!parse.isDigit(currentCharacter(state))) {
          state.tokenType = TOKENTYPE.DELIMITER;
          return;
        }
      } else {
        while (parse.isDigit(currentCharacter(state))) {
          state.token += currentCharacter(state);
          next(state);
        }
        if (parse.isDecimalMark(currentCharacter(state), nextCharacter(state))) {
          state.token += currentCharacter(state);
          next(state);
        }
      }
      while (parse.isDigit(currentCharacter(state))) {
        state.token += currentCharacter(state);
        next(state);
      }
      if (currentCharacter(state) === "E" || currentCharacter(state) === "e") {
        if (parse.isDigit(nextCharacter(state)) || nextCharacter(state) === "-" || nextCharacter(state) === "+") {
          state.token += currentCharacter(state);
          next(state);
          if (currentCharacter(state) === "+" || currentCharacter(state) === "-") {
            state.token += currentCharacter(state);
            next(state);
          }
          if (!parse.isDigit(currentCharacter(state))) {
            throw createSyntaxError(state, 'Digit expected, got "' + currentCharacter(state) + '"');
          }
          while (parse.isDigit(currentCharacter(state))) {
            state.token += currentCharacter(state);
            next(state);
          }
          if (parse.isDecimalMark(currentCharacter(state), nextCharacter(state))) {
            throw createSyntaxError(state, 'Digit expected, got "' + currentCharacter(state) + '"');
          }
        } else if (nextCharacter(state) === ".") {
          next(state);
          throw createSyntaxError(state, 'Digit expected, got "' + currentCharacter(state) + '"');
        }
      }
      return;
    }
    if (parse.isAlpha(currentCharacter(state), prevCharacter(state), nextCharacter(state))) {
      while (parse.isAlpha(currentCharacter(state), prevCharacter(state), nextCharacter(state)) || parse.isDigit(currentCharacter(state))) {
        state.token += currentCharacter(state);
        next(state);
      }
      if (hasOwnProperty$1(NAMED_DELIMITERS, state.token)) {
        state.tokenType = TOKENTYPE.DELIMITER;
      } else {
        state.tokenType = TOKENTYPE.SYMBOL;
      }
      return;
    }
    state.tokenType = TOKENTYPE.UNKNOWN;
    while (currentCharacter(state) !== "") {
      state.token += currentCharacter(state);
      next(state);
    }
    throw createSyntaxError(state, 'Syntax error in part "' + state.token + '"');
  }
  function getTokenSkipNewline(state) {
    do {
      getToken(state);
    } while (state.token === "\n");
  }
  function openParams(state) {
    state.nestingLevel++;
  }
  function closeParams(state) {
    state.nestingLevel--;
  }
  parse.isAlpha = function isAlpha(c, cPrev, cNext) {
    return parse.isValidLatinOrGreek(c) || parse.isValidMathSymbol(c, cNext) || parse.isValidMathSymbol(cPrev, c);
  };
  parse.isValidLatinOrGreek = function isValidLatinOrGreek(c) {
    return /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(c);
  };
  parse.isValidMathSymbol = function isValidMathSymbol(high, low) {
    return /^[\uD835]$/.test(high) && /^[\uDC00-\uDFFF]$/.test(low) && /^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(low);
  };
  parse.isWhitespace = function isWhitespace(c, nestingLevel) {
    return c === " " || c === "	" || c === "\n" && nestingLevel > 0;
  };
  parse.isDecimalMark = function isDecimalMark(c, cNext) {
    return c === "." && cNext !== "/" && cNext !== "*" && cNext !== "^";
  };
  parse.isDigitDot = function isDigitDot(c) {
    return c >= "0" && c <= "9" || c === ".";
  };
  parse.isDigit = function isDigit(c) {
    return c >= "0" && c <= "9";
  };
  parse.isHexDigit = function isHexDigit(c) {
    return c >= "0" && c <= "9" || c >= "a" && c <= "f" || c >= "A" && c <= "F";
  };
  function parseStart(expression, extraNodes) {
    var state = initialState();
    _extends_1(state, {
      expression,
      extraNodes
    });
    getToken(state);
    var node = parseBlock(state);
    if (state.token !== "") {
      if (state.tokenType === TOKENTYPE.DELIMITER) {
        throw createError(state, "Unexpected operator " + state.token);
      } else {
        throw createSyntaxError(state, 'Unexpected part "' + state.token + '"');
      }
    }
    return node;
  }
  function parseBlock(state) {
    var node;
    var blocks = [];
    var visible;
    if (state.token !== "" && state.token !== "\n" && state.token !== ";") {
      node = parseAssignment(state);
      if (state.comment) {
        node.comment = state.comment;
      }
    }
    while (state.token === "\n" || state.token === ";") {
      if (blocks.length === 0 && node) {
        visible = state.token !== ";";
        blocks.push({
          node,
          visible
        });
      }
      getToken(state);
      if (state.token !== "\n" && state.token !== ";" && state.token !== "") {
        node = parseAssignment(state);
        if (state.comment) {
          node.comment = state.comment;
        }
        visible = state.token !== ";";
        blocks.push({
          node,
          visible
        });
      }
    }
    if (blocks.length > 0) {
      return new BlockNode(blocks);
    } else {
      if (!node) {
        node = new ConstantNode(void 0);
        if (state.comment) {
          node.comment = state.comment;
        }
      }
      return node;
    }
  }
  function parseAssignment(state) {
    var name2, args, value, valid;
    var node = parseConditional(state);
    if (state.token === "=") {
      if (isSymbolNode(node)) {
        name2 = node.name;
        getTokenSkipNewline(state);
        value = parseAssignment(state);
        return new AssignmentNode(new SymbolNode(name2), value);
      } else if (isAccessorNode(node)) {
        getTokenSkipNewline(state);
        value = parseAssignment(state);
        return new AssignmentNode(node.object, node.index, value);
      } else if (isFunctionNode(node) && isSymbolNode(node.fn)) {
        valid = true;
        args = [];
        name2 = node.name;
        node.args.forEach(function(arg, index) {
          if (isSymbolNode(arg)) {
            args[index] = arg.name;
          } else {
            valid = false;
          }
        });
        if (valid) {
          getTokenSkipNewline(state);
          value = parseAssignment(state);
          return new FunctionAssignmentNode(name2, args, value);
        }
      }
      throw createSyntaxError(state, "Invalid left hand side of assignment operator =");
    }
    return node;
  }
  function parseConditional(state) {
    var node = parseLogicalOr(state);
    while (state.token === "?") {
      var prev = state.conditionalLevel;
      state.conditionalLevel = state.nestingLevel;
      getTokenSkipNewline(state);
      var condition = node;
      var trueExpr = parseAssignment(state);
      if (state.token !== ":")
        throw createSyntaxError(state, "False part of conditional expression expected");
      state.conditionalLevel = null;
      getTokenSkipNewline(state);
      var falseExpr = parseAssignment(state);
      node = new ConditionalNode(condition, trueExpr, falseExpr);
      state.conditionalLevel = prev;
    }
    return node;
  }
  function parseLogicalOr(state) {
    var node = parseLogicalXor(state);
    while (state.token === "or") {
      getTokenSkipNewline(state);
      node = new OperatorNode("or", "or", [node, parseLogicalXor(state)]);
    }
    return node;
  }
  function parseLogicalXor(state) {
    var node = parseLogicalAnd(state);
    while (state.token === "xor") {
      getTokenSkipNewline(state);
      node = new OperatorNode("xor", "xor", [node, parseLogicalAnd(state)]);
    }
    return node;
  }
  function parseLogicalAnd(state) {
    var node = parseBitwiseOr(state);
    while (state.token === "and") {
      getTokenSkipNewline(state);
      node = new OperatorNode("and", "and", [node, parseBitwiseOr(state)]);
    }
    return node;
  }
  function parseBitwiseOr(state) {
    var node = parseBitwiseXor(state);
    while (state.token === "|") {
      getTokenSkipNewline(state);
      node = new OperatorNode("|", "bitOr", [node, parseBitwiseXor(state)]);
    }
    return node;
  }
  function parseBitwiseXor(state) {
    var node = parseBitwiseAnd(state);
    while (state.token === "^|") {
      getTokenSkipNewline(state);
      node = new OperatorNode("^|", "bitXor", [node, parseBitwiseAnd(state)]);
    }
    return node;
  }
  function parseBitwiseAnd(state) {
    var node = parseRelational(state);
    while (state.token === "&") {
      getTokenSkipNewline(state);
      node = new OperatorNode("&", "bitAnd", [node, parseRelational(state)]);
    }
    return node;
  }
  function parseRelational(state) {
    var params = [parseShift(state)];
    var conditionals = [];
    var operators = {
      "==": "equal",
      "!=": "unequal",
      "<": "smaller",
      ">": "larger",
      "<=": "smallerEq",
      ">=": "largerEq"
    };
    while (hasOwnProperty$1(operators, state.token)) {
      var cond = {
        name: state.token,
        fn: operators[state.token]
      };
      conditionals.push(cond);
      getTokenSkipNewline(state);
      params.push(parseShift(state));
    }
    if (params.length === 1) {
      return params[0];
    } else if (params.length === 2) {
      return new OperatorNode(conditionals[0].name, conditionals[0].fn, params);
    } else {
      return new RelationalNode(conditionals.map((c) => c.fn), params);
    }
  }
  function parseShift(state) {
    var node, name2, fn, params;
    node = parseConversion(state);
    var operators = {
      "<<": "leftShift",
      ">>": "rightArithShift",
      ">>>": "rightLogShift"
    };
    while (hasOwnProperty$1(operators, state.token)) {
      name2 = state.token;
      fn = operators[name2];
      getTokenSkipNewline(state);
      params = [node, parseConversion(state)];
      node = new OperatorNode(name2, fn, params);
    }
    return node;
  }
  function parseConversion(state) {
    var node, name2, fn, params;
    node = parseRange(state);
    var operators = {
      to: "to",
      in: "to"
    };
    while (hasOwnProperty$1(operators, state.token)) {
      name2 = state.token;
      fn = operators[name2];
      getTokenSkipNewline(state);
      if (name2 === "in" && state.token === "") {
        node = new OperatorNode("*", "multiply", [node, new SymbolNode("in")], true);
      } else {
        params = [node, parseRange(state)];
        node = new OperatorNode(name2, fn, params);
      }
    }
    return node;
  }
  function parseRange(state) {
    var node;
    var params = [];
    if (state.token === ":") {
      node = new ConstantNode(1);
    } else {
      node = parseAddSubtract(state);
    }
    if (state.token === ":" && state.conditionalLevel !== state.nestingLevel) {
      params.push(node);
      while (state.token === ":" && params.length < 3) {
        getTokenSkipNewline(state);
        if (state.token === ")" || state.token === "]" || state.token === "," || state.token === "") {
          params.push(new SymbolNode("end"));
        } else {
          params.push(parseAddSubtract(state));
        }
      }
      if (params.length === 3) {
        node = new RangeNode(params[0], params[2], params[1]);
      } else {
        node = new RangeNode(params[0], params[1]);
      }
    }
    return node;
  }
  function parseAddSubtract(state) {
    var node, name2, fn, params;
    node = parseMultiplyDivide(state);
    var operators = {
      "+": "add",
      "-": "subtract"
    };
    while (hasOwnProperty$1(operators, state.token)) {
      name2 = state.token;
      fn = operators[name2];
      getTokenSkipNewline(state);
      var rightNode = parseMultiplyDivide(state);
      if (rightNode.isPercentage) {
        params = [node, new OperatorNode("*", "multiply", [node, rightNode])];
      } else {
        params = [node, rightNode];
      }
      node = new OperatorNode(name2, fn, params);
    }
    return node;
  }
  function parseMultiplyDivide(state) {
    var node, last, name2, fn;
    node = parseImplicitMultiplication(state);
    last = node;
    var operators = {
      "*": "multiply",
      ".*": "dotMultiply",
      "/": "divide",
      "./": "dotDivide"
    };
    while (true) {
      if (hasOwnProperty$1(operators, state.token)) {
        name2 = state.token;
        fn = operators[name2];
        getTokenSkipNewline(state);
        last = parseImplicitMultiplication(state);
        node = new OperatorNode(name2, fn, [node, last]);
      } else {
        break;
      }
    }
    return node;
  }
  function parseImplicitMultiplication(state) {
    var node, last;
    node = parseRule2(state);
    last = node;
    while (true) {
      if (state.tokenType === TOKENTYPE.SYMBOL || state.token === "in" && isConstantNode(node) || state.tokenType === TOKENTYPE.NUMBER && !isConstantNode(last) && (!isOperatorNode(last) || last.op === "!") || state.token === "(") {
        last = parseRule2(state);
        node = new OperatorNode("*", "multiply", [node, last], true);
      } else {
        break;
      }
    }
    return node;
  }
  function parseRule2(state) {
    var node = parsePercentage(state);
    var last = node;
    var tokenStates = [];
    while (true) {
      if (state.token === "/" && rule2Node(last)) {
        tokenStates.push(_extends_1({}, state));
        getTokenSkipNewline(state);
        if (state.tokenType === TOKENTYPE.NUMBER) {
          tokenStates.push(_extends_1({}, state));
          getTokenSkipNewline(state);
          if (state.tokenType === TOKENTYPE.SYMBOL || state.token === "(") {
            _extends_1(state, tokenStates.pop());
            tokenStates.pop();
            last = parsePercentage(state);
            node = new OperatorNode("/", "divide", [node, last]);
          } else {
            tokenStates.pop();
            _extends_1(state, tokenStates.pop());
            break;
          }
        } else {
          _extends_1(state, tokenStates.pop());
          break;
        }
      } else {
        break;
      }
    }
    return node;
  }
  function parsePercentage(state) {
    var node, name2, fn, params;
    node = parseUnary(state);
    var operators = {
      "%": "mod",
      mod: "mod"
    };
    while (hasOwnProperty$1(operators, state.token)) {
      name2 = state.token;
      fn = operators[name2];
      getTokenSkipNewline(state);
      if (name2 === "%" && state.tokenType === TOKENTYPE.DELIMITER && state.token !== "(") {
        node = new OperatorNode("/", "divide", [node, new ConstantNode(100)], false, true);
      } else {
        params = [node, parseUnary(state)];
        node = new OperatorNode(name2, fn, params);
      }
    }
    return node;
  }
  function parseUnary(state) {
    var name2, params, fn;
    var operators = {
      "-": "unaryMinus",
      "+": "unaryPlus",
      "~": "bitNot",
      not: "not"
    };
    if (hasOwnProperty$1(operators, state.token)) {
      fn = operators[state.token];
      name2 = state.token;
      getTokenSkipNewline(state);
      params = [parseUnary(state)];
      return new OperatorNode(name2, fn, params);
    }
    return parsePow(state);
  }
  function parsePow(state) {
    var node, name2, fn, params;
    node = parseLeftHandOperators(state);
    if (state.token === "^" || state.token === ".^") {
      name2 = state.token;
      fn = name2 === "^" ? "pow" : "dotPow";
      getTokenSkipNewline(state);
      params = [node, parseUnary(state)];
      node = new OperatorNode(name2, fn, params);
    }
    return node;
  }
  function parseLeftHandOperators(state) {
    var node, name2, fn, params;
    node = parseCustomNodes(state);
    var operators = {
      "!": "factorial",
      "'": "ctranspose"
    };
    while (hasOwnProperty$1(operators, state.token)) {
      name2 = state.token;
      fn = operators[name2];
      getToken(state);
      params = [node];
      node = new OperatorNode(name2, fn, params);
      node = parseAccessors(state, node);
    }
    return node;
  }
  function parseCustomNodes(state) {
    var params = [];
    if (state.tokenType === TOKENTYPE.SYMBOL && hasOwnProperty$1(state.extraNodes, state.token)) {
      var CustomNode = state.extraNodes[state.token];
      getToken(state);
      if (state.token === "(") {
        params = [];
        openParams(state);
        getToken(state);
        if (state.token !== ")") {
          params.push(parseAssignment(state));
          while (state.token === ",") {
            getToken(state);
            params.push(parseAssignment(state));
          }
        }
        if (state.token !== ")") {
          throw createSyntaxError(state, "Parenthesis ) expected");
        }
        closeParams(state);
        getToken(state);
      }
      return new CustomNode(params);
    }
    return parseSymbol(state);
  }
  function parseSymbol(state) {
    var node, name2;
    if (state.tokenType === TOKENTYPE.SYMBOL || state.tokenType === TOKENTYPE.DELIMITER && state.token in NAMED_DELIMITERS) {
      name2 = state.token;
      getToken(state);
      if (hasOwnProperty$1(CONSTANTS, name2)) {
        node = new ConstantNode(CONSTANTS[name2]);
      } else if (NUMERIC_CONSTANTS.indexOf(name2) !== -1) {
        node = new ConstantNode(numeric2(name2, "number"));
      } else {
        node = new SymbolNode(name2);
      }
      node = parseAccessors(state, node);
      return node;
    }
    return parseDoubleQuotesString(state);
  }
  function parseAccessors(state, node, types) {
    var params;
    while ((state.token === "(" || state.token === "[" || state.token === ".") && (!types || types.indexOf(state.token) !== -1)) {
      params = [];
      if (state.token === "(") {
        if (isSymbolNode(node) || isAccessorNode(node)) {
          openParams(state);
          getToken(state);
          if (state.token !== ")") {
            params.push(parseAssignment(state));
            while (state.token === ",") {
              getToken(state);
              params.push(parseAssignment(state));
            }
          }
          if (state.token !== ")") {
            throw createSyntaxError(state, "Parenthesis ) expected");
          }
          closeParams(state);
          getToken(state);
          node = new FunctionNode(node, params);
        } else {
          return node;
        }
      } else if (state.token === "[") {
        openParams(state);
        getToken(state);
        if (state.token !== "]") {
          params.push(parseAssignment(state));
          while (state.token === ",") {
            getToken(state);
            params.push(parseAssignment(state));
          }
        }
        if (state.token !== "]") {
          throw createSyntaxError(state, "Parenthesis ] expected");
        }
        closeParams(state);
        getToken(state);
        node = new AccessorNode(node, new IndexNode(params));
      } else {
        getToken(state);
        if (state.tokenType !== TOKENTYPE.SYMBOL) {
          throw createSyntaxError(state, "Property name expected after dot");
        }
        params.push(new ConstantNode(state.token));
        getToken(state);
        var dotNotation = true;
        node = new AccessorNode(node, new IndexNode(params, dotNotation));
      }
    }
    return node;
  }
  function parseDoubleQuotesString(state) {
    var node, str;
    if (state.token === '"') {
      str = parseDoubleQuotesStringToken(state);
      node = new ConstantNode(str);
      node = parseAccessors(state, node);
      return node;
    }
    return parseSingleQuotesString(state);
  }
  function parseDoubleQuotesStringToken(state) {
    var str = "";
    while (currentCharacter(state) !== "" && currentCharacter(state) !== '"') {
      if (currentCharacter(state) === "\\") {
        str += currentCharacter(state);
        next(state);
      }
      str += currentCharacter(state);
      next(state);
    }
    getToken(state);
    if (state.token !== '"') {
      throw createSyntaxError(state, 'End of string " expected');
    }
    getToken(state);
    return JSON.parse('"' + str + '"');
  }
  function parseSingleQuotesString(state) {
    var node, str;
    if (state.token === "'") {
      str = parseSingleQuotesStringToken(state);
      node = new ConstantNode(str);
      node = parseAccessors(state, node);
      return node;
    }
    return parseMatrix(state);
  }
  function parseSingleQuotesStringToken(state) {
    var str = "";
    while (currentCharacter(state) !== "" && currentCharacter(state) !== "'") {
      if (currentCharacter(state) === "\\") {
        str += currentCharacter(state);
        next(state);
      }
      str += currentCharacter(state);
      next(state);
    }
    getToken(state);
    if (state.token !== "'") {
      throw createSyntaxError(state, "End of string ' expected");
    }
    getToken(state);
    return JSON.parse('"' + str + '"');
  }
  function parseMatrix(state) {
    var array, params, rows, cols;
    if (state.token === "[") {
      openParams(state);
      getToken(state);
      if (state.token !== "]") {
        var row = parseRow(state);
        if (state.token === ";") {
          rows = 1;
          params = [row];
          while (state.token === ";") {
            getToken(state);
            params[rows] = parseRow(state);
            rows++;
          }
          if (state.token !== "]") {
            throw createSyntaxError(state, "End of matrix ] expected");
          }
          closeParams(state);
          getToken(state);
          cols = params[0].items.length;
          for (var r = 1; r < rows; r++) {
            if (params[r].items.length !== cols) {
              throw createError(state, "Column dimensions mismatch (" + params[r].items.length + " !== " + cols + ")");
            }
          }
          array = new ArrayNode(params);
        } else {
          if (state.token !== "]") {
            throw createSyntaxError(state, "End of matrix ] expected");
          }
          closeParams(state);
          getToken(state);
          array = row;
        }
      } else {
        closeParams(state);
        getToken(state);
        array = new ArrayNode([]);
      }
      return parseAccessors(state, array);
    }
    return parseObject(state);
  }
  function parseRow(state) {
    var params = [parseAssignment(state)];
    var len = 1;
    while (state.token === ",") {
      getToken(state);
      params[len] = parseAssignment(state);
      len++;
    }
    return new ArrayNode(params);
  }
  function parseObject(state) {
    if (state.token === "{") {
      openParams(state);
      var key;
      var properties2 = {};
      do {
        getToken(state);
        if (state.token !== "}") {
          if (state.token === '"') {
            key = parseDoubleQuotesStringToken(state);
          } else if (state.token === "'") {
            key = parseSingleQuotesStringToken(state);
          } else if (state.tokenType === TOKENTYPE.SYMBOL || state.tokenType === TOKENTYPE.DELIMITER && state.token in NAMED_DELIMITERS) {
            key = state.token;
            getToken(state);
          } else {
            throw createSyntaxError(state, "Symbol or string expected as object key");
          }
          if (state.token !== ":") {
            throw createSyntaxError(state, "Colon : expected after object key");
          }
          getToken(state);
          properties2[key] = parseAssignment(state);
        }
      } while (state.token === ",");
      if (state.token !== "}") {
        throw createSyntaxError(state, "Comma , or bracket } expected after object value");
      }
      closeParams(state);
      getToken(state);
      var node = new ObjectNode(properties2);
      node = parseAccessors(state, node);
      return node;
    }
    return parseNumber(state);
  }
  function parseNumber(state) {
    var numberStr;
    if (state.tokenType === TOKENTYPE.NUMBER) {
      numberStr = state.token;
      getToken(state);
      return new ConstantNode(numeric2(numberStr, config3.number));
    }
    return parseParentheses(state);
  }
  function parseParentheses(state) {
    var node;
    if (state.token === "(") {
      openParams(state);
      getToken(state);
      node = parseAssignment(state);
      if (state.token !== ")") {
        throw createSyntaxError(state, "Parenthesis ) expected");
      }
      closeParams(state);
      getToken(state);
      node = new ParenthesisNode(node);
      node = parseAccessors(state, node);
      return node;
    }
    return parseEnd(state);
  }
  function parseEnd(state) {
    if (state.token === "") {
      throw createSyntaxError(state, "Unexpected end of expression");
    } else {
      throw createSyntaxError(state, "Value expected");
    }
  }
  function col(state) {
    return state.index - state.token.length + 1;
  }
  function createSyntaxError(state, message) {
    var c = col(state);
    var error = new SyntaxError(message + " (char " + c + ")");
    error.char = c;
    return error;
  }
  function createError(state, message) {
    var c = col(state);
    var error = new SyntaxError(message + " (char " + c + ")");
    error.char = c;
    return error;
  }
  typed.addConversion({
    from: "string",
    to: "Node",
    convert: parse
  });
  return parse;
});
var name$13 = "compile";
var dependencies$13 = ["typed", "parse"];
var createCompile = /* @__PURE__ */ factory(name$13, dependencies$13, (_ref) => {
  var {
    typed,
    parse
  } = _ref;
  return typed(name$13, {
    string: function string(expr) {
      return parse(expr).compile();
    },
    "Array | Matrix": function ArrayMatrix(expr) {
      return deepMap(expr, function(entry) {
        return parse(entry).compile();
      });
    }
  });
});
var name$14 = "evaluate";
var dependencies$14 = ["typed", "parse"];
var createEvaluate = /* @__PURE__ */ factory(name$14, dependencies$14, (_ref) => {
  var {
    typed,
    parse
  } = _ref;
  return typed(name$14, {
    string: function string(expr) {
      var scope = createEmptyMap();
      return parse(expr).compile().evaluate(scope);
    },
    "string, Map | Object": function stringMapObject(expr, scope) {
      return parse(expr).compile().evaluate(scope);
    },
    "Array | Matrix": function ArrayMatrix(expr) {
      var scope = createEmptyMap();
      return deepMap(expr, function(entry) {
        return parse(entry).compile().evaluate(scope);
      });
    },
    "Array | Matrix, Map | Object": function ArrayMatrixMapObject(expr, scope) {
      return deepMap(expr, function(entry) {
        return parse(entry).compile().evaluate(scope);
      });
    }
  });
});
var name$15 = "Parser";
var dependencies$15 = ["evaluate"];
var createParserClass = /* @__PURE__ */ factory(name$15, dependencies$15, (_ref) => {
  var {
    evaluate
  } = _ref;
  function Parser() {
    if (!(this instanceof Parser)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
    Object.defineProperty(this, "scope", {
      value: createEmptyMap(),
      writable: false
    });
  }
  Parser.prototype.type = "Parser";
  Parser.prototype.isParser = true;
  Parser.prototype.evaluate = function(expr) {
    return evaluate(expr, this.scope);
  };
  Parser.prototype.get = function(name2) {
    if (this.scope.has(name2)) {
      return this.scope.get(name2);
    }
  };
  Parser.prototype.getAll = function() {
    return toObject(this.scope);
  };
  Parser.prototype.getAllAsMap = function() {
    return this.scope;
  };
  Parser.prototype.set = function(name2, value) {
    this.scope.set(name2, value);
    return value;
  };
  Parser.prototype.remove = function(name2) {
    this.scope.delete(name2);
  };
  Parser.prototype.clear = function() {
    this.scope.clear();
  };
  return Parser;
}, {
  isClass: true
});
var name$16 = "parser";
var dependencies$16 = ["typed", "Parser"];
var createParser = /* @__PURE__ */ factory(name$16, dependencies$16, (_ref) => {
  var {
    typed,
    Parser
  } = _ref;
  return typed(name$16, {
    "": function _() {
      return new Parser();
    }
  });
});
var name$17 = "Help";
var dependencies$17 = ["parse"];
var createHelpClass = /* @__PURE__ */ factory(name$17, dependencies$17, (_ref) => {
  var {
    parse
  } = _ref;
  function Help(doc) {
    if (!(this instanceof Help)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
    if (!doc)
      throw new Error('Argument "doc" missing');
    this.doc = doc;
  }
  Help.prototype.type = "Help";
  Help.prototype.isHelp = true;
  Help.prototype.toString = function() {
    var doc = this.doc || {};
    var desc = "\n";
    if (doc.name) {
      desc += "Name: " + doc.name + "\n\n";
    }
    if (doc.category) {
      desc += "Category: " + doc.category + "\n\n";
    }
    if (doc.description) {
      desc += "Description:\n    " + doc.description + "\n\n";
    }
    if (doc.syntax) {
      desc += "Syntax:\n    " + doc.syntax.join("\n    ") + "\n\n";
    }
    if (doc.examples) {
      desc += "Examples:\n";
      var scope = {};
      for (var i = 0; i < doc.examples.length; i++) {
        var expr = doc.examples[i];
        desc += "    " + expr + "\n";
        var res = void 0;
        try {
          res = parse(expr).compile().evaluate(scope);
        } catch (e2) {
          res = e2;
        }
        if (res !== void 0 && !isHelp(res)) {
          desc += "        " + format$2(res, {
            precision: 14
          }) + "\n";
        }
      }
      desc += "\n";
    }
    if (doc.mayThrow && doc.mayThrow.length) {
      desc += "Throws: " + doc.mayThrow.join(", ") + "\n\n";
    }
    if (doc.seealso && doc.seealso.length) {
      desc += "See also: " + doc.seealso.join(", ") + "\n";
    }
    return desc;
  };
  Help.prototype.toJSON = function() {
    var obj = clone(this.doc);
    obj.mathjs = "Help";
    return obj;
  };
  Help.fromJSON = function(json) {
    var doc = {};
    Object.keys(json).filter((prop) => prop !== "mathjs").forEach((prop) => {
      doc[prop] = json[prop];
    });
    return new Help(doc);
  };
  Help.prototype.valueOf = Help.prototype.toString;
  return Help;
}, {
  isClass: true
});
var name$18 = "Chain";
var dependencies$18 = ["?on", "math", "typed"];
var createChainClass = /* @__PURE__ */ factory(name$18, dependencies$18, (_ref) => {
  var {
    on,
    math,
    typed
  } = _ref;
  function Chain(value) {
    if (!(this instanceof Chain)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
    if (isChain(value)) {
      this.value = value.value;
    } else {
      this.value = value;
    }
  }
  Chain.prototype.type = "Chain";
  Chain.prototype.isChain = true;
  Chain.prototype.done = function() {
    return this.value;
  };
  Chain.prototype.valueOf = function() {
    return this.value;
  };
  Chain.prototype.toString = function() {
    return format$2(this.value);
  };
  Chain.prototype.toJSON = function() {
    return {
      mathjs: "Chain",
      value: this.value
    };
  };
  Chain.fromJSON = function(json) {
    return new Chain(json.value);
  };
  function createProxy(name2, fn) {
    if (typeof fn === "function") {
      Chain.prototype[name2] = chainify(fn);
    }
  }
  function createLazyProxy(name2, resolver) {
    lazy(Chain.prototype, name2, function outerResolver() {
      var fn = resolver();
      if (typeof fn === "function") {
        return chainify(fn);
      }
      return void 0;
    });
  }
  function chainify(fn) {
    return function() {
      if (arguments.length === 0) {
        return new Chain(fn(this.value));
      }
      var args = [this.value];
      for (var i = 0; i < arguments.length; i++) {
        args[i + 1] = arguments[i];
      }
      if (typed.isTypedFunction(fn)) {
        var sigObject = typed.resolve(fn, args);
        if (sigObject.params.length === 1) {
          throw new Error("chain function " + fn.name + " cannot match rest parameter between chain value and additional arguments.");
        }
        return new Chain(sigObject.implementation.apply(fn, args));
      }
      return new Chain(fn.apply(fn, args));
    };
  }
  Chain.createProxy = function(arg0, arg1) {
    if (typeof arg0 === "string") {
      createProxy(arg0, arg1);
    } else {
      var _loop = function _loop2(_name2) {
        if (hasOwnProperty$1(arg0, _name2) && excludedNames[_name2] === void 0) {
          createLazyProxy(_name2, () => arg0[_name2]);
        }
      };
      for (var _name in arg0) {
        _loop(_name);
      }
    }
  };
  var excludedNames = {
    expression: true,
    docs: true,
    type: true,
    classes: true,
    json: true,
    error: true,
    isChain: true
  };
  Chain.createProxy(math);
  if (on) {
    on("import", function(name2, resolver, path) {
      if (!path) {
        createLazyProxy(name2, resolver);
      }
    });
  }
  return Chain;
}, {
  isClass: true
});
var eDocs = {
  name: "e",
  category: "Constants",
  syntax: ["e"],
  description: "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828",
  examples: ["e", "e ^ 2", "exp(2)", "log(e)"],
  seealso: ["exp"]
};
var falseDocs = {
  name: "false",
  category: "Constants",
  syntax: ["false"],
  description: "Boolean value false",
  examples: ["false"],
  seealso: ["true"]
};
var iDocs = {
  name: "i",
  category: "Constants",
  syntax: ["i"],
  description: "Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.",
  examples: ["i", "i * i", "sqrt(-1)"],
  seealso: []
};
var InfinityDocs = {
  name: "Infinity",
  category: "Constants",
  syntax: ["Infinity"],
  description: "Infinity, a number which is larger than the maximum number that can be handled by a floating point number.",
  examples: ["Infinity", "1 / 0"],
  seealso: []
};
var LN10Docs = {
  name: "LN10",
  category: "Constants",
  syntax: ["LN10"],
  description: "Returns the natural logarithm of 10, approximately equal to 2.302",
  examples: ["LN10", "log(10)"],
  seealso: []
};
var LN2Docs = {
  name: "LN2",
  category: "Constants",
  syntax: ["LN2"],
  description: "Returns the natural logarithm of 2, approximately equal to 0.693",
  examples: ["LN2", "log(2)"],
  seealso: []
};
var LOG10EDocs = {
  name: "LOG10E",
  category: "Constants",
  syntax: ["LOG10E"],
  description: "Returns the base-10 logarithm of E, approximately equal to 0.434",
  examples: ["LOG10E", "log(e, 10)"],
  seealso: []
};
var LOG2EDocs = {
  name: "LOG2E",
  category: "Constants",
  syntax: ["LOG2E"],
  description: "Returns the base-2 logarithm of E, approximately equal to 1.442",
  examples: ["LOG2E", "log(e, 2)"],
  seealso: []
};
var NaNDocs = {
  name: "NaN",
  category: "Constants",
  syntax: ["NaN"],
  description: "Not a number",
  examples: ["NaN", "0 / 0"],
  seealso: []
};
var nullDocs = {
  name: "null",
  category: "Constants",
  syntax: ["null"],
  description: "Value null",
  examples: ["null"],
  seealso: ["true", "false"]
};
var phiDocs = {
  name: "phi",
  category: "Constants",
  syntax: ["phi"],
  description: "Phi is the golden ratio. Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. Phi is defined as `(1 + sqrt(5)) / 2` and is approximately 1.618034...",
  examples: ["phi"],
  seealso: []
};
var piDocs = {
  name: "pi",
  category: "Constants",
  syntax: ["pi"],
  description: "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159",
  examples: ["pi", "sin(pi/2)"],
  seealso: ["tau"]
};
var SQRT12Docs = {
  name: "SQRT1_2",
  category: "Constants",
  syntax: ["SQRT1_2"],
  description: "Returns the square root of 1/2, approximately equal to 0.707",
  examples: ["SQRT1_2", "sqrt(1/2)"],
  seealso: []
};
var SQRT2Docs = {
  name: "SQRT2",
  category: "Constants",
  syntax: ["SQRT2"],
  description: "Returns the square root of 2, approximately equal to 1.414",
  examples: ["SQRT2", "sqrt(2)"],
  seealso: []
};
var tauDocs = {
  name: "tau",
  category: "Constants",
  syntax: ["tau"],
  description: "Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.",
  examples: ["tau", "2 * pi"],
  seealso: ["pi"]
};
var trueDocs = {
  name: "true",
  category: "Constants",
  syntax: ["true"],
  description: "Boolean value true",
  examples: ["true"],
  seealso: ["false"]
};
var versionDocs = {
  name: "version",
  category: "Constants",
  syntax: ["version"],
  description: "A string with the version number of math.js",
  examples: ["version"],
  seealso: []
};
var bignumberDocs = {
  name: "bignumber",
  category: "Construction",
  syntax: ["bignumber(x)"],
  description: "Create a big number from a number or string.",
  examples: ["0.1 + 0.2", "bignumber(0.1) + bignumber(0.2)", 'bignumber("7.2")', 'bignumber("7.2e500")', "bignumber([0.1, 0.2, 0.3])"],
  seealso: ["boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
};
var booleanDocs = {
  name: "boolean",
  category: "Construction",
  syntax: ["x", "boolean(x)"],
  description: "Convert a string or number into a boolean.",
  examples: ["boolean(0)", "boolean(1)", "boolean(3)", 'boolean("true")', 'boolean("false")', "boolean([1, 0, 1, 1])"],
  seealso: ["bignumber", "complex", "index", "matrix", "number", "string", "unit"]
};
var complexDocs = {
  name: "complex",
  category: "Construction",
  syntax: ["complex()", "complex(re, im)", "complex(string)"],
  description: "Create a complex number.",
  examples: ["complex()", "complex(2, 3)", 'complex("7 - 2i")'],
  seealso: ["bignumber", "boolean", "index", "matrix", "number", "string", "unit"]
};
var createUnitDocs = {
  name: "createUnit",
  category: "Construction",
  syntax: ["createUnit(definitions)", "createUnit(name, definition)"],
  description: "Create a user-defined unit and register it with the Unit type.",
  examples: ['createUnit("foo")', 'createUnit("knot", {definition: "0.514444444 m/s", aliases: ["knots", "kt", "kts"]})', 'createUnit("mph", "1 mile/hour")'],
  seealso: ["unit", "splitUnit"]
};
var fractionDocs = {
  name: "fraction",
  category: "Construction",
  syntax: ["fraction(num)", "fraction(matrix)", "fraction(num,den)", "fraction({n: num, d: den})"],
  description: "Create a fraction from a number or from integer numerator and denominator.",
  examples: ["fraction(0.125)", "fraction(1, 3) + fraction(2, 5)", "fraction({n: 333, d: 53})", "fraction([sqrt(9), sqrt(10), sqrt(11)])"],
  seealso: ["bignumber", "boolean", "complex", "index", "matrix", "string", "unit"]
};
var indexDocs = {
  name: "index",
  category: "Construction",
  syntax: ["[start]", "[start:end]", "[start:step:end]", "[start1, start 2, ...]", "[start1:end1, start2:end2, ...]", "[start1:step1:end1, start2:step2:end2, ...]"],
  description: "Create an index to get or replace a subset of a matrix",
  examples: ["[1, 2, 3]", "A = [1, 2, 3; 4, 5, 6]", "A[1, :]", "A[1, 2] = 50", "A[1:2, 1:2] = ones(2, 2)"],
  seealso: ["bignumber", "boolean", "complex", "matrix,", "number", "range", "string", "unit"]
};
var matrixDocs = {
  name: "matrix",
  category: "Construction",
  syntax: ["[]", "[a1, b1, ...; a2, b2, ...]", "matrix()", 'matrix("dense")', "matrix([...])"],
  description: "Create a matrix.",
  examples: ["[]", "[1, 2, 3]", "[1, 2, 3; 4, 5, 6]", "matrix()", "matrix([3, 4])", 'matrix([3, 4; 5, 6], "sparse")', 'matrix([3, 4; 5, 6], "sparse", "number")'],
  seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "sparse"]
};
var numberDocs = {
  name: "number",
  category: "Construction",
  syntax: ["x", "number(x)", "number(unit, valuelessUnit)"],
  description: "Create a number or convert a string or boolean into a number.",
  examples: ["2", "2e3", "4.05", "number(2)", 'number("7.2")', "number(true)", "number([true, false, true, true])", 'number(unit("52cm"), "m")'],
  seealso: ["bignumber", "boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
};
var sparseDocs = {
  name: "sparse",
  category: "Construction",
  syntax: ["sparse()", "sparse([a1, b1, ...; a1, b2, ...])", 'sparse([a1, b1, ...; a1, b2, ...], "number")'],
  description: "Create a sparse matrix.",
  examples: ["sparse()", "sparse([3, 4; 5, 6])", 'sparse([3, 0; 5, 0], "number")'],
  seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "matrix"]
};
var splitUnitDocs = {
  name: "splitUnit",
  category: "Construction",
  syntax: ["splitUnit(unit: Unit, parts: Unit[])"],
  description: "Split a unit in an array of units whose sum is equal to the original unit.",
  examples: ['splitUnit(1 m, ["feet", "inch"])'],
  seealso: ["unit", "createUnit"]
};
var stringDocs = {
  name: "string",
  category: "Construction",
  syntax: ['"text"', "string(x)"],
  description: "Create a string or convert a value to a string",
  examples: ['"Hello World!"', "string(4.2)", "string(3 + 2i)"],
  seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "unit"]
};
var unitDocs = {
  name: "unit",
  category: "Construction",
  syntax: ["value unit", "unit(value, unit)", "unit(string)"],
  description: "Create a unit.",
  examples: ["5.5 mm", "3 inch", 'unit(7.1, "kilogram")', 'unit("23 deg")'],
  seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "string"]
};
var configDocs = {
  name: "config",
  category: "Core",
  syntax: ["config()", "config(options)"],
  description: "Get configuration or change configuration.",
  examples: ["config()", "1/3 + 1/4", 'config({number: "Fraction"})', "1/3 + 1/4"],
  seealso: []
};
var importDocs = {
  name: "import",
  category: "Core",
  syntax: ["import(functions)", "import(functions, options)"],
  description: "Import functions or constants from an object.",
  examples: ["import({myFn: f(x)=x^2, myConstant: 32 })", "myFn(2)", "myConstant"],
  seealso: []
};
var typedDocs = {
  name: "typed",
  category: "Core",
  syntax: ["typed(signatures)", "typed(name, signatures)"],
  description: "Create a typed function.",
  examples: ['double = typed({ "number": f(x)=x+x })', "double(2)", 'double("hello")'],
  seealso: []
};
var derivativeDocs = {
  name: "derivative",
  category: "Algebra",
  syntax: ["derivative(expr, variable)", "derivative(expr, variable, {simplify: boolean})"],
  description: "Takes the derivative of an expression expressed in parser Nodes. The derivative will be taken over the supplied variable in the second parameter. If there are multiple variables in the expression, it will return a partial derivative.",
  examples: ['derivative("2x^3", "x")', 'derivative("2x^3", "x", {simplify: false})', 'derivative("2x^2 + 3x + 4", "x")', 'derivative("sin(2x)", "x")', 'f = parse("x^2 + x")', 'x = parse("x")', "df = derivative(f, x)", "df.evaluate({x: 3})"],
  seealso: ["simplify", "parse", "evaluate"]
};
var leafCountDocs = {
  name: "leafCount",
  category: "Algebra",
  syntax: ["leafCount(expr)"],
  description: "Computes the number of leaves in the parse tree of the given expression",
  examples: ['leafCount("e^(i*pi)-1")', 'leafCount(parse("{a: 22/7, b: 10^(1/2)}"))'],
  seealso: ["simplify"]
};
var lsolveDocs = {
  name: "lsolve",
  category: "Algebra",
  syntax: ["x=lsolve(L, b)"],
  description: "Finds one solution of the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.",
  examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"],
  seealso: ["lsolveAll", "lup", "lusolve", "usolve", "matrix", "sparse"]
};
var lsolveAllDocs = {
  name: "lsolveAll",
  category: "Algebra",
  syntax: ["x=lsolveAll(L, b)"],
  description: "Finds all solutions of the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.",
  examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"],
  seealso: ["lsolve", "lup", "lusolve", "usolve", "matrix", "sparse"]
};
var lupDocs = {
  name: "lup",
  category: "Algebra",
  syntax: ["lup(m)"],
  description: "Calculate the Matrix LU decomposition with partial pivoting. Matrix A is decomposed in three matrices (L, U, P) where P * A = L * U",
  examples: ["lup([[2, 1], [1, 4]])", "lup(matrix([[2, 1], [1, 4]]))", "lup(sparse([[2, 1], [1, 4]]))"],
  seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "slu", "qr"]
};
var lusolveDocs = {
  name: "lusolve",
  category: "Algebra",
  syntax: ["x=lusolve(A, b)", "x=lusolve(lu, b)"],
  description: "Solves the linear system A * x = b where A is an [n x n] matrix and b is a [n] column vector.",
  examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lusolve(a, b)"],
  seealso: ["lup", "slu", "lsolve", "usolve", "matrix", "sparse"]
};
var polynomialRootDocs = {
  name: "polynomialRoot",
  category: "Algebra",
  syntax: ["x=polynomialRoot(-6, 3)", "x=polynomialRoot(4, -4, 1)", "x=polynomialRoot(-8, 12, -6, 1)"],
  description: "Finds the roots of a univariate polynomial given by its coefficients starting from constant, linear, and so on, increasing in degree.",
  examples: ["a = polynomialRoot(-6, 11, -6 1)"],
  seealso: ["cbrt", "sqrt"]
};
var qrDocs = {
  name: "qr",
  category: "Algebra",
  syntax: ["qr(A)"],
  description: "Calculates the Matrix QR decomposition. Matrix `A` is decomposed in two matrices (`Q`, `R`) where `Q` is an orthogonal matrix and `R` is an upper triangular matrix.",
  examples: ["qr([[1, -1,  4], [1,  4, -2], [1,  4,  2], [1,  -1, 0]])"],
  seealso: ["lup", "slu", "matrix"]
};
var rationalizeDocs = {
  name: "rationalize",
  category: "Algebra",
  syntax: ["rationalize(expr)", "rationalize(expr, scope)", "rationalize(expr, scope, detailed)"],
  description: "Transform a rationalizable expression in a rational fraction. If rational fraction is one variable polynomial then converts the numerator and denominator in canonical form, with decreasing exponents, returning the coefficients of numerator.",
  examples: ['rationalize("2x/y - y/(x+1)")', 'rationalize("2x/y - y/(x+1)", true)'],
  seealso: ["simplify"]
};
var resolveDocs = {
  name: "resolve",
  category: "Algebra",
  syntax: ["resolve(node, scope)"],
  description: "Recursively substitute variables in an expression tree.",
  examples: ['resolve(parse("1 + x"), { x: 7 })', 'resolve(parse("size(text)"), { text: "Hello World" })', 'resolve(parse("x + y"), { x: parse("3z") })', 'resolve(parse("3x"), { x: parse("y+z"), z: parse("w^y") })'],
  seealso: ["simplify", "evaluate"],
  mayThrow: ["ReferenceError"]
};
var simplifyDocs = {
  name: "simplify",
  category: "Algebra",
  syntax: ["simplify(expr)", "simplify(expr, rules)"],
  description: "Simplify an expression tree.",
  examples: ['simplify("3 + 2 / 4")', 'simplify("2x + x")', 'f = parse("x * (x + 2 + x)")', "simplified = simplify(f)", "simplified.evaluate({x: 2})"],
  seealso: ["simplifyCore", "derivative", "evaluate", "parse", "rationalize", "resolve"]
};
var simplifyConstantDocs = {
  name: "simplifyConstant",
  category: "Algebra",
  syntax: ["simplifyConstant(expr)", "simplifyConstant(expr, options)"],
  description: "Replace constant subexpressions of node with their values.",
  examples: ['simplifyConatant("(3-3)*x")', 'simplifyConstant(parse("z-cos(tau/8)"))'],
  seealso: ["simplify", "simplifyCore", "evaluate"]
};
var simplifyCoreDocs = {
  name: "simplifyCore",
  category: "Algebra",
  syntax: ["simplifyCore(node)"],
  description: "Perform simple one-pass simplifications on an expression tree.",
  examples: ['simplifyCore(parse("0*x"))', 'simplifyCore(parse("(x+0)*2"))'],
  seealso: ["simplify", "simplifyConstant", "evaluate"]
};
var sluDocs = {
  name: "slu",
  category: "Algebra",
  syntax: ["slu(A, order, threshold)"],
  description: "Calculate the Matrix LU decomposition with full pivoting. Matrix A is decomposed in two matrices (L, U) and two permutation vectors (pinv, q) where P * A * Q = L * U",
  examples: ["slu(sparse([4.5, 0, 3.2, 0; 3.1, 2.9, 0, 0.9; 0, 1.7, 3, 0; 3.5, 0.4, 0, 1]), 1, 0.001)"],
  seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "lup", "qr"]
};
var symbolicEqualDocs = {
  name: "symbolicEqual",
  category: "Algebra",
  syntax: ["symbolicEqual(expr1, expr2)", "symbolicEqual(expr1, expr2, options)"],
  description: "Returns true if the difference of the expressions simplifies to 0",
  examples: ['symbolicEqual("x*y","y*x")', 'symbolicEqual("abs(x^2)", "x^2")', 'symbolicEqual("abs(x)", "x", {context: {abs: {trivial: true}}})'],
  seealso: ["simplify", "evaluate"]
};
var usolveDocs = {
  name: "usolve",
  category: "Algebra",
  syntax: ["x=usolve(U, b)"],
  description: "Finds one solution of the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.",
  examples: ["x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"],
  seealso: ["usolveAll", "lup", "lusolve", "lsolve", "matrix", "sparse"]
};
var usolveAllDocs = {
  name: "usolveAll",
  category: "Algebra",
  syntax: ["x=usolve(U, b)"],
  description: "Finds all solutions of the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.",
  examples: ["x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"],
  seealso: ["usolve", "lup", "lusolve", "lsolve", "matrix", "sparse"]
};
var absDocs = {
  name: "abs",
  category: "Arithmetic",
  syntax: ["abs(x)"],
  description: "Compute the absolute value.",
  examples: ["abs(3.5)", "abs(-4.2)"],
  seealso: ["sign"]
};
var addDocs = {
  name: "add",
  category: "Operators",
  syntax: ["x + y", "add(x, y)"],
  description: "Add two values.",
  examples: ["a = 2.1 + 3.6", "a - 3.6", "3 + 2i", "3 cm + 2 inch", '"2.3" + "4"'],
  seealso: ["subtract"]
};
var cbrtDocs = {
  name: "cbrt",
  category: "Arithmetic",
  syntax: ["cbrt(x)", "cbrt(x, allRoots)"],
  description: "Compute the cubic root value. If x = y * y * y, then y is the cubic root of x. When `x` is a number or complex number, an optional second argument `allRoots` can be provided to return all three cubic roots. If not provided, the principal root is returned",
  examples: ["cbrt(64)", "cube(4)", "cbrt(-8)", "cbrt(2 + 3i)", "cbrt(8i)", "cbrt(8i, true)", "cbrt(27 m^3)"],
  seealso: ["square", "sqrt", "cube", "multiply"]
};
var ceilDocs = {
  name: "ceil",
  category: "Arithmetic",
  syntax: ["ceil(x)"],
  description: "Round a value towards plus infinity. If x is complex, both real and imaginary part are rounded towards plus infinity.",
  examples: ["ceil(3.2)", "ceil(3.8)", "ceil(-4.2)"],
  seealso: ["floor", "fix", "round"]
};
var cubeDocs = {
  name: "cube",
  category: "Arithmetic",
  syntax: ["cube(x)"],
  description: "Compute the cube of a value. The cube of x is x * x * x.",
  examples: ["cube(2)", "2^3", "2 * 2 * 2"],
  seealso: ["multiply", "square", "pow"]
};
var divideDocs = {
  name: "divide",
  category: "Operators",
  syntax: ["x / y", "divide(x, y)"],
  description: "Divide two values.",
  examples: ["a = 2 / 3", "a * 3", "4.5 / 2", "3 + 4 / 2", "(3 + 4) / 2", "18 km / 4.5"],
  seealso: ["multiply"]
};
var dotDivideDocs = {
  name: "dotDivide",
  category: "Operators",
  syntax: ["x ./ y", "dotDivide(x, y)"],
  description: "Divide two values element wise.",
  examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a ./ b"],
  seealso: ["multiply", "dotMultiply", "divide"]
};
var dotMultiplyDocs = {
  name: "dotMultiply",
  category: "Operators",
  syntax: ["x .* y", "dotMultiply(x, y)"],
  description: "Multiply two values element wise.",
  examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a .* b"],
  seealso: ["multiply", "divide", "dotDivide"]
};
var dotPowDocs = {
  name: "dotPow",
  category: "Operators",
  syntax: ["x .^ y", "dotPow(x, y)"],
  description: "Calculates the power of x to y element wise.",
  examples: ["a = [1, 2, 3; 4, 5, 6]", "a .^ 2"],
  seealso: ["pow"]
};
var expDocs = {
  name: "exp",
  category: "Arithmetic",
  syntax: ["exp(x)"],
  description: "Calculate the exponent of a value.",
  examples: ["exp(1.3)", "e ^ 1.3", "log(exp(1.3))", "x = 2.4", "(exp(i*x) == cos(x) + i*sin(x))   # Euler's formula"],
  seealso: ["expm", "expm1", "pow", "log"]
};
var expmDocs = {
  name: "expm",
  category: "Arithmetic",
  syntax: ["exp(x)"],
  description: "Compute the matrix exponential, expm(A) = e^A. The matrix must be square. Not to be confused with exp(a), which performs element-wise exponentiation.",
  examples: ["expm([[0,2],[0,0]])"],
  seealso: ["exp"]
};
var expm1Docs = {
  name: "expm1",
  category: "Arithmetic",
  syntax: ["expm1(x)"],
  description: "Calculate the value of subtracting 1 from the exponential value.",
  examples: ["expm1(2)", "pow(e, 2) - 1", "log(expm1(2) + 1)"],
  seealso: ["exp", "pow", "log"]
};
var fixDocs = {
  name: "fix",
  category: "Arithmetic",
  syntax: ["fix(x)"],
  description: "Round a value towards zero. If x is complex, both real and imaginary part are rounded towards zero.",
  examples: ["fix(3.2)", "fix(3.8)", "fix(-4.2)", "fix(-4.8)"],
  seealso: ["ceil", "floor", "round"]
};
var floorDocs = {
  name: "floor",
  category: "Arithmetic",
  syntax: ["floor(x)"],
  description: "Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.",
  examples: ["floor(3.2)", "floor(3.8)", "floor(-4.2)"],
  seealso: ["ceil", "fix", "round"]
};
var gcdDocs = {
  name: "gcd",
  category: "Arithmetic",
  syntax: ["gcd(a, b)", "gcd(a, b, c, ...)"],
  description: "Compute the greatest common divisor.",
  examples: ["gcd(8, 12)", "gcd(-4, 6)", "gcd(25, 15, -10)"],
  seealso: ["lcm", "xgcd"]
};
var hypotDocs = {
  name: "hypot",
  category: "Arithmetic",
  syntax: ["hypot(a, b, c, ...)", "hypot([a, b, c, ...])"],
  description: "Calculate the hypotenusa of a list with values. ",
  examples: ["hypot(3, 4)", "sqrt(3^2 + 4^2)", "hypot(-2)", "hypot([3, 4, 5])"],
  seealso: ["abs", "norm"]
};
var invmodDocs = {
  name: "invmod",
  category: "Arithmetic",
  syntax: ["invmod(a, b)"],
  description: "Calculate the (modular) multiplicative inverse of a modulo b. Solution to the equation ax \u2263 1 (mod b)",
  examples: ["invmod(8, 12)=NaN", "invmod(7, 13)=2", "invmod(15151, 15122)=10429"],
  seealso: ["gcd", "xgcd"]
};
var lcmDocs = {
  name: "lcm",
  category: "Arithmetic",
  syntax: ["lcm(x, y)"],
  description: "Compute the least common multiple.",
  examples: ["lcm(4, 6)", "lcm(6, 21)", "lcm(6, 21, 5)"],
  seealso: ["gcd"]
};
var logDocs = {
  name: "log",
  category: "Arithmetic",
  syntax: ["log(x)", "log(x, base)"],
  description: "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).",
  examples: ["log(3.5)", "a = log(2.4)", "exp(a)", "10 ^ 4", "log(10000, 10)", "log(10000) / log(10)", "b = log(1024, 2)", "2 ^ b"],
  seealso: ["exp", "log1p", "log2", "log10"]
};
var log10Docs = {
  name: "log10",
  category: "Arithmetic",
  syntax: ["log10(x)"],
  description: "Compute the 10-base logarithm of a value.",
  examples: ["log10(0.00001)", "log10(10000)", "10 ^ 4", "log(10000) / log(10)", "log(10000, 10)"],
  seealso: ["exp", "log"]
};
var log1pDocs = {
  name: "log1p",
  category: "Arithmetic",
  syntax: ["log1p(x)", "log1p(x, base)"],
  description: "Calculate the logarithm of a `value+1`",
  examples: ["log1p(2.5)", "exp(log1p(1.4))", "pow(10, 4)", "log1p(9999, 10)", "log1p(9999) / log(10)"],
  seealso: ["exp", "log", "log2", "log10"]
};
var log2Docs = {
  name: "log2",
  category: "Arithmetic",
  syntax: ["log2(x)"],
  description: "Calculate the 2-base of a value. This is the same as calculating `log(x, 2)`.",
  examples: ["log2(0.03125)", "log2(16)", "log2(16) / log2(2)", "pow(2, 4)"],
  seealso: ["exp", "log1p", "log", "log10"]
};
var modDocs = {
  name: "mod",
  category: "Operators",
  syntax: ["x % y", "x mod y", "mod(x, y)"],
  description: "Calculates the modulus, the remainder of an integer division.",
  examples: ["7 % 3", "11 % 2", "10 mod 4", "isOdd(x) = x % 2", "isOdd(2)", "isOdd(3)"],
  seealso: ["divide"]
};
var multiplyDocs = {
  name: "multiply",
  category: "Operators",
  syntax: ["x * y", "multiply(x, y)"],
  description: "multiply two values.",
  examples: ["a = 2.1 * 3.4", "a / 3.4", "2 * 3 + 4", "2 * (3 + 4)", "3 * 2.1 km"],
  seealso: ["divide"]
};
var normDocs = {
  name: "norm",
  category: "Arithmetic",
  syntax: ["norm(x)", "norm(x, p)"],
  description: "Calculate the norm of a number, vector or matrix.",
  examples: ["abs(-3.5)", "norm(-3.5)", "norm(3 - 4i)", "norm([1, 2, -3], Infinity)", "norm([1, 2, -3], -Infinity)", "norm([3, 4], 2)", "norm([[1, 2], [3, 4]], 1)", 'norm([[1, 2], [3, 4]], "inf")', 'norm([[1, 2], [3, 4]], "fro")']
};
var nthRootDocs = {
  name: "nthRoot",
  category: "Arithmetic",
  syntax: ["nthRoot(a)", "nthRoot(a, root)"],
  description: 'Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation "x^root = A".',
  examples: ["4 ^ 3", "nthRoot(64, 3)", "nthRoot(9, 2)", "sqrt(9)"],
  seealso: ["nthRoots", "pow", "sqrt"]
};
var nthRootsDocs = {
  name: "nthRoots",
  category: "Arithmetic",
  syntax: ["nthRoots(A)", "nthRoots(A, root)"],
  description: 'Calculate the nth roots of a value. An nth root of a positive real number A, is a positive real solution of the equation "x^root = A". This function returns an array of complex values.',
  examples: ["nthRoots(1)", "nthRoots(1, 3)"],
  seealso: ["sqrt", "pow", "nthRoot"]
};
var powDocs = {
  name: "pow",
  category: "Operators",
  syntax: ["x ^ y", "pow(x, y)"],
  description: "Calculates the power of x to y, x^y.",
  examples: ["2^3", "2*2*2", "1 + e ^ (pi * i)", "pow([[1, 2], [4, 3]], 2)", "pow([[1, 2], [4, 3]], -1)"],
  seealso: ["multiply", "nthRoot", "nthRoots", "sqrt"]
};
var roundDocs = {
  name: "round",
  category: "Arithmetic",
  syntax: ["round(x)", "round(x, n)"],
  description: "round a value towards the nearest integer.If x is complex, both real and imaginary part are rounded towards the nearest integer. When n is specified, the value is rounded to n decimals.",
  examples: ["round(3.2)", "round(3.8)", "round(-4.2)", "round(-4.8)", "round(pi, 3)", "round(123.45678, 2)"],
  seealso: ["ceil", "floor", "fix"]
};
var signDocs = {
  name: "sign",
  category: "Arithmetic",
  syntax: ["sign(x)"],
  description: "Compute the sign of a value. The sign of a value x is 1 when x>1, -1 when x<0, and 0 when x=0.",
  examples: ["sign(3.5)", "sign(-4.2)", "sign(0)"],
  seealso: ["abs"]
};
var sqrtDocs = {
  name: "sqrt",
  category: "Arithmetic",
  syntax: ["sqrt(x)"],
  description: "Compute the square root value. If x = y * y, then y is the square root of x.",
  examples: ["sqrt(25)", "5 * 5", "sqrt(-1)"],
  seealso: ["square", "sqrtm", "multiply", "nthRoot", "nthRoots", "pow"]
};
var sqrtmDocs = {
  name: "sqrtm",
  category: "Arithmetic",
  syntax: ["sqrtm(x)"],
  description: "Calculate the principal square root of a square matrix. The principal square root matrix `X` of another matrix `A` is such that `X * X = A`.",
  examples: ["sqrtm([[33, 24], [48, 57]])"],
  seealso: ["sqrt", "abs", "square", "multiply"]
};
var sylvesterDocs = {
  name: "sylvester",
  category: "Matrix",
  syntax: ["sylvester(A,B,C)"],
  description: "Solves the real-valued Sylvester equation AX+XB=C for X",
  examples: ["sylvester([[-1, -2], [1, 1]], [[-2, 1], [-1, 2]], [[-3, 2], [3, 0]])", "sylvester(A,B,C)"],
  seealso: ["schur", "lyap"]
};
var schurDocs = {
  name: "schur",
  category: "Matrix",
  syntax: ["schur(A)"],
  description: "Performs a real Schur decomposition of the real matrix A = UTU'",
  examples: ["schur([[1, 0], [-4, 3]])", "schur(A)"],
  seealso: ["lyap", "sylvester"]
};
var lyapDocs = {
  name: "lyap",
  category: "Matrix",
  syntax: ["lyap(A,Q)"],
  description: "Solves the Continuous-time Lyapunov equation AP+PA'+Q=0 for P",
  examples: ["lyap([[-2, 0], [1, -4]], [[3, 1], [1, 3]])", "lyap(A,Q)"],
  seealso: ["schur", "sylvester"]
};
var squareDocs = {
  name: "square",
  category: "Arithmetic",
  syntax: ["square(x)"],
  description: "Compute the square of a value. The square of x is x * x.",
  examples: ["square(3)", "sqrt(9)", "3^2", "3 * 3"],
  seealso: ["multiply", "pow", "sqrt", "cube"]
};
var subtractDocs = {
  name: "subtract",
  category: "Operators",
  syntax: ["x - y", "subtract(x, y)"],
  description: "subtract two values.",
  examples: ["a = 5.3 - 2", "a + 2", "2/3 - 1/6", "2 * 3 - 3", "2.1 km - 500m"],
  seealso: ["add"]
};
var unaryMinusDocs = {
  name: "unaryMinus",
  category: "Operators",
  syntax: ["-x", "unaryMinus(x)"],
  description: "Inverse the sign of a value. Converts booleans and strings to numbers.",
  examples: ["-4.5", "-(-5.6)", '-"22"'],
  seealso: ["add", "subtract", "unaryPlus"]
};
var unaryPlusDocs = {
  name: "unaryPlus",
  category: "Operators",
  syntax: ["+x", "unaryPlus(x)"],
  description: "Converts booleans and strings to numbers.",
  examples: ["+true", '+"2"'],
  seealso: ["add", "subtract", "unaryMinus"]
};
var xgcdDocs = {
  name: "xgcd",
  category: "Arithmetic",
  syntax: ["xgcd(a, b)"],
  description: "Calculate the extended greatest common divisor for two values. The result is an array [d, x, y] with 3 entries, where d is the greatest common divisor, and d = x * a + y * b.",
  examples: ["xgcd(8, 12)", "gcd(8, 12)", "xgcd(36163, 21199)"],
  seealso: ["gcd", "lcm"]
};
var bitAndDocs = {
  name: "bitAnd",
  category: "Bitwise",
  syntax: ["x & y", "bitAnd(x, y)"],
  description: "Bitwise AND operation. Performs the logical AND operation on each pair of the corresponding bits of the two given values by multiplying them. If both bits in the compared position are 1, the bit in the resulting binary representation is 1, otherwise, the result is 0",
  examples: ["5 & 3", "bitAnd(53, 131)", "[1, 12, 31] & 42"],
  seealso: ["bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
};
var bitNotDocs = {
  name: "bitNot",
  category: "Bitwise",
  syntax: ["~x", "bitNot(x)"],
  description: "Bitwise NOT operation. Performs a logical negation on each bit of the given value. Bits that are 0 become 1, and those that are 1 become 0.",
  examples: ["~1", "~2", "bitNot([2, -3, 4])"],
  seealso: ["bitAnd", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
};
var bitOrDocs = {
  name: "bitOr",
  category: "Bitwise",
  syntax: ["x | y", "bitOr(x, y)"],
  description: "Bitwise OR operation. Performs the logical inclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if the first bit is 1 or the second bit is 1 or both bits are 1, otherwise, the result is 0.",
  examples: ["5 | 3", "bitOr([1, 2, 3], 4)"],
  seealso: ["bitAnd", "bitNot", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
};
var bitXorDocs = {
  name: "bitXor",
  category: "Bitwise",
  syntax: ["bitXor(x, y)"],
  description: "Bitwise XOR operation, exclusive OR. Performs the logical exclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1.",
  examples: ["bitOr(1, 2)", "bitXor([2, 3, 4], 4)"],
  seealso: ["bitAnd", "bitNot", "bitOr", "leftShift", "rightArithShift", "rightLogShift"]
};
var leftShiftDocs = {
  name: "leftShift",
  category: "Bitwise",
  syntax: ["x << y", "leftShift(x, y)"],
  description: "Bitwise left logical shift of a value x by y number of bits.",
  examples: ["4 << 1", "8 >> 1"],
  seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "rightArithShift", "rightLogShift"]
};
var rightArithShiftDocs = {
  name: "rightArithShift",
  category: "Bitwise",
  syntax: ["x >> y", "rightArithShift(x, y)"],
  description: "Bitwise right arithmetic shift of a value x by y number of bits.",
  examples: ["8 >> 1", "4 << 1", "-12 >> 2"],
  seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightLogShift"]
};
var rightLogShiftDocs = {
  name: "rightLogShift",
  category: "Bitwise",
  syntax: ["x >>> y", "rightLogShift(x, y)"],
  description: "Bitwise right logical shift of a value x by y number of bits.",
  examples: ["8 >>> 1", "4 << 1", "-12 >>> 2"],
  seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift"]
};
var bellNumbersDocs = {
  name: "bellNumbers",
  category: "Combinatorics",
  syntax: ["bellNumbers(n)"],
  description: "The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. `bellNumbers` only takes integer arguments. The following condition must be enforced: n >= 0.",
  examples: ["bellNumbers(3)", "bellNumbers(8)"],
  seealso: ["stirlingS2"]
};
var catalanDocs = {
  name: "catalan",
  category: "Combinatorics",
  syntax: ["catalan(n)"],
  description: "The Catalan Numbers enumerate combinatorial structures of many different types. catalan only takes integer arguments. The following condition must be enforced: n >= 0.",
  examples: ["catalan(3)", "catalan(8)"],
  seealso: ["bellNumbers"]
};
var compositionDocs = {
  name: "composition",
  category: "Combinatorics",
  syntax: ["composition(n, k)"],
  description: "The composition counts of n into k parts. composition only takes integer arguments. The following condition must be enforced: k <= n.",
  examples: ["composition(5, 3)"],
  seealso: ["combinations"]
};
var stirlingS2Docs = {
  name: "stirlingS2",
  category: "Combinatorics",
  syntax: ["stirlingS2(n, k)"],
  description: "he Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets. `stirlingS2` only takes integer arguments. The following condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) = 1.",
  examples: ["stirlingS2(5, 3)"],
  seealso: ["bellNumbers"]
};
var argDocs = {
  name: "arg",
  category: "Complex",
  syntax: ["arg(x)"],
  description: "Compute the argument of a complex value. If x = a+bi, the argument is computed as atan2(b, a).",
  examples: ["arg(2 + 2i)", "atan2(3, 2)", "arg(2 + 3i)"],
  seealso: ["re", "im", "conj", "abs"]
};
var conjDocs = {
  name: "conj",
  category: "Complex",
  syntax: ["conj(x)"],
  description: "Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.",
  examples: ["conj(2 + 3i)", "conj(2 - 3i)", "conj(-5.2i)"],
  seealso: ["re", "im", "abs", "arg"]
};
var imDocs = {
  name: "im",
  category: "Complex",
  syntax: ["im(x)"],
  description: "Get the imaginary part of a complex number.",
  examples: ["im(2 + 3i)", "re(2 + 3i)", "im(-5.2i)", "im(2.4)"],
  seealso: ["re", "conj", "abs", "arg"]
};
var reDocs = {
  name: "re",
  category: "Complex",
  syntax: ["re(x)"],
  description: "Get the real part of a complex number.",
  examples: ["re(2 + 3i)", "im(2 + 3i)", "re(-5.2i)", "re(2.4)"],
  seealso: ["im", "conj", "abs", "arg"]
};
var evaluateDocs = {
  name: "evaluate",
  category: "Expression",
  syntax: ["evaluate(expression)", "evaluate([expr1, expr2, expr3, ...])"],
  description: "Evaluate an expression or an array with expressions.",
  examples: ['evaluate("2 + 3")', 'evaluate("sqrt(" + 4 + ")")'],
  seealso: []
};
var helpDocs = {
  name: "help",
  category: "Expression",
  syntax: ["help(object)", "help(string)"],
  description: "Display documentation on a function or data type.",
  examples: ["help(sqrt)", 'help("complex")'],
  seealso: []
};
var distanceDocs = {
  name: "distance",
  category: "Geometry",
  syntax: ["distance([x1, y1], [x2, y2])", "distance([[x1, y1], [x2, y2]])"],
  description: "Calculates the Euclidean distance between two points.",
  examples: ["distance([0,0], [4,4])", "distance([[0,0], [4,4]])"],
  seealso: []
};
var intersectDocs = {
  name: "intersect",
  category: "Geometry",
  syntax: ["intersect(expr1, expr2, expr3, expr4)", "intersect(expr1, expr2, expr3)"],
  description: "Computes the intersection point of lines and/or planes.",
  examples: ["intersect([0, 0], [10, 10], [10, 0], [0, 10])", "intersect([1, 0, 1],  [4, -2, 2], [1, 1, 1, 6])"],
  seealso: []
};
var andDocs = {
  name: "and",
  category: "Logical",
  syntax: ["x and y", "and(x, y)"],
  description: "Logical and. Test whether two values are both defined with a nonzero/nonempty value.",
  examples: ["true and false", "true and true", "2 and 4"],
  seealso: ["not", "or", "xor"]
};
var notDocs = {
  name: "not",
  category: "Logical",
  syntax: ["not x", "not(x)"],
  description: "Logical not. Flips the boolean value of given argument.",
  examples: ["not true", "not false", "not 2", "not 0"],
  seealso: ["and", "or", "xor"]
};
var orDocs = {
  name: "or",
  category: "Logical",
  syntax: ["x or y", "or(x, y)"],
  description: "Logical or. Test if at least one value is defined with a nonzero/nonempty value.",
  examples: ["true or false", "false or false", "0 or 4"],
  seealso: ["not", "and", "xor"]
};
var xorDocs = {
  name: "xor",
  category: "Logical",
  syntax: ["x xor y", "xor(x, y)"],
  description: "Logical exclusive or, xor. Test whether one and only one value is defined with a nonzero/nonempty value.",
  examples: ["true xor false", "false xor false", "true xor true", "0 xor 4"],
  seealso: ["not", "and", "or"]
};
var columnDocs = {
  name: "column",
  category: "Matrix",
  syntax: ["column(x, index)"],
  description: "Return a column from a matrix or array.",
  examples: ["A = [[1, 2], [3, 4]]", "column(A, 1)", "column(A, 2)"],
  seealso: ["row", "matrixFromColumns"]
};
var concatDocs = {
  name: "concat",
  category: "Matrix",
  syntax: ["concat(A, B, C, ...)", "concat(A, B, C, ..., dim)"],
  description: "Concatenate matrices. By default, the matrices are concatenated by the last dimension. The dimension on which to concatenate can be provided as last argument.",
  examples: ["A = [1, 2; 5, 6]", "B = [3, 4; 7, 8]", "concat(A, B)", "concat(A, B, 1)", "concat(A, B, 2)"],
  seealso: ["det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
};
var countDocs = {
  name: "count",
  category: "Matrix",
  syntax: ["count(x)"],
  description: "Count the number of elements of a matrix, array or string.",
  examples: ["a = [1, 2; 3, 4; 5, 6]", "count(a)", "size(a)", 'count("hello world")'],
  seealso: ["size"]
};
var crossDocs = {
  name: "cross",
  category: "Matrix",
  syntax: ["cross(A, B)"],
  description: "Calculate the cross product for two vectors in three dimensional space.",
  examples: ["cross([1, 1, 0],  [0, 1, 1])", "cross([3, -3, 1], [4, 9, 2])", "cross([2, 3, 4],  [5, 6, 7])"],
  seealso: ["multiply", "dot"]
};
var ctransposeDocs = {
  name: "ctranspose",
  category: "Matrix",
  syntax: ["x'", "ctranspose(x)"],
  description: "Complex Conjugate and Transpose a matrix",
  examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "ctranspose(a)"],
  seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"]
};
var detDocs = {
  name: "det",
  category: "Matrix",
  syntax: ["det(x)"],
  description: "Calculate the determinant of a matrix",
  examples: ["det([1, 2; 3, 4])", "det([-2, 2, 3; -1, 1, 3; 2, 0, -1])"],
  seealso: ["concat", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
};
var diagDocs = {
  name: "diag",
  category: "Matrix",
  syntax: ["diag(x)", "diag(x, k)"],
  description: "Create a diagonal matrix or retrieve the diagonal of a matrix. When x is a vector, a matrix with the vector values on the diagonal will be returned. When x is a matrix, a vector with the diagonal values of the matrix is returned. When k is provided, the k-th diagonal will be filled in or retrieved, if k is positive, the values are placed on the super diagonal. When k is negative, the values are placed on the sub diagonal.",
  examples: ["diag(1:3)", "diag(1:3, 1)", "a = [1, 2, 3; 4, 5, 6; 7, 8, 9]", "diag(a)"],
  seealso: ["concat", "det", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
};
var diffDocs = {
  name: "diff",
  category: "Matrix",
  syntax: ["diff(arr)", "diff(arr, dim)"],
  description: ["Create a new matrix or array with the difference of the passed matrix or array.", "Dim parameter is optional and used to indicant the dimension of the array/matrix to apply the difference", "If no dimension parameter is passed it is assumed as dimension 0", "Dimension is zero-based in javascript and one-based in the parser", "Arrays must be 'rectangular' meaning arrays like [1, 2]", "If something is passed as a matrix it will be returned as a matrix but other than that all matrices are converted to arrays"],
  examples: ["diff([1, 2, 4, 7, 0])", "diff([1, 2, 4, 7, 0], 0)", "diff(matrix([1, 2, 4, 7, 0]))", "diff([[1, 2], [3, 4]])", "diff([[1, 2], [3, 4]], 0)", "diff([[1, 2], [3, 4]], 1)", "diff([[1, 2], [3, 4]], bignumber(1))", "diff(matrix([[1, 2], [3, 4]]), 1)", "diff([[1, 2], matrix([3, 4])], 1)"],
  seealso: ["subtract", "partitionSelect"]
};
var dotDocs = {
  name: "dot",
  category: "Matrix",
  syntax: ["dot(A, B)", "A * B"],
  description: "Calculate the dot product of two vectors. The dot product of A = [a1, a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as dot(A, B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn",
  examples: ["dot([2, 4, 1], [2, 2, 3])", "[2, 4, 1] * [2, 2, 3]"],
  seealso: ["multiply", "cross"]
};
var eigsDocs = {
  name: "eigs",
  category: "Matrix",
  syntax: ["eigs(x)"],
  description: "Calculate the eigenvalues and eigenvectors of a real symmetric matrix",
  examples: ["eigs([[5, 2.3], [2.3, 1]])"],
  seealso: ["inv"]
};
var filterDocs = {
  name: "filter",
  category: "Matrix",
  syntax: ["filter(x, test)"],
  description: "Filter items in a matrix.",
  examples: ["isPositive(x) = x > 0", "filter([6, -2, -1, 4, 3], isPositive)", "filter([6, -2, 0, 1, 0], x != 0)"],
  seealso: ["sort", "map", "forEach"]
};
var flattenDocs = {
  name: "flatten",
  category: "Matrix",
  syntax: ["flatten(x)"],
  description: "Flatten a multi dimensional matrix into a single dimensional matrix.",
  examples: ["a = [1, 2, 3; 4, 5, 6]", "size(a)", "b = flatten(a)", "size(b)"],
  seealso: ["concat", "resize", "size", "squeeze"]
};
var forEachDocs = {
  name: "forEach",
  category: "Matrix",
  syntax: ["forEach(x, callback)"],
  description: "Iterates over all elements of a matrix/array, and executes the given callback function.",
  examples: ["numberOfPets = {}", "addPet(n) = numberOfPets[n] = (numberOfPets[n] ? numberOfPets[n]:0 ) + 1;", 'forEach(["Dog","Cat","Cat"], addPet)', "numberOfPets"],
  seealso: ["map", "sort", "filter"]
};
var getMatrixDataTypeDocs = {
  name: "getMatrixDataType",
  category: "Matrix",
  syntax: ["getMatrixDataType(x)"],
  description: 'Find the data type of all elements in a matrix or array, for example "number" if all items are a number and "Complex" if all values are complex numbers. If a matrix contains more than one data type, it will return "mixed".',
  examples: ["getMatrixDataType([1, 2, 3])", "getMatrixDataType([[5 cm], [2 inch]])", 'getMatrixDataType([1, "text"])', "getMatrixDataType([1, bignumber(4)])"],
  seealso: ["matrix", "sparse", "typeOf"]
};
var identityDocs = {
  name: "identity",
  category: "Matrix",
  syntax: ["identity(n)", "identity(m, n)", "identity([m, n])"],
  description: "Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.",
  examples: ["identity(3)", "identity(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "identity(size(a))"],
  seealso: ["concat", "det", "diag", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
};
var invDocs = {
  name: "inv",
  category: "Matrix",
  syntax: ["inv(x)"],
  description: "Calculate the inverse of a matrix",
  examples: ["inv([1, 2; 3, 4])", "inv(4)", "1 / 4"],
  seealso: ["concat", "det", "diag", "identity", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
};
var pinvDocs = {
  name: "pinv",
  category: "Matrix",
  syntax: ["pinv(x)"],
  description: "Calculate the Moore\u2013Penrose inverse of a matrix",
  examples: ["pinv([1, 2; 3, 4])", "pinv([[1, 0], [0, 1], [0, 1]])", "pinv(4)"],
  seealso: ["inv"]
};
var kronDocs = {
  name: "kron",
  category: "Matrix",
  syntax: ["kron(x, y)"],
  description: "Calculates the kronecker product of 2 matrices or vectors.",
  examples: ["kron([[1, 0], [0, 1]], [[1, 2], [3, 4]])", "kron([1,1], [2,3,4])"],
  seealso: ["multiply", "dot", "cross"]
};
var mapDocs = {
  name: "map",
  category: "Matrix",
  syntax: ["map(x, callback)"],
  description: "Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.",
  examples: ["map([1, 2, 3], square)"],
  seealso: ["filter", "forEach"]
};
var matrixFromColumnsDocs = {
  name: "matrixFromColumns",
  category: "Matrix",
  syntax: ["matrixFromColumns(...arr)", "matrixFromColumns(row1, row2)", "matrixFromColumns(row1, row2, row3)"],
  description: "Create a dense matrix from vectors as individual columns.",
  examples: ["matrixFromColumns([1, 2, 3], [[4],[5],[6]])"],
  seealso: ["matrix", "matrixFromRows", "matrixFromFunction", "zeros"]
};
var matrixFromFunctionDocs = {
  name: "matrixFromFunction",
  category: "Matrix",
  syntax: ["matrixFromFunction(size, fn)", "matrixFromFunction(size, fn, format)", "matrixFromFunction(size, fn, format, datatype)", "matrixFromFunction(size, format, fn)", "matrixFromFunction(size, format, datatype, fn)"],
  description: "Create a matrix by evaluating a generating function at each index.",
  examples: ["f(I) = I[1] - I[2]", "matrixFromFunction([3,3], f)", "g(I) = I[1] - I[2] == 1 ? 4 : 0", 'matrixFromFunction([100, 100], "sparse", g)', "matrixFromFunction([5], random)"],
  seealso: ["matrix", "matrixFromRows", "matrixFromColumns", "zeros"]
};
var matrixFromRowsDocs = {
  name: "matrixFromRows",
  category: "Matrix",
  syntax: ["matrixFromRows(...arr)", "matrixFromRows(row1, row2)", "matrixFromRows(row1, row2, row3)"],
  description: "Create a dense matrix from vectors as individual rows.",
  examples: ["matrixFromRows([1, 2, 3], [[4],[5],[6]])"],
  seealso: ["matrix", "matrixFromColumns", "matrixFromFunction", "zeros"]
};
var onesDocs = {
  name: "ones",
  category: "Matrix",
  syntax: ["ones(m)", "ones(m, n)", "ones(m, n, p, ...)", "ones([m])", "ones([m, n])", "ones([m, n, p, ...])"],
  description: "Create a matrix containing ones.",
  examples: ["ones(3)", "ones(3, 5)", "ones([2,3]) * 4.5", "a = [1, 2, 3; 4, 5, 6]", "ones(size(a))"],
  seealso: ["concat", "det", "diag", "identity", "inv", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
};
var partitionSelectDocs = {
  name: "partitionSelect",
  category: "Matrix",
  syntax: ["partitionSelect(x, k)", "partitionSelect(x, k, compare)"],
  description: "Partition-based selection of an array or 1D matrix. Will find the kth smallest value, and mutates the input array. Uses Quickselect.",
  examples: ["partitionSelect([5, 10, 1], 2)", 'partitionSelect(["C", "B", "A", "D"], 1, compareText)', "arr = [5, 2, 1]", "partitionSelect(arr, 0) # returns 1, arr is now: [1, 2, 5]", "arr", "partitionSelect(arr, 1, 'desc') # returns 2, arr is now: [5, 2, 1]", "arr"],
  seealso: ["sort"]
};
var rangeDocs = {
  name: "range",
  category: "Type",
  syntax: ["start:end", "start:step:end", "range(start, end)", "range(start, end, step)", "range(string)"],
  description: "Create a range. Lower bound of the range is included, upper bound is excluded.",
  examples: ["1:5", "3:-1:-3", "range(3, 7)", "range(0, 12, 2)", 'range("4:10")', "a = [1, 2, 3, 4; 5, 6, 7, 8]", "a[1:2, 1:2]"],
  seealso: ["concat", "det", "diag", "identity", "inv", "ones", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
};
var reshapeDocs = {
  name: "reshape",
  category: "Matrix",
  syntax: ["reshape(x, sizes)"],
  description: "Reshape a multi dimensional array to fit the specified dimensions.",
  examples: ["reshape([1, 2, 3, 4, 5, 6], [2, 3])", "reshape([[1, 2], [3, 4]], [1, 4])", "reshape([[1, 2], [3, 4]], [4])", "reshape([1, 2, 3, 4], [-1, 2])"],
  seealso: ["size", "squeeze", "resize"]
};
var resizeDocs = {
  name: "resize",
  category: "Matrix",
  syntax: ["resize(x, size)", "resize(x, size, defaultValue)"],
  description: "Resize a matrix.",
  examples: ["resize([1,2,3,4,5], [3])", "resize([1,2,3], [5])", "resize([1,2,3], [5], -1)", "resize(2, [2, 3])", 'resize("hello", [8], "!")'],
  seealso: ["size", "subset", "squeeze", "reshape"]
};
var rotateDocs = {
  name: "rotate",
  category: "Matrix",
  syntax: ["rotate(w, theta)", "rotate(w, theta, v)"],
  description: "Returns a 2-D rotation matrix (2x2) for a given angle (in radians). Returns a 2-D rotation matrix (3x3) of a given angle (in radians) around given axis.",
  examples: ["rotate([1, 0], pi / 2)", 'rotate(matrix([1, 0]), unit("35deg"))', 'rotate([1, 0, 0], unit("90deg"), [0, 0, 1])', 'rotate(matrix([1, 0, 0]), unit("90deg"), matrix([0, 0, 1]))'],
  seealso: ["matrix", "rotationMatrix"]
};
var rotationMatrixDocs = {
  name: "rotationMatrix",
  category: "Matrix",
  syntax: ["rotationMatrix(theta)", "rotationMatrix(theta, v)", "rotationMatrix(theta, v, format)"],
  description: "Returns a 2-D rotation matrix (2x2) for a given angle (in radians). Returns a 2-D rotation matrix (3x3) of a given angle (in radians) around given axis.",
  examples: ["rotationMatrix(pi / 2)", 'rotationMatrix(unit("45deg"), [0, 0, 1])', 'rotationMatrix(1, matrix([0, 0, 1]), "sparse")'],
  seealso: ["cos", "sin"]
};
var rowDocs = {
  name: "row",
  category: "Matrix",
  syntax: ["row(x, index)"],
  description: "Return a row from a matrix or array.",
  examples: ["A = [[1, 2], [3, 4]]", "row(A, 1)", "row(A, 2)"],
  seealso: ["column", "matrixFromRows"]
};
var sizeDocs = {
  name: "size",
  category: "Matrix",
  syntax: ["size(x)"],
  description: "Calculate the size of a matrix.",
  examples: ["size(2.3)", 'size("hello world")', "a = [1, 2; 3, 4; 5, 6]", "size(a)", "size(1:6)"],
  seealso: ["concat", "count", "det", "diag", "identity", "inv", "ones", "range", "squeeze", "subset", "trace", "transpose", "zeros"]
};
var sortDocs = {
  name: "sort",
  category: "Matrix",
  syntax: ["sort(x)", "sort(x, compare)"],
  description: 'Sort the items in a matrix. Compare can be a string "asc", "desc", "natural", or a custom sort function.',
  examples: ["sort([5, 10, 1])", 'sort(["C", "B", "A", "D"], "natural")', "sortByLength(a, b) = size(a)[1] - size(b)[1]", 'sort(["Langdon", "Tom", "Sara"], sortByLength)', 'sort(["10", "1", "2"], "natural")'],
  seealso: ["map", "filter", "forEach"]
};
var squeezeDocs = {
  name: "squeeze",
  category: "Matrix",
  syntax: ["squeeze(x)"],
  description: "Remove inner and outer singleton dimensions from a matrix.",
  examples: ["a = zeros(3,2,1)", "size(squeeze(a))", "b = zeros(1,1,3)", "size(squeeze(b))"],
  seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "subset", "trace", "transpose", "zeros"]
};
var subsetDocs = {
  name: "subset",
  category: "Matrix",
  syntax: ["value(index)", "value(index) = replacement", "subset(value, [index])", "subset(value, [index], replacement)"],
  description: "Get or set a subset of the entries of a matrix or characters of a string. Indexes are one-based. There should be one index specification for each dimension of the target. Each specification can be a single index, a list of indices, or a range in colon notation `l:u`. In a range, both the lower bound l and upper bound u are included; and if a bound is omitted it defaults to the most extreme valid value. The cartesian product of the indices specified in each dimension determines the target of the operation.",
  examples: ["d = [1, 2; 3, 4]", "e = []", "e[1, 1:2] = [5, 6]", "e[2, :] = [7, 8]", "f = d * e", "f[2, 1]", "f[:, 1]", "f[[1,2], [1,3]] = [9, 10; 11, 12]", "f"],
  seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "trace", "transpose", "zeros"]
};
var traceDocs = {
  name: "trace",
  category: "Matrix",
  syntax: ["trace(A)"],
  description: "Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.",
  examples: ["A = [1, 2, 3; -1, 2, 3; 2, 0, 3]", "trace(A)"],
  seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
};
var transposeDocs = {
  name: "transpose",
  category: "Matrix",
  syntax: ["x'", "transpose(x)"],
  description: "Transpose a matrix",
  examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "transpose(a)"],
  seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"]
};
var zerosDocs = {
  name: "zeros",
  category: "Matrix",
  syntax: ["zeros(m)", "zeros(m, n)", "zeros(m, n, p, ...)", "zeros([m])", "zeros([m, n])", "zeros([m, n, p, ...])"],
  description: "Create a matrix containing zeros.",
  examples: ["zeros(3)", "zeros(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "zeros(size(a))"],
  seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose"]
};
var fftDocs = {
  name: "fft",
  category: "Matrix",
  syntax: ["fft(x)"],
  description: "Calculate N-dimensional fourier transform",
  examples: ["fft([[1, 0], [1, 0]])"],
  seealso: ["ifft"]
};
var ifftDocs = {
  name: "ifft",
  category: "Matrix",
  syntax: ["ifft(x)"],
  description: "Calculate N-dimensional inverse fourier transform",
  examples: ["ifft([[2, 2], [0, 0]])"],
  seealso: ["fft"]
};
var combinationsDocs = {
  name: "combinations",
  category: "Probability",
  syntax: ["combinations(n, k)"],
  description: "Compute the number of combinations of n items taken k at a time",
  examples: ["combinations(7, 5)"],
  seealso: ["combinationsWithRep", "permutations", "factorial"]
};
var combinationsWithRepDocs = {
  name: "combinationsWithRep",
  category: "Probability",
  syntax: ["combinationsWithRep(n, k)"],
  description: "Compute the number of combinations of n items taken k at a time with replacements.",
  examples: ["combinationsWithRep(7, 5)"],
  seealso: ["combinations", "permutations", "factorial"]
};
var factorialDocs = {
  name: "factorial",
  category: "Probability",
  syntax: ["n!", "factorial(n)"],
  description: "Compute the factorial of a value",
  examples: ["5!", "5 * 4 * 3 * 2 * 1", "3!"],
  seealso: ["combinations", "combinationsWithRep", "permutations", "gamma"]
};
var gammaDocs = {
  name: "gamma",
  category: "Probability",
  syntax: ["gamma(n)"],
  description: "Compute the gamma function. For small values, the Lanczos approximation is used, and for large values the extended Stirling approximation.",
  examples: ["gamma(4)", "3!", "gamma(1/2)", "sqrt(pi)"],
  seealso: ["factorial"]
};
var lgammaDocs = {
  name: "lgamma",
  category: "Probability",
  syntax: ["lgamma(n)"],
  description: "Logarithm of the gamma function for real, positive numbers and complex numbers, using Lanczos approximation for numbers and Stirling series for complex numbers.",
  examples: ["lgamma(4)", "lgamma(1/2)", "lgamma(i)", "lgamma(complex(1.1, 2))"],
  seealso: ["gamma"]
};
var kldivergenceDocs = {
  name: "kldivergence",
  category: "Probability",
  syntax: ["kldivergence(x, y)"],
  description: "Calculate the Kullback-Leibler (KL) divergence  between two distributions.",
  examples: ["kldivergence([0.7,0.5,0.4], [0.2,0.9,0.5])"],
  seealso: []
};
var multinomialDocs = {
  name: "multinomial",
  category: "Probability",
  syntax: ["multinomial(A)"],
  description: "Multinomial Coefficients compute the number of ways of picking a1, a2, ..., ai unordered outcomes from `n` possibilities. multinomial takes one array of integers as an argument. The following condition must be enforced: every ai > 0.",
  examples: ["multinomial([1, 2, 1])"],
  seealso: ["combinations", "factorial"]
};
var permutationsDocs = {
  name: "permutations",
  category: "Probability",
  syntax: ["permutations(n)", "permutations(n, k)"],
  description: "Compute the number of permutations of n items taken k at a time",
  examples: ["permutations(5)", "permutations(5, 3)"],
  seealso: ["combinations", "combinationsWithRep", "factorial"]
};
var pickRandomDocs = {
  name: "pickRandom",
  category: "Probability",
  syntax: ["pickRandom(array)", "pickRandom(array, number)", "pickRandom(array, weights)", "pickRandom(array, number, weights)", "pickRandom(array, weights, number)"],
  description: "Pick a random entry from a given array.",
  examples: ["pickRandom(0:10)", "pickRandom([1, 3, 1, 6])", "pickRandom([1, 3, 1, 6], 2)", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], 2, [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1], 2)"],
  seealso: ["random", "randomInt"]
};
var randomDocs = {
  name: "random",
  category: "Probability",
  syntax: ["random()", "random(max)", "random(min, max)", "random(size)", "random(size, max)", "random(size, min, max)"],
  description: "Return a random number.",
  examples: ["random()", "random(10, 20)", "random([2, 3])"],
  seealso: ["pickRandom", "randomInt"]
};
var randomIntDocs = {
  name: "randomInt",
  category: "Probability",
  syntax: ["randomInt(max)", "randomInt(min, max)", "randomInt(size)", "randomInt(size, max)", "randomInt(size, min, max)"],
  description: "Return a random integer number",
  examples: ["randomInt(10, 20)", "randomInt([2, 3], 10)"],
  seealso: ["pickRandom", "random"]
};
var compareDocs = {
  name: "compare",
  category: "Relational",
  syntax: ["compare(x, y)"],
  description: "Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
  examples: ["compare(2, 3)", "compare(3, 2)", "compare(2, 2)", "compare(5cm, 40mm)", "compare(2, [1, 2, 3])"],
  seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compareNatural", "compareText"]
};
var compareNaturalDocs = {
  name: "compareNatural",
  category: "Relational",
  syntax: ["compareNatural(x, y)"],
  description: "Compare two values of any type in a deterministic, natural way. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
  examples: ["compareNatural(2, 3)", "compareNatural(3, 2)", "compareNatural(2, 2)", "compareNatural(5cm, 40mm)", 'compareNatural("2", "10")', "compareNatural(2 + 3i, 2 + 4i)", "compareNatural([1, 2, 4], [1, 2, 3])", "compareNatural([1, 5], [1, 2, 3])", "compareNatural([1, 2], [1, 2])", "compareNatural({a: 2}, {a: 4})"],
  seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare", "compareText"]
};
var compareTextDocs = {
  name: "compareText",
  category: "Relational",
  syntax: ["compareText(x, y)"],
  description: "Compare two strings lexically. Comparison is case sensitive. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
  examples: ['compareText("B", "A")', 'compareText("A", "B")', 'compareText("A", "A")', 'compareText("2", "10")', 'compare("2", "10")', "compare(2, 10)", 'compareNatural("2", "10")', 'compareText("B", ["A", "B", "C"])'],
  seealso: ["compare", "compareNatural"]
};
var deepEqualDocs = {
  name: "deepEqual",
  category: "Relational",
  syntax: ["deepEqual(x, y)"],
  description: "Check equality of two matrices element wise. Returns true if the size of both matrices is equal and when and each of the elements are equal.",
  examples: ["deepEqual([1,3,4], [1,3,4])", "deepEqual([1,3,4], [1,3])"],
  seealso: ["equal", "unequal", "smaller", "larger", "smallerEq", "largerEq", "compare"]
};
var equalDocs = {
  name: "equal",
  category: "Relational",
  syntax: ["x == y", "equal(x, y)"],
  description: "Check equality of two values. Returns true if the values are equal, and false if not.",
  examples: ["2+2 == 3", "2+2 == 4", "a = 3.2", "b = 6-2.8", "a == b", "50cm == 0.5m"],
  seealso: ["unequal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual", "equalText"]
};
var equalTextDocs = {
  name: "equalText",
  category: "Relational",
  syntax: ["equalText(x, y)"],
  description: "Check equality of two strings. Comparison is case sensitive. Returns true if the values are equal, and false if not.",
  examples: ['equalText("Hello", "Hello")', 'equalText("a", "A")', 'equal("2e3", "2000")', 'equalText("2e3", "2000")', 'equalText("B", ["A", "B", "C"])'],
  seealso: ["compare", "compareNatural", "compareText", "equal"]
};
var largerDocs = {
  name: "larger",
  category: "Relational",
  syntax: ["x > y", "larger(x, y)"],
  description: "Check if value x is larger than y. Returns true if x is larger than y, and false if not.",
  examples: ["2 > 3", "5 > 2*2", "a = 3.3", "b = 6-2.8", "(a > b)", "(b < a)", "5 cm > 2 inch"],
  seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare"]
};
var largerEqDocs = {
  name: "largerEq",
  category: "Relational",
  syntax: ["x >= y", "largerEq(x, y)"],
  description: "Check if value x is larger or equal to y. Returns true if x is larger or equal to y, and false if not.",
  examples: ["2 >= 1+1", "2 > 1+1", "a = 3.2", "b = 6-2.8", "(a >= b)"],
  seealso: ["equal", "unequal", "smallerEq", "smaller", "compare"]
};
var smallerDocs = {
  name: "smaller",
  category: "Relational",
  syntax: ["x < y", "smaller(x, y)"],
  description: "Check if value x is smaller than value y. Returns true if x is smaller than y, and false if not.",
  examples: ["2 < 3", "5 < 2*2", "a = 3.3", "b = 6-2.8", "(a < b)", "5 cm < 2 inch"],
  seealso: ["equal", "unequal", "larger", "smallerEq", "largerEq", "compare"]
};
var smallerEqDocs = {
  name: "smallerEq",
  category: "Relational",
  syntax: ["x <= y", "smallerEq(x, y)"],
  description: "Check if value x is smaller or equal to value y. Returns true if x is smaller than y, and false if not.",
  examples: ["2 <= 1+1", "2 < 1+1", "a = 3.2", "b = 6-2.8", "(a <= b)"],
  seealso: ["equal", "unequal", "larger", "smaller", "largerEq", "compare"]
};
var unequalDocs = {
  name: "unequal",
  category: "Relational",
  syntax: ["x != y", "unequal(x, y)"],
  description: "Check unequality of two values. Returns true if the values are unequal, and false if they are equal.",
  examples: ["2+2 != 3", "2+2 != 4", "a = 3.2", "b = 6-2.8", "a != b", "50cm != 0.5m", "5 cm != 2 inch"],
  seealso: ["equal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual"]
};
var setCartesianDocs = {
  name: "setCartesian",
  category: "Set",
  syntax: ["setCartesian(set1, set2)"],
  description: "Create the cartesian product of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays and the values will be sorted in ascending order before the operation.",
  examples: ["setCartesian([1, 2], [3, 4])"],
  seealso: ["setUnion", "setIntersect", "setDifference", "setPowerset"]
};
var setDifferenceDocs = {
  name: "setDifference",
  category: "Set",
  syntax: ["setDifference(set1, set2)"],
  description: "Create the difference of two (multi)sets: every element of set1, that is not the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
  examples: ["setDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
  seealso: ["setUnion", "setIntersect", "setSymDifference"]
};
var setDistinctDocs = {
  name: "setDistinct",
  category: "Set",
  syntax: ["setDistinct(set)"],
  description: "Collect the distinct elements of a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.",
  examples: ["setDistinct([1, 1, 1, 2, 2, 3])"],
  seealso: ["setMultiplicity"]
};
var setIntersectDocs = {
  name: "setIntersect",
  category: "Set",
  syntax: ["setIntersect(set1, set2)"],
  description: "Create the intersection of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
  examples: ["setIntersect([1, 2, 3, 4], [3, 4, 5, 6])", "setIntersect([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
  seealso: ["setUnion", "setDifference"]
};
var setIsSubsetDocs = {
  name: "setIsSubset",
  category: "Set",
  syntax: ["setIsSubset(set1, set2)"],
  description: "Check whether a (multi)set is a subset of another (multi)set: every element of set1 is the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
  examples: ["setIsSubset([1, 2], [3, 4, 5, 6])", "setIsSubset([3, 4], [3, 4, 5, 6])"],
  seealso: ["setUnion", "setIntersect", "setDifference"]
};
var setMultiplicityDocs = {
  name: "setMultiplicity",
  category: "Set",
  syntax: ["setMultiplicity(element, set)"],
  description: "Count the multiplicity of an element in a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.",
  examples: ["setMultiplicity(1, [1, 2, 2, 4])", "setMultiplicity(2, [1, 2, 2, 4])"],
  seealso: ["setDistinct", "setSize"]
};
var setPowersetDocs = {
  name: "setPowerset",
  category: "Set",
  syntax: ["setPowerset(set)"],
  description: "Create the powerset of a (multi)set: the powerset contains very possible subsets of a (multi)set. A multi-dimension array will be converted to a single-dimension array before the operation.",
  examples: ["setPowerset([1, 2, 3])"],
  seealso: ["setCartesian"]
};
var setSizeDocs = {
  name: "setSize",
  category: "Set",
  syntax: ["setSize(set)", "setSize(set, unique)"],
  description: 'Count the number of elements of a (multi)set. When the second parameter "unique" is true, count only the unique values. A multi-dimension array will be converted to a single-dimension array before the operation.',
  examples: ["setSize([1, 2, 2, 4])", "setSize([1, 2, 2, 4], true)"],
  seealso: ["setUnion", "setIntersect", "setDifference"]
};
var setSymDifferenceDocs = {
  name: "setSymDifference",
  category: "Set",
  syntax: ["setSymDifference(set1, set2)"],
  description: "Create the symmetric difference of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
  examples: ["setSymDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setSymDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
  seealso: ["setUnion", "setIntersect", "setDifference"]
};
var setUnionDocs = {
  name: "setUnion",
  category: "Set",
  syntax: ["setUnion(set1, set2)"],
  description: "Create the union of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
  examples: ["setUnion([1, 2, 3, 4], [3, 4, 5, 6])", "setUnion([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
  seealso: ["setIntersect", "setDifference"]
};
var erfDocs = {
  name: "erf",
  category: "Special",
  syntax: ["erf(x)"],
  description: "Compute the erf function of a value using a rational Chebyshev approximations for different intervals of x",
  examples: ["erf(0.2)", "erf(-0.5)", "erf(4)"],
  seealso: []
};
var madDocs = {
  name: "mad",
  category: "Statistics",
  syntax: ["mad(a, b, c, ...)", "mad(A)"],
  description: "Compute the median absolute deviation of a matrix or a list with values. The median absolute deviation is defined as the median of the absolute deviations from the median.",
  examples: ["mad(10, 20, 30)", "mad([1, 2, 3])"],
  seealso: ["mean", "median", "std", "abs"]
};
var maxDocs = {
  name: "max",
  category: "Statistics",
  syntax: ["max(a, b, c, ...)", "max(A)", "max(A, dimension)"],
  description: "Compute the maximum value of a list of values.",
  examples: ["max(2, 3, 4, 1)", "max([2, 3, 4, 1])", "max([2, 5; 4, 3])", "max([2, 5; 4, 3], 1)", "max([2, 5; 4, 3], 2)", "max(2.7, 7.1, -4.5, 2.0, 4.1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)"],
  seealso: ["mean", "median", "min", "prod", "std", "sum", "variance"]
};
var meanDocs = {
  name: "mean",
  category: "Statistics",
  syntax: ["mean(a, b, c, ...)", "mean(A)", "mean(A, dimension)"],
  description: "Compute the arithmetic mean of a list of values.",
  examples: ["mean(2, 3, 4, 1)", "mean([2, 3, 4, 1])", "mean([2, 5; 4, 3])", "mean([2, 5; 4, 3], 1)", "mean([2, 5; 4, 3], 2)", "mean([1.0, 2.7, 3.2, 4.0])"],
  seealso: ["max", "median", "min", "prod", "std", "sum", "variance"]
};
var medianDocs = {
  name: "median",
  category: "Statistics",
  syntax: ["median(a, b, c, ...)", "median(A)"],
  description: "Compute the median of all values. The values are sorted and the middle value is returned. In case of an even number of values, the average of the two middle values is returned.",
  examples: ["median(5, 2, 7)", "median([3, -1, 5, 7])"],
  seealso: ["max", "mean", "min", "prod", "std", "sum", "variance", "quantileSeq"]
};
var minDocs = {
  name: "min",
  category: "Statistics",
  syntax: ["min(a, b, c, ...)", "min(A)", "min(A, dimension)"],
  description: "Compute the minimum value of a list of values.",
  examples: ["min(2, 3, 4, 1)", "min([2, 3, 4, 1])", "min([2, 5; 4, 3])", "min([2, 5; 4, 3], 1)", "min([2, 5; 4, 3], 2)", "min(2.7, 7.1, -4.5, 2.0, 4.1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)"],
  seealso: ["max", "mean", "median", "prod", "std", "sum", "variance"]
};
var modeDocs = {
  name: "mode",
  category: "Statistics",
  syntax: ["mode(a, b, c, ...)", "mode(A)", "mode(A, a, b, B, c, ...)"],
  description: "Computes the mode of all values as an array. In case mode being more than one, multiple values are returned in an array.",
  examples: ["mode(2, 1, 4, 3, 1)", "mode([1, 2.7, 3.2, 4, 2.7])", "mode(1, 4, 6, 1, 6)"],
  seealso: ["max", "mean", "min", "median", "prod", "std", "sum", "variance"]
};
var prodDocs = {
  name: "prod",
  category: "Statistics",
  syntax: ["prod(a, b, c, ...)", "prod(A)"],
  description: "Compute the product of all values.",
  examples: ["prod(2, 3, 4)", "prod([2, 3, 4])", "prod([2, 5; 4, 3])"],
  seealso: ["max", "mean", "min", "median", "min", "std", "sum", "variance"]
};
var quantileSeqDocs = {
  name: "quantileSeq",
  category: "Statistics",
  syntax: ["quantileSeq(A, prob[, sorted])", "quantileSeq(A, [prob1, prob2, ...][, sorted])", "quantileSeq(A, N[, sorted])"],
  description: "Compute the prob order quantile of a matrix or a list with values. The sequence is sorted and the middle value is returned. Supported types of sequence values are: Number, BigNumber, Unit Supported types of probablity are: Number, BigNumber. \n\nIn case of a (multi dimensional) array or matrix, the prob order quantile of all elements will be calculated.",
  examples: ["quantileSeq([3, -1, 5, 7], 0.5)", "quantileSeq([3, -1, 5, 7], [1/3, 2/3])", "quantileSeq([3, -1, 5, 7], 2)", "quantileSeq([-1, 3, 5, 7], 0.5, true)"],
  seealso: ["mean", "median", "min", "max", "prod", "std", "sum", "variance"]
};
var stdDocs = {
  name: "std",
  category: "Statistics",
  syntax: ["std(a, b, c, ...)", "std(A)", "std(A, dimension)", "std(A, normalization)", "std(A, dimension, normalization)"],
  description: 'Compute the standard deviation of all values, defined as std(A) = sqrt(variance(A)). Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
  examples: ["std(2, 4, 6)", "std([2, 4, 6, 8])", 'std([2, 4, 6, 8], "uncorrected")', 'std([2, 4, 6, 8], "biased")', "std([1, 2, 3; 4, 5, 6])"],
  seealso: ["max", "mean", "min", "median", "prod", "sum", "variance"]
};
var cumSumDocs = {
  name: "cumsum",
  category: "Statistics",
  syntax: ["cumsum(a, b, c, ...)", "cumsum(A)"],
  description: "Compute the cumulative sum of all values.",
  examples: ["cumsum(2, 3, 4, 1)", "cumsum([2, 3, 4, 1])", "cumsum([1, 2; 3, 4])", "cumsum([1, 2; 3, 4], 1)", "cumsum([1, 2; 3, 4], 2)"],
  seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "variance"]
};
var sumDocs = {
  name: "sum",
  category: "Statistics",
  syntax: ["sum(a, b, c, ...)", "sum(A)", "sum(A, dimension)"],
  description: "Compute the sum of all values.",
  examples: ["sum(2, 3, 4, 1)", "sum([2, 3, 4, 1])", "sum([2, 5; 4, 3])"],
  seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "variance"]
};
var varianceDocs = {
  name: "variance",
  category: "Statistics",
  syntax: ["variance(a, b, c, ...)", "variance(A)", "variance(A, dimension)", "variance(A, normalization)", "variance(A, dimension, normalization)"],
  description: 'Compute the variance of all values. Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
  examples: ["variance(2, 4, 6)", "variance([2, 4, 6, 8])", 'variance([2, 4, 6, 8], "uncorrected")', 'variance([2, 4, 6, 8], "biased")', "variance([1, 2, 3; 4, 5, 6])"],
  seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"]
};
var acosDocs = {
  name: "acos",
  category: "Trigonometry",
  syntax: ["acos(x)"],
  description: "Compute the inverse cosine of a value in radians.",
  examples: ["acos(0.5)", "acos(cos(2.3))"],
  seealso: ["cos", "atan", "asin"]
};
var acoshDocs = {
  name: "acosh",
  category: "Trigonometry",
  syntax: ["acosh(x)"],
  description: "Calculate the hyperbolic arccos of a value, defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.",
  examples: ["acosh(1.5)"],
  seealso: ["cosh", "asinh", "atanh"]
};
var acotDocs = {
  name: "acot",
  category: "Trigonometry",
  syntax: ["acot(x)"],
  description: "Calculate the inverse cotangent of a value.",
  examples: ["acot(0.5)", "acot(cot(0.5))", "acot(2)"],
  seealso: ["cot", "atan"]
};
var acothDocs = {
  name: "acoth",
  category: "Trigonometry",
  syntax: ["acoth(x)"],
  description: "Calculate the hyperbolic arccotangent of a value, defined as `acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.",
  examples: ["acoth(2)", "acoth(0.5)"],
  seealso: ["acsch", "asech"]
};
var acscDocs = {
  name: "acsc",
  category: "Trigonometry",
  syntax: ["acsc(x)"],
  description: "Calculate the inverse cotangent of a value.",
  examples: ["acsc(2)", "acsc(csc(0.5))", "acsc(0.5)"],
  seealso: ["csc", "asin", "asec"]
};
var acschDocs = {
  name: "acsch",
  category: "Trigonometry",
  syntax: ["acsch(x)"],
  description: "Calculate the hyperbolic arccosecant of a value, defined as `acsch(x) = ln(1/x + sqrt(1/x^2 + 1))`.",
  examples: ["acsch(0.5)"],
  seealso: ["asech", "acoth"]
};
var asecDocs = {
  name: "asec",
  category: "Trigonometry",
  syntax: ["asec(x)"],
  description: "Calculate the inverse secant of a value.",
  examples: ["asec(0.5)", "asec(sec(0.5))", "asec(2)"],
  seealso: ["acos", "acot", "acsc"]
};
var asechDocs = {
  name: "asech",
  category: "Trigonometry",
  syntax: ["asech(x)"],
  description: "Calculate the inverse secant of a value.",
  examples: ["asech(0.5)"],
  seealso: ["acsch", "acoth"]
};
var asinDocs = {
  name: "asin",
  category: "Trigonometry",
  syntax: ["asin(x)"],
  description: "Compute the inverse sine of a value in radians.",
  examples: ["asin(0.5)", "asin(sin(0.5))"],
  seealso: ["sin", "acos", "atan"]
};
var asinhDocs = {
  name: "asinh",
  category: "Trigonometry",
  syntax: ["asinh(x)"],
  description: "Calculate the hyperbolic arcsine of a value, defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.",
  examples: ["asinh(0.5)"],
  seealso: ["acosh", "atanh"]
};
var atanDocs = {
  name: "atan",
  category: "Trigonometry",
  syntax: ["atan(x)"],
  description: "Compute the inverse tangent of a value in radians.",
  examples: ["atan(0.5)", "atan(tan(0.5))"],
  seealso: ["tan", "acos", "asin"]
};
var atan2Docs = {
  name: "atan2",
  category: "Trigonometry",
  syntax: ["atan2(y, x)"],
  description: "Computes the principal value of the arc tangent of y/x in radians.",
  examples: ["atan2(2, 2) / pi", "angle = 60 deg in rad", "x = cos(angle)", "y = sin(angle)", "atan2(y, x)"],
  seealso: ["sin", "cos", "tan"]
};
var atanhDocs = {
  name: "atanh",
  category: "Trigonometry",
  syntax: ["atanh(x)"],
  description: "Calculate the hyperbolic arctangent of a value, defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.",
  examples: ["atanh(0.5)"],
  seealso: ["acosh", "asinh"]
};
var cosDocs = {
  name: "cos",
  category: "Trigonometry",
  syntax: ["cos(x)"],
  description: "Compute the cosine of x in radians.",
  examples: ["cos(2)", "cos(pi / 4) ^ 2", "cos(180 deg)", "cos(60 deg)", "sin(0.2)^2 + cos(0.2)^2"],
  seealso: ["acos", "sin", "tan"]
};
var coshDocs = {
  name: "cosh",
  category: "Trigonometry",
  syntax: ["cosh(x)"],
  description: "Compute the hyperbolic cosine of x in radians.",
  examples: ["cosh(0.5)"],
  seealso: ["sinh", "tanh", "coth"]
};
var cotDocs = {
  name: "cot",
  category: "Trigonometry",
  syntax: ["cot(x)"],
  description: "Compute the cotangent of x in radians. Defined as 1/tan(x)",
  examples: ["cot(2)", "1 / tan(2)"],
  seealso: ["sec", "csc", "tan"]
};
var cothDocs = {
  name: "coth",
  category: "Trigonometry",
  syntax: ["coth(x)"],
  description: "Compute the hyperbolic cotangent of x in radians.",
  examples: ["coth(2)", "1 / tanh(2)"],
  seealso: ["sech", "csch", "tanh"]
};
var cscDocs = {
  name: "csc",
  category: "Trigonometry",
  syntax: ["csc(x)"],
  description: "Compute the cosecant of x in radians. Defined as 1/sin(x)",
  examples: ["csc(2)", "1 / sin(2)"],
  seealso: ["sec", "cot", "sin"]
};
var cschDocs = {
  name: "csch",
  category: "Trigonometry",
  syntax: ["csch(x)"],
  description: "Compute the hyperbolic cosecant of x in radians. Defined as 1/sinh(x)",
  examples: ["csch(2)", "1 / sinh(2)"],
  seealso: ["sech", "coth", "sinh"]
};
var secDocs = {
  name: "sec",
  category: "Trigonometry",
  syntax: ["sec(x)"],
  description: "Compute the secant of x in radians. Defined as 1/cos(x)",
  examples: ["sec(2)", "1 / cos(2)"],
  seealso: ["cot", "csc", "cos"]
};
var sechDocs = {
  name: "sech",
  category: "Trigonometry",
  syntax: ["sech(x)"],
  description: "Compute the hyperbolic secant of x in radians. Defined as 1/cosh(x)",
  examples: ["sech(2)", "1 / cosh(2)"],
  seealso: ["coth", "csch", "cosh"]
};
var sinDocs = {
  name: "sin",
  category: "Trigonometry",
  syntax: ["sin(x)"],
  description: "Compute the sine of x in radians.",
  examples: ["sin(2)", "sin(pi / 4) ^ 2", "sin(90 deg)", "sin(30 deg)", "sin(0.2)^2 + cos(0.2)^2"],
  seealso: ["asin", "cos", "tan"]
};
var sinhDocs = {
  name: "sinh",
  category: "Trigonometry",
  syntax: ["sinh(x)"],
  description: "Compute the hyperbolic sine of x in radians.",
  examples: ["sinh(0.5)"],
  seealso: ["cosh", "tanh"]
};
var tanDocs = {
  name: "tan",
  category: "Trigonometry",
  syntax: ["tan(x)"],
  description: "Compute the tangent of x in radians.",
  examples: ["tan(0.5)", "sin(0.5) / cos(0.5)", "tan(pi / 4)", "tan(45 deg)"],
  seealso: ["atan", "sin", "cos"]
};
var tanhDocs = {
  name: "tanh",
  category: "Trigonometry",
  syntax: ["tanh(x)"],
  description: "Compute the hyperbolic tangent of x in radians.",
  examples: ["tanh(0.5)", "sinh(0.5) / cosh(0.5)"],
  seealso: ["sinh", "cosh"]
};
var toDocs = {
  name: "to",
  category: "Units",
  syntax: ["x to unit", "to(x, unit)"],
  description: "Change the unit of a value.",
  examples: ["5 inch to cm", "3.2kg to g", "16 bytes in bits"],
  seealso: []
};
var binDocs = {
  name: "bin",
  category: "Utils",
  syntax: ["bin(value)"],
  description: "Format a number as binary",
  examples: ["bin(2)"],
  seealso: ["oct", "hex"]
};
var cloneDocs = {
  name: "clone",
  category: "Utils",
  syntax: ["clone(x)"],
  description: "Clone a variable. Creates a copy of primitive variables,and a deep copy of matrices",
  examples: ["clone(3.5)", "clone(2 - 4i)", "clone(45 deg)", "clone([1, 2; 3, 4])", 'clone("hello world")'],
  seealso: []
};
var formatDocs = {
  name: "format",
  category: "Utils",
  syntax: ["format(value)", "format(value, precision)"],
  description: "Format a value of any type as string.",
  examples: ["format(2.3)", "format(3 - 4i)", "format([])", "format(pi, 3)"],
  seealso: ["print"]
};
var hasNumericValueDocs = {
  name: "hasNumericValue",
  category: "Utils",
  syntax: ["hasNumericValue(x)"],
  description: "Test whether a value is an numeric value. In case of a string, true is returned if the string contains a numeric value.",
  examples: ["hasNumericValue(2)", 'hasNumericValue("2")', 'isNumeric("2")', "hasNumericValue(0)", "hasNumericValue(bignumber(500))", "hasNumericValue(fraction(0.125))", "hasNumericValue(2 + 3i)", 'hasNumericValue([2.3, "foo", false])'],
  seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "isNumeric"]
};
var hexDocs = {
  name: "hex",
  category: "Utils",
  syntax: ["hex(value)"],
  description: "Format a number as hexadecimal",
  examples: ["hex(240)"],
  seealso: ["bin", "oct"]
};
var isIntegerDocs = {
  name: "isInteger",
  category: "Utils",
  syntax: ["isInteger(x)"],
  description: "Test whether a value is an integer number.",
  examples: ["isInteger(2)", "isInteger(3.5)", "isInteger([3, 0.5, -2])"],
  seealso: ["isNegative", "isNumeric", "isPositive", "isZero"]
};
var isNaNDocs = {
  name: "isNaN",
  category: "Utils",
  syntax: ["isNaN(x)"],
  description: "Test whether a value is NaN (not a number)",
  examples: ["isNaN(2)", "isNaN(0 / 0)", "isNaN(NaN)", "isNaN(Infinity)"],
  seealso: ["isNegative", "isNumeric", "isPositive", "isZero"]
};
var isNegativeDocs = {
  name: "isNegative",
  category: "Utils",
  syntax: ["isNegative(x)"],
  description: "Test whether a value is negative: smaller than zero.",
  examples: ["isNegative(2)", "isNegative(0)", "isNegative(-4)", "isNegative([3, 0.5, -2])"],
  seealso: ["isInteger", "isNumeric", "isPositive", "isZero"]
};
var isNumericDocs = {
  name: "isNumeric",
  category: "Utils",
  syntax: ["isNumeric(x)"],
  description: "Test whether a value is a numeric value. Returns true when the input is a number, BigNumber, Fraction, or boolean.",
  examples: ["isNumeric(2)", 'isNumeric("2")', 'hasNumericValue("2")', "isNumeric(0)", "isNumeric(bignumber(500))", "isNumeric(fraction(0.125))", "isNumeric(2 + 3i)", 'isNumeric([2.3, "foo", false])'],
  seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "hasNumericValue"]
};
var isPositiveDocs = {
  name: "isPositive",
  category: "Utils",
  syntax: ["isPositive(x)"],
  description: "Test whether a value is positive: larger than zero.",
  examples: ["isPositive(2)", "isPositive(0)", "isPositive(-4)", "isPositive([3, 0.5, -2])"],
  seealso: ["isInteger", "isNumeric", "isNegative", "isZero"]
};
var isPrimeDocs = {
  name: "isPrime",
  category: "Utils",
  syntax: ["isPrime(x)"],
  description: "Test whether a value is prime: has no divisors other than itself and one.",
  examples: ["isPrime(3)", "isPrime(-2)", "isPrime([2, 17, 100])"],
  seealso: ["isInteger", "isNumeric", "isNegative", "isZero"]
};
var isZeroDocs = {
  name: "isZero",
  category: "Utils",
  syntax: ["isZero(x)"],
  description: "Test whether a value is zero.",
  examples: ["isZero(2)", "isZero(0)", "isZero(-4)", "isZero([3, 0, -2, 0])"],
  seealso: ["isInteger", "isNumeric", "isNegative", "isPositive"]
};
var numericDocs = {
  name: "numeric",
  category: "Utils",
  syntax: ["numeric(x)"],
  description: "Convert a numeric input to a specific numeric type: number, BigNumber, or Fraction.",
  examples: ['numeric("4")', 'numeric("4", "number")', 'numeric("4", "BigNumber")', 'numeric("4", "Fraction)', 'numeric(4, "Fraction")', 'numeric(fraction(2, 5), "number)'],
  seealso: ["number", "fraction", "bignumber", "string", "format"]
};
var octDocs = {
  name: "oct",
  category: "Utils",
  syntax: ["oct(value)"],
  description: "Format a number as octal",
  examples: ["oct(56)"],
  seealso: ["bin", "hex"]
};
var printDocs = {
  name: "print",
  category: "Utils",
  syntax: ["print(template, values)", "print(template, values, precision)"],
  description: "Interpolate values into a string template.",
  examples: ['print("Lucy is $age years old", {age: 5})', 'print("The value of pi is $pi", {pi: pi}, 3)', 'print("Hello, $user.name!", {user: {name: "John"}})', 'print("Values: $0, $1, $2", [6, 9, 4])'],
  seealso: ["format"]
};
var typeOfDocs = {
  name: "typeOf",
  category: "Utils",
  syntax: ["typeOf(x)"],
  description: "Get the type of a variable.",
  examples: ["typeOf(3.5)", "typeOf(2 - 4i)", "typeOf(45 deg)", 'typeOf("hello world")'],
  seealso: ["getMatrixDataType"]
};
var embeddedDocs = {
  bignumber: bignumberDocs,
  boolean: booleanDocs,
  complex: complexDocs,
  createUnit: createUnitDocs,
  fraction: fractionDocs,
  index: indexDocs,
  matrix: matrixDocs,
  number: numberDocs,
  sparse: sparseDocs,
  splitUnit: splitUnitDocs,
  string: stringDocs,
  unit: unitDocs,
  e: eDocs,
  E: eDocs,
  false: falseDocs,
  i: iDocs,
  Infinity: InfinityDocs,
  LN2: LN2Docs,
  LN10: LN10Docs,
  LOG2E: LOG2EDocs,
  LOG10E: LOG10EDocs,
  NaN: NaNDocs,
  null: nullDocs,
  pi: piDocs,
  PI: piDocs,
  phi: phiDocs,
  SQRT1_2: SQRT12Docs,
  SQRT2: SQRT2Docs,
  tau: tauDocs,
  true: trueDocs,
  version: versionDocs,
  speedOfLight: {
    description: "Speed of light in vacuum",
    examples: ["speedOfLight"]
  },
  gravitationConstant: {
    description: "Newtonian constant of gravitation",
    examples: ["gravitationConstant"]
  },
  planckConstant: {
    description: "Planck constant",
    examples: ["planckConstant"]
  },
  reducedPlanckConstant: {
    description: "Reduced Planck constant",
    examples: ["reducedPlanckConstant"]
  },
  magneticConstant: {
    description: "Magnetic constant (vacuum permeability)",
    examples: ["magneticConstant"]
  },
  electricConstant: {
    description: "Electric constant (vacuum permeability)",
    examples: ["electricConstant"]
  },
  vacuumImpedance: {
    description: "Characteristic impedance of vacuum",
    examples: ["vacuumImpedance"]
  },
  coulomb: {
    description: "Coulomb's constant",
    examples: ["coulomb"]
  },
  elementaryCharge: {
    description: "Elementary charge",
    examples: ["elementaryCharge"]
  },
  bohrMagneton: {
    description: "Borh magneton",
    examples: ["bohrMagneton"]
  },
  conductanceQuantum: {
    description: "Conductance quantum",
    examples: ["conductanceQuantum"]
  },
  inverseConductanceQuantum: {
    description: "Inverse conductance quantum",
    examples: ["inverseConductanceQuantum"]
  },
  magneticFluxQuantum: {
    description: "Magnetic flux quantum",
    examples: ["magneticFluxQuantum"]
  },
  nuclearMagneton: {
    description: "Nuclear magneton",
    examples: ["nuclearMagneton"]
  },
  klitzing: {
    description: "Von Klitzing constant",
    examples: ["klitzing"]
  },
  bohrRadius: {
    description: "Borh radius",
    examples: ["bohrRadius"]
  },
  classicalElectronRadius: {
    description: "Classical electron radius",
    examples: ["classicalElectronRadius"]
  },
  electronMass: {
    description: "Electron mass",
    examples: ["electronMass"]
  },
  fermiCoupling: {
    description: "Fermi coupling constant",
    examples: ["fermiCoupling"]
  },
  fineStructure: {
    description: "Fine-structure constant",
    examples: ["fineStructure"]
  },
  hartreeEnergy: {
    description: "Hartree energy",
    examples: ["hartreeEnergy"]
  },
  protonMass: {
    description: "Proton mass",
    examples: ["protonMass"]
  },
  deuteronMass: {
    description: "Deuteron Mass",
    examples: ["deuteronMass"]
  },
  neutronMass: {
    description: "Neutron mass",
    examples: ["neutronMass"]
  },
  quantumOfCirculation: {
    description: "Quantum of circulation",
    examples: ["quantumOfCirculation"]
  },
  rydberg: {
    description: "Rydberg constant",
    examples: ["rydberg"]
  },
  thomsonCrossSection: {
    description: "Thomson cross section",
    examples: ["thomsonCrossSection"]
  },
  weakMixingAngle: {
    description: "Weak mixing angle",
    examples: ["weakMixingAngle"]
  },
  efimovFactor: {
    description: "Efimov factor",
    examples: ["efimovFactor"]
  },
  atomicMass: {
    description: "Atomic mass constant",
    examples: ["atomicMass"]
  },
  avogadro: {
    description: "Avogadro's number",
    examples: ["avogadro"]
  },
  boltzmann: {
    description: "Boltzmann constant",
    examples: ["boltzmann"]
  },
  faraday: {
    description: "Faraday constant",
    examples: ["faraday"]
  },
  firstRadiation: {
    description: "First radiation constant",
    examples: ["firstRadiation"]
  },
  loschmidt: {
    description: "Loschmidt constant at T=273.15 K and p=101.325 kPa",
    examples: ["loschmidt"]
  },
  gasConstant: {
    description: "Gas constant",
    examples: ["gasConstant"]
  },
  molarPlanckConstant: {
    description: "Molar Planck constant",
    examples: ["molarPlanckConstant"]
  },
  molarVolume: {
    description: "Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa",
    examples: ["molarVolume"]
  },
  sackurTetrode: {
    description: "Sackur-Tetrode constant at T=1 K and p=101.325 kPa",
    examples: ["sackurTetrode"]
  },
  secondRadiation: {
    description: "Second radiation constant",
    examples: ["secondRadiation"]
  },
  stefanBoltzmann: {
    description: "Stefan-Boltzmann constant",
    examples: ["stefanBoltzmann"]
  },
  wienDisplacement: {
    description: "Wien displacement law constant",
    examples: ["wienDisplacement"]
  },
  molarMass: {
    description: "Molar mass constant",
    examples: ["molarMass"]
  },
  molarMassC12: {
    description: "Molar mass constant of carbon-12",
    examples: ["molarMassC12"]
  },
  gravity: {
    description: "Standard acceleration of gravity (standard acceleration of free-fall on Earth)",
    examples: ["gravity"]
  },
  planckLength: {
    description: "Planck length",
    examples: ["planckLength"]
  },
  planckMass: {
    description: "Planck mass",
    examples: ["planckMass"]
  },
  planckTime: {
    description: "Planck time",
    examples: ["planckTime"]
  },
  planckCharge: {
    description: "Planck charge",
    examples: ["planckCharge"]
  },
  planckTemperature: {
    description: "Planck temperature",
    examples: ["planckTemperature"]
  },
  derivative: derivativeDocs,
  lsolve: lsolveDocs,
  lsolveAll: lsolveAllDocs,
  lup: lupDocs,
  lusolve: lusolveDocs,
  leafCount: leafCountDocs,
  polynomialRoot: polynomialRootDocs,
  resolve: resolveDocs,
  simplify: simplifyDocs,
  simplifyConstant: simplifyConstantDocs,
  simplifyCore: simplifyCoreDocs,
  symbolicEqual: symbolicEqualDocs,
  rationalize: rationalizeDocs,
  slu: sluDocs,
  usolve: usolveDocs,
  usolveAll: usolveAllDocs,
  qr: qrDocs,
  abs: absDocs,
  add: addDocs,
  cbrt: cbrtDocs,
  ceil: ceilDocs,
  cube: cubeDocs,
  divide: divideDocs,
  dotDivide: dotDivideDocs,
  dotMultiply: dotMultiplyDocs,
  dotPow: dotPowDocs,
  exp: expDocs,
  expm: expmDocs,
  expm1: expm1Docs,
  fix: fixDocs,
  floor: floorDocs,
  gcd: gcdDocs,
  hypot: hypotDocs,
  lcm: lcmDocs,
  log: logDocs,
  log2: log2Docs,
  log1p: log1pDocs,
  log10: log10Docs,
  mod: modDocs,
  multiply: multiplyDocs,
  norm: normDocs,
  nthRoot: nthRootDocs,
  nthRoots: nthRootsDocs,
  pow: powDocs,
  round: roundDocs,
  sign: signDocs,
  sqrt: sqrtDocs,
  sqrtm: sqrtmDocs,
  square: squareDocs,
  subtract: subtractDocs,
  unaryMinus: unaryMinusDocs,
  unaryPlus: unaryPlusDocs,
  xgcd: xgcdDocs,
  invmod: invmodDocs,
  bitAnd: bitAndDocs,
  bitNot: bitNotDocs,
  bitOr: bitOrDocs,
  bitXor: bitXorDocs,
  leftShift: leftShiftDocs,
  rightArithShift: rightArithShiftDocs,
  rightLogShift: rightLogShiftDocs,
  bellNumbers: bellNumbersDocs,
  catalan: catalanDocs,
  composition: compositionDocs,
  stirlingS2: stirlingS2Docs,
  config: configDocs,
  import: importDocs,
  typed: typedDocs,
  arg: argDocs,
  conj: conjDocs,
  re: reDocs,
  im: imDocs,
  evaluate: evaluateDocs,
  help: helpDocs,
  distance: distanceDocs,
  intersect: intersectDocs,
  and: andDocs,
  not: notDocs,
  or: orDocs,
  xor: xorDocs,
  concat: concatDocs,
  count: countDocs,
  cross: crossDocs,
  column: columnDocs,
  ctranspose: ctransposeDocs,
  det: detDocs,
  diag: diagDocs,
  diff: diffDocs,
  dot: dotDocs,
  getMatrixDataType: getMatrixDataTypeDocs,
  identity: identityDocs,
  filter: filterDocs,
  flatten: flattenDocs,
  forEach: forEachDocs,
  inv: invDocs,
  pinv: pinvDocs,
  eigs: eigsDocs,
  kron: kronDocs,
  matrixFromFunction: matrixFromFunctionDocs,
  matrixFromRows: matrixFromRowsDocs,
  matrixFromColumns: matrixFromColumnsDocs,
  map: mapDocs,
  ones: onesDocs,
  partitionSelect: partitionSelectDocs,
  range: rangeDocs,
  resize: resizeDocs,
  reshape: reshapeDocs,
  rotate: rotateDocs,
  rotationMatrix: rotationMatrixDocs,
  row: rowDocs,
  size: sizeDocs,
  sort: sortDocs,
  squeeze: squeezeDocs,
  subset: subsetDocs,
  trace: traceDocs,
  transpose: transposeDocs,
  zeros: zerosDocs,
  fft: fftDocs,
  ifft: ifftDocs,
  sylvester: sylvesterDocs,
  schur: schurDocs,
  lyap: lyapDocs,
  combinations: combinationsDocs,
  combinationsWithRep: combinationsWithRepDocs,
  factorial: factorialDocs,
  gamma: gammaDocs,
  kldivergence: kldivergenceDocs,
  lgamma: lgammaDocs,
  multinomial: multinomialDocs,
  permutations: permutationsDocs,
  pickRandom: pickRandomDocs,
  random: randomDocs,
  randomInt: randomIntDocs,
  compare: compareDocs,
  compareNatural: compareNaturalDocs,
  compareText: compareTextDocs,
  deepEqual: deepEqualDocs,
  equal: equalDocs,
  equalText: equalTextDocs,
  larger: largerDocs,
  largerEq: largerEqDocs,
  smaller: smallerDocs,
  smallerEq: smallerEqDocs,
  unequal: unequalDocs,
  setCartesian: setCartesianDocs,
  setDifference: setDifferenceDocs,
  setDistinct: setDistinctDocs,
  setIntersect: setIntersectDocs,
  setIsSubset: setIsSubsetDocs,
  setMultiplicity: setMultiplicityDocs,
  setPowerset: setPowersetDocs,
  setSize: setSizeDocs,
  setSymDifference: setSymDifferenceDocs,
  setUnion: setUnionDocs,
  erf: erfDocs,
  cumsum: cumSumDocs,
  mad: madDocs,
  max: maxDocs,
  mean: meanDocs,
  median: medianDocs,
  min: minDocs,
  mode: modeDocs,
  prod: prodDocs,
  quantileSeq: quantileSeqDocs,
  std: stdDocs,
  sum: sumDocs,
  variance: varianceDocs,
  acos: acosDocs,
  acosh: acoshDocs,
  acot: acotDocs,
  acoth: acothDocs,
  acsc: acscDocs,
  acsch: acschDocs,
  asec: asecDocs,
  asech: asechDocs,
  asin: asinDocs,
  asinh: asinhDocs,
  atan: atanDocs,
  atanh: atanhDocs,
  atan2: atan2Docs,
  cos: cosDocs,
  cosh: coshDocs,
  cot: cotDocs,
  coth: cothDocs,
  csc: cscDocs,
  csch: cschDocs,
  sec: secDocs,
  sech: sechDocs,
  sin: sinDocs,
  sinh: sinhDocs,
  tan: tanDocs,
  tanh: tanhDocs,
  to: toDocs,
  clone: cloneDocs,
  format: formatDocs,
  bin: binDocs,
  oct: octDocs,
  hex: hexDocs,
  isNaN: isNaNDocs,
  isInteger: isIntegerDocs,
  isNegative: isNegativeDocs,
  isNumeric: isNumericDocs,
  hasNumericValue: hasNumericValueDocs,
  isPositive: isPositiveDocs,
  isPrime: isPrimeDocs,
  isZero: isZeroDocs,
  print: printDocs,
  typeOf: typeOfDocs,
  numeric: numericDocs
};
var name$19 = "help";
var dependencies$19 = ["typed", "mathWithTransform", "Help"];
var createHelp = /* @__PURE__ */ factory(name$19, dependencies$19, (_ref) => {
  var {
    typed,
    mathWithTransform,
    Help
  } = _ref;
  return typed(name$19, {
    any: function any(search) {
      var prop;
      var searchName = search;
      if (typeof search !== "string") {
        for (prop in mathWithTransform) {
          if (hasOwnProperty$1(mathWithTransform, prop) && search === mathWithTransform[prop]) {
            searchName = prop;
            break;
          }
        }
      }
      var doc = getSafeProperty(embeddedDocs, searchName);
      if (!doc) {
        var searchText = typeof searchName === "function" ? searchName.name : searchName;
        throw new Error('No documentation found on "' + searchText + '"');
      }
      return new Help(doc);
    }
  });
});
var name$1a = "chain";
var dependencies$1a = ["typed", "Chain"];
var createChain = /* @__PURE__ */ factory(name$1a, dependencies$1a, (_ref) => {
  var {
    typed,
    Chain
  } = _ref;
  return typed(name$1a, {
    "": function _() {
      return new Chain();
    },
    any: function any(value) {
      return new Chain(value);
    }
  });
});
var name$1b = "sum";
var dependencies$1b = ["typed", "config", "add", "numeric"];
var createSum = /* @__PURE__ */ factory(name$1b, dependencies$1b, (_ref) => {
  var {
    typed,
    config: config3,
    add,
    numeric: numeric2
  } = _ref;
  return typed(name$1b, {
    "Array | Matrix": _sum,
    "Array | Matrix, number | BigNumber": _nsumDim,
    "...": function _(args) {
      if (containsCollections(args)) {
        throw new TypeError("Scalar values expected in function sum");
      }
      return _sum(args);
    }
  });
  function _sum(array) {
    var sum;
    deepForEach(array, function(value) {
      try {
        sum = sum === void 0 ? value : add(sum, value);
      } catch (err) {
        throw improveErrorMessage(err, "sum", value);
      }
    });
    if (sum === void 0) {
      sum = numeric2(0, config3.number);
    }
    if (typeof sum === "string") {
      sum = numeric2(sum, config3.number);
    }
    return sum;
  }
  function _nsumDim(array, dim) {
    try {
      var sum = reduce(array, dim, add);
      return sum;
    } catch (err) {
      throw improveErrorMessage(err, "sum");
    }
  }
});
var name$1c = "cumsum";
var dependencies$1c = ["typed", "add", "unaryPlus"];
var createCumSum = /* @__PURE__ */ factory(name$1c, dependencies$1c, (_ref) => {
  var {
    typed,
    add,
    unaryPlus
  } = _ref;
  return typed(name$1c, {
    Array: _cumsum,
    Matrix: function Matrix(matrix) {
      return matrix.create(_cumsum(matrix.valueOf()));
    },
    "Array, number | BigNumber": _ncumSumDim,
    "Matrix, number | BigNumber": function MatrixNumberBigNumber(matrix, dim) {
      return matrix.create(_ncumSumDim(matrix.valueOf(), dim));
    },
    "...": function _(args) {
      if (containsCollections(args)) {
        throw new TypeError("All values expected to be scalar in function cumsum");
      }
      return _cumsum(args);
    }
  });
  function _cumsum(array) {
    try {
      return _cumsummap(array);
    } catch (err) {
      throw improveErrorMessage(err, name$1c);
    }
  }
  function _cumsummap(array) {
    if (array.length === 0) {
      return [];
    }
    var sums = [unaryPlus(array[0])];
    for (var i = 1; i < array.length; ++i) {
      sums.push(add(sums[i - 1], array[i]));
    }
    return sums;
  }
  function _ncumSumDim(array, dim) {
    var size = arraySize(array);
    if (dim < 0 || dim >= size.length) {
      throw new IndexError(dim, size.length);
    }
    try {
      return _cumsumDimensional(array, dim);
    } catch (err) {
      throw improveErrorMessage(err, name$1c);
    }
  }
  function _cumsumDimensional(mat, dim) {
    var i, ret, tran;
    if (dim <= 0) {
      var initialValue = mat[0][0];
      if (!Array.isArray(initialValue)) {
        return _cumsummap(mat);
      } else {
        tran = _switch(mat);
        ret = [];
        for (i = 0; i < tran.length; i++) {
          ret[i] = _cumsumDimensional(tran[i], dim - 1);
        }
        return ret;
      }
    } else {
      ret = [];
      for (i = 0; i < mat.length; i++) {
        ret[i] = _cumsumDimensional(mat[i], dim - 1);
      }
      return ret;
    }
  }
});
var name$1d = "mean";
var dependencies$1d = ["typed", "add", "divide"];
var createMean = /* @__PURE__ */ factory(name$1d, dependencies$1d, (_ref) => {
  var {
    typed,
    add,
    divide
  } = _ref;
  return typed(name$1d, {
    "Array | Matrix": _mean,
    "Array | Matrix, number | BigNumber": _nmeanDim,
    "...": function _(args) {
      if (containsCollections(args)) {
        throw new TypeError("Scalar values expected in function mean");
      }
      return _mean(args);
    }
  });
  function _nmeanDim(array, dim) {
    try {
      var sum = reduce(array, dim, add);
      var s = Array.isArray(array) ? arraySize(array) : array.size();
      return divide(sum, s[dim]);
    } catch (err) {
      throw improveErrorMessage(err, "mean");
    }
  }
  function _mean(array) {
    var sum;
    var num = 0;
    deepForEach(array, function(value) {
      try {
        sum = sum === void 0 ? value : add(sum, value);
        num++;
      } catch (err) {
        throw improveErrorMessage(err, "mean", value);
      }
    });
    if (num === 0) {
      throw new Error("Cannot calculate the mean of an empty array");
    }
    return divide(sum, num);
  }
});
var name$1e = "median";
var dependencies$1e = ["typed", "add", "divide", "compare", "partitionSelect"];
var createMedian = /* @__PURE__ */ factory(name$1e, dependencies$1e, (_ref) => {
  var {
    typed,
    add,
    divide,
    compare,
    partitionSelect
  } = _ref;
  function _median(array) {
    try {
      array = flatten(array.valueOf());
      var num = array.length;
      if (num === 0) {
        throw new Error("Cannot calculate median of an empty array");
      }
      if (num % 2 === 0) {
        var mid = num / 2 - 1;
        var right = partitionSelect(array, mid + 1);
        var left = array[mid];
        for (var i = 0; i < mid; ++i) {
          if (compare(array[i], left) > 0) {
            left = array[i];
          }
        }
        return middle2(left, right);
      } else {
        var m = partitionSelect(array, (num - 1) / 2);
        return middle(m);
      }
    } catch (err) {
      throw improveErrorMessage(err, "median");
    }
  }
  var middle = typed({
    "number | BigNumber | Complex | Unit": function numberBigNumberComplexUnit(value) {
      return value;
    }
  });
  var middle2 = typed({
    "number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit": function numberBigNumberComplexUnitNumberBigNumberComplexUnit(left, right) {
      return divide(add(left, right), 2);
    }
  });
  return typed(name$1e, {
    "Array | Matrix": _median,
    "Array | Matrix, number | BigNumber": function ArrayMatrixNumberBigNumber(array, dim) {
      throw new Error("median(A, dim) is not yet supported");
    },
    "...": function _(args) {
      if (containsCollections(args)) {
        throw new TypeError("Scalar values expected in function median");
      }
      return _median(args);
    }
  });
});
var name$1f = "mad";
var dependencies$1f = ["typed", "abs", "map", "median", "subtract"];
var createMad = /* @__PURE__ */ factory(name$1f, dependencies$1f, (_ref) => {
  var {
    typed,
    abs,
    map: map2,
    median,
    subtract
  } = _ref;
  return typed(name$1f, {
    "Array | Matrix": _mad,
    "...": function _(args) {
      return _mad(args);
    }
  });
  function _mad(array) {
    array = flatten(array.valueOf());
    if (array.length === 0) {
      throw new Error("Cannot calculate median absolute deviation (mad) of an empty array");
    }
    try {
      var med = median(array);
      return median(map2(array, function(value) {
        return abs(subtract(value, med));
      }));
    } catch (err) {
      if (err instanceof TypeError && err.message.indexOf("median") !== -1) {
        throw new TypeError(err.message.replace("median", "mad"));
      } else {
        throw improveErrorMessage(err, "mad");
      }
    }
  }
});
var DEFAULT_NORMALIZATION = "unbiased";
var name$1g = "variance";
var dependencies$1g = ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"];
var createVariance = /* @__PURE__ */ factory(name$1g, dependencies$1g, (_ref) => {
  var {
    typed,
    add,
    subtract,
    multiply,
    divide,
    apply,
    isNaN: isNaN2
  } = _ref;
  return typed(name$1g, {
    "Array | Matrix": function ArrayMatrix(array) {
      return _var(array, DEFAULT_NORMALIZATION);
    },
    "Array | Matrix, string": _var,
    "Array | Matrix, number | BigNumber": function ArrayMatrixNumberBigNumber(array, dim) {
      return _varDim(array, dim, DEFAULT_NORMALIZATION);
    },
    "Array | Matrix, number | BigNumber, string": _varDim,
    "...": function _(args) {
      return _var(args, DEFAULT_NORMALIZATION);
    }
  });
  function _var(array, normalization) {
    var sum;
    var num = 0;
    if (array.length === 0) {
      throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
    }
    deepForEach(array, function(value) {
      try {
        sum = sum === void 0 ? value : add(sum, value);
        num++;
      } catch (err) {
        throw improveErrorMessage(err, "variance", value);
      }
    });
    if (num === 0)
      throw new Error("Cannot calculate variance of an empty array");
    var mean = divide(sum, num);
    sum = void 0;
    deepForEach(array, function(value) {
      var diff = subtract(value, mean);
      sum = sum === void 0 ? multiply(diff, diff) : add(sum, multiply(diff, diff));
    });
    if (isNaN2(sum)) {
      return sum;
    }
    switch (normalization) {
      case "uncorrected":
        return divide(sum, num);
      case "biased":
        return divide(sum, num + 1);
      case "unbiased": {
        var zero = isBigNumber(sum) ? sum.mul(0) : 0;
        return num === 1 ? zero : divide(sum, num - 1);
      }
      default:
        throw new Error('Unknown normalization "' + normalization + '". Choose "unbiased" (default), "uncorrected", or "biased".');
    }
  }
  function _varDim(array, dim, normalization) {
    try {
      if (array.length === 0) {
        throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
      }
      return apply(array, dim, (x) => _var(x, normalization));
    } catch (err) {
      throw improveErrorMessage(err, "variance");
    }
  }
});
var name$1h = "quantileSeq";
var dependencies$1h = ["typed", "add", "multiply", "partitionSelect", "compare"];
var createQuantileSeq = /* @__PURE__ */ factory(name$1h, dependencies$1h, (_ref) => {
  var {
    typed,
    add,
    multiply,
    partitionSelect,
    compare
  } = _ref;
  function quantileSeq(data, probOrN, sorted) {
    var probArr, dataArr, one;
    if (arguments.length < 2 || arguments.length > 3) {
      throw new SyntaxError("Function quantileSeq requires two or three parameters");
    }
    if (isCollection(data)) {
      sorted = sorted || false;
      if (typeof sorted === "boolean") {
        dataArr = data.valueOf();
        if (isNumber(probOrN)) {
          if (probOrN < 0) {
            throw new Error("N/prob must be non-negative");
          }
          if (probOrN <= 1) {
            return _quantileSeq(dataArr, probOrN, sorted);
          }
          if (probOrN > 1) {
            if (!isInteger(probOrN)) {
              throw new Error("N must be a positive integer");
            }
            var nPlusOne = probOrN + 1;
            probArr = new Array(probOrN);
            for (var i = 0; i < probOrN; ) {
              probArr[i] = _quantileSeq(dataArr, ++i / nPlusOne, sorted);
            }
            return probArr;
          }
        }
        if (isBigNumber(probOrN)) {
          var BigNumber = probOrN.constructor;
          if (probOrN.isNegative()) {
            throw new Error("N/prob must be non-negative");
          }
          one = new BigNumber(1);
          if (probOrN.lte(one)) {
            return new BigNumber(_quantileSeq(dataArr, probOrN, sorted));
          }
          if (probOrN.gt(one)) {
            if (!probOrN.isInteger()) {
              throw new Error("N must be a positive integer");
            }
            var intN = probOrN.toNumber();
            if (intN > 4294967295) {
              throw new Error("N must be less than or equal to 2^32-1, as that is the maximum length of an Array");
            }
            var _nPlusOne = new BigNumber(intN + 1);
            probArr = new Array(intN);
            for (var _i = 0; _i < intN; ) {
              probArr[_i] = new BigNumber(_quantileSeq(dataArr, new BigNumber(++_i).div(_nPlusOne), sorted));
            }
            return probArr;
          }
        }
        if (isCollection(probOrN)) {
          var probOrNArr = probOrN.valueOf();
          probArr = new Array(probOrNArr.length);
          for (var _i2 = 0; _i2 < probArr.length; ++_i2) {
            var currProb = probOrNArr[_i2];
            if (isNumber(currProb)) {
              if (currProb < 0 || currProb > 1) {
                throw new Error("Probability must be between 0 and 1, inclusive");
              }
            } else if (isBigNumber(currProb)) {
              one = new currProb.constructor(1);
              if (currProb.isNegative() || currProb.gt(one)) {
                throw new Error("Probability must be between 0 and 1, inclusive");
              }
            } else {
              throw new TypeError("Unexpected type of argument in function quantileSeq");
            }
            probArr[_i2] = _quantileSeq(dataArr, currProb, sorted);
          }
          return probArr;
        }
        throw new TypeError("Unexpected type of argument in function quantileSeq");
      }
      throw new TypeError("Unexpected type of argument in function quantileSeq");
    }
    throw new TypeError("Unexpected type of argument in function quantileSeq");
  }
  function _quantileSeq(array, prob, sorted) {
    var flat = flatten(array);
    var len = flat.length;
    if (len === 0) {
      throw new Error("Cannot calculate quantile of an empty sequence");
    }
    if (isNumber(prob)) {
      var _index = prob * (len - 1);
      var _fracPart = _index % 1;
      if (_fracPart === 0) {
        var value = sorted ? flat[_index] : partitionSelect(flat, _index);
        validate2(value);
        return value;
      }
      var _integerPart = Math.floor(_index);
      var _left;
      var _right;
      if (sorted) {
        _left = flat[_integerPart];
        _right = flat[_integerPart + 1];
      } else {
        _right = partitionSelect(flat, _integerPart + 1);
        _left = flat[_integerPart];
        for (var i = 0; i < _integerPart; ++i) {
          if (compare(flat[i], _left) > 0) {
            _left = flat[i];
          }
        }
      }
      validate2(_left);
      validate2(_right);
      return add(multiply(_left, 1 - _fracPart), multiply(_right, _fracPart));
    }
    var index = prob.times(len - 1);
    if (index.isInteger()) {
      index = index.toNumber();
      var _value = sorted ? flat[index] : partitionSelect(flat, index);
      validate2(_value);
      return _value;
    }
    var integerPart = index.floor();
    var fracPart = index.minus(integerPart);
    var integerPartNumber = integerPart.toNumber();
    var left;
    var right;
    if (sorted) {
      left = flat[integerPartNumber];
      right = flat[integerPartNumber + 1];
    } else {
      right = partitionSelect(flat, integerPartNumber + 1);
      left = flat[integerPartNumber];
      for (var _i3 = 0; _i3 < integerPartNumber; ++_i3) {
        if (compare(flat[_i3], left) > 0) {
          left = flat[_i3];
        }
      }
    }
    validate2(left);
    validate2(right);
    var one = new fracPart.constructor(1);
    return add(multiply(left, one.minus(fracPart)), multiply(right, fracPart));
  }
  var validate2 = typed({
    "number | BigNumber | Unit": function numberBigNumberUnit(x) {
      return x;
    }
  });
  return quantileSeq;
});
var name$1i = "std";
var dependencies$1i = ["typed", "map", "sqrt", "variance"];
var createStd = /* @__PURE__ */ factory(name$1i, dependencies$1i, (_ref) => {
  var {
    typed,
    map: map2,
    sqrt,
    variance
  } = _ref;
  return typed(name$1i, {
    "Array | Matrix": _std,
    "Array | Matrix, string": _std,
    "Array | Matrix, number | BigNumber": _std,
    "Array | Matrix, number | BigNumber, string": _std,
    "...": function _(args) {
      return _std(args);
    }
  });
  function _std(array, normalization) {
    if (array.length === 0) {
      throw new SyntaxError("Function std requires one or more parameters (0 provided)");
    }
    try {
      var v = variance.apply(null, arguments);
      if (isCollection(v)) {
        return map2(v, sqrt);
      } else {
        return sqrt(v);
      }
    } catch (err) {
      if (err instanceof TypeError && err.message.indexOf(" variance") !== -1) {
        throw new TypeError(err.message.replace(" variance", " std"));
      } else {
        throw err;
      }
    }
  }
});
var name$1j = "combinationsWithRep";
var dependencies$1j = ["typed"];
var createCombinationsWithRep = /* @__PURE__ */ factory(name$1j, dependencies$1j, (_ref) => {
  var {
    typed
  } = _ref;
  return typed(name$1j, {
    "number, number": function numberNumber(n, k) {
      if (!isInteger(n) || n < 0) {
        throw new TypeError("Positive integer value expected in function combinationsWithRep");
      }
      if (!isInteger(k) || k < 0) {
        throw new TypeError("Positive integer value expected in function combinationsWithRep");
      }
      if (n < 1) {
        throw new TypeError("k must be less than or equal to n + k - 1");
      }
      if (k < n - 1) {
        var _prodrange = product$1(n, n + k - 1);
        return _prodrange / product$1(1, k);
      }
      var prodrange = product$1(k + 1, n + k - 1);
      return prodrange / product$1(1, n - 1);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(n, k) {
      var BigNumber = n.constructor;
      var result, i;
      var one = new BigNumber(1);
      var nMinusOne = n.minus(one);
      if (!isPositiveInteger(n) || !isPositiveInteger(k)) {
        throw new TypeError("Positive integer value expected in function combinationsWithRep");
      }
      if (n.lt(one)) {
        throw new TypeError("k must be less than or equal to n + k - 1 in function combinationsWithRep");
      }
      result = one;
      if (k.lt(nMinusOne)) {
        for (i = one; i.lte(nMinusOne); i = i.plus(one)) {
          result = result.times(k.plus(i)).dividedBy(i);
        }
      } else {
        for (i = one; i.lte(k); i = i.plus(one)) {
          result = result.times(nMinusOne.plus(i)).dividedBy(i);
        }
      }
      return result;
    }
  });
});
function isPositiveInteger(n) {
  return n.isInteger() && n.gte(0);
}
var name$1k = "factorial";
var dependencies$1k = ["typed", "gamma"];
var createFactorial = /* @__PURE__ */ factory(name$1k, dependencies$1k, (_ref) => {
  var {
    typed,
    gamma
  } = _ref;
  return typed(name$1k, {
    number: function number(n) {
      if (n < 0) {
        throw new Error("Value must be non-negative");
      }
      return gamma(n + 1);
    },
    BigNumber: function BigNumber(n) {
      if (n.isNegative()) {
        throw new Error("Value must be non-negative");
      }
      return gamma(n.plus(1));
    },
    "Array | Matrix": typed.referToSelf((self) => (n) => deepMap(n, self))
  });
});
var name$1l = "multinomial";
var dependencies$1l = ["typed", "add", "divide", "multiply", "factorial", "isInteger", "isPositive"];
var createMultinomial = /* @__PURE__ */ factory(name$1l, dependencies$1l, (_ref) => {
  var {
    typed,
    add,
    divide,
    multiply,
    factorial,
    isInteger: isInteger2,
    isPositive
  } = _ref;
  return typed(name$1l, {
    "Array | Matrix": function ArrayMatrix(a) {
      var sum = 0;
      var denom = 1;
      deepForEach(a, function(ai) {
        if (!isInteger2(ai) || !isPositive(ai)) {
          throw new TypeError("Positive integer value expected in function multinomial");
        }
        sum = add(sum, ai);
        denom = multiply(denom, factorial(ai));
      });
      return divide(factorial(sum), denom);
    }
  });
});
var name$1m = "permutations";
var dependencies$1m = ["typed", "factorial"];
var createPermutations = /* @__PURE__ */ factory(name$1m, dependencies$1m, (_ref) => {
  var {
    typed,
    factorial
  } = _ref;
  return typed(name$1m, {
    "number | BigNumber": factorial,
    "number, number": function numberNumber(n, k) {
      if (!isInteger(n) || n < 0) {
        throw new TypeError("Positive integer value expected in function permutations");
      }
      if (!isInteger(k) || k < 0) {
        throw new TypeError("Positive integer value expected in function permutations");
      }
      if (k > n) {
        throw new TypeError("second argument k must be less than or equal to first argument n");
      }
      return product$1(n - k + 1, n);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(n, k) {
      var result, i;
      if (!isPositiveInteger$1(n) || !isPositiveInteger$1(k)) {
        throw new TypeError("Positive integer value expected in function permutations");
      }
      if (k.gt(n)) {
        throw new TypeError("second argument k must be less than or equal to first argument n");
      }
      var one = n.mul(0).add(1);
      result = one;
      for (i = n.minus(k).plus(1); i.lte(n); i = i.plus(1)) {
        result = result.times(i);
      }
      return result;
    }
  });
});
function isPositiveInteger$1(n) {
  return n.isInteger() && n.gte(0);
}
var singletonRandom = /* @__PURE__ */ seedrandom2(Date.now());
function createRng(randomSeed) {
  var random;
  function setSeed(seed) {
    random = seed === null ? singletonRandom : seedrandom2(String(seed));
  }
  setSeed(randomSeed);
  function rng() {
    return random();
  }
  return rng;
}
var name$1n = "pickRandom";
var dependencies$1n = ["typed", "config", "?on"];
var createPickRandom = /* @__PURE__ */ factory(name$1n, dependencies$1n, (_ref) => {
  var {
    typed,
    config: config3,
    on
  } = _ref;
  var rng = createRng(config3.randomSeed);
  if (on) {
    on("config", function(curr, prev) {
      if (curr.randomSeed !== prev.randomSeed) {
        rng = createRng(curr.randomSeed);
      }
    });
  }
  return typed(name$1n, {
    "Array | Matrix": function ArrayMatrix(possibles) {
      return _pickRandom(possibles, {});
    },
    "Array | Matrix, Object": function ArrayMatrixObject(possibles, options) {
      return _pickRandom(possibles, options);
    },
    "Array | Matrix, number": function ArrayMatrixNumber(possibles, number) {
      return _pickRandom(possibles, {
        number
      });
    },
    "Array | Matrix, Array | Matrix": function ArrayMatrixArrayMatrix(possibles, weights) {
      return _pickRandom(possibles, {
        weights
      });
    },
    "Array | Matrix, Array | Matrix, number": function ArrayMatrixArrayMatrixNumber(possibles, weights, number) {
      return _pickRandom(possibles, {
        number,
        weights
      });
    },
    "Array | Matrix, number, Array | Matrix": function ArrayMatrixNumberArrayMatrix(possibles, number, weights) {
      return _pickRandom(possibles, {
        number,
        weights
      });
    }
  });
  function _pickRandom(possibles, _ref2) {
    var {
      number,
      weights,
      elementWise = true
    } = _ref2;
    var single = typeof number === "undefined";
    if (single) {
      number = 1;
    }
    var createMatrix = isMatrix(possibles) ? possibles.create : isMatrix(weights) ? weights.create : null;
    possibles = possibles.valueOf();
    if (weights) {
      weights = weights.valueOf();
    }
    if (elementWise === true) {
      possibles = flatten(possibles);
      weights = flatten(weights);
    }
    var totalWeights = 0;
    if (typeof weights !== "undefined") {
      if (weights.length !== possibles.length) {
        throw new Error("Weights must have the same length as possibles");
      }
      for (var i = 0, len = weights.length; i < len; i++) {
        if (!isNumber(weights[i]) || weights[i] < 0) {
          throw new Error("Weights must be an array of positive numbers");
        }
        totalWeights += weights[i];
      }
    }
    var length = possibles.length;
    var result = [];
    var pick;
    while (result.length < number) {
      if (typeof weights === "undefined") {
        pick = possibles[Math.floor(rng() * length)];
      } else {
        var randKey = rng() * totalWeights;
        for (var _i = 0, _len = possibles.length; _i < _len; _i++) {
          randKey -= weights[_i];
          if (randKey < 0) {
            pick = possibles[_i];
            break;
          }
        }
      }
      result.push(pick);
    }
    return single ? result[0] : createMatrix ? createMatrix(result) : result;
  }
});
function randomMatrix(size, random) {
  var data = [];
  size = size.slice(0);
  if (size.length > 1) {
    for (var i = 0, length = size.shift(); i < length; i++) {
      data.push(randomMatrix(size, random));
    }
  } else {
    for (var _i = 0, _length = size.shift(); _i < _length; _i++) {
      data.push(random());
    }
  }
  return data;
}
var name$1o = "random";
var dependencies$1o = ["typed", "config", "?on"];
var createRandom = /* @__PURE__ */ factory(name$1o, dependencies$1o, (_ref) => {
  var {
    typed,
    config: config3,
    on
  } = _ref;
  var rng = createRng(config3.randomSeed);
  if (on) {
    on("config", function(curr, prev) {
      if (curr.randomSeed !== prev.randomSeed) {
        rng = createRng(curr.randomSeed);
      }
    });
  }
  return typed(name$1o, {
    "": () => _random(0, 1),
    number: (max) => _random(0, max),
    "number, number": (min, max) => _random(min, max),
    "Array | Matrix": (size) => _randomMatrix(size, 0, 1),
    "Array | Matrix, number": (size, max) => _randomMatrix(size, 0, max),
    "Array | Matrix, number, number": (size, min, max) => _randomMatrix(size, min, max)
  });
  function _randomMatrix(size, min, max) {
    var res = randomMatrix(size.valueOf(), () => _random(min, max));
    return isMatrix(size) ? size.create(res) : res;
  }
  function _random(min, max) {
    return min + rng() * (max - min);
  }
});
var createRandomNumber = /* @__PURE__ */ factory(name$1o, ["typed", "config", "?on"], (_ref2) => {
  var {
    typed,
    config: config3,
    on,
    matrix
  } = _ref2;
  var rng = createRng(config3.randomSeed);
  if (on) {
    on("config", function(curr, prev) {
      if (curr.randomSeed !== prev.randomSeed) {
        rng = createRng(curr.randomSeed);
      }
    });
  }
  return typed(name$1o, {
    "": () => _random(0, 1),
    number: (max) => _random(0, max),
    "number, number": (min, max) => _random(min, max)
  });
  function _random(min, max) {
    return min + rng() * (max - min);
  }
});
var name$1p = "randomInt";
var dependencies$1p = ["typed", "config", "?on"];
var createRandomInt = /* @__PURE__ */ factory(name$1p, dependencies$1p, (_ref) => {
  var {
    typed,
    config: config3,
    on
  } = _ref;
  var rng = createRng(config3.randomSeed);
  if (on) {
    on("config", function(curr, prev) {
      if (curr.randomSeed !== prev.randomSeed) {
        rng = createRng(curr.randomSeed);
      }
    });
  }
  return typed(name$1p, {
    "": () => _randomInt(0, 1),
    number: (max) => _randomInt(0, max),
    "number, number": (min, max) => _randomInt(min, max),
    "Array | Matrix": (size) => _randomIntMatrix(size, 0, 1),
    "Array | Matrix, number": (size, max) => _randomIntMatrix(size, 0, max),
    "Array | Matrix, number, number": (size, min, max) => _randomIntMatrix(size, min, max)
  });
  function _randomIntMatrix(size, min, max) {
    var res = randomMatrix(size.valueOf(), () => _randomInt(min, max));
    return isMatrix(size) ? size.create(res) : res;
  }
  function _randomInt(min, max) {
    return Math.floor(min + rng() * (max - min));
  }
});
var name$1q = "stirlingS2";
var dependencies$1q = ["typed", "addScalar", "subtract", "multiplyScalar", "divideScalar", "pow", "factorial", "combinations", "isNegative", "isInteger", "number", "?bignumber", "larger"];
var createStirlingS2 = /* @__PURE__ */ factory(name$1q, dependencies$1q, (_ref) => {
  var {
    typed,
    addScalar,
    subtract,
    multiplyScalar,
    divideScalar,
    pow,
    factorial,
    combinations,
    isNegative,
    isInteger: isInteger2,
    number,
    bignumber,
    larger
  } = _ref;
  var smallCache = [];
  var bigCache = [];
  return typed(name$1q, {
    "number | BigNumber, number | BigNumber": function numberBigNumberNumberBigNumber(n, k) {
      if (!isInteger2(n) || isNegative(n) || !isInteger2(k) || isNegative(k)) {
        throw new TypeError("Non-negative integer value expected in function stirlingS2");
      } else if (larger(k, n)) {
        throw new TypeError("k must be less than or equal to n in function stirlingS2");
      }
      var big = !(isNumber(n) && isNumber(k));
      var cache = big ? bigCache : smallCache;
      var make = big ? bignumber : number;
      var nn = number(n);
      var nk = number(k);
      if (cache[nn] && cache[nn].length > nk) {
        return cache[nn][nk];
      }
      for (var m = 0; m <= nn; ++m) {
        if (!cache[m]) {
          cache[m] = [m === 0 ? make(1) : make(0)];
        }
        if (m === 0)
          continue;
        var row = cache[m];
        var prev = cache[m - 1];
        for (var i = row.length; i <= m && i <= nk; ++i) {
          if (i === m) {
            row[i] = 1;
          } else {
            row[i] = addScalar(multiplyScalar(make(i), prev[i]), prev[i - 1]);
          }
        }
      }
      return cache[nn][nk];
    }
  });
});
var name$1r = "bellNumbers";
var dependencies$1r = ["typed", "addScalar", "isNegative", "isInteger", "stirlingS2"];
var createBellNumbers = /* @__PURE__ */ factory(name$1r, dependencies$1r, (_ref) => {
  var {
    typed,
    addScalar,
    isNegative,
    isInteger: isInteger2,
    stirlingS2
  } = _ref;
  return typed(name$1r, {
    "number | BigNumber": function numberBigNumber(n) {
      if (!isInteger2(n) || isNegative(n)) {
        throw new TypeError("Non-negative integer value expected in function bellNumbers");
      }
      var result = 0;
      for (var i = 0; i <= n; i++) {
        result = addScalar(result, stirlingS2(n, i));
      }
      return result;
    }
  });
});
var name$1s = "catalan";
var dependencies$1s = ["typed", "addScalar", "divideScalar", "multiplyScalar", "combinations", "isNegative", "isInteger"];
var createCatalan = /* @__PURE__ */ factory(name$1s, dependencies$1s, (_ref) => {
  var {
    typed,
    addScalar,
    divideScalar,
    multiplyScalar,
    combinations,
    isNegative,
    isInteger: isInteger2
  } = _ref;
  return typed(name$1s, {
    "number | BigNumber": function numberBigNumber(n) {
      if (!isInteger2(n) || isNegative(n)) {
        throw new TypeError("Non-negative integer value expected in function catalan");
      }
      return divideScalar(combinations(multiplyScalar(n, 2), n), addScalar(n, 1));
    }
  });
});
var name$1t = "composition";
var dependencies$1t = ["typed", "addScalar", "combinations", "isNegative", "isPositive", "isInteger", "larger"];
var createComposition = /* @__PURE__ */ factory(name$1t, dependencies$1t, (_ref) => {
  var {
    typed,
    addScalar,
    combinations,
    isPositive,
    isNegative,
    isInteger: isInteger2,
    larger
  } = _ref;
  return typed(name$1t, {
    "number | BigNumber, number | BigNumber": function numberBigNumberNumberBigNumber(n, k) {
      if (!isInteger2(n) || !isPositive(n) || !isInteger2(k) || !isPositive(k)) {
        throw new TypeError("Positive integer value expected in function composition");
      } else if (larger(k, n)) {
        throw new TypeError("k must be less than or equal to n in function composition");
      }
      return combinations(addScalar(n, -1), addScalar(k, -1));
    }
  });
});
function isNumericNode(x) {
  return isConstantNode(x) || isOperatorNode(x) && x.isUnary() && isConstantNode(x.args[0]);
}
function isConstantExpression(x) {
  if (isConstantNode(x)) {
    return true;
  }
  if ((isFunctionNode(x) || isOperatorNode(x)) && x.args.every(isConstantExpression)) {
    return true;
  }
  if (isParenthesisNode(x) && isConstantExpression(x.content)) {
    return true;
  }
  return false;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var name$1u = "simplifyUtil";
var dependencies$1u = ["FunctionNode", "OperatorNode", "SymbolNode"];
var createUtil = /* @__PURE__ */ factory(name$1u, dependencies$1u, (_ref) => {
  var {
    FunctionNode,
    OperatorNode,
    SymbolNode
  } = _ref;
  var T = true;
  var F = false;
  var defaultName = "defaultF";
  var defaultContext = {
    add: {
      trivial: T,
      total: T,
      commutative: T,
      associative: T
    },
    unaryPlus: {
      trivial: T,
      total: T,
      commutative: T,
      associative: T
    },
    subtract: {
      trivial: F,
      total: T,
      commutative: F,
      associative: F
    },
    multiply: {
      trivial: T,
      total: T,
      commutative: T,
      associative: T
    },
    divide: {
      trivial: F,
      total: T,
      commutative: F,
      associative: F
    },
    paren: {
      trivial: T,
      total: T,
      commutative: T,
      associative: F
    },
    defaultF: {
      trivial: F,
      total: T,
      commutative: F,
      associative: F
    }
  };
  var realContext = {
    divide: {
      total: F
    },
    log: {
      total: F
    }
  };
  var positiveContext = {
    subtract: {
      total: F
    },
    abs: {
      trivial: T
    },
    log: {
      total: T
    }
  };
  function hasProperty(nodeOrName, property) {
    var context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultContext;
    var name2 = defaultName;
    if (typeof nodeOrName === "string") {
      name2 = nodeOrName;
    } else if (isOperatorNode(nodeOrName)) {
      name2 = nodeOrName.fn.toString();
    } else if (isFunctionNode(nodeOrName)) {
      name2 = nodeOrName.name;
    } else if (isParenthesisNode(nodeOrName)) {
      name2 = "paren";
    }
    if (hasOwnProperty$1(context, name2)) {
      var properties2 = context[name2];
      if (hasOwnProperty$1(properties2, property)) {
        return properties2[property];
      }
      if (hasOwnProperty$1(defaultContext, name2)) {
        return defaultContext[name2][property];
      }
    }
    if (hasOwnProperty$1(context, defaultName)) {
      var _properties = context[defaultName];
      if (hasOwnProperty$1(_properties, property)) {
        return _properties[property];
      }
      return defaultContext[defaultName][property];
    }
    if (hasOwnProperty$1(defaultContext, name2)) {
      var _properties2 = defaultContext[name2];
      if (hasOwnProperty$1(_properties2, property)) {
        return _properties2[property];
      }
    }
    return defaultContext[defaultName][property];
  }
  function isCommutative(node) {
    var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultContext;
    return hasProperty(node, "commutative", context);
  }
  function isAssociative(node) {
    var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultContext;
    return hasProperty(node, "associative", context);
  }
  function mergeContext(primary, secondary) {
    var merged = _objectSpread({}, primary);
    for (var prop in secondary) {
      if (hasOwnProperty$1(primary, prop)) {
        merged[prop] = _objectSpread(_objectSpread({}, secondary[prop]), primary[prop]);
      } else {
        merged[prop] = secondary[prop];
      }
    }
    return merged;
  }
  function flatten2(node, context) {
    if (!node.args || node.args.length === 0) {
      return node;
    }
    node.args = allChildren(node, context);
    for (var i = 0; i < node.args.length; i++) {
      flatten2(node.args[i], context);
    }
  }
  function allChildren(node, context) {
    var op;
    var children = [];
    var findChildren = function findChildren2(node2) {
      for (var i = 0; i < node2.args.length; i++) {
        var child = node2.args[i];
        if (isOperatorNode(child) && op === child.op) {
          findChildren2(child);
        } else {
          children.push(child);
        }
      }
    };
    if (isAssociative(node, context)) {
      op = node.op;
      findChildren(node);
      return children;
    } else {
      return node.args;
    }
  }
  function unflattenr(node, context) {
    if (!node.args || node.args.length === 0) {
      return;
    }
    var makeNode = createMakeNodeFunction(node);
    var l = node.args.length;
    for (var i = 0; i < l; i++) {
      unflattenr(node.args[i], context);
    }
    if (l > 2 && isAssociative(node, context)) {
      var curnode = node.args.pop();
      while (node.args.length > 0) {
        curnode = makeNode([node.args.pop(), curnode]);
      }
      node.args = curnode.args;
    }
  }
  function unflattenl(node, context) {
    if (!node.args || node.args.length === 0) {
      return;
    }
    var makeNode = createMakeNodeFunction(node);
    var l = node.args.length;
    for (var i = 0; i < l; i++) {
      unflattenl(node.args[i], context);
    }
    if (l > 2 && isAssociative(node, context)) {
      var curnode = node.args.shift();
      while (node.args.length > 0) {
        curnode = makeNode([curnode, node.args.shift()]);
      }
      node.args = curnode.args;
    }
  }
  function createMakeNodeFunction(node) {
    if (isOperatorNode(node)) {
      return function(args) {
        try {
          return new OperatorNode(node.op, node.fn, args, node.implicit);
        } catch (err) {
          console.error(err);
          return [];
        }
      };
    } else {
      return function(args) {
        return new FunctionNode(new SymbolNode(node.name), args);
      };
    }
  }
  return {
    createMakeNodeFunction,
    hasProperty,
    isCommutative,
    isAssociative,
    mergeContext,
    flatten: flatten2,
    allChildren,
    unflattenr,
    unflattenl,
    defaultContext,
    realContext,
    positiveContext
  };
});
var name$1v = "simplify";
var dependencies$1v = ["config", "typed", "parse", "add", "subtract", "multiply", "divide", "pow", "isZero", "equal", "resolve", "simplifyConstant", "simplifyCore", "?fraction", "?bignumber", "mathWithTransform", "matrix", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "SymbolNode"];
var createSimplify = /* @__PURE__ */ factory(name$1v, dependencies$1v, (_ref) => {
  var {
    config: config3,
    typed,
    parse,
    add,
    subtract,
    multiply,
    divide,
    pow,
    isZero,
    equal,
    resolve,
    simplifyConstant,
    simplifyCore,
    fraction,
    bignumber,
    mathWithTransform,
    matrix,
    AccessorNode,
    ArrayNode,
    ConstantNode,
    FunctionNode,
    IndexNode,
    ObjectNode,
    OperatorNode,
    ParenthesisNode,
    SymbolNode
  } = _ref;
  var {
    hasProperty,
    isCommutative,
    isAssociative,
    mergeContext,
    flatten: flatten2,
    unflattenr,
    unflattenl,
    createMakeNodeFunction,
    defaultContext,
    realContext,
    positiveContext
  } = createUtil({
    FunctionNode,
    OperatorNode,
    SymbolNode
  });
  typed.addConversion({
    from: "Object",
    to: "Map",
    convert: createMap
  });
  var simplify = typed("simplify", {
    Node: _simplify,
    "Node, Map": (expr, scope) => _simplify(expr, false, scope),
    "Node, Map, Object": (expr, scope, options) => _simplify(expr, false, scope, options),
    "Node, Array": _simplify,
    "Node, Array, Map": _simplify,
    "Node, Array, Map, Object": _simplify
  });
  typed.removeConversion({
    from: "Object",
    to: "Map",
    convert: createMap
  });
  simplify.defaultContext = defaultContext;
  simplify.realContext = realContext;
  simplify.positiveContext = positiveContext;
  function removeParens(node) {
    return node.transform(function(node2, path, parent) {
      return isParenthesisNode(node2) ? removeParens(node2.content) : node2;
    });
  }
  var SUPPORTED_CONSTANTS = {
    true: true,
    false: true,
    e: true,
    i: true,
    Infinity: true,
    LN2: true,
    LN10: true,
    LOG2E: true,
    LOG10E: true,
    NaN: true,
    phi: true,
    pi: true,
    SQRT1_2: true,
    SQRT2: true,
    tau: true
  };
  simplify.rules = [
    simplifyCore,
    {
      l: "log(e)",
      r: "1"
    },
    {
      s: "n-n1 -> n+-n1",
      assuming: {
        subtract: {
          total: true
        }
      }
    },
    {
      s: "n-n -> 0",
      assuming: {
        subtract: {
          total: false
        }
      }
    },
    {
      s: "-(cl*v) -> v * (-cl)",
      assuming: {
        multiply: {
          commutative: true
        },
        subtract: {
          total: true
        }
      }
    },
    {
      s: "-(cl*v) -> (-cl) * v",
      assuming: {
        multiply: {
          commutative: false
        },
        subtract: {
          total: true
        }
      }
    },
    {
      s: "-(v*cl) -> v * (-cl)",
      assuming: {
        multiply: {
          commutative: false
        },
        subtract: {
          total: true
        }
      }
    },
    {
      l: "-(n1/n2)",
      r: "-n1/n2"
    },
    {
      l: "-v",
      r: "v * (-1)"
    },
    {
      l: "(n1 + n2)*(-1)",
      r: "n1*(-1) + n2*(-1)",
      repeat: true
    },
    {
      l: "n/n1^n2",
      r: "n*n1^-n2"
    },
    {
      l: "n/n1",
      r: "n*n1^-1"
    },
    {
      s: "(n1*n2)^n3 -> n1^n3 * n2^n3",
      assuming: {
        multiply: {
          commutative: true
        }
      }
    },
    {
      s: "(n1*n2)^(-1) -> n2^(-1) * n1^(-1)",
      assuming: {
        multiply: {
          commutative: false
        }
      }
    },
    {
      s: "(n ^ n1) ^ n2 -> n ^ (n1 * n2)",
      assuming: {
        divide: {
          total: true
        }
      }
    },
    {
      l: " vd   * ( vd   * n1 + n2)",
      r: "vd^2       * n1 +  vd   * n2"
    },
    {
      s: " vd   * (vd^n4 * n1 + n2)   ->  vd^(1+n4)  * n1 +  vd   * n2",
      assuming: {
        divide: {
          total: true
        }
      }
    },
    {
      s: "vd^n3 * ( vd   * n1 + n2)   ->  vd^(n3+1)  * n1 + vd^n3 * n2",
      assuming: {
        divide: {
          total: true
        }
      }
    },
    {
      s: "vd^n3 * (vd^n4 * n1 + n2)   ->  vd^(n3+n4) * n1 + vd^n3 * n2",
      assuming: {
        divide: {
          total: true
        }
      }
    },
    {
      l: "n*n",
      r: "n^2"
    },
    {
      s: "n * n^n1 -> n^(n1+1)",
      assuming: {
        divide: {
          total: true
        }
      }
    },
    {
      s: "n^n1 * n^n2 -> n^(n1+n2)",
      assuming: {
        divide: {
          total: true
        }
      }
    },
    simplifyConstant,
    {
      s: "n+n -> 2*n",
      assuming: {
        add: {
          total: true
        }
      }
    },
    {
      l: "n+-n",
      r: "0"
    },
    {
      l: "vd*n + vd",
      r: "vd*(n+1)"
    },
    {
      l: "n3*n1 + n3*n2",
      r: "n3*(n1+n2)"
    },
    {
      l: "n3^(-n4)*n1 +   n3  * n2",
      r: "n3^(-n4)*(n1 + n3^(n4+1) *n2)"
    },
    {
      l: "n3^(-n4)*n1 + n3^n5 * n2",
      r: "n3^(-n4)*(n1 + n3^(n4+n5)*n2)"
    },
    {
      s: "n*vd + vd -> (n+1)*vd",
      assuming: {
        multiply: {
          commutative: false
        }
      }
    },
    {
      s: "vd + n*vd -> (1+n)*vd",
      assuming: {
        multiply: {
          commutative: false
        }
      }
    },
    {
      s: "n1*n3 + n2*n3 -> (n1+n2)*n3",
      assuming: {
        multiply: {
          commutative: false
        }
      }
    },
    {
      s: "n^n1 * n -> n^(n1+1)",
      assuming: {
        divide: {
          total: true
        },
        multiply: {
          commutative: false
        }
      }
    },
    {
      s: "n1*n3^(-n4) + n2 * n3    -> (n1 + n2*n3^(n4 +  1))*n3^(-n4)",
      assuming: {
        multiply: {
          commutative: false
        }
      }
    },
    {
      s: "n1*n3^(-n4) + n2 * n3^n5 -> (n1 + n2*n3^(n4 + n5))*n3^(-n4)",
      assuming: {
        multiply: {
          commutative: false
        }
      }
    },
    {
      l: "n*cd + cd",
      r: "(n+1)*cd"
    },
    {
      s: "cd*n + cd -> cd*(n+1)",
      assuming: {
        multiply: {
          commutative: false
        }
      }
    },
    {
      s: "cd + cd*n -> cd*(1+n)",
      assuming: {
        multiply: {
          commutative: false
        }
      }
    },
    simplifyConstant,
    {
      s: "(-n)*n1 -> -(n*n1)",
      assuming: {
        subtract: {
          total: true
        }
      }
    },
    {
      s: "n1*(-n) -> -(n1*n)",
      assuming: {
        subtract: {
          total: true
        },
        multiply: {
          commutative: false
        }
      }
    },
    {
      s: "ce+ve -> ve+ce",
      assuming: {
        add: {
          commutative: true
        }
      },
      imposeContext: {
        add: {
          commutative: false
        }
      }
    },
    {
      s: "vd*cd -> cd*vd",
      assuming: {
        multiply: {
          commutative: true
        }
      },
      imposeContext: {
        multiply: {
          commutative: false
        }
      }
    },
    {
      l: "n+-n1",
      r: "n-n1"
    },
    {
      s: "n*(n1^-1) -> n/n1",
      assuming: {
        multiply: {
          commutative: true
        }
      }
    },
    {
      s: "n*n1^-n2 -> n/n1^n2",
      assuming: {
        multiply: {
          commutative: true
        }
      }
    },
    {
      s: "n^-1 -> 1/n",
      assuming: {
        multiply: {
          commutative: true
        }
      }
    },
    {
      l: "n^1",
      r: "n"
    },
    {
      s: "n*(n1/n2) -> (n*n1)/n2",
      assuming: {
        multiply: {
          associative: true
        }
      }
    },
    {
      s: "n-(n1+n2) -> n-n1-n2",
      assuming: {
        addition: {
          associative: true,
          commutative: true
        }
      }
    },
    {
      l: "1*n",
      r: "n",
      imposeContext: {
        multiply: {
          commutative: true
        }
      }
    },
    {
      s: "n1/(n2/n3) -> (n1*n3)/n2",
      assuming: {
        multiply: {
          associative: true
        }
      }
    },
    {
      l: "n1/(-n2)",
      r: "-n1/n2"
    }
  ];
  function _canonicalizeRule(ruleObject, context) {
    var newRule = {};
    if (ruleObject.s) {
      var lr = ruleObject.s.split("->");
      if (lr.length === 2) {
        newRule.l = lr[0];
        newRule.r = lr[1];
      } else {
        throw SyntaxError("Could not parse rule: " + ruleObject.s);
      }
    } else {
      newRule.l = ruleObject.l;
      newRule.r = ruleObject.r;
    }
    newRule.l = removeParens(parse(newRule.l));
    newRule.r = removeParens(parse(newRule.r));
    for (var prop of ["imposeContext", "repeat", "assuming"]) {
      if (prop in ruleObject) {
        newRule[prop] = ruleObject[prop];
      }
    }
    if (ruleObject.evaluate) {
      newRule.evaluate = parse(ruleObject.evaluate);
    }
    if (isAssociative(newRule.l, context)) {
      var nonCommutative = !isCommutative(newRule.l, context);
      var leftExpandsym;
      if (nonCommutative)
        leftExpandsym = _getExpandPlaceholderSymbol();
      var makeNode = createMakeNodeFunction(newRule.l);
      var expandsym = _getExpandPlaceholderSymbol();
      newRule.expanded = {};
      newRule.expanded.l = makeNode([newRule.l, expandsym]);
      flatten2(newRule.expanded.l, context);
      unflattenr(newRule.expanded.l, context);
      newRule.expanded.r = makeNode([newRule.r, expandsym]);
      if (nonCommutative) {
        newRule.expandedNC1 = {};
        newRule.expandedNC1.l = makeNode([leftExpandsym, newRule.l]);
        newRule.expandedNC1.r = makeNode([leftExpandsym, newRule.r]);
        newRule.expandedNC2 = {};
        newRule.expandedNC2.l = makeNode([leftExpandsym, newRule.expanded.l]);
        newRule.expandedNC2.r = makeNode([leftExpandsym, newRule.expanded.r]);
      }
    }
    return newRule;
  }
  function _buildRules(rules, context) {
    var ruleSet = [];
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      var newRule = void 0;
      var ruleType = typeof rule;
      switch (ruleType) {
        case "string":
          rule = {
            s: rule
          };
        case "object":
          newRule = _canonicalizeRule(rule, context);
          break;
        case "function":
          newRule = rule;
          break;
        default:
          throw TypeError("Unsupported type of rule: " + ruleType);
      }
      ruleSet.push(newRule);
    }
    return ruleSet;
  }
  var _lastsym = 0;
  function _getExpandPlaceholderSymbol() {
    return new SymbolNode("_p" + _lastsym++);
  }
  function _simplify(expr, rules) {
    var scope = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : createEmptyMap();
    var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var debug = options.consoleDebug;
    rules = _buildRules(rules || simplify.rules, options.context);
    var res = resolve(expr, scope);
    res = removeParens(res);
    var visited = {};
    var str = res.toString({
      parenthesis: "all"
    });
    while (!visited[str]) {
      visited[str] = true;
      _lastsym = 0;
      var laststr = str;
      if (debug)
        console.log("Working on: ", str);
      for (var i = 0; i < rules.length; i++) {
        var rulestr = "";
        if (typeof rules[i] === "function") {
          res = rules[i](res, options);
          if (debug)
            rulestr = rules[i].name;
        } else {
          flatten2(res, options.context);
          res = applyRule(res, rules[i], options.context);
          if (debug) {
            rulestr = "".concat(rules[i].l.toString(), " -> ").concat(rules[i].r.toString());
          }
        }
        if (debug) {
          var newstr = res.toString({
            parenthesis: "all"
          });
          if (newstr !== laststr) {
            console.log("Applying", rulestr, "produced", newstr);
            laststr = newstr;
          }
        }
        unflattenl(res, options.context);
      }
      str = res.toString({
        parenthesis: "all"
      });
    }
    return res;
  }
  function mapRule(nodes, rule, context) {
    var resNodes = nodes;
    if (nodes) {
      for (var i = 0; i < nodes.length; ++i) {
        var newNode = applyRule(nodes[i], rule, context);
        if (newNode !== nodes[i]) {
          if (resNodes === nodes) {
            resNodes = nodes.slice();
          }
          resNodes[i] = newNode;
        }
      }
    }
    return resNodes;
  }
  function applyRule(node, rule, context) {
    if (rule.assuming) {
      for (var symbol in rule.assuming) {
        for (var property in rule.assuming[symbol]) {
          if (hasProperty(symbol, property, context) !== rule.assuming[symbol][property]) {
            return node;
          }
        }
      }
    }
    var mergedContext = mergeContext(rule.imposeContext, context);
    var res = node;
    if (res instanceof OperatorNode || res instanceof FunctionNode) {
      var newArgs = mapRule(res.args, rule, context);
      if (newArgs !== res.args) {
        res = res.clone();
        res.args = newArgs;
      }
    } else if (res instanceof ParenthesisNode) {
      if (res.content) {
        var newContent = applyRule(res.content, rule, context);
        if (newContent !== res.content) {
          res = new ParenthesisNode(newContent);
        }
      }
    } else if (res instanceof ArrayNode) {
      var newItems = mapRule(res.items, rule, context);
      if (newItems !== res.items) {
        res = new ArrayNode(newItems);
      }
    } else if (res instanceof AccessorNode) {
      var newObj = res.object;
      if (res.object) {
        newObj = applyRule(res.object, rule, context);
      }
      var newIndex = res.index;
      if (res.index) {
        newIndex = applyRule(res.index, rule, context);
      }
      if (newObj !== res.object || newIndex !== res.index) {
        res = new AccessorNode(newObj, newIndex);
      }
    } else if (res instanceof IndexNode) {
      var newDims = mapRule(res.dimensions, rule, context);
      if (newDims !== res.dimensions) {
        res = new IndexNode(newDims);
      }
    } else if (res instanceof ObjectNode) {
      var changed = false;
      var newProps = {};
      for (var prop in res.properties) {
        newProps[prop] = applyRule(res.properties[prop], rule, context);
        if (newProps[prop] !== res.properties[prop]) {
          changed = true;
        }
      }
      if (changed) {
        res = new ObjectNode(newProps);
      }
    }
    var repl = rule.r;
    var matches = _ruleMatch(rule.l, res, mergedContext)[0];
    if (!matches && rule.expanded) {
      repl = rule.expanded.r;
      matches = _ruleMatch(rule.expanded.l, res, mergedContext)[0];
    }
    if (!matches && rule.expandedNC1) {
      repl = rule.expandedNC1.r;
      matches = _ruleMatch(rule.expandedNC1.l, res, mergedContext)[0];
      if (!matches) {
        repl = rule.expandedNC2.r;
        matches = _ruleMatch(rule.expandedNC2.l, res, mergedContext)[0];
      }
    }
    if (matches) {
      var implicit = res.implicit;
      res = repl.clone();
      if (implicit && "implicit" in repl) {
        res.implicit = true;
      }
      res = res.transform(function(node2) {
        if (node2.isSymbolNode && hasOwnProperty$1(matches.placeholders, node2.name)) {
          return matches.placeholders[node2.name].clone();
        } else {
          return node2;
        }
      });
    }
    if (rule.repeat && res !== node) {
      res = applyRule(res, rule, context);
    }
    return res;
  }
  function getSplits(node, context) {
    var res = [];
    var right, rightArgs;
    var makeNode = createMakeNodeFunction(node);
    if (isCommutative(node, context)) {
      for (var i = 0; i < node.args.length; i++) {
        rightArgs = node.args.slice(0);
        rightArgs.splice(i, 1);
        right = rightArgs.length === 1 ? rightArgs[0] : makeNode(rightArgs);
        res.push(makeNode([node.args[i], right]));
      }
    } else {
      for (var _i = 1; _i < node.args.length; _i++) {
        var left = node.args[0];
        if (_i > 1) {
          left = makeNode(node.args.slice(0, _i));
        }
        rightArgs = node.args.slice(_i);
        right = rightArgs.length === 1 ? rightArgs[0] : makeNode(rightArgs);
        res.push(makeNode([left, right]));
      }
    }
    return res;
  }
  function mergeMatch(match1, match2) {
    var res = {
      placeholders: {}
    };
    if (!match1.placeholders && !match2.placeholders) {
      return res;
    } else if (!match1.placeholders) {
      return match2;
    } else if (!match2.placeholders) {
      return match1;
    }
    for (var key in match1.placeholders) {
      if (hasOwnProperty$1(match1.placeholders, key)) {
        res.placeholders[key] = match1.placeholders[key];
        if (hasOwnProperty$1(match2.placeholders, key)) {
          if (!_exactMatch(match1.placeholders[key], match2.placeholders[key])) {
            return null;
          }
        }
      }
    }
    for (var _key in match2.placeholders) {
      if (hasOwnProperty$1(match2.placeholders, _key)) {
        res.placeholders[_key] = match2.placeholders[_key];
      }
    }
    return res;
  }
  function combineChildMatches(list1, list2) {
    var res = [];
    if (list1.length === 0 || list2.length === 0) {
      return res;
    }
    var merged;
    for (var i1 = 0; i1 < list1.length; i1++) {
      for (var i2 = 0; i2 < list2.length; i2++) {
        merged = mergeMatch(list1[i1], list2[i2]);
        if (merged) {
          res.push(merged);
        }
      }
    }
    return res;
  }
  function mergeChildMatches(childMatches) {
    if (childMatches.length === 0) {
      return childMatches;
    }
    var sets = childMatches.reduce(combineChildMatches);
    var uniqueSets = [];
    var unique = {};
    for (var i = 0; i < sets.length; i++) {
      var s = JSON.stringify(sets[i]);
      if (!unique[s]) {
        unique[s] = true;
        uniqueSets.push(sets[i]);
      }
    }
    return uniqueSets;
  }
  function _ruleMatch(rule, node, context, isSplit) {
    var res = [{
      placeholders: {}
    }];
    if (rule instanceof OperatorNode && node instanceof OperatorNode || rule instanceof FunctionNode && node instanceof FunctionNode) {
      if (rule instanceof OperatorNode) {
        if (rule.op !== node.op || rule.fn !== node.fn) {
          return [];
        }
      } else if (rule instanceof FunctionNode) {
        if (rule.name !== node.name) {
          return [];
        }
      }
      if (node.args.length === 1 && rule.args.length === 1 || !isAssociative(node, context) && node.args.length === rule.args.length || isSplit) {
        var childMatches = [];
        for (var i = 0; i < rule.args.length; i++) {
          var childMatch = _ruleMatch(rule.args[i], node.args[i], context);
          if (childMatch.length === 0) {
            break;
          }
          childMatches.push(childMatch);
        }
        if (childMatches.length !== rule.args.length) {
          if (!isCommutative(node, context) || rule.args.length === 1) {
            return [];
          }
          if (rule.args.length > 2) {
            throw new Error("permuting >2 commutative non-associative rule arguments not yet implemented");
          }
          var leftMatch = _ruleMatch(rule.args[0], node.args[1], context);
          if (leftMatch.length === 0) {
            return [];
          }
          var rightMatch = _ruleMatch(rule.args[1], node.args[0], context);
          if (rightMatch.length === 0) {
            return [];
          }
          childMatches = [leftMatch, rightMatch];
        }
        res = mergeChildMatches(childMatches);
      } else if (node.args.length >= 2 && rule.args.length === 2) {
        var splits = getSplits(node, context);
        var splitMatches = [];
        for (var _i2 = 0; _i2 < splits.length; _i2++) {
          var matchSet = _ruleMatch(rule, splits[_i2], context, true);
          splitMatches = splitMatches.concat(matchSet);
        }
        return splitMatches;
      } else if (rule.args.length > 2) {
        throw Error("Unexpected non-binary associative function: " + rule.toString());
      } else {
        return [];
      }
    } else if (rule instanceof SymbolNode) {
      if (rule.name.length === 0) {
        throw new Error("Symbol in rule has 0 length...!?");
      }
      if (SUPPORTED_CONSTANTS[rule.name]) {
        if (rule.name !== node.name) {
          return [];
        }
      } else {
        switch (rule.name[1] >= "a" && rule.name[1] <= "z" ? rule.name.substring(0, 2) : rule.name[0]) {
          case "n":
          case "_p":
            res[0].placeholders[rule.name] = node;
            break;
          case "c":
          case "cl":
            if (isConstantNode(node)) {
              res[0].placeholders[rule.name] = node;
            } else {
              return [];
            }
            break;
          case "v":
            if (!isConstantNode(node)) {
              res[0].placeholders[rule.name] = node;
            } else {
              return [];
            }
            break;
          case "vl":
            if (isSymbolNode(node)) {
              res[0].placeholders[rule.name] = node;
            } else {
              return [];
            }
            break;
          case "cd":
            if (isNumericNode(node)) {
              res[0].placeholders[rule.name] = node;
            } else {
              return [];
            }
            break;
          case "vd":
            if (!isNumericNode(node)) {
              res[0].placeholders[rule.name] = node;
            } else {
              return [];
            }
            break;
          case "ce":
            if (isConstantExpression(node)) {
              res[0].placeholders[rule.name] = node;
            } else {
              return [];
            }
            break;
          case "ve":
            if (!isConstantExpression(node)) {
              res[0].placeholders[rule.name] = node;
            } else {
              return [];
            }
            break;
          default:
            throw new Error("Invalid symbol in rule: " + rule.name);
        }
      }
    } else if (rule instanceof ConstantNode) {
      if (!equal(rule.value, node.value)) {
        return [];
      }
    } else {
      return [];
    }
    return res;
  }
  function _exactMatch(p, q) {
    if (p instanceof ConstantNode && q instanceof ConstantNode) {
      if (!equal(p.value, q.value)) {
        return false;
      }
    } else if (p instanceof SymbolNode && q instanceof SymbolNode) {
      if (p.name !== q.name) {
        return false;
      }
    } else if (p instanceof OperatorNode && q instanceof OperatorNode || p instanceof FunctionNode && q instanceof FunctionNode) {
      if (p instanceof OperatorNode) {
        if (p.op !== q.op || p.fn !== q.fn) {
          return false;
        }
      } else if (p instanceof FunctionNode) {
        if (p.name !== q.name) {
          return false;
        }
      }
      if (p.args.length !== q.args.length) {
        return false;
      }
      for (var i = 0; i < p.args.length; i++) {
        if (!_exactMatch(p.args[i], q.args[i])) {
          return false;
        }
      }
    } else {
      return false;
    }
    return true;
  }
  return simplify;
});
var name$1w = "simplifyConstant";
var dependencies$1w = ["typed", "config", "mathWithTransform", "matrix", "?fraction", "?bignumber", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "SymbolNode"];
var createSimplifyConstant = /* @__PURE__ */ factory(name$1w, dependencies$1w, (_ref) => {
  var {
    typed,
    config: config3,
    mathWithTransform,
    matrix,
    fraction,
    bignumber,
    AccessorNode,
    ArrayNode,
    ConstantNode,
    FunctionNode,
    IndexNode,
    ObjectNode,
    OperatorNode,
    SymbolNode
  } = _ref;
  var {
    isCommutative,
    isAssociative,
    allChildren,
    createMakeNodeFunction
  } = createUtil({
    FunctionNode,
    OperatorNode,
    SymbolNode
  });
  var simplifyConstant = typed("simplifyConstant", {
    Node: (node) => _ensureNode(foldFraction(node, {})),
    "Node, Object": function NodeObject(expr, options) {
      return _ensureNode(foldFraction(expr, options));
    }
  });
  function _removeFractions(thing) {
    if (isFraction(thing)) {
      return thing.valueOf();
    }
    if (thing instanceof Array) {
      return thing.map(_removeFractions);
    }
    if (isMatrix(thing)) {
      return matrix(_removeFractions(thing.valueOf()));
    }
    return thing;
  }
  function _eval(fnname, args, options) {
    try {
      return mathWithTransform[fnname].apply(null, args);
    } catch (ignore) {
      args = args.map(_removeFractions);
      return _toNumber(mathWithTransform[fnname].apply(null, args), options);
    }
  }
  var _toNode = typed({
    Fraction: _fractionToNode,
    number: function number(n) {
      if (n < 0) {
        return unaryMinusNode(new ConstantNode(-n));
      }
      return new ConstantNode(n);
    },
    BigNumber: function BigNumber(n) {
      if (n < 0) {
        return unaryMinusNode(new ConstantNode(-n));
      }
      return new ConstantNode(n);
    },
    Complex: function Complex(s) {
      throw new Error("Cannot convert Complex number to Node");
    },
    string: function string(s) {
      return new ConstantNode(s);
    },
    Matrix: function Matrix(m) {
      return new ArrayNode(m.valueOf().map((e2) => _toNode(e2)));
    }
  });
  function _ensureNode(thing) {
    if (isNode(thing)) {
      return thing;
    }
    return _toNode(thing);
  }
  function _exactFraction(n, options) {
    var exactFractions = options && options.exactFractions !== false;
    if (exactFractions && isFinite(n) && fraction) {
      var f = fraction(n);
      var fractionsLimit = options && typeof options.fractionsLimit === "number" ? options.fractionsLimit : Infinity;
      if (f.valueOf() === n && f.n < fractionsLimit && f.d < fractionsLimit) {
        return f;
      }
    }
    return n;
  }
  var _toNumber = typed({
    "string, Object": function stringObject(s, options) {
      if (config3.number === "BigNumber") {
        if (bignumber === void 0) {
          noBignumber();
        }
        return bignumber(s);
      } else if (config3.number === "Fraction") {
        if (fraction === void 0) {
          noFraction();
        }
        return fraction(s);
      } else {
        var n = parseFloat(s);
        return _exactFraction(n, options);
      }
    },
    "Fraction, Object": function FractionObject(s, options) {
      return s;
    },
    "BigNumber, Object": function BigNumberObject(s, options) {
      return s;
    },
    "number, Object": function numberObject(s, options) {
      return _exactFraction(s, options);
    },
    "Complex, Object": function ComplexObject(s, options) {
      if (s.im !== 0) {
        return s;
      }
      return _exactFraction(s.re, options);
    },
    "Matrix, Object": function MatrixObject(s, options) {
      return matrix(_exactFraction(s.valueOf()));
    },
    "Array, Object": function ArrayObject(s, options) {
      return s.map(_exactFraction);
    }
  });
  function unaryMinusNode(n) {
    return new OperatorNode("-", "unaryMinus", [n]);
  }
  function _fractionToNode(f) {
    var n;
    var vn = f.s * f.n;
    if (vn < 0) {
      n = new OperatorNode("-", "unaryMinus", [new ConstantNode(-vn)]);
    } else {
      n = new ConstantNode(vn);
    }
    if (f.d === 1) {
      return n;
    }
    return new OperatorNode("/", "divide", [n, new ConstantNode(f.d)]);
  }
  function _foldAccessor(obj, index, options) {
    if (!isIndexNode(index)) {
      return new AccessorNode(_ensureNode(obj), _ensureNode(index));
    }
    if (isArrayNode(obj) || isMatrix(obj)) {
      var remainingDims = Array.from(index.dimensions);
      while (remainingDims.length > 0) {
        if (isConstantNode(remainingDims[0]) && typeof remainingDims[0].value !== "string") {
          var first = _toNumber(remainingDims.shift().value, options);
          if (isArrayNode(obj)) {
            obj = obj.items[first - 1];
          } else {
            obj = obj.valueOf()[first - 1];
            if (obj instanceof Array) {
              obj = matrix(obj);
            }
          }
        } else if (remainingDims.length > 1 && isConstantNode(remainingDims[1]) && typeof remainingDims[1].value !== "string") {
          var second = _toNumber(remainingDims[1].value, options);
          var tryItems = [];
          var fromItems = isArrayNode(obj) ? obj.items : obj.valueOf();
          for (var item of fromItems) {
            if (isArrayNode(item)) {
              tryItems.push(item.items[second - 1]);
            } else if (isMatrix(obj)) {
              tryItems.push(item[second - 1]);
            } else {
              break;
            }
          }
          if (tryItems.length === fromItems.length) {
            if (isArrayNode(obj)) {
              obj = new ArrayNode(tryItems);
            } else {
              obj = matrix(tryItems);
            }
            remainingDims.splice(1, 1);
          } else {
            break;
          }
        } else {
          break;
        }
      }
      if (remainingDims.length === index.dimensions.length) {
        return new AccessorNode(_ensureNode(obj), index);
      }
      if (remainingDims.length > 0) {
        index = new IndexNode(remainingDims);
        return new AccessorNode(_ensureNode(obj), index);
      }
      return obj;
    }
    if (isObjectNode(obj) && index.dimensions.length === 1 && isConstantNode(index.dimensions[0])) {
      var key = index.dimensions[0].value;
      if (key in obj.properties) {
        return obj.properties[key];
      }
      return new ConstantNode();
    }
    return new AccessorNode(_ensureNode(obj), index);
  }
  function foldOp(fn, args, makeNode, options) {
    var first = args.shift();
    var reduction = args.reduce((sofar, next) => {
      if (!isNode(next)) {
        var last = sofar.pop();
        if (isNode(last)) {
          return [last, next];
        }
        try {
          sofar.push(_eval(fn, [last, next], options));
          return sofar;
        } catch (ignoreandcontinue) {
          sofar.push(last);
        }
      }
      sofar.push(_ensureNode(sofar.pop()));
      var newtree = sofar.length === 1 ? sofar[0] : makeNode(sofar);
      return [makeNode([newtree, _ensureNode(next)])];
    }, [first]);
    if (reduction.length === 1) {
      return reduction[0];
    }
    return makeNode([reduction[0], _toNode(reduction[1])]);
  }
  function foldFraction(node, options) {
    switch (node.type) {
      case "SymbolNode":
        return node;
      case "ConstantNode":
        switch (typeof node.value) {
          case "number":
            return _toNumber(node.value, options);
          case "string":
            return node.value;
          default:
            if (!isNaN(node.value))
              return _toNumber(node.value, options);
        }
        return node;
      case "FunctionNode":
        if (mathWithTransform[node.name] && mathWithTransform[node.name].rawArgs) {
          return node;
        }
        {
          var operatorFunctions = ["add", "multiply"];
          if (operatorFunctions.indexOf(node.name) === -1) {
            var args = node.args.map((arg) => foldFraction(arg, options));
            if (!args.some(isNode)) {
              try {
                return _eval(node.name, args, options);
              } catch (ignoreandcontinue) {
              }
            }
            if (node.name === "size" && args.length === 1 && isArrayNode(args[0])) {
              var sz = [];
              var section = args[0];
              while (isArrayNode(section)) {
                sz.push(section.items.length);
                section = section.items[0];
              }
              return matrix(sz);
            }
            return new FunctionNode(node.name, args.map(_ensureNode));
          }
        }
      case "OperatorNode": {
        var fn = node.fn.toString();
        var _args;
        var res;
        var makeNode = createMakeNodeFunction(node);
        if (isOperatorNode(node) && node.isUnary()) {
          _args = [foldFraction(node.args[0], options)];
          if (!isNode(_args[0])) {
            res = _eval(fn, _args, options);
          } else {
            res = makeNode(_args);
          }
        } else if (isAssociative(node, options.context)) {
          _args = allChildren(node, options.context);
          _args = _args.map((arg) => foldFraction(arg, options));
          if (isCommutative(fn, options.context)) {
            var consts = [];
            var vars = [];
            for (var i = 0; i < _args.length; i++) {
              if (!isNode(_args[i])) {
                consts.push(_args[i]);
              } else {
                vars.push(_args[i]);
              }
            }
            if (consts.length > 1) {
              res = foldOp(fn, consts, makeNode, options);
              vars.unshift(res);
              res = foldOp(fn, vars, makeNode, options);
            } else {
              res = foldOp(fn, _args, makeNode, options);
            }
          } else {
            res = foldOp(fn, _args, makeNode, options);
          }
        } else {
          _args = node.args.map((arg) => foldFraction(arg, options));
          res = foldOp(fn, _args, makeNode, options);
        }
        return res;
      }
      case "ParenthesisNode":
        return foldFraction(node.content, options);
      case "AccessorNode":
        return _foldAccessor(foldFraction(node.object, options), foldFraction(node.index, options), options);
      case "ArrayNode": {
        var foldItems = node.items.map((item) => foldFraction(item, options));
        if (foldItems.some(isNode)) {
          return new ArrayNode(foldItems.map(_ensureNode));
        }
        return matrix(foldItems);
      }
      case "IndexNode": {
        return new IndexNode(node.dimensions.map((n) => simplifyConstant(n, options)));
      }
      case "ObjectNode": {
        var foldProps = {};
        for (var prop in node.properties) {
          foldProps[prop] = simplifyConstant(node.properties[prop], options);
        }
        return new ObjectNode(foldProps);
      }
      case "AssignmentNode":
      case "BlockNode":
      case "FunctionAssignmentNode":
      case "RangeNode":
      case "ConditionalNode":
      default:
        throw new Error("Unimplemented node type in simplifyConstant: ".concat(node.type));
    }
  }
  return simplifyConstant;
});
var name$1x = "simplifyCore";
var dependencies$1x = ["typed", "parse", "equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "SymbolNode"];
var createSimplifyCore = /* @__PURE__ */ factory(name$1x, dependencies$1x, (_ref) => {
  var {
    typed,
    parse,
    equal,
    isZero,
    add,
    subtract,
    multiply,
    divide,
    pow,
    AccessorNode,
    ArrayNode,
    ConstantNode,
    FunctionNode,
    IndexNode,
    ObjectNode,
    OperatorNode,
    ParenthesisNode,
    SymbolNode
  } = _ref;
  var node0 = new ConstantNode(0);
  var node1 = new ConstantNode(1);
  var nodeT = new ConstantNode(true);
  var nodeF = new ConstantNode(false);
  function isAlwaysBoolean(node) {
    return isOperatorNode(node) && ["and", "not", "or"].includes(node.op);
  }
  var {
    hasProperty,
    isCommutative
  } = createUtil({
    FunctionNode,
    OperatorNode,
    SymbolNode
  });
  function _simplifyCore(nodeToSimplify) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var context = options ? options.context : void 0;
    if (hasProperty(nodeToSimplify, "trivial", context)) {
      if (isFunctionNode(nodeToSimplify) && nodeToSimplify.args.length === 1) {
        return _simplifyCore(nodeToSimplify.args[0], options);
      }
      var simpChild = false;
      var childCount = 0;
      nodeToSimplify.forEach((c) => {
        ++childCount;
        if (childCount === 1) {
          simpChild = _simplifyCore(c, options);
        }
      });
      if (childCount === 1) {
        return simpChild;
      }
    }
    var node = nodeToSimplify;
    if (isFunctionNode(node)) {
      var op = getOperator(node.name);
      if (op) {
        if (node.args.length > 2 && hasProperty(node, "associative", context)) {
          while (node.args.length > 2) {
            var last = node.args.pop();
            var seclast = node.args.pop();
            node.args.push(new OperatorNode(op, node.name, [last, seclast]));
          }
        }
        node = new OperatorNode(op, node.name, node.args);
      } else {
        return new FunctionNode(_simplifyCore(node.fn), node.args.map((n) => _simplifyCore(n, options)));
      }
    }
    if (isOperatorNode(node) && node.isUnary()) {
      var a0 = _simplifyCore(node.args[0], options);
      if (node.op === "~") {
        if (isOperatorNode(a0) && a0.isUnary() && a0.op === "~") {
          return a0.args[0];
        }
      }
      if (node.op === "not") {
        if (isOperatorNode(a0) && a0.isUnary() && a0.op === "not") {
          if (isAlwaysBoolean(a0.args[0])) {
            return a0.args[0];
          }
        }
      }
      var finish = true;
      if (node.op === "-") {
        if (isOperatorNode(a0)) {
          if (a0.isBinary() && a0.fn === "subtract") {
            node = new OperatorNode("-", "subtract", [a0.args[1], a0.args[0]]);
            finish = false;
          }
          if (a0.isUnary() && a0.op === "-") {
            return a0.args[0];
          }
        }
      }
      if (finish)
        return new OperatorNode(node.op, node.fn, [a0]);
    }
    if (isOperatorNode(node) && node.isBinary()) {
      var _a = _simplifyCore(node.args[0], options);
      var a1 = _simplifyCore(node.args[1], options);
      if (node.op === "+") {
        if (isConstantNode(_a) && isZero(_a.value)) {
          return a1;
        }
        if (isConstantNode(a1) && isZero(a1.value)) {
          return _a;
        }
        if (isOperatorNode(a1) && a1.isUnary() && a1.op === "-") {
          a1 = a1.args[0];
          node = new OperatorNode("-", "subtract", [_a, a1]);
        }
      }
      if (node.op === "-") {
        if (isOperatorNode(a1) && a1.isUnary() && a1.op === "-") {
          return _simplifyCore(new OperatorNode("+", "add", [_a, a1.args[0]]), options);
        }
        if (isConstantNode(_a) && isZero(_a.value)) {
          return _simplifyCore(new OperatorNode("-", "unaryMinus", [a1]));
        }
        if (isConstantNode(a1) && isZero(a1.value)) {
          return _a;
        }
        return new OperatorNode(node.op, node.fn, [_a, a1]);
      }
      if (node.op === "*") {
        if (isConstantNode(_a)) {
          if (isZero(_a.value)) {
            return node0;
          } else if (equal(_a.value, 1)) {
            return a1;
          }
        }
        if (isConstantNode(a1)) {
          if (isZero(a1.value)) {
            return node0;
          } else if (equal(a1.value, 1)) {
            return _a;
          }
          if (isCommutative(node, context)) {
            return new OperatorNode(node.op, node.fn, [a1, _a], node.implicit);
          }
        }
        return new OperatorNode(node.op, node.fn, [_a, a1], node.implicit);
      }
      if (node.op === "/") {
        if (isConstantNode(_a) && isZero(_a.value)) {
          return node0;
        }
        if (isConstantNode(a1) && equal(a1.value, 1)) {
          return _a;
        }
        return new OperatorNode(node.op, node.fn, [_a, a1]);
      }
      if (node.op === "^") {
        if (isConstantNode(a1)) {
          if (isZero(a1.value)) {
            return node1;
          } else if (equal(a1.value, 1)) {
            return _a;
          }
        }
      }
      if (node.op === "and") {
        if (isConstantNode(_a)) {
          if (_a.value) {
            if (isAlwaysBoolean(a1))
              return a1;
          } else {
            return nodeF;
          }
        }
        if (isConstantNode(a1)) {
          if (a1.value) {
            if (isAlwaysBoolean(_a))
              return _a;
          } else {
            return nodeF;
          }
        }
      }
      if (node.op === "or") {
        if (isConstantNode(_a)) {
          if (_a.value) {
            return nodeT;
          } else {
            if (isAlwaysBoolean(a1))
              return a1;
          }
        }
        if (isConstantNode(a1)) {
          if (a1.value) {
            return nodeT;
          } else {
            if (isAlwaysBoolean(_a))
              return _a;
          }
        }
      }
      return new OperatorNode(node.op, node.fn, [_a, a1]);
    }
    if (isOperatorNode(node)) {
      return new OperatorNode(node.op, node.fn, node.args.map((a) => _simplifyCore(a, options)));
    }
    if (isArrayNode(node)) {
      return new ArrayNode(node.items.map((n) => _simplifyCore(n, options)));
    }
    if (isAccessorNode(node)) {
      return new AccessorNode(_simplifyCore(node.object, options), _simplifyCore(node.index, options));
    }
    if (isIndexNode(node)) {
      return new IndexNode(node.dimensions.map((n) => _simplifyCore(n, options)));
    }
    if (isObjectNode(node)) {
      var newProps = {};
      for (var prop in node.properties) {
        newProps[prop] = _simplifyCore(node.properties[prop], options);
      }
      return new ObjectNode(newProps);
    }
    return node;
  }
  return typed(name$1x, {
    Node: _simplifyCore,
    "Node,Object": _simplifyCore
  });
});
var name$1y = "resolve";
var dependencies$1y = ["typed", "parse", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode"];
var createResolve = /* @__PURE__ */ factory(name$1y, dependencies$1y, (_ref) => {
  var {
    typed,
    parse,
    ConstantNode,
    FunctionNode,
    OperatorNode,
    ParenthesisNode
  } = _ref;
  function _resolve(node, scope) {
    var within = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : new Set();
    if (!scope) {
      return node;
    }
    if (isSymbolNode(node)) {
      if (within.has(node.name)) {
        var variables = Array.from(within).join(", ");
        throw new ReferenceError("recursive loop of variable definitions among {".concat(variables, "}"));
      }
      var value = scope.get(node.name);
      if (isNode(value)) {
        var nextWithin = new Set(within);
        nextWithin.add(node.name);
        return _resolve(value, scope, nextWithin);
      } else if (typeof value === "number") {
        return parse(String(value));
      } else if (value !== void 0) {
        return new ConstantNode(value);
      } else {
        return node;
      }
    } else if (isOperatorNode(node)) {
      var args = node.args.map(function(arg) {
        return _resolve(arg, scope, within);
      });
      return new OperatorNode(node.op, node.fn, args, node.implicit);
    } else if (isParenthesisNode(node)) {
      return new ParenthesisNode(_resolve(node.content, scope, within));
    } else if (isFunctionNode(node)) {
      var _args = node.args.map(function(arg) {
        return _resolve(arg, scope, within);
      });
      return new FunctionNode(node.name, _args);
    }
    return node.map((child) => _resolve(child, scope, within));
  }
  return typed("resolve", {
    Node: _resolve,
    "Node, Map | null | undefined": _resolve,
    "Node, Object": (n, scope) => _resolve(n, createMap(scope)),
    "Array | Matrix": typed.referToSelf((self) => (A) => A.map((n) => self(n))),
    "Array | Matrix, null | undefined": typed.referToSelf((self) => (A) => A.map((n) => self(n))),
    "Array, Object": typed.referTo("Array,Map", (selfAM) => (A, scope) => selfAM(A, createMap(scope))),
    "Matrix, Object": typed.referTo("Matrix,Map", (selfMM) => (A, scope) => selfMM(A, createMap(scope))),
    "Array | Matrix, Map": typed.referToSelf((self) => (A, scope) => A.map((n) => self(n, scope)))
  });
});
var name$1z = "derivative";
var dependencies$1z = ["typed", "config", "parse", "simplify", "equal", "isZero", "numeric", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode", "SymbolNode"];
var createDerivative = /* @__PURE__ */ factory(name$1z, dependencies$1z, (_ref) => {
  var {
    typed,
    config: config3,
    parse,
    simplify,
    equal,
    isZero,
    numeric: numeric2,
    ConstantNode,
    FunctionNode,
    OperatorNode,
    ParenthesisNode,
    SymbolNode
  } = _ref;
  function plainDerivative(expr, variable) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      simplify: true
    };
    var constNodes = {};
    constTag(constNodes, expr, variable.name);
    var res = _derivative(expr, constNodes);
    return options.simplify ? simplify(res) : res;
  }
  typed.addConversion({
    from: "identifier",
    to: "SymbolNode",
    convert: parse
  });
  var derivative = typed(name$1z, {
    "Node, SymbolNode": plainDerivative,
    "Node, SymbolNode, Object": plainDerivative
  });
  typed.removeConversion({
    from: "identifier",
    to: "SymbolNode",
    convert: parse
  });
  derivative._simplify = true;
  derivative.toTex = function(deriv) {
    return _derivTex.apply(null, deriv.args);
  };
  var _derivTex = typed("_derivTex", {
    "Node, SymbolNode": function NodeSymbolNode(expr, x) {
      if (isConstantNode(expr) && typeOf(expr.value) === "string") {
        return _derivTex(parse(expr.value).toString(), x.toString(), 1);
      } else {
        return _derivTex(expr.toTex(), x.toString(), 1);
      }
    },
    "Node, ConstantNode": function NodeConstantNode(expr, x) {
      if (typeOf(x.value) === "string") {
        return _derivTex(expr, parse(x.value));
      } else {
        throw new Error("The second parameter to 'derivative' is a non-string constant");
      }
    },
    "Node, SymbolNode, ConstantNode": function NodeSymbolNodeConstantNode(expr, x, order) {
      return _derivTex(expr.toString(), x.name, order.value);
    },
    "string, string, number": function stringStringNumber(expr, x, order) {
      var d;
      if (order === 1) {
        d = "{d\\over d" + x + "}";
      } else {
        d = "{d^{" + order + "}\\over d" + x + "^{" + order + "}}";
      }
      return d + "\\left[".concat(expr, "\\right]");
    }
  });
  var constTag = typed("constTag", {
    "Object, ConstantNode, string": function ObjectConstantNodeString(constNodes, node) {
      constNodes[node] = true;
      return true;
    },
    "Object, SymbolNode, string": function ObjectSymbolNodeString(constNodes, node, varName) {
      if (node.name !== varName) {
        constNodes[node] = true;
        return true;
      }
      return false;
    },
    "Object, ParenthesisNode, string": function ObjectParenthesisNodeString(constNodes, node, varName) {
      return constTag(constNodes, node.content, varName);
    },
    "Object, FunctionAssignmentNode, string": function ObjectFunctionAssignmentNodeString(constNodes, node, varName) {
      if (node.params.indexOf(varName) === -1) {
        constNodes[node] = true;
        return true;
      }
      return constTag(constNodes, node.expr, varName);
    },
    "Object, FunctionNode | OperatorNode, string": function ObjectFunctionNodeOperatorNodeString(constNodes, node, varName) {
      if (node.args.length > 0) {
        var isConst = constTag(constNodes, node.args[0], varName);
        for (var i = 1; i < node.args.length; ++i) {
          isConst = constTag(constNodes, node.args[i], varName) && isConst;
        }
        if (isConst) {
          constNodes[node] = true;
          return true;
        }
      }
      return false;
    }
  });
  var _derivative = typed("_derivative", {
    "ConstantNode, Object": function ConstantNodeObject(node) {
      return createConstantNode2(0);
    },
    "SymbolNode, Object": function SymbolNodeObject(node, constNodes) {
      if (constNodes[node] !== void 0) {
        return createConstantNode2(0);
      }
      return createConstantNode2(1);
    },
    "ParenthesisNode, Object": function ParenthesisNodeObject(node, constNodes) {
      return new ParenthesisNode(_derivative(node.content, constNodes));
    },
    "FunctionAssignmentNode, Object": function FunctionAssignmentNodeObject(node, constNodes) {
      if (constNodes[node] !== void 0) {
        return createConstantNode2(0);
      }
      return _derivative(node.expr, constNodes);
    },
    "FunctionNode, Object": function FunctionNodeObject(node, constNodes) {
      if (node.args.length !== 1) {
        funcArgsCheck(node);
      }
      if (constNodes[node] !== void 0) {
        return createConstantNode2(0);
      }
      var arg0 = node.args[0];
      var arg1;
      var div = false;
      var negative = false;
      var funcDerivative;
      switch (node.name) {
        case "cbrt":
          div = true;
          funcDerivative = new OperatorNode("*", "multiply", [createConstantNode2(3), new OperatorNode("^", "pow", [arg0, new OperatorNode("/", "divide", [createConstantNode2(2), createConstantNode2(3)])])]);
          break;
        case "sqrt":
        case "nthRoot":
          if (node.args.length === 1) {
            div = true;
            funcDerivative = new OperatorNode("*", "multiply", [createConstantNode2(2), new FunctionNode("sqrt", [arg0])]);
          } else if (node.args.length === 2) {
            arg1 = new OperatorNode("/", "divide", [createConstantNode2(1), node.args[1]]);
            constNodes[arg1] = constNodes[node.args[1]];
            return _derivative(new OperatorNode("^", "pow", [arg0, arg1]), constNodes);
          }
          break;
        case "log10":
          arg1 = createConstantNode2(10);
        case "log":
          if (!arg1 && node.args.length === 1) {
            funcDerivative = arg0.clone();
            div = true;
          } else if (node.args.length === 1 && arg1 || node.args.length === 2 && constNodes[node.args[1]] !== void 0) {
            funcDerivative = new OperatorNode("*", "multiply", [arg0.clone(), new FunctionNode("log", [arg1 || node.args[1]])]);
            div = true;
          } else if (node.args.length === 2) {
            return _derivative(new OperatorNode("/", "divide", [new FunctionNode("log", [arg0]), new FunctionNode("log", [node.args[1]])]), constNodes);
          }
          break;
        case "pow":
          constNodes[arg1] = constNodes[node.args[1]];
          return _derivative(new OperatorNode("^", "pow", [arg0, node.args[1]]), constNodes);
        case "exp":
          funcDerivative = new FunctionNode("exp", [arg0.clone()]);
          break;
        case "sin":
          funcDerivative = new FunctionNode("cos", [arg0.clone()]);
          break;
        case "cos":
          funcDerivative = new OperatorNode("-", "unaryMinus", [new FunctionNode("sin", [arg0.clone()])]);
          break;
        case "tan":
          funcDerivative = new OperatorNode("^", "pow", [new FunctionNode("sec", [arg0.clone()]), createConstantNode2(2)]);
          break;
        case "sec":
          funcDerivative = new OperatorNode("*", "multiply", [node, new FunctionNode("tan", [arg0.clone()])]);
          break;
        case "csc":
          negative = true;
          funcDerivative = new OperatorNode("*", "multiply", [node, new FunctionNode("cot", [arg0.clone()])]);
          break;
        case "cot":
          negative = true;
          funcDerivative = new OperatorNode("^", "pow", [new FunctionNode("csc", [arg0.clone()]), createConstantNode2(2)]);
          break;
        case "asin":
          div = true;
          funcDerivative = new FunctionNode("sqrt", [new OperatorNode("-", "subtract", [createConstantNode2(1), new OperatorNode("^", "pow", [arg0.clone(), createConstantNode2(2)])])]);
          break;
        case "acos":
          div = true;
          negative = true;
          funcDerivative = new FunctionNode("sqrt", [new OperatorNode("-", "subtract", [createConstantNode2(1), new OperatorNode("^", "pow", [arg0.clone(), createConstantNode2(2)])])]);
          break;
        case "atan":
          div = true;
          funcDerivative = new OperatorNode("+", "add", [new OperatorNode("^", "pow", [arg0.clone(), createConstantNode2(2)]), createConstantNode2(1)]);
          break;
        case "asec":
          div = true;
          funcDerivative = new OperatorNode("*", "multiply", [new FunctionNode("abs", [arg0.clone()]), new FunctionNode("sqrt", [new OperatorNode("-", "subtract", [new OperatorNode("^", "pow", [arg0.clone(), createConstantNode2(2)]), createConstantNode2(1)])])]);
          break;
        case "acsc":
          div = true;
          negative = true;
          funcDerivative = new OperatorNode("*", "multiply", [new FunctionNode("abs", [arg0.clone()]), new FunctionNode("sqrt", [new OperatorNode("-", "subtract", [new OperatorNode("^", "pow", [arg0.clone(), createConstantNode2(2)]), createConstantNode2(1)])])]);
          break;
        case "acot":
          div = true;
          negative = true;
          funcDerivative = new OperatorNode("+", "add", [new OperatorNode("^", "pow", [arg0.clone(), createConstantNode2(2)]), createConstantNode2(1)]);
          break;
        case "sinh":
          funcDerivative = new FunctionNode("cosh", [arg0.clone()]);
          break;
        case "cosh":
          funcDerivative = new FunctionNode("sinh", [arg0.clone()]);
          break;
        case "tanh":
          funcDerivative = new OperatorNode("^", "pow", [new FunctionNode("sech", [arg0.clone()]), createConstantNode2(2)]);
          break;
        case "sech":
          negative = true;
          funcDerivative = new OperatorNode("*", "multiply", [node, new FunctionNode("tanh", [arg0.clone()])]);
          break;
        case "csch":
          negative = true;
          funcDerivative = new OperatorNode("*", "multiply", [node, new FunctionNode("coth", [arg0.clone()])]);
          break;
        case "coth":
          negative = true;
          funcDerivative = new OperatorNode("^", "pow", [new FunctionNode("csch", [arg0.clone()]), createConstantNode2(2)]);
          break;
        case "asinh":
          div = true;
          funcDerivative = new FunctionNode("sqrt", [new OperatorNode("+", "add", [new OperatorNode("^", "pow", [arg0.clone(), createConstantNode2(2)]), createConstantNode2(1)])]);
          break;
        case "acosh":
          div = true;
          funcDerivative = new FunctionNode("sqrt", [new OperatorNode("-", "subtract", [new OperatorNode("^", "pow", [arg0.clone(), createConstantNode2(2)]), createConstantNode2(1)])]);
          break;
        case "atanh":
          div = true;
          funcDerivative = new OperatorNode("-", "subtract", [createConstantNode2(1), new OperatorNode("^", "pow", [arg0.clone(), createConstantNode2(2)])]);
          break;
        case "asech":
          div = true;
          negative = true;
          funcDerivative = new OperatorNode("*", "multiply", [arg0.clone(), new FunctionNode("sqrt", [new OperatorNode("-", "subtract", [createConstantNode2(1), new OperatorNode("^", "pow", [arg0.clone(), createConstantNode2(2)])])])]);
          break;
        case "acsch":
          div = true;
          negative = true;
          funcDerivative = new OperatorNode("*", "multiply", [new FunctionNode("abs", [arg0.clone()]), new FunctionNode("sqrt", [new OperatorNode("+", "add", [new OperatorNode("^", "pow", [arg0.clone(), createConstantNode2(2)]), createConstantNode2(1)])])]);
          break;
        case "acoth":
          div = true;
          negative = true;
          funcDerivative = new OperatorNode("-", "subtract", [createConstantNode2(1), new OperatorNode("^", "pow", [arg0.clone(), createConstantNode2(2)])]);
          break;
        case "abs":
          funcDerivative = new OperatorNode("/", "divide", [new FunctionNode(new SymbolNode("abs"), [arg0.clone()]), arg0.clone()]);
          break;
        case "gamma":
        default:
          throw new Error('Function "' + node.name + '" is not supported by derivative, or a wrong number of arguments is passed');
      }
      var op, func;
      if (div) {
        op = "/";
        func = "divide";
      } else {
        op = "*";
        func = "multiply";
      }
      var chainDerivative = _derivative(arg0, constNodes);
      if (negative) {
        chainDerivative = new OperatorNode("-", "unaryMinus", [chainDerivative]);
      }
      return new OperatorNode(op, func, [chainDerivative, funcDerivative]);
    },
    "OperatorNode, Object": function OperatorNodeObject(node, constNodes) {
      if (constNodes[node] !== void 0) {
        return createConstantNode2(0);
      }
      if (node.op === "+") {
        return new OperatorNode(node.op, node.fn, node.args.map(function(arg) {
          return _derivative(arg, constNodes);
        }));
      }
      if (node.op === "-") {
        if (node.isUnary()) {
          return new OperatorNode(node.op, node.fn, [_derivative(node.args[0], constNodes)]);
        }
        if (node.isBinary()) {
          return new OperatorNode(node.op, node.fn, [_derivative(node.args[0], constNodes), _derivative(node.args[1], constNodes)]);
        }
      }
      if (node.op === "*") {
        var constantTerms = node.args.filter(function(arg) {
          return constNodes[arg] !== void 0;
        });
        if (constantTerms.length > 0) {
          var nonConstantTerms = node.args.filter(function(arg) {
            return constNodes[arg] === void 0;
          });
          var nonConstantNode = nonConstantTerms.length === 1 ? nonConstantTerms[0] : new OperatorNode("*", "multiply", nonConstantTerms);
          var newArgs = constantTerms.concat(_derivative(nonConstantNode, constNodes));
          return new OperatorNode("*", "multiply", newArgs);
        }
        return new OperatorNode("+", "add", node.args.map(function(argOuter) {
          return new OperatorNode("*", "multiply", node.args.map(function(argInner) {
            return argInner === argOuter ? _derivative(argInner, constNodes) : argInner.clone();
          }));
        }));
      }
      if (node.op === "/" && node.isBinary()) {
        var arg0 = node.args[0];
        var arg1 = node.args[1];
        if (constNodes[arg1] !== void 0) {
          return new OperatorNode("/", "divide", [_derivative(arg0, constNodes), arg1]);
        }
        if (constNodes[arg0] !== void 0) {
          return new OperatorNode("*", "multiply", [new OperatorNode("-", "unaryMinus", [arg0]), new OperatorNode("/", "divide", [_derivative(arg1, constNodes), new OperatorNode("^", "pow", [arg1.clone(), createConstantNode2(2)])])]);
        }
        return new OperatorNode("/", "divide", [new OperatorNode("-", "subtract", [new OperatorNode("*", "multiply", [_derivative(arg0, constNodes), arg1.clone()]), new OperatorNode("*", "multiply", [arg0.clone(), _derivative(arg1, constNodes)])]), new OperatorNode("^", "pow", [arg1.clone(), createConstantNode2(2)])]);
      }
      if (node.op === "^" && node.isBinary()) {
        var _arg = node.args[0];
        var _arg2 = node.args[1];
        if (constNodes[_arg] !== void 0) {
          if (isConstantNode(_arg) && (isZero(_arg.value) || equal(_arg.value, 1))) {
            return createConstantNode2(0);
          }
          return new OperatorNode("*", "multiply", [node, new OperatorNode("*", "multiply", [new FunctionNode("log", [_arg.clone()]), _derivative(_arg2.clone(), constNodes)])]);
        }
        if (constNodes[_arg2] !== void 0) {
          if (isConstantNode(_arg2)) {
            if (isZero(_arg2.value)) {
              return createConstantNode2(0);
            }
            if (equal(_arg2.value, 1)) {
              return _derivative(_arg, constNodes);
            }
          }
          var powMinusOne = new OperatorNode("^", "pow", [_arg.clone(), new OperatorNode("-", "subtract", [_arg2, createConstantNode2(1)])]);
          return new OperatorNode("*", "multiply", [_arg2.clone(), new OperatorNode("*", "multiply", [_derivative(_arg, constNodes), powMinusOne])]);
        }
        return new OperatorNode("*", "multiply", [new OperatorNode("^", "pow", [_arg.clone(), _arg2.clone()]), new OperatorNode("+", "add", [new OperatorNode("*", "multiply", [_derivative(_arg, constNodes), new OperatorNode("/", "divide", [_arg2.clone(), _arg.clone()])]), new OperatorNode("*", "multiply", [_derivative(_arg2, constNodes), new FunctionNode("log", [_arg.clone()])])])]);
      }
      throw new Error('Operator "' + node.op + '" is not supported by derivative, or a wrong number of arguments is passed');
    }
  });
  function funcArgsCheck(node) {
    if ((node.name === "log" || node.name === "nthRoot" || node.name === "pow") && node.args.length === 2) {
      return;
    }
    for (var i = 0; i < node.args.length; ++i) {
      node.args[i] = createConstantNode2(0);
    }
    node.compile().evaluate();
    throw new Error("Expected TypeError, but none found");
  }
  function createConstantNode2(value, valueType) {
    return new ConstantNode(numeric2(value, valueType || config3.number));
  }
  return derivative;
});
var name$1A = "rationalize";
var dependencies$1A = ["config", "typed", "equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "parse", "simplifyConstant", "simplifyCore", "simplify", "?bignumber", "?fraction", "mathWithTransform", "matrix", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "SymbolNode", "ParenthesisNode"];
var createRationalize = /* @__PURE__ */ factory(name$1A, dependencies$1A, (_ref) => {
  var {
    config: config3,
    typed,
    equal,
    isZero,
    add,
    subtract,
    multiply,
    divide,
    pow,
    parse,
    simplifyConstant,
    simplifyCore,
    simplify,
    fraction,
    bignumber,
    mathWithTransform,
    matrix,
    AccessorNode,
    ArrayNode,
    ConstantNode,
    FunctionNode,
    IndexNode,
    ObjectNode,
    OperatorNode,
    SymbolNode,
    ParenthesisNode
  } = _ref;
  function _rationalize(expr) {
    var scope = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var detailed = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var setRules = rulesRationalize();
    var polyRet = polynomial(expr, scope, true, setRules.firstRules);
    var nVars = polyRet.variables.length;
    var noExactFractions = {
      exactFractions: false
    };
    var withExactFractions = {
      exactFractions: true
    };
    expr = polyRet.expression;
    if (nVars >= 1) {
      expr = expandPower(expr);
      var sBefore;
      var rules;
      var eDistrDiv = true;
      var redoInic = false;
      expr = simplify(expr, setRules.firstRules, {}, noExactFractions);
      var s;
      while (true) {
        rules = eDistrDiv ? setRules.distrDivRules : setRules.sucDivRules;
        expr = simplify(expr, rules, {}, withExactFractions);
        eDistrDiv = !eDistrDiv;
        s = expr.toString();
        if (s === sBefore) {
          break;
        }
        redoInic = true;
        sBefore = s;
      }
      if (redoInic) {
        expr = simplify(expr, setRules.firstRulesAgain, {}, noExactFractions);
      }
      expr = simplify(expr, setRules.finalRules, {}, noExactFractions);
    }
    var coefficients = [];
    var retRationalize = {};
    if (expr.type === "OperatorNode" && expr.isBinary() && expr.op === "/") {
      if (nVars === 1) {
        expr.args[0] = polyToCanonical(expr.args[0], coefficients);
        expr.args[1] = polyToCanonical(expr.args[1]);
      }
      if (detailed) {
        retRationalize.numerator = expr.args[0];
        retRationalize.denominator = expr.args[1];
      }
    } else {
      if (nVars === 1) {
        expr = polyToCanonical(expr, coefficients);
      }
      if (detailed) {
        retRationalize.numerator = expr;
        retRationalize.denominator = null;
      }
    }
    if (!detailed)
      return expr;
    retRationalize.coefficients = coefficients;
    retRationalize.variables = polyRet.variables;
    retRationalize.expression = expr;
    return retRationalize;
  }
  return typed(name$1A, {
    Node: _rationalize,
    "Node, boolean": (expr, detailed) => _rationalize(expr, {}, detailed),
    "Node, Object": _rationalize,
    "Node, Object, boolean": _rationalize
  });
  function polynomial(expr, scope, extended, rules) {
    var variables = [];
    var node = simplify(expr, rules, scope, {
      exactFractions: false
    });
    extended = !!extended;
    var oper = "+-*" + (extended ? "/" : "");
    recPoly(node);
    var retFunc = {};
    retFunc.expression = node;
    retFunc.variables = variables;
    return retFunc;
    function recPoly(node2) {
      var tp = node2.type;
      if (tp === "FunctionNode") {
        throw new Error("There is an unsolved function call");
      } else if (tp === "OperatorNode") {
        if (node2.op === "^") {
          if (node2.args[1].type !== "ConstantNode" || !isInteger(parseFloat(node2.args[1].value))) {
            throw new Error("There is a non-integer exponent");
          } else {
            recPoly(node2.args[0]);
          }
        } else {
          if (oper.indexOf(node2.op) === -1) {
            throw new Error("Operator " + node2.op + " invalid in polynomial expression");
          }
          for (var i = 0; i < node2.args.length; i++) {
            recPoly(node2.args[i]);
          }
        }
      } else if (tp === "SymbolNode") {
        var _name = node2.name;
        var pos = variables.indexOf(_name);
        if (pos === -1) {
          variables.push(_name);
        }
      } else if (tp === "ParenthesisNode") {
        recPoly(node2.content);
      } else if (tp !== "ConstantNode") {
        throw new Error("type " + tp + " is not allowed in polynomial expression");
      }
    }
  }
  function rulesRationalize() {
    var oldRules = [
      simplifyCore,
      {
        l: "n+n",
        r: "2*n"
      },
      {
        l: "n+-n",
        r: "0"
      },
      simplifyConstant,
      {
        l: "n*(n1^-1)",
        r: "n/n1"
      },
      {
        l: "n*n1^-n2",
        r: "n/n1^n2"
      },
      {
        l: "n1^-1",
        r: "1/n1"
      },
      {
        l: "n*(n1/n2)",
        r: "(n*n1)/n2"
      },
      {
        l: "1*n",
        r: "n"
      }
    ];
    var rulesFirst = [
      {
        l: "(-n1)/(-n2)",
        r: "n1/n2"
      },
      {
        l: "(-n1)*(-n2)",
        r: "n1*n2"
      },
      {
        l: "n1--n2",
        r: "n1+n2"
      },
      {
        l: "n1-n2",
        r: "n1+(-n2)"
      },
      {
        l: "(n1+n2)*n3",
        r: "(n1*n3 + n2*n3)"
      },
      {
        l: "n1*(n2+n3)",
        r: "(n1*n2+n1*n3)"
      },
      {
        l: "c1*n + c2*n",
        r: "(c1+c2)*n"
      },
      {
        l: "c1*n + n",
        r: "(c1+1)*n"
      },
      {
        l: "c1*n - c2*n",
        r: "(c1-c2)*n"
      },
      {
        l: "c1*n - n",
        r: "(c1-1)*n"
      },
      {
        l: "v/c",
        r: "(1/c)*v"
      },
      {
        l: "v/-c",
        r: "-(1/c)*v"
      },
      {
        l: "-v*-c",
        r: "c*v"
      },
      {
        l: "-v*c",
        r: "-c*v"
      },
      {
        l: "v*-c",
        r: "-c*v"
      },
      {
        l: "v*c",
        r: "c*v"
      },
      {
        l: "-(-n1*n2)",
        r: "(n1*n2)"
      },
      {
        l: "-(n1*n2)",
        r: "(-n1*n2)"
      },
      {
        l: "-(-n1+n2)",
        r: "(n1-n2)"
      },
      {
        l: "-(n1+n2)",
        r: "(-n1-n2)"
      },
      {
        l: "(n1^n2)^n3",
        r: "(n1^(n2*n3))"
      },
      {
        l: "-(-n1/n2)",
        r: "(n1/n2)"
      },
      {
        l: "-(n1/n2)",
        r: "(-n1/n2)"
      }
    ];
    var rulesDistrDiv = [
      {
        l: "(n1/n2 + n3/n4)",
        r: "((n1*n4 + n3*n2)/(n2*n4))"
      },
      {
        l: "(n1/n2 + n3)",
        r: "((n1 + n3*n2)/n2)"
      },
      {
        l: "(n1 + n2/n3)",
        r: "((n1*n3 + n2)/n3)"
      }
    ];
    var rulesSucDiv = [
      {
        l: "(n1/(n2/n3))",
        r: "((n1*n3)/n2)"
      },
      {
        l: "(n1/n2/n3)",
        r: "(n1/(n2*n3))"
      }
    ];
    var setRules = {};
    setRules.firstRules = oldRules.concat(rulesFirst, rulesSucDiv);
    setRules.distrDivRules = rulesDistrDiv;
    setRules.sucDivRules = rulesSucDiv;
    setRules.firstRulesAgain = oldRules.concat(rulesFirst);
    setRules.finalRules = [
      simplifyCore,
      {
        l: "n*-n",
        r: "-n^2"
      },
      {
        l: "n*n",
        r: "n^2"
      },
      simplifyConstant,
      {
        l: "n*-n^n1",
        r: "-n^(n1+1)"
      },
      {
        l: "n*n^n1",
        r: "n^(n1+1)"
      },
      {
        l: "n^n1*-n^n2",
        r: "-n^(n1+n2)"
      },
      {
        l: "n^n1*n^n2",
        r: "n^(n1+n2)"
      },
      {
        l: "n^n1*-n",
        r: "-n^(n1+1)"
      },
      {
        l: "n^n1*n",
        r: "n^(n1+1)"
      },
      {
        l: "n^n1/-n",
        r: "-n^(n1-1)"
      },
      {
        l: "n^n1/n",
        r: "n^(n1-1)"
      },
      {
        l: "n/-n^n1",
        r: "-n^(1-n1)"
      },
      {
        l: "n/n^n1",
        r: "n^(1-n1)"
      },
      {
        l: "n^n1/-n^n2",
        r: "n^(n1-n2)"
      },
      {
        l: "n^n1/n^n2",
        r: "n^(n1-n2)"
      },
      {
        l: "n1+(-n2*n3)",
        r: "n1-n2*n3"
      },
      {
        l: "v*(-c)",
        r: "-c*v"
      },
      {
        l: "n1+-n2",
        r: "n1-n2"
      },
      {
        l: "v*c",
        r: "c*v"
      },
      {
        l: "(n1^n2)^n3",
        r: "(n1^(n2*n3))"
      }
    ];
    return setRules;
  }
  function expandPower(node, parent, indParent) {
    var tp = node.type;
    var internal = arguments.length > 1;
    if (tp === "OperatorNode" && node.isBinary()) {
      var does = false;
      var val;
      if (node.op === "^") {
        if ((node.args[0].type === "ParenthesisNode" || node.args[0].type === "OperatorNode") && node.args[1].type === "ConstantNode") {
          val = parseFloat(node.args[1].value);
          does = val >= 2 && isInteger(val);
        }
      }
      if (does) {
        if (val > 2) {
          var nEsqTopo = node.args[0];
          var nDirTopo = new OperatorNode("^", "pow", [node.args[0].cloneDeep(), new ConstantNode(val - 1)]);
          node = new OperatorNode("*", "multiply", [nEsqTopo, nDirTopo]);
        } else {
          node = new OperatorNode("*", "multiply", [node.args[0], node.args[0].cloneDeep()]);
        }
        if (internal) {
          if (indParent === "content") {
            parent.content = node;
          } else {
            parent.args[indParent] = node;
          }
        }
      }
    }
    if (tp === "ParenthesisNode") {
      expandPower(node.content, node, "content");
    } else if (tp !== "ConstantNode" && tp !== "SymbolNode") {
      for (var i = 0; i < node.args.length; i++) {
        expandPower(node.args[i], node, i);
      }
    }
    if (!internal) {
      return node;
    }
  }
  function polyToCanonical(node, coefficients) {
    if (coefficients === void 0) {
      coefficients = [];
    }
    coefficients[0] = 0;
    var o = {};
    o.cte = 1;
    o.oper = "+";
    o.fire = "";
    var maxExpo = 0;
    var varname = "";
    recurPol(node, null, o);
    maxExpo = coefficients.length - 1;
    var first = true;
    var no;
    for (var i = maxExpo; i >= 0; i--) {
      if (coefficients[i] === 0)
        continue;
      var n12 = new ConstantNode(first ? coefficients[i] : Math.abs(coefficients[i]));
      var op = coefficients[i] < 0 ? "-" : "+";
      if (i > 0) {
        var n22 = new SymbolNode(varname);
        if (i > 1) {
          var n3 = new ConstantNode(i);
          n22 = new OperatorNode("^", "pow", [n22, n3]);
        }
        if (coefficients[i] === -1 && first) {
          n12 = new OperatorNode("-", "unaryMinus", [n22]);
        } else if (Math.abs(coefficients[i]) === 1) {
          n12 = n22;
        } else {
          n12 = new OperatorNode("*", "multiply", [n12, n22]);
        }
      }
      if (first) {
        no = n12;
      } else if (op === "+") {
        no = new OperatorNode("+", "add", [no, n12]);
      } else {
        no = new OperatorNode("-", "subtract", [no, n12]);
      }
      first = false;
    }
    if (first) {
      return new ConstantNode(0);
    } else {
      return no;
    }
    function recurPol(node2, noPai, o2) {
      var tp = node2.type;
      if (tp === "FunctionNode") {
        throw new Error("There is an unsolved function call");
      } else if (tp === "OperatorNode") {
        if ("+-*^".indexOf(node2.op) === -1)
          throw new Error("Operator " + node2.op + " invalid");
        if (noPai !== null) {
          if ((node2.fn === "unaryMinus" || node2.fn === "pow") && noPai.fn !== "add" && noPai.fn !== "subtract" && noPai.fn !== "multiply") {
            throw new Error("Invalid " + node2.op + " placing");
          }
          if ((node2.fn === "subtract" || node2.fn === "add" || node2.fn === "multiply") && noPai.fn !== "add" && noPai.fn !== "subtract") {
            throw new Error("Invalid " + node2.op + " placing");
          }
          if ((node2.fn === "subtract" || node2.fn === "add" || node2.fn === "unaryMinus") && o2.noFil !== 0) {
            throw new Error("Invalid " + node2.op + " placing");
          }
        }
        if (node2.op === "^" || node2.op === "*") {
          o2.fire = node2.op;
        }
        for (var _i = 0; _i < node2.args.length; _i++) {
          if (node2.fn === "unaryMinus")
            o2.oper = "-";
          if (node2.op === "+" || node2.fn === "subtract") {
            o2.fire = "";
            o2.cte = 1;
            o2.oper = _i === 0 ? "+" : node2.op;
          }
          o2.noFil = _i;
          recurPol(node2.args[_i], node2, o2);
        }
      } else if (tp === "SymbolNode") {
        if (node2.name !== varname && varname !== "") {
          throw new Error("There is more than one variable");
        }
        varname = node2.name;
        if (noPai === null) {
          coefficients[1] = 1;
          return;
        }
        if (noPai.op === "^" && o2.noFil !== 0) {
          throw new Error("In power the variable should be the first parameter");
        }
        if (noPai.op === "*" && o2.noFil !== 1) {
          throw new Error("In multiply the variable should be the second parameter");
        }
        if (o2.fire === "" || o2.fire === "*") {
          if (maxExpo < 1)
            coefficients[1] = 0;
          coefficients[1] += o2.cte * (o2.oper === "+" ? 1 : -1);
          maxExpo = Math.max(1, maxExpo);
        }
      } else if (tp === "ConstantNode") {
        var valor = parseFloat(node2.value);
        if (noPai === null) {
          coefficients[0] = valor;
          return;
        }
        if (noPai.op === "^") {
          if (o2.noFil !== 1)
            throw new Error("Constant cannot be powered");
          if (!isInteger(valor) || valor <= 0) {
            throw new Error("Non-integer exponent is not allowed");
          }
          for (var _i2 = maxExpo + 1; _i2 < valor; _i2++)
            coefficients[_i2] = 0;
          if (valor > maxExpo)
            coefficients[valor] = 0;
          coefficients[valor] += o2.cte * (o2.oper === "+" ? 1 : -1);
          maxExpo = Math.max(valor, maxExpo);
          return;
        }
        o2.cte = valor;
        if (o2.fire === "") {
          coefficients[0] += o2.cte * (o2.oper === "+" ? 1 : -1);
        }
      } else {
        throw new Error("Type " + tp + " is not allowed");
      }
    }
  }
});
var name$1B = "reviver";
var dependencies$1B = ["classes"];
var createReviver = /* @__PURE__ */ factory(name$1B, dependencies$1B, (_ref) => {
  var {
    classes
  } = _ref;
  return function reviver(key, value) {
    var constructor = classes[value && value.mathjs];
    if (constructor && typeof constructor.fromJSON === "function") {
      return constructor.fromJSON(value);
    }
    return value;
  };
});
var name$1C = "replacer";
var dependencies$1C = [];
var createReplacer = /* @__PURE__ */ factory(name$1C, dependencies$1C, () => {
  return function replacer(key, value) {
    if (typeof value === "number" && (!isFinite(value) || isNaN(value))) {
      return {
        mathjs: "number",
        value: String(value)
      };
    }
    return value;
  };
});
var version = "11.8.0";
var createTrue = /* @__PURE__ */ factory("true", [], () => true);
var createFalse = /* @__PURE__ */ factory("false", [], () => false);
var createNull = /* @__PURE__ */ factory("null", [], () => null);
var createInfinity = /* @__PURE__ */ recreateFactory("Infinity", ["config", "?BigNumber"], (_ref) => {
  var {
    config: config3,
    BigNumber
  } = _ref;
  return config3.number === "BigNumber" ? new BigNumber(Infinity) : Infinity;
});
var createNaN = /* @__PURE__ */ recreateFactory("NaN", ["config", "?BigNumber"], (_ref2) => {
  var {
    config: config3,
    BigNumber
  } = _ref2;
  return config3.number === "BigNumber" ? new BigNumber(NaN) : NaN;
});
var createPi = /* @__PURE__ */ recreateFactory("pi", ["config", "?BigNumber"], (_ref3) => {
  var {
    config: config3,
    BigNumber
  } = _ref3;
  return config3.number === "BigNumber" ? createBigNumberPi(BigNumber) : pi;
});
var createTau = /* @__PURE__ */ recreateFactory("tau", ["config", "?BigNumber"], (_ref4) => {
  var {
    config: config3,
    BigNumber
  } = _ref4;
  return config3.number === "BigNumber" ? createBigNumberTau(BigNumber) : tau;
});
var createE = /* @__PURE__ */ recreateFactory("e", ["config", "?BigNumber"], (_ref5) => {
  var {
    config: config3,
    BigNumber
  } = _ref5;
  return config3.number === "BigNumber" ? createBigNumberE(BigNumber) : e;
});
var createPhi = /* @__PURE__ */ recreateFactory("phi", ["config", "?BigNumber"], (_ref6) => {
  var {
    config: config3,
    BigNumber
  } = _ref6;
  return config3.number === "BigNumber" ? createBigNumberPhi(BigNumber) : phi;
});
var createLN2 = /* @__PURE__ */ recreateFactory("LN2", ["config", "?BigNumber"], (_ref7) => {
  var {
    config: config3,
    BigNumber
  } = _ref7;
  return config3.number === "BigNumber" ? new BigNumber(2).ln() : Math.LN2;
});
var createLN10 = /* @__PURE__ */ recreateFactory("LN10", ["config", "?BigNumber"], (_ref8) => {
  var {
    config: config3,
    BigNumber
  } = _ref8;
  return config3.number === "BigNumber" ? new BigNumber(10).ln() : Math.LN10;
});
var createLOG2E = /* @__PURE__ */ recreateFactory("LOG2E", ["config", "?BigNumber"], (_ref9) => {
  var {
    config: config3,
    BigNumber
  } = _ref9;
  return config3.number === "BigNumber" ? new BigNumber(1).div(new BigNumber(2).ln()) : Math.LOG2E;
});
var createLOG10E = /* @__PURE__ */ recreateFactory("LOG10E", ["config", "?BigNumber"], (_ref10) => {
  var {
    config: config3,
    BigNumber
  } = _ref10;
  return config3.number === "BigNumber" ? new BigNumber(1).div(new BigNumber(10).ln()) : Math.LOG10E;
});
var createSQRT1_2 = /* @__PURE__ */ recreateFactory("SQRT1_2", ["config", "?BigNumber"], (_ref11) => {
  var {
    config: config3,
    BigNumber
  } = _ref11;
  return config3.number === "BigNumber" ? new BigNumber("0.5").sqrt() : Math.SQRT1_2;
});
var createSQRT2 = /* @__PURE__ */ recreateFactory("SQRT2", ["config", "?BigNumber"], (_ref12) => {
  var {
    config: config3,
    BigNumber
  } = _ref12;
  return config3.number === "BigNumber" ? new BigNumber(2).sqrt() : Math.SQRT2;
});
var createI = /* @__PURE__ */ recreateFactory("i", ["Complex"], (_ref13) => {
  var {
    Complex
  } = _ref13;
  return Complex.I;
});
var createUppercasePi = /* @__PURE__ */ factory("PI", ["pi"], (_ref14) => {
  var {
    pi: pi2
  } = _ref14;
  return pi2;
});
var createUppercaseE = /* @__PURE__ */ factory("E", ["e"], (_ref15) => {
  var {
    e: e2
  } = _ref15;
  return e2;
});
var createVersion = /* @__PURE__ */ factory("version", [], () => version);
function recreateFactory(name2, dependencies2, create2) {
  return factory(name2, dependencies2, create2, {
    recreateOnConfigChange: true
  });
}
var name$1D = "apply";
var dependencies$1D = ["typed", "isInteger"];
var createApplyTransform = /* @__PURE__ */ factory(name$1D, dependencies$1D, (_ref) => {
  var {
    typed,
    isInteger: isInteger2
  } = _ref;
  var apply = createApply({
    typed,
    isInteger: isInteger2
  });
  return typed("apply", {
    "...any": function any(args) {
      var dim = args[1];
      if (isNumber(dim)) {
        args[1] = dim - 1;
      } else if (isBigNumber(dim)) {
        args[1] = dim.minus(1);
      }
      try {
        return apply.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
function compileInlineExpression(expression, math, scope) {
  var symbol = expression.filter(function(node) {
    return isSymbolNode(node) && !(node.name in math) && !scope.has(node.name);
  })[0];
  if (!symbol) {
    throw new Error('No undefined variable found in inline expression "' + expression + '"');
  }
  var name2 = symbol.name;
  var subScope = createSubScope(scope);
  var eq = expression.compile();
  return function inlineExpression(x) {
    subScope.set(name2, x);
    return eq.evaluate(subScope);
  };
}
var name$1E = "filter";
var dependencies$1E = ["typed"];
var createFilterTransform = /* @__PURE__ */ factory(name$1E, dependencies$1E, (_ref) => {
  var {
    typed
  } = _ref;
  function filterTransform(args, math, scope) {
    var x, callback;
    if (args[0]) {
      x = args[0].compile().evaluate(scope);
    }
    if (args[1]) {
      if (isSymbolNode(args[1]) || isFunctionAssignmentNode(args[1])) {
        callback = args[1].compile().evaluate(scope);
      } else {
        callback = compileInlineExpression(args[1], math, scope);
      }
    }
    return filter2(x, callback);
  }
  filterTransform.rawArgs = true;
  var filter2 = typed("filter", {
    "Array, function": _filter,
    "Matrix, function": function MatrixFunction(x, test) {
      return x.create(_filter(x.toArray(), test));
    },
    "Array, RegExp": filterRegExp,
    "Matrix, RegExp": function MatrixRegExp(x, test) {
      return x.create(filterRegExp(x.toArray(), test));
    }
  });
  return filterTransform;
}, {
  isTransformFunction: true
});
function _filter(x, callback) {
  var args = maxArgumentCount(callback);
  return filter(x, function(value, index, array) {
    if (args === 1) {
      return callback(value);
    } else if (args === 2) {
      return callback(value, [index + 1]);
    } else {
      return callback(value, [index + 1], array);
    }
  });
}
var name$1F = "forEach";
var dependencies$1F = ["typed"];
var createForEachTransform = /* @__PURE__ */ factory(name$1F, dependencies$1F, (_ref) => {
  var {
    typed
  } = _ref;
  function forEachTransform(args, math, scope) {
    var x, callback;
    if (args[0]) {
      x = args[0].compile().evaluate(scope);
    }
    if (args[1]) {
      if (isSymbolNode(args[1]) || isFunctionAssignmentNode(args[1])) {
        callback = args[1].compile().evaluate(scope);
      } else {
        callback = compileInlineExpression(args[1], math, scope);
      }
    }
    return _forEach2(x, callback);
  }
  forEachTransform.rawArgs = true;
  var _forEach2 = typed("forEach", {
    "Array | Matrix, function": function ArrayMatrixFunction(array, callback) {
      var args = maxArgumentCount(callback);
      var recurse = function recurse2(value, index) {
        if (Array.isArray(value)) {
          forEach(value, function(child, i) {
            recurse2(child, index.concat(i + 1));
          });
        } else {
          if (args === 1) {
            callback(value);
          } else if (args === 2) {
            callback(value, index);
          } else {
            callback(value, index, array);
          }
        }
      };
      recurse(array.valueOf(), []);
    }
  });
  return forEachTransform;
}, {
  isTransformFunction: true
});
var name$1G = "map";
var dependencies$1G = ["typed"];
var createMapTransform = /* @__PURE__ */ factory(name$1G, dependencies$1G, (_ref) => {
  var {
    typed
  } = _ref;
  function mapTransform(args, math, scope) {
    var x, callback;
    if (args[0]) {
      x = args[0].compile().evaluate(scope);
    }
    if (args[1]) {
      if (isSymbolNode(args[1]) || isFunctionAssignmentNode(args[1])) {
        callback = args[1].compile().evaluate(scope);
      } else {
        callback = compileInlineExpression(args[1], math, scope);
      }
    }
    return map2(x, callback);
  }
  mapTransform.rawArgs = true;
  var map2 = typed("map", {
    "Array, function": function ArrayFunction(x, callback) {
      return _map$1(x, callback, x);
    },
    "Matrix, function": function MatrixFunction(x, callback) {
      return x.create(_map$1(x.valueOf(), callback, x));
    }
  });
  return mapTransform;
}, {
  isTransformFunction: true
});
function _map$1(array, callback, orig) {
  var argsCount = maxArgumentCount(callback);
  function recurse(value, index) {
    if (Array.isArray(value)) {
      return map(value, function(child, i) {
        return recurse(child, index.concat(i + 1));
      });
    } else {
      if (argsCount === 1) {
        return callback(value);
      } else if (argsCount === 2) {
        return callback(value, index);
      } else {
        return callback(value, index, orig);
      }
    }
  }
  return recurse(array, []);
}
function lastDimToZeroBase(args) {
  if (args.length === 2 && isCollection(args[0])) {
    args = args.slice();
    var dim = args[1];
    if (isNumber(dim)) {
      args[1] = dim - 1;
    } else if (isBigNumber(dim)) {
      args[1] = dim.minus(1);
    }
  }
  return args;
}
var name$1H = "max";
var dependencies$1H = ["typed", "config", "numeric", "larger"];
var createMaxTransform = /* @__PURE__ */ factory(name$1H, dependencies$1H, (_ref) => {
  var {
    typed,
    config: config3,
    numeric: numeric2,
    larger
  } = _ref;
  var max = createMax({
    typed,
    config: config3,
    numeric: numeric2,
    larger
  });
  return typed("max", {
    "...any": function any(args) {
      args = lastDimToZeroBase(args);
      try {
        return max.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
var name$1I = "mean";
var dependencies$1I = ["typed", "add", "divide"];
var createMeanTransform = /* @__PURE__ */ factory(name$1I, dependencies$1I, (_ref) => {
  var {
    typed,
    add,
    divide
  } = _ref;
  var mean = createMean({
    typed,
    add,
    divide
  });
  return typed("mean", {
    "...any": function any(args) {
      args = lastDimToZeroBase(args);
      try {
        return mean.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
var name$1J = "min";
var dependencies$1J = ["typed", "config", "numeric", "smaller"];
var createMinTransform = /* @__PURE__ */ factory(name$1J, dependencies$1J, (_ref) => {
  var {
    typed,
    config: config3,
    numeric: numeric2,
    smaller
  } = _ref;
  var min = createMin({
    typed,
    config: config3,
    numeric: numeric2,
    smaller
  });
  return typed("min", {
    "...any": function any(args) {
      args = lastDimToZeroBase(args);
      try {
        return min.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
var name$1K = "range";
var dependencies$1K = ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq"];
var createRangeTransform = /* @__PURE__ */ factory(name$1K, dependencies$1K, (_ref) => {
  var {
    typed,
    config: config3,
    matrix,
    bignumber,
    smaller,
    smallerEq,
    larger,
    largerEq
  } = _ref;
  var range = createRange({
    typed,
    config: config3,
    matrix,
    bignumber,
    smaller,
    smallerEq,
    larger,
    largerEq
  });
  return typed("range", {
    "...any": function any(args) {
      var lastIndex = args.length - 1;
      var last = args[lastIndex];
      if (typeof last !== "boolean") {
        args.push(true);
      }
      return range.apply(null, args);
    }
  });
}, {
  isTransformFunction: true
});
var name$1L = "std";
var dependencies$1L = ["typed", "map", "sqrt", "variance"];
var createStdTransform = /* @__PURE__ */ factory(name$1L, dependencies$1L, (_ref) => {
  var {
    typed,
    map: map2,
    sqrt,
    variance
  } = _ref;
  var std = createStd({
    typed,
    map: map2,
    sqrt,
    variance
  });
  return typed("std", {
    "...any": function any(args) {
      args = lastDimToZeroBase(args);
      try {
        return std.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
var name$1M = "sum";
var dependencies$1M = ["typed", "config", "add", "numeric"];
var createSumTransform = /* @__PURE__ */ factory(name$1M, dependencies$1M, (_ref) => {
  var {
    typed,
    config: config3,
    add,
    numeric: numeric2
  } = _ref;
  var sum = createSum({
    typed,
    config: config3,
    add,
    numeric: numeric2
  });
  return typed(name$1M, {
    "...any": function any(args) {
      args = lastDimToZeroBase(args);
      try {
        return sum.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
var name$1N = "cumsum";
var dependencies$1N = ["typed", "add", "unaryPlus"];
var createCumSumTransform = /* @__PURE__ */ factory(name$1N, dependencies$1N, (_ref) => {
  var {
    typed,
    add,
    unaryPlus
  } = _ref;
  var cumsum = createCumSum({
    typed,
    add,
    unaryPlus
  });
  return typed(name$1N, {
    "...any": function any(args) {
      if (args.length === 2 && isCollection(args[0])) {
        var dim = args[1];
        if (isNumber(dim)) {
          args[1] = dim - 1;
        } else if (isBigNumber(dim)) {
          args[1] = dim.minus(1);
        }
      }
      try {
        return cumsum.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
var name$1O = "variance";
var dependencies$1O = ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"];
var createVarianceTransform = /* @__PURE__ */ factory(name$1O, dependencies$1O, (_ref) => {
  var {
    typed,
    add,
    subtract,
    multiply,
    divide,
    apply,
    isNaN: isNaN2
  } = _ref;
  var variance = createVariance({
    typed,
    add,
    subtract,
    multiply,
    divide,
    apply,
    isNaN: isNaN2
  });
  return typed(name$1O, {
    "...any": function any(args) {
      args = lastDimToZeroBase(args);
      try {
        return variance.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
function mixin(obj) {
  var emitter = new Emitter();
  obj.on = emitter.on.bind(emitter);
  obj.off = emitter.off.bind(emitter);
  obj.once = emitter.once.bind(emitter);
  obj.emit = emitter.emit.bind(emitter);
  return obj;
}
function importFactory(typed, load, math, importedFactories) {
  function mathImport(functions, options) {
    var num = arguments.length;
    if (num !== 1 && num !== 2) {
      throw new ArgumentsError("import", num, 1, 2);
    }
    if (!options) {
      options = {};
    }
    function flattenImports(flatValues2, value2, name3) {
      if (Array.isArray(value2)) {
        value2.forEach((item) => flattenImports(flatValues2, item));
      } else if (typeof value2 === "object") {
        for (var _name in value2) {
          if (hasOwnProperty$1(value2, _name)) {
            flattenImports(flatValues2, value2[_name], _name);
          }
        }
      } else if (isFactory(value2) || name3 !== void 0) {
        var flatName = isFactory(value2) ? isTransformFunctionFactory(value2) ? value2.fn + ".transform" : value2.fn : name3;
        if (hasOwnProperty$1(flatValues2, flatName) && flatValues2[flatName] !== value2 && !options.silent) {
          throw new Error('Cannot import "' + flatName + '" twice');
        }
        flatValues2[flatName] = value2;
      } else {
        if (!options.silent) {
          throw new TypeError("Factory, Object, or Array expected");
        }
      }
    }
    var flatValues = {};
    flattenImports(flatValues, functions);
    for (var name2 in flatValues) {
      if (hasOwnProperty$1(flatValues, name2)) {
        var value = flatValues[name2];
        if (isFactory(value)) {
          _importFactory(value, options);
        } else if (isSupportedType(value)) {
          _import(name2, value, options);
        } else {
          if (!options.silent) {
            throw new TypeError("Factory, Object, or Array expected");
          }
        }
      }
    }
  }
  function _import(name2, value, options) {
    if (options.wrap && typeof value === "function") {
      value = _wrap(value);
    }
    if (hasTypedFunctionSignature(value)) {
      value = typed(name2, {
        [value.signature]: value
      });
    }
    if (typed.isTypedFunction(math[name2]) && typed.isTypedFunction(value)) {
      if (options.override) {
        value = typed(name2, value.signatures);
      } else {
        value = typed(math[name2], value);
      }
      math[name2] = value;
      delete importedFactories[name2];
      _importTransform(name2, value);
      math.emit("import", name2, function resolver() {
        return value;
      });
      return;
    }
    if (math[name2] === void 0 || options.override) {
      math[name2] = value;
      delete importedFactories[name2];
      _importTransform(name2, value);
      math.emit("import", name2, function resolver() {
        return value;
      });
      return;
    }
    if (!options.silent) {
      throw new Error('Cannot import "' + name2 + '": already exists');
    }
  }
  function _importTransform(name2, value) {
    if (value && typeof value.transform === "function") {
      math.expression.transform[name2] = value.transform;
      if (allowedInExpressions(name2)) {
        math.expression.mathWithTransform[name2] = value.transform;
      }
    } else {
      delete math.expression.transform[name2];
      if (allowedInExpressions(name2)) {
        math.expression.mathWithTransform[name2] = value;
      }
    }
  }
  function _deleteTransform(name2) {
    delete math.expression.transform[name2];
    if (allowedInExpressions(name2)) {
      math.expression.mathWithTransform[name2] = math[name2];
    } else {
      delete math.expression.mathWithTransform[name2];
    }
  }
  function _wrap(fn) {
    var wrapper = function wrapper2() {
      var args = [];
      for (var i = 0, len = arguments.length; i < len; i++) {
        var arg = arguments[i];
        args[i] = arg && arg.valueOf();
      }
      return fn.apply(math, args);
    };
    if (fn.transform) {
      wrapper.transform = fn.transform;
    }
    return wrapper;
  }
  function _importFactory(factory2, options) {
    var name2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : factory2.fn;
    if (contains$1(name2, ".")) {
      throw new Error("Factory name should not contain a nested path. Name: " + JSON.stringify(name2));
    }
    var namespace = isTransformFunctionFactory(factory2) ? math.expression.transform : math;
    var existingTransform = name2 in math.expression.transform;
    var existing = hasOwnProperty$1(namespace, name2) ? namespace[name2] : void 0;
    var resolver = function resolver2() {
      var dependencies2 = {};
      factory2.dependencies.map(stripOptionalNotation).forEach((dependency) => {
        if (contains$1(dependency, ".")) {
          throw new Error("Factory dependency should not contain a nested path. Name: " + JSON.stringify(dependency));
        }
        if (dependency === "math") {
          dependencies2.math = math;
        } else if (dependency === "mathWithTransform") {
          dependencies2.mathWithTransform = math.expression.mathWithTransform;
        } else if (dependency === "classes") {
          dependencies2.classes = math;
        } else {
          dependencies2[dependency] = math[dependency];
        }
      });
      var instance = /* @__PURE__ */ factory2(dependencies2);
      if (instance && typeof instance.transform === "function") {
        throw new Error('Transforms cannot be attached to factory functions. Please create a separate function for it with exports.path="expression.transform"');
      }
      if (existing === void 0 || options.override) {
        return instance;
      }
      if (typed.isTypedFunction(existing) && typed.isTypedFunction(instance)) {
        return typed(existing, instance);
      }
      if (options.silent) {
        return existing;
      } else {
        throw new Error('Cannot import "' + name2 + '": already exists');
      }
    };
    if (!factory2.meta || factory2.meta.lazy !== false) {
      lazy(namespace, name2, resolver);
      if (existing && existingTransform) {
        _deleteTransform(name2);
      } else {
        if (isTransformFunctionFactory(factory2) || factoryAllowedInExpressions(factory2)) {
          lazy(math.expression.mathWithTransform, name2, () => namespace[name2]);
        }
      }
    } else {
      namespace[name2] = resolver();
      if (existing && existingTransform) {
        _deleteTransform(name2);
      } else {
        if (isTransformFunctionFactory(factory2) || factoryAllowedInExpressions(factory2)) {
          lazy(math.expression.mathWithTransform, name2, () => namespace[name2]);
        }
      }
    }
    importedFactories[name2] = factory2;
    math.emit("import", name2, resolver);
  }
  function isSupportedType(object) {
    return typeof object === "function" || typeof object === "number" || typeof object === "string" || typeof object === "boolean" || object === null || isUnit(object) || isComplex(object) || isBigNumber(object) || isFraction(object) || isMatrix(object) || Array.isArray(object);
  }
  function hasTypedFunctionSignature(fn) {
    return typeof fn === "function" && typeof fn.signature === "string";
  }
  function allowedInExpressions(name2) {
    return !hasOwnProperty$1(unsafe, name2);
  }
  function factoryAllowedInExpressions(factory2) {
    return factory2.fn.indexOf(".") === -1 && !hasOwnProperty$1(unsafe, factory2.fn) && (!factory2.meta || !factory2.meta.isClass);
  }
  function isTransformFunctionFactory(factory2) {
    return factory2 !== void 0 && factory2.meta !== void 0 && factory2.meta.isTransformFunction === true || false;
  }
  var unsafe = {
    expression: true,
    type: true,
    docs: true,
    error: true,
    json: true,
    chain: true
  };
  return mathImport;
}
function create(factories, config3) {
  var configInternal = _extends_1({}, DEFAULT_CONFIG, config3);
  if (typeof Object.create !== "function") {
    throw new Error("ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility.");
  }
  var math = mixin({
    isNumber,
    isComplex,
    isBigNumber,
    isFraction,
    isUnit,
    isString,
    isArray,
    isMatrix,
    isCollection,
    isDenseMatrix,
    isSparseMatrix,
    isRange,
    isIndex,
    isBoolean,
    isResultSet,
    isHelp,
    isFunction,
    isDate,
    isRegExp,
    isObject,
    isNull,
    isUndefined,
    isAccessorNode,
    isArrayNode,
    isAssignmentNode,
    isBlockNode,
    isConditionalNode,
    isConstantNode,
    isFunctionAssignmentNode,
    isFunctionNode,
    isIndexNode,
    isNode,
    isObjectNode,
    isOperatorNode,
    isParenthesisNode,
    isRangeNode,
    isRelationalNode,
    isSymbolNode,
    isChain
  });
  math.config = configFactory(configInternal, math.emit);
  math.expression = {
    transform: {},
    mathWithTransform: {
      config: math.config
    }
  };
  var legacyFactories = [];
  var legacyInstances = [];
  function load(factory2) {
    if (isFactory(factory2)) {
      return factory2(math);
    }
    var firstProperty = factory2[Object.keys(factory2)[0]];
    if (isFactory(firstProperty)) {
      return firstProperty(math);
    }
    if (!isLegacyFactory(factory2)) {
      console.warn("Factory object with properties `type`, `name`, and `factory` expected", factory2);
      throw new Error("Factory object with properties `type`, `name`, and `factory` expected");
    }
    var index = legacyFactories.indexOf(factory2);
    var instance;
    if (index === -1) {
      if (factory2.math === true) {
        instance = factory2.factory(math.type, configInternal, load, math.typed, math);
      } else {
        instance = factory2.factory(math.type, configInternal, load, math.typed);
      }
      legacyFactories.push(factory2);
      legacyInstances.push(instance);
    } else {
      instance = legacyInstances[index];
    }
    return instance;
  }
  var importedFactories = {};
  function lazyTyped() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return math.typed.apply(math.typed, args);
  }
  lazyTyped.isTypedFunction = typedFunction.isTypedFunction;
  var internalImport = importFactory(lazyTyped, load, math, importedFactories);
  math.import = internalImport;
  math.on("config", () => {
    values(importedFactories).forEach((factory2) => {
      if (factory2 && factory2.meta && factory2.meta.recreateOnConfigChange) {
        internalImport(factory2, {
          override: true
        });
      }
    });
  });
  math.create = create.bind(null, factories);
  math.factory = factory;
  math.import(values(deepFlatten(factories)));
  math.ArgumentsError = ArgumentsError;
  math.DimensionError = DimensionError;
  math.IndexError = IndexError;
  return math;
}
export {createMatAlgo14xDs as $, isPositiveNumber as A, isZeroNumber as B, isNaNNumber as C, DimensionError as D, unaryMinusNumber as E, unaryPlusNumber as F, absNumber as G, addNumber as H, cbrtNumber as I, isComplex as J, isFraction as K, cubeNumber as L, expNumber as M, expm1Number as N, createMatrixAlgorithmSuite as O, gcdNumber as P, ArgumentsError as Q, scatter as R, createMatAlgo11xS0s as S, lcmNumber as T, log10Number as U, log2Number as V, createMatAlgo03xDSf as W, createMatAlgo05xSfSf as X, createMatAlgo12xSfs as Y, modNumber as Z, multiplyNumber as _, format as a, errorTransform as a$, nthRootNumber as a0, signNumber as a1, squareNumber as a2, xgcdNumber as a3, bitAndNumber as a4, bitNotNumber as a5, bitOrNumber as a6, createMatAlgo07xSSf as a7, bitXorNumber as a8, notNumber as a9, acothNumber as aA, acscNumber as aB, acschNumber as aC, asecNumber as aD, asechNumber as aE, asinhNumber as aF, atanhNumber as aG, cosh as aH, cotNumber as aI, cothNumber as aJ, cscNumber as aK, cschNumber as aL, secNumber as aM, sechNumber as aN, sinhNumber as aO, tanh as aP, identify as aQ, generalize as aR, extend as aS, combinationsNumber as aT, gammaNumber as aU, gammaP as aV, gammaG as aW, lgammaNumber as aX, copysign as aY, lnSqrt2PI as aZ, isConstantNode as a_, orNumber as aa, xorNumber as ab, IndexError as ac, squeeze as ad, flatten as ae, getSafeProperty as af, setSafeProperty as ag, powNumber as ah, roundNumber as ai, logNumber as aj, log1p as ak, isDenseMatrix as al, isSparseMatrix as am, leftShiftNumber as an, rightArithShiftNumber as ao, rightLogShiftNumber as ap, andNumber as aq, isRange as ar, hasOwnProperty$1 as as, memoize as at, _extends_1 as au, defineProperty as av, endsWith as aw, createBigNumberPi as ax, acoshNumber as ay, acotNumber as az, isUnit as b, createParser as b$, lastDimToZeroBase as b0, createTyped as b1, createResultSet as b2, createRangeClass as b3, createClone as b4, createIsNumeric as b5, createHasNumericValue as b6, createTypeOf as b7, createEqualScalar as b8, createNumber as b9, createLargerEq as bA, createDeepEqual as bB, createUnequal as bC, createPartitionSelect as bD, createMax as bE, createMin as bF, createHypot as bG, createNode as bH, createAccessorNode as bI, createArrayNode as bJ, createAssignmentNode as bK, createBlockNode as bL, createConditionalNode as bM, createConstantNode as bN, createFunctionAssignmentNode as bO, createIndexNode as bP, createObjectNode as bQ, createOperatorNode as bR, createParenthesisNode as bS, createRangeNode as bT, createRelationalNode as bU, createSymbolNode as bV, createFunctionNode as bW, createParse as bX, createCompile as bY, createEvaluate as bZ, createParserClass as b_, createString as ba, createBoolean as bb, createApply as bc, createCeil as bd, createFix as be, createFloor as bf, createFilter as bg, createForEach as bh, createMap$1 as bi, createRange as bj, createSize as bk, createErf as bl, createMode as bm, createProd as bn, createFormat as bo, createPrint as bp, createIsPrime as bq, createNumeric as br, createCompare as bs, createCompareNatural as bt, createCompareText as bu, createEqual as bv, createEqualText as bw, createSmaller as bx, createSmallerEq as by, createLarger as bz, isArray as c, create as c$, createHelpClass as c0, createChainClass as c1, createHelp as c2, createChain as c3, createSum as c4, createCumSum as c5, createMean as c6, createMedian as c7, createMad as c8, createVariance as c9, createLN10 as cA, createLN2 as cB, createLOG10E as cC, createLOG2E as cD, createNaN as cE, createNull as cF, createPhi as cG, createPi as cH, createUppercasePi as cI, createSQRT1_2 as cJ, createSQRT2 as cK, createTau as cL, createTrue as cM, createVersion as cN, createApplyTransform as cO, createFilterTransform as cP, createForEachTransform as cQ, createMapTransform as cR, createMaxTransform as cS, createMeanTransform as cT, createMinTransform as cU, createRangeTransform as cV, createStdTransform as cW, createSumTransform as cX, createCumSumTransform as cY, createVarianceTransform as cZ, config as c_, createQuantileSeq as ca, createStd as cb, createCombinationsWithRep as cc, createFactorial as cd, createMultinomial as ce, createPermutations as cf, createPickRandom as cg, createRandom as ch, createRandomInt as ci, createStirlingS2 as cj, createBellNumbers as ck, createCatalan as cl, createComposition as cm, createSimplify as cn, createSimplifyConstant as co, createSimplifyCore as cp, createResolve as cq, createDerivative as cr, createRationalize as cs, createReviver as ct, createReplacer as cu, createE as cv, createUppercaseE as cw, createFalse as cx, createI as cy, createInfinity as cz, isIndex as d, embeddedDocs as d0, isAccessorNode as d1, isArrayNode as d2, isAssignmentNode as d3, isBlockNode as d4, isBoolean as d5, isChain as d6, isConditionalNode as d7, isDate as d8, isFunction as d9, asinNumber as dA, atanNumber as dB, atan2Number as dC, cosNumber as dD, coshNumber as dE, sinNumber as dF, tanNumber as dG, tanhNumber as dH, isIntegerNumber as dI, createCeilNumber as dJ, createFixNumber as dK, createFloorNumber as dL, createRandomNumber as dM, createEqualScalarNumber as dN, createCompareNumber as dO, createCompareTextNumber as dP, createEqualNumber as dQ, createSmallerNumber as dR, createSmallerEqNumber as dS, createLargerNumber as dT, createLargerEqNumber as dU, createUnequalNumber as dV, isFunctionAssignmentNode as da, isFunctionNode as db, isHelp as dc, isIndexNode as dd, isNode as de, isNull as df, isUndefined as dg, isObject as dh, isObjectNode as di, isOperatorNode as dj, isParenthesisNode as dk, isRangeNode as dl, isRelationalNode as dm, isRegExp as dn, isResultSet as dp, isSymbolNode as dq, sqrtNumber as dr, subtractNumber as ds, divideNumber as dt, log1pNumber as du, normNumber as dv, noIndex as dw, noMatrix as dx, noSubset as dy, acosNumber as dz, isMatrix as e, factory as f, getArrayDataType as g, arraySize as h, isNumber as i, deepStrictEqual as j, isCollection as k, reshape as l, clone as m, maxArgumentCount as n, format$2 as o, processSizesWildcard as p, isBigNumber as q, resize as r, isInteger as s, isString as t, unsqueeze as u, validateIndex as v, validate as w, typeOf as x, deepMap as y, isNegativeNumber as z};
export default null;
