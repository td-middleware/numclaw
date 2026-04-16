// @bun
import {
  ConfigurableShortcutHint,
  Select,
  fetchEnvironments,
  init_ConfigurableShortcutHint,
  init_environments,
  init_select
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
import {
  SETTING_SOURCES,
  getSettingSourceName,
  getSettingsForSource,
  getSettings_DEPRECATED,
  init_constants,
  init_settings1 as init_settings,
  updateSettingsForSource
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
  Byline,
  Dialog,
  KeyboardShortcutHint,
  LoadingState,
  ThemedText,
  init_source,
  init_src,
  source_default
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
import {
  init_log,
  logError
} from "./chunk-y3r7v9pq.js";
import"./chunk-8tnsngw2.js";
import"./chunk-awb4vc41.js";
import"./chunk-cbrt5vsb.js";
import"./chunk-5z28bqne.js";
import {
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
import {
  init_errors,
  toError
} from "./chunk-404qm8xt.js";
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

// src/utils/teleport/environmentSelection.ts
async function getEnvironmentSelectionInfo() {
  const environments = await fetchEnvironments();
  if (environments.length === 0) {
    return {
      availableEnvironments: [],
      selectedEnvironment: null,
      selectedEnvironmentSource: null
    };
  }
  const mergedSettings = getSettings_DEPRECATED();
  const defaultEnvironmentId = mergedSettings?.remote?.defaultEnvironmentId;
  let selectedEnvironment = environments.find((env) => env.kind !== "bridge") ?? environments[0];
  let selectedEnvironmentSource = null;
  if (defaultEnvironmentId) {
    const matchingEnvironment = environments.find((env) => env.environment_id === defaultEnvironmentId);
    if (matchingEnvironment) {
      selectedEnvironment = matchingEnvironment;
      for (let i = SETTING_SOURCES.length - 1;i >= 0; i--) {
        const source = SETTING_SOURCES[i];
        if (!source || source === "flagSettings") {
          continue;
        }
        const sourceSettings = getSettingsForSource(source);
        if (sourceSettings?.remote?.defaultEnvironmentId === defaultEnvironmentId) {
          selectedEnvironmentSource = source;
          break;
        }
      }
    }
  }
  return {
    availableEnvironments: environments,
    selectedEnvironment,
    selectedEnvironmentSource
  };
}
var init_environmentSelection = __esm(() => {
  init_constants();
  init_settings();
  init_environments();
});

// src/components/RemoteEnvironmentDialog.tsx
function RemoteEnvironmentDialog({ onDone }) {
  const [loadingState, setLoadingState] = import_react.useState("loading");
  const [environments, setEnvironments] = import_react.useState([]);
  const [selectedEnvironment, setSelectedEnvironment] = import_react.useState(null);
  const [selectedEnvironmentSource, setSelectedEnvironmentSource] = import_react.useState(null);
  const [error, setError] = import_react.useState(null);
  import_react.useEffect(() => {
    let cancelled = false;
    async function fetchInfo() {
      try {
        const result = await getEnvironmentSelectionInfo();
        if (cancelled)
          return;
        setEnvironments(result.availableEnvironments);
        setSelectedEnvironment(result.selectedEnvironment);
        setSelectedEnvironmentSource(result.selectedEnvironmentSource);
        setLoadingState(null);
      } catch (err) {
        if (cancelled)
          return;
        const fetchError = toError(err);
        logError(fetchError);
        setError(fetchError.message);
        setLoadingState(null);
      }
    }
    fetchInfo();
    return () => {
      cancelled = true;
    };
  }, []);
  function handleSelect(value) {
    if (value === "cancel") {
      onDone();
      return;
    }
    setLoadingState("updating");
    const selectedEnv = environments.find((env) => env.environment_id === value);
    if (!selectedEnv) {
      onDone("Error: Selected environment not found");
      return;
    }
    updateSettingsForSource("localSettings", {
      remote: {
        defaultEnvironmentId: selectedEnv.environment_id
      }
    });
    onDone(`Set default remote environment to ${source_default.bold(selectedEnv.name)} (${selectedEnv.environment_id})`);
  }
  if (loadingState === "loading") {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
      title: DIALOG_TITLE,
      onCancel: onDone,
      hideInputGuide: true,
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(LoadingState, {
        message: "Loading environments\u2026"
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
  }
  if (error) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
      title: DIALOG_TITLE,
      onCancel: onDone,
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "error",
        children: [
          "Error: ",
          error
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
  }
  if (!selectedEnvironment) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
      title: DIALOG_TITLE,
      subtitle: SETUP_HINT,
      onCancel: onDone,
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: "No remote environments available."
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
  }
  if (environments.length === 1) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SingleEnvironmentContent, {
      environment: selectedEnvironment,
      onDone
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(MultipleEnvironmentsContent, {
    environments,
    selectedEnvironment,
    selectedEnvironmentSource,
    loadingState,
    onSelect: handleSelect,
    onCancel: onDone
  }, undefined, false, undefined, this);
}
function EnvironmentLabel({
  environment
}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
    children: [
      figures_default.tick,
      " Using ",
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        bold: true,
        children: environment.name
      }, undefined, false, undefined, this),
      " ",
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          "(",
          environment.environment_id,
          ")"
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function SingleEnvironmentContent({
  environment,
  onDone
}) {
  useKeybinding("confirm:yes", onDone, { context: "Confirmation" });
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: DIALOG_TITLE,
    subtitle: SETUP_HINT,
    onCancel: onDone,
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(EnvironmentLabel, {
      environment
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function MultipleEnvironmentsContent({
  environments,
  selectedEnvironment,
  selectedEnvironmentSource,
  loadingState,
  onSelect,
  onCancel
}) {
  const sourceSuffix = selectedEnvironmentSource && selectedEnvironmentSource !== "localSettings" ? ` (from ${getSettingSourceName(selectedEnvironmentSource)} settings)` : "";
  const subtitle = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
    children: [
      "Currently using: ",
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        bold: true,
        children: selectedEnvironment.name
      }, undefined, false, undefined, this),
      sourceSuffix
    ]
  }, undefined, true, undefined, this);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: DIALOG_TITLE,
    subtitle,
    onCancel,
    hideInputGuide: true,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        children: SETUP_HINT
      }, undefined, false, undefined, this),
      loadingState === "updating" ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(LoadingState, {
        message: "Updating\u2026"
      }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
        options: environments.map((env) => ({
          label: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              env.name,
              " ",
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  "(",
                  env.environment_id,
                  ")"
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          value: env.environment_id
        })),
        defaultValue: selectedEnvironment.environment_id,
        onChange: onSelect,
        onCancel: () => onSelect("cancel"),
        layout: "compact-vertical"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
              shortcut: "Enter",
              action: "select"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "cancel"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react, jsx_dev_runtime, DIALOG_TITLE = "Select Remote Environment", SETUP_HINT = `Configure environments at: https://claude.ai/code`;
var init_RemoteEnvironmentDialog = __esm(() => {
  init_source();
  init_figures();
  init_src();
  init_useKeybinding();
  init_errors();
  init_log();
  init_constants();
  init_settings();
  init_environmentSelection();
  init_ConfigurableShortcutHint();
  init_select();
  init_src();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/remote-env/remote-env.tsx
async function call(onDone) {
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(RemoteEnvironmentDialog, {
    onDone
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime2;
var init_remote_env = __esm(() => {
  init_RemoteEnvironmentDialog();
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});
init_remote_env();

export {
  call
};
