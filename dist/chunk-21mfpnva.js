// @bun
import {
  ThemedBox_default,
  ThemedText,
  init_src
} from "./chunk-cmsknj6n.js";
import {
  require_jsx_dev_runtime
} from "./chunk-g338npwr.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/SearchBox.tsx
function SearchBox({
  query,
  placeholder = "Search\u2026",
  isFocused,
  isTerminalFocused,
  prefix = "\u2315",
  width,
  cursorOffset,
  borderless = false
}) {
  const offset = cursorOffset ?? query.length;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexShrink: 0,
    borderStyle: borderless ? undefined : "round",
    borderColor: isFocused ? "suggestion" : undefined,
    borderDimColor: !isFocused,
    paddingX: borderless ? 0 : 1,
    width,
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      dimColor: !isFocused,
      children: [
        prefix,
        " ",
        isFocused ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
          children: query ? isTerminalFocused ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: query.slice(0, offset)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                inverse: true,
                children: offset < query.length ? query[offset] : " "
              }, undefined, false, undefined, this),
              offset < query.length && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: query.slice(offset + 1)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: query
          }, undefined, false, undefined, this) : isTerminalFocused ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                inverse: true,
                children: placeholder.charAt(0)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: placeholder.slice(1)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: placeholder
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this) : query ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: query
        }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: placeholder
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime;
var init_SearchBox = __esm(() => {
  init_src();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

export { SearchBox, init_SearchBox };
