// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/@stdlib/assert-has-symbol-support/lib/main.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict'; // MAIN //

/**
* Tests for native `Symbol` support.
*
* @returns {boolean} boolean indicating if an environment has `Symbol` support
*
* @example
* var bool = hasSymbolSupport();
* // returns <boolean>
*/

function hasSymbolSupport() {
  return typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
} // EXPORTS //


module.exports = hasSymbolSupport;
},{}],"../../node_modules/@stdlib/assert-has-symbol-support/lib/index.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';
/**
* Test for native `Symbol` support.
*
* @module @stdlib/assert-has-symbol-support
*
* @example
* var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
*
* var bool = hasSymbolSupport();
* // returns <boolean>
*/
// MODULES //

var hasSymbolSupport = require('./main.js'); // EXPORTS //


module.exports = hasSymbolSupport;
},{"./main.js":"../../node_modules/@stdlib/assert-has-symbol-support/lib/main.js"}],"../../node_modules/@stdlib/assert-has-tostringtag-support/lib/main.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict'; // MODULES //

var hasSymbols = require('@stdlib/assert-has-symbol-support'); // VARIABLES //


var FLG = hasSymbols(); // MAIN //

/**
* Tests for native `toStringTag` support.
*
* @returns {boolean} boolean indicating if an environment has `toStringTag` support
*
* @example
* var bool = hasToStringTagSupport();
* // returns <boolean>
*/

function hasToStringTagSupport() {
  return FLG && typeof Symbol.toStringTag === 'symbol';
} // EXPORTS //


module.exports = hasToStringTagSupport;
},{"@stdlib/assert-has-symbol-support":"../../node_modules/@stdlib/assert-has-symbol-support/lib/index.js"}],"../../node_modules/@stdlib/assert-has-tostringtag-support/lib/index.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';
/**
* Test for native `toStringTag` support.
*
* @module @stdlib/assert-has-tostringtag-support
*
* @example
* var hasToStringTagSupport = require( '@stdlib/assert-has-tostringtag-support' );
*
* var bool = hasToStringTagSupport();
* // returns <boolean>
*/
// MODULES //

var hasToStringTagSupport = require('./main.js'); // EXPORTS //


module.exports = hasToStringTagSupport;
},{"./main.js":"../../node_modules/@stdlib/assert-has-tostringtag-support/lib/main.js"}],"../../node_modules/@stdlib/utils-native-class/lib/tostring.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict'; // MAIN //

var toStr = Object.prototype.toString; // EXPORTS //

module.exports = toStr;
},{}],"../../node_modules/@stdlib/utils-native-class/lib/native_class.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict'; // MODULES //

var toStr = require('./tostring.js'); // MAIN //

/**
* Returns a string value indicating a specification defined classification (via the internal property `[[Class]]`) of an object.
*
* @param {*} v - input value
* @returns {string} string value indicating a specification defined classification of the input value
*
* @example
* var str = nativeClass( 'a' );
* // returns '[object String]'
*
* @example
* var str = nativeClass( 5 );
* // returns '[object Number]'
*
* @example
* function Beep() {
*     return this;
* }
* var str = nativeClass( new Beep() );
* // returns '[object Object]'
*/


function nativeClass(v) {
  return toStr.call(v);
} // EXPORTS //


module.exports = nativeClass;
},{"./tostring.js":"../../node_modules/@stdlib/utils-native-class/lib/tostring.js"}],"../../node_modules/@stdlib/assert-has-own-property/lib/main.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict'; // FUNCTIONS //

var has = Object.prototype.hasOwnProperty; // MAIN //

/**
* Tests if an object has a specified property.
*
* @param {*} value - value to test
* @param {*} property - property to test
* @returns {boolean} boolean indicating if an object has a specified property
*
* @example
* var beep = {
*     'boop': true
* };
*
* var bool = hasOwnProp( beep, 'boop' );
* // returns true
*
* @example
* var beep = {
*     'boop': true
* };
*
* var bool = hasOwnProp( beep, 'bap' );
* // returns false
*/

function hasOwnProp(value, property) {
  if (value === void 0 || value === null) {
    return false;
  }

  return has.call(value, property);
} // EXPORTS //


