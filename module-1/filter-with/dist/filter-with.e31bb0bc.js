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
})({"db/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var data = [{
  _id: '5e985a07feddae7617ac44f6',
  age: 24,
  eyeColor: 'brown',
  name: 'Cummings Baxter',
  gender: 'male',
  company: 'VELOS',
  email: 'cummingsbaxter@velos.com',
  phone: '+1 (907) 482-2451',
  tags: ['labore', 'elit', 'excepteur', 'nisi', 'mollit', 'anim', 'aliquip'],
  friends: [{
    id: 0,
    name: 'Sheppard Jensen'
  }]
}, {
  _id: '5e985a0709dfa1e6fd93c6ad',
  age: 132,
  eyeColor: 'brown',
  name: 'Madelyn Dickson',
  gender: 'female',
  company: 'KENGEN',
  email: 'madelyndickson@kengen.com',
  phone: '+1 (984) 521-2439',
  tags: ['nisi', 'veniam', 'dolore', 'officia', 'ex', 'non', 'pariatur'],
  friends: [{
    id: 0,
    name: 'Bruce Barton'
  }, {
    id: 1,
    name: 'Juliet Schmidt'
  }, {
    id: 2,
    name: 'Horton Haley'
  }, {
    id: 3,
    name: 'Herminia Witt'
  }]
}, {
  _id: '5e985a0737e2306e9aef6ecd',
  age: 26,
  eyeColor: 'blue',
  name: 'Mcguire Mercado',
  gender: 'male',
  company: 'LINGOAGE',
  email: 'mcguiremercado@lingoage.com',
  phone: '+1 (963) 450-2194',
  tags: ['cupidatat', 'occaecat', 'amet', 'qui', 'elit', 'esse', 'deserunt'],
  friends: [{
    id: 0,
    name: 'Loraine Harper'
  }, {
    id: 1,
    name: 'Luann Randall'
  }, {
    id: 2,
    name: 'Obrien Rich'
  }, {
    id: 3,
    name: 'Noble Wilkerson'
  }]
}, {
  _id: '5e985a07148cfba58c860ec2',
  age: 26,
  eyeColor: 'brown',
  name: 'Marina Porter',
  gender: 'female',
  company: 'GORGANIC',
  email: 'marinaporter@gorganic.com',
  phone: '+1 (867) 417-3497',
  tags: ['laborum', 'aliquip', 'sit', 'adipisicing', 'aute', 'cupidatat', 'aliquip'],
  friends: [{
    id: 0,
    name: 'Blair Hill'
  }, {
    id: 1,
    name: 'Ebony Jimenez'
  }]
}, {
  _id: '5e985a074984f9f08ccaaa4c',
  age: 25,
  eyeColor: 'green',
  name: 'Barlow Ferguson',
  gender: 'male',
  company: 'TOYLETRY',
  email: 'barlowferguson@toyletry.com',
  phone: '+1 (837) 484-2231',
  tags: ['est', 'dolor', 'minim', 'ut', 'anim', 'culpa', 'non'],
  friends: [{
    id: 0,
    name: 'Delacruz Acevedo'
  }, {
    id: 1,
    name: 'Gloria Tanner'
  }, {
    id: 2,
    name: 'Cantrell Myers'
  }, {
    id: 3,
    name: 'Fisher Leonard'
  }]
}, {
  _id: '1c985a543984f5f08ccaaa8g',
  age: 35,
  eyeColor: 'green',
  name: 'Gloria Myers',
  gender: 'male',
  company: 'TOYLETRY',
  email: 'barlowferguson@toyletry.com',
  phone: '+1 (837) 484-2231',
  tags: ['est', 'dolor', 'minim', 'ut', 'anim', 'culpa', 'non'],
  friends: [{
    id: 0,
    name: 'Delacruz Acevedo'
  }, {
    id: 1,
    name: 'Gloria Tanner'
  }, {
    id: 2,
    name: 'Cantrell Myers'
  }, {
    id: 3,
    name: 'Fisher Leonard'
  }]
}];
var _default = data;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./db/data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// tak aby:
// - od 0 do 2 znaków w phrase zwracało pusty array,
// - a powyżej 2 ma filtrować po każdej wartości typu string lub number w obiekcie
function filterWith(array, phrase) {
  var isArray = Array.isArray(array);
  if (!isArray) throw new Error('Argument array have to be an array');
  var isPhraseAreString = typeof phrase === 'string';
  if (!isPhraseAreString) throw new Error('Argument phrase have to be a string');
  var isPhraseHaveCorrectLength = phrase.length > 2;
  if (!isPhraseHaveCorrectLength) return [];
  var regExpForSearchingValue = new RegExp(phrase.toLowerCase().trim(), 'g');
  var result = array.filter(function (item) {
    var isStringOrNumber = typeof item === 'string' || typeof item === 'number';

    if (isStringOrNumber) {
      return regExpForSearchingValue.test(item.toString().toLowerCase().trim());
    }

    var personDataValues = Object.values(item);
    var isIncludesPhrase = personDataValues.some(function (personValue) {
      if (_typeof(personValue) === 'object') {
        return filterWith(personValue, phrase).length > 0;
      }

      return regExpForSearchingValue.test(personValue.toString().toLowerCase().trim());
    });
    return isIncludesPhrase;
  });
  return result;
} // tak aby:
// - od 0 do 2 znaków w phrase zwracało pusty array,
// - a powyżej 2 ma filtrować po każdej wartości typu string lub number w obiekcie
// jako 1 argument podajemy naszą tablicę obiektów. Jako drugi argument szukaną frazę np:


