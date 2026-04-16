// @bun
import {
  PermissionDialog
} from "./chunk-wyavftcj.js";
import {
  BASH_TOOL_NAME,
  SAFE_ENV_VARS,
  getMcpConfigsByScope,
  getPermissionRulesForSource,
  gracefulShutdownSync,
  init_config as init_config2,
  init_gracefulShutdown,
  init_managedEnvConstants,
  init_overlayContext,
  init_permissionsLoader,
  init_toolName,
  useRegisterOverlay
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
import"./chunk-xnav6j8h.js";
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
  checkHasTrustDialogAccepted,
  getSettingsForSource,
  init_config1 as init_config,
  init_settings1 as init_settings,
  saveCurrentProjectConfig
} from "./chunk-q1w4qzqg.js";
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
  ThemedBox_default,
  ThemedText,
  init_src,
  use_stdin_default
} from "./chunk-cmsknj6n.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-g338npwr.js";
import {
  init_analytics,
  logEvent
} from "./chunk-h0rbjg6x.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-h1mr3371.js";
import"./chunk-36b2q5fg.js";
import"./chunk-a7rhvq9b.js";
import"./chunk-qnfx3qtx.js";
import"./chunk-m74w3187.js";
import {
  getCwd,
  init_cwd
} from "./chunk-b81hd3m6.js";
import"./chunk-y3r7v9pq.js";
import"./chunk-8tnsngw2.js";
import"./chunk-awb4vc41.js";
import"./chunk-cbrt5vsb.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  getFsImplementation,
  init_fsOperations
} from "./chunk-404qm8xt.js";
import"./chunk-fbv4apne.js";
import"./chunk-jaaxk89e.js";
import {
  init_state,
  setSessionTrustAccepted
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
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/TrustDialog/TrustDialog.tsx
init_analytics();
init_state();
init_useExitOnCtrlCDWithKeybindings();
init_src();
init_overlayContext();
init_config2();
init_toolName();
init_config();
init_cwd();
init_fsOperations();
init_gracefulShutdown();
var import_react = __toESM(require_react(), 1);
import { homedir } from "os";

// src/components/TrustDialog/utils.ts
init_settings();
init_toolName();
init_managedEnvConstants();
init_permissionsLoader();
function hasHooks(settings) {
  if (settings === null || settings.disableAllHooks) {
    return false;
  }
  if (settings.statusLine) {
    return true;
  }
  if (settings.fileSuggestion) {
    return true;
  }
  if (!settings.hooks) {
    return false;
  }
  for (const hookConfig of Object.values(settings.hooks)) {
    if (hookConfig.length > 0) {
      return true;
    }
  }
  return false;
}
function getHooksSources() {
  const sources = [];
  const projectSettings = getSettingsForSource("projectSettings");
  if (hasHooks(projectSettings)) {
    sources.push(".claude/settings.json");
  }
  const localSettings = getSettingsForSource("localSettings");
  if (hasHooks(localSettings)) {
    sources.push(".claude/settings.local.json");
  }
  return sources;
}
function hasBashPermission(rules) {
  return rules.some((rule) => rule.ruleBehavior === "allow" && (rule.ruleValue.toolName === BASH_TOOL_NAME || rule.ruleValue.toolName.startsWith(BASH_TOOL_NAME + "(")));
}
function getBashPermissionSources() {
  const sources = [];
  const projectRules = getPermissionRulesForSource("projectSettings");
  if (hasBashPermission(projectRules)) {
    sources.push(".claude/settings.json");
  }
  const localRules = getPermissionRulesForSource("localSettings");
  if (hasBashPermission(localRules)) {
    sources.push(".claude/settings.local.json");
  }
  return sources;
}
function hasOtelHeadersHelper(settings) {
  return !!settings?.otelHeadersHelper;
}
function getOtelHeadersHelperSources() {
  const sources = [];
  const projectSettings = getSettingsForSource("projectSettings");
  if (hasOtelHeadersHelper(projectSettings)) {
    sources.push(".claude/settings.json");
  }
  const localSettings = getSettingsForSource("localSettings");
  if (hasOtelHeadersHelper(localSettings)) {
    sources.push(".claude/settings.local.json");
  }
  return sources;
}
function hasApiKeyHelper(settings) {
  return !!settings?.apiKeyHelper;
}
function getApiKeyHelperSources() {
  const sources = [];
  const projectSettings = getSettingsForSource("projectSettings");
  if (hasApiKeyHelper(projectSettings)) {
    sources.push(".claude/settings.json");
  }
  const localSettings = getSettingsForSource("localSettings");
  if (hasApiKeyHelper(localSettings)) {
    sources.push(".claude/settings.local.json");
  }
  return sources;
}
function hasAwsCommands(settings) {
  return !!(settings?.awsAuthRefresh || settings?.awsCredentialExport);
}
function getAwsCommandsSources() {
  const sources = [];
  const projectSettings = getSettingsForSource("projectSettings");
  if (hasAwsCommands(projectSettings)) {
    sources.push(".claude/settings.json");
  }
  const localSettings = getSettingsForSource("localSettings");
  if (hasAwsCommands(localSettings)) {
    sources.push(".claude/settings.local.json");
  }
  return sources;
}
function hasGcpCommands(settings) {
  return !!settings?.gcpAuthRefresh;
}
function getGcpCommandsSources() {
  const sources = [];
  const projectSettings = getSettingsForSource("projectSettings");
  if (hasGcpCommands(projectSettings)) {
    sources.push(".claude/settings.json");
  }
  const localSettings = getSettingsForSource("localSettings");
  if (hasGcpCommands(localSettings)) {
    sources.push(".claude/settings.local.json");
  }
  return sources;
}
function hasDangerousEnvVars(settings) {
  if (!settings?.env) {
    return false;
  }
  return Object.keys(settings.env).some((key) => !SAFE_ENV_VARS.has(key.toUpperCase()));
}
function getDangerousEnvVarsSources() {
  const sources = [];
  const projectSettings = getSettingsForSource("projectSettings");
  if (hasDangerousEnvVars(projectSettings)) {
    sources.push(".claude/settings.json");
  }
  const localSettings = getSettingsForSource("localSettings");
  if (hasDangerousEnvVars(localSettings)) {
    sources.push(".claude/settings.local.json");
  }
  return sources;
}

// src/components/TrustDialog/TrustDialog.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function TrustDialog({ onDone, commands }) {
  const { servers: projectServers } = getMcpConfigsByScope("project");
  const hasMcpServers = Object.keys(projectServers).length > 0;
  const hooksSettingSources = getHooksSources();
  const hasHooks2 = hooksSettingSources.length > 0;
  const bashSettingSources = getBashPermissionSources();
  const apiKeyHelperSources = getApiKeyHelperSources();
  const hasApiKeyHelper2 = apiKeyHelperSources.length > 0;
  const awsCommandsSources = getAwsCommandsSources();
  const hasAwsCommands2 = awsCommandsSources.length > 0;
  const gcpCommandsSources = getGcpCommandsSources();
  const hasGcpCommands2 = gcpCommandsSources.length > 0;
  const otelHeadersHelperSources = getOtelHeadersHelperSources();
  const hasOtelHeadersHelper2 = otelHeadersHelperSources.length > 0;
  const dangerousEnvVarsSources = getDangerousEnvVarsSources();
  const hasDangerousEnvVars2 = dangerousEnvVarsSources.length > 0;
  const hasSlashCommandBash = commands?.some((command) => command.type === "prompt" && command.loadedFrom === "commands_DEPRECATED" && (command.source === "projectSettings" || command.source === "localSettings") && command.allowedTools?.some((tool) => tool === BASH_TOOL_NAME || tool.startsWith(BASH_TOOL_NAME + "("))) ?? false;
  const hasSkillsBash = commands?.some((command) => command.type === "prompt" && (command.loadedFrom === "skills" || command.loadedFrom === "plugin") && (command.source === "projectSettings" || command.source === "localSettings" || command.source === "plugin") && command.allowedTools?.some((tool) => tool === BASH_TOOL_NAME || tool.startsWith(BASH_TOOL_NAME + "("))) ?? false;
  const hasAnyBashExecution = bashSettingSources.length > 0 || hasSlashCommandBash || hasSkillsBash;
  const hasTrustDialogAccepted = checkHasTrustDialogAccepted();
  useRegisterOverlay("trust-dialog");
  const [focused, setFocused] = import_react.default.useState(0);
  import_react.default.useEffect(() => {
    const isHomeDir = homedir() === getCwd();
    logEvent("tengu_trust_dialog_shown", {
      isHomeDir,
      hasMcpServers,
      hasHooks: hasHooks2,
      hasBashExecution: hasAnyBashExecution,
      hasApiKeyHelper: hasApiKeyHelper2,
      hasAwsCommands: hasAwsCommands2,
      hasGcpCommands: hasGcpCommands2,
      hasOtelHeadersHelper: hasOtelHeadersHelper2,
      hasDangerousEnvVars: hasDangerousEnvVars2
    });
  }, [
    hasMcpServers,
    hasHooks2,
    hasAnyBashExecution,
    hasApiKeyHelper2,
    hasAwsCommands2,
    hasGcpCommands2,
    hasOtelHeadersHelper2,
    hasDangerousEnvVars2
  ]);
  function onChange(value) {
    if (value === "exit") {
      gracefulShutdownSync(1);
      return;
    }
    const isHomeDir = homedir() === getCwd();
    logEvent("tengu_trust_dialog_accept", {
      isHomeDir,
      hasMcpServers,
      hasHooks: hasHooks2,
      hasBashExecution: hasAnyBashExecution,
      hasApiKeyHelper: hasApiKeyHelper2,
      hasAwsCommands: hasAwsCommands2,
      hasGcpCommands: hasGcpCommands2,
      hasOtelHeadersHelper: hasOtelHeadersHelper2,
      hasDangerousEnvVars: hasDangerousEnvVars2
    });
    if (isHomeDir) {
      setSessionTrustAccepted(true);
    } else {
      saveCurrentProjectConfig((current) => ({
        ...current,
        hasTrustDialogAccepted: true
      }));
    }
    onDone();
  }
  const exitState = useExitOnCtrlCDWithKeybindings(() => gracefulShutdownSync(1));
  const { internal_eventEmitter } = use_stdin_default();
  const focusedRef = import_react.default.useRef(focused);
  focusedRef.current = focused;
  const onChangeRef = import_react.default.useRef(onChange);
  onChangeRef.current = onChange;
  import_react.default.useEffect(() => {
    const handleInput = (event) => {
      const { input, key } = event;
      if (key.upArrow || input === "k") {
        setFocused((f) => Math.max(0, f - 1));
        event.stopImmediatePropagation();
      } else if (key.downArrow || input === "j") {
        setFocused((f) => Math.min(1, f + 1));
        event.stopImmediatePropagation();
      } else if (key.return) {
        onChangeRef.current(focusedRef.current === 0 ? "enable_all" : "exit");
        event.stopImmediatePropagation();
      } else if (key.escape) {
        onChangeRef.current("exit");
        event.stopImmediatePropagation();
      } else if (input === "1") {
        onChangeRef.current("enable_all");
        event.stopImmediatePropagation();
      } else if (input === "2") {
        onChangeRef.current("exit");
        event.stopImmediatePropagation();
      }
    };
    internal_eventEmitter.prependListener("input", handleInput);
    return () => {
      internal_eventEmitter.removeListener("input", handleInput);
    };
  }, [internal_eventEmitter]);
  if (hasTrustDialogAccepted) {
    setTimeout(onDone);
    return null;
  }
  const options = [
    { label: "Yes, I trust this folder", value: "enable_all" },
    { label: "No, exit", value: "exit" }
  ];
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PermissionDialog, {
    color: "warning",
    titleColor: "warning",
    title: "Accessing workspace:",
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      paddingTop: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          bold: true,
          children: getFsImplementation().cwd()
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            "Quick safety check: Is this a project you created or one you trust? (Like your own code, a well-known open source project, or work from your team). If not, take a moment to review what",
            "'",
            "s in this folder first."
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            "Numina",
            "'",
            "ll be able to read, edit, and execute files here."
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
            url: "https://code.claude.com/docs/en/security",
            children: "Security guide"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: options.map((opt, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: focused === i,
              children: [
                focused === i ? "\u276F " : "  ",
                i + 1,
                ". ",
                opt.label
              ]
            }, undefined, true, undefined, this)
          }, opt.value, false, undefined, this))
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: exitState.pending ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
            children: [
              "Press ",
              exitState.keyName,
              " again to exit"
            ]
          }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
            children: "\u2191\u2193 to move \xB7 Enter to confirm \xB7 Esc to cancel"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
export {
  TrustDialog
};
