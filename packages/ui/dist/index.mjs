var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/@swc/helpers/lib/_interop_require_default.js
var require_interop_require_default = __commonJS({
  "../../node_modules/@swc/helpers/lib/_interop_require_default.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _interopRequireDefault;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  }
});

// ../../node_modules/@swc/helpers/lib/_object_without_properties_loose.js
var require_object_without_properties_loose = __commonJS({
  "../../node_modules/@swc/helpers/lib/_object_without_properties_loose.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _objectWithoutPropertiesLoose;
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
  }
});

// ../../node_modules/@swc/helpers/lib/_async_to_generator.js
var require_async_to_generator = __commonJS({
  "../../node_modules/@swc/helpers/lib/_async_to_generator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _asyncToGenerator;
    function _asyncToGenerator(fn) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
  }
});

// ../../node_modules/@swc/helpers/lib/_extends.js
var require_extends = __commonJS({
  "../../node_modules/@swc/helpers/lib/_extends.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _extends;
    function _extends() {
      return extends_.apply(this, arguments);
    }
    function extends_() {
      extends_ = Object.assign || function(target) {
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
      return extends_.apply(this, arguments);
    }
  }
});

// ../../node_modules/@swc/helpers/lib/_interop_require_wildcard.js
var require_interop_require_wildcard = __commonJS({
  "../../node_modules/@swc/helpers/lib/_interop_require_wildcard.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _interopRequireWildcard;
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
          default: obj
        };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function() {
        return cache;
      };
      return cache;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js
var require_remove_trailing_slash = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removeTrailingSlash = removeTrailingSlash;
    function removeTrailingSlash(route) {
      return route.replace(/\/$/, "") || "/";
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/parse-path.js
var require_parse_path = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/parse-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parsePath = parsePath;
    function parsePath(path) {
      const hashIndex = path.indexOf("#");
      const queryIndex = path.indexOf("?");
      const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
      if (hasQuery || hashIndex > -1) {
        return {
          pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
          query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
          hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
      }
      return {
        pathname: path,
        query: "",
        hash: ""
      };
    }
  }
});

// ../../node_modules/next/dist/client/normalize-trailing-slash.js
var require_normalize_trailing_slash = __commonJS({
  "../../node_modules/next/dist/client/normalize-trailing-slash.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normalizePathTrailingSlash = void 0;
    var _removeTrailingSlash = require_remove_trailing_slash();
    var _parsePath = require_parse_path();
    var normalizePathTrailingSlash = (path) => {
      if (!path.startsWith("/")) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsePath).parsePath(path);
      if (process.env.__NEXT_TRAILING_SLASH) {
        if (/\.[^/]+\/?$/.test(pathname)) {
          return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
        } else if (pathname.endsWith("/")) {
          return `${pathname}${query}${hash}`;
        } else {
          return `${pathname}/${query}${hash}`;
        }
      }
      return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
    };
    exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js
var require_get_asset_path_from_route = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getAssetPathFromRoute;
    function getAssetPathFromRoute(route, ext = "") {
      const path = route === "/" ? "/index" : /^\/index(\/|$)/.test(route) ? `/index${route}` : `${route}`;
      return path + ext;
    }
  }
});

// ../../node_modules/next/dist/client/trusted-types.js
var require_trusted_types = __commonJS({
  "../../node_modules/next/dist/client/trusted-types.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.__unsafeCreateTrustedScriptURL = __unsafeCreateTrustedScriptURL;
    var policy;
    function getPolicy() {
      if (typeof policy === "undefined" && typeof window !== "undefined") {
        var ref;
        policy = ((ref = window.trustedTypes) == null ? void 0 : ref.createPolicy("nextjs", {
          createHTML: (input) => input,
          createScript: (input) => input,
          createScriptURL: (input) => input
        })) || null;
      }
      return policy;
    }
    function __unsafeCreateTrustedScriptURL(url) {
      var ref;
      return ((ref = getPolicy()) == null ? void 0 : ref.createScriptURL(url)) || url;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/client/request-idle-callback.js
var require_request_idle_callback = __commonJS({
  "../../node_modules/next/dist/client/request-idle-callback.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.cancelIdleCallback = exports.requestIdleCallback = void 0;
    var requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
      let start = Date.now();
      return setTimeout(function() {
        cb({
          didTimeout: false,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - start));
          }
        });
      }, 1);
    };
    exports.requestIdleCallback = requestIdleCallback;
    var cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
      return clearTimeout(id);
    };
    exports.cancelIdleCallback = cancelIdleCallback;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/client/route-loader.js
var require_route_loader = __commonJS({
  "../../node_modules/next/dist/client/route-loader.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.markAssetError = markAssetError;
    exports.isAssetError = isAssetError;
    exports.getClientBuildManifest = getClientBuildManifest;
    exports.createRouteLoader = createRouteLoader;
    var _interop_require_default = require_interop_require_default().default;
    var _getAssetPathFromRoute = _interop_require_default(require_get_asset_path_from_route());
    var _trustedTypes = require_trusted_types();
    var _requestIdleCallback = require_request_idle_callback();
    var MS_MAX_IDLE_DELAY = 3800;
    function withFuture(key, map, generator) {
      let entry = map.get(key);
      if (entry) {
        if ("future" in entry) {
          return entry.future;
        }
        return Promise.resolve(entry);
      }
      let resolver;
      const prom = new Promise((resolve) => {
        resolver = resolve;
      });
      map.set(key, entry = {
        resolve: resolver,
        future: prom
      });
      return generator ? generator().then((value) => (resolver(value), value)).catch((err) => {
        map.delete(key);
        throw err;
      }) : prom;
    }
    function hasPrefetch(link) {
      try {
        link = document.createElement("link");
        return !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports("prefetch");
      } catch (e) {
        return false;
      }
    }
    var canPrefetch = hasPrefetch();
    function prefetchViaDom(href, as, link) {
      return new Promise((res, rej) => {
        const selector = `
      link[rel="prefetch"][href^="${href}"],
      link[rel="preload"][href^="${href}"],
      script[src^="${href}"]`;
        if (document.querySelector(selector)) {
          return res();
        }
        link = document.createElement("link");
        if (as)
          link.as = as;
        link.rel = `prefetch`;
        link.crossOrigin = process.env.__NEXT_CROSS_ORIGIN;
        link.onload = res;
        link.onerror = rej;
        link.href = href;
        document.head.appendChild(link);
      });
    }
    var ASSET_LOAD_ERROR = Symbol("ASSET_LOAD_ERROR");
    function markAssetError(err) {
      return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
    }
    function isAssetError(err) {
      return err && ASSET_LOAD_ERROR in err;
    }
    function appendScript(src, script) {
      return new Promise((resolve, reject) => {
        script = document.createElement("script");
        script.onload = resolve;
        script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`)));
        script.crossOrigin = process.env.__NEXT_CROSS_ORIGIN;
        script.src = src;
        document.body.appendChild(script);
      });
    }
    var devBuildPromise;
    function resolvePromiseWithTimeout(p, ms, err) {
      return new Promise((resolve, reject) => {
        let cancelled = false;
        p.then((r) => {
          cancelled = true;
          resolve(r);
        }).catch(reject);
        if (process.env.NODE_ENV === "development") {
          (devBuildPromise || Promise.resolve()).then(() => {
            (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
              if (!cancelled) {
                reject(err);
              }
            }, ms));
          });
        }
        if (process.env.NODE_ENV !== "development") {
          (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
            if (!cancelled) {
              reject(err);
            }
          }, ms));
        }
      });
    }
    function getClientBuildManifest() {
      if (self.__BUILD_MANIFEST) {
        return Promise.resolve(self.__BUILD_MANIFEST);
      }
      const onBuildManifest = new Promise((resolve) => {
        const cb = self.__BUILD_MANIFEST_CB;
        self.__BUILD_MANIFEST_CB = () => {
          resolve(self.__BUILD_MANIFEST);
          cb && cb();
        };
      });
      return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error("Failed to load client build manifest")));
    }
    function getFilesForRoute(assetPrefix, route) {
      if (process.env.NODE_ENV === "development") {
        const scriptUrl = assetPrefix + "/_next/static/chunks/pages" + encodeURI((0, _getAssetPathFromRoute).default(route, ".js"));
        return Promise.resolve({
          scripts: [
            (0, _trustedTypes).__unsafeCreateTrustedScriptURL(scriptUrl)
          ],
          css: []
        });
      }
      return getClientBuildManifest().then((manifest) => {
        if (!(route in manifest)) {
          throw markAssetError(new Error(`Failed to lookup route: ${route}`));
        }
        const allFiles = manifest[route].map((entry) => assetPrefix + "/_next/" + encodeURI(entry));
        return {
          scripts: allFiles.filter((v) => v.endsWith(".js")).map((v) => (0, _trustedTypes).__unsafeCreateTrustedScriptURL(v)),
          css: allFiles.filter((v) => v.endsWith(".css"))
        };
      });
    }
    function createRouteLoader(assetPrefix) {
      const entrypoints = /* @__PURE__ */ new Map();
      const loadedScripts = /* @__PURE__ */ new Map();
      const styleSheets = /* @__PURE__ */ new Map();
      const routes = /* @__PURE__ */ new Map();
      function maybeExecuteScript(src) {
        if (process.env.NODE_ENV !== "development") {
          let prom = loadedScripts.get(src.toString());
          if (prom) {
            return prom;
          }
          if (document.querySelector(`script[src^="${src}"]`)) {
            return Promise.resolve();
          }
          loadedScripts.set(src.toString(), prom = appendScript(src));
          return prom;
        } else {
          return appendScript(src);
        }
      }
      function fetchStyleSheet(href) {
        let prom = styleSheets.get(href);
        if (prom) {
          return prom;
        }
        styleSheets.set(href, prom = fetch(href).then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to load stylesheet: ${href}`);
          }
          return res.text().then((text) => ({
            href,
            content: text
          }));
        }).catch((err) => {
          throw markAssetError(err);
        }));
        return prom;
      }
      return {
        whenEntrypoint(route) {
          return withFuture(route, entrypoints);
        },
        onEntrypoint(route, execute) {
          (execute ? Promise.resolve().then(() => execute()).then((exports2) => ({
            component: exports2 && exports2.default || exports2,
            exports: exports2
          }), (err) => ({
            error: err
          })) : Promise.resolve(void 0)).then((input) => {
            const old = entrypoints.get(route);
            if (old && "resolve" in old) {
              if (input) {
                entrypoints.set(route, input);
                old.resolve(input);
              }
            } else {
              if (input) {
                entrypoints.set(route, input);
              } else {
                entrypoints.delete(route);
              }
              routes.delete(route);
            }
          });
        },
        loadRoute(route, prefetch) {
          return withFuture(route, routes, () => {
            let devBuildPromiseResolve;
            if (process.env.NODE_ENV === "development") {
              devBuildPromise = new Promise((resolve) => {
                devBuildPromiseResolve = resolve;
              });
            }
            return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({ scripts, css }) => {
              return Promise.all([
                entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
                Promise.all(css.map(fetchStyleSheet))
              ]);
            }).then((res) => {
              return this.whenEntrypoint(route).then((entrypoint) => ({
                entrypoint,
                styles: res[1]
              }));
            }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({ entrypoint, styles }) => {
              const res = Object.assign({
                styles
              }, entrypoint);
              return "error" in entrypoint ? entrypoint : res;
            }).catch((err) => {
              if (prefetch) {
                throw err;
              }
              return {
                error: err
              };
            }).finally(() => {
              return devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve();
            });
          });
        },
        prefetch(route) {
          let cn;
          if (cn = navigator.connection) {
            if (cn.saveData || /2g/.test(cn.effectiveType))
              return Promise.resolve();
          }
          return getFilesForRoute(assetPrefix, route).then((output) => Promise.all(canPrefetch ? output.scripts.map((script) => prefetchViaDom(script.toString(), "script")) : [])).then(() => {
            (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {
            }));
          }).catch(
            () => {
            }
          );
        }
      };
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/head-manager-context.js
var require_head_manager_context = __commonJS({
  "../../node_modules/next/dist/shared/lib/head-manager-context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HeadManagerContext = void 0;
    var _interop_require_default = require_interop_require_default().default;
    var _react = _interop_require_default(__require("react"));
    var HeadManagerContext = _react.default.createContext({});
    exports.HeadManagerContext = HeadManagerContext;
    if (process.env.NODE_ENV !== "production") {
      HeadManagerContext.displayName = "HeadManagerContext";
    }
  }
});

// ../../node_modules/next/dist/client/head-manager.js
var require_head_manager = __commonJS({
  "../../node_modules/next/dist/client/head-manager.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = initHeadManager;
    exports.isEqualNode = isEqualNode;
    exports.DOMAttributeNames = void 0;
    function initHeadManager() {
      return {
        mountedInstances: /* @__PURE__ */ new Set(),
        updateHead: (head) => {
          const tags = {};
          head.forEach((h) => {
            if (h.type === "link" && h.props["data-optimized-fonts"]) {
              if (document.querySelector(`style[data-href="${h.props["data-href"]}"]`)) {
                return;
              } else {
                h.props.href = h.props["data-href"];
                h.props["data-href"] = void 0;
              }
            }
            const components = tags[h.type] || [];
            components.push(h);
            tags[h.type] = components;
          });
          const titleComponent = tags.title ? tags.title[0] : null;
          let title = "";
          if (titleComponent) {
            const { children } = titleComponent.props;
            title = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
          }
          if (title !== document.title)
            document.title = title;
          [
            "meta",
            "base",
            "link",
            "style",
            "script"
          ].forEach((type) => {
            updateElements(type, tags[type] || []);
          });
        }
      };
    }
    var DOMAttributeNames = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv",
      noModule: "noModule"
    };
    exports.DOMAttributeNames = DOMAttributeNames;
    function reactElementToDOM({ type, props }) {
      const el = document.createElement(type);
      for (const p in props) {
        if (!props.hasOwnProperty(p))
          continue;
        if (p === "children" || p === "dangerouslySetInnerHTML")
          continue;
        if (props[p] === void 0)
          continue;
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (type === "script" && (attr === "async" || attr === "defer" || attr === "noModule")) {
          el[attr] = !!props[p];
        } else {
          el.setAttribute(attr, props[p]);
        }
      }
      const { children, dangerouslySetInnerHTML } = props;
      if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
      } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
      }
      return el;
    }
    function isEqualNode(oldTag, newTag) {
      if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
        const nonce = newTag.getAttribute("nonce");
        if (nonce && !oldTag.getAttribute("nonce")) {
          const cloneTag = newTag.cloneNode(true);
          cloneTag.setAttribute("nonce", "");
          cloneTag.nonce = nonce;
          return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
        }
      }
      return oldTag.isEqualNode(newTag);
    }
    function updateElements(type, components) {
      const headEl = document.getElementsByTagName("head")[0];
      const headCountEl = headEl.querySelector("meta[name=next-head-count]");
      if (process.env.NODE_ENV !== "production") {
        if (!headCountEl) {
          console.error("Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing");
          return;
        }
      }
      const headCount = Number(headCountEl.content);
      const oldTags = [];
      for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
        var ref;
        if ((j == null ? void 0 : (ref = j.tagName) == null ? void 0 : ref.toLowerCase()) === type) {
          oldTags.push(j);
        }
      }
      const newTags = components.map(reactElementToDOM).filter((newTag) => {
        for (let k = 0, len = oldTags.length; k < len; k++) {
          const oldTag = oldTags[k];
          if (isEqualNode(oldTag, newTag)) {
            oldTags.splice(k, 1);
            return false;
          }
        }
        return true;
      });
      oldTags.forEach((t) => {
        var ref2;
        return (ref2 = t.parentNode) == null ? void 0 : ref2.removeChild(t);
      });
      newTags.forEach((t) => headEl.insertBefore(t, headCountEl));
      headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/client/script.js
