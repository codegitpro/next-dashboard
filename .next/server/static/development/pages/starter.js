module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

exports.RouterContext = _routerContext.RouterContext;

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextType = _router.RouterContext;
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/starter.js":
/*!**************************!*\
  !*** ./pages/starter.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "F:\\Archive\\pages\\starter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class starter extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleLogout", () => {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
    });
  }

  render() {
    console.log("starter render");
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("link", {
      rel: "icon",
      href: "../static/assets/images/favicon.ico",
      type: "image/x-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Open+Sans:400,600,800",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "../static/bower_components/bootstrap/css/bootstrap.min.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "../static/assets/icon/themify-icons/themify-icons.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "../static/assets/icon/icofont/css/icofont.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "../static/assets/icon/feather/css/feather.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "../static/assets/css/style.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "../static/assets/css/jquery.mCustomScrollbar.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), __jsx("script", {
      type: "text/javascript",
      src: "../static/bower_components/jquery/js/jquery.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), __jsx("script", {
      type: "text/javascript",
      src: "../static/bower_components/jquery-ui/js/jquery-ui.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("script", {
      type: "text/javascript",
      src: "../static/bower_components/popper.js/js/popper.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("script", {
      type: "text/javascript",
      src: "../static/bower_components/bootstrap/js/bootstrap.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), __jsx("script", {
      type: "text/javascript",
      src: "../static/bower_components/jquery-slimscroll/js/jquery.slimscroll.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx("script", {
      type: "text/javascript",
      src: "../static/bower_components/modernizr/js/modernizr.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("script", {
      type: "text/javascript",
      src: "../static/bower_components/modernizr/js/css-scrollbars.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx("script", {
      type: "text/javascript",
      src: "../static/bower_components/i18next/js/i18next.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx("script", {
      type: "text/javascript",
      src: "../static/bower_components/i18next-xhr-backend/js/i18nextXHRBackend.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), __jsx("script", {
      type: "text/javascript",
      src: "../static/bower_components/i18next-browser-languagedetector/js/i18nextBrowserLanguageDetector.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), __jsx("script", {
      type: "text/javascript",
      src: "../static/bower_components/jquery-i18next/js/jquery-i18next.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("script", {
      src: "../static/assets/js/pcoded.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx("script", {
      src: "../static/assets/js/vartical-layout.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx("script", {
      src: "../static/assets/js/jquery.mCustomScrollbar.concat.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx("script", {
      type: "text/javascript",
      src: "../static/assets/js/script.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx("script", {
      async: "",
      src: "https://www.googletagmanager.com/gtag/js?id=UA-23581568-13",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), __jsx("div", {
      id: "pcoded",
      className: "pcoded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("div", {
      className: "pcoded-overlay-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), __jsx("div", {
      className: "pcoded-container navbar-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("nav", {
      className: "navbar header-navbar pcoded-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("div", {
      className: "navbar-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("div", {
      className: "navbar-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("a", {
      className: "mobile-menu",
      id: "mobile-collapse",
      href: "#!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("i", {
      className: "feather icon-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    })), __jsx("a", {
      href: "index-1.htm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Test"), __jsx("a", {
      className: "mobile-options",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("i", {
      className: "feather icon-more-horizontal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }))), __jsx("div", {
      className: "navbar-container container-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("ul", {
      className: "nav-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx("li", {
      className: "header-notification",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("div", {
      className: "dropdown-primary dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("div", {
      className: "dropdown-toggle",
      "data-toggle": "dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("i", {
      className: "feather icon-bell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }), __jsx("span", {
      className: "badge bg-c-pink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "5")), __jsx("ul", {
      className: "show-notification notification-view dropdown-menu",
      "data-dropdown-in": "fadeIn",
      "data-dropdown-out": "fadeOut",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Notifications"), __jsx("label", {
      className: "label label-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "New")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("div", {
      className: "media",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("img", {
      className: "d-flex align-self-center img-radius",
      src: "../static/assets/images/avatar-4.jpg",
      alt: "Generic placeholder image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), __jsx("div", {
      className: "media-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx("h5", {
      className: "notification-user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "John Doe"), __jsx("p", {
      className: "notification-msg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetuer elit."), __jsx("span", {
      className: "notification-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "30 minutes ago")))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, __jsx("div", {
      className: "media",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("img", {
      className: "d-flex align-self-center img-radius",
      src: "../static/assets/images/avatar-3.jpg",
      alt: "Generic placeholder image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }), __jsx("div", {
      className: "media-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("h5", {
      className: "notification-user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, "Joseph William"), __jsx("p", {
      className: "notification-msg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetuer elit."), __jsx("span", {
      className: "notification-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, "30 minutes ago")))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx("div", {
      className: "media",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, __jsx("img", {
      className: "d-flex align-self-center img-radius",
      src: "../static/assets/images/avatar-4.jpg",
      alt: "Generic placeholder image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }), __jsx("div", {
      className: "media-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx("h5", {
      className: "notification-user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, "Sara Soudein"), __jsx("p", {
      className: "notification-msg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetuer elit."), __jsx("span", {
      className: "notification-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, "30 minutes ago"))))))), __jsx("li", {
      className: "user-profile header-notification",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, __jsx("div", {
      className: "dropdown-primary dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx("div", {
      className: "dropdown-toggle",
      "data-toggle": "dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, __jsx("img", {
      src: "../static/assets/images/avatar-4.jpg",
      className: "img-radius",
      alt: "User-Profile-Image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, "John Doe"), __jsx("i", {
      className: "feather icon-chevron-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    })), __jsx("ul", {
      className: "show-notification profile-notification dropdown-menu",
      "data-dropdown-in": "fadeIn",
      "data-dropdown-out": "fadeOut",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, __jsx("a", {
      onClick: this.handleLogout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx("i", {
      className: "feather icon-log-out",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }), " Logout"))))))))), __jsx("div", {
      id: "sidebar",
      className: "users p-chat-user showChat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, __jsx("div", {
      className: "had-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, __jsx("div", {
      className: "card card_main p-fixed users-main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, __jsx("div", {
      className: "user-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, __jsx("div", {
      className: "chat-inner-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, __jsx("div", {
      className: "back_chatBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, __jsx("div", {
      className: "right-icon-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      className: "form-control  search-text",
      placeholder: "Search Friend",
      id: "search-friends",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }), __jsx("div", {
      className: "form-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, __jsx("i", {
      className: "icofont icofont-search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }))))), __jsx("div", {
      className: "main-friend-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }, __jsx("div", {
      className: "media userlist-box",
      "data-id": "1",
      "data-status": "online",
      "data-username": "Josephin Doe",
      "data-toggle": "tooltip",
      "data-placement": "left",
      title: "Josephin Doe",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, __jsx("a", {
      className: "media-left",
      href: "#!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, __jsx("img", {
      className: "media-object img-radius img-radius",
      src: "../static/assets/images/avatar-3.jpg",
      alt: "Generic placeholder image ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }), __jsx("div", {
      className: "live-status bg-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    })), __jsx("div", {
      className: "media-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, __jsx("div", {
      className: "f-13 chat-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, "Josephin Doe"))), __jsx("div", {
      className: "media userlist-box",
      "data-id": "2",
      "data-status": "online",
      "data-username": "Lary Doe",
      "data-toggle": "tooltip",
      "data-placement": "left",
      title: "Lary Doe",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, __jsx("a", {
      className: "media-left",
      href: "#!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, __jsx("img", {
      className: "media-object img-radius",
      src: "../static/assets/images/avatar-2.jpg",
      alt: "Generic placeholder image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }), __jsx("div", {
      className: "live-status bg-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    })), __jsx("div", {
      className: "media-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, __jsx("div", {
      className: "f-13 chat-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, "Lary Doe"))), __jsx("div", {
      className: "media userlist-box",
      "data-id": "3",
      "data-status": "online",
      "data-username": "Alice",
      "data-toggle": "tooltip",
      "data-placement": "left",
      title: "Alice",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, __jsx("a", {
      className: "media-left",
      href: "#!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, __jsx("img", {
      className: "media-object img-radius",
      src: "../static/assets/images/avatar-4.jpg",
      alt: "Generic placeholder image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }), __jsx("div", {
      className: "live-status bg-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    })), __jsx("div", {
      className: "media-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, __jsx("div", {
      className: "f-13 chat-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }, "Alice"))), __jsx("div", {
      className: "media userlist-box",
      "data-id": "4",
      "data-status": "online",
      "data-username": "Alia",
      "data-toggle": "tooltip",
      "data-placement": "left",
      title: "Alia",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, __jsx("a", {
      className: "media-left",
      href: "#!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, __jsx("img", {
      className: "media-object img-radius",
      src: "../static/assets/images/avatar-3.jpg",
      alt: "Generic placeholder image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }), __jsx("div", {
      className: "live-status bg-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    })), __jsx("div", {
      className: "media-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, __jsx("div", {
      className: "f-13 chat-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, "Alia"))), __jsx("div", {
      className: "media userlist-box",
      "data-id": "5",
      "data-status": "online",
      "data-username": "Suzen",
      "data-toggle": "tooltip",
      "data-placement": "left",
      title: "Suzen",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, __jsx("a", {
      className: "media-left",
      href: "#!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, __jsx("img", {
      className: "media-object img-radius",
      src: "../static/assets/images/avatar-2.jpg",
      alt: "Generic placeholder image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }), __jsx("div", {
      className: "live-status bg-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    })), __jsx("div", {
      className: "media-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, __jsx("div", {
      className: "f-13 chat-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, "Suzen")))))))), __jsx("div", {
      className: "showChat_inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, __jsx("div", {
      className: "media chat-inner-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, __jsx("a", {
      className: "back_chatBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }, __jsx("i", {
      className: "feather icon-chevron-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }), " Josephin Doe")), __jsx("div", {
      className: "media chat-messages",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, __jsx("a", {
      className: "media-left photo-table",
      href: "#!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }, __jsx("img", {
      className: "media-object img-radius img-radius m-t-5",
      src: "../static/assets/images/avatar-3.jpg",
      alt: "Generic placeholder image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    })), __jsx("div", {
      className: "media-body chat-menu-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, __jsx("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289
      },
      __self: this
    }, __jsx("p", {
      className: "chat-cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, "I'm just looking around. Will you tell me something about yourself?"), __jsx("p", {
      className: "chat-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, "8:20 a.m.")))), __jsx("div", {
      className: "media chat-messages",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, __jsx("div", {
      className: "media-body chat-menu-reply",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, __jsx("div", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      },
      __self: this
    }, __jsx("p", {
      className: "chat-cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }, "I'm just looking around. Will you tell me something about yourself?"), __jsx("p", {
      className: "chat-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, "8:20 a.m."))), __jsx("div", {
      className: "media-right photo-table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }, __jsx("a", {
      href: "#!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, __jsx("img", {
      className: "media-object img-radius img-radius m-t-5",
      src: "../static/assets/images/avatar-4.jpg",
      alt: "Generic placeholder image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    })))), __jsx("div", {
      className: "chat-reply-box p-b-20",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308
      },
      __self: this
    }, __jsx("div", {
      className: "right-icon-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      className: "form-control search-text",
      placeholder: "Share Your Thoughts",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }), __jsx("div", {
      className: "form-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }, __jsx("i", {
      className: "feather icon-navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }))))), __jsx("div", {
      className: "pcoded-main-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }, __jsx("div", {
      className: "pcoded-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319
      },
      __self: this
    }, __jsx("nav", {
      className: "pcoded-navbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: this
    }, __jsx("div", {
      className: "pcoded-inner-navbar main-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    }, __jsx("div", {
      className: "pcoded-navigatio-lavel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }, "Navigation"), __jsx("ul", {
      className: "pcoded-item pcoded-left-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, __jsx("li", {
      className: "pcoded-hasmenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }, __jsx("a", {
      style: {
        cursor: "pointer"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: this
    }, __jsx("span", {
      className: "pcoded-micon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }, __jsx("i", {
      className: "feather icon-home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    })), __jsx("span", {
      className: "pcoded-mtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: this
    }, "Product")), __jsx("ul", {
      className: "pcoded-submenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }, __jsx("li", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/product/all",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }, __jsx("span", {
      className: "pcoded-mtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, "All")))), __jsx("li", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, __jsx("a", {
      href: "dashboard-crm.htm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }, __jsx("span", {
      className: "pcoded-mtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    }, "Available"))))), __jsx("li", {
      className: "pcoded-hasmenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, __jsx("a", {
      style: {
        cursor: "pointer"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, __jsx("span", {
      className: "pcoded-micon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }, __jsx("i", {
      className: "feather icon-sidebar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    })), __jsx("span", {
      className: "pcoded-mtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, "Order")), __jsx("ul", {
      className: "pcoded-submenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, __jsx("li", {
      className: " ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: this
    }, __jsx("a", {
      href: "menu-bottom.htm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    }, __jsx("span", {
      className: "pcoded-mtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, "All"))), __jsx("li", {
      className: " ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, __jsx("a", {
      href: "box-layout.htm",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, __jsx("span", {
      className: "pcoded-mtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    }, "Pending"))), __jsx("li", {
      className: " ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    }, __jsx("a", {
      href: "box-layout.htm",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362
      },
      __self: this
    }, __jsx("span", {
      className: "pcoded-mtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    }, "Complete"))))), __jsx("li", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/bank-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: this
    }, __jsx("span", {
      className: "pcoded-micon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371
      },
      __self: this
    }, __jsx("i", {
      className: "feather icon-watch",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371
      },
      __self: this
    })), __jsx("span", {
      className: "pcoded-mtext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372
      },
      __self: this
    }, "Bank Details"))))))), __jsx("div", {
      className: "pcoded-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380
      },
      __self: this
    }, __jsx("div", {
      className: "pcoded-inner-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381
      },
      __self: this
    }, __jsx("div", {
      className: "main-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }, __jsx("div", {
      className: "page-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384
      },
      __self: this
    }, __jsx("div", {
      className: "page-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386
      },
      __self: this
    }, __jsx("div", {
      className: "row align-items-end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388
      },
      __self: this
    }, __jsx("div", {
      className: "page-header-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      },
      __self: this
    }, __jsx("div", {
      className: "d-inline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391
      },
      __self: this
    }, "Product Tables")))))), __jsx("div", {
      className: "page-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414
      },
      __self: this
    }, __jsx("div", {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416
      },
      __self: this
    }, __jsx("div", {
      className: "card-block table-border-style",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417
      },
      __self: this
    }, __jsx("div", {
      className: "table-responsive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418
      },
      __self: this
    }, __jsx("table", {
      className: "table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419
      },
      __self: this
    }, __jsx("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421
      },
      __self: this
    }, __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422
      },
      __self: this
    }, "#"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423
      },
      __self: this
    }, "First Name"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424
      },
      __self: this
    }, "Last Name"), __jsx("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425
      },
      __self: this
    }, "Username"))), __jsx("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428
      },
      __self: this
    }, __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429
      },
      __self: this
    }, __jsx("th", {
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430
      },
      __self: this
    }, "1"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431
      },
      __self: this
    }, "Mark"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432
      },
      __self: this
    }, "Otto"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433
      },
      __self: this
    }, "@mdo")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435
      },
      __self: this
    }, __jsx("th", {
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436
      },
      __self: this
    }, "2"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437
      },
      __self: this
    }, "Jacob"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438
      },
      __self: this
    }, "Thornton"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439
      },
      __self: this
    }, "@fat")), __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441
      },
      __self: this
    }, __jsx("th", {
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442
      },
      __self: this
    }, "3"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 443
      },
      __self: this
    }, "Larry"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444
      },
      __self: this
    }, "the Bird"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445
      },
      __self: this
    }, "@twitter")))))))))), __jsx("div", {
      id: "styleSelector",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460
      },
      __self: this
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (starter);

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/starter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Archive\pages\starter.js */"./pages/starter.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=starter.js.map