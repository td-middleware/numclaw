// @bun
import {
  init_modalContext,
  useIsInsideModal
} from "./chunk-z1bs6d7k.js";
import {
  init_useTerminalSize
} from "./chunk-1dqpv8j1.js";
import {
  init_useKeybinding
} from "./chunk-xnav6j8h.js";
import {
  ThemedBox_default,
  init_src
} from "./chunk-cmsknj6n.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-g338npwr.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/design-system/Tabs.tsx
function Tab({ title, id, children }) {
  const { selectedTab, width } = import_react.useContext(TabsContext);
  const insideModal = useIsInsideModal();
  if (selectedTab !== (id ?? title)) {
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    width,
    flexShrink: insideModal ? 0 : undefined,
    children
  }, undefined, false, undefined, this);
}
function useTabsWidth() {
  const { width } = import_react.useContext(TabsContext);
  return width;
}
function useTabHeaderFocus() {
  const { headerFocused, focusHeader, blurHeader, registerOptIn } = import_react.useContext(TabsContext);
  import_react.useEffect(registerOptIn, [registerOptIn]);
  return { headerFocused, focusHeader, blurHeader };
}
var import_react, jsx_dev_runtime, TabsContext;
var init_Tabs = __esm(() => {
  init_modalContext();
  init_useTerminalSize();
  init_src();
  init_useKeybinding();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
  TabsContext = import_react.createContext({
    selectedTab: undefined,
    width: undefined,
    headerFocused: false,
    focusHeader: () => {},
    blurHeader: () => {},
    registerOptIn: () => () => {}
  });
});

export { Tab, useTabsWidth, useTabHeaderFocus, init_Tabs };