var require_script = __commonJS({
  "../../node_modules/next/dist/client/script.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.handleClientScriptLoad = handleClientScriptLoad;
    exports.initScriptLoader = initScriptLoader;
    exports.default = void 0;
    var _extends = require_extends().default;
    var _interop_require_wildcard = require_interop_require_wildcard().default;
    var _object_without_properties_loose = require_object_without_properties_loose().default;
    var _react = _interop_require_wildcard(__require("react"));
    var _headManagerContext = require_head_manager_context();
    var _headManager = require_head_manager();
    var _requestIdleCallback = require_request_idle_callback();
    var ScriptCache = /* @__PURE__ */ new Map();
    var LoadCache = /* @__PURE__ */ new Set();
    var ignoreProps = [
      "onLoad",
      "onReady",
      "dangerouslySetInnerHTML",
      "children",
      "onError",
      "strategy"
    ];
    var loadScript = (props) => {
      const { src, id, onLoad = () => {
      }, onReady = null, dangerouslySetInnerHTML, children = "", strategy = "afterInteractive", onError } = props;
      const cacheKey = id || src;
      if (cacheKey && LoadCache.has(cacheKey)) {
        return;
      }
      if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        ScriptCache.get(src).then(onLoad, onError);
        return;
      }
      const el = document.createElement("script");
      const loadPromise = new Promise((resolve, reject) => {
        el.addEventListener("load", function(e) {
          resolve();
          if (onLoad) {
            onLoad.call(this, e);
          }
          if (onReady) {
            onReady();
          }
        });
        el.addEventListener("error", function(e) {
          reject(e);
        });
      }).catch(function(e) {
        if (onError) {
          onError(e);
        }
      });
      if (src) {
        ScriptCache.set(src, loadPromise);
      }
      LoadCache.add(cacheKey);
      if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
      } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
      } else if (src) {
        el.src = src;
      }
      for (const [k, value] of Object.entries(props)) {
        if (value === void 0 || ignoreProps.includes(k)) {
          continue;
        }
        const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
        el.setAttribute(attr, value);
      }
      if (strategy === "worker") {
        el.setAttribute("type", "text/partytown");
      }
      el.setAttribute("data-nscript", strategy);
      document.body.appendChild(el);
    };
    function handleClientScriptLoad(props) {
      const { strategy = "afterInteractive" } = props;
      if (strategy === "lazyOnload") {
        window.addEventListener("load", () => {
          (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
        });
      } else {
        loadScript(props);
      }
    }
    function loadLazyScript(props) {
      if (document.readyState === "complete") {
        (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
      } else {
        window.addEventListener("load", () => {
          (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
        });
      }
    }
    function addBeforeInteractiveToCache() {
      const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
      ];
      scripts.forEach((script) => {
        const cacheKey = script.id || script.getAttribute("src");
        LoadCache.add(cacheKey);
      });
    }
    function initScriptLoader(scriptLoaderItems) {
      scriptLoaderItems.forEach(handleClientScriptLoad);
      addBeforeInteractiveToCache();
    }
    function Script(props) {
      const { id, src = "", onLoad = () => {
      }, onReady = null, strategy = "afterInteractive", onError } = props, restProps = _object_without_properties_loose(props, [
        "id",
        "src",
        "onLoad",
        "onReady",
        "strategy",
        "onError"
      ]);
      const { updateScripts, scripts, getIsSsr } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
      (0, _react).useEffect(() => {
        const cacheKey = id || src;
        if (onReady && cacheKey && LoadCache.has(cacheKey)) {
          onReady();
        }
      }, [
        onReady,
        id,
        src
      ]);
      (0, _react).useEffect(() => {
        if (strategy === "afterInteractive") {
          loadScript(props);
        } else if (strategy === "lazyOnload") {
          loadLazyScript(props);
        }
      }, [
        props,
        strategy
      ]);
      if (strategy === "beforeInteractive" || strategy === "worker") {
        if (updateScripts) {
          scripts[strategy] = (scripts[strategy] || []).concat([
            _extends({
              id,
              src,
              onLoad,
              onReady,
              onError
            }, restProps)
          ]);
          updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
          LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
          loadScript(props);
        }
      }
      return null;
    }
    var _default = Script;
    exports.default = _default;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/is-plain-object.js
var require_is_plain_object = __commonJS({
  "../../node_modules/next/dist/shared/lib/is-plain-object.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getObjectClassLabel = getObjectClassLabel;
    exports.isPlainObject = isPlainObject;
    function getObjectClassLabel(value) {
      return Object.prototype.toString.call(value);
    }
    function isPlainObject(value) {
      if (getObjectClassLabel(value) !== "[object Object]") {
        return false;
      }
      const prototype = Object.getPrototypeOf(value);
      return prototype === null || prototype.hasOwnProperty("isPrototypeOf");
    }
  }
});

// ../../node_modules/next/dist/lib/is-error.js
var require_is_error = __commonJS({
  "../../node_modules/next/dist/lib/is-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isError;
    exports.getProperError = getProperError;
    var _isPlainObject = require_is_plain_object();
    function isError(err) {
      return typeof err === "object" && err !== null && "name" in err && "message" in err;
    }
    function getProperError(err) {
      if (isError(err)) {
        return err;
      }
      if (process.env.NODE_ENV === "development") {
        if (typeof err === "undefined") {
          return new Error("An undefined error was thrown, see here for more info: https://nextjs.org/docs/messages/threw-undefined");
        }
        if (err === null) {
          return new Error("A null error was thrown, see here for more info: https://nextjs.org/docs/messages/threw-undefined");
        }
      }
      return new Error((0, _isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + "");
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/sorted-routes.js
var require_sorted_routes = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/sorted-routes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getSortedRoutes = getSortedRoutes;
    var UrlNode = class {
      insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(prefix = "/") {
        const childrenPaths = [
          ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c) => this.children.get(c)._smoosh(`${prefix}${c}/`)).reduce((prev, curr) => [
          ...prev,
          ...curr
        ], []);
        if (this.slugName !== null) {
          routes.push(...this.children.get("[]")._smoosh(`${prefix}[${this.slugName}]/`));
        }
        if (!this.placeholder) {
          const r = prefix === "/" ? "/" : prefix.slice(0, -1);
          if (this.optionalRestSlugName != null) {
            throw new Error(`You cannot define a route with the same specificity as a optional catch-all route ("${r}" and "${r}[[...${this.optionalRestSlugName}]]").`);
          }
          routes.unshift(r);
        }
        if (this.restSlugName !== null) {
          routes.push(...this.children.get("[...]")._smoosh(`${prefix}[...${this.restSlugName}]/`));
        }
        if (this.optionalRestSlugName !== null) {
          routes.push(...this.children.get("[[...]]")._smoosh(`${prefix}[[...${this.optionalRestSlugName}]]/`));
        }
        return routes;
      }
      _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
          this.placeholder = false;
          return;
        }
        if (isCatchAll) {
          throw new Error(`Catch-all must be the last part of the URL.`);
        }
        let nextSegment = urlPaths[0];
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
          let handleSlug = function(previousSlug, nextSlug) {
            if (previousSlug !== null) {
              if (previousSlug !== nextSlug) {
                throw new Error(`You cannot use different slug names for the same dynamic path ('${previousSlug}' !== '${nextSlug}').`);
              }
            }
            slugNames.forEach((slug) => {
              if (slug === nextSlug) {
                throw new Error(`You cannot have the same slug name "${nextSlug}" repeat within a single dynamic path`);
              }
              if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                throw new Error(`You cannot have the slug names "${slug}" and "${nextSlug}" differ only by non-word symbols within a single dynamic path`);
              }
            });
            slugNames.push(nextSlug);
          };
          let segmentName = nextSegment.slice(1, -1);
          let isOptional = false;
          if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
            segmentName = segmentName.slice(1, -1);
            isOptional = true;
          }
          if (segmentName.startsWith("...")) {
            segmentName = segmentName.substring(3);
            isCatchAll = true;
          }
          if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
            throw new Error(`Segment names may not start or end with extra brackets ('${segmentName}').`);
          }
          if (segmentName.startsWith(".")) {
            throw new Error(`Segment names may not start with erroneous periods ('${segmentName}').`);
          }
          if (isCatchAll) {
            if (isOptional) {
              if (this.restSlugName != null) {
                throw new Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${urlPaths[0]}" ).`);
              }
              handleSlug(this.optionalRestSlugName, segmentName);
              this.optionalRestSlugName = segmentName;
              nextSegment = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null) {
                throw new Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${urlPaths[0]}").`);
              }
              handleSlug(this.restSlugName, segmentName);
              this.restSlugName = segmentName;
              nextSegment = "[...]";
            }
          } else {
            if (isOptional) {
              throw new Error(`Optional route parameters are not yet supported ("${urlPaths[0]}").`);
            }
            handleSlug(this.slugName, segmentName);
            this.slugName = segmentName;
            nextSegment = "[]";
          }
        }
        if (!this.children.has(nextSegment)) {
          this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
      }
      constructor() {
        this.placeholder = true;
        this.children = /* @__PURE__ */ new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
      }
    };
    function getSortedRoutes(normalizedPages) {
      const root = new UrlNode();
      normalizedPages.forEach((pagePath) => root.insert(pagePath));
      return root.smoosh();
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/is-dynamic.js
var require_is_dynamic = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/is-dynamic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isDynamicRoute = isDynamicRoute;
    var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
    function isDynamicRoute(route) {
      return TEST_ROUTE.test(route);
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/index.js
var require_utils = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getSortedRoutes", {
      enumerable: true,
      get: function() {
        return _sortedRoutes.getSortedRoutes;
      }
    });
    Object.defineProperty(exports, "isDynamicRoute", {
      enumerable: true,
      get: function() {
        return _isDynamic.isDynamicRoute;
      }
    });
    var _sortedRoutes = require_sorted_routes();
    var _isDynamic = require_is_dynamic();
  }
});

// ../../node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js
var require_normalize_path_sep = __commonJS({
  "../../node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normalizePathSep = normalizePathSep;
    function normalizePathSep(path) {
      return path.replace(/\\/g, "/");
    }
  }
});

// ../../node_modules/next/dist/shared/lib/page-path/denormalize-page-path.js
var require_denormalize_page_path = __commonJS({
  "../../node_modules/next/dist/shared/lib/page-path/denormalize-page-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.denormalizePagePath = denormalizePagePath;
    var _utils = require_utils();
    var _normalizePathSep = require_normalize_path_sep();
    function denormalizePagePath(page) {
      let _page = (0, _normalizePathSep).normalizePathSep(page);
      return _page.startsWith("/index/") && !(0, _utils).isDynamicRoute(_page) ? _page.slice(6) : _page !== "/index" ? _page : "/";
    }
  }
});

// ../../node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js
var require_normalize_locale_path = __commonJS({
  "../../node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normalizeLocalePath = normalizeLocalePath;
    function normalizeLocalePath(pathname, locales) {
      let detectedLocale;
      const pathnameParts = pathname.split("/");
      (locales || []).some((locale) => {
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
          detectedLocale = locale;
          pathnameParts.splice(1, 1);
          pathname = pathnameParts.join("/") || "/";
          return true;
        }
        return false;
      });
      return {
        pathname,
        detectedLocale
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/mitt.js
var require_mitt = __commonJS({
  "../../node_modules/next/dist/shared/lib/mitt.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = mitt;
    function mitt() {
      const all = /* @__PURE__ */ Object.create(null);
      return {
        on(type, handler) {
          (all[type] || (all[type] = [])).push(handler);
        },
        off(type, handler) {
          if (all[type]) {
            all[type].splice(all[type].indexOf(handler) >>> 0, 1);
          }
        },
        emit(type, ...evts) {
          (all[type] || []).slice().map((handler) => {
            handler(...evts);
          });
        }
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/utils.js
var require_utils2 = __commonJS({
  "../../node_modules/next/dist/shared/lib/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.execOnce = execOnce;
    exports.getLocationOrigin = getLocationOrigin;
    exports.getURL = getURL;
    exports.getDisplayName = getDisplayName;
    exports.isResSent = isResSent;
    exports.normalizeRepeatedSlashes = normalizeRepeatedSlashes;
    exports.loadGetInitialProps = loadGetInitialProps;
    exports.ST = exports.SP = exports.warnOnce = exports.isAbsoluteUrl = void 0;
    var _async_to_generator = require_async_to_generator().default;
    function execOnce(fn) {
      let used = false;
      let result;
      return (...args) => {
        if (!used) {
          used = true;
          result = fn(...args);
        }
        return result;
      };
    }
    var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
    var isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url);
    exports.isAbsoluteUrl = isAbsoluteUrl;
    function getLocationOrigin() {
      const { protocol, hostname, port } = window.location;
      return `${protocol}//${hostname}${port ? ":" + port : ""}`;
    }
    function getURL() {
      const { href } = window.location;
      const origin = getLocationOrigin();
      return href.substring(origin.length);
    }
    function getDisplayName(Component) {
      return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
    }
    function isResSent(res) {
      return res.finished || res.headersSent;
    }
    function normalizeRepeatedSlashes(url) {
      const urlParts = url.split("?");
      const urlNoQuery = urlParts[0];
      return urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? `?${urlParts.slice(1).join("?")}` : "");
    }
    function loadGetInitialProps(App, ctx) {
      return _loadGetInitialProps.apply(this, arguments);
    }
    function _loadGetInitialProps() {
      _loadGetInitialProps = _async_to_generator(function* (App, ctx) {
        if (process.env.NODE_ENV !== "production") {
          var ref;
          if ((ref = App.prototype) == null ? void 0 : ref.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw new Error(message);
          }
        }
        const res = ctx.res || ctx.ctx && ctx.ctx.res;
        if (!App.getInitialProps) {
          if (ctx.ctx && ctx.Component) {
            return {
              pageProps: yield loadGetInitialProps(ctx.Component, ctx.ctx)
            };
          }
          return {};
        }
        const props = yield App.getInitialProps(ctx);
        if (res && isResSent(res)) {
          return props;
        }
        if (!props) {
          const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
          throw new Error(message);
        }
        if (process.env.NODE_ENV !== "production") {
          if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
          }
        }
        return props;
      });
      return _loadGetInitialProps.apply(this, arguments);
    }
    var warnOnce = (_) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const warnings = /* @__PURE__ */ new Set();
      exports.warnOnce = warnOnce = (msg) => {
        if (!warnings.has(msg)) {
          console.warn(msg);
        }
        warnings.add(msg);
      };
    }
    var SP = typeof performance !== "undefined";
    exports.SP = SP;
    var ST = SP && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((method) => typeof performance[method] === "function");
    exports.ST = ST;
    var DecodeError = class extends Error {
    };
    exports.DecodeError = DecodeError;
    var NormalizeError = class extends Error {
    };
    exports.NormalizeError = NormalizeError;
    var PageNotFoundError = class extends Error {
      constructor(page) {
        super();
        this.code = "ENOENT";
        this.message = `Cannot find module for page: ${page}`;
      }
    };
    exports.PageNotFoundError = PageNotFoundError;
    var MissingStaticPage = class extends Error {
      constructor(page, message) {
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
      }
    };
    exports.MissingStaticPage = MissingStaticPage;
    var MiddlewareNotFoundError = class extends Error {
      constructor() {
        super();
        this.code = "ENOENT";
        this.message = `Cannot find the middleware module`;
      }
    };
    exports.MiddlewareNotFoundError = MiddlewareNotFoundError;
    exports.warnOnce = warnOnce;
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/querystring.js
var require_querystring = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/querystring.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
    exports.urlQueryToSearchParams = urlQueryToSearchParams;
    exports.assign = assign;
    function searchParamsToUrlQuery(searchParams) {
      const query = {};
      searchParams.forEach((value, key) => {
        if (typeof query[key] === "undefined") {
          query[key] = value;
        } else if (Array.isArray(query[key])) {
          query[key].push(value);
        } else {
          query[key] = [
            query[key],
            value
          ];
        }
      });
      return query;
    }
    function stringifyUrlQueryParam(param) {
      if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
      } else {
        return "";
      }
    }
    function urlQueryToSearchParams(urlQuery) {
      const result = new URLSearchParams();
      Object.entries(urlQuery).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => result.append(key, stringifyUrlQueryParam(item)));
        } else {
          result.set(key, stringifyUrlQueryParam(value));
        }
      });
      return result;
    }
    function assign(target, ...searchParamsList) {
      searchParamsList.forEach((searchParams) => {
        Array.from(searchParams.keys()).forEach((key) => target.delete(key));
        searchParams.forEach((value, key) => target.append(key, value));
      });
      return target;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js
var require_parse_relative_url = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseRelativeUrl = parseRelativeUrl;
    var _utils = require_utils2();
    var _querystring = require_querystring();
    function parseRelativeUrl(url, base) {
      const globalBase = new URL(typeof window === "undefined" ? "http://n" : (0, _utils).getLocationOrigin());
      const resolvedBase = base ? new URL(base, globalBase) : url.startsWith(".") ? new URL(typeof window === "undefined" ? "http://n" : window.location.href) : globalBase;
      const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase);
      if (origin !== globalBase.origin) {
        throw new Error(`invariant: invalid relative URL, router received ${url}`);
      }
      return {
        pathname,
        query: (0, _querystring).searchParamsToUrlQuery(searchParams),
        search,
        hash,
        href: href.slice(globalBase.origin.length)
      };
    }
  }
});

