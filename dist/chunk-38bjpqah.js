// @bun
import {
  ConfigurableShortcutHint,
  Select,
  Spinner,
  TeleportError,
  init_ConfigurableShortcutHint,
  init_CustomSelect,
  init_Spinner,
  init_TeleportError,
  init_teleport,
  init_useShortcutDisplay,
  init_useTerminalSize,
  teleportResumeCodeSession,
  useShortcutDisplay,
  useTerminalSize
} from "./chunk-68t3k84h.js";
import"./chunk-7gdncna8.js";
import"./chunk-8ddc8vby.js";
import"./chunk-3b0x3emp.js";
import"./chunk-zwytztk9.js";
import"./chunk-zejm280k.js";
import"./chunk-4nspekjp.js";
import"./chunk-var1et7e.js";
import"./chunk-ehtwnxpg.js";
import"./chunk-gjqvqnmz.js";
import"./chunk-mb9a3ccd.js";
import"./chunk-bxcfz5gy.js";
import"./chunk-sby7hdv7.js";
import"./chunk-2gzv8nrw.js";
import"./chunk-8h6sdj66.js";
import"./chunk-cgfdkzhb.js";
import"./chunk-jt3r57pw.js";
import"./chunk-j5bth84e.js";
import"./chunk-62vdjjxx.js";
import"./chunk-5pevjsyw.js";
import {
  init_useKeybinding,
  useKeybinding
} from "./chunk-xnav6j8h.js";
import"./chunk-ps49ymvj.js";
import"./chunk-zk2wsm7d.js";
import"./chunk-2t0xa4dt.js";
import"./chunk-wyhtrn3j.js";
import"./chunk-9q28teyx.js";
import"./chunk-zsgha506.js";
import"./chunk-4jm600zv.js";
import"./chunk-xkt36p6r.js";
import {
  fetchCodeSessionsFromSessionsAPI,
  init_api
} from "./chunk-x4z03fw8.js";
import"./chunk-fxr6a341.js";
import"./chunk-mx28h61f.js";
import"./chunk-v3z97ed6.js";
import"./chunk-mt13a0c0.js";
import"./chunk-d4f3pj9g.js";
import"./chunk-wkth813t.js";
import"./chunk-chsyvavm.js";
import"./chunk-6mpw9h55.js";
import"./chunk-dme2fwws.js";
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
import {
  formatRelativeTime,
  init_format
} from "./chunk-64hks9ax.js";
import"./chunk-crmjpsqe.js";
import {
  Byline,
  KeyboardShortcutHint,
  ThemedBox_default,
  ThemedText,
  init_src,
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
import {
  detectCurrentRepository,
  init_detectRepository
} from "./chunk-h1mr3371.js";
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
  TeleportOperationError,
  errorMessage,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-404qm8xt.js";
import"./chunk-fbv4apne.js";
import"./chunk-jaaxk89e.js";
import {
  init_state,
  setTeleportedSessionInfo
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

// src/components/TeleportResumeWrapper.tsx
init_analytics();
var import_react3 = __toESM(require_react(), 1);

// src/hooks/useTeleportResume.tsx
init_state();
init_analytics();
init_errors();
init_teleport();
var import_react = __toESM(require_react(), 1);
function useTeleportResume(source) {
  const [isResuming, setIsResuming] = import_react.useState(false);
  const [error, setError] = import_react.useState(null);
  const [selectedSession, setSelectedSession] = import_react.useState(null);
  const resumeSession = import_react.useCallback(async (session) => {
    setIsResuming(true);
    setError(null);
    setSelectedSession(session);
    logEvent("tengu_teleport_resume_session", {
      source,
      session_id: session.id
    });
    try {
      const result = await teleportResumeCodeSession(session.id);
      setTeleportedSessionInfo({ sessionId: session.id });
      setIsResuming(false);
      return result;
    } catch (err) {
      const teleportError = {
        message: err instanceof TeleportOperationError ? err.message : errorMessage(err),
        formattedMessage: err instanceof TeleportOperationError ? err.formattedMessage : undefined,
        isOperationError: err instanceof TeleportOperationError
      };
      setError(teleportError);
      setIsResuming(false);
      return null;
    }
  }, [source]);
  const clearError = import_react.useCallback(() => {
    setError(null);
  }, []);
  return {
    resumeSession,
    isResuming,
    error,
    selectedSession,
    clearError
  };
}

// src/components/TeleportResumeWrapper.tsx
init_src();
init_useKeybinding();

// src/components/ResumeTask.tsx
init_useTerminalSize();
init_api();
init_src();
init_useKeybinding();
init_useShortcutDisplay();
init_debug();
init_detectRepository();
init_format();
init_ConfigurableShortcutHint();
init_CustomSelect();
init_src();
init_Spinner();
init_TeleportError();
var import_react2 = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var UPDATED_STRING = "Updated";
var SPACE_BETWEEN_TABLE_COLUMNS = "  ";
function ResumeTask({
  onSelect,
  onCancel,
  isEmbedded = false
}) {
  const { rows } = useTerminalSize();
  const [sessions, setSessions] = import_react2.useState([]);
  const [currentRepo, setCurrentRepo] = import_react2.useState(null);
  const [loading, setLoading] = import_react2.useState(true);
  const [loadErrorType, setLoadErrorType] = import_react2.useState(null);
  const [retrying, setRetrying] = import_react2.useState(false);
  const [hasCompletedTeleportErrorFlow, setHasCompletedTeleportErrorFlow] = import_react2.useState(false);
  const [focusedIndex, setFocusedIndex] = import_react2.useState(1);
  const escKey = useShortcutDisplay("confirm:no", "Confirmation", "Esc");
  const loadSessions = import_react2.useCallback(async () => {
    try {
      setLoading(true);
      setLoadErrorType(null);
      const detectedRepo = await detectCurrentRepository();
      setCurrentRepo(detectedRepo);
      logForDebugging(`Current repository: ${detectedRepo || "not detected"}`);
      const codeSessions = await fetchCodeSessionsFromSessionsAPI();
      let filteredSessions = codeSessions;
      if (detectedRepo) {
        filteredSessions = codeSessions.filter((session) => {
          if (!session.repo)
            return false;
          const sessionRepo = `${session.repo.owner.login}/${session.repo.name}`;
          return sessionRepo === detectedRepo;
        });
        logForDebugging(`Filtered ${filteredSessions.length} sessions for repo ${detectedRepo} from ${codeSessions.length} total`);
      }
      const sortedSessions = [...filteredSessions].sort((a, b) => {
        const dateA = new Date(a.updated_at);
        const dateB = new Date(b.updated_at);
        return dateB.getTime() - dateA.getTime();
      });
      setSessions(sortedSessions);
    } catch (err) {
      const errorMessage2 = err instanceof Error ? err.message : String(err);
      logForDebugging(`Error loading code sessions: ${errorMessage2}`);
      setLoadErrorType(determineErrorType(errorMessage2));
    } finally {
      setLoading(false);
      setRetrying(false);
    }
  }, []);
  const handleRetry = () => {
    setRetrying(true);
    loadSessions();
  };
  useKeybinding("confirm:no", onCancel, { context: "Confirmation" });
  use_input_default((input, key) => {
    if (key.ctrl && input === "c") {
      onCancel();
      return;
    }
    if (key.ctrl && input === "r" && loadErrorType) {
      handleRetry();
      return;
    }
    if (loadErrorType !== null && key.return) {
      onCancel();
      return;
    }
  });
  const handleErrorComplete = import_react2.useCallback(() => {
    setHasCompletedTeleportErrorFlow(true);
    loadSessions();
  }, [setHasCompletedTeleportErrorFlow, loadSessions]);
  if (!hasCompletedTeleportErrorFlow) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(TeleportError, {
      onComplete: handleErrorComplete
    }, undefined, false, undefined, this);
  }
  if (loading) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      padding: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "row",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Spinner, {}, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              children: "Loading Claude Code sessions\u2026"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: retrying ? "Retrying\u2026" : "Fetching your Claude Code sessions\u2026"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (loadErrorType) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      padding: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          bold: true,
          color: "error",
          children: "Error loading Claude Code sessions"
        }, undefined, false, undefined, this),
        renderErrorSpecificGuidance(loadErrorType),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            "Press ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              children: "Ctrl+R"
            }, undefined, false, undefined, this),
            " to retry \xB7 Press",
            " ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              children: escKey
            }, undefined, false, undefined, this),
            " to cancel"
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (sessions.length === 0) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      padding: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          bold: true,
          children: [
            "No Claude Code sessions found",
            currentRepo && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: [
                " for ",
                currentRepo
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Press ",
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                bold: true,
                children: escKey
              }, undefined, false, undefined, this),
              " to cancel"
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  const sessionMetadata = sessions.map((session) => ({
    ...session,
    timeString: formatRelativeTime(new Date(session.updated_at))
  }));
  const maxTimeStringLength = Math.max(UPDATED_STRING.length, ...sessionMetadata.map((meta) => meta.timeString.length));
  const options = sessionMetadata.map(({ timeString, title, id }) => {
    const paddedTime = timeString.padEnd(maxTimeStringLength, " ");
    return {
      label: `${paddedTime}  ${title}`,
      value: id
    };
  });
  const layoutOverhead = 7;
  const maxVisibleOptions = Math.max(1, isEmbedded ? Math.min(sessions.length, 5, rows - 6 - layoutOverhead) : Math.min(sessions.length, rows - 1 - layoutOverhead));
  const maxHeight = maxVisibleOptions + layoutOverhead;
  const showScrollPosition = sessions.length > maxVisibleOptions;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    padding: 1,
    height: maxHeight,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        bold: true,
        children: [
          "Select a session to resume",
          showScrollPosition && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              " ",
              "(",
              focusedIndex,
              " of ",
              sessions.length,
              ")"
            ]
          }, undefined, true, undefined, this),
          currentRepo && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              " (",
              currentRepo,
              ")"
            ]
          }, undefined, true, undefined, this),
          ":"
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginTop: 1,
        flexGrow: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginLeft: 2,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              children: [
                UPDATED_STRING.padEnd(maxTimeStringLength, " "),
                SPACE_BETWEEN_TABLE_COLUMNS,
                "Session Title"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
            visibleOptionCount: maxVisibleOptions,
            options,
            onChange: (value) => {
              const session = sessions.find((s) => s.id === value);
              if (session) {
                onSelect(session);
              }
            },
            onFocus: (value) => {
              const index = options.findIndex((o) => o.value === value);
              if (index >= 0) {
                setFocusedIndex(index + 1);
              }
            }
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
                shortcut: "\u2191/\u2193",
                action: "select"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter",
                action: "confirm"
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
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function determineErrorType(errorMessage2) {
  const message = errorMessage2.toLowerCase();
  if (message.includes("fetch") || message.includes("network") || message.includes("timeout")) {
    return "network";
  }
  if (message.includes("auth") || message.includes("token") || message.includes("permission") || message.includes("oauth") || message.includes("not authenticated") || message.includes("/login") || message.includes("console account") || message.includes("403")) {
    return "auth";
  }
  if (message.includes("api") || message.includes("rate limit") || message.includes("500") || message.includes("529")) {
    return "api";
  }
  return "other";
}
function renderErrorSpecificGuidance(errorType) {
  switch (errorType) {
    case "network":
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginY: 1,
        flexDirection: "column",
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Check your internet connection"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this);
    case "auth":
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginY: 1,
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Teleport requires a Claude account"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Run ",
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                bold: true,
                children: "/login"
              }, undefined, false, undefined, this),
              ' and select "Claude account with subscription"'
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this);
    case "api":
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginY: 1,
        flexDirection: "column",
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Sorry, Claude encountered an error"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this);
    case "other":
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginY: 1,
        flexDirection: "row",
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Sorry, Claude Code encountered an error"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this);
  }
}

