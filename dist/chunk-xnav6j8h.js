// @bun
import {
  init_src,
  use_input_default
} from "./chunk-cmsknj6n.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-g338npwr.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/keybindings/match.ts
function getKeyName(input, key) {
  if (key.escape)
    return "escape";
  if (key.return)
    return "enter";
  if (key.tab)
    return "tab";
  if (key.backspace)
    return "backspace";
  if (key.delete)
    return "delete";
  if (key.upArrow)
    return "up";
  if (key.downArrow)
    return "down";
  if (key.leftArrow)
    return "left";
  if (key.rightArrow)
    return "right";
  if (key.pageUp)
    return "pageup";
  if (key.pageDown)
    return "pagedown";
  if (key.wheelUp)
    return "wheelup";
  if (key.wheelDown)
    return "wheeldown";
  if (key.home)
    return "home";
  if (key.end)
    return "end";
  if (input.length === 1)
    return input.toLowerCase();
  return null;
}
var init_match = () => {};

// src/keybindings/parser.ts
function parseKeystroke(input) {
  const parts = input.split("+");
  const keystroke = {
    key: "",
    ctrl: false,
    alt: false,
    shift: false,
    meta: false,
    super: false
  };
  for (const part of parts) {
    const lower = part.toLowerCase();
    switch (lower) {
      case "ctrl":
      case "control":
        keystroke.ctrl = true;
        break;
      case "alt":
      case "opt":
      case "option":
        keystroke.alt = true;
        break;
      case "shift":
        keystroke.shift = true;
        break;
      case "meta":
        keystroke.meta = true;
        break;
      case "cmd":
      case "command":
      case "super":
      case "win":
        keystroke.super = true;
        break;
      case "esc":
        keystroke.key = "escape";
        break;
      case "return":
        keystroke.key = "enter";
        break;
      case "space":
        keystroke.key = " ";
        break;
      case "\u2191":
        keystroke.key = "up";
        break;
      case "\u2193":
        keystroke.key = "down";
        break;
      case "\u2190":
        keystroke.key = "left";
        break;
      case "\u2192":
        keystroke.key = "right";
        break;
      default:
        keystroke.key = lower;
        break;
    }
  }
  return keystroke;
}
function parseChord(input) {
  if (input === " ")
    return [parseKeystroke("space")];
  return input.trim().split(/\s+/).map(parseKeystroke);
}
function keystrokeToString(ks) {
  const parts = [];
  if (ks.ctrl)
    parts.push("ctrl");
  if (ks.alt)
    parts.push("alt");
  if (ks.shift)
    parts.push("shift");
  if (ks.meta)
    parts.push("meta");
  if (ks.super)
    parts.push("cmd");
  const displayKey = keyToDisplayName(ks.key);
  parts.push(displayKey);
  return parts.join("+");
}
function keyToDisplayName(key) {
  switch (key) {
    case "escape":
      return "Esc";
    case " ":
      return "Space";
    case "tab":
      return "tab";
    case "enter":
      return "Enter";
    case "backspace":
      return "Backspace";
    case "delete":
      return "Delete";
    case "up":
      return "\u2191";
    case "down":
      return "\u2193";
    case "left":
      return "\u2190";
    case "right":
      return "\u2192";
    case "pageup":
      return "PageUp";
    case "pagedown":
      return "PageDown";
    case "home":
      return "Home";
    case "end":
      return "End";
    default:
      return key;
  }
}
function chordToString(chord) {
  return chord.map(keystrokeToString).join(" ");
}
function parseBindings(blocks) {
  const bindings = [];
  for (const block of blocks) {
    for (const [key, action] of Object.entries(block.bindings)) {
      bindings.push({
        chord: parseChord(key),
        action,
        context: block.context
      });
    }
  }
  return bindings;
}
var init_parser = () => {};