// ../../node_modules/next/dist/compiled/path-to-regexp/index.js
var require_path_to_regexp = __commonJS({
  "../../node_modules/next/dist/compiled/path-to-regexp/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function lexer(str) {
      var tokens = [];
      var i = 0;
      while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
          tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
          continue;
        }
        if (char === "\\") {
          tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
          continue;
        }
        if (char === "{") {
          tokens.push({ type: "OPEN", index: i, value: str[i++] });
          continue;
        }
        if (char === "}") {
          tokens.push({ type: "CLOSE", index: i, value: str[i++] });
          continue;
        }
        if (char === ":") {
          var name = "";
          var j = i + 1;
          while (j < str.length) {
            var code = str.charCodeAt(j);
            if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
              name += str[j++];
              continue;
            }
            break;
          }
          if (!name)
            throw new TypeError("Missing parameter name at " + i);
          tokens.push({ type: "NAME", index: i, value: name });
          i = j;
          continue;
        }
        if (char === "(") {
          var count = 1;
          var pattern = "";
          var j = i + 1;
          if (str[j] === "?") {
            throw new TypeError('Pattern cannot start with "?" at ' + j);
          }
          while (j < str.length) {
            if (str[j] === "\\") {
              pattern += str[j++] + str[j++];
              continue;
            }
            if (str[j] === ")") {
              count--;
              if (count === 0) {
                j++;
                break;
              }
            } else if (str[j] === "(") {
              count++;
              if (str[j + 1] !== "?") {
                throw new TypeError("Capturing groups are not allowed at " + j);
              }
            }
            pattern += str[j++];
          }
          if (count)
            throw new TypeError("Unbalanced pattern at " + i);
          if (!pattern)
            throw new TypeError("Missing pattern at " + i);
          tokens.push({ type: "PATTERN", index: i, value: pattern });
          i = j;
          continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
      }
      tokens.push({ type: "END", index: i, value: "" });
      return tokens;
    }
    function parse(str, options) {
      if (options === void 0) {
        options = {};
      }
      var tokens = lexer(str);
      var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
      var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
      var result = [];
      var key = 0;
      var i = 0;
      var path = "";
      var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type)
          return tokens[i++].value;
      };
      var mustConsume = function(type) {
        var value2 = tryConsume(type);
        if (value2 !== void 0)
          return value2;
        var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
      };
      var consumeText = function() {
        var result2 = "";
        var value2;
        while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
          result2 += value2;
        }
        return result2;
      };
      while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
          var prefix = char || "";
          if (prefixes.indexOf(prefix) === -1) {
            path += prefix;
            prefix = "";
          }
          if (path) {
            result.push(path);
            path = "";
          }
          result.push({
            name: name || key++,
            prefix,
            suffix: "",
            pattern: pattern || defaultPattern,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
          path += value;
          continue;
        }
        if (path) {
          result.push(path);
          path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
          var prefix = consumeText();
          var name_1 = tryConsume("NAME") || "";
          var pattern_1 = tryConsume("PATTERN") || "";
          var suffix = consumeText();
          mustConsume("CLOSE");
          result.push({
            name: name_1 || (pattern_1 ? key++ : ""),
            pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
            prefix,
            suffix,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        mustConsume("END");
      }
      return result;
    }
    exports.parse = parse;
    function compile(str, options) {
      return tokensToFunction(parse(str, options), options);
    }
    exports.compile = compile;
    function tokensToFunction(tokens, options) {
      if (options === void 0) {
        options = {};
      }
      var reFlags = flags(options);
      var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
      } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
      var matches = tokens.map(function(token) {
        if (typeof token === "object") {
          return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
      });
      return function(data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i];
          if (typeof token === "string") {
            path += token;
            continue;
          }
          var value = data ? data[token.name] : void 0;
          var optional = token.modifier === "?" || token.modifier === "*";
          var repeat = token.modifier === "*" || token.modifier === "+";
          if (Array.isArray(value)) {
            if (!repeat) {
              throw new TypeError('Expected "' + token.name + '" to not repeat, but got an array');
            }
            if (value.length === 0) {
              if (optional)
                continue;
              throw new TypeError('Expected "' + token.name + '" to not be empty');
            }
            for (var j = 0; j < value.length; j++) {
              var segment = encode(value[j], token);
              if (validate && !matches[i].test(segment)) {
                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
              }
              path += token.prefix + segment + token.suffix;
            }
            continue;
          }
          if (typeof value === "string" || typeof value === "number") {
            var segment = encode(String(value), token);
            if (validate && !matches[i].test(segment)) {
              throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
            }
            path += token.prefix + segment + token.suffix;
            continue;
          }
          if (optional)
            continue;
          var typeOfMessage = repeat ? "an array" : "a string";
          throw new TypeError('Expected "' + token.name + '" to be ' + typeOfMessage);
        }
        return path;
      };
    }
    exports.tokensToFunction = tokensToFunction;
    function match(str, options) {
      var keys = [];
      var re = pathToRegexp(str, keys, options);
      return regexpToFunction(re, keys, options);
    }
    exports.match = match;
    function regexpToFunction(re, keys, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
      } : _a;
      return function(pathname) {
        var m = re.exec(pathname);
        if (!m)
          return false;
        var path = m[0], index = m.index;
        var params = /* @__PURE__ */ Object.create(null);
        var _loop_1 = function(i2) {
          if (m[i2] === void 0)
            return "continue";
          var key = keys[i2 - 1];
          if (key.modifier === "*" || key.modifier === "+") {
            params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
              return decode(value, key);
            });
          } else {
            params[key.name] = decode(m[i2], key);
          }
        };
        for (var i = 1; i < m.length; i++) {
          _loop_1(i);
        }
        return { path, index, params };
      };
    }
    exports.regexpToFunction = regexpToFunction;
    function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function flags(options) {
      return options && options.sensitive ? "" : "i";
    }
    function regexpToRegexp(path, keys) {
      if (!keys)
        return path;
      var groups = path.source.match(/\((?!\?)/g);
      if (groups) {
        for (var i = 0; i < groups.length; i++) {
          keys.push({
            name: i,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
          });
        }
      }
      return path;
    }
    function arrayToRegexp(paths, keys, options) {
      var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
      });
      return new RegExp("(?:" + parts.join("|") + ")", flags(options));
    }
    function stringToRegexp(path, keys, options) {
      return tokensToRegexp(parse(path, options), keys, options);
    }
    function tokensToRegexp(tokens, keys, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
      } : _d;
      var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
      var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
      var route = start ? "^" : "";
      for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
          route += escapeString(encode(token));
        } else {
          var prefix = escapeString(encode(token.prefix));
          var suffix = escapeString(encode(token.suffix));
          if (token.pattern) {
            if (keys)
              keys.push(token);
            if (prefix || suffix) {
              if (token.modifier === "+" || token.modifier === "*") {
                var mod = token.modifier === "*" ? "?" : "";
                route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
              } else {
                route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
              }
            } else {
              route += "(" + token.pattern + ")" + token.modifier;
            }
          } else {
            route += "(?:" + prefix + suffix + ")" + token.modifier;
          }
        }
      }
      if (end) {
        if (!strict)
          route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
      } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
        if (!strict) {
          route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
          route += "(?=" + delimiter + "|" + endsWith + ")";
        }
      }
      return new RegExp(route, flags(options));
    }
    exports.tokensToRegexp = tokensToRegexp;
    function pathToRegexp(path, keys, options) {
      if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
      if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
      return stringToRegexp(path, keys, options);
    }
    exports.pathToRegexp = pathToRegexp;
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/path-match.js
var require_path_match = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/path-match.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getPathMatch = getPathMatch;
    var _extends = require_extends().default;
    var _pathToRegexp = require_path_to_regexp();
    function getPathMatch(path, options) {
      const keys = [];
      const regexp = (0, _pathToRegexp).pathToRegexp(path, keys, {
        delimiter: "/",
        sensitive: false,
        strict: options == null ? void 0 : options.strict
      });
      const matcher = (0, _pathToRegexp).regexpToFunction((options == null ? void 0 : options.regexModifier) ? new RegExp(options.regexModifier(regexp.source), regexp.flags) : regexp, keys);
      return (pathname, params) => {
        const res = pathname == null ? false : matcher(pathname);
        if (!res) {
          return false;
        }
        if (options == null ? void 0 : options.removeUnnamedParams) {
          for (const key of keys) {
            if (typeof key.name === "number") {
              delete res.params[key.name];
            }
          }
        }
        return _extends({}, params, res.params);
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/escape-regexp.js
var require_escape_regexp = __commonJS({
  "../../node_modules/next/dist/shared/lib/escape-regexp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.escapeStringRegexp = escapeStringRegexp;
    var reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
    var reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
    function escapeStringRegexp(str) {
      if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
      }
      return str;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/parse-url.js
var require_parse_url = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/parse-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseUrl = parseUrl;
    var _querystring = require_querystring();
    var _parseRelativeUrl = require_parse_relative_url();
    function parseUrl(url) {
      if (url.startsWith("/")) {
        return (0, _parseRelativeUrl).parseRelativeUrl(url);
      }
      const parsedURL = new URL(url);
      return {
        hash: parsedURL.hash,
        hostname: parsedURL.hostname,
        href: parsedURL.href,
        pathname: parsedURL.pathname,
        port: parsedURL.port,
        protocol: parsedURL.protocol,
        query: (0, _querystring).searchParamsToUrlQuery(parsedURL.searchParams),
        search: parsedURL.search
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/prepare-destination.js
var require_prepare_destination = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/prepare-destination.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.matchHas = matchHas;
    exports.compileNonPath = compileNonPath;
    exports.prepareDestination = prepareDestination;
    var _extends = require_extends().default;
    var _pathToRegexp = require_path_to_regexp();
    var _escapeRegexp = require_escape_regexp();
    var _parseUrl = require_parse_url();
    function matchHas(req, has, query) {
      const params = {};
      const allMatch = has.every((hasItem) => {
        let value;
        let key = hasItem.key;
        switch (hasItem.type) {
          case "header": {
            key = key.toLowerCase();
            value = req.headers[key];
            break;
          }
          case "cookie": {
            value = req.cookies[hasItem.key];
            break;
          }
          case "query": {
            value = query[key];
            break;
          }
          case "host": {
            const { host } = (req == null ? void 0 : req.headers) || {};
            const hostname = host == null ? void 0 : host.split(":")[0].toLowerCase();
            value = hostname;
            break;
          }
          default: {
            break;
          }
        }
        if (!hasItem.value && value) {
          params[getSafeParamName(key)] = value;
          return true;
        } else if (value) {
          const matcher = new RegExp(`^${hasItem.value}$`);
          const matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);
          if (matches) {
            if (Array.isArray(matches)) {
              if (matches.groups) {
                Object.keys(matches.groups).forEach((groupKey) => {
                  params[groupKey] = matches.groups[groupKey];
                });
              } else if (hasItem.type === "host" && matches[0]) {
                params.host = matches[0];
              }
            }
            return true;
          }
        }
        return false;
      });
      if (allMatch) {
        return params;
      }
      return false;
    }
    function compileNonPath(value, params) {
      if (!value.includes(":")) {
        return value;
      }
      for (const key of Object.keys(params)) {
        if (value.includes(`:${key}`)) {
          value = value.replace(new RegExp(`:${key}\\*`, "g"), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, "g"), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, "g"), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, "g"), `--ESCAPED_PARAM_COLON${key}`);
        }
      }
      value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*");
      return (0, _pathToRegexp).compile(`/${value}`, {
        validate: false
      })(params).slice(1);
    }
    function prepareDestination(args) {
      const query = Object.assign({}, args.query);
      delete query.__nextLocale;
      delete query.__nextDefaultLocale;
      delete query.__nextDataReq;
      let escapedDestination = args.destination;
      for (const param of Object.keys(_extends({}, args.params, query))) {
        escapedDestination = escapeSegment(escapedDestination, param);
      }
      const parsedDestination = (0, _parseUrl).parseUrl(escapedDestination);
      const destQuery = parsedDestination.query;
      const destPath = unescapeSegments(`${parsedDestination.pathname}${parsedDestination.hash || ""}`);
      const destHostname = unescapeSegments(parsedDestination.hostname || "");
      const destPathParamKeys = [];
      const destHostnameParamKeys = [];
      (0, _pathToRegexp).pathToRegexp(destPath, destPathParamKeys);
      (0, _pathToRegexp).pathToRegexp(destHostname, destHostnameParamKeys);
      const destParams = [];
      destPathParamKeys.forEach((key) => destParams.push(key.name));
      destHostnameParamKeys.forEach((key) => destParams.push(key.name));
      const destPathCompiler = (0, _pathToRegexp).compile(
        destPath,
        {
          validate: false
        }
      );
      const destHostnameCompiler = (0, _pathToRegexp).compile(destHostname, {
        validate: false
      });
      for (const [key1, strOrArray] of Object.entries(destQuery)) {
        if (Array.isArray(strOrArray)) {
          destQuery[key1] = strOrArray.map((value) => compileNonPath(unescapeSegments(value), args.params));
        } else {
          destQuery[key1] = compileNonPath(unescapeSegments(strOrArray), args.params);
        }
      }
      let paramKeys = Object.keys(args.params).filter((name) => name !== "nextInternalLocale");
      if (args.appendParamsToQuery && !paramKeys.some((key) => destParams.includes(key))) {
        for (const key of paramKeys) {
          if (!(key in destQuery)) {
            destQuery[key] = args.params[key];
          }
        }
      }
      let newUrl;
      try {
        newUrl = destPathCompiler(args.params);
        const [pathname, hash] = newUrl.split("#");
        parsedDestination.hostname = destHostnameCompiler(args.params);
        parsedDestination.pathname = pathname;
        parsedDestination.hash = `${hash ? "#" : ""}${hash || ""}`;
        delete parsedDestination.search;
      } catch (err) {
        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
          throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match`);
        }
        throw err;
      }
      parsedDestination.query = _extends({}, query, parsedDestination.query);
      return {
        newUrl,
        destQuery,
        parsedDestination
      };
    }
    function getSafeParamName(paramName) {
      let newParamName = "";
      for (let i = 0; i < paramName.length; i++) {
        const charCode = paramName.charCodeAt(i);
        if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123) {
          newParamName += paramName[i];
        }
      }
      return newParamName;
    }
    function escapeSegment(str, segmentName) {
      return str.replace(new RegExp(`:${(0, _escapeRegexp).escapeStringRegexp(segmentName)}`, "g"), `__ESC_COLON_${segmentName}`);
    }
    function unescapeSegments(str) {
      return str.replace(/__ESC_COLON_/gi, ":");
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js
var require_path_has_prefix = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.pathHasPrefix = pathHasPrefix;
    var _parsePath = require_parse_path();
    function pathHasPrefix(path, prefix) {
      if (typeof path !== "string") {
        return false;
      }
      const { pathname } = (0, _parsePath).parsePath(path);
      return pathname === prefix || pathname.startsWith(prefix + "/");
    }
  }
});

// ../../node_modules/next/dist/client/has-base-path.js
var require_has_base_path = __commonJS({
  "../../node_modules/next/dist/client/has-base-path.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.hasBasePath = hasBasePath;
    var _pathHasPrefix = require_path_has_prefix();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function hasBasePath(path) {
      return (0, _pathHasPrefix).pathHasPrefix(path, basePath);
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/client/remove-base-path.js
var require_remove_base_path = __commonJS({
  "../../node_modules/next/dist/client/remove-base-path.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removeBasePath = removeBasePath;
    var _hasBasePath = require_has_base_path();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function removeBasePath(path) {
      if (process.env.__NEXT_MANUAL_CLIENT_BASE_PATH) {
        if (!(0, _hasBasePath).hasBasePath(path)) {
          return path;
        }
      }
      path = path.slice(basePath.length);
      if (!path.startsWith("/"))
        path = `/${path}`;
      return path;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/resolve-rewrites.js
var require_resolve_rewrites = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/resolve-rewrites.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = resolveRewrites;
    var _pathMatch = require_path_match();
    var _prepareDestination = require_prepare_destination();
    var _removeTrailingSlash = require_remove_trailing_slash();
    var _normalizeLocalePath = require_normalize_locale_path();
    var _removeBasePath = require_remove_base_path();
    var _parseRelativeUrl = require_parse_relative_url();
    function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
      let matchedPage = false;
      let externalDest = false;
      let parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(asPath);
      let fsPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(parsedAs.pathname), locales).pathname);
      let resolvedHref;
      const handleRewrite = (rewrite) => {
        const matcher = (0, _pathMatch).getPathMatch(rewrite.source + (process.env.__NEXT_TRAILING_SLASH ? "(/)?" : ""), {
          removeUnnamedParams: true,
          strict: true
        });
        let params = matcher(parsedAs.pathname);
        if (rewrite.has && params) {
          const hasParams = (0, _prepareDestination).matchHas({
            headers: {
              host: document.location.hostname
            },
            cookies: document.cookie.split("; ").reduce((acc, item) => {
              const [key, ...value] = item.split("=");
              acc[key] = value.join("=");
              return acc;
            }, {})
          }, rewrite.has, parsedAs.query);
          if (hasParams) {
            Object.assign(params, hasParams);
          } else {
            params = false;
          }
        }
        if (params) {
          if (!rewrite.destination) {
            externalDest = true;
            return true;
          }
          const destRes = (0, _prepareDestination).prepareDestination({
            appendParamsToQuery: true,
            destination: rewrite.destination,
            params,
            query
          });
          parsedAs = destRes.parsedDestination;
          asPath = destRes.newUrl;
          Object.assign(query, destRes.parsedDestination.query);
          fsPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(asPath), locales).pathname);
          if (pages.includes(fsPathname)) {
            matchedPage = true;
            resolvedHref = fsPathname;
            return true;
          }
          resolvedHref = resolveHref(fsPathname);
          if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
            matchedPage = true;
            return true;
          }
        }
      };
      let finished = false;
      for (let i = 0; i < rewrites.beforeFiles.length; i++) {
        handleRewrite(rewrites.beforeFiles[i]);
      }
      matchedPage = pages.includes(fsPathname);
      if (!matchedPage) {
        if (!finished) {
          for (let i = 0; i < rewrites.afterFiles.length; i++) {
            if (handleRewrite(rewrites.afterFiles[i])) {
              finished = true;
              break;
            }
          }
        }
        if (!finished) {
          resolvedHref = resolveHref(fsPathname);
          matchedPage = pages.includes(resolvedHref);
          finished = matchedPage;
        }
        if (!finished) {
          for (let i = 0; i < rewrites.fallback.length; i++) {
            if (handleRewrite(rewrites.fallback[i])) {
              finished = true;
              break;
            }
          }
        }
      }
      return {
        asPath,
        parsedAs,
        matchedPage,
        resolvedHref,
        externalDest
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/route-matcher.js
var require_route_matcher = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/route-matcher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getRouteMatcher = getRouteMatcher;
    var _utils = require_utils2();
    function getRouteMatcher({ re, groups }) {
      return (pathname) => {
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
          return false;
        }
        const decode = (param) => {
          try {
            return decodeURIComponent(param);
          } catch (_) {
            throw new _utils.DecodeError("failed to decode param");
          }
        };
        const params = {};
        Object.keys(groups).forEach((slugName) => {
          const g = groups[slugName];
          const m = routeMatch[g.pos];
          if (m !== void 0) {
            params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry) => decode(entry)) : g.repeat ? [
              decode(m)
            ] : decode(m);
          }
        });
        return params;
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/route-regex.js
var require_route_regex = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/route-regex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getRouteRegex = getRouteRegex;
    exports.getNamedRouteRegex = getNamedRouteRegex;
    exports.getMiddlewareRegex = getMiddlewareRegex;
    exports.getNamedMiddlewareRegex = getNamedMiddlewareRegex;
    var _extends = require_extends().default;
    var _escapeRegexp = require_escape_regexp();
    var _removeTrailingSlash = require_remove_trailing_slash();
    function getRouteRegex(normalizedRoute) {
      const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
      return {
        re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
        groups
      };
    }
    function getNamedRouteRegex(normalizedRoute) {
      const result = getNamedParametrizedRoute(normalizedRoute);
      return _extends({}, getRouteRegex(normalizedRoute), {
        namedRegex: `^${result.namedParameterizedRoute}(?:/)?$`,
        routeKeys: result.routeKeys
      });
    }
    function getParametrizedRoute(route) {
      const segments = (0, _removeTrailingSlash).removeTrailingSlash(route).slice(1).split("/");
      const groups = {};
      let groupIndex = 1;
      return {
        parameterizedRoute: segments.map((segment) => {
          if (segment.startsWith("[") && segment.endsWith("]")) {
            const { key, optional, repeat } = parseParameter(segment.slice(1, -1));
            groups[key] = {
              pos: groupIndex++,
              repeat,
              optional
            };
            return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          } else {
            return `/${(0, _escapeRegexp).escapeStringRegexp(segment)}`;
          }
        }).join(""),
        groups
      };
    }
    function getNamedParametrizedRoute(route) {
      const segments = (0, _removeTrailingSlash).removeTrailingSlash(route).slice(1).split("/");
      const getSafeRouteKey = buildGetSafeRouteKey();
      const routeKeys = {};
      return {
        namedParameterizedRoute: segments.map((segment) => {
          if (segment.startsWith("[") && segment.endsWith("]")) {
            const { key, optional, repeat } = parseParameter(segment.slice(1, -1));
            let cleanedKey = key.replace(/\W/g, "");
            let invalidKey = false;
            if (cleanedKey.length === 0 || cleanedKey.length > 30) {
              invalidKey = true;
            }
            if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
              invalidKey = true;
            }
            if (invalidKey) {
              cleanedKey = getSafeRouteKey();
            }
            routeKeys[cleanedKey] = key;
            return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
          } else {
            return `/${(0, _escapeRegexp).escapeStringRegexp(segment)}`;
          }
        }).join(""),
        routeKeys
      };
    }
    function parseParameter(param) {
      const optional = param.startsWith("[") && param.endsWith("]");
      if (optional) {
        param = param.slice(1, -1);
      }
      const repeat = param.startsWith("...");
      if (repeat) {
        param = param.slice(3);
      }
      return {
        key: param,
        repeat,
        optional
      };
    }
    function buildGetSafeRouteKey() {
      let routeKeyCharCode = 97;
      let routeKeyCharLength = 1;
      return () => {
        let routeKey = "";
        for (let i = 0; i < routeKeyCharLength; i++) {
          routeKey += String.fromCharCode(routeKeyCharCode);
          routeKeyCharCode++;
          if (routeKeyCharCode > 122) {
            routeKeyCharLength++;
            routeKeyCharCode = 97;
          }
        }
        return routeKey;
      };
    }
    function getMiddlewareRegex(normalizedRoute, options) {
      const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
      const { catchAll = true } = options != null ? options : {};
      if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
          groups: {},
          re: new RegExp(`^/${catchAllRegex}$`)
        };
      }
      let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
      return {
        groups,
        re: new RegExp(`^${parameterizedRoute}${catchAllGroupedRegex}$`)
      };
    }
    function getNamedMiddlewareRegex(normalizedRoute, options) {
      const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
      const { catchAll = true } = options;
      if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
          namedRegex: `^/${catchAllRegex}$`
        };
      }
      const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute);
      let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
      return {
        namedRegex: `^${namedParameterizedRoute}${catchAllGroupedRegex}$`
      };
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/format-url.js
var require_format_url = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/format-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatUrl = formatUrl;
    exports.formatWithValidation = formatWithValidation;
    exports.urlObjectKeys = void 0;
    var _interop_require_wildcard = require_interop_require_wildcard().default;
    var querystring = _interop_require_wildcard(require_querystring());
    var slashedProtocols = /https?|ftp|gopher|file/;
    function formatUrl(urlObj) {
      let { auth, hostname } = urlObj;
      let protocol = urlObj.protocol || "";
      let pathname = urlObj.pathname || "";
      let hash = urlObj.hash || "";
      let query = urlObj.query || "";
      let host = false;
      auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
      if (urlObj.host) {
        host = auth + urlObj.host;
      } else if (hostname) {
        host = auth + (~hostname.indexOf(":") ? `[${hostname}]` : hostname);
        if (urlObj.port) {
          host += ":" + urlObj.port;
        }
      }
      if (query && typeof query === "object") {
        query = String(querystring.urlQueryToSearchParams(query));
      }
      let search = urlObj.search || query && `?${query}` || "";
      if (protocol && !protocol.endsWith(":"))
        protocol += ":";
      if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname[0] !== "/")
          pathname = "/" + pathname;
      } else if (!host) {
        host = "";
      }
      if (hash && hash[0] !== "#")
        hash = "#" + hash;
      if (search && search[0] !== "?")
        search = "?" + search;
      pathname = pathname.replace(/[?#]/g, encodeURIComponent);
      search = search.replace("#", "%23");
      return `${protocol}${host}${pathname}${search}${hash}`;
    }
    var urlObjectKeys = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes"
    ];
    exports.urlObjectKeys = urlObjectKeys;
    function formatWithValidation(url) {
      if (process.env.NODE_ENV === "development") {
        if (url !== null && typeof url === "object") {
          Object.keys(url).forEach((key) => {
            if (urlObjectKeys.indexOf(key) === -1) {
              console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
            }
          });
        }
      }
      return formatUrl(url);
    }
  }
});

// ../../node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js
var require_detect_domain_locale = __commonJS({
  "../../node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.detectDomainLocale = detectDomainLocale;
    function detectDomainLocale(domainItems, hostname, detectedLocale) {
      let domainItem;
      if (domainItems) {
        if (detectedLocale) {
          detectedLocale = detectedLocale.toLowerCase();
        }
        for (const item of domainItems) {
          var ref, ref1;
          const domainHostname = (ref = item.domain) == null ? void 0 : ref.split(":")[0].toLowerCase();
          if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((ref1 = item.locales) == null ? void 0 : ref1.some((locale) => locale.toLowerCase() === detectedLocale))) {
            domainItem = item;
            break;
          }
        }
      }
      return domainItem;
    }
  }
});

// ../../node_modules/next/dist/client/detect-domain-locale.js
var require_detect_domain_locale2 = __commonJS({
  "../../node_modules/next/dist/client/detect-domain-locale.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.detectDomainLocale = void 0;
    var detectDomainLocale = (...args) => {
      if (process.env.__NEXT_I18N_SUPPORT) {
        return require_detect_domain_locale().detectDomainLocale(...args);
      }
    };
    exports.detectDomainLocale = detectDomainLocale;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js
var require_add_path_prefix = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addPathPrefix = addPathPrefix;
    var _parsePath = require_parse_path();
    function addPathPrefix(path, prefix) {
      if (!path.startsWith("/") || !prefix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsePath).parsePath(path);
      return `${prefix}${pathname}${query}${hash}`;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/add-locale.js
var require_add_locale = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/add-locale.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addLocale = addLocale;
    var _addPathPrefix = require_add_path_prefix();
    var _pathHasPrefix = require_path_has_prefix();
    function addLocale(path, locale, defaultLocale, ignorePrefix) {
      if (locale && locale !== defaultLocale && (ignorePrefix || !(0, _pathHasPrefix).pathHasPrefix(path.toLowerCase(), `/${locale.toLowerCase()}`) && !(0, _pathHasPrefix).pathHasPrefix(path.toLowerCase(), "/api"))) {
        return (0, _addPathPrefix).addPathPrefix(path, `/${locale}`);
      }
      return path;
    }
  }
});

// ../../node_modules/next/dist/client/add-locale.js
var require_add_locale2 = __commonJS({
  "../../node_modules/next/dist/client/add-locale.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addLocale = void 0;
    var _normalizeTrailingSlash = require_normalize_trailing_slash();
    var addLocale = (path, ...args) => {
      if (process.env.__NEXT_I18N_SUPPORT) {
        return (0, _normalizeTrailingSlash).normalizePathTrailingSlash(require_add_locale().addLocale(path, ...args));
      }
      return path;
    };
    exports.addLocale = addLocale;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/client/remove-locale.js
var require_remove_locale = __commonJS({
  "../../node_modules/next/dist/client/remove-locale.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removeLocale = removeLocale;
    var _parsePath = require_parse_path();
    function removeLocale(path, locale) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const { pathname } = (0, _parsePath).parsePath(path);
        const pathLower = pathname.toLowerCase();
        const localeLower = locale == null ? void 0 : locale.toLowerCase();
        return locale && (pathLower.startsWith(`/${localeLower}/`) || pathLower === `/${localeLower}`) ? `${pathname.length === locale.length + 1 ? `/` : ``}${path.slice(locale.length + 1)}` : path;
      }
      return path;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/client/add-base-path.js
var require_add_base_path = __commonJS({
  "../../node_modules/next/dist/client/add-base-path.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addBasePath = addBasePath;
    var _addPathPrefix = require_add_path_prefix();
    var _normalizeTrailingSlash = require_normalize_trailing_slash();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function addBasePath(path, required) {
      if (process.env.__NEXT_MANUAL_CLIENT_BASE_PATH) {
        if (!required) {
          return path;
        }
      }
      return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js
var require_remove_path_prefix = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removePathPrefix = removePathPrefix;
    var _pathHasPrefix = require_path_has_prefix();
    function removePathPrefix(path, prefix) {
      if ((0, _pathHasPrefix).pathHasPrefix(path, prefix)) {
        const withoutPrefix = path.slice(prefix.length);
        return withoutPrefix.startsWith("/") ? withoutPrefix : `/${withoutPrefix}`;
      }
      return path;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js
var require_get_next_pathname_info = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getNextPathnameInfo = getNextPathnameInfo;
    var _normalizeLocalePath = require_normalize_locale_path();
    var _removePathPrefix = require_remove_path_prefix();
    var _pathHasPrefix = require_path_has_prefix();
    function getNextPathnameInfo(pathname, options) {
      var _nextConfig;
      const { basePath, i18n, trailingSlash } = (_nextConfig = options.nextConfig) != null ? _nextConfig : {};
      const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
      };
      if (basePath && (0, _pathHasPrefix).pathHasPrefix(info.pathname, basePath)) {
        info.pathname = (0, _removePathPrefix).removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
      }
      if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? `/${paths.slice(1).join("/")}` : "/";
        info.buildId = buildId;
      }
      if (i18n) {
        const pathLocale = (0, _normalizeLocalePath).normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = pathLocale == null ? void 0 : pathLocale.detectedLocale;
        info.pathname = (pathLocale == null ? void 0 : pathLocale.pathname) || info.pathname;
      }
      return info;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js
var require_add_path_suffix = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addPathSuffix = addPathSuffix;
    var _parsePath = require_parse_path();
    function addPathSuffix(path, suffix) {
      if (!path.startsWith("/") || !suffix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsePath).parsePath(path);
      return `${pathname}${suffix}${query}${hash}`;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js
var require_format_next_pathname_info = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatNextPathnameInfo = formatNextPathnameInfo;
    var _removeTrailingSlash = require_remove_trailing_slash();
    var _addPathPrefix = require_add_path_prefix();
    var _addPathSuffix = require_add_path_suffix();
    var _addLocale = require_add_locale();
    function formatNextPathnameInfo(info) {
      let pathname = (0, _addLocale).addLocale(info.pathname, info.locale, info.buildId ? void 0 : info.defaultLocale, info.ignorePrefix);
      if (info.buildId) {
        pathname = (0, _addPathSuffix).addPathSuffix((0, _addPathPrefix).addPathPrefix(pathname, `/_next/data/${info.buildId}`), info.pathname === "/" ? "index.json" : ".json");
      }
      pathname = (0, _addPathPrefix).addPathPrefix(pathname, info.basePath);
      return info.trailingSlash ? !info.buildId && !pathname.endsWith("/") ? (0, _addPathSuffix).addPathSuffix(pathname, "/") : pathname : (0, _removeTrailingSlash).removeTrailingSlash(pathname);
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/utils/compare-states.js
var require_compare_states = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/utils/compare-states.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.compareRouterStates = compareRouterStates;
    function compareRouterStates(a, b) {
      const stateKeys = Object.keys(a);
      if (stateKeys.length !== Object.keys(b).length)
        return false;
      for (let i = stateKeys.length; i--; ) {
        const key = stateKeys[i];
        if (key === "query") {
          const queryKeys = Object.keys(a.query);
          if (queryKeys.length !== Object.keys(b.query).length) {
            return false;
          }
          for (let j = queryKeys.length; j--; ) {
            const queryKey = queryKeys[j];
            if (!b.query.hasOwnProperty(queryKey) || a.query[queryKey] !== b.query[queryKey]) {
              return false;
            }
          }
        } else if (!b.hasOwnProperty(key) || a[key] !== b[key]) {
          return false;
        }
      }
      return true;
    }
  }
});

// ../../node_modules/next/dist/compiled/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "../../node_modules/next/dist/compiled/react-is/cjs/react-is.production.min.js"(exports) {
    "use strict";
    var b = 60103;
    var c = 60106;
    var d = 60107;
    var e = 60108;
    var f = 60114;
    var g = 60109;
    var h = 60110;
    var k = 60112;
    var l = 60113;
    var m = 60120;
    var n = 60115;
    var p = 60116;
    var q = 60121;
    var r = 60122;
    var u = 60117;
    var v = 60129;
    var w = 60131;
    if ("function" === typeof Symbol && Symbol.for) {
      x = Symbol.for;
      b = x("react.element");
      c = x("react.portal");
      d = x("react.fragment");
      e = x("react.strict_mode");
      f = x("react.profiler");
      g = x("react.provider");
      h = x("react.context");
      k = x("react.forward_ref");
      l = x("react.suspense");
      m = x("react.suspense_list");
      n = x("react.memo");
      p = x("react.lazy");
      q = x("react.block");
      r = x("react.server.block");
      u = x("react.fundamental");
      v = x("react.debug_trace_mode");
      w = x("react.legacy_hidden");
    }
    var x;
    function y(a) {
      if ("object" === typeof a && null !== a) {
        var t = a.$$typeof;
        switch (t) {
          case b:
            switch (a = a.type, a) {
              case d:
              case f:
              case e:
              case l:
              case m:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case h:
                  case k:
                  case p:
                  case n:
                  case g:
                    return a;
                  default:
                    return t;
                }
            }
          case c:
            return t;
        }
      }
    }
    var z = g;
    var A = b;
    var B = k;
    var C = d;
    var D = p;
    var E = n;
    var F = c;
    var G = f;
    var H = e;
    var I = l;
    exports.ContextConsumer = h;
    exports.ContextProvider = z;
    exports.Element = A;
    exports.ForwardRef = B;
    exports.Fragment = C;
    exports.Lazy = D;
    exports.Memo = E;
    exports.Portal = F;
    exports.Profiler = G;
    exports.StrictMode = H;
    exports.Suspense = I;
    exports.isAsyncMode = function() {
      return false;
    };
    exports.isConcurrentMode = function() {
      return false;
    };
    exports.isContextConsumer = function(a) {
      return y(a) === h;
    };
    exports.isContextProvider = function(a) {
      return y(a) === g;
    };
    exports.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === b;
    };
    exports.isForwardRef = function(a) {
      return y(a) === k;
    };
    exports.isFragment = function(a) {
      return y(a) === d;
    };
    exports.isLazy = function(a) {
      return y(a) === p;
    };
    exports.isMemo = function(a) {
      return y(a) === n;
    };
    exports.isPortal = function(a) {
      return y(a) === c;
    };
    exports.isProfiler = function(a) {
      return y(a) === f;
    };
    exports.isStrictMode = function(a) {
      return y(a) === e;
    };
    exports.isSuspense = function(a) {
      return y(a) === l;
    };
    exports.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === d || a === f || a === v || a === e || a === l || a === m || a === w || "object" === typeof a && null !== a && (a.$$typeof === p || a.$$typeof === n || a.$$typeof === g || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u || a.$$typeof === q || a[0] === r) ? true : false;
    };
    exports.typeOf = y;
  }
});

// ../../node_modules/next/dist/compiled/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "../../node_modules/next/dist/compiled/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// ../../node_modules/next/dist/compiled/react-is/index.js
var require_react_is = __commonJS({
  "../../node_modules/next/dist/compiled/react-is/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_is_production_min();
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// ../../node_modules/next/dist/shared/lib/router/router.js
var require_router = __commonJS({
  "../../node_modules/next/dist/shared/lib/router/router.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isLocalURL = isLocalURL;
    exports.interpolateAs = interpolateAs;
    exports.resolveHref = resolveHref;
    exports.createKey = createKey;
    exports.default = void 0;
    var _async_to_generator = require_async_to_generator().default;
    var _extends = require_extends().default;
    var _interop_require_default = require_interop_require_default().default;
    var _interop_require_wildcard = require_interop_require_wildcard().default;
    var _normalizeTrailingSlash = require_normalize_trailing_slash();
    var _removeTrailingSlash = require_remove_trailing_slash();
    var _routeLoader = require_route_loader();
    var _script = require_script();
    var _isError = _interop_require_wildcard(require_is_error());
    var _denormalizePagePath = require_denormalize_page_path();
    var _normalizeLocalePath = require_normalize_locale_path();
    var _mitt = _interop_require_default(require_mitt());
    var _utils = require_utils2();
    var _isDynamic = require_is_dynamic();
    var _parseRelativeUrl = require_parse_relative_url();
    var _querystring = require_querystring();
    var _resolveRewrites = _interop_require_default(require_resolve_rewrites());
    var _routeMatcher = require_route_matcher();
    var _routeRegex = require_route_regex();
    var _formatUrl = require_format_url();
    var _detectDomainLocale = require_detect_domain_locale2();
    var _parsePath = require_parse_path();
    var _addLocale = require_add_locale2();
    var _removeLocale = require_remove_locale();
    var _removeBasePath = require_remove_base_path();
    var _addBasePath = require_add_base_path();
    var _hasBasePath = require_has_base_path();
    var _getNextPathnameInfo = require_get_next_pathname_info();
    var _formatNextPathnameInfo = require_format_next_pathname_info();
    var _compareStates = require_compare_states();
    function buildCancellationError() {
      return Object.assign(new Error("Route Cancelled"), {
        cancelled: true
      });
    }
    function isLocalURL(url) {
      if (!(0, _utils).isAbsoluteUrl(url))
        return true;
      try {
        const locationOrigin = (0, _utils).getLocationOrigin();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasBasePath).hasBasePath(resolved.pathname);
      } catch (_) {
        return false;
      }
    }
    function interpolateAs(route, asPathname, query) {
      let interpolatedRoute = "";
      const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
      const dynamicGroups = dynamicRegex.groups;
      const dynamicMatches = (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : "") || query;
      interpolatedRoute = route;
      const params = Object.keys(dynamicGroups);
      if (!params.every((param) => {
        let value = dynamicMatches[param] || "";
        const { repeat, optional } = dynamicGroups[param];
        let replaced = `[${repeat ? "..." : ""}${param}]`;
        if (optional) {
          replaced = `${!value ? "/" : ""}[${replaced}]`;
        }
        if (repeat && !Array.isArray(value))
          value = [
            value
          ];
        return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(
          (segment) => encodeURIComponent(segment)
        ).join("/") : encodeURIComponent(value)) || "/");
      })) {
        interpolatedRoute = "";
      }
      return {
        params,
        result: interpolatedRoute
      };
    }
    function omit(object, keys) {
      const omitted = {};
      Object.keys(object).forEach((key) => {
        if (!keys.includes(key)) {
          omitted[key] = object[key];
        }
      });
      return omitted;
    }
    function resolveHref(router, href, resolveAs) {
      let base;
      let urlAsString = typeof href === "string" ? href : (0, _formatUrl).formatWithValidation(href);
      const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
      const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
      const urlParts = urlAsStringNoProto.split("?");
      if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
        const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
      }
      if (!isLocalURL(urlAsString)) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
      try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
      } catch (_) {
        base = new URL("/", "http://n");
      }
      try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
          const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
          const { result, params } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
          if (result) {
            interpolatedAs = (0, _formatUrl).formatWithValidation({
              pathname: result,
              hash: finalUrl.hash,
              query: omit(query, params)
            });
          }
        }
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
          resolvedHref,
          interpolatedAs || resolvedHref
        ] : resolvedHref;
      } catch (_1) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
    }
    function stripOrigin(url) {
      const origin = (0, _utils).getLocationOrigin();
      return url.startsWith(origin) ? url.substring(origin.length) : url;
    }
    function prepareUrlAs(router, url, as) {
      let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
      const origin = (0, _utils).getLocationOrigin();
      const hrefHadOrigin = resolvedHref.startsWith(origin);
      const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
      resolvedHref = stripOrigin(resolvedHref);
      resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
      const preparedUrl = hrefHadOrigin ? resolvedHref : (0, _addBasePath).addBasePath(resolvedHref);
      const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
      return {
        url: preparedUrl,
        as: asHadOrigin ? preparedAs : (0, _addBasePath).addBasePath(preparedAs)
      };
    }
    function resolveDynamicRoute(pathname, pages) {
      const cleanPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));
      if (cleanPathname === "/404" || cleanPathname === "/_error") {
        return pathname;
      }
      if (!pages.includes(cleanPathname)) {
        pages.some((page) => {
          if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
            pathname = page;
            return true;
          }
        });
      }
      return (0, _removeTrailingSlash).removeTrailingSlash(pathname);
    }
    var manualScrollRestoration = process.env.__NEXT_SCROLL_RESTORATION && typeof window !== "undefined" && "scrollRestoration" in window.history && !!function() {
      try {
        let v = "__next";
        return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), true;
      } catch (n) {
      }
    }();
    var SSG_DATA_NOT_FOUND = Symbol("SSG_DATA_NOT_FOUND");
    function fetchRetry(url, attempts, options) {
      return fetch(url, {
        credentials: "same-origin",
        method: options.method || "GET",
        headers: Object.assign({}, options.headers, {
          "x-nextjs-data": "1"
        })
      }).then((response) => {
        return !response.ok && attempts > 1 && response.status >= 500 ? fetchRetry(url, attempts - 1, options) : response;
      });
    }
    var backgroundCache = {};
    function fetchNextData({ dataHref, inflightCache, isPrefetch, hasMiddleware, isServerRender, parseJSON, persistCache, isBackground, unstable_skipClientCache }) {
      const { href: cacheKey } = new URL(dataHref, window.location.href);
      var ref1;
      const getData = (params) => {
        return fetchRetry(dataHref, isServerRender ? 3 : 1, {
          headers: isPrefetch ? {
            purpose: "prefetch"
          } : {},
          method: (ref1 = params == null ? void 0 : params.method) != null ? ref1 : "GET"
        }).then((response) => {
          if (response.ok && (params == null ? void 0 : params.method) === "HEAD") {
            return {
              dataHref,
              response,
              text: "",
              json: {}
            };
          }
          return response.text().then((text) => {
            if (!response.ok) {
              if (hasMiddleware && [
                301,
                302,
                307,
                308
              ].includes(response.status)) {
                return {
                  dataHref,
                  response,
                  text,
                  json: {}
                };
              }
              if (!hasMiddleware && response.status === 404) {
                var ref;
                if ((ref = tryToParseAsJSON(text)) == null ? void 0 : ref.notFound) {
                  return {
                    dataHref,
                    json: {
                      notFound: SSG_DATA_NOT_FOUND
                    },
                    response,
                    text
                  };
                }
              }
              const error = new Error(`Failed to load static props`);
              if (!isServerRender) {
                (0, _routeLoader).markAssetError(error);
              }
              throw error;
            }
            return {
              dataHref,
              json: parseJSON ? tryToParseAsJSON(text) : null,
              response,
              text
            };
          });
        }).then((data) => {
          if (!persistCache || process.env.NODE_ENV !== "production" || data.response.headers.get("x-middleware-cache") === "no-cache") {
            delete inflightCache[cacheKey];
          }
          return data;
        }).catch((err) => {
          delete inflightCache[cacheKey];
          throw err;
        });
      };
      if (unstable_skipClientCache && persistCache) {
        return getData({}).then((data) => {
          inflightCache[cacheKey] = Promise.resolve(data);
          return data;
        });
      }
      if (inflightCache[cacheKey] !== void 0) {
        return inflightCache[cacheKey];
      }
      return inflightCache[cacheKey] = getData(isBackground ? {
        method: "HEAD"
      } : {});
    }
    function tryToParseAsJSON(text) {
      try {
        return JSON.parse(text);
      } catch (error) {
        return null;
      }
    }
    function createKey() {
      return Math.random().toString(36).slice(2, 10);
    }
    function handleHardNavigation({ url, router }) {
      if (url === (0, _addBasePath).addBasePath((0, _addLocale).addLocale(router.asPath, router.locale))) {
        throw new Error(`Invariant: attempted to hard navigate to the same URL ${url} ${location.href}`);
      }
      window.location.href = url;
    }
    var getCancelledHandler = ({ route, router }) => {
      let cancelled = false;
      const cancel = router.clc = () => {
        cancelled = true;
      };
      const handleCancelled = () => {
        if (cancelled) {
          const error = new Error(`Abort fetching component for route: "${route}"`);
          error.cancelled = true;
          throw error;
        }
        if (cancel === router.clc) {
          router.clc = null;
        }
      };
      return handleCancelled;
    };
    var Router = class {
      reload() {
        window.location.reload();
      }
      back() {
        window.history.back();
      }
      push(url, as, options = {}) {
        if (process.env.__NEXT_SCROLL_RESTORATION) {
          if (manualScrollRestoration) {
            try {
              sessionStorage.setItem("__next_scroll_" + this._key, JSON.stringify({
                x: self.pageXOffset,
                y: self.pageYOffset
              }));
            } catch (e) {
            }
          }
        }
        ({ url, as } = prepareUrlAs(this, url, as));
        return this.change("pushState", url, as, options);
      }
      replace(url, as, options = {}) {
        ({ url, as } = prepareUrlAs(this, url, as));
        return this.change("replaceState", url, as, options);
      }
      change(method, url, as, options, forcedScroll) {
        var _this = this;
        return _async_to_generator(function* () {
          if (!isLocalURL(url)) {
            handleHardNavigation({
              url,
              router: _this
            });
            return false;
          }
          const isQueryUpdating = options._h;
          const shouldResolveHref = isQueryUpdating || options._shouldResolveHref || (0, _parsePath).parsePath(url).pathname === (0, _parsePath).parsePath(as).pathname;
          const nextState = _extends({}, _this.state);
          const readyStateChange = _this.isReady !== true;
          _this.isReady = true;
          const isSsr = _this.isSsr;
          if (!isQueryUpdating) {
            _this.isSsr = false;
          }
          if (isQueryUpdating && _this.clc) {
            return false;
          }
          const prevLocale = nextState.locale;
          if (process.env.__NEXT_I18N_SUPPORT) {
            nextState.locale = options.locale === false ? _this.defaultLocale : options.locale || nextState.locale;
            if (typeof options.locale === "undefined") {
              options.locale = nextState.locale;
            }
            const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as);
            const localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, _this.locales);
            if (localePathResult.detectedLocale) {
              nextState.locale = localePathResult.detectedLocale;
              parsedAs.pathname = (0, _addBasePath).addBasePath(parsedAs.pathname);
              as = (0, _formatUrl).formatWithValidation(parsedAs);
              url = (0, _addBasePath).addBasePath((0, _normalizeLocalePath).normalizeLocalePath((0, _hasBasePath).hasBasePath(url) ? (0, _removeBasePath).removeBasePath(url) : url, _this.locales).pathname);
            }
            let didNavigate = false;
            if (process.env.__NEXT_I18N_SUPPORT) {
              var ref;
              if (!((ref = _this.locales) == null ? void 0 : ref.includes(nextState.locale))) {
                parsedAs.pathname = (0, _addLocale).addLocale(parsedAs.pathname, nextState.locale);
                handleHardNavigation({
                  url: (0, _formatUrl).formatWithValidation(parsedAs),
                  router: _this
                });
                didNavigate = true;
              }
            }
            const detectedDomain = (0, _detectDomainLocale).detectDomainLocale(_this.domainLocales, void 0, nextState.locale);
            if (process.env.__NEXT_I18N_SUPPORT) {
              if (!didNavigate && detectedDomain && _this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
                const asNoBasePath = (0, _removeBasePath).removeBasePath(as);
                handleHardNavigation({
                  url: `http${detectedDomain.http ? "" : "s"}://${detectedDomain.domain}${(0, _addBasePath).addBasePath(`${nextState.locale === detectedDomain.defaultLocale ? "" : `/${nextState.locale}`}${asNoBasePath === "/" ? "" : asNoBasePath}` || "/")}`,
                  router: _this
                });
                didNavigate = true;
              }
            }
            if (didNavigate) {
              return new Promise(() => {
              });
            }
          }
          if (_utils.ST) {
            performance.mark("routeChange");
          }
          const { shallow = false, scroll = true } = options;
          const routeProps = {
            shallow
          };
          if (_this._inFlightRoute && _this.clc) {
            if (!isSsr) {
              Router.events.emit("routeChangeError", buildCancellationError(), _this._inFlightRoute, routeProps);
            }
            _this.clc();
            _this.clc = null;
          }
          as = (0, _addBasePath).addBasePath((0, _addLocale).addLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, options.locale, _this.defaultLocale));
          const cleanedAs = (0, _removeLocale).removeLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, nextState.locale);
          _this._inFlightRoute = as;
          const localeChange = prevLocale !== nextState.locale;
          if (!isQueryUpdating && _this.onlyAHashChange(cleanedAs) && !localeChange) {
            nextState.asPath = cleanedAs;
            Router.events.emit("hashChangeStart", as, routeProps);
            _this.changeState(method, url, as, _extends({}, options, {
              scroll: false
            }));
            if (scroll) {
              _this.scrollToHash(cleanedAs);
            }
            try {
              yield _this.set(nextState, _this.components[nextState.route], null);
            } catch (err) {
              if ((0, _isError).default(err) && err.cancelled) {
                Router.events.emit("routeChangeError", err, cleanedAs, routeProps);
              }
              throw err;
            }
            Router.events.emit("hashChangeComplete", as, routeProps);
            return true;
          }
          let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
          let { pathname, query } = parsed;
          let pages, rewrites;
          try {
            [pages, { __rewrites: rewrites }] = yield Promise.all([
              _this.pageLoader.getPageList(),
              (0, _routeLoader).getClientBuildManifest(),
              _this.pageLoader.getMiddleware()
            ]);
          } catch (err) {
            handleHardNavigation({
              url: as,
              router: _this
            });
            return false;
          }
          if (!_this.urlIsNew(cleanedAs) && !localeChange) {
            method = "replaceState";
          }
          let resolvedAs = as;
          pathname = pathname ? (0, _removeTrailingSlash).removeTrailingSlash((0, _removeBasePath).removeBasePath(pathname)) : pathname;
          const isMiddlewareMatch = yield matchesMiddleware({
            asPath: as,
            locale: nextState.locale,
            router: _this
          });
          if (options.shallow && isMiddlewareMatch) {
            pathname = _this.pathname;
          }
          if (shouldResolveHref && pathname !== "/_error") {
            options._shouldResolveHref = true;
            if (process.env.__NEXT_HAS_REWRITES && as.startsWith("/")) {
              const rewritesResult = (0, _resolveRewrites).default((0, _addBasePath).addBasePath((0, _addLocale).addLocale(cleanedAs, nextState.locale), true), pages, rewrites, query, (p) => resolveDynamicRoute(p, pages), _this.locales);
              if (rewritesResult.externalDest) {
                handleHardNavigation({
                  url: as,
                  router: _this
                });
                return true;
              }
              if (!isMiddlewareMatch) {
                resolvedAs = rewritesResult.asPath;
              }
              if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                pathname = rewritesResult.resolvedHref;
                parsed.pathname = (0, _addBasePath).addBasePath(pathname);
                if (!isMiddlewareMatch) {
                  url = (0, _formatUrl).formatWithValidation(parsed);
                }
              }
            } else {
              parsed.pathname = resolveDynamicRoute(pathname, pages);
              if (parsed.pathname !== pathname) {
                pathname = parsed.pathname;
                parsed.pathname = (0, _addBasePath).addBasePath(pathname);
                if (!isMiddlewareMatch) {
                  url = (0, _formatUrl).formatWithValidation(parsed);
                }
              }
            }
          }
          if (!isLocalURL(as)) {
            if (process.env.NODE_ENV !== "production") {
              throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as
See more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
            }
            handleHardNavigation({
              url: as,
              router: _this
            });
            return false;
          }
          resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(resolvedAs), nextState.locale);
          let route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
          let routeMatch = false;
          if ((0, _isDynamic).isDynamicRoute(route)) {
            const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
            const asPathname = parsedAs.pathname;
            const routeRegex = (0, _routeRegex).getRouteRegex(route);
            routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
            const shouldInterpolate = route === asPathname;
            const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
            if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
              const missingParams = Object.keys(routeRegex.groups).filter((param) => !query[param]);
              if (missingParams.length > 0 && !isMiddlewareMatch) {
                if (process.env.NODE_ENV !== "production") {
                  console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide the params: ${missingParams.join(", ")} in the \`href\`'s \`query\``);
                }
                throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(", ")}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? "href-interpolation-failed" : "incompatible-href-as"}`);
              }
            } else if (shouldInterpolate) {
              as = (0, _formatUrl).formatWithValidation(Object.assign({}, parsedAs, {
                pathname: interpolatedAs.result,
                query: omit(query, interpolatedAs.params)
              }));
            } else {
              Object.assign(query, routeMatch);
            }
          }
          if (!isQueryUpdating) {
            Router.events.emit("routeChangeStart", as, routeProps);
          }
          try {
            var ref2, ref3;
            let routeInfo = yield _this.getRouteInfo({
              route,
              pathname,
              query,
              as,
              resolvedAs,
              routeProps,
              locale: nextState.locale,
              isPreview: nextState.isPreview,
              hasMiddleware: isMiddlewareMatch
            });
            if ("route" in routeInfo && isMiddlewareMatch) {
              pathname = routeInfo.route || route;
              route = pathname;
              if (!routeProps.shallow) {
                query = Object.assign({}, routeInfo.query || {}, query);
              }
              if (routeMatch && pathname !== parsed.pathname) {
                Object.keys(routeMatch).forEach((key) => {
                  if (routeMatch && query[key] === routeMatch[key]) {
                    delete query[key];
                  }
                });
              }
              if ((0, _isDynamic).isDynamicRoute(pathname)) {
                const prefixedAs = !routeProps.shallow && routeInfo.resolvedAs ? routeInfo.resolvedAs : (0, _addBasePath).addBasePath((0, _addLocale).addLocale(new URL(as, location.href).pathname, nextState.locale), true);
                let rewriteAs = prefixedAs;
                if ((0, _hasBasePath).hasBasePath(rewriteAs)) {
                  rewriteAs = (0, _removeBasePath).removeBasePath(rewriteAs);
                }
                if (process.env.__NEXT_I18N_SUPPORT) {
                  const localeResult = (0, _normalizeLocalePath).normalizeLocalePath(rewriteAs, _this.locales);
                  nextState.locale = localeResult.detectedLocale || nextState.locale;
                  rewriteAs = localeResult.pathname;
                }
                const routeRegex = (0, _routeRegex).getRouteRegex(pathname);
                const curRouteMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(rewriteAs);
                if (curRouteMatch) {
                  Object.assign(query, curRouteMatch);
                }
              }
            }
            if ("type" in routeInfo) {
              if (routeInfo.type === "redirect-internal") {
                return _this.change(method, routeInfo.newUrl, routeInfo.newAs, options);
              } else {
                handleHardNavigation({
                  url: routeInfo.destination,
                  router: _this
                });
                return new Promise(() => {
                });
              }
            }
            let { error, props, __N_SSG, __N_SSP } = routeInfo;
            const component = routeInfo.Component;
            if (component && component.unstable_scriptLoader) {
              const scripts = [].concat(component.unstable_scriptLoader());
              scripts.forEach((script) => {
                (0, _script).handleClientScriptLoad(script.props);
              });
            }
            if ((__N_SSG || __N_SSP) && props) {
              if (props.pageProps && props.pageProps.__N_REDIRECT) {
                options.locale = false;
                const destination = props.pageProps.__N_REDIRECT;
                if (destination.startsWith("/") && props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
                  const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
                  parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                  const { url: newUrl, as: newAs } = prepareUrlAs(_this, destination, destination);
                  return _this.change(method, newUrl, newAs, options);
                }
                handleHardNavigation({
                  url: destination,
                  router: _this
                });
                return new Promise(() => {
                });
              }
              nextState.isPreview = !!props.__N_PREVIEW;
              if (props.notFound === SSG_DATA_NOT_FOUND) {
                let notFoundRoute;
                try {
                  yield _this.fetchComponent("/404");
                  notFoundRoute = "/404";
                } catch (_) {
                  notFoundRoute = "/_error";
                }
                routeInfo = yield _this.getRouteInfo({
                  route: notFoundRoute,
                  pathname: notFoundRoute,
                  query,
                  as,
                  resolvedAs,
                  routeProps: {
                    shallow: false
                  },
                  locale: nextState.locale,
                  isPreview: nextState.isPreview
                });
                if ("type" in routeInfo) {
                  throw new Error(`Unexpected middleware effect on /404`);
                }
              }
            }
            Router.events.emit("beforeHistoryChange", as, routeProps);
            _this.changeState(method, url, as, options);
            if (isQueryUpdating && pathname === "/_error" && ((ref2 = self.__NEXT_DATA__.props) == null ? void 0 : (ref3 = ref2.pageProps) == null ? void 0 : ref3.statusCode) === 500 && (props == null ? void 0 : props.pageProps)) {
              props.pageProps.statusCode = 500;
            }
            var _route;
            const isValidShallowRoute = options.shallow && nextState.route === ((_route = routeInfo.route) != null ? _route : route);
            var _scroll;
            const shouldScroll = (_scroll = options.scroll) != null ? _scroll : !options._h && !isValidShallowRoute;
            const resetScroll = shouldScroll ? {
              x: 0,
              y: 0
            } : null;
            const upcomingRouterState = _extends({}, nextState, {
              route,
              pathname,
              query,
              asPath: cleanedAs,
              isFallback: false
            });
            const upcomingScrollState = forcedScroll != null ? forcedScroll : resetScroll;
            const canSkipUpdating = options._h && !upcomingScrollState && !readyStateChange && !localeChange && (0, _compareStates).compareRouterStates(upcomingRouterState, _this.state);
            if (!canSkipUpdating) {
              yield _this.set(upcomingRouterState, routeInfo, upcomingScrollState).catch((e) => {
                if (e.cancelled)
                  error = error || e;
                else
                  throw e;
              });
              if (error) {
                if (!isQueryUpdating) {
                  Router.events.emit("routeChangeError", error, cleanedAs, routeProps);
                }
                throw error;
              }
              if (process.env.__NEXT_I18N_SUPPORT) {
                if (nextState.locale) {
                  document.documentElement.lang = nextState.locale;
                }
              }
              if (!isQueryUpdating) {
                Router.events.emit("routeChangeComplete", as, routeProps);
              }
              const hashRegex = /#.+$/;
              if (shouldScroll && hashRegex.test(as)) {
                _this.scrollToHash(as);
              }
            }
            return true;
          } catch (err1) {
            if ((0, _isError).default(err1) && err1.cancelled) {
              return false;
            }
            throw err1;
          }
        })();
      }
      changeState(method, url, as, options = {}) {
        if (process.env.NODE_ENV !== "production") {
          if (typeof window.history === "undefined") {
            console.error(`Warning: window.history is not available.`);
            return;
          }
          if (typeof window.history[method] === "undefined") {
            console.error(`Warning: window.history.${method} is not available`);
            return;
          }
        }
        if (method !== "pushState" || (0, _utils).getURL() !== as) {
          this._shallow = options.shallow;
          window.history[method](
            {
              url,
              as,
              options,
              __N: true,
              key: this._key = method !== "pushState" ? this._key : createKey()
            },
            "",
            as
          );
        }
      }
      handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
        var _this = this;
        return _async_to_generator(function* () {
          console.error(err);
          if (err.cancelled) {
            throw err;
          }
          if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
            Router.events.emit("routeChangeError", err, as, routeProps);
            handleHardNavigation({
              url: as,
              router: _this
            });
            throw buildCancellationError();
          }
          try {
            let props;
            const { page: Component, styleSheets } = yield _this.fetchComponent("/_error");
            const routeInfo = {
              props,
              Component,
              styleSheets,
              err,
              error: err
            };
            if (!routeInfo.props) {
              try {
                routeInfo.props = yield _this.getInitialProps(Component, {
                  err,
                  pathname,
                  query
                });
              } catch (gipErr) {
                console.error("Error in error page `getInitialProps`: ", gipErr);
                routeInfo.props = {};
              }
            }
            return routeInfo;
          } catch (routeInfoErr) {
            return _this.handleRouteInfoError((0, _isError).default(routeInfoErr) ? routeInfoErr : new Error(routeInfoErr + ""), pathname, query, as, routeProps, true);
          }
        })();
      }
      getRouteInfo({ route: requestedRoute, pathname, query, as, resolvedAs, routeProps, locale, hasMiddleware, isPreview, unstable_skipClientCache }) {
        var _this = this;
        return _async_to_generator(function* () {
          let route = requestedRoute;
          try {
            var ref, ref4, ref5;
            const handleCancelled = getCancelledHandler({
              route,
              router: _this
            });
            let existingInfo = _this.components[route];
            if (routeProps.shallow && existingInfo && _this.route === route) {
              return existingInfo;
            }
            if (hasMiddleware) {
              existingInfo = void 0;
            }
            let cachedRouteInfo = existingInfo && !("initial" in existingInfo) && process.env.NODE_ENV !== "development" ? existingInfo : void 0;
            const fetchNextDataParams = {
              dataHref: _this.pageLoader.getDataHref({
                href: (0, _formatUrl).formatWithValidation({
                  pathname,
                  query
                }),
                skipInterpolation: true,
                asPath: resolvedAs,
                locale
              }),
              hasMiddleware: true,
              isServerRender: _this.isSsr,
              parseJSON: true,
              inflightCache: _this.sdc,
              persistCache: !isPreview,
              isPrefetch: false,
              unstable_skipClientCache
            };
            const data = yield withMiddlewareEffects({
              fetchData: () => fetchNextData(fetchNextDataParams),
              asPath: resolvedAs,
              locale,
              router: _this
            });
            handleCancelled();
            if ((data == null ? void 0 : (ref = data.effect) == null ? void 0 : ref.type) === "redirect-internal" || (data == null ? void 0 : (ref4 = data.effect) == null ? void 0 : ref4.type) === "redirect-external") {
              return data.effect;
            }
            if ((data == null ? void 0 : (ref5 = data.effect) == null ? void 0 : ref5.type) === "rewrite") {
              route = (0, _removeTrailingSlash).removeTrailingSlash(data.effect.resolvedHref);
              pathname = data.effect.resolvedHref;
              query = _extends({}, query, data.effect.parsedAs.query);
              resolvedAs = (0, _removeBasePath).removeBasePath((0, _normalizeLocalePath).normalizeLocalePath(data.effect.parsedAs.pathname, _this.locales).pathname);
              existingInfo = _this.components[route];
              if (routeProps.shallow && existingInfo && _this.route === route && !hasMiddleware) {
                return _extends({}, existingInfo, {
                  route
                });
              }
            }
            if (route === "/api" || route.startsWith("/api/")) {
              handleHardNavigation({
                url: as,
                router: _this
              });
              return new Promise(() => {
              });
            }
            const routeInfo = cachedRouteInfo || (yield _this.fetchComponent(route).then((res) => ({
              Component: res.page,
              styleSheets: res.styleSheets,
              __N_SSG: res.mod.__N_SSG,
              __N_SSP: res.mod.__N_SSP,
              __N_RSC: !!res.mod.__next_rsc__
            })));
            if (process.env.NODE_ENV !== "production") {
              const { isValidElementType } = require_react_is();
              if (!isValidElementType(routeInfo.Component)) {
                throw new Error(`The default export is not a React Component in page: "${pathname}"`);
              }
            }
            const useStreamedFlightData = routeInfo.__N_RSC && (process.env.NODE_ENV !== "production" || routeInfo.__N_SSP);
            const shouldFetchData = routeInfo.__N_SSG || routeInfo.__N_SSP || routeInfo.__N_RSC;
            const { props } = yield _this._getData(_async_to_generator(function* () {
              if (shouldFetchData && !useStreamedFlightData) {
                const { json } = (data == null ? void 0 : data.json) ? data : yield fetchNextData({
                  dataHref: _this.pageLoader.getDataHref({
                    href: (0, _formatUrl).formatWithValidation({
                      pathname,
                      query
                    }),
                    asPath: resolvedAs,
                    locale
                  }),
                  isServerRender: _this.isSsr,
                  parseJSON: true,
                  inflightCache: _this.sdc,
                  persistCache: !isPreview,
                  isPrefetch: false,
                  unstable_skipClientCache
                });
                return {
                  props: json || {}
                };
              }
              return {
                headers: {},
                props: yield _this.getInitialProps(
                  routeInfo.Component,
                  {
                    pathname,
                    query,
                    asPath: as,
                    locale,
                    locales: _this.locales,
                    defaultLocale: _this.defaultLocale
                  }
                )
              };
            }));
            if (routeInfo.__N_SSP && fetchNextDataParams.dataHref) {
              const cacheKey = new URL(fetchNextDataParams.dataHref, window.location.href).href;
              delete _this.sdc[cacheKey];
            }
            if (!_this.isPreview && routeInfo.__N_SSG && process.env.NODE_ENV !== "development") {
              fetchNextData(Object.assign({}, fetchNextDataParams, {
                isBackground: true,
                persistCache: false,
                inflightCache: backgroundCache
              })).catch(() => {
              });
            }
            let flightInfo;
            if (routeInfo.__N_RSC) {
              flightInfo = {
                __flight__: useStreamedFlightData ? (yield _this._getData(() => _this._getFlightData((0, _formatUrl).formatWithValidation({
                  query: _extends({}, query, {
                    __flight__: "1"
                  }),
                  pathname: (0, _isDynamic).isDynamicRoute(route) ? interpolateAs(pathname, (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs).pathname, query).result : pathname
                })))).data : props.__flight__
              };
            }
            props.pageProps = Object.assign({}, props.pageProps, flightInfo);
            routeInfo.props = props;
            routeInfo.route = route;
            routeInfo.query = query;
            routeInfo.resolvedAs = resolvedAs;
            _this.components[route] = routeInfo;
            return routeInfo;
          } catch (err) {
            return _this.handleRouteInfoError((0, _isError).getProperError(err), pathname, query, as, routeProps);
          }
        })();
      }
      set(state, data, resetScroll) {
        this.state = state;
        return this.sub(data, this.components["/_app"].Component, resetScroll);
      }
      beforePopState(cb) {
        this._bps = cb;
      }
      onlyAHashChange(as) {
        if (!this.asPath)
          return false;
        const [oldUrlNoHash, oldHash] = this.asPath.split("#");
        const [newUrlNoHash, newHash] = as.split("#");
        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
          return true;
        }
        if (oldUrlNoHash !== newUrlNoHash) {
          return false;
        }
        return oldHash !== newHash;
      }
      scrollToHash(as) {
        const [, hash = ""] = as.split("#");
        if (hash === "" || hash === "top") {
          window.scrollTo(0, 0);
          return;
        }
        const rawHash = decodeURIComponent(hash);
        const idEl = document.getElementById(rawHash);
        if (idEl) {
          idEl.scrollIntoView();
          return;
        }
        const nameEl = document.getElementsByName(rawHash)[0];
        if (nameEl) {
          nameEl.scrollIntoView();
        }
      }
      urlIsNew(asPath) {
        return this.asPath !== asPath;
      }
      prefetch(url, asPath = url, options = {}) {
        var _this = this;
        return _async_to_generator(function* () {
          let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
          let { pathname, query } = parsed;
          if (process.env.__NEXT_I18N_SUPPORT) {
            if (options.locale === false) {
              pathname = (0, _normalizeLocalePath).normalizeLocalePath(pathname, _this.locales).pathname;
              parsed.pathname = pathname;
              url = (0, _formatUrl).formatWithValidation(parsed);
              let parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(asPath);
              const localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, _this.locales);
              parsedAs.pathname = localePathResult.pathname;
              options.locale = localePathResult.detectedLocale || _this.defaultLocale;
              asPath = (0, _formatUrl).formatWithValidation(parsedAs);
            }
          }
          const pages = yield _this.pageLoader.getPageList();
          let resolvedAs = asPath;
          const locale = typeof options.locale !== "undefined" ? options.locale || void 0 : _this.locale;
          const isMiddlewareMatch = yield matchesMiddleware({
            asPath,
            locale,
            router: _this
          });
          if (process.env.__NEXT_HAS_REWRITES && asPath.startsWith("/")) {
            let rewrites;
            ({ __rewrites: rewrites } = yield (0, _routeLoader).getClientBuildManifest());
            const rewritesResult = (0, _resolveRewrites).default((0, _addBasePath).addBasePath((0, _addLocale).addLocale(asPath, _this.locale), true), pages, rewrites, parsed.query, (p) => resolveDynamicRoute(p, pages), _this.locales);
            if (rewritesResult.externalDest) {
              return;
            }
            resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(rewritesResult.asPath), _this.locale);
            if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
              pathname = rewritesResult.resolvedHref;
              parsed.pathname = pathname;
              if (!isMiddlewareMatch) {
                url = (0, _formatUrl).formatWithValidation(parsed);
              }
            }
          }
          parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);
          if ((0, _isDynamic).isDynamicRoute(parsed.pathname)) {
            pathname = parsed.pathname;
            parsed.pathname = pathname;
            Object.assign(query, (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(parsed.pathname))((0, _parsePath).parsePath(asPath).pathname) || {});
            if (!isMiddlewareMatch) {
              url = (0, _formatUrl).formatWithValidation(parsed);
            }
          }
          if (process.env.NODE_ENV !== "production") {
            return;
          }
          const data = yield withMiddlewareEffects({
            fetchData: () => fetchNextData({
              dataHref: _this.pageLoader.getDataHref({
                href: (0, _formatUrl).formatWithValidation({
                  pathname,
                  query
                }),
                skipInterpolation: true,
                asPath: resolvedAs,
                locale
              }),
              hasMiddleware: true,
              isServerRender: _this.isSsr,
              parseJSON: true,
              inflightCache: _this.sdc,
              persistCache: !_this.isPreview,
              isPrefetch: true
            }),
            asPath,
            locale,
            router: _this
          });
          if ((data == null ? void 0 : data.effect.type) === "rewrite") {
            parsed.pathname = data.effect.resolvedHref;
            pathname = data.effect.resolvedHref;
            query = _extends({}, query, data.effect.parsedAs.query);
            resolvedAs = data.effect.parsedAs.pathname;
            url = (0, _formatUrl).formatWithValidation(parsed);
          }
          if ((data == null ? void 0 : data.effect.type) === "redirect-external") {
            return;
          }
          const route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
          yield Promise.all([
            _this.pageLoader._isSsg(route).then((isSsg) => {
              return isSsg ? fetchNextData({
                dataHref: (data == null ? void 0 : data.dataHref) || _this.pageLoader.getDataHref({
                  href: url,
                  asPath: resolvedAs,
                  locale
                }),
                isServerRender: false,
                parseJSON: true,
                inflightCache: _this.sdc,
                persistCache: !_this.isPreview,
                isPrefetch: true,
                unstable_skipClientCache: options.unstable_skipClientCache || options.priority && !!process.env.__NEXT_OPTIMISTIC_CLIENT_CACHE
              }).then(() => false) : false;
            }),
            _this.pageLoader[options.priority ? "loadPage" : "prefetch"](route)
          ]);
        })();
      }
      fetchComponent(route) {
        var _this = this;
        return _async_to_generator(function* () {
          const handleCancelled = getCancelledHandler({
            route,
            router: _this
          });
          try {
            const componentResult = yield _this.pageLoader.loadPage(route);
            handleCancelled();
            return componentResult;
          } catch (err) {
            handleCancelled();
            throw err;
          }
        })();
      }
      _getData(fn) {
        let cancelled = false;
        const cancel = () => {
          cancelled = true;
        };
        this.clc = cancel;
        return fn().then((data) => {
          if (cancel === this.clc) {
            this.clc = null;
          }
          if (cancelled) {
            const err = new Error("Loading initial props cancelled");
            err.cancelled = true;
            throw err;
          }
          return data;
        });
      }
      _getFlightData(dataHref) {
        return fetchNextData({
          dataHref,
          isServerRender: true,
          parseJSON: false,
          inflightCache: this.sdc,
          persistCache: false,
          isPrefetch: false
        }).then(({ text }) => ({
          data: text
        }));
      }
      getInitialProps(Component, ctx) {
        const { Component: App } = this.components["/_app"];
        const AppTree = this._wrapApp(App);
        ctx.AppTree = AppTree;
        return (0, _utils).loadGetInitialProps(App, {
          AppTree,
          Component,
          router: this,
          ctx
        });
      }
      get route() {
        return this.state.route;
      }
      get pathname() {
        return this.state.pathname;
      }
      get query() {
        return this.state.query;
      }
      get asPath() {
        return this.state.asPath;
      }
      get locale() {
        return this.state.locale;
      }
      get isFallback() {
        return this.state.isFallback;
      }
      get isPreview() {
        return this.state.isPreview;
      }
      constructor(pathname1, query1, as1, { initialProps, pageLoader, App, wrapApp, Component, err, subscription, isFallback, locale, locales, defaultLocale, domainLocales, isPreview, isRsc }) {
        this.sdc = {};
        this.isFirstPopStateEvent = true;
        this._key = createKey();
        this.onPopState = (e) => {
          const { isFirstPopStateEvent } = this;
          this.isFirstPopStateEvent = false;
          const state = e.state;
          if (!state) {
            const { pathname: pathname2, query } = this;
            this.changeState("replaceState", (0, _formatUrl).formatWithValidation({
              pathname: (0, _addBasePath).addBasePath(pathname2),
              query
            }), (0, _utils).getURL());
            return;
          }
          if (state.__NA) {
            window.location.reload();
            return;
          }
          if (!state.__N) {
            return;
          }
          if (isFirstPopStateEvent && this.locale === state.options.locale && state.as === this.asPath) {
            return;
          }
          let forcedScroll;
          const { url, as, options, key } = state;
          if (process.env.__NEXT_SCROLL_RESTORATION) {
            if (manualScrollRestoration) {
              if (this._key !== key) {
                try {
                  sessionStorage.setItem("__next_scroll_" + this._key, JSON.stringify({
                    x: self.pageXOffset,
                    y: self.pageYOffset
                  }));
                } catch (e2) {
                }
                try {
                  const v = sessionStorage.getItem("__next_scroll_" + key);
                  forcedScroll = JSON.parse(v);
                } catch (e1) {
                  forcedScroll = {
                    x: 0,
                    y: 0
                  };
                }
              }
            }
          }
          this._key = key;
          const { pathname } = (0, _parseRelativeUrl).parseRelativeUrl(url);
          if (this.isSsr && as === (0, _addBasePath).addBasePath(this.asPath) && pathname === (0, _addBasePath).addBasePath(this.pathname)) {
            return;
          }
          if (this._bps && !this._bps(state)) {
            return;
          }
          this.change("replaceState", url, as, Object.assign({}, options, {
            shallow: options.shallow && this._shallow,
            locale: options.locale || this.defaultLocale,
            _h: 0
          }), forcedScroll);
        };
        const route = (0, _removeTrailingSlash).removeTrailingSlash(pathname1);
        this.components = {};
        if (pathname1 !== "/_error") {
          this.components[route] = {
            Component,
            initial: true,
            props: initialProps,
            err,
            __N_SSG: initialProps && initialProps.__N_SSG,
            __N_SSP: initialProps && initialProps.__N_SSP,
            __N_RSC: !!isRsc
          };
        }
        this.components["/_app"] = {
          Component: App,
          styleSheets: []
        };
        this.events = Router.events;
        this.pageLoader = pageLoader;
        const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;
        this.basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
        this.sub = subscription;
        this.clc = null;
        this._wrapApp = wrapApp;
        this.isSsr = true;
        this.isLocaleDomain = false;
        this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !process.env.__NEXT_HAS_REWRITES);
        if (process.env.__NEXT_I18N_SUPPORT) {
          this.locales = locales;
          this.defaultLocale = defaultLocale;
          this.domainLocales = domainLocales;
          this.isLocaleDomain = !!(0, _detectDomainLocale).detectDomainLocale(domainLocales, self.location.hostname);
        }
        this.state = {
          route,
          pathname: pathname1,
          query: query1,
          asPath: autoExportDynamic ? pathname1 : as1,
          isPreview: !!isPreview,
          locale: process.env.__NEXT_I18N_SUPPORT ? locale : void 0,
          isFallback
        };
        this._initialMatchesMiddlewarePromise = Promise.resolve(false);
        if (typeof window !== "undefined") {
          if (!as1.startsWith("//")) {
            const options = {
              locale
            };
            const asPath = (0, _utils).getURL();
            this._initialMatchesMiddlewarePromise = matchesMiddleware({
              router: this,
              locale,
              asPath
            }).then((matches) => {
              options._shouldResolveHref = as1 !== pathname1;
              this.changeState("replaceState", matches ? asPath : (0, _formatUrl).formatWithValidation({
                pathname: (0, _addBasePath).addBasePath(pathname1),
                query: query1
              }), asPath, options);
              return matches;
            });
          }
          window.addEventListener("popstate", this.onPopState);
          if (process.env.__NEXT_SCROLL_RESTORATION) {
            if (manualScrollRestoration) {
              window.history.scrollRestoration = "manual";
            }
          }
        }
      }
    };
    Router.events = (0, _mitt).default();
    function matchesMiddleware(options) {
      return Promise.resolve(options.router.pageLoader.getMiddleware()).then((middleware) => {
        const { pathname: asPathname } = (0, _parsePath).parsePath(options.asPath);
        const cleanedAs = (0, _hasBasePath).hasBasePath(asPathname) ? (0, _removeBasePath).removeBasePath(asPathname) : asPathname;
        const regex = middleware == null ? void 0 : middleware.location;
        return !!regex && new RegExp(regex).test((0, _addLocale).addLocale(cleanedAs, options.locale));
      });
    }
    function withMiddlewareEffects(options) {
      return matchesMiddleware(options).then((matches) => {
        if (matches && options.fetchData) {
          return options.fetchData().then((data) => getMiddlewareData(data.dataHref, data.response, options).then((effect) => ({
            dataHref: data.dataHref,
            json: data.json,
            response: data.response,
            text: data.text,
            effect
          }))).catch((_err) => {
            return null;
          });
        }
        return null;
      });
    }
    function getMiddlewareData(source, response, options) {
      const nextConfig = {
        basePath: options.router.basePath,
        i18n: {
          locales: options.router.locales
        },
        trailingSlash: Boolean(process.env.__NEXT_TRAILING_SLASH)
      };
      const rewriteHeader = response.headers.get("x-nextjs-rewrite");
      let rewriteTarget = rewriteHeader || response.headers.get("x-nextjs-matched-path");
      const matchedPath = response.headers.get("x-matched-path");
      if (matchedPath && !rewriteTarget && !matchedPath.includes("__next_data_catchall") && !matchedPath.includes("/_error") && !matchedPath.includes("/404")) {
        rewriteTarget = matchedPath;
      }
      if (rewriteTarget) {
        if (rewriteTarget.startsWith("/")) {
          const parsedRewriteTarget = (0, _parseRelativeUrl).parseRelativeUrl(rewriteTarget);
          const pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(parsedRewriteTarget.pathname, {
            nextConfig,
            parseData: true
          });
          let fsPathname = (0, _removeTrailingSlash).removeTrailingSlash(pathnameInfo.pathname);
          return Promise.all([
            options.router.pageLoader.getPageList(),
            (0, _routeLoader).getClientBuildManifest()
          ]).then(([pages, { __rewrites: rewrites }]) => {
            let as = (0, _addLocale).addLocale(pathnameInfo.pathname, pathnameInfo.locale);
            if ((0, _isDynamic).isDynamicRoute(as) || !rewriteHeader && pages.includes((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(as), options.router.locales).pathname)) {
              const parsedSource = (0, _getNextPathnameInfo).getNextPathnameInfo((0, _parseRelativeUrl).parseRelativeUrl(source).pathname, {
                parseData: true
              });
              as = (0, _addBasePath).addBasePath(parsedSource.pathname);
              parsedRewriteTarget.pathname = as;
            }
            if (process.env.__NEXT_HAS_REWRITES) {
              const result = (0, _resolveRewrites).default(as, pages, rewrites, parsedRewriteTarget.query, (path) => resolveDynamicRoute(path, pages), options.router.locales);
              if (result.matchedPage) {
                parsedRewriteTarget.pathname = result.parsedAs.pathname;
                as = parsedRewriteTarget.pathname;
                Object.assign(parsedRewriteTarget.query, result.parsedAs.query);
              }
            } else if (!pages.includes(fsPathname)) {
              const resolvedPathname = resolveDynamicRoute(fsPathname, pages);
              if (resolvedPathname !== fsPathname) {
                fsPathname = resolvedPathname;
              }
            }
            const resolvedHref = !pages.includes(fsPathname) ? resolveDynamicRoute((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(parsedRewriteTarget.pathname), options.router.locales).pathname, pages) : fsPathname;
            if ((0, _isDynamic).isDynamicRoute(resolvedHref)) {
              const matches = (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(resolvedHref))(as);
              Object.assign(parsedRewriteTarget.query, matches || {});
            }
            return {
              type: "rewrite",
              parsedAs: parsedRewriteTarget,
              resolvedHref
            };
          });
        }
        const src = (0, _parsePath).parsePath(source);
        const pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
          nextConfig,
          parseData: true
        }), {
          defaultLocale: options.router.defaultLocale,
          buildId: ""
        }));
        return Promise.resolve({
          type: "redirect-external",
          destination: `${pathname}${src.query}${src.hash}`
        });
      }
      const redirectTarget = response.headers.get("x-nextjs-redirect");
      if (redirectTarget) {
        if (redirectTarget.startsWith("/")) {
          const src = (0, _parsePath).parsePath(redirectTarget);
          const pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
            nextConfig,
            parseData: true
          }), {
            defaultLocale: options.router.defaultLocale,
            buildId: ""
          }));
          return Promise.resolve({
            type: "redirect-internal",
            newAs: `${pathname}${src.query}${src.hash}`,
            newUrl: `${pathname}${src.query}${src.hash}`
          });
        }
        return Promise.resolve({
          type: "redirect-external",
          destination: redirectTarget
        });
      }
      return Promise.resolve({
        type: "next"
      });
    }
    exports.default = Router;
  }
});

// ../../node_modules/next/dist/shared/lib/router-context.js
var require_router_context = __commonJS({
  "../../node_modules/next/dist/shared/lib/router-context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RouterContext = void 0;
    var _interop_require_default = require_interop_require_default().default;
    var _react = _interop_require_default(__require("react"));
    var RouterContext = _react.default.createContext(null);
    exports.RouterContext = RouterContext;
    if (process.env.NODE_ENV !== "production") {
      RouterContext.displayName = "RouterContext";
    }
  }
});

// ../../node_modules/next/dist/shared/lib/app-router-context.js
var require_app_router_context = __commonJS({
  "../../node_modules/next/dist/shared/lib/app-router-context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GlobalLayoutRouterContext = exports.LayoutRouterContext = exports.AppRouterContext = void 0;
    var _interop_require_default = require_interop_require_default().default;
    var _react = _interop_require_default(__require("react"));
    var AppRouterContext = _react.default.createContext(null);
    exports.AppRouterContext = AppRouterContext;
    var LayoutRouterContext = _react.default.createContext(null);
    exports.LayoutRouterContext = LayoutRouterContext;
    var GlobalLayoutRouterContext = _react.default.createContext(null);
    exports.GlobalLayoutRouterContext = GlobalLayoutRouterContext;
    if (process.env.NODE_ENV !== "production") {
      AppRouterContext.displayName = "AppRouterContext";
      LayoutRouterContext.displayName = "LayoutRouterContext";
      GlobalLayoutRouterContext.displayName = "GlobalLayoutRouterContext";
    }
  }
});

// ../../node_modules/next/dist/client/use-intersection.js
var require_use_intersection = __commonJS({
  "../../node_modules/next/dist/client/use-intersection.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useIntersection = useIntersection;
    var _react = __require("react");
    var _requestIdleCallback = require_request_idle_callback();
    var hasIntersectionObserver = typeof IntersectionObserver === "function";
    function useIntersection({ rootRef, rootMargin, disabled }) {
      const isDisabled = disabled || !hasIntersectionObserver;
      const unobserve = (0, _react).useRef();
      const [visible, setVisible] = (0, _react).useState(false);
      const [element, setElement] = (0, _react).useState(null);
      (0, _react).useEffect(() => {
        if (hasIntersectionObserver) {
          if (unobserve.current) {
            unobserve.current();
            unobserve.current = void 0;
          }
          if (isDisabled || visible)
            return;
          if (element && element.tagName) {
            unobserve.current = observe(element, (isVisible) => isVisible && setVisible(isVisible), {
              root: rootRef == null ? void 0 : rootRef.current,
              rootMargin
            });
          }
          return () => {
            unobserve.current == null ? void 0 : unobserve.current();
            unobserve.current = void 0;
          };
        } else {
          if (!visible) {
            const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
            return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
          }
        }
      }, [
        element,
        isDisabled,
        rootMargin,
        rootRef,
        visible
      ]);
      const resetVisible = (0, _react).useCallback(() => {
        setVisible(false);
      }, []);
      return [
        setElement,
        visible,
        resetVisible
      ];
    }
    function observe(element, callback, options) {
      const { id, observer, elements } = createObserver(options);
      elements.set(element, callback);
      observer.observe(element);
      return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        if (elements.size === 0) {
          observer.disconnect();
          observers.delete(id);
          const index = idList.findIndex((obj) => obj.root === id.root && obj.margin === id.margin);
          if (index > -1) {
            idList.splice(index, 1);
          }
        }
      };
    }
    var observers = /* @__PURE__ */ new Map();
    var idList = [];
    function createObserver(options) {
      const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
      };
      const existing = idList.find((obj) => obj.root === id.root && obj.margin === id.margin);
      let instance;
      if (existing) {
        instance = observers.get(existing);
        if (instance) {
          return instance;
        }
      }
      const elements = /* @__PURE__ */ new Map();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const callback = elements.get(entry.target);
          const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
          if (callback && isVisible) {
            callback(isVisible);
          }
        });
      }, options);
      instance = {
        id,
        observer,
        elements
      };
      idList.push(id);
      observers.set(id, instance);
      return instance;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/client/normalize-locale-path.js
var require_normalize_locale_path2 = __commonJS({
  "../../node_modules/next/dist/client/normalize-locale-path.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normalizeLocalePath = void 0;
    var normalizeLocalePath = (pathname, locales) => {
      if (process.env.__NEXT_I18N_SUPPORT) {
        return require_normalize_locale_path().normalizeLocalePath(pathname, locales);
      }
      return {
        pathname,
        detectedLocale: void 0
      };
    };
    exports.normalizeLocalePath = normalizeLocalePath;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/client/get-domain-locale.js
var require_get_domain_locale = __commonJS({
  "../../node_modules/next/dist/client/get-domain-locale.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getDomainLocale = getDomainLocale;
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function getDomainLocale(path, locale, locales, domainLocales) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const normalizeLocalePath = require_normalize_locale_path2().normalizeLocalePath;
        const detectDomainLocale = require_detect_domain_locale2().detectDomainLocale;
        const target = locale || normalizeLocalePath(path, locales).detectedLocale;
        const domain = detectDomainLocale(domainLocales, void 0, target);
        if (domain) {
          const proto = `http${domain.http ? "" : "s"}://`;
          const finalLocale = target === domain.defaultLocale ? "" : `/${target}`;
          return `${proto}${domain.domain}${basePath}${finalLocale}${path}`;
        }
        return false;
      } else {
        return false;
      }
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/dist/client/link.js
var require_link = __commonJS({
  "../../node_modules/next/dist/client/link.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _interop_require_default = require_interop_require_default().default;
    var _object_without_properties_loose = require_object_without_properties_loose().default;
    var _react = _interop_require_default(__require("react"));
    var _router = require_router();
    var _addLocale = require_add_locale2();
    var _routerContext = require_router_context();
    var _appRouterContext = require_app_router_context();
    var _useIntersection = require_use_intersection();
    var _getDomainLocale = require_get_domain_locale();
    var _addBasePath = require_add_base_path();
    var hasUseTransition = typeof _react.default.useTransition !== "undefined";
    var prefetched = {};
    function prefetch(router, href, as, options) {
      if (typeof window === "undefined" || !router)
        return;
      if (!(0, _router).isLocalURL(href))
        return;
      router.prefetch(href, as, options).catch((err) => {
        if (process.env.NODE_ENV !== "production") {
          throw err;
        }
      });
      const curLocale = options && typeof options.locale !== "undefined" ? options.locale : router && router.locale;
      prefetched[href + "%" + as + (curLocale ? "%" + curLocale : "")] = true;
    }
    function isModifiedEvent(event) {
      const { target } = event.currentTarget;
      return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
    }
    function linkClicked(e, router, href, as, replace, soft, shallow, scroll, locale, startTransition) {
      const { nodeName } = e.currentTarget;
      const isAnchorNodeName = nodeName.toUpperCase() === "A";
      if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
        return;
      }
      e.preventDefault();
      const navigate = () => {
        if ("softPush" in router && "softReplace" in router) {
          const method = soft ? replace ? "softReplace" : "softPush" : replace ? "replace" : "push";
          router[method](href);
        } else {
          router[replace ? "replace" : "push"](href, as, {
            shallow,
            locale,
            scroll
          });
        }
      };
      if (startTransition) {
        startTransition(navigate);
      } else {
        navigate();
      }
    }
    var Link2 = /* @__PURE__ */ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
      if (process.env.NODE_ENV !== "production") {
        let createPropError = function(args) {
          return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== "undefined" ? "\nOpen your browser's console to view the Component stack trace." : ""));
        };
        const requiredPropsGuard = {
          href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key) => {
          if (key === "href") {
            if (props[key] == null || typeof props[key] !== "string" && typeof props[key] !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: props[key] === null ? "null" : typeof props[key]
              });
            }
          } else {
            const _ = key;
          }
        });
        const optionalPropsGuard = {
          as: true,
          replace: true,
          soft: true,
          scroll: true,
          shallow: true,
          passHref: true,
          prefetch: true,
          locale: true,
          onClick: true,
          onMouseEnter: true,
          onTouchStart: true,
          legacyBehavior: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key) => {
          const valType = typeof props[key];
          if (key === "as") {
            if (props[key] && valType !== "string" && valType !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: valType
              });
            }
          } else if (key === "locale") {
            if (props[key] && valType !== "string") {
              throw createPropError({
                key,
                expected: "`string`",
                actual: valType
              });
            }
          } else if (key === "onClick" || key === "onMouseEnter" || key === "onTouchStart") {
            if (props[key] && valType !== "function") {
              throw createPropError({
                key,
                expected: "`function`",
                actual: valType
              });
            }
          } else if (key === "replace" || key === "soft" || key === "scroll" || key === "shallow" || key === "passHref" || key === "prefetch" || key === "legacyBehavior") {
            if (props[key] != null && valType !== "boolean") {
              throw createPropError({
                key,
                expected: "`boolean`",
                actual: valType
              });
            }
          } else {
            const _ = key;
          }
        });
        const hasWarned = _react.default.useRef(false);
        if (props.prefetch && !hasWarned.current) {
          hasWarned.current = true;
          console.warn("Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated");
        }
      }
      let children;
      const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp, passHref, replace, soft, shallow, scroll, locale, onClick, onMouseEnter, onTouchStart, legacyBehavior = Boolean(process.env.__NEXT_NEW_LINK_BEHAVIOR) !== true } = props, restProps = _object_without_properties_loose(props, [
        "href",
        "as",
        "children",
        "prefetch",
        "passHref",
        "replace",
        "soft",
        "shallow",
        "scroll",
        "locale",
        "onClick",
        "onMouseEnter",
        "onTouchStart",
        "legacyBehavior"
      ]);
      children = childrenProp;
      if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /* @__PURE__ */ _react.default.createElement("a", null, children);
      }
      const p = prefetchProp !== false;
      const [, startTransition] = hasUseTransition ? _react.default.useTransition() : [];
      let router = _react.default.useContext(_routerContext.RouterContext);
      const appRouter = _react.default.useContext(_appRouterContext.AppRouterContext);
      if (appRouter) {
        router = appRouter;
      }
      const { href, as } = _react.default.useMemo(() => {
        const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, hrefProp, true);
        return {
          href: resolvedHref,
          as: asProp ? (0, _router).resolveHref(router, asProp) : resolvedAs || resolvedHref
        };
      }, [
        router,
        hrefProp,
        asProp
      ]);
      const previousHref = _react.default.useRef(href);
      const previousAs = _react.default.useRef(as);
      let child;
      if (legacyBehavior) {
        if (process.env.NODE_ENV === "development") {
          if (onClick) {
            console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
          }
          if (onMouseEnter) {
            console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
          }
          try {
            child = _react.default.Children.only(children);
          } catch (err) {
            if (!children) {
              throw new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`);
            }
            throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== "undefined" ? " \nOpen your browser's console to view the Component stack trace." : ""));
          }
        } else {
          child = _react.default.Children.only(children);
        }
      }
      const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
      const [setIntersectionRef, isVisible, resetVisible] = (0, _useIntersection).useIntersection({
        rootMargin: "200px"
      });
      const setRef = _react.default.useCallback((el) => {
        if (previousAs.current !== as || previousHref.current !== href) {
          resetVisible();
          previousAs.current = as;
          previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
          if (typeof childRef === "function")
            childRef(el);
          else if (typeof childRef === "object") {
            childRef.current = el;
          }
        }
      }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
      ]);
      _react.default.useEffect(() => {
        const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
        const curLocale = typeof locale !== "undefined" ? locale : router && router.locale;
        const isPrefetched = prefetched[href + "%" + as + (curLocale ? "%" + curLocale : "")];
        if (shouldPrefetch && !isPrefetched) {
          prefetch(router, href, as, {
            locale: curLocale
          });
        }
      }, [
        as,
        href,
        isVisible,
        locale,
        p,
        router
      ]);
      const childProps = {
        ref: setRef,
        onClick: (e) => {
          if (process.env.NODE_ENV !== "production") {
            if (!e) {
              throw new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`);
            }
          }
          if (!legacyBehavior && typeof onClick === "function") {
            onClick(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
            child.props.onClick(e);
          }
          if (!e.defaultPrevented) {
            linkClicked(e, router, href, as, replace, soft, shallow, scroll, locale, appRouter ? startTransition : void 0);
          }
        },
        onMouseEnter: (e) => {
          if (!legacyBehavior && typeof onMouseEnter === "function") {
            onMouseEnter(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
            child.props.onMouseEnter(e);
          }
          if ((0, _router).isLocalURL(href)) {
            prefetch(router, href, as, {
              priority: true
            });
          }
        },
        onTouchStart: (e) => {
          if (!legacyBehavior && typeof onTouchStart === "function") {
            onTouchStart(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
            child.props.onTouchStart(e);
          }
          if ((0, _router).isLocalURL(href)) {
            prefetch(router, href, as, {
              priority: true
            });
          }
        }
      };
      if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : router && router.locale;
        const localeDomain = router && router.isLocaleDomain && (0, _getDomainLocale).getDomainLocale(as, curLocale, router.locales, router.domainLocales);
        childProps.href = localeDomain || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, curLocale, router && router.defaultLocale));
      }
      return legacyBehavior ? /* @__PURE__ */ _react.default.cloneElement(child, childProps) : /* @__PURE__ */ _react.default.createElement("a", Object.assign({}, restProps, childProps), children);
    });
    var _default = Link2;
    exports.default = _default;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/link.js
