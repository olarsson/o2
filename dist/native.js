// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({28:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const addClass = exports.addClass = function (className) {
  let logic = function (el) {
    el.classList ? el.classList.add(className) : el.className += ' ' + className;
  };
  if (this.element.length === undefined) {
    //Only 1 item
    logic(this.element);
  } else {
    //A Nodelist with multiple items
    Array.from(this.element).map(item => logic(item));
  }
  return this.element;
};
},{}],29:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const removeClass = exports.removeClass = function (classes) {
  let logic = function (el) {
    classes.map(cls => {
      el.o.hasClass(cls) && el.classList.remove(cls);
    });
  };
  classes = classes.split(' ');
  if (this.element.length === undefined) {
    //Only 1 item
    logic(this.element);
  } else {
    //A Nodelist with multiple items
    Array.from(this.element).map(item => logic(item));
  }
  return this.element;
};
},{}],27:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const hasClass = exports.hasClass = function (cls) {
  let logic = function (el) {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  };
  if (this.element.length === undefined) {
    //Only 1 item
    return logic(this.element);
  } else {
    //A Nodelist with multiple items
    return [...this.element].map(item => logic(item));
  }
};
},{}],31:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const getClosest = exports.getClosest = function (selector) {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
  }

  for (; this.element && this.element !== document; this.element = this.element.parentNode) {
    if (this.element.matches(selector)) return this.element;
  }

  return null;
};
},{}],32:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const getParents = exports.getParents = function (selector) {

  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
  }

  // Setup parents array
  var parents = [];

  // Get matching parent elements
  for (; this.element && this.element !== document; this.element = this.element.parentNode) {

    // Add matching parents to array
    if (selector) {
      if (this.element.matches(selector)) {
        parents.push(this.element);
      }
    } else {
      parents.push(this.element);
    }
  }

  return parents;
};
},{}],34:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const find = exports.find = function (selector) {
  let logic = function (el) {
    return el.querySelectorAll(selector);
  };
  if (this.element.length === undefined) {
    //Only 1 item
    return logic(this.element);
  } else {
    //A Nodelist with multiple items
    return [...this.element].map(item => logic(item));
  }
};
},{}],3:[function(require,module,exports) {
'use strict';

var _add = require('./src/class/add.js');

var _remove = require('./src/class/remove.js');

var _has = require('./src/class/has.js');

var _getClosest = require('./src/traverse/getClosest.js');

var _getParents = require('./src/traverse/getParents.js');

var _find = require('./src/traverse/find.js');

window.el = selector => {
  let elems = document.querySelectorAll(selector);
  return elems.length > 1 ? elems : elems[0];
};

window.o = {
  test: () => {
    return true;
  }
};

var o = function (element) {
  this.element = element;
};

o.prototype = {

  addClass: _add.addClass,
  removeClass: _remove.removeClass,
  hasClass: _has.hasClass,

  // Get the closest matching element up the DOM tree.
  // source: https://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
  getClosest: _getClosest.getClosest,

  // Get all of an element's parent elements up the DOM tree
  // source: https://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
  getParents: _getParents.getParents,

  find: _find.find

};

[NodeList, Element].map(types => {
  Object.defineProperty(types.prototype, "o", {
    get: function () {
      Object.defineProperty(this, "o", {
        value: new o(this)
      });
      return this.o;
    },
    configurable: true,
    writeable: false
  });
});

(function () {

  console.clear();

  //console.log('Get closest: ', el('.b').o.getClosest('.test') )
  //console.log( el('.a').o.getParents('.test') )
  //console.log(addClass);

  el('body').o.addClass('oneA').o.addClass('oneB');
  //el('.domelem').o.addClass('multiA').o.addClass('multiB')
  /*   el('.domelem').o.addClass('multiA');
    el('.domelem')[2].o.addClass('multiA-target');
  
    el('.domelem').o.removeClass('multiA test aa');
  
    console.log(el('body').o.hasClass('oneA'))
    console.log(el('.domelem').o.hasClass('multiA'))
  
    console.log( el('.test').o.find('div') )
    console.log( el('body').o.find('.a,.b') ) */
})();
},{"./src/class/add.js":28,"./src/class/remove.js":29,"./src/class/has.js":27,"./src/traverse/getClosest.js":31,"./src/traverse/getParents.js":32,"./src/traverse/find.js":34}],35:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var ws = new WebSocket('ws://' + hostname + ':' + '50949' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
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
        parents.push(+k);
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[35,3])
//# sourceMappingURL=/dist/native.map