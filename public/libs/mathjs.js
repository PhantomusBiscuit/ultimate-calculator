import {f as factory, a as format$1, i as isNumber, b as isUnit, g as getArrayDataType, c as isArray, D as DimensionError, v as validateIndex, d as isIndex, e as isMatrix, h as arraySize, u as unsqueeze, j as deepStrictEqual, k as isCollection, r as resize$1, l as reshape$1, p as processSizesWildcard, m as clone$1, n as maxArgumentCount, o as format$2, q as isBigNumber, s as isInteger$1, t as isString, w as validate, x as typeOf$1, y as deepMap, z as isNegativeNumber, A as isPositiveNumber, B as isZeroNumber, C as isNaNNumber, E as unaryMinusNumber, F as unaryPlusNumber, G as absNumber, H as addNumber, I as cbrtNumber, J as isComplex, K as isFraction, L as cubeNumber, M as expNumber, N as expm1Number, O as createMatrixAlgorithmSuite, P as gcdNumber, Q as ArgumentsError, R as scatter, S as createMatAlgo11xS0s, T as lcmNumber, U as log10Number, V as log2Number, W as createMatAlgo03xDSf, X as createMatAlgo05xSfSf, Y as createMatAlgo12xSfs, Z as modNumber, _ as multiplyNumber, $ as createMatAlgo14xDs, a0 as nthRootNumber, a1 as signNumber, a2 as squareNumber, a3 as xgcdNumber, a4 as bitAndNumber, a5 as bitNotNumber, a6 as bitOrNumber, a7 as createMatAlgo07xSSf, a8 as bitXorNumber, a9 as notNumber, aa as orNumber, ab as xorNumber, ac as IndexError, ad as squeeze$1, ae as flatten$1, af as getSafeProperty, ag as setSafeProperty, ah as powNumber, ai as roundNumber, aj as logNumber, ak as log1p$1, al as isDenseMatrix, am as isSparseMatrix, an as leftShiftNumber, ao as rightArithShiftNumber, ap as rightLogShiftNumber, aq as andNumber, ar as isRange, as as hasOwnProperty, at as memoize, au as _extends_1, av as defineProperty, aw as endsWith, ax as createBigNumberPi, ay as acoshNumber, az as acotNumber, aA as acothNumber, aB as acscNumber, aC as acschNumber, aD as asecNumber, aE as asechNumber, aF as asinhNumber, aG as atanhNumber, aH as cosh$1, aI as cotNumber, aJ as cothNumber, aK as cscNumber, aL as cschNumber, aM as secNumber, aN as sechNumber, aO as sinhNumber, aP as tanh$1, aQ as identify, aR as generalize, aS as extend, aT as combinationsNumber, aU as gammaNumber, aV as gammaP, aW as gammaG, aX as lgammaNumber, aY as copysign, aZ as lnSqrt2PI, a_ as isConstantNode, a$ as errorTransform, b0 as lastDimToZeroBase, b1 as createTyped, b2 as createResultSet, b3 as createRangeClass, b4 as createClone, b5 as createIsNumeric, b6 as createHasNumericValue, b7 as createTypeOf, b8 as createEqualScalar, b9 as createNumber, ba as createString, bb as createBoolean, bc as createApply, bd as createCeil, be as createFix, bf as createFloor, bg as createFilter, bh as createForEach, bi as createMap, bj as createRange, bk as createSize, bl as createErf, bm as createMode, bn as createProd, bo as createFormat, bp as createPrint, bq as createIsPrime, br as createNumeric, bs as createCompare, bt as createCompareNatural, bu as createCompareText, bv as createEqual, bw as createEqualText, bx as createSmaller, by as createSmallerEq, bz as createLarger, bA as createLargerEq, bB as createDeepEqual, bC as createUnequal, bD as createPartitionSelect, bE as createMax, bF as createMin, bG as createHypot, bH as createNode, bI as createAccessorNode, bJ as createArrayNode, bK as createAssignmentNode, bL as createBlockNode, bM as createConditionalNode, bN as createConstantNode, bO as createFunctionAssignmentNode, bP as createIndexNode, bQ as createObjectNode, bR as createOperatorNode, bS as createParenthesisNode, bT as createRangeNode, bU as createRelationalNode, bV as createSymbolNode, bW as createFunctionNode, bX as createParse, bY as createCompile, bZ as createEvaluate, b_ as createParserClass, b$ as createParser, c0 as createHelpClass, c1 as createChainClass, c2 as createHelp, c3 as createChain, c4 as createSum, c5 as createCumSum, c6 as createMean, c7 as createMedian, c8 as createMad, c9 as createVariance, ca as createQuantileSeq, cb as createStd, cc as createCombinationsWithRep, cd as createFactorial, ce as createMultinomial, cf as createPermutations, cg as createPickRandom, ch as createRandom, ci as createRandomInt, cj as createStirlingS2, ck as createBellNumbers, cl as createCatalan, cm as createComposition, cn as createSimplify, co as createSimplifyConstant, cp as createSimplifyCore, cq as createResolve, cr as createDerivative, cs as createRationalize, ct as createReviver, cu as createReplacer, cv as createE, cw as createUppercaseE, cx as createFalse, cy as createI, cz as createInfinity, cA as createLN10, cB as createLN2, cC as createLOG10E, cD as createLOG2E, cE as createNaN, cF as createNull, cG as createPhi, cH as createPi, cI as createUppercasePi, cJ as createSQRT1_2, cK as createSQRT2, cL as createTau, cM as createTrue, cN as createVersion, cO as createApplyTransform, cP as createFilterTransform, cQ as createForEachTransform, cR as createMapTransform, cS as createMaxTransform, cT as createMeanTransform, cU as createMinTransform, cV as createRangeTransform, cW as createStdTransform, cX as createSumTransform, cY as createCumSumTransform, cZ as createVarianceTransform, c_ as config} from "./common/create-1f522545.js";
export {Q as ArgumentsError, D as DimensionError, ac as IndexError, c_ as config, c$ as create, bI as createAccessorNode, bc as createApply, cO as createApplyTransform, bJ as createArrayNode, bK as createAssignmentNode, ck as createBellNumbers, bL as createBlockNode, bb as createBoolean, cl as createCatalan, bd as createCeil, c3 as createChain, c1 as createChainClass, b4 as createClone, cc as createCombinationsWithRep, bs as createCompare, bt as createCompareNatural, bu as createCompareText, bY as createCompile, cm as createComposition, bM as createConditionalNode, bN as createConstantNode, c5 as createCumSum, cY as createCumSumTransform, bB as createDeepEqual, cr as createDerivative, cv as createE, bv as createEqual, b8 as createEqualScalar, bw as createEqualText, bl as createErf, bZ as createEvaluate, cd as createFactorial, cx as createFalse, bg as createFilter, cP as createFilterTransform, be as createFix, bf as createFloor, bh as createForEach, cQ as createForEachTransform, bo as createFormat, bO as createFunctionAssignmentNode, bW as createFunctionNode, b6 as createHasNumericValue, c2 as createHelp, c0 as createHelpClass, bG as createHypot, cy as createI, bP as createIndexNode, cz as createInfinity, b5 as createIsNumeric, bq as createIsPrime, cA as createLN10, cB as createLN2, cC as createLOG10E, cD as createLOG2E, bz as createLarger, bA as createLargerEq, c8 as createMad, bi as createMap, cR as createMapTransform, bE as createMax, cS as createMaxTransform, c6 as createMean, cT as createMeanTransform, c7 as createMedian, bF as createMin, cU as createMinTransform, bm as createMode, ce as createMultinomial, cE as createNaN, bH as createNode, cF as createNull, b9 as createNumber, br as createNumeric, bQ as createObjectNode, bR as createOperatorNode, bS as createParenthesisNode, bX as createParse, b$ as createParser, b_ as createParserClass, bD as createPartitionSelect, cf as createPermutations, cG as createPhi, cH as createPi, cg as createPickRandom, bp as createPrint, bn as createProd, ca as createQuantileSeq, ch as createRandom, ci as createRandomInt, bj as createRange, b3 as createRangeClass, bT as createRangeNode, cV as createRangeTransform, cs as createRationalize, bU as createRelationalNode, cu as createReplacer, cq as createResolve, b2 as createResultSet, ct as createReviver, cJ as createSQRT1_2, cK as createSQRT2, cn as createSimplify, co as createSimplifyConstant, cp as createSimplifyCore, bk as createSize, bx as createSmaller, by as createSmallerEq, cb as createStd, cW as createStdTransform, cj as createStirlingS2, ba as createString, c4 as createSum, cX as createSumTransform, bV as createSymbolNode, cL as createTau, cM as createTrue, b7 as createTypeOf, b1 as createTyped, bC as createUnequal, cw as createUppercaseE, cI as createUppercasePi, c9 as createVariance, cZ as createVarianceTransform, cN as createVersion, d0 as docs, f as factory, d1 as isAccessorNode, c as isArray, d2 as isArrayNode, d3 as isAssignmentNode, q as isBigNumber, d4 as isBlockNode, d5 as isBoolean, d6 as isChain, k as isCollection, J as isComplex, d7 as isConditionalNode, a_ as isConstantNode, d8 as isDate, al as isDenseMatrix, K as isFraction, d9 as isFunction, da as isFunctionAssignmentNode, db as isFunctionNode, dc as isHelp, d as isIndex, dd as isIndexNode, e as isMatrix, de as isNode, df as isNull, i as isNumber, dh as isObject, di as isObjectNode, dj as isOperatorNode, dk as isParenthesisNode, ar as isRange, dl as isRangeNode, dn as isRegExp, dm as isRelationalNode, dp as isResultSet, am as isSparseMatrix, t as isString, dq as isSymbolNode, dg as isUndefined, b as isUnit} from "./common/create-1f522545.js";
import Decimal from "./common/decimaljs.js";
import Complex$1 from "./common/complexjs.js";
import Fraction$1 from "./common/fractionjs.js";
import "./common/typed-function.js";
import "./common/javascript-natural-sort.js";
import "./common/escape-latex.js";
import "./common/seedrandom.js";
import "./common/_commonjsHelpers-8c19dec8.js";
import "./common/tiny-emitter.js";
var name = "BigNumber";
var dependencies = ["?on", "config"];
var createBigNumberClass = /* @__PURE__ */ factory(name, dependencies, (_ref) => {
  var {
    on,
    config: config2
  } = _ref;
  var BigNumber2 = Decimal.clone({
    precision: config2.precision,
    modulo: Decimal.EUCLID
  });
  BigNumber2.prototype = Object.create(BigNumber2.prototype);
  BigNumber2.prototype.type = "BigNumber";
  BigNumber2.prototype.isBigNumber = true;
  BigNumber2.prototype.toJSON = function() {
    return {
      mathjs: "BigNumber",
      value: this.toString()
    };
  };
  BigNumber2.fromJSON = function(json) {
    return new BigNumber2(json.value);
  };
  if (on) {
    on("config", function(curr, prev) {
      if (curr.precision !== prev.precision) {
        BigNumber2.config({
          precision: curr.precision
        });
      }
    });
  }
  return BigNumber2;
}, {
  isClass: true
});
var name$1 = "Complex";
var dependencies$1 = [];
var createComplexClass = /* @__PURE__ */ factory(name$1, dependencies$1, () => {
  Object.defineProperty(Complex$1, "name", {
    value: "Complex"
  });
  Complex$1.prototype.constructor = Complex$1;
  Complex$1.prototype.type = "Complex";
  Complex$1.prototype.isComplex = true;
  Complex$1.prototype.toJSON = function() {
    return {
      mathjs: "Complex",
      re: this.re,
      im: this.im
    };
  };
  Complex$1.prototype.toPolar = function() {
    return {
      r: this.abs(),
      phi: this.arg()
    };
  };
  Complex$1.prototype.format = function(options) {
    var str = "";
    var im2 = this.im;
    var re2 = this.re;
    var strRe = format$1(this.re, options);
    var strIm = format$1(this.im, options);
    var precision = isNumber(options) ? options : options ? options.precision : null;
    if (precision !== null) {
      var epsilon = Math.pow(10, -precision);
      if (Math.abs(re2 / im2) < epsilon) {
        re2 = 0;
      }
      if (Math.abs(im2 / re2) < epsilon) {
        im2 = 0;
      }
    }
    if (im2 === 0) {
      str = strRe;
    } else if (re2 === 0) {
      if (im2 === 1) {
        str = "i";
      } else if (im2 === -1) {
        str = "-i";
      } else {
        str = strIm + "i";
      }
    } else {
      if (im2 < 0) {
        if (im2 === -1) {
          str = strRe + " - i";
        } else {
          str = strRe + " - " + strIm.substring(1) + "i";
        }
      } else {
        if (im2 === 1) {
          str = strRe + " + i";
        } else {
          str = strRe + " + " + strIm + "i";
        }
      }
    }
    return str;
  };
  Complex$1.fromPolar = function(args) {
    switch (arguments.length) {
      case 1: {
        var arg2 = arguments[0];
        if (typeof arg2 === "object") {
          return Complex$1(arg2);
        } else {
          throw new TypeError("Input has to be an object with r and phi keys.");
        }
      }
      case 2: {
        var r = arguments[0];
        var phi2 = arguments[1];
        if (isNumber(r)) {
          if (isUnit(phi2) && phi2.hasBase("ANGLE")) {
            phi2 = phi2.toNumber("rad");
          }
          if (isNumber(phi2)) {
            return new Complex$1({
              r,
              phi: phi2
            });
          }
          throw new TypeError("Phi is not a number nor an angle unit.");
        } else {
          throw new TypeError("Radius r is not a number.");
        }
      }
      default:
        throw new SyntaxError("Wrong number of arguments in function fromPolar");
    }
  };
  Complex$1.prototype.valueOf = Complex$1.prototype.toString;
  Complex$1.fromJSON = function(json) {
    return new Complex$1(json);
  };
  Complex$1.compare = function(a, b10) {
    if (a.re > b10.re) {
      return 1;
    }
    if (a.re < b10.re) {
      return -1;
    }
    if (a.im > b10.im) {
      return 1;
    }
    if (a.im < b10.im) {
      return -1;
    }
    return 0;
  };
  return Complex$1;
}, {
  isClass: true
});
var name$2 = "Fraction";
var dependencies$2 = [];
var createFractionClass = /* @__PURE__ */ factory(name$2, dependencies$2, () => {
  Object.defineProperty(Fraction$1, "name", {
    value: "Fraction"
  });
  Fraction$1.prototype.constructor = Fraction$1;
  Fraction$1.prototype.type = "Fraction";
  Fraction$1.prototype.isFraction = true;
  Fraction$1.prototype.toJSON = function() {
    return {
      mathjs: "Fraction",
      n: this.s * this.n,
      d: this.d
    };
  };
  Fraction$1.fromJSON = function(json) {
    return new Fraction$1(json);
  };
  return Fraction$1;
}, {
  isClass: true
});
var name$3 = "Matrix";
var dependencies$3 = [];
var createMatrixClass = /* @__PURE__ */ factory(name$3, dependencies$3, () => {
  function Matrix2() {
    if (!(this instanceof Matrix2)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
  }
  Matrix2.prototype.type = "Matrix";
  Matrix2.prototype.isMatrix = true;
  Matrix2.prototype.storage = function() {
    throw new Error("Cannot invoke storage on a Matrix interface");
  };
  Matrix2.prototype.datatype = function() {
    throw new Error("Cannot invoke datatype on a Matrix interface");
  };
  Matrix2.prototype.create = function(data, datatype) {
    throw new Error("Cannot invoke create on a Matrix interface");
  };
  Matrix2.prototype.subset = function(index2, replacement, defaultValue) {
    throw new Error("Cannot invoke subset on a Matrix interface");
  };
  Matrix2.prototype.get = function(index2) {
    throw new Error("Cannot invoke get on a Matrix interface");
  };
  Matrix2.prototype.set = function(index2, value, defaultValue) {
    throw new Error("Cannot invoke set on a Matrix interface");
  };
  Matrix2.prototype.resize = function(size2, defaultValue) {
    throw new Error("Cannot invoke resize on a Matrix interface");
  };
  Matrix2.prototype.reshape = function(size2, defaultValue) {
    throw new Error("Cannot invoke reshape on a Matrix interface");
  };
  Matrix2.prototype.clone = function() {
    throw new Error("Cannot invoke clone on a Matrix interface");
  };
  Matrix2.prototype.size = function() {
    throw new Error("Cannot invoke size on a Matrix interface");
  };
  Matrix2.prototype.map = function(callback, skipZeros) {
    throw new Error("Cannot invoke map on a Matrix interface");
  };
  Matrix2.prototype.forEach = function(callback) {
    throw new Error("Cannot invoke forEach on a Matrix interface");
  };
  Matrix2.prototype[Symbol.iterator] = function() {
    throw new Error("Cannot iterate a Matrix interface");
  };
  Matrix2.prototype.toArray = function() {
    throw new Error("Cannot invoke toArray on a Matrix interface");
  };
  Matrix2.prototype.valueOf = function() {
    throw new Error("Cannot invoke valueOf on a Matrix interface");
  };
  Matrix2.prototype.format = function(options) {
    throw new Error("Cannot invoke format on a Matrix interface");
  };
  Matrix2.prototype.toString = function() {
    throw new Error("Cannot invoke toString on a Matrix interface");
  };
  return Matrix2;
}, {
  isClass: true
});
var name$4 = "DenseMatrix";
var dependencies$4 = ["Matrix"];
var createDenseMatrixClass = /* @__PURE__ */ factory(name$4, dependencies$4, (_ref) => {
  var {
    Matrix: Matrix2
  } = _ref;
  function DenseMatrix2(data, datatype) {
    if (!(this instanceof DenseMatrix2)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
    if (datatype && !isString(datatype)) {
      throw new Error("Invalid datatype: " + datatype);
    }
    if (isMatrix(data)) {
      if (data.type === "DenseMatrix") {
        this._data = clone$1(data._data);
        this._size = clone$1(data._size);
        this._datatype = datatype || data._datatype;
      } else {
        this._data = data.toArray();
        this._size = data.size();
        this._datatype = datatype || data._datatype;
      }
    } else if (data && isArray(data.data) && isArray(data.size)) {
      this._data = data.data;
      this._size = data.size;
      validate(this._data, this._size);
      this._datatype = datatype || data.datatype;
    } else if (isArray(data)) {
      this._data = preprocess(data);
      this._size = arraySize(this._data);
      validate(this._data, this._size);
      this._datatype = datatype;
    } else if (data) {
      throw new TypeError("Unsupported type of data (" + typeOf$1(data) + ")");
    } else {
      this._data = [];
      this._size = [0];
      this._datatype = datatype;
    }
  }
  DenseMatrix2.prototype = new Matrix2();
  DenseMatrix2.prototype.createDenseMatrix = function(data, datatype) {
    return new DenseMatrix2(data, datatype);
  };
  Object.defineProperty(DenseMatrix2, "name", {
    value: "DenseMatrix"
  });
  DenseMatrix2.prototype.constructor = DenseMatrix2;
  DenseMatrix2.prototype.type = "DenseMatrix";
  DenseMatrix2.prototype.isDenseMatrix = true;
  DenseMatrix2.prototype.getDataType = function() {
    return getArrayDataType(this._data, typeOf$1);
  };
  DenseMatrix2.prototype.storage = function() {
    return "dense";
  };
  DenseMatrix2.prototype.datatype = function() {
    return this._datatype;
  };
  DenseMatrix2.prototype.create = function(data, datatype) {
    return new DenseMatrix2(data, datatype);
  };
  DenseMatrix2.prototype.subset = function(index2, replacement, defaultValue) {
    switch (arguments.length) {
      case 1:
        return _get(this, index2);
      case 2:
      case 3:
        return _set(this, index2, replacement, defaultValue);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  };
  DenseMatrix2.prototype.get = function(index2) {
    if (!isArray(index2)) {
      throw new TypeError("Array expected");
    }
    if (index2.length !== this._size.length) {
      throw new DimensionError(index2.length, this._size.length);
    }
    for (var x = 0; x < index2.length; x++) {
      validateIndex(index2[x], this._size[x]);
    }
    var data = this._data;
    for (var i3 = 0, ii = index2.length; i3 < ii; i3++) {
      var indexI = index2[i3];
      validateIndex(indexI, data.length);
      data = data[indexI];
    }
    return data;
  };
  DenseMatrix2.prototype.set = function(index2, value, defaultValue) {
    if (!isArray(index2)) {
      throw new TypeError("Array expected");
    }
    if (index2.length < this._size.length) {
      throw new DimensionError(index2.length, this._size.length, "<");
    }
    var i3, ii, indexI;
    var size2 = index2.map(function(i4) {
      return i4 + 1;
    });
    _fit(this, size2, defaultValue);
    var data = this._data;
    for (i3 = 0, ii = index2.length - 1; i3 < ii; i3++) {
      indexI = index2[i3];
      validateIndex(indexI, data.length);
      data = data[indexI];
    }
    indexI = index2[index2.length - 1];
    validateIndex(indexI, data.length);
    data[indexI] = value;
    return this;
  };
  function _get(matrix2, index2) {
    if (!isIndex(index2)) {
      throw new TypeError("Invalid index");
    }
    var isScalar = index2.isScalar();
    if (isScalar) {
      return matrix2.get(index2.min());
    } else {
      var size2 = index2.size();
      if (size2.length !== matrix2._size.length) {
        throw new DimensionError(size2.length, matrix2._size.length);
      }
      var min2 = index2.min();
      var max2 = index2.max();
      for (var i3 = 0, ii = matrix2._size.length; i3 < ii; i3++) {
        validateIndex(min2[i3], matrix2._size[i3]);
        validateIndex(max2[i3], matrix2._size[i3]);
      }
      return new DenseMatrix2(_getSubmatrix(matrix2._data, index2, size2.length, 0), matrix2._datatype);
    }
  }
  function _getSubmatrix(data, index2, dims, dim) {
    var last = dim === dims - 1;
    var range2 = index2.dimension(dim);
    if (last) {
      return range2.map(function(i3) {
        validateIndex(i3, data.length);
        return data[i3];
      }).valueOf();
    } else {
      return range2.map(function(i3) {
        validateIndex(i3, data.length);
        var child = data[i3];
        return _getSubmatrix(child, index2, dims, dim + 1);
      }).valueOf();
    }
  }
  function _set(matrix2, index2, submatrix, defaultValue) {
    if (!index2 || index2.isIndex !== true) {
      throw new TypeError("Invalid index");
    }
    var iSize = index2.size();
    var isScalar = index2.isScalar();
    var sSize;
    if (isMatrix(submatrix)) {
      sSize = submatrix.size();
      submatrix = submatrix.valueOf();
    } else {
      sSize = arraySize(submatrix);
    }
    if (isScalar) {
      if (sSize.length !== 0) {
        throw new TypeError("Scalar expected");
      }
      matrix2.set(index2.min(), submatrix, defaultValue);
    } else {
      if (iSize.length < matrix2._size.length) {
        throw new DimensionError(iSize.length, matrix2._size.length, "<");
      }
      if (sSize.length < iSize.length) {
        var i3 = 0;
        var outer = 0;
        while (iSize[i3] === 1 && sSize[i3] === 1) {
          i3++;
        }
        while (iSize[i3] === 1) {
          outer++;
          i3++;
        }
        submatrix = unsqueeze(submatrix, iSize.length, outer, sSize);
      }
      if (!deepStrictEqual(iSize, sSize)) {
        throw new DimensionError(iSize, sSize, ">");
      }
      var size2 = index2.max().map(function(i4) {
        return i4 + 1;
      });
      _fit(matrix2, size2, defaultValue);
      var dims = iSize.length;
      var dim = 0;
      _setSubmatrix(matrix2._data, index2, submatrix, dims, dim);
    }
    return matrix2;
  }
  function _setSubmatrix(data, index2, submatrix, dims, dim) {
    var last = dim === dims - 1;
    var range2 = index2.dimension(dim);
    if (last) {
      range2.forEach(function(dataIndex, subIndex) {
        validateIndex(dataIndex);
        data[dataIndex] = submatrix[subIndex[0]];
      });
    } else {
      range2.forEach(function(dataIndex, subIndex) {
        validateIndex(dataIndex);
        _setSubmatrix(data[dataIndex], index2, submatrix[subIndex[0]], dims, dim + 1);
      });
    }
  }
  DenseMatrix2.prototype.resize = function(size2, defaultValue, copy) {
    if (!isCollection(size2)) {
      throw new TypeError("Array or Matrix expected");
    }
    var sizeArray = size2.valueOf().map((value) => {
      return Array.isArray(value) && value.length === 1 ? value[0] : value;
    });
    var m = copy ? this.clone() : this;
    return _resize(m, sizeArray, defaultValue);
  };
  function _resize(matrix2, size2, defaultValue) {
    if (size2.length === 0) {
      var v = matrix2._data;
      while (isArray(v)) {
        v = v[0];
      }
      return v;
    }
    matrix2._size = size2.slice(0);
    matrix2._data = resize$1(matrix2._data, matrix2._size, defaultValue);
    return matrix2;
  }
  DenseMatrix2.prototype.reshape = function(size2, copy) {
    var m = copy ? this.clone() : this;
    m._data = reshape$1(m._data, size2);
    var currentLength = m._size.reduce((length, size3) => length * size3);
    m._size = processSizesWildcard(size2, currentLength);
    return m;
  };
  function _fit(matrix2, size2, defaultValue) {
    var newSize = matrix2._size.slice(0);
    var changed = false;
    while (newSize.length < size2.length) {
      newSize.push(0);
      changed = true;
    }
    for (var i3 = 0, ii = size2.length; i3 < ii; i3++) {
      if (size2[i3] > newSize[i3]) {
        newSize[i3] = size2[i3];
        changed = true;
      }
    }
    if (changed) {
      _resize(matrix2, newSize, defaultValue);
    }
  }
  DenseMatrix2.prototype.clone = function() {
    var m = new DenseMatrix2({
      data: clone$1(this._data),
      size: clone$1(this._size),
      datatype: this._datatype
    });
    return m;
  };
  DenseMatrix2.prototype.size = function() {
    return this._size.slice(0);
  };
  DenseMatrix2.prototype.map = function(callback) {
    var me = this;
    var args = maxArgumentCount(callback);
    var recurse = function recurse2(value, index2) {
      if (isArray(value)) {
        return value.map(function(child, i3) {
          return recurse2(child, index2.concat(i3));
        });
      } else {
        if (args === 1) {
          return callback(value);
        } else if (args === 2) {
          return callback(value, index2);
        } else {
          return callback(value, index2, me);
        }
      }
    };
    var data = recurse(this._data, []);
    var datatype = this._datatype !== void 0 ? getArrayDataType(data, typeOf$1) : void 0;
    return new DenseMatrix2(data, datatype);
  };
  DenseMatrix2.prototype.forEach = function(callback) {
    var me = this;
    var recurse = function recurse2(value, index2) {
      if (isArray(value)) {
        value.forEach(function(child, i3) {
          recurse2(child, index2.concat(i3));
        });
      } else {
        callback(value, index2, me);
      }
    };
    recurse(this._data, []);
  };
  DenseMatrix2.prototype[Symbol.iterator] = function* () {
    var recurse = function* recurse2(value, index2) {
      if (isArray(value)) {
        for (var i3 = 0; i3 < value.length; i3++) {
          yield* recurse2(value[i3], index2.concat(i3));
        }
      } else {
        yield {
          value,
          index: index2
        };
      }
    };
    yield* recurse(this._data, []);
  };
  DenseMatrix2.prototype.rows = function() {
    var result = [];
    var s = this.size();
    if (s.length !== 2) {
      throw new TypeError("Rows can only be returned for a 2D matrix.");
    }
    var data = this._data;
    for (var row2 of data) {
      result.push(new DenseMatrix2([row2], this._datatype));
    }
    return result;
  };
  DenseMatrix2.prototype.columns = function() {
    var _this = this;
    var result = [];
    var s = this.size();
    if (s.length !== 2) {
      throw new TypeError("Rows can only be returned for a 2D matrix.");
    }
    var data = this._data;
    var _loop = function _loop2(i4) {
      var col = data.map((row2) => [row2[i4]]);
      result.push(new DenseMatrix2(col, _this._datatype));
    };
    for (var i3 = 0; i3 < s[1]; i3++) {
      _loop(i3);
    }
    return result;
  };
  DenseMatrix2.prototype.toArray = function() {
    return clone$1(this._data);
  };
  DenseMatrix2.prototype.valueOf = function() {
    return this._data;
  };
  DenseMatrix2.prototype.format = function(options) {
    return format$2(this._data, options);
  };
  DenseMatrix2.prototype.toString = function() {
    return format$2(this._data);
  };
  DenseMatrix2.prototype.toJSON = function() {
    return {
      mathjs: "DenseMatrix",
      data: this._data,
      size: this._size,
      datatype: this._datatype
    };
  };
  DenseMatrix2.prototype.diagonal = function(k2) {
    if (k2) {
      if (isBigNumber(k2)) {
        k2 = k2.toNumber();
      }
      if (!isNumber(k2) || !isInteger$1(k2)) {
        throw new TypeError("The parameter k must be an integer number");
      }
    } else {
      k2 = 0;
    }
    var kSuper = k2 > 0 ? k2 : 0;
    var kSub = k2 < 0 ? -k2 : 0;
    var rows = this._size[0];
    var columns = this._size[1];
    var n = Math.min(rows - kSub, columns - kSuper);
    var data = [];
    for (var i3 = 0; i3 < n; i3++) {
      data[i3] = this._data[i3 + kSub][i3 + kSuper];
    }
    return new DenseMatrix2({
      data,
      size: [n],
      datatype: this._datatype
    });
  };
  DenseMatrix2.diagonal = function(size2, value, k2, defaultValue) {
    if (!isArray(size2)) {
      throw new TypeError("Array expected, size parameter");
    }
    if (size2.length !== 2) {
      throw new Error("Only two dimensions matrix are supported");
    }
    size2 = size2.map(function(s) {
      if (isBigNumber(s)) {
        s = s.toNumber();
      }
      if (!isNumber(s) || !isInteger$1(s) || s < 1) {
        throw new Error("Size values must be positive integers");
      }
      return s;
    });
    if (k2) {
      if (isBigNumber(k2)) {
        k2 = k2.toNumber();
      }
      if (!isNumber(k2) || !isInteger$1(k2)) {
        throw new TypeError("The parameter k must be an integer number");
      }
    } else {
      k2 = 0;
    }
    var kSuper = k2 > 0 ? k2 : 0;
    var kSub = k2 < 0 ? -k2 : 0;
    var rows = size2[0];
    var columns = size2[1];
    var n = Math.min(rows - kSub, columns - kSuper);
    var _value;
    if (isArray(value)) {
      if (value.length !== n) {
        throw new Error("Invalid value array length");
      }
      _value = function _value2(i3) {
        return value[i3];
      };
    } else if (isMatrix(value)) {
      var ms = value.size();
      if (ms.length !== 1 || ms[0] !== n) {
        throw new Error("Invalid matrix length");
      }
      _value = function _value2(i3) {
        return value.get([i3]);
      };
    } else {
      _value = function _value2() {
        return value;
      };
    }
    if (!defaultValue) {
      defaultValue = isBigNumber(_value(0)) ? _value(0).mul(0) : 0;
    }
    var data = [];
    if (size2.length > 0) {
      data = resize$1(data, size2, defaultValue);
      for (var d10 = 0; d10 < n; d10++) {
        data[d10 + kSub][d10 + kSuper] = _value(d10);
      }
    }
    return new DenseMatrix2({
      data,
      size: [rows, columns]
    });
  };
  DenseMatrix2.fromJSON = function(json) {
    return new DenseMatrix2(json);
  };
  DenseMatrix2.prototype.swapRows = function(i3, j) {
    if (!isNumber(i3) || !isInteger$1(i3) || !isNumber(j) || !isInteger$1(j)) {
      throw new Error("Row index must be positive integers");
    }
    if (this._size.length !== 2) {
      throw new Error("Only two dimensional matrix is supported");
    }
    validateIndex(i3, this._size[0]);
    validateIndex(j, this._size[0]);
    DenseMatrix2._swapRows(i3, j, this._data);
    return this;
  };
  DenseMatrix2._swapRows = function(i3, j, data) {
    var vi = data[i3];
    data[i3] = data[j];
    data[j] = vi;
  };
  function preprocess(data) {
    for (var i3 = 0, ii = data.length; i3 < ii; i3++) {
      var elem = data[i3];
      if (isArray(elem)) {
        data[i3] = preprocess(elem);
      } else if (elem && elem.isMatrix === true) {
        data[i3] = preprocess(elem.valueOf());
      }
    }
    return data;
  }
  return DenseMatrix2;
}, {
  isClass: true
});
var name$5 = "isInteger";
var dependencies$5 = ["typed"];
var createIsInteger = /* @__PURE__ */ factory(name$5, dependencies$5, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$5, {
    number: isInteger$1,
    BigNumber: function BigNumber2(x) {
      return x.isInt();
    },
    Fraction: function Fraction2(x) {
      return x.d === 1 && isFinite(x.n);
    },
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$6 = "isNegative";
var dependencies$6 = ["typed"];
var createIsNegative = /* @__PURE__ */ factory(name$6, dependencies$6, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$6, {
    number: isNegativeNumber,
    BigNumber: function BigNumber2(x) {
      return x.isNeg() && !x.isZero() && !x.isNaN();
    },
    Fraction: function Fraction2(x) {
      return x.s < 0;
    },
    Unit: typed2.referToSelf((self) => (x) => typed2.find(self, x.valueType())(x.value)),
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$7 = "isPositive";
var dependencies$7 = ["typed"];
var createIsPositive = /* @__PURE__ */ factory(name$7, dependencies$7, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$7, {
    number: isPositiveNumber,
    BigNumber: function BigNumber2(x) {
      return !x.isNeg() && !x.isZero() && !x.isNaN();
    },
    Fraction: function Fraction2(x) {
      return x.s > 0 && x.n > 0;
    },
    Unit: typed2.referToSelf((self) => (x) => typed2.find(self, x.valueType())(x.value)),
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$8 = "isZero";
var dependencies$8 = ["typed"];
var createIsZero = /* @__PURE__ */ factory(name$8, dependencies$8, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$8, {
    number: isZeroNumber,
    BigNumber: function BigNumber2(x) {
      return x.isZero();
    },
    Complex: function Complex2(x) {
      return x.re === 0 && x.im === 0;
    },
    Fraction: function Fraction2(x) {
      return x.d === 1 && x.n === 0;
    },
    Unit: typed2.referToSelf((self) => (x) => typed2.find(self, x.valueType())(x.value)),
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$9 = "isNaN";
var dependencies$9 = ["typed"];
var createIsNaN = /* @__PURE__ */ factory(name$9, dependencies$9, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$9, {
    number: isNaNNumber,
    BigNumber: function BigNumber2(x) {
      return x.isNaN();
    },
    Fraction: function Fraction2(x) {
      return false;
    },
    Complex: function Complex2(x) {
      return x.isNaN();
    },
    Unit: function Unit2(x) {
      return Number.isNaN(x.value);
    },
    "Array | Matrix": function ArrayMatrix(x) {
      return deepMap(x, Number.isNaN);
    }
  });
});
var name$a = "SparseMatrix";
var dependencies$a = ["typed", "equalScalar", "Matrix"];
var createSparseMatrixClass = /* @__PURE__ */ factory(name$a, dependencies$a, (_ref) => {
  var {
    typed: typed2,
    equalScalar: equalScalar2,
    Matrix: Matrix2
  } = _ref;
  function SparseMatrix2(data, datatype) {
    if (!(this instanceof SparseMatrix2)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
    if (datatype && !isString(datatype)) {
      throw new Error("Invalid datatype: " + datatype);
    }
    if (isMatrix(data)) {
      _createFromMatrix(this, data, datatype);
    } else if (data && isArray(data.index) && isArray(data.ptr) && isArray(data.size)) {
      this._values = data.values;
      this._index = data.index;
      this._ptr = data.ptr;
      this._size = data.size;
      this._datatype = datatype || data.datatype;
    } else if (isArray(data)) {
      _createFromArray(this, data, datatype);
    } else if (data) {
      throw new TypeError("Unsupported type of data (" + typeOf$1(data) + ")");
    } else {
      this._values = [];
      this._index = [];
      this._ptr = [0];
      this._size = [0, 0];
      this._datatype = datatype;
    }
  }
  function _createFromMatrix(matrix2, source, datatype) {
    if (source.type === "SparseMatrix") {
      matrix2._values = source._values ? clone$1(source._values) : void 0;
      matrix2._index = clone$1(source._index);
      matrix2._ptr = clone$1(source._ptr);
      matrix2._size = clone$1(source._size);
      matrix2._datatype = datatype || source._datatype;
    } else {
      _createFromArray(matrix2, source.valueOf(), datatype || source._datatype);
    }
  }
  function _createFromArray(matrix2, data, datatype) {
    matrix2._values = [];
    matrix2._index = [];
    matrix2._ptr = [];
    matrix2._datatype = datatype;
    var rows = data.length;
    var columns = 0;
    var eq = equalScalar2;
    var zero = 0;
    if (isString(datatype)) {
      eq = typed2.find(equalScalar2, [datatype, datatype]) || equalScalar2;
      zero = typed2.convert(0, datatype);
    }
    if (rows > 0) {
      var j = 0;
      do {
        matrix2._ptr.push(matrix2._index.length);
        for (var i3 = 0; i3 < rows; i3++) {
          var row2 = data[i3];
          if (isArray(row2)) {
            if (j === 0 && columns < row2.length) {
              columns = row2.length;
            }
            if (j < row2.length) {
              var v = row2[j];
              if (!eq(v, zero)) {
                matrix2._values.push(v);
                matrix2._index.push(i3);
              }
            }
          } else {
            if (j === 0 && columns < 1) {
              columns = 1;
            }
            if (!eq(row2, zero)) {
              matrix2._values.push(row2);
              matrix2._index.push(i3);
            }
          }
        }
        j++;
      } while (j < columns);
    }
    matrix2._ptr.push(matrix2._index.length);
    matrix2._size = [rows, columns];
  }
  SparseMatrix2.prototype = new Matrix2();
  SparseMatrix2.prototype.createSparseMatrix = function(data, datatype) {
    return new SparseMatrix2(data, datatype);
  };
  Object.defineProperty(SparseMatrix2, "name", {
    value: "SparseMatrix"
  });
  SparseMatrix2.prototype.constructor = SparseMatrix2;
  SparseMatrix2.prototype.type = "SparseMatrix";
  SparseMatrix2.prototype.isSparseMatrix = true;
  SparseMatrix2.prototype.getDataType = function() {
    return getArrayDataType(this._values, typeOf$1);
  };
  SparseMatrix2.prototype.storage = function() {
    return "sparse";
  };
  SparseMatrix2.prototype.datatype = function() {
    return this._datatype;
  };
  SparseMatrix2.prototype.create = function(data, datatype) {
    return new SparseMatrix2(data, datatype);
  };
  SparseMatrix2.prototype.density = function() {
    var rows = this._size[0];
    var columns = this._size[1];
    return rows !== 0 && columns !== 0 ? this._index.length / (rows * columns) : 0;
  };
  SparseMatrix2.prototype.subset = function(index2, replacement, defaultValue) {
    if (!this._values) {
      throw new Error("Cannot invoke subset on a Pattern only matrix");
    }
    switch (arguments.length) {
      case 1:
        return _getsubset(this, index2);
      case 2:
      case 3:
        return _setsubset(this, index2, replacement, defaultValue);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  };
  function _getsubset(matrix2, idx) {
    if (!isIndex(idx)) {
      throw new TypeError("Invalid index");
    }
    var isScalar = idx.isScalar();
    if (isScalar) {
      return matrix2.get(idx.min());
    }
    var size2 = idx.size();
    if (size2.length !== matrix2._size.length) {
      throw new DimensionError(size2.length, matrix2._size.length);
    }
    var i3, ii, k2, kk;
    var min2 = idx.min();
    var max2 = idx.max();
    for (i3 = 0, ii = matrix2._size.length; i3 < ii; i3++) {
      validateIndex(min2[i3], matrix2._size[i3]);
      validateIndex(max2[i3], matrix2._size[i3]);
    }
    var mvalues = matrix2._values;
    var mindex = matrix2._index;
    var mptr = matrix2._ptr;
    var rows = idx.dimension(0);
    var columns = idx.dimension(1);
    var w = [];
    var pv = [];
    rows.forEach(function(i4, r) {
      pv[i4] = r[0];
      w[i4] = true;
    });
    var values = mvalues ? [] : void 0;
    var index2 = [];
    var ptr = [];
    columns.forEach(function(j) {
      ptr.push(index2.length);
      for (k2 = mptr[j], kk = mptr[j + 1]; k2 < kk; k2++) {
        i3 = mindex[k2];
        if (w[i3] === true) {
          index2.push(pv[i3]);
          if (values) {
            values.push(mvalues[k2]);
          }
        }
      }
    });
    ptr.push(index2.length);
    return new SparseMatrix2({
      values,
      index: index2,
      ptr,
      size: size2,
      datatype: matrix2._datatype
    });
  }
  function _setsubset(matrix2, index2, submatrix, defaultValue) {
    if (!index2 || index2.isIndex !== true) {
      throw new TypeError("Invalid index");
    }
    var iSize = index2.size();
    var isScalar = index2.isScalar();
    var sSize;
    if (isMatrix(submatrix)) {
      sSize = submatrix.size();
      submatrix = submatrix.toArray();
    } else {
      sSize = arraySize(submatrix);
    }
    if (isScalar) {
      if (sSize.length !== 0) {
        throw new TypeError("Scalar expected");
      }
      matrix2.set(index2.min(), submatrix, defaultValue);
    } else {
      if (iSize.length !== 1 && iSize.length !== 2) {
        throw new DimensionError(iSize.length, matrix2._size.length, "<");
      }
      if (sSize.length < iSize.length) {
        var i3 = 0;
        var outer = 0;
        while (iSize[i3] === 1 && sSize[i3] === 1) {
          i3++;
        }
        while (iSize[i3] === 1) {
          outer++;
          i3++;
        }
        submatrix = unsqueeze(submatrix, iSize.length, outer, sSize);
      }
      if (!deepStrictEqual(iSize, sSize)) {
        throw new DimensionError(iSize, sSize, ">");
      }
      if (iSize.length === 1) {
        var range2 = index2.dimension(0);
        range2.forEach(function(dataIndex, subIndex) {
          validateIndex(dataIndex);
          matrix2.set([dataIndex, 0], submatrix[subIndex[0]], defaultValue);
        });
      } else {
        var firstDimensionRange = index2.dimension(0);
        var secondDimensionRange = index2.dimension(1);
        firstDimensionRange.forEach(function(firstDataIndex, firstSubIndex) {
          validateIndex(firstDataIndex);
          secondDimensionRange.forEach(function(secondDataIndex, secondSubIndex) {
            validateIndex(secondDataIndex);
            matrix2.set([firstDataIndex, secondDataIndex], submatrix[firstSubIndex[0]][secondSubIndex[0]], defaultValue);
          });
        });
      }
    }
    return matrix2;
  }
  SparseMatrix2.prototype.get = function(index2) {
    if (!isArray(index2)) {
      throw new TypeError("Array expected");
    }
    if (index2.length !== this._size.length) {
      throw new DimensionError(index2.length, this._size.length);
    }
    if (!this._values) {
      throw new Error("Cannot invoke get on a Pattern only matrix");
    }
    var i3 = index2[0];
    var j = index2[1];
    validateIndex(i3, this._size[0]);
    validateIndex(j, this._size[1]);
    var k2 = _getValueIndex(i3, this._ptr[j], this._ptr[j + 1], this._index);
    if (k2 < this._ptr[j + 1] && this._index[k2] === i3) {
      return this._values[k2];
    }
    return 0;
  };
  SparseMatrix2.prototype.set = function(index2, v, defaultValue) {
    if (!isArray(index2)) {
      throw new TypeError("Array expected");
    }
    if (index2.length !== this._size.length) {
      throw new DimensionError(index2.length, this._size.length);
    }
    if (!this._values) {
      throw new Error("Cannot invoke set on a Pattern only matrix");
    }
    var i3 = index2[0];
    var j = index2[1];
    var rows = this._size[0];
    var columns = this._size[1];
    var eq = equalScalar2;
    var zero = 0;
    if (isString(this._datatype)) {
      eq = typed2.find(equalScalar2, [this._datatype, this._datatype]) || equalScalar2;
      zero = typed2.convert(0, this._datatype);
    }
    if (i3 > rows - 1 || j > columns - 1) {
      _resize(this, Math.max(i3 + 1, rows), Math.max(j + 1, columns), defaultValue);
      rows = this._size[0];
      columns = this._size[1];
    }
    validateIndex(i3, rows);
    validateIndex(j, columns);
    var k2 = _getValueIndex(i3, this._ptr[j], this._ptr[j + 1], this._index);
    if (k2 < this._ptr[j + 1] && this._index[k2] === i3) {
      if (!eq(v, zero)) {
        this._values[k2] = v;
      } else {
        _remove(k2, j, this._values, this._index, this._ptr);
      }
    } else {
      if (!eq(v, zero)) {
        _insert(k2, i3, j, v, this._values, this._index, this._ptr);
      }
    }
    return this;
  };
  function _getValueIndex(i3, top, bottom, index2) {
    if (bottom - top === 0) {
      return bottom;
    }
    for (var r = top; r < bottom; r++) {
      if (index2[r] === i3) {
        return r;
      }
    }
    return top;
  }
  function _remove(k2, j, values, index2, ptr) {
    values.splice(k2, 1);
    index2.splice(k2, 1);
    for (var x = j + 1; x < ptr.length; x++) {
      ptr[x]--;
    }
  }
  function _insert(k2, i3, j, v, values, index2, ptr) {
    values.splice(k2, 0, v);
    index2.splice(k2, 0, i3);
    for (var x = j + 1; x < ptr.length; x++) {
      ptr[x]++;
    }
  }
  SparseMatrix2.prototype.resize = function(size2, defaultValue, copy) {
    if (!isCollection(size2)) {
      throw new TypeError("Array or Matrix expected");
    }
    var sizeArray = size2.valueOf().map((value) => {
      return Array.isArray(value) && value.length === 1 ? value[0] : value;
    });
    if (sizeArray.length !== 2) {
      throw new Error("Only two dimensions matrix are supported");
    }
    sizeArray.forEach(function(value) {
      if (!isNumber(value) || !isInteger$1(value) || value < 0) {
        throw new TypeError("Invalid size, must contain positive integers (size: " + format$2(sizeArray) + ")");
      }
    });
    var m = copy ? this.clone() : this;
    return _resize(m, sizeArray[0], sizeArray[1], defaultValue);
  };
  function _resize(matrix2, rows, columns, defaultValue) {
    var value = defaultValue || 0;
    var eq = equalScalar2;
    var zero = 0;
    if (isString(matrix2._datatype)) {
      eq = typed2.find(equalScalar2, [matrix2._datatype, matrix2._datatype]) || equalScalar2;
      zero = typed2.convert(0, matrix2._datatype);
      value = typed2.convert(value, matrix2._datatype);
    }
    var ins = !eq(value, zero);
    var r = matrix2._size[0];
    var c10 = matrix2._size[1];
    var i3, j, k2;
    if (columns > c10) {
      for (j = c10; j < columns; j++) {
        matrix2._ptr[j] = matrix2._values.length;
        if (ins) {
          for (i3 = 0; i3 < r; i3++) {
            matrix2._values.push(value);
            matrix2._index.push(i3);
          }
        }
      }
      matrix2._ptr[columns] = matrix2._values.length;
    } else if (columns < c10) {
      matrix2._ptr.splice(columns + 1, c10 - columns);
      matrix2._values.splice(matrix2._ptr[columns], matrix2._values.length);
      matrix2._index.splice(matrix2._ptr[columns], matrix2._index.length);
    }
    c10 = columns;
    if (rows > r) {
      if (ins) {
        var n = 0;
        for (j = 0; j < c10; j++) {
          matrix2._ptr[j] = matrix2._ptr[j] + n;
          k2 = matrix2._ptr[j + 1] + n;
          var p = 0;
          for (i3 = r; i3 < rows; i3++, p++) {
            matrix2._values.splice(k2 + p, 0, value);
            matrix2._index.splice(k2 + p, 0, i3);
            n++;
          }
        }
        matrix2._ptr[c10] = matrix2._values.length;
      }
    } else if (rows < r) {
      var d10 = 0;
      for (j = 0; j < c10; j++) {
        matrix2._ptr[j] = matrix2._ptr[j] - d10;
        var k0 = matrix2._ptr[j];
        var k1 = matrix2._ptr[j + 1] - d10;
        for (k2 = k0; k2 < k1; k2++) {
          i3 = matrix2._index[k2];
          if (i3 > rows - 1) {
            matrix2._values.splice(k2, 1);
            matrix2._index.splice(k2, 1);
            d10++;
          }
        }
      }
      matrix2._ptr[j] = matrix2._values.length;
    }
    matrix2._size[0] = rows;
    matrix2._size[1] = columns;
    return matrix2;
  }
  SparseMatrix2.prototype.reshape = function(sizes, copy) {
    if (!isArray(sizes)) {
      throw new TypeError("Array expected");
    }
    if (sizes.length !== 2) {
      throw new Error("Sparse matrices can only be reshaped in two dimensions");
    }
    sizes.forEach(function(value) {
      if (!isNumber(value) || !isInteger$1(value) || value <= -2 || value === 0) {
        throw new TypeError("Invalid size, must contain positive integers or -1 (size: " + format$2(sizes) + ")");
      }
    });
    var currentLength = this._size[0] * this._size[1];
    sizes = processSizesWildcard(sizes, currentLength);
    var newLength = sizes[0] * sizes[1];
    if (currentLength !== newLength) {
      throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
    }
    var m = copy ? this.clone() : this;
    if (this._size[0] === sizes[0] && this._size[1] === sizes[1]) {
      return m;
    }
    var colIndex = [];
    for (var i3 = 0; i3 < m._ptr.length; i3++) {
      for (var j = 0; j < m._ptr[i3 + 1] - m._ptr[i3]; j++) {
        colIndex.push(i3);
      }
    }
    var values = m._values.slice();
    var rowIndex = m._index.slice();
    for (var _i = 0; _i < m._index.length; _i++) {
      var r1 = rowIndex[_i];
      var c12 = colIndex[_i];
      var flat = r1 * m._size[1] + c12;
      colIndex[_i] = flat % sizes[1];
      rowIndex[_i] = Math.floor(flat / sizes[1]);
    }
    m._values.length = 0;
    m._index.length = 0;
    m._ptr.length = sizes[1] + 1;
    m._size = sizes.slice();
    for (var _i2 = 0; _i2 < m._ptr.length; _i2++) {
      m._ptr[_i2] = 0;
    }
    for (var h = 0; h < values.length; h++) {
      var _i3 = rowIndex[h];
      var _j = colIndex[h];
      var v = values[h];
      var k2 = _getValueIndex(_i3, m._ptr[_j], m._ptr[_j + 1], m._index);
      _insert(k2, _i3, _j, v, m._values, m._index, m._ptr);
    }
    return m;
  };
  SparseMatrix2.prototype.clone = function() {
    var m = new SparseMatrix2({
      values: this._values ? clone$1(this._values) : void 0,
      index: clone$1(this._index),
      ptr: clone$1(this._ptr),
      size: clone$1(this._size),
      datatype: this._datatype
    });
    return m;
  };
  SparseMatrix2.prototype.size = function() {
    return this._size.slice(0);
  };
  SparseMatrix2.prototype.map = function(callback, skipZeros) {
    if (!this._values) {
      throw new Error("Cannot invoke map on a Pattern only matrix");
    }
    var me = this;
    var rows = this._size[0];
    var columns = this._size[1];
    var args = maxArgumentCount(callback);
    var invoke = function invoke2(v, i3, j) {
      if (args === 1)
        return callback(v);
      if (args === 2)
        return callback(v, [i3, j]);
      return callback(v, [i3, j], me);
    };
    return _map(this, 0, rows - 1, 0, columns - 1, invoke, skipZeros);
  };
  function _map(matrix2, minRow, maxRow, minColumn, maxColumn, callback, skipZeros) {
    var values = [];
    var index2 = [];
    var ptr = [];
    var eq = equalScalar2;
    var zero = 0;
    if (isString(matrix2._datatype)) {
      eq = typed2.find(equalScalar2, [matrix2._datatype, matrix2._datatype]) || equalScalar2;
      zero = typed2.convert(0, matrix2._datatype);
    }
    var invoke = function invoke2(v, x, y) {
      v = callback(v, x, y);
      if (!eq(v, zero)) {
        values.push(v);
        index2.push(x);
      }
    };
    for (var j = minColumn; j <= maxColumn; j++) {
      ptr.push(values.length);
      var k0 = matrix2._ptr[j];
      var k1 = matrix2._ptr[j + 1];
      if (skipZeros) {
        for (var k2 = k0; k2 < k1; k2++) {
          var i3 = matrix2._index[k2];
          if (i3 >= minRow && i3 <= maxRow) {
            invoke(matrix2._values[k2], i3 - minRow, j - minColumn);
          }
        }
      } else {
        var _values = {};
        for (var _k = k0; _k < k1; _k++) {
          var _i4 = matrix2._index[_k];
          _values[_i4] = matrix2._values[_k];
        }
        for (var _i5 = minRow; _i5 <= maxRow; _i5++) {
          var value = _i5 in _values ? _values[_i5] : 0;
          invoke(value, _i5 - minRow, j - minColumn);
        }
      }
    }
    ptr.push(values.length);
    return new SparseMatrix2({
      values,
      index: index2,
      ptr,
      size: [maxRow - minRow + 1, maxColumn - minColumn + 1]
    });
  }
  SparseMatrix2.prototype.forEach = function(callback, skipZeros) {
    if (!this._values) {
      throw new Error("Cannot invoke forEach on a Pattern only matrix");
    }
    var me = this;
    var rows = this._size[0];
    var columns = this._size[1];
    for (var j = 0; j < columns; j++) {
      var k0 = this._ptr[j];
      var k1 = this._ptr[j + 1];
      if (skipZeros) {
        for (var k2 = k0; k2 < k1; k2++) {
          var i3 = this._index[k2];
          callback(this._values[k2], [i3, j], me);
        }
      } else {
        var values = {};
        for (var _k2 = k0; _k2 < k1; _k2++) {
          var _i6 = this._index[_k2];
          values[_i6] = this._values[_k2];
        }
        for (var _i7 = 0; _i7 < rows; _i7++) {
          var value = _i7 in values ? values[_i7] : 0;
          callback(value, [_i7, j], me);
        }
      }
    }
  };
  SparseMatrix2.prototype[Symbol.iterator] = function* () {
    if (!this._values) {
      throw new Error("Cannot iterate a Pattern only matrix");
    }
    var columns = this._size[1];
    for (var j = 0; j < columns; j++) {
      var k0 = this._ptr[j];
      var k1 = this._ptr[j + 1];
      for (var k2 = k0; k2 < k1; k2++) {
        var i3 = this._index[k2];
        yield {
          value: this._values[k2],
          index: [i3, j]
        };
      }
    }
  };
  SparseMatrix2.prototype.toArray = function() {
    return _toArray(this._values, this._index, this._ptr, this._size, true);
  };
  SparseMatrix2.prototype.valueOf = function() {
    return _toArray(this._values, this._index, this._ptr, this._size, false);
  };
  function _toArray(values, index2, ptr, size2, copy) {
    var rows = size2[0];
    var columns = size2[1];
    var a = [];
    var i3, j;
    for (i3 = 0; i3 < rows; i3++) {
      a[i3] = [];
      for (j = 0; j < columns; j++) {
        a[i3][j] = 0;
      }
    }
    for (j = 0; j < columns; j++) {
      var k0 = ptr[j];
      var k1 = ptr[j + 1];
      for (var k2 = k0; k2 < k1; k2++) {
        i3 = index2[k2];
        a[i3][j] = values ? copy ? clone$1(values[k2]) : values[k2] : 1;
      }
    }
    return a;
  }
  SparseMatrix2.prototype.format = function(options) {
    var rows = this._size[0];
    var columns = this._size[1];
    var density = this.density();
    var str = "Sparse Matrix [" + format$2(rows, options) + " x " + format$2(columns, options) + "] density: " + format$2(density, options) + "\n";
    for (var j = 0; j < columns; j++) {
      var k0 = this._ptr[j];
      var k1 = this._ptr[j + 1];
      for (var k2 = k0; k2 < k1; k2++) {
        var i3 = this._index[k2];
        str += "\n    (" + format$2(i3, options) + ", " + format$2(j, options) + ") ==> " + (this._values ? format$2(this._values[k2], options) : "X");
      }
    }
    return str;
  };
  SparseMatrix2.prototype.toString = function() {
    return format$2(this.toArray());
  };
  SparseMatrix2.prototype.toJSON = function() {
    return {
      mathjs: "SparseMatrix",
      values: this._values,
      index: this._index,
      ptr: this._ptr,
      size: this._size,
      datatype: this._datatype
    };
  };
  SparseMatrix2.prototype.diagonal = function(k2) {
    if (k2) {
      if (isBigNumber(k2)) {
        k2 = k2.toNumber();
      }
      if (!isNumber(k2) || !isInteger$1(k2)) {
        throw new TypeError("The parameter k must be an integer number");
      }
    } else {
      k2 = 0;
    }
    var kSuper = k2 > 0 ? k2 : 0;
    var kSub = k2 < 0 ? -k2 : 0;
    var rows = this._size[0];
    var columns = this._size[1];
    var n = Math.min(rows - kSub, columns - kSuper);
    var values = [];
    var index2 = [];
    var ptr = [];
    ptr[0] = 0;
    for (var j = kSuper; j < columns && values.length < n; j++) {
      var k0 = this._ptr[j];
      var k1 = this._ptr[j + 1];
      for (var x = k0; x < k1; x++) {
        var i3 = this._index[x];
        if (i3 === j - kSuper + kSub) {
          values.push(this._values[x]);
          index2[values.length - 1] = i3 - kSub;
          break;
        }
      }
    }
    ptr.push(values.length);
    return new SparseMatrix2({
      values,
      index: index2,
      ptr,
      size: [n, 1]
    });
  };
  SparseMatrix2.fromJSON = function(json) {
    return new SparseMatrix2(json);
  };
  SparseMatrix2.diagonal = function(size2, value, k2, defaultValue, datatype) {
    if (!isArray(size2)) {
      throw new TypeError("Array expected, size parameter");
    }
    if (size2.length !== 2) {
      throw new Error("Only two dimensions matrix are supported");
    }
    size2 = size2.map(function(s) {
      if (isBigNumber(s)) {
        s = s.toNumber();
      }
      if (!isNumber(s) || !isInteger$1(s) || s < 1) {
        throw new Error("Size values must be positive integers");
      }
      return s;
    });
    if (k2) {
      if (isBigNumber(k2)) {
        k2 = k2.toNumber();
      }
      if (!isNumber(k2) || !isInteger$1(k2)) {
        throw new TypeError("The parameter k must be an integer number");
      }
    } else {
      k2 = 0;
    }
    var eq = equalScalar2;
    var zero = 0;
    if (isString(datatype)) {
      eq = typed2.find(equalScalar2, [datatype, datatype]) || equalScalar2;
      zero = typed2.convert(0, datatype);
    }
    var kSuper = k2 > 0 ? k2 : 0;
    var kSub = k2 < 0 ? -k2 : 0;
    var rows = size2[0];
    var columns = size2[1];
    var n = Math.min(rows - kSub, columns - kSuper);
    var _value;
    if (isArray(value)) {
      if (value.length !== n) {
        throw new Error("Invalid value array length");
      }
      _value = function _value2(i4) {
        return value[i4];
      };
    } else if (isMatrix(value)) {
      var ms = value.size();
      if (ms.length !== 1 || ms[0] !== n) {
        throw new Error("Invalid matrix length");
      }
      _value = function _value2(i4) {
        return value.get([i4]);
      };
    } else {
      _value = function _value2() {
        return value;
      };
    }
    var values = [];
    var index2 = [];
    var ptr = [];
    for (var j = 0; j < columns; j++) {
      ptr.push(values.length);
      var i3 = j - kSuper;
      if (i3 >= 0 && i3 < n) {
        var v = _value(i3);
        if (!eq(v, zero)) {
          index2.push(i3 + kSub);
          values.push(v);
        }
      }
    }
    ptr.push(values.length);
    return new SparseMatrix2({
      values,
      index: index2,
      ptr,
      size: [rows, columns]
    });
  };
  SparseMatrix2.prototype.swapRows = function(i3, j) {
    if (!isNumber(i3) || !isInteger$1(i3) || !isNumber(j) || !isInteger$1(j)) {
      throw new Error("Row index must be positive integers");
    }
    if (this._size.length !== 2) {
      throw new Error("Only two dimensional matrix is supported");
    }
    validateIndex(i3, this._size[0]);
    validateIndex(j, this._size[0]);
    SparseMatrix2._swapRows(i3, j, this._size[1], this._values, this._index, this._ptr);
    return this;
  };
  SparseMatrix2._forEachRow = function(j, values, index2, ptr, callback) {
    var k0 = ptr[j];
    var k1 = ptr[j + 1];
    for (var k2 = k0; k2 < k1; k2++) {
      callback(index2[k2], values[k2]);
    }
  };
  SparseMatrix2._swapRows = function(x, y, columns, values, index2, ptr) {
    for (var j = 0; j < columns; j++) {
      var k0 = ptr[j];
      var k1 = ptr[j + 1];
      var kx = _getValueIndex(x, k0, k1, index2);
      var ky = _getValueIndex(y, k0, k1, index2);
      if (kx < k1 && ky < k1 && index2[kx] === x && index2[ky] === y) {
        if (values) {
          var v = values[kx];
          values[kx] = values[ky];
          values[ky] = v;
        }
        continue;
      }
      if (kx < k1 && index2[kx] === x && (ky >= k1 || index2[ky] !== y)) {
        var vx = values ? values[kx] : void 0;
        index2.splice(ky, 0, y);
        if (values) {
          values.splice(ky, 0, vx);
        }
        index2.splice(ky <= kx ? kx + 1 : kx, 1);
        if (values) {
          values.splice(ky <= kx ? kx + 1 : kx, 1);
        }
        continue;
      }
      if (ky < k1 && index2[ky] === y && (kx >= k1 || index2[kx] !== x)) {
        var vy = values ? values[ky] : void 0;
        index2.splice(kx, 0, x);
        if (values) {
          values.splice(kx, 0, vy);
        }
        index2.splice(kx <= ky ? ky + 1 : ky, 1);
        if (values) {
          values.splice(kx <= ky ? ky + 1 : ky, 1);
        }
      }
    }
  };
  return SparseMatrix2;
}, {
  isClass: true
});
var name$b = "bignumber";
var dependencies$b = ["typed", "BigNumber"];
var createBignumber = /* @__PURE__ */ factory(name$b, dependencies$b, (_ref) => {
  var {
    typed: typed2,
    BigNumber: BigNumber2
  } = _ref;
  return typed2("bignumber", {
    "": function _() {
      return new BigNumber2(0);
    },
    number: function number2(x) {
      return new BigNumber2(x + "");
    },
    string: function string2(x) {
      var wordSizeSuffixMatch = x.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
      if (wordSizeSuffixMatch) {
        var size2 = wordSizeSuffixMatch[2];
        var n = BigNumber2(wordSizeSuffixMatch[1]);
        var twoPowSize = new BigNumber2(2).pow(Number(size2));
        if (n.gt(twoPowSize.sub(1))) {
          throw new SyntaxError('String "'.concat(x, '" is out of range'));
        }
        var twoPowSizeSubOne = new BigNumber2(2).pow(Number(size2) - 1);
        if (n.gte(twoPowSizeSubOne)) {
          return n.sub(twoPowSize);
        } else {
          return n;
        }
      }
      return new BigNumber2(x);
    },
    BigNumber: function BigNumber3(x) {
      return x;
    },
    Fraction: function Fraction2(x) {
      return new BigNumber2(x.n).div(x.d).times(x.s);
    },
    null: function _null2(x) {
      return new BigNumber2(0);
    },
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$c = "complex";
var dependencies$c = ["typed", "Complex"];
var createComplex = /* @__PURE__ */ factory(name$c, dependencies$c, (_ref) => {
  var {
    typed: typed2,
    Complex: Complex2
  } = _ref;
  return typed2("complex", {
    "": function _() {
      return Complex2.ZERO;
    },
    number: function number2(x) {
      return new Complex2(x, 0);
    },
    "number, number": function numberNumber(re2, im2) {
      return new Complex2(re2, im2);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(re2, im2) {
      return new Complex2(re2.toNumber(), im2.toNumber());
    },
    Fraction: function Fraction2(x) {
      return new Complex2(x.valueOf(), 0);
    },
    Complex: function Complex3(x) {
      return x.clone();
    },
    string: function string2(x) {
      return Complex2(x);
    },
    null: function _null2(x) {
      return Complex2(0);
    },
    Object: function Object2(x) {
      if ("re" in x && "im" in x) {
        return new Complex2(x.re, x.im);
      }
      if ("r" in x && "phi" in x || "abs" in x && "arg" in x) {
        return new Complex2(x);
      }
      throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)");
    },
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$d = "fraction";
var dependencies$d = ["typed", "Fraction"];
var createFraction = /* @__PURE__ */ factory(name$d, dependencies$d, (_ref) => {
  var {
    typed: typed2,
    Fraction: Fraction2
  } = _ref;
  return typed2("fraction", {
    number: function number2(x) {
      if (!isFinite(x) || isNaN(x)) {
        throw new Error(x + " cannot be represented as a fraction");
      }
      return new Fraction2(x);
    },
    string: function string2(x) {
      return new Fraction2(x);
    },
    "number, number": function numberNumber(numerator, denominator) {
      return new Fraction2(numerator, denominator);
    },
    null: function _null2(x) {
      return new Fraction2(0);
    },
    BigNumber: function BigNumber2(x) {
      return new Fraction2(x.toString());
    },
    Fraction: function Fraction3(x) {
      return x;
    },
    Object: function Object2(x) {
      return new Fraction2(x);
    },
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$e = "matrix";
var dependencies$e = ["typed", "Matrix", "DenseMatrix", "SparseMatrix"];
var createMatrix = /* @__PURE__ */ factory(name$e, dependencies$e, (_ref) => {
  var {
    typed: typed2,
    Matrix: Matrix2,
    DenseMatrix: DenseMatrix2,
    SparseMatrix: SparseMatrix2
  } = _ref;
  return typed2(name$e, {
    "": function _() {
      return _create([]);
    },
    string: function string2(format2) {
      return _create([], format2);
    },
    "string, string": function stringString(format2, datatype) {
      return _create([], format2, datatype);
    },
    Array: function Array2(data) {
      return _create(data);
    },
    Matrix: function Matrix3(data) {
      return _create(data, data.storage());
    },
    "Array | Matrix, string": _create,
    "Array | Matrix, string, string": _create
  });
  function _create(data, format2, datatype) {
    if (format2 === "dense" || format2 === "default" || format2 === void 0) {
      return new DenseMatrix2(data, datatype);
    }
    if (format2 === "sparse") {
      return new SparseMatrix2(data, datatype);
    }
    throw new TypeError("Unknown matrix type " + JSON.stringify(format2) + ".");
  }
});
var name$f = "matrixFromFunction";
var dependencies$f = ["typed", "matrix", "isZero"];
var createMatrixFromFunction = /* @__PURE__ */ factory(name$f, dependencies$f, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    isZero: isZero2
  } = _ref;
  return typed2(name$f, {
    "Array | Matrix, function, string, string": function ArrayMatrixFunctionStringString(size2, fn, format2, datatype) {
      return _create(size2, fn, format2, datatype);
    },
    "Array | Matrix, function, string": function ArrayMatrixFunctionString(size2, fn, format2) {
      return _create(size2, fn, format2);
    },
    "Matrix, function": function MatrixFunction(size2, fn) {
      return _create(size2, fn, "dense");
    },
    "Array, function": function ArrayFunction(size2, fn) {
      return _create(size2, fn, "dense").toArray();
    },
    "Array | Matrix, string, function": function ArrayMatrixStringFunction(size2, format2, fn) {
      return _create(size2, fn, format2);
    },
    "Array | Matrix, string, string, function": function ArrayMatrixStringStringFunction(size2, format2, datatype, fn) {
      return _create(size2, fn, format2, datatype);
    }
  });
  function _create(size2, fn, format2, datatype) {
    var m;
    if (datatype !== void 0) {
      m = matrix2(format2, datatype);
    } else {
      m = matrix2(format2);
    }
    m.resize(size2);
    m.forEach(function(_, index2) {
      var val = fn(index2);
      if (isZero2(val))
        return;
      m.set(index2, val);
    });
    return m;
  }
});
var name$g = "matrixFromRows";
var dependencies$g = ["typed", "matrix", "flatten", "size"];
var createMatrixFromRows = /* @__PURE__ */ factory(name$g, dependencies$g, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    flatten: flatten2,
    size: size2
  } = _ref;
  return typed2(name$g, {
    "...Array": function Array2(arr) {
      return _createArray(arr);
    },
    "...Matrix": function Matrix2(arr) {
      return matrix2(_createArray(arr.map((m) => m.toArray())));
    }
  });
  function _createArray(arr) {
    if (arr.length === 0)
      throw new TypeError("At least one row is needed to construct a matrix.");
    var N = checkVectorTypeAndReturnLength(arr[0]);
    var result = [];
    for (var row2 of arr) {
      var rowLength = checkVectorTypeAndReturnLength(row2);
      if (rowLength !== N) {
        throw new TypeError("The vectors had different length: " + (N | 0) + " \u2260 " + (rowLength | 0));
      }
      result.push(flatten2(row2));
    }
    return result;
  }
  function checkVectorTypeAndReturnLength(vec) {
    var s = size2(vec);
    if (s.length === 1) {
      return s[0];
    } else if (s.length === 2) {
      if (s[0] === 1) {
        return s[1];
      } else if (s[1] === 1) {
        return s[0];
      } else {
        throw new TypeError("At least one of the arguments is not a vector.");
      }
    } else {
      throw new TypeError("Only one- or two-dimensional vectors are supported.");
    }
  }
});
var name$h = "matrixFromColumns";
var dependencies$h = ["typed", "matrix", "flatten", "size"];
var createMatrixFromColumns = /* @__PURE__ */ factory(name$h, dependencies$h, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    flatten: flatten2,
    size: size2
  } = _ref;
  return typed2(name$h, {
    "...Array": function Array2(arr) {
      return _createArray(arr);
    },
    "...Matrix": function Matrix2(arr) {
      return matrix2(_createArray(arr.map((m) => m.toArray())));
    }
  });
  function _createArray(arr) {
    if (arr.length === 0)
      throw new TypeError("At least one column is needed to construct a matrix.");
    var N = checkVectorTypeAndReturnLength(arr[0]);
    var result = [];
    for (var i3 = 0; i3 < N; i3++) {
      result[i3] = [];
    }
    for (var col of arr) {
      var colLength = checkVectorTypeAndReturnLength(col);
      if (colLength !== N) {
        throw new TypeError("The vectors had different length: " + (N | 0) + " \u2260 " + (colLength | 0));
      }
      var f2 = flatten2(col);
      for (var _i = 0; _i < N; _i++) {
        result[_i].push(f2[_i]);
      }
    }
    return result;
  }
  function checkVectorTypeAndReturnLength(vec) {
    var s = size2(vec);
    if (s.length === 1) {
      return s[0];
    } else if (s.length === 2) {
      if (s[0] === 1) {
        return s[1];
      } else if (s[1] === 1) {
        return s[0];
      } else {
        throw new TypeError("At least one of the arguments is not a vector.");
      }
    } else {
      throw new TypeError("Only one- or two-dimensional vectors are supported.");
    }
  }
});
var name$i = "splitUnit";
var dependencies$i = ["typed"];
var createSplitUnit = /* @__PURE__ */ factory(name$i, dependencies$i, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$i, {
    "Unit, Array": function UnitArray(unit2, parts) {
      return unit2.splitUnit(parts);
    }
  });
});
var name$j = "unaryMinus";
var dependencies$j = ["typed"];
var createUnaryMinus = /* @__PURE__ */ factory(name$j, dependencies$j, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$j, {
    number: unaryMinusNumber,
    "Complex | BigNumber | Fraction": (x) => x.neg(),
    Unit: typed2.referToSelf((self) => (x) => {
      var res = x.clone();
      res.value = typed2.find(self, res.valueType())(x.value);
      return res;
    }),
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$k = "unaryPlus";
var dependencies$k = ["typed", "config", "BigNumber"];
var createUnaryPlus = /* @__PURE__ */ factory(name$k, dependencies$k, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    BigNumber: BigNumber2
  } = _ref;
  return typed2(name$k, {
    number: unaryPlusNumber,
    Complex: function Complex2(x) {
      return x;
    },
    BigNumber: function BigNumber3(x) {
      return x;
    },
    Fraction: function Fraction2(x) {
      return x;
    },
    Unit: function Unit2(x) {
      return x.clone();
    },
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self)),
    "boolean | string": function booleanString(x) {
      return config2.number === "BigNumber" ? new BigNumber2(+x) : +x;
    }
  });
});
var name$l = "abs";
var dependencies$l = ["typed"];
var createAbs = /* @__PURE__ */ factory(name$l, dependencies$l, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$l, {
    number: absNumber,
    "Complex | BigNumber | Fraction | Unit": (x) => x.abs(),
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$m = "addScalar";
var dependencies$m = ["typed"];
var createAddScalar = /* @__PURE__ */ factory(name$m, dependencies$m, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$m, {
    "number, number": addNumber,
    "Complex, Complex": function ComplexComplex(x, y) {
      return x.add(y);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.plus(y);
    },
    "Fraction, Fraction": function FractionFraction(x, y) {
      return x.add(y);
    },
    "Unit, Unit": typed2.referToSelf((self) => (x, y) => {
      if (x.value === null || x.value === void 0) {
        throw new Error("Parameter x contains a unit with undefined value");
      }
      if (y.value === null || y.value === void 0) {
        throw new Error("Parameter y contains a unit with undefined value");
      }
      if (!x.equalBase(y))
        throw new Error("Units do not match");
      var res = x.clone();
      res.value = typed2.find(self, [res.valueType(), y.valueType()])(res.value, y.value);
      res.fixPrefix = false;
      return res;
    })
  });
});
var name$n = "cbrt";
var dependencies$n = ["config", "typed", "isNegative", "unaryMinus", "matrix", "Complex", "BigNumber", "Fraction"];
var createCbrt = /* @__PURE__ */ factory(name$n, dependencies$n, (_ref) => {
  var {
    config: config2,
    typed: typed2,
    isNegative: isNegative2,
    unaryMinus: unaryMinus2,
    matrix: matrix2,
    Complex: Complex2,
    BigNumber: BigNumber2,
    Fraction: Fraction2
  } = _ref;
  return typed2(name$n, {
    number: cbrtNumber,
    Complex: _cbrtComplex,
    "Complex, boolean": _cbrtComplex,
    BigNumber: function BigNumber3(x) {
      return x.cbrt();
    },
    Unit: _cbrtUnit
  });
  function _cbrtComplex(x, allRoots) {
    var arg3 = x.arg() / 3;
    var abs2 = x.abs();
    var principal = new Complex2(cbrtNumber(abs2), 0).mul(new Complex2(0, arg3).exp());
    if (allRoots) {
      var all2 = [principal, new Complex2(cbrtNumber(abs2), 0).mul(new Complex2(0, arg3 + Math.PI * 2 / 3).exp()), new Complex2(cbrtNumber(abs2), 0).mul(new Complex2(0, arg3 - Math.PI * 2 / 3).exp())];
      return config2.matrix === "Array" ? all2 : matrix2(all2);
    } else {
      return principal;
    }
  }
  function _cbrtUnit(x) {
    if (x.value && isComplex(x.value)) {
      var result = x.clone();
      result.value = 1;
      result = result.pow(1 / 3);
      result.value = _cbrtComplex(x.value);
      return result;
    } else {
      var negate = isNegative2(x.value);
      if (negate) {
        x.value = unaryMinus2(x.value);
      }
      var third;
      if (isBigNumber(x.value)) {
        third = new BigNumber2(1).div(3);
      } else if (isFraction(x.value)) {
        third = new Fraction2(1, 3);
      } else {
        third = 1 / 3;
      }
      var _result = x.pow(third);
      if (negate) {
        _result.value = unaryMinus2(_result.value);
      }
      return _result;
    }
  }
});
var name$o = "cube";
var dependencies$o = ["typed"];
var createCube = /* @__PURE__ */ factory(name$o, dependencies$o, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$o, {
    number: cubeNumber,
    Complex: function Complex2(x) {
      return x.mul(x).mul(x);
    },
    BigNumber: function BigNumber2(x) {
      return x.times(x).times(x);
    },
    Fraction: function Fraction2(x) {
      return x.pow(3);
    },
    Unit: function Unit2(x) {
      return x.pow(3);
    }
  });
});
var name$p = "exp";
var dependencies$p = ["typed"];
var createExp = /* @__PURE__ */ factory(name$p, dependencies$p, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$p, {
    number: expNumber,
    Complex: function Complex2(x) {
      return x.exp();
    },
    BigNumber: function BigNumber2(x) {
      return x.exp();
    }
  });
});
var name$q = "expm1";
var dependencies$q = ["typed", "Complex"];
var createExpm1 = /* @__PURE__ */ factory(name$q, dependencies$q, (_ref) => {
  var {
    typed: typed2,
    Complex: _Complex
  } = _ref;
  return typed2(name$q, {
    number: expm1Number,
    Complex: function Complex2(x) {
      var r = Math.exp(x.re);
      return new _Complex(r * Math.cos(x.im) - 1, r * Math.sin(x.im));
    },
    BigNumber: function BigNumber2(x) {
      return x.exp().minus(1);
    }
  });
});
var name$r = "matAlgo01xDSid";
var dependencies$r = ["typed"];
var createMatAlgo01xDSid = /* @__PURE__ */ factory(name$r, dependencies$r, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return function algorithm1(denseMatrix, sparseMatrix, callback, inverse) {
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
    var dt = typeof adt === "string" && adt === bdt ? adt : void 0;
    var cf2 = dt ? typed2.find(callback, [dt, dt]) : callback;
    var i3, j;
    var cdata = [];
    for (i3 = 0; i3 < rows; i3++) {
      cdata[i3] = [];
    }
    var x = [];
    var w = [];
    for (j = 0; j < columns; j++) {
      var mark = j + 1;
      for (var k0 = bptr[j], k1 = bptr[j + 1], k2 = k0; k2 < k1; k2++) {
        i3 = bindex[k2];
        x[i3] = inverse ? cf2(bvalues[k2], adata[i3][j]) : cf2(adata[i3][j], bvalues[k2]);
        w[i3] = mark;
      }
      for (i3 = 0; i3 < rows; i3++) {
        if (w[i3] === mark) {
          cdata[i3][j] = x[i3];
        } else {
          cdata[i3][j] = adata[i3][j];
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
var name$s = "matAlgo04xSidSid";
var dependencies$s = ["typed", "equalScalar"];
var createMatAlgo04xSidSid = /* @__PURE__ */ factory(name$s, dependencies$s, (_ref) => {
  var {
    typed: typed2,
    equalScalar: equalScalar2
  } = _ref;
  return function matAlgo04xSidSid(a, b10, callback) {
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var asize = a._size;
    var adt = a._datatype;
    var bvalues = b10._values;
    var bindex = b10._index;
    var bptr = b10._ptr;
    var bsize = b10._size;
    var bdt = b10._datatype;
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var eq = equalScalar2;
    var zero = 0;
    var cf2 = callback;
    if (typeof adt === "string" && adt === bdt) {
      dt = adt;
      eq = typed2.find(equalScalar2, [dt, dt]);
      zero = typed2.convert(0, dt);
      cf2 = typed2.find(callback, [dt, dt]);
    }
    var cvalues = avalues && bvalues ? [] : void 0;
    var cindex = [];
    var cptr = [];
    var xa = avalues && bvalues ? [] : void 0;
    var xb = avalues && bvalues ? [] : void 0;
    var wa = [];
    var wb = [];
    var i3, j, k2, k0, k1;
    for (j = 0; j < columns; j++) {
      cptr[j] = cindex.length;
      var mark = j + 1;
      for (k0 = aptr[j], k1 = aptr[j + 1], k2 = k0; k2 < k1; k2++) {
        i3 = aindex[k2];
        cindex.push(i3);
        wa[i3] = mark;
        if (xa) {
          xa[i3] = avalues[k2];
        }
      }
      for (k0 = bptr[j], k1 = bptr[j + 1], k2 = k0; k2 < k1; k2++) {
        i3 = bindex[k2];
        if (wa[i3] === mark) {
          if (xa) {
            var v = cf2(xa[i3], bvalues[k2]);
            if (!eq(v, zero)) {
              xa[i3] = v;
            } else {
              wa[i3] = null;
            }
          }
        } else {
          cindex.push(i3);
          wb[i3] = mark;
          if (xb) {
            xb[i3] = bvalues[k2];
          }
        }
      }
      if (xa && xb) {
        k2 = cptr[j];
        while (k2 < cindex.length) {
          i3 = cindex[k2];
          if (wa[i3] === mark) {
            cvalues[k2] = xa[i3];
            k2++;
          } else if (wb[i3] === mark) {
            cvalues[k2] = xb[i3];
            k2++;
          } else {
            cindex.splice(k2, 1);
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
var name$t = "matAlgo10xSids";
var dependencies$t = ["typed", "DenseMatrix"];
var createMatAlgo10xSids = /* @__PURE__ */ factory(name$t, dependencies$t, (_ref) => {
  var {
    typed: typed2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  return function matAlgo10xSids(s, b10, callback, inverse) {
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
    var cf2 = callback;
    if (typeof adt === "string") {
      dt = adt;
      b10 = typed2.convert(b10, dt);
      cf2 = typed2.find(callback, [dt, dt]);
    }
    var cdata = [];
    var x = [];
    var w = [];
    for (var j = 0; j < columns; j++) {
      var mark = j + 1;
      for (var k0 = aptr[j], k1 = aptr[j + 1], k2 = k0; k2 < k1; k2++) {
        var r = aindex[k2];
        x[r] = avalues[k2];
        w[r] = mark;
      }
      for (var i3 = 0; i3 < rows; i3++) {
        if (j === 0) {
          cdata[i3] = [];
        }
        if (w[i3] === mark) {
          cdata[i3][j] = inverse ? cf2(b10, x[i3]) : cf2(x[i3], b10);
        } else {
          cdata[i3][j] = b10;
        }
      }
    }
    return new DenseMatrix2({
      data: cdata,
      size: [rows, columns],
      datatype: dt
    });
  };
});
var name$u = "gcd";
var dependencies$u = ["typed", "matrix", "equalScalar", "BigNumber", "DenseMatrix", "concat"];
var gcdTypes = "number | BigNumber | Fraction | Matrix | Array";
var gcdManyTypesSignature = "".concat(gcdTypes, ", ").concat(gcdTypes, ", ...").concat(gcdTypes);
function is1d(array) {
  return !array.some((element) => Array.isArray(element));
}
var createGcd = /* @__PURE__ */ factory(name$u, dependencies$u, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    BigNumber: BigNumber2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo01xDSid = createMatAlgo01xDSid({
    typed: typed2
  });
  var matAlgo04xSidSid = createMatAlgo04xSidSid({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo10xSids = createMatAlgo10xSids({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$u, {
    "number, number": gcdNumber,
    "BigNumber, BigNumber": _gcdBigNumber,
    "Fraction, Fraction": (x, y) => x.gcd(y)
  }, matrixAlgorithmSuite({
    SS: matAlgo04xSidSid,
    DS: matAlgo01xDSid,
    Ss: matAlgo10xSids
  }), {
    [gcdManyTypesSignature]: typed2.referToSelf((self) => (a, b10, args) => {
      var res = self(a, b10);
      for (var i3 = 0; i3 < args.length; i3++) {
        res = self(res, args[i3]);
      }
      return res;
    }),
    Array: typed2.referToSelf((self) => (array) => {
      if (array.length === 1 && Array.isArray(array[0]) && is1d(array[0])) {
        return self(...array[0]);
      }
      if (is1d(array)) {
        return self(...array);
      }
      throw new ArgumentsError("gcd() supports only 1d matrices!");
    }),
    Matrix: typed2.referToSelf((self) => (matrix3) => {
      return self(matrix3.toArray());
    })
  });
  function _gcdBigNumber(a, b10) {
    if (!a.isInt() || !b10.isInt()) {
      throw new Error("Parameters in function gcd must be integer numbers");
    }
    var zero = new BigNumber2(0);
    while (!b10.isZero()) {
      var r = a.mod(b10);
      a = b10;
      b10 = r;
    }
    return a.lt(zero) ? a.neg() : a;
  }
});
var name$v = "matAlgo02xDS0";
var dependencies$v = ["typed", "equalScalar"];
var createMatAlgo02xDS0 = /* @__PURE__ */ factory(name$v, dependencies$v, (_ref) => {
  var {
    typed: typed2,
    equalScalar: equalScalar2
  } = _ref;
  return function matAlgo02xDS0(denseMatrix, sparseMatrix, callback, inverse) {
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
    var eq = equalScalar2;
    var zero = 0;
    var cf2 = callback;
    if (typeof adt === "string" && adt === bdt) {
      dt = adt;
      eq = typed2.find(equalScalar2, [dt, dt]);
      zero = typed2.convert(0, dt);
      cf2 = typed2.find(callback, [dt, dt]);
    }
    var cvalues = [];
    var cindex = [];
    var cptr = [];
    for (var j = 0; j < columns; j++) {
      cptr[j] = cindex.length;
      for (var k0 = bptr[j], k1 = bptr[j + 1], k2 = k0; k2 < k1; k2++) {
        var i3 = bindex[k2];
        var cij = inverse ? cf2(bvalues[k2], adata[i3][j]) : cf2(adata[i3][j], bvalues[k2]);
        if (!eq(cij, zero)) {
          cindex.push(i3);
          cvalues.push(cij);
        }
      }
    }
    cptr[columns] = cindex.length;
    return sparseMatrix.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [rows, columns],
      datatype: dt
    });
  };
});
var name$w = "matAlgo06xS0S0";
var dependencies$w = ["typed", "equalScalar"];
var createMatAlgo06xS0S0 = /* @__PURE__ */ factory(name$w, dependencies$w, (_ref) => {
  var {
    typed: typed2,
    equalScalar: equalScalar2
  } = _ref;
  return function matAlgo06xS0S0(a, b10, callback) {
    var avalues = a._values;
    var asize = a._size;
    var adt = a._datatype;
    var bvalues = b10._values;
    var bsize = b10._size;
    var bdt = b10._datatype;
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var eq = equalScalar2;
    var zero = 0;
    var cf2 = callback;
    if (typeof adt === "string" && adt === bdt) {
      dt = adt;
      eq = typed2.find(equalScalar2, [dt, dt]);
      zero = typed2.convert(0, dt);
      cf2 = typed2.find(callback, [dt, dt]);
    }
    var cvalues = avalues && bvalues ? [] : void 0;
    var cindex = [];
    var cptr = [];
    var x = cvalues ? [] : void 0;
    var w = [];
    var u = [];
    for (var j = 0; j < columns; j++) {
      cptr[j] = cindex.length;
      var mark = j + 1;
      scatter(a, j, w, x, u, mark, cindex, cf2);
      scatter(b10, j, w, x, u, mark, cindex, cf2);
      if (x) {
        var k2 = cptr[j];
        while (k2 < cindex.length) {
          var i3 = cindex[k2];
          if (u[i3] === mark) {
            var v = x[i3];
            if (!eq(v, zero)) {
              cvalues.push(v);
              k2++;
            } else {
              cindex.splice(k2, 1);
            }
          } else {
            cindex.splice(k2, 1);
          }
        }
      } else {
        var p = cptr[j];
        while (p < cindex.length) {
          var r = cindex[p];
          if (u[r] !== mark) {
            cindex.splice(p, 1);
          } else {
            p++;
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
var name$x = "lcm";
var dependencies$x = ["typed", "matrix", "equalScalar", "concat"];
var createLcm = /* @__PURE__ */ factory(name$x, dependencies$x, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    concat: concat2
  } = _ref;
  var matAlgo02xDS0 = createMatAlgo02xDS0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo06xS0S0 = createMatAlgo06xS0S0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  var lcmTypes = "number | BigNumber | Fraction | Matrix | Array";
  var lcmManySignature = {};
  lcmManySignature["".concat(lcmTypes, ", ").concat(lcmTypes, ", ...").concat(lcmTypes)] = typed2.referToSelf((self) => (a, b10, args) => {
    var res = self(a, b10);
    for (var i3 = 0; i3 < args.length; i3++) {
      res = self(res, args[i3]);
    }
    return res;
  });
  return typed2(name$x, {
    "number, number": lcmNumber,
    "BigNumber, BigNumber": _lcmBigNumber,
    "Fraction, Fraction": (x, y) => x.lcm(y)
  }, matrixAlgorithmSuite({
    SS: matAlgo06xS0S0,
    DS: matAlgo02xDS0,
    Ss: matAlgo11xS0s
  }), lcmManySignature);
  function _lcmBigNumber(a, b10) {
    if (!a.isInt() || !b10.isInt()) {
      throw new Error("Parameters in function lcm must be integer numbers");
    }
    if (a.isZero()) {
      return a;
    }
    if (b10.isZero()) {
      return b10;
    }
    var prod2 = a.times(b10);
    while (!b10.isZero()) {
      var t2 = b10;
      b10 = a.mod(t2);
      a = t2;
    }
    return prod2.div(a).abs();
  }
});
var name$y = "log10";
var dependencies$y = ["typed", "config", "Complex"];
var createLog10 = /* @__PURE__ */ factory(name$y, dependencies$y, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    Complex: _Complex
  } = _ref;
  return typed2(name$y, {
    number: function number2(x) {
      if (x >= 0 || config2.predictable) {
        return log10Number(x);
      } else {
        return new _Complex(x, 0).log().div(Math.LN10);
      }
    },
    Complex: function Complex2(x) {
      return new _Complex(x).log().div(Math.LN10);
    },
    BigNumber: function BigNumber2(x) {
      if (!x.isNegative() || config2.predictable) {
        return x.log();
      } else {
        return new _Complex(x.toNumber(), 0).log().div(Math.LN10);
      }
    },
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$z = "log2";
var dependencies$z = ["typed", "config", "Complex"];
var createLog2 = /* @__PURE__ */ factory(name$z, dependencies$z, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    Complex: Complex2
  } = _ref;
  return typed2(name$z, {
    number: function number2(x) {
      if (x >= 0 || config2.predictable) {
        return log2Number(x);
      } else {
        return _log2Complex(new Complex2(x, 0));
      }
    },
    Complex: _log2Complex,
    BigNumber: function BigNumber2(x) {
      if (!x.isNegative() || config2.predictable) {
        return x.log(2);
      } else {
        return _log2Complex(new Complex2(x.toNumber(), 0));
      }
    },
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
  function _log2Complex(x) {
    var newX = Math.sqrt(x.re * x.re + x.im * x.im);
    return new Complex2(Math.log2 ? Math.log2(newX) : Math.log(newX) / Math.LN2, Math.atan2(x.im, x.re) / Math.LN2);
  }
});
var name$A = "mod";
var dependencies$A = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"];
var createMod = /* @__PURE__ */ factory(name$A, dependencies$A, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo02xDS0 = createMatAlgo02xDS0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed: typed2
  });
  var matAlgo05xSfSf = createMatAlgo05xSfSf({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$A, {
    "number, number": modNumber,
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      if (y.isNeg()) {
        throw new Error("Cannot calculate mod for a negative divisor");
      }
      return y.isZero() ? x : x.mod(y);
    },
    "Fraction, Fraction": function FractionFraction(x, y) {
      if (y.compare(0) < 0) {
        throw new Error("Cannot calculate mod for a negative divisor");
      }
      return x.compare(0) >= 0 ? x.mod(y) : x.mod(y).add(y).mod(y);
    }
  }, matrixAlgorithmSuite({
    SS: matAlgo05xSfSf,
    DS: matAlgo03xDSf,
    SD: matAlgo02xDS0,
    Ss: matAlgo11xS0s,
    sS: matAlgo12xSfs
  }));
});
var name$B = "multiplyScalar";
var dependencies$B = ["typed"];
var createMultiplyScalar = /* @__PURE__ */ factory(name$B, dependencies$B, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2("multiplyScalar", {
    "number, number": multiplyNumber,
    "Complex, Complex": function ComplexComplex(x, y) {
      return x.mul(y);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.times(y);
    },
    "Fraction, Fraction": function FractionFraction(x, y) {
      return x.mul(y);
    },
    "number | Fraction | BigNumber | Complex, Unit": (x, y) => y.multiply(x),
    "Unit, number | Fraction | BigNumber | Complex | Unit": (x, y) => x.multiply(y)
  });
});
var name$C = "multiply";
var dependencies$C = ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"];
var createMultiply = /* @__PURE__ */ factory(name$C, dependencies$C, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    addScalar: addScalar2,
    multiplyScalar: multiplyScalar2,
    equalScalar: equalScalar2,
    dot: dot2
  } = _ref;
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed: typed2
  });
  function _validateMatrixDimensions(size1, size2) {
    switch (size1.length) {
      case 1:
        switch (size2.length) {
          case 1:
            if (size1[0] !== size2[0]) {
              throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
            }
            break;
          case 2:
            if (size1[0] !== size2[0]) {
              throw new RangeError("Dimension mismatch in multiplication. Vector length (" + size1[0] + ") must match Matrix rows (" + size2[0] + ")");
            }
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + size2.length + " dimensions)");
        }
        break;
      case 2:
        switch (size2.length) {
          case 1:
            if (size1[1] !== size2[0]) {
              throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + size1[1] + ") must match Vector length (" + size2[0] + ")");
            }
            break;
          case 2:
            if (size1[1] !== size2[0]) {
              throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + size1[1] + ") must match Matrix B rows (" + size2[0] + ")");
            }
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + size2.length + " dimensions)");
        }
        break;
      default:
        throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + size1.length + " dimensions)");
    }
  }
  function _multiplyVectorVector(a, b10, n) {
    if (n === 0) {
      throw new Error("Cannot multiply two empty vectors");
    }
    return dot2(a, b10);
  }
  function _multiplyVectorMatrix(a, b10) {
    if (b10.storage() !== "dense") {
      throw new Error("Support for SparseMatrix not implemented");
    }
    return _multiplyVectorDenseMatrix(a, b10);
  }
  function _multiplyVectorDenseMatrix(a, b10) {
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    var bdata = b10._data;
    var bsize = b10._size;
    var bdt = b10._datatype;
    var alength = asize[0];
    var bcolumns = bsize[1];
    var dt;
    var af = addScalar2;
    var mf = multiplyScalar2;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      dt = adt;
      af = typed2.find(addScalar2, [dt, dt]);
      mf = typed2.find(multiplyScalar2, [dt, dt]);
    }
    var c10 = [];
    for (var j = 0; j < bcolumns; j++) {
      var sum2 = mf(adata[0], bdata[0][j]);
      for (var i3 = 1; i3 < alength; i3++) {
        sum2 = af(sum2, mf(adata[i3], bdata[i3][j]));
      }
      c10[j] = sum2;
    }
    return a.createDenseMatrix({
      data: c10,
      size: [bcolumns],
      datatype: dt
    });
  }
  var _multiplyMatrixVector = typed2("_multiplyMatrixVector", {
    "DenseMatrix, any": _multiplyDenseMatrixVector,
    "SparseMatrix, any": _multiplySparseMatrixVector
  });
  var _multiplyMatrixMatrix = typed2("_multiplyMatrixMatrix", {
    "DenseMatrix, DenseMatrix": _multiplyDenseMatrixDenseMatrix,
    "DenseMatrix, SparseMatrix": _multiplyDenseMatrixSparseMatrix,
    "SparseMatrix, DenseMatrix": _multiplySparseMatrixDenseMatrix,
    "SparseMatrix, SparseMatrix": _multiplySparseMatrixSparseMatrix
  });
  function _multiplyDenseMatrixVector(a, b10) {
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    var bdata = b10._data;
    var bdt = b10._datatype;
    var arows = asize[0];
    var acolumns = asize[1];
    var dt;
    var af = addScalar2;
    var mf = multiplyScalar2;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      dt = adt;
      af = typed2.find(addScalar2, [dt, dt]);
      mf = typed2.find(multiplyScalar2, [dt, dt]);
    }
    var c10 = [];
    for (var i3 = 0; i3 < arows; i3++) {
      var row2 = adata[i3];
      var sum2 = mf(row2[0], bdata[0]);
      for (var j = 1; j < acolumns; j++) {
        sum2 = af(sum2, mf(row2[j], bdata[j]));
      }
      c10[i3] = sum2;
    }
    return a.createDenseMatrix({
      data: c10,
      size: [arows],
      datatype: dt
    });
  }
  function _multiplyDenseMatrixDenseMatrix(a, b10) {
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    var bdata = b10._data;
    var bsize = b10._size;
    var bdt = b10._datatype;
    var arows = asize[0];
    var acolumns = asize[1];
    var bcolumns = bsize[1];
    var dt;
    var af = addScalar2;
    var mf = multiplyScalar2;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      dt = adt;
      af = typed2.find(addScalar2, [dt, dt]);
      mf = typed2.find(multiplyScalar2, [dt, dt]);
    }
    var c10 = [];
    for (var i3 = 0; i3 < arows; i3++) {
      var row2 = adata[i3];
      c10[i3] = [];
      for (var j = 0; j < bcolumns; j++) {
        var sum2 = mf(row2[0], bdata[0][j]);
        for (var x = 1; x < acolumns; x++) {
          sum2 = af(sum2, mf(row2[x], bdata[x][j]));
        }
        c10[i3][j] = sum2;
      }
    }
    return a.createDenseMatrix({
      data: c10,
      size: [arows, bcolumns],
      datatype: dt
    });
  }
  function _multiplyDenseMatrixSparseMatrix(a, b10) {
    var adata = a._data;
    var asize = a._size;
    var adt = a._datatype;
    var bvalues = b10._values;
    var bindex = b10._index;
    var bptr = b10._ptr;
    var bsize = b10._size;
    var bdt = b10._datatype;
    if (!bvalues) {
      throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
    }
    var arows = asize[0];
    var bcolumns = bsize[1];
    var dt;
    var af = addScalar2;
    var mf = multiplyScalar2;
    var eq = equalScalar2;
    var zero = 0;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      dt = adt;
      af = typed2.find(addScalar2, [dt, dt]);
      mf = typed2.find(multiplyScalar2, [dt, dt]);
      eq = typed2.find(equalScalar2, [dt, dt]);
      zero = typed2.convert(0, dt);
    }
    var cvalues = [];
    var cindex = [];
    var cptr = [];
    var c10 = b10.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, bcolumns],
      datatype: dt
    });
    for (var jb = 0; jb < bcolumns; jb++) {
      cptr[jb] = cindex.length;
      var kb0 = bptr[jb];
      var kb1 = bptr[jb + 1];
      if (kb1 > kb0) {
        var last = 0;
        for (var i3 = 0; i3 < arows; i3++) {
          var mark = i3 + 1;
          var cij = void 0;
          for (var kb = kb0; kb < kb1; kb++) {
            var ib = bindex[kb];
            if (last !== mark) {
              cij = mf(adata[i3][ib], bvalues[kb]);
              last = mark;
            } else {
              cij = af(cij, mf(adata[i3][ib], bvalues[kb]));
            }
          }
          if (last === mark && !eq(cij, zero)) {
            cindex.push(i3);
            cvalues.push(cij);
          }
        }
      }
    }
    cptr[bcolumns] = cindex.length;
    return c10;
  }
  function _multiplySparseMatrixVector(a, b10) {
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var adt = a._datatype;
    if (!avalues) {
      throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    }
    var bdata = b10._data;
    var bdt = b10._datatype;
    var arows = a._size[0];
    var brows = b10._size[0];
    var cvalues = [];
    var cindex = [];
    var cptr = [];
    var dt;
    var af = addScalar2;
    var mf = multiplyScalar2;
    var eq = equalScalar2;
    var zero = 0;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      dt = adt;
      af = typed2.find(addScalar2, [dt, dt]);
      mf = typed2.find(multiplyScalar2, [dt, dt]);
      eq = typed2.find(equalScalar2, [dt, dt]);
      zero = typed2.convert(0, dt);
    }
    var x = [];
    var w = [];
    cptr[0] = 0;
    for (var ib = 0; ib < brows; ib++) {
      var vbi = bdata[ib];
      if (!eq(vbi, zero)) {
        for (var ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
          var ia = aindex[ka];
          if (!w[ia]) {
            w[ia] = true;
            cindex.push(ia);
            x[ia] = mf(vbi, avalues[ka]);
          } else {
            x[ia] = af(x[ia], mf(vbi, avalues[ka]));
          }
        }
      }
    }
    for (var p1 = cindex.length, p = 0; p < p1; p++) {
      var ic = cindex[p];
      cvalues[p] = x[ic];
    }
    cptr[1] = cindex.length;
    return a.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, 1],
      datatype: dt
    });
  }
  function _multiplySparseMatrixDenseMatrix(a, b10) {
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var adt = a._datatype;
    if (!avalues) {
      throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    }
    var bdata = b10._data;
    var bdt = b10._datatype;
    var arows = a._size[0];
    var brows = b10._size[0];
    var bcolumns = b10._size[1];
    var dt;
    var af = addScalar2;
    var mf = multiplyScalar2;
    var eq = equalScalar2;
    var zero = 0;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      dt = adt;
      af = typed2.find(addScalar2, [dt, dt]);
      mf = typed2.find(multiplyScalar2, [dt, dt]);
      eq = typed2.find(equalScalar2, [dt, dt]);
      zero = typed2.convert(0, dt);
    }
    var cvalues = [];
    var cindex = [];
    var cptr = [];
    var c10 = a.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, bcolumns],
      datatype: dt
    });
    var x = [];
    var w = [];
    for (var jb = 0; jb < bcolumns; jb++) {
      cptr[jb] = cindex.length;
      var mark = jb + 1;
      for (var ib = 0; ib < brows; ib++) {
        var vbij = bdata[ib][jb];
        if (!eq(vbij, zero)) {
          for (var ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
            var ia = aindex[ka];
            if (w[ia] !== mark) {
              w[ia] = mark;
              cindex.push(ia);
              x[ia] = mf(vbij, avalues[ka]);
            } else {
              x[ia] = af(x[ia], mf(vbij, avalues[ka]));
            }
          }
        }
      }
      for (var p0 = cptr[jb], p1 = cindex.length, p = p0; p < p1; p++) {
        var ic = cindex[p];
        cvalues[p] = x[ic];
      }
    }
    cptr[bcolumns] = cindex.length;
    return c10;
  }
  function _multiplySparseMatrixSparseMatrix(a, b10) {
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var adt = a._datatype;
    var bvalues = b10._values;
    var bindex = b10._index;
    var bptr = b10._ptr;
    var bdt = b10._datatype;
    var arows = a._size[0];
    var bcolumns = b10._size[1];
    var values = avalues && bvalues;
    var dt;
    var af = addScalar2;
    var mf = multiplyScalar2;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      dt = adt;
      af = typed2.find(addScalar2, [dt, dt]);
      mf = typed2.find(multiplyScalar2, [dt, dt]);
    }
    var cvalues = values ? [] : void 0;
    var cindex = [];
    var cptr = [];
    var c10 = a.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [arows, bcolumns],
      datatype: dt
    });
    var x = values ? [] : void 0;
    var w = [];
    var ka, ka0, ka1, kb, kb0, kb1, ia, ib;
    for (var jb = 0; jb < bcolumns; jb++) {
      cptr[jb] = cindex.length;
      var mark = jb + 1;
      for (kb0 = bptr[jb], kb1 = bptr[jb + 1], kb = kb0; kb < kb1; kb++) {
        ib = bindex[kb];
        if (values) {
          for (ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
            ia = aindex[ka];
            if (w[ia] !== mark) {
              w[ia] = mark;
              cindex.push(ia);
              x[ia] = mf(bvalues[kb], avalues[ka]);
            } else {
              x[ia] = af(x[ia], mf(bvalues[kb], avalues[ka]));
            }
          }
        } else {
          for (ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++) {
            ia = aindex[ka];
            if (w[ia] !== mark) {
              w[ia] = mark;
              cindex.push(ia);
            }
          }
        }
      }
      if (values) {
        for (var p0 = cptr[jb], p1 = cindex.length, p = p0; p < p1; p++) {
          var ic = cindex[p];
          cvalues[p] = x[ic];
        }
      }
    }
    cptr[bcolumns] = cindex.length;
    return c10;
  }
  return typed2(name$C, multiplyScalar2, {
    "Array, Array": typed2.referTo("Matrix, Matrix", (selfMM) => (x, y) => {
      _validateMatrixDimensions(arraySize(x), arraySize(y));
      var m = selfMM(matrix2(x), matrix2(y));
      return isMatrix(m) ? m.valueOf() : m;
    }),
    "Matrix, Matrix": function MatrixMatrix(x, y) {
      var xsize = x.size();
      var ysize = y.size();
      _validateMatrixDimensions(xsize, ysize);
      if (xsize.length === 1) {
        if (ysize.length === 1) {
          return _multiplyVectorVector(x, y, xsize[0]);
        }
        return _multiplyVectorMatrix(x, y);
      }
      if (ysize.length === 1) {
        return _multiplyMatrixVector(x, y);
      }
      return _multiplyMatrixMatrix(x, y);
    },
    "Matrix, Array": typed2.referTo("Matrix,Matrix", (selfMM) => (x, y) => selfMM(x, matrix2(y))),
    "Array, Matrix": typed2.referToSelf((self) => (x, y) => {
      return self(matrix2(x, y.storage()), y);
    }),
    "SparseMatrix, any": function SparseMatrixAny(x, y) {
      return matAlgo11xS0s(x, y, multiplyScalar2, false);
    },
    "DenseMatrix, any": function DenseMatrixAny(x, y) {
      return matAlgo14xDs(x, y, multiplyScalar2, false);
    },
    "any, SparseMatrix": function anySparseMatrix(x, y) {
      return matAlgo11xS0s(y, x, multiplyScalar2, true);
    },
    "any, DenseMatrix": function anyDenseMatrix(x, y) {
      return matAlgo14xDs(y, x, multiplyScalar2, true);
    },
    "Array, any": function ArrayAny(x, y) {
      return matAlgo14xDs(matrix2(x), y, multiplyScalar2, false).valueOf();
    },
    "any, Array": function anyArray(x, y) {
      return matAlgo14xDs(matrix2(y), x, multiplyScalar2, true).valueOf();
    },
    "any, any": multiplyScalar2,
    "any, any, ...any": typed2.referToSelf((self) => (x, y, rest) => {
      var result = self(x, y);
      for (var i3 = 0; i3 < rest.length; i3++) {
        result = self(result, rest[i3]);
      }
      return result;
    })
  });
});
var name$D = "nthRoot";
var dependencies$D = ["typed", "matrix", "equalScalar", "BigNumber", "concat"];
var createNthRoot = /* @__PURE__ */ factory(name$D, dependencies$D, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    BigNumber: _BigNumber,
    concat: concat2
  } = _ref;
  var matAlgo01xDSid = createMatAlgo01xDSid({
    typed: typed2
  });
  var matAlgo02xDS0 = createMatAlgo02xDS0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo06xS0S0 = createMatAlgo06xS0S0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  function complexErr() {
    throw new Error("Complex number not supported in function nthRoot. Use nthRoots instead.");
  }
  return typed2(name$D, {
    number: nthRootNumber,
    "number, number": nthRootNumber,
    BigNumber: (x) => _bigNthRoot(x, new _BigNumber(2)),
    "BigNumber, BigNumber": _bigNthRoot,
    Complex: complexErr,
    "Complex, number": complexErr,
    Array: typed2.referTo("DenseMatrix,number", (selfDn) => (x) => selfDn(matrix2(x), 2).valueOf()),
    DenseMatrix: typed2.referTo("DenseMatrix,number", (selfDn) => (x) => selfDn(x, 2)),
    SparseMatrix: typed2.referTo("SparseMatrix,number", (selfSn) => (x) => selfSn(x, 2)),
    "SparseMatrix, SparseMatrix": typed2.referToSelf((self) => (x, y) => {
      if (y.density() === 1) {
        return matAlgo06xS0S0(x, y, self);
      } else {
        throw new Error("Root must be non-zero");
      }
    }),
    "DenseMatrix, SparseMatrix": typed2.referToSelf((self) => (x, y) => {
      if (y.density() === 1) {
        return matAlgo01xDSid(x, y, self, false);
      } else {
        throw new Error("Root must be non-zero");
      }
    }),
    "Array, SparseMatrix": typed2.referTo("DenseMatrix,SparseMatrix", (selfDS) => (x, y) => selfDS(matrix2(x), y)),
    "number | BigNumber, SparseMatrix": typed2.referToSelf((self) => (x, y) => {
      if (y.density() === 1) {
        return matAlgo11xS0s(y, x, self, true);
      } else {
        throw new Error("Root must be non-zero");
      }
    })
  }, matrixAlgorithmSuite({
    scalar: "number | BigNumber",
    SD: matAlgo02xDS0,
    Ss: matAlgo11xS0s,
    sS: false
  }));
  function _bigNthRoot(a, root) {
    var precision = _BigNumber.precision;
    var Big = _BigNumber.clone({
      precision: precision + 2
    });
    var zero = new _BigNumber(0);
    var one = new Big(1);
    var inv2 = root.isNegative();
    if (inv2) {
      root = root.neg();
    }
    if (root.isZero()) {
      throw new Error("Root must be non-zero");
    }
    if (a.isNegative() && !root.abs().mod(2).equals(1)) {
      throw new Error("Root must be odd when a is negative.");
    }
    if (a.isZero()) {
      return inv2 ? new Big(Infinity) : 0;
    }
    if (!a.isFinite()) {
      return inv2 ? zero : a;
    }
    var x = a.abs().pow(one.div(root));
    x = a.isNeg() ? x.neg() : x;
    return new _BigNumber((inv2 ? one.div(x) : x).toPrecision(precision));
  }
});
var name$E = "sign";
var dependencies$E = ["typed", "BigNumber", "Fraction", "complex"];
var createSign = /* @__PURE__ */ factory(name$E, dependencies$E, (_ref) => {
  var {
    typed: typed2,
    BigNumber: _BigNumber,
    complex: complex2,
    Fraction: _Fraction
  } = _ref;
  return typed2(name$E, {
    number: signNumber,
    Complex: function Complex2(x) {
      return x.im === 0 ? complex2(signNumber(x.re)) : x.sign();
    },
    BigNumber: function BigNumber2(x) {
      return new _BigNumber(x.cmp(0));
    },
    Fraction: function Fraction2(x) {
      return new _Fraction(x.s, 1);
    },
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self)),
    Unit: typed2.referToSelf((self) => (x) => {
      if (!x._isDerived() && x.units[0].unit.offset !== 0) {
        throw new TypeError("sign is ambiguous for units with offset");
      }
      return typed2.find(self, x.valueType())(x.value);
    })
  });
});
var name$F = "sqrt";
var dependencies$F = ["config", "typed", "Complex"];
var createSqrt = /* @__PURE__ */ factory(name$F, dependencies$F, (_ref) => {
  var {
    config: config2,
    typed: typed2,
    Complex: Complex2
  } = _ref;
  return typed2("sqrt", {
    number: _sqrtNumber,
    Complex: function Complex3(x) {
      return x.sqrt();
    },
    BigNumber: function BigNumber2(x) {
      if (!x.isNegative() || config2.predictable) {
        return x.sqrt();
      } else {
        return _sqrtNumber(x.toNumber());
      }
    },
    Unit: function Unit2(x) {
      return x.pow(0.5);
    }
  });
  function _sqrtNumber(x) {
    if (isNaN(x)) {
      return NaN;
    } else if (x >= 0 || config2.predictable) {
      return Math.sqrt(x);
    } else {
      return new Complex2(x, 0).sqrt();
    }
  }
});
var name$G = "square";
var dependencies$G = ["typed"];
var createSquare = /* @__PURE__ */ factory(name$G, dependencies$G, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$G, {
    number: squareNumber,
    Complex: function Complex2(x) {
      return x.mul(x);
    },
    BigNumber: function BigNumber2(x) {
      return x.times(x);
    },
    Fraction: function Fraction2(x) {
      return x.mul(x);
    },
    Unit: function Unit2(x) {
      return x.pow(2);
    }
  });
});
var name$H = "subtract";
var dependencies$H = ["typed", "matrix", "equalScalar", "addScalar", "unaryMinus", "DenseMatrix", "concat"];
var createSubtract = /* @__PURE__ */ factory(name$H, dependencies$H, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    addScalar: addScalar2,
    unaryMinus: unaryMinus2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo01xDSid = createMatAlgo01xDSid({
    typed: typed2
  });
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed: typed2
  });
  var matAlgo05xSfSf = createMatAlgo05xSfSf({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo10xSids = createMatAlgo10xSids({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$H, {
    "number, number": (x, y) => x - y,
    "Complex, Complex": (x, y) => x.sub(y),
    "BigNumber, BigNumber": (x, y) => x.minus(y),
    "Fraction, Fraction": (x, y) => x.sub(y),
    "Unit, Unit": typed2.referToSelf((self) => (x, y) => {
      if (x.value === null) {
        throw new Error("Parameter x contains a unit with undefined value");
      }
      if (y.value === null) {
        throw new Error("Parameter y contains a unit with undefined value");
      }
      if (!x.equalBase(y)) {
        throw new Error("Units do not match");
      }
      var res = x.clone();
      res.value = typed2.find(self, [res.valueType(), y.valueType()])(res.value, y.value);
      res.fixPrefix = false;
      return res;
    })
  }, matrixAlgorithmSuite({
    SS: matAlgo05xSfSf,
    DS: matAlgo01xDSid,
    SD: matAlgo03xDSf,
    Ss: matAlgo12xSfs,
    sS: matAlgo10xSids
  }));
});
var name$I = "xgcd";
var dependencies$I = ["typed", "config", "matrix", "BigNumber"];
var createXgcd = /* @__PURE__ */ factory(name$I, dependencies$I, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    matrix: matrix2,
    BigNumber: BigNumber2
  } = _ref;
  return typed2(name$I, {
    "number, number": function numberNumber(a, b10) {
      var res = xgcdNumber(a, b10);
      return config2.matrix === "Array" ? res : matrix2(res);
    },
    "BigNumber, BigNumber": _xgcdBigNumber
  });
  function _xgcdBigNumber(a, b10) {
    var t2;
    var q2;
    var r;
    var zero = new BigNumber2(0);
    var one = new BigNumber2(1);
    var x = zero;
    var lastx = one;
    var y = one;
    var lasty = zero;
    if (!a.isInt() || !b10.isInt()) {
      throw new Error("Parameters in function xgcd must be integer numbers");
    }
    while (!b10.isZero()) {
      q2 = a.div(b10).floor();
      r = a.mod(b10);
      t2 = x;
      x = lastx.minus(q2.times(x));
      lastx = t2;
      t2 = y;
      y = lasty.minus(q2.times(y));
      lasty = t2;
      a = b10;
      b10 = r;
    }
    var res;
    if (a.lt(zero)) {
      res = [a.neg(), lastx.neg(), lasty.neg()];
    } else {
      res = [a, !a.isZero() ? lastx : 0, lasty];
    }
    return config2.matrix === "Array" ? res : matrix2(res);
  }
});
var name$J = "invmod";
var dependencies$J = ["typed", "config", "BigNumber", "xgcd", "equal", "smaller", "mod", "add", "isInteger"];
var createInvmod = /* @__PURE__ */ factory(name$J, dependencies$J, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    BigNumber: BigNumber2,
    xgcd: xgcd2,
    equal: equal2,
    smaller: smaller2,
    mod: mod2,
    add: add2,
    isInteger: isInteger2
  } = _ref;
  return typed2(name$J, {
    "number, number": invmod2,
    "BigNumber, BigNumber": invmod2
  });
  function invmod2(a, b10) {
    if (!isInteger2(a) || !isInteger2(b10))
      throw new Error("Parameters in function invmod must be integer numbers");
    a = mod2(a, b10);
    if (equal2(b10, 0))
      throw new Error("Divisor must be non zero");
    var res = xgcd2(a, b10);
    res = res.valueOf();
    var [gcd2, inv2] = res;
    if (!equal2(gcd2, BigNumber2(1)))
      return NaN;
    inv2 = mod2(inv2, b10);
    if (smaller2(inv2, BigNumber2(0)))
      inv2 = add2(inv2, b10);
    return inv2;
  }
});
var name$K = "matAlgo09xS0Sf";
var dependencies$K = ["typed", "equalScalar"];
var createMatAlgo09xS0Sf = /* @__PURE__ */ factory(name$K, dependencies$K, (_ref) => {
  var {
    typed: typed2,
    equalScalar: equalScalar2
  } = _ref;
  return function matAlgo09xS0Sf(a, b10, callback) {
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var asize = a._size;
    var adt = a._datatype;
    var bvalues = b10._values;
    var bindex = b10._index;
    var bptr = b10._ptr;
    var bsize = b10._size;
    var bdt = b10._datatype;
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var eq = equalScalar2;
    var zero = 0;
    var cf2 = callback;
    if (typeof adt === "string" && adt === bdt) {
      dt = adt;
      eq = typed2.find(equalScalar2, [dt, dt]);
      zero = typed2.convert(0, dt);
      cf2 = typed2.find(callback, [dt, dt]);
    }
    var cvalues = avalues && bvalues ? [] : void 0;
    var cindex = [];
    var cptr = [];
    var x = cvalues ? [] : void 0;
    var w = [];
    var i3, j, k2, k0, k1;
    for (j = 0; j < columns; j++) {
      cptr[j] = cindex.length;
      var mark = j + 1;
      if (x) {
        for (k0 = bptr[j], k1 = bptr[j + 1], k2 = k0; k2 < k1; k2++) {
          i3 = bindex[k2];
          w[i3] = mark;
          x[i3] = bvalues[k2];
        }
      }
      for (k0 = aptr[j], k1 = aptr[j + 1], k2 = k0; k2 < k1; k2++) {
        i3 = aindex[k2];
        if (x) {
          var vb = w[i3] === mark ? x[i3] : zero;
          var vc = cf2(avalues[k2], vb);
          if (!eq(vc, zero)) {
            cindex.push(i3);
            cvalues.push(vc);
          }
        } else {
          cindex.push(i3);
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
var name$L = "dotMultiply";
var dependencies$L = ["typed", "matrix", "equalScalar", "multiplyScalar", "concat"];
var createDotMultiply = /* @__PURE__ */ factory(name$L, dependencies$L, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    multiplyScalar: multiplyScalar2,
    concat: concat2
  } = _ref;
  var matAlgo02xDS0 = createMatAlgo02xDS0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo09xS0Sf = createMatAlgo09xS0Sf({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$L, matrixAlgorithmSuite({
    elop: multiplyScalar2,
    SS: matAlgo09xS0Sf,
    DS: matAlgo02xDS0,
    Ss: matAlgo11xS0s
  }));
});
function bitAndBigNumber(x, y) {
  if (x.isFinite() && !x.isInteger() || y.isFinite() && !y.isInteger()) {
    throw new Error("Integers expected in function bitAnd");
  }
  var BigNumber2 = x.constructor;
  if (x.isNaN() || y.isNaN()) {
    return new BigNumber2(NaN);
  }
  if (x.isZero() || y.eq(-1) || x.eq(y)) {
    return x;
  }
  if (y.isZero() || x.eq(-1)) {
    return y;
  }
  if (!x.isFinite() || !y.isFinite()) {
    if (!x.isFinite() && !y.isFinite()) {
      if (x.isNegative() === y.isNegative()) {
        return x;
      }
      return new BigNumber2(0);
    }
    if (!x.isFinite()) {
      if (y.isNegative()) {
        return x;
      }
      if (x.isNegative()) {
        return new BigNumber2(0);
      }
      return y;
    }
    if (!y.isFinite()) {
      if (x.isNegative()) {
        return y;
      }
      if (y.isNegative()) {
        return new BigNumber2(0);
      }
      return x;
    }
  }
  return bitwise(x, y, function(a, b10) {
    return a & b10;
  });
}
function bitNotBigNumber(x) {
  if (x.isFinite() && !x.isInteger()) {
    throw new Error("Integer expected in function bitNot");
  }
  var BigNumber2 = x.constructor;
  var prevPrec = BigNumber2.precision;
  BigNumber2.config({
    precision: 1e9
  });
  var result = x.plus(new BigNumber2(1));
  result.s = -result.s || null;
  BigNumber2.config({
    precision: prevPrec
  });
  return result;
}
function bitOrBigNumber(x, y) {
  if (x.isFinite() && !x.isInteger() || y.isFinite() && !y.isInteger()) {
    throw new Error("Integers expected in function bitOr");
  }
  var BigNumber2 = x.constructor;
  if (x.isNaN() || y.isNaN()) {
    return new BigNumber2(NaN);
  }
  var negOne = new BigNumber2(-1);
  if (x.isZero() || y.eq(negOne) || x.eq(y)) {
    return y;
  }
  if (y.isZero() || x.eq(negOne)) {
    return x;
  }
  if (!x.isFinite() || !y.isFinite()) {
    if (!x.isFinite() && !x.isNegative() && y.isNegative() || x.isNegative() && !y.isNegative() && !y.isFinite()) {
      return negOne;
    }
    if (x.isNegative() && y.isNegative()) {
      return x.isFinite() ? x : y;
    }
    return x.isFinite() ? y : x;
  }
  return bitwise(x, y, function(a, b10) {
    return a | b10;
  });
}
function bitwise(x, y, func) {
  var BigNumber2 = x.constructor;
  var xBits, yBits;
  var xSign = +(x.s < 0);
  var ySign = +(y.s < 0);
  if (xSign) {
    xBits = decCoefficientToBinaryString(bitNotBigNumber(x));
    for (var i3 = 0; i3 < xBits.length; ++i3) {
      xBits[i3] ^= 1;
    }
  } else {
    xBits = decCoefficientToBinaryString(x);
  }
  if (ySign) {
    yBits = decCoefficientToBinaryString(bitNotBigNumber(y));
    for (var _i = 0; _i < yBits.length; ++_i) {
      yBits[_i] ^= 1;
    }
  } else {
    yBits = decCoefficientToBinaryString(y);
  }
  var minBits, maxBits, minSign;
  if (xBits.length <= yBits.length) {
    minBits = xBits;
    maxBits = yBits;
    minSign = xSign;
  } else {
    minBits = yBits;
    maxBits = xBits;
    minSign = ySign;
  }
  var shortLen = minBits.length;
  var longLen = maxBits.length;
  var expFuncVal = func(xSign, ySign) ^ 1;
  var outVal = new BigNumber2(expFuncVal ^ 1);
  var twoPower = new BigNumber2(1);
  var two = new BigNumber2(2);
  var prevPrec = BigNumber2.precision;
  BigNumber2.config({
    precision: 1e9
  });
  while (shortLen > 0) {
    if (func(minBits[--shortLen], maxBits[--longLen]) === expFuncVal) {
      outVal = outVal.plus(twoPower);
    }
    twoPower = twoPower.times(two);
  }
  while (longLen > 0) {
    if (func(minSign, maxBits[--longLen]) === expFuncVal) {
      outVal = outVal.plus(twoPower);
    }
    twoPower = twoPower.times(two);
  }
  BigNumber2.config({
    precision: prevPrec
  });
  if (expFuncVal === 0) {
    outVal.s = -outVal.s;
  }
  return outVal;
}
function decCoefficientToBinaryString(x) {
  var a = x.d;
  var r = a[0] + "";
  for (var i3 = 1; i3 < a.length; ++i3) {
    var s = a[i3] + "";
    for (var z = 7 - s.length; z--; ) {
      s = "0" + s;
    }
    r += s;
  }
  var j = r.length;
  while (r.charAt(j) === "0") {
    j--;
  }
  var xe = x.e;
  var str = r.slice(0, j + 1 || 1);
  var strL = str.length;
  if (xe > 0) {
    if (++xe > strL) {
      xe -= strL;
      while (xe--) {
        str += "0";
      }
    } else if (xe < strL) {
      str = str.slice(0, xe) + "." + str.slice(xe);
    }
  }
  var arr = [0];
  for (var _i2 = 0; _i2 < str.length; ) {
    var arrL = arr.length;
    while (arrL--) {
      arr[arrL] *= 10;
    }
    arr[0] += parseInt(str.charAt(_i2++));
    for (var _j = 0; _j < arr.length; ++_j) {
      if (arr[_j] > 1) {
        if (arr[_j + 1] === null || arr[_j + 1] === void 0) {
          arr[_j + 1] = 0;
        }
        arr[_j + 1] += arr[_j] >> 1;
        arr[_j] &= 1;
      }
    }
  }
  return arr.reverse();
}
function bitXor(x, y) {
  if (x.isFinite() && !x.isInteger() || y.isFinite() && !y.isInteger()) {
    throw new Error("Integers expected in function bitXor");
  }
  var BigNumber2 = x.constructor;
  if (x.isNaN() || y.isNaN()) {
    return new BigNumber2(NaN);
  }
  if (x.isZero()) {
    return y;
  }
  if (y.isZero()) {
    return x;
  }
  if (x.eq(y)) {
    return new BigNumber2(0);
  }
  var negOne = new BigNumber2(-1);
  if (x.eq(negOne)) {
    return bitNotBigNumber(y);
  }
  if (y.eq(negOne)) {
    return bitNotBigNumber(x);
  }
  if (!x.isFinite() || !y.isFinite()) {
    if (!x.isFinite() && !y.isFinite()) {
      return negOne;
    }
    return new BigNumber2(x.isNegative() === y.isNegative() ? Infinity : -Infinity);
  }
  return bitwise(x, y, function(a, b10) {
    return a ^ b10;
  });
}
function leftShiftBigNumber(x, y) {
  if (x.isFinite() && !x.isInteger() || y.isFinite() && !y.isInteger()) {
    throw new Error("Integers expected in function leftShift");
  }
  var BigNumber2 = x.constructor;
  if (x.isNaN() || y.isNaN() || y.isNegative() && !y.isZero()) {
    return new BigNumber2(NaN);
  }
  if (x.isZero() || y.isZero()) {
    return x;
  }
  if (!x.isFinite() && !y.isFinite()) {
    return new BigNumber2(NaN);
  }
  if (y.lt(55)) {
    return x.times(Math.pow(2, y.toNumber()) + "");
  }
  return x.times(new BigNumber2(2).pow(y));
}
function rightArithShiftBigNumber(x, y) {
  if (x.isFinite() && !x.isInteger() || y.isFinite() && !y.isInteger()) {
    throw new Error("Integers expected in function rightArithShift");
  }
  var BigNumber2 = x.constructor;
  if (x.isNaN() || y.isNaN() || y.isNegative() && !y.isZero()) {
    return new BigNumber2(NaN);
  }
  if (x.isZero() || y.isZero()) {
    return x;
  }
  if (!y.isFinite()) {
    if (x.isNegative()) {
      return new BigNumber2(-1);
    }
    if (!x.isFinite()) {
      return new BigNumber2(NaN);
    }
    return new BigNumber2(0);
  }
  if (y.lt(55)) {
    return x.div(Math.pow(2, y.toNumber()) + "").floor();
  }
  return x.div(new BigNumber2(2).pow(y)).floor();
}
var name$M = "bitAnd";
var dependencies$M = ["typed", "matrix", "equalScalar", "concat"];
var createBitAnd = /* @__PURE__ */ factory(name$M, dependencies$M, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    concat: concat2
  } = _ref;
  var matAlgo02xDS0 = createMatAlgo02xDS0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo06xS0S0 = createMatAlgo06xS0S0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$M, {
    "number, number": bitAndNumber,
    "BigNumber, BigNumber": bitAndBigNumber
  }, matrixAlgorithmSuite({
    SS: matAlgo06xS0S0,
    DS: matAlgo02xDS0,
    Ss: matAlgo11xS0s
  }));
});
var name$N = "bitNot";
var dependencies$N = ["typed"];
var createBitNot = /* @__PURE__ */ factory(name$N, dependencies$N, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$N, {
    number: bitNotNumber,
    BigNumber: bitNotBigNumber,
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$O = "bitOr";
var dependencies$O = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"];
var createBitOr = /* @__PURE__ */ factory(name$O, dependencies$O, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo01xDSid = createMatAlgo01xDSid({
    typed: typed2
  });
  var matAlgo04xSidSid = createMatAlgo04xSidSid({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo10xSids = createMatAlgo10xSids({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$O, {
    "number, number": bitOrNumber,
    "BigNumber, BigNumber": bitOrBigNumber
  }, matrixAlgorithmSuite({
    SS: matAlgo04xSidSid,
    DS: matAlgo01xDSid,
    Ss: matAlgo10xSids
  }));
});
var name$P = "bitXor";
var dependencies$P = ["typed", "matrix", "DenseMatrix", "concat"];
var createBitXor = /* @__PURE__ */ factory(name$P, dependencies$P, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed: typed2
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$P, {
    "number, number": bitXorNumber,
    "BigNumber, BigNumber": bitXor
  }, matrixAlgorithmSuite({
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var name$Q = "arg";
var dependencies$Q = ["typed"];
var createArg = /* @__PURE__ */ factory(name$Q, dependencies$Q, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$Q, {
    number: function number2(x) {
      return Math.atan2(0, x);
    },
    BigNumber: function BigNumber2(x) {
      return x.constructor.atan2(0, x);
    },
    Complex: function Complex2(x) {
      return x.arg();
    },
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$R = "conj";
var dependencies$R = ["typed"];
var createConj = /* @__PURE__ */ factory(name$R, dependencies$R, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$R, {
    "number | BigNumber | Fraction": (x) => x,
    Complex: (x) => x.conjugate(),
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$S = "im";
var dependencies$S = ["typed"];
var createIm = /* @__PURE__ */ factory(name$S, dependencies$S, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$S, {
    number: () => 0,
    "BigNumber | Fraction": (x) => x.mul(0),
    Complex: (x) => x.im,
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$T = "re";
var dependencies$T = ["typed"];
var createRe = /* @__PURE__ */ factory(name$T, dependencies$T, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$T, {
    "number | BigNumber | Fraction": (x) => x,
    Complex: (x) => x.re,
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$U = "not";
var dependencies$U = ["typed"];
var createNot = /* @__PURE__ */ factory(name$U, dependencies$U, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$U, {
    "null | undefined": () => true,
    number: notNumber,
    Complex: function Complex2(x) {
      return x.re === 0 && x.im === 0;
    },
    BigNumber: function BigNumber2(x) {
      return x.isZero() || x.isNaN();
    },
    Unit: typed2.referToSelf((self) => (x) => typed2.find(self, x.valueType())(x.value)),
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$V = "or";
var dependencies$V = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat"];
var createOr = /* @__PURE__ */ factory(name$V, dependencies$V, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed: typed2
  });
  var matAlgo05xSfSf = createMatAlgo05xSfSf({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$V, {
    "number, number": orNumber,
    "Complex, Complex": function ComplexComplex(x, y) {
      return x.re !== 0 || x.im !== 0 || y.re !== 0 || y.im !== 0;
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return !x.isZero() && !x.isNaN() || !y.isZero() && !y.isNaN();
    },
    "Unit, Unit": typed2.referToSelf((self) => (x, y) => self(x.value || 0, y.value || 0))
  }, matrixAlgorithmSuite({
    SS: matAlgo05xSfSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var name$W = "xor";
var dependencies$W = ["typed", "matrix", "DenseMatrix", "concat"];
var createXor = /* @__PURE__ */ factory(name$W, dependencies$W, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed: typed2
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$W, {
    "number, number": xorNumber,
    "Complex, Complex": function ComplexComplex(x, y) {
      return (x.re !== 0 || x.im !== 0) !== (y.re !== 0 || y.im !== 0);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return (!x.isZero() && !x.isNaN()) !== (!y.isZero() && !y.isNaN());
    },
    "Unit, Unit": typed2.referToSelf((self) => (x, y) => self(x.value || 0, y.value || 0))
  }, matrixAlgorithmSuite({
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var name$X = "concat";
var dependencies$X = ["typed", "matrix", "isInteger"];
var createConcat = /* @__PURE__ */ factory(name$X, dependencies$X, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    isInteger: isInteger2
  } = _ref;
  return typed2(name$X, {
    "...Array | Matrix | number | BigNumber": function ArrayMatrixNumberBigNumber(args) {
      var i3;
      var len = args.length;
      var dim = -1;
      var prevDim;
      var asMatrix = false;
      var matrices = [];
      for (i3 = 0; i3 < len; i3++) {
        var arg2 = args[i3];
        if (isMatrix(arg2)) {
          asMatrix = true;
        }
        if (isNumber(arg2) || isBigNumber(arg2)) {
          if (i3 !== len - 1) {
            throw new Error("Dimension must be specified as last argument");
          }
          prevDim = dim;
          dim = arg2.valueOf();
          if (!isInteger2(dim)) {
            throw new TypeError("Integer number expected for dimension");
          }
          if (dim < 0 || i3 > 0 && dim > prevDim) {
            throw new IndexError(dim, prevDim + 1);
          }
        } else {
          var m = clone$1(arg2).valueOf();
          var size2 = arraySize(m);
          matrices[i3] = m;
          prevDim = dim;
          dim = size2.length - 1;
          if (i3 > 0 && dim !== prevDim) {
            throw new DimensionError(prevDim + 1, dim + 1);
          }
        }
      }
      if (matrices.length === 0) {
        throw new SyntaxError("At least one matrix expected");
      }
      var res = matrices.shift();
      while (matrices.length) {
        res = _concat(res, matrices.shift(), dim, 0);
      }
      return asMatrix ? matrix2(res) : res;
    },
    "...string": function string2(args) {
      return args.join("");
    }
  });
});
function _concat(a, b10, concatDim, dim) {
  if (dim < concatDim) {
    if (a.length !== b10.length) {
      throw new DimensionError(a.length, b10.length);
    }
    var c10 = [];
    for (var i3 = 0; i3 < a.length; i3++) {
      c10[i3] = _concat(a[i3], b10[i3], concatDim, dim + 1);
    }
    return c10;
  } else {
    return a.concat(b10);
  }
}
var name$Y = "column";
var dependencies$Y = ["typed", "Index", "matrix", "range"];
var createColumn = /* @__PURE__ */ factory(name$Y, dependencies$Y, (_ref) => {
  var {
    typed: typed2,
    Index: Index2,
    matrix: matrix2,
    range: range2
  } = _ref;
  return typed2(name$Y, {
    "Matrix, number": _column,
    "Array, number": function ArrayNumber(value, column2) {
      return _column(matrix2(clone$1(value)), column2).valueOf();
    }
  });
  function _column(value, column2) {
    if (value.size().length !== 2) {
      throw new Error("Only two dimensional matrix is supported");
    }
    validateIndex(column2, value.size()[1]);
    var rowRange = range2(0, value.size()[0]);
    var index2 = new Index2(rowRange, column2);
    var result = value.subset(index2);
    return isMatrix(result) ? result : matrix2([[result]]);
  }
});
var name$Z = "count";
var dependencies$Z = ["typed", "size", "prod"];
var createCount = /* @__PURE__ */ factory(name$Z, dependencies$Z, (_ref) => {
  var {
    typed: typed2,
    size: size2,
    prod: prod2
  } = _ref;
  return typed2(name$Z, {
    string: function string2(x) {
      return x.length;
    },
    "Matrix | Array": function MatrixArray(x) {
      return prod2(size2(x));
    }
  });
});
var name$_ = "cross";
var dependencies$_ = ["typed", "matrix", "subtract", "multiply"];
var createCross = /* @__PURE__ */ factory(name$_, dependencies$_, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    subtract: subtract2,
    multiply: multiply2
  } = _ref;
  return typed2(name$_, {
    "Matrix, Matrix": function MatrixMatrix(x, y) {
      return matrix2(_cross(x.toArray(), y.toArray()));
    },
    "Matrix, Array": function MatrixArray(x, y) {
      return matrix2(_cross(x.toArray(), y));
    },
    "Array, Matrix": function ArrayMatrix(x, y) {
      return matrix2(_cross(x, y.toArray()));
    },
    "Array, Array": _cross
  });
  function _cross(x, y) {
    var highestDimension = Math.max(arraySize(x).length, arraySize(y).length);
    x = squeeze$1(x);
    y = squeeze$1(y);
    var xSize = arraySize(x);
    var ySize = arraySize(y);
    if (xSize.length !== 1 || ySize.length !== 1 || xSize[0] !== 3 || ySize[0] !== 3) {
      throw new RangeError("Vectors with length 3 expected (Size A = [" + xSize.join(", ") + "], B = [" + ySize.join(", ") + "])");
    }
    var product = [subtract2(multiply2(x[1], y[2]), multiply2(x[2], y[1])), subtract2(multiply2(x[2], y[0]), multiply2(x[0], y[2])), subtract2(multiply2(x[0], y[1]), multiply2(x[1], y[0]))];
    if (highestDimension > 1) {
      return [product];
    } else {
      return product;
    }
  }
});
var name$$ = "diag";
var dependencies$$ = ["typed", "matrix", "DenseMatrix", "SparseMatrix"];
var createDiag = /* @__PURE__ */ factory(name$$, dependencies$$, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    DenseMatrix: DenseMatrix2,
    SparseMatrix: SparseMatrix2
  } = _ref;
  return typed2(name$$, {
    Array: function Array2(x) {
      return _diag(x, 0, arraySize(x), null);
    },
    "Array, number": function ArrayNumber(x, k2) {
      return _diag(x, k2, arraySize(x), null);
    },
    "Array, BigNumber": function ArrayBigNumber(x, k2) {
      return _diag(x, k2.toNumber(), arraySize(x), null);
    },
    "Array, string": function ArrayString(x, format2) {
      return _diag(x, 0, arraySize(x), format2);
    },
    "Array, number, string": function ArrayNumberString(x, k2, format2) {
      return _diag(x, k2, arraySize(x), format2);
    },
    "Array, BigNumber, string": function ArrayBigNumberString(x, k2, format2) {
      return _diag(x, k2.toNumber(), arraySize(x), format2);
    },
    Matrix: function Matrix2(x) {
      return _diag(x, 0, x.size(), x.storage());
    },
    "Matrix, number": function MatrixNumber(x, k2) {
      return _diag(x, k2, x.size(), x.storage());
    },
    "Matrix, BigNumber": function MatrixBigNumber(x, k2) {
      return _diag(x, k2.toNumber(), x.size(), x.storage());
    },
    "Matrix, string": function MatrixString(x, format2) {
      return _diag(x, 0, x.size(), format2);
    },
    "Matrix, number, string": function MatrixNumberString(x, k2, format2) {
      return _diag(x, k2, x.size(), format2);
    },
    "Matrix, BigNumber, string": function MatrixBigNumberString(x, k2, format2) {
      return _diag(x, k2.toNumber(), x.size(), format2);
    }
  });
  function _diag(x, k2, size2, format2) {
    if (!isInteger$1(k2)) {
      throw new TypeError("Second parameter in function diag must be an integer");
    }
    var kSuper = k2 > 0 ? k2 : 0;
    var kSub = k2 < 0 ? -k2 : 0;
    switch (size2.length) {
      case 1:
        return _createDiagonalMatrix(x, k2, format2, size2[0], kSub, kSuper);
      case 2:
        return _getDiagonal(x, k2, format2, size2, kSub, kSuper);
    }
    throw new RangeError("Matrix for function diag must be 2 dimensional");
  }
  function _createDiagonalMatrix(x, k2, format2, l, kSub, kSuper) {
    var ms = [l + kSub, l + kSuper];
    if (format2 && format2 !== "sparse" && format2 !== "dense") {
      throw new TypeError("Unknown matrix type ".concat(format2, '"'));
    }
    var m = format2 === "sparse" ? SparseMatrix2.diagonal(ms, x, k2) : DenseMatrix2.diagonal(ms, x, k2);
    return format2 !== null ? m : m.valueOf();
  }
  function _getDiagonal(x, k2, format2, s, kSub, kSuper) {
    if (isMatrix(x)) {
      var dm2 = x.diagonal(k2);
      if (format2 !== null) {
        if (format2 !== dm2.storage()) {
          return matrix2(dm2, format2);
        }
        return dm2;
      }
      return dm2.valueOf();
    }
    var n = Math.min(s[0] - kSub, s[1] - kSuper);
    var vector = [];
    for (var i3 = 0; i3 < n; i3++) {
      vector[i3] = x[i3 + kSub][i3 + kSuper];
    }
    return format2 !== null ? matrix2(vector) : vector;
  }
});
var name$10 = "flatten";
var dependencies$10 = ["typed", "matrix"];
var createFlatten = /* @__PURE__ */ factory(name$10, dependencies$10, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2
  } = _ref;
  return typed2(name$10, {
    Array: function Array2(x) {
      return flatten$1(x);
    },
    Matrix: function Matrix2(x) {
      var flat = flatten$1(x.toArray());
      return matrix2(flat);
    }
  });
});
var name$11 = "getMatrixDataType";
var dependencies$11 = ["typed"];
var createGetMatrixDataType = /* @__PURE__ */ factory(name$11, dependencies$11, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$11, {
    Array: function Array2(x) {
      return getArrayDataType(x, typeOf$1);
    },
    Matrix: function Matrix2(x) {
      return x.getDataType();
    }
  });
});
var name$12 = "identity";
var dependencies$12 = ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"];
var createIdentity = /* @__PURE__ */ factory(name$12, dependencies$12, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    matrix: matrix2,
    BigNumber: BigNumber2,
    DenseMatrix: DenseMatrix2,
    SparseMatrix: SparseMatrix2
  } = _ref;
  return typed2(name$12, {
    "": function _() {
      return config2.matrix === "Matrix" ? matrix2([]) : [];
    },
    string: function string2(format2) {
      return matrix2(format2);
    },
    "number | BigNumber": function numberBigNumber(rows) {
      return _identity(rows, rows, config2.matrix === "Matrix" ? "dense" : void 0);
    },
    "number | BigNumber, string": function numberBigNumberString(rows, format2) {
      return _identity(rows, rows, format2);
    },
    "number | BigNumber, number | BigNumber": function numberBigNumberNumberBigNumber(rows, cols) {
      return _identity(rows, cols, config2.matrix === "Matrix" ? "dense" : void 0);
    },
    "number | BigNumber, number | BigNumber, string": function numberBigNumberNumberBigNumberString(rows, cols, format2) {
      return _identity(rows, cols, format2);
    },
    Array: function Array2(size2) {
      return _identityVector(size2);
    },
    "Array, string": function ArrayString(size2, format2) {
      return _identityVector(size2, format2);
    },
    Matrix: function Matrix2(size2) {
      return _identityVector(size2.valueOf(), size2.storage());
    },
    "Matrix, string": function MatrixString(size2, format2) {
      return _identityVector(size2.valueOf(), format2);
    }
  });
  function _identityVector(size2, format2) {
    switch (size2.length) {
      case 0:
        return format2 ? matrix2(format2) : [];
      case 1:
        return _identity(size2[0], size2[0], format2);
      case 2:
        return _identity(size2[0], size2[1], format2);
      default:
        throw new Error("Vector containing two values expected");
    }
  }
  function _identity(rows, cols, format2) {
    var Big = isBigNumber(rows) || isBigNumber(cols) ? BigNumber2 : null;
    if (isBigNumber(rows))
      rows = rows.toNumber();
    if (isBigNumber(cols))
      cols = cols.toNumber();
    if (!isInteger$1(rows) || rows < 1) {
      throw new Error("Parameters in function identity must be positive integers");
    }
    if (!isInteger$1(cols) || cols < 1) {
      throw new Error("Parameters in function identity must be positive integers");
    }
    var one = Big ? new BigNumber2(1) : 1;
    var defaultValue = Big ? new Big(0) : 0;
    var size2 = [rows, cols];
    if (format2) {
      if (format2 === "sparse") {
        return SparseMatrix2.diagonal(size2, one, 0, defaultValue);
      }
      if (format2 === "dense") {
        return DenseMatrix2.diagonal(size2, one, 0, defaultValue);
      }
      throw new TypeError('Unknown matrix type "'.concat(format2, '"'));
    }
    var res = resize$1([], size2, defaultValue);
    var minimum = rows < cols ? rows : cols;
    for (var d10 = 0; d10 < minimum; d10++) {
      res[d10][d10] = one;
    }
    return res;
  }
});
var name$13 = "kron";
var dependencies$13 = ["typed", "matrix", "multiplyScalar"];
var createKron = /* @__PURE__ */ factory(name$13, dependencies$13, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    multiplyScalar: multiplyScalar2
  } = _ref;
  return typed2(name$13, {
    "Matrix, Matrix": function MatrixMatrix(x, y) {
      return matrix2(_kron(x.toArray(), y.toArray()));
    },
    "Matrix, Array": function MatrixArray(x, y) {
      return matrix2(_kron(x.toArray(), y));
    },
    "Array, Matrix": function ArrayMatrix(x, y) {
      return matrix2(_kron(x, y.toArray()));
    },
    "Array, Array": _kron
  });
  function _kron(a, b10) {
    if (arraySize(a).length === 1) {
      a = [a];
    }
    if (arraySize(b10).length === 1) {
      b10 = [b10];
    }
    if (arraySize(a).length > 2 || arraySize(b10).length > 2) {
      throw new RangeError("Vectors with dimensions greater then 2 are not supported expected (Size x = " + JSON.stringify(a.length) + ", y = " + JSON.stringify(b10.length) + ")");
    }
    var t2 = [];
    var r = [];
    return a.map(function(a2) {
      return b10.map(function(b11) {
        r = [];
        t2.push(r);
        return a2.map(function(y) {
          return b11.map(function(x) {
            return r.push(multiplyScalar2(y, x));
          });
        });
      });
    }) && t2;
  }
});
var name$14 = "diff";
var dependencies$14 = ["typed", "matrix", "subtract", "number"];
var createDiff = /* @__PURE__ */ factory(name$14, dependencies$14, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    subtract: subtract2,
    number: number2
  } = _ref;
  return typed2(name$14, {
    "Array | Matrix": function ArrayMatrix(arr) {
      if (isMatrix(arr)) {
        return matrix2(_diff(arr.toArray()));
      } else {
        return _diff(arr);
      }
    },
    "Array | Matrix, number": function ArrayMatrixNumber(arr, dim) {
      if (!isInteger$1(dim))
        throw new RangeError("Dimension must be a whole number");
      if (isMatrix(arr)) {
        return matrix2(_recursive(arr.toArray(), dim));
      } else {
        return _recursive(arr, dim);
      }
    },
    "Array, BigNumber": typed2.referTo("Array,number", (selfAn) => (arr, dim) => selfAn(arr, number2(dim))),
    "Matrix, BigNumber": typed2.referTo("Matrix,number", (selfMn) => (arr, dim) => selfMn(arr, number2(dim)))
  });
  function _recursive(arr, dim) {
    if (isMatrix(arr)) {
      arr = arr.toArray();
    }
    if (!Array.isArray(arr)) {
      throw RangeError("Array/Matrix does not have that many dimensions");
    }
    if (dim > 0) {
      var result = [];
      arr.forEach((element) => {
        result.push(_recursive(element, dim - 1));
      });
      return result;
    } else if (dim === 0) {
      return _diff(arr);
    } else {
      throw RangeError("Cannot have negative dimension");
    }
  }
  function _diff(arr) {
    var result = [];
    var size2 = arr.length;
    for (var i3 = 1; i3 < size2; i3++) {
      result.push(_ElementDiff(arr[i3 - 1], arr[i3]));
    }
    return result;
  }
  function _ElementDiff(obj1, obj2) {
    if (isMatrix(obj1))
      obj1 = obj1.toArray();
    if (isMatrix(obj2))
      obj2 = obj2.toArray();
    var obj1IsArray = Array.isArray(obj1);
    var obj2IsArray = Array.isArray(obj2);
    if (obj1IsArray && obj2IsArray) {
      return _ArrayDiff(obj1, obj2);
    }
    if (!obj1IsArray && !obj2IsArray) {
      return subtract2(obj2, obj1);
    }
    throw TypeError("Cannot calculate difference between 1 array and 1 non-array");
  }
  function _ArrayDiff(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      throw RangeError("Not all sub-arrays have the same length");
    }
    var result = [];
    var size2 = arr1.length;
    for (var i3 = 0; i3 < size2; i3++) {
      result.push(_ElementDiff(arr1[i3], arr2[i3]));
    }
    return result;
  }
});
var name$15 = "ones";
var dependencies$15 = ["typed", "config", "matrix", "BigNumber"];
var createOnes = /* @__PURE__ */ factory(name$15, dependencies$15, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    matrix: matrix2,
    BigNumber: BigNumber2
  } = _ref;
  return typed2("ones", {
    "": function _() {
      return config2.matrix === "Array" ? _ones([]) : _ones([], "default");
    },
    "...number | BigNumber | string": function numberBigNumberString(size2) {
      var last = size2[size2.length - 1];
      if (typeof last === "string") {
        var format2 = size2.pop();
        return _ones(size2, format2);
      } else if (config2.matrix === "Array") {
        return _ones(size2);
      } else {
        return _ones(size2, "default");
      }
    },
    Array: _ones,
    Matrix: function Matrix2(size2) {
      var format2 = size2.storage();
      return _ones(size2.valueOf(), format2);
    },
    "Array | Matrix, string": function ArrayMatrixString(size2, format2) {
      return _ones(size2.valueOf(), format2);
    }
  });
  function _ones(size2, format2) {
    var hasBigNumbers = _normalize(size2);
    var defaultValue = hasBigNumbers ? new BigNumber2(1) : 1;
    _validate(size2);
    if (format2) {
      var m = matrix2(format2);
      if (size2.length > 0) {
        return m.resize(size2, defaultValue);
      }
      return m;
    } else {
      var arr = [];
      if (size2.length > 0) {
        return resize$1(arr, size2, defaultValue);
      }
      return arr;
    }
  }
  function _normalize(size2) {
    var hasBigNumbers = false;
    size2.forEach(function(value, index2, arr) {
      if (isBigNumber(value)) {
        hasBigNumbers = true;
        arr[index2] = value.toNumber();
      }
    });
    return hasBigNumbers;
  }
  function _validate(size2) {
    size2.forEach(function(value) {
      if (typeof value !== "number" || !isInteger$1(value) || value < 0) {
        throw new Error("Parameters in function ones must be positive integers");
      }
    });
  }
});
var name$16 = "reshape";
var dependencies$16 = ["typed", "isInteger", "matrix"];
var createReshape = /* @__PURE__ */ factory(name$16, dependencies$16, (_ref) => {
  var {
    typed: typed2,
    isInteger: isInteger2
  } = _ref;
  return typed2(name$16, {
    "Matrix, Array": function MatrixArray(x, sizes) {
      return x.reshape(sizes, true);
    },
    "Array, Array": function ArrayArray(x, sizes) {
      sizes.forEach(function(size2) {
        if (!isInteger2(size2)) {
          throw new TypeError("Invalid size for dimension: " + size2);
        }
      });
      return reshape$1(x, sizes);
    }
  });
});
var name$17 = "resize";
var dependencies$17 = ["config", "matrix"];
var createResize = /* @__PURE__ */ factory(name$17, dependencies$17, (_ref) => {
  var {
    config: config2,
    matrix: matrix2
  } = _ref;
  return function resize2(x, size2, defaultValue) {
    if (arguments.length !== 2 && arguments.length !== 3) {
      throw new ArgumentsError("resize", arguments.length, 2, 3);
    }
    if (isMatrix(size2)) {
      size2 = size2.valueOf();
    }
    if (isBigNumber(size2[0])) {
      size2 = size2.map(function(value) {
        return !isBigNumber(value) ? value : value.toNumber();
      });
    }
    if (isMatrix(x)) {
      return x.resize(size2, defaultValue, true);
    }
    if (typeof x === "string") {
      return _resizeString(x, size2, defaultValue);
    }
    var asMatrix = Array.isArray(x) ? false : config2.matrix !== "Array";
    if (size2.length === 0) {
      while (Array.isArray(x)) {
        x = x[0];
      }
      return clone$1(x);
    } else {
      if (!Array.isArray(x)) {
        x = [x];
      }
      x = clone$1(x);
      var res = resize$1(x, size2, defaultValue);
      return asMatrix ? matrix2(res) : res;
    }
  };
  function _resizeString(str, size2, defaultChar) {
    if (defaultChar !== void 0) {
      if (typeof defaultChar !== "string" || defaultChar.length !== 1) {
        throw new TypeError("Single character expected as defaultValue");
      }
    } else {
      defaultChar = " ";
    }
    if (size2.length !== 1) {
      throw new DimensionError(size2.length, 1);
    }
    var len = size2[0];
    if (typeof len !== "number" || !isInteger$1(len)) {
      throw new TypeError("Invalid size, must contain positive integers (size: " + format$2(size2) + ")");
    }
    if (str.length > len) {
      return str.substring(0, len);
    } else if (str.length < len) {
      var res = str;
      for (var i3 = 0, ii = len - str.length; i3 < ii; i3++) {
        res += defaultChar;
      }
      return res;
    } else {
      return str;
    }
  }
});
var name$18 = "rotate";
var dependencies$18 = ["typed", "multiply", "rotationMatrix"];
var createRotate = /* @__PURE__ */ factory(name$18, dependencies$18, (_ref) => {
  var {
    typed: typed2,
    multiply: multiply2,
    rotationMatrix: rotationMatrix2
  } = _ref;
  return typed2(name$18, {
    "Array , number | BigNumber | Complex | Unit": function ArrayNumberBigNumberComplexUnit(w, theta) {
      _validateSize(w, 2);
      var matrixRes = multiply2(rotationMatrix2(theta), w);
      return matrixRes.toArray();
    },
    "Matrix , number | BigNumber | Complex | Unit": function MatrixNumberBigNumberComplexUnit(w, theta) {
      _validateSize(w, 2);
      return multiply2(rotationMatrix2(theta), w);
    },
    "Array, number | BigNumber | Complex | Unit, Array | Matrix": function ArrayNumberBigNumberComplexUnitArrayMatrix(w, theta, v) {
      _validateSize(w, 3);
      var matrixRes = multiply2(rotationMatrix2(theta, v), w);
      return matrixRes;
    },
    "Matrix, number | BigNumber | Complex | Unit, Array | Matrix": function MatrixNumberBigNumberComplexUnitArrayMatrix(w, theta, v) {
      _validateSize(w, 3);
      return multiply2(rotationMatrix2(theta, v), w);
    }
  });
  function _validateSize(v, expectedSize) {
    var actualSize = Array.isArray(v) ? arraySize(v) : v.size();
    if (actualSize.length > 2) {
      throw new RangeError("Vector must be of dimensions 1x".concat(expectedSize));
    }
    if (actualSize.length === 2 && actualSize[1] !== 1) {
      throw new RangeError("Vector must be of dimensions 1x".concat(expectedSize));
    }
    if (actualSize[0] !== expectedSize) {
      throw new RangeError("Vector must be of dimensions 1x".concat(expectedSize));
    }
  }
});
var name$19 = "rotationMatrix";
var dependencies$19 = ["typed", "config", "multiplyScalar", "addScalar", "unaryMinus", "norm", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix", "cos", "sin"];
var createRotationMatrix = /* @__PURE__ */ factory(name$19, dependencies$19, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    multiplyScalar: multiplyScalar2,
    addScalar: addScalar2,
    unaryMinus: unaryMinus2,
    norm: norm2,
    BigNumber: BigNumber2,
    matrix: matrix2,
    DenseMatrix: DenseMatrix2,
    SparseMatrix: SparseMatrix2,
    cos: cos2,
    sin: sin2
  } = _ref;
  return typed2(name$19, {
    "": function _() {
      return config2.matrix === "Matrix" ? matrix2([]) : [];
    },
    string: function string2(format2) {
      return matrix2(format2);
    },
    "number | BigNumber | Complex | Unit": function numberBigNumberComplexUnit(theta) {
      return _rotationMatrix2x2(theta, config2.matrix === "Matrix" ? "dense" : void 0);
    },
    "number | BigNumber | Complex | Unit, string": function numberBigNumberComplexUnitString(theta, format2) {
      return _rotationMatrix2x2(theta, format2);
    },
    "number | BigNumber | Complex | Unit, Array": function numberBigNumberComplexUnitArray(theta, v) {
      var matrixV = matrix2(v);
      _validateVector(matrixV);
      return _rotationMatrix3x3(theta, matrixV, void 0);
    },
    "number | BigNumber | Complex | Unit, Matrix": function numberBigNumberComplexUnitMatrix(theta, v) {
      _validateVector(v);
      var storageType = v.storage() || (config2.matrix === "Matrix" ? "dense" : void 0);
      return _rotationMatrix3x3(theta, v, storageType);
    },
    "number | BigNumber | Complex | Unit, Array, string": function numberBigNumberComplexUnitArrayString(theta, v, format2) {
      var matrixV = matrix2(v);
      _validateVector(matrixV);
      return _rotationMatrix3x3(theta, matrixV, format2);
    },
    "number | BigNumber | Complex | Unit, Matrix, string": function numberBigNumberComplexUnitMatrixString(theta, v, format2) {
      _validateVector(v);
      return _rotationMatrix3x3(theta, v, format2);
    }
  });
  function _rotationMatrix2x2(theta, format2) {
    var Big = isBigNumber(theta);
    var minusOne = Big ? new BigNumber2(-1) : -1;
    var cosTheta = cos2(theta);
    var sinTheta = sin2(theta);
    var data = [[cosTheta, multiplyScalar2(minusOne, sinTheta)], [sinTheta, cosTheta]];
    return _convertToFormat(data, format2);
  }
  function _validateVector(v) {
    var size2 = v.size();
    if (size2.length < 1 || size2[0] !== 3) {
      throw new RangeError("Vector must be of dimensions 1x3");
    }
  }
  function _mul(array) {
    return array.reduce((p, curr) => multiplyScalar2(p, curr));
  }
  function _convertToFormat(data, format2) {
    if (format2) {
      if (format2 === "sparse") {
        return new SparseMatrix2(data);
      }
      if (format2 === "dense") {
        return new DenseMatrix2(data);
      }
      throw new TypeError('Unknown matrix type "'.concat(format2, '"'));
    }
    return data;
  }
  function _rotationMatrix3x3(theta, v, format2) {
    var normV = norm2(v);
    if (normV === 0) {
      throw new RangeError("Rotation around zero vector");
    }
    var Big = isBigNumber(theta) ? BigNumber2 : null;
    var one = Big ? new Big(1) : 1;
    var minusOne = Big ? new Big(-1) : -1;
    var vx = Big ? new Big(v.get([0]) / normV) : v.get([0]) / normV;
    var vy = Big ? new Big(v.get([1]) / normV) : v.get([1]) / normV;
    var vz = Big ? new Big(v.get([2]) / normV) : v.get([2]) / normV;
    var c10 = cos2(theta);
    var oneMinusC = addScalar2(one, unaryMinus2(c10));
    var s = sin2(theta);
    var r11 = addScalar2(c10, _mul([vx, vx, oneMinusC]));
    var r12 = addScalar2(_mul([vx, vy, oneMinusC]), _mul([minusOne, vz, s]));
    var r13 = addScalar2(_mul([vx, vz, oneMinusC]), _mul([vy, s]));
    var r21 = addScalar2(_mul([vx, vy, oneMinusC]), _mul([vz, s]));
    var r22 = addScalar2(c10, _mul([vy, vy, oneMinusC]));
    var r23 = addScalar2(_mul([vy, vz, oneMinusC]), _mul([minusOne, vx, s]));
    var r31 = addScalar2(_mul([vx, vz, oneMinusC]), _mul([minusOne, vy, s]));
    var r32 = addScalar2(_mul([vy, vz, oneMinusC]), _mul([vx, s]));
    var r33 = addScalar2(c10, _mul([vz, vz, oneMinusC]));
    var data = [[r11, r12, r13], [r21, r22, r23], [r31, r32, r33]];
    return _convertToFormat(data, format2);
  }
});
var name$1a = "row";
var dependencies$1a = ["typed", "Index", "matrix", "range"];
var createRow = /* @__PURE__ */ factory(name$1a, dependencies$1a, (_ref) => {
  var {
    typed: typed2,
    Index: Index2,
    matrix: matrix2,
    range: range2
  } = _ref;
  return typed2(name$1a, {
    "Matrix, number": _row,
    "Array, number": function ArrayNumber(value, row2) {
      return _row(matrix2(clone$1(value)), row2).valueOf();
    }
  });
  function _row(value, row2) {
    if (value.size().length !== 2) {
      throw new Error("Only two dimensional matrix is supported");
    }
    validateIndex(row2, value.size()[0]);
    var columnRange = range2(0, value.size()[1]);
    var index2 = new Index2(row2, columnRange);
    var result = value.subset(index2);
    return isMatrix(result) ? result : matrix2([[result]]);
  }
});
var name$1b = "squeeze";
var dependencies$1b = ["typed", "matrix"];
var createSqueeze = /* @__PURE__ */ factory(name$1b, dependencies$1b, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2
  } = _ref;
  return typed2(name$1b, {
    Array: function Array2(x) {
      return squeeze$1(clone$1(x));
    },
    Matrix: function Matrix2(x) {
      var res = squeeze$1(x.toArray());
      return Array.isArray(res) ? matrix2(res) : res;
    },
    any: function any(x) {
      return clone$1(x);
    }
  });
});
var name$1c = "subset";
var dependencies$1c = ["typed", "matrix"];
var createSubset = /* @__PURE__ */ factory(name$1c, dependencies$1c, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2
  } = _ref;
  return typed2(name$1c, {
    "Array, Index": function ArrayIndex(value, index2) {
      var m = matrix2(value);
      var subset2 = m.subset(index2);
      return index2.isScalar() ? subset2 : subset2.valueOf();
    },
    "Matrix, Index": function MatrixIndex(value, index2) {
      return value.subset(index2);
    },
    "Object, Index": _getObjectProperty,
    "string, Index": _getSubstring,
    "Array, Index, any": function ArrayIndexAny(value, index2, replacement) {
      return matrix2(clone$1(value)).subset(index2, replacement, void 0).valueOf();
    },
    "Array, Index, any, any": function ArrayIndexAnyAny(value, index2, replacement, defaultValue) {
      return matrix2(clone$1(value)).subset(index2, replacement, defaultValue).valueOf();
    },
    "Matrix, Index, any": function MatrixIndexAny(value, index2, replacement) {
      return value.clone().subset(index2, replacement);
    },
    "Matrix, Index, any, any": function MatrixIndexAnyAny(value, index2, replacement, defaultValue) {
      return value.clone().subset(index2, replacement, defaultValue);
    },
    "string, Index, string": _setSubstring,
    "string, Index, string, string": _setSubstring,
    "Object, Index, any": _setObjectProperty
  });
});
function _getSubstring(str, index2) {
  if (!isIndex(index2)) {
    throw new TypeError("Index expected");
  }
  if (index2.size().length !== 1) {
    throw new DimensionError(index2.size().length, 1);
  }
  var strLen = str.length;
  validateIndex(index2.min()[0], strLen);
  validateIndex(index2.max()[0], strLen);
  var range2 = index2.dimension(0);
  var substr = "";
  range2.forEach(function(v) {
    substr += str.charAt(v);
  });
  return substr;
}
function _setSubstring(str, index2, replacement, defaultValue) {
  if (!index2 || index2.isIndex !== true) {
    throw new TypeError("Index expected");
  }
  if (index2.size().length !== 1) {
    throw new DimensionError(index2.size().length, 1);
  }
  if (defaultValue !== void 0) {
    if (typeof defaultValue !== "string" || defaultValue.length !== 1) {
      throw new TypeError("Single character expected as defaultValue");
    }
  } else {
    defaultValue = " ";
  }
  var range2 = index2.dimension(0);
  var len = range2.size()[0];
  if (len !== replacement.length) {
    throw new DimensionError(range2.size()[0], replacement.length);
  }
  var strLen = str.length;
  validateIndex(index2.min()[0]);
  validateIndex(index2.max()[0]);
  var chars = [];
  for (var i3 = 0; i3 < strLen; i3++) {
    chars[i3] = str.charAt(i3);
  }
  range2.forEach(function(v, i4) {
    chars[v] = replacement.charAt(i4[0]);
  });
  if (chars.length > strLen) {
    for (var _i = strLen - 1, _len = chars.length; _i < _len; _i++) {
      if (!chars[_i]) {
        chars[_i] = defaultValue;
      }
    }
  }
  return chars.join("");
}
function _getObjectProperty(object, index2) {
  if (index2.size().length !== 1) {
    throw new DimensionError(index2.size(), 1);
  }
  var key = index2.dimension(0);
  if (typeof key !== "string") {
    throw new TypeError("String expected as index to retrieve an object property");
  }
  return getSafeProperty(object, key);
}
function _setObjectProperty(object, index2, replacement) {
  if (index2.size().length !== 1) {
    throw new DimensionError(index2.size(), 1);
  }
  var key = index2.dimension(0);
  if (typeof key !== "string") {
    throw new TypeError("String expected as index to retrieve an object property");
  }
  var updated = clone$1(object);
  setSafeProperty(updated, key, replacement);
  return updated;
}
var name$1d = "transpose";
var dependencies$1d = ["typed", "matrix"];
var createTranspose = /* @__PURE__ */ factory(name$1d, dependencies$1d, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2
  } = _ref;
  return typed2(name$1d, {
    Array: (x) => transposeMatrix(matrix2(x)).valueOf(),
    Matrix: transposeMatrix,
    any: clone$1
  });
  function transposeMatrix(x) {
    var size2 = x.size();
    var c10;
    switch (size2.length) {
      case 1:
        c10 = x.clone();
        break;
      case 2:
        {
          var rows = size2[0];
          var columns = size2[1];
          if (columns === 0) {
            throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + format$2(size2) + ")");
          }
          switch (x.storage()) {
            case "dense":
              c10 = _denseTranspose(x, rows, columns);
              break;
            case "sparse":
              c10 = _sparseTranspose(x, rows, columns);
              break;
          }
        }
        break;
      default:
        throw new RangeError("Matrix must be a vector or two dimensional (size: " + format$2(size2) + ")");
    }
    return c10;
  }
  function _denseTranspose(m, rows, columns) {
    var data = m._data;
    var transposed = [];
    var transposedRow;
    for (var j = 0; j < columns; j++) {
      transposedRow = transposed[j] = [];
      for (var i3 = 0; i3 < rows; i3++) {
        transposedRow[i3] = clone$1(data[i3][j]);
      }
    }
    return m.createDenseMatrix({
      data: transposed,
      size: [columns, rows],
      datatype: m._datatype
    });
  }
  function _sparseTranspose(m, rows, columns) {
    var values = m._values;
    var index2 = m._index;
    var ptr = m._ptr;
    var cvalues = values ? [] : void 0;
    var cindex = [];
    var cptr = [];
    var w = [];
    for (var x = 0; x < rows; x++) {
      w[x] = 0;
    }
    var p, l, j;
    for (p = 0, l = index2.length; p < l; p++) {
      w[index2[p]]++;
    }
    var sum2 = 0;
    for (var i3 = 0; i3 < rows; i3++) {
      cptr.push(sum2);
      sum2 += w[i3];
      w[i3] = cptr[i3];
    }
    cptr.push(sum2);
    for (j = 0; j < columns; j++) {
      for (var k0 = ptr[j], k1 = ptr[j + 1], k2 = k0; k2 < k1; k2++) {
        var q2 = w[index2[k2]]++;
        cindex[q2] = j;
        if (values) {
          cvalues[q2] = clone$1(values[k2]);
        }
      }
    }
    return m.createSparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: [columns, rows],
      datatype: m._datatype
    });
  }
});
var name$1e = "ctranspose";
var dependencies$1e = ["typed", "transpose", "conj"];
var createCtranspose = /* @__PURE__ */ factory(name$1e, dependencies$1e, (_ref) => {
  var {
    typed: typed2,
    transpose: transpose2,
    conj: conj2
  } = _ref;
  return typed2(name$1e, {
    any: function any(x) {
      return conj2(transpose2(x));
    }
  });
});
var name$1f = "zeros";
var dependencies$1f = ["typed", "config", "matrix", "BigNumber"];
var createZeros = /* @__PURE__ */ factory(name$1f, dependencies$1f, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    matrix: matrix2,
    BigNumber: BigNumber2
  } = _ref;
  return typed2(name$1f, {
    "": function _() {
      return config2.matrix === "Array" ? _zeros([]) : _zeros([], "default");
    },
    "...number | BigNumber | string": function numberBigNumberString(size2) {
      var last = size2[size2.length - 1];
      if (typeof last === "string") {
        var format2 = size2.pop();
        return _zeros(size2, format2);
      } else if (config2.matrix === "Array") {
        return _zeros(size2);
      } else {
        return _zeros(size2, "default");
      }
    },
    Array: _zeros,
    Matrix: function Matrix2(size2) {
      var format2 = size2.storage();
      return _zeros(size2.valueOf(), format2);
    },
    "Array | Matrix, string": function ArrayMatrixString(size2, format2) {
      return _zeros(size2.valueOf(), format2);
    }
  });
  function _zeros(size2, format2) {
    var hasBigNumbers = _normalize(size2);
    var defaultValue = hasBigNumbers ? new BigNumber2(0) : 0;
    _validate(size2);
    if (format2) {
      var m = matrix2(format2);
      if (size2.length > 0) {
        return m.resize(size2, defaultValue);
      }
      return m;
    } else {
      var arr = [];
      if (size2.length > 0) {
        return resize$1(arr, size2, defaultValue);
      }
      return arr;
    }
  }
  function _normalize(size2) {
    var hasBigNumbers = false;
    size2.forEach(function(value, index2, arr) {
      if (isBigNumber(value)) {
        hasBigNumbers = true;
        arr[index2] = value.toNumber();
      }
    });
    return hasBigNumbers;
  }
  function _validate(size2) {
    size2.forEach(function(value) {
      if (typeof value !== "number" || !isInteger$1(value) || value < 0) {
        throw new Error("Parameters in function zeros must be positive integers");
      }
    });
  }
});
var name$1g = "fft";
var dependencies$1g = ["typed", "matrix", "addScalar", "multiplyScalar", "divideScalar", "exp", "tau", "i", "dotDivide", "conj", "pow", "ceil", "log2"];
var createFft = /* @__PURE__ */ factory(name$1g, dependencies$1g, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    addScalar: addScalar2,
    multiplyScalar: multiplyScalar2,
    divideScalar: divideScalar2,
    exp: exp2,
    tau: tau2,
    i: I,
    dotDivide: dotDivide2,
    conj: conj2,
    pow: pow2,
    ceil: ceil2,
    log2: log22
  } = _ref;
  return typed2(name$1g, {
    Array: _ndFft,
    Matrix: function Matrix2(matrix3) {
      return matrix3.create(_ndFft(matrix3.toArray()));
    }
  });
  function _ndFft(arr) {
    var size2 = arraySize(arr);
    if (size2.length === 1)
      return _fft(arr);
    return _1dFft(arr.map((slice) => _ndFft(slice)), 0);
  }
  function _1dFft(arr, dim) {
    var size2 = arraySize(arr);
    if (dim !== 0)
      return new Array(size2[0]).fill(0).map((_, i3) => _1dFft(arr[i3], dim - 1));
    if (size2.length === 1)
      return _fft(arr);
    function _transpose(arr2) {
      var size3 = arraySize(arr2);
      return new Array(size3[1]).fill(0).map((_, j) => new Array(size3[0]).fill(0).map((_2, i3) => arr2[i3][j]));
    }
    return _transpose(_1dFft(_transpose(arr), 1));
  }
  function _czt(arr) {
    var n = arr.length;
    var w = exp2(divideScalar2(multiplyScalar2(-1, multiplyScalar2(I, tau2)), n));
    var chirp = [];
    for (var i3 = 1 - n; i3 < n; i3++) {
      chirp.push(pow2(w, divideScalar2(pow2(i3, 2), 2)));
    }
    var N2 = pow2(2, ceil2(log22(n + n - 1)));
    var xp = [...new Array(n).fill(0).map((_, i4) => multiplyScalar2(arr[i4], chirp[n - 1 + i4])), ...new Array(N2 - n).fill(0)];
    var ichirp = [...new Array(n + n - 1).fill(0).map((_, i4) => divideScalar2(1, chirp[i4])), ...new Array(N2 - (n + n - 1)).fill(0)];
    var fftXp = _fft(xp);
    var fftIchirp = _fft(ichirp);
    var fftProduct = new Array(N2).fill(0).map((_, i4) => multiplyScalar2(fftXp[i4], fftIchirp[i4]));
    var ifftProduct = dotDivide2(conj2(_ndFft(conj2(fftProduct))), N2);
    var ret = [];
    for (var _i = n - 1; _i < n + n - 1; _i++) {
      ret.push(multiplyScalar2(ifftProduct[_i], chirp[_i]));
    }
    return ret;
  }
  function _fft(arr) {
    var len = arr.length;
    if (len === 1)
      return [arr[0]];
    if (len % 2 === 0) {
      var ret = [..._fft(arr.filter((_, i3) => i3 % 2 === 0)), ..._fft(arr.filter((_, i3) => i3 % 2 === 1))];
      for (var k2 = 0; k2 < len / 2; k2++) {
        var p = ret[k2];
        var q2 = multiplyScalar2(ret[k2 + len / 2], exp2(multiplyScalar2(multiplyScalar2(tau2, I), divideScalar2(-k2, len))));
        ret[k2] = addScalar2(p, q2);
        ret[k2 + len / 2] = addScalar2(p, multiplyScalar2(-1, q2));
      }
      return ret;
    } else {
      return _czt(arr);
    }
  }
});
var name$1h = "ifft";
var dependencies$1h = ["typed", "fft", "dotDivide", "conj"];
var createIfft = /* @__PURE__ */ factory(name$1h, dependencies$1h, (_ref) => {
  var {
    typed: typed2,
    fft: fft2,
    dotDivide: dotDivide2,
    conj: conj2
  } = _ref;
  return typed2(name$1h, {
    "Array | Matrix": function ArrayMatrix(arr) {
      var size2 = isMatrix(arr) ? arr.size() : arraySize(arr);
      return dotDivide2(conj2(fft2(conj2(arr))), size2.reduce((acc, curr) => acc * curr, 1));
    }
  });
});
var name$1i = "bin";
var dependencies$1i = ["typed", "format"];
var createBin = factory(name$1i, dependencies$1i, (_ref) => {
  var {
    typed: typed2,
    format: format2
  } = _ref;
  return typed2(name$1i, {
    "number | BigNumber": function numberBigNumber(n) {
      return format2(n, {
        notation: "bin"
      });
    },
    "number | BigNumber, number": function numberBigNumberNumber(n, wordSize) {
      return format2(n, {
        notation: "bin",
        wordSize
      });
    }
  });
});
var name$1j = "oct";
var dependencies$1j = ["typed", "format"];
var createOct = factory(name$1j, dependencies$1j, (_ref) => {
  var {
    typed: typed2,
    format: format2
  } = _ref;
  return typed2(name$1j, {
    "number | BigNumber": function numberBigNumber(n) {
      return format2(n, {
        notation: "oct"
      });
    },
    "number | BigNumber, number": function numberBigNumberNumber(n, wordSize) {
      return format2(n, {
        notation: "oct",
        wordSize
      });
    }
  });
});
var name$1k = "hex";
var dependencies$1k = ["typed", "format"];
var createHex = factory(name$1k, dependencies$1k, (_ref) => {
  var {
    typed: typed2,
    format: format2
  } = _ref;
  return typed2(name$1k, {
    "number | BigNumber": function numberBigNumber(n) {
      return format2(n, {
        notation: "hex"
      });
    },
    "number | BigNumber, number": function numberBigNumberNumber(n, wordSize) {
      return format2(n, {
        notation: "hex",
        wordSize
      });
    }
  });
});
var name$1l = "to";
var dependencies$1l = ["typed", "matrix", "concat"];
var createTo = /* @__PURE__ */ factory(name$1l, dependencies$1l, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  } = _ref;
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$1l, {
    "Unit, Unit | string": (x, unit2) => x.to(unit2)
  }, matrixAlgorithmSuite({
    Ds: true
  }));
});
var name$1m = "divideScalar";
var dependencies$1m = ["typed", "numeric"];
var createDivideScalar = /* @__PURE__ */ factory(name$1m, dependencies$1m, (_ref) => {
  var {
    typed: typed2,
    numeric: numeric2
  } = _ref;
  return typed2(name$1m, {
    "number, number": function numberNumber(x, y) {
      return x / y;
    },
    "Complex, Complex": function ComplexComplex(x, y) {
      return x.div(y);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return x.div(y);
    },
    "Fraction, Fraction": function FractionFraction(x, y) {
      return x.div(y);
    },
    "Unit, number | Complex | Fraction | BigNumber | Unit": (x, y) => x.divide(y),
    "number | Fraction | Complex | BigNumber, Unit": (x, y) => y.divideInto(x)
  });
});
var name$1n = "pow";
var dependencies$1n = ["typed", "config", "identity", "multiply", "matrix", "inv", "fraction", "number", "Complex"];
var createPow = /* @__PURE__ */ factory(name$1n, dependencies$1n, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    identity: identity2,
    multiply: multiply2,
    matrix: matrix2,
    inv: inv2,
    number: number2,
    fraction: fraction2,
    Complex: Complex2
  } = _ref;
  return typed2(name$1n, {
    "number, number": _pow,
    "Complex, Complex": function ComplexComplex(x, y) {
      return x.pow(y);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      if (y.isInteger() || x >= 0 || config2.predictable) {
        return x.pow(y);
      } else {
        return new Complex2(x.toNumber(), 0).pow(y.toNumber(), 0);
      }
    },
    "Fraction, Fraction": function FractionFraction(x, y) {
      var result = x.pow(y);
      if (result != null) {
        return result;
      }
      if (config2.predictable) {
        throw new Error("Result of pow is non-rational and cannot be expressed as a fraction");
      } else {
        return _pow(x.valueOf(), y.valueOf());
      }
    },
    "Array, number": _powArray,
    "Array, BigNumber": function ArrayBigNumber(x, y) {
      return _powArray(x, y.toNumber());
    },
    "Matrix, number": _powMatrix,
    "Matrix, BigNumber": function MatrixBigNumber(x, y) {
      return _powMatrix(x, y.toNumber());
    },
    "Unit, number | BigNumber": function UnitNumberBigNumber(x, y) {
      return x.pow(y);
    }
  });
  function _pow(x, y) {
    if (config2.predictable && !isInteger$1(y) && x < 0) {
      try {
        var yFrac = fraction2(y);
        var yNum = number2(yFrac);
        if (y === yNum || Math.abs((y - yNum) / y) < 1e-14) {
          if (yFrac.d % 2 === 1) {
            return (yFrac.n % 2 === 0 ? 1 : -1) * Math.pow(-x, y);
          }
        }
      } catch (ex) {
      }
    }
    if (config2.predictable && (x < -1 && y === Infinity || x > -1 && x < 0 && y === -Infinity)) {
      return NaN;
    }
    if (isInteger$1(y) || x >= 0 || config2.predictable) {
      return powNumber(x, y);
    } else {
      if (x * x < 1 && y === Infinity || x * x > 1 && y === -Infinity) {
        return 0;
      }
      return new Complex2(x, 0).pow(y, 0);
    }
  }
  function _powArray(x, y) {
    if (!isInteger$1(y)) {
      throw new TypeError("For A^b, b must be an integer (value is " + y + ")");
    }
    var s = arraySize(x);
    if (s.length !== 2) {
      throw new Error("For A^b, A must be 2 dimensional (A has " + s.length + " dimensions)");
    }
    if (s[0] !== s[1]) {
      throw new Error("For A^b, A must be square (size is " + s[0] + "x" + s[1] + ")");
    }
    if (y < 0) {
      try {
        return _powArray(inv2(x), -y);
      } catch (error) {
        if (error.message === "Cannot calculate inverse, determinant is zero") {
          throw new TypeError("For A^b, when A is not invertible, b must be a positive integer (value is " + y + ")");
        }
        throw error;
      }
    }
    var res = identity2(s[0]).valueOf();
    var px = x;
    while (y >= 1) {
      if ((y & 1) === 1) {
        res = multiply2(px, res);
      }
      y >>= 1;
      px = multiply2(px, px);
    }
    return res;
  }
  function _powMatrix(x, y) {
    return matrix2(_powArray(x.valueOf(), y));
  }
});
var NO_INT = "Number of decimals in function round must be an integer";
var name$1o = "round";
var dependencies$1o = ["typed", "matrix", "equalScalar", "zeros", "BigNumber", "DenseMatrix"];
var createRound = /* @__PURE__ */ factory(name$1o, dependencies$1o, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    zeros: zeros2,
    BigNumber: BigNumber2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed: typed2
  });
  return typed2(name$1o, {
    number: roundNumber,
    "number, number": roundNumber,
    "number, BigNumber": function numberBigNumber(x, n) {
      if (!n.isInteger()) {
        throw new TypeError(NO_INT);
      }
      return new BigNumber2(x).toDecimalPlaces(n.toNumber());
    },
    Complex: function Complex2(x) {
      return x.round();
    },
    "Complex, number": function ComplexNumber(x, n) {
      if (n % 1) {
        throw new TypeError(NO_INT);
      }
      return x.round(n);
    },
    "Complex, BigNumber": function ComplexBigNumber(x, n) {
      if (!n.isInteger()) {
        throw new TypeError(NO_INT);
      }
      var _n = n.toNumber();
      return x.round(_n);
    },
    BigNumber: function BigNumber3(x) {
      return x.toDecimalPlaces(0);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, n) {
      if (!n.isInteger()) {
        throw new TypeError(NO_INT);
      }
      return x.toDecimalPlaces(n.toNumber());
    },
    Fraction: function Fraction2(x) {
      return x.round();
    },
    "Fraction, number": function FractionNumber(x, n) {
      if (n % 1) {
        throw new TypeError(NO_INT);
      }
      return x.round(n);
    },
    "Fraction, BigNumber": function FractionBigNumber(x, n) {
      if (!n.isInteger()) {
        throw new TypeError(NO_INT);
      }
      return x.round(n.toNumber());
    },
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self)),
    "SparseMatrix, number | BigNumber": typed2.referToSelf((self) => (x, y) => {
      return matAlgo11xS0s(x, y, self, false);
    }),
    "DenseMatrix, number | BigNumber": typed2.referToSelf((self) => (x, y) => {
      return matAlgo14xDs(x, y, self, false);
    }),
    "Array, number | BigNumber": typed2.referToSelf((self) => (x, y) => {
      return matAlgo14xDs(matrix2(x), y, self, false).valueOf();
    }),
    "number | Complex | BigNumber | Fraction, SparseMatrix": typed2.referToSelf((self) => (x, y) => {
      if (equalScalar2(x, 0)) {
        return zeros2(y.size(), y.storage());
      }
      return matAlgo12xSfs(y, x, self, true);
    }),
    "number | Complex | BigNumber | Fraction, DenseMatrix": typed2.referToSelf((self) => (x, y) => {
      if (equalScalar2(x, 0)) {
        return zeros2(y.size(), y.storage());
      }
      return matAlgo14xDs(y, x, self, true);
    }),
    "number | Complex | BigNumber | Fraction, Array": typed2.referToSelf((self) => (x, y) => {
      return matAlgo14xDs(matrix2(y), x, self, true).valueOf();
    })
  });
});
var name$1p = "log";
var dependencies$1p = ["config", "typed", "divideScalar", "Complex"];
var createLog = /* @__PURE__ */ factory(name$1p, dependencies$1p, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    divideScalar: divideScalar2,
    Complex: Complex2
  } = _ref;
  return typed2(name$1p, {
    number: function number2(x) {
      if (x >= 0 || config2.predictable) {
        return logNumber(x);
      } else {
        return new Complex2(x, 0).log();
      }
    },
    Complex: function Complex3(x) {
      return x.log();
    },
    BigNumber: function BigNumber2(x) {
      if (!x.isNegative() || config2.predictable) {
        return x.ln();
      } else {
        return new Complex2(x.toNumber(), 0).log();
      }
    },
    "any, any": typed2.referToSelf((self) => (x, base) => {
      return divideScalar2(self(x), self(base));
    })
  });
});
var name$1q = "log1p";
var dependencies$1q = ["typed", "config", "divideScalar", "log", "Complex"];
var createLog1p = /* @__PURE__ */ factory(name$1q, dependencies$1q, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    divideScalar: divideScalar2,
    log: log3,
    Complex: Complex2
  } = _ref;
  return typed2(name$1q, {
    number: function number2(x) {
      if (x >= -1 || config2.predictable) {
        return log1p$1(x);
      } else {
        return _log1pComplex(new Complex2(x, 0));
      }
    },
    Complex: _log1pComplex,
    BigNumber: function BigNumber2(x) {
      var y = x.plus(1);
      if (!y.isNegative() || config2.predictable) {
        return y.ln();
      } else {
        return _log1pComplex(new Complex2(x.toNumber(), 0));
      }
    },
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self)),
    "any, any": typed2.referToSelf((self) => (x, base) => {
      return divideScalar2(self(x), log3(base));
    })
  });
  function _log1pComplex(x) {
    var xRe1p = x.re + 1;
    return new Complex2(Math.log(Math.sqrt(xRe1p * xRe1p + x.im * x.im)), Math.atan2(x.im, xRe1p));
  }
});
var name$1r = "nthRoots";
var dependencies$1r = ["config", "typed", "divideScalar", "Complex"];
var createNthRoots = /* @__PURE__ */ factory(name$1r, dependencies$1r, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    divideScalar: divideScalar2,
    Complex: Complex2
  } = _ref;
  var _calculateExactResult = [function realPos(val) {
    return new Complex2(val, 0);
  }, function imagPos(val) {
    return new Complex2(0, val);
  }, function realNeg(val) {
    return new Complex2(-val, 0);
  }, function imagNeg(val) {
    return new Complex2(0, -val);
  }];
  function _nthComplexRoots(a, root) {
    if (root < 0)
      throw new Error("Root must be greater than zero");
    if (root === 0)
      throw new Error("Root must be non-zero");
    if (root % 1 !== 0)
      throw new Error("Root must be an integer");
    if (a === 0 || a.abs() === 0)
      return [new Complex2(0, 0)];
    var aIsNumeric = typeof a === "number";
    var offset;
    if (aIsNumeric || a.re === 0 || a.im === 0) {
      if (aIsNumeric) {
        offset = 2 * +(a < 0);
      } else if (a.im === 0) {
        offset = 2 * +(a.re < 0);
      } else {
        offset = 2 * +(a.im < 0) + 1;
      }
    }
    var arg2 = a.arg();
    var abs2 = a.abs();
    var roots = [];
    var r = Math.pow(abs2, 1 / root);
    for (var k2 = 0; k2 < root; k2++) {
      var halfPiFactor = (offset + 4 * k2) / root;
      if (halfPiFactor === Math.round(halfPiFactor)) {
        roots.push(_calculateExactResult[halfPiFactor % 4](r));
        continue;
      }
      roots.push(new Complex2({
        r,
        phi: (arg2 + 2 * Math.PI * k2) / root
      }));
    }
    return roots;
  }
  return typed2(name$1r, {
    Complex: function Complex3(x) {
      return _nthComplexRoots(x, 2);
    },
    "Complex, number": _nthComplexRoots
  });
});
var name$1s = "dotPow";
var dependencies$1s = ["typed", "equalScalar", "matrix", "pow", "DenseMatrix", "concat"];
var createDotPow = /* @__PURE__ */ factory(name$1s, dependencies$1s, (_ref) => {
  var {
    typed: typed2,
    equalScalar: equalScalar2,
    matrix: matrix2,
    pow: pow2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed: typed2
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  var powScalarSignatures = {};
  for (var signature in pow2.signatures) {
    if (Object.prototype.hasOwnProperty.call(pow2.signatures, signature)) {
      if (!signature.includes("Matrix") && !signature.includes("Array")) {
        powScalarSignatures[signature] = pow2.signatures[signature];
      }
    }
  }
  var powScalar = typed2(powScalarSignatures);
  return typed2(name$1s, matrixAlgorithmSuite({
    elop: powScalar,
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo11xS0s,
    sS: matAlgo12xSfs
  }));
});
var name$1t = "dotDivide";
var dependencies$1t = ["typed", "matrix", "equalScalar", "divideScalar", "DenseMatrix", "concat"];
var createDotDivide = /* @__PURE__ */ factory(name$1t, dependencies$1t, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    divideScalar: divideScalar2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo02xDS0 = createMatAlgo02xDS0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed: typed2
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$1t, matrixAlgorithmSuite({
    elop: divideScalar2,
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    SD: matAlgo02xDS0,
    Ss: matAlgo11xS0s,
    sS: matAlgo12xSfs
  }));
});
function createSolveValidation(_ref) {
  var {
    DenseMatrix: DenseMatrix2
  } = _ref;
  return function solveValidation(m, b10, copy) {
    var mSize = m.size();
    if (mSize.length !== 2) {
      throw new RangeError("Matrix must be two dimensional (size: " + format$2(mSize) + ")");
    }
    var rows = mSize[0];
    var columns = mSize[1];
    if (rows !== columns) {
      throw new RangeError("Matrix must be square (size: " + format$2(mSize) + ")");
    }
    var data = [];
    if (isMatrix(b10)) {
      var bSize = b10.size();
      var bdata = b10._data;
      if (bSize.length === 1) {
        if (bSize[0] !== rows) {
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        }
        for (var i3 = 0; i3 < rows; i3++) {
          data[i3] = [bdata[i3]];
        }
        return new DenseMatrix2({
          data,
          size: [rows, 1],
          datatype: b10._datatype
        });
      }
      if (bSize.length === 2) {
        if (bSize[0] !== rows || bSize[1] !== 1) {
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        }
        if (isDenseMatrix(b10)) {
          if (copy) {
            data = [];
            for (var _i = 0; _i < rows; _i++) {
              data[_i] = [bdata[_i][0]];
            }
            return new DenseMatrix2({
              data,
              size: [rows, 1],
              datatype: b10._datatype
            });
          }
          return b10;
        }
        if (isSparseMatrix(b10)) {
          for (var _i2 = 0; _i2 < rows; _i2++) {
            data[_i2] = [0];
          }
          var values = b10._values;
          var index2 = b10._index;
          var ptr = b10._ptr;
          for (var k1 = ptr[1], k2 = ptr[0]; k2 < k1; k2++) {
            var _i3 = index2[k2];
            data[_i3][0] = values[k2];
          }
          return new DenseMatrix2({
            data,
            size: [rows, 1],
            datatype: b10._datatype
          });
        }
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    }
    if (isArray(b10)) {
      var bsize = arraySize(b10);
      if (bsize.length === 1) {
        if (bsize[0] !== rows) {
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        }
        for (var _i4 = 0; _i4 < rows; _i4++) {
          data[_i4] = [b10[_i4]];
        }
        return new DenseMatrix2({
          data,
          size: [rows, 1]
        });
      }
      if (bsize.length === 2) {
        if (bsize[0] !== rows || bsize[1] !== 1) {
          throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        }
        for (var _i5 = 0; _i5 < rows; _i5++) {
          data[_i5] = [b10[_i5][0]];
        }
        return new DenseMatrix2({
          data,
          size: [rows, 1]
        });
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    }
  };
}
var name$1u = "lsolve";
var dependencies$1u = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract", "equalScalar", "DenseMatrix"];
var createLsolve = /* @__PURE__ */ factory(name$1u, dependencies$1u, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    divideScalar: divideScalar2,
    multiplyScalar: multiplyScalar2,
    subtract: subtract2,
    equalScalar: equalScalar2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  var solveValidation = createSolveValidation({
    DenseMatrix: DenseMatrix2
  });
  return typed2(name$1u, {
    "SparseMatrix, Array | Matrix": function SparseMatrixArrayMatrix(m, b10) {
      return _sparseForwardSubstitution(m, b10);
    },
    "DenseMatrix, Array | Matrix": function DenseMatrixArrayMatrix(m, b10) {
      return _denseForwardSubstitution(m, b10);
    },
    "Array, Array | Matrix": function ArrayArrayMatrix(a, b10) {
      var m = matrix2(a);
      var r = _denseForwardSubstitution(m, b10);
      return r.valueOf();
    }
  });
  function _denseForwardSubstitution(m, b10) {
    b10 = solveValidation(m, b10, true);
    var bdata = b10._data;
    var rows = m._size[0];
    var columns = m._size[1];
    var x = [];
    var mdata = m._data;
    for (var j = 0; j < columns; j++) {
      var bj2 = bdata[j][0] || 0;
      var xj = void 0;
      if (!equalScalar2(bj2, 0)) {
        var vjj = mdata[j][j];
        if (equalScalar2(vjj, 0)) {
          throw new Error("Linear system cannot be solved since matrix is singular");
        }
        xj = divideScalar2(bj2, vjj);
        for (var i3 = j + 1; i3 < rows; i3++) {
          bdata[i3] = [subtract2(bdata[i3][0] || 0, multiplyScalar2(xj, mdata[i3][j]))];
        }
      } else {
        xj = 0;
      }
      x[j] = [xj];
    }
    return new DenseMatrix2({
      data: x,
      size: [rows, 1]
    });
  }
  function _sparseForwardSubstitution(m, b10) {
    b10 = solveValidation(m, b10, true);
    var bdata = b10._data;
    var rows = m._size[0];
    var columns = m._size[1];
    var values = m._values;
    var index2 = m._index;
    var ptr = m._ptr;
    var x = [];
    for (var j = 0; j < columns; j++) {
      var bj2 = bdata[j][0] || 0;
      if (!equalScalar2(bj2, 0)) {
        var vjj = 0;
        var jValues = [];
        var jIndices = [];
        var firstIndex = ptr[j];
        var lastIndex = ptr[j + 1];
        for (var k2 = firstIndex; k2 < lastIndex; k2++) {
          var i3 = index2[k2];
          if (i3 === j) {
            vjj = values[k2];
          } else if (i3 > j) {
            jValues.push(values[k2]);
            jIndices.push(i3);
          }
        }
        if (equalScalar2(vjj, 0)) {
          throw new Error("Linear system cannot be solved since matrix is singular");
        }
        var xj = divideScalar2(bj2, vjj);
        for (var _k = 0, l = jIndices.length; _k < l; _k++) {
          var _i = jIndices[_k];
          bdata[_i] = [subtract2(bdata[_i][0] || 0, multiplyScalar2(xj, jValues[_k]))];
        }
        x[j] = [xj];
      } else {
        x[j] = [0];
      }
    }
    return new DenseMatrix2({
      data: x,
      size: [rows, 1]
    });
  }
});
var name$1v = "usolve";
var dependencies$1v = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract", "equalScalar", "DenseMatrix"];
var createUsolve = /* @__PURE__ */ factory(name$1v, dependencies$1v, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    divideScalar: divideScalar2,
    multiplyScalar: multiplyScalar2,
    subtract: subtract2,
    equalScalar: equalScalar2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  var solveValidation = createSolveValidation({
    DenseMatrix: DenseMatrix2
  });
  return typed2(name$1v, {
    "SparseMatrix, Array | Matrix": function SparseMatrixArrayMatrix(m, b10) {
      return _sparseBackwardSubstitution(m, b10);
    },
    "DenseMatrix, Array | Matrix": function DenseMatrixArrayMatrix(m, b10) {
      return _denseBackwardSubstitution(m, b10);
    },
    "Array, Array | Matrix": function ArrayArrayMatrix(a, b10) {
      var m = matrix2(a);
      var r = _denseBackwardSubstitution(m, b10);
      return r.valueOf();
    }
  });
  function _denseBackwardSubstitution(m, b10) {
    b10 = solveValidation(m, b10, true);
    var bdata = b10._data;
    var rows = m._size[0];
    var columns = m._size[1];
    var x = [];
    var mdata = m._data;
    for (var j = columns - 1; j >= 0; j--) {
      var bj2 = bdata[j][0] || 0;
      var xj = void 0;
      if (!equalScalar2(bj2, 0)) {
        var vjj = mdata[j][j];
        if (equalScalar2(vjj, 0)) {
          throw new Error("Linear system cannot be solved since matrix is singular");
        }
        xj = divideScalar2(bj2, vjj);
        for (var i3 = j - 1; i3 >= 0; i3--) {
          bdata[i3] = [subtract2(bdata[i3][0] || 0, multiplyScalar2(xj, mdata[i3][j]))];
        }
      } else {
        xj = 0;
      }
      x[j] = [xj];
    }
    return new DenseMatrix2({
      data: x,
      size: [rows, 1]
    });
  }
  function _sparseBackwardSubstitution(m, b10) {
    b10 = solveValidation(m, b10, true);
    var bdata = b10._data;
    var rows = m._size[0];
    var columns = m._size[1];
    var values = m._values;
    var index2 = m._index;
    var ptr = m._ptr;
    var x = [];
    for (var j = columns - 1; j >= 0; j--) {
      var bj2 = bdata[j][0] || 0;
      if (!equalScalar2(bj2, 0)) {
        var vjj = 0;
        var jValues = [];
        var jIndices = [];
        var firstIndex = ptr[j];
        var lastIndex = ptr[j + 1];
        for (var k2 = lastIndex - 1; k2 >= firstIndex; k2--) {
          var i3 = index2[k2];
          if (i3 === j) {
            vjj = values[k2];
          } else if (i3 < j) {
            jValues.push(values[k2]);
            jIndices.push(i3);
          }
        }
        if (equalScalar2(vjj, 0)) {
          throw new Error("Linear system cannot be solved since matrix is singular");
        }
        var xj = divideScalar2(bj2, vjj);
        for (var _k = 0, _lastIndex = jIndices.length; _k < _lastIndex; _k++) {
          var _i = jIndices[_k];
          bdata[_i] = [subtract2(bdata[_i][0], multiplyScalar2(xj, jValues[_k]))];
        }
        x[j] = [xj];
      } else {
        x[j] = [0];
      }
    }
    return new DenseMatrix2({
      data: x,
      size: [rows, 1]
    });
  }
});
var name$1w = "lsolveAll";
var dependencies$1w = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract", "equalScalar", "DenseMatrix"];
var createLsolveAll = /* @__PURE__ */ factory(name$1w, dependencies$1w, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    divideScalar: divideScalar2,
    multiplyScalar: multiplyScalar2,
    subtract: subtract2,
    equalScalar: equalScalar2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  var solveValidation = createSolveValidation({
    DenseMatrix: DenseMatrix2
  });
  return typed2(name$1w, {
    "SparseMatrix, Array | Matrix": function SparseMatrixArrayMatrix(m, b10) {
      return _sparseForwardSubstitution(m, b10);
    },
    "DenseMatrix, Array | Matrix": function DenseMatrixArrayMatrix(m, b10) {
      return _denseForwardSubstitution(m, b10);
    },
    "Array, Array | Matrix": function ArrayArrayMatrix(a, b10) {
      var m = matrix2(a);
      var R = _denseForwardSubstitution(m, b10);
      return R.map((r) => r.valueOf());
    }
  });
  function _denseForwardSubstitution(m, b_2) {
    var B = [solveValidation(m, b_2, true)._data.map((e3) => e3[0])];
    var M = m._data;
    var rows = m._size[0];
    var columns = m._size[1];
    for (var i3 = 0; i3 < columns; i3++) {
      var L = B.length;
      for (var k2 = 0; k2 < L; k2++) {
        var b10 = B[k2];
        if (!equalScalar2(M[i3][i3], 0)) {
          b10[i3] = divideScalar2(b10[i3], M[i3][i3]);
          for (var j = i3 + 1; j < columns; j++) {
            b10[j] = subtract2(b10[j], multiplyScalar2(b10[i3], M[j][i3]));
          }
        } else if (!equalScalar2(b10[i3], 0)) {
          if (k2 === 0) {
            return [];
          } else {
            B.splice(k2, 1);
            k2 -= 1;
            L -= 1;
          }
        } else if (k2 === 0) {
          var bNew = [...b10];
          bNew[i3] = 1;
          for (var _j = i3 + 1; _j < columns; _j++) {
            bNew[_j] = subtract2(bNew[_j], M[_j][i3]);
          }
          B.push(bNew);
        }
      }
    }
    return B.map((x) => new DenseMatrix2({
      data: x.map((e3) => [e3]),
      size: [rows, 1]
    }));
  }
  function _sparseForwardSubstitution(m, b_2) {
    var B = [solveValidation(m, b_2, true)._data.map((e3) => e3[0])];
    var rows = m._size[0];
    var columns = m._size[1];
    var values = m._values;
    var index2 = m._index;
    var ptr = m._ptr;
    for (var i3 = 0; i3 < columns; i3++) {
      var L = B.length;
      for (var k2 = 0; k2 < L; k2++) {
        var b10 = B[k2];
        var iValues = [];
        var iIndices = [];
        var firstIndex = ptr[i3];
        var lastIndex = ptr[i3 + 1];
        var Mii = 0;
        for (var j = firstIndex; j < lastIndex; j++) {
          var J2 = index2[j];
          if (J2 === i3) {
            Mii = values[j];
          } else if (J2 > i3) {
            iValues.push(values[j]);
            iIndices.push(J2);
          }
        }
        if (!equalScalar2(Mii, 0)) {
          b10[i3] = divideScalar2(b10[i3], Mii);
          for (var _j2 = 0, _lastIndex = iIndices.length; _j2 < _lastIndex; _j2++) {
            var _J = iIndices[_j2];
            b10[_J] = subtract2(b10[_J], multiplyScalar2(b10[i3], iValues[_j2]));
          }
        } else if (!equalScalar2(b10[i3], 0)) {
          if (k2 === 0) {
            return [];
          } else {
            B.splice(k2, 1);
            k2 -= 1;
            L -= 1;
          }
        } else if (k2 === 0) {
          var bNew = [...b10];
          bNew[i3] = 1;
          for (var _j3 = 0, _lastIndex2 = iIndices.length; _j3 < _lastIndex2; _j3++) {
            var _J2 = iIndices[_j3];
            bNew[_J2] = subtract2(bNew[_J2], iValues[_j3]);
          }
          B.push(bNew);
        }
      }
    }
    return B.map((x) => new DenseMatrix2({
      data: x.map((e3) => [e3]),
      size: [rows, 1]
    }));
  }
});
var name$1x = "usolveAll";
var dependencies$1x = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract", "equalScalar", "DenseMatrix"];
var createUsolveAll = /* @__PURE__ */ factory(name$1x, dependencies$1x, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    divideScalar: divideScalar2,
    multiplyScalar: multiplyScalar2,
    subtract: subtract2,
    equalScalar: equalScalar2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  var solveValidation = createSolveValidation({
    DenseMatrix: DenseMatrix2
  });
  return typed2(name$1x, {
    "SparseMatrix, Array | Matrix": function SparseMatrixArrayMatrix(m, b10) {
      return _sparseBackwardSubstitution(m, b10);
    },
    "DenseMatrix, Array | Matrix": function DenseMatrixArrayMatrix(m, b10) {
      return _denseBackwardSubstitution(m, b10);
    },
    "Array, Array | Matrix": function ArrayArrayMatrix(a, b10) {
      var m = matrix2(a);
      var R = _denseBackwardSubstitution(m, b10);
      return R.map((r) => r.valueOf());
    }
  });
  function _denseBackwardSubstitution(m, b_2) {
    var B = [solveValidation(m, b_2, true)._data.map((e3) => e3[0])];
    var M = m._data;
    var rows = m._size[0];
    var columns = m._size[1];
    for (var i3 = columns - 1; i3 >= 0; i3--) {
      var L = B.length;
      for (var k2 = 0; k2 < L; k2++) {
        var b10 = B[k2];
        if (!equalScalar2(M[i3][i3], 0)) {
          b10[i3] = divideScalar2(b10[i3], M[i3][i3]);
          for (var j = i3 - 1; j >= 0; j--) {
            b10[j] = subtract2(b10[j], multiplyScalar2(b10[i3], M[j][i3]));
          }
        } else if (!equalScalar2(b10[i3], 0)) {
          if (k2 === 0) {
            return [];
          } else {
            B.splice(k2, 1);
            k2 -= 1;
            L -= 1;
          }
        } else if (k2 === 0) {
          var bNew = [...b10];
          bNew[i3] = 1;
          for (var _j = i3 - 1; _j >= 0; _j--) {
            bNew[_j] = subtract2(bNew[_j], M[_j][i3]);
          }
          B.push(bNew);
        }
      }
    }
    return B.map((x) => new DenseMatrix2({
      data: x.map((e3) => [e3]),
      size: [rows, 1]
    }));
  }
  function _sparseBackwardSubstitution(m, b_2) {
    var B = [solveValidation(m, b_2, true)._data.map((e3) => e3[0])];
    var rows = m._size[0];
    var columns = m._size[1];
    var values = m._values;
    var index2 = m._index;
    var ptr = m._ptr;
    for (var i3 = columns - 1; i3 >= 0; i3--) {
      var L = B.length;
      for (var k2 = 0; k2 < L; k2++) {
        var b10 = B[k2];
        var iValues = [];
        var iIndices = [];
        var firstIndex = ptr[i3];
        var lastIndex = ptr[i3 + 1];
        var Mii = 0;
        for (var j = lastIndex - 1; j >= firstIndex; j--) {
          var J2 = index2[j];
          if (J2 === i3) {
            Mii = values[j];
          } else if (J2 < i3) {
            iValues.push(values[j]);
            iIndices.push(J2);
          }
        }
        if (!equalScalar2(Mii, 0)) {
          b10[i3] = divideScalar2(b10[i3], Mii);
          for (var _j2 = 0, _lastIndex = iIndices.length; _j2 < _lastIndex; _j2++) {
            var _J = iIndices[_j2];
            b10[_J] = subtract2(b10[_J], multiplyScalar2(b10[i3], iValues[_j2]));
          }
        } else if (!equalScalar2(b10[i3], 0)) {
          if (k2 === 0) {
            return [];
          } else {
            B.splice(k2, 1);
            k2 -= 1;
            L -= 1;
          }
        } else if (k2 === 0) {
          var bNew = [...b10];
          bNew[i3] = 1;
          for (var _j3 = 0, _lastIndex2 = iIndices.length; _j3 < _lastIndex2; _j3++) {
            var _J2 = iIndices[_j3];
            bNew[_J2] = subtract2(bNew[_J2], iValues[_j3]);
          }
          B.push(bNew);
        }
      }
    }
    return B.map((x) => new DenseMatrix2({
      data: x.map((e3) => [e3]),
      size: [rows, 1]
    }));
  }
});
var name$1y = "matAlgo08xS0Sid";
var dependencies$1y = ["typed", "equalScalar"];
var createMatAlgo08xS0Sid = /* @__PURE__ */ factory(name$1y, dependencies$1y, (_ref) => {
  var {
    typed: typed2,
    equalScalar: equalScalar2
  } = _ref;
  return function matAlgo08xS0Sid(a, b10, callback) {
    var avalues = a._values;
    var aindex = a._index;
    var aptr = a._ptr;
    var asize = a._size;
    var adt = a._datatype;
    var bvalues = b10._values;
    var bindex = b10._index;
    var bptr = b10._ptr;
    var bsize = b10._size;
    var bdt = b10._datatype;
    if (asize.length !== bsize.length) {
      throw new DimensionError(asize.length, bsize.length);
    }
    if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) {
      throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
    }
    if (!avalues || !bvalues) {
      throw new Error("Cannot perform operation on Pattern Sparse Matrices");
    }
    var rows = asize[0];
    var columns = asize[1];
    var dt;
    var eq = equalScalar2;
    var zero = 0;
    var cf2 = callback;
    if (typeof adt === "string" && adt === bdt) {
      dt = adt;
      eq = typed2.find(equalScalar2, [dt, dt]);
      zero = typed2.convert(0, dt);
      cf2 = typed2.find(callback, [dt, dt]);
    }
    var cvalues = [];
    var cindex = [];
    var cptr = [];
    var x = [];
    var w = [];
    var k2, k0, k1, i3;
    for (var j = 0; j < columns; j++) {
      cptr[j] = cindex.length;
      var mark = j + 1;
      for (k0 = aptr[j], k1 = aptr[j + 1], k2 = k0; k2 < k1; k2++) {
        i3 = aindex[k2];
        w[i3] = mark;
        x[i3] = avalues[k2];
        cindex.push(i3);
      }
      for (k0 = bptr[j], k1 = bptr[j + 1], k2 = k0; k2 < k1; k2++) {
        i3 = bindex[k2];
        if (w[i3] === mark) {
          x[i3] = cf2(x[i3], bvalues[k2]);
        }
      }
      k2 = cptr[j];
      while (k2 < cindex.length) {
        i3 = cindex[k2];
        var v = x[i3];
        if (!eq(v, zero)) {
          cvalues.push(v);
          k2++;
        } else {
          cindex.splice(k2, 1);
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
var createUseMatrixForArrayScalar = /* @__PURE__ */ factory("useMatrixForArrayScalar", ["typed", "matrix"], (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2
  } = _ref;
  return {
    "Array, number": typed2.referTo("DenseMatrix, number", (selfDn) => (x, y) => selfDn(matrix2(x), y).valueOf()),
    "Array, BigNumber": typed2.referTo("DenseMatrix, BigNumber", (selfDB) => (x, y) => selfDB(matrix2(x), y).valueOf()),
    "number, Array": typed2.referTo("number, DenseMatrix", (selfnD) => (x, y) => selfnD(x, matrix2(y)).valueOf()),
    "BigNumber, Array": typed2.referTo("BigNumber, DenseMatrix", (selfBD) => (x, y) => selfBD(x, matrix2(y)).valueOf())
  };
});
var name$1z = "leftShift";
var dependencies$1z = ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix", "concat"];
var createLeftShift = /* @__PURE__ */ factory(name$1z, dependencies$1z, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    zeros: zeros2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo01xDSid = createMatAlgo01xDSid({
    typed: typed2
  });
  var matAlgo02xDS0 = createMatAlgo02xDS0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo08xS0Sid = createMatAlgo08xS0Sid({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo10xSids = createMatAlgo10xSids({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed: typed2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  var useMatrixForArrayScalar = createUseMatrixForArrayScalar({
    typed: typed2,
    matrix: matrix2
  });
  return typed2(name$1z, {
    "number, number": leftShiftNumber,
    "BigNumber, BigNumber": leftShiftBigNumber,
    "SparseMatrix, number | BigNumber": typed2.referToSelf((self) => (x, y) => {
      if (equalScalar2(y, 0)) {
        return x.clone();
      }
      return matAlgo11xS0s(x, y, self, false);
    }),
    "DenseMatrix, number | BigNumber": typed2.referToSelf((self) => (x, y) => {
      if (equalScalar2(y, 0)) {
        return x.clone();
      }
      return matAlgo14xDs(x, y, self, false);
    }),
    "number | BigNumber, SparseMatrix": typed2.referToSelf((self) => (x, y) => {
      if (equalScalar2(x, 0)) {
        return zeros2(y.size(), y.storage());
      }
      return matAlgo10xSids(y, x, self, true);
    }),
    "number | BigNumber, DenseMatrix": typed2.referToSelf((self) => (x, y) => {
      if (equalScalar2(x, 0)) {
        return zeros2(y.size(), y.storage());
      }
      return matAlgo14xDs(y, x, self, true);
    })
  }, useMatrixForArrayScalar, matrixAlgorithmSuite({
    SS: matAlgo08xS0Sid,
    DS: matAlgo01xDSid,
    SD: matAlgo02xDS0
  }));
});
var name$1A = "rightArithShift";
var dependencies$1A = ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix", "concat"];
var createRightArithShift = /* @__PURE__ */ factory(name$1A, dependencies$1A, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    zeros: zeros2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo01xDSid = createMatAlgo01xDSid({
    typed: typed2
  });
  var matAlgo02xDS0 = createMatAlgo02xDS0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo08xS0Sid = createMatAlgo08xS0Sid({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo10xSids = createMatAlgo10xSids({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed: typed2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  var useMatrixForArrayScalar = createUseMatrixForArrayScalar({
    typed: typed2,
    matrix: matrix2
  });
  return typed2(name$1A, {
    "number, number": rightArithShiftNumber,
    "BigNumber, BigNumber": rightArithShiftBigNumber,
    "SparseMatrix, number | BigNumber": typed2.referToSelf((self) => (x, y) => {
      if (equalScalar2(y, 0)) {
        return x.clone();
      }
      return matAlgo11xS0s(x, y, self, false);
    }),
    "DenseMatrix, number | BigNumber": typed2.referToSelf((self) => (x, y) => {
      if (equalScalar2(y, 0)) {
        return x.clone();
      }
      return matAlgo14xDs(x, y, self, false);
    }),
    "number | BigNumber, SparseMatrix": typed2.referToSelf((self) => (x, y) => {
      if (equalScalar2(x, 0)) {
        return zeros2(y.size(), y.storage());
      }
      return matAlgo10xSids(y, x, self, true);
    }),
    "number | BigNumber, DenseMatrix": typed2.referToSelf((self) => (x, y) => {
      if (equalScalar2(x, 0)) {
        return zeros2(y.size(), y.storage());
      }
      return matAlgo14xDs(y, x, self, true);
    })
  }, useMatrixForArrayScalar, matrixAlgorithmSuite({
    SS: matAlgo08xS0Sid,
    DS: matAlgo01xDSid,
    SD: matAlgo02xDS0
  }));
});
var name$1B = "rightLogShift";
var dependencies$1B = ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix", "concat"];
var createRightLogShift = /* @__PURE__ */ factory(name$1B, dependencies$1B, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    zeros: zeros2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo01xDSid = createMatAlgo01xDSid({
    typed: typed2
  });
  var matAlgo02xDS0 = createMatAlgo02xDS0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo08xS0Sid = createMatAlgo08xS0Sid({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo10xSids = createMatAlgo10xSids({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed: typed2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  var useMatrixForArrayScalar = createUseMatrixForArrayScalar({
    typed: typed2,
    matrix: matrix2
  });
  return typed2(name$1B, {
    "number, number": rightLogShiftNumber,
    "SparseMatrix, number | BigNumber": typed2.referToSelf((self) => (x, y) => {
      if (equalScalar2(y, 0)) {
        return x.clone();
      }
      return matAlgo11xS0s(x, y, self, false);
    }),
    "DenseMatrix, number | BigNumber": typed2.referToSelf((self) => (x, y) => {
      if (equalScalar2(y, 0)) {
        return x.clone();
      }
      return matAlgo14xDs(x, y, self, false);
    }),
    "number | BigNumber, SparseMatrix": typed2.referToSelf((self) => (x, y) => {
      if (equalScalar2(x, 0)) {
        return zeros2(y.size(), y.storage());
      }
      return matAlgo10xSids(y, x, self, true);
    }),
    "number | BigNumber, DenseMatrix": typed2.referToSelf((self) => (x, y) => {
      if (equalScalar2(x, 0)) {
        return zeros2(y.size(), y.storage());
      }
      return matAlgo14xDs(y, x, self, true);
    })
  }, useMatrixForArrayScalar, matrixAlgorithmSuite({
    SS: matAlgo08xS0Sid,
    DS: matAlgo01xDSid,
    SD: matAlgo02xDS0
  }));
});
var name$1C = "and";
var dependencies$1C = ["typed", "matrix", "equalScalar", "zeros", "not", "concat"];
var createAnd = /* @__PURE__ */ factory(name$1C, dependencies$1C, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    zeros: zeros2,
    not: not2,
    concat: concat2
  } = _ref;
  var matAlgo02xDS0 = createMatAlgo02xDS0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo06xS0S0 = createMatAlgo06xS0S0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed: typed2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$1C, {
    "number, number": andNumber,
    "Complex, Complex": function ComplexComplex(x, y) {
      return (x.re !== 0 || x.im !== 0) && (y.re !== 0 || y.im !== 0);
    },
    "BigNumber, BigNumber": function BigNumberBigNumber(x, y) {
      return !x.isZero() && !y.isZero() && !x.isNaN() && !y.isNaN();
    },
    "Unit, Unit": typed2.referToSelf((self) => (x, y) => self(x.value || 0, y.value || 0)),
    "SparseMatrix, any": typed2.referToSelf((self) => (x, y) => {
      if (not2(y)) {
        return zeros2(x.size(), x.storage());
      }
      return matAlgo11xS0s(x, y, self, false);
    }),
    "DenseMatrix, any": typed2.referToSelf((self) => (x, y) => {
      if (not2(y)) {
        return zeros2(x.size(), x.storage());
      }
      return matAlgo14xDs(x, y, self, false);
    }),
    "any, SparseMatrix": typed2.referToSelf((self) => (x, y) => {
      if (not2(x)) {
        return zeros2(x.size(), x.storage());
      }
      return matAlgo11xS0s(y, x, self, true);
    }),
    "any, DenseMatrix": typed2.referToSelf((self) => (x, y) => {
      if (not2(x)) {
        return zeros2(x.size(), x.storage());
      }
      return matAlgo14xDs(y, x, self, true);
    }),
    "Array, any": typed2.referToSelf((self) => (x, y) => {
      return self(matrix2(x), y).valueOf();
    }),
    "any, Array": typed2.referToSelf((self) => (x, y) => {
      return self(x, matrix2(y)).valueOf();
    })
  }, matrixAlgorithmSuite({
    SS: matAlgo06xS0S0,
    DS: matAlgo02xDS0
  }));
});
var name$1D = "sort";
var dependencies$1D = ["typed", "matrix", "compare", "compareNatural"];
var createSort = /* @__PURE__ */ factory(name$1D, dependencies$1D, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    compare: compare2,
    compareNatural: compareNatural2
  } = _ref;
  var compareAsc = compare2;
  var compareDesc = (a, b10) => -compare2(a, b10);
  return typed2(name$1D, {
    Array: function Array2(x) {
      _arrayIsVector(x);
      return x.sort(compareAsc);
    },
    Matrix: function Matrix2(x) {
      _matrixIsVector(x);
      return matrix2(x.toArray().sort(compareAsc), x.storage());
    },
    "Array, function": function ArrayFunction(x, _comparator2) {
      _arrayIsVector(x);
      return x.sort(_comparator2);
    },
    "Matrix, function": function MatrixFunction(x, _comparator2) {
      _matrixIsVector(x);
      return matrix2(x.toArray().sort(_comparator2), x.storage());
    },
    "Array, string": function ArrayString(x, order) {
      _arrayIsVector(x);
      return x.sort(_comparator(order));
    },
    "Matrix, string": function MatrixString(x, order) {
      _matrixIsVector(x);
      return matrix2(x.toArray().sort(_comparator(order)), x.storage());
    }
  });
  function _comparator(order) {
    if (order === "asc") {
      return compareAsc;
    } else if (order === "desc") {
      return compareDesc;
    } else if (order === "natural") {
      return compareNatural2;
    } else {
      throw new Error('String "asc", "desc", or "natural" expected');
    }
  }
  function _arrayIsVector(array) {
    if (arraySize(array).length !== 1) {
      throw new Error("One dimensional array expected");
    }
  }
  function _matrixIsVector(matrix3) {
    if (matrix3.size().length !== 1) {
      throw new Error("One dimensional matrix expected");
    }
  }
});
var name$1E = "ImmutableDenseMatrix";
var dependencies$1E = ["smaller", "DenseMatrix"];
var createImmutableDenseMatrixClass = /* @__PURE__ */ factory(name$1E, dependencies$1E, (_ref) => {
  var {
    smaller: smaller2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  function ImmutableDenseMatrix2(data, datatype) {
    if (!(this instanceof ImmutableDenseMatrix2)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
    if (datatype && !isString(datatype)) {
      throw new Error("Invalid datatype: " + datatype);
    }
    if (isMatrix(data) || isArray(data)) {
      var matrix2 = new DenseMatrix2(data, datatype);
      this._data = matrix2._data;
      this._size = matrix2._size;
      this._datatype = matrix2._datatype;
      this._min = null;
      this._max = null;
    } else if (data && isArray(data.data) && isArray(data.size)) {
      this._data = data.data;
      this._size = data.size;
      this._datatype = data.datatype;
      this._min = typeof data.min !== "undefined" ? data.min : null;
      this._max = typeof data.max !== "undefined" ? data.max : null;
    } else if (data) {
      throw new TypeError("Unsupported type of data (" + typeOf$1(data) + ")");
    } else {
      this._data = [];
      this._size = [0];
      this._datatype = datatype;
      this._min = null;
      this._max = null;
    }
  }
  ImmutableDenseMatrix2.prototype = new DenseMatrix2();
  ImmutableDenseMatrix2.prototype.type = "ImmutableDenseMatrix";
  ImmutableDenseMatrix2.prototype.isImmutableDenseMatrix = true;
  ImmutableDenseMatrix2.prototype.subset = function(index2) {
    switch (arguments.length) {
      case 1: {
        var m = DenseMatrix2.prototype.subset.call(this, index2);
        if (isMatrix(m)) {
          return new ImmutableDenseMatrix2({
            data: m._data,
            size: m._size,
            datatype: m._datatype
          });
        }
        return m;
      }
      case 2:
      case 3:
        throw new Error("Cannot invoke set subset on an Immutable Matrix instance");
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  };
  ImmutableDenseMatrix2.prototype.set = function() {
    throw new Error("Cannot invoke set on an Immutable Matrix instance");
  };
  ImmutableDenseMatrix2.prototype.resize = function() {
    throw new Error("Cannot invoke resize on an Immutable Matrix instance");
  };
  ImmutableDenseMatrix2.prototype.reshape = function() {
    throw new Error("Cannot invoke reshape on an Immutable Matrix instance");
  };
  ImmutableDenseMatrix2.prototype.clone = function() {
    return new ImmutableDenseMatrix2({
      data: clone$1(this._data),
      size: clone$1(this._size),
      datatype: this._datatype
    });
  };
  ImmutableDenseMatrix2.prototype.toJSON = function() {
    return {
      mathjs: "ImmutableDenseMatrix",
      data: this._data,
      size: this._size,
      datatype: this._datatype
    };
  };
  ImmutableDenseMatrix2.fromJSON = function(json) {
    return new ImmutableDenseMatrix2(json);
  };
  ImmutableDenseMatrix2.prototype.swapRows = function() {
    throw new Error("Cannot invoke swapRows on an Immutable Matrix instance");
  };
  ImmutableDenseMatrix2.prototype.min = function() {
    if (this._min === null) {
      var m = null;
      this.forEach(function(v) {
        if (m === null || smaller2(v, m)) {
          m = v;
        }
      });
      this._min = m !== null ? m : void 0;
    }
    return this._min;
  };
  ImmutableDenseMatrix2.prototype.max = function() {
    if (this._max === null) {
      var m = null;
      this.forEach(function(v) {
        if (m === null || smaller2(m, v)) {
          m = v;
        }
      });
      this._max = m !== null ? m : void 0;
    }
    return this._max;
  };
  return ImmutableDenseMatrix2;
}, {
  isClass: true
});
var name$1F = "Index";
var dependencies$1F = ["ImmutableDenseMatrix"];
var createIndexClass = /* @__PURE__ */ factory(name$1F, dependencies$1F, (_ref) => {
  var {
    ImmutableDenseMatrix: ImmutableDenseMatrix2
  } = _ref;
  function Index2(ranges) {
    if (!(this instanceof Index2)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
    this._dimensions = [];
    this._isScalar = true;
    for (var i3 = 0, ii = arguments.length; i3 < ii; i3++) {
      var arg2 = arguments[i3];
      if (isRange(arg2)) {
        this._dimensions.push(arg2);
        this._isScalar = false;
      } else if (Array.isArray(arg2) || isMatrix(arg2)) {
        var m = _createImmutableMatrix(arg2.valueOf());
        this._dimensions.push(m);
        var size2 = m.size();
        if (size2.length !== 1 || size2[0] !== 1) {
          this._isScalar = false;
        }
      } else if (typeof arg2 === "number") {
        this._dimensions.push(_createImmutableMatrix([arg2]));
      } else if (typeof arg2 === "string") {
        this._dimensions.push(arg2);
      } else {
        throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
      }
    }
  }
  Index2.prototype.type = "Index";
  Index2.prototype.isIndex = true;
  function _createImmutableMatrix(arg2) {
    for (var i3 = 0, l = arg2.length; i3 < l; i3++) {
      if (typeof arg2[i3] !== "number" || !isInteger$1(arg2[i3])) {
        throw new TypeError("Index parameters must be positive integer numbers");
      }
    }
    return new ImmutableDenseMatrix2(arg2);
  }
  Index2.prototype.clone = function() {
    var index2 = new Index2();
    index2._dimensions = clone$1(this._dimensions);
    index2._isScalar = this._isScalar;
    return index2;
  };
  Index2.create = function(ranges) {
    var index2 = new Index2();
    Index2.apply(index2, ranges);
    return index2;
  };
  Index2.prototype.size = function() {
    var size2 = [];
    for (var i3 = 0, ii = this._dimensions.length; i3 < ii; i3++) {
      var d10 = this._dimensions[i3];
      size2[i3] = typeof d10 === "string" ? 1 : d10.size()[0];
    }
    return size2;
  };
  Index2.prototype.max = function() {
    var values = [];
    for (var i3 = 0, ii = this._dimensions.length; i3 < ii; i3++) {
      var range2 = this._dimensions[i3];
      values[i3] = typeof range2 === "string" ? range2 : range2.max();
    }
    return values;
  };
  Index2.prototype.min = function() {
    var values = [];
    for (var i3 = 0, ii = this._dimensions.length; i3 < ii; i3++) {
      var range2 = this._dimensions[i3];
      values[i3] = typeof range2 === "string" ? range2 : range2.min();
    }
    return values;
  };
  Index2.prototype.forEach = function(callback) {
    for (var i3 = 0, ii = this._dimensions.length; i3 < ii; i3++) {
      callback(this._dimensions[i3], i3, this);
    }
  };
  Index2.prototype.dimension = function(dim) {
    return this._dimensions[dim] || null;
  };
  Index2.prototype.isObjectProperty = function() {
    return this._dimensions.length === 1 && typeof this._dimensions[0] === "string";
  };
  Index2.prototype.getObjectProperty = function() {
    return this.isObjectProperty() ? this._dimensions[0] : null;
  };
  Index2.prototype.isScalar = function() {
    return this._isScalar;
  };
  Index2.prototype.toArray = function() {
    var array = [];
    for (var i3 = 0, ii = this._dimensions.length; i3 < ii; i3++) {
      var dimension = this._dimensions[i3];
      array.push(typeof dimension === "string" ? dimension : dimension.toArray());
    }
    return array;
  };
  Index2.prototype.valueOf = Index2.prototype.toArray;
  Index2.prototype.toString = function() {
    var strings = [];
    for (var i3 = 0, ii = this._dimensions.length; i3 < ii; i3++) {
      var dimension = this._dimensions[i3];
      if (typeof dimension === "string") {
        strings.push(JSON.stringify(dimension));
      } else {
        strings.push(dimension.toString());
      }
    }
    return "[" + strings.join(", ") + "]";
  };
  Index2.prototype.toJSON = function() {
    return {
      mathjs: "Index",
      dimensions: this._dimensions
    };
  };
  Index2.fromJSON = function(json) {
    return Index2.create(json.dimensions);
  };
  return Index2;
}, {
  isClass: true
});
var name$1G = "FibonacciHeap";
var dependencies$1G = ["smaller", "larger"];
var createFibonacciHeapClass = /* @__PURE__ */ factory(name$1G, dependencies$1G, (_ref) => {
  var {
    smaller: smaller2,
    larger: larger2
  } = _ref;
  var oneOverLogPhi = 1 / Math.log((1 + Math.sqrt(5)) / 2);
  function FibonacciHeap2() {
    if (!(this instanceof FibonacciHeap2)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
    this._minimum = null;
    this._size = 0;
  }
  FibonacciHeap2.prototype.type = "FibonacciHeap";
  FibonacciHeap2.prototype.isFibonacciHeap = true;
  FibonacciHeap2.prototype.insert = function(key, value) {
    var node = {
      key,
      value,
      degree: 0
    };
    if (this._minimum) {
      var minimum = this._minimum;
      node.left = minimum;
      node.right = minimum.right;
      minimum.right = node;
      node.right.left = node;
      if (smaller2(key, minimum.key)) {
        this._minimum = node;
      }
    } else {
      node.left = node;
      node.right = node;
      this._minimum = node;
    }
    this._size++;
    return node;
  };
  FibonacciHeap2.prototype.size = function() {
    return this._size;
  };
  FibonacciHeap2.prototype.clear = function() {
    this._minimum = null;
    this._size = 0;
  };
  FibonacciHeap2.prototype.isEmpty = function() {
    return this._size === 0;
  };
  FibonacciHeap2.prototype.extractMinimum = function() {
    var node = this._minimum;
    if (node === null) {
      return node;
    }
    var minimum = this._minimum;
    var numberOfChildren = node.degree;
    var x = node.child;
    while (numberOfChildren > 0) {
      var tempRight = x.right;
      x.left.right = x.right;
      x.right.left = x.left;
      x.left = minimum;
      x.right = minimum.right;
      minimum.right = x;
      x.right.left = x;
      x.parent = null;
      x = tempRight;
      numberOfChildren--;
    }
    node.left.right = node.right;
    node.right.left = node.left;
    if (node === node.right) {
      minimum = null;
    } else {
      minimum = node.right;
      minimum = _findMinimumNode(minimum, this._size);
    }
    this._size--;
    this._minimum = minimum;
    return node;
  };
  FibonacciHeap2.prototype.remove = function(node) {
    this._minimum = _decreaseKey(this._minimum, node, -1);
    this.extractMinimum();
  };
  function _decreaseKey(minimum, node, key) {
    node.key = key;
    var parent = node.parent;
    if (parent && smaller2(node.key, parent.key)) {
      _cut(minimum, node, parent);
      _cascadingCut(minimum, parent);
    }
    if (smaller2(node.key, minimum.key)) {
      minimum = node;
    }
    return minimum;
  }
  function _cut(minimum, node, parent) {
    node.left.right = node.right;
    node.right.left = node.left;
    parent.degree--;
    if (parent.child === node) {
      parent.child = node.right;
    }
    if (parent.degree === 0) {
      parent.child = null;
    }
    node.left = minimum;
    node.right = minimum.right;
    minimum.right = node;
    node.right.left = node;
    node.parent = null;
    node.mark = false;
  }
  function _cascadingCut(minimum, node) {
    var parent = node.parent;
    if (!parent) {
      return;
    }
    if (!node.mark) {
      node.mark = true;
    } else {
      _cut(minimum, node, parent);
      _cascadingCut(parent);
    }
  }
  var _linkNodes = function _linkNodes2(node, parent) {
    node.left.right = node.right;
    node.right.left = node.left;
    node.parent = parent;
    if (!parent.child) {
      parent.child = node;
      node.right = node;
      node.left = node;
    } else {
      node.left = parent.child;
      node.right = parent.child.right;
      parent.child.right = node;
      node.right.left = node;
    }
    parent.degree++;
    node.mark = false;
  };
  function _findMinimumNode(minimum, size2) {
    var arraySize2 = Math.floor(Math.log(size2) * oneOverLogPhi) + 1;
    var array = new Array(arraySize2);
    var numRoots = 0;
    var x = minimum;
    if (x) {
      numRoots++;
      x = x.right;
      while (x !== minimum) {
        numRoots++;
        x = x.right;
      }
    }
    var y;
    while (numRoots > 0) {
      var d10 = x.degree;
      var next = x.right;
      while (true) {
        y = array[d10];
        if (!y) {
          break;
        }
        if (larger2(x.key, y.key)) {
          var temp = y;
          y = x;
          x = temp;
        }
        _linkNodes(y, x);
        array[d10] = null;
        d10++;
      }
      array[d10] = x;
      x = next;
      numRoots--;
    }
    minimum = null;
    for (var i3 = 0; i3 < arraySize2; i3++) {
      y = array[i3];
      if (!y) {
        continue;
      }
      if (minimum) {
        y.left.right = y.right;
        y.right.left = y.left;
        y.left = minimum;
        y.right = minimum.right;
        minimum.right = y;
        y.right.left = y;
        if (smaller2(y.key, minimum.key)) {
          minimum = y;
        }
      } else {
        minimum = y;
      }
    }
    return minimum;
  }
  return FibonacciHeap2;
}, {
  isClass: true
});
var name$1H = "Spa";
var dependencies$1H = ["addScalar", "equalScalar", "FibonacciHeap"];
var createSpaClass = /* @__PURE__ */ factory(name$1H, dependencies$1H, (_ref) => {
  var {
    addScalar: addScalar2,
    equalScalar: equalScalar2,
    FibonacciHeap: FibonacciHeap2
  } = _ref;
  function Spa2() {
    if (!(this instanceof Spa2)) {
      throw new SyntaxError("Constructor must be called with the new operator");
    }
    this._values = [];
    this._heap = new FibonacciHeap2();
  }
  Spa2.prototype.type = "Spa";
  Spa2.prototype.isSpa = true;
  Spa2.prototype.set = function(i3, v) {
    if (!this._values[i3]) {
      var node = this._heap.insert(i3, v);
      this._values[i3] = node;
    } else {
      this._values[i3].value = v;
    }
  };
  Spa2.prototype.get = function(i3) {
    var node = this._values[i3];
    if (node) {
      return node.value;
    }
    return 0;
  };
  Spa2.prototype.accumulate = function(i3, v) {
    var node = this._values[i3];
    if (!node) {
      node = this._heap.insert(i3, v);
      this._values[i3] = node;
    } else {
      node.value = addScalar2(node.value, v);
    }
  };
  Spa2.prototype.forEach = function(from, to2, callback) {
    var heap = this._heap;
    var values = this._values;
    var nodes = [];
    var node = heap.extractMinimum();
    if (node) {
      nodes.push(node);
    }
    while (node && node.key <= to2) {
      if (node.key >= from) {
        if (!equalScalar2(node.value, 0)) {
          callback(node.key, node.value, this);
        }
      }
      node = heap.extractMinimum();
      if (node) {
        nodes.push(node);
      }
    }
    for (var i3 = 0; i3 < nodes.length; i3++) {
      var n = nodes[i3];
      node = heap.insert(n.key, n.value);
      values[node.key] = node;
    }
  };
  Spa2.prototype.swap = function(i3, j) {
    var nodei = this._values[i3];
    var nodej = this._values[j];
    if (!nodei && nodej) {
      nodei = this._heap.insert(i3, nodej.value);
      this._heap.remove(nodej);
      this._values[i3] = nodei;
      this._values[j] = void 0;
    } else if (nodei && !nodej) {
      nodej = this._heap.insert(j, nodei.value);
      this._heap.remove(nodei);
      this._values[j] = nodej;
      this._values[i3] = void 0;
    } else if (nodei && nodej) {
      var v = nodei.value;
      nodei.value = nodej.value;
      nodej.value = v;
    }
  };
  return Spa2;
}, {
  isClass: true
});
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
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = arguments[i3] != null ? arguments[i3] : {};
    i3 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var name$1I = "Unit";
var dependencies$1I = ["?on", "config", "addScalar", "subtract", "multiplyScalar", "divideScalar", "pow", "abs", "fix", "round", "equal", "isNumeric", "format", "number", "Complex", "BigNumber", "Fraction"];
var createUnitClass = /* @__PURE__ */ factory(name$1I, dependencies$1I, (_ref) => {
  var {
    on,
    config: config2,
    addScalar: addScalar2,
    subtract: subtract2,
    multiplyScalar: multiplyScalar2,
    divideScalar: divideScalar2,
    pow: pow2,
    abs: abs2,
    fix: fix2,
    round: round2,
    equal: equal2,
    isNumeric: isNumeric2,
    format: format2,
    number: number2,
    Complex: Complex2,
    BigNumber: _BigNumber,
    Fraction: _Fraction
  } = _ref;
  var toNumber = number2;
  function Unit2(value, valuelessUnit) {
    if (!(this instanceof Unit2)) {
      throw new Error("Constructor must be called with the new operator");
    }
    if (!(value === null || value === void 0 || isNumeric2(value) || isComplex(value))) {
      throw new TypeError("First parameter in Unit constructor must be number, BigNumber, Fraction, Complex, or undefined");
    }
    this.fixPrefix = false;
    this.skipAutomaticSimplification = true;
    if (valuelessUnit === void 0) {
      this.units = [];
      this.dimensions = BASE_DIMENSIONS.map((x) => 0);
    } else if (typeof valuelessUnit === "string") {
      var u = Unit2.parse(valuelessUnit);
      this.units = u.units;
      this.dimensions = u.dimensions;
    } else if (isUnit(valuelessUnit) && valuelessUnit.value === null) {
      this.fixPrefix = valuelessUnit.fixPrefix;
      this.skipAutomaticSimplification = valuelessUnit.skipAutomaticSimplification;
      this.dimensions = valuelessUnit.dimensions.slice(0);
      this.units = valuelessUnit.units.map((u2) => _extends_1({}, u2));
    } else {
      throw new TypeError("Second parameter in Unit constructor must be a string or valueless Unit");
    }
    this.value = this._normalize(value);
  }
  Object.defineProperty(Unit2, "name", {
    value: "Unit"
  });
  Unit2.prototype.constructor = Unit2;
  Unit2.prototype.type = "Unit";
  Unit2.prototype.isUnit = true;
  var text, index2, c10;
  function skipWhitespace() {
    while (c10 === " " || c10 === "	") {
      next();
    }
  }
  function isDigitDot(c11) {
    return c11 >= "0" && c11 <= "9" || c11 === ".";
  }
  function isDigit(c11) {
    return c11 >= "0" && c11 <= "9";
  }
  function next() {
    index2++;
    c10 = text.charAt(index2);
  }
  function revert(oldIndex) {
    index2 = oldIndex;
    c10 = text.charAt(index2);
  }
  function parseNumber() {
    var number3 = "";
    var oldIndex = index2;
    if (c10 === "+") {
      next();
    } else if (c10 === "-") {
      number3 += c10;
      next();
    }
    if (!isDigitDot(c10)) {
      revert(oldIndex);
      return null;
    }
    if (c10 === ".") {
      number3 += c10;
      next();
      if (!isDigit(c10)) {
        revert(oldIndex);
        return null;
      }
    } else {
      while (isDigit(c10)) {
        number3 += c10;
        next();
      }
      if (c10 === ".") {
        number3 += c10;
        next();
      }
    }
    while (isDigit(c10)) {
      number3 += c10;
      next();
    }
    if (c10 === "E" || c10 === "e") {
      var tentativeNumber = "";
      var tentativeIndex = index2;
      tentativeNumber += c10;
      next();
      if (c10 === "+" || c10 === "-") {
        tentativeNumber += c10;
        next();
      }
      if (!isDigit(c10)) {
        revert(tentativeIndex);
        return number3;
      }
      number3 = number3 + tentativeNumber;
      while (isDigit(c10)) {
        number3 += c10;
        next();
      }
    }
    return number3;
  }
  function parseUnit() {
    var unitName = "";
    while (isDigit(c10) || Unit2.isValidAlpha(c10)) {
      unitName += c10;
      next();
    }
    var firstC = unitName.charAt(0);
    if (Unit2.isValidAlpha(firstC)) {
      return unitName;
    } else {
      return null;
    }
  }
  function parseCharacter(toFind) {
    if (c10 === toFind) {
      next();
      return toFind;
    } else {
      return null;
    }
  }
  Unit2.parse = function(str, options) {
    options = options || {};
    text = str;
    index2 = -1;
    c10 = "";
    if (typeof text !== "string") {
      throw new TypeError("Invalid argument in Unit.parse, string expected");
    }
    var unit3 = new Unit2();
    unit3.units = [];
    var powerMultiplierCurrent = 1;
    var expectingUnit = false;
    next();
    skipWhitespace();
    var valueStr = parseNumber();
    var value = null;
    if (valueStr) {
      if (config2.number === "BigNumber") {
        value = new _BigNumber(valueStr);
      } else if (config2.number === "Fraction") {
        try {
          value = new _Fraction(valueStr);
        } catch (err) {
          value = parseFloat(valueStr);
        }
      } else {
        value = parseFloat(valueStr);
      }
      skipWhitespace();
      if (parseCharacter("*")) {
        powerMultiplierCurrent = 1;
        expectingUnit = true;
      } else if (parseCharacter("/")) {
        powerMultiplierCurrent = -1;
        expectingUnit = true;
      }
    }
    var powerMultiplierStack = [];
    var powerMultiplierStackProduct = 1;
    while (true) {
      skipWhitespace();
      while (c10 === "(") {
        powerMultiplierStack.push(powerMultiplierCurrent);
        powerMultiplierStackProduct *= powerMultiplierCurrent;
        powerMultiplierCurrent = 1;
        next();
        skipWhitespace();
      }
      var uStr = void 0;
      if (c10) {
        var oldC = c10;
        uStr = parseUnit();
        if (uStr === null) {
          throw new SyntaxError('Unexpected "' + oldC + '" in "' + text + '" at index ' + index2.toString());
        }
      } else {
        break;
      }
      var res = _findUnit(uStr);
      if (res === null) {
        throw new SyntaxError('Unit "' + uStr + '" not found.');
      }
      var power = powerMultiplierCurrent * powerMultiplierStackProduct;
      skipWhitespace();
      if (parseCharacter("^")) {
        skipWhitespace();
        var p = parseNumber();
        if (p === null) {
          throw new SyntaxError('In "' + str + '", "^" must be followed by a floating-point number');
        }
        power *= p;
      }
      unit3.units.push({
        unit: res.unit,
        prefix: res.prefix,
        power
      });
      for (var i3 = 0; i3 < BASE_DIMENSIONS.length; i3++) {
        unit3.dimensions[i3] += (res.unit.dimensions[i3] || 0) * power;
      }
      skipWhitespace();
      while (c10 === ")") {
        if (powerMultiplierStack.length === 0) {
          throw new SyntaxError('Unmatched ")" in "' + text + '" at index ' + index2.toString());
        }
        powerMultiplierStackProduct /= powerMultiplierStack.pop();
        next();
        skipWhitespace();
      }
      expectingUnit = false;
      if (parseCharacter("*")) {
        powerMultiplierCurrent = 1;
        expectingUnit = true;
      } else if (parseCharacter("/")) {
        powerMultiplierCurrent = -1;
        expectingUnit = true;
      } else {
        powerMultiplierCurrent = 1;
      }
      if (res.unit.base) {
        var baseDim = res.unit.base.key;
        UNIT_SYSTEMS.auto[baseDim] = {
          unit: res.unit,
          prefix: res.prefix
        };
      }
    }
    skipWhitespace();
    if (c10) {
      throw new SyntaxError('Could not parse: "' + str + '"');
    }
    if (expectingUnit) {
      throw new SyntaxError('Trailing characters: "' + str + '"');
    }
    if (powerMultiplierStack.length !== 0) {
      throw new SyntaxError('Unmatched "(" in "' + text + '"');
    }
    if (unit3.units.length === 0 && !options.allowNoUnits) {
      throw new SyntaxError('"' + str + '" contains no units');
    }
    unit3.value = value !== void 0 ? unit3._normalize(value) : null;
    return unit3;
  };
  Unit2.prototype.clone = function() {
    var unit3 = new Unit2();
    unit3.fixPrefix = this.fixPrefix;
    unit3.skipAutomaticSimplification = this.skipAutomaticSimplification;
    unit3.value = clone$1(this.value);
    unit3.dimensions = this.dimensions.slice(0);
    unit3.units = [];
    for (var i3 = 0; i3 < this.units.length; i3++) {
      unit3.units[i3] = {};
      for (var p in this.units[i3]) {
        if (hasOwnProperty(this.units[i3], p)) {
          unit3.units[i3][p] = this.units[i3][p];
        }
      }
    }
    return unit3;
  };
  Unit2.prototype.valueType = function() {
    return typeOf$1(this.value);
  };
  Unit2.prototype._isDerived = function() {
    if (this.units.length === 0) {
      return false;
    }
    return this.units.length > 1 || Math.abs(this.units[0].power - 1) > 1e-15;
  };
  Unit2.prototype._normalize = function(value) {
    if (value === null || value === void 0 || this.units.length === 0) {
      return value;
    }
    var res = value;
    var convert = Unit2._getNumberConverter(typeOf$1(value));
    for (var i3 = 0; i3 < this.units.length; i3++) {
      var unitValue = convert(this.units[i3].unit.value);
      var unitPrefixValue = convert(this.units[i3].prefix.value);
      var unitPower = convert(this.units[i3].power);
      res = multiplyScalar2(res, pow2(multiplyScalar2(unitValue, unitPrefixValue), unitPower));
    }
    return res;
  };
  Unit2.prototype._denormalize = function(value, prefixValue) {
    if (value === null || value === void 0 || this.units.length === 0) {
      return value;
    }
    var res = value;
    var convert = Unit2._getNumberConverter(typeOf$1(value));
    for (var i3 = 0; i3 < this.units.length; i3++) {
      var unitValue = convert(this.units[i3].unit.value);
      var unitPrefixValue = convert(this.units[i3].prefix.value);
      var unitPower = convert(this.units[i3].power);
      res = divideScalar2(res, pow2(multiplyScalar2(unitValue, unitPrefixValue), unitPower));
    }
    return res;
  };
  var _findUnit = memoize((str) => {
    if (hasOwnProperty(UNITS, str)) {
      var unit3 = UNITS[str];
      var prefix = unit3.prefixes[""];
      return {
        unit: unit3,
        prefix
      };
    }
    for (var _name in UNITS) {
      if (hasOwnProperty(UNITS, _name)) {
        if (endsWith(str, _name)) {
          var _unit = UNITS[_name];
          var prefixLen = str.length - _name.length;
          var prefixName = str.substring(0, prefixLen);
          var _prefix = hasOwnProperty(_unit.prefixes, prefixName) ? _unit.prefixes[prefixName] : void 0;
          if (_prefix !== void 0) {
            return {
              unit: _unit,
              prefix: _prefix
            };
          }
        }
      }
    }
    return null;
  }, {
    hasher: (args) => args[0],
    limit: 100
  });
  Unit2.isValuelessUnit = function(name2) {
    return _findUnit(name2) !== null;
  };
  Unit2.prototype.hasBase = function(base) {
    if (typeof base === "string") {
      base = BASE_UNITS[base];
    }
    if (!base) {
      return false;
    }
    for (var i3 = 0; i3 < BASE_DIMENSIONS.length; i3++) {
      if (Math.abs((this.dimensions[i3] || 0) - (base.dimensions[i3] || 0)) > 1e-12) {
        return false;
      }
    }
    return true;
  };
  Unit2.prototype.equalBase = function(other) {
    for (var i3 = 0; i3 < BASE_DIMENSIONS.length; i3++) {
      if (Math.abs((this.dimensions[i3] || 0) - (other.dimensions[i3] || 0)) > 1e-12) {
        return false;
      }
    }
    return true;
  };
  Unit2.prototype.equals = function(other) {
    return this.equalBase(other) && equal2(this.value, other.value);
  };
  Unit2.prototype.multiply = function(_other) {
    var res = this.clone();
    var other = isUnit(_other) ? _other : new Unit2(_other);
    for (var i3 = 0; i3 < BASE_DIMENSIONS.length; i3++) {
      res.dimensions[i3] = (this.dimensions[i3] || 0) + (other.dimensions[i3] || 0);
    }
    for (var _i = 0; _i < other.units.length; _i++) {
      var inverted = _objectSpread({}, other.units[_i]);
      res.units.push(inverted);
    }
    if (this.value !== null || other.value !== null) {
      var valThis = this.value === null ? this._normalize(1) : this.value;
      var valOther = other.value === null ? other._normalize(1) : other.value;
      res.value = multiplyScalar2(valThis, valOther);
    } else {
      res.value = null;
    }
    if (isUnit(_other)) {
      res.skipAutomaticSimplification = false;
    }
    return getNumericIfUnitless(res);
  };
  Unit2.prototype.divideInto = function(numerator) {
    return new Unit2(numerator).divide(this);
  };
  Unit2.prototype.divide = function(_other) {
    var res = this.clone();
    var other = isUnit(_other) ? _other : new Unit2(_other);
    for (var i3 = 0; i3 < BASE_DIMENSIONS.length; i3++) {
      res.dimensions[i3] = (this.dimensions[i3] || 0) - (other.dimensions[i3] || 0);
    }
    for (var _i2 = 0; _i2 < other.units.length; _i2++) {
      var inverted = _objectSpread(_objectSpread({}, other.units[_i2]), {}, {
        power: -other.units[_i2].power
      });
      res.units.push(inverted);
    }
    if (this.value !== null || other.value !== null) {
      var valThis = this.value === null ? this._normalize(1) : this.value;
      var valOther = other.value === null ? other._normalize(1) : other.value;
      res.value = divideScalar2(valThis, valOther);
    } else {
      res.value = null;
    }
    if (isUnit(_other)) {
      res.skipAutomaticSimplification = false;
    }
    return getNumericIfUnitless(res);
  };
  Unit2.prototype.pow = function(p) {
    var res = this.clone();
    for (var i3 = 0; i3 < BASE_DIMENSIONS.length; i3++) {
      res.dimensions[i3] = (this.dimensions[i3] || 0) * p;
    }
    for (var _i3 = 0; _i3 < res.units.length; _i3++) {
      res.units[_i3].power *= p;
    }
    if (res.value !== null) {
      res.value = pow2(res.value, p);
    } else {
      res.value = null;
    }
    res.skipAutomaticSimplification = false;
    return getNumericIfUnitless(res);
  };
  function getNumericIfUnitless(unit3) {
    if (unit3.equalBase(BASE_UNITS.NONE) && unit3.value !== null && !config2.predictable) {
      return unit3.value;
    } else {
      return unit3;
    }
  }
  Unit2.prototype.abs = function() {
    var ret = this.clone();
    if (ret.value !== null) {
      if (ret._isDerived() || ret.units[0].unit.offset === 0) {
        ret.value = abs2(ret.value);
      } else {
        var convert = ret._numberConverter();
        var unitValue = convert(ret.units[0].unit.value);
        var nominalOffset = convert(ret.units[0].unit.offset);
        var unitOffset = multiplyScalar2(unitValue, nominalOffset);
        ret.value = subtract2(abs2(addScalar2(ret.value, unitOffset)), unitOffset);
      }
    }
    for (var i3 in ret.units) {
      if (ret.units[i3].unit.name === "VA" || ret.units[i3].unit.name === "VAR") {
        ret.units[i3].unit = UNITS.W;
      }
    }
    return ret;
  };
  Unit2.prototype.to = function(valuelessUnit) {
    var value = this.value === null ? this._normalize(1) : this.value;
    var other;
    if (typeof valuelessUnit === "string") {
      other = Unit2.parse(valuelessUnit);
    } else if (isUnit(valuelessUnit)) {
      other = valuelessUnit.clone();
    } else {
      throw new Error("String or Unit expected as parameter");
    }
    if (!this.equalBase(other)) {
      throw new Error("Units do not match ('".concat(other.toString(), "' != '").concat(this.toString(), "')"));
    }
    if (other.value !== null) {
      throw new Error("Cannot convert to a unit with a value");
    }
    if (this.value === null || this._isDerived() || this.units[0].unit.offset === other.units[0].unit.offset) {
      other.value = clone$1(value);
    } else {
      var convert = Unit2._getNumberConverter(typeOf$1(value));
      var thisUnitValue = convert(this.units[0].unit.value);
      var thisNominalOffset = convert(this.units[0].unit.offset);
      var thisUnitOffset = multiplyScalar2(thisUnitValue, thisNominalOffset);
      var otherUnitValue = convert(other.units[0].unit.value);
      var otherNominalOffset = convert(other.units[0].unit.offset);
      var otherUnitOffset = multiplyScalar2(otherUnitValue, otherNominalOffset);
      other.value = subtract2(addScalar2(value, thisUnitOffset), otherUnitOffset);
    }
    other.fixPrefix = true;
    other.skipAutomaticSimplification = true;
    return other;
  };
  Unit2.prototype.toNumber = function(valuelessUnit) {
    return toNumber(this.toNumeric(valuelessUnit));
  };
  Unit2.prototype.toNumeric = function(valuelessUnit) {
    var other;
    if (valuelessUnit) {
      other = this.to(valuelessUnit);
    } else {
      other = this.clone();
    }
    if (other._isDerived() || other.units.length === 0) {
      return other._denormalize(other.value);
    } else {
      return other._denormalize(other.value, other.units[0].prefix.value);
    }
  };
  Unit2.prototype.toString = function() {
    return this.format();
  };
  Unit2.prototype.toJSON = function() {
    return {
      mathjs: "Unit",
      value: this._denormalize(this.value),
      unit: this.formatUnits(),
      fixPrefix: this.fixPrefix
    };
  };
  Unit2.fromJSON = function(json) {
    var unit3 = new Unit2(json.value, json.unit);
    unit3.fixPrefix = json.fixPrefix || false;
    return unit3;
  };
  Unit2.prototype.valueOf = Unit2.prototype.toString;
  Unit2.prototype.simplify = function() {
    var ret = this.clone();
    var proposedUnitList = [];
    var matchingBase;
    for (var key2 in currentUnitSystem) {
      if (hasOwnProperty(currentUnitSystem, key2)) {
        if (ret.hasBase(BASE_UNITS[key2])) {
          matchingBase = key2;
          break;
        }
      }
    }
    if (matchingBase === "NONE") {
      ret.units = [];
    } else {
      var matchingUnit;
      if (matchingBase) {
        if (hasOwnProperty(currentUnitSystem, matchingBase)) {
          matchingUnit = currentUnitSystem[matchingBase];
        }
      }
      if (matchingUnit) {
        ret.units = [{
          unit: matchingUnit.unit,
          prefix: matchingUnit.prefix,
          power: 1
        }];
      } else {
        var missingBaseDim = false;
        for (var i3 = 0; i3 < BASE_DIMENSIONS.length; i3++) {
          var baseDim = BASE_DIMENSIONS[i3];
          if (Math.abs(ret.dimensions[i3] || 0) > 1e-12) {
            if (hasOwnProperty(currentUnitSystem, baseDim)) {
              proposedUnitList.push({
                unit: currentUnitSystem[baseDim].unit,
                prefix: currentUnitSystem[baseDim].prefix,
                power: ret.dimensions[i3] || 0
              });
            } else {
              missingBaseDim = true;
            }
          }
        }
        if (proposedUnitList.length < ret.units.length && !missingBaseDim) {
          ret.units = proposedUnitList;
        }
      }
    }
    return ret;
  };
  Unit2.prototype.toSI = function() {
    var ret = this.clone();
    var proposedUnitList = [];
    for (var i3 = 0; i3 < BASE_DIMENSIONS.length; i3++) {
      var baseDim = BASE_DIMENSIONS[i3];
      if (Math.abs(ret.dimensions[i3] || 0) > 1e-12) {
        if (hasOwnProperty(UNIT_SYSTEMS.si, baseDim)) {
          proposedUnitList.push({
            unit: UNIT_SYSTEMS.si[baseDim].unit,
            prefix: UNIT_SYSTEMS.si[baseDim].prefix,
            power: ret.dimensions[i3] || 0
          });
        } else {
          throw new Error("Cannot express custom unit " + baseDim + " in SI units");
        }
      }
    }
    ret.units = proposedUnitList;
    ret.fixPrefix = true;
    ret.skipAutomaticSimplification = true;
    return ret;
  };
  Unit2.prototype.formatUnits = function() {
    var strNum = "";
    var strDen = "";
    var nNum = 0;
    var nDen = 0;
    for (var i3 = 0; i3 < this.units.length; i3++) {
      if (this.units[i3].power > 0) {
        nNum++;
        strNum += " " + this.units[i3].prefix.name + this.units[i3].unit.name;
        if (Math.abs(this.units[i3].power - 1) > 1e-15) {
          strNum += "^" + this.units[i3].power;
        }
      } else if (this.units[i3].power < 0) {
        nDen++;
      }
    }
    if (nDen > 0) {
      for (var _i4 = 0; _i4 < this.units.length; _i4++) {
        if (this.units[_i4].power < 0) {
          if (nNum > 0) {
            strDen += " " + this.units[_i4].prefix.name + this.units[_i4].unit.name;
            if (Math.abs(this.units[_i4].power + 1) > 1e-15) {
              strDen += "^" + -this.units[_i4].power;
            }
          } else {
            strDen += " " + this.units[_i4].prefix.name + this.units[_i4].unit.name;
            strDen += "^" + this.units[_i4].power;
          }
        }
      }
    }
    strNum = strNum.substr(1);
    strDen = strDen.substr(1);
    if (nNum > 1 && nDen > 0) {
      strNum = "(" + strNum + ")";
    }
    if (nDen > 1 && nNum > 0) {
      strDen = "(" + strDen + ")";
    }
    var str = strNum;
    if (nNum > 0 && nDen > 0) {
      str += " / ";
    }
    str += strDen;
    return str;
  };
  Unit2.prototype.format = function(options) {
    var simp = this.skipAutomaticSimplification || this.value === null ? this.clone() : this.simplify();
    var isImaginary = false;
    if (typeof simp.value !== "undefined" && simp.value !== null && isComplex(simp.value)) {
      isImaginary = Math.abs(simp.value.re) < 1e-14;
    }
    for (var i3 in simp.units) {
      if (hasOwnProperty(simp.units, i3)) {
        if (simp.units[i3].unit) {
          if (simp.units[i3].unit.name === "VA" && isImaginary) {
            simp.units[i3].unit = UNITS.VAR;
          } else if (simp.units[i3].unit.name === "VAR" && !isImaginary) {
            simp.units[i3].unit = UNITS.VA;
          }
        }
      }
    }
    if (simp.units.length === 1 && !simp.fixPrefix) {
      if (Math.abs(simp.units[0].power - Math.round(simp.units[0].power)) < 1e-14) {
        simp.units[0].prefix = simp._bestPrefix();
      }
    }
    var value = simp._denormalize(simp.value);
    var str = simp.value !== null ? format2(value, options || {}) : "";
    var unitStr = simp.formatUnits();
    if (simp.value && isComplex(simp.value)) {
      str = "(" + str + ")";
    }
    if (unitStr.length > 0 && str.length > 0) {
      str += " ";
    }
    str += unitStr;
    return str;
  };
  Unit2.prototype._bestPrefix = function() {
    if (this.units.length !== 1) {
      throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
    }
    if (Math.abs(this.units[0].power - Math.round(this.units[0].power)) >= 1e-14) {
      throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
    }
    var absValue = this.value !== null ? abs2(this.value) : 0;
    var absUnitValue = abs2(this.units[0].unit.value);
    var bestPrefix = this.units[0].prefix;
    if (absValue === 0) {
      return bestPrefix;
    }
    var power = this.units[0].power;
    var bestDiff = Math.log(absValue / Math.pow(bestPrefix.value * absUnitValue, power)) / Math.LN10 - 1.2;
    if (bestDiff > -2.200001 && bestDiff < 1.800001)
      return bestPrefix;
    bestDiff = Math.abs(bestDiff);
    var prefixes = this.units[0].unit.prefixes;
    for (var p in prefixes) {
      if (hasOwnProperty(prefixes, p)) {
        var prefix = prefixes[p];
        if (prefix.scientific) {
          var diff2 = Math.abs(Math.log(absValue / Math.pow(prefix.value * absUnitValue, power)) / Math.LN10 - 1.2);
          if (diff2 < bestDiff || diff2 === bestDiff && prefix.name.length < bestPrefix.name.length) {
            bestPrefix = prefix;
            bestDiff = diff2;
          }
        }
      }
    }
    return bestPrefix;
  };
  Unit2.prototype.splitUnit = function(parts) {
    var x = this.clone();
    var ret = [];
    for (var i3 = 0; i3 < parts.length; i3++) {
      x = x.to(parts[i3]);
      if (i3 === parts.length - 1)
        break;
      var xNumeric = x.toNumeric();
      var xRounded = round2(xNumeric);
      var xFixed = void 0;
      var isNearlyEqual = equal2(xRounded, xNumeric);
      if (isNearlyEqual) {
        xFixed = xRounded;
      } else {
        xFixed = fix2(x.toNumeric());
      }
      var y = new Unit2(xFixed, parts[i3].toString());
      ret.push(y);
      x = subtract2(x, y);
    }
    var testSum = 0;
    for (var _i5 = 0; _i5 < ret.length; _i5++) {
      testSum = addScalar2(testSum, ret[_i5].value);
    }
    if (equal2(testSum, this.value)) {
      x.value = 0;
    }
    ret.push(x);
    return ret;
  };
  var PREFIXES = {
    NONE: {
      "": {
        name: "",
        value: 1,
        scientific: true
      }
    },
    SHORT: {
      "": {
        name: "",
        value: 1,
        scientific: true
      },
      da: {
        name: "da",
        value: 10,
        scientific: false
      },
      h: {
        name: "h",
        value: 100,
        scientific: false
      },
      k: {
        name: "k",
        value: 1e3,
        scientific: true
      },
      M: {
        name: "M",
        value: 1e6,
        scientific: true
      },
      G: {
        name: "G",
        value: 1e9,
        scientific: true
      },
      T: {
        name: "T",
        value: 1e12,
        scientific: true
      },
      P: {
        name: "P",
        value: 1e15,
        scientific: true
      },
      E: {
        name: "E",
        value: 1e18,
        scientific: true
      },
      Z: {
        name: "Z",
        value: 1e21,
        scientific: true
      },
      Y: {
        name: "Y",
        value: 1e24,
        scientific: true
      },
      d: {
        name: "d",
        value: 0.1,
        scientific: false
      },
      c: {
        name: "c",
        value: 0.01,
        scientific: false
      },
      m: {
        name: "m",
        value: 1e-3,
        scientific: true
      },
      u: {
        name: "u",
        value: 1e-6,
        scientific: true
      },
      n: {
        name: "n",
        value: 1e-9,
        scientific: true
      },
      p: {
        name: "p",
        value: 1e-12,
        scientific: true
      },
      f: {
        name: "f",
        value: 1e-15,
        scientific: true
      },
      a: {
        name: "a",
        value: 1e-18,
        scientific: true
      },
      z: {
        name: "z",
        value: 1e-21,
        scientific: true
      },
      y: {
        name: "y",
        value: 1e-24,
        scientific: true
      }
    },
    LONG: {
      "": {
        name: "",
        value: 1,
        scientific: true
      },
      deca: {
        name: "deca",
        value: 10,
        scientific: false
      },
      hecto: {
        name: "hecto",
        value: 100,
        scientific: false
      },
      kilo: {
        name: "kilo",
        value: 1e3,
        scientific: true
      },
      mega: {
        name: "mega",
        value: 1e6,
        scientific: true
      },
      giga: {
        name: "giga",
        value: 1e9,
        scientific: true
      },
      tera: {
        name: "tera",
        value: 1e12,
        scientific: true
      },
      peta: {
        name: "peta",
        value: 1e15,
        scientific: true
      },
      exa: {
        name: "exa",
        value: 1e18,
        scientific: true
      },
      zetta: {
        name: "zetta",
        value: 1e21,
        scientific: true
      },
      yotta: {
        name: "yotta",
        value: 1e24,
        scientific: true
      },
      deci: {
        name: "deci",
        value: 0.1,
        scientific: false
      },
      centi: {
        name: "centi",
        value: 0.01,
        scientific: false
      },
      milli: {
        name: "milli",
        value: 1e-3,
        scientific: true
      },
      micro: {
        name: "micro",
        value: 1e-6,
        scientific: true
      },
      nano: {
        name: "nano",
        value: 1e-9,
        scientific: true
      },
      pico: {
        name: "pico",
        value: 1e-12,
        scientific: true
      },
      femto: {
        name: "femto",
        value: 1e-15,
        scientific: true
      },
      atto: {
        name: "atto",
        value: 1e-18,
        scientific: true
      },
      zepto: {
        name: "zepto",
        value: 1e-21,
        scientific: true
      },
      yocto: {
        name: "yocto",
        value: 1e-24,
        scientific: true
      }
    },
    SQUARED: {
      "": {
        name: "",
        value: 1,
        scientific: true
      },
      da: {
        name: "da",
        value: 100,
        scientific: false
      },
      h: {
        name: "h",
        value: 1e4,
        scientific: false
      },
      k: {
        name: "k",
        value: 1e6,
        scientific: true
      },
      M: {
        name: "M",
        value: 1e12,
        scientific: true
      },
      G: {
        name: "G",
        value: 1e18,
        scientific: true
      },
      T: {
        name: "T",
        value: 1e24,
        scientific: true
      },
      P: {
        name: "P",
        value: 1e30,
        scientific: true
      },
      E: {
        name: "E",
        value: 1e36,
        scientific: true
      },
      Z: {
        name: "Z",
        value: 1e42,
        scientific: true
      },
      Y: {
        name: "Y",
        value: 1e48,
        scientific: true
      },
      d: {
        name: "d",
        value: 0.01,
        scientific: false
      },
      c: {
        name: "c",
        value: 1e-4,
        scientific: false
      },
      m: {
        name: "m",
        value: 1e-6,
        scientific: true
      },
      u: {
        name: "u",
        value: 1e-12,
        scientific: true
      },
      n: {
        name: "n",
        value: 1e-18,
        scientific: true
      },
      p: {
        name: "p",
        value: 1e-24,
        scientific: true
      },
      f: {
        name: "f",
        value: 1e-30,
        scientific: true
      },
      a: {
        name: "a",
        value: 1e-36,
        scientific: true
      },
      z: {
        name: "z",
        value: 1e-42,
        scientific: true
      },
      y: {
        name: "y",
        value: 1e-48,
        scientific: true
      }
    },
    CUBIC: {
      "": {
        name: "",
        value: 1,
        scientific: true
      },
      da: {
        name: "da",
        value: 1e3,
        scientific: false
      },
      h: {
        name: "h",
        value: 1e6,
        scientific: false
      },
      k: {
        name: "k",
        value: 1e9,
        scientific: true
      },
      M: {
        name: "M",
        value: 1e18,
        scientific: true
      },
      G: {
        name: "G",
        value: 1e27,
        scientific: true
      },
      T: {
        name: "T",
        value: 1e36,
        scientific: true
      },
      P: {
        name: "P",
        value: 1e45,
        scientific: true
      },
      E: {
        name: "E",
        value: 1e54,
        scientific: true
      },
      Z: {
        name: "Z",
        value: 1e63,
        scientific: true
      },
      Y: {
        name: "Y",
        value: 1e72,
        scientific: true
      },
      d: {
        name: "d",
        value: 1e-3,
        scientific: false
      },
      c: {
        name: "c",
        value: 1e-6,
        scientific: false
      },
      m: {
        name: "m",
        value: 1e-9,
        scientific: true
      },
      u: {
        name: "u",
        value: 1e-18,
        scientific: true
      },
      n: {
        name: "n",
        value: 1e-27,
        scientific: true
      },
      p: {
        name: "p",
        value: 1e-36,
        scientific: true
      },
      f: {
        name: "f",
        value: 1e-45,
        scientific: true
      },
      a: {
        name: "a",
        value: 1e-54,
        scientific: true
      },
      z: {
        name: "z",
        value: 1e-63,
        scientific: true
      },
      y: {
        name: "y",
        value: 1e-72,
        scientific: true
      }
    },
    BINARY_SHORT_SI: {
      "": {
        name: "",
        value: 1,
        scientific: true
      },
      k: {
        name: "k",
        value: 1e3,
        scientific: true
      },
      M: {
        name: "M",
        value: 1e6,
        scientific: true
      },
      G: {
        name: "G",
        value: 1e9,
        scientific: true
      },
      T: {
        name: "T",
        value: 1e12,
        scientific: true
      },
      P: {
        name: "P",
        value: 1e15,
        scientific: true
      },
      E: {
        name: "E",
        value: 1e18,
        scientific: true
      },
      Z: {
        name: "Z",
        value: 1e21,
        scientific: true
      },
      Y: {
        name: "Y",
        value: 1e24,
        scientific: true
      }
    },
    BINARY_SHORT_IEC: {
      "": {
        name: "",
        value: 1,
        scientific: true
      },
      Ki: {
        name: "Ki",
        value: 1024,
        scientific: true
      },
      Mi: {
        name: "Mi",
        value: Math.pow(1024, 2),
        scientific: true
      },
      Gi: {
        name: "Gi",
        value: Math.pow(1024, 3),
        scientific: true
      },
      Ti: {
        name: "Ti",
        value: Math.pow(1024, 4),
        scientific: true
      },
      Pi: {
        name: "Pi",
        value: Math.pow(1024, 5),
        scientific: true
      },
      Ei: {
        name: "Ei",
        value: Math.pow(1024, 6),
        scientific: true
      },
      Zi: {
        name: "Zi",
        value: Math.pow(1024, 7),
        scientific: true
      },
      Yi: {
        name: "Yi",
        value: Math.pow(1024, 8),
        scientific: true
      }
    },
    BINARY_LONG_SI: {
      "": {
        name: "",
        value: 1,
        scientific: true
      },
      kilo: {
        name: "kilo",
        value: 1e3,
        scientific: true
      },
      mega: {
        name: "mega",
        value: 1e6,
        scientific: true
      },
      giga: {
        name: "giga",
        value: 1e9,
        scientific: true
      },
      tera: {
        name: "tera",
        value: 1e12,
        scientific: true
      },
      peta: {
        name: "peta",
        value: 1e15,
        scientific: true
      },
      exa: {
        name: "exa",
        value: 1e18,
        scientific: true
      },
      zetta: {
        name: "zetta",
        value: 1e21,
        scientific: true
      },
      yotta: {
        name: "yotta",
        value: 1e24,
        scientific: true
      }
    },
    BINARY_LONG_IEC: {
      "": {
        name: "",
        value: 1,
        scientific: true
      },
      kibi: {
        name: "kibi",
        value: 1024,
        scientific: true
      },
      mebi: {
        name: "mebi",
        value: Math.pow(1024, 2),
        scientific: true
      },
      gibi: {
        name: "gibi",
        value: Math.pow(1024, 3),
        scientific: true
      },
      tebi: {
        name: "tebi",
        value: Math.pow(1024, 4),
        scientific: true
      },
      pebi: {
        name: "pebi",
        value: Math.pow(1024, 5),
        scientific: true
      },
      exi: {
        name: "exi",
        value: Math.pow(1024, 6),
        scientific: true
      },
      zebi: {
        name: "zebi",
        value: Math.pow(1024, 7),
        scientific: true
      },
      yobi: {
        name: "yobi",
        value: Math.pow(1024, 8),
        scientific: true
      }
    },
    BTU: {
      "": {
        name: "",
        value: 1,
        scientific: true
      },
      MM: {
        name: "MM",
        value: 1e6,
        scientific: true
      }
    }
  };
  PREFIXES.SHORTLONG = _extends_1({}, PREFIXES.SHORT, PREFIXES.LONG);
  PREFIXES.BINARY_SHORT = _extends_1({}, PREFIXES.BINARY_SHORT_SI, PREFIXES.BINARY_SHORT_IEC);
  PREFIXES.BINARY_LONG = _extends_1({}, PREFIXES.BINARY_LONG_SI, PREFIXES.BINARY_LONG_IEC);
  var BASE_DIMENSIONS = ["MASS", "LENGTH", "TIME", "CURRENT", "TEMPERATURE", "LUMINOUS_INTENSITY", "AMOUNT_OF_SUBSTANCE", "ANGLE", "BIT"];
  var BASE_UNITS = {
    NONE: {
      dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    MASS: {
      dimensions: [1, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    LENGTH: {
      dimensions: [0, 1, 0, 0, 0, 0, 0, 0, 0]
    },
    TIME: {
      dimensions: [0, 0, 1, 0, 0, 0, 0, 0, 0]
    },
    CURRENT: {
      dimensions: [0, 0, 0, 1, 0, 0, 0, 0, 0]
    },
    TEMPERATURE: {
      dimensions: [0, 0, 0, 0, 1, 0, 0, 0, 0]
    },
    LUMINOUS_INTENSITY: {
      dimensions: [0, 0, 0, 0, 0, 1, 0, 0, 0]
    },
    AMOUNT_OF_SUBSTANCE: {
      dimensions: [0, 0, 0, 0, 0, 0, 1, 0, 0]
    },
    FORCE: {
      dimensions: [1, 1, -2, 0, 0, 0, 0, 0, 0]
    },
    SURFACE: {
      dimensions: [0, 2, 0, 0, 0, 0, 0, 0, 0]
    },
    VOLUME: {
      dimensions: [0, 3, 0, 0, 0, 0, 0, 0, 0]
    },
    ENERGY: {
      dimensions: [1, 2, -2, 0, 0, 0, 0, 0, 0]
    },
    POWER: {
      dimensions: [1, 2, -3, 0, 0, 0, 0, 0, 0]
    },
    PRESSURE: {
      dimensions: [1, -1, -2, 0, 0, 0, 0, 0, 0]
    },
    ELECTRIC_CHARGE: {
      dimensions: [0, 0, 1, 1, 0, 0, 0, 0, 0]
    },
    ELECTRIC_CAPACITANCE: {
      dimensions: [-1, -2, 4, 2, 0, 0, 0, 0, 0]
    },
    ELECTRIC_POTENTIAL: {
      dimensions: [1, 2, -3, -1, 0, 0, 0, 0, 0]
    },
    ELECTRIC_RESISTANCE: {
      dimensions: [1, 2, -3, -2, 0, 0, 0, 0, 0]
    },
    ELECTRIC_INDUCTANCE: {
      dimensions: [1, 2, -2, -2, 0, 0, 0, 0, 0]
    },
    ELECTRIC_CONDUCTANCE: {
      dimensions: [-1, -2, 3, 2, 0, 0, 0, 0, 0]
    },
    MAGNETIC_FLUX: {
      dimensions: [1, 2, -2, -1, 0, 0, 0, 0, 0]
    },
    MAGNETIC_FLUX_DENSITY: {
      dimensions: [1, 0, -2, -1, 0, 0, 0, 0, 0]
    },
    FREQUENCY: {
      dimensions: [0, 0, -1, 0, 0, 0, 0, 0, 0]
    },
    ANGLE: {
      dimensions: [0, 0, 0, 0, 0, 0, 0, 1, 0]
    },
    BIT: {
      dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 1]
    }
  };
  for (var key in BASE_UNITS) {
    if (hasOwnProperty(BASE_UNITS, key)) {
      BASE_UNITS[key].key = key;
    }
  }
  var BASE_UNIT_NONE = {};
  var UNIT_NONE = {
    name: "",
    base: BASE_UNIT_NONE,
    value: 1,
    offset: 0,
    dimensions: BASE_DIMENSIONS.map((x) => 0)
  };
  var UNITS = {
    meter: {
      name: "meter",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    inch: {
      name: "inch",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 0.0254,
      offset: 0
    },
    foot: {
      name: "foot",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 0.3048,
      offset: 0
    },
    yard: {
      name: "yard",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 0.9144,
      offset: 0
    },
    mile: {
      name: "mile",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 1609.344,
      offset: 0
    },
    link: {
      name: "link",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 0.201168,
      offset: 0
    },
    rod: {
      name: "rod",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 5.0292,
      offset: 0
    },
    chain: {
      name: "chain",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 20.1168,
      offset: 0
    },
    angstrom: {
      name: "angstrom",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 1e-10,
      offset: 0
    },
    m: {
      name: "m",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    in: {
      name: "in",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 0.0254,
      offset: 0
    },
    ft: {
      name: "ft",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 0.3048,
      offset: 0
    },
    yd: {
      name: "yd",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 0.9144,
      offset: 0
    },
    mi: {
      name: "mi",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 1609.344,
      offset: 0
    },
    li: {
      name: "li",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 0.201168,
      offset: 0
    },
    rd: {
      name: "rd",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 5.02921,
      offset: 0
    },
    ch: {
      name: "ch",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 20.1168,
      offset: 0
    },
    mil: {
      name: "mil",
      base: BASE_UNITS.LENGTH,
      prefixes: PREFIXES.NONE,
      value: 254e-7,
      offset: 0
    },
    m2: {
      name: "m2",
      base: BASE_UNITS.SURFACE,
      prefixes: PREFIXES.SQUARED,
      value: 1,
      offset: 0
    },
    sqin: {
      name: "sqin",
      base: BASE_UNITS.SURFACE,
      prefixes: PREFIXES.NONE,
      value: 64516e-8,
      offset: 0
    },
    sqft: {
      name: "sqft",
      base: BASE_UNITS.SURFACE,
      prefixes: PREFIXES.NONE,
      value: 0.09290304,
      offset: 0
    },
    sqyd: {
      name: "sqyd",
      base: BASE_UNITS.SURFACE,
      prefixes: PREFIXES.NONE,
      value: 0.83612736,
      offset: 0
    },
    sqmi: {
      name: "sqmi",
      base: BASE_UNITS.SURFACE,
      prefixes: PREFIXES.NONE,
      value: 2589988110336e-6,
      offset: 0
    },
    sqrd: {
      name: "sqrd",
      base: BASE_UNITS.SURFACE,
      prefixes: PREFIXES.NONE,
      value: 25.29295,
      offset: 0
    },
    sqch: {
      name: "sqch",
      base: BASE_UNITS.SURFACE,
      prefixes: PREFIXES.NONE,
      value: 404.6873,
      offset: 0
    },
    sqmil: {
      name: "sqmil",
      base: BASE_UNITS.SURFACE,
      prefixes: PREFIXES.NONE,
      value: 64516e-14,
      offset: 0
    },
    acre: {
      name: "acre",
      base: BASE_UNITS.SURFACE,
      prefixes: PREFIXES.NONE,
      value: 4046.86,
      offset: 0
    },
    hectare: {
      name: "hectare",
      base: BASE_UNITS.SURFACE,
      prefixes: PREFIXES.NONE,
      value: 1e4,
      offset: 0
    },
    m3: {
      name: "m3",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.CUBIC,
      value: 1,
      offset: 0
    },
    L: {
      name: "L",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.SHORT,
      value: 1e-3,
      offset: 0
    },
    l: {
      name: "l",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.SHORT,
      value: 1e-3,
      offset: 0
    },
    litre: {
      name: "litre",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.LONG,
      value: 1e-3,
      offset: 0
    },
    cuin: {
      name: "cuin",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 16387064e-12,
      offset: 0
    },
    cuft: {
      name: "cuft",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 0.028316846592,
      offset: 0
    },
    cuyd: {
      name: "cuyd",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 0.764554857984,
      offset: 0
    },
    teaspoon: {
      name: "teaspoon",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 5e-6,
      offset: 0
    },
    tablespoon: {
      name: "tablespoon",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 15e-6,
      offset: 0
    },
    drop: {
      name: "drop",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 5e-8,
      offset: 0
    },
    gtt: {
      name: "gtt",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 5e-8,
      offset: 0
    },
    minim: {
      name: "minim",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 6161152e-14,
      offset: 0
    },
    fluiddram: {
      name: "fluiddram",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 36966911e-13,
      offset: 0
    },
    fluidounce: {
      name: "fluidounce",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 2957353e-11,
      offset: 0
    },
    gill: {
      name: "gill",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 1182941e-10,
      offset: 0
    },
    cc: {
      name: "cc",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 1e-6,
      offset: 0
    },
    cup: {
      name: "cup",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 2365882e-10,
      offset: 0
    },
    pint: {
      name: "pint",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 4731765e-10,
      offset: 0
    },
    quart: {
      name: "quart",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 9463529e-10,
      offset: 0
    },
    gallon: {
      name: "gallon",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 3785412e-9,
      offset: 0
    },
    beerbarrel: {
      name: "beerbarrel",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 0.1173478,
      offset: 0
    },
    oilbarrel: {
      name: "oilbarrel",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 0.1589873,
      offset: 0
    },
    hogshead: {
      name: "hogshead",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 0.238481,
      offset: 0
    },
    fldr: {
      name: "fldr",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 36966911e-13,
      offset: 0
    },
    floz: {
      name: "floz",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 2957353e-11,
      offset: 0
    },
    gi: {
      name: "gi",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 1182941e-10,
      offset: 0
    },
    cp: {
      name: "cp",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 2365882e-10,
      offset: 0
    },
    pt: {
      name: "pt",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 4731765e-10,
      offset: 0
    },
    qt: {
      name: "qt",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 9463529e-10,
      offset: 0
    },
    gal: {
      name: "gal",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 3785412e-9,
      offset: 0
    },
    bbl: {
      name: "bbl",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 0.1173478,
      offset: 0
    },
    obl: {
      name: "obl",
      base: BASE_UNITS.VOLUME,
      prefixes: PREFIXES.NONE,
      value: 0.1589873,
      offset: 0
    },
    g: {
      name: "g",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.SHORT,
      value: 1e-3,
      offset: 0
    },
    gram: {
      name: "gram",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.LONG,
      value: 1e-3,
      offset: 0
    },
    ton: {
      name: "ton",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.SHORT,
      value: 907.18474,
      offset: 0
    },
    t: {
      name: "t",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.SHORT,
      value: 1e3,
      offset: 0
    },
    tonne: {
      name: "tonne",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.LONG,
      value: 1e3,
      offset: 0
    },
    grain: {
      name: "grain",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.NONE,
      value: 6479891e-11,
      offset: 0
    },
    dram: {
      name: "dram",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.NONE,
      value: 0.0017718451953125,
      offset: 0
    },
    ounce: {
      name: "ounce",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.NONE,
      value: 0.028349523125,
      offset: 0
    },
    poundmass: {
      name: "poundmass",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.NONE,
      value: 0.45359237,
      offset: 0
    },
    hundredweight: {
      name: "hundredweight",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.NONE,
      value: 45.359237,
      offset: 0
    },
    stick: {
      name: "stick",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.NONE,
      value: 0.115,
      offset: 0
    },
    stone: {
      name: "stone",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.NONE,
      value: 6.35029318,
      offset: 0
    },
    gr: {
      name: "gr",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.NONE,
      value: 6479891e-11,
      offset: 0
    },
    dr: {
      name: "dr",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.NONE,
      value: 0.0017718451953125,
      offset: 0
    },
    oz: {
      name: "oz",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.NONE,
      value: 0.028349523125,
      offset: 0
    },
    lbm: {
      name: "lbm",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.NONE,
      value: 0.45359237,
      offset: 0
    },
    cwt: {
      name: "cwt",
      base: BASE_UNITS.MASS,
      prefixes: PREFIXES.NONE,
      value: 45.359237,
      offset: 0
    },
    s: {
      name: "s",
      base: BASE_UNITS.TIME,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    min: {
      name: "min",
      base: BASE_UNITS.TIME,
      prefixes: PREFIXES.NONE,
      value: 60,
      offset: 0
    },
    h: {
      name: "h",
      base: BASE_UNITS.TIME,
      prefixes: PREFIXES.NONE,
      value: 3600,
      offset: 0
    },
    second: {
      name: "second",
      base: BASE_UNITS.TIME,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    sec: {
      name: "sec",
      base: BASE_UNITS.TIME,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    minute: {
      name: "minute",
      base: BASE_UNITS.TIME,
      prefixes: PREFIXES.NONE,
      value: 60,
      offset: 0
    },
    hour: {
      name: "hour",
      base: BASE_UNITS.TIME,
      prefixes: PREFIXES.NONE,
      value: 3600,
      offset: 0
    },
    day: {
      name: "day",
      base: BASE_UNITS.TIME,
      prefixes: PREFIXES.NONE,
      value: 86400,
      offset: 0
    },
    week: {
      name: "week",
      base: BASE_UNITS.TIME,
      prefixes: PREFIXES.NONE,
      value: 7 * 86400,
      offset: 0
    },
    month: {
      name: "month",
      base: BASE_UNITS.TIME,
      prefixes: PREFIXES.NONE,
      value: 2629800,
      offset: 0
    },
    year: {
      name: "year",
      base: BASE_UNITS.TIME,
      prefixes: PREFIXES.NONE,
      value: 31557600,
      offset: 0
    },
    decade: {
      name: "decade",
      base: BASE_UNITS.TIME,
      prefixes: PREFIXES.NONE,
      value: 315576e3,
      offset: 0
    },
    century: {
      name: "century",
      base: BASE_UNITS.TIME,
      prefixes: PREFIXES.NONE,
      value: 315576e4,
      offset: 0
    },
    millennium: {
      name: "millennium",
      base: BASE_UNITS.TIME,
      prefixes: PREFIXES.NONE,
      value: 315576e5,
      offset: 0
    },
    hertz: {
      name: "Hertz",
      base: BASE_UNITS.FREQUENCY,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0,
      reciprocal: true
    },
    Hz: {
      name: "Hz",
      base: BASE_UNITS.FREQUENCY,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0,
      reciprocal: true
    },
    rad: {
      name: "rad",
      base: BASE_UNITS.ANGLE,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    radian: {
      name: "radian",
      base: BASE_UNITS.ANGLE,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    deg: {
      name: "deg",
      base: BASE_UNITS.ANGLE,
      prefixes: PREFIXES.SHORT,
      value: null,
      offset: 0
    },
    degree: {
      name: "degree",
      base: BASE_UNITS.ANGLE,
      prefixes: PREFIXES.LONG,
      value: null,
      offset: 0
    },
    grad: {
      name: "grad",
      base: BASE_UNITS.ANGLE,
      prefixes: PREFIXES.SHORT,
      value: null,
      offset: 0
    },
    gradian: {
      name: "gradian",
      base: BASE_UNITS.ANGLE,
      prefixes: PREFIXES.LONG,
      value: null,
      offset: 0
    },
    cycle: {
      name: "cycle",
      base: BASE_UNITS.ANGLE,
      prefixes: PREFIXES.NONE,
      value: null,
      offset: 0
    },
    arcsec: {
      name: "arcsec",
      base: BASE_UNITS.ANGLE,
      prefixes: PREFIXES.NONE,
      value: null,
      offset: 0
    },
    arcmin: {
      name: "arcmin",
      base: BASE_UNITS.ANGLE,
      prefixes: PREFIXES.NONE,
      value: null,
      offset: 0
    },
    A: {
      name: "A",
      base: BASE_UNITS.CURRENT,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    ampere: {
      name: "ampere",
      base: BASE_UNITS.CURRENT,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    K: {
      name: "K",
      base: BASE_UNITS.TEMPERATURE,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    degC: {
      name: "degC",
      base: BASE_UNITS.TEMPERATURE,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 273.15
    },
    degF: {
      name: "degF",
      base: BASE_UNITS.TEMPERATURE,
      prefixes: PREFIXES.SHORT,
      value: 1 / 1.8,
      offset: 459.67
    },
    degR: {
      name: "degR",
      base: BASE_UNITS.TEMPERATURE,
      prefixes: PREFIXES.SHORT,
      value: 1 / 1.8,
      offset: 0
    },
    kelvin: {
      name: "kelvin",
      base: BASE_UNITS.TEMPERATURE,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    celsius: {
      name: "celsius",
      base: BASE_UNITS.TEMPERATURE,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 273.15
    },
    fahrenheit: {
      name: "fahrenheit",
      base: BASE_UNITS.TEMPERATURE,
      prefixes: PREFIXES.LONG,
      value: 1 / 1.8,
      offset: 459.67
    },
    rankine: {
      name: "rankine",
      base: BASE_UNITS.TEMPERATURE,
      prefixes: PREFIXES.LONG,
      value: 1 / 1.8,
      offset: 0
    },
    mol: {
      name: "mol",
      base: BASE_UNITS.AMOUNT_OF_SUBSTANCE,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    mole: {
      name: "mole",
      base: BASE_UNITS.AMOUNT_OF_SUBSTANCE,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    cd: {
      name: "cd",
      base: BASE_UNITS.LUMINOUS_INTENSITY,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    candela: {
      name: "candela",
      base: BASE_UNITS.LUMINOUS_INTENSITY,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    N: {
      name: "N",
      base: BASE_UNITS.FORCE,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    newton: {
      name: "newton",
      base: BASE_UNITS.FORCE,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    dyn: {
      name: "dyn",
      base: BASE_UNITS.FORCE,
      prefixes: PREFIXES.SHORT,
      value: 1e-5,
      offset: 0
    },
    dyne: {
      name: "dyne",
      base: BASE_UNITS.FORCE,
      prefixes: PREFIXES.LONG,
      value: 1e-5,
      offset: 0
    },
    lbf: {
      name: "lbf",
      base: BASE_UNITS.FORCE,
      prefixes: PREFIXES.NONE,
      value: 4.4482216152605,
      offset: 0
    },
    poundforce: {
      name: "poundforce",
      base: BASE_UNITS.FORCE,
      prefixes: PREFIXES.NONE,
      value: 4.4482216152605,
      offset: 0
    },
    kip: {
      name: "kip",
      base: BASE_UNITS.FORCE,
      prefixes: PREFIXES.LONG,
      value: 4448.2216,
      offset: 0
    },
    kilogramforce: {
      name: "kilogramforce",
      base: BASE_UNITS.FORCE,
      prefixes: PREFIXES.NONE,
      value: 9.80665,
      offset: 0
    },
    J: {
      name: "J",
      base: BASE_UNITS.ENERGY,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    joule: {
      name: "joule",
      base: BASE_UNITS.ENERGY,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    erg: {
      name: "erg",
      base: BASE_UNITS.ENERGY,
      prefixes: PREFIXES.NONE,
      value: 1e-7,
      offset: 0
    },
    Wh: {
      name: "Wh",
      base: BASE_UNITS.ENERGY,
      prefixes: PREFIXES.SHORT,
      value: 3600,
      offset: 0
    },
    BTU: {
      name: "BTU",
      base: BASE_UNITS.ENERGY,
      prefixes: PREFIXES.BTU,
      value: 1055.05585262,
      offset: 0
    },
    eV: {
      name: "eV",
      base: BASE_UNITS.ENERGY,
      prefixes: PREFIXES.SHORT,
      value: 1602176565e-28,
      offset: 0
    },
    electronvolt: {
      name: "electronvolt",
      base: BASE_UNITS.ENERGY,
      prefixes: PREFIXES.LONG,
      value: 1602176565e-28,
      offset: 0
    },
    W: {
      name: "W",
      base: BASE_UNITS.POWER,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    watt: {
      name: "watt",
      base: BASE_UNITS.POWER,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    hp: {
      name: "hp",
      base: BASE_UNITS.POWER,
      prefixes: PREFIXES.NONE,
      value: 745.6998715386,
      offset: 0
    },
    VAR: {
      name: "VAR",
      base: BASE_UNITS.POWER,
      prefixes: PREFIXES.SHORT,
      value: Complex2.I,
      offset: 0
    },
    VA: {
      name: "VA",
      base: BASE_UNITS.POWER,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    Pa: {
      name: "Pa",
      base: BASE_UNITS.PRESSURE,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    psi: {
      name: "psi",
      base: BASE_UNITS.PRESSURE,
      prefixes: PREFIXES.NONE,
      value: 6894.75729276459,
      offset: 0
    },
    atm: {
      name: "atm",
      base: BASE_UNITS.PRESSURE,
      prefixes: PREFIXES.NONE,
      value: 101325,
      offset: 0
    },
    bar: {
      name: "bar",
      base: BASE_UNITS.PRESSURE,
      prefixes: PREFIXES.SHORTLONG,
      value: 1e5,
      offset: 0
    },
    torr: {
      name: "torr",
      base: BASE_UNITS.PRESSURE,
      prefixes: PREFIXES.NONE,
      value: 133.322,
      offset: 0
    },
    mmHg: {
      name: "mmHg",
      base: BASE_UNITS.PRESSURE,
      prefixes: PREFIXES.NONE,
      value: 133.322,
      offset: 0
    },
    mmH2O: {
      name: "mmH2O",
      base: BASE_UNITS.PRESSURE,
      prefixes: PREFIXES.NONE,
      value: 9.80665,
      offset: 0
    },
    cmH2O: {
      name: "cmH2O",
      base: BASE_UNITS.PRESSURE,
      prefixes: PREFIXES.NONE,
      value: 98.0665,
      offset: 0
    },
    coulomb: {
      name: "coulomb",
      base: BASE_UNITS.ELECTRIC_CHARGE,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    C: {
      name: "C",
      base: BASE_UNITS.ELECTRIC_CHARGE,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    farad: {
      name: "farad",
      base: BASE_UNITS.ELECTRIC_CAPACITANCE,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    F: {
      name: "F",
      base: BASE_UNITS.ELECTRIC_CAPACITANCE,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    volt: {
      name: "volt",
      base: BASE_UNITS.ELECTRIC_POTENTIAL,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    V: {
      name: "V",
      base: BASE_UNITS.ELECTRIC_POTENTIAL,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    ohm: {
      name: "ohm",
      base: BASE_UNITS.ELECTRIC_RESISTANCE,
      prefixes: PREFIXES.SHORTLONG,
      value: 1,
      offset: 0
    },
    henry: {
      name: "henry",
      base: BASE_UNITS.ELECTRIC_INDUCTANCE,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    H: {
      name: "H",
      base: BASE_UNITS.ELECTRIC_INDUCTANCE,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    siemens: {
      name: "siemens",
      base: BASE_UNITS.ELECTRIC_CONDUCTANCE,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    S: {
      name: "S",
      base: BASE_UNITS.ELECTRIC_CONDUCTANCE,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    weber: {
      name: "weber",
      base: BASE_UNITS.MAGNETIC_FLUX,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    Wb: {
      name: "Wb",
      base: BASE_UNITS.MAGNETIC_FLUX,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    tesla: {
      name: "tesla",
      base: BASE_UNITS.MAGNETIC_FLUX_DENSITY,
      prefixes: PREFIXES.LONG,
      value: 1,
      offset: 0
    },
    T: {
      name: "T",
      base: BASE_UNITS.MAGNETIC_FLUX_DENSITY,
      prefixes: PREFIXES.SHORT,
      value: 1,
      offset: 0
    },
    b: {
      name: "b",
      base: BASE_UNITS.BIT,
      prefixes: PREFIXES.BINARY_SHORT,
      value: 1,
      offset: 0
    },
    bits: {
      name: "bits",
      base: BASE_UNITS.BIT,
      prefixes: PREFIXES.BINARY_LONG,
      value: 1,
      offset: 0
    },
    B: {
      name: "B",
      base: BASE_UNITS.BIT,
      prefixes: PREFIXES.BINARY_SHORT,
      value: 8,
      offset: 0
    },
    bytes: {
      name: "bytes",
      base: BASE_UNITS.BIT,
      prefixes: PREFIXES.BINARY_LONG,
      value: 8,
      offset: 0
    }
  };
  var ALIASES = {
    meters: "meter",
    inches: "inch",
    feet: "foot",
    yards: "yard",
    miles: "mile",
    links: "link",
    rods: "rod",
    chains: "chain",
    angstroms: "angstrom",
    lt: "l",
    litres: "litre",
    liter: "litre",
    liters: "litre",
    teaspoons: "teaspoon",
    tablespoons: "tablespoon",
    minims: "minim",
    fluiddrams: "fluiddram",
    fluidounces: "fluidounce",
    gills: "gill",
    cups: "cup",
    pints: "pint",
    quarts: "quart",
    gallons: "gallon",
    beerbarrels: "beerbarrel",
    oilbarrels: "oilbarrel",
    hogsheads: "hogshead",
    gtts: "gtt",
    grams: "gram",
    tons: "ton",
    tonnes: "tonne",
    grains: "grain",
    drams: "dram",
    ounces: "ounce",
    poundmasses: "poundmass",
    hundredweights: "hundredweight",
    sticks: "stick",
    lb: "lbm",
    lbs: "lbm",
    kips: "kip",
    kgf: "kilogramforce",
    acres: "acre",
    hectares: "hectare",
    sqfeet: "sqft",
    sqyard: "sqyd",
    sqmile: "sqmi",
    sqmiles: "sqmi",
    mmhg: "mmHg",
    mmh2o: "mmH2O",
    cmh2o: "cmH2O",
    seconds: "second",
    secs: "second",
    minutes: "minute",
    mins: "minute",
    hours: "hour",
    hr: "hour",
    hrs: "hour",
    days: "day",
    weeks: "week",
    months: "month",
    years: "year",
    decades: "decade",
    centuries: "century",
    millennia: "millennium",
    hertz: "hertz",
    radians: "radian",
    degrees: "degree",
    gradians: "gradian",
    cycles: "cycle",
    arcsecond: "arcsec",
    arcseconds: "arcsec",
    arcminute: "arcmin",
    arcminutes: "arcmin",
    BTUs: "BTU",
    watts: "watt",
    joules: "joule",
    amperes: "ampere",
    amps: "ampere",
    amp: "ampere",
    coulombs: "coulomb",
    volts: "volt",
    ohms: "ohm",
    farads: "farad",
    webers: "weber",
    teslas: "tesla",
    electronvolts: "electronvolt",
    moles: "mole",
    bit: "bits",
    byte: "bytes"
  };
  function calculateAngleValues(config3) {
    if (config3.number === "BigNumber") {
      var pi2 = createBigNumberPi(_BigNumber);
      UNITS.rad.value = new _BigNumber(1);
      UNITS.deg.value = pi2.div(180);
      UNITS.grad.value = pi2.div(200);
      UNITS.cycle.value = pi2.times(2);
      UNITS.arcsec.value = pi2.div(648e3);
      UNITS.arcmin.value = pi2.div(10800);
    } else {
      UNITS.rad.value = 1;
      UNITS.deg.value = Math.PI / 180;
      UNITS.grad.value = Math.PI / 200;
      UNITS.cycle.value = Math.PI * 2;
      UNITS.arcsec.value = Math.PI / 648e3;
      UNITS.arcmin.value = Math.PI / 10800;
    }
    UNITS.radian.value = UNITS.rad.value;
    UNITS.degree.value = UNITS.deg.value;
    UNITS.gradian.value = UNITS.grad.value;
  }
  calculateAngleValues(config2);
  if (on) {
    on("config", function(curr, prev) {
      if (curr.number !== prev.number) {
        calculateAngleValues(curr);
      }
    });
  }
  var UNIT_SYSTEMS = {
    si: {
      NONE: {
        unit: UNIT_NONE,
        prefix: PREFIXES.NONE[""]
      },
      LENGTH: {
        unit: UNITS.m,
        prefix: PREFIXES.SHORT[""]
      },
      MASS: {
        unit: UNITS.g,
        prefix: PREFIXES.SHORT.k
      },
      TIME: {
        unit: UNITS.s,
        prefix: PREFIXES.SHORT[""]
      },
      CURRENT: {
        unit: UNITS.A,
        prefix: PREFIXES.SHORT[""]
      },
      TEMPERATURE: {
        unit: UNITS.K,
        prefix: PREFIXES.SHORT[""]
      },
      LUMINOUS_INTENSITY: {
        unit: UNITS.cd,
        prefix: PREFIXES.SHORT[""]
      },
      AMOUNT_OF_SUBSTANCE: {
        unit: UNITS.mol,
        prefix: PREFIXES.SHORT[""]
      },
      ANGLE: {
        unit: UNITS.rad,
        prefix: PREFIXES.SHORT[""]
      },
      BIT: {
        unit: UNITS.bits,
        prefix: PREFIXES.SHORT[""]
      },
      FORCE: {
        unit: UNITS.N,
        prefix: PREFIXES.SHORT[""]
      },
      ENERGY: {
        unit: UNITS.J,
        prefix: PREFIXES.SHORT[""]
      },
      POWER: {
        unit: UNITS.W,
        prefix: PREFIXES.SHORT[""]
      },
      PRESSURE: {
        unit: UNITS.Pa,
        prefix: PREFIXES.SHORT[""]
      },
      ELECTRIC_CHARGE: {
        unit: UNITS.C,
        prefix: PREFIXES.SHORT[""]
      },
      ELECTRIC_CAPACITANCE: {
        unit: UNITS.F,
        prefix: PREFIXES.SHORT[""]
      },
      ELECTRIC_POTENTIAL: {
        unit: UNITS.V,
        prefix: PREFIXES.SHORT[""]
      },
      ELECTRIC_RESISTANCE: {
        unit: UNITS.ohm,
        prefix: PREFIXES.SHORT[""]
      },
      ELECTRIC_INDUCTANCE: {
        unit: UNITS.H,
        prefix: PREFIXES.SHORT[""]
      },
      ELECTRIC_CONDUCTANCE: {
        unit: UNITS.S,
        prefix: PREFIXES.SHORT[""]
      },
      MAGNETIC_FLUX: {
        unit: UNITS.Wb,
        prefix: PREFIXES.SHORT[""]
      },
      MAGNETIC_FLUX_DENSITY: {
        unit: UNITS.T,
        prefix: PREFIXES.SHORT[""]
      },
      FREQUENCY: {
        unit: UNITS.Hz,
        prefix: PREFIXES.SHORT[""]
      }
    }
  };
  UNIT_SYSTEMS.cgs = JSON.parse(JSON.stringify(UNIT_SYSTEMS.si));
  UNIT_SYSTEMS.cgs.LENGTH = {
    unit: UNITS.m,
    prefix: PREFIXES.SHORT.c
  };
  UNIT_SYSTEMS.cgs.MASS = {
    unit: UNITS.g,
    prefix: PREFIXES.SHORT[""]
  };
  UNIT_SYSTEMS.cgs.FORCE = {
    unit: UNITS.dyn,
    prefix: PREFIXES.SHORT[""]
  };
  UNIT_SYSTEMS.cgs.ENERGY = {
    unit: UNITS.erg,
    prefix: PREFIXES.NONE[""]
  };
  UNIT_SYSTEMS.us = JSON.parse(JSON.stringify(UNIT_SYSTEMS.si));
  UNIT_SYSTEMS.us.LENGTH = {
    unit: UNITS.ft,
    prefix: PREFIXES.NONE[""]
  };
  UNIT_SYSTEMS.us.MASS = {
    unit: UNITS.lbm,
    prefix: PREFIXES.NONE[""]
  };
  UNIT_SYSTEMS.us.TEMPERATURE = {
    unit: UNITS.degF,
    prefix: PREFIXES.NONE[""]
  };
  UNIT_SYSTEMS.us.FORCE = {
    unit: UNITS.lbf,
    prefix: PREFIXES.NONE[""]
  };
  UNIT_SYSTEMS.us.ENERGY = {
    unit: UNITS.BTU,
    prefix: PREFIXES.BTU[""]
  };
  UNIT_SYSTEMS.us.POWER = {
    unit: UNITS.hp,
    prefix: PREFIXES.NONE[""]
  };
  UNIT_SYSTEMS.us.PRESSURE = {
    unit: UNITS.psi,
    prefix: PREFIXES.NONE[""]
  };
  UNIT_SYSTEMS.auto = JSON.parse(JSON.stringify(UNIT_SYSTEMS.si));
  var currentUnitSystem = UNIT_SYSTEMS.auto;
  Unit2.setUnitSystem = function(name2) {
    if (hasOwnProperty(UNIT_SYSTEMS, name2)) {
      currentUnitSystem = UNIT_SYSTEMS[name2];
    } else {
      throw new Error("Unit system " + name2 + " does not exist. Choices are: " + Object.keys(UNIT_SYSTEMS).join(", "));
    }
  };
  Unit2.getUnitSystem = function() {
    for (var _key in UNIT_SYSTEMS) {
      if (hasOwnProperty(UNIT_SYSTEMS, _key)) {
        if (UNIT_SYSTEMS[_key] === currentUnitSystem) {
          return _key;
        }
      }
    }
  };
  Unit2.typeConverters = {
    BigNumber: function BigNumber2(x) {
      return new _BigNumber(x + "");
    },
    Fraction: function Fraction2(x) {
      return new _Fraction(x);
    },
    Complex: function Complex3(x) {
      return x;
    },
    number: function number3(x) {
      return x;
    }
  };
  Unit2.prototype._numberConverter = function() {
    var convert = Unit2.typeConverters[this.valueType()];
    if (convert) {
      return convert;
    }
    throw new TypeError('Unsupported Unit value type "' + this.valueType() + '"');
  };
  Unit2._getNumberConverter = function(type) {
    if (!Unit2.typeConverters[type]) {
      throw new TypeError('Unsupported type "' + type + '"');
    }
    return Unit2.typeConverters[type];
  };
  for (var _key2 in UNITS) {
    if (hasOwnProperty(UNITS, _key2)) {
      var unit2 = UNITS[_key2];
      unit2.dimensions = unit2.base.dimensions;
    }
  }
  for (var _name2 in ALIASES) {
    if (hasOwnProperty(ALIASES, _name2)) {
      var _unit2 = UNITS[ALIASES[_name2]];
      var alias = {};
      for (var _key3 in _unit2) {
        if (hasOwnProperty(_unit2, _key3)) {
          alias[_key3] = _unit2[_key3];
        }
      }
      alias.name = _name2;
      UNITS[_name2] = alias;
    }
  }
  Unit2.isValidAlpha = function isValidAlpha(c11) {
    return /^[a-zA-Z]$/.test(c11);
  };
  function assertUnitNameIsValid(name2) {
    for (var i3 = 0; i3 < name2.length; i3++) {
      c10 = name2.charAt(i3);
      if (i3 === 0 && !Unit2.isValidAlpha(c10)) {
        throw new Error('Invalid unit name (must begin with alpha character): "' + name2 + '"');
      }
      if (i3 > 0 && !(Unit2.isValidAlpha(c10) || isDigit(c10))) {
        throw new Error('Invalid unit name (only alphanumeric characters are allowed): "' + name2 + '"');
      }
    }
  }
  Unit2.createUnit = function(obj, options) {
    if (typeof obj !== "object") {
      throw new TypeError("createUnit expects first parameter to be of type 'Object'");
    }
    if (options && options.override) {
      for (var _key4 in obj) {
        if (hasOwnProperty(obj, _key4)) {
          Unit2.deleteUnit(_key4);
        }
        if (obj[_key4].aliases) {
          for (var i3 = 0; i3 < obj[_key4].aliases.length; i3++) {
            Unit2.deleteUnit(obj[_key4].aliases[i3]);
          }
        }
      }
    }
    var lastUnit;
    for (var _key5 in obj) {
      if (hasOwnProperty(obj, _key5)) {
        lastUnit = Unit2.createUnitSingle(_key5, obj[_key5]);
      }
    }
    return lastUnit;
  };
  Unit2.createUnitSingle = function(name2, obj) {
    if (typeof obj === "undefined" || obj === null) {
      obj = {};
    }
    if (typeof name2 !== "string") {
      throw new TypeError("createUnitSingle expects first parameter to be of type 'string'");
    }
    if (hasOwnProperty(UNITS, name2)) {
      throw new Error('Cannot create unit "' + name2 + '": a unit with that name already exists');
    }
    assertUnitNameIsValid(name2);
    var defUnit = null;
    var aliases = [];
    var offset = 0;
    var definition;
    var prefixes;
    var baseName;
    if (obj && obj.type === "Unit") {
      defUnit = obj.clone();
    } else if (typeof obj === "string") {
      if (obj !== "") {
        definition = obj;
      }
    } else if (typeof obj === "object") {
      definition = obj.definition;
      prefixes = obj.prefixes;
      offset = obj.offset;
      baseName = obj.baseName;
      if (obj.aliases) {
        aliases = obj.aliases.valueOf();
      }
    } else {
      throw new TypeError('Cannot create unit "' + name2 + '" from "' + obj.toString() + '": expecting "string" or "Unit" or "Object"');
    }
    if (aliases) {
      for (var i3 = 0; i3 < aliases.length; i3++) {
        if (hasOwnProperty(UNITS, aliases[i3])) {
          throw new Error('Cannot create alias "' + aliases[i3] + '": a unit with that name already exists');
        }
      }
    }
    if (definition && typeof definition === "string" && !defUnit) {
      try {
        defUnit = Unit2.parse(definition, {
          allowNoUnits: true
        });
      } catch (ex) {
        ex.message = 'Could not create unit "' + name2 + '" from "' + definition + '": ' + ex.message;
        throw ex;
      }
    } else if (definition && definition.type === "Unit") {
      defUnit = definition.clone();
    }
    aliases = aliases || [];
    offset = offset || 0;
    if (prefixes && prefixes.toUpperCase) {
      prefixes = PREFIXES[prefixes.toUpperCase()] || PREFIXES.NONE;
    } else {
      prefixes = PREFIXES.NONE;
    }
    var newUnit = {};
    if (!defUnit) {
      baseName = baseName || name2 + "_STUFF";
      if (BASE_DIMENSIONS.indexOf(baseName) >= 0) {
        throw new Error('Cannot create new base unit "' + name2 + '": a base unit with that name already exists (and cannot be overridden)');
      }
      BASE_DIMENSIONS.push(baseName);
      for (var b10 in BASE_UNITS) {
        if (hasOwnProperty(BASE_UNITS, b10)) {
          BASE_UNITS[b10].dimensions[BASE_DIMENSIONS.length - 1] = 0;
        }
      }
      var newBaseUnit = {
        dimensions: []
      };
      for (var _i6 = 0; _i6 < BASE_DIMENSIONS.length; _i6++) {
        newBaseUnit.dimensions[_i6] = 0;
      }
      newBaseUnit.dimensions[BASE_DIMENSIONS.length - 1] = 1;
      newBaseUnit.key = baseName;
      BASE_UNITS[baseName] = newBaseUnit;
      newUnit = {
        name: name2,
        value: 1,
        dimensions: BASE_UNITS[baseName].dimensions.slice(0),
        prefixes,
        offset,
        base: BASE_UNITS[baseName]
      };
      currentUnitSystem[baseName] = {
        unit: newUnit,
        prefix: PREFIXES.NONE[""]
      };
    } else {
      newUnit = {
        name: name2,
        value: defUnit.value,
        dimensions: defUnit.dimensions.slice(0),
        prefixes,
        offset
      };
      var anyMatch = false;
      for (var _i7 in BASE_UNITS) {
        if (hasOwnProperty(BASE_UNITS, _i7)) {
          var match = true;
          for (var j = 0; j < BASE_DIMENSIONS.length; j++) {
            if (Math.abs((newUnit.dimensions[j] || 0) - (BASE_UNITS[_i7].dimensions[j] || 0)) > 1e-12) {
              match = false;
              break;
            }
          }
          if (match) {
            anyMatch = true;
            newUnit.base = BASE_UNITS[_i7];
            break;
          }
        }
      }
      if (!anyMatch) {
        baseName = baseName || name2 + "_STUFF";
        var _newBaseUnit = {
          dimensions: defUnit.dimensions.slice(0)
        };
        _newBaseUnit.key = baseName;
        BASE_UNITS[baseName] = _newBaseUnit;
        currentUnitSystem[baseName] = {
          unit: newUnit,
          prefix: PREFIXES.NONE[""]
        };
        newUnit.base = BASE_UNITS[baseName];
      }
    }
    Unit2.UNITS[name2] = newUnit;
    for (var _i8 = 0; _i8 < aliases.length; _i8++) {
      var aliasName = aliases[_i8];
      var _alias = {};
      for (var _key6 in newUnit) {
        if (hasOwnProperty(newUnit, _key6)) {
          _alias[_key6] = newUnit[_key6];
        }
      }
      _alias.name = aliasName;
      Unit2.UNITS[aliasName] = _alias;
    }
    delete _findUnit.cache;
    return new Unit2(null, name2);
  };
  Unit2.deleteUnit = function(name2) {
    delete Unit2.UNITS[name2];
  };
  Unit2.PREFIXES = PREFIXES;
  Unit2.BASE_DIMENSIONS = BASE_DIMENSIONS;
  Unit2.BASE_UNITS = BASE_UNITS;
  Unit2.UNIT_SYSTEMS = UNIT_SYSTEMS;
  Unit2.UNITS = UNITS;
  return Unit2;
}, {
  isClass: true
});
var name$1J = "unit";
var dependencies$1J = ["typed", "Unit"];
var createUnitFunction = /* @__PURE__ */ factory(name$1J, dependencies$1J, (_ref) => {
  var {
    typed: typed2,
    Unit: Unit2
  } = _ref;
  return typed2(name$1J, {
    Unit: function Unit3(x) {
      return x.clone();
    },
    string: function string2(x) {
      if (Unit2.isValuelessUnit(x)) {
        return new Unit2(null, x);
      }
      return Unit2.parse(x, {
        allowNoUnits: true
      });
    },
    "number | BigNumber | Fraction | Complex, string | Unit": function numberBigNumberFractionComplexStringUnit(value, unit2) {
      return new Unit2(value, unit2);
    },
    "number | BigNumber | Fraction": function numberBigNumberFraction(value) {
      return new Unit2(value);
    },
    "Array | Matrix": typed2.referToSelf((self) => (x) => deepMap(x, self))
  });
});
var name$1K = "sparse";
var dependencies$1K = ["typed", "SparseMatrix"];
var createSparse = /* @__PURE__ */ factory(name$1K, dependencies$1K, (_ref) => {
  var {
    typed: typed2,
    SparseMatrix: SparseMatrix2
  } = _ref;
  return typed2(name$1K, {
    "": function _() {
      return new SparseMatrix2([]);
    },
    string: function string2(datatype) {
      return new SparseMatrix2([], datatype);
    },
    "Array | Matrix": function ArrayMatrix(data) {
      return new SparseMatrix2(data);
    },
    "Array | Matrix, string": function ArrayMatrixString(data, datatype) {
      return new SparseMatrix2(data, datatype);
    }
  });
});
var name$1L = "createUnit";
var dependencies$1L = ["typed", "Unit"];
var createCreateUnit = /* @__PURE__ */ factory(name$1L, dependencies$1L, (_ref) => {
  var {
    typed: typed2,
    Unit: Unit2
  } = _ref;
  return typed2(name$1L, {
    "Object, Object": function ObjectObject(obj, options) {
      return Unit2.createUnit(obj, options);
    },
    Object: function Object2(obj) {
      return Unit2.createUnit(obj, {});
    },
    "string, Unit | string | Object, Object": function stringUnitStringObjectObject(name2, def, options) {
      var obj = {};
      obj[name2] = def;
      return Unit2.createUnit(obj, options);
    },
    "string, Unit | string | Object": function stringUnitStringObject(name2, def) {
      var obj = {};
      obj[name2] = def;
      return Unit2.createUnit(obj, {});
    },
    string: function string2(name2) {
      var obj = {};
      obj[name2] = {};
      return Unit2.createUnit(obj, {});
    }
  });
});
var name$1M = "acos";
var dependencies$1M = ["typed", "config", "Complex"];
var createAcos = /* @__PURE__ */ factory(name$1M, dependencies$1M, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    Complex: Complex2
  } = _ref;
  return typed2(name$1M, {
    number: function number2(x) {
      if (x >= -1 && x <= 1 || config2.predictable) {
        return Math.acos(x);
      } else {
        return new Complex2(x, 0).acos();
      }
    },
    Complex: function Complex3(x) {
      return x.acos();
    },
    BigNumber: function BigNumber2(x) {
      return x.acos();
    }
  });
});
var name$1N = "acosh";
var dependencies$1N = ["typed", "config", "Complex"];
var createAcosh = /* @__PURE__ */ factory(name$1N, dependencies$1N, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    Complex: Complex2
  } = _ref;
  return typed2(name$1N, {
    number: function number2(x) {
      if (x >= 1 || config2.predictable) {
        return acoshNumber(x);
      }
      if (x <= -1) {
        return new Complex2(Math.log(Math.sqrt(x * x - 1) - x), Math.PI);
      }
      return new Complex2(x, 0).acosh();
    },
    Complex: function Complex3(x) {
      return x.acosh();
    },
    BigNumber: function BigNumber2(x) {
      return x.acosh();
    }
  });
});
var name$1O = "acot";
var dependencies$1O = ["typed", "BigNumber"];
var createAcot = /* @__PURE__ */ factory(name$1O, dependencies$1O, (_ref) => {
  var {
    typed: typed2,
    BigNumber: _BigNumber
  } = _ref;
  return typed2(name$1O, {
    number: acotNumber,
    Complex: function Complex2(x) {
      return x.acot();
    },
    BigNumber: function BigNumber2(x) {
      return new _BigNumber(1).div(x).atan();
    }
  });
});
var name$1P = "acoth";
var dependencies$1P = ["typed", "config", "Complex", "BigNumber"];
var createAcoth = /* @__PURE__ */ factory(name$1P, dependencies$1P, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    Complex: Complex2,
    BigNumber: _BigNumber
  } = _ref;
  return typed2(name$1P, {
    number: function number2(x) {
      if (x >= 1 || x <= -1 || config2.predictable) {
        return acothNumber(x);
      }
      return new Complex2(x, 0).acoth();
    },
    Complex: function Complex3(x) {
      return x.acoth();
    },
    BigNumber: function BigNumber2(x) {
      return new _BigNumber(1).div(x).atanh();
    }
  });
});
var name$1Q = "acsc";
var dependencies$1Q = ["typed", "config", "Complex", "BigNumber"];
var createAcsc = /* @__PURE__ */ factory(name$1Q, dependencies$1Q, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    Complex: Complex2,
    BigNumber: _BigNumber
  } = _ref;
  return typed2(name$1Q, {
    number: function number2(x) {
      if (x <= -1 || x >= 1 || config2.predictable) {
        return acscNumber(x);
      }
      return new Complex2(x, 0).acsc();
    },
    Complex: function Complex3(x) {
      return x.acsc();
    },
    BigNumber: function BigNumber2(x) {
      return new _BigNumber(1).div(x).asin();
    }
  });
});
var name$1R = "acsch";
var dependencies$1R = ["typed", "BigNumber"];
var createAcsch = /* @__PURE__ */ factory(name$1R, dependencies$1R, (_ref) => {
  var {
    typed: typed2,
    BigNumber: _BigNumber
  } = _ref;
  return typed2(name$1R, {
    number: acschNumber,
    Complex: function Complex2(x) {
      return x.acsch();
    },
    BigNumber: function BigNumber2(x) {
      return new _BigNumber(1).div(x).asinh();
    }
  });
});
var name$1S = "asec";
var dependencies$1S = ["typed", "config", "Complex", "BigNumber"];
var createAsec = /* @__PURE__ */ factory(name$1S, dependencies$1S, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    Complex: Complex2,
    BigNumber: _BigNumber
  } = _ref;
  return typed2(name$1S, {
    number: function number2(x) {
      if (x <= -1 || x >= 1 || config2.predictable) {
        return asecNumber(x);
      }
      return new Complex2(x, 0).asec();
    },
    Complex: function Complex3(x) {
      return x.asec();
    },
    BigNumber: function BigNumber2(x) {
      return new _BigNumber(1).div(x).acos();
    }
  });
});
var name$1T = "asech";
var dependencies$1T = ["typed", "config", "Complex", "BigNumber"];
var createAsech = /* @__PURE__ */ factory(name$1T, dependencies$1T, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    Complex: Complex2,
    BigNumber: _BigNumber
  } = _ref;
  return typed2(name$1T, {
    number: function number2(x) {
      if (x <= 1 && x >= -1 || config2.predictable) {
        var xInv = 1 / x;
        if (xInv > 0 || config2.predictable) {
          return asechNumber(x);
        }
        var ret = Math.sqrt(xInv * xInv - 1);
        return new Complex2(Math.log(ret - xInv), Math.PI);
      }
      return new Complex2(x, 0).asech();
    },
    Complex: function Complex3(x) {
      return x.asech();
    },
    BigNumber: function BigNumber2(x) {
      return new _BigNumber(1).div(x).acosh();
    }
  });
});
var name$1U = "asin";
var dependencies$1U = ["typed", "config", "Complex"];
var createAsin = /* @__PURE__ */ factory(name$1U, dependencies$1U, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    Complex: Complex2
  } = _ref;
  return typed2(name$1U, {
    number: function number2(x) {
      if (x >= -1 && x <= 1 || config2.predictable) {
        return Math.asin(x);
      } else {
        return new Complex2(x, 0).asin();
      }
    },
    Complex: function Complex3(x) {
      return x.asin();
    },
    BigNumber: function BigNumber2(x) {
      return x.asin();
    }
  });
});
var name$1V = "asinh";
var dependencies$1V = ["typed"];
var createAsinh = /* @__PURE__ */ factory(name$1V, dependencies$1V, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2("asinh", {
    number: asinhNumber,
    Complex: function Complex2(x) {
      return x.asinh();
    },
    BigNumber: function BigNumber2(x) {
      return x.asinh();
    }
  });
});
var name$1W = "atan";
var dependencies$1W = ["typed"];
var createAtan = /* @__PURE__ */ factory(name$1W, dependencies$1W, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2("atan", {
    number: function number2(x) {
      return Math.atan(x);
    },
    Complex: function Complex2(x) {
      return x.atan();
    },
    BigNumber: function BigNumber2(x) {
      return x.atan();
    }
  });
});
var name$1X = "atan2";
var dependencies$1X = ["typed", "matrix", "equalScalar", "BigNumber", "DenseMatrix", "concat"];
var createAtan2 = /* @__PURE__ */ factory(name$1X, dependencies$1X, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    equalScalar: equalScalar2,
    BigNumber: BigNumber2,
    DenseMatrix: DenseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo02xDS0 = createMatAlgo02xDS0({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed: typed2
  });
  var matAlgo09xS0Sf = createMatAlgo09xS0Sf({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$1X, {
    "number, number": Math.atan2,
    "BigNumber, BigNumber": (y, x) => BigNumber2.atan2(y, x)
  }, matrixAlgorithmSuite({
    scalar: "number | BigNumber",
    SS: matAlgo09xS0Sf,
    DS: matAlgo03xDSf,
    SD: matAlgo02xDS0,
    Ss: matAlgo11xS0s,
    sS: matAlgo12xSfs
  }));
});
var name$1Y = "atanh";
var dependencies$1Y = ["typed", "config", "Complex"];
var createAtanh = /* @__PURE__ */ factory(name$1Y, dependencies$1Y, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    Complex: Complex2
  } = _ref;
  return typed2(name$1Y, {
    number: function number2(x) {
      if (x <= 1 && x >= -1 || config2.predictable) {
        return atanhNumber(x);
      }
      return new Complex2(x, 0).atanh();
    },
    Complex: function Complex3(x) {
      return x.atanh();
    },
    BigNumber: function BigNumber2(x) {
      return x.atanh();
    }
  });
});
var createTrigUnit = /* @__PURE__ */ factory("trigUnit", ["typed"], (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return {
    Unit: typed2.referToSelf((self) => (x) => {
      if (!x.hasBase(x.constructor.BASE_UNITS.ANGLE)) {
        throw new TypeError("Unit in function cot is no angle");
      }
      return typed2.find(self, x.valueType())(x.value);
    })
  };
});
var name$1Z = "cos";
var dependencies$1Z = ["typed"];
var createCos = /* @__PURE__ */ factory(name$1Z, dependencies$1Z, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  var trigUnit = createTrigUnit({
    typed: typed2
  });
  return typed2(name$1Z, {
    number: Math.cos,
    "Complex | BigNumber": (x) => x.cos()
  }, trigUnit);
});
var name$1_ = "cosh";
var dependencies$1_ = ["typed"];
var createCosh = /* @__PURE__ */ factory(name$1_, dependencies$1_, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$1_, {
    number: cosh$1,
    "Complex | BigNumber": (x) => x.cosh()
  });
});
var name$1$ = "cot";
var dependencies$1$ = ["typed", "BigNumber"];
var createCot = /* @__PURE__ */ factory(name$1$, dependencies$1$, (_ref) => {
  var {
    typed: typed2,
    BigNumber: _BigNumber
  } = _ref;
  var trigUnit = createTrigUnit({
    typed: typed2
  });
  return typed2(name$1$, {
    number: cotNumber,
    Complex: (x) => x.cot(),
    BigNumber: (x) => new _BigNumber(1).div(x.tan())
  }, trigUnit);
});
var name$20 = "coth";
var dependencies$20 = ["typed", "BigNumber"];
var createCoth = /* @__PURE__ */ factory(name$20, dependencies$20, (_ref) => {
  var {
    typed: typed2,
    BigNumber: _BigNumber
  } = _ref;
  return typed2(name$20, {
    number: cothNumber,
    Complex: (x) => x.coth(),
    BigNumber: (x) => new _BigNumber(1).div(x.tanh())
  });
});
var name$21 = "csc";
var dependencies$21 = ["typed", "BigNumber"];
var createCsc = /* @__PURE__ */ factory(name$21, dependencies$21, (_ref) => {
  var {
    typed: typed2,
    BigNumber: _BigNumber
  } = _ref;
  var trigUnit = createTrigUnit({
    typed: typed2
  });
  return typed2(name$21, {
    number: cscNumber,
    Complex: (x) => x.csc(),
    BigNumber: (x) => new _BigNumber(1).div(x.sin())
  }, trigUnit);
});
var name$22 = "csch";
var dependencies$22 = ["typed", "BigNumber"];
var createCsch = /* @__PURE__ */ factory(name$22, dependencies$22, (_ref) => {
  var {
    typed: typed2,
    BigNumber: _BigNumber
  } = _ref;
  return typed2(name$22, {
    number: cschNumber,
    Complex: (x) => x.csch(),
    BigNumber: (x) => new _BigNumber(1).div(x.sinh())
  });
});
var name$23 = "sec";
var dependencies$23 = ["typed", "BigNumber"];
var createSec = /* @__PURE__ */ factory(name$23, dependencies$23, (_ref) => {
  var {
    typed: typed2,
    BigNumber: _BigNumber
  } = _ref;
  var trigUnit = createTrigUnit({
    typed: typed2
  });
  return typed2(name$23, {
    number: secNumber,
    Complex: (x) => x.sec(),
    BigNumber: (x) => new _BigNumber(1).div(x.cos())
  }, trigUnit);
});
var name$24 = "sech";
var dependencies$24 = ["typed", "BigNumber"];
var createSech = /* @__PURE__ */ factory(name$24, dependencies$24, (_ref) => {
  var {
    typed: typed2,
    BigNumber: _BigNumber
  } = _ref;
  return typed2(name$24, {
    number: sechNumber,
    Complex: (x) => x.sech(),
    BigNumber: (x) => new _BigNumber(1).div(x.cosh())
  });
});
var name$25 = "sin";
var dependencies$25 = ["typed"];
var createSin = /* @__PURE__ */ factory(name$25, dependencies$25, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  var trigUnit = createTrigUnit({
    typed: typed2
  });
  return typed2(name$25, {
    number: Math.sin,
    "Complex | BigNumber": (x) => x.sin()
  }, trigUnit);
});
var name$26 = "sinh";
var dependencies$26 = ["typed"];
var createSinh = /* @__PURE__ */ factory(name$26, dependencies$26, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$26, {
    number: sinhNumber,
    "Complex | BigNumber": (x) => x.sinh()
  });
});
var name$27 = "tan";
var dependencies$27 = ["typed"];
var createTan = /* @__PURE__ */ factory(name$27, dependencies$27, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  var trigUnit = createTrigUnit({
    typed: typed2
  });
  return typed2(name$27, {
    number: Math.tan,
    "Complex | BigNumber": (x) => x.tan()
  }, trigUnit);
});
var name$28 = "tanh";
var dependencies$28 = ["typed"];
var createTanh = /* @__PURE__ */ factory(name$28, dependencies$28, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2("tanh", {
    number: tanh$1,
    "Complex | BigNumber": (x) => x.tanh()
  });
});
var name$29 = "setCartesian";
var dependencies$29 = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"];
var createSetCartesian = /* @__PURE__ */ factory(name$29, dependencies$29, (_ref) => {
  var {
    typed: typed2,
    size: size2,
    subset: subset2,
    compareNatural: compareNatural2,
    Index: Index2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  return typed2(name$29, {
    "Array | Matrix, Array | Matrix": function ArrayMatrixArrayMatrix(a1, a2) {
      var result = [];
      if (subset2(size2(a1), new Index2(0)) !== 0 && subset2(size2(a2), new Index2(0)) !== 0) {
        var b12 = flatten$1(Array.isArray(a1) ? a1 : a1.toArray()).sort(compareNatural2);
        var b22 = flatten$1(Array.isArray(a2) ? a2 : a2.toArray()).sort(compareNatural2);
        result = [];
        for (var i3 = 0; i3 < b12.length; i3++) {
          for (var j = 0; j < b22.length; j++) {
            result.push([b12[i3], b22[j]]);
          }
        }
      }
      if (Array.isArray(a1) && Array.isArray(a2)) {
        return result;
      }
      return new DenseMatrix2(result);
    }
  });
});
var name$2a = "setDifference";
var dependencies$2a = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"];
var createSetDifference = /* @__PURE__ */ factory(name$2a, dependencies$2a, (_ref) => {
  var {
    typed: typed2,
    size: size2,
    subset: subset2,
    compareNatural: compareNatural2,
    Index: Index2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  return typed2(name$2a, {
    "Array | Matrix, Array | Matrix": function ArrayMatrixArrayMatrix(a1, a2) {
      var result;
      if (subset2(size2(a1), new Index2(0)) === 0) {
        result = [];
      } else if (subset2(size2(a2), new Index2(0)) === 0) {
        return flatten$1(a1.toArray());
      } else {
        var b12 = identify(flatten$1(Array.isArray(a1) ? a1 : a1.toArray()).sort(compareNatural2));
        var b22 = identify(flatten$1(Array.isArray(a2) ? a2 : a2.toArray()).sort(compareNatural2));
        result = [];
        var inb2;
        for (var i3 = 0; i3 < b12.length; i3++) {
          inb2 = false;
          for (var j = 0; j < b22.length; j++) {
            if (compareNatural2(b12[i3].value, b22[j].value) === 0 && b12[i3].identifier === b22[j].identifier) {
              inb2 = true;
              break;
            }
          }
          if (!inb2) {
            result.push(b12[i3]);
          }
        }
      }
      if (Array.isArray(a1) && Array.isArray(a2)) {
        return generalize(result);
      }
      return new DenseMatrix2(generalize(result));
    }
  });
});
var name$2b = "setDistinct";
var dependencies$2b = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"];
var createSetDistinct = /* @__PURE__ */ factory(name$2b, dependencies$2b, (_ref) => {
  var {
    typed: typed2,
    size: size2,
    subset: subset2,
    compareNatural: compareNatural2,
    Index: Index2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  return typed2(name$2b, {
    "Array | Matrix": function ArrayMatrix(a) {
      var result;
      if (subset2(size2(a), new Index2(0)) === 0) {
        result = [];
      } else {
        var b10 = flatten$1(Array.isArray(a) ? a : a.toArray()).sort(compareNatural2);
        result = [];
        result.push(b10[0]);
        for (var i3 = 1; i3 < b10.length; i3++) {
          if (compareNatural2(b10[i3], b10[i3 - 1]) !== 0) {
            result.push(b10[i3]);
          }
        }
      }
      if (Array.isArray(a)) {
        return result;
      }
      return new DenseMatrix2(result);
    }
  });
});
var name$2c = "setIntersect";
var dependencies$2c = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"];
var createSetIntersect = /* @__PURE__ */ factory(name$2c, dependencies$2c, (_ref) => {
  var {
    typed: typed2,
    size: size2,
    subset: subset2,
    compareNatural: compareNatural2,
    Index: Index2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  return typed2(name$2c, {
    "Array | Matrix, Array | Matrix": function ArrayMatrixArrayMatrix(a1, a2) {
      var result;
      if (subset2(size2(a1), new Index2(0)) === 0 || subset2(size2(a2), new Index2(0)) === 0) {
        result = [];
      } else {
        var b12 = identify(flatten$1(Array.isArray(a1) ? a1 : a1.toArray()).sort(compareNatural2));
        var b22 = identify(flatten$1(Array.isArray(a2) ? a2 : a2.toArray()).sort(compareNatural2));
        result = [];
        for (var i3 = 0; i3 < b12.length; i3++) {
          for (var j = 0; j < b22.length; j++) {
            if (compareNatural2(b12[i3].value, b22[j].value) === 0 && b12[i3].identifier === b22[j].identifier) {
              result.push(b12[i3]);
              break;
            }
          }
        }
      }
      if (Array.isArray(a1) && Array.isArray(a2)) {
        return generalize(result);
      }
      return new DenseMatrix2(generalize(result));
    }
  });
});
var name$2d = "setIsSubset";
var dependencies$2d = ["typed", "size", "subset", "compareNatural", "Index"];
var createSetIsSubset = /* @__PURE__ */ factory(name$2d, dependencies$2d, (_ref) => {
  var {
    typed: typed2,
    size: size2,
    subset: subset2,
    compareNatural: compareNatural2,
    Index: Index2
  } = _ref;
  return typed2(name$2d, {
    "Array | Matrix, Array | Matrix": function ArrayMatrixArrayMatrix(a1, a2) {
      if (subset2(size2(a1), new Index2(0)) === 0) {
        return true;
      } else if (subset2(size2(a2), new Index2(0)) === 0) {
        return false;
      }
      var b12 = identify(flatten$1(Array.isArray(a1) ? a1 : a1.toArray()).sort(compareNatural2));
      var b22 = identify(flatten$1(Array.isArray(a2) ? a2 : a2.toArray()).sort(compareNatural2));
      var inb2;
      for (var i3 = 0; i3 < b12.length; i3++) {
        inb2 = false;
        for (var j = 0; j < b22.length; j++) {
          if (compareNatural2(b12[i3].value, b22[j].value) === 0 && b12[i3].identifier === b22[j].identifier) {
            inb2 = true;
            break;
          }
        }
        if (inb2 === false) {
          return false;
        }
      }
      return true;
    }
  });
});
var name$2e = "setMultiplicity";
var dependencies$2e = ["typed", "size", "subset", "compareNatural", "Index"];
var createSetMultiplicity = /* @__PURE__ */ factory(name$2e, dependencies$2e, (_ref) => {
  var {
    typed: typed2,
    size: size2,
    subset: subset2,
    compareNatural: compareNatural2,
    Index: Index2
  } = _ref;
  return typed2(name$2e, {
    "number | BigNumber | Fraction | Complex, Array | Matrix": function numberBigNumberFractionComplexArrayMatrix(e3, a) {
      if (subset2(size2(a), new Index2(0)) === 0) {
        return 0;
      }
      var b10 = flatten$1(Array.isArray(a) ? a : a.toArray());
      var count2 = 0;
      for (var i3 = 0; i3 < b10.length; i3++) {
        if (compareNatural2(b10[i3], e3) === 0) {
          count2++;
        }
      }
      return count2;
    }
  });
});
var name$2f = "setPowerset";
var dependencies$2f = ["typed", "size", "subset", "compareNatural", "Index"];
var createSetPowerset = /* @__PURE__ */ factory(name$2f, dependencies$2f, (_ref) => {
  var {
    typed: typed2,
    size: size2,
    subset: subset2,
    compareNatural: compareNatural2,
    Index: Index2
  } = _ref;
  return typed2(name$2f, {
    "Array | Matrix": function ArrayMatrix(a) {
      if (subset2(size2(a), new Index2(0)) === 0) {
        return [];
      }
      var b10 = flatten$1(Array.isArray(a) ? a : a.toArray()).sort(compareNatural2);
      var result = [];
      var number2 = 0;
      while (number2.toString(2).length <= b10.length) {
        result.push(_subset(b10, number2.toString(2).split("").reverse()));
        number2++;
      }
      return _sort(result);
    }
  });
  function _subset(array, bitarray) {
    var result = [];
    for (var i3 = 0; i3 < bitarray.length; i3++) {
      if (bitarray[i3] === "1") {
        result.push(array[i3]);
      }
    }
    return result;
  }
  function _sort(array) {
    var temp = [];
    for (var i3 = array.length - 1; i3 > 0; i3--) {
      for (var j = 0; j < i3; j++) {
        if (array[j].length > array[j + 1].length) {
          temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }
});
var name$2g = "setSize";
var dependencies$2g = ["typed", "compareNatural"];
var createSetSize = /* @__PURE__ */ factory(name$2g, dependencies$2g, (_ref) => {
  var {
    typed: typed2,
    compareNatural: compareNatural2
  } = _ref;
  return typed2(name$2g, {
    "Array | Matrix": function ArrayMatrix(a) {
      return Array.isArray(a) ? flatten$1(a).length : flatten$1(a.toArray()).length;
    },
    "Array | Matrix, boolean": function ArrayMatrixBoolean(a, unique) {
      if (unique === false || a.length === 0) {
        return Array.isArray(a) ? flatten$1(a).length : flatten$1(a.toArray()).length;
      } else {
        var b10 = flatten$1(Array.isArray(a) ? a : a.toArray()).sort(compareNatural2);
        var count2 = 1;
        for (var i3 = 1; i3 < b10.length; i3++) {
          if (compareNatural2(b10[i3], b10[i3 - 1]) !== 0) {
            count2++;
          }
        }
        return count2;
      }
    }
  });
});
var name$2h = "setSymDifference";
var dependencies$2h = ["typed", "size", "concat", "subset", "setDifference", "Index"];
var createSetSymDifference = /* @__PURE__ */ factory(name$2h, dependencies$2h, (_ref) => {
  var {
    typed: typed2,
    size: size2,
    concat: concat2,
    subset: subset2,
    setDifference: setDifference2,
    Index: Index2
  } = _ref;
  return typed2(name$2h, {
    "Array | Matrix, Array | Matrix": function ArrayMatrixArrayMatrix(a1, a2) {
      if (subset2(size2(a1), new Index2(0)) === 0) {
        return flatten$1(a2);
      } else if (subset2(size2(a2), new Index2(0)) === 0) {
        return flatten$1(a1);
      }
      var b12 = flatten$1(a1);
      var b22 = flatten$1(a2);
      return concat2(setDifference2(b12, b22), setDifference2(b22, b12));
    }
  });
});
var name$2i = "setUnion";
var dependencies$2i = ["typed", "size", "concat", "subset", "setIntersect", "setSymDifference", "Index"];
var createSetUnion = /* @__PURE__ */ factory(name$2i, dependencies$2i, (_ref) => {
  var {
    typed: typed2,
    size: size2,
    concat: concat2,
    subset: subset2,
    setIntersect: setIntersect2,
    setSymDifference: setSymDifference2,
    Index: Index2
  } = _ref;
  return typed2(name$2i, {
    "Array | Matrix, Array | Matrix": function ArrayMatrixArrayMatrix(a1, a2) {
      if (subset2(size2(a1), new Index2(0)) === 0) {
        return flatten$1(a2);
      } else if (subset2(size2(a2), new Index2(0)) === 0) {
        return flatten$1(a1);
      }
      var b12 = flatten$1(a1);
      var b22 = flatten$1(a2);
      return concat2(setSymDifference2(b12, b22), setIntersect2(b12, b22));
    }
  });
});
var name$2j = "add";
var dependencies$2j = ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix", "SparseMatrix", "concat"];
var createAdd = /* @__PURE__ */ factory(name$2j, dependencies$2j, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    addScalar: addScalar2,
    equalScalar: equalScalar2,
    DenseMatrix: DenseMatrix2,
    SparseMatrix: SparseMatrix2,
    concat: concat2
  } = _ref;
  var matAlgo01xDSid = createMatAlgo01xDSid({
    typed: typed2
  });
  var matAlgo04xSidSid = createMatAlgo04xSidSid({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo10xSids = createMatAlgo10xSids({
    typed: typed2,
    DenseMatrix: DenseMatrix2
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed: typed2,
    matrix: matrix2,
    concat: concat2
  });
  return typed2(name$2j, {
    "any, any": addScalar2,
    "any, any, ...any": typed2.referToSelf((self) => (x, y, rest) => {
      var result = self(x, y);
      for (var i3 = 0; i3 < rest.length; i3++) {
        result = self(result, rest[i3]);
      }
      return result;
    })
  }, matrixAlgorithmSuite({
    elop: addScalar2,
    DS: matAlgo01xDSid,
    SS: matAlgo04xSidSid,
    Ss: matAlgo10xSids
  }));
});
var name$2k = "norm";
var dependencies$2k = ["typed", "abs", "add", "pow", "conj", "sqrt", "multiply", "equalScalar", "larger", "smaller", "matrix", "ctranspose", "eigs"];
var createNorm = /* @__PURE__ */ factory(name$2k, dependencies$2k, (_ref) => {
  var {
    typed: typed2,
    abs: abs2,
    add: add2,
    pow: pow2,
    conj: conj2,
    sqrt: sqrt2,
    multiply: multiply2,
    equalScalar: equalScalar2,
    larger: larger2,
    smaller: smaller2,
    matrix: matrix2,
    ctranspose: ctranspose2,
    eigs: eigs2
  } = _ref;
  return typed2(name$2k, {
    number: Math.abs,
    Complex: function Complex2(x) {
      return x.abs();
    },
    BigNumber: function BigNumber2(x) {
      return x.abs();
    },
    boolean: function boolean2(x) {
      return Math.abs(x);
    },
    Array: function Array2(x) {
      return _norm(matrix2(x), 2);
    },
    Matrix: function Matrix2(x) {
      return _norm(x, 2);
    },
    "Array, number | BigNumber | string": function ArrayNumberBigNumberString(x, p) {
      return _norm(matrix2(x), p);
    },
    "Matrix, number | BigNumber | string": function MatrixNumberBigNumberString(x, p) {
      return _norm(x, p);
    }
  });
  function _vectorNormPlusInfinity(x) {
    var pinf = 0;
    x.forEach(function(value) {
      var v = abs2(value);
      if (larger2(v, pinf)) {
        pinf = v;
      }
    }, true);
    return pinf;
  }
  function _vectorNormMinusInfinity(x) {
    var ninf;
    x.forEach(function(value) {
      var v = abs2(value);
      if (!ninf || smaller2(v, ninf)) {
        ninf = v;
      }
    }, true);
    return ninf || 0;
  }
  function _vectorNorm(x, p) {
    if (p === Number.POSITIVE_INFINITY || p === "inf") {
      return _vectorNormPlusInfinity(x);
    }
    if (p === Number.NEGATIVE_INFINITY || p === "-inf") {
      return _vectorNormMinusInfinity(x);
    }
    if (p === "fro") {
      return _norm(x, 2);
    }
    if (typeof p === "number" && !isNaN(p)) {
      if (!equalScalar2(p, 0)) {
        var n = 0;
        x.forEach(function(value) {
          n = add2(pow2(abs2(value), p), n);
        }, true);
        return pow2(n, 1 / p);
      }
      return Number.POSITIVE_INFINITY;
    }
    throw new Error("Unsupported parameter value");
  }
  function _matrixNormFrobenius(x) {
    var fro = 0;
    x.forEach(function(value, index2) {
      fro = add2(fro, multiply2(value, conj2(value)));
    });
    return abs2(sqrt2(fro));
  }
  function _matrixNormOne(x) {
    var c10 = [];
    var maxc = 0;
    x.forEach(function(value, index2) {
      var j = index2[1];
      var cj2 = add2(c10[j] || 0, abs2(value));
      if (larger2(cj2, maxc)) {
        maxc = cj2;
      }
      c10[j] = cj2;
    }, true);
    return maxc;
  }
  function _matrixNormTwo(x) {
    var sizeX = x.size();
    if (sizeX[0] !== sizeX[1]) {
      throw new RangeError("Invalid matrix dimensions");
    }
    var tx = ctranspose2(x);
    var squaredX = multiply2(tx, x);
    var eigenVals = eigs2(squaredX).values.toArray();
    var rho = eigenVals[eigenVals.length - 1];
    return abs2(sqrt2(rho));
  }
  function _matrixNormInfinity(x) {
    var r = [];
    var maxr = 0;
    x.forEach(function(value, index2) {
      var i3 = index2[0];
      var ri = add2(r[i3] || 0, abs2(value));
      if (larger2(ri, maxr)) {
        maxr = ri;
      }
      r[i3] = ri;
    }, true);
    return maxr;
  }
  function _matrixNorm(x, p) {
    if (p === 1) {
      return _matrixNormOne(x);
    }
    if (p === Number.POSITIVE_INFINITY || p === "inf") {
      return _matrixNormInfinity(x);
    }
    if (p === "fro") {
      return _matrixNormFrobenius(x);
    }
    if (p === 2) {
      return _matrixNormTwo(x);
    }
    throw new Error("Unsupported parameter value " + p);
  }
  function _norm(x, p) {
    var sizeX = x.size();
    if (sizeX.length === 1) {
      return _vectorNorm(x, p);
    }
    if (sizeX.length === 2) {
      if (sizeX[0] && sizeX[1]) {
        return _matrixNorm(x, p);
      } else {
        throw new RangeError("Invalid matrix dimensions");
      }
    }
  }
});
var name$2l = "dot";
var dependencies$2l = ["typed", "addScalar", "multiplyScalar", "conj", "size"];
var createDot = /* @__PURE__ */ factory(name$2l, dependencies$2l, (_ref) => {
  var {
    typed: typed2,
    addScalar: addScalar2,
    multiplyScalar: multiplyScalar2,
    conj: conj2,
    size: size2
  } = _ref;
  return typed2(name$2l, {
    "Array | DenseMatrix, Array | DenseMatrix": _denseDot,
    "SparseMatrix, SparseMatrix": _sparseDot
  });
  function _validateDim(x, y) {
    var xSize = _size(x);
    var ySize = _size(y);
    var xLen, yLen;
    if (xSize.length === 1) {
      xLen = xSize[0];
    } else if (xSize.length === 2 && xSize[1] === 1) {
      xLen = xSize[0];
    } else {
      throw new RangeError("Expected a column vector, instead got a matrix of size (" + xSize.join(", ") + ")");
    }
    if (ySize.length === 1) {
      yLen = ySize[0];
    } else if (ySize.length === 2 && ySize[1] === 1) {
      yLen = ySize[0];
    } else {
      throw new RangeError("Expected a column vector, instead got a matrix of size (" + ySize.join(", ") + ")");
    }
    if (xLen !== yLen)
      throw new RangeError("Vectors must have equal length (" + xLen + " != " + yLen + ")");
    if (xLen === 0)
      throw new RangeError("Cannot calculate the dot product of empty vectors");
    return xLen;
  }
  function _denseDot(a, b10) {
    var N = _validateDim(a, b10);
    var adata = isMatrix(a) ? a._data : a;
    var adt = isMatrix(a) ? a._datatype : void 0;
    var bdata = isMatrix(b10) ? b10._data : b10;
    var bdt = isMatrix(b10) ? b10._datatype : void 0;
    var aIsColumn = _size(a).length === 2;
    var bIsColumn = _size(b10).length === 2;
    var add2 = addScalar2;
    var mul = multiplyScalar2;
    if (adt && bdt && adt === bdt && typeof adt === "string") {
      var dt = adt;
      add2 = typed2.find(addScalar2, [dt, dt]);
      mul = typed2.find(multiplyScalar2, [dt, dt]);
    }
    if (!aIsColumn && !bIsColumn) {
      var c10 = mul(conj2(adata[0]), bdata[0]);
      for (var i3 = 1; i3 < N; i3++) {
        c10 = add2(c10, mul(conj2(adata[i3]), bdata[i3]));
      }
      return c10;
    }
    if (!aIsColumn && bIsColumn) {
      var _c = mul(conj2(adata[0]), bdata[0][0]);
      for (var _i = 1; _i < N; _i++) {
        _c = add2(_c, mul(conj2(adata[_i]), bdata[_i][0]));
      }
      return _c;
    }
    if (aIsColumn && !bIsColumn) {
      var _c2 = mul(conj2(adata[0][0]), bdata[0]);
      for (var _i2 = 1; _i2 < N; _i2++) {
        _c2 = add2(_c2, mul(conj2(adata[_i2][0]), bdata[_i2]));
      }
      return _c2;
    }
    if (aIsColumn && bIsColumn) {
      var _c3 = mul(conj2(adata[0][0]), bdata[0][0]);
      for (var _i3 = 1; _i3 < N; _i3++) {
        _c3 = add2(_c3, mul(conj2(adata[_i3][0]), bdata[_i3][0]));
      }
      return _c3;
    }
  }
  function _sparseDot(x, y) {
    _validateDim(x, y);
    var xindex = x._index;
    var xvalues = x._values;
    var yindex = y._index;
    var yvalues = y._values;
    var c10 = 0;
    var add2 = addScalar2;
    var mul = multiplyScalar2;
    var i3 = 0;
    var j = 0;
    while (i3 < xindex.length && j < yindex.length) {
      var I = xindex[i3];
      var J2 = yindex[j];
      if (I < J2) {
        i3++;
        continue;
      }
      if (I > J2) {
        j++;
        continue;
      }
      if (I === J2) {
        c10 = add2(c10, mul(xvalues[i3], yvalues[j]));
        i3++;
        j++;
      }
    }
    return c10;
  }
  function _size(x) {
    return isMatrix(x) ? x.size() : size2(x);
  }
});
var name$2m = "trace";
var dependencies$2m = ["typed", "matrix", "add"];
var createTrace = /* @__PURE__ */ factory(name$2m, dependencies$2m, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    add: add2
  } = _ref;
  return typed2("trace", {
    Array: function _arrayTrace(x) {
      return _denseTrace(matrix2(x));
    },
    SparseMatrix: _sparseTrace,
    DenseMatrix: _denseTrace,
    any: clone$1
  });
  function _denseTrace(m) {
    var size2 = m._size;
    var data = m._data;
    switch (size2.length) {
      case 1:
        if (size2[0] === 1) {
          return clone$1(data[0]);
        }
        throw new RangeError("Matrix must be square (size: " + format$2(size2) + ")");
      case 2: {
        var rows = size2[0];
        var cols = size2[1];
        if (rows === cols) {
          var sum2 = 0;
          for (var i3 = 0; i3 < rows; i3++) {
            sum2 = add2(sum2, data[i3][i3]);
          }
          return sum2;
        } else {
          throw new RangeError("Matrix must be square (size: " + format$2(size2) + ")");
        }
      }
      default:
        throw new RangeError("Matrix must be two dimensional (size: " + format$2(size2) + ")");
    }
  }
  function _sparseTrace(m) {
    var values = m._values;
    var index2 = m._index;
    var ptr = m._ptr;
    var size2 = m._size;
    var rows = size2[0];
    var columns = size2[1];
    if (rows === columns) {
      var sum2 = 0;
      if (values.length > 0) {
        for (var j = 0; j < columns; j++) {
          var k0 = ptr[j];
          var k1 = ptr[j + 1];
          for (var k2 = k0; k2 < k1; k2++) {
            var i3 = index2[k2];
            if (i3 === j) {
              sum2 = add2(sum2, values[k2]);
              break;
            }
            if (i3 > j) {
              break;
            }
          }
        }
      }
      return sum2;
    }
    throw new RangeError("Matrix must be square (size: " + format$2(size2) + ")");
  }
});
var name$2n = "index";
var dependencies$2n = ["typed", "Index"];
var createIndex = /* @__PURE__ */ factory(name$2n, dependencies$2n, (_ref) => {
  var {
    typed: typed2,
    Index: Index2
  } = _ref;
  return typed2(name$2n, {
    "...number | string | BigNumber | Range | Array | Matrix": function numberStringBigNumberRangeArrayMatrix(args) {
      var ranges = args.map(function(arg2) {
        if (isBigNumber(arg2)) {
          return arg2.toNumber();
        } else if (Array.isArray(arg2) || isMatrix(arg2)) {
          return arg2.map(function(elem) {
            return isBigNumber(elem) ? elem.toNumber() : elem;
          });
        } else {
          return arg2;
        }
      });
      var res = new Index2();
      Index2.apply(res, ranges);
      return res;
    }
  });
});
var name$2o = "lup";
var dependencies$2o = ["typed", "matrix", "abs", "addScalar", "divideScalar", "multiplyScalar", "subtract", "larger", "equalScalar", "unaryMinus", "DenseMatrix", "SparseMatrix", "Spa"];
var createLup = /* @__PURE__ */ factory(name$2o, dependencies$2o, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    abs: abs2,
    addScalar: addScalar2,
    divideScalar: divideScalar2,
    multiplyScalar: multiplyScalar2,
    subtract: subtract2,
    larger: larger2,
    equalScalar: equalScalar2,
    unaryMinus: unaryMinus2,
    DenseMatrix: DenseMatrix2,
    SparseMatrix: SparseMatrix2,
    Spa: Spa2
  } = _ref;
  return typed2(name$2o, {
    DenseMatrix: function DenseMatrix3(m) {
      return _denseLUP(m);
    },
    SparseMatrix: function SparseMatrix3(m) {
      return _sparseLUP(m);
    },
    Array: function Array2(a) {
      var m = matrix2(a);
      var r = _denseLUP(m);
      return {
        L: r.L.valueOf(),
        U: r.U.valueOf(),
        p: r.p
      };
    }
  });
  function _denseLUP(m) {
    var rows = m._size[0];
    var columns = m._size[1];
    var n = Math.min(rows, columns);
    var data = clone$1(m._data);
    var ldata = [];
    var lsize = [rows, n];
    var udata = [];
    var usize = [n, columns];
    var i3, j, k2;
    var p = [];
    for (i3 = 0; i3 < rows; i3++) {
      p[i3] = i3;
    }
    for (j = 0; j < columns; j++) {
      if (j > 0) {
        for (i3 = 0; i3 < rows; i3++) {
          var min2 = Math.min(i3, j);
          var s = 0;
          for (k2 = 0; k2 < min2; k2++) {
            s = addScalar2(s, multiplyScalar2(data[i3][k2], data[k2][j]));
          }
          data[i3][j] = subtract2(data[i3][j], s);
        }
      }
      var pi2 = j;
      var pabsv = 0;
      var vjj = 0;
      for (i3 = j; i3 < rows; i3++) {
        var v = data[i3][j];
        var absv = abs2(v);
        if (larger2(absv, pabsv)) {
          pi2 = i3;
          pabsv = absv;
          vjj = v;
        }
      }
      if (j !== pi2) {
        p[j] = [p[pi2], p[pi2] = p[j]][0];
        DenseMatrix2._swapRows(j, pi2, data);
      }
      if (j < rows) {
        for (i3 = j + 1; i3 < rows; i3++) {
          var vij = data[i3][j];
          if (!equalScalar2(vij, 0)) {
            data[i3][j] = divideScalar2(data[i3][j], vjj);
          }
        }
      }
    }
    for (j = 0; j < columns; j++) {
      for (i3 = 0; i3 < rows; i3++) {
        if (j === 0) {
          if (i3 < columns) {
            udata[i3] = [];
          }
          ldata[i3] = [];
        }
        if (i3 < j) {
          if (i3 < columns) {
            udata[i3][j] = data[i3][j];
          }
          if (j < rows) {
            ldata[i3][j] = 0;
          }
          continue;
        }
        if (i3 === j) {
          if (i3 < columns) {
            udata[i3][j] = data[i3][j];
          }
          if (j < rows) {
            ldata[i3][j] = 1;
          }
          continue;
        }
        if (i3 < columns) {
          udata[i3][j] = 0;
        }
        if (j < rows) {
          ldata[i3][j] = data[i3][j];
        }
      }
    }
    var l = new DenseMatrix2({
      data: ldata,
      size: lsize
    });
    var u = new DenseMatrix2({
      data: udata,
      size: usize
    });
    var pv = [];
    for (i3 = 0, n = p.length; i3 < n; i3++) {
      pv[p[i3]] = i3;
    }
    return {
      L: l,
      U: u,
      p: pv,
      toString: function toString() {
        return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p;
      }
    };
  }
  function _sparseLUP(m) {
    var rows = m._size[0];
    var columns = m._size[1];
    var n = Math.min(rows, columns);
    var values = m._values;
    var index2 = m._index;
    var ptr = m._ptr;
    var lvalues = [];
    var lindex = [];
    var lptr = [];
    var lsize = [rows, n];
    var uvalues = [];
    var uindex = [];
    var uptr = [];
    var usize = [n, columns];
    var i3, j, k2;
    var pvCo = [];
    var pvOc = [];
    for (i3 = 0; i3 < rows; i3++) {
      pvCo[i3] = i3;
      pvOc[i3] = i3;
    }
    var swapIndeces = function swapIndeces2(x, y) {
      var kx = pvOc[x];
      var ky = pvOc[y];
      pvCo[kx] = y;
      pvCo[ky] = x;
      pvOc[x] = ky;
      pvOc[y] = kx;
    };
    var _loop = function _loop2() {
      var spa = new Spa2();
      if (j < rows) {
        lptr.push(lvalues.length);
        lvalues.push(1);
        lindex.push(j);
      }
      uptr.push(uvalues.length);
      var k0 = ptr[j];
      var k1 = ptr[j + 1];
      for (k2 = k0; k2 < k1; k2++) {
        i3 = index2[k2];
        spa.set(pvCo[i3], values[k2]);
      }
      if (j > 0) {
        spa.forEach(0, j - 1, function(k3, vkj) {
          SparseMatrix2._forEachRow(k3, lvalues, lindex, lptr, function(i4, vik) {
            if (i4 > k3) {
              spa.accumulate(i4, unaryMinus2(multiplyScalar2(vik, vkj)));
            }
          });
        });
      }
      var pi2 = j;
      var vjj = spa.get(j);
      var pabsv = abs2(vjj);
      spa.forEach(j + 1, rows - 1, function(x, v) {
        var absv = abs2(v);
        if (larger2(absv, pabsv)) {
          pi2 = x;
          pabsv = absv;
          vjj = v;
        }
      });
      if (j !== pi2) {
        SparseMatrix2._swapRows(j, pi2, lsize[1], lvalues, lindex, lptr);
        SparseMatrix2._swapRows(j, pi2, usize[1], uvalues, uindex, uptr);
        spa.swap(j, pi2);
        swapIndeces(j, pi2);
      }
      spa.forEach(0, rows - 1, function(x, v) {
        if (x <= j) {
          uvalues.push(v);
          uindex.push(x);
        } else {
          v = divideScalar2(v, vjj);
          if (!equalScalar2(v, 0)) {
            lvalues.push(v);
            lindex.push(x);
          }
        }
      });
    };
    for (j = 0; j < columns; j++) {
      _loop();
    }
    uptr.push(uvalues.length);
    lptr.push(lvalues.length);
    return {
      L: new SparseMatrix2({
        values: lvalues,
        index: lindex,
        ptr: lptr,
        size: lsize
      }),
      U: new SparseMatrix2({
        values: uvalues,
        index: uindex,
        ptr: uptr,
        size: usize
      }),
      p: pvCo,
      toString: function toString() {
        return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p;
      }
    };
  }
});
var name$2p = "qr";
var dependencies$2p = ["typed", "matrix", "zeros", "identity", "isZero", "equal", "sign", "sqrt", "conj", "unaryMinus", "addScalar", "divideScalar", "multiplyScalar", "subtract", "complex"];
var createQr = /* @__PURE__ */ factory(name$2p, dependencies$2p, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    zeros: zeros2,
    identity: identity2,
    isZero: isZero2,
    equal: equal2,
    sign: sign2,
    sqrt: sqrt2,
    conj: conj2,
    unaryMinus: unaryMinus2,
    addScalar: addScalar2,
    divideScalar: divideScalar2,
    multiplyScalar: multiplyScalar2,
    subtract: subtract2,
    complex: complex2
  } = _ref;
  return _extends_1(typed2(name$2p, {
    DenseMatrix: function DenseMatrix2(m) {
      return _denseQR(m);
    },
    SparseMatrix: function SparseMatrix2(m) {
      return _sparseQR();
    },
    Array: function Array2(a) {
      var m = matrix2(a);
      var r = _denseQR(m);
      return {
        Q: r.Q.valueOf(),
        R: r.R.valueOf()
      };
    }
  }), {
    _denseQRimpl
  });
  function _denseQRimpl(m) {
    var rows = m._size[0];
    var cols = m._size[1];
    var Q2 = identity2([rows], "dense");
    var Qdata = Q2._data;
    var R = m.clone();
    var Rdata = R._data;
    var i3, j, k2;
    var w = zeros2([rows], "");
    for (k2 = 0; k2 < Math.min(cols, rows); ++k2) {
      var pivot = Rdata[k2][k2];
      var sgn = unaryMinus2(equal2(pivot, 0) ? 1 : sign2(pivot));
      var conjSgn = conj2(sgn);
      var alphaSquared = 0;
      for (i3 = k2; i3 < rows; i3++) {
        alphaSquared = addScalar2(alphaSquared, multiplyScalar2(Rdata[i3][k2], conj2(Rdata[i3][k2])));
      }
      var alpha = multiplyScalar2(sgn, sqrt2(alphaSquared));
      if (!isZero2(alpha)) {
        var u1 = subtract2(pivot, alpha);
        w[k2] = 1;
        for (i3 = k2 + 1; i3 < rows; i3++) {
          w[i3] = divideScalar2(Rdata[i3][k2], u1);
        }
        var tau2 = unaryMinus2(conj2(divideScalar2(u1, alpha)));
        var s = void 0;
        for (j = k2; j < cols; j++) {
          s = 0;
          for (i3 = k2; i3 < rows; i3++) {
            s = addScalar2(s, multiplyScalar2(conj2(w[i3]), Rdata[i3][j]));
          }
          s = multiplyScalar2(s, tau2);
          for (i3 = k2; i3 < rows; i3++) {
            Rdata[i3][j] = multiplyScalar2(subtract2(Rdata[i3][j], multiplyScalar2(w[i3], s)), conjSgn);
          }
        }
        for (i3 = 0; i3 < rows; i3++) {
          s = 0;
          for (j = k2; j < rows; j++) {
            s = addScalar2(s, multiplyScalar2(Qdata[i3][j], w[j]));
          }
          s = multiplyScalar2(s, tau2);
          for (j = k2; j < rows; ++j) {
            Qdata[i3][j] = divideScalar2(subtract2(Qdata[i3][j], multiplyScalar2(s, conj2(w[j]))), conjSgn);
          }
        }
      }
    }
    return {
      Q: Q2,
      R,
      toString: function toString() {
        return "Q: " + this.Q.toString() + "\nR: " + this.R.toString();
      }
    };
  }
  function _denseQR(m) {
    var ret = _denseQRimpl(m);
    var Rdata = ret.R._data;
    if (m._data.length > 0) {
      var zero = Rdata[0][0].type === "Complex" ? complex2(0) : 0;
      for (var i3 = 0; i3 < Rdata.length; ++i3) {
        for (var j = 0; j < i3 && j < (Rdata[0] || []).length; ++j) {
          Rdata[i3][j] = zero;
        }
      }
    }
    return ret;
  }
  function _sparseQR(m) {
    throw new Error("qr not implemented for sparse matrices yet");
  }
});
function csPermute(a, pinv2, q2, values) {
  var avalues = a._values;
  var aindex = a._index;
  var aptr = a._ptr;
  var asize = a._size;
  var adt = a._datatype;
  var m = asize[0];
  var n = asize[1];
  var cvalues = values && a._values ? [] : null;
  var cindex = [];
  var cptr = [];
  var nz = 0;
  for (var k2 = 0; k2 < n; k2++) {
    cptr[k2] = nz;
    var j = q2 ? q2[k2] : k2;
    for (var t0 = aptr[j], t1 = aptr[j + 1], t2 = t0; t2 < t1; t2++) {
      var r = pinv2 ? pinv2[aindex[t2]] : aindex[t2];
      cindex[nz] = r;
      if (cvalues) {
        cvalues[nz] = avalues[t2];
      }
      nz++;
    }
  }
  cptr[n] = nz;
  return a.createSparseMatrix({
    values: cvalues,
    index: cindex,
    ptr: cptr,
    size: [m, n],
    datatype: adt
  });
}
function csTdfs(j, k2, w, head, next, post, stack) {
  var top = 0;
  w[stack] = j;
  while (top >= 0) {
    var p = w[stack + top];
    var i3 = w[head + p];
    if (i3 === -1) {
      top--;
      post[k2++] = p;
    } else {
      w[head + p] = w[next + i3];
      ++top;
      w[stack + top] = i3;
    }
  }
  return k2;
}
function csPost(parent, n) {
  if (!parent) {
    return null;
  }
  var k2 = 0;
  var j;
  var post = [];
  var w = [];
  var head = 0;
  var next = n;
  var stack = 2 * n;
  for (j = 0; j < n; j++) {
    w[head + j] = -1;
  }
  for (j = n - 1; j >= 0; j--) {
    if (parent[j] === -1) {
      continue;
    }
    w[next + j] = w[head + parent[j]];
    w[head + parent[j]] = j;
  }
  for (j = 0; j < n; j++) {
    if (parent[j] !== -1) {
      continue;
    }
    k2 = csTdfs(j, k2, w, head, next, post, stack);
  }
  return post;
}
function csEtree(a, ata) {
  if (!a) {
    return null;
  }
  var aindex = a._index;
  var aptr = a._ptr;
  var asize = a._size;
  var m = asize[0];
  var n = asize[1];
  var parent = [];
  var w = [];
  var ancestor = 0;
  var prev = n;
  var i3, inext;
  if (ata) {
    for (i3 = 0; i3 < m; i3++) {
      w[prev + i3] = -1;
    }
  }
  for (var k2 = 0; k2 < n; k2++) {
    parent[k2] = -1;
    w[ancestor + k2] = -1;
    for (var p0 = aptr[k2], p1 = aptr[k2 + 1], p = p0; p < p1; p++) {
      var r = aindex[p];
      i3 = ata ? w[prev + r] : r;
      for (; i3 !== -1 && i3 < k2; i3 = inext) {
        inext = w[ancestor + i3];
        w[ancestor + i3] = k2;
        if (inext === -1) {
          parent[i3] = k2;
        }
      }
      if (ata) {
        w[prev + r] = k2;
      }
    }
  }
  return parent;
}
function csFkeep(a, callback, other) {
  var avalues = a._values;
  var aindex = a._index;
  var aptr = a._ptr;
  var asize = a._size;
  var n = asize[1];
  var nz = 0;
  for (var j = 0; j < n; j++) {
    var p = aptr[j];
    aptr[j] = nz;
    for (; p < aptr[j + 1]; p++) {
      if (callback(aindex[p], j, avalues ? avalues[p] : 1, other)) {
        aindex[nz] = aindex[p];
        if (avalues) {
          avalues[nz] = avalues[p];
        }
        nz++;
      }
    }
  }
  aptr[n] = nz;
  aindex.splice(nz, aindex.length - nz);
  if (avalues) {
    avalues.splice(nz, avalues.length - nz);
  }
  return nz;
}
function csFlip(i3) {
  return -i3 - 2;
}
var name$2q = "csAmd";
var dependencies$2q = ["add", "multiply", "transpose"];
var createCsAmd = /* @__PURE__ */ factory(name$2q, dependencies$2q, (_ref) => {
  var {
    add: add2,
    multiply: multiply2,
    transpose: transpose2
  } = _ref;
  return function csAmd(order, a) {
    if (!a || order <= 0 || order > 3) {
      return null;
    }
    var asize = a._size;
    var m = asize[0];
    var n = asize[1];
    var lemax = 0;
    var dense = Math.max(16, 10 * Math.sqrt(n));
    dense = Math.min(n - 2, dense);
    var cm2 = _createTargetMatrix(order, a, m, n, dense);
    csFkeep(cm2, _diag, null);
    var cindex = cm2._index;
    var cptr = cm2._ptr;
    var cnz = cptr[n];
    var P = [];
    var W = [];
    var len = 0;
    var nv = n + 1;
    var next = 2 * (n + 1);
    var head = 3 * (n + 1);
    var elen = 4 * (n + 1);
    var degree = 5 * (n + 1);
    var w = 6 * (n + 1);
    var hhead = 7 * (n + 1);
    var last = P;
    var mark = _initializeQuotientGraph(n, cptr, W, len, head, last, next, hhead, nv, w, elen, degree);
    var nel = _initializeDegreeLists(n, cptr, W, degree, elen, w, dense, nv, head, last, next);
    var mindeg = 0;
    var i3, j, k2, k1, k22, e3, pj, ln, nvi, pk, eln, p1, p2, pn, h, d10;
    while (nel < n) {
      for (k2 = -1; mindeg < n && (k2 = W[head + mindeg]) === -1; mindeg++)
        ;
      if (W[next + k2] !== -1) {
        last[W[next + k2]] = -1;
      }
      W[head + mindeg] = W[next + k2];
      var elenk = W[elen + k2];
      var nvk = W[nv + k2];
      nel += nvk;
      var dk2 = 0;
      W[nv + k2] = -nvk;
      var p = cptr[k2];
      var pk1 = elenk === 0 ? p : cnz;
      var pk2 = pk1;
      for (k1 = 1; k1 <= elenk + 1; k1++) {
        if (k1 > elenk) {
          e3 = k2;
          pj = p;
          ln = W[len + k2] - elenk;
        } else {
          e3 = cindex[p++];
          pj = cptr[e3];
          ln = W[len + e3];
        }
        for (k22 = 1; k22 <= ln; k22++) {
          i3 = cindex[pj++];
          if ((nvi = W[nv + i3]) <= 0) {
            continue;
          }
          dk2 += nvi;
          W[nv + i3] = -nvi;
          cindex[pk2++] = i3;
          if (W[next + i3] !== -1) {
            last[W[next + i3]] = last[i3];
          }
          if (last[i3] !== -1) {
            W[next + last[i3]] = W[next + i3];
          } else {
            W[head + W[degree + i3]] = W[next + i3];
          }
        }
        if (e3 !== k2) {
          cptr[e3] = csFlip(k2);
          W[w + e3] = 0;
        }
      }
      if (elenk !== 0) {
        cnz = pk2;
      }
      W[degree + k2] = dk2;
      cptr[k2] = pk1;
      W[len + k2] = pk2 - pk1;
      W[elen + k2] = -2;
      mark = _wclear(mark, lemax, W, w, n);
      for (pk = pk1; pk < pk2; pk++) {
        i3 = cindex[pk];
        if ((eln = W[elen + i3]) <= 0) {
          continue;
        }
        nvi = -W[nv + i3];
        var wnvi = mark - nvi;
        for (p = cptr[i3], p1 = cptr[i3] + eln - 1; p <= p1; p++) {
          e3 = cindex[p];
          if (W[w + e3] >= mark) {
            W[w + e3] -= nvi;
          } else if (W[w + e3] !== 0) {
            W[w + e3] = W[degree + e3] + wnvi;
          }
        }
      }
      for (pk = pk1; pk < pk2; pk++) {
        i3 = cindex[pk];
        p1 = cptr[i3];
        p2 = p1 + W[elen + i3] - 1;
        pn = p1;
        for (h = 0, d10 = 0, p = p1; p <= p2; p++) {
          e3 = cindex[p];
          if (W[w + e3] !== 0) {
            var dext = W[w + e3] - mark;
            if (dext > 0) {
              d10 += dext;
              cindex[pn++] = e3;
              h += e3;
            } else {
              cptr[e3] = csFlip(k2);
              W[w + e3] = 0;
            }
          }
        }
        W[elen + i3] = pn - p1 + 1;
        var p3 = pn;
        var p4 = p1 + W[len + i3];
        for (p = p2 + 1; p < p4; p++) {
          j = cindex[p];
          var nvj = W[nv + j];
          if (nvj <= 0) {
            continue;
          }
          d10 += nvj;
          cindex[pn++] = j;
          h += j;
        }
        if (d10 === 0) {
          cptr[i3] = csFlip(k2);
          nvi = -W[nv + i3];
          dk2 -= nvi;
          nvk += nvi;
          nel += nvi;
          W[nv + i3] = 0;
          W[elen + i3] = -1;
        } else {
          W[degree + i3] = Math.min(W[degree + i3], d10);
          cindex[pn] = cindex[p3];
          cindex[p3] = cindex[p1];
          cindex[p1] = k2;
          W[len + i3] = pn - p1 + 1;
          h = (h < 0 ? -h : h) % n;
          W[next + i3] = W[hhead + h];
          W[hhead + h] = i3;
          last[i3] = h;
        }
      }
      W[degree + k2] = dk2;
      lemax = Math.max(lemax, dk2);
      mark = _wclear(mark + lemax, lemax, W, w, n);
      for (pk = pk1; pk < pk2; pk++) {
        i3 = cindex[pk];
        if (W[nv + i3] >= 0) {
          continue;
        }
        h = last[i3];
        i3 = W[hhead + h];
        W[hhead + h] = -1;
        for (; i3 !== -1 && W[next + i3] !== -1; i3 = W[next + i3], mark++) {
          ln = W[len + i3];
          eln = W[elen + i3];
          for (p = cptr[i3] + 1; p <= cptr[i3] + ln - 1; p++) {
            W[w + cindex[p]] = mark;
          }
          var jlast = i3;
          for (j = W[next + i3]; j !== -1; ) {
            var ok = W[len + j] === ln && W[elen + j] === eln;
            for (p = cptr[j] + 1; ok && p <= cptr[j] + ln - 1; p++) {
              if (W[w + cindex[p]] !== mark) {
                ok = 0;
              }
            }
            if (ok) {
              cptr[j] = csFlip(i3);
              W[nv + i3] += W[nv + j];
              W[nv + j] = 0;
              W[elen + j] = -1;
              j = W[next + j];
              W[next + jlast] = j;
            } else {
              jlast = j;
              j = W[next + j];
            }
          }
        }
      }
      for (p = pk1, pk = pk1; pk < pk2; pk++) {
        i3 = cindex[pk];
        if ((nvi = -W[nv + i3]) <= 0) {
          continue;
        }
        W[nv + i3] = nvi;
        d10 = W[degree + i3] + dk2 - nvi;
        d10 = Math.min(d10, n - nel - nvi);
        if (W[head + d10] !== -1) {
          last[W[head + d10]] = i3;
        }
        W[next + i3] = W[head + d10];
        last[i3] = -1;
        W[head + d10] = i3;
        mindeg = Math.min(mindeg, d10);
        W[degree + i3] = d10;
        cindex[p++] = i3;
      }
      W[nv + k2] = nvk;
      if ((W[len + k2] = p - pk1) === 0) {
        cptr[k2] = -1;
        W[w + k2] = 0;
      }
      if (elenk !== 0) {
        cnz = p;
      }
    }
    for (i3 = 0; i3 < n; i3++) {
      cptr[i3] = csFlip(cptr[i3]);
    }
    for (j = 0; j <= n; j++) {
      W[head + j] = -1;
    }
    for (j = n; j >= 0; j--) {
      if (W[nv + j] > 0) {
        continue;
      }
      W[next + j] = W[head + cptr[j]];
      W[head + cptr[j]] = j;
    }
    for (e3 = n; e3 >= 0; e3--) {
      if (W[nv + e3] <= 0) {
        continue;
      }
      if (cptr[e3] !== -1) {
        W[next + e3] = W[head + cptr[e3]];
        W[head + cptr[e3]] = e3;
      }
    }
    for (k2 = 0, i3 = 0; i3 <= n; i3++) {
      if (cptr[i3] === -1) {
        k2 = csTdfs(i3, k2, W, head, next, P, w);
      }
    }
    P.splice(P.length - 1, 1);
    return P;
  };
  function _createTargetMatrix(order, a, m, n, dense) {
    var at = transpose2(a);
    if (order === 1 && n === m) {
      return add2(a, at);
    }
    if (order === 2) {
      var tindex = at._index;
      var tptr = at._ptr;
      var p2 = 0;
      for (var j = 0; j < m; j++) {
        var p = tptr[j];
        tptr[j] = p2;
        if (tptr[j + 1] - p > dense) {
          continue;
        }
        for (var p1 = tptr[j + 1]; p < p1; p++) {
          tindex[p2++] = tindex[p];
        }
      }
      tptr[m] = p2;
      a = transpose2(at);
      return multiply2(at, a);
    }
    return multiply2(at, a);
  }
  function _initializeQuotientGraph(n, cptr, W, len, head, last, next, hhead, nv, w, elen, degree) {
    for (var k2 = 0; k2 < n; k2++) {
      W[len + k2] = cptr[k2 + 1] - cptr[k2];
    }
    W[len + n] = 0;
    for (var i3 = 0; i3 <= n; i3++) {
      W[head + i3] = -1;
      last[i3] = -1;
      W[next + i3] = -1;
      W[hhead + i3] = -1;
      W[nv + i3] = 1;
      W[w + i3] = 1;
      W[elen + i3] = 0;
      W[degree + i3] = W[len + i3];
    }
    var mark = _wclear(0, 0, W, w, n);
    W[elen + n] = -2;
    cptr[n] = -1;
    W[w + n] = 0;
    return mark;
  }
  function _initializeDegreeLists(n, cptr, W, degree, elen, w, dense, nv, head, last, next) {
    var nel = 0;
    for (var i3 = 0; i3 < n; i3++) {
      var d10 = W[degree + i3];
      if (d10 === 0) {
        W[elen + i3] = -2;
        nel++;
        cptr[i3] = -1;
        W[w + i3] = 0;
      } else if (d10 > dense) {
        W[nv + i3] = 0;
        W[elen + i3] = -1;
        nel++;
        cptr[i3] = csFlip(n);
        W[nv + n]++;
      } else {
        var h = W[head + d10];
        if (h !== -1) {
          last[h] = i3;
        }
        W[next + i3] = W[head + d10];
        W[head + d10] = i3;
      }
    }
    return nel;
  }
  function _wclear(mark, lemax, W, w, n) {
    if (mark < 2 || mark + lemax < 0) {
      for (var k2 = 0; k2 < n; k2++) {
        if (W[w + k2] !== 0) {
          W[w + k2] = 1;
        }
      }
      mark = 2;
    }
    return mark;
  }
  function _diag(i3, j) {
    return i3 !== j;
  }
});
function csLeaf(i3, j, w, first, maxfirst, prevleaf, ancestor) {
  var s, sparent;
  var jleaf = 0;
  var q2;
  if (i3 <= j || w[first + j] <= w[maxfirst + i3]) {
    return -1;
  }
  w[maxfirst + i3] = w[first + j];
  var jprev = w[prevleaf + i3];
  w[prevleaf + i3] = j;
  if (jprev === -1) {
    jleaf = 1;
    q2 = i3;
  } else {
    jleaf = 2;
    for (q2 = jprev; q2 !== w[ancestor + q2]; q2 = w[ancestor + q2])
      ;
    for (s = jprev; s !== q2; s = sparent) {
      sparent = w[ancestor + s];
      w[ancestor + s] = q2;
    }
  }
  return {
    jleaf,
    q: q2
  };
}
var name$2r = "csCounts";
var dependencies$2r = ["transpose"];
var createCsCounts = /* @__PURE__ */ factory(name$2r, dependencies$2r, (_ref) => {
  var {
    transpose: transpose2
  } = _ref;
  return function(a, parent, post, ata) {
    if (!a || !parent || !post) {
      return null;
    }
    var asize = a._size;
    var m = asize[0];
    var n = asize[1];
    var i3, j, k2, J2, p, p0, p1;
    var s = 4 * n + (ata ? n + m + 1 : 0);
    var w = [];
    var ancestor = 0;
    var maxfirst = n;
    var prevleaf = 2 * n;
    var first = 3 * n;
    var head = 4 * n;
    var next = 5 * n + 1;
    for (k2 = 0; k2 < s; k2++) {
      w[k2] = -1;
    }
    var colcount = [];
    var at = transpose2(a);
    var tindex = at._index;
    var tptr = at._ptr;
    for (k2 = 0; k2 < n; k2++) {
      j = post[k2];
      colcount[j] = w[first + j] === -1 ? 1 : 0;
      for (; j !== -1 && w[first + j] === -1; j = parent[j]) {
        w[first + j] = k2;
      }
    }
    if (ata) {
      for (k2 = 0; k2 < n; k2++) {
        w[post[k2]] = k2;
      }
      for (i3 = 0; i3 < m; i3++) {
        for (k2 = n, p0 = tptr[i3], p1 = tptr[i3 + 1], p = p0; p < p1; p++) {
          k2 = Math.min(k2, w[tindex[p]]);
        }
        w[next + i3] = w[head + k2];
        w[head + k2] = i3;
      }
    }
    for (i3 = 0; i3 < n; i3++) {
      w[ancestor + i3] = i3;
    }
    for (k2 = 0; k2 < n; k2++) {
      j = post[k2];
      if (parent[j] !== -1) {
        colcount[parent[j]]--;
      }
      for (J2 = ata ? w[head + k2] : j; J2 !== -1; J2 = ata ? w[next + J2] : -1) {
        for (p = tptr[J2]; p < tptr[J2 + 1]; p++) {
          i3 = tindex[p];
          var r = csLeaf(i3, j, w, first, maxfirst, prevleaf, ancestor);
          if (r.jleaf >= 1) {
            colcount[j]++;
          }
          if (r.jleaf === 2) {
            colcount[r.q]--;
          }
        }
      }
      if (parent[j] !== -1) {
        w[ancestor + j] = parent[j];
      }
    }
    for (j = 0; j < n; j++) {
      if (parent[j] !== -1) {
        colcount[parent[j]] += colcount[j];
      }
    }
    return colcount;
  };
});
var name$2s = "csSqr";
var dependencies$2s = ["add", "multiply", "transpose"];
var createCsSqr = /* @__PURE__ */ factory(name$2s, dependencies$2s, (_ref) => {
  var {
    add: add2,
    multiply: multiply2,
    transpose: transpose2
  } = _ref;
  var csAmd = createCsAmd({
    add: add2,
    multiply: multiply2,
    transpose: transpose2
  });
  var csCounts = createCsCounts({
    transpose: transpose2
  });
  return function csSqr(order, a, qr2) {
    var aptr = a._ptr;
    var asize = a._size;
    var n = asize[1];
    var k2;
    var s = {};
    s.q = csAmd(order, a);
    if (order && !s.q) {
      return null;
    }
    if (qr2) {
      var c10 = order ? csPermute(a, null, s.q, 0) : a;
      s.parent = csEtree(c10, 1);
      var post = csPost(s.parent, n);
      s.cp = csCounts(c10, s.parent, post, 1);
      if (c10 && s.parent && s.cp && _vcount(c10, s)) {
        for (s.unz = 0, k2 = 0; k2 < n; k2++) {
          s.unz += s.cp[k2];
        }
      }
    } else {
      s.unz = 4 * aptr[n] + n;
      s.lnz = s.unz;
    }
    return s;
  };
  function _vcount(a, s) {
    var aptr = a._ptr;
    var aindex = a._index;
    var asize = a._size;
    var m = asize[0];
    var n = asize[1];
    s.pinv = [];
    s.leftmost = [];
    var parent = s.parent;
    var pinv2 = s.pinv;
    var leftmost = s.leftmost;
    var w = [];
    var next = 0;
    var head = m;
    var tail = m + n;
    var nque = m + 2 * n;
    var i3, k2, p, p0, p1;
    for (k2 = 0; k2 < n; k2++) {
      w[head + k2] = -1;
      w[tail + k2] = -1;
      w[nque + k2] = 0;
    }
    for (i3 = 0; i3 < m; i3++) {
      leftmost[i3] = -1;
    }
    for (k2 = n - 1; k2 >= 0; k2--) {
      for (p0 = aptr[k2], p1 = aptr[k2 + 1], p = p0; p < p1; p++) {
        leftmost[aindex[p]] = k2;
      }
    }
    for (i3 = m - 1; i3 >= 0; i3--) {
      pinv2[i3] = -1;
      k2 = leftmost[i3];
      if (k2 === -1) {
        continue;
      }
      if (w[nque + k2]++ === 0) {
        w[tail + k2] = i3;
      }
      w[next + i3] = w[head + k2];
      w[head + k2] = i3;
    }
    s.lnz = 0;
    s.m2 = m;
    for (k2 = 0; k2 < n; k2++) {
      i3 = w[head + k2];
      s.lnz++;
      if (i3 < 0) {
        i3 = s.m2++;
      }
      pinv2[i3] = k2;
      if (--nque[k2] <= 0) {
        continue;
      }
      s.lnz += w[nque + k2];
      var pa = parent[k2];
      if (pa !== -1) {
        if (w[nque + pa] === 0) {
          w[tail + pa] = w[tail + k2];
        }
        w[next + w[tail + k2]] = w[head + pa];
        w[head + pa] = w[next + i3];
        w[nque + pa] += w[nque + k2];
      }
    }
    for (i3 = 0; i3 < m; i3++) {
      if (pinv2[i3] < 0) {
        pinv2[i3] = k2++;
      }
    }
    return true;
  }
});
function csMarked(w, j) {
  return w[j] < 0;
}
function csMark(w, j) {
  w[j] = csFlip(w[j]);
}
function csUnflip(i3) {
  return i3 < 0 ? csFlip(i3) : i3;
}
function csDfs(j, g, top, xi, pinv2) {
  var index2 = g._index;
  var ptr = g._ptr;
  var size2 = g._size;
  var n = size2[1];
  var i3, p, p2;
  var head = 0;
  xi[0] = j;
  while (head >= 0) {
    j = xi[head];
    var jnew = pinv2 ? pinv2[j] : j;
    if (!csMarked(ptr, j)) {
      csMark(ptr, j);
      xi[n + head] = jnew < 0 ? 0 : csUnflip(ptr[jnew]);
    }
    var done = 1;
    for (p = xi[n + head], p2 = jnew < 0 ? 0 : csUnflip(ptr[jnew + 1]); p < p2; p++) {
      i3 = index2[p];
      if (csMarked(ptr, i3)) {
        continue;
      }
      xi[n + head] = p;
      xi[++head] = i3;
      done = 0;
      break;
    }
    if (done) {
      head--;
      xi[--top] = j;
    }
  }
  return top;
}
function csReach(g, b10, k2, xi, pinv2) {
  var gptr = g._ptr;
  var gsize = g._size;
  var bindex = b10._index;
  var bptr = b10._ptr;
  var n = gsize[1];
  var p, p0, p1;
  var top = n;
  for (p0 = bptr[k2], p1 = bptr[k2 + 1], p = p0; p < p1; p++) {
    var i3 = bindex[p];
    if (!csMarked(gptr, i3)) {
      top = csDfs(i3, g, top, xi, pinv2);
    }
  }
  for (p = top; p < n; p++) {
    csMark(gptr, xi[p]);
  }
  return top;
}
var name$2t = "csSpsolve";
var dependencies$2t = ["divideScalar", "multiply", "subtract"];
var createCsSpsolve = /* @__PURE__ */ factory(name$2t, dependencies$2t, (_ref) => {
  var {
    divideScalar: divideScalar2,
    multiply: multiply2,
    subtract: subtract2
  } = _ref;
  return function csSpsolve(g, b10, k2, xi, x, pinv2, lo) {
    var gvalues = g._values;
    var gindex = g._index;
    var gptr = g._ptr;
    var gsize = g._size;
    var n = gsize[1];
    var bvalues = b10._values;
    var bindex = b10._index;
    var bptr = b10._ptr;
    var p, p0, p1, q2;
    var top = csReach(g, b10, k2, xi, pinv2);
    for (p = top; p < n; p++) {
      x[xi[p]] = 0;
    }
    for (p0 = bptr[k2], p1 = bptr[k2 + 1], p = p0; p < p1; p++) {
      x[bindex[p]] = bvalues[p];
    }
    for (var px = top; px < n; px++) {
      var j = xi[px];
      var J2 = pinv2 ? pinv2[j] : j;
      if (J2 < 0) {
        continue;
      }
      p0 = gptr[J2];
      p1 = gptr[J2 + 1];
      x[j] = divideScalar2(x[j], gvalues[lo ? p0 : p1 - 1]);
      p = lo ? p0 + 1 : p0;
      q2 = lo ? p1 : p1 - 1;
      for (; p < q2; p++) {
        var i3 = gindex[p];
        x[i3] = subtract2(x[i3], multiply2(gvalues[p], x[j]));
      }
    }
    return top;
  };
});
var name$2u = "csLu";
var dependencies$2u = ["abs", "divideScalar", "multiply", "subtract", "larger", "largerEq", "SparseMatrix"];
var createCsLu = /* @__PURE__ */ factory(name$2u, dependencies$2u, (_ref) => {
  var {
    abs: abs2,
    divideScalar: divideScalar2,
    multiply: multiply2,
    subtract: subtract2,
    larger: larger2,
    largerEq: largerEq2,
    SparseMatrix: SparseMatrix2
  } = _ref;
  var csSpsolve = createCsSpsolve({
    divideScalar: divideScalar2,
    multiply: multiply2,
    subtract: subtract2
  });
  return function csLu(m, s, tol) {
    if (!m) {
      return null;
    }
    var size2 = m._size;
    var n = size2[1];
    var q2;
    var lnz = 100;
    var unz = 100;
    if (s) {
      q2 = s.q;
      lnz = s.lnz || lnz;
      unz = s.unz || unz;
    }
    var lvalues = [];
    var lindex = [];
    var lptr = [];
    var L = new SparseMatrix2({
      values: lvalues,
      index: lindex,
      ptr: lptr,
      size: [n, n]
    });
    var uvalues = [];
    var uindex = [];
    var uptr = [];
    var U = new SparseMatrix2({
      values: uvalues,
      index: uindex,
      ptr: uptr,
      size: [n, n]
    });
    var pinv2 = [];
    var i3, p;
    var x = [];
    var xi = [];
    for (i3 = 0; i3 < n; i3++) {
      x[i3] = 0;
      pinv2[i3] = -1;
      lptr[i3 + 1] = 0;
    }
    lnz = 0;
    unz = 0;
    for (var k2 = 0; k2 < n; k2++) {
      lptr[k2] = lnz;
      uptr[k2] = unz;
      var col = q2 ? q2[k2] : k2;
      var top = csSpsolve(L, m, col, xi, x, pinv2, 1);
      var ipiv = -1;
      var a = -1;
      for (p = top; p < n; p++) {
        i3 = xi[p];
        if (pinv2[i3] < 0) {
          var xabs = abs2(x[i3]);
          if (larger2(xabs, a)) {
            a = xabs;
            ipiv = i3;
          }
        } else {
          uindex[unz] = pinv2[i3];
          uvalues[unz++] = x[i3];
        }
      }
      if (ipiv === -1 || a <= 0) {
        return null;
      }
      if (pinv2[col] < 0 && largerEq2(abs2(x[col]), multiply2(a, tol))) {
        ipiv = col;
      }
      var pivot = x[ipiv];
      uindex[unz] = k2;
      uvalues[unz++] = pivot;
      pinv2[ipiv] = k2;
      lindex[lnz] = ipiv;
      lvalues[lnz++] = 1;
      for (p = top; p < n; p++) {
        i3 = xi[p];
        if (pinv2[i3] < 0) {
          lindex[lnz] = i3;
          lvalues[lnz++] = divideScalar2(x[i3], pivot);
        }
        x[i3] = 0;
      }
    }
    lptr[n] = lnz;
    uptr[n] = unz;
    for (p = 0; p < lnz; p++) {
      lindex[p] = pinv2[lindex[p]];
    }
    lvalues.splice(lnz, lvalues.length - lnz);
    lindex.splice(lnz, lindex.length - lnz);
    uvalues.splice(unz, uvalues.length - unz);
    uindex.splice(unz, uindex.length - unz);
    return {
      L,
      U,
      pinv: pinv2
    };
  };
});
var name$2v = "slu";
var dependencies$2v = ["typed", "abs", "add", "multiply", "transpose", "divideScalar", "subtract", "larger", "largerEq", "SparseMatrix"];
var createSlu = /* @__PURE__ */ factory(name$2v, dependencies$2v, (_ref) => {
  var {
    typed: typed2,
    abs: abs2,
    add: add2,
    multiply: multiply2,
    transpose: transpose2,
    divideScalar: divideScalar2,
    subtract: subtract2,
    larger: larger2,
    largerEq: largerEq2,
    SparseMatrix: SparseMatrix2
  } = _ref;
  var csSqr = createCsSqr({
    add: add2,
    multiply: multiply2,
    transpose: transpose2
  });
  var csLu = createCsLu({
    abs: abs2,
    divideScalar: divideScalar2,
    multiply: multiply2,
    subtract: subtract2,
    larger: larger2,
    largerEq: largerEq2,
    SparseMatrix: SparseMatrix2
  });
  return typed2(name$2v, {
    "SparseMatrix, number, number": function SparseMatrixNumberNumber(a, order, threshold) {
      if (!isInteger$1(order) || order < 0 || order > 3) {
        throw new Error("Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]");
      }
      if (threshold < 0 || threshold > 1) {
        throw new Error("Partial pivoting threshold must be a number from 0 to 1");
      }
      var s = csSqr(order, a, false);
      var f2 = csLu(a, s, threshold);
      return {
        L: f2.L,
        U: f2.U,
        p: f2.pinv,
        q: s.q,
        toString: function toString() {
          return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\np: " + this.p.toString() + (this.q ? "\nq: " + this.q.toString() : "") + "\n";
        }
      };
    }
  });
});
function csIpvec(p, b10) {
  var k2;
  var n = b10.length;
  var x = [];
  if (p) {
    for (k2 = 0; k2 < n; k2++) {
      x[p[k2]] = b10[k2];
    }
  } else {
    for (k2 = 0; k2 < n; k2++) {
      x[k2] = b10[k2];
    }
  }
  return x;
}
var name$2w = "lusolve";
var dependencies$2w = ["typed", "matrix", "lup", "slu", "usolve", "lsolve", "DenseMatrix"];
var createLusolve = /* @__PURE__ */ factory(name$2w, dependencies$2w, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    lup: lup2,
    slu: slu2,
    usolve: usolve2,
    lsolve: lsolve2,
    DenseMatrix: DenseMatrix2
  } = _ref;
  var solveValidation = createSolveValidation({
    DenseMatrix: DenseMatrix2
  });
  return typed2(name$2w, {
    "Array, Array | Matrix": function ArrayArrayMatrix(a, b10) {
      a = matrix2(a);
      var d10 = lup2(a);
      var x = _lusolve(d10.L, d10.U, d10.p, null, b10);
      return x.valueOf();
    },
    "DenseMatrix, Array | Matrix": function DenseMatrixArrayMatrix(a, b10) {
      var d10 = lup2(a);
      return _lusolve(d10.L, d10.U, d10.p, null, b10);
    },
    "SparseMatrix, Array | Matrix": function SparseMatrixArrayMatrix(a, b10) {
      var d10 = lup2(a);
      return _lusolve(d10.L, d10.U, d10.p, null, b10);
    },
    "SparseMatrix, Array | Matrix, number, number": function SparseMatrixArrayMatrixNumberNumber(a, b10, order, threshold) {
      var d10 = slu2(a, order, threshold);
      return _lusolve(d10.L, d10.U, d10.p, d10.q, b10);
    },
    "Object, Array | Matrix": function ObjectArrayMatrix(d10, b10) {
      return _lusolve(d10.L, d10.U, d10.p, d10.q, b10);
    }
  });
  function _toMatrix(a) {
    if (isMatrix(a)) {
      return a;
    }
    if (isArray(a)) {
      return matrix2(a);
    }
    throw new TypeError("Invalid Matrix LU decomposition");
  }
  function _lusolve(l, u, p, q2, b10) {
    l = _toMatrix(l);
    u = _toMatrix(u);
    if (p) {
      b10 = solveValidation(l, b10, true);
      b10._data = csIpvec(p, b10._data);
    }
    var y = lsolve2(l, b10);
    var x = usolve2(u, y);
    if (q2) {
      x._data = csIpvec(q2, x._data);
    }
    return x;
  }
});
var name$2x = "polynomialRoot";
var dependencies$2x = ["typed", "isZero", "equalScalar", "add", "subtract", "multiply", "divide", "sqrt", "unaryMinus", "cbrt", "typeOf", "im", "re"];
var createPolynomialRoot = /* @__PURE__ */ factory(name$2x, dependencies$2x, (_ref) => {
  var {
    typed: typed2,
    isZero: isZero2,
    equalScalar: equalScalar2,
    add: add2,
    subtract: subtract2,
    multiply: multiply2,
    divide: divide2,
    sqrt: sqrt2,
    unaryMinus: unaryMinus2,
    cbrt: cbrt2,
    typeOf: typeOf2,
    im: im2,
    re: re2
  } = _ref;
  return typed2(name$2x, {
    "number|Complex, ...number|Complex": (constant, restCoeffs) => {
      var coeffs = [constant, ...restCoeffs];
      while (coeffs.length > 0 && isZero2(coeffs[coeffs.length - 1])) {
        coeffs.pop();
      }
      if (coeffs.length < 2) {
        throw new RangeError("Polynomial [".concat(constant, ", ").concat(restCoeffs, "] must have a non-zero non-constant coefficient"));
      }
      switch (coeffs.length) {
        case 2:
          return [unaryMinus2(divide2(coeffs[0], coeffs[1]))];
        case 3: {
          var [c10, b10, a] = coeffs;
          var denom = multiply2(2, a);
          var d12 = multiply2(b10, b10);
          var d22 = multiply2(4, a, c10);
          if (equalScalar2(d12, d22))
            return [divide2(unaryMinus2(b10), denom)];
          var discriminant = sqrt2(subtract2(d12, d22));
          return [divide2(subtract2(discriminant, b10), denom), divide2(subtract2(unaryMinus2(discriminant), b10), denom)];
        }
        case 4: {
          var [d10, _c, _b, _a] = coeffs;
          var _denom = unaryMinus2(multiply2(3, _a));
          var D0_1 = multiply2(_b, _b);
          var D0_2 = multiply2(3, _a, _c);
          var D1_1 = add2(multiply2(2, _b, _b, _b), multiply2(27, _a, _a, d10));
          var D1_2 = multiply2(9, _a, _b, _c);
          if (equalScalar2(D0_1, D0_2) && equalScalar2(D1_1, D1_2)) {
            return [divide2(_b, _denom)];
          }
          var Delta0 = subtract2(D0_1, D0_2);
          var Delta1 = subtract2(D1_1, D1_2);
          var discriminant1 = add2(multiply2(18, _a, _b, _c, d10), multiply2(_b, _b, _c, _c));
          var discriminant2 = add2(multiply2(4, _b, _b, _b, d10), multiply2(4, _a, _c, _c, _c), multiply2(27, _a, _a, d10, d10));
          if (equalScalar2(discriminant1, discriminant2)) {
            return [
              divide2(subtract2(multiply2(4, _a, _b, _c), add2(multiply2(9, _a, _a, d10), multiply2(_b, _b, _b))), multiply2(_a, Delta0)),
              divide2(subtract2(multiply2(9, _a, d10), multiply2(_b, _c)), multiply2(2, Delta0))
            ];
          }
          var Ccubed;
          if (equalScalar2(D0_1, D0_2)) {
            Ccubed = Delta1;
          } else {
            Ccubed = divide2(add2(Delta1, sqrt2(subtract2(multiply2(Delta1, Delta1), multiply2(4, Delta0, Delta0, Delta0)))), 2);
          }
          var allRoots = true;
          var rawRoots = cbrt2(Ccubed, allRoots).toArray().map((C) => divide2(add2(_b, C, divide2(Delta0, C)), _denom));
          return rawRoots.map((r) => {
            if (typeOf2(r) === "Complex" && equalScalar2(re2(r), re2(r) + im2(r))) {
              return re2(r);
            }
            return r;
          });
        }
        default:
          throw new RangeError("only implemented for cubic or lower-order polynomials, not ".concat(coeffs));
      }
    }
  });
});
var name$2y = "det";
var dependencies$2y = ["typed", "matrix", "subtract", "multiply", "divideScalar", "isZero", "unaryMinus"];
var createDet = /* @__PURE__ */ factory(name$2y, dependencies$2y, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    subtract: subtract2,
    multiply: multiply2,
    divideScalar: divideScalar2,
    isZero: isZero2,
    unaryMinus: unaryMinus2
  } = _ref;
  return typed2(name$2y, {
    any: function any(x) {
      return clone$1(x);
    },
    "Array | Matrix": function det2(x) {
      var size2;
      if (isMatrix(x)) {
        size2 = x.size();
      } else if (Array.isArray(x)) {
        x = matrix2(x);
        size2 = x.size();
      } else {
        size2 = [];
      }
      switch (size2.length) {
        case 0:
          return clone$1(x);
        case 1:
          if (size2[0] === 1) {
            return clone$1(x.valueOf()[0]);
          }
          if (size2[0] === 0) {
            return 1;
          } else {
            throw new RangeError("Matrix must be square (size: " + format$2(size2) + ")");
          }
        case 2: {
          var rows = size2[0];
          var cols = size2[1];
          if (rows === cols) {
            return _det(x.clone().valueOf(), rows);
          }
          if (cols === 0) {
            return 1;
          } else {
            throw new RangeError("Matrix must be square (size: " + format$2(size2) + ")");
          }
        }
        default:
          throw new RangeError("Matrix must be two dimensional (size: " + format$2(size2) + ")");
      }
    }
  });
  function _det(matrix3, rows, cols) {
    if (rows === 1) {
      return clone$1(matrix3[0][0]);
    } else if (rows === 2) {
      return subtract2(multiply2(matrix3[0][0], matrix3[1][1]), multiply2(matrix3[1][0], matrix3[0][1]));
    } else {
      var negated = false;
      var rowIndices = new Array(rows).fill(0).map((_, i4) => i4);
      for (var k2 = 0; k2 < rows; k2++) {
        var k_ = rowIndices[k2];
        if (isZero2(matrix3[k_][k2])) {
          var _k = void 0;
          for (_k = k2 + 1; _k < rows; _k++) {
            if (!isZero2(matrix3[rowIndices[_k]][k2])) {
              k_ = rowIndices[_k];
              rowIndices[_k] = rowIndices[k2];
              rowIndices[k2] = k_;
              negated = !negated;
              break;
            }
          }
          if (_k === rows)
            return matrix3[k_][k2];
        }
        var piv = matrix3[k_][k2];
        var piv_ = k2 === 0 ? 1 : matrix3[rowIndices[k2 - 1]][k2 - 1];
        for (var i3 = k2 + 1; i3 < rows; i3++) {
          var i_ = rowIndices[i3];
          for (var j = k2 + 1; j < rows; j++) {
            matrix3[i_][j] = divideScalar2(subtract2(multiply2(matrix3[i_][j], piv), multiply2(matrix3[i_][k2], matrix3[k_][j])), piv_);
          }
        }
      }
      var det2 = matrix3[rowIndices[rows - 1]][rows - 1];
      return negated ? unaryMinus2(det2) : det2;
    }
  }
});
var name$2z = "inv";
var dependencies$2z = ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"];
var createInv = /* @__PURE__ */ factory(name$2z, dependencies$2z, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    divideScalar: divideScalar2,
    addScalar: addScalar2,
    multiply: multiply2,
    unaryMinus: unaryMinus2,
    det: det2,
    identity: identity2,
    abs: abs2
  } = _ref;
  return typed2(name$2z, {
    "Array | Matrix": function ArrayMatrix(x) {
      var size2 = isMatrix(x) ? x.size() : arraySize(x);
      switch (size2.length) {
        case 1:
          if (size2[0] === 1) {
            if (isMatrix(x)) {
              return matrix2([divideScalar2(1, x.valueOf()[0])]);
            } else {
              return [divideScalar2(1, x[0])];
            }
          } else {
            throw new RangeError("Matrix must be square (size: " + format$2(size2) + ")");
          }
        case 2: {
          var rows = size2[0];
          var cols = size2[1];
          if (rows === cols) {
            if (isMatrix(x)) {
              return matrix2(_inv(x.valueOf(), rows, cols), x.storage());
            } else {
              return _inv(x, rows, cols);
            }
          } else {
            throw new RangeError("Matrix must be square (size: " + format$2(size2) + ")");
          }
        }
        default:
          throw new RangeError("Matrix must be two dimensional (size: " + format$2(size2) + ")");
      }
    },
    any: function any(x) {
      return divideScalar2(1, x);
    }
  });
  function _inv(mat, rows, cols) {
    var r, s, f2, value, temp;
    if (rows === 1) {
      value = mat[0][0];
      if (value === 0) {
        throw Error("Cannot calculate inverse, determinant is zero");
      }
      return [[divideScalar2(1, value)]];
    } else if (rows === 2) {
      var d10 = det2(mat);
      if (d10 === 0) {
        throw Error("Cannot calculate inverse, determinant is zero");
      }
      return [[divideScalar2(mat[1][1], d10), divideScalar2(unaryMinus2(mat[0][1]), d10)], [divideScalar2(unaryMinus2(mat[1][0]), d10), divideScalar2(mat[0][0], d10)]];
    } else {
      var A = mat.concat();
      for (r = 0; r < rows; r++) {
        A[r] = A[r].concat();
      }
      var B = identity2(rows).valueOf();
      for (var c10 = 0; c10 < cols; c10++) {
        var ABig = abs2(A[c10][c10]);
        var rBig = c10;
        r = c10 + 1;
        while (r < rows) {
          if (abs2(A[r][c10]) > ABig) {
            ABig = abs2(A[r][c10]);
            rBig = r;
          }
          r++;
        }
        if (ABig === 0) {
          throw Error("Cannot calculate inverse, determinant is zero");
        }
        r = rBig;
        if (r !== c10) {
          temp = A[c10];
          A[c10] = A[r];
          A[r] = temp;
          temp = B[c10];
          B[c10] = B[r];
          B[r] = temp;
        }
        var Ac = A[c10];
        var Bc = B[c10];
        for (r = 0; r < rows; r++) {
          var Ar = A[r];
          var Br = B[r];
          if (r !== c10) {
            if (Ar[c10] !== 0) {
              f2 = divideScalar2(unaryMinus2(Ar[c10]), Ac[c10]);
              for (s = c10; s < cols; s++) {
                Ar[s] = addScalar2(Ar[s], multiply2(f2, Ac[s]));
              }
              for (s = 0; s < cols; s++) {
                Br[s] = addScalar2(Br[s], multiply2(f2, Bc[s]));
              }
            }
          } else {
            f2 = Ac[c10];
            for (s = c10; s < cols; s++) {
              Ar[s] = divideScalar2(Ar[s], f2);
            }
            for (s = 0; s < cols; s++) {
              Br[s] = divideScalar2(Br[s], f2);
            }
          }
        }
      }
      return B;
    }
  }
});
var name$2A = "pinv";
var dependencies$2A = ["typed", "matrix", "inv", "deepEqual", "equal", "dotDivide", "dot", "ctranspose", "divideScalar", "multiply", "add", "Complex"];
var createPinv = /* @__PURE__ */ factory(name$2A, dependencies$2A, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    inv: inv2,
    deepEqual: deepEqual2,
    equal: equal2,
    dotDivide: dotDivide2,
    dot: dot2,
    ctranspose: ctranspose2,
    divideScalar: divideScalar2,
    multiply: multiply2,
    add: add2,
    Complex: Complex2
  } = _ref;
  return typed2(name$2A, {
    "Array | Matrix": function ArrayMatrix(x) {
      var size2 = isMatrix(x) ? x.size() : arraySize(x);
      switch (size2.length) {
        case 1:
          if (_isZeros(x))
            return ctranspose2(x);
          if (size2[0] === 1) {
            return inv2(x);
          } else {
            return dotDivide2(ctranspose2(x), dot2(x, x));
          }
        case 2: {
          if (_isZeros(x))
            return ctranspose2(x);
          var rows = size2[0];
          var cols = size2[1];
          if (rows === cols) {
            try {
              return inv2(x);
            } catch (err) {
              if (err instanceof Error && err.message.match(/Cannot calculate inverse, determinant is zero/))
                ;
              else {
                throw err;
              }
            }
          }
          if (isMatrix(x)) {
            return matrix2(_pinv(x.valueOf(), rows, cols), x.storage());
          } else {
            return _pinv(x, rows, cols);
          }
        }
        default:
          throw new RangeError("Matrix must be two dimensional (size: " + format$2(size2) + ")");
      }
    },
    any: function any(x) {
      if (equal2(x, 0))
        return clone$1(x);
      return divideScalar2(1, x);
    }
  });
  function _pinv(mat, rows, cols) {
    var {
      C,
      F
    } = _rankFact(mat, rows, cols);
    var Cpinv = multiply2(inv2(multiply2(ctranspose2(C), C)), ctranspose2(C));
    var Fpinv = multiply2(ctranspose2(F), inv2(multiply2(F, ctranspose2(F))));
    return multiply2(Fpinv, Cpinv);
  }
  function _rref(mat, rows, cols) {
    var M = clone$1(mat);
    var lead = 0;
    for (var r = 0; r < rows; r++) {
      if (cols <= lead) {
        return M;
      }
      var i3 = r;
      while (_isZero(M[i3][lead])) {
        i3++;
        if (rows === i3) {
          i3 = r;
          lead++;
          if (cols === lead) {
            return M;
          }
        }
      }
      [M[i3], M[r]] = [M[r], M[i3]];
      var val = M[r][lead];
      for (var j = 0; j < cols; j++) {
        M[r][j] = dotDivide2(M[r][j], val);
      }
      for (var _i = 0; _i < rows; _i++) {
        if (_i === r)
          continue;
        val = M[_i][lead];
        for (var _j = 0; _j < cols; _j++) {
          M[_i][_j] = add2(M[_i][_j], multiply2(-1, multiply2(val, M[r][_j])));
        }
      }
      lead++;
    }
    return M;
  }
  function _rankFact(mat, rows, cols) {
    var rref = _rref(mat, rows, cols);
    var C = mat.map((_, i3) => _.filter((_2, j) => j < rows && !_isZero(dot2(rref[j], rref[j]))));
    var F = rref.filter((_, i3) => !_isZero(dot2(rref[i3], rref[i3])));
    return {
      C,
      F
    };
  }
  function _isZero(x) {
    return equal2(add2(x, Complex2(1, 1)), add2(0, Complex2(1, 1)));
  }
  function _isZeros(arr) {
    return deepEqual2(add2(arr, Complex2(1, 1)), add2(multiply2(arr, 0), Complex2(1, 1)));
  }
});
function createComplexEigs(_ref) {
  var {
    addScalar: addScalar2,
    subtract: subtract2,
    flatten: flatten2,
    multiply: multiply2,
    multiplyScalar: multiplyScalar2,
    divideScalar: divideScalar2,
    sqrt: sqrt2,
    abs: abs2,
    bignumber: bignumber2,
    diag: diag2,
    inv: inv2,
    qr: qr2,
    usolve: usolve2,
    usolveAll: usolveAll2,
    equal: equal2,
    complex: complex2,
    larger: larger2,
    smaller: smaller2,
    matrixFromColumns: matrixFromColumns2,
    dot: dot2
  } = _ref;
  function complexEigs(arr, N, prec, type, findVectors) {
    if (findVectors === void 0) {
      findVectors = true;
    }
    var R = balance(arr, N, prec, type, findVectors);
    reduceToHessenberg(arr, N, prec, type, findVectors, R);
    var {
      values,
      C
    } = iterateUntilTriangular(arr, N, prec, type, findVectors);
    var vectors;
    if (findVectors) {
      vectors = findEigenvectors(arr, N, C, R, values, prec, type);
      vectors = matrixFromColumns2(...vectors);
    }
    return {
      values,
      vectors
    };
  }
  function balance(arr, N, prec, type, findVectors) {
    var big = type === "BigNumber";
    var cplx = type === "Complex";
    var realzero = big ? bignumber2(0) : 0;
    var one = big ? bignumber2(1) : cplx ? complex2(1) : 1;
    var realone = big ? bignumber2(1) : 1;
    var radix = big ? bignumber2(10) : 2;
    var radixSq = multiplyScalar2(radix, radix);
    var Rdiag;
    if (findVectors) {
      Rdiag = Array(N).fill(one);
    }
    var last = false;
    while (!last) {
      last = true;
      for (var i3 = 0; i3 < N; i3++) {
        var colNorm = realzero;
        var rowNorm = realzero;
        for (var j = 0; j < N; j++) {
          if (i3 === j)
            continue;
          var c10 = abs2(arr[i3][j]);
          colNorm = addScalar2(colNorm, c10);
          rowNorm = addScalar2(rowNorm, c10);
        }
        if (!equal2(colNorm, 0) && !equal2(rowNorm, 0)) {
          var f2 = realone;
          var _c = colNorm;
          var rowDivRadix = divideScalar2(rowNorm, radix);
          var rowMulRadix = multiplyScalar2(rowNorm, radix);
          while (smaller2(_c, rowDivRadix)) {
            _c = multiplyScalar2(_c, radixSq);
            f2 = multiplyScalar2(f2, radix);
          }
          while (larger2(_c, rowMulRadix)) {
            _c = divideScalar2(_c, radixSq);
            f2 = divideScalar2(f2, radix);
          }
          var condition = smaller2(divideScalar2(addScalar2(_c, rowNorm), f2), multiplyScalar2(addScalar2(colNorm, rowNorm), 0.95));
          if (condition) {
            last = false;
            var g = divideScalar2(1, f2);
            for (var _j = 0; _j < N; _j++) {
              if (i3 === _j) {
                continue;
              }
              arr[i3][_j] = multiplyScalar2(arr[i3][_j], f2);
              arr[_j][i3] = multiplyScalar2(arr[_j][i3], g);
            }
            if (findVectors) {
              Rdiag[i3] = multiplyScalar2(Rdiag[i3], f2);
            }
          }
        }
      }
    }
    return diag2(Rdiag);
  }
  function reduceToHessenberg(arr, N, prec, type, findVectors, R) {
    var big = type === "BigNumber";
    var cplx = type === "Complex";
    var zero = big ? bignumber2(0) : cplx ? complex2(0) : 0;
    if (big) {
      prec = bignumber2(prec);
    }
    for (var i3 = 0; i3 < N - 2; i3++) {
      var maxIndex = 0;
      var max2 = zero;
      for (var j = i3 + 1; j < N; j++) {
        var el = arr[j][i3];
        if (smaller2(abs2(max2), abs2(el))) {
          max2 = el;
          maxIndex = j;
        }
      }
      if (smaller2(abs2(max2), prec)) {
        continue;
      }
      if (maxIndex !== i3 + 1) {
        var tmp1 = arr[maxIndex];
        arr[maxIndex] = arr[i3 + 1];
        arr[i3 + 1] = tmp1;
        for (var _j2 = 0; _j2 < N; _j2++) {
          var tmp2 = arr[_j2][maxIndex];
          arr[_j2][maxIndex] = arr[_j2][i3 + 1];
          arr[_j2][i3 + 1] = tmp2;
        }
        if (findVectors) {
          var tmp3 = R[maxIndex];
          R[maxIndex] = R[i3 + 1];
          R[i3 + 1] = tmp3;
        }
      }
      for (var _j3 = i3 + 2; _j3 < N; _j3++) {
        var n = divideScalar2(arr[_j3][i3], max2);
        if (n === 0) {
          continue;
        }
        for (var k2 = 0; k2 < N; k2++) {
          arr[_j3][k2] = subtract2(arr[_j3][k2], multiplyScalar2(n, arr[i3 + 1][k2]));
        }
        for (var _k = 0; _k < N; _k++) {
          arr[_k][i3 + 1] = addScalar2(arr[_k][i3 + 1], multiplyScalar2(n, arr[_k][_j3]));
        }
        if (findVectors) {
          for (var _k2 = 0; _k2 < N; _k2++) {
            R[_j3][_k2] = subtract2(R[_j3][_k2], multiplyScalar2(n, R[i3 + 1][_k2]));
          }
        }
      }
    }
    return R;
  }
  function iterateUntilTriangular(A, N, prec, type, findVectors) {
    var big = type === "BigNumber";
    var cplx = type === "Complex";
    var one = big ? bignumber2(1) : cplx ? complex2(1) : 1;
    if (big) {
      prec = bignumber2(prec);
    }
    var arr = clone$1(A);
    var lambdas = [];
    var n = N;
    var Sdiag = [];
    var Qtotal = findVectors ? diag2(Array(N).fill(one)) : void 0;
    var Qpartial = findVectors ? diag2(Array(n).fill(one)) : void 0;
    var lastConvergenceBefore = 0;
    while (lastConvergenceBefore <= 100) {
      lastConvergenceBefore += 1;
      var k2 = 0;
      for (var i3 = 0; i3 < n; i3++) {
        arr[i3][i3] = subtract2(arr[i3][i3], k2);
      }
      var {
        Q: Q2,
        R
      } = qr2(arr);
      arr = multiply2(R, Q2);
      for (var _i = 0; _i < n; _i++) {
        arr[_i][_i] = addScalar2(arr[_i][_i], k2);
      }
      if (findVectors) {
        Qpartial = multiply2(Qpartial, Q2);
      }
      if (n === 1 || smaller2(abs2(arr[n - 1][n - 2]), prec)) {
        lastConvergenceBefore = 0;
        lambdas.push(arr[n - 1][n - 1]);
        if (findVectors) {
          Sdiag.unshift([[1]]);
          inflateMatrix(Qpartial, N);
          Qtotal = multiply2(Qtotal, Qpartial);
          if (n > 1) {
            Qpartial = diag2(Array(n - 1).fill(one));
          }
        }
        n -= 1;
        arr.pop();
        for (var _i2 = 0; _i2 < n; _i2++) {
          arr[_i2].pop();
        }
      } else if (n === 2 || smaller2(abs2(arr[n - 2][n - 3]), prec)) {
        lastConvergenceBefore = 0;
        var ll = eigenvalues2x2(arr[n - 2][n - 2], arr[n - 2][n - 1], arr[n - 1][n - 2], arr[n - 1][n - 1]);
        lambdas.push(...ll);
        if (findVectors) {
          Sdiag.unshift(jordanBase2x2(arr[n - 2][n - 2], arr[n - 2][n - 1], arr[n - 1][n - 2], arr[n - 1][n - 1], ll[0], ll[1], prec, type));
          inflateMatrix(Qpartial, N);
          Qtotal = multiply2(Qtotal, Qpartial);
          if (n > 2) {
            Qpartial = diag2(Array(n - 2).fill(one));
          }
        }
        n -= 2;
        arr.pop();
        arr.pop();
        for (var _i3 = 0; _i3 < n; _i3++) {
          arr[_i3].pop();
          arr[_i3].pop();
        }
      }
      if (n === 0) {
        break;
      }
    }
    lambdas.sort((a, b10) => +subtract2(abs2(a), abs2(b10)));
    if (lastConvergenceBefore > 100) {
      var err = Error("The eigenvalues failed to converge. Only found these eigenvalues: " + lambdas.join(", "));
      err.values = lambdas;
      err.vectors = [];
      throw err;
    }
    var C = findVectors ? multiply2(Qtotal, blockDiag(Sdiag, N)) : void 0;
    return {
      values: lambdas,
      C
    };
  }
  function findEigenvectors(A, N, C, R, values, prec, type) {
    var Cinv = inv2(C);
    var U = multiply2(Cinv, A, C);
    var big = type === "BigNumber";
    var cplx = type === "Complex";
    var zero = big ? bignumber2(0) : cplx ? complex2(0) : 0;
    var one = big ? bignumber2(1) : cplx ? complex2(1) : 1;
    var uniqueValues = [];
    var multiplicities = [];
    for (var \u03BB of values) {
      var i3 = indexOf(uniqueValues, \u03BB, equal2);
      if (i3 === -1) {
        uniqueValues.push(\u03BB);
        multiplicities.push(1);
      } else {
        multiplicities[i3] += 1;
      }
    }
    var vectors = [];
    var len = uniqueValues.length;
    var b10 = Array(N).fill(zero);
    var E = diag2(Array(N).fill(one));
    var failedLambdas = [];
    var _loop = function _loop2() {
      var \u03BB2 = uniqueValues[_i4];
      var S = subtract2(U, multiply2(\u03BB2, E));
      var solutions = usolveAll2(S, b10);
      solutions.shift();
      while (solutions.length < multiplicities[_i4]) {
        var approxVec = inverseIterate(S, N, solutions, prec, type);
        if (approxVec == null) {
          failedLambdas.push(\u03BB2);
          break;
        }
        solutions.push(approxVec);
      }
      var correction = multiply2(inv2(R), C);
      solutions = solutions.map((v) => multiply2(correction, v));
      vectors.push(...solutions.map((v) => flatten2(v)));
    };
    for (var _i4 = 0; _i4 < len; _i4++) {
      _loop();
    }
    if (failedLambdas.length !== 0) {
      var err = new Error("Failed to find eigenvectors for the following eigenvalues: " + failedLambdas.join(", "));
      err.values = values;
      err.vectors = vectors;
      throw err;
    }
    return vectors;
  }
  function eigenvalues2x2(a, b10, c10, d10) {
    var trA = addScalar2(a, d10);
    var detA = subtract2(multiplyScalar2(a, d10), multiplyScalar2(b10, c10));
    var x = multiplyScalar2(trA, 0.5);
    var y = multiplyScalar2(sqrt2(subtract2(multiplyScalar2(trA, trA), multiplyScalar2(4, detA))), 0.5);
    return [addScalar2(x, y), subtract2(x, y)];
  }
  function jordanBase2x2(a, b10, c10, d10, l1, l2, prec, type) {
    var big = type === "BigNumber";
    var cplx = type === "Complex";
    var zero = big ? bignumber2(0) : cplx ? complex2(0) : 0;
    var one = big ? bignumber2(1) : cplx ? complex2(1) : 1;
    if (smaller2(abs2(c10), prec)) {
      return [[one, zero], [zero, one]];
    }
    if (larger2(abs2(subtract2(l1, l2)), prec)) {
      return [[subtract2(l1, d10), subtract2(l2, d10)], [c10, c10]];
    }
    var na = subtract2(a, l1);
    var nb = subtract2(b10, l1);
    var nc = subtract2(c10, l1);
    var nd = subtract2(d10, l1);
    if (smaller2(abs2(nb), prec)) {
      return [[na, one], [nc, zero]];
    } else {
      return [[nb, zero], [nd, one]];
    }
  }
  function inflateMatrix(arr, N) {
    for (var i3 = 0; i3 < arr.length; i3++) {
      arr[i3].push(...Array(N - arr[i3].length).fill(0));
    }
    for (var _i5 = arr.length; _i5 < N; _i5++) {
      arr.push(Array(N).fill(0));
      arr[_i5][_i5] = 1;
    }
    return arr;
  }
  function blockDiag(arr, N) {
    var M = [];
    for (var i3 = 0; i3 < N; i3++) {
      M[i3] = Array(N).fill(0);
    }
    var I = 0;
    for (var sub of arr) {
      var n = sub.length;
      for (var _i6 = 0; _i6 < n; _i6++) {
        for (var j = 0; j < n; j++) {
          M[I + _i6][I + j] = sub[_i6][j];
        }
      }
      I += n;
    }
    return M;
  }
  function indexOf(arr, el, fn) {
    for (var i3 = 0; i3 < arr.length; i3++) {
      if (fn(arr[i3], el)) {
        return i3;
      }
    }
    return -1;
  }
  function inverseIterate(A, N, orthog, prec, type) {
    var largeNum = type === "BigNumber" ? bignumber2(1e3) : 1e3;
    var b10;
    var i3 = 0;
    while (true) {
      b10 = randomOrthogonalVector(N, orthog, type);
      b10 = usolve2(A, b10);
      if (larger2(norm2(b10), largeNum)) {
        break;
      }
      if (++i3 >= 5) {
        return null;
      }
    }
    i3 = 0;
    while (true) {
      var c10 = usolve2(A, b10);
      if (smaller2(norm2(orthogonalComplement(b10, [c10])), prec)) {
        break;
      }
      if (++i3 >= 10) {
        return null;
      }
      b10 = normalize(c10);
    }
    return b10;
  }
  function randomOrthogonalVector(N, orthog, type) {
    var big = type === "BigNumber";
    var cplx = type === "Complex";
    var v = Array(N).fill(0).map((_) => 2 * Math.random() - 1);
    if (big) {
      v = v.map((n) => bignumber2(n));
    }
    if (cplx) {
      v = v.map((n) => complex2(n));
    }
    v = orthogonalComplement(v, orthog);
    return normalize(v, type);
  }
  function orthogonalComplement(v, orthog) {
    for (var w of orthog) {
      v = subtract2(v, multiply2(divideScalar2(dot2(w, v), dot2(w, w)), w));
    }
    return v;
  }
  function norm2(v) {
    return abs2(sqrt2(dot2(v, v)));
  }
  function normalize(v, type) {
    var big = type === "BigNumber";
    var cplx = type === "Complex";
    var one = big ? bignumber2(1) : cplx ? complex2(1) : 1;
    return multiply2(divideScalar2(one, norm2(v)), v);
  }
  return complexEigs;
}
function createRealSymmetric(_ref) {
  var {
    config: config2,
    addScalar: addScalar2,
    subtract: subtract2,
    abs: abs2,
    atan: atan3,
    cos: cos2,
    sin: sin2,
    multiplyScalar: multiplyScalar2,
    inv: inv2,
    bignumber: bignumber2,
    multiply: multiply2,
    add: add2
  } = _ref;
  function main(arr, N) {
    var prec = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : config2.epsilon;
    var type = arguments.length > 3 ? arguments[3] : void 0;
    if (type === "number") {
      return diag2(arr, prec);
    }
    if (type === "BigNumber") {
      return diagBig(arr, prec);
    }
    throw TypeError("Unsupported data type: " + type);
  }
  function diag2(x, precision) {
    var N = x.length;
    var e0 = Math.abs(precision / N);
    var psi;
    var Sij = new Array(N);
    for (var i3 = 0; i3 < N; i3++) {
      Sij[i3] = createArray(N, 0);
      Sij[i3][i3] = 1;
    }
    var Vab = getAij(x);
    while (Math.abs(Vab[1]) >= Math.abs(e0)) {
      var _i = Vab[0][0];
      var j = Vab[0][1];
      psi = getTheta(x[_i][_i], x[j][j], x[_i][j]);
      x = x1(x, psi, _i, j);
      Sij = Sij1(Sij, psi, _i, j);
      Vab = getAij(x);
    }
    var Ei = createArray(N, 0);
    for (var _i2 = 0; _i2 < N; _i2++) {
      Ei[_i2] = x[_i2][_i2];
    }
    return sorting(clone$1(Ei), clone$1(Sij));
  }
  function diagBig(x, precision) {
    var N = x.length;
    var e0 = abs2(precision / N);
    var psi;
    var Sij = new Array(N);
    for (var i3 = 0; i3 < N; i3++) {
      Sij[i3] = createArray(N, 0);
      Sij[i3][i3] = 1;
    }
    var Vab = getAijBig(x);
    while (abs2(Vab[1]) >= abs2(e0)) {
      var _i3 = Vab[0][0];
      var j = Vab[0][1];
      psi = getThetaBig(x[_i3][_i3], x[j][j], x[_i3][j]);
      x = x1Big(x, psi, _i3, j);
      Sij = Sij1Big(Sij, psi, _i3, j);
      Vab = getAijBig(x);
    }
    var Ei = createArray(N, 0);
    for (var _i4 = 0; _i4 < N; _i4++) {
      Ei[_i4] = x[_i4][_i4];
    }
    return sorting(clone$1(Ei), clone$1(Sij));
  }
  function getTheta(aii, ajj, aij) {
    var denom = ajj - aii;
    if (Math.abs(denom) <= config2.epsilon) {
      return Math.PI / 4;
    } else {
      return 0.5 * Math.atan(2 * aij / (ajj - aii));
    }
  }
  function getThetaBig(aii, ajj, aij) {
    var denom = subtract2(ajj, aii);
    if (abs2(denom) <= config2.epsilon) {
      return bignumber2(-1).acos().div(4);
    } else {
      return multiplyScalar2(0.5, atan3(multiply2(2, aij, inv2(denom))));
    }
  }
  function Sij1(Sij, theta, i3, j) {
    var N = Sij.length;
    var c10 = Math.cos(theta);
    var s = Math.sin(theta);
    var Ski = createArray(N, 0);
    var Skj = createArray(N, 0);
    for (var k2 = 0; k2 < N; k2++) {
      Ski[k2] = c10 * Sij[k2][i3] - s * Sij[k2][j];
      Skj[k2] = s * Sij[k2][i3] + c10 * Sij[k2][j];
    }
    for (var _k = 0; _k < N; _k++) {
      Sij[_k][i3] = Ski[_k];
      Sij[_k][j] = Skj[_k];
    }
    return Sij;
  }
  function Sij1Big(Sij, theta, i3, j) {
    var N = Sij.length;
    var c10 = cos2(theta);
    var s = sin2(theta);
    var Ski = createArray(N, bignumber2(0));
    var Skj = createArray(N, bignumber2(0));
    for (var k2 = 0; k2 < N; k2++) {
      Ski[k2] = subtract2(multiplyScalar2(c10, Sij[k2][i3]), multiplyScalar2(s, Sij[k2][j]));
      Skj[k2] = addScalar2(multiplyScalar2(s, Sij[k2][i3]), multiplyScalar2(c10, Sij[k2][j]));
    }
    for (var _k2 = 0; _k2 < N; _k2++) {
      Sij[_k2][i3] = Ski[_k2];
      Sij[_k2][j] = Skj[_k2];
    }
    return Sij;
  }
  function x1Big(Hij, theta, i3, j) {
    var N = Hij.length;
    var c10 = bignumber2(cos2(theta));
    var s = bignumber2(sin2(theta));
    var c22 = multiplyScalar2(c10, c10);
    var s2 = multiplyScalar2(s, s);
    var Aki = createArray(N, bignumber2(0));
    var Akj = createArray(N, bignumber2(0));
    var csHij = multiply2(bignumber2(2), c10, s, Hij[i3][j]);
    var Aii = addScalar2(subtract2(multiplyScalar2(c22, Hij[i3][i3]), csHij), multiplyScalar2(s2, Hij[j][j]));
    var Ajj = add2(multiplyScalar2(s2, Hij[i3][i3]), csHij, multiplyScalar2(c22, Hij[j][j]));
    for (var k2 = 0; k2 < N; k2++) {
      Aki[k2] = subtract2(multiplyScalar2(c10, Hij[i3][k2]), multiplyScalar2(s, Hij[j][k2]));
      Akj[k2] = addScalar2(multiplyScalar2(s, Hij[i3][k2]), multiplyScalar2(c10, Hij[j][k2]));
    }
    Hij[i3][i3] = Aii;
    Hij[j][j] = Ajj;
    Hij[i3][j] = bignumber2(0);
    Hij[j][i3] = bignumber2(0);
    for (var _k3 = 0; _k3 < N; _k3++) {
      if (_k3 !== i3 && _k3 !== j) {
        Hij[i3][_k3] = Aki[_k3];
        Hij[_k3][i3] = Aki[_k3];
        Hij[j][_k3] = Akj[_k3];
        Hij[_k3][j] = Akj[_k3];
      }
    }
    return Hij;
  }
  function x1(Hij, theta, i3, j) {
    var N = Hij.length;
    var c10 = Math.cos(theta);
    var s = Math.sin(theta);
    var c22 = c10 * c10;
    var s2 = s * s;
    var Aki = createArray(N, 0);
    var Akj = createArray(N, 0);
    var Aii = c22 * Hij[i3][i3] - 2 * c10 * s * Hij[i3][j] + s2 * Hij[j][j];
    var Ajj = s2 * Hij[i3][i3] + 2 * c10 * s * Hij[i3][j] + c22 * Hij[j][j];
    for (var k2 = 0; k2 < N; k2++) {
      Aki[k2] = c10 * Hij[i3][k2] - s * Hij[j][k2];
      Akj[k2] = s * Hij[i3][k2] + c10 * Hij[j][k2];
    }
    Hij[i3][i3] = Aii;
    Hij[j][j] = Ajj;
    Hij[i3][j] = 0;
    Hij[j][i3] = 0;
    for (var _k4 = 0; _k4 < N; _k4++) {
      if (_k4 !== i3 && _k4 !== j) {
        Hij[i3][_k4] = Aki[_k4];
        Hij[_k4][i3] = Aki[_k4];
        Hij[j][_k4] = Akj[_k4];
        Hij[_k4][j] = Akj[_k4];
      }
    }
    return Hij;
  }
  function getAij(Mij) {
    var N = Mij.length;
    var maxMij = 0;
    var maxIJ = [0, 1];
    for (var i3 = 0; i3 < N; i3++) {
      for (var j = i3 + 1; j < N; j++) {
        if (Math.abs(maxMij) < Math.abs(Mij[i3][j])) {
          maxMij = Math.abs(Mij[i3][j]);
          maxIJ = [i3, j];
        }
      }
    }
    return [maxIJ, maxMij];
  }
  function getAijBig(Mij) {
    var N = Mij.length;
    var maxMij = 0;
    var maxIJ = [0, 1];
    for (var i3 = 0; i3 < N; i3++) {
      for (var j = i3 + 1; j < N; j++) {
        if (abs2(maxMij) < abs2(Mij[i3][j])) {
          maxMij = abs2(Mij[i3][j]);
          maxIJ = [i3, j];
        }
      }
    }
    return [maxIJ, maxMij];
  }
  function sorting(E, S) {
    var N = E.length;
    var values = Array(N);
    var vectors = Array(N);
    for (var k2 = 0; k2 < N; k2++) {
      vectors[k2] = Array(N);
    }
    for (var i3 = 0; i3 < N; i3++) {
      var minID = 0;
      var minE = E[0];
      for (var j = 0; j < E.length; j++) {
        if (abs2(E[j]) < abs2(minE)) {
          minID = j;
          minE = E[minID];
        }
      }
      values[i3] = E.splice(minID, 1)[0];
      for (var _k5 = 0; _k5 < N; _k5++) {
        vectors[_k5][i3] = S[_k5][minID];
        S[_k5].splice(minID, 1);
      }
    }
    return {
      values,
      vectors
    };
  }
  function createArray(size2, value) {
    var array = new Array(size2);
    for (var i3 = 0; i3 < size2; i3++) {
      array[i3] = value;
    }
    return array;
  }
  return main;
}
var name$2B = "eigs";
var dependencies$2B = ["config", "typed", "matrix", "addScalar", "equal", "subtract", "abs", "atan", "cos", "sin", "multiplyScalar", "divideScalar", "inv", "bignumber", "multiply", "add", "larger", "column", "flatten", "number", "complex", "sqrt", "diag", "qr", "usolve", "usolveAll", "im", "re", "smaller", "matrixFromColumns", "dot"];
var createEigs = /* @__PURE__ */ factory(name$2B, dependencies$2B, (_ref) => {
  var {
    config: config2,
    typed: typed2,
    matrix: matrix2,
    addScalar: addScalar2,
    subtract: subtract2,
    equal: equal2,
    abs: abs2,
    atan: atan3,
    cos: cos2,
    sin: sin2,
    multiplyScalar: multiplyScalar2,
    divideScalar: divideScalar2,
    inv: inv2,
    bignumber: bignumber2,
    multiply: multiply2,
    add: add2,
    larger: larger2,
    column: column2,
    flatten: flatten2,
    number: number2,
    complex: complex2,
    sqrt: sqrt2,
    diag: diag2,
    qr: qr2,
    usolve: usolve2,
    usolveAll: usolveAll2,
    im: im2,
    re: re2,
    smaller: smaller2,
    matrixFromColumns: matrixFromColumns2,
    dot: dot2
  } = _ref;
  var doRealSymetric = createRealSymmetric({
    config: config2,
    addScalar: addScalar2,
    subtract: subtract2,
    column: column2,
    flatten: flatten2,
    equal: equal2,
    abs: abs2,
    atan: atan3,
    cos: cos2,
    sin: sin2,
    multiplyScalar: multiplyScalar2,
    inv: inv2,
    bignumber: bignumber2,
    complex: complex2,
    multiply: multiply2,
    add: add2
  });
  var doComplexEigs = createComplexEigs({
    config: config2,
    addScalar: addScalar2,
    subtract: subtract2,
    multiply: multiply2,
    multiplyScalar: multiplyScalar2,
    flatten: flatten2,
    divideScalar: divideScalar2,
    sqrt: sqrt2,
    abs: abs2,
    bignumber: bignumber2,
    diag: diag2,
    qr: qr2,
    inv: inv2,
    usolve: usolve2,
    usolveAll: usolveAll2,
    equal: equal2,
    complex: complex2,
    larger: larger2,
    smaller: smaller2,
    matrixFromColumns: matrixFromColumns2,
    dot: dot2
  });
  return typed2("eigs", {
    Array: function Array2(x) {
      var mat = matrix2(x);
      return computeValuesAndVectors(mat);
    },
    "Array, number|BigNumber": function ArrayNumberBigNumber(x, prec) {
      var mat = matrix2(x);
      return computeValuesAndVectors(mat, prec);
    },
    Matrix: function Matrix2(mat) {
      var {
        values,
        vectors
      } = computeValuesAndVectors(mat);
      return {
        values: matrix2(values),
        vectors: matrix2(vectors)
      };
    },
    "Matrix, number|BigNumber": function MatrixNumberBigNumber(mat, prec) {
      var {
        values,
        vectors
      } = computeValuesAndVectors(mat, prec);
      return {
        values: matrix2(values),
        vectors: matrix2(vectors)
      };
    }
  });
  function computeValuesAndVectors(mat, prec) {
    if (prec === void 0) {
      prec = config2.epsilon;
    }
    var size2 = mat.size();
    if (size2.length !== 2 || size2[0] !== size2[1]) {
      throw new RangeError("Matrix must be square (size: " + format$2(size2) + ")");
    }
    var arr = mat.toArray();
    var N = size2[0];
    if (isReal(arr, N, prec)) {
      coerceReal(arr, N);
      if (isSymmetric(arr, N, prec)) {
        var _type = coerceTypes(mat, arr, N);
        return doRealSymetric(arr, N, prec, _type);
      }
    }
    var type = coerceTypes(mat, arr, N);
    return doComplexEigs(arr, N, prec, type);
  }
  function isSymmetric(arr, N, prec) {
    for (var i3 = 0; i3 < N; i3++) {
      for (var j = i3; j < N; j++) {
        if (larger2(bignumber2(abs2(subtract2(arr[i3][j], arr[j][i3]))), prec)) {
          return false;
        }
      }
    }
    return true;
  }
  function isReal(arr, N, prec) {
    for (var i3 = 0; i3 < N; i3++) {
      for (var j = 0; j < N; j++) {
        if (larger2(bignumber2(abs2(im2(arr[i3][j]))), prec)) {
          return false;
        }
      }
    }
    return true;
  }
  function coerceReal(arr, N) {
    for (var i3 = 0; i3 < N; i3++) {
      for (var j = 0; j < N; j++) {
        arr[i3][j] = re2(arr[i3][j]);
      }
    }
  }
  function coerceTypes(mat, arr, N) {
    var type = mat.datatype();
    if (type === "number" || type === "BigNumber" || type === "Complex") {
      return type;
    }
    var hasNumber = false;
    var hasBig = false;
    var hasComplex = false;
    for (var i3 = 0; i3 < N; i3++) {
      for (var j = 0; j < N; j++) {
        var el = arr[i3][j];
        if (isNumber(el) || isFraction(el)) {
          hasNumber = true;
        } else if (isBigNumber(el)) {
          hasBig = true;
        } else if (isComplex(el)) {
          hasComplex = true;
        } else {
          throw TypeError("Unsupported type in Matrix: " + typeOf$1(el));
        }
      }
    }
    if (hasBig && hasComplex) {
      console.warn("Complex BigNumbers not supported, this operation will lose precission.");
    }
    if (hasComplex) {
      for (var _i = 0; _i < N; _i++) {
        for (var _j = 0; _j < N; _j++) {
          arr[_i][_j] = complex2(arr[_i][_j]);
        }
      }
      return "Complex";
    }
    if (hasBig) {
      for (var _i2 = 0; _i2 < N; _i2++) {
        for (var _j2 = 0; _j2 < N; _j2++) {
          arr[_i2][_j2] = bignumber2(arr[_i2][_j2]);
        }
      }
      return "BigNumber";
    }
    if (hasNumber) {
      for (var _i3 = 0; _i3 < N; _i3++) {
        for (var _j3 = 0; _j3 < N; _j3++) {
          arr[_i3][_j3] = number2(arr[_i3][_j3]);
        }
      }
      return "number";
    } else {
      throw TypeError("Matrix contains unsupported types only.");
    }
  }
});
var name$2C = "expm";
var dependencies$2C = ["typed", "abs", "add", "identity", "inv", "multiply"];
var createExpm = /* @__PURE__ */ factory(name$2C, dependencies$2C, (_ref) => {
  var {
    typed: typed2,
    abs: abs2,
    add: add2,
    identity: identity2,
    inv: inv2,
    multiply: multiply2
  } = _ref;
  return typed2(name$2C, {
    Matrix: function Matrix2(A) {
      var size2 = A.size();
      if (size2.length !== 2 || size2[0] !== size2[1]) {
        throw new RangeError("Matrix must be square (size: " + format$2(size2) + ")");
      }
      var n = size2[0];
      var eps = 1e-15;
      var infNorm = infinityNorm(A);
      var params = findParams(infNorm, eps);
      var q2 = params.q;
      var j = params.j;
      var Apos = multiply2(A, Math.pow(2, -j));
      var N = identity2(n);
      var D2 = identity2(n);
      var factor = 1;
      var AposToI = Apos;
      var alternate = -1;
      for (var i3 = 1; i3 <= q2; i3++) {
        if (i3 > 1) {
          AposToI = multiply2(AposToI, Apos);
          alternate = -alternate;
        }
        factor = factor * (q2 - i3 + 1) / ((2 * q2 - i3 + 1) * i3);
        N = add2(N, multiply2(factor, AposToI));
        D2 = add2(D2, multiply2(factor * alternate, AposToI));
      }
      var R = multiply2(inv2(D2), N);
      for (var _i = 0; _i < j; _i++) {
        R = multiply2(R, R);
      }
      return isSparseMatrix(A) ? A.createSparseMatrix(R) : R;
    }
  });
  function infinityNorm(A) {
    var n = A.size()[0];
    var infNorm = 0;
    for (var i3 = 0; i3 < n; i3++) {
      var rowSum = 0;
      for (var j = 0; j < n; j++) {
        rowSum += abs2(A.get([i3, j]));
      }
      infNorm = Math.max(rowSum, infNorm);
    }
    return infNorm;
  }
  function findParams(infNorm, eps) {
    var maxSearchSize = 30;
    for (var k2 = 0; k2 < maxSearchSize; k2++) {
      for (var q2 = 0; q2 <= k2; q2++) {
        var j = k2 - q2;
        if (errorEstimate(infNorm, q2, j) < eps) {
          return {
            q: q2,
            j
          };
        }
      }
    }
    throw new Error("Could not find acceptable parameters to compute the matrix exponential (try increasing maxSearchSize in expm.js)");
  }
  function errorEstimate(infNorm, q2, j) {
    var qfac = 1;
    for (var i3 = 2; i3 <= q2; i3++) {
      qfac *= i3;
    }
    var twoqfac = qfac;
    for (var _i2 = q2 + 1; _i2 <= 2 * q2; _i2++) {
      twoqfac *= _i2;
    }
    var twoqp1fac = twoqfac * (2 * q2 + 1);
    return 8 * Math.pow(infNorm / Math.pow(2, j), 2 * q2) * qfac * qfac / (twoqfac * twoqp1fac);
  }
});
var name$2D = "sqrtm";
var dependencies$2D = ["typed", "abs", "add", "multiply", "map", "sqrt", "subtract", "inv", "size", "max", "identity"];
var createSqrtm = /* @__PURE__ */ factory(name$2D, dependencies$2D, (_ref) => {
  var {
    typed: typed2,
    abs: abs2,
    add: add2,
    multiply: multiply2,
    map: map2,
    sqrt: sqrt2,
    subtract: subtract2,
    inv: inv2,
    size: size2,
    max: max2,
    identity: identity2
  } = _ref;
  var _maxIterations = 1e3;
  var _tolerance = 1e-6;
  function _denmanBeavers(A) {
    var error;
    var iterations = 0;
    var Y = A;
    var Z = identity2(size2(A));
    do {
      var Yk = Y;
      Y = multiply2(0.5, add2(Yk, inv2(Z)));
      Z = multiply2(0.5, add2(Z, inv2(Yk)));
      error = max2(abs2(subtract2(Y, Yk)));
      if (error > _tolerance && ++iterations > _maxIterations) {
        throw new Error("computing square root of matrix: iterative method could not converge");
      }
    } while (error > _tolerance);
    return Y;
  }
  return typed2(name$2D, {
    "Array | Matrix": function ArrayMatrix(A) {
      var size3 = isMatrix(A) ? A.size() : arraySize(A);
      switch (size3.length) {
        case 1:
          if (size3[0] === 1) {
            return map2(A, sqrt2);
          } else {
            throw new RangeError("Matrix must be square (size: " + format$2(size3) + ")");
          }
        case 2: {
          var rows = size3[0];
          var cols = size3[1];
          if (rows === cols) {
            return _denmanBeavers(A);
          } else {
            throw new RangeError("Matrix must be square (size: " + format$2(size3) + ")");
          }
        }
        default:
          throw new RangeError("Matrix must be at most two dimensional (size: " + format$2(size3) + ")");
      }
    }
  });
});
var name$2E = "sylvester";
var dependencies$2E = ["typed", "schur", "matrixFromColumns", "matrix", "multiply", "range", "concat", "transpose", "index", "subset", "add", "subtract", "identity", "lusolve", "abs"];
var createSylvester = /* @__PURE__ */ factory(name$2E, dependencies$2E, (_ref) => {
  var {
    typed: typed2,
    schur: schur2,
    matrixFromColumns: matrixFromColumns2,
    matrix: matrix2,
    multiply: multiply2,
    range: range2,
    concat: concat2,
    transpose: transpose2,
    index: index2,
    subset: subset2,
    add: add2,
    subtract: subtract2,
    identity: identity2,
    lusolve: lusolve2,
    abs: abs2
  } = _ref;
  return typed2(name$2E, {
    "Matrix, Matrix, Matrix": _sylvester,
    "Array, Matrix, Matrix": function ArrayMatrixMatrix(A, B, C) {
      return _sylvester(matrix2(A), B, C);
    },
    "Array, Array, Matrix": function ArrayArrayMatrix(A, B, C) {
      return _sylvester(matrix2(A), matrix2(B), C);
    },
    "Array, Matrix, Array": function ArrayMatrixArray(A, B, C) {
      return _sylvester(matrix2(A), B, matrix2(C));
    },
    "Matrix, Array, Matrix": function MatrixArrayMatrix(A, B, C) {
      return _sylvester(A, matrix2(B), C);
    },
    "Matrix, Array, Array": function MatrixArrayArray(A, B, C) {
      return _sylvester(A, matrix2(B), matrix2(C));
    },
    "Matrix, Matrix, Array": function MatrixMatrixArray(A, B, C) {
      return _sylvester(A, B, matrix2(C));
    },
    "Array, Array, Array": function ArrayArrayArray(A, B, C) {
      return _sylvester(matrix2(A), matrix2(B), matrix2(C)).toArray();
    }
  });
  function _sylvester(A, B, C) {
    var n = B.size()[0];
    var m = A.size()[0];
    var sA = schur2(A);
    var F = sA.T;
    var U = sA.U;
    var sB = schur2(multiply2(-1, B));
    var G = sB.T;
    var V = sB.U;
    var D2 = multiply2(multiply2(transpose2(U), C), V);
    var all2 = range2(0, m);
    var y = [];
    var hc = (a, b10) => concat2(a, b10, 1);
    var vc = (a, b10) => concat2(a, b10, 0);
    for (var k2 = 0; k2 < n; k2++) {
      if (k2 < n - 1 && abs2(subset2(G, index2(k2 + 1, k2))) > 1e-5) {
        var RHS = vc(subset2(D2, index2(all2, k2)), subset2(D2, index2(all2, k2 + 1)));
        for (var j = 0; j < k2; j++) {
          RHS = add2(RHS, vc(multiply2(y[j], subset2(G, index2(j, k2))), multiply2(y[j], subset2(G, index2(j, k2 + 1)))));
        }
        var gkk = multiply2(identity2(m), multiply2(-1, subset2(G, index2(k2, k2))));
        var gmk = multiply2(identity2(m), multiply2(-1, subset2(G, index2(k2 + 1, k2))));
        var gkm = multiply2(identity2(m), multiply2(-1, subset2(G, index2(k2, k2 + 1))));
        var gmm = multiply2(identity2(m), multiply2(-1, subset2(G, index2(k2 + 1, k2 + 1))));
        var LHS = vc(hc(add2(F, gkk), gmk), hc(gkm, add2(F, gmm)));
        var yAux = lusolve2(LHS, RHS);
        y[k2] = yAux.subset(index2(range2(0, m), 0));
        y[k2 + 1] = yAux.subset(index2(range2(m, 2 * m), 0));
        k2++;
      } else {
        var _RHS = subset2(D2, index2(all2, k2));
        for (var _j = 0; _j < k2; _j++) {
          _RHS = add2(_RHS, multiply2(y[_j], subset2(G, index2(_j, k2))));
        }
        var _gkk = subset2(G, index2(k2, k2));
        var _LHS = subtract2(F, multiply2(_gkk, identity2(m)));
        y[k2] = lusolve2(_LHS, _RHS);
      }
    }
    var Y = matrix2(matrixFromColumns2(...y));
    var X = multiply2(U, multiply2(Y, transpose2(V)));
    return X;
  }
});
var name$2F = "schur";
var dependencies$2F = ["typed", "matrix", "identity", "multiply", "qr", "norm", "subtract"];
var createSchur = /* @__PURE__ */ factory(name$2F, dependencies$2F, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    identity: identity2,
    multiply: multiply2,
    qr: qr2,
    norm: norm2,
    subtract: subtract2
  } = _ref;
  return typed2(name$2F, {
    Array: function Array2(X) {
      var r = _schur(matrix2(X));
      return {
        U: r.U.valueOf(),
        T: r.T.valueOf()
      };
    },
    Matrix: function Matrix2(X) {
      return _schur(X);
    }
  });
  function _schur(X) {
    var n = X.size()[0];
    var A = X;
    var U = identity2(n);
    var k2 = 0;
    var A0;
    do {
      A0 = A;
      var QR = qr2(A);
      var Q2 = QR.Q;
      var R = QR.R;
      A = multiply2(R, Q2);
      U = multiply2(U, Q2);
      if (k2++ > 100) {
        break;
      }
    } while (norm2(subtract2(A, A0)) > 1e-4);
    return {
      U,
      T: A
    };
  }
});
var name$2G = "lyap";
var dependencies$2G = ["typed", "matrix", "sylvester", "multiply", "transpose"];
var createLyap = /* @__PURE__ */ factory(name$2G, dependencies$2G, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    sylvester: sylvester2,
    multiply: multiply2,
    transpose: transpose2
  } = _ref;
  return typed2(name$2G, {
    "Matrix, Matrix": function MatrixMatrix(A, Q2) {
      return sylvester2(A, transpose2(A), multiply2(-1, Q2));
    },
    "Array, Matrix": function ArrayMatrix(A, Q2) {
      return sylvester2(matrix2(A), transpose2(matrix2(A)), multiply2(-1, Q2));
    },
    "Matrix, Array": function MatrixArray(A, Q2) {
      return sylvester2(A, transpose2(matrix2(A)), matrix2(multiply2(-1, Q2)));
    },
    "Array, Array": function ArrayArray(A, Q2) {
      return sylvester2(matrix2(A), transpose2(matrix2(A)), matrix2(multiply2(-1, Q2))).toArray();
    }
  });
});
var name$2H = "divide";
var dependencies$2H = ["typed", "matrix", "multiply", "equalScalar", "divideScalar", "inv"];
var createDivide = /* @__PURE__ */ factory(name$2H, dependencies$2H, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    multiply: multiply2,
    equalScalar: equalScalar2,
    divideScalar: divideScalar2,
    inv: inv2
  } = _ref;
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed: typed2,
    equalScalar: equalScalar2
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed: typed2
  });
  return typed2("divide", extend({
    "Array | Matrix, Array | Matrix": function ArrayMatrixArrayMatrix(x, y) {
      return multiply2(x, inv2(y));
    },
    "DenseMatrix, any": function DenseMatrixAny(x, y) {
      return matAlgo14xDs(x, y, divideScalar2, false);
    },
    "SparseMatrix, any": function SparseMatrixAny(x, y) {
      return matAlgo11xS0s(x, y, divideScalar2, false);
    },
    "Array, any": function ArrayAny(x, y) {
      return matAlgo14xDs(matrix2(x), y, divideScalar2, false).valueOf();
    },
    "any, Array | Matrix": function anyArrayMatrix(x, y) {
      return multiply2(x, inv2(y));
    }
  }, divideScalar2.signatures));
});
var name$2I = "distance";
var dependencies$2I = ["typed", "addScalar", "subtract", "divideScalar", "multiplyScalar", "unaryMinus", "sqrt", "abs"];
var createDistance = /* @__PURE__ */ factory(name$2I, dependencies$2I, (_ref) => {
  var {
    typed: typed2,
    addScalar: addScalar2,
    subtract: subtract2,
    multiplyScalar: multiplyScalar2,
    divideScalar: divideScalar2,
    unaryMinus: unaryMinus2,
    sqrt: sqrt2,
    abs: abs2
  } = _ref;
  return typed2(name$2I, {
    "Array, Array, Array": function ArrayArrayArray(x, y, z) {
      if (x.length === 2 && y.length === 2 && z.length === 2) {
        if (!_2d(x)) {
          throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
        }
        if (!_2d(y)) {
          throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
        }
        if (!_2d(z)) {
          throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument");
        }
        var m = divideScalar2(subtract2(z[1], z[0]), subtract2(y[1], y[0]));
        var xCoeff = multiplyScalar2(multiplyScalar2(m, m), y[0]);
        var yCoeff = unaryMinus2(multiplyScalar2(m, y[0]));
        var constant = x[1];
        return _distancePointLine2D(x[0], x[1], xCoeff, yCoeff, constant);
      } else {
        throw new TypeError("Invalid Arguments: Try again");
      }
    },
    "Object, Object, Object": function ObjectObjectObject(x, y, z) {
      if (Object.keys(x).length === 2 && Object.keys(y).length === 2 && Object.keys(z).length === 2) {
        if (!_2d(x)) {
          throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers");
        }
        if (!_2d(y)) {
          throw new TypeError("Values of lineOnePtX and lineOnePtY should be numbers or BigNumbers");
        }
        if (!_2d(z)) {
          throw new TypeError("Values of lineTwoPtX and lineTwoPtY should be numbers or BigNumbers");
        }
        if ("pointX" in x && "pointY" in x && "lineOnePtX" in y && "lineOnePtY" in y && "lineTwoPtX" in z && "lineTwoPtY" in z) {
          var m = divideScalar2(subtract2(z.lineTwoPtY, z.lineTwoPtX), subtract2(y.lineOnePtY, y.lineOnePtX));
          var xCoeff = multiplyScalar2(multiplyScalar2(m, m), y.lineOnePtX);
          var yCoeff = unaryMinus2(multiplyScalar2(m, y.lineOnePtX));
          var constant = x.pointX;
          return _distancePointLine2D(x.pointX, x.pointY, xCoeff, yCoeff, constant);
        } else {
          throw new TypeError("Key names do not match");
        }
      } else {
        throw new TypeError("Invalid Arguments: Try again");
      }
    },
    "Array, Array": function ArrayArray(x, y) {
      if (x.length === 2 && y.length === 3) {
        if (!_2d(x)) {
          throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
        }
        if (!_3d(y)) {
          throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
        }
        return _distancePointLine2D(x[0], x[1], y[0], y[1], y[2]);
      } else if (x.length === 3 && y.length === 6) {
        if (!_3d(x)) {
          throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
        }
        if (!_parametricLine(y)) {
          throw new TypeError("Array with 6 numbers or BigNumbers expected for second argument");
        }
        return _distancePointLine3D(x[0], x[1], x[2], y[0], y[1], y[2], y[3], y[4], y[5]);
      } else if (x.length === y.length && x.length > 0) {
        if (!_containsOnlyNumbers(x)) {
          throw new TypeError("All values of an array should be numbers or BigNumbers");
        }
        if (!_containsOnlyNumbers(y)) {
          throw new TypeError("All values of an array should be numbers or BigNumbers");
        }
        return _euclideanDistance(x, y);
      } else {
        throw new TypeError("Invalid Arguments: Try again");
      }
    },
    "Object, Object": function ObjectObject(x, y) {
      if (Object.keys(x).length === 2 && Object.keys(y).length === 3) {
        if (!_2d(x)) {
          throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers");
        }
        if (!_3d(y)) {
          throw new TypeError("Values of xCoeffLine, yCoeffLine and constant should be numbers or BigNumbers");
        }
        if ("pointX" in x && "pointY" in x && "xCoeffLine" in y && "yCoeffLine" in y && "constant" in y) {
          return _distancePointLine2D(x.pointX, x.pointY, y.xCoeffLine, y.yCoeffLine, y.constant);
        } else {
          throw new TypeError("Key names do not match");
        }
      } else if (Object.keys(x).length === 3 && Object.keys(y).length === 6) {
        if (!_3d(x)) {
          throw new TypeError("Values of pointX, pointY and pointZ should be numbers or BigNumbers");
        }
        if (!_parametricLine(y)) {
          throw new TypeError("Values of x0, y0, z0, a, b and c should be numbers or BigNumbers");
        }
        if ("pointX" in x && "pointY" in x && "x0" in y && "y0" in y && "z0" in y && "a" in y && "b" in y && "c" in y) {
          return _distancePointLine3D(x.pointX, x.pointY, x.pointZ, y.x0, y.y0, y.z0, y.a, y.b, y.c);
        } else {
          throw new TypeError("Key names do not match");
        }
      } else if (Object.keys(x).length === 2 && Object.keys(y).length === 2) {
        if (!_2d(x)) {
          throw new TypeError("Values of pointOneX and pointOneY should be numbers or BigNumbers");
        }
        if (!_2d(y)) {
          throw new TypeError("Values of pointTwoX and pointTwoY should be numbers or BigNumbers");
        }
        if ("pointOneX" in x && "pointOneY" in x && "pointTwoX" in y && "pointTwoY" in y) {
          return _euclideanDistance([x.pointOneX, x.pointOneY], [y.pointTwoX, y.pointTwoY]);
        } else {
          throw new TypeError("Key names do not match");
        }
      } else if (Object.keys(x).length === 3 && Object.keys(y).length === 3) {
        if (!_3d(x)) {
          throw new TypeError("Values of pointOneX, pointOneY and pointOneZ should be numbers or BigNumbers");
        }
        if (!_3d(y)) {
          throw new TypeError("Values of pointTwoX, pointTwoY and pointTwoZ should be numbers or BigNumbers");
        }
        if ("pointOneX" in x && "pointOneY" in x && "pointOneZ" in x && "pointTwoX" in y && "pointTwoY" in y && "pointTwoZ" in y) {
          return _euclideanDistance([x.pointOneX, x.pointOneY, x.pointOneZ], [y.pointTwoX, y.pointTwoY, y.pointTwoZ]);
        } else {
          throw new TypeError("Key names do not match");
        }
      } else {
        throw new TypeError("Invalid Arguments: Try again");
      }
    },
    Array: function Array2(arr) {
      if (!_pairwise(arr)) {
        throw new TypeError("Incorrect array format entered for pairwise distance calculation");
      }
      return _distancePairwise(arr);
    }
  });
  function _isNumber(a) {
    return typeof a === "number" || isBigNumber(a);
  }
  function _2d(a) {
    if (a.constructor !== Array) {
      a = _objectToArray(a);
    }
    return _isNumber(a[0]) && _isNumber(a[1]);
  }
  function _3d(a) {
    if (a.constructor !== Array) {
      a = _objectToArray(a);
    }
    return _isNumber(a[0]) && _isNumber(a[1]) && _isNumber(a[2]);
  }
  function _containsOnlyNumbers(a) {
    if (!Array.isArray(a)) {
      a = _objectToArray(a);
    }
    return a.every(_isNumber);
  }
  function _parametricLine(a) {
    if (a.constructor !== Array) {
      a = _objectToArray(a);
    }
    return _isNumber(a[0]) && _isNumber(a[1]) && _isNumber(a[2]) && _isNumber(a[3]) && _isNumber(a[4]) && _isNumber(a[5]);
  }
  function _objectToArray(o) {
    var keys = Object.keys(o);
    var a = [];
    for (var i3 = 0; i3 < keys.length; i3++) {
      a.push(o[keys[i3]]);
    }
    return a;
  }
  function _pairwise(a) {
    if (a[0].length === 2 && _isNumber(a[0][0]) && _isNumber(a[0][1])) {
      if (a.some((aI) => aI.length !== 2 || !_isNumber(aI[0]) || !_isNumber(aI[1]))) {
        return false;
      }
    } else if (a[0].length === 3 && _isNumber(a[0][0]) && _isNumber(a[0][1]) && _isNumber(a[0][2])) {
      if (a.some((aI) => aI.length !== 3 || !_isNumber(aI[0]) || !_isNumber(aI[1]) || !_isNumber(aI[2]))) {
        return false;
      }
    } else {
      return false;
    }
    return true;
  }
  function _distancePointLine2D(x, y, a, b10, c10) {
    var num = abs2(addScalar2(addScalar2(multiplyScalar2(a, x), multiplyScalar2(b10, y)), c10));
    var den = sqrt2(addScalar2(multiplyScalar2(a, a), multiplyScalar2(b10, b10)));
    return divideScalar2(num, den);
  }
  function _distancePointLine3D(x, y, z, x0, y0, z0, a, b10, c10) {
    var num = [subtract2(multiplyScalar2(subtract2(y0, y), c10), multiplyScalar2(subtract2(z0, z), b10)), subtract2(multiplyScalar2(subtract2(z0, z), a), multiplyScalar2(subtract2(x0, x), c10)), subtract2(multiplyScalar2(subtract2(x0, x), b10), multiplyScalar2(subtract2(y0, y), a))];
    num = sqrt2(addScalar2(addScalar2(multiplyScalar2(num[0], num[0]), multiplyScalar2(num[1], num[1])), multiplyScalar2(num[2], num[2])));
    var den = sqrt2(addScalar2(addScalar2(multiplyScalar2(a, a), multiplyScalar2(b10, b10)), multiplyScalar2(c10, c10)));
    return divideScalar2(num, den);
  }
  function _euclideanDistance(x, y) {
    var vectorSize = x.length;
    var result = 0;
    var diff2 = 0;
    for (var i3 = 0; i3 < vectorSize; i3++) {
      diff2 = subtract2(x[i3], y[i3]);
      result = addScalar2(multiplyScalar2(diff2, diff2), result);
    }
    return sqrt2(result);
  }
  function _distancePairwise(a) {
    var result = [];
    var pointA = [];
    var pointB = [];
    for (var i3 = 0; i3 < a.length - 1; i3++) {
      for (var j = i3 + 1; j < a.length; j++) {
        if (a[0].length === 2) {
          pointA = [a[i3][0], a[i3][1]];
          pointB = [a[j][0], a[j][1]];
        } else if (a[0].length === 3) {
          pointA = [a[i3][0], a[i3][1], a[i3][2]];
          pointB = [a[j][0], a[j][1], a[j][2]];
        }
        result.push(_euclideanDistance(pointA, pointB));
      }
    }
    return result;
  }
});
var name$2J = "intersect";
var dependencies$2J = ["typed", "config", "abs", "add", "addScalar", "matrix", "multiply", "multiplyScalar", "divideScalar", "subtract", "smaller", "equalScalar", "flatten", "isZero", "isNumeric"];
var createIntersect = /* @__PURE__ */ factory(name$2J, dependencies$2J, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    abs: abs2,
    add: add2,
    addScalar: addScalar2,
    matrix: matrix2,
    multiply: multiply2,
    multiplyScalar: multiplyScalar2,
    divideScalar: divideScalar2,
    subtract: subtract2,
    smaller: smaller2,
    equalScalar: equalScalar2,
    flatten: flatten2,
    isZero: isZero2,
    isNumeric: isNumeric2
  } = _ref;
  return typed2("intersect", {
    "Array, Array, Array": _AAA,
    "Array, Array, Array, Array": _AAAA,
    "Matrix, Matrix, Matrix": function MatrixMatrixMatrix(x, y, plane) {
      var arr = _AAA(x.valueOf(), y.valueOf(), plane.valueOf());
      return arr === null ? null : matrix2(arr);
    },
    "Matrix, Matrix, Matrix, Matrix": function MatrixMatrixMatrixMatrix(w, x, y, z) {
      var arr = _AAAA(w.valueOf(), x.valueOf(), y.valueOf(), z.valueOf());
      return arr === null ? null : matrix2(arr);
    }
  });
  function _AAA(x, y, plane) {
    x = _coerceArr(x);
    y = _coerceArr(y);
    plane = _coerceArr(plane);
    if (!_3d(x)) {
      throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
    }
    if (!_3d(y)) {
      throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
    }
    if (!_4d(plane)) {
      throw new TypeError("Array with 4 numbers expected as third argument");
    }
    return _intersectLinePlane(x[0], x[1], x[2], y[0], y[1], y[2], plane[0], plane[1], plane[2], plane[3]);
  }
  function _AAAA(w, x, y, z) {
    w = _coerceArr(w);
    x = _coerceArr(x);
    y = _coerceArr(y);
    z = _coerceArr(z);
    if (w.length === 2) {
      if (!_2d(w)) {
        throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
      }
      if (!_2d(x)) {
        throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
      }
      if (!_2d(y)) {
        throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument");
      }
      if (!_2d(z)) {
        throw new TypeError("Array with 2 numbers or BigNumbers expected for fourth argument");
      }
      return _intersect2d(w, x, y, z);
    } else if (w.length === 3) {
      if (!_3d(w)) {
        throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
      }
      if (!_3d(x)) {
        throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
      }
      if (!_3d(y)) {
        throw new TypeError("Array with 3 numbers or BigNumbers expected for third argument");
      }
      if (!_3d(z)) {
        throw new TypeError("Array with 3 numbers or BigNumbers expected for fourth argument");
      }
      return _intersect3d(w[0], w[1], w[2], x[0], x[1], x[2], y[0], y[1], y[2], z[0], z[1], z[2]);
    } else {
      throw new TypeError("Arrays with two or thee dimensional points expected");
    }
  }
  function _coerceArr(arr) {
    if (arr.length === 1)
      return arr[0];
    if (arr.length > 1 && Array.isArray(arr[0])) {
      if (arr.every((el) => Array.isArray(el) && el.length === 1))
        return flatten2(arr);
    }
    return arr;
  }
  function _2d(x) {
    return x.length === 2 && isNumeric2(x[0]) && isNumeric2(x[1]);
  }
  function _3d(x) {
    return x.length === 3 && isNumeric2(x[0]) && isNumeric2(x[1]) && isNumeric2(x[2]);
  }
  function _4d(x) {
    return x.length === 4 && isNumeric2(x[0]) && isNumeric2(x[1]) && isNumeric2(x[2]) && isNumeric2(x[3]);
  }
  function _intersect2d(p1a, p1b, p2a, p2b) {
    var o1 = p1a;
    var o2 = p2a;
    var d12 = subtract2(o1, p1b);
    var d22 = subtract2(o2, p2b);
    var det2 = subtract2(multiplyScalar2(d12[0], d22[1]), multiplyScalar2(d22[0], d12[1]));
    if (isZero2(det2))
      return null;
    if (smaller2(abs2(det2), config2.epsilon)) {
      return null;
    }
    var d20o11 = multiplyScalar2(d22[0], o1[1]);
    var d21o10 = multiplyScalar2(d22[1], o1[0]);
    var d20o21 = multiplyScalar2(d22[0], o2[1]);
    var d21o20 = multiplyScalar2(d22[1], o2[0]);
    var t2 = divideScalar2(addScalar2(subtract2(subtract2(d20o11, d21o10), d20o21), d21o20), det2);
    return add2(multiply2(d12, t2), o1);
  }
  function _intersect3dHelper(a, b10, c10, d10, e3, f2, g, h, i3, j, k2, l) {
    var add1 = multiplyScalar2(subtract2(a, b10), subtract2(c10, d10));
    var add22 = multiplyScalar2(subtract2(e3, f2), subtract2(g, h));
    var add3 = multiplyScalar2(subtract2(i3, j), subtract2(k2, l));
    return addScalar2(addScalar2(add1, add22), add3);
  }
  function _intersect3d(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4) {
    var d1343 = _intersect3dHelper(x1, x3, x4, x3, y1, y3, y4, y3, z1, z3, z4, z3);
    var d4321 = _intersect3dHelper(x4, x3, x2, x1, y4, y3, y2, y1, z4, z3, z2, z1);
    var d1321 = _intersect3dHelper(x1, x3, x2, x1, y1, y3, y2, y1, z1, z3, z2, z1);
    var d4343 = _intersect3dHelper(x4, x3, x4, x3, y4, y3, y4, y3, z4, z3, z4, z3);
    var d2121 = _intersect3dHelper(x2, x1, x2, x1, y2, y1, y2, y1, z2, z1, z2, z1);
    var numerator = subtract2(multiplyScalar2(d1343, d4321), multiplyScalar2(d1321, d4343));
    var denominator = subtract2(multiplyScalar2(d2121, d4343), multiplyScalar2(d4321, d4321));
    if (isZero2(denominator))
      return null;
    var ta = divideScalar2(numerator, denominator);
    var tb = divideScalar2(addScalar2(d1343, multiplyScalar2(ta, d4321)), d4343);
    var pax = addScalar2(x1, multiplyScalar2(ta, subtract2(x2, x1)));
    var pay = addScalar2(y1, multiplyScalar2(ta, subtract2(y2, y1)));
    var paz = addScalar2(z1, multiplyScalar2(ta, subtract2(z2, z1)));
    var pbx = addScalar2(x3, multiplyScalar2(tb, subtract2(x4, x3)));
    var pby = addScalar2(y3, multiplyScalar2(tb, subtract2(y4, y3)));
    var pbz = addScalar2(z3, multiplyScalar2(tb, subtract2(z4, z3)));
    if (equalScalar2(pax, pbx) && equalScalar2(pay, pby) && equalScalar2(paz, pbz)) {
      return [pax, pay, paz];
    } else {
      return null;
    }
  }
  function _intersectLinePlane(x1, y1, z1, x2, y2, z2, x, y, z, c10) {
    var x1x = multiplyScalar2(x1, x);
    var x2x = multiplyScalar2(x2, x);
    var y1y = multiplyScalar2(y1, y);
    var y2y = multiplyScalar2(y2, y);
    var z1z = multiplyScalar2(z1, z);
    var z2z = multiplyScalar2(z2, z);
    var numerator = subtract2(subtract2(subtract2(c10, x1x), y1y), z1z);
    var denominator = subtract2(subtract2(subtract2(addScalar2(addScalar2(x2x, y2y), z2z), x1x), y1y), z1z);
    var t2 = divideScalar2(numerator, denominator);
    var px = addScalar2(x1, multiplyScalar2(t2, subtract2(x2, x1)));
    var py = addScalar2(y1, multiplyScalar2(t2, subtract2(y2, y1)));
    var pz = addScalar2(z1, multiplyScalar2(t2, subtract2(z2, z1)));
    return [px, py, pz];
  }
});
var name$2K = "combinations";
var dependencies$2K = ["typed"];
var createCombinations = /* @__PURE__ */ factory(name$2K, dependencies$2K, (_ref) => {
  var {
    typed: typed2
  } = _ref;
  return typed2(name$2K, {
    "number, number": combinationsNumber,
    "BigNumber, BigNumber": function BigNumberBigNumber(n, k2) {
      var BigNumber2 = n.constructor;
      var result, i3;
      var nMinusk = n.minus(k2);
      var one = new BigNumber2(1);
      if (!isPositiveInteger(n) || !isPositiveInteger(k2)) {
        throw new TypeError("Positive integer value expected in function combinations");
      }
      if (k2.gt(n)) {
        throw new TypeError("k must be less than n in function combinations");
      }
      result = one;
      if (k2.lt(nMinusk)) {
        for (i3 = one; i3.lte(nMinusk); i3 = i3.plus(one)) {
          result = result.times(k2.plus(i3)).dividedBy(i3);
        }
      } else {
        for (i3 = one; i3.lte(k2); i3 = i3.plus(one)) {
          result = result.times(nMinusk.plus(i3)).dividedBy(i3);
        }
      }
      return result;
    }
  });
});
function isPositiveInteger(n) {
  return n.isInteger() && n.gte(0);
}
var name$2L = "gamma";
var dependencies$2L = ["typed", "config", "multiplyScalar", "pow", "BigNumber", "Complex"];
var createGamma = /* @__PURE__ */ factory(name$2L, dependencies$2L, (_ref) => {
  var {
    typed: typed2,
    config: config2,
    multiplyScalar: multiplyScalar2,
    pow: pow2,
    BigNumber: _BigNumber,
    Complex: Complex2
  } = _ref;
  function gammaComplex(n) {
    if (n.im === 0) {
      return gammaNumber(n.re);
    }
    if (n.re < 0.5) {
      var _t = new Complex2(1 - n.re, -n.im);
      var r = new Complex2(Math.PI * n.re, Math.PI * n.im);
      return new Complex2(Math.PI).div(r.sin()).div(gammaComplex(_t));
    }
    n = new Complex2(n.re - 1, n.im);
    var x = new Complex2(gammaP[0], 0);
    for (var i3 = 1; i3 < gammaP.length; ++i3) {
      var gammaPval = new Complex2(gammaP[i3], 0);
      x = x.add(gammaPval.div(n.add(i3)));
    }
    var t2 = new Complex2(n.re + gammaG + 0.5, n.im);
    var twoPiSqrt = Math.sqrt(2 * Math.PI);
    var tpow = t2.pow(n.add(0.5));
    var expt = t2.neg().exp();
    return x.mul(twoPiSqrt).mul(tpow).mul(expt);
  }
  return typed2(name$2L, {
    number: gammaNumber,
    Complex: gammaComplex,
    BigNumber: function BigNumber2(n) {
      if (n.isInteger()) {
        return n.isNegative() || n.isZero() ? new _BigNumber(Infinity) : bigFactorial(n.minus(1));
      }
      if (!n.isFinite()) {
        return new _BigNumber(n.isNegative() ? NaN : Infinity);
      }
      throw new Error("Integer BigNumber expected");
    }
  });
  function bigFactorial(n) {
    if (n < 8) {
      return new _BigNumber([1, 1, 2, 6, 24, 120, 720, 5040][n]);
    }
    var precision = config2.precision + (Math.log(n.toNumber()) | 0);
    var Big = _BigNumber.clone({
      precision
    });
    if (n % 2 === 1) {
      return n.times(bigFactorial(new _BigNumber(n - 1)));
    }
    var p = n;
    var prod2 = new Big(n);
    var sum2 = n.toNumber();
    while (p > 2) {
      p -= 2;
      sum2 += p;
      prod2 = prod2.times(sum2);
    }
    return new _BigNumber(prod2.toPrecision(_BigNumber.precision));
  }
});
var name$2M = "lgamma";
var dependencies$2M = ["Complex", "typed"];
var createLgamma = /* @__PURE__ */ factory(name$2M, dependencies$2M, (_ref) => {
  var {
    Complex: Complex2,
    typed: typed2
  } = _ref;
  var SMALL_RE = 7;
  var SMALL_IM = 7;
  var coeffs = [-0.029550653594771242, 0.00641025641025641, -0.0019175269175269176, 8417508417508417e-19, -5952380952380953e-19, 7936507936507937e-19, -0.002777777777777778, 0.08333333333333333];
  return typed2(name$2M, {
    number: lgammaNumber,
    Complex: lgammaComplex,
    BigNumber: function BigNumber2() {
      throw new Error("mathjs doesn't yet provide an implementation of the algorithm lgamma for BigNumber");
    }
  });
  function lgammaComplex(n) {
    var TWOPI = 6.283185307179586;
    var LOGPI = 1.1447298858494002;
    var REFLECTION = 0.1;
    if (n.isNaN()) {
      return new Complex2(NaN, NaN);
    } else if (n.im === 0) {
      return new Complex2(lgammaNumber(n.re), 0);
    } else if (n.re >= SMALL_RE || Math.abs(n.im) >= SMALL_IM) {
      return lgammaStirling(n);
    } else if (n.re <= REFLECTION) {
      var tmp = copysign(TWOPI, n.im) * Math.floor(0.5 * n.re + 0.25);
      var a = n.mul(Math.PI).sin().log();
      var b10 = lgammaComplex(new Complex2(1 - n.re, -n.im));
      return new Complex2(LOGPI, tmp).sub(a).sub(b10);
    } else if (n.im >= 0) {
      return lgammaRecurrence(n);
    } else {
      return lgammaRecurrence(n.conjugate()).conjugate();
    }
  }
  function lgammaStirling(z) {
    var leftPart = z.sub(0.5).mul(z.log()).sub(z).add(lnSqrt2PI);
    var rz = new Complex2(1, 0).div(z);
    var rzz = rz.div(z);
    var a = coeffs[0];
    var b10 = coeffs[1];
    var r = 2 * rzz.re;
    var s = rzz.re * rzz.re + rzz.im * rzz.im;
    for (var i3 = 2; i3 < 8; i3++) {
      var tmp = b10;
      b10 = -s * a + coeffs[i3];
      a = r * a + tmp;
    }
    var rightPart = rz.mul(rzz.mul(a).add(b10));
    return leftPart.add(rightPart);
  }
  function lgammaRecurrence(z) {
    var signflips = 0;
    var sb = 0;
    var shiftprod = z;
    z = z.add(1);
    while (z.re <= SMALL_RE) {
      shiftprod = shiftprod.mul(z);
      var nsb = shiftprod.im < 0 ? 1 : 0;
      if (nsb !== 0 && sb === 0)
        signflips++;
      sb = nsb;
      z = z.add(1);
    }
    return lgammaStirling(z).sub(shiftprod.log()).sub(new Complex2(0, signflips * 2 * Math.PI * 1));
  }
});
var name$2N = "kldivergence";
var dependencies$2N = ["typed", "matrix", "divide", "sum", "multiply", "map", "dotDivide", "log", "isNumeric"];
var createKldivergence = /* @__PURE__ */ factory(name$2N, dependencies$2N, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    divide: divide2,
    sum: sum2,
    multiply: multiply2,
    map: map2,
    dotDivide: dotDivide2,
    log: log3,
    isNumeric: isNumeric2
  } = _ref;
  return typed2(name$2N, {
    "Array, Array": function ArrayArray(q2, p) {
      return _kldiv(matrix2(q2), matrix2(p));
    },
    "Matrix, Array": function MatrixArray(q2, p) {
      return _kldiv(q2, matrix2(p));
    },
    "Array, Matrix": function ArrayMatrix(q2, p) {
      return _kldiv(matrix2(q2), p);
    },
    "Matrix, Matrix": function MatrixMatrix(q2, p) {
      return _kldiv(q2, p);
    }
  });
  function _kldiv(q2, p) {
    var plength = p.size().length;
    var qlength = q2.size().length;
    if (plength > 1) {
      throw new Error("first object must be one dimensional");
    }
    if (qlength > 1) {
      throw new Error("second object must be one dimensional");
    }
    if (plength !== qlength) {
      throw new Error("Length of two vectors must be equal");
    }
    var sumq = sum2(q2);
    if (sumq === 0) {
      throw new Error("Sum of elements in first object must be non zero");
    }
    var sump = sum2(p);
    if (sump === 0) {
      throw new Error("Sum of elements in second object must be non zero");
    }
    var qnorm = divide2(q2, sum2(q2));
    var pnorm = divide2(p, sum2(p));
    var result = sum2(multiply2(qnorm, map2(dotDivide2(qnorm, pnorm), (x) => log3(x))));
    if (isNumeric2(result)) {
      return result;
    } else {
      return Number.NaN;
    }
  }
});
var name$2O = "leafCount";
var dependencies$2O = ["parse", "typed"];
var createLeafCount = /* @__PURE__ */ factory(name$2O, dependencies$2O, (_ref) => {
  var {
    parse: parse2,
    typed: typed2
  } = _ref;
  function countLeaves(node) {
    var count2 = 0;
    node.forEach((n) => {
      count2 += countLeaves(n);
    });
    return count2 || 1;
  }
  return typed2(name$2O, {
    Node: function Node2(expr) {
      return countLeaves(expr);
    }
  });
});
var name$2P = "symbolicEqual";
var dependencies$2P = ["parse", "simplify", "typed", "OperatorNode"];
var createSymbolicEqual = /* @__PURE__ */ factory(name$2P, dependencies$2P, (_ref) => {
  var {
    parse: parse2,
    simplify: simplify2,
    typed: typed2,
    OperatorNode: OperatorNode2
  } = _ref;
  function _symbolicEqual(e1, e22) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var diff2 = new OperatorNode2("-", "subtract", [e1, e22]);
    var simplified = simplify2(diff2, {}, options);
    return isConstantNode(simplified) && !simplified.value;
  }
  return typed2(name$2P, {
    "Node, Node": _symbolicEqual,
    "Node, Node, Object": _symbolicEqual
  });
});
var createSpeedOfLight = /* @__PURE__ */ unitFactory("speedOfLight", "299792458", "m s^-1");
var createGravitationConstant = /* @__PURE__ */ unitFactory("gravitationConstant", "6.67430e-11", "m^3 kg^-1 s^-2");
var createPlanckConstant = /* @__PURE__ */ unitFactory("planckConstant", "6.62607015e-34", "J s");
var createReducedPlanckConstant = /* @__PURE__ */ unitFactory("reducedPlanckConstant", "1.0545718176461565e-34", "J s");
var createMagneticConstant = /* @__PURE__ */ unitFactory("magneticConstant", "1.25663706212e-6", "N A^-2");
var createElectricConstant = /* @__PURE__ */ unitFactory("electricConstant", "8.8541878128e-12", "F m^-1");
var createVacuumImpedance = /* @__PURE__ */ unitFactory("vacuumImpedance", "376.730313667", "ohm");
var createCoulomb = /* @__PURE__ */ unitFactory("coulomb", "8.987551792261171e9", "N m^2 C^-2");
var createElementaryCharge = /* @__PURE__ */ unitFactory("elementaryCharge", "1.602176634e-19", "C");
var createBohrMagneton = /* @__PURE__ */ unitFactory("bohrMagneton", "9.2740100783e-24", "J T^-1");
var createConductanceQuantum = /* @__PURE__ */ unitFactory("conductanceQuantum", "7.748091729863649e-5", "S");
var createInverseConductanceQuantum = /* @__PURE__ */ unitFactory("inverseConductanceQuantum", "12906.403729652257", "ohm");
var createMagneticFluxQuantum = /* @__PURE__ */ unitFactory("magneticFluxQuantum", "2.0678338484619295e-15", "Wb");
var createNuclearMagneton = /* @__PURE__ */ unitFactory("nuclearMagneton", "5.0507837461e-27", "J T^-1");
var createKlitzing = /* @__PURE__ */ unitFactory("klitzing", "25812.807459304513", "ohm");
var createBohrRadius = /* @__PURE__ */ unitFactory("bohrRadius", "5.29177210903e-11", "m");
var createClassicalElectronRadius = /* @__PURE__ */ unitFactory("classicalElectronRadius", "2.8179403262e-15", "m");
var createElectronMass = /* @__PURE__ */ unitFactory("electronMass", "9.1093837015e-31", "kg");
var createFermiCoupling = /* @__PURE__ */ unitFactory("fermiCoupling", "1.1663787e-5", "GeV^-2");
var createFineStructure = numberFactory("fineStructure", 0.0072973525693);
var createHartreeEnergy = /* @__PURE__ */ unitFactory("hartreeEnergy", "4.3597447222071e-18", "J");
var createProtonMass = /* @__PURE__ */ unitFactory("protonMass", "1.67262192369e-27", "kg");
var createDeuteronMass = /* @__PURE__ */ unitFactory("deuteronMass", "3.3435830926e-27", "kg");
var createNeutronMass = /* @__PURE__ */ unitFactory("neutronMass", "1.6749271613e-27", "kg");
var createQuantumOfCirculation = /* @__PURE__ */ unitFactory("quantumOfCirculation", "3.6369475516e-4", "m^2 s^-1");
var createRydberg = /* @__PURE__ */ unitFactory("rydberg", "10973731.568160", "m^-1");
var createThomsonCrossSection = /* @__PURE__ */ unitFactory("thomsonCrossSection", "6.6524587321e-29", "m^2");
var createWeakMixingAngle = numberFactory("weakMixingAngle", 0.2229);
var createEfimovFactor = numberFactory("efimovFactor", 22.7);
var createAtomicMass = /* @__PURE__ */ unitFactory("atomicMass", "1.66053906660e-27", "kg");
var createAvogadro = /* @__PURE__ */ unitFactory("avogadro", "6.02214076e23", "mol^-1");
var createBoltzmann = /* @__PURE__ */ unitFactory("boltzmann", "1.380649e-23", "J K^-1");
var createFaraday = /* @__PURE__ */ unitFactory("faraday", "96485.33212331001", "C mol^-1");
var createFirstRadiation = /* @__PURE__ */ unitFactory("firstRadiation", "3.7417718521927573e-16", "W m^2");
var createLoschmidt = /* @__PURE__ */ unitFactory("loschmidt", "2.686780111798444e25", "m^-3");
var createGasConstant = /* @__PURE__ */ unitFactory("gasConstant", "8.31446261815324", "J K^-1 mol^-1");
var createMolarPlanckConstant = /* @__PURE__ */ unitFactory("molarPlanckConstant", "3.990312712893431e-10", "J s mol^-1");
var createMolarVolume = /* @__PURE__ */ unitFactory("molarVolume", "0.022413969545014137", "m^3 mol^-1");
var createSackurTetrode = numberFactory("sackurTetrode", -1.16487052358);
var createSecondRadiation = /* @__PURE__ */ unitFactory("secondRadiation", "0.014387768775039337", "m K");
var createStefanBoltzmann = /* @__PURE__ */ unitFactory("stefanBoltzmann", "5.67037441918443e-8", "W m^-2 K^-4");
var createWienDisplacement = /* @__PURE__ */ unitFactory("wienDisplacement", "2.897771955e-3", "m K");
var createMolarMass = /* @__PURE__ */ unitFactory("molarMass", "0.99999999965e-3", "kg mol^-1");
var createMolarMassC12 = /* @__PURE__ */ unitFactory("molarMassC12", "11.9999999958e-3", "kg mol^-1");
var createGravity = /* @__PURE__ */ unitFactory("gravity", "9.80665", "m s^-2");
var createPlanckLength = /* @__PURE__ */ unitFactory("planckLength", "1.616255e-35", "m");
var createPlanckMass = /* @__PURE__ */ unitFactory("planckMass", "2.176435e-8", "kg");
var createPlanckTime = /* @__PURE__ */ unitFactory("planckTime", "5.391245e-44", "s");
var createPlanckCharge = /* @__PURE__ */ unitFactory("planckCharge", "1.87554603778e-18", "C");
var createPlanckTemperature = /* @__PURE__ */ unitFactory("planckTemperature", "1.416785e+32", "K");
function unitFactory(name2, valueStr, unitStr) {
  var dependencies2 = ["config", "Unit", "BigNumber"];
  return factory(name2, dependencies2, (_ref) => {
    var {
      config: config2,
      Unit: Unit2,
      BigNumber: BigNumber2
    } = _ref;
    var value = config2.number === "BigNumber" ? new BigNumber2(valueStr) : parseFloat(valueStr);
    var unit2 = new Unit2(value, unitStr);
    unit2.fixPrefix = true;
    return unit2;
  });
}
function numberFactory(name2, value) {
  var dependencies2 = ["config", "BigNumber"];
  return factory(name2, dependencies2, (_ref2) => {
    var {
      config: config2,
      BigNumber: BigNumber2
    } = _ref2;
    return config2.number === "BigNumber" ? new BigNumber2(value) : value;
  });
}
var name$2Q = "column";
var dependencies$2Q = ["typed", "Index", "matrix", "range"];
var createColumnTransform = /* @__PURE__ */ factory(name$2Q, dependencies$2Q, (_ref) => {
  var {
    typed: typed2,
    Index: Index2,
    matrix: matrix2,
    range: range2
  } = _ref;
  var column2 = createColumn({
    typed: typed2,
    Index: Index2,
    matrix: matrix2,
    range: range2
  });
  return typed2("column", {
    "...any": function any(args) {
      var lastIndex = args.length - 1;
      var last = args[lastIndex];
      if (isNumber(last)) {
        args[lastIndex] = last - 1;
      }
      try {
        return column2.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
var name$2R = "index";
var dependencies$2R = ["Index"];
var createIndexTransform = /* @__PURE__ */ factory(name$2R, dependencies$2R, (_ref) => {
  var {
    Index: Index2
  } = _ref;
  return function indexTransform() {
    var args = [];
    for (var i3 = 0, ii = arguments.length; i3 < ii; i3++) {
      var arg2 = arguments[i3];
      if (isRange(arg2)) {
        arg2.start--;
        arg2.end -= arg2.step > 0 ? 0 : 2;
      } else if (arg2 && arg2.isSet === true) {
        arg2 = arg2.map(function(v) {
          return v - 1;
        });
      } else if (isArray(arg2) || isMatrix(arg2)) {
        arg2 = arg2.map(function(v) {
          return v - 1;
        });
      } else if (isNumber(arg2)) {
        arg2--;
      } else if (isBigNumber(arg2)) {
        arg2 = arg2.toNumber() - 1;
      } else if (typeof arg2 === "string")
        ;
      else {
        throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
      }
      args[i3] = arg2;
    }
    var res = new Index2();
    Index2.apply(res, args);
    return res;
  };
}, {
  isTransformFunction: true
});
var name$2S = "row";
var dependencies$2S = ["typed", "Index", "matrix", "range"];
var createRowTransform = /* @__PURE__ */ factory(name$2S, dependencies$2S, (_ref) => {
  var {
    typed: typed2,
    Index: Index2,
    matrix: matrix2,
    range: range2
  } = _ref;
  var row2 = createRow({
    typed: typed2,
    Index: Index2,
    matrix: matrix2,
    range: range2
  });
  return typed2("row", {
    "...any": function any(args) {
      var lastIndex = args.length - 1;
      var last = args[lastIndex];
      if (isNumber(last)) {
        args[lastIndex] = last - 1;
      }
      try {
        return row2.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
var name$2T = "subset";
var dependencies$2T = ["typed", "matrix"];
var createSubsetTransform = /* @__PURE__ */ factory(name$2T, dependencies$2T, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2
  } = _ref;
  var subset2 = createSubset({
    typed: typed2,
    matrix: matrix2
  });
  return typed2("subset", {
    "...any": function any(args) {
      try {
        return subset2.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
var name$2U = "concat";
var dependencies$2U = ["typed", "matrix", "isInteger"];
var createConcatTransform = /* @__PURE__ */ factory(name$2U, dependencies$2U, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    isInteger: isInteger2
  } = _ref;
  var concat2 = createConcat({
    typed: typed2,
    matrix: matrix2,
    isInteger: isInteger2
  });
  return typed2("concat", {
    "...any": function any(args) {
      var lastIndex = args.length - 1;
      var last = args[lastIndex];
      if (isNumber(last)) {
        args[lastIndex] = last - 1;
      } else if (isBigNumber(last)) {
        args[lastIndex] = last.minus(1);
      }
      try {
        return concat2.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
var name$2V = "diff";
var dependencies$2V = ["typed", "matrix", "subtract", "number", "bignumber"];
var createDiffTransform = /* @__PURE__ */ factory(name$2V, dependencies$2V, (_ref) => {
  var {
    typed: typed2,
    matrix: matrix2,
    subtract: subtract2,
    number: number2,
    bignumber: bignumber2
  } = _ref;
  var diff2 = createDiff({
    typed: typed2,
    matrix: matrix2,
    subtract: subtract2,
    number: number2,
    bignumber: bignumber2
  });
  return typed2(name$2V, {
    "...any": function any(args) {
      args = lastDimToZeroBase(args);
      try {
        return diff2.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
var allFactories = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createTyped,
  createResultSet,
  createBigNumberClass,
  createComplexClass,
  createFractionClass,
  createRangeClass,
  createMatrixClass,
  createDenseMatrixClass,
  createClone,
  createIsInteger,
  createIsNegative,
  createIsNumeric,
  createHasNumericValue,
  createIsPositive,
  createIsZero,
  createIsNaN,
  createTypeOf,
  createEqualScalar,
  createSparseMatrixClass,
  createNumber,
  createString,
  createBoolean,
  createBignumber,
  createComplex,
  createFraction,
  createMatrix,
  createMatrixFromFunction,
  createMatrixFromRows,
  createMatrixFromColumns,
  createSplitUnit,
  createUnaryMinus,
  createUnaryPlus,
  createAbs,
  createApply,
  createAddScalar,
  createCbrt,
  createCeil,
  createCube,
  createExp,
  createExpm1,
  createFix,
  createFloor,
  createGcd,
  createLcm,
  createLog10,
  createLog2,
  createMod,
  createMultiplyScalar,
  createMultiply,
  createNthRoot,
  createSign,
  createSqrt,
  createSquare,
  createSubtract,
  createXgcd,
  createInvmod,
  createDotMultiply,
  createBitAnd,
  createBitNot,
  createBitOr,
  createBitXor,
  createArg,
  createConj,
  createIm,
  createRe,
  createNot,
  createOr,
  createXor,
  createConcat,
  createColumn,
  createCount,
  createCross,
  createDiag,
  createFilter,
  createFlatten,
  createForEach,
  createGetMatrixDataType,
  createIdentity,
  createKron,
  createMap,
  createDiff,
  createOnes,
  createRange,
  createReshape,
  createResize,
  createRotate,
  createRotationMatrix,
  createRow,
  createSize,
  createSqueeze,
  createSubset,
  createTranspose,
  createCtranspose,
  createZeros,
  createFft,
  createIfft,
  createErf,
  createMode,
  createProd,
  createFormat,
  createBin,
  createOct,
  createHex,
  createPrint,
  createTo,
  createIsPrime,
  createNumeric,
  createDivideScalar,
  createPow,
  createRound,
  createLog,
  createLog1p,
  createNthRoots,
  createDotPow,
  createDotDivide,
  createLsolve,
  createUsolve,
  createLsolveAll,
  createUsolveAll,
  createLeftShift,
  createRightArithShift,
  createRightLogShift,
  createAnd,
  createCompare,
  createCompareNatural,
  createCompareText,
  createEqual,
  createEqualText,
  createSmaller,
  createSmallerEq,
  createLarger,
  createLargerEq,
  createDeepEqual,
  createUnequal,
  createPartitionSelect,
  createSort,
  createMax,
  createMin,
  createImmutableDenseMatrixClass,
  createIndexClass,
  createFibonacciHeapClass,
  createSpaClass,
  createUnitClass,
  createUnitFunction,
  createSparse,
  createCreateUnit,
  createAcos,
  createAcosh,
  createAcot,
  createAcoth,
  createAcsc,
  createAcsch,
  createAsec,
  createAsech,
  createAsin,
  createAsinh,
  createAtan,
  createAtan2,
  createAtanh,
  createCos,
  createCosh,
  createCot,
  createCoth,
  createCsc,
  createCsch,
  createSec,
  createSech,
  createSin,
  createSinh,
  createTan,
  createTanh,
  createSetCartesian,
  createSetDifference,
  createSetDistinct,
  createSetIntersect,
  createSetIsSubset,
  createSetMultiplicity,
  createSetPowerset,
  createSetSize,
  createSetSymDifference,
  createSetUnion,
  createAdd,
  createHypot,
  createNorm,
  createDot,
  createTrace,
  createIndex,
  createNode,
  createAccessorNode,
  createArrayNode,
  createAssignmentNode,
  createBlockNode,
  createConditionalNode,
  createConstantNode,
  createFunctionAssignmentNode,
  createIndexNode,
  createObjectNode,
  createOperatorNode,
  createParenthesisNode,
  createRangeNode,
  createRelationalNode,
  createSymbolNode,
  createFunctionNode,
  createParse,
  createCompile,
  createEvaluate,
  createParserClass,
  createParser,
  createLup,
  createQr,
  createSlu,
  createLusolve,
  createPolynomialRoot,
  createHelpClass,
  createChainClass,
  createHelp,
  createChain,
  createDet,
  createInv,
  createPinv,
  createEigs,
  createExpm,
  createSqrtm,
  createSylvester,
  createSchur,
  createLyap,
  createDivide,
  createDistance,
  createIntersect,
  createSum,
  createCumSum,
  createMean,
  createMedian,
  createMad,
  createVariance,
  createQuantileSeq,
  createStd,
  createCombinations,
  createCombinationsWithRep,
  createGamma,
  createLgamma,
  createFactorial,
  createKldivergence,
  createMultinomial,
  createPermutations,
  createPickRandom,
  createRandom,
  createRandomInt,
  createStirlingS2,
  createBellNumbers,
  createCatalan,
  createComposition,
  createLeafCount,
  createSimplify,
  createSimplifyConstant,
  createSimplifyCore,
  createResolve,
  createSymbolicEqual,
  createDerivative,
  createRationalize,
  createReviver,
  createReplacer,
  createE,
  createUppercaseE,
  createFalse,
  createI,
  createInfinity,
  createLN10,
  createLN2,
  createLOG10E,
  createLOG2E,
  createNaN,
  createNull,
  createPhi,
  createPi,
  createUppercasePi,
  createSQRT1_2,
  createSQRT2,
  createTau,
  createTrue,
  createVersion,
  createAtomicMass,
  createAvogadro,
  createBohrMagneton,
  createBohrRadius,
  createBoltzmann,
  createClassicalElectronRadius,
  createConductanceQuantum,
  createCoulomb,
  createDeuteronMass,
  createEfimovFactor,
  createElectricConstant,
  createElectronMass,
  createElementaryCharge,
  createFaraday,
  createFermiCoupling,
  createFineStructure,
  createFirstRadiation,
  createGasConstant,
  createGravitationConstant,
  createGravity,
  createHartreeEnergy,
  createInverseConductanceQuantum,
  createKlitzing,
  createLoschmidt,
  createMagneticConstant,
  createMagneticFluxQuantum,
  createMolarMass,
  createMolarMassC12,
  createMolarPlanckConstant,
  createMolarVolume,
  createNeutronMass,
  createNuclearMagneton,
  createPlanckCharge,
  createPlanckConstant,
  createPlanckLength,
  createPlanckMass,
  createPlanckTemperature,
  createPlanckTime,
  createProtonMass,
  createQuantumOfCirculation,
  createReducedPlanckConstant,
  createRydberg,
  createSackurTetrode,
  createSecondRadiation,
  createSpeedOfLight,
  createStefanBoltzmann,
  createThomsonCrossSection,
  createVacuumImpedance,
  createWeakMixingAngle,
  createWienDisplacement,
  createApplyTransform,
  createColumnTransform,
  createFilterTransform,
  createForEachTransform,
  createIndexTransform,
  createMapTransform,
  createMaxTransform,
  createMeanTransform,
  createMinTransform,
  createRangeTransform,
  createRowTransform,
  createSubsetTransform,
  createConcatTransform,
  createDiffTransform,
  createStdTransform,
  createSumTransform,
  createCumSumTransform,
  createVarianceTransform
});
var BigNumber = /* @__PURE__ */ createBigNumberClass({
  config
});
var Complex = /* @__PURE__ */ createComplexClass({});
var e2 = /* @__PURE__ */ createE({
  BigNumber,
  config
});
var _false = /* @__PURE__ */ createFalse({});
var fineStructure = /* @__PURE__ */ createFineStructure({
  BigNumber,
  config
});
var Fraction = /* @__PURE__ */ createFractionClass({});
var i2 = /* @__PURE__ */ createI({
  Complex
});
var _Infinity = /* @__PURE__ */ createInfinity({
  BigNumber,
  config
});
var LN10 = /* @__PURE__ */ createLN10({
  BigNumber,
  config
});
var LOG10E = /* @__PURE__ */ createLOG10E({
  BigNumber,
  config
});
var Matrix = /* @__PURE__ */ createMatrixClass({});
var _NaN = /* @__PURE__ */ createNaN({
  BigNumber,
  config
});
var _null = /* @__PURE__ */ createNull({});
var phi = /* @__PURE__ */ createPhi({
  BigNumber,
  config
});
var Range = /* @__PURE__ */ createRangeClass({});
var ResultSet = /* @__PURE__ */ createResultSet({});
var SQRT1_2 = /* @__PURE__ */ createSQRT1_2({
  BigNumber,
  config
});
var sackurTetrode = /* @__PURE__ */ createSackurTetrode({
  BigNumber,
  config
});
var tau = /* @__PURE__ */ createTau({
  BigNumber,
  config
});
var _true = /* @__PURE__ */ createTrue({});
var version = /* @__PURE__ */ createVersion({});
var DenseMatrix = /* @__PURE__ */ createDenseMatrixClass({
  Matrix
});
var efimovFactor = /* @__PURE__ */ createEfimovFactor({
  BigNumber,
  config
});
var LN2 = /* @__PURE__ */ createLN2({
  BigNumber,
  config
});
var pi = /* @__PURE__ */ createPi({
  BigNumber,
  config
});
var replacer = /* @__PURE__ */ createReplacer({});
var SQRT2 = /* @__PURE__ */ createSQRT2({
  BigNumber,
  config
});
var typed = /* @__PURE__ */ createTyped({
  BigNumber,
  Complex,
  DenseMatrix,
  Fraction
});
var unaryPlus = /* @__PURE__ */ createUnaryPlus({
  BigNumber,
  config,
  typed
});
var weakMixingAngle = /* @__PURE__ */ createWeakMixingAngle({
  BigNumber,
  config
});
var abs = /* @__PURE__ */ createAbs({
  typed
});
var acos = /* @__PURE__ */ createAcos({
  Complex,
  config,
  typed
});
var acot = /* @__PURE__ */ createAcot({
  BigNumber,
  typed
});
var acsc = /* @__PURE__ */ createAcsc({
  BigNumber,
  Complex,
  config,
  typed
});
var addScalar = /* @__PURE__ */ createAddScalar({
  typed
});
var arg = /* @__PURE__ */ createArg({
  typed
});
var asech = /* @__PURE__ */ createAsech({
  BigNumber,
  Complex,
  config,
  typed
});
var asinh = /* @__PURE__ */ createAsinh({
  typed
});
var atan = /* @__PURE__ */ createAtan({
  typed
});
var atanh = /* @__PURE__ */ createAtanh({
  Complex,
  config,
  typed
});
var bignumber = /* @__PURE__ */ createBignumber({
  BigNumber,
  typed
});
var bitNot = /* @__PURE__ */ createBitNot({
  typed
});
var boolean = /* @__PURE__ */ createBoolean({
  typed
});
var clone = /* @__PURE__ */ createClone({
  typed
});
var combinations = /* @__PURE__ */ createCombinations({
  typed
});
var complex = /* @__PURE__ */ createComplex({
  Complex,
  typed
});
var conj = /* @__PURE__ */ createConj({
  typed
});
var cosh = /* @__PURE__ */ createCosh({
  typed
});
var coth = /* @__PURE__ */ createCoth({
  BigNumber,
  typed
});
var csc = /* @__PURE__ */ createCsc({
  BigNumber,
  typed
});
var cube = /* @__PURE__ */ createCube({
  typed
});
var equalScalar = /* @__PURE__ */ createEqualScalar({
  config,
  typed
});
var erf = /* @__PURE__ */ createErf({
  typed
});
var exp = /* @__PURE__ */ createExp({
  typed
});
var expm1 = /* @__PURE__ */ createExpm1({
  Complex,
  typed
});
var filter = /* @__PURE__ */ createFilter({
  typed
});
var forEach = /* @__PURE__ */ createForEach({
  typed
});
var format = /* @__PURE__ */ createFormat({
  typed
});
var getMatrixDataType = /* @__PURE__ */ createGetMatrixDataType({
  typed
});
var hex = /* @__PURE__ */ createHex({
  format,
  typed
});
var im = /* @__PURE__ */ createIm({
  typed
});
var isInteger = /* @__PURE__ */ createIsInteger({
  typed
});
var isNegative = /* @__PURE__ */ createIsNegative({
  typed
});
var isPositive = /* @__PURE__ */ createIsPositive({
  typed
});
var isZero = /* @__PURE__ */ createIsZero({
  typed
});
var LOG2E = /* @__PURE__ */ createLOG2E({
  BigNumber,
  config
});
var lgamma = /* @__PURE__ */ createLgamma({
  Complex,
  typed
});
var log10 = /* @__PURE__ */ createLog10({
  Complex,
  config,
  typed
});
var log2 = /* @__PURE__ */ createLog2({
  Complex,
  config,
  typed
});
var map = /* @__PURE__ */ createMap({
  typed
});
var multiplyScalar = /* @__PURE__ */ createMultiplyScalar({
  typed
});
var not = /* @__PURE__ */ createNot({
  typed
});
var number = /* @__PURE__ */ createNumber({
  typed
});
var oct = /* @__PURE__ */ createOct({
  format,
  typed
});
var pickRandom = /* @__PURE__ */ createPickRandom({
  config,
  typed
});
var print = /* @__PURE__ */ createPrint({
  typed
});
var random = /* @__PURE__ */ createRandom({
  config,
  typed
});
var re = /* @__PURE__ */ createRe({
  typed
});
var sec = /* @__PURE__ */ createSec({
  BigNumber,
  typed
});
var sign = /* @__PURE__ */ createSign({
  BigNumber,
  Fraction,
  complex,
  typed
});
var sin = /* @__PURE__ */ createSin({
  typed
});
var SparseMatrix = /* @__PURE__ */ createSparseMatrixClass({
  Matrix,
  equalScalar,
  typed
});
var splitUnit = /* @__PURE__ */ createSplitUnit({
  typed
});
var square = /* @__PURE__ */ createSquare({
  typed
});
var string = /* @__PURE__ */ createString({
  typed
});
var tan = /* @__PURE__ */ createTan({
  typed
});
var typeOf = /* @__PURE__ */ createTypeOf({
  typed
});
var acosh = /* @__PURE__ */ createAcosh({
  Complex,
  config,
  typed
});
var acsch = /* @__PURE__ */ createAcsch({
  BigNumber,
  typed
});
var apply = /* @__PURE__ */ createApply({
  isInteger,
  typed
});
var asec = /* @__PURE__ */ createAsec({
  BigNumber,
  Complex,
  config,
  typed
});
var bin = /* @__PURE__ */ createBin({
  format,
  typed
});
var combinationsWithRep = /* @__PURE__ */ createCombinationsWithRep({
  typed
});
var cos = /* @__PURE__ */ createCos({
  typed
});
var csch = /* @__PURE__ */ createCsch({
  BigNumber,
  typed
});
var isNaN$1 = /* @__PURE__ */ createIsNaN({
  typed
});
var isPrime = /* @__PURE__ */ createIsPrime({
  typed
});
var randomInt = /* @__PURE__ */ createRandomInt({
  config,
  typed
});
var sech = /* @__PURE__ */ createSech({
  BigNumber,
  typed
});
var sinh = /* @__PURE__ */ createSinh({
  typed
});
var sparse = /* @__PURE__ */ createSparse({
  SparseMatrix,
  typed
});
var sqrt = /* @__PURE__ */ createSqrt({
  Complex,
  config,
  typed
});
var tanh = /* @__PURE__ */ createTanh({
  typed
});
var unaryMinus = /* @__PURE__ */ createUnaryMinus({
  typed
});
var acoth = /* @__PURE__ */ createAcoth({
  BigNumber,
  Complex,
  config,
  typed
});
var cot = /* @__PURE__ */ createCot({
  BigNumber,
  typed
});
var fraction = /* @__PURE__ */ createFraction({
  Fraction,
  typed
});
var isNumeric = /* @__PURE__ */ createIsNumeric({
  typed
});
var matrix = /* @__PURE__ */ createMatrix({
  DenseMatrix,
  Matrix,
  SparseMatrix,
  typed
});
var matrixFromFunction = /* @__PURE__ */ createMatrixFromFunction({
  isZero,
  matrix,
  typed
});
var mode = /* @__PURE__ */ createMode({
  isNaN: isNaN$1,
  isNumeric,
  typed
});
var numeric = /* @__PURE__ */ createNumeric({
  bignumber,
  fraction,
  number
});
var prod = /* @__PURE__ */ createProd({
  config,
  multiplyScalar,
  numeric,
  typed
});
var reshape = /* @__PURE__ */ createReshape({
  isInteger,
  matrix,
  typed
});
var size = /* @__PURE__ */ createSize({
  matrix,
  config,
  typed
});
var squeeze = /* @__PURE__ */ createSqueeze({
  matrix,
  typed
});
var subset = /* @__PURE__ */ createSubset({
  matrix,
  typed
});
var transpose = /* @__PURE__ */ createTranspose({
  matrix,
  typed
});
var xgcd = /* @__PURE__ */ createXgcd({
  BigNumber,
  config,
  matrix,
  typed
});
var zeros = /* @__PURE__ */ createZeros({
  BigNumber,
  config,
  matrix,
  typed
});
var asin = /* @__PURE__ */ createAsin({
  Complex,
  config,
  typed
});
var cbrt = /* @__PURE__ */ createCbrt({
  BigNumber,
  Complex,
  Fraction,
  config,
  isNegative,
  matrix,
  typed,
  unaryMinus
});
var concat = /* @__PURE__ */ createConcat({
  isInteger,
  matrix,
  typed
});
var count = /* @__PURE__ */ createCount({
  prod,
  size,
  typed
});
var ctranspose = /* @__PURE__ */ createCtranspose({
  conj,
  transpose,
  typed
});
var diag = /* @__PURE__ */ createDiag({
  DenseMatrix,
  SparseMatrix,
  matrix,
  typed
});
var divideScalar = /* @__PURE__ */ createDivideScalar({
  numeric,
  typed
});
var dotDivide = /* @__PURE__ */ createDotDivide({
  DenseMatrix,
  concat,
  divideScalar,
  equalScalar,
  matrix,
  typed
});
var equal = /* @__PURE__ */ createEqual({
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed
});
var flatten = /* @__PURE__ */ createFlatten({
  matrix,
  typed
});
var gcd = /* @__PURE__ */ createGcd({
  BigNumber,
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed
});
var hasNumericValue = /* @__PURE__ */ createHasNumericValue({
  isNumeric,
  typed
});
var identity = /* @__PURE__ */ createIdentity({
  BigNumber,
  DenseMatrix,
  SparseMatrix,
  config,
  matrix,
  typed
});
var kron = /* @__PURE__ */ createKron({
  matrix,
  multiplyScalar,
  typed
});
var largerEq = /* @__PURE__ */ createLargerEq({
  DenseMatrix,
  concat,
  config,
  matrix,
  typed
});
var leftShift = /* @__PURE__ */ createLeftShift({
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed,
  zeros
});
var matrixFromColumns = /* @__PURE__ */ createMatrixFromColumns({
  flatten,
  matrix,
  size,
  typed
});
var mod = /* @__PURE__ */ createMod({
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed
});
var nthRoot = /* @__PURE__ */ createNthRoot({
  BigNumber,
  concat,
  equalScalar,
  matrix,
  typed
});
var ones = /* @__PURE__ */ createOnes({
  BigNumber,
  config,
  matrix,
  typed
});
var resize = /* @__PURE__ */ createResize({
  config,
  matrix
});
var rightArithShift = /* @__PURE__ */ createRightArithShift({
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed,
  zeros
});
var round = /* @__PURE__ */ createRound({
  BigNumber,
  DenseMatrix,
  equalScalar,
  matrix,
  typed,
  zeros
});
var smaller = /* @__PURE__ */ createSmaller({
  DenseMatrix,
  concat,
  config,
  matrix,
  typed
});
var to = /* @__PURE__ */ createTo({
  concat,
  matrix,
  typed
});
var unequal = /* @__PURE__ */ createUnequal({
  DenseMatrix,
  concat,
  config,
  equalScalar,
  matrix,
  typed
});
var xor = /* @__PURE__ */ createXor({
  DenseMatrix,
  concat,
  matrix,
  typed
});
var add = /* @__PURE__ */ createAdd({
  DenseMatrix,
  SparseMatrix,
  addScalar,
  concat,
  equalScalar,
  matrix,
  typed
});
var bitAnd = /* @__PURE__ */ createBitAnd({
  concat,
  equalScalar,
  matrix,
  typed
});
var bitXor$1 = /* @__PURE__ */ createBitXor({
  DenseMatrix,
  concat,
  matrix,
  typed
});
var catalan = /* @__PURE__ */ createCatalan({
  addScalar,
  combinations,
  divideScalar,
  isInteger,
  isNegative,
  multiplyScalar,
  typed
});
var compare = /* @__PURE__ */ createCompare({
  BigNumber,
  DenseMatrix,
  Fraction,
  concat,
  config,
  equalScalar,
  matrix,
  typed
});
var compareText = /* @__PURE__ */ createCompareText({
  concat,
  matrix,
  typed
});
var cumsum = /* @__PURE__ */ createCumSum({
  add,
  typed,
  unaryPlus
});
var deepEqual = /* @__PURE__ */ createDeepEqual({
  equal,
  typed
});
var dot = /* @__PURE__ */ createDot({
  addScalar,
  conj,
  multiplyScalar,
  size,
  typed
});
var equalText = /* @__PURE__ */ createEqualText({
  compareText,
  isZero,
  typed
});
var floor = /* @__PURE__ */ createFloor({
  DenseMatrix,
  config,
  equalScalar,
  matrix,
  round,
  typed,
  zeros
});
var hypot = /* @__PURE__ */ createHypot({
  abs,
  addScalar,
  divideScalar,
  isPositive,
  multiplyScalar,
  smaller,
  sqrt,
  typed
});
var ImmutableDenseMatrix = /* @__PURE__ */ createImmutableDenseMatrixClass({
  DenseMatrix,
  smaller
});
var Index = /* @__PURE__ */ createIndexClass({
  ImmutableDenseMatrix
});
var invmod = /* @__PURE__ */ createInvmod({
  BigNumber,
  add,
  config,
  equal,
  isInteger,
  mod,
  smaller,
  typed,
  xgcd
});
var larger = /* @__PURE__ */ createLarger({
  DenseMatrix,
  concat,
  config,
  matrix,
  typed
});
var log = /* @__PURE__ */ createLog({
  Complex,
  config,
  divideScalar,
  typed
});
var matrixFromRows = /* @__PURE__ */ createMatrixFromRows({
  flatten,
  matrix,
  size,
  typed
});
var min = /* @__PURE__ */ createMin({
  config,
  numeric,
  smaller,
  typed
});
var multiply = /* @__PURE__ */ createMultiply({
  addScalar,
  dot,
  equalScalar,
  matrix,
  multiplyScalar,
  typed
});
var nthRoots = /* @__PURE__ */ createNthRoots({
  Complex,
  config,
  divideScalar,
  typed
});
var or = /* @__PURE__ */ createOr({
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed
});
var partitionSelect = /* @__PURE__ */ createPartitionSelect({
  compare,
  isNaN: isNaN$1,
  isNumeric,
  typed
});
var quantileSeq = /* @__PURE__ */ createQuantileSeq({
  add,
  compare,
  multiply,
  partitionSelect,
  typed
});
var rightLogShift = /* @__PURE__ */ createRightLogShift({
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed,
  zeros
});
var smallerEq = /* @__PURE__ */ createSmallerEq({
  DenseMatrix,
  concat,
  config,
  matrix,
  typed
});
var subtract = /* @__PURE__ */ createSubtract({
  DenseMatrix,
  addScalar,
  concat,
  equalScalar,
  matrix,
  typed,
  unaryMinus
});
var trace = /* @__PURE__ */ createTrace({
  add,
  matrix,
  typed
});
var usolve = /* @__PURE__ */ createUsolve({
  DenseMatrix,
  divideScalar,
  equalScalar,
  matrix,
  multiplyScalar,
  subtract,
  typed
});
var and = /* @__PURE__ */ createAnd({
  concat,
  equalScalar,
  matrix,
  not,
  typed,
  zeros
});
var bitOr = /* @__PURE__ */ createBitOr({
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed
});
var ceil = /* @__PURE__ */ createCeil({
  DenseMatrix,
  config,
  equalScalar,
  matrix,
  round,
  typed,
  zeros
});
var compareNatural = /* @__PURE__ */ createCompareNatural({
  compare,
  typed
});
var composition = /* @__PURE__ */ createComposition({
  addScalar,
  combinations,
  isInteger,
  isNegative,
  isPositive,
  larger,
  typed
});
var cross = /* @__PURE__ */ createCross({
  matrix,
  multiply,
  subtract,
  typed
});
var det = /* @__PURE__ */ createDet({
  divideScalar,
  isZero,
  matrix,
  multiply,
  subtract,
  typed,
  unaryMinus
});
var diff = /* @__PURE__ */ createDiff({
  matrix,
  number,
  subtract,
  typed
});
var distance = /* @__PURE__ */ createDistance({
  abs,
  addScalar,
  divideScalar,
  multiplyScalar,
  sqrt,
  subtract,
  typed,
  unaryMinus
});
var dotMultiply = /* @__PURE__ */ createDotMultiply({
  concat,
  equalScalar,
  matrix,
  multiplyScalar,
  typed
});
var FibonacciHeap = /* @__PURE__ */ createFibonacciHeapClass({
  larger,
  smaller
});
var fix = /* @__PURE__ */ createFix({
  Complex,
  DenseMatrix,
  ceil,
  equalScalar,
  floor,
  matrix,
  typed,
  zeros
});
var index = /* @__PURE__ */ createIndex({
  Index,
  typed
});
var intersect = /* @__PURE__ */ createIntersect({
  abs,
  add,
  addScalar,
  config,
  divideScalar,
  equalScalar,
  flatten,
  isNumeric,
  isZero,
  matrix,
  multiply,
  multiplyScalar,
  smaller,
  subtract,
  typed
});
var lcm = /* @__PURE__ */ createLcm({
  concat,
  equalScalar,
  matrix,
  typed
});
var log1p = /* @__PURE__ */ createLog1p({
  Complex,
  config,
  divideScalar,
  log,
  typed
});
var lsolve = /* @__PURE__ */ createLsolve({
  DenseMatrix,
  divideScalar,
  equalScalar,
  matrix,
  multiplyScalar,
  subtract,
  typed
});
var max = /* @__PURE__ */ createMax({
  config,
  larger,
  numeric,
  typed
});
var qr = /* @__PURE__ */ createQr({
  addScalar,
  complex,
  conj,
  divideScalar,
  equal,
  identity,
  isZero,
  matrix,
  multiplyScalar,
  sign,
  sqrt,
  subtract,
  typed,
  unaryMinus,
  zeros
});
var range = /* @__PURE__ */ createRange({
  bignumber,
  matrix,
  config,
  larger,
  largerEq,
  smaller,
  smallerEq,
  typed
});
var row = /* @__PURE__ */ createRow({
  Index,
  matrix,
  range,
  typed
});
var setCartesian = /* @__PURE__ */ createSetCartesian({
  DenseMatrix,
  Index,
  compareNatural,
  size,
  subset,
  typed
});
var setDistinct = /* @__PURE__ */ createSetDistinct({
  DenseMatrix,
  Index,
  compareNatural,
  size,
  subset,
  typed
});
var setIsSubset = /* @__PURE__ */ createSetIsSubset({
  Index,
  compareNatural,
  size,
  subset,
  typed
});
var setPowerset = /* @__PURE__ */ createSetPowerset({
  Index,
  compareNatural,
  size,
  subset,
  typed
});
var slu = /* @__PURE__ */ createSlu({
  SparseMatrix,
  abs,
  add,
  divideScalar,
  larger,
  largerEq,
  multiply,
  subtract,
  transpose,
  typed
});
var Spa = /* @__PURE__ */ createSpaClass({
  FibonacciHeap,
  addScalar,
  equalScalar
});
var sum = /* @__PURE__ */ createSum({
  add,
  config,
  numeric,
  typed
});
var usolveAll = /* @__PURE__ */ createUsolveAll({
  DenseMatrix,
  divideScalar,
  equalScalar,
  matrix,
  multiplyScalar,
  subtract,
  typed
});
var atan2 = /* @__PURE__ */ createAtan2({
  BigNumber,
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  typed
});
var column = /* @__PURE__ */ createColumn({
  Index,
  matrix,
  range,
  typed
});
var lsolveAll = /* @__PURE__ */ createLsolveAll({
  DenseMatrix,
  divideScalar,
  equalScalar,
  matrix,
  multiplyScalar,
  subtract,
  typed
});
var setDifference = /* @__PURE__ */ createSetDifference({
  DenseMatrix,
  Index,
  compareNatural,
  size,
  subset,
  typed
});
var setMultiplicity = /* @__PURE__ */ createSetMultiplicity({
  Index,
  compareNatural,
  size,
  subset,
  typed
});
var setSymDifference = /* @__PURE__ */ createSetSymDifference({
  Index,
  concat,
  setDifference,
  size,
  subset,
  typed
});
var sort = /* @__PURE__ */ createSort({
  compare,
  compareNatural,
  matrix,
  typed
});
var inv = /* @__PURE__ */ createInv({
  abs,
  addScalar,
  det,
  divideScalar,
  identity,
  matrix,
  multiply,
  typed,
  unaryMinus
});
var lup = /* @__PURE__ */ createLup({
  DenseMatrix,
  Spa,
  SparseMatrix,
  abs,
  addScalar,
  divideScalar,
  equalScalar,
  larger,
  matrix,
  multiplyScalar,
  subtract,
  typed,
  unaryMinus
});
var pinv = /* @__PURE__ */ createPinv({
  Complex,
  add,
  ctranspose,
  deepEqual,
  divideScalar,
  dot,
  dotDivide,
  equal,
  inv,
  matrix,
  multiply,
  typed
});
var pow = /* @__PURE__ */ createPow({
  Complex,
  config,
  fraction,
  identity,
  inv,
  matrix,
  multiply,
  number,
  typed
});
var setIntersect = /* @__PURE__ */ createSetIntersect({
  DenseMatrix,
  Index,
  compareNatural,
  size,
  subset,
  typed
});
var setUnion = /* @__PURE__ */ createSetUnion({
  Index,
  concat,
  setIntersect,
  setSymDifference,
  size,
  subset,
  typed
});
var sqrtm = /* @__PURE__ */ createSqrtm({
  abs,
  add,
  identity,
  inv,
  map,
  max,
  multiply,
  size,
  sqrt,
  subtract,
  typed
});
var Unit = /* @__PURE__ */ createUnitClass({
  BigNumber,
  Complex,
  Fraction,
  abs,
  addScalar,
  config,
  divideScalar,
  equal,
  fix,
  format,
  isNumeric,
  multiplyScalar,
  number,
  pow,
  round,
  subtract
});
var vacuumImpedance = /* @__PURE__ */ createVacuumImpedance({
  BigNumber,
  Unit,
  config
});
var wienDisplacement = /* @__PURE__ */ createWienDisplacement({
  BigNumber,
  Unit,
  config
});
var atomicMass = /* @__PURE__ */ createAtomicMass({
  BigNumber,
  Unit,
  config
});
var bohrMagneton = /* @__PURE__ */ createBohrMagneton({
  BigNumber,
  Unit,
  config
});
var boltzmann = /* @__PURE__ */ createBoltzmann({
  BigNumber,
  Unit,
  config
});
var conductanceQuantum = /* @__PURE__ */ createConductanceQuantum({
  BigNumber,
  Unit,
  config
});
var createUnit = /* @__PURE__ */ createCreateUnit({
  Unit,
  typed
});
var deuteronMass = /* @__PURE__ */ createDeuteronMass({
  BigNumber,
  Unit,
  config
});
var dotPow = /* @__PURE__ */ createDotPow({
  DenseMatrix,
  concat,
  equalScalar,
  matrix,
  pow,
  typed
});
var electricConstant = /* @__PURE__ */ createElectricConstant({
  BigNumber,
  Unit,
  config
});
var elementaryCharge = /* @__PURE__ */ createElementaryCharge({
  BigNumber,
  Unit,
  config
});
var expm = /* @__PURE__ */ createExpm({
  abs,
  add,
  identity,
  inv,
  multiply,
  typed
});
var faraday = /* @__PURE__ */ createFaraday({
  BigNumber,
  Unit,
  config
});
var fft = /* @__PURE__ */ createFft({
  addScalar,
  ceil,
  conj,
  divideScalar,
  dotDivide,
  exp,
  i: i2,
  log2,
  matrix,
  multiplyScalar,
  pow,
  tau,
  typed
});
var gamma = /* @__PURE__ */ createGamma({
  BigNumber,
  Complex,
  config,
  multiplyScalar,
  pow,
  typed
});
var gravitationConstant = /* @__PURE__ */ createGravitationConstant({
  BigNumber,
  Unit,
  config
});
var hartreeEnergy = /* @__PURE__ */ createHartreeEnergy({
  BigNumber,
  Unit,
  config
});
var ifft = /* @__PURE__ */ createIfft({
  conj,
  dotDivide,
  fft,
  typed
});
var klitzing = /* @__PURE__ */ createKlitzing({
  BigNumber,
  Unit,
  config
});
var loschmidt = /* @__PURE__ */ createLoschmidt({
  BigNumber,
  Unit,
  config
});
var magneticConstant = /* @__PURE__ */ createMagneticConstant({
  BigNumber,
  Unit,
  config
});
var molarMass = /* @__PURE__ */ createMolarMass({
  BigNumber,
  Unit,
  config
});
var molarPlanckConstant = /* @__PURE__ */ createMolarPlanckConstant({
  BigNumber,
  Unit,
  config
});
var neutronMass = /* @__PURE__ */ createNeutronMass({
  BigNumber,
  Unit,
  config
});
var nuclearMagneton = /* @__PURE__ */ createNuclearMagneton({
  BigNumber,
  Unit,
  config
});
var planckCharge = /* @__PURE__ */ createPlanckCharge({
  BigNumber,
  Unit,
  config
});
var planckLength = /* @__PURE__ */ createPlanckLength({
  BigNumber,
  Unit,
  config
});
var planckTemperature = /* @__PURE__ */ createPlanckTemperature({
  BigNumber,
  Unit,
  config
});
var protonMass = /* @__PURE__ */ createProtonMass({
  BigNumber,
  Unit,
  config
});
var reducedPlanckConstant = /* @__PURE__ */ createReducedPlanckConstant({
  BigNumber,
  Unit,
  config
});
var rydberg = /* @__PURE__ */ createRydberg({
  BigNumber,
  Unit,
  config
});
var secondRadiation = /* @__PURE__ */ createSecondRadiation({
  BigNumber,
  Unit,
  config
});
var speedOfLight = /* @__PURE__ */ createSpeedOfLight({
  BigNumber,
  Unit,
  config
});
var stefanBoltzmann = /* @__PURE__ */ createStefanBoltzmann({
  BigNumber,
  Unit,
  config
});
var thomsonCrossSection = /* @__PURE__ */ createThomsonCrossSection({
  BigNumber,
  Unit,
  config
});
var avogadro = /* @__PURE__ */ createAvogadro({
  BigNumber,
  Unit,
  config
});
var bohrRadius = /* @__PURE__ */ createBohrRadius({
  BigNumber,
  Unit,
  config
});
var coulomb = /* @__PURE__ */ createCoulomb({
  BigNumber,
  Unit,
  config
});
var divide = /* @__PURE__ */ createDivide({
  divideScalar,
  equalScalar,
  inv,
  matrix,
  multiply,
  typed
});
var electronMass = /* @__PURE__ */ createElectronMass({
  BigNumber,
  Unit,
  config
});
var factorial = /* @__PURE__ */ createFactorial({
  gamma,
  typed
});
var firstRadiation = /* @__PURE__ */ createFirstRadiation({
  BigNumber,
  Unit,
  config
});
var gasConstant = /* @__PURE__ */ createGasConstant({
  BigNumber,
  Unit,
  config
});
var inverseConductanceQuantum = /* @__PURE__ */ createInverseConductanceQuantum({
  BigNumber,
  Unit,
  config
});
var lusolve = /* @__PURE__ */ createLusolve({
  DenseMatrix,
  lsolve,
  lup,
  matrix,
  slu,
  typed,
  usolve
});
var magneticFluxQuantum = /* @__PURE__ */ createMagneticFluxQuantum({
  BigNumber,
  Unit,
  config
});
var molarMassC12 = /* @__PURE__ */ createMolarMassC12({
  BigNumber,
  Unit,
  config
});
var multinomial = /* @__PURE__ */ createMultinomial({
  add,
  divide,
  factorial,
  isInteger,
  isPositive,
  multiply,
  typed
});
var permutations = /* @__PURE__ */ createPermutations({
  factorial,
  typed
});
var planckMass = /* @__PURE__ */ createPlanckMass({
  BigNumber,
  Unit,
  config
});
var polynomialRoot = /* @__PURE__ */ createPolynomialRoot({
  add,
  cbrt,
  divide,
  equalScalar,
  im,
  isZero,
  multiply,
  re,
  sqrt,
  subtract,
  typeOf,
  typed,
  unaryMinus
});
var setSize = /* @__PURE__ */ createSetSize({
  compareNatural,
  typed
});
var stirlingS2 = /* @__PURE__ */ createStirlingS2({
  bignumber,
  addScalar,
  combinations,
  divideScalar,
  factorial,
  isInteger,
  isNegative,
  larger,
  multiplyScalar,
  number,
  pow,
  subtract,
  typed
});
var unit = /* @__PURE__ */ createUnitFunction({
  Unit,
  typed
});
var bellNumbers = /* @__PURE__ */ createBellNumbers({
  addScalar,
  isInteger,
  isNegative,
  stirlingS2,
  typed
});
var eigs = /* @__PURE__ */ createEigs({
  abs,
  add,
  addScalar,
  atan,
  bignumber,
  column,
  complex,
  config,
  cos,
  diag,
  divideScalar,
  dot,
  equal,
  flatten,
  im,
  inv,
  larger,
  matrix,
  matrixFromColumns,
  multiply,
  multiplyScalar,
  number,
  qr,
  re,
  sin,
  smaller,
  sqrt,
  subtract,
  typed,
  usolve,
  usolveAll
});
var fermiCoupling = /* @__PURE__ */ createFermiCoupling({
  BigNumber,
  Unit,
  config
});
var gravity = /* @__PURE__ */ createGravity({
  BigNumber,
  Unit,
  config
});
var kldivergence = /* @__PURE__ */ createKldivergence({
  divide,
  dotDivide,
  isNumeric,
  log,
  map,
  matrix,
  multiply,
  sum,
  typed
});
var mean = /* @__PURE__ */ createMean({
  add,
  divide,
  typed
});
var molarVolume = /* @__PURE__ */ createMolarVolume({
  BigNumber,
  Unit,
  config
});
var planckConstant = /* @__PURE__ */ createPlanckConstant({
  BigNumber,
  Unit,
  config
});
var quantumOfCirculation = /* @__PURE__ */ createQuantumOfCirculation({
  BigNumber,
  Unit,
  config
});
var variance = /* @__PURE__ */ createVariance({
  add,
  apply,
  divide,
  isNaN: isNaN$1,
  multiply,
  subtract,
  typed
});
var classicalElectronRadius = /* @__PURE__ */ createClassicalElectronRadius({
  BigNumber,
  Unit,
  config
});
var median = /* @__PURE__ */ createMedian({
  add,
  compare,
  divide,
  partitionSelect,
  typed
});
var planckTime = /* @__PURE__ */ createPlanckTime({
  BigNumber,
  Unit,
  config
});
var std = /* @__PURE__ */ createStd({
  map,
  sqrt,
  typed,
  variance
});
var mad = /* @__PURE__ */ createMad({
  abs,
  map,
  median,
  subtract,
  typed
});
var norm = /* @__PURE__ */ createNorm({
  abs,
  add,
  conj,
  ctranspose,
  eigs,
  equalScalar,
  larger,
  matrix,
  multiply,
  pow,
  smaller,
  sqrt,
  typed
});
var rotationMatrix = /* @__PURE__ */ createRotationMatrix({
  BigNumber,
  DenseMatrix,
  SparseMatrix,
  addScalar,
  config,
  cos,
  matrix,
  multiplyScalar,
  norm,
  sin,
  typed,
  unaryMinus
});
var rotate = /* @__PURE__ */ createRotate({
  multiply,
  rotationMatrix,
  typed
});
var schur = /* @__PURE__ */ createSchur({
  identity,
  matrix,
  multiply,
  norm,
  qr,
  subtract,
  typed
});
var sylvester = /* @__PURE__ */ createSylvester({
  abs,
  add,
  concat,
  identity,
  index,
  lusolve,
  matrix,
  matrixFromColumns,
  multiply,
  range,
  schur,
  subset,
  subtract,
  transpose,
  typed
});
var lyap = /* @__PURE__ */ createLyap({
  matrix,
  multiply,
  sylvester,
  transpose,
  typed
});
var math = {};
var mathWithTransform = {};
var classes = {};
var Node = createNode({
  mathWithTransform
});
var ObjectNode = createObjectNode({
  Node
});
var OperatorNode = createOperatorNode({
  Node
});
var ParenthesisNode = createParenthesisNode({
  Node
});
var RelationalNode = createRelationalNode({
  Node
});
var ArrayNode = createArrayNode({
  Node
});
var BlockNode = createBlockNode({
  Node,
  ResultSet
});
var ConditionalNode = createConditionalNode({
  Node
});
var ConstantNode = createConstantNode({
  Node
});
var RangeNode = createRangeNode({
  Node
});
var reviver = createReviver({
  classes
});
var Chain = createChainClass({
  math,
  typed
});
var FunctionAssignmentNode = createFunctionAssignmentNode({
  Node,
  typed
});
var chain = createChain({
  Chain,
  typed
});
var AccessorNode = createAccessorNode({
  Node,
  subset
});
var IndexNode = createIndexNode({
  Node,
  size
});
var AssignmentNode = createAssignmentNode({
  matrix,
  Node,
  subset
});
var SymbolNode = createSymbolNode({
  Unit,
  Node,
  math
});
var FunctionNode = createFunctionNode({
  Node,
  SymbolNode,
  math
});
var parse = createParse({
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
  SymbolNode,
  config,
  numeric,
  typed
});
var resolve = createResolve({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  parse,
  typed
});
var simplifyConstant = createSimplifyConstant({
  bignumber,
  fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  SymbolNode,
  config,
  mathWithTransform,
  matrix,
  typed
});
var compile = createCompile({
  parse,
  typed
});
var evaluate = createEvaluate({
  parse,
  typed
});
var Help = createHelpClass({
  parse
});
var Parser = createParserClass({
  evaluate
});
var simplifyCore = createSimplifyCore({
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add,
  divide,
  equal,
  isZero,
  multiply,
  parse,
  pow,
  subtract,
  typed
});
var help = createHelp({
  Help,
  mathWithTransform,
  typed
});
var simplify = createSimplify({
  bignumber,
  fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add,
  config,
  divide,
  equal,
  isZero,
  mathWithTransform,
  matrix,
  multiply,
  parse,
  pow,
  resolve,
  simplifyConstant,
  simplifyCore,
  subtract,
  typed
});
var symbolicEqual = createSymbolicEqual({
  OperatorNode,
  parse,
  simplify,
  typed
});
var derivative = createDerivative({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  config,
  equal,
  isZero,
  numeric,
  parse,
  simplify,
  typed
});
var parser = createParser({
  Parser,
  typed
});
var leafCount = createLeafCount({
  parse,
  typed
});
var rationalize = createRationalize({
  bignumber,
  fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add,
  config,
  divide,
  equal,
  isZero,
  mathWithTransform,
  matrix,
  multiply,
  parse,
  pow,
  simplify,
  simplifyConstant,
  simplifyCore,
  subtract,
  typed
});
_extends_1(math, {
  e: e2,
  false: _false,
  fineStructure,
  i: i2,
  Infinity: _Infinity,
  LN10,
  LOG10E,
  NaN: _NaN,
  null: _null,
  phi,
  SQRT1_2,
  sackurTetrode,
  tau,
  true: _true,
  E: e2,
  version,
  efimovFactor,
  LN2,
  pi,
  replacer,
  reviver,
  SQRT2,
  typed,
  unaryPlus,
  PI: pi,
  weakMixingAngle,
  abs,
  acos,
  acot,
  acsc,
  addScalar,
  arg,
  asech,
  asinh,
  atan,
  atanh,
  bignumber,
  bitNot,
  boolean,
  clone,
  combinations,
  complex,
  conj,
  cosh,
  coth,
  csc,
  cube,
  equalScalar,
  erf,
  exp,
  expm1,
  filter,
  forEach,
  format,
  getMatrixDataType,
  hex,
  im,
  isInteger,
  isNegative,
  isPositive,
  isZero,
  LOG2E,
  lgamma,
  log10,
  log2,
  map,
  multiplyScalar,
  not,
  number,
  oct,
  pickRandom,
  print,
  random,
  re,
  sec,
  sign,
  sin,
  splitUnit,
  square,
  string,
  tan,
  typeOf,
  acosh,
  acsch,
  apply,
  asec,
  bin,
  chain,
  combinationsWithRep,
  cos,
  csch,
  isNaN: isNaN$1,
  isPrime,
  randomInt,
  sech,
  sinh,
  sparse,
  sqrt,
  tanh,
  unaryMinus,
  acoth,
  cot,
  fraction,
  isNumeric,
  matrix,
  matrixFromFunction,
  mode,
  numeric,
  prod,
  reshape,
  size,
  squeeze,
  subset,
  transpose,
  xgcd,
  zeros,
  asin,
  cbrt,
  concat,
  count,
  ctranspose,
  diag,
  divideScalar,
  dotDivide,
  equal,
  flatten,
  gcd,
  hasNumericValue,
  identity,
  kron,
  largerEq,
  leftShift,
  matrixFromColumns,
  mod,
  nthRoot,
  ones,
  resize,
  rightArithShift,
  round,
  smaller,
  to,
  unequal,
  xor,
  add,
  bitAnd,
  bitXor: bitXor$1,
  catalan,
  compare,
  compareText,
  cumsum,
  deepEqual,
  dot,
  equalText,
  floor,
  hypot,
  invmod,
  larger,
  log,
  matrixFromRows,
  min,
  multiply,
  nthRoots,
  or,
  partitionSelect,
  quantileSeq,
  rightLogShift,
  smallerEq,
  subtract,
  trace,
  usolve,
  and,
  bitOr,
  ceil,
  compareNatural,
  composition,
  cross,
  det,
  diff,
  distance,
  dotMultiply,
  fix,
  index,
  intersect,
  lcm,
  log1p,
  lsolve,
  max,
  qr,
  range,
  row,
  setCartesian,
  setDistinct,
  setIsSubset,
  setPowerset,
  slu,
  sum,
  usolveAll,
  atan2,
  column,
  lsolveAll,
  setDifference,
  setMultiplicity,
  setSymDifference,
  sort,
  inv,
  lup,
  pinv,
  pow,
  setIntersect,
  setUnion,
  sqrtm,
  vacuumImpedance,
  wienDisplacement,
  atomicMass,
  bohrMagneton,
  boltzmann,
  conductanceQuantum,
  createUnit,
  deuteronMass,
  dotPow,
  electricConstant,
  elementaryCharge,
  expm,
  faraday,
  fft,
  gamma,
  gravitationConstant,
  hartreeEnergy,
  ifft,
  klitzing,
  loschmidt,
  magneticConstant,
  molarMass,
  molarPlanckConstant,
  neutronMass,
  nuclearMagneton,
  planckCharge,
  planckLength,
  planckTemperature,
  protonMass,
  reducedPlanckConstant,
  rydberg,
  secondRadiation,
  speedOfLight,
  stefanBoltzmann,
  thomsonCrossSection,
  avogadro,
  bohrRadius,
  coulomb,
  divide,
  electronMass,
  factorial,
  firstRadiation,
  gasConstant,
  inverseConductanceQuantum,
  lusolve,
  magneticFluxQuantum,
  molarMassC12,
  multinomial,
  permutations,
  planckMass,
  polynomialRoot,
  setSize,
  stirlingS2,
  unit,
  bellNumbers,
  eigs,
  fermiCoupling,
  gravity,
  kldivergence,
  mean,
  molarVolume,
  planckConstant,
  quantumOfCirculation,
  variance,
  classicalElectronRadius,
  median,
  parse,
  planckTime,
  resolve,
  simplifyConstant,
  std,
  compile,
  evaluate,
  mad,
  simplifyCore,
  help,
  norm,
  rotationMatrix,
  simplify,
  symbolicEqual,
  derivative,
  parser,
  rotate,
  leafCount,
  rationalize,
  schur,
  sylvester,
  lyap,
  config
});
_extends_1(mathWithTransform, math, {
  filter: createFilterTransform({
    typed
  }),
  forEach: createForEachTransform({
    typed
  }),
  map: createMapTransform({
    typed
  }),
  apply: createApplyTransform({
    isInteger,
    typed
  }),
  subset: createSubsetTransform({
    matrix,
    typed
  }),
  concat: createConcatTransform({
    isInteger,
    matrix,
    typed
  }),
  max: createMaxTransform({
    config,
    larger,
    numeric,
    typed
  }),
  sum: createSumTransform({
    add,
    config,
    numeric,
    typed
  }),
  min: createMinTransform({
    config,
    numeric,
    smaller,
    typed
  }),
  cumsum: createCumSumTransform({
    add,
    typed,
    unaryPlus
  }),
  diff: createDiffTransform({
    bignumber,
    matrix,
    number,
    subtract,
    typed
  }),
  index: createIndexTransform({
    Index
  }),
  range: createRangeTransform({
    bignumber,
    matrix,
    config,
    larger,
    largerEq,
    smaller,
    smallerEq,
    typed
  }),
  row: createRowTransform({
    Index,
    matrix,
    range,
    typed
  }),
  column: createColumnTransform({
    Index,
    matrix,
    range,
    typed
  }),
  mean: createMeanTransform({
    add,
    divide,
    typed
  }),
  variance: createVarianceTransform({
    add,
    apply,
    divide,
    isNaN: isNaN$1,
    multiply,
    subtract,
    typed
  }),
  std: createStdTransform({
    map,
    sqrt,
    typed,
    variance
  })
});
_extends_1(classes, {
  BigNumber,
  Complex,
  Fraction,
  Matrix,
  Node,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  Range,
  RelationalNode,
  ResultSet,
  ArrayNode,
  BlockNode,
  ConditionalNode,
  ConstantNode,
  DenseMatrix,
  RangeNode,
  Chain,
  FunctionAssignmentNode,
  SparseMatrix,
  AccessorNode,
  IndexNode,
  AssignmentNode,
  ImmutableDenseMatrix,
  Index,
  FibonacciHeap,
  Spa,
  Unit,
  SymbolNode,
  FunctionNode,
  Help,
  Parser
});
Chain.createProxy(math);
var BigNumberDependencies = {
  createBigNumberClass
};
var ComplexDependencies = {
  createComplexClass
};
var MatrixDependencies = {
  createMatrixClass
};
var DenseMatrixDependencies = {
  MatrixDependencies,
  createDenseMatrixClass
};
var FractionDependencies = {
  createFractionClass
};
var typedDependencies = {
  BigNumberDependencies,
  ComplexDependencies,
  DenseMatrixDependencies,
  FractionDependencies,
  createTyped
};
var absDependencies = {
  typedDependencies,
  createAbs
};
var NodeDependencies = {
  createNode
};
var equalScalarDependencies = {
  typedDependencies,
  createEqualScalar
};
var SparseMatrixDependencies = {
  MatrixDependencies,
  equalScalarDependencies,
  typedDependencies,
  createSparseMatrixClass
};
var matrixDependencies = {
  DenseMatrixDependencies,
  MatrixDependencies,
  SparseMatrixDependencies,
  typedDependencies,
  createMatrix
};
var subsetDependencies = {
  matrixDependencies,
  typedDependencies,
  createSubset
};
var AccessorNodeDependencies = {
  NodeDependencies,
  subsetDependencies,
  createAccessorNode
};
var acosDependencies = {
  ComplexDependencies,
  typedDependencies,
  createAcos
};
var acoshDependencies = {
  ComplexDependencies,
  typedDependencies,
  createAcosh
};
var acotDependencies = {
  BigNumberDependencies,
  typedDependencies,
  createAcot
};
var acothDependencies = {
  BigNumberDependencies,
  ComplexDependencies,
  typedDependencies,
  createAcoth
};
var acscDependencies = {
  BigNumberDependencies,
  ComplexDependencies,
  typedDependencies,
  createAcsc
};
var acschDependencies = {
  BigNumberDependencies,
  typedDependencies,
  createAcsch
};
var addScalarDependencies = {
  typedDependencies,
  createAddScalar
};
var isIntegerDependencies = {
  typedDependencies,
  createIsInteger
};
var concatDependencies = {
  isIntegerDependencies,
  matrixDependencies,
  typedDependencies,
  createConcat
};
var addDependencies = {
  DenseMatrixDependencies,
  SparseMatrixDependencies,
  addScalarDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  createAdd
};
var notDependencies = {
  typedDependencies,
  createNot
};
var zerosDependencies = {
  BigNumberDependencies,
  matrixDependencies,
  typedDependencies,
  createZeros
};
var andDependencies = {
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  notDependencies,
  typedDependencies,
  zerosDependencies,
  createAnd
};
var applyDependencies = {
  isIntegerDependencies,
  typedDependencies,
  createApply
};
var applyTransformDependencies = {
  isIntegerDependencies,
  typedDependencies,
  createApplyTransform
};
var argDependencies = {
  typedDependencies,
  createArg
};
var ArrayNodeDependencies = {
  NodeDependencies,
  createArrayNode
};
var asecDependencies = {
  BigNumberDependencies,
  ComplexDependencies,
  typedDependencies,
  createAsec
};
var asechDependencies = {
  BigNumberDependencies,
  ComplexDependencies,
  typedDependencies,
  createAsech
};
var asinDependencies = {
  ComplexDependencies,
  typedDependencies,
  createAsin
};
var asinhDependencies = {
  typedDependencies,
  createAsinh
};
var AssignmentNodeDependencies = {
  matrixDependencies,
  NodeDependencies,
  subsetDependencies,
  createAssignmentNode
};
var atanDependencies = {
  typedDependencies,
  createAtan
};
var atan2Dependencies = {
  BigNumberDependencies,
  DenseMatrixDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  createAtan2
};
var atanhDependencies = {
  ComplexDependencies,
  typedDependencies,
  createAtanh
};
var bignumberDependencies = {
  BigNumberDependencies,
  typedDependencies,
  createBignumber
};
var fractionDependencies = {
  FractionDependencies,
  typedDependencies,
  createFraction
};
var numberDependencies = {
  typedDependencies,
  createNumber
};
var numericDependencies = {
  bignumberDependencies,
  fractionDependencies,
  numberDependencies,
  createNumeric
};
var divideScalarDependencies = {
  numericDependencies,
  typedDependencies,
  createDivideScalar
};
var equalDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  createEqual
};
var roundDependencies = {
  BigNumberDependencies,
  DenseMatrixDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  zerosDependencies,
  createRound
};
var ceilDependencies = {
  DenseMatrixDependencies,
  equalScalarDependencies,
  matrixDependencies,
  roundDependencies,
  typedDependencies,
  zerosDependencies,
  createCeil
};
var floorDependencies = {
  DenseMatrixDependencies,
  equalScalarDependencies,
  matrixDependencies,
  roundDependencies,
  typedDependencies,
  zerosDependencies,
  createFloor
};
var fixDependencies = {
  ComplexDependencies,
  DenseMatrixDependencies,
  ceilDependencies,
  equalScalarDependencies,
  floorDependencies,
  matrixDependencies,
  typedDependencies,
  zerosDependencies,
  createFix
};
var formatDependencies = {
  typedDependencies,
  createFormat
};
var isNumericDependencies = {
  typedDependencies,
  createIsNumeric
};
var multiplyScalarDependencies = {
  typedDependencies,
  createMultiplyScalar
};
var identityDependencies = {
  BigNumberDependencies,
  DenseMatrixDependencies,
  SparseMatrixDependencies,
  matrixDependencies,
  typedDependencies,
  createIdentity
};
var isZeroDependencies = {
  typedDependencies,
  createIsZero
};
var conjDependencies = {
  typedDependencies,
  createConj
};
var sizeDependencies = {
  matrixDependencies,
  typedDependencies,
  createSize
};
var dotDependencies = {
  addScalarDependencies,
  conjDependencies,
  multiplyScalarDependencies,
  sizeDependencies,
  typedDependencies,
  createDot
};
var multiplyDependencies = {
  addScalarDependencies,
  dotDependencies,
  equalScalarDependencies,
  matrixDependencies,
  multiplyScalarDependencies,
  typedDependencies,
  createMultiply
};
var unaryMinusDependencies = {
  typedDependencies,
  createUnaryMinus
};
var subtractDependencies = {
  DenseMatrixDependencies,
  addScalarDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  unaryMinusDependencies,
  createSubtract
};
var detDependencies = {
  divideScalarDependencies,
  isZeroDependencies,
  matrixDependencies,
  multiplyDependencies,
  subtractDependencies,
  typedDependencies,
  unaryMinusDependencies,
  createDet
};
var invDependencies = {
  absDependencies,
  addScalarDependencies,
  detDependencies,
  divideScalarDependencies,
  identityDependencies,
  matrixDependencies,
  multiplyDependencies,
  typedDependencies,
  unaryMinusDependencies,
  createInv
};
var powDependencies = {
  ComplexDependencies,
  fractionDependencies,
  identityDependencies,
  invDependencies,
  matrixDependencies,
  multiplyDependencies,
  numberDependencies,
  typedDependencies,
  createPow
};
var UnitDependencies = {
  BigNumberDependencies,
  ComplexDependencies,
  FractionDependencies,
  absDependencies,
  addScalarDependencies,
  divideScalarDependencies,
  equalDependencies,
  fixDependencies,
  formatDependencies,
  isNumericDependencies,
  multiplyScalarDependencies,
  numberDependencies,
  powDependencies,
  roundDependencies,
  subtractDependencies,
  createUnitClass
};
var atomicMassDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createAtomicMass
};
var avogadroDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createAvogadro
};
var isNegativeDependencies = {
  typedDependencies,
  createIsNegative
};
var combinationsDependencies = {
  typedDependencies,
  createCombinations
};
var gammaDependencies = {
  BigNumberDependencies,
  ComplexDependencies,
  multiplyScalarDependencies,
  powDependencies,
  typedDependencies,
  createGamma
};
var factorialDependencies = {
  gammaDependencies,
  typedDependencies,
  createFactorial
};
var largerDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  matrixDependencies,
  typedDependencies,
  createLarger
};
var stirlingS2Dependencies = {
  bignumberDependencies,
  addScalarDependencies,
  combinationsDependencies,
  divideScalarDependencies,
  factorialDependencies,
  isIntegerDependencies,
  isNegativeDependencies,
  largerDependencies,
  multiplyScalarDependencies,
  numberDependencies,
  powDependencies,
  subtractDependencies,
  typedDependencies,
  createStirlingS2
};
var bellNumbersDependencies = {
  addScalarDependencies,
  isIntegerDependencies,
  isNegativeDependencies,
  stirlingS2Dependencies,
  typedDependencies,
  createBellNumbers
};
var binDependencies = {
  formatDependencies,
  typedDependencies,
  createBin
};
var bitAndDependencies = {
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  createBitAnd
};
var bitNotDependencies = {
  typedDependencies,
  createBitNot
};
var bitOrDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  createBitOr
};
var bitXorDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  matrixDependencies,
  typedDependencies,
  createBitXor
};
var ResultSetDependencies = {
  createResultSet
};
var BlockNodeDependencies = {
  NodeDependencies,
  ResultSetDependencies,
  createBlockNode
};
var bohrMagnetonDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createBohrMagneton
};
var bohrRadiusDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createBohrRadius
};
var boltzmannDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createBoltzmann
};
var booleanDependencies = {
  typedDependencies,
  createBoolean
};
var catalanDependencies = {
  addScalarDependencies,
  combinationsDependencies,
  divideScalarDependencies,
  isIntegerDependencies,
  isNegativeDependencies,
  multiplyScalarDependencies,
  typedDependencies,
  createCatalan
};
var cbrtDependencies = {
  BigNumberDependencies,
  ComplexDependencies,
  FractionDependencies,
  isNegativeDependencies,
  matrixDependencies,
  typedDependencies,
  unaryMinusDependencies,
  createCbrt
};
var ChainDependencies = {
  typedDependencies,
  createChainClass
};
var chainDependencies = {
  ChainDependencies,
  typedDependencies,
  createChain
};
var classicalElectronRadiusDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createClassicalElectronRadius
};
var cloneDependencies = {
  typedDependencies,
  createClone
};
var smallerDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  matrixDependencies,
  typedDependencies,
  createSmaller
};
var ImmutableDenseMatrixDependencies = {
  DenseMatrixDependencies,
  smallerDependencies,
  createImmutableDenseMatrixClass
};
var IndexDependencies = {
  ImmutableDenseMatrixDependencies,
  createIndexClass
};
var largerEqDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  matrixDependencies,
  typedDependencies,
  createLargerEq
};
var smallerEqDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  matrixDependencies,
  typedDependencies,
  createSmallerEq
};
var rangeDependencies = {
  bignumberDependencies,
  matrixDependencies,
  largerDependencies,
  largerEqDependencies,
  smallerDependencies,
  smallerEqDependencies,
  typedDependencies,
  createRange
};
var columnDependencies = {
  IndexDependencies,
  matrixDependencies,
  rangeDependencies,
  typedDependencies,
  createColumn
};
var columnTransformDependencies = {
  IndexDependencies,
  matrixDependencies,
  rangeDependencies,
  typedDependencies,
  createColumnTransform
};
var combinationsWithRepDependencies = {
  typedDependencies,
  createCombinationsWithRep
};
var compareDependencies = {
  BigNumberDependencies,
  DenseMatrixDependencies,
  FractionDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  createCompare
};
var compareNaturalDependencies = {
  compareDependencies,
  typedDependencies,
  createCompareNatural
};
var compareTextDependencies = {
  concatDependencies,
  matrixDependencies,
  typedDependencies,
  createCompareText
};
var ConditionalNodeDependencies = {
  NodeDependencies,
  createConditionalNode
};
var ConstantNodeDependencies = {
  NodeDependencies,
  createConstantNode
};
var FunctionAssignmentNodeDependencies = {
  NodeDependencies,
  typedDependencies,
  createFunctionAssignmentNode
};
var SymbolNodeDependencies = {
  UnitDependencies,
  NodeDependencies,
  createSymbolNode
};
var FunctionNodeDependencies = {
  NodeDependencies,
  SymbolNodeDependencies,
  createFunctionNode
};
var IndexNodeDependencies = {
  NodeDependencies,
  sizeDependencies,
  createIndexNode
};
var ObjectNodeDependencies = {
  NodeDependencies,
  createObjectNode
};
var OperatorNodeDependencies = {
  NodeDependencies,
  createOperatorNode
};
var ParenthesisNodeDependencies = {
  NodeDependencies,
  createParenthesisNode
};
var RangeNodeDependencies = {
  NodeDependencies,
  createRangeNode
};
var RelationalNodeDependencies = {
  NodeDependencies,
  createRelationalNode
};
var parseDependencies = {
  AccessorNodeDependencies,
  ArrayNodeDependencies,
  AssignmentNodeDependencies,
  BlockNodeDependencies,
  ConditionalNodeDependencies,
  ConstantNodeDependencies,
  FunctionAssignmentNodeDependencies,
  FunctionNodeDependencies,
  IndexNodeDependencies,
  ObjectNodeDependencies,
  OperatorNodeDependencies,
  ParenthesisNodeDependencies,
  RangeNodeDependencies,
  RelationalNodeDependencies,
  SymbolNodeDependencies,
  numericDependencies,
  typedDependencies,
  createParse
};
var compileDependencies = {
  parseDependencies,
  typedDependencies,
  createCompile
};
var complexDependencies = {
  ComplexDependencies,
  typedDependencies,
  createComplex
};
var isPositiveDependencies = {
  typedDependencies,
  createIsPositive
};
var compositionDependencies = {
  addScalarDependencies,
  combinationsDependencies,
  isIntegerDependencies,
  isNegativeDependencies,
  isPositiveDependencies,
  largerDependencies,
  typedDependencies,
  createComposition
};
var concatTransformDependencies = {
  isIntegerDependencies,
  matrixDependencies,
  typedDependencies,
  createConcatTransform
};
var conductanceQuantumDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createConductanceQuantum
};
var cosDependencies = {
  typedDependencies,
  createCos
};
var coshDependencies = {
  typedDependencies,
  createCosh
};
var cotDependencies = {
  BigNumberDependencies,
  typedDependencies,
  createCot
};
var cothDependencies = {
  BigNumberDependencies,
  typedDependencies,
  createCoth
};
var coulombDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createCoulomb
};
var prodDependencies = {
  multiplyScalarDependencies,
  numericDependencies,
  typedDependencies,
  createProd
};
var countDependencies = {
  prodDependencies,
  sizeDependencies,
  typedDependencies,
  createCount
};
var createUnitDependencies = {
  UnitDependencies,
  typedDependencies,
  createCreateUnit
};
var crossDependencies = {
  matrixDependencies,
  multiplyDependencies,
  subtractDependencies,
  typedDependencies,
  createCross
};
var cscDependencies = {
  BigNumberDependencies,
  typedDependencies,
  createCsc
};
var cschDependencies = {
  BigNumberDependencies,
  typedDependencies,
  createCsch
};
var transposeDependencies = {
  matrixDependencies,
  typedDependencies,
  createTranspose
};
var ctransposeDependencies = {
  conjDependencies,
  transposeDependencies,
  typedDependencies,
  createCtranspose
};
var cubeDependencies = {
  typedDependencies,
  createCube
};
var unaryPlusDependencies = {
  BigNumberDependencies,
  typedDependencies,
  createUnaryPlus
};
var cumsumDependencies = {
  addDependencies,
  typedDependencies,
  unaryPlusDependencies,
  createCumSum
};
var cumsumTransformDependencies = {
  addDependencies,
  typedDependencies,
  unaryPlusDependencies,
  createCumSumTransform
};
var deepEqualDependencies = {
  equalDependencies,
  typedDependencies,
  createDeepEqual
};
var divideDependencies = {
  divideScalarDependencies,
  equalScalarDependencies,
  invDependencies,
  matrixDependencies,
  multiplyDependencies,
  typedDependencies,
  createDivide
};
var resolveDependencies = {
  ConstantNodeDependencies,
  FunctionNodeDependencies,
  OperatorNodeDependencies,
  ParenthesisNodeDependencies,
  parseDependencies,
  typedDependencies,
  createResolve
};
var simplifyConstantDependencies = {
  bignumberDependencies,
  fractionDependencies,
  AccessorNodeDependencies,
  ArrayNodeDependencies,
  ConstantNodeDependencies,
  FunctionNodeDependencies,
  IndexNodeDependencies,
  ObjectNodeDependencies,
  OperatorNodeDependencies,
  SymbolNodeDependencies,
  matrixDependencies,
  typedDependencies,
  createSimplifyConstant
};
var simplifyCoreDependencies = {
  AccessorNodeDependencies,
  ArrayNodeDependencies,
  ConstantNodeDependencies,
  FunctionNodeDependencies,
  IndexNodeDependencies,
  ObjectNodeDependencies,
  OperatorNodeDependencies,
  ParenthesisNodeDependencies,
  SymbolNodeDependencies,
  addDependencies,
  divideDependencies,
  equalDependencies,
  isZeroDependencies,
  multiplyDependencies,
  parseDependencies,
  powDependencies,
  subtractDependencies,
  typedDependencies,
  createSimplifyCore
};
var simplifyDependencies = {
  bignumberDependencies,
  fractionDependencies,
  AccessorNodeDependencies,
  ArrayNodeDependencies,
  ConstantNodeDependencies,
  FunctionNodeDependencies,
  IndexNodeDependencies,
  ObjectNodeDependencies,
  OperatorNodeDependencies,
  ParenthesisNodeDependencies,
  SymbolNodeDependencies,
  addDependencies,
  divideDependencies,
  equalDependencies,
  isZeroDependencies,
  matrixDependencies,
  multiplyDependencies,
  parseDependencies,
  powDependencies,
  resolveDependencies,
  simplifyConstantDependencies,
  simplifyCoreDependencies,
  subtractDependencies,
  typedDependencies,
  createSimplify
};
var derivativeDependencies = {
  ConstantNodeDependencies,
  FunctionNodeDependencies,
  OperatorNodeDependencies,
  ParenthesisNodeDependencies,
  SymbolNodeDependencies,
  equalDependencies,
  isZeroDependencies,
  numericDependencies,
  parseDependencies,
  simplifyDependencies,
  typedDependencies,
  createDerivative
};
var deuteronMassDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createDeuteronMass
};
var diagDependencies = {
  DenseMatrixDependencies,
  SparseMatrixDependencies,
  matrixDependencies,
  typedDependencies,
  createDiag
};
var diffDependencies = {
  matrixDependencies,
  numberDependencies,
  subtractDependencies,
  typedDependencies,
  createDiff
};
var diffTransformDependencies = {
  bignumberDependencies,
  matrixDependencies,
  numberDependencies,
  subtractDependencies,
  typedDependencies,
  createDiffTransform
};
var sqrtDependencies = {
  ComplexDependencies,
  typedDependencies,
  createSqrt
};
var distanceDependencies = {
  absDependencies,
  addScalarDependencies,
  divideScalarDependencies,
  multiplyScalarDependencies,
  sqrtDependencies,
  subtractDependencies,
  typedDependencies,
  unaryMinusDependencies,
  createDistance
};
var dotDivideDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  divideScalarDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  createDotDivide
};
var dotMultiplyDependencies = {
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  multiplyScalarDependencies,
  typedDependencies,
  createDotMultiply
};
var dotPowDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  powDependencies,
  typedDependencies,
  createDotPow
};
var eDependencies = {
  BigNumberDependencies,
  createE
};
var efimovFactorDependencies = {
  BigNumberDependencies,
  createEfimovFactor
};
var flattenDependencies = {
  matrixDependencies,
  typedDependencies,
  createFlatten
};
var imDependencies = {
  typedDependencies,
  createIm
};
var matrixFromColumnsDependencies = {
  flattenDependencies,
  matrixDependencies,
  sizeDependencies,
  typedDependencies,
  createMatrixFromColumns
};
var signDependencies = {
  BigNumberDependencies,
  FractionDependencies,
  complexDependencies,
  typedDependencies,
  createSign
};
var qrDependencies = {
  addScalarDependencies,
  complexDependencies,
  conjDependencies,
  divideScalarDependencies,
  equalDependencies,
  identityDependencies,
  isZeroDependencies,
  matrixDependencies,
  multiplyScalarDependencies,
  signDependencies,
  sqrtDependencies,
  subtractDependencies,
  typedDependencies,
  unaryMinusDependencies,
  zerosDependencies,
  createQr
};
var reDependencies = {
  typedDependencies,
  createRe
};
var sinDependencies = {
  typedDependencies,
  createSin
};
var usolveDependencies = {
  DenseMatrixDependencies,
  divideScalarDependencies,
  equalScalarDependencies,
  matrixDependencies,
  multiplyScalarDependencies,
  subtractDependencies,
  typedDependencies,
  createUsolve
};
var usolveAllDependencies = {
  DenseMatrixDependencies,
  divideScalarDependencies,
  equalScalarDependencies,
  matrixDependencies,
  multiplyScalarDependencies,
  subtractDependencies,
  typedDependencies,
  createUsolveAll
};
var eigsDependencies = {
  absDependencies,
  addDependencies,
  addScalarDependencies,
  atanDependencies,
  bignumberDependencies,
  columnDependencies,
  complexDependencies,
  cosDependencies,
  diagDependencies,
  divideScalarDependencies,
  dotDependencies,
  equalDependencies,
  flattenDependencies,
  imDependencies,
  invDependencies,
  largerDependencies,
  matrixDependencies,
  matrixFromColumnsDependencies,
  multiplyDependencies,
  multiplyScalarDependencies,
  numberDependencies,
  qrDependencies,
  reDependencies,
  sinDependencies,
  smallerDependencies,
  sqrtDependencies,
  subtractDependencies,
  typedDependencies,
  usolveDependencies,
  usolveAllDependencies,
  createEigs
};
var electricConstantDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createElectricConstant
};
var electronMassDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createElectronMass
};
var elementaryChargeDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createElementaryCharge
};
var equalTextDependencies = {
  compareTextDependencies,
  isZeroDependencies,
  typedDependencies,
  createEqualText
};
var erfDependencies = {
  typedDependencies,
  createErf
};
var evaluateDependencies = {
  parseDependencies,
  typedDependencies,
  createEvaluate
};
var expDependencies = {
  typedDependencies,
  createExp
};
var expmDependencies = {
  absDependencies,
  addDependencies,
  identityDependencies,
  invDependencies,
  multiplyDependencies,
  typedDependencies,
  createExpm
};
var expm1Dependencies = {
  ComplexDependencies,
  typedDependencies,
  createExpm1
};
var falseDependencies = {
  createFalse
};
var faradayDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createFaraday
};
var fermiCouplingDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createFermiCoupling
};
var iDependencies = {
  ComplexDependencies,
  createI
};
var log2Dependencies = {
  ComplexDependencies,
  typedDependencies,
  createLog2
};
var tauDependencies = {
  BigNumberDependencies,
  createTau
};
var fftDependencies = {
  addScalarDependencies,
  ceilDependencies,
  conjDependencies,
  divideScalarDependencies,
  dotDivideDependencies,
  expDependencies,
  iDependencies,
  log2Dependencies,
  matrixDependencies,
  multiplyScalarDependencies,
  powDependencies,
  tauDependencies,
  typedDependencies,
  createFft
};
var FibonacciHeapDependencies = {
  largerDependencies,
  smallerDependencies,
  createFibonacciHeapClass
};
var filterDependencies = {
  typedDependencies,
  createFilter
};
var filterTransformDependencies = {
  typedDependencies,
  createFilterTransform
};
var fineStructureDependencies = {
  BigNumberDependencies,
  createFineStructure
};
var firstRadiationDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createFirstRadiation
};
var forEachDependencies = {
  typedDependencies,
  createForEach
};
var forEachTransformDependencies = {
  typedDependencies,
  createForEachTransform
};
var gasConstantDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createGasConstant
};
var gcdDependencies = {
  BigNumberDependencies,
  DenseMatrixDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  createGcd
};
var getMatrixDataTypeDependencies = {
  typedDependencies,
  createGetMatrixDataType
};
var gravitationConstantDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createGravitationConstant
};
var gravityDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createGravity
};
var hartreeEnergyDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createHartreeEnergy
};
var hasNumericValueDependencies = {
  isNumericDependencies,
  typedDependencies,
  createHasNumericValue
};
var HelpDependencies = {
  parseDependencies,
  createHelpClass
};
var helpDependencies = {
  HelpDependencies,
  typedDependencies,
  createHelp
};
var hexDependencies = {
  formatDependencies,
  typedDependencies,
  createHex
};
var hypotDependencies = {
  absDependencies,
  addScalarDependencies,
  divideScalarDependencies,
  isPositiveDependencies,
  multiplyScalarDependencies,
  smallerDependencies,
  sqrtDependencies,
  typedDependencies,
  createHypot
};
var ifftDependencies = {
  conjDependencies,
  dotDivideDependencies,
  fftDependencies,
  typedDependencies,
  createIfft
};
var indexDependencies = {
  IndexDependencies,
  typedDependencies,
  createIndex
};
var indexTransformDependencies = {
  IndexDependencies,
  createIndexTransform
};
var InfinityDependencies = {
  BigNumberDependencies,
  createInfinity
};
var intersectDependencies = {
  absDependencies,
  addDependencies,
  addScalarDependencies,
  divideScalarDependencies,
  equalScalarDependencies,
  flattenDependencies,
  isNumericDependencies,
  isZeroDependencies,
  matrixDependencies,
  multiplyDependencies,
  multiplyScalarDependencies,
  smallerDependencies,
  subtractDependencies,
  typedDependencies,
  createIntersect
};
var inverseConductanceQuantumDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createInverseConductanceQuantum
};
var modDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  createMod
};
var xgcdDependencies = {
  BigNumberDependencies,
  matrixDependencies,
  typedDependencies,
  createXgcd
};
var invmodDependencies = {
  BigNumberDependencies,
  addDependencies,
  equalDependencies,
  isIntegerDependencies,
  modDependencies,
  smallerDependencies,
  typedDependencies,
  xgcdDependencies,
  createInvmod
};
var isNaNDependencies = {
  typedDependencies,
  createIsNaN
};
var isPrimeDependencies = {
  typedDependencies,
  createIsPrime
};
var logDependencies = {
  ComplexDependencies,
  divideScalarDependencies,
  typedDependencies,
  createLog
};
var mapDependencies = {
  typedDependencies,
  createMap
};
var sumDependencies = {
  addDependencies,
  numericDependencies,
  typedDependencies,
  createSum
};
var kldivergenceDependencies = {
  divideDependencies,
  dotDivideDependencies,
  isNumericDependencies,
  logDependencies,
  mapDependencies,
  matrixDependencies,
  multiplyDependencies,
  sumDependencies,
  typedDependencies,
  createKldivergence
};
var klitzingDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createKlitzing
};
var kronDependencies = {
  matrixDependencies,
  multiplyScalarDependencies,
  typedDependencies,
  createKron
};
var LN10Dependencies = {
  BigNumberDependencies,
  createLN10
};
var LN2Dependencies = {
  BigNumberDependencies,
  createLN2
};
var LOG10EDependencies = {
  BigNumberDependencies,
  createLOG10E
};
var LOG2EDependencies = {
  BigNumberDependencies,
  createLOG2E
};
var lcmDependencies = {
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  createLcm
};
var leafCountDependencies = {
  parseDependencies,
  typedDependencies,
  createLeafCount
};
var leftShiftDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  zerosDependencies,
  createLeftShift
};
var lgammaDependencies = {
  ComplexDependencies,
  typedDependencies,
  createLgamma
};
var log10Dependencies = {
  ComplexDependencies,
  typedDependencies,
  createLog10
};
var log1pDependencies = {
  ComplexDependencies,
  divideScalarDependencies,
  logDependencies,
  typedDependencies,
  createLog1p
};
var loschmidtDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createLoschmidt
};
var lsolveDependencies = {
  DenseMatrixDependencies,
  divideScalarDependencies,
  equalScalarDependencies,
  matrixDependencies,
  multiplyScalarDependencies,
  subtractDependencies,
  typedDependencies,
  createLsolve
};
var lsolveAllDependencies = {
  DenseMatrixDependencies,
  divideScalarDependencies,
  equalScalarDependencies,
  matrixDependencies,
  multiplyScalarDependencies,
  subtractDependencies,
  typedDependencies,
  createLsolveAll
};
var SpaDependencies = {
  FibonacciHeapDependencies,
  addScalarDependencies,
  equalScalarDependencies,
  createSpaClass
};
var lupDependencies = {
  DenseMatrixDependencies,
  SpaDependencies,
  SparseMatrixDependencies,
  absDependencies,
  addScalarDependencies,
  divideScalarDependencies,
  equalScalarDependencies,
  largerDependencies,
  matrixDependencies,
  multiplyScalarDependencies,
  subtractDependencies,
  typedDependencies,
  unaryMinusDependencies,
  createLup
};
var sluDependencies = {
  SparseMatrixDependencies,
  absDependencies,
  addDependencies,
  divideScalarDependencies,
  largerDependencies,
  largerEqDependencies,
  multiplyDependencies,
  subtractDependencies,
  transposeDependencies,
  typedDependencies,
  createSlu
};
var lusolveDependencies = {
  DenseMatrixDependencies,
  lsolveDependencies,
  lupDependencies,
  matrixDependencies,
  sluDependencies,
  typedDependencies,
  usolveDependencies,
  createLusolve
};
var normDependencies = {
  absDependencies,
  addDependencies,
  conjDependencies,
  ctransposeDependencies,
  eigsDependencies,
  equalScalarDependencies,
  largerDependencies,
  matrixDependencies,
  multiplyDependencies,
  powDependencies,
  smallerDependencies,
  sqrtDependencies,
  typedDependencies,
  createNorm
};
var schurDependencies = {
  identityDependencies,
  matrixDependencies,
  multiplyDependencies,
  normDependencies,
  qrDependencies,
  subtractDependencies,
  typedDependencies,
  createSchur
};
var sylvesterDependencies = {
  absDependencies,
  addDependencies,
  concatDependencies,
  identityDependencies,
  indexDependencies,
  lusolveDependencies,
  matrixDependencies,
  matrixFromColumnsDependencies,
  multiplyDependencies,
  rangeDependencies,
  schurDependencies,
  subsetDependencies,
  subtractDependencies,
  transposeDependencies,
  typedDependencies,
  createSylvester
};
var lyapDependencies = {
  matrixDependencies,
  multiplyDependencies,
  sylvesterDependencies,
  transposeDependencies,
  typedDependencies,
  createLyap
};
var partitionSelectDependencies = {
  compareDependencies,
  isNaNDependencies,
  isNumericDependencies,
  typedDependencies,
  createPartitionSelect
};
var medianDependencies = {
  addDependencies,
  compareDependencies,
  divideDependencies,
  partitionSelectDependencies,
  typedDependencies,
  createMedian
};
var madDependencies = {
  absDependencies,
  mapDependencies,
  medianDependencies,
  subtractDependencies,
  typedDependencies,
  createMad
};
var magneticConstantDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createMagneticConstant
};
var magneticFluxQuantumDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createMagneticFluxQuantum
};
var mapTransformDependencies = {
  typedDependencies,
  createMapTransform
};
var matrixFromFunctionDependencies = {
  isZeroDependencies,
  matrixDependencies,
  typedDependencies,
  createMatrixFromFunction
};
var matrixFromRowsDependencies = {
  flattenDependencies,
  matrixDependencies,
  sizeDependencies,
  typedDependencies,
  createMatrixFromRows
};
var maxDependencies = {
  largerDependencies,
  numericDependencies,
  typedDependencies,
  createMax
};
var maxTransformDependencies = {
  largerDependencies,
  numericDependencies,
  typedDependencies,
  createMaxTransform
};
var meanDependencies = {
  addDependencies,
  divideDependencies,
  typedDependencies,
  createMean
};
var meanTransformDependencies = {
  addDependencies,
  divideDependencies,
  typedDependencies,
  createMeanTransform
};
var minDependencies = {
  numericDependencies,
  smallerDependencies,
  typedDependencies,
  createMin
};
var minTransformDependencies = {
  numericDependencies,
  smallerDependencies,
  typedDependencies,
  createMinTransform
};
var modeDependencies = {
  isNaNDependencies,
  isNumericDependencies,
  typedDependencies,
  createMode
};
var molarMassDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createMolarMass
};
var molarMassC12Dependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createMolarMassC12
};
var molarPlanckConstantDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createMolarPlanckConstant
};
var molarVolumeDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createMolarVolume
};
var multinomialDependencies = {
  addDependencies,
  divideDependencies,
  factorialDependencies,
  isIntegerDependencies,
  isPositiveDependencies,
  multiplyDependencies,
  typedDependencies,
  createMultinomial
};
var NaNDependencies = {
  BigNumberDependencies,
  createNaN
};
var neutronMassDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createNeutronMass
};
var nthRootDependencies = {
  BigNumberDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  createNthRoot
};
var nthRootsDependencies = {
  ComplexDependencies,
  divideScalarDependencies,
  typedDependencies,
  createNthRoots
};
var nuclearMagnetonDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createNuclearMagneton
};
var nullDependencies = {
  createNull
};
var octDependencies = {
  formatDependencies,
  typedDependencies,
  createOct
};
var onesDependencies = {
  BigNumberDependencies,
  matrixDependencies,
  typedDependencies,
  createOnes
};
var orDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  createOr
};
var ParserDependencies = {
  evaluateDependencies,
  createParserClass
};
var parserDependencies = {
  ParserDependencies,
  typedDependencies,
  createParser
};
var permutationsDependencies = {
  factorialDependencies,
  typedDependencies,
  createPermutations
};
var phiDependencies = {
  BigNumberDependencies,
  createPhi
};
var piDependencies = {
  BigNumberDependencies,
  createPi
};
var pickRandomDependencies = {
  typedDependencies,
  createPickRandom
};
var pinvDependencies = {
  ComplexDependencies,
  addDependencies,
  ctransposeDependencies,
  deepEqualDependencies,
  divideScalarDependencies,
  dotDependencies,
  dotDivideDependencies,
  equalDependencies,
  invDependencies,
  matrixDependencies,
  multiplyDependencies,
  typedDependencies,
  createPinv
};
var planckChargeDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createPlanckCharge
};
var planckConstantDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createPlanckConstant
};
var planckLengthDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createPlanckLength
};
var planckMassDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createPlanckMass
};
var planckTemperatureDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createPlanckTemperature
};
var planckTimeDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createPlanckTime
};
var typeOfDependencies = {
  typedDependencies,
  createTypeOf
};
var polynomialRootDependencies = {
  addDependencies,
  cbrtDependencies,
  divideDependencies,
  equalScalarDependencies,
  imDependencies,
  isZeroDependencies,
  multiplyDependencies,
  reDependencies,
  sqrtDependencies,
  subtractDependencies,
  typeOfDependencies,
  typedDependencies,
  unaryMinusDependencies,
  createPolynomialRoot
};
var printDependencies = {
  typedDependencies,
  createPrint
};
var protonMassDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createProtonMass
};
var quantileSeqDependencies = {
  addDependencies,
  compareDependencies,
  multiplyDependencies,
  partitionSelectDependencies,
  typedDependencies,
  createQuantileSeq
};
var quantumOfCirculationDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createQuantumOfCirculation
};
var randomDependencies = {
  typedDependencies,
  createRandom
};
var randomIntDependencies = {
  typedDependencies,
  createRandomInt
};
var RangeDependencies = {
  createRangeClass
};
var rangeTransformDependencies = {
  bignumberDependencies,
  matrixDependencies,
  largerDependencies,
  largerEqDependencies,
  smallerDependencies,
  smallerEqDependencies,
  typedDependencies,
  createRangeTransform
};
var rationalizeDependencies = {
  bignumberDependencies,
  fractionDependencies,
  AccessorNodeDependencies,
  ArrayNodeDependencies,
  ConstantNodeDependencies,
  FunctionNodeDependencies,
  IndexNodeDependencies,
  ObjectNodeDependencies,
  OperatorNodeDependencies,
  ParenthesisNodeDependencies,
  SymbolNodeDependencies,
  addDependencies,
  divideDependencies,
  equalDependencies,
  isZeroDependencies,
  matrixDependencies,
  multiplyDependencies,
  parseDependencies,
  powDependencies,
  simplifyDependencies,
  simplifyConstantDependencies,
  simplifyCoreDependencies,
  subtractDependencies,
  typedDependencies,
  createRationalize
};
var reducedPlanckConstantDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createReducedPlanckConstant
};
var replacerDependencies = {
  createReplacer
};
var reshapeDependencies = {
  isIntegerDependencies,
  matrixDependencies,
  typedDependencies,
  createReshape
};
var resizeDependencies = {
  matrixDependencies,
  createResize
};
var reviverDependencies = {
  createReviver
};
var rightArithShiftDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  zerosDependencies,
  createRightArithShift
};
var rightLogShiftDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  zerosDependencies,
  createRightLogShift
};
var rotationMatrixDependencies = {
  BigNumberDependencies,
  DenseMatrixDependencies,
  SparseMatrixDependencies,
  addScalarDependencies,
  cosDependencies,
  matrixDependencies,
  multiplyScalarDependencies,
  normDependencies,
  sinDependencies,
  typedDependencies,
  unaryMinusDependencies,
  createRotationMatrix
};
var rotateDependencies = {
  multiplyDependencies,
  rotationMatrixDependencies,
  typedDependencies,
  createRotate
};
var rowDependencies = {
  IndexDependencies,
  matrixDependencies,
  rangeDependencies,
  typedDependencies,
  createRow
};
var rowTransformDependencies = {
  IndexDependencies,
  matrixDependencies,
  rangeDependencies,
  typedDependencies,
  createRowTransform
};
var rydbergDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createRydberg
};
var SQRT1_2Dependencies = {
  BigNumberDependencies,
  createSQRT1_2
};
var SQRT2Dependencies = {
  BigNumberDependencies,
  createSQRT2
};
var sackurTetrodeDependencies = {
  BigNumberDependencies,
  createSackurTetrode
};
var secDependencies = {
  BigNumberDependencies,
  typedDependencies,
  createSec
};
var sechDependencies = {
  BigNumberDependencies,
  typedDependencies,
  createSech
};
var secondRadiationDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createSecondRadiation
};
var setCartesianDependencies = {
  DenseMatrixDependencies,
  IndexDependencies,
  compareNaturalDependencies,
  sizeDependencies,
  subsetDependencies,
  typedDependencies,
  createSetCartesian
};
var setDifferenceDependencies = {
  DenseMatrixDependencies,
  IndexDependencies,
  compareNaturalDependencies,
  sizeDependencies,
  subsetDependencies,
  typedDependencies,
  createSetDifference
};
var setDistinctDependencies = {
  DenseMatrixDependencies,
  IndexDependencies,
  compareNaturalDependencies,
  sizeDependencies,
  subsetDependencies,
  typedDependencies,
  createSetDistinct
};
var setIntersectDependencies = {
  DenseMatrixDependencies,
  IndexDependencies,
  compareNaturalDependencies,
  sizeDependencies,
  subsetDependencies,
  typedDependencies,
  createSetIntersect
};
var setIsSubsetDependencies = {
  IndexDependencies,
  compareNaturalDependencies,
  sizeDependencies,
  subsetDependencies,
  typedDependencies,
  createSetIsSubset
};
var setMultiplicityDependencies = {
  IndexDependencies,
  compareNaturalDependencies,
  sizeDependencies,
  subsetDependencies,
  typedDependencies,
  createSetMultiplicity
};
var setPowersetDependencies = {
  IndexDependencies,
  compareNaturalDependencies,
  sizeDependencies,
  subsetDependencies,
  typedDependencies,
  createSetPowerset
};
var setSizeDependencies = {
  compareNaturalDependencies,
  typedDependencies,
  createSetSize
};
var setSymDifferenceDependencies = {
  IndexDependencies,
  concatDependencies,
  setDifferenceDependencies,
  sizeDependencies,
  subsetDependencies,
  typedDependencies,
  createSetSymDifference
};
var setUnionDependencies = {
  IndexDependencies,
  concatDependencies,
  setIntersectDependencies,
  setSymDifferenceDependencies,
  sizeDependencies,
  subsetDependencies,
  typedDependencies,
  createSetUnion
};
var sinhDependencies = {
  typedDependencies,
  createSinh
};
var sortDependencies = {
  compareDependencies,
  compareNaturalDependencies,
  matrixDependencies,
  typedDependencies,
  createSort
};
var sparseDependencies = {
  SparseMatrixDependencies,
  typedDependencies,
  createSparse
};
var speedOfLightDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createSpeedOfLight
};
var splitUnitDependencies = {
  typedDependencies,
  createSplitUnit
};
var sqrtmDependencies = {
  absDependencies,
  addDependencies,
  identityDependencies,
  invDependencies,
  mapDependencies,
  maxDependencies,
  multiplyDependencies,
  sizeDependencies,
  sqrtDependencies,
  subtractDependencies,
  typedDependencies,
  createSqrtm
};
var squareDependencies = {
  typedDependencies,
  createSquare
};
var squeezeDependencies = {
  matrixDependencies,
  typedDependencies,
  createSqueeze
};
var varianceDependencies = {
  addDependencies,
  applyDependencies,
  divideDependencies,
  isNaNDependencies,
  multiplyDependencies,
  subtractDependencies,
  typedDependencies,
  createVariance
};
var stdDependencies = {
  mapDependencies,
  sqrtDependencies,
  typedDependencies,
  varianceDependencies,
  createStd
};
var stdTransformDependencies = {
  mapDependencies,
  sqrtDependencies,
  typedDependencies,
  varianceDependencies,
  createStdTransform
};
var stefanBoltzmannDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createStefanBoltzmann
};
var stringDependencies = {
  typedDependencies,
  createString
};
var subsetTransformDependencies = {
  matrixDependencies,
  typedDependencies,
  createSubsetTransform
};
var sumTransformDependencies = {
  addDependencies,
  numericDependencies,
  typedDependencies,
  createSumTransform
};
var symbolicEqualDependencies = {
  OperatorNodeDependencies,
  parseDependencies,
  simplifyDependencies,
  typedDependencies,
  createSymbolicEqual
};
var tanDependencies = {
  typedDependencies,
  createTan
};
var tanhDependencies = {
  typedDependencies,
  createTanh
};
var thomsonCrossSectionDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createThomsonCrossSection
};
var toDependencies = {
  concatDependencies,
  matrixDependencies,
  typedDependencies,
  createTo
};
var traceDependencies = {
  addDependencies,
  matrixDependencies,
  typedDependencies,
  createTrace
};
var trueDependencies = {
  createTrue
};
var unequalDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  equalScalarDependencies,
  matrixDependencies,
  typedDependencies,
  createUnequal
};
var unitDependencies = {
  UnitDependencies,
  typedDependencies,
  createUnitFunction
};
var EDependencies = {
  eDependencies,
  createUppercaseE
};
var PIDependencies = {
  piDependencies,
  createUppercasePi
};
var vacuumImpedanceDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createVacuumImpedance
};
var varianceTransformDependencies = {
  addDependencies,
  applyDependencies,
  divideDependencies,
  isNaNDependencies,
  multiplyDependencies,
  subtractDependencies,
  typedDependencies,
  createVarianceTransform
};
var versionDependencies = {
  createVersion
};
var weakMixingAngleDependencies = {
  BigNumberDependencies,
  createWeakMixingAngle
};
var wienDisplacementDependencies = {
  BigNumberDependencies,
  UnitDependencies,
  createWienDisplacement
};
var xorDependencies = {
  DenseMatrixDependencies,
  concatDependencies,
  matrixDependencies,
  typedDependencies,
  createXor
};
var all = allFactories;
export {AccessorNode, AccessorNodeDependencies, ArrayNode, ArrayNodeDependencies, AssignmentNode, AssignmentNodeDependencies, BigNumber, BigNumberDependencies, BlockNode, BlockNodeDependencies, Chain, ChainDependencies, Complex, ComplexDependencies, ConditionalNode, ConditionalNodeDependencies, ConstantNode, ConstantNodeDependencies, DenseMatrix, DenseMatrixDependencies, EDependencies, FibonacciHeap, FibonacciHeapDependencies, Fraction, FractionDependencies, FunctionAssignmentNode, FunctionAssignmentNodeDependencies, FunctionNode, FunctionNodeDependencies, Help, HelpDependencies, ImmutableDenseMatrix, ImmutableDenseMatrixDependencies, Index, IndexDependencies, IndexNode, IndexNodeDependencies, InfinityDependencies, LN10, LN10Dependencies, LN2, LN2Dependencies, LOG10E, LOG10EDependencies, LOG2E, LOG2EDependencies, Matrix, MatrixDependencies, NaNDependencies, Node, NodeDependencies, ObjectNode, ObjectNodeDependencies, OperatorNode, OperatorNodeDependencies, PIDependencies, ParenthesisNode, ParenthesisNodeDependencies, Parser, ParserDependencies, Range, RangeDependencies, RangeNode, RangeNodeDependencies, RelationalNode, RelationalNodeDependencies, ResultSet, ResultSetDependencies, SQRT1_2, SQRT1_2Dependencies, SQRT2, SQRT2Dependencies, Spa, SpaDependencies, SparseMatrix, SparseMatrixDependencies, SymbolNode, SymbolNodeDependencies, Unit, UnitDependencies, _Infinity, _NaN, _false, _null, _true, abs, absDependencies, acos, acosDependencies, acosh, acoshDependencies, acot, acotDependencies, acoth, acothDependencies, acsc, acscDependencies, acsch, acschDependencies, add, addDependencies, addScalar, addScalarDependencies, all, and, andDependencies, apply, applyDependencies, applyTransformDependencies, arg, argDependencies, asec, asecDependencies, asech, asechDependencies, asin, asinDependencies, asinh, asinhDependencies, atan, atan2, atan2Dependencies, atanDependencies, atanh, atanhDependencies, atomicMass, atomicMassDependencies, avogadro, avogadroDependencies, bellNumbers, bellNumbersDependencies, bignumber, bignumberDependencies, bin, binDependencies, bitAnd, bitAndDependencies, bitNot, bitNotDependencies, bitOr, bitOrDependencies, bitXor$1 as bitXor, bitXorDependencies, bohrMagneton, bohrMagnetonDependencies, bohrRadius, bohrRadiusDependencies, boltzmann, boltzmannDependencies, boolean, booleanDependencies, catalan, catalanDependencies, cbrt, cbrtDependencies, ceil, ceilDependencies, chain, chainDependencies, classicalElectronRadius, classicalElectronRadiusDependencies, clone, cloneDependencies, column, columnDependencies, columnTransformDependencies, combinations, combinationsDependencies, combinationsWithRep, combinationsWithRepDependencies, compare, compareDependencies, compareNatural, compareNaturalDependencies, compareText, compareTextDependencies, compile, compileDependencies, complex, complexDependencies, composition, compositionDependencies, concat, concatDependencies, concatTransformDependencies, conductanceQuantum, conductanceQuantumDependencies, conj, conjDependencies, cos, cosDependencies, cosh, coshDependencies, cot, cotDependencies, coth, cothDependencies, coulomb, coulombDependencies, count, countDependencies, createAbs, createAcos, createAcosh, createAcot, createAcoth, createAcsc, createAcsch, createAdd, createAddScalar, createAnd, createArg, createAsec, createAsech, createAsin, createAsinh, createAtan, createAtan2, createAtanh, createAtomicMass, createAvogadro, createBigNumberClass, createBignumber, createBin, createBitAnd, createBitNot, createBitOr, createBitXor, createBohrMagneton, createBohrRadius, createBoltzmann, createCbrt, createClassicalElectronRadius, createColumn, createColumnTransform, createCombinations, createComplex, createComplexClass, createConcat, createConcatTransform, createConductanceQuantum, createConj, createCos, createCosh, createCot, createCoth, createCoulomb, createCount, createCreateUnit, createCross, createCsc, createCsch, createCtranspose, createCube, createDenseMatrixClass, createDet, createDeuteronMass, createDiag, createDiff, createDiffTransform, createDistance, createDivide, createDivideScalar, createDot, createDotDivide, createDotMultiply, createDotPow, createEfimovFactor, createEigs, createElectricConstant, createElectronMass, createElementaryCharge, createExp, createExpm, createExpm1, createFaraday, createFermiCoupling, createFft, createFibonacciHeapClass, createFineStructure, createFirstRadiation, createFlatten, createFraction, createFractionClass, createGamma, createGasConstant, createGcd, createGetMatrixDataType, createGravitationConstant, createGravity, createHartreeEnergy, createHex, createIdentity, createIfft, createIm, createImmutableDenseMatrixClass, createIndex, createIndexClass, createIndexTransform, createIntersect, createInv, createInverseConductanceQuantum, createInvmod, createIsInteger, createIsNaN, createIsNegative, createIsPositive, createIsZero, createKldivergence, createKlitzing, createKron, createLcm, createLeafCount, createLeftShift, createLgamma, createLog, createLog10, createLog1p, createLog2, createLoschmidt, createLsolve, createLsolveAll, createLup, createLusolve, createLyap, createMagneticConstant, createMagneticFluxQuantum, createMatrix, createMatrixClass, createMatrixFromColumns, createMatrixFromFunction, createMatrixFromRows, createMod, createMolarMass, createMolarMassC12, createMolarPlanckConstant, createMolarVolume, createMultiply, createMultiplyScalar, createNeutronMass, createNorm, createNot, createNthRoot, createNthRoots, createNuclearMagneton, createOct, createOnes, createOr, createPinv, createPlanckCharge, createPlanckConstant, createPlanckLength, createPlanckMass, createPlanckTemperature, createPlanckTime, createPolynomialRoot, createPow, createProtonMass, createQr, createQuantumOfCirculation, createRe, createReducedPlanckConstant, createReshape, createResize, createRightArithShift, createRightLogShift, createRotate, createRotationMatrix, createRound, createRow, createRowTransform, createRydberg, createSackurTetrode, createSchur, createSec, createSech, createSecondRadiation, createSetCartesian, createSetDifference, createSetDistinct, createSetIntersect, createSetIsSubset, createSetMultiplicity, createSetPowerset, createSetSize, createSetSymDifference, createSetUnion, createSign, createSin, createSinh, createSlu, createSort, createSpaClass, createSparse, createSparseMatrixClass, createSpeedOfLight, createSplitUnit, createSqrt, createSqrtm, createSquare, createSqueeze, createStefanBoltzmann, createSubset, createSubsetTransform, createSubtract, createSylvester, createSymbolicEqual, createTan, createTanh, createThomsonCrossSection, createTo, createTrace, createTranspose, createUnaryMinus, createUnaryPlus, createUnit, createUnitClass, createUnitDependencies, createUnitFunction, createUsolve, createUsolveAll, createVacuumImpedance, createWeakMixingAngle, createWienDisplacement, createXgcd, createXor, createZeros, cross, crossDependencies, csc, cscDependencies, csch, cschDependencies, ctranspose, ctransposeDependencies, cube, cubeDependencies, cumsum, cumsumDependencies, cumsumTransformDependencies, deepEqual, deepEqualDependencies, derivative, derivativeDependencies, det, detDependencies, deuteronMass, deuteronMassDependencies, diag, diagDependencies, diff, diffDependencies, diffTransformDependencies, distance, distanceDependencies, divide, divideDependencies, divideScalar, divideScalarDependencies, dot, dotDependencies, dotDivide, dotDivideDependencies, dotMultiply, dotMultiplyDependencies, dotPow, dotPowDependencies, e2 as e, eDependencies, efimovFactor, efimovFactorDependencies, eigs, eigsDependencies, electricConstant, electricConstantDependencies, electronMass, electronMassDependencies, elementaryCharge, elementaryChargeDependencies, equal, equalDependencies, equalScalar, equalScalarDependencies, equalText, equalTextDependencies, erf, erfDependencies, evaluate, evaluateDependencies, exp, expDependencies, expm, expm1, expm1Dependencies, expmDependencies, factorial, factorialDependencies, falseDependencies, faraday, faradayDependencies, fermiCoupling, fermiCouplingDependencies, fft, fftDependencies, filter, filterDependencies, filterTransformDependencies, fineStructure, fineStructureDependencies, firstRadiation, firstRadiationDependencies, fix, fixDependencies, flatten, flattenDependencies, floor, floorDependencies, forEach, forEachDependencies, forEachTransformDependencies, format, formatDependencies, fraction, fractionDependencies, gamma, gammaDependencies, gasConstant, gasConstantDependencies, gcd, gcdDependencies, getMatrixDataType, getMatrixDataTypeDependencies, gravitationConstant, gravitationConstantDependencies, gravity, gravityDependencies, hartreeEnergy, hartreeEnergyDependencies, hasNumericValue, hasNumericValueDependencies, help, helpDependencies, hex, hexDependencies, hypot, hypotDependencies, i2 as i, iDependencies, identity, identityDependencies, ifft, ifftDependencies, im, imDependencies, index, indexDependencies, indexTransformDependencies, intersect, intersectDependencies, inv, invDependencies, inverseConductanceQuantum, inverseConductanceQuantumDependencies, invmod, invmodDependencies, isInteger, isIntegerDependencies, isNaN$1 as isNaN, isNaNDependencies, isNegative, isNegativeDependencies, isNumeric, isNumericDependencies, isPositive, isPositiveDependencies, isPrime, isPrimeDependencies, isZero, isZeroDependencies, kldivergence, kldivergenceDependencies, klitzing, klitzingDependencies, kron, kronDependencies, larger, largerDependencies, largerEq, largerEqDependencies, lcm, lcmDependencies, leafCount, leafCountDependencies, leftShift, leftShiftDependencies, lgamma, lgammaDependencies, log, log10, log10Dependencies, log1p, log1pDependencies, log2, log2Dependencies, logDependencies, loschmidt, loschmidtDependencies, lsolve, lsolveAll, lsolveAllDependencies, lsolveDependencies, lup, lupDependencies, lusolve, lusolveDependencies, lyap, lyapDependencies, mad, madDependencies, magneticConstant, magneticConstantDependencies, magneticFluxQuantum, magneticFluxQuantumDependencies, map, mapDependencies, mapTransformDependencies, matrix, matrixDependencies, matrixFromColumns, matrixFromColumnsDependencies, matrixFromFunction, matrixFromFunctionDependencies, matrixFromRows, matrixFromRowsDependencies, max, maxDependencies, maxTransformDependencies, mean, meanDependencies, meanTransformDependencies, median, medianDependencies, min, minDependencies, minTransformDependencies, mod, modDependencies, mode, modeDependencies, molarMass, molarMassC12, molarMassC12Dependencies, molarMassDependencies, molarPlanckConstant, molarPlanckConstantDependencies, molarVolume, molarVolumeDependencies, multinomial, multinomialDependencies, multiply, multiplyDependencies, multiplyScalar, multiplyScalarDependencies, neutronMass, neutronMassDependencies, norm, normDependencies, not, notDependencies, nthRoot, nthRootDependencies, nthRoots, nthRootsDependencies, nuclearMagneton, nuclearMagnetonDependencies, nullDependencies, number, numberDependencies, numeric, numericDependencies, oct, octDependencies, ones, onesDependencies, or, orDependencies, parse, parseDependencies, parser, parserDependencies, partitionSelect, partitionSelectDependencies, permutations, permutationsDependencies, phi, phiDependencies, pi, piDependencies, pickRandom, pickRandomDependencies, pinv, pinvDependencies, planckCharge, planckChargeDependencies, planckConstant, planckConstantDependencies, planckLength, planckLengthDependencies, planckMass, planckMassDependencies, planckTemperature, planckTemperatureDependencies, planckTime, planckTimeDependencies, polynomialRoot, polynomialRootDependencies, pow, powDependencies, print, printDependencies, prod, prodDependencies, protonMass, protonMassDependencies, qr, qrDependencies, quantileSeq, quantileSeqDependencies, quantumOfCirculation, quantumOfCirculationDependencies, random, randomDependencies, randomInt, randomIntDependencies, range, rangeDependencies, rangeTransformDependencies, rationalize, rationalizeDependencies, re, reDependencies, reducedPlanckConstant, reducedPlanckConstantDependencies, replacer, replacerDependencies, reshape, reshapeDependencies, resize, resizeDependencies, resolve, resolveDependencies, reviver, reviverDependencies, rightArithShift, rightArithShiftDependencies, rightLogShift, rightLogShiftDependencies, rotate, rotateDependencies, rotationMatrix, rotationMatrixDependencies, round, roundDependencies, row, rowDependencies, rowTransformDependencies, rydberg, rydbergDependencies, sackurTetrode, sackurTetrodeDependencies, schur, schurDependencies, sec, secDependencies, sech, sechDependencies, secondRadiation, secondRadiationDependencies, setCartesian, setCartesianDependencies, setDifference, setDifferenceDependencies, setDistinct, setDistinctDependencies, setIntersect, setIntersectDependencies, setIsSubset, setIsSubsetDependencies, setMultiplicity, setMultiplicityDependencies, setPowerset, setPowersetDependencies, setSize, setSizeDependencies, setSymDifference, setSymDifferenceDependencies, setUnion, setUnionDependencies, sign, signDependencies, simplify, simplifyConstant, simplifyConstantDependencies, simplifyCore, simplifyCoreDependencies, simplifyDependencies, sin, sinDependencies, sinh, sinhDependencies, size, sizeDependencies, slu, sluDependencies, smaller, smallerDependencies, smallerEq, smallerEqDependencies, sort, sortDependencies, sparse, sparseDependencies, speedOfLight, speedOfLightDependencies, splitUnit, splitUnitDependencies, sqrt, sqrtDependencies, sqrtm, sqrtmDependencies, square, squareDependencies, squeeze, squeezeDependencies, std, stdDependencies, stdTransformDependencies, stefanBoltzmann, stefanBoltzmannDependencies, stirlingS2, stirlingS2Dependencies, string, stringDependencies, subset, subsetDependencies, subsetTransformDependencies, subtract, subtractDependencies, sum, sumDependencies, sumTransformDependencies, sylvester, sylvesterDependencies, symbolicEqual, symbolicEqualDependencies, tan, tanDependencies, tanh, tanhDependencies, tau, tauDependencies, thomsonCrossSection, thomsonCrossSectionDependencies, to, toDependencies, trace, traceDependencies, transpose, transposeDependencies, trueDependencies, typeOf, typeOfDependencies, typed, typedDependencies, unaryMinus, unaryMinusDependencies, unaryPlus, unaryPlusDependencies, unequal, unequalDependencies, unit, unitDependencies, usolve, usolveAll, usolveAllDependencies, usolveDependencies, vacuumImpedance, vacuumImpedanceDependencies, variance, varianceDependencies, varianceTransformDependencies, version, versionDependencies, weakMixingAngle, weakMixingAngleDependencies, wienDisplacement, wienDisplacementDependencies, xgcd, xgcdDependencies, xor, xorDependencies, zeros, zerosDependencies};
export default null;