var require_link2 = __commonJS({
  "../../node_modules/next/link.js"(exports, module) {
    module.exports = require_link();
  }
});

// src/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ jsx("a", {
      href: "https://turborepo.org/docs/getting-started",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6",
        children: [
          "Read the docs",
          /* @__PURE__ */ jsx("span", {
            className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent",
            children: "\u2192"
          })
        ]
      })
    })
  });
};

// src/SVG.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function LogoSVG() {
  return /* @__PURE__ */ jsxs2("svg", {
    width: 306,
    height: 282,
    viewBox: "0 0 306 282",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx2("path", {
        d: "M246.75 241.714a2.72 2.72 0 01-2.721-2.724V123.582a2.722 2.722 0 00-2.722-2.725h-74.989a2.723 2.723 0 01-2.721-2.724V0H122.92v282h40.677V163.867a2.723 2.723 0 012.721-2.724h34.757a2.722 2.722 0 012.722 2.724v97.99c0 5.342 2.12 10.466 5.893 14.243a20.11 20.11 0 0014.228 5.9h61.052a2.722 2.722 0 002.722-2.725v-34.836a2.722 2.722 0 00-2.722-2.725h-38.22z",
        fill: "#F7F3F0"
      }),
      /* @__PURE__ */ jsx2("path", {
        d: "M244.039 40.286V2.725A2.723 2.723 0 00241.318 0h-34.81a2.722 2.722 0 00-2.722 2.725v75.122a2.722 2.722 0 002.722 2.725h34.799a2.722 2.722 0 002.722-2.725l.01-37.561zM42.435 161.143v77.847a2.726 2.726 0 01-2.722 2.724H2.722A2.72 2.72 0 000 244.439v34.836A2.726 2.726 0 002.722 282h59.834a20.109 20.109 0 0014.228-5.9 20.153 20.153 0 005.893-14.243V123.582a2.727 2.727 0 00-2.721-2.725H45.167a2.734 2.734 0 00-2.732 2.725v37.561z",
        fill: "#F7F3F0"
      })
    ]
  });
}
function Kind2SVG() {
  return /* @__PURE__ */ jsxs2("svg", {
    width: 150,
    height: 110,
    viewBox: "0 0 150 110",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [
      /* @__PURE__ */ jsx2("path", {
        fill: "url(#pattern0)",
        fillOpacity: 0.5,
        d: "M0 0H150V110H0z"
      }),
      /* @__PURE__ */ jsxs2("defs", {
        children: [
          /* @__PURE__ */ jsx2("pattern", {
            id: "pattern0",
            patternContentUnits: "objectBoundingBox",
            width: 1,
            height: 1,
            children: /* @__PURE__ */ jsx2("use", {
              xlinkHref: "#image0_496_517",
              transform: "matrix(.00153 0 0 .0021 -.002 0)"
            })
          }),
          /* @__PURE__ */ jsx2("image", {
            id: "image0_496_517",
            width: 654,
            height: 478,
            xlinkHref: "data:image/png;base64,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"
          })
        ]
      })
    ]
  });
}
function GithubSVG() {
  return /* @__PURE__ */ jsx2("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx2("path", {
      d: "M16 0C7.165 0 0 7.345 0 16.404c0 7.248 4.584 13.398 10.943 15.567.798.152 1.057-.357 1.057-.789v-3.054c-4.45.993-5.377-1.936-5.377-1.936-.728-1.896-1.778-2.4-1.778-2.4-1.452-1.019.111-.997.111-.997 1.607.115 2.452 1.691 2.452 1.691 1.427 2.508 3.743 1.783 4.656 1.363.143-1.06.557-1.784 1.016-2.192-3.553-.417-7.29-1.824-7.29-8.108 0-1.792.626-3.255 1.649-4.403-.166-.415-.714-2.084.156-4.342 0 0 1.344-.44 4.401 1.681A14.99 14.99 0 0116 7.933c1.36.007 2.73.189 4.008.552 3.055-2.121 4.396-1.681 4.396-1.681.87 2.26.323 3.929.157 4.341 1.027 1.149 1.647 2.613 1.647 4.404 0 6.3-3.743 7.688-7.305 8.094.573.508 1.097 1.506 1.097 3.037v4.502c0 .436.256.949 1.068.788C27.421 29.797 32 23.65 32 16.404 32 7.345 24.836 0 16 0z",
      fill: "#F7F3F0",
      fillOpacity: 0.5
    })
  });
}
function TwitterSVG() {
  return /* @__PURE__ */ jsx2("svg", {
    width: 32,
    height: 27,
    viewBox: "0 0 32 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx2("path", {
      d: "M32 3.079a13.108 13.108 0 01-3.77 1.033A6.576 6.576 0 0031.115.48a13.151 13.151 0 01-4.17 1.593A6.554 6.554 0 0022.156 0c-4.239 0-7.354 3.955-6.396 8.06-5.455-.273-10.292-2.887-13.531-6.859a6.574 6.574 0 002.03 8.766 6.537 6.537 0 01-2.971-.822c-.072 3.042 2.108 5.887 5.265 6.52-.924.251-1.936.31-2.965.112a6.57 6.57 0 006.133 4.559A13.2 13.2 0 010 23.056a18.585 18.585 0 0010.064 2.95c12.19 0 19.076-10.295 18.66-19.529A13.366 13.366 0 0032 3.08z",
      fill: "#F7F3F0",
      fillOpacity: 0.5
    })
  });
}
function YoutubeSVG() {
  return /* @__PURE__ */ jsx2("svg", {
    width: 32,
    height: 24,
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx2("path", {
      d: "M26.153.245c-4.805-.327-15.508-.326-20.306 0C.65.6.039 3.74 0 12 .039 20.247.645 23.4 5.847 23.755c4.8.326 15.501.328 20.306 0C31.35 23.4 31.961 20.262 32 12 31.961 3.753 31.355.601 26.153.245zM12 17.334V6.668l10.667 5.324L12 17.334z",
      fill: "#F7F3F0",
      fillOpacity: 0.5
    })
  });
}
function DiscordSVG() {
  return /* @__PURE__ */ jsx2("svg", {
    width: 33,
    height: 24,
    viewBox: "0 0 33 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx2("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M28.054 2.874C24.108-.086 20.356 0 20.356 0l-.389.435c4.661 1.426 6.825 3.496 6.825 3.496a22.368 22.368 0 00-8.246-2.645 23.33 23.33 0 00-5.53.054l-.467.055c-2.15.241-4.25.82-6.222 1.712-.952.435-1.554.75-1.608.777.136-.105 2.424-2.175 7.197-3.557L11.652 0S7.888-.085 3.946 2.874c0 0-3.946 7.15-3.946 15.975 0 0 2.3 3.973 8.354 4.164 0 0 1.014-1.232 1.838-2.276-3.496-1.041-4.793-3.232-4.793-3.232l.777.466.108.082.109.062h.031l.109.058c.643.359 1.312.67 2 .933 1.304.51 2.653.9 4.028 1.165 2.343.448 4.75.457 7.096.027a18.16 18.16 0 003.97-1.165 15.507 15.507 0 003.153-1.616s-1.371 2.249-4.96 3.262c.82 1.041 1.806 2.218 1.806 2.218 6.055-.19 8.386-4.163 8.386-4.163-.012-8.81-3.958-15.96-3.958-15.96zM10.875 16.313c-1.534 0-2.792-1.371-2.792-3.041s1.239-3.053 2.792-3.053a2.899 2.899 0 012.797 3.041c0 1.67-1.243 3.053-2.797 3.053zm10.001 0c-1.553 0-2.792-1.371-2.792-3.041s1.231-3.041 2.792-3.041c1.562 0 2.816 1.355 2.816 3.03 0 1.673-1.254 3.052-2.816 3.052z",
      fill: "#F7F3F0",
      fillOpacity: 0.5
    })
  });
}
function SVG({ type }) {
  return {
    logo: /* @__PURE__ */ jsx2(LogoSVG, {}),
    kind2: /* @__PURE__ */ jsx2(Kind2SVG, {}),
    github: /* @__PURE__ */ jsx2(GithubSVG, {}),
    twitter: /* @__PURE__ */ jsx2(TwitterSVG, {}),
    youtube: /* @__PURE__ */ jsx2(YoutubeSVG, {}),
    discord: /* @__PURE__ */ jsx2(DiscordSVG, {})
  }[type];
}

