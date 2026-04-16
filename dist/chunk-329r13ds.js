// @bun
import {
  StructuredDiff,
  fetchGitDiff,
  fetchGitDiffHunks,
  init_StructuredDiff,
  init_gitDiff,
  init_overlayContext,
  init_useShortcutDisplay,
  init_useTerminalSize,
  useRegisterOverlay,
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
  useKeybindings
} from "./chunk-xnav6j8h.js";
import"./chunk-ps49ymvj.js";
import"./chunk-zk2wsm7d.js";
import"./chunk-2t0xa4dt.js";
import"./chunk-wyhtrn3j.js";
import"./chunk-9q28teyx.js";
import"./chunk-zsgha506.js";
import"./chunk-4jm600zv.js";
import"./chunk-xkt36p6r.js";
import"./chunk-x4z03fw8.js";
import"./chunk-fxr6a341.js";
import"./chunk-mx28h61f.js";
import"./chunk-v3z97ed6.js";
import"./chunk-mt13a0c0.js";
import"./chunk-d4f3pj9g.js";
import"./chunk-wkth813t.js";
import"./chunk-chsyvavm.js";
import"./chunk-6mpw9h55.js";
import {
  init_file,
  init_stringUtils,
  plural,
  readFileSafe
} from "./chunk-dme2fwws.js";
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
  init_format,
  truncateStartToWidth
} from "./chunk-64hks9ax.js";
import"./chunk-crmjpsqe.js";
import {
  Byline,
  Dialog,
  Divider,
  ThemedBox_default,
  ThemedText,
  init_src
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
import {
  getCwd,
  init_cwd
} from "./chunk-b81hd3m6.js";
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
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/hooks/useDiffData.ts
function useDiffData() {
  const [diffResult, setDiffResult] = import_react.useState(null);
  const [hunks, setHunks] = import_react.useState(new Map);
  const [loading, setLoading] = import_react.useState(true);
  import_react.useEffect(() => {
    let cancelled = false;
    async function loadDiffData() {
      try {
        const [statsResult, hunksResult] = await Promise.all([
          fetchGitDiff(),
          fetchGitDiffHunks()
        ]);
        if (!cancelled) {
          setDiffResult(statsResult);
          setHunks(hunksResult);
          setLoading(false);
        }
      } catch (_error) {
        if (!cancelled) {
          setDiffResult(null);
          setHunks(new Map);
          setLoading(false);
        }
      }
    }
    loadDiffData();
    return () => {
      cancelled = true;
    };
  }, []);
  return import_react.useMemo(() => {
    if (!diffResult) {
      return { stats: null, files: [], hunks: new Map, loading };
    }
    const { stats, perFileStats } = diffResult;
    const files = [];
    for (const [path, fileStats] of perFileStats) {
      const fileHunks = hunks.get(path);
      const isUntracked = fileStats.isUntracked ?? false;
      const isLargeFile = !fileStats.isBinary && !isUntracked && !fileHunks;
      const totalLines = fileStats.added + fileStats.removed;
      const isTruncated = !isLargeFile && !fileStats.isBinary && totalLines > MAX_LINES_PER_FILE;
      files.push({
        path,
        linesAdded: fileStats.added,
        linesRemoved: fileStats.removed,
        isBinary: fileStats.isBinary,
        isLargeFile,
        isTruncated,
        isUntracked
      });
    }
    files.sort((a, b) => a.path.localeCompare(b.path));
    return { stats, files, hunks, loading: false };
  }, [diffResult, hunks, loading]);
}
var import_react, MAX_LINES_PER_FILE = 400;
var init_useDiffData = __esm(() => {
  init_gitDiff();
  import_react = __toESM(require_react(), 1);
});

// src/hooks/useTurnDiffs.ts
function isFileEditResult(result) {
  if (!result || typeof result !== "object")
    return false;
  const r = result;
  const hasFilePath = typeof r.filePath === "string";
  const hasStructuredPatch = Array.isArray(r.structuredPatch) && r.structuredPatch.length > 0;
  const isNewFile = r.type === "create" && typeof r.content === "string";
  return hasFilePath && (hasStructuredPatch || isNewFile);
}
function isFileWriteOutput(result) {
  return "type" in result && (result.type === "create" || result.type === "update");
}
function countHunkLines(hunks) {
  let added = 0;
  let removed = 0;
  for (const hunk of hunks) {
    for (const line of hunk.lines) {
      if (line.startsWith("+"))
        added++;
      else if (line.startsWith("-"))
        removed++;
    }
  }
  return { added, removed };
}
function getUserPromptPreview(message) {
  if (message.type !== "user")
    return "";
  const content = message.message.content;
  const text = typeof content === "string" ? content : "";
  if (text.length <= 30)
    return text;
  return text.slice(0, 29) + "\u2026";
}
function computeTurnStats(turn) {
  let totalAdded = 0;
  let totalRemoved = 0;
  for (const file of turn.files.values()) {
    totalAdded += file.linesAdded;
    totalRemoved += file.linesRemoved;
  }
  turn.stats = {
    filesChanged: turn.files.size,
    linesAdded: totalAdded,
    linesRemoved: totalRemoved
  };
}
function useTurnDiffs(messages) {
  const cache = import_react2.useRef({
    completedTurns: [],
    currentTurn: null,
    lastProcessedIndex: 0,
    lastTurnIndex: 0
  });
  return import_react2.useMemo(() => {
    const c = cache.current;
    if (messages.length < c.lastProcessedIndex) {
      c.completedTurns = [];
      c.currentTurn = null;
      c.lastProcessedIndex = 0;
      c.lastTurnIndex = 0;
    }
    for (let i = c.lastProcessedIndex;i < messages.length; i++) {
      const message = messages[i];
      if (!message || message.type !== "user")
        continue;
      const isToolResult = message.toolUseResult || Array.isArray(message.message.content) && message.message.content[0]?.type === "tool_result";
      if (!isToolResult && !message.isMeta) {
        if (c.currentTurn && c.currentTurn.files.size > 0) {
          computeTurnStats(c.currentTurn);
          c.completedTurns.push(c.currentTurn);
        }
        c.lastTurnIndex++;
        c.currentTurn = {
          turnIndex: c.lastTurnIndex,
          userPromptPreview: getUserPromptPreview(message),
          timestamp: message.timestamp,
          files: new Map,
          stats: { filesChanged: 0, linesAdded: 0, linesRemoved: 0 }
        };
      } else if (c.currentTurn && message.toolUseResult) {
        const result2 = message.toolUseResult;
        if (isFileEditResult(result2)) {
          const { filePath, structuredPatch } = result2;
          const isNewFile = "type" in result2 && result2.type === "create";
          let fileEntry = c.currentTurn.files.get(filePath);
          if (!fileEntry) {
            fileEntry = {
              filePath,
              hunks: [],
              isNewFile,
              linesAdded: 0,
              linesRemoved: 0
            };
            c.currentTurn.files.set(filePath, fileEntry);
          }
          if (isNewFile && structuredPatch.length === 0 && isFileWriteOutput(result2)) {
            const content = result2.content;
            const lines = content.split(`
`);
            const syntheticHunk = {
              oldStart: 0,
              oldLines: 0,
              newStart: 1,
              newLines: lines.length,
              lines: lines.map((l) => "+" + l)
            };
            fileEntry.hunks.push(syntheticHunk);
            fileEntry.linesAdded += lines.length;
          } else {
            fileEntry.hunks.push(...structuredPatch);
            const { added, removed } = countHunkLines(structuredPatch);
            fileEntry.linesAdded += added;
            fileEntry.linesRemoved += removed;
          }
          if (isNewFile) {
            fileEntry.isNewFile = true;
          }
        }
      }
    }
    c.lastProcessedIndex = messages.length;
    const result = [...c.completedTurns];
    if (c.currentTurn && c.currentTurn.files.size > 0) {
      computeTurnStats(c.currentTurn);
      result.push(c.currentTurn);
    }
    return result.reverse();
  }, [messages]);
}
var import_react2;
var init_useTurnDiffs = __esm(() => {
  import_react2 = __toESM(require_react(), 1);
});

// src/components/diff/DiffDetailView.tsx
import { resolve } from "path";
function DiffDetailView({
  filePath,
  hunks,
  isLargeFile,
  isBinary,
  isTruncated,
  isUntracked
}) {
  const { columns } = useTerminalSize();
  const { firstLine, fileContent } = import_react3.useMemo(() => {
    if (!filePath) {
      return { firstLine: null, fileContent: undefined };
    }
    const fullPath = resolve(getCwd(), filePath);
    const content = readFileSafe(fullPath);
    return {
      firstLine: content?.split(`
`)[0] ?? null,
      fileContent: content ?? undefined
    };
  }, [filePath]);
  if (isUntracked) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      width: "100%",
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              children: filePath
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: " (untracked)"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Divider, {
          padding: 4
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              italic: true,
              children: "New file not yet staged."
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              italic: true,
              children: [
                "Run `git add ",
                filePath,
                "` to see line counts."
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (isBinary) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      width: "100%",
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            children: filePath
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Divider, {
          padding: 4
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: "Binary file - cannot display diff"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (isLargeFile) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      width: "100%",
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            children: filePath
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Divider, {
          padding: 4
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: "Large file - diff exceeds 1 MB limit"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  const outerPaddingX = 1;
  const outerBorderWidth = 1;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    width: "100%",
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            children: filePath
          }, undefined, false, undefined, this),
          isTruncated && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: " (truncated)"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Divider, {
        padding: 4
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: hunks.length === 0 ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: "No diff content"
        }, undefined, false, undefined, this) : hunks.map((hunk, index) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(StructuredDiff, {
          patch: hunk,
          filePath,
          firstLine,
          fileContent,
          dim: false,
          width: columns - 2 * outerPaddingX - 2 * outerBorderWidth
        }, index, false, undefined, this))
      }, undefined, false, undefined, this),
      isTruncated && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        italic: true,
        children: "\u2026 diff truncated (exceeded 400 line limit)"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react3, jsx_dev_runtime;
var init_DiffDetailView = __esm(() => {
  init_useTerminalSize();
  init_src();
  init_cwd();
  init_file();
  init_src();
  init_StructuredDiff();
  import_react3 = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/diff/DiffFileList.tsx
function DiffFileList({ files, selectedIndex }) {
  const { columns } = useTerminalSize();
  const { startIndex, endIndex } = import_react4.useMemo(() => {
    if (files.length === 0 || files.length <= MAX_VISIBLE_FILES) {
      return { startIndex: 0, endIndex: files.length };
    }
    let start = Math.max(0, selectedIndex - Math.floor(MAX_VISIBLE_FILES / 2));
    let end = start + MAX_VISIBLE_FILES;
    if (end > files.length) {
      end = files.length;
      start = Math.max(0, end - MAX_VISIBLE_FILES);
    }
    return { startIndex: start, endIndex: end };
  }, [files.length, selectedIndex]);
  if (files.length === 0) {
    return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
      dimColor: true,
      children: "No changed files"
    }, undefined, false, undefined, this);
  }
  const visibleFiles = files.slice(startIndex, endIndex);
  const hasMoreAbove = startIndex > 0;
  const hasMoreBelow = endIndex < files.length;
  const needsPagination = files.length > MAX_VISIBLE_FILES;
  const statsWidth = 16;
  const pointerWidth = 3;
  const maxPathWidth = Math.max(20, columns - statsWidth - pointerWidth - 4);
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      needsPagination && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        dimColor: true,
        children: hasMoreAbove ? ` \u2191 ${startIndex} more ${plural(startIndex, "file")}` : " "
      }, undefined, false, undefined, this),
      visibleFiles.map((file, index) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(FileItem, {
        file,
        isSelected: startIndex + index === selectedIndex,
        maxPathWidth
      }, file.path, false, undefined, this)),
      needsPagination && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        dimColor: true,
        children: hasMoreBelow ? ` \u2193 ${files.length - endIndex} more ${plural(files.length - endIndex, "file")}` : " "
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function FileItem({
  file,
  isSelected,
  maxPathWidth
}) {
  const displayPath = truncateStartToWidth(file.path, maxPathWidth);
  const pointer = isSelected ? figures_default.pointer + " " : "  ";
  const line = `${pointer}${displayPath}`;
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    flexDirection: "row",
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        bold: isSelected,
        color: isSelected ? "background" : undefined,
        inverse: isSelected,
        children: line
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexGrow: 1
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(FileStats, {
        file,
        isSelected
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function FileStats({
  file,
  isSelected
}) {
  if (file.isUntracked) {
    return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
      dimColor: !isSelected,
      italic: true,
      children: "untracked"
    }, undefined, false, undefined, this);
  }
  if (file.isBinary) {
    return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
      dimColor: !isSelected,
      italic: true,
      children: "Binary file"
    }, undefined, false, undefined, this);
  }
  if (file.isLargeFile) {
    return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
      dimColor: !isSelected,
      italic: true,
      children: "Large file modified"
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
    children: [
      file.linesAdded > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        color: "diffAddedWord",
        bold: isSelected,
        children: [
          "+",
          file.linesAdded
        ]
      }, undefined, true, undefined, this),
      file.linesAdded > 0 && file.linesRemoved > 0 && " ",
      file.linesRemoved > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        color: "diffRemovedWord",
        bold: isSelected,
        children: [
          "-",
          file.linesRemoved
        ]
      }, undefined, true, undefined, this),
      file.isTruncated && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        dimColor: !isSelected,
        children: " (truncated)"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react4, jsx_dev_runtime2, MAX_VISIBLE_FILES = 5;
