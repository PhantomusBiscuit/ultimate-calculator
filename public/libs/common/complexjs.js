function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var complex = createCommonjsModule(function(module, exports) {
  /**
   * @license Complex.js v2.1.1 12/05/2020
   *
   * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   **/
  (function(root) {
    var cosh = Math.cosh || function(x) {
      return Math.abs(x) < 1e-9 ? 1 - x : (Math.exp(x) + Math.exp(-x)) * 0.5;
    };
    var sinh = Math.sinh || function(x) {
      return Math.abs(x) < 1e-9 ? x : (Math.exp(x) - Math.exp(-x)) * 0.5;
    };
    var cosm1 = function(x) {
      var b = Math.PI / 4;
      if (-b > x || x > b) {
        return Math.cos(x) - 1;
      }
      var xx = x * x;
      return xx * (xx * (xx * (xx * (xx * (xx * (xx * (xx / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    };
    var hypot = function(x, y) {
      var a = Math.abs(x);
      var b = Math.abs(y);
      if (a < 3e3 && b < 3e3) {
        return Math.sqrt(a * a + b * b);
      }
      if (a < b) {
        a = b;
        b = x / y;
      } else {
        b = y / x;
      }
      return a * Math.sqrt(1 + b * b);
    };
    var parser_exit = function() {
      throw SyntaxError("Invalid Param");
    };
    function logHypot(a, b) {
      var _a = Math.abs(a);
      var _b = Math.abs(b);
      if (a === 0) {
        return Math.log(_b);
      }
      if (b === 0) {
        return Math.log(_a);
      }
      if (_a < 3e3 && _b < 3e3) {
        return Math.log(a * a + b * b) * 0.5;
      }
      a = a / 2;
      b = b / 2;
      return 0.5 * Math.log(a * a + b * b) + Math.LN2;
    }
    var parse = function(a, b) {
      var z = {re: 0, im: 0};
      if (a === void 0 || a === null) {
        z["re"] = z["im"] = 0;
      } else if (b !== void 0) {
        z["re"] = a;
        z["im"] = b;
      } else
        switch (typeof a) {
          case "object":
            if ("im" in a && "re" in a) {
              z["re"] = a["re"];
              z["im"] = a["im"];
            } else if ("abs" in a && "arg" in a) {
              if (!Number.isFinite(a["abs"]) && Number.isFinite(a["arg"])) {
                return Complex2["INFINITY"];
              }
              z["re"] = a["abs"] * Math.cos(a["arg"]);
              z["im"] = a["abs"] * Math.sin(a["arg"]);
            } else if ("r" in a && "phi" in a) {
              if (!Number.isFinite(a["r"]) && Number.isFinite(a["phi"])) {
                return Complex2["INFINITY"];
              }
              z["re"] = a["r"] * Math.cos(a["phi"]);
              z["im"] = a["r"] * Math.sin(a["phi"]);
            } else if (a.length === 2) {
              z["re"] = a[0];
              z["im"] = a[1];
            } else {
              parser_exit();
            }
            break;
          case "string":
            z["im"] = z["re"] = 0;
            var tokens = a.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);
            var plus = 1;
            var minus = 0;
            if (tokens === null) {
              parser_exit();
            }
            for (var i = 0; i < tokens.length; i++) {
              var c = tokens[i];
              if (c === " " || c === "	" || c === "\n")
                ;
              else if (c === "+") {
                plus++;
              } else if (c === "-") {
                minus++;
              } else if (c === "i" || c === "I") {
                if (plus + minus === 0) {
                  parser_exit();
                }
                if (tokens[i + 1] !== " " && !isNaN(tokens[i + 1])) {
                  z["im"] += parseFloat((minus % 2 ? "-" : "") + tokens[i + 1]);
                  i++;
                } else {
                  z["im"] += parseFloat((minus % 2 ? "-" : "") + "1");
                }
                plus = minus = 0;
              } else {
                if (plus + minus === 0 || isNaN(c)) {
                  parser_exit();
                }
                if (tokens[i + 1] === "i" || tokens[i + 1] === "I") {
                  z["im"] += parseFloat((minus % 2 ? "-" : "") + c);
                  i++;
                } else {
                  z["re"] += parseFloat((minus % 2 ? "-" : "") + c);
                }
                plus = minus = 0;
              }
            }
            if (plus + minus > 0) {
              parser_exit();
            }
            break;
          case "number":
            z["im"] = 0;
            z["re"] = a;
            break;
          default:
            parser_exit();
        }
      return z;
    };
    function Complex2(a, b) {
      if (!(this instanceof Complex2)) {
        return new Complex2(a, b);
      }
      var z = parse(a, b);
      this["re"] = z["re"];
      this["im"] = z["im"];
    }
    Complex2.prototype = {
      re: 0,
      im: 0,
      sign: function() {
        var abs = this["abs"]();
        return new Complex2(this["re"] / abs, this["im"] / abs);
      },
      add: function(a, b) {
        var z = new Complex2(a, b);
        if (this["isInfinite"]() && z["isInfinite"]()) {
          return Complex2["NAN"];
        }
        if (this["isInfinite"]() || z["isInfinite"]()) {
          return Complex2["INFINITY"];
        }
        return new Complex2(this["re"] + z["re"], this["im"] + z["im"]);
      },
      sub: function(a, b) {
        var z = new Complex2(a, b);
        if (this["isInfinite"]() && z["isInfinite"]()) {
          return Complex2["NAN"];
        }
        if (this["isInfinite"]() || z["isInfinite"]()) {
          return Complex2["INFINITY"];
        }
        return new Complex2(this["re"] - z["re"], this["im"] - z["im"]);
      },
      mul: function(a, b) {
        var z = new Complex2(a, b);
        if (this["isInfinite"]() && z["isZero"]() || this["isZero"]() && z["isInfinite"]()) {
          return Complex2["NAN"];
        }
        if (this["isInfinite"]() || z["isInfinite"]()) {
          return Complex2["INFINITY"];
        }
        if (z["im"] === 0 && this["im"] === 0) {
          return new Complex2(this["re"] * z["re"], 0);
        }
        return new Complex2(this["re"] * z["re"] - this["im"] * z["im"], this["re"] * z["im"] + this["im"] * z["re"]);
      },
      div: function(a, b) {
        var z = new Complex2(a, b);
        if (this["isZero"]() && z["isZero"]() || this["isInfinite"]() && z["isInfinite"]()) {
          return Complex2["NAN"];
        }
        if (this["isInfinite"]() || z["isZero"]()) {
          return Complex2["INFINITY"];
        }
        if (this["isZero"]() || z["isInfinite"]()) {
          return Complex2["ZERO"];
        }
        a = this["re"];
        b = this["im"];
        var c = z["re"];
        var d = z["im"];
        var t, x;
        if (d === 0) {
          return new Complex2(a / c, b / c);
        }
        if (Math.abs(c) < Math.abs(d)) {
          x = c / d;
          t = c * x + d;
          return new Complex2((a * x + b) / t, (b * x - a) / t);
        } else {
          x = d / c;
          t = d * x + c;
          return new Complex2((a + b * x) / t, (b - a * x) / t);
        }
      },
      pow: function(a, b) {
        var z = new Complex2(a, b);
        a = this["re"];
        b = this["im"];
        if (z["isZero"]()) {
          return Complex2["ONE"];
        }
        if (z["im"] === 0) {
          if (b === 0 && a > 0) {
            return new Complex2(Math.pow(a, z["re"]), 0);
          } else if (a === 0) {
            switch ((z["re"] % 4 + 4) % 4) {
              case 0:
                return new Complex2(Math.pow(b, z["re"]), 0);
              case 1:
                return new Complex2(0, Math.pow(b, z["re"]));
              case 2:
                return new Complex2(-Math.pow(b, z["re"]), 0);
              case 3:
                return new Complex2(0, -Math.pow(b, z["re"]));
            }
          }
        }
        if (a === 0 && b === 0 && z["re"] > 0 && z["im"] >= 0) {
          return Complex2["ZERO"];
        }
        var arg = Math.atan2(b, a);
        var loh = logHypot(a, b);
        a = Math.exp(z["re"] * loh - z["im"] * arg);
        b = z["im"] * loh + z["re"] * arg;
        return new Complex2(a * Math.cos(b), a * Math.sin(b));
      },
      sqrt: function() {
        var a = this["re"];
        var b = this["im"];
        var r = this["abs"]();
        var re, im;
        if (a >= 0) {
          if (b === 0) {
            return new Complex2(Math.sqrt(a), 0);
          }
          re = 0.5 * Math.sqrt(2 * (r + a));
        } else {
          re = Math.abs(b) / Math.sqrt(2 * (r - a));
        }
        if (a <= 0) {
          im = 0.5 * Math.sqrt(2 * (r - a));
        } else {
          im = Math.abs(b) / Math.sqrt(2 * (r + a));
        }
        return new Complex2(re, b < 0 ? -im : im);
      },
      exp: function() {
        var tmp = Math.exp(this["re"]);
        if (this["im"] === 0)
          ;
        return new Complex2(tmp * Math.cos(this["im"]), tmp * Math.sin(this["im"]));
      },
      expm1: function() {
        var a = this["re"];
        var b = this["im"];
        return new Complex2(Math.expm1(a) * Math.cos(b) + cosm1(b), Math.exp(a) * Math.sin(b));
      },
      log: function() {
        var a = this["re"];
        var b = this["im"];
        return new Complex2(logHypot(a, b), Math.atan2(b, a));
      },
      abs: function() {
        return hypot(this["re"], this["im"]);
      },
      arg: function() {
        return Math.atan2(this["im"], this["re"]);
      },
      sin: function() {
        var a = this["re"];
        var b = this["im"];
        return new Complex2(Math.sin(a) * cosh(b), Math.cos(a) * sinh(b));
      },
      cos: function() {
        var a = this["re"];
        var b = this["im"];
        return new Complex2(Math.cos(a) * cosh(b), -Math.sin(a) * sinh(b));
      },
      tan: function() {
        var a = 2 * this["re"];
        var b = 2 * this["im"];
        var d = Math.cos(a) + cosh(b);
        return new Complex2(Math.sin(a) / d, sinh(b) / d);
      },
      cot: function() {
        var a = 2 * this["re"];
        var b = 2 * this["im"];
        var d = Math.cos(a) - cosh(b);
        return new Complex2(-Math.sin(a) / d, sinh(b) / d);
      },
      sec: function() {
        var a = this["re"];
        var b = this["im"];
        var d = 0.5 * cosh(2 * b) + 0.5 * Math.cos(2 * a);
        return new Complex2(Math.cos(a) * cosh(b) / d, Math.sin(a) * sinh(b) / d);
      },
      csc: function() {
        var a = this["re"];
        var b = this["im"];
        var d = 0.5 * cosh(2 * b) - 0.5 * Math.cos(2 * a);
        return new Complex2(Math.sin(a) * cosh(b) / d, -Math.cos(a) * sinh(b) / d);
      },
      asin: function() {
        var a = this["re"];
        var b = this["im"];
        var t1 = new Complex2(b * b - a * a + 1, -2 * a * b)["sqrt"]();
        var t2 = new Complex2(t1["re"] - b, t1["im"] + a)["log"]();
        return new Complex2(t2["im"], -t2["re"]);
      },
      acos: function() {
        var a = this["re"];
        var b = this["im"];
        var t1 = new Complex2(b * b - a * a + 1, -2 * a * b)["sqrt"]();
        var t2 = new Complex2(t1["re"] - b, t1["im"] + a)["log"]();
        return new Complex2(Math.PI / 2 - t2["im"], t2["re"]);
      },
      atan: function() {
        var a = this["re"];
        var b = this["im"];
        if (a === 0) {
          if (b === 1) {
            return new Complex2(0, Infinity);
          }
          if (b === -1) {
            return new Complex2(0, -Infinity);
          }
        }
        var d = a * a + (1 - b) * (1 - b);
        var t1 = new Complex2((1 - b * b - a * a) / d, -2 * a / d).log();
        return new Complex2(-0.5 * t1["im"], 0.5 * t1["re"]);
      },
      acot: function() {
        var a = this["re"];
        var b = this["im"];
        if (b === 0) {
          return new Complex2(Math.atan2(1, a), 0);
        }
        var d = a * a + b * b;
        return d !== 0 ? new Complex2(a / d, -b / d).atan() : new Complex2(a !== 0 ? a / 0 : 0, b !== 0 ? -b / 0 : 0).atan();
      },
      asec: function() {
        var a = this["re"];
        var b = this["im"];
        if (a === 0 && b === 0) {
          return new Complex2(0, Infinity);
        }
        var d = a * a + b * b;
        return d !== 0 ? new Complex2(a / d, -b / d).acos() : new Complex2(a !== 0 ? a / 0 : 0, b !== 0 ? -b / 0 : 0).acos();
      },
      acsc: function() {
        var a = this["re"];
        var b = this["im"];
        if (a === 0 && b === 0) {
          return new Complex2(Math.PI / 2, Infinity);
        }
        var d = a * a + b * b;
        return d !== 0 ? new Complex2(a / d, -b / d).asin() : new Complex2(a !== 0 ? a / 0 : 0, b !== 0 ? -b / 0 : 0).asin();
      },
      sinh: function() {
        var a = this["re"];
        var b = this["im"];
        return new Complex2(sinh(a) * Math.cos(b), cosh(a) * Math.sin(b));
      },
      cosh: function() {
        var a = this["re"];
        var b = this["im"];
        return new Complex2(cosh(a) * Math.cos(b), sinh(a) * Math.sin(b));
      },
      tanh: function() {
        var a = 2 * this["re"];
        var b = 2 * this["im"];
        var d = cosh(a) + Math.cos(b);
        return new Complex2(sinh(a) / d, Math.sin(b) / d);
      },
      coth: function() {
        var a = 2 * this["re"];
        var b = 2 * this["im"];
        var d = cosh(a) - Math.cos(b);
        return new Complex2(sinh(a) / d, -Math.sin(b) / d);
      },
      csch: function() {
        var a = this["re"];
        var b = this["im"];
        var d = Math.cos(2 * b) - cosh(2 * a);
        return new Complex2(-2 * sinh(a) * Math.cos(b) / d, 2 * cosh(a) * Math.sin(b) / d);
      },
      sech: function() {
        var a = this["re"];
        var b = this["im"];
        var d = Math.cos(2 * b) + cosh(2 * a);
        return new Complex2(2 * cosh(a) * Math.cos(b) / d, -2 * sinh(a) * Math.sin(b) / d);
      },
      asinh: function() {
        var tmp = this["im"];
        this["im"] = -this["re"];
        this["re"] = tmp;
        var res = this["asin"]();
        this["re"] = -this["im"];
        this["im"] = tmp;
        tmp = res["re"];
        res["re"] = -res["im"];
        res["im"] = tmp;
        return res;
      },
      acosh: function() {
        var res = this["acos"]();
        if (res["im"] <= 0) {
          var tmp = res["re"];
          res["re"] = -res["im"];
          res["im"] = tmp;
        } else {
          var tmp = res["im"];
          res["im"] = -res["re"];
          res["re"] = tmp;
        }
        return res;
      },
      atanh: function() {
        var a = this["re"];
        var b = this["im"];
        var noIM = a > 1 && b === 0;
        var oneMinus = 1 - a;
        var onePlus = 1 + a;
        var d = oneMinus * oneMinus + b * b;
        var x = d !== 0 ? new Complex2((onePlus * oneMinus - b * b) / d, (b * oneMinus + onePlus * b) / d) : new Complex2(a !== -1 ? a / 0 : 0, b !== 0 ? b / 0 : 0);
        var temp = x["re"];
        x["re"] = logHypot(x["re"], x["im"]) / 2;
        x["im"] = Math.atan2(x["im"], temp) / 2;
        if (noIM) {
          x["im"] = -x["im"];
        }
        return x;
      },
      acoth: function() {
        var a = this["re"];
        var b = this["im"];
        if (a === 0 && b === 0) {
          return new Complex2(0, Math.PI / 2);
        }
        var d = a * a + b * b;
        return d !== 0 ? new Complex2(a / d, -b / d).atanh() : new Complex2(a !== 0 ? a / 0 : 0, b !== 0 ? -b / 0 : 0).atanh();
      },
      acsch: function() {
        var a = this["re"];
        var b = this["im"];
        if (b === 0) {
          return new Complex2(a !== 0 ? Math.log(a + Math.sqrt(a * a + 1)) : Infinity, 0);
        }
        var d = a * a + b * b;
        return d !== 0 ? new Complex2(a / d, -b / d).asinh() : new Complex2(a !== 0 ? a / 0 : 0, b !== 0 ? -b / 0 : 0).asinh();
      },
      asech: function() {
        var a = this["re"];
        var b = this["im"];
        if (this["isZero"]()) {
          return Complex2["INFINITY"];
        }
        var d = a * a + b * b;
        return d !== 0 ? new Complex2(a / d, -b / d).acosh() : new Complex2(a !== 0 ? a / 0 : 0, b !== 0 ? -b / 0 : 0).acosh();
      },
      inverse: function() {
        if (this["isZero"]()) {
          return Complex2["INFINITY"];
        }
        if (this["isInfinite"]()) {
          return Complex2["ZERO"];
        }
        var a = this["re"];
        var b = this["im"];
        var d = a * a + b * b;
        return new Complex2(a / d, -b / d);
      },
      conjugate: function() {
        return new Complex2(this["re"], -this["im"]);
      },
      neg: function() {
        return new Complex2(-this["re"], -this["im"]);
      },
      ceil: function(places) {
        places = Math.pow(10, places || 0);
        return new Complex2(Math.ceil(this["re"] * places) / places, Math.ceil(this["im"] * places) / places);
      },
      floor: function(places) {
        places = Math.pow(10, places || 0);
        return new Complex2(Math.floor(this["re"] * places) / places, Math.floor(this["im"] * places) / places);
      },
      round: function(places) {
        places = Math.pow(10, places || 0);
        return new Complex2(Math.round(this["re"] * places) / places, Math.round(this["im"] * places) / places);
      },
      equals: function(a, b) {
        var z = new Complex2(a, b);
        return Math.abs(z["re"] - this["re"]) <= Complex2["EPSILON"] && Math.abs(z["im"] - this["im"]) <= Complex2["EPSILON"];
      },
      clone: function() {
        return new Complex2(this["re"], this["im"]);
      },
      toString: function() {
        var a = this["re"];
        var b = this["im"];
        var ret = "";
        if (this["isNaN"]()) {
          return "NaN";
        }
        if (this["isInfinite"]()) {
          return "Infinity";
        }
        if (Math.abs(a) < Complex2["EPSILON"]) {
          a = 0;
        }
        if (Math.abs(b) < Complex2["EPSILON"]) {
          b = 0;
        }
        if (b === 0) {
          return ret + a;
        }
        if (a !== 0) {
          ret += a;
          ret += " ";
          if (b < 0) {
            b = -b;
            ret += "-";
          } else {
            ret += "+";
          }
          ret += " ";
        } else if (b < 0) {
          b = -b;
          ret += "-";
        }
        if (b !== 1) {
          ret += b;
        }
        return ret + "i";
      },
      toVector: function() {
        return [this["re"], this["im"]];
      },
      valueOf: function() {
        if (this["im"] === 0) {
          return this["re"];
        }
        return null;
      },
      isNaN: function() {
        return isNaN(this["re"]) || isNaN(this["im"]);
      },
      isZero: function() {
        return this["im"] === 0 && this["re"] === 0;
      },
      isFinite: function() {
        return isFinite(this["re"]) && isFinite(this["im"]);
      },
      isInfinite: function() {
        return !(this["isNaN"]() || this["isFinite"]());
      }
    };
    Complex2["ZERO"] = new Complex2(0, 0);
    Complex2["ONE"] = new Complex2(1, 0);
    Complex2["I"] = new Complex2(0, 1);
    Complex2["PI"] = new Complex2(Math.PI, 0);
    Complex2["E"] = new Complex2(Math.E, 0);
    Complex2["INFINITY"] = new Complex2(Infinity, Infinity);
    Complex2["NAN"] = new Complex2(NaN, NaN);
    Complex2["EPSILON"] = 1e-15;
    {
      Object.defineProperty(Complex2, "__esModule", {value: true});
      Complex2["default"] = Complex2;
      Complex2["Complex"] = Complex2;
      module["exports"] = Complex2;
    }
  })();
});
var __pika_web_default_export_for_treeshaking__ = /* @__PURE__ */ getDefaultExportFromCjs(complex);
var Complex = complex.Complex;
var E = complex.E;
var EPSILON = complex.EPSILON;
var I = complex.I;
var INFINITY = complex.INFINITY;
var NAN = complex.NAN;
var ONE = complex.ONE;
var PI = complex.PI;
var ZERO = complex.ZERO;
export default __pika_web_default_export_for_treeshaking__;
export {Complex, E, EPSILON, I, INFINITY, NAN, ONE, PI, ZERO, complex as __moduleExports};