// src/Footer.tsx
var import_link = __toESM(require_link2());
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function Footer() {
  const fullYear = new Date().getFullYear();
  return /* @__PURE__ */ jsxs3("footer", {
    className: "bg-mineshaft mt-auto flex h-24 w-full items-center justify-around",
    children: [
      /* @__PURE__ */ jsx3("div", {
        children: /* @__PURE__ */ jsxs3("text", {
          className: "text-springwood font-inter text-base font-semibold opacity-50",
          children: [
            "\xA9 ",
            fullYear,
            " Kindelia Foundation"
          ]
        })
      }),
      /* @__PURE__ */ jsxs3("div", {
        className: "flex items-center gap-4",
        children: [
          /* @__PURE__ */ jsx3("text", {
            className: "text-springwood font-inter text-base font-semibold opacity-50",
            children: "Follow us"
          }),
          /* @__PURE__ */ jsx3(import_link.default, {
            href: "https://twitter.com/kindelia",
            children: /* @__PURE__ */ jsx3(SVG, {
              type: "twitter"
            })
          }),
          /* @__PURE__ */ jsx3(import_link.default, {
            href: "https://youtube.com/kindelia",
            children: /* @__PURE__ */ jsx3(SVG, {
              type: "youtube"
            })
          }),
          /* @__PURE__ */ jsx3(import_link.default, {
            href: "https://discord.gg/kindelia",
            children: /* @__PURE__ */ jsx3(SVG, {
              type: "discord"
            })
          })
        ]
      })
    ]
  });
}
export {
  Button,
  Footer,
  SVG
};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
