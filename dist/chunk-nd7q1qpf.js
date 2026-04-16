// @bun
import {
  PromptInputHelpMenu,
  init_PromptInputHelpMenu
} from "./chunk-b9jc9rxx.js";
import {
  Tab,
  init_Tabs,
  useTabHeaderFocus
} from "./chunk-y4hg3tzq.js";
import {
  init_modalContext,
  useIsInsideModal
} from "./chunk-z1bs6d7k.js";
import {
  INTERNAL_ONLY_COMMANDS,
  builtInCommandNames,
  formatDescriptionWithSource,
  init_commands1 as init_commands,
  init_useShortcutDisplay,
  init_useTerminalSize,
  useShortcutDisplay,
  useTerminalSize
} from "./chunk-1dqpv8j1.js";
import"./chunk-2m9aherq.js";
import"./chunk-ft4hf2cg.js";
import"./chunk-hkxa4n4h.js";
import"./chunk-8rnfj5x5.js";
import"./chunk-zejm280k.js";
import"./chunk-4nspekjp.js";
import"./chunk-var1et7e.js";
import"./chunk-ehtwnxpg.js";
import"./chunk-ackrcfpg.js";
import"./chunk-49k6ne9r.js";
import"./chunk-bxcfz5gy.js";
import"./chunk-6kjt5vks.js";
import"./chunk-2gzv8nrw.js";
import"./chunk-8h6sdj66.js";
import"./chunk-cgfdkzhb.js";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-4n6tcmpp.js";
import"./chunk-j5bth84e.js";
import"./chunk-eb45z2nb.js";
import"./chunk-5pevjsyw.js";
import {
  init_useKeybinding,
  useKeybinding
} from "./chunk-xnav6j8h.js";
import"./chunk-ps49ymvj.js";
import"./chunk-zk2wsm7d.js";
import"./chunk-2t0xa4dt.js";
import"./chunk-mtxv9fk1.js";
import"./chunk-s4cxmtfp.js";
import"./chunk-zsgha506.js";
import"./chunk-4jm600zv.js";
import"./chunk-xkt36p6r.js";
import"./chunk-nyabx2pm.js";
import"./chunk-6hbnjsmm.js";
import"./chunk-mx28h61f.js";
import"./chunk-jmxzstxj.js";
import"./chunk-9e0p91vr.js";
import"./chunk-25m3pw9q.js";
import"./chunk-wkth813t.js";
import"./chunk-chsyvavm.js";
import"./chunk-6mpw9h55.js";
import"./chunk-q1w4qzqg.js";
import"./chunk-sg66v252.js";
import"./chunk-8bwqtasa.js";
import"./chunk-j9gxwbe3.js";
import"./chunk-qtptjcpp.js";
import"./chunk-1cwdhk7a.js";
import"./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import"./chunk-gx8016vp.js";
import"./chunk-4cp6193g.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-f5ma3nh5.js";
import"./chunk-qz2x630m.js";
import"./chunk-r7j395t6.js";
import"./chunk-tv9pcdnz.js";
import"./chunk-3c25bcsw.js";
import"./chunk-n9ktjngj.js";
import"./chunk-q82r31er.js";
import"./chunk-p2816w9z.js";
import"./chunk-v9smspw2.js";
import"./chunk-v1kzp02e.js";
import"./chunk-64hks9ax.js";
import"./chunk-crmjpsqe.js";
import {
  Link,
  Pane,
  Tabs,
  ThemedBox_default,
  ThemedText,
  init_src
} from "./chunk-cmsknj6n.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-g338npwr.js";
import"./chunk-h0rbjg6x.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-h1mr3371.js";
import"./chunk-36b2q5fg.js";
import"./chunk-a7rhvq9b.js";
import"./chunk-qnfx3qtx.js";
import"./chunk-m74w3187.js";
import"./chunk-b81hd3m6.js";
import"./chunk-y3r7v9pq.js";
import"./chunk-8tnsngw2.js";
import"./chunk-awb4vc41.js";
import"./chunk-cbrt5vsb.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import"./chunk-404qm8xt.js";
import"./chunk-fbv4apne.js";
import"./chunk-jaaxk89e.js";
import"./chunk-h4b85amj.js";
import"./chunk-07069jq1.js";
import"./chunk-vf612n57.js";
import"./chunk-d4mdda98.js";
import"./chunk-7wm5s02e.js";
import"./chunk-4g3v8y12.js";
import"./chunk-7739pg2c.js";
import"./chunk-nh3cd07f.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/HelpV2/Commands.tsx
function Commands({
  commands,
  maxHeight,
  columns,
  title,
  onCancel,
  emptyMessage
}) {
  const { headerFocused, focusHeader } = useTabHeaderFocus();
  const maxWidth = Math.max(1, columns - 10);
  const visibleCount = Math.max(1, Math.floor((maxHeight - 10) / 2));
  const options = import_react.useMemo(() => {
    const seen = new Set;
    return commands.filter((cmd) => {
      if (seen.has(cmd.name))
        return false;
      seen.add(cmd.name);
      return true;
    }).sort((a, b) => a.name.localeCompare(b.name)).map((cmd) => ({
      label: `/${cmd.name}`,
      value: cmd.name,
      description: truncate(formatDescriptionWithSource(cmd), maxWidth, true)
    }));
  }, [commands, maxWidth]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    paddingY: 1,
    children: commands.length === 0 && emptyMessage ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      dimColor: true,
      children: emptyMessage
    }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: title
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
            options,
            visibleOptionCount: visibleCount,
            onCancel,
            disableSelection: true,
            hideIndexes: true,
            layout: "compact-vertical",
            onUpFromFirstItem: focusHeader,
            isDisabled: headerFocused
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime;
var init_Commands = __esm(() => {
  init_commands();
  init_src();
  init_Tabs();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/HelpV2/General.tsx
function General() {
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    paddingY: 1,
    gap: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
          children: "Claude understands your codebase, makes edits with your permission, and executes commands \u2014 right from your terminal."
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
              bold: true,
              children: "Shortcuts"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(PromptInputHelpMenu, {
            gap: 2,
            fixedWidth: true
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime2;
var init_General = __esm(() => {
  init_src();
  init_PromptInputHelpMenu();
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/HelpV2/HelpV2.tsx
function HelpV2({ onClose, commands }) {
  const { rows, columns } = useTerminalSize();
  const maxHeight = Math.floor(rows / 2);
  const insideModal = useIsInsideModal();
  const close = () => onClose("Help dialog dismissed", { display: "system" });
  useKeybinding("help:dismiss", close, { context: "Help" });
  const exitState = useExitOnCtrlCDWithKeybindings(close);
  const dismissShortcut = useShortcutDisplay("help:dismiss", "Help", "esc");
  const builtinNames = builtInCommandNames();
  let builtinCommands = commands.filter((cmd) => builtinNames.has(cmd.name) && !cmd.isHidden);
  let antOnlyCommands = [];
  if (process.env.USER_TYPE === "ant") {
    const internalOnlyNames = new Set(INTERNAL_ONLY_COMMANDS.map((_) => _.name));
    builtinCommands = builtinCommands.filter((cmd) => !internalOnlyNames.has(cmd.name));
    antOnlyCommands = commands.filter((cmd) => internalOnlyNames.has(cmd.name) && !cmd.isHidden);
  }
  const customCommands = commands.filter((cmd) => !builtinNames.has(cmd.name) && !cmd.isHidden);
  const tabs = [
    /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Tab, {
      title: "general",
      children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(General, {}, undefined, false, undefined, this)
    }, "general", false, undefined, this)
  ];
  tabs.push(/* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Tab, {
    title: "commands",
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Commands, {
      commands: builtinCommands,
      maxHeight,
      columns,
      title: "Browse default commands:",
      onCancel: close
    }, undefined, false, undefined, this)
  }, "commands", false, undefined, this));
  tabs.push(/* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Tab, {
    title: "custom-commands",
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Commands, {
      commands: customCommands,
      maxHeight,
      columns,
      title: "Browse custom commands:",
      emptyMessage: "No custom commands found",
      onCancel: close
    }, undefined, false, undefined, this)
  }, "custom", false, undefined, this));
  if (process.env.USER_TYPE === "ant" && antOnlyCommands.length > 0) {
    tabs.push(/* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Tab, {
      title: "[ant-only]",
      children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Commands, {
        commands: antOnlyCommands,
        maxHeight,
        columns,
        title: "Browse ant-only commands:",
        onCancel: close
      }, undefined, false, undefined, this)
    }, "ant-only", false, undefined, this));
  }
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    height: insideModal ? undefined : maxHeight,
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Pane, {
      color: "professionalBlue",
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Tabs, {
          title: process.env.USER_TYPE === "ant" ? "/help" : `numclaw v${"2.1.888"}`,
          color: "professionalBlue",
          defaultTab: "general",
          children: tabs
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            children: [
              "For more help:",
              " ",
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Link, {
                url: "https://code.claude.com/docs/en/overview"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            dimColor: true,
            children: exitState.pending ? /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(jsx_dev_runtime3.Fragment, {
              children: [
                "Press ",
                exitState.keyName,
                " again to exit"
              ]
            }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
              italic: true,
              children: [
                dismissShortcut,
                " to cancel"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime3;
var init_HelpV2 = __esm(() => {
  init_useExitOnCtrlCDWithKeybindings();
  init_useShortcutDisplay();
  init_commands();
  init_modalContext();
  init_useTerminalSize();
  init_src();
  init_useKeybinding();
  init_src();
  init_Tabs();
  init_Commands();
  init_General();
  jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/help/help.tsx
var jsx_dev_runtime4, call = async (onDone, { options: { commands } }) => {
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(HelpV2, {
    commands,
    onClose: onDone
  }, undefined, false, undefined, this);
};
var init_help = __esm(() => {
  init_HelpV2();
  jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
});
init_help();

export {
  call
};
