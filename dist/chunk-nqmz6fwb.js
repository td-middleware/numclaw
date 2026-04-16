// @bun
import {
  LogSelector,
  agenticSessionSearch,
  checkCrossProjectResume,
  init_LogSelector,
  init_agenticSessionSearch,
  init_crossProjectResume
} from "./chunk-e1hmtpcv.js";
import"./chunk-c6sjhj89.js";
import"./chunk-vf30jkjn.js";
import"./chunk-j9bj7sdv.js";
import"./chunk-8f032fwq.js";
import"./chunk-ntwsmvzw.js";
import"./chunk-6qfy3sz0.js";
import"./chunk-21mfpnva.js";
import"./chunk-ak8x0b2k.js";
import"./chunk-m051frfq.js";
import {
  init_modalContext,
  useIsInsideModal
} from "./chunk-z1bs6d7k.js";
import"./chunk-eky7abxz.js";
import"./chunk-7ep3g26w.js";
import {
  MessageResponse,
  Spinner,
  getLastSessionLog,
  getSessionIdFromLog,
  getWorktreePaths,
  init_MessageResponse,
  init_Spinner,
  init_getWorktreePaths,
  init_sessionStorage,
  init_useTerminalSize,
  init_uuid,
  isCustomTitleEnabled,
  isLiteLog,
  loadAllProjectsMessageLogs,
  loadFullLog,
  loadSameRepoMessageLogs,
  searchSessionsByCustomTitle,
  useTerminalSize,
  validateUuid
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
  init_source,
  init_src,
  setClipboard,
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
import"./chunk-404qm8xt.js";
import"./chunk-fbv4apne.js";
import"./chunk-jaaxk89e.js";
import {
  getOriginalCwd,
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

// src/commands/resume/resume.tsx
function resumeHelpMessage(result) {
  switch (result.resultType) {
    case "sessionNotFound":
      return `Session ${source_default.bold(result.arg)} was not found.`;
    case "multipleMatches":
      return `Found ${result.count} sessions matching ${source_default.bold(result.arg)}. Please use /resume to pick a specific session.`;
  }
}
function ResumeError({
  message,
  args,
  onDone
}) {
  React.useEffect(() => {
    const timer = setTimeout(onDone, 0);
    return () => clearTimeout(timer);
  }, [onDone]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          figures_default.pointer,
          " /resume ",
          args
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(MessageResponse, {
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: message
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function ResumeCommand({
  onDone,
  onResume
}) {
  const [logs, setLogs] = React.useState([]);
  const [worktreePaths, setWorktreePaths] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [resuming, setResuming] = React.useState(false);
  const [showAllProjects, setShowAllProjects] = React.useState(false);
  const { rows } = useTerminalSize();
  const insideModal = useIsInsideModal();
  const loadLogs = React.useCallback(async (allProjects, paths) => {
    setLoading(true);
    try {
      const allLogs = allProjects ? await loadAllProjectsMessageLogs() : await loadSameRepoMessageLogs(paths);
      const resumable = filterResumableSessions(allLogs, getSessionId());
      if (resumable.length === 0) {
        onDone("No conversations found to resume");
        return;
      }
      setLogs(resumable);
    } catch (_err) {
      onDone("Failed to load conversations");
    } finally {
      setLoading(false);
    }
  }, [onDone]);
  React.useEffect(() => {
    async function init() {
      const paths = await getWorktreePaths(getOriginalCwd());
      setWorktreePaths(paths);
      loadLogs(false, paths);
    }
    init();
  }, [loadLogs]);
  const handleToggleAllProjects = React.useCallback(() => {
    const newValue = !showAllProjects;
    setShowAllProjects(newValue);
    loadLogs(newValue, worktreePaths);
  }, [showAllProjects, loadLogs, worktreePaths]);
  async function handleSelect(log) {
    const sessionId = validateUuid(getSessionIdFromLog(log));
    if (!sessionId) {
      onDone("Failed to resume conversation");
      return;
    }
    const fullLog = isLiteLog(log) ? await loadFullLog(log) : log;
    const crossProjectCheck = checkCrossProjectResume(fullLog, showAllProjects, worktreePaths);
    if (crossProjectCheck.isCrossProject) {
      if (crossProjectCheck.isSameRepoWorktree) {
        setResuming(true);
        onResume(sessionId, fullLog, "slash_command_picker");
        return;
      }
      const raw = await setClipboard(crossProjectCheck.command);
      if (raw)
        process.stdout.write(raw);
      const message = [
        "",
        "This conversation is from a different directory.",
        "",
        "To resume, run:",
        `  ${crossProjectCheck.command}`,
        "",
        "(Command copied to clipboard)",
        ""
      ].join(`
`);
      onDone(message, { display: "user" });
      return;
    }
    setResuming(true);
    onResume(sessionId, fullLog, "slash_command_picker");
  }
  function handleCancel() {
    onDone("Resume cancelled", { display: "system" });
  }
  if (loading) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Spinner, {}, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: " Loading conversations\u2026"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (resuming) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Spinner, {}, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: " Resuming conversation\u2026"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(LogSelector, {
    logs,
    maxHeight: insideModal ? Math.floor(rows / 2) : rows - 2,
    onCancel: handleCancel,
    onSelect: handleSelect,
    onLogsChanged: () => loadLogs(showAllProjects, worktreePaths),
    showAllProjects,
    onToggleAllProjects: handleToggleAllProjects,
    onAgenticSearch: agenticSessionSearch
  }, undefined, false, undefined, this);
}
function filterResumableSessions(logs, currentSessionId) {
  return logs.filter((l) => !l.isSidechain && getSessionIdFromLog(l) !== currentSessionId);
}
var React, jsx_dev_runtime, call = async (onDone, context, args) => {
  const onResume = async (sessionId, log, entrypoint) => {
    try {
      await context.resume?.(sessionId, log, entrypoint);
      onDone(undefined, { display: "skip" });
    } catch (error) {
      logError(error);
      onDone(`Failed to resume: ${error.message}`);
    }
  };
  const arg = args?.trim();
  if (!arg) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ResumeCommand, {
      onDone,
      onResume
    }, Date.now(), false, undefined, this);
  }
  const worktreePaths = await getWorktreePaths(getOriginalCwd());
  const logs = await loadSameRepoMessageLogs(worktreePaths);
  if (logs.length === 0) {
    const message2 = "No conversations found to resume.";
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ResumeError, {
      message: message2,
      args: arg,
      onDone: () => onDone(message2)
    }, undefined, false, undefined, this);
  }
  const maybeSessionId = validateUuid(arg);
  if (maybeSessionId) {
    const matchingLogs = logs.filter((l) => getSessionIdFromLog(l) === maybeSessionId).sort((a, b) => b.modified.getTime() - a.modified.getTime());
    if (matchingLogs.length > 0) {
      const log = matchingLogs[0];
      const fullLog = isLiteLog(log) ? await loadFullLog(log) : log;
      onResume(maybeSessionId, fullLog, "slash_command_session_id");
      return null;
    }
    const directLog = await getLastSessionLog(maybeSessionId);
    if (directLog) {
      onResume(maybeSessionId, directLog, "slash_command_session_id");
      return null;
    }
  }
  if (isCustomTitleEnabled()) {
    const titleMatches = await searchSessionsByCustomTitle(arg, {
      exact: true
    });
    if (titleMatches.length === 1) {
      const log = titleMatches[0];
      const sessionId = getSessionIdFromLog(log);
      if (sessionId) {
        const fullLog = isLiteLog(log) ? await loadFullLog(log) : log;
        onResume(sessionId, fullLog, "slash_command_title");
        return null;
      }
    }
    if (titleMatches.length > 1) {
      const message2 = resumeHelpMessage({
        resultType: "multipleMatches",
        arg,
        count: titleMatches.length
      });
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ResumeError, {
        message: message2,
        args: arg,
        onDone: () => onDone(message2)
      }, undefined, false, undefined, this);
    }
  }
  const message = resumeHelpMessage({ resultType: "sessionNotFound", arg });
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ResumeError, {
    message,
    args: arg,
    onDone: () => onDone(message)
  }, undefined, false, undefined, this);
};
var init_resume = __esm(() => {
  init_source();
  init_figures();
  init_state();
  init_LogSelector();
  init_MessageResponse();
  init_Spinner();
  init_modalContext();
  init_useTerminalSize();
  init_src();
  init_src();
  init_agenticSessionSearch();
  init_crossProjectResume();
  init_getWorktreePaths();
  init_log();
  init_sessionStorage();
  init_uuid();
  React = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_resume();

export {
  filterResumableSessions,
  call
};
