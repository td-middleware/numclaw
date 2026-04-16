// @bun
import {
  fetchReferralRedemptions,
  formatCreditAmount,
  getCachedOrFetchPassesEligibility,
  getCachedRemainingPasses,
  init_referral,
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-4n6tcmpp.js";
import {
  init_useKeybinding,
  useKeybinding
} from "./chunk-xnav6j8h.js";
import"./chunk-nyabx2pm.js";
import {
  TEARDROP_ASTERISK,
  getGlobalConfig,
  init_config1 as init_config,
  init_figures,
  saveGlobalConfig
} from "./chunk-q1w4qzqg.js";
import"./chunk-sg66v252.js";
import"./chunk-8bwqtasa.js";
import"./chunk-j9gxwbe3.js";
import"./chunk-qtptjcpp.js";
import {
  count,
  init_array
} from "./chunk-1cwdhk7a.js";
import"./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import"./chunk-gx8016vp.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-f5ma3nh5.js";
import"./chunk-tv9pcdnz.js";
import"./chunk-3c25bcsw.js";
import"./chunk-n9ktjngj.js";
import"./chunk-q82r31er.js";
import"./chunk-p2816w9z.js";
import"./chunk-v1kzp02e.js";
import"./chunk-64hks9ax.js";
import"./chunk-crmjpsqe.js";
import {
  Link,
  Pane,
  ThemedBox_default,
  ThemedText,
  init_src,
  setClipboard,
  use_input_default
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
  init_log,
  logError
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

// src/components/Passes/Passes.tsx
function Passes({ onDone }) {
  const [loading, setLoading] = import_react.useState(true);
  const [passStatuses, setPassStatuses] = import_react.useState([]);
  const [isAvailable, setIsAvailable] = import_react.useState(false);
  const [referralLink, setReferralLink] = import_react.useState(null);
  const [referrerReward, setReferrerReward] = import_react.useState(undefined);
  const exitState = useExitOnCtrlCDWithKeybindings(() => onDone("Guest passes dialog dismissed", { display: "system" }));
  const handleCancel = import_react.useCallback(() => {
    onDone("Guest passes dialog dismissed", { display: "system" });
  }, [onDone]);
  useKeybinding("confirm:no", handleCancel, { context: "Confirmation" });
  use_input_default((_input, key) => {
    if (key.return && referralLink) {
      setClipboard(referralLink).then((raw) => {
        if (raw)
          process.stdout.write(raw);
        logEvent("tengu_guest_passes_link_copied", {});
        onDone(`Referral link copied to clipboard!`);
      });
    }
  });
  import_react.useEffect(() => {
    async function loadPassesData() {
      try {
        const eligibilityData = await getCachedOrFetchPassesEligibility();
        if (!eligibilityData || !eligibilityData.eligible) {
          setIsAvailable(false);
          setLoading(false);
          return;
        }
        setIsAvailable(true);
        if (eligibilityData.referral_code_details?.referral_link) {
          setReferralLink(eligibilityData.referral_code_details.referral_link);
        }
        setReferrerReward(eligibilityData.referrer_reward);
        const campaign = eligibilityData.referral_code_details?.campaign ?? "claude_code_guest_pass";
        let redemptionsData;
        try {
          redemptionsData = await fetchReferralRedemptions(campaign);
        } catch (err) {
          logError(err);
          setIsAvailable(false);
          setLoading(false);
          return;
        }
        const redemptions = redemptionsData.redemptions || [];
        const maxRedemptions = redemptionsData.limit || 3;
        const statuses = [];
        for (let i = 0;i < maxRedemptions; i++) {
          const redemption = redemptions[i];
          statuses.push({
            passNumber: i + 1,
            isAvailable: !redemption
          });
        }
        setPassStatuses(statuses);
        setLoading(false);
      } catch (err) {
        logError(err);
        setIsAvailable(false);
        setLoading(false);
      }
    }
    loadPassesData();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pane, {
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Loading guest pass information\u2026"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: exitState.pending ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
              children: [
                "Press ",
                exitState.keyName,
                " again to exit"
              ]
            }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
              children: "Esc to cancel"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
  }
  if (!isAvailable) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pane, {
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "Guest passes are not currently available."
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: exitState.pending ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
              children: [
                "Press ",
                exitState.keyName,
                " again to exit"
              ]
            }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
              children: "Esc to cancel"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
  }
  const availableCount = count(passStatuses, (p) => p.isAvailable);
  const sortedPasses = [...passStatuses].sort((a, b) => +b.isAvailable - +a.isAvailable);
  const renderTicket = (pass) => {
    const isRedeemed = !pass.isAvailable;
    if (isRedeemed) {
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginRight: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: "\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2571"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: ` ) CC ${TEARDROP_ASTERISK} \u250A\u2571`
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2571"
          }, undefined, false, undefined, this)
        ]
      }, pass.passNumber, true, undefined, this);
    }
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      marginRight: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            " ) CC ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "claude",
              children: TEARDROP_ASTERISK
            }, undefined, false, undefined, this),
            " \u250A ( "
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"
        }, undefined, false, undefined, this)
      ]
    }, pass.passNumber, true, undefined, this);
  };
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pane, {
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: "permission",
          children: [
            "Guest passes \xB7 ",
            availableCount,
            " left"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "row",
          marginLeft: 2,
          children: sortedPasses.slice(0, 3).map((pass) => renderTicket(pass))
        }, undefined, false, undefined, this),
        referralLink && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          marginLeft: 2,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: referralLink
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginLeft: 2,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              referrerReward ? `Share a free week of Claude Code with friends. If they love it and subscribe, you'll get ${formatCreditAmount(referrerReward)} of extra usage to keep building. ` : "Share a free week of Claude Code with friends. ",
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
                url: referrerReward ? "https://support.claude.com/en/articles/13456702-claude-code-guest-passes" : "https://support.claude.com/en/articles/12875061-claude-code-guest-passes",
                children: "Terms apply."
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: exitState.pending ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
              children: [
                "Press ",
                exitState.keyName,
                " again to exit"
              ]
            }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
              children: "Enter to copy link \xB7 Esc to cancel"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime;
var init_Passes = __esm(() => {
  init_figures();
  init_useExitOnCtrlCDWithKeybindings();
  init_src();
  init_src();
  init_useKeybinding();
  init_analytics();
  init_referral();
  init_array();
  init_log();
  init_src();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/passes/passes.tsx
async function call(onDone) {
  const config = getGlobalConfig();
  const isFirstVisit = !config.hasVisitedPasses;
  if (isFirstVisit) {
    const remaining = getCachedRemainingPasses();
    saveGlobalConfig((current) => ({
      ...current,
      hasVisitedPasses: true,
      passesLastSeenRemaining: remaining ?? current.passesLastSeenRemaining
    }));
  }
  logEvent("tengu_guest_passes_visited", { is_first_visit: isFirstVisit });
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Passes, {
    onDone
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime2;
var init_passes = __esm(() => {
  init_Passes();
  init_analytics();
  init_referral();
  init_config();
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});
init_passes();

export {
  call
};