module.exports = hasOwnProp;
},{}],"../../node_modules/@stdlib/assert-has-own-property/lib/index.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';
/**
* Test whether an object has a specified property.
*
* @module @stdlib/assert-has-own-property
*
* @example
* var hasOwnProp = require( '@stdlib/assert-has-own-property' );
*
* var beep = {
*     'boop': true
* };
*
* var bool = hasOwnProp( beep, 'boop' );
* // returns true
*
* bool = hasOwnProp( beep, 'bop' );
* // returns false
*/
// MODULES //

var hasOwnProp = require('./main.js'); // EXPORTS //


module.exports = hasOwnProp;
},{"./main.js":"../../node_modules/@stdlib/assert-has-own-property/lib/main.js"}],"../../node_modules/@stdlib/utils-native-class/lib/tostringtag.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict'; // MAIN //

var toStrTag = typeof Symbol === 'function' ? Symbol.toStringTag : ''; // EXPORTS //

module.exports = toStrTag;
},{}],"../../node_modules/@stdlib/utils-native-class/lib/polyfill.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict'; // MODULES //

var hasOwnProp = require('@stdlib/assert-has-own-property');

var toStringTag = require('./tostringtag.js');

var toStr = require('./tostring.js'); // MAIN //

/**
* Returns a string value indicating a specification defined classification of an object in environments supporting `Symbol.toStringTag`.
*
* @param {*} v - input value
* @returns {string} string value indicating a specification defined classification of the input value
*
* @example
* var str = nativeClass( 'a' );
* // returns '[object String]'
*
* @example
* var str = nativeClass( 5 );
* // returns '[object Number]'
*
* @example
* function Beep() {
*     return this;
* }
* var str = nativeClass( new Beep() );
* // returns '[object Object]'
*/


function nativeClass(v) {
  var isOwn;
  var tag;
  var out;

  if (v === null || v === void 0) {
    return toStr.call(v);
  }

  tag = v[toStringTag];
  isOwn = hasOwnProp(v, toStringTag); // Attempt to override the `toStringTag` property. For built-ins having a `Symbol.toStringTag` property (e.g., `JSON`, `Math`, etc), the `Symbol.toStringTag` property is read-only (e.g., , so we need to wrap in a `try/catch`.

  try {
    v[toStringTag] = void 0;
  } catch (err) {
    // eslint-disable-line no-unused-vars
    return toStr.call(v);
  }

  out = toStr.call(v);

  if (isOwn) {
    v[toStringTag] = tag;
  } else {
    delete v[toStringTag];
  }

  return out;
} // EXPORTS //


module.exports = nativeClass;
},{"@stdlib/assert-has-own-property":"../../node_modules/@stdlib/assert-has-own-property/lib/index.js","./tostringtag.js":"../../node_modules/@stdlib/utils-native-class/lib/tostringtag.js","./tostring.js":"../../node_modules/@stdlib/utils-native-class/lib/tostring.js"}],"../../node_modules/@stdlib/utils-native-class/lib/index.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';
/**
* Return a string value indicating a specification defined classification of an object.
*
* @module @stdlib/utils-native-class
*
* @example
* var nativeClass = require( '@stdlib/utils-native-class' );
*
* var str = nativeClass( 'a' );
* // returns '[object String]'
*
* str = nativeClass( 5 );
* // returns '[object Number]'
*
* function Beep() {
*     return this;
* }
* str = nativeClass( new Beep() );
* // returns '[object Object]'
*/
// MODULES //

var hasToStringTag = require('@stdlib/assert-has-tostringtag-support');

var builtin = require('./native_class.js');

var polyfill = require('./polyfill.js'); // MAIN //


var nativeClass;

if (hasToStringTag()) {
  nativeClass = polyfill;
} else {
  nativeClass = builtin;
} // EXPORTS //


module.exports = nativeClass;
},{"@stdlib/assert-has-tostringtag-support":"../../node_modules/@stdlib/assert-has-tostringtag-support/lib/index.js","./native_class.js":"../../node_modules/@stdlib/utils-native-class/lib/native_class.js","./polyfill.js":"../../node_modules/@stdlib/utils-native-class/lib/polyfill.js"}],"../../node_modules/@stdlib/assert-is-date-object/lib/getday.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';

var getDay = Date.prototype.getDay; // non-generic
// EXPORTS //

module.exports = getDay;
},{}],"../../node_modules/@stdlib/assert-is-date-object/lib/try2getday.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict'; // MODULES //

var getDay = require('./getday.js'); // MAIN //

/**
* Attempts to call a `Date` method.
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating if able to call a `Date` method
*/


