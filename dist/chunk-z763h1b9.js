// @bun
import {
  AppStateProvider,
  checkOutTeleportedSessionBranch,
  init_AppState,
  init_teleport,
  processMessagesForTeleportResume,
  teleportResumeCodeSession
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
  ThemedBox_default,
  ThemedText,
  init_src,
  useAnimationFrame
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
import {
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
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
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/TeleportProgress.tsx
init_figures();
init_src();
init_AppState();
init_teleport();
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var SPINNER_FRAMES = ["\u25D0", "\u25D3", "\u25D1", "\u25D2"];
var STEPS = [
  { key: "validating", label: "Validating session" },
  { key: "fetching_logs", label: "Fetching session logs" },
  { key: "fetching_branch", label: "Getting branch info" },
  { key: "checking_out", label: "Checking out branch" }
];
function TeleportProgress({
  currentStep,
  sessionId
}) {
  const [ref, time] = useAnimationFrame(100);
  const frame = Math.floor(time / 100) % SPINNER_FRAMES.length;
  const currentStepIndex = STEPS.findIndex((s) => s.key === currentStep);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    ref,
    flexDirection: "column",
    paddingX: 1,
    paddingY: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          bold: true,
          color: "claude",
          children: [
            SPINNER_FRAMES[frame],
            " Teleporting session\u2026"
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      sessionId && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: sessionId
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginLeft: 2,
        children: STEPS.map((step, index) => {
          const isComplete = index < currentStepIndex;
          const isCurrent = index === currentStepIndex;
          const isPending = index > currentStepIndex;
          let icon;
          let color;
          if (isComplete) {
            icon = figures_default.tick;
            color = "green";
          } else if (isCurrent) {
            icon = SPINNER_FRAMES[frame];
            color = "claude";
          } else {
            icon = figures_default.circle;
            color = undefined;
          }
          return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            flexDirection: "row",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                width: 2,
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  color,
                  dimColor: isPending,
                  children: icon
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: isPending,
                bold: isCurrent,
                children: step.label
              }, undefined, false, undefined, this)
            ]
          }, step.key, true, undefined, this);
        })
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
async function teleportWithProgress(root, sessionId) {
  let setStep = () => {};
  function TeleportProgressWrapper() {
    const [step, _setStep] = import_react.useState("validating");
    setStep = _setStep;
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(TeleportProgress, {
      currentStep: step,
      sessionId
    }, undefined, false, undefined, this);
  }
  root.render(/* @__PURE__ */ jsx_dev_runtime.jsxDEV(AppStateProvider, {
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(TeleportProgressWrapper, {}, undefined, false, undefined, this)
  }, undefined, false, undefined, this));
  const result = await teleportResumeCodeSession(sessionId, setStep);
  setStep("checking_out");
  const { branchName, branchError } = await checkOutTeleportedSessionBranch(result.branch);
  return {
    messages: processMessagesForTeleportResume(result.log, branchError),
    branchName
  };
}
export {
  teleportWithProgress,
  TeleportProgress
};