// src/keybindings/resolver.ts
function getBindingDisplayText(action, context, bindings) {
  const binding = bindings.findLast((b) => b.action === action && b.context === context);
  return binding ? chordToString(binding.chord) : undefined;
}
function buildKeystroke(input, key) {
  const keyName = getKeyName(input, key);
  if (!keyName)
    return null;
  const effectiveMeta = key.escape ? false : key.meta;
  return {
    key: keyName,
    ctrl: key.ctrl,
    alt: effectiveMeta,
    shift: key.shift,
    meta: effectiveMeta,
    super: key.super
  };
}
function keystrokesEqual(a, b) {
  return a.key === b.key && a.ctrl === b.ctrl && a.shift === b.shift && (a.alt || a.meta) === (b.alt || b.meta) && a.super === b.super;
}
function chordPrefixMatches(prefix, binding) {
  if (prefix.length >= binding.chord.length)
    return false;
  for (let i = 0;i < prefix.length; i++) {
    const prefixKey = prefix[i];
    const bindingKey = binding.chord[i];
    if (!prefixKey || !bindingKey)
      return false;
    if (!keystrokesEqual(prefixKey, bindingKey))
      return false;
  }
  return true;
}
function chordExactlyMatches(chord, binding) {
  if (chord.length !== binding.chord.length)
    return false;
  for (let i = 0;i < chord.length; i++) {
    const chordKey = chord[i];
    const bindingKey = binding.chord[i];
    if (!chordKey || !bindingKey)
      return false;
    if (!keystrokesEqual(chordKey, bindingKey))
      return false;
  }
  return true;
}
function resolveKeyWithChordState(input, key, activeContexts, bindings, pending) {
  if (key.escape && pending !== null) {
    return { type: "chord_cancelled" };
  }
  const currentKeystroke = buildKeystroke(input, key);
  if (!currentKeystroke) {
    if (pending !== null) {
      return { type: "chord_cancelled" };
    }
    return { type: "none" };
  }
  const testChord = pending ? [...pending, currentKeystroke] : [currentKeystroke];
  const ctxSet = new Set(activeContexts);
  const contextBindings = bindings.filter((b) => ctxSet.has(b.context));
  const chordWinners = new Map;
  for (const binding of contextBindings) {
    if (binding.chord.length > testChord.length && chordPrefixMatches(testChord, binding)) {
      chordWinners.set(chordToString(binding.chord), binding.action);
    }
  }
  let hasLongerChords = false;
  for (const action of chordWinners.values()) {
    if (action !== null) {
      hasLongerChords = true;
      break;
    }
  }
  if (hasLongerChords) {
    return { type: "chord_started", pending: testChord };
  }
  let exactMatch;
  for (const binding of contextBindings) {
    if (chordExactlyMatches(testChord, binding)) {
      exactMatch = binding;
    }
  }
  if (exactMatch) {
    if (exactMatch.action === null) {
      return { type: "unbound" };
    }
    return { type: "match", action: exactMatch.action };
  }
  if (pending !== null) {
    return { type: "chord_cancelled" };
  }
  return { type: "none" };
}
var init_resolver = __esm(() => {
  init_match();
  init_parser();
});

// src/keybindings/KeybindingContext.tsx
function KeybindingProvider({
  bindings,
  pendingChordRef,
  pendingChord,
  setPendingChord,
  activeContexts,
  registerActiveContext,
  unregisterActiveContext,
  handlerRegistryRef,
  children
}) {
  const value = import_react.useMemo(() => {
    const getDisplay = (action, context) => getBindingDisplayText(action, context, bindings);
    const registerHandler = (registration) => {
      const registry = handlerRegistryRef.current;
      if (!registry)
        return () => {};
      if (!registry.has(registration.action)) {
        registry.set(registration.action, new Set);
      }
      registry.get(registration.action).add(registration);
      return () => {
        const handlers = registry.get(registration.action);
        if (handlers) {
          handlers.delete(registration);
          if (handlers.size === 0) {
            registry.delete(registration.action);
          }
        }
      };
    };
    const invokeAction = (action) => {
      const registry = handlerRegistryRef.current;
      if (!registry)
        return false;
      const handlers = registry.get(action);
      if (!handlers || handlers.size === 0)
        return false;
      for (const registration of handlers) {
        if (activeContexts.has(registration.context)) {
          registration.handler();
          return true;
        }
      }
      return false;
    };
    return {
      resolve: (input, key, contexts) => resolveKeyWithChordState(input, key, contexts, bindings, pendingChordRef.current),
      setPendingChord,
      getDisplayText: getDisplay,
      bindings,
      pendingChord,
      activeContexts,
      registerActiveContext,
      unregisterActiveContext,
      registerHandler,
      invokeAction
    };
  }, [
    bindings,
    pendingChordRef,
    pendingChord,
    setPendingChord,
    activeContexts,
    registerActiveContext,
    unregisterActiveContext,
    handlerRegistryRef
  ]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeybindingContext.Provider, {
    value,
    children
  }, undefined, false, undefined, this);
}
function useOptionalKeybindingContext() {
  return import_react.useContext(KeybindingContext);
}
function useRegisterKeybindingContext(context, isActive = true) {
  const keybindingContext = useOptionalKeybindingContext();
  import_react.useLayoutEffect(() => {
    if (!keybindingContext || !isActive)
      return;
    keybindingContext.registerActiveContext(context);
    return () => {
      keybindingContext.unregisterActiveContext(context);
    };
  }, [context, keybindingContext, isActive]);
}
var import_react, jsx_dev_runtime, KeybindingContext;
var init_KeybindingContext = __esm(() => {
  init_resolver();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
  KeybindingContext = import_react.createContext(null);
});