var init_DiffFileList = __esm(() => {
  init_figures();
  init_useTerminalSize();
  init_src();
  init_format();
  init_stringUtils();
  import_react4 = __toESM(require_react(), 1);
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/diff/DiffDialog.tsx
function turnDiffToDiffData(turn) {
  const files = Array.from(turn.files.values()).map((f) => ({
    path: f.filePath,
    linesAdded: f.linesAdded,
    linesRemoved: f.linesRemoved,
    isBinary: false,
    isLargeFile: false,
    isTruncated: false,
    isNewFile: f.isNewFile
  })).sort((a, b) => a.path.localeCompare(b.path));
  const hunks = new Map;
  for (const f of turn.files.values()) {
    hunks.set(f.filePath, f.hunks);
  }
  return {
    stats: {
      filesCount: turn.stats.filesChanged,
      linesAdded: turn.stats.linesAdded,
      linesRemoved: turn.stats.linesRemoved
    },
    files,
    hunks,
    loading: false
  };
}
function DiffDialog({ messages, onDone }) {
  const gitDiffData = useDiffData();
  const turnDiffs = useTurnDiffs(messages);
  const [viewMode, setViewMode] = import_react5.useState("list");
  const [selectedIndex, setSelectedIndex] = import_react5.useState(0);
  const [sourceIndex, setSourceIndex] = import_react5.useState(0);
  const sources = import_react5.useMemo(() => [
    { type: "current" },
    ...turnDiffs.map((turn) => ({ type: "turn", turn }))
  ], [turnDiffs]);
  const currentSource = sources[sourceIndex];
  const currentTurn = currentSource?.type === "turn" ? currentSource.turn : null;
  const diffData = import_react5.useMemo(() => {
    return currentTurn ? turnDiffToDiffData(currentTurn) : gitDiffData;
  }, [currentTurn, gitDiffData]);
  const selectedFile = diffData.files[selectedIndex];
  const selectedHunks = import_react5.useMemo(() => {
    return selectedFile ? diffData.hunks.get(selectedFile.path) || [] : [];
  }, [selectedFile, diffData.hunks]);
  import_react5.useEffect(() => {
    if (sourceIndex >= sources.length) {
      setSourceIndex(Math.max(0, sources.length - 1));
    }
  }, [sources.length, sourceIndex]);
  const prevSourceIndex = import_react5.useRef(sourceIndex);
  import_react5.useEffect(() => {
    if (prevSourceIndex.current !== sourceIndex) {
      setSelectedIndex(0);
      prevSourceIndex.current = sourceIndex;
    }
  }, [sourceIndex]);
  useRegisterOverlay("diff-dialog");
  useKeybindings({
    "diff:previousSource": () => {
      if (viewMode === "detail") {
        setViewMode("list");
      } else if (viewMode === "list" && sources.length > 1) {
        setSourceIndex((prev) => Math.max(0, prev - 1));
      }
    },
    "diff:nextSource": () => {
      if (viewMode === "list" && sources.length > 1) {
        setSourceIndex((prev) => Math.min(sources.length - 1, prev + 1));
      }
    },
    "diff:back": () => {
      if (viewMode === "detail") {
        setViewMode("list");
      }
    },
    "diff:viewDetails": () => {
      if (viewMode === "list" && selectedFile) {
        setViewMode("detail");
      }
    },
    "diff:previousFile": () => {
      if (viewMode === "list") {
        setSelectedIndex((prev) => Math.max(0, prev - 1));
      }
    },
    "diff:nextFile": () => {
      if (viewMode === "list") {
        setSelectedIndex((prev) => Math.min(diffData.files.length - 1, prev + 1));
      }
    }
  }, { context: "DiffDialog" });
  const subtitle = diffData.stats ? /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
    dimColor: true,
    children: [
      diffData.stats.filesCount,
      " ",
      plural(diffData.stats.filesCount, "file"),
      " ",
      "changed",
      diffData.stats.linesAdded > 0 && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        color: "diffAddedWord",
        children: [
          " +",
          diffData.stats.linesAdded
        ]
      }, undefined, true, undefined, this),
      diffData.stats.linesRemoved > 0 && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        color: "diffRemovedWord",
        children: [
          " -",
          diffData.stats.linesRemoved
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this) : null;
  const headerTitle = currentTurn ? `Turn ${currentTurn.turnIndex}` : "Uncommitted changes";
  const headerSubtitle = currentTurn ? currentTurn.userPromptPreview ? `"${currentTurn.userPromptPreview}"` : "" : "(git diff HEAD)";
  const sourceSelector = sources.length > 1 ? /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
    children: [
      sourceIndex > 0 && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        dimColor: true,
        children: "\u25C0 "
      }, undefined, false, undefined, this),
      sources.map((source, i) => {
        const isSelected = i === sourceIndex;
        const label = source.type === "current" ? "Current" : `T${source.turn.turnIndex}`;
        return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          bold: isSelected,
          children: [
            i > 0 ? " \xB7 " : "",
            label
          ]
        }, i, true, undefined, this);
      }),
      sourceIndex < sources.length - 1 && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        dimColor: true,
        children: " \u25B6"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this) : null;
  const dismissShortcut = useShortcutDisplay("diff:dismiss", "DiffDialog", "esc");
  const emptyMessage = (() => {
    if (diffData.loading) {
      return "Loading diff\u2026";
    }
    if (currentTurn) {
      return "No file changes in this turn";
    }
    if (diffData.stats && diffData.stats.filesCount > 0 && diffData.files.length === 0) {
      return "Too many files to display details";
    }
    return "Working tree is clean";
  })();
  const title = /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
    children: [
      headerTitle,
      headerSubtitle && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          " ",
          headerSubtitle
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
  function handleCancel() {
    if (viewMode === "detail") {
      setViewMode("list");
    } else {
      onDone("Diff dialog dismissed", { display: "system" });
    }
  }
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Dialog, {
    title,
    onCancel: handleCancel,
    color: "background",
    inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
      children: [
        "Press ",
        exitState.keyName,
        " again to exit"
      ]
    }, undefined, true, undefined, this) : viewMode === "list" ? /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Byline, {
      children: [
        sources.length > 1 && /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          children: "\u2190/\u2192 source"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          children: "\u2191/\u2193 select"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          children: "Enter view"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          children: [
            dismissShortcut,
            " close"
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          children: "\u2190 back"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          children: [
            dismissShortcut,
            " close"
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: [
      sourceSelector,
      subtitle,
      diffData.files.length === 0 ? /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          dimColor: true,
          children: emptyMessage
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this) : viewMode === "list" ? /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginTop: 1,
        children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(DiffFileList, {
          files: diffData.files,
          selectedIndex
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginTop: 1,
        children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(DiffDetailView, {
          filePath: selectedFile?.path || "",
          hunks: selectedHunks,
          isLargeFile: selectedFile?.isLargeFile,
          isBinary: selectedFile?.isBinary,
          isTruncated: selectedFile?.isTruncated,
          isUntracked: selectedFile?.isUntracked
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react5, jsx_dev_runtime3;
var init_DiffDialog = __esm(() => {
  init_overlayContext();
  init_useDiffData();
  init_useTurnDiffs();
  init_src();
  init_useKeybinding();
  init_useShortcutDisplay();
  init_stringUtils();
  init_src();
  init_DiffDetailView();
  init_DiffFileList();
  import_react5 = __toESM(require_react(), 1);
  jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
});
init_DiffDialog();

export {
  DiffDialog
};
