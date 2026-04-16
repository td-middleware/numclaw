// @bun
import {
  Select,
  getCurrentSessionTag,
  getTranscriptPath,
  init_select,
  init_sessionStorage,
  saveTag
} from "./chunk-1dqpv8j1.js";
import"./chunk-2m9aherq.js";
import"./chunk-ft4hf2cg.js";
import"./chunk-hkxa4n4h.js";
import"./chunk-8rnfj5x5.js";
import"./chunk-zejm280k.js";
import {
  init_sanitization,
  recursivelySanitizeUnicode
} from "./chunk-4nspekjp.js";
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
  init_source,
  init_src,
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
import {
  getSessionId,
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

// src/commands/tag/tag.tsx
function ConfirmRemoveTag({
  tagName,
  onConfirm,
  onCancel
}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Remove tag?",
    subtitle: `Current tag: #${tagName}`,
    onCancel,
    color: "warning",
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "This will remove the tag from the current session."
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
          onChange: (value) => value === "yes" ? onConfirm() : onCancel(),
          options: [
            { label: "Yes, remove tag", value: "yes" },
            { label: "No, keep tag", value: "no" }
          ]
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function ToggleTagAndClose({
  tagName,
  onDone
}) {
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [sessionId, setSessionId] = React.useState(null);
  const normalizedTag = recursivelySanitizeUnicode(tagName).trim();
  React.useEffect(() => {
    const id = getSessionId();
    if (!id) {
      onDone("No active session to tag", { display: "system" });
      return;
    }
    if (!normalizedTag) {
      onDone("Tag name cannot be empty", { display: "system" });
      return;
    }
    setSessionId(id);
    const currentTag = getCurrentSessionTag(id);
    if (currentTag === normalizedTag) {
      logEvent("tengu_tag_command_remove_prompt", {});
      setShowConfirm(true);
    } else {
      const isReplacing = !!currentTag;
      logEvent("tengu_tag_command_add", { is_replacing: isReplacing });
      (async () => {
        const fullPath = getTranscriptPath();
        await saveTag(id, normalizedTag, fullPath);
        onDone(`Tagged session with ${source_default.cyan(`#${normalizedTag}`)}`, {
          display: "system"
        });
      })();
    }
  }, [normalizedTag, onDone]);
  if (showConfirm && sessionId) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfirmRemoveTag, {
      tagName: normalizedTag,
      onConfirm: async () => {
        logEvent("tengu_tag_command_remove_confirmed", {});
        const fullPath = getTranscriptPath();
        await saveTag(sessionId, "", fullPath);
        onDone(`Removed tag ${source_default.cyan(`#${normalizedTag}`)}`, {
          display: "system"
        });
      },
      onCancel: () => {
        logEvent("tengu_tag_command_remove_cancelled", {});
        onDone(`Kept tag ${source_default.cyan(`#${normalizedTag}`)}`, {
          display: "system"
        });
      }
    }, undefined, false, undefined, this);
  }
  return null;
}
function ShowHelp({
  onDone
}) {
  React.useEffect(() => {
    onDone(`Usage: /tag <tag-name>

Toggle a searchable tag on the current session.
Run the same command again to remove the tag.
Tags are displayed after the branch name in /resume and can be searched with /.

Examples:
  /tag bugfix        # Add tag
  /tag bugfix        # Remove tag (toggle)
  /tag feature-auth
  /tag wip`, { display: "system" });
  }, [onDone]);
  return null;
}
async function call(onDone, _context, args) {
  args = args?.trim() || "";
  if (COMMON_INFO_ARGS.includes(args) || COMMON_HELP_ARGS.includes(args)) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ShowHelp, {
      onDone
    }, undefined, false, undefined, this);
  }
  if (!args) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ShowHelp, {
      onDone
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ToggleTagAndClose, {
    tagName: args,
    onDone
  }, undefined, false, undefined, this);
}
var React, jsx_dev_runtime;
var init_tag = __esm(() => {
  init_source();
  init_state();
  init_select();
  init_src();
  init_xml();
  init_src();
  init_analytics();
  init_sanitization();
  init_sessionStorage();
  React = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_tag();

export {
  call
};