function test(value) {
  try {
    getDay.call(value);
    return true;
  } catch (err) {
    // eslint-disable-line no-unused-vars
    return false;
  }
} // EXPORTS //


module.exports = test;
},{"./getday.js":"../../node_modules/@stdlib/assert-is-date-object/lib/getday.js"}],"../../node_modules/@stdlib/assert-is-date-object/lib/main.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict'; // MODULES //

var hasToStringTag = require('@stdlib/assert-has-tostringtag-support');

var nativeClass = require('@stdlib/utils-native-class');

var test = require('./try2getday.js'); // VARIABLES //


var FLG = hasToStringTag(); // MAIN //

/**
* Tests if a value is a `Date` object.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a `Date` object
*
* @example
* var bool = isDateObject( new Date() );
* // returns true
*
* @example
* var bool = isDateObject( '2017-01-01' );
* // returns false
*/

function isDateObject(value) {
  if (typeof value === 'object') {
    if (value instanceof Date) {
      return true;
    }

    if (FLG) {
      return test(value);
    }

    return nativeClass(value) === '[object Date]';
  }

  return false;
} // EXPORTS //


module.exports = isDateObject;
},{"@stdlib/assert-has-tostringtag-support":"../../node_modules/@stdlib/assert-has-tostringtag-support/lib/index.js","@stdlib/utils-native-class":"../../node_modules/@stdlib/utils-native-class/lib/index.js","./try2getday.js":"../../node_modules/@stdlib/assert-is-date-object/lib/try2getday.js"}],"../../node_modules/@stdlib/assert-is-date-object/lib/index.js":[function(require,module,exports) {
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';
/**
* Test if a value is a `Date` object.
*
* @module @stdlib/assert-is-date-object
*
* @example
* var isDateObject = require( '@stdlib/assert-is-date-object' );
*
* var bool = isDateObject( new Date() );
* // returns true
*
* bool = isDateObject( '2017-01-01' );
* // returns false
*/
// MODULES //

var isDateObject = require('./main.js'); // EXPORTS //


module.exports = isDateObject;
},{"./main.js":"../../node_modules/@stdlib/assert-is-date-object/lib/main.js"}],"index.js":[function(require,module,exports) {
var isDateObject = require('@stdlib/assert-is-date-object'); // TODO: use STRATEGY PATTERN


var InputObjectStrategy = function InputObjectStrategy(input) {
  this.inputValue = input.getFullYear();

  this.setMyAge = function (currentYear) {
    return currentYear - this.inputValue;
  };
};

var InputStringtStrategy = function InputStringtStrategy(input) {
  this.inputValue = input;

  this.setMyAge = function (currentYear) {
    return currentYear - parseInt(this.inputValue, 10);
  };
};

var InputNumberStrategy = function InputNumberStrategy(input) {
  this.inputValue = input;

  this.setMyAge = function (currentYear) {
    return currentYear - this.inputValue;
  };
};

function getMyAge(input) {
  var isObject = isDateObject(input);
  var isNumber = typeof input === 'number';
  var isString = typeof input === 'string';
  var isInputHaveCorrectTypes = isObject || isNumber || isString;
  if (!isInputHaveCorrectTypes) throw new Error('Incorrect input types');
  var currentYear = new Date().getFullYear();

  if (isObject) {
    var inputObject = new InputObjectStrategy(input);
    return inputObject.setMyAge(currentYear);
  }

  if (isString) {
    var inputString = new InputStringtStrategy(input);
    return inputString.setMyAge(currentYear);
  }

  if (isNumber && Number.isInteger(input)) {
    var inputNumber = new InputNumberStrategy(input);
    return inputNumber.setMyAge(currentYear);
  } // const regExpIsYear = /^[0-9]{4}/;
  // ! is input date better validation
  // ! za duża wartoś wieku walidacja
  // ! wzorzec strategii
  //  ? 3 max 4 if

} // console.log(isDateObject(new Date(1990, 1, 1)));


var result1 = getMyAge(new Date(1990, 1, 1));
var result2 = getMyAge('1990');
var result3 = getMyAge(1990);
console.log(result1);
console.log(result2);
console.log(result3); // wyniki result1, result2 i result3 mają być identyczne
},{"@stdlib/assert-is-date-object":"../../node_modules/@stdlib/assert-is-date-object/lib/index.js"}],"C:/Users/krzys/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53290" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/krzys/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/get-my-age.e31bb0bc.js.map