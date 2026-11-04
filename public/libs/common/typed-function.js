function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return {s: F, n: function n() {
        if (i >= o.length)
          return {done: true};
        return {done: false, value: o[i++]};
      }, e: function e(_e) {
        throw _e;
      }, f: F};
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  }};
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function ok() {
  return true;
}
function notOk() {
  return false;
}
function undef() {
  return void 0;
}
var NOT_TYPED_FUNCTION = "Argument is not a typed-function.";
function create() {
  function isPlainObject(x) {
    return _typeof(x) === "object" && x !== null && x.constructor === Object;
  }
  var _types = [{
    name: "number",
    test: function test(x) {
      return typeof x === "number";
    }
  }, {
    name: "string",
    test: function test(x) {
      return typeof x === "string";
    }
  }, {
    name: "boolean",
    test: function test(x) {
      return typeof x === "boolean";
    }
  }, {
    name: "Function",
    test: function test(x) {
      return typeof x === "function";
    }
  }, {
    name: "Array",
    test: Array.isArray
  }, {
    name: "Date",
    test: function test(x) {
      return x instanceof Date;
    }
  }, {
    name: "RegExp",
    test: function test(x) {
      return x instanceof RegExp;
    }
  }, {
    name: "Object",
    test: isPlainObject
  }, {
    name: "null",
    test: function test(x) {
      return x === null;
    }
  }, {
    name: "undefined",
    test: function test(x) {
      return x === void 0;
    }
  }];
  var anyType = {
    name: "any",
    test: ok,
    isAny: true
  };
  var typeMap;
  var typeList;
  var nConversions = 0;
  var typed = {
    createCount: 0
  };
  function findType(typeName) {
    var type = typeMap.get(typeName);
    if (type) {
      return type;
    }
    var message = 'Unknown type "' + typeName + '"';
    var name = typeName.toLowerCase();
    var otherName;
    var _iterator = _createForOfIteratorHelper(typeList), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        otherName = _step.value;
        if (otherName.toLowerCase() === name) {
          message += '. Did you mean "' + otherName + '" ?';
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    throw new TypeError(message);
  }
  function addTypes(types) {
    var beforeSpec = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "any";
    var beforeIndex = beforeSpec ? findType(beforeSpec).index : typeList.length;
    var newTypes = [];
    for (var i = 0; i < types.length; ++i) {
      if (!types[i] || typeof types[i].name !== "string" || typeof types[i].test !== "function") {
        throw new TypeError("Object with properties {name: string, test: function} expected");
      }
      var typeName = types[i].name;
      if (typeMap.has(typeName)) {
        throw new TypeError('Duplicate type name "' + typeName + '"');
      }
      newTypes.push(typeName);
      typeMap.set(typeName, {
        name: typeName,
        test: types[i].test,
        isAny: types[i].isAny,
        index: beforeIndex + i,
        conversionsTo: []
      });
    }
    var affectedTypes = typeList.slice(beforeIndex);
    typeList = typeList.slice(0, beforeIndex).concat(newTypes).concat(affectedTypes);
    for (var _i = beforeIndex + newTypes.length; _i < typeList.length; ++_i) {
      typeMap.get(typeList[_i]).index = _i;
    }
  }
  function clear() {
    typeMap = new Map();
    typeList = [];
    nConversions = 0;
    addTypes([anyType], false);
  }
  clear();
  addTypes(_types);
  function clearConversions() {
    var typeName;
    var _iterator2 = _createForOfIteratorHelper(typeList), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        typeName = _step2.value;
        typeMap.get(typeName).conversionsTo = [];
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    nConversions = 0;
  }
  function findTypeNames(value) {
    var matches = typeList.filter(function(name) {
      var type = typeMap.get(name);
      return !type.isAny && type.test(value);
    });
    if (matches.length) {
      return matches;
    }
    return ["any"];
  }
  function isTypedFunction(entity) {
    return entity && typeof entity === "function" && "_typedFunctionData" in entity;
  }
  function findSignature(fn, signature, options) {
    if (!isTypedFunction(fn)) {
      throw new TypeError(NOT_TYPED_FUNCTION);
    }
    var exact = options && options.exact;
    var stringSignature = Array.isArray(signature) ? signature.join(",") : signature;
    var params = parseSignature(stringSignature);
    var canonicalSignature = stringifyParams(params);
    if (!exact || canonicalSignature in fn.signatures) {
      var match = fn._typedFunctionData.signatureMap.get(canonicalSignature);
      if (match) {
        return match;
      }
    }
    var nParams = params.length;
    var remainingSignatures;
    if (exact) {
      remainingSignatures = [];
      var name;
      for (name in fn.signatures) {
        remainingSignatures.push(fn._typedFunctionData.signatureMap.get(name));
      }
    } else {
      remainingSignatures = fn._typedFunctionData.signatures;
    }
    for (var i = 0; i < nParams; ++i) {
      var want = params[i];
      var filteredSignatures = [];
      var possibility = void 0;
      var _iterator3 = _createForOfIteratorHelper(remainingSignatures), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          possibility = _step3.value;
          var have = getParamAtIndex(possibility.params, i);
          if (!have || want.restParam && !have.restParam) {
            continue;
          }
          if (!have.hasAny) {
            var _ret = function() {
              var haveTypes = paramTypeSet(have);
              if (want.types.some(function(wtype) {
                return !haveTypes.has(wtype.name);
              })) {
                return "continue";
              }
            }();
            if (_ret === "continue")
              continue;
          }
          filteredSignatures.push(possibility);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      remainingSignatures = filteredSignatures;
      if (remainingSignatures.length === 0)
        break;
    }
    var candidate;
    var _iterator4 = _createForOfIteratorHelper(remainingSignatures), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        candidate = _step4.value;
        if (candidate.params.length <= nParams) {
          return candidate;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    throw new TypeError("Signature not found (signature: " + (fn.name || "unnamed") + "(" + stringifyParams(params, ", ") + "))");
  }
  function find(fn, signature, options) {
    return findSignature(fn, signature, options).implementation;
  }
  function convert(value, typeName) {
    var type = findType(typeName);
    if (type.test(value)) {
      return value;
    }
    var conversions = type.conversionsTo;
    if (conversions.length === 0) {
      throw new Error("There are no conversions to " + typeName + " defined.");
    }
    for (var i = 0; i < conversions.length; i++) {
      var fromType = findType(conversions[i].from);
      if (fromType.test(value)) {
        return conversions[i].convert(value);
      }
    }
    throw new Error("Cannot convert " + value + " to " + typeName);
  }
  function stringifyParams(params) {
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ",";
    return params.map(function(p) {
      return p.name;
    }).join(separator);
  }
  function parseParam(param) {
    var restParam = param.indexOf("...") === 0;
    var types = !restParam ? param : param.length > 3 ? param.slice(3) : "any";
    var typeDefs = types.split("|").map(function(s) {
      return findType(s.trim());
    });
    var hasAny = false;
    var paramName = restParam ? "..." : "";
    var exactTypes = typeDefs.map(function(type) {
      hasAny = type.isAny || hasAny;
      paramName += type.name + "|";
      return {
        name: type.name,
        typeIndex: type.index,
        test: type.test,
        isAny: type.isAny,
        conversion: null,
        conversionIndex: -1
      };
    });
    return {
      types: exactTypes,
      name: paramName.slice(0, -1),
      hasAny,
      hasConversion: false,
      restParam
    };
  }
  function expandParam(param) {
    var typeNames = param.types.map(function(t) {
      return t.name;
    });
    var matchingConversions = availableConversions(typeNames);
    var hasAny = param.hasAny;
    var newName = param.name;
    var convertibleTypes = matchingConversions.map(function(conversion) {
      var type = findType(conversion.from);
      hasAny = type.isAny || hasAny;
      newName += "|" + conversion.from;
      return {
        name: conversion.from,
        typeIndex: type.index,
        test: type.test,
        isAny: type.isAny,
        conversion,
        conversionIndex: conversion.index
      };
    });
    return {
      types: param.types.concat(convertibleTypes),
      name: newName,
      hasAny,
      hasConversion: convertibleTypes.length > 0,
      restParam: param.restParam
    };
  }
  function paramTypeSet(param) {
    if (!param.typeSet) {
      param.typeSet = new Set();
      param.types.forEach(function(type) {
        return param.typeSet.add(type.name);
      });
    }
    return param.typeSet;
  }
  function parseSignature(rawSignature) {
    var params = [];
    if (typeof rawSignature !== "string") {
      throw new TypeError("Signatures must be strings");
    }
    var signature = rawSignature.trim();
    if (signature === "") {
      return params;
    }
    var rawParams = signature.split(",");
    for (var i = 0; i < rawParams.length; ++i) {
      var parsedParam = parseParam(rawParams[i].trim());
      if (parsedParam.restParam && i !== rawParams.length - 1) {
        throw new SyntaxError('Unexpected rest parameter "' + rawParams[i] + '": only allowed for the last parameter');
      }
      if (parsedParam.types.length === 0) {
        return null;
      }
      params.push(parsedParam);
    }
    return params;
  }
  function hasRestParam(params) {
    var param = last(params);
    return param ? param.restParam : false;
  }
  function compileTest(param) {
    if (!param || param.types.length === 0) {
      return ok;
    } else if (param.types.length === 1) {
      return findType(param.types[0].name).test;
    } else if (param.types.length === 2) {
      var test0 = findType(param.types[0].name).test;
      var test1 = findType(param.types[1].name).test;
      return function or(x) {
        return test0(x) || test1(x);
      };
    } else {
      var tests = param.types.map(function(type) {
        return findType(type.name).test;
      });
      return function or(x) {
        for (var i = 0; i < tests.length; i++) {
          if (tests[i](x)) {
            return true;
          }
        }
        return false;
      };
    }
  }
  function compileTests(params) {
    var tests, test0, test1;
    if (hasRestParam(params)) {
      tests = initial(params).map(compileTest);
      var varIndex = tests.length;
      var lastTest = compileTest(last(params));
      var testRestParam = function testRestParam2(args) {
        for (var i = varIndex; i < args.length; i++) {
          if (!lastTest(args[i])) {
            return false;
          }
        }
        return true;
      };
      return function testArgs(args) {
        for (var i = 0; i < tests.length; i++) {
          if (!tests[i](args[i])) {
            return false;
          }
        }
        return testRestParam(args) && args.length >= varIndex + 1;
      };
    } else {
      if (params.length === 0) {
        return function testArgs(args) {
          return args.length === 0;
        };
      } else if (params.length === 1) {
        test0 = compileTest(params[0]);
        return function testArgs(args) {
          return test0(args[0]) && args.length === 1;
        };
      } else if (params.length === 2) {
        test0 = compileTest(params[0]);
        test1 = compileTest(params[1]);
        return function testArgs(args) {
          return test0(args[0]) && test1(args[1]) && args.length === 2;
        };
      } else {
        tests = params.map(compileTest);
        return function testArgs(args) {
          for (var i = 0; i < tests.length; i++) {
            if (!tests[i](args[i])) {
              return false;
            }
          }
          return args.length === tests.length;
        };
      }
    }
  }
  function getParamAtIndex(params, index) {
    return index < params.length ? params[index] : hasRestParam(params) ? last(params) : null;
  }
  function getTypeSetAtIndex(params, index) {
    var param = getParamAtIndex(params, index);
    if (!param) {
      return new Set();
    }
    return paramTypeSet(param);
  }
  function isExactType(type) {
    return type.conversion === null || type.conversion === void 0;
  }
  function mergeExpectedParams(signatures, index) {
    var typeSet = new Set();
    signatures.forEach(function(signature) {
      var paramSet = getTypeSetAtIndex(signature.params, index);
      var name;
      var _iterator5 = _createForOfIteratorHelper(paramSet), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          name = _step5.value;
          typeSet.add(name);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    });
    return typeSet.has("any") ? ["any"] : Array.from(typeSet);
  }
  function createError(name, args, signatures) {
    var err, expected;
    var _name = name || "unnamed";
    var matchingSignatures = signatures;
    var index;
    var _loop = function _loop2() {
      var nextMatchingDefs = [];
      matchingSignatures.forEach(function(signature) {
        var param = getParamAtIndex(signature.params, index);
        var test = compileTest(param);
        if ((index < signature.params.length || hasRestParam(signature.params)) && test(args[index])) {
          nextMatchingDefs.push(signature);
        }
      });
      if (nextMatchingDefs.length === 0) {
        expected = mergeExpectedParams(matchingSignatures, index);
        if (expected.length > 0) {
          var actualTypes = findTypeNames(args[index]);
          err = new TypeError("Unexpected type of argument in function " + _name + " (expected: " + expected.join(" or ") + ", actual: " + actualTypes.join(" | ") + ", index: " + index + ")");
          err.data = {
            category: "wrongType",
            fn: _name,
            index,
            actual: actualTypes,
            expected
          };
          return {
            v: err
          };
        }
      } else {
        matchingSignatures = nextMatchingDefs;
      }
    };
    for (index = 0; index < args.length; index++) {
      var _ret2 = _loop();
      if (_typeof(_ret2) === "object")
        return _ret2.v;
    }
    var lengths = matchingSignatures.map(function(signature) {
      return hasRestParam(signature.params) ? Infinity : signature.params.length;
    });
    if (args.length < Math.min.apply(null, lengths)) {
      expected = mergeExpectedParams(matchingSignatures, index);
      err = new TypeError("Too few arguments in function " + _name + " (expected: " + expected.join(" or ") + ", index: " + args.length + ")");
      err.data = {
        category: "tooFewArgs",
        fn: _name,
        index: args.length,
        expected
      };
      return err;
    }
    var maxLength = Math.max.apply(null, lengths);
    if (args.length > maxLength) {
      err = new TypeError("Too many arguments in function " + _name + " (expected: " + maxLength + ", actual: " + args.length + ")");
      err.data = {
        category: "tooManyArgs",
        fn: _name,
        index: args.length,
        expectedLength: maxLength
      };
      return err;
    }
    var argTypes = [];
    for (var i = 0; i < args.length; ++i) {
      argTypes.push(findTypeNames(args[i]).join("|"));
    }
    err = new TypeError('Arguments of type "' + argTypes.join(", ") + '" do not match any of the defined signatures of function ' + _name + ".");
    err.data = {
      category: "mismatch",
      actual: argTypes
    };
    return err;
  }
  function getLowestTypeIndex(param) {
    var min = typeList.length + 1;
    for (var i = 0; i < param.types.length; i++) {
      if (isExactType(param.types[i])) {
        min = Math.min(min, param.types[i].typeIndex);
      }
    }
    return min;
  }
  function getLowestConversionIndex(param) {
    var min = nConversions + 1;
    for (var i = 0; i < param.types.length; i++) {
      if (!isExactType(param.types[i])) {
        min = Math.min(min, param.types[i].conversionIndex);
      }
    }
    return min;
  }
  function compareParams(param1, param2) {
    if (param1.hasAny) {
      if (!param2.hasAny) {
        return 1;
      }
    } else if (param2.hasAny) {
      return -1;
    }
    if (param1.restParam) {
      if (!param2.restParam) {
        return 1;
      }
    } else if (param2.restParam) {
      return -1;
    }
    if (param1.hasConversion) {
      if (!param2.hasConversion) {
        return 1;
      }
    } else if (param2.hasConversion) {
      return -1;
    }
    var typeDiff = getLowestTypeIndex(param1) - getLowestTypeIndex(param2);
    if (typeDiff < 0) {
      return -1;
    }
    if (typeDiff > 0) {
      return 1;
    }
    var convDiff = getLowestConversionIndex(param1) - getLowestConversionIndex(param2);
    if (convDiff < 0) {
      return -1;
    }
    if (convDiff > 0) {
      return 1;
    }
    return 0;
  }
  function compareSignatures(signature1, signature2) {
    var pars1 = signature1.params;
    var pars2 = signature2.params;
    var last1 = last(pars1);
    var last2 = last(pars2);
    var hasRest1 = hasRestParam(pars1);
    var hasRest2 = hasRestParam(pars2);
    if (hasRest1 && last1.hasAny) {
      if (!hasRest2 || !last2.hasAny) {
        return 1;
      }
    } else if (hasRest2 && last2.hasAny) {
      return -1;
    }
    var any1 = 0;
    var conv1 = 0;
    var par;
    var _iterator6 = _createForOfIteratorHelper(pars1), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        par = _step6.value;
        if (par.hasAny)
          ++any1;
        if (par.hasConversion)
          ++conv1;
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    var any2 = 0;
    var conv2 = 0;
    var _iterator7 = _createForOfIteratorHelper(pars2), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        par = _step7.value;
        if (par.hasAny)
          ++any2;
        if (par.hasConversion)
          ++conv2;
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (any1 !== any2) {
      return any1 - any2;
    }
    if (hasRest1 && last1.hasConversion) {
      if (!hasRest2 || !last2.hasConversion) {
        return 1;
      }
    } else if (hasRest2 && last2.hasConversion) {
      return -1;
    }
    if (conv1 !== conv2) {
      return conv1 - conv2;
    }
    if (hasRest1) {
      if (!hasRest2) {
        return 1;
      }
    } else if (hasRest2) {
      return -1;
    }
    var lengthCriterion = (pars1.length - pars2.length) * (hasRest1 ? -1 : 1);
    if (lengthCriterion !== 0) {
      return lengthCriterion;
    }
    var comparisons = [];
    var tc = 0;
    for (var i = 0; i < pars1.length; ++i) {
      var thisComparison = compareParams(pars1[i], pars2[i]);
      comparisons.push(thisComparison);
      tc += thisComparison;
    }
    if (tc !== 0) {
      return tc;
    }
    var c;
    for (var _i2 = 0, _comparisons = comparisons; _i2 < _comparisons.length; _i2++) {
      c = _comparisons[_i2];
      if (c !== 0) {
        return c;
      }
    }
    return 0;
  }
  function availableConversions(typeNames) {
    if (typeNames.length === 0) {
      return [];
    }
    var types = typeNames.map(findType);
    if (typeNames.length > 1) {
      types.sort(function(t1, t2) {
        return t1.index - t2.index;
      });
    }
    var matches = types[0].conversionsTo;
    if (typeNames.length === 1) {
      return matches;
    }
    matches = matches.concat([]);
    var knownTypes = new Set(typeNames);
    for (var i = 1; i < types.length; ++i) {
      var newMatch = void 0;
      var _iterator8 = _createForOfIteratorHelper(types[i].conversionsTo), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          newMatch = _step8.value;
          if (!knownTypes.has(newMatch.from)) {
            matches.push(newMatch);
            knownTypes.add(newMatch.from);
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
    return matches;
  }
  function compileArgsPreprocessing(params, fn) {
    var fnConvert = fn;
    if (params.some(function(p) {
      return p.hasConversion;
    })) {
      var restParam = hasRestParam(params);
      var compiledConversions = params.map(compileArgConversion);
      fnConvert = function convertArgs() {
        var args = [];
        var last2 = restParam ? arguments.length - 1 : arguments.length;
        for (var i = 0; i < last2; i++) {
          args[i] = compiledConversions[i](arguments[i]);
        }
        if (restParam) {
          args[last2] = arguments[last2].map(compiledConversions[last2]);
        }
        return fn.apply(this, args);
      };
    }
    var fnPreprocess = fnConvert;
    if (hasRestParam(params)) {
      var offset = params.length - 1;
      fnPreprocess = function preprocessRestParams() {
        return fnConvert.apply(this, slice(arguments, 0, offset).concat([slice(arguments, offset)]));
      };
    }
    return fnPreprocess;
  }
  function compileArgConversion(param) {
    var test0, test1, conversion0, conversion1;
    var tests = [];
    var conversions = [];
    param.types.forEach(function(type) {
      if (type.conversion) {
        tests.push(findType(type.conversion.from).test);
        conversions.push(type.conversion.convert);
      }
    });
    switch (conversions.length) {
      case 0:
        return function convertArg(arg) {
          return arg;
        };
      case 1:
        test0 = tests[0];
        conversion0 = conversions[0];
        return function convertArg(arg) {
          if (test0(arg)) {
            return conversion0(arg);
          }
          return arg;
        };
      case 2:
        test0 = tests[0];
        test1 = tests[1];
        conversion0 = conversions[0];
        conversion1 = conversions[1];
        return function convertArg(arg) {
          if (test0(arg)) {
            return conversion0(arg);
          }
          if (test1(arg)) {
            return conversion1(arg);
          }
          return arg;
        };
      default:
        return function convertArg(arg) {
          for (var i = 0; i < conversions.length; i++) {
            if (tests[i](arg)) {
              return conversions[i](arg);
            }
          }
          return arg;
        };
    }
  }
  function splitParams(params) {
    function _splitParams(params2, index, paramsSoFar) {
      if (index < params2.length) {
        var param = params2[index];
        var resultingParams = [];
        if (param.restParam) {
          var exactTypes = param.types.filter(isExactType);
          if (exactTypes.length < param.types.length) {
            resultingParams.push({
              types: exactTypes,
              name: "..." + exactTypes.map(function(t) {
                return t.name;
              }).join("|"),
              hasAny: exactTypes.some(function(t) {
                return t.isAny;
              }),
              hasConversion: false,
              restParam: true
            });
          }
          resultingParams.push(param);
        } else {
          resultingParams = param.types.map(function(type) {
            return {
              types: [type],
              name: type.name,
              hasAny: type.isAny,
              hasConversion: type.conversion,
              restParam: false
            };
          });
        }
        return flatMap(resultingParams, function(nextParam) {
          return _splitParams(params2, index + 1, paramsSoFar.concat([nextParam]));
        });
      } else {
        return [paramsSoFar];
      }
    }
    return _splitParams(params, 0, []);
  }
  function conflicting(params1, params2) {
    var ii = Math.max(params1.length, params2.length);
    for (var i = 0; i < ii; i++) {
      var typeSet1 = getTypeSetAtIndex(params1, i);
      var typeSet2 = getTypeSetAtIndex(params2, i);
      var overlap = false;
      var name = void 0;
      var _iterator9 = _createForOfIteratorHelper(typeSet2), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          name = _step9.value;
          if (typeSet1.has(name)) {
            overlap = true;
            break;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      if (!overlap) {
        return false;
      }
    }
    var len1 = params1.length;
    var len2 = params2.length;
    var restParam1 = hasRestParam(params1);
    var restParam2 = hasRestParam(params2);
    return restParam1 ? restParam2 ? len1 === len2 : len2 >= len1 : restParam2 ? len1 >= len2 : len1 === len2;
  }
  function clearResolutions(functionList) {
    return functionList.map(function(fn) {
      if (isReferToSelf(fn)) {
        return referToSelf(fn.referToSelf.callback);
      }
      if (isReferTo(fn)) {
        return makeReferTo(fn.referTo.references, fn.referTo.callback);
      }
      return fn;
    });
  }
  function collectResolutions(references, functionList, signatureMap) {
    var resolvedReferences = [];
    var reference;
    var _iterator10 = _createForOfIteratorHelper(references), _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
        reference = _step10.value;
        var resolution = signatureMap[reference];
        if (typeof resolution !== "number") {
          throw new TypeError('No definition for referenced signature "' + reference + '"');
        }
        resolution = functionList[resolution];
        if (typeof resolution !== "function") {
          return false;
        }
        resolvedReferences.push(resolution);
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    return resolvedReferences;
  }
  function resolveReferences(functionList, signatureMap, self) {
    var resolvedFunctions = clearResolutions(functionList);
    var isResolved = new Array(resolvedFunctions.length).fill(false);
    var leftUnresolved = true;
    while (leftUnresolved) {
      leftUnresolved = false;
      var nothingResolved = true;
      for (var i = 0; i < resolvedFunctions.length; ++i) {
        if (isResolved[i])
          continue;
        var fn = resolvedFunctions[i];
        if (isReferToSelf(fn)) {
          resolvedFunctions[i] = fn.referToSelf.callback(self);
          resolvedFunctions[i].referToSelf = fn.referToSelf;
          isResolved[i] = true;
          nothingResolved = false;
        } else if (isReferTo(fn)) {
          var resolvedReferences = collectResolutions(fn.referTo.references, resolvedFunctions, signatureMap);
          if (resolvedReferences) {
            resolvedFunctions[i] = fn.referTo.callback.apply(this, resolvedReferences);
            resolvedFunctions[i].referTo = fn.referTo;
            isResolved[i] = true;
            nothingResolved = false;
          } else {
            leftUnresolved = true;
          }
        }
      }
      if (nothingResolved && leftUnresolved) {
        throw new SyntaxError("Circular reference detected in resolving typed.referTo");
      }
    }
    return resolvedFunctions;
  }
  function validateDeprecatedThis(signaturesMap) {
    var deprecatedThisRegex = /\bthis(\(|\.signatures\b)/;
    Object.keys(signaturesMap).forEach(function(signature) {
      var fn = signaturesMap[signature];
      if (deprecatedThisRegex.test(fn.toString())) {
        throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.");
      }
    });
  }
  function createTypedFunction(name, rawSignaturesMap) {
    typed.createCount++;
    if (Object.keys(rawSignaturesMap).length === 0) {
      throw new SyntaxError("No signatures provided");
    }
    if (typed.warnAgainstDeprecatedThis) {
      validateDeprecatedThis(rawSignaturesMap);
    }
    var parsedParams = [];
    var originalFunctions = [];
    var signaturesMap = {};
    var preliminarySignatures = [];
    var signature;
    var _loop2 = function _loop22() {
      if (!Object.prototype.hasOwnProperty.call(rawSignaturesMap, signature)) {
        return "continue";
      }
      var params = parseSignature(signature);
      if (!params)
        return "continue";
      parsedParams.forEach(function(pp) {
        if (conflicting(pp, params)) {
          throw new TypeError('Conflicting signatures "' + stringifyParams(pp) + '" and "' + stringifyParams(params) + '".');
        }
      });
      parsedParams.push(params);
      var functionIndex = originalFunctions.length;
      originalFunctions.push(rawSignaturesMap[signature]);
      var conversionParams = params.map(expandParam);
      var sp = void 0;
      var _iterator11 = _createForOfIteratorHelper(splitParams(conversionParams)), _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
          sp = _step11.value;
          var spName = stringifyParams(sp);
          preliminarySignatures.push({
            params: sp,
            name: spName,
            fn: functionIndex
          });
          if (sp.every(function(p) {
            return !p.hasConversion;
          })) {
            signaturesMap[spName] = functionIndex;
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    };
    for (signature in rawSignaturesMap) {
      var _ret3 = _loop2();
      if (_ret3 === "continue")
        continue;
    }
    preliminarySignatures.sort(compareSignatures);
    var resolvedFunctions = resolveReferences(originalFunctions, signaturesMap, theTypedFn);
    var s;
    for (s in signaturesMap) {
      if (Object.prototype.hasOwnProperty.call(signaturesMap, s)) {
        signaturesMap[s] = resolvedFunctions[signaturesMap[s]];
      }
    }
    var signatures = [];
    var internalSignatureMap = new Map();
    for (var _i3 = 0, _preliminarySignature = preliminarySignatures; _i3 < _preliminarySignature.length; _i3++) {
      s = _preliminarySignature[_i3];
      if (!internalSignatureMap.has(s.name)) {
        s.fn = resolvedFunctions[s.fn];
        signatures.push(s);
        internalSignatureMap.set(s.name, s);
      }
    }
    var ok0 = signatures[0] && signatures[0].params.length <= 2 && !hasRestParam(signatures[0].params);
    var ok1 = signatures[1] && signatures[1].params.length <= 2 && !hasRestParam(signatures[1].params);
    var ok2 = signatures[2] && signatures[2].params.length <= 2 && !hasRestParam(signatures[2].params);
    var ok3 = signatures[3] && signatures[3].params.length <= 2 && !hasRestParam(signatures[3].params);
    var ok4 = signatures[4] && signatures[4].params.length <= 2 && !hasRestParam(signatures[4].params);
    var ok5 = signatures[5] && signatures[5].params.length <= 2 && !hasRestParam(signatures[5].params);
    var allOk = ok0 && ok1 && ok2 && ok3 && ok4 && ok5;
    for (var i = 0; i < signatures.length; ++i) {
      signatures[i].test = compileTests(signatures[i].params);
    }
    var test00 = ok0 ? compileTest(signatures[0].params[0]) : notOk;
    var test10 = ok1 ? compileTest(signatures[1].params[0]) : notOk;
    var test20 = ok2 ? compileTest(signatures[2].params[0]) : notOk;
    var test30 = ok3 ? compileTest(signatures[3].params[0]) : notOk;
    var test40 = ok4 ? compileTest(signatures[4].params[0]) : notOk;
    var test50 = ok5 ? compileTest(signatures[5].params[0]) : notOk;
    var test01 = ok0 ? compileTest(signatures[0].params[1]) : notOk;
    var test11 = ok1 ? compileTest(signatures[1].params[1]) : notOk;
    var test21 = ok2 ? compileTest(signatures[2].params[1]) : notOk;
    var test31 = ok3 ? compileTest(signatures[3].params[1]) : notOk;
    var test41 = ok4 ? compileTest(signatures[4].params[1]) : notOk;
    var test51 = ok5 ? compileTest(signatures[5].params[1]) : notOk;
    for (var _i4 = 0; _i4 < signatures.length; ++_i4) {
      signatures[_i4].implementation = compileArgsPreprocessing(signatures[_i4].params, signatures[_i4].fn);
    }
    var fn0 = ok0 ? signatures[0].implementation : undef;
    var fn1 = ok1 ? signatures[1].implementation : undef;
    var fn2 = ok2 ? signatures[2].implementation : undef;
    var fn3 = ok3 ? signatures[3].implementation : undef;
    var fn4 = ok4 ? signatures[4].implementation : undef;
    var fn5 = ok5 ? signatures[5].implementation : undef;
    var len0 = ok0 ? signatures[0].params.length : -1;
    var len1 = ok1 ? signatures[1].params.length : -1;
    var len2 = ok2 ? signatures[2].params.length : -1;
    var len3 = ok3 ? signatures[3].params.length : -1;
    var len4 = ok4 ? signatures[4].params.length : -1;
    var len5 = ok5 ? signatures[5].params.length : -1;
    var iStart = allOk ? 6 : 0;
    var iEnd = signatures.length;
    var tests = signatures.map(function(s2) {
      return s2.test;
    });
    var fns = signatures.map(function(s2) {
      return s2.implementation;
    });
    var generic = function generic2() {
      for (var _i5 = iStart; _i5 < iEnd; _i5++) {
        if (tests[_i5](arguments)) {
          return fns[_i5].apply(this, arguments);
        }
      }
      return typed.onMismatch(name, arguments, signatures);
    };
    function theTypedFn(arg0, arg1) {
      if (arguments.length === len0 && test00(arg0) && test01(arg1)) {
        return fn0.apply(this, arguments);
      }
      if (arguments.length === len1 && test10(arg0) && test11(arg1)) {
        return fn1.apply(this, arguments);
      }
      if (arguments.length === len2 && test20(arg0) && test21(arg1)) {
        return fn2.apply(this, arguments);
      }
      if (arguments.length === len3 && test30(arg0) && test31(arg1)) {
        return fn3.apply(this, arguments);
      }
      if (arguments.length === len4 && test40(arg0) && test41(arg1)) {
        return fn4.apply(this, arguments);
      }
      if (arguments.length === len5 && test50(arg0) && test51(arg1)) {
        return fn5.apply(this, arguments);
      }
      return generic.apply(this, arguments);
    }
    try {
      Object.defineProperty(theTypedFn, "name", {
        value: name
      });
    } catch (err) {
    }
    theTypedFn.signatures = signaturesMap;
    theTypedFn._typedFunctionData = {
      signatures,
      signatureMap: internalSignatureMap
    };
    return theTypedFn;
  }
  function _onMismatch(name, args, signatures) {
    throw createError(name, args, signatures);
  }
  function initial(arr) {
    return slice(arr, 0, arr.length - 1);
  }
  function last(arr) {
    return arr[arr.length - 1];
  }
  function slice(arr, start, end) {
    return Array.prototype.slice.call(arr, start, end);
  }
  function findInArray(arr, test) {
    for (var i = 0; i < arr.length; i++) {
      if (test(arr[i])) {
        return arr[i];
      }
    }
    return void 0;
  }
  function flatMap(arr, callback) {
    return Array.prototype.concat.apply([], arr.map(callback));
  }
  function referTo() {
    var references = initial(arguments).map(function(s) {
      return stringifyParams(parseSignature(s));
    });
    var callback = last(arguments);
    if (typeof callback !== "function") {
      throw new TypeError("Callback function expected as last argument");
    }
    return makeReferTo(references, callback);
  }
  function makeReferTo(references, callback) {
    return {
      referTo: {
        references,
        callback
      }
    };
  }
  function referToSelf(callback) {
    if (typeof callback !== "function") {
      throw new TypeError("Callback function expected as first argument");
    }
    return {
      referToSelf: {
        callback
      }
    };
  }
  function isReferTo(objectOrFn) {
    return objectOrFn && _typeof(objectOrFn.referTo) === "object" && Array.isArray(objectOrFn.referTo.references) && typeof objectOrFn.referTo.callback === "function";
  }
  function isReferToSelf(objectOrFn) {
    return objectOrFn && _typeof(objectOrFn.referToSelf) === "object" && typeof objectOrFn.referToSelf.callback === "function";
  }
  function checkName(nameSoFar, newName) {
    if (!nameSoFar) {
      return newName;
    }
    if (newName && newName !== nameSoFar) {
      var err = new Error("Function names do not match (expected: " + nameSoFar + ", actual: " + newName + ")");
      err.data = {
        actual: newName,
        expected: nameSoFar
      };
      throw err;
    }
    return nameSoFar;
  }
  function getObjectName(obj) {
    var name;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && (isTypedFunction(obj[key]) || typeof obj[key].signature === "string")) {
        name = checkName(name, obj[key].name);
      }
    }
    return name;
  }
  function mergeSignatures(dest, source) {
    var key;
    for (key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (key in dest) {
          if (source[key] !== dest[key]) {
            var err = new Error('Signature "' + key + '" is defined twice');
            err.data = {
              signature: key,
              sourceFunction: source[key],
              destFunction: dest[key]
            };
            throw err;
          }
        }
        dest[key] = source[key];
      }
    }
  }
  var saveTyped = typed;
  typed = function typed2(maybeName) {
    var named = typeof maybeName === "string";
    var start = named ? 1 : 0;
    var name = named ? maybeName : "";
    var allSignatures = {};
    for (var i = start; i < arguments.length; ++i) {
      var item = arguments[i];
      var theseSignatures = {};
      var thisName = void 0;
      if (typeof item === "function") {
        thisName = item.name;
        if (typeof item.signature === "string") {
          theseSignatures[item.signature] = item;
        } else if (isTypedFunction(item)) {
          theseSignatures = item.signatures;
        }
      } else if (isPlainObject(item)) {
        theseSignatures = item;
        if (!named) {
          thisName = getObjectName(item);
        }
      }
      if (Object.keys(theseSignatures).length === 0) {
        var err = new TypeError("Argument to 'typed' at index " + i + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
        err.data = {
          index: i,
          argument: item
        };
        throw err;
      }
      if (!named) {
        name = checkName(name, thisName);
      }
      mergeSignatures(allSignatures, theseSignatures);
    }
    return createTypedFunction(name || "", allSignatures);
  };
  typed.create = create;
  typed.createCount = saveTyped.createCount;
  typed.onMismatch = _onMismatch;
  typed.throwMismatchError = _onMismatch;
  typed.createError = createError;
  typed.clear = clear;
  typed.clearConversions = clearConversions;
  typed.addTypes = addTypes;
  typed._findType = findType;
  typed.referTo = referTo;
  typed.referToSelf = referToSelf;
  typed.convert = convert;
  typed.findSignature = findSignature;
  typed.find = find;
  typed.isTypedFunction = isTypedFunction;
  typed.warnAgainstDeprecatedThis = true;
  typed.addType = function(type, beforeObjectTest) {
    var before = "any";
    if (beforeObjectTest !== false && typeMap.has("Object")) {
      before = "Object";
    }
    typed.addTypes([type], before);
  };
  function _validateConversion(conversion) {
    if (!conversion || typeof conversion.from !== "string" || typeof conversion.to !== "string" || typeof conversion.convert !== "function") {
      throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
    }
    if (conversion.to === conversion.from) {
      throw new SyntaxError('Illegal to define conversion from "' + conversion.from + '" to itself.');
    }
  }
  typed.addConversion = function(conversion) {
    _validateConversion(conversion);
    var to = findType(conversion.to);
    if (to.conversionsTo.every(function(other) {
      return other.from !== conversion.from;
    })) {
      to.conversionsTo.push({
        from: conversion.from,
        convert: conversion.convert,
        index: nConversions++
      });
    } else {
      throw new Error('There is already a conversion from "' + conversion.from + '" to "' + to.name + '"');
    }
  };
  typed.addConversions = function(conversions) {
    conversions.forEach(typed.addConversion);
  };
  typed.removeConversion = function(conversion) {
    _validateConversion(conversion);
    var to = findType(conversion.to);
    var existingConversion = findInArray(to.conversionsTo, function(c) {
      return c.from === conversion.from;
    });
    if (!existingConversion) {
      throw new Error("Attempt to remove nonexistent conversion from " + conversion.from + " to " + conversion.to);
    }
    if (existingConversion.convert !== conversion.convert) {
      throw new Error("Conversion to remove does not match existing conversion");
    }
    var index = to.conversionsTo.indexOf(existingConversion);
    to.conversionsTo.splice(index, 1);
  };
  typed.resolve = function(tf, argList) {
    if (!isTypedFunction(tf)) {
      throw new TypeError(NOT_TYPED_FUNCTION);
    }
    var sigs = tf._typedFunctionData.signatures;
    for (var i = 0; i < sigs.length; ++i) {
      if (sigs[i].test(argList)) {
        return sigs[i];
      }
    }
    return null;
  };
  return typed;
}
var typedFunction = create();
export default typedFunction;
