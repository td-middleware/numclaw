// @bun
import {
  Tab,
  init_Tabs,
  useTabHeaderFocus
} from "./chunk-y4hg3tzq.js";
import"./chunk-z1bs6d7k.js";
import {
  SandboxManager,
  Select,
  addToExcludedCommands,
  init_sandbox_adapter,
  init_select,
  shouldAllowManagedSandboxDomainsOnly
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
import"./chunk-4n6tcmpp.js";
import"./chunk-j5bth84e.js";
import"./chunk-eb45z2nb.js";
import"./chunk-5pevjsyw.js";
import {
  init_useKeybinding,
  useKeybindings
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
import {
  getSettingsFilePathForSource,
  getSettings_DEPRECATED,
  init_settings1 as init_settings
} from "./chunk-q1w4qzqg.js";
import"./chunk-sg66v252.js";
import"./chunk-8bwqtasa.js";
import"./chunk-j9gxwbe3.js";
import"./chunk-qtptjcpp.js";
import"./chunk-1cwdhk7a.js";
import"./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import {
  getPlatform,
  init_platform
} from "./chunk-gx8016vp.js";
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
  color,
  init_src,
  useTheme
} from "./chunk-cmsknj6n.js";
import {
  require_jsx_dev_runtime
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
import {
  getCwdState,
  init_state
} from "./chunk-h4b85amj.js";
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

// src/components/sandbox/SandboxConfigTab.tsx
function SandboxConfigTab() {
  const isEnabled = SandboxManager.isSandboxingEnabled();
  const depCheck = SandboxManager.checkDependencies();
  const warningsNote = depCheck.warnings.length > 0 ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    marginTop: 1,
    flexDirection: "column",
    children: depCheck.warnings.map((w, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      dimColor: true,
      children: w
    }, i, false, undefined, this))
  }, undefined, false, undefined, this) : null;
  if (!isEnabled) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      paddingY: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: "subtle",
          children: "Sandbox is not enabled"
        }, undefined, false, undefined, this),
        warningsNote
      ]
    }, undefined, true, undefined, this);
  }
  const fsReadConfig = SandboxManager.getFsReadConfig();
  const fsWriteConfig = SandboxManager.getFsWriteConfig();
  const networkConfig = SandboxManager.getNetworkRestrictionConfig();
  const allowUnixSockets = SandboxManager.getAllowUnixSockets();
  const excludedCommands = SandboxManager.getExcludedCommands();
  const globPatternWarnings = SandboxManager.getLinuxGlobPatternWarnings();
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    paddingY: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            color: "permission",
            children: "Excluded Commands:"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: excludedCommands.length > 0 ? excludedCommands.join(", ") : "None"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      fsReadConfig.denyOnly.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            color: "permission",
            children: "Filesystem Read Restrictions:"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Denied: ",
              fsReadConfig.denyOnly.join(", ")
            ]
          }, undefined, true, undefined, this),
          fsReadConfig.allowWithinDeny && fsReadConfig.allowWithinDeny.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Allowed within denied: ",
              fsReadConfig.allowWithinDeny.join(", ")
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      fsWriteConfig.allowOnly.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            color: "permission",
            children: "Filesystem Write Restrictions:"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Allowed: ",
              fsWriteConfig.allowOnly.join(", ")
            ]
          }, undefined, true, undefined, this),
          fsWriteConfig.denyWithinAllow.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Denied within allowed: ",
              fsWriteConfig.denyWithinAllow.join(", ")
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      (networkConfig.allowedHosts && networkConfig.allowedHosts.length > 0 || networkConfig.deniedHosts && networkConfig.deniedHosts.length > 0) && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            color: "permission",
            children: [
              "Network Restrictions",
              shouldAllowManagedSandboxDomainsOnly() ? " (Managed)" : "",
              ":"
            ]
          }, undefined, true, undefined, this),
          networkConfig.allowedHosts && networkConfig.allowedHosts.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Allowed: ",
              networkConfig.allowedHosts.join(", ")
            ]
          }, undefined, true, undefined, this),
          networkConfig.deniedHosts && networkConfig.deniedHosts.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Denied: ",
              networkConfig.deniedHosts.join(", ")
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      allowUnixSockets && allowUnixSockets.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            color: "permission",
            children: "Allowed Unix Sockets:"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: allowUnixSockets.join(", ")
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      globPatternWarnings.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            color: "warning",
            children: "\u26A0 Warning: Glob patterns not fully supported on Linux"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "The following patterns will be ignored:",
              " ",
              globPatternWarnings.slice(0, 3).join(", "),
              globPatternWarnings.length > 3 && ` (${globPatternWarnings.length - 3} more)`
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      warningsNote
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime;
var init_SandboxConfigTab = __esm(() => {
  init_src();
  init_sandbox_adapter();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/sandbox/SandboxDependenciesTab.tsx
function SandboxDependenciesTab({ depCheck }) {
  const platform = getPlatform();
  const isMac = platform === "macos";
  const rgMissing = depCheck.errors.some((e) => e.includes("ripgrep"));
  const bwrapMissing = depCheck.errors.some((e) => e.includes("bwrap"));
  const socatMissing = depCheck.errors.some((e) => e.includes("socat"));
  const seccompMissing = depCheck.warnings.length > 0;
  const otherErrors = depCheck.errors.filter((e) => !e.includes("ripgrep") && !e.includes("bwrap") && !e.includes("socat"));
  const rgInstallHint = isMac ? "brew install ripgrep" : "apt install ripgrep";
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    paddingY: 1,
    gap: 1,
    children: [
      isMac && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
          children: [
            "seatbelt: ",
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
              color: "success",
              children: "built-in (macOS)"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            children: [
              "ripgrep (rg):",
              " ",
              rgMissing ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                color: "error",
                children: "not found"
              }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                color: "success",
                children: "found"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          rgMissing && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "  ",
              "\xB7 ",
              rgInstallHint
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      !isMac && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(jsx_dev_runtime2.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                children: [
                  "bubblewrap (bwrap):",
                  " ",
                  bwrapMissing ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    color: "error",
                    children: "not installed"
                  }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    color: "success",
                    children: "installed"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              bwrapMissing && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  "  ",
                  "\xB7 apt install bubblewrap"
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                children: [
                  "socat:",
                  " ",
                  socatMissing ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    color: "error",
                    children: "not installed"
                  }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    color: "success",
                    children: "installed"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              socatMissing && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  "  ",
                  "\xB7 apt install socat"
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                children: [
                  "seccomp filter:",
                  " ",
                  seccompMissing ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    color: "warning",
                    children: "not installed"
                  }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    color: "success",
                    children: "installed"
                  }, undefined, false, undefined, this),
                  seccompMissing && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: " (required to block unix domain sockets)"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              seccompMissing && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      "  ",
                      "\xB7 npm install -g @anthropic-ai/sandbox-runtime"
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      "  ",
                      "\xB7 or copy vendor/seccomp/* from sandbox-runtime and set"
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      "    ",
                      "sandbox.seccomp.bpfPath and applyPath in settings.json"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      otherErrors.map((err) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        color: "error",
        children: err
      }, err, false, undefined, this))
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime2;
var init_SandboxDependenciesTab = __esm(() => {
  init_src();
  init_platform();
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/sandbox/SandboxOverridesTab.tsx
function SandboxOverridesTab({ onComplete }) {
  const isEnabled = SandboxManager.isSandboxingEnabled();
  const isLocked = SandboxManager.areSandboxSettingsLockedByPolicy();
  const currentAllowUnsandboxed = SandboxManager.areUnsandboxedCommandsAllowed();
  if (!isEnabled) {
    return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      paddingY: 1,
      children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        color: "subtle",
        children: "Sandbox is not enabled. Enable sandbox to configure override settings."
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
  }
  if (isLocked) {
    return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      paddingY: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          color: "subtle",
          children: "Override settings are managed by a higher-priority configuration and cannot be changed locally."
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Current setting:",
              " ",
              currentAllowUnsandboxed ? "Allow unsandboxed fallback" : "Strict sandbox mode"
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(OverridesSelect, {
    onComplete,
    currentMode: currentAllowUnsandboxed ? "open" : "closed"
  }, undefined, false, undefined, this);
}
function OverridesSelect({
  onComplete,
  currentMode
}) {
  const [theme] = useTheme();
  const { headerFocused, focusHeader } = useTabHeaderFocus();
  const currentIndicator = color("success", theme)(`(current)`);
  const options = [
    {
      label: currentMode === "open" ? `Allow unsandboxed fallback ${currentIndicator}` : "Allow unsandboxed fallback",
      value: "open"
    },
    {
      label: currentMode === "closed" ? `Strict sandbox mode ${currentIndicator}` : "Strict sandbox mode",
      value: "closed"
    }
  ];
  async function handleSelect(value) {
    const mode = value;
    await SandboxManager.setSandboxSettings({
      allowUnsandboxedCommands: mode === "open"
    });
    const message = mode === "open" ? "\u2713 Unsandboxed fallback allowed - commands can run outside sandbox when necessary" : "\u2713 Strict sandbox mode - all commands must run in sandbox or be excluded via the `excludedCommands` option";
    onComplete(message);
  }
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    paddingY: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          bold: true,
          children: "Configure Overrides:"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Select, {
        options,
        onChange: handleSelect,
        onCancel: () => onComplete(undefined, { display: "skip" }),
        onUpFromFirstItem: focusHeader,
        isDisabled: headerFocused
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginTop: 1,
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                bold: true,
                dimColor: true,
                children: "Allow unsandboxed fallback:"
              }, undefined, false, undefined, this),
              " ",
              "When a command fails due to sandbox restrictions, Claude can retry with dangerouslyDisableSandbox to run outside the sandbox (falling back to default permissions)."
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
                bold: true,
                dimColor: true,
                children: "Strict sandbox mode:"
              }, undefined, false, undefined, this),
              " ",
              "All bash commands invoked by the model must run in the sandbox unless they are explicitly listed in excludedCommands."
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Learn more:",
              " ",
              /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Link, {
                url: "https://code.claude.com/docs/en/sandboxing#configure-sandboxing",
                children: "code.claude.com/docs/en/sandboxing#configure-sandboxing"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime3;
var init_SandboxOverridesTab = __esm(() => {
  init_src();
  init_sandbox_adapter();
  init_select();
  init_Tabs();
  jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/sandbox/SandboxSettings.tsx
function SandboxSettings({
  onComplete,
  depCheck
}) {
  const [theme] = useTheme();
  const currentEnabled = SandboxManager.isSandboxingEnabled();
  const currentAutoAllow = SandboxManager.isAutoAllowBashIfSandboxedEnabled();
  const hasWarnings = depCheck.warnings.length > 0;
  const settings = getSettings_DEPRECATED();
  const allowAllUnixSockets = settings.sandbox?.network?.allowAllUnixSockets;
  const showSocketWarning = hasWarnings && !allowAllUnixSockets;
  const getCurrentMode = () => {
    if (!currentEnabled)
      return "disabled";
    if (currentAutoAllow)
      return "auto-allow";
    return "regular";
  };
  const currentMode = getCurrentMode();
  const currentIndicator = color("success", theme)(`(current)`);
  const options = [
    {
      label: currentMode === "auto-allow" ? `Sandbox BashTool, with auto-allow ${currentIndicator}` : "Sandbox BashTool, with auto-allow",
      value: "auto-allow"
    },
    {
      label: currentMode === "regular" ? `Sandbox BashTool, with regular permissions ${currentIndicator}` : "Sandbox BashTool, with regular permissions",
      value: "regular"
    },
    {
      label: currentMode === "disabled" ? `No Sandbox ${currentIndicator}` : "No Sandbox",
      value: "disabled"
    }
  ];
  async function handleSelect(value) {
    const mode = value;
    switch (mode) {
      case "auto-allow":
        await SandboxManager.setSandboxSettings({
          enabled: true,
          autoAllowBashIfSandboxed: true
        });
        onComplete("\u2713 Sandbox enabled with auto-allow for bash commands");
        break;
      case "regular":
        await SandboxManager.setSandboxSettings({
          enabled: true,
          autoAllowBashIfSandboxed: false
        });
        onComplete("\u2713 Sandbox enabled with regular bash permissions");
        break;
      case "disabled":
        await SandboxManager.setSandboxSettings({
          enabled: false,
          autoAllowBashIfSandboxed: false
        });
        onComplete("\u25CB Sandbox disabled");
        break;
    }
  }
  useKeybindings({
    "confirm:no": () => onComplete(undefined, { display: "skip" })
  }, { context: "Settings" });
  const modeTab = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Tab, {
    title: "Mode",
    children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SandboxModeTab, {
      showSocketWarning,
      options,
      onSelect: handleSelect,
      onComplete
    }, undefined, false, undefined, this)
  }, "mode", false, undefined, this);
  const overridesTab = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Tab, {
    title: "Overrides",
    children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SandboxOverridesTab, {
      onComplete
    }, undefined, false, undefined, this)
  }, "overrides", false, undefined, this);
  const configTab = /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Tab, {
    title: "Config",
    children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SandboxConfigTab, {}, undefined, false, undefined, this)
  }, "config", false, undefined, this);
  const hasErrors = depCheck.errors.length > 0;
  const tabs = hasErrors ? [
    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Tab, {
      title: "Dependencies",
      children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SandboxDependenciesTab, {
        depCheck
      }, undefined, false, undefined, this)
    }, "dependencies", false, undefined, this)
  ] : [
    modeTab,
    ...hasWarnings ? [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Tab, {
        title: "Dependencies",
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SandboxDependenciesTab, {
          depCheck
        }, undefined, false, undefined, this)
      }, "dependencies", false, undefined, this)
    ] : [],
    overridesTab,
    configTab
  ];
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Pane, {
    color: "permission",
    children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Tabs, {
      title: "Sandbox:",
      color: "permission",
      defaultTab: "Mode",
      children: tabs
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function SandboxModeTab({
  showSocketWarning,
  options,
  onSelect,
  onComplete
}) {
  const { headerFocused, focusHeader } = useTabHeaderFocus();
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    paddingY: 1,
    children: [
      showSocketWarning && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          color: "warning",
          children: "Cannot block unix domain sockets (see Dependencies tab)"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          bold: true,
          children: "Configure Mode:"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Select, {
        options,
        onChange: onSelect,
        onCancel: () => onComplete(undefined, { display: "skip" }),
        onUpFromFirstItem: focusHeader,
        isDisabled: headerFocused
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginTop: 1,
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                bold: true,
                dimColor: true,
                children: "Auto-allow mode:"
              }, undefined, false, undefined, this),
              " ",
              "Commands will try to run in the sandbox automatically, and attempts to run outside of the sandbox fallback to regular permissions. Explicit ask/deny rules are always respected."
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Learn more:",
              " ",
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Link, {
                url: "https://code.claude.com/docs/en/sandboxing",
                children: "code.claude.com/docs/en/sandboxing"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime4;
var init_SandboxSettings = __esm(() => {
  init_src();
  init_useKeybinding();
  init_sandbox_adapter();
  init_settings();
  init_select();
  init_src();
  init_Tabs();
  init_SandboxConfigTab();
  init_SandboxDependenciesTab();
  init_SandboxOverridesTab();
  jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/sandbox-toggle/sandbox-toggle.tsx
import { relative } from "path";
async function call(onDone, _context, args) {
  const settings = getSettings_DEPRECATED();
  const themeName = settings.theme || "light";
  const platform = getPlatform();
  if (!SandboxManager.isSupportedPlatform()) {
    const errorMessage = platform === "wsl" ? "Error: Sandboxing requires WSL2. WSL1 is not supported." : "Error: Sandboxing is currently only supported on macOS, Linux, and WSL2.";
    const message = color("error", themeName)(errorMessage);
    onDone(message);
    return null;
  }
  const depCheck = SandboxManager.checkDependencies();
  if (!SandboxManager.isPlatformInEnabledList()) {
    const message = color("error", themeName)(`Error: Sandboxing is disabled for this platform (${platform}) via the enabledPlatforms setting.`);
    onDone(message);
    return null;
  }
  if (SandboxManager.areSandboxSettingsLockedByPolicy()) {
    const message = color("error", themeName)("Error: Sandbox settings are overridden by a higher-priority configuration and cannot be changed locally.");
    onDone(message);
    return null;
  }
  const trimmedArgs = args?.trim() || "";
  if (!trimmedArgs) {
    return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(SandboxSettings, {
      onComplete: onDone,
      depCheck
    }, undefined, false, undefined, this);
  }
  if (trimmedArgs) {
    const parts = trimmedArgs.split(" ");
    const subcommand = parts[0];
    if (subcommand === "exclude") {
      const commandPattern = trimmedArgs.slice("exclude ".length).trim();
      if (!commandPattern) {
        const message2 = color("error", themeName)('Error: Please provide a command pattern to exclude (e.g., /sandbox exclude "npm run test:*")');
        onDone(message2);
        return null;
      }
      const cleanPattern = commandPattern.replace(/^["']|["']$/g, "");
      addToExcludedCommands(cleanPattern);
      const localSettingsPath = getSettingsFilePathForSource("localSettings");
      const relativePath = localSettingsPath ? relative(getCwdState(), localSettingsPath) : ".claude/settings.local.json";
      const message = color("success", themeName)(`Added "${cleanPattern}" to excluded commands in ${relativePath}`);
      onDone(message);
      return null;
    } else {
      const message = color("error", themeName)(`Error: Unknown subcommand "${subcommand}". Available subcommand: exclude`);
      onDone(message);
      return null;
    }
  }
  return null;
}
var jsx_dev_runtime5;
var init_sandbox_toggle = __esm(() => {
  init_state();
  init_SandboxSettings();
  init_src();
  init_platform();
  init_sandbox_adapter();
  init_settings();
  jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
});
init_sandbox_toggle();

export {
  call
};