// src/keybindings/useKeybinding.ts
function useKeybinding(action, handler, options = {}) {
  const { context = "Global", isActive = true } = options;
  const keybindingContext = useOptionalKeybindingContext();
  import_react2.useEffect(() => {
    if (!keybindingContext || !isActive)
      return;
    return keybindingContext.registerHandler({ action, context, handler });
  }, [action, context, handler, keybindingContext, isActive]);
  const handleInput = import_react2.useCallback((input, key, event) => {
    if (!keybindingContext)
      return;
    const contextsToCheck = [
      ...keybindingContext.activeContexts,
      context,
      "Global"
    ];
    const uniqueContexts = [...new Set(contextsToCheck)];
    const result = keybindingContext.resolve(input, key, uniqueContexts);
    switch (result.type) {
      case "match":
        keybindingContext.setPendingChord(null);
        if (result.action === action) {
          if (handler() !== false) {
            event.stopImmediatePropagation();
          }
        }
        break;
      case "chord_started":
        keybindingContext.setPendingChord(result.pending);
        event.stopImmediatePropagation();
        break;
      case "chord_cancelled":
        keybindingContext.setPendingChord(null);
        break;
      case "unbound":
        keybindingContext.setPendingChord(null);
        event.stopImmediatePropagation();
        break;
      case "none":
        break;
    }
  }, [action, context, handler, keybindingContext]);
  use_input_default(handleInput, { isActive });
}
function useKeybindings(handlers, options = {}) {
  const { context = "Global", isActive = true } = options;
  const keybindingContext = useOptionalKeybindingContext();
  import_react2.useEffect(() => {
    if (!keybindingContext || !isActive)
      return;
    const unregisterFns = [];
    for (const [action, handler] of Object.entries(handlers)) {
      unregisterFns.push(keybindingContext.registerHandler({ action, context, handler }));
    }
    return () => {
      for (const unregister of unregisterFns) {
        unregister();
      }
    };
  }, [context, handlers, keybindingContext, isActive]);
  const handleInput = import_react2.useCallback((input, key, event) => {
    if (!keybindingContext)
      return;
    const contextsToCheck = [
      ...keybindingContext.activeContexts,
      context,
      "Global"
    ];
    const uniqueContexts = [...new Set(contextsToCheck)];
    const result = keybindingContext.resolve(input, key, uniqueContexts);
    switch (result.type) {
      case "match":
        keybindingContext.setPendingChord(null);
        if (result.action in handlers) {
          const handler = handlers[result.action];
          if (handler && handler() !== false) {
            event.stopImmediatePropagation();
          }
        }
        break;
      case "chord_started":
        keybindingContext.setPendingChord(result.pending);
        event.stopImmediatePropagation();
        break;
      case "chord_cancelled":
        keybindingContext.setPendingChord(null);
        break;
      case "unbound":
        keybindingContext.setPendingChord(null);
        event.stopImmediatePropagation();
        break;
      case "none":
        break;
    }
  }, [context, handlers, keybindingContext]);
  use_input_default(handleInput, { isActive });
}
var import_react2;
var init_useKeybinding = __esm(() => {
  init_src();
  init_KeybindingContext();
  import_react2 = __toESM(require_react(), 1);
});

export { parseKeystroke, parseChord, chordToString, parseBindings, init_parser, getBindingDisplayText, keystrokesEqual, resolveKeyWithChordState, init_resolver, KeybindingProvider, useOptionalKeybindingContext, useRegisterKeybindingContext, init_KeybindingContext, useKeybinding, useKeybindings, init_useKeybinding };