console.log('filter result: ', filterWith(_data.default, 'Cummings Baxter'));
console.log('filter result: ', filterWith(_data.default, 'Cum'));
console.log('filter result: ', filterWith(_data.default, '132')); // funkcja zwraca tablicę z konretnym obiektem:
// const result1 = [
//   {
//     _id: "5e985a07feddae7617ac44f6",
//     age: 24,
//     eyeColor: "brown",
//     name: "Cummings Baxter",
//     gender: "male",
//     company: "VELOS",
//     email: "cummingsbaxter@velos.com",
//     phone: "+1 (907) 482-2451",
//     tags: ["labore", "elit", "excepteur", "nisi", "mollit", "anim", "aliquip"],
//     friends: [
//       {
//         id: 0,
//         name: "Sheppard Jensen",
//       },
//     ],
//   },
// ];

console.log('filter result: ', filterWith(_data.default, 'nisi')); // jako phrase przekazujemy jeden z tagów w tablicy tags ,który znajduje się w konretnym obiekcie;
// const result = [
//   {
//     _id: "5e985a07feddae7617ac44f6",
//     age: 24,
//     eyeColor: "brown",
//     name: "Cummings Baxter",
//     gender: "male",
//     company: "VELOS",
//     email: "cummingsbaxter@velos.com",
//     phone: "+1 (907) 482-2451",
//     tags: ["labore", "elit", "excepteur", "nisi", "mollit", "anim", "aliquip"],
//     friends: [
//       {
//         id: 0,
//         name: "Sheppard Jensen",
//       },
//     ],
//   },
//   {
//     _id: "5e985a0709dfa1e6fd93c6ad",
//     age: 32,
//     eyeColor: "brown",
//     name: "Madelyn Dickson",
//     gender: "female",
//     company: "KENGEN",
//     email: "madelyndickson@kengen.com",
//     phone: "+1 (984) 521-2439",
//     tags: ["nisi", "veniam", "dolore", "officia", "ex", "non", "pariatur"],
//     friends: [
//       {
//         id: 0,
//         name: "Bruce Barton",
//       },
//       {
//         id: 1,
//         name: "Juliet Schmidt",
//       },
//       {
//         id: 2,
//         name: "Horton Haley",
//       },
//       {
//         id: 3,
//         name: "Herminia Witt",
//       },
//     ],
//   },
// ];

console.log(filterWith(_data.default, 'Delacruz Acevedo'));
; // jako phrase przekazuje dane z tablicy friends,która znajduje się w konretnym obiekcie;
// const result = [
//   {
//     _id: "5e985a074984f9f08ccaaa4c",
//     age: 25,
//     eyeColor: "green",
//     name: "Barlow Ferguson",
//     gender: "male",
//     company: "TOYLETRY",
//     email: "barlowferguson@toyletry.com",
//     phone: "+1 (837) 484-2231",
//     tags: ["est", "dolor", "minim", "ut", "anim", "culpa", "non"],
//     friends: [
//       {
//         id: 0,
//         name: "Delacruz Acevedo",
//       },
//       {
//         id: 1,
//         name: "Gloria Tanner",
//       },
//       {
//         id: 2,
//         name: "Cantrell Myers",
//       },
//       {
//         id: 3,
//         name: "Fisher Leonard",
//       },
//     ],
//   },
// ];
},{"./db/data":"db/data.js"}],"C:/Users/krzys/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52182" + '/');

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
//# sourceMappingURL=/filter-with.e31bb0bc.js.map