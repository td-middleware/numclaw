// @bun
import {
  ModelPicker,
  init_ModelPicker,
  init_extraUsage,
  isBilledAsExtraUsage
} from "./chunk-v73cb8xh.js";
import {
  checkOpus1mAccess,
  checkSonnet1mAccess,
  init_AppState,
  init_check1mAccess,
  init_validateModel,
  useAppState,
  useSetAppState,
  validateModel
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
  MODEL_ALIASES,
  clearFastModeCooldown,
  getDefaultMainLoopModelSetting,
  init_aliases,
  init_fastMode,
  init_model,
  init_modelAllowlist,
  isFastModeAvailable,
  isFastModeEnabled,
  isFastModeSupportedByModel,
  isModelAllowed,
  isOpus1mMergeEnabled,
  renderDefaultModelSetting
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
  init_source,
  source_default
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
import"./chunk-b81hd3m6.js";
import {
  COMMON_HELP_ARGS,
  COMMON_INFO_ARGS,
  init_xml
} from "./chunk-y3r7v9pq.js";
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

// src/commands/model/model.tsx
function ModelPickerWrapper({
  onDone
}) {
  const mainLoopModel = useAppState((s) => s.mainLoopModel);
  const mainLoopModelForSession = useAppState((s) => s.mainLoopModelForSession);
  const isFastMode = useAppState((s) => s.fastMode);
  const setAppState = useSetAppState();
  function handleCancel() {
    logEvent("tengu_model_command_menu", {
      action: "cancel"
    });
    const displayModel = renderModelLabel(mainLoopModel);
    onDone(`Kept model as ${source_default.bold(displayModel)}`, {
      display: "system"
    });
  }
  function handleSelect(model, effort) {
    logEvent("tengu_model_command_menu", {
      action: model,
      from_model: mainLoopModel,
      to_model: model
    });
    setAppState((prev) => ({
      ...prev,
      mainLoopModel: model,
      mainLoopModelForSession: null
    }));
    let message = `Set model to ${source_default.bold(renderModelLabel(model))}`;
    if (effort !== undefined) {
      message += ` with ${source_default.bold(effort)} effort`;
    }
    let wasFastModeToggledOn = undefined;
    if (isFastModeEnabled()) {
      clearFastModeCooldown();
      if (!isFastModeSupportedByModel(model) && isFastMode) {
        setAppState((prev) => ({
          ...prev,
          fastMode: false
        }));
        wasFastModeToggledOn = false;
      } else if (isFastModeSupportedByModel(model) && isFastModeAvailable() && isFastMode) {
        message += ` \xB7 Fast mode ON`;
        wasFastModeToggledOn = true;
      }
    }
    if (isBilledAsExtraUsage(model, wasFastModeToggledOn === true, isOpus1mMergeEnabled())) {
      message += ` \xB7 Billed as extra usage`;
    }
    if (wasFastModeToggledOn === false) {
      message += ` \xB7 Fast mode OFF`;
    }
    onDone(message);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ModelPicker, {
    initial: mainLoopModel,
    sessionModel: mainLoopModelForSession,
    onSelect: handleSelect,
    onCancel: handleCancel,
    isStandaloneCommand: true,
    showFastModeNotice: isFastModeEnabled() && isFastMode && isFastModeSupportedByModel(mainLoopModel) && isFastModeAvailable()
  }, undefined, false, undefined, this);
}
function SetModelAndClose({
  args,
  onDone
}) {
  const isFastMode = useAppState((s) => s.fastMode);
  const setAppState = useSetAppState();
  const model = args === "default" ? null : args;
  React.useEffect(() => {
    async function handleModelChange() {
      if (model && !isModelAllowed(model)) {
        onDone(`Model '${model}' is not available. Your organization restricts model selection.`, { display: "system" });
        return;
      }
      if (model && isOpus1mUnavailable(model)) {
        onDone(`Opus 4.6 with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m`, { display: "system" });
        return;
      }
      if (model && isSonnet1mUnavailable(model)) {
        onDone(`Sonnet 4.6 with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m`, { display: "system" });
        return;
      }
      if (!model) {
        setModel(null);
        return;
      }
      if (isKnownAlias(model)) {
        setModel(model);
        return;
      }
      try {
        const { valid, error } = await validateModel(model);
        if (valid) {
          setModel(model);
        } else {
          onDone(error || `Model '${model}' not found`, {
            display: "system"
          });
        }
      } catch (error) {
        onDone(`Failed to validate model: ${error.message}`, {
          display: "system"
        });
      }
    }
    function setModel(modelValue) {
      setAppState((prev) => ({
        ...prev,
        mainLoopModel: modelValue,
        mainLoopModelForSession: null
      }));
      let message = `Set model to ${source_default.bold(renderModelLabel(modelValue))}`;
      let wasFastModeToggledOn = undefined;
      if (isFastModeEnabled()) {
        clearFastModeCooldown();
        if (!isFastModeSupportedByModel(modelValue) && isFastMode) {
          setAppState((prev) => ({
            ...prev,
            fastMode: false
          }));
          wasFastModeToggledOn = false;
        } else if (isFastModeSupportedByModel(modelValue) && isFastMode) {
          message += ` \xB7 Fast mode ON`;
          wasFastModeToggledOn = true;
        }
      }
      if (isBilledAsExtraUsage(modelValue, wasFastModeToggledOn === true, isOpus1mMergeEnabled())) {
        message += ` \xB7 Billed as extra usage`;
      }
      if (wasFastModeToggledOn === false) {
        message += ` \xB7 Fast mode OFF`;
      }
      onDone(message);
    }
    handleModelChange();
  }, [model, onDone, setAppState]);
  return null;
}
function isKnownAlias(model) {
  return MODEL_ALIASES.includes(model.toLowerCase().trim());
}
function isOpus1mUnavailable(model) {
  const m = model.toLowerCase();
  return !checkOpus1mAccess() && !isOpus1mMergeEnabled() && m.includes("opus") && m.includes("[1m]");
}
function isSonnet1mUnavailable(model) {
  const m = model.toLowerCase();
  return !checkSonnet1mAccess() && (m.includes("sonnet[1m]") || m.includes("sonnet-4-6[1m]"));
}
function ShowModelAndClose({
  onDone
}) {
  const mainLoopModel = useAppState((s) => s.mainLoopModel);
  const mainLoopModelForSession = useAppState((s) => s.mainLoopModelForSession);
  const effortValue = useAppState((s) => s.effortValue);
  const displayModel = renderModelLabel(mainLoopModel);
  const effortInfo = effortValue !== undefined ? ` (effort: ${effortValue})` : "";
  if (mainLoopModelForSession) {
    onDone(`Current model: ${source_default.bold(renderModelLabel(mainLoopModelForSession))} (session override from plan mode)
Base model: ${displayModel}${effortInfo}`);
  } else {
    onDone(`Current model: ${displayModel}${effortInfo}`);
  }
  return null;
}
function renderModelLabel(model) {
  const rendered = renderDefaultModelSetting(model ?? getDefaultMainLoopModelSetting());
  return model === null ? `${rendered} (default)` : rendered;
}
var React, jsx_dev_runtime, call = async (onDone, _context, args) => {
  args = args?.trim() || "";
  if (COMMON_INFO_ARGS.includes(args)) {
    logEvent("tengu_model_command_inline_help", {
      args
    });
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ShowModelAndClose, {
      onDone
    }, undefined, false, undefined, this);
  }
  if (COMMON_HELP_ARGS.includes(args)) {
    onDone("Run /model to open the model selection menu, or /model [modelName] to set the model.", { display: "system" });
    return;
  }
  if (args) {
    logEvent("tengu_model_command_inline", {
      args
    });
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SetModelAndClose, {
      args,
      onDone
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ModelPickerWrapper, {
    onDone
  }, undefined, false, undefined, this);
};
var init_model2 = __esm(() => {
  init_source();
  init_ModelPicker();
  init_xml();
  init_analytics();
  init_AppState();
  init_extraUsage();
  init_fastMode();
  init_aliases();
  init_check1mAccess();
  init_model();
  init_modelAllowlist();
  init_validateModel();
  React = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_model2();

export {
  call
};
