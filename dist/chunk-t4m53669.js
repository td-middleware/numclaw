// @bun
import {
  call as call2,
  init_upgrade
} from "./chunk-egj9fs5v.js";
import {
  call,
  init_extra_usage
} from "./chunk-j823epts.js";
import"./chunk-v4rg6qsp.js";
import"./chunk-21w1p486.js";
import"./chunk-eky7abxz.js";
import"./chunk-2bf7b51k.js";
import"./chunk-7ep3g26w.js";
import"./chunk-yh0nrcvb.js";
import {
  Select,
  extraUsage,
  init_claudeAiLimitsHook,
  init_extra_usage as init_extra_usage2,
  init_select,
  init_upgrade as init_upgrade2,
  upgrade_default,
  useClaudeAiLimits
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
  getFeatureValue_CACHED_MAY_BE_STALE,
  getOauthAccountInfo,
  getRateLimitTier,
  getSubscriptionType,
  hasClaudeAiBillingAccess,
  init_auth,
  init_billing,
  init_growthbook
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
  Dialog,
  init_src
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

// src/commands/rate-limit-options/rate-limit-options.tsx
function RateLimitOptionsMenu({
  onDone,
  context
}) {
  const [subCommandJSX, setSubCommandJSX] = import_react.useState(null);
  const claudeAiLimits = useClaudeAiLimits();
  const subscriptionType = getSubscriptionType();
  const rateLimitTier = getRateLimitTier();
  const hasExtraUsageEnabled = getOauthAccountInfo()?.hasExtraUsageEnabled === true;
  const isMax = subscriptionType === "max";
  const isMax20x = isMax && rateLimitTier === "default_claude_max_20x";
  const isTeamOrEnterprise = subscriptionType === "team" || subscriptionType === "enterprise";
  const buyFirst = getFeatureValue_CACHED_MAY_BE_STALE("tengu_jade_anvil_4", false);
  const options = import_react.useMemo(() => {
    const actionOptions = [];
    if (extraUsage.isEnabled()) {
      const hasBillingAccess = hasClaudeAiBillingAccess();
      const needsToRequestFromAdmin = isTeamOrEnterprise && !hasBillingAccess;
      const isOrgSpendCapDepleted = claudeAiLimits.overageDisabledReason === "out_of_credits" || claudeAiLimits.overageDisabledReason === "org_level_disabled_until" || claudeAiLimits.overageDisabledReason === "org_service_zero_credit_limit";
      if (needsToRequestFromAdmin && isOrgSpendCapDepleted) {} else {
        const isOverageState = claudeAiLimits.overageStatus === "rejected" || claudeAiLimits.overageStatus === "allowed_warning";
        let label;
        if (needsToRequestFromAdmin) {
          label = isOverageState ? "Request more" : "Request extra usage";
        } else {
          label = hasExtraUsageEnabled ? "Add funds to continue with extra usage" : "Switch to extra usage";
        }
        actionOptions.push({
          label,
          value: "extra-usage"
        });
      }
    }
    if (!isMax20x && !isTeamOrEnterprise && upgrade_default.isEnabled()) {
      actionOptions.push({
        label: "Upgrade your plan",
        value: "upgrade"
      });
    }
    const cancelOption = {
      label: "Stop and wait for limit to reset",
      value: "cancel"
    };
    if (buyFirst) {
      return [...actionOptions, cancelOption];
    }
    return [cancelOption, ...actionOptions];
  }, [
    buyFirst,
    isMax20x,
    isTeamOrEnterprise,
    hasExtraUsageEnabled,
    claudeAiLimits.overageStatus,
    claudeAiLimits.overageDisabledReason
  ]);
  function handleCancel() {
    logEvent("tengu_rate_limit_options_menu_cancel", {});
    onDone(undefined, { display: "skip" });
  }
  function handleSelect(value) {
    if (value === "upgrade") {
      logEvent("tengu_rate_limit_options_menu_select_upgrade", {});
      call2(onDone, context).then((jsx) => {
        if (jsx) {
          setSubCommandJSX(jsx);
        }
      });
    } else if (value === "extra-usage") {
      logEvent("tengu_rate_limit_options_menu_select_extra_usage", {});
      call(onDone, context).then((jsx) => {
        if (jsx) {
          setSubCommandJSX(jsx);
        }
      });
    } else if (value === "cancel") {
      handleCancel();
    }
  }
  if (subCommandJSX) {
    return subCommandJSX;
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "What do you want to do?",
    onCancel: handleCancel,
    color: "suggestion",
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
      options,
      onChange: handleSelect,
      visibleOptionCount: options.length
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
async function call3(onDone, context) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(RateLimitOptionsMenu, {
    onDone,
    context
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime;
var init_rate_limit_options = __esm(() => {
  init_select();
  init_src();
  init_growthbook();
  init_analytics();
  init_claudeAiLimitsHook();
  init_auth();
  init_billing();
  init_extra_usage();
  init_extra_usage2();
  init_upgrade2();
  init_upgrade();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_rate_limit_options();

export {
  call3 as call
};
