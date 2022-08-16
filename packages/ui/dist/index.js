"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  SVG: () => SVG
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
      href: "https://turborepo.org/docs/getting-started",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6",
        children: [
          "Read the docs",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent",
            children: "\u2192"
          })
        ]
      })
    })
  });
};

// src/SVG.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function LogoSVG() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
    width: 306,
    height: 282,
    viewBox: "0 0 306 282",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        d: "M246.75 241.714a2.72 2.72 0 01-2.721-2.724V123.582a2.722 2.722 0 00-2.722-2.725h-74.989a2.723 2.723 0 01-2.721-2.724V0H122.92v282h40.677V163.867a2.723 2.723 0 012.721-2.724h34.757a2.722 2.722 0 012.722 2.724v97.99c0 5.342 2.12 10.466 5.893 14.243a20.11 20.11 0 0014.228 5.9h61.052a2.722 2.722 0 002.722-2.725v-34.836a2.722 2.722 0 00-2.722-2.725h-38.22z",
        fill: "#F7F3F0"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        d: "M244.039 40.286V2.725A2.723 2.723 0 00241.318 0h-34.81a2.722 2.722 0 00-2.722 2.725v75.122a2.722 2.722 0 002.722 2.725h34.799a2.722 2.722 0 002.722-2.725l.01-37.561zM42.435 161.143v77.847a2.726 2.726 0 01-2.722 2.724H2.722A2.72 2.72 0 000 244.439v34.836A2.726 2.726 0 002.722 282h59.834a20.109 20.109 0 0014.228-5.9 20.153 20.153 0 005.893-14.243V123.582a2.727 2.727 0 00-2.721-2.725H45.167a2.734 2.734 0 00-2.732 2.725v37.561z",
        fill: "#F7F3F0"
      })
    ]
  });
}
function Kind2SVG() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
    width: 150,
    height: 110,
    viewBox: "0 0 150 110",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        fill: "url(#pattern0)",
        fillOpacity: 0.5,
        d: "M0 0H150V110H0z"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
            id: "pattern0",
            patternContentUnits: "objectBoundingBox",
            width: 1,
            height: 1,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("use", {
              xlinkHref: "#image0_496_517",
              transform: "matrix(.00153 0 0 .0021 -.002 0)"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M16 0C7.165 0 0 7.345 0 16.404c0 7.248 4.584 13.398 10.943 15.567.798.152 1.057-.357 1.057-.789v-3.054c-4.45.993-5.377-1.936-5.377-1.936-.728-1.896-1.778-2.4-1.778-2.4-1.452-1.019.111-.997.111-.997 1.607.115 2.452 1.691 2.452 1.691 1.427 2.508 3.743 1.783 4.656 1.363.143-1.06.557-1.784 1.016-2.192-3.553-.417-7.29-1.824-7.29-8.108 0-1.792.626-3.255 1.649-4.403-.166-.415-.714-2.084.156-4.342 0 0 1.344-.44 4.401 1.681A14.99 14.99 0 0116 7.933c1.36.007 2.73.189 4.008.552 3.055-2.121 4.396-1.681 4.396-1.681.87 2.26.323 3.929.157 4.341 1.027 1.149 1.647 2.613 1.647 4.404 0 6.3-3.743 7.688-7.305 8.094.573.508 1.097 1.506 1.097 3.037v4.502c0 .436.256.949 1.068.788C27.421 29.797 32 23.65 32 16.404 32 7.345 24.836 0 16 0z",
      fill: "#F7F3F0",
      fillOpacity: 0.5
    })
  });
}
function TwitterSVG() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    width: 32,
    height: 27,
    viewBox: "0 0 32 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M32 3.079a13.108 13.108 0 01-3.77 1.033A6.576 6.576 0 0031.115.48a13.151 13.151 0 01-4.17 1.593A6.554 6.554 0 0022.156 0c-4.239 0-7.354 3.955-6.396 8.06-5.455-.273-10.292-2.887-13.531-6.859a6.574 6.574 0 002.03 8.766 6.537 6.537 0 01-2.971-.822c-.072 3.042 2.108 5.887 5.265 6.52-.924.251-1.936.31-2.965.112a6.57 6.57 0 006.133 4.559A13.2 13.2 0 010 23.056a18.585 18.585 0 0010.064 2.95c12.19 0 19.076-10.295 18.66-19.529A13.366 13.366 0 0032 3.08z",
      fill: "#F7F3F0",
      fillOpacity: 0.5
    })
  });
}
function YoutubeSVG() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    width: 32,
    height: 24,
    viewBox: "0 0 32 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M26.153.245c-4.805-.327-15.508-.326-20.306 0C.65.6.039 3.74 0 12 .039 20.247.645 23.4 5.847 23.755c4.8.326 15.501.328 20.306 0C31.35 23.4 31.961 20.262 32 12 31.961 3.753 31.355.601 26.153.245zM12 17.334V6.668l10.667 5.324L12 17.334z",
      fill: "#F7F3F0",
      fillOpacity: 0.5
    })
  });
}
function DiscordSVG() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    width: 33,
    height: 24,
    viewBox: "0 0 33 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
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
    logo: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoSVG, {}),
    kind2: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kind2SVG, {}),
    github: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubSVG, {}),
    twitter: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TwitterSVG, {}),
    youtube: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YoutubeSVG, {}),
    discord: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiscordSVG, {})
  }[type];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  SVG
});