// src/components/TeleportResumeWrapper.tsx
init_Spinner();
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
function TeleportResumeWrapper({
  onComplete,
  onCancel,
  onError,
  isEmbedded = false,
  source
}) {
  const { resumeSession, isResuming, error, selectedSession } = useTeleportResume(source);
  import_react3.useEffect(() => {
    logEvent("tengu_teleport_started", {
      source
    });
  }, [source]);
  const handleSelect = async (session) => {
    const result = await resumeSession(session);
    if (result) {
      onComplete(result);
    } else if (error) {
      if (onError) {
        onError(error.message, error.formattedMessage);
      }
    }
  };
  const handleCancel = () => {
    logEvent("tengu_teleport_cancelled", {});
    onCancel();
  };
  useKeybinding("app:interrupt", handleCancel, {
    context: "Global",
    isActive: !!error && !onError
  });
  if (isResuming && selectedSession) {
    return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      padding: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
          flexDirection: "row",
          children: [
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Spinner, {}, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
              bold: true,
              children: "Resuming session\u2026"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            'Loading "',
            selectedSession.title,
            '"\u2026'
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (error && !onError) {
    return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      padding: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
          bold: true,
          color: "error",
          children: "Failed to resume session"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
          dimColor: true,
          children: error.message
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Press ",
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                bold: true,
                children: "Esc"
              }, undefined, false, undefined, this),
              " to cancel"
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ResumeTask, {
    onSelect: handleSelect,
    onCancel: handleCancel,
    isEmbedded
  }, undefined, false, undefined, this);
}
export {
  TeleportResumeWrapper
};
