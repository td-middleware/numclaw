// @bun
import {
  getBaseRenderOptions
} from "./chunk-g63tgj4f.js";
import {
  AppStateProvider,
  KeybindingSetup,
  Select,
  init_AppState,
  init_CustomSelect,
  init_KeybindingProviderSetup
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
  Dialog,
  ThemedBox_default,
  ThemedText,
  init_src,
  root_default
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
import {
  init_slowOperations,
  jsonStringify,
  writeFileSync_DEPRECATED
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
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/InvalidConfigDialog.tsx
init_src();
init_KeybindingProviderSetup();
init_AppState();
init_slowOperations();
init_CustomSelect();
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function InvalidConfigDialog({
  filePath,
  errorDescription,
  onExit,
  onReset
}) {
  const handleSelect = (value) => {
    if (value === "exit") {
      onExit();
    } else {
      onReset();
    }
  };
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Configuration Error",
    color: "error",
    onCancel: onExit,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              "The configuration file at ",
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                bold: true,
                children: filePath
              }, undefined, false, undefined, this),
              " contains invalid JSON."
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: errorDescription
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            children: "Choose an option:"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
            options: [
              { label: "Exit and fix manually", value: "exit" },
              { label: "Reset with default configuration", value: "reset" }
            ],
            onChange: handleSelect,
            onCancel: onExit
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var SAFE_ERROR_THEME_NAME = "dark";
async function showInvalidConfigDialog({
  error
}) {
  const renderOptions = {
    ...getBaseRenderOptions(false),
    theme: SAFE_ERROR_THEME_NAME
  };
  await new Promise(async (resolve) => {
    const { unmount } = await root_default(/* @__PURE__ */ jsx_dev_runtime.jsxDEV(AppStateProvider, {
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeybindingSetup, {
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(InvalidConfigDialog, {
          filePath: error.filePath,
          errorDescription: error.message,
          onExit: () => {
            unmount();
            resolve();
            process.exit(1);
          },
          onReset: () => {
            writeFileSync_DEPRECATED(error.filePath, jsonStringify(error.defaultConfig, null, 2), { flush: false, encoding: "utf8" });
            unmount();
            resolve();
            process.exit(0);
          }
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this), renderOptions);
  });
}
export {
  showInvalidConfigDialog
};
