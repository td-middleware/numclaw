// @bun
import {
  init_staticRender,
  renderToAnsiString
} from "./chunk-x2dp18yj.js";
import {
  BASH_TOOL_NAME,
  FILE_READ_TOOL_NAME,
  GREP_TOOL_NAME,
  WEB_FETCH_TOOL_NAME,
  analyzeContextUsage,
  getMessagesAfterCompactBoundary,
  init_analyzeContext,
  init_messages1 as init_messages,
  init_microCompact,
  init_prompt,
  init_prompt1 as init_prompt2,
  init_prompt4 as init_prompt3,
  init_toolName,
  microcompactMessages
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
  getDisplayPath,
  getSourceDisplayName,
  init_constants,
  init_file,
  init_stringUtils
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
import {
  formatTokens,
  init_format
} from "./chunk-64hks9ax.js";
import"./chunk-crmjpsqe.js";
import {
  StatusIcon,
  ThemedBox_default,
  ThemedText,
  init_src
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

// src/utils/contextSuggestions.ts
function generateContextSuggestions(data) {
  const suggestions = [];
  checkNearCapacity(data, suggestions);
  checkLargeToolResults(data, suggestions);
  checkReadResultBloat(data, suggestions);
  checkMemoryBloat(data, suggestions);
  checkAutoCompactDisabled(data, suggestions);
  suggestions.sort((a, b) => {
    if (a.severity !== b.severity) {
      return a.severity === "warning" ? -1 : 1;
    }
    return (b.savingsTokens ?? 0) - (a.savingsTokens ?? 0);
  });
  return suggestions;
}
function checkNearCapacity(data, suggestions) {
  if (data.percentage >= NEAR_CAPACITY_PERCENT) {
    suggestions.push({
      severity: "warning",
      title: `Context is ${data.percentage}% full`,
      detail: data.isAutoCompactEnabled ? "Autocompact will trigger soon, which discards older messages. Use /compact now to control what gets kept." : "Autocompact is disabled. Use /compact to free space, or enable autocompact in /config."
    });
  }
}
function checkLargeToolResults(data, suggestions) {
  if (!data.messageBreakdown)
    return;
  for (const tool of data.messageBreakdown.toolCallsByType) {
    const totalToolTokens = tool.callTokens + tool.resultTokens;
    const percent = totalToolTokens / data.rawMaxTokens * 100;
    if (percent < LARGE_TOOL_RESULT_PERCENT || totalToolTokens < LARGE_TOOL_RESULT_TOKENS) {
      continue;
    }
    const suggestion = getLargeToolSuggestion(tool.name, totalToolTokens, percent);
    if (suggestion) {
      suggestions.push(suggestion);
    }
  }
}
function getLargeToolSuggestion(toolName, tokens, percent) {
  const tokenStr = formatTokens(tokens);
  switch (toolName) {
    case BASH_TOOL_NAME:
      return {
        severity: "warning",
        title: `Bash results using ${tokenStr} tokens (${percent.toFixed(0)}%)`,
        detail: "Pipe output through head, tail, or grep to reduce result size. Avoid cat on large files \u2014 use Read with offset/limit instead.",
        savingsTokens: Math.floor(tokens * 0.5)
      };
    case FILE_READ_TOOL_NAME:
      return {
        severity: "info",
        title: `Read results using ${tokenStr} tokens (${percent.toFixed(0)}%)`,
        detail: "Use offset and limit parameters to read only the sections you need. Avoid re-reading entire files when you only need a few lines.",
        savingsTokens: Math.floor(tokens * 0.3)
      };
    case GREP_TOOL_NAME:
      return {
        severity: "info",
        title: `Grep results using ${tokenStr} tokens (${percent.toFixed(0)}%)`,
        detail: "Add more specific patterns or use the glob or type parameter to narrow file types. Consider Glob for file discovery instead of Grep.",
        savingsTokens: Math.floor(tokens * 0.3)
      };
    case WEB_FETCH_TOOL_NAME:
      return {
        severity: "info",
        title: `WebFetch results using ${tokenStr} tokens (${percent.toFixed(0)}%)`,
        detail: "Web page content can be very large. Consider extracting only the specific information needed.",
        savingsTokens: Math.floor(tokens * 0.4)
      };
    default:
      if (percent >= 20) {
        return {
          severity: "info",
          title: `${toolName} using ${tokenStr} tokens (${percent.toFixed(0)}%)`,
          detail: `This tool is consuming a significant portion of context.`,
          savingsTokens: Math.floor(tokens * 0.2)
        };
      }
      return null;
  }
}
function checkReadResultBloat(data, suggestions) {
  if (!data.messageBreakdown)
    return;
  const callsByType = data.messageBreakdown.toolCallsByType;
  const readTool = callsByType.find((t) => t.name === FILE_READ_TOOL_NAME);
  if (!readTool)
    return;
  const totalReadTokens = readTool.callTokens + readTool.resultTokens;
  const totalReadPercent = totalReadTokens / data.rawMaxTokens * 100;
  const readPercent = readTool.resultTokens / data.rawMaxTokens * 100;
  if (totalReadPercent >= LARGE_TOOL_RESULT_PERCENT && totalReadTokens >= LARGE_TOOL_RESULT_TOKENS) {
    return;
  }
  if (readPercent >= READ_BLOAT_PERCENT && readTool.resultTokens >= LARGE_TOOL_RESULT_TOKENS) {
    suggestions.push({
      severity: "info",
      title: `File reads using ${formatTokens(readTool.resultTokens)} tokens (${readPercent.toFixed(0)}%)`,
      detail: "If you are re-reading files, consider referencing earlier reads. Use offset/limit for large files.",
      savingsTokens: Math.floor(readTool.resultTokens * 0.3)
    });
  }
}
function checkMemoryBloat(data, suggestions) {
  const totalMemoryTokens = data.memoryFiles.reduce((sum, f) => sum + f.tokens, 0);
  const memoryPercent = totalMemoryTokens / data.rawMaxTokens * 100;
  if (memoryPercent >= MEMORY_HIGH_PERCENT && totalMemoryTokens >= MEMORY_HIGH_TOKENS) {
    const largestFiles = [...data.memoryFiles].sort((a, b) => b.tokens - a.tokens).slice(0, 3).map((f) => {
      const name = getDisplayPath(f.path);
      return `${name} (${formatTokens(f.tokens)})`;
    }).join(", ");
    suggestions.push({
      severity: "info",
      title: `Memory files using ${formatTokens(totalMemoryTokens)} tokens (${memoryPercent.toFixed(0)}%)`,
      detail: `Largest: ${largestFiles}. Use /memory to review and prune stale entries.`,
      savingsTokens: Math.floor(totalMemoryTokens * 0.3)
    });
  }
}
function checkAutoCompactDisabled(data, suggestions) {
  if (!data.isAutoCompactEnabled && data.percentage >= 50 && data.percentage < NEAR_CAPACITY_PERCENT) {
    suggestions.push({
      severity: "info",
      title: "Autocompact is disabled",
      detail: "Without autocompact, you will hit context limits and lose the conversation. Enable it in /config or use /compact manually."
    });
  }
}
var LARGE_TOOL_RESULT_PERCENT = 15, LARGE_TOOL_RESULT_TOKENS = 1e4, READ_BLOAT_PERCENT = 5, NEAR_CAPACITY_PERCENT = 80, MEMORY_HIGH_PERCENT = 5, MEMORY_HIGH_TOKENS = 5000;
var init_contextSuggestions = __esm(() => {
  init_toolName();
  init_prompt2();
  init_prompt();
  init_prompt3();
  init_file();
  init_format();
});

// src/components/ContextSuggestions.tsx
function ContextSuggestions({ suggestions }) {
  if (suggestions.length === 0)
    return null;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    marginTop: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        bold: true,
        children: "Suggestions"
      }, undefined, false, undefined, this),
      suggestions.map((suggestion, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginTop: i === 0 ? 0 : 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(StatusIcon, {
                status: suggestion.severity,
                withSpace: true
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                bold: true,
                children: suggestion.title
              }, undefined, false, undefined, this),
              suggestion.savingsTokens ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  " ",
                  figures_default.arrowRight,
                  " save ~",
                  formatTokens(suggestion.savingsTokens)
                ]
              }, undefined, true, undefined, this) : null
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginLeft: 2,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: suggestion.detail
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, i, true, undefined, this))
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime;
var init_ContextSuggestions = __esm(() => {
  init_figures();
  init_src();
  init_format();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/ContextVisualization.tsx
function CollapseStatus() {
  if (false) {}
  return null;
}
function groupBySource(items) {
  const groups = new Map;
  for (const item of items) {
    const key = getSourceDisplayName(item.source);
    const existing = groups.get(key) || [];
    existing.push(item);
    groups.set(key, existing);
  }
  for (const [key, group] of groups.entries()) {
    groups.set(key, group.sort((a, b) => b.tokens - a.tokens));
  }
  const orderedGroups = new Map;
  for (const source of SOURCE_DISPLAY_ORDER) {
    const group = groups.get(source);
    if (group) {
      orderedGroups.set(source, group);
    }
  }
  return orderedGroups;
}
function ContextVisualization({ data }) {
  const {
    categories,
    totalTokens,
    rawMaxTokens,
    percentage,
    gridRows,
    model,
    memoryFiles,
    mcpTools,
    deferredBuiltinTools = [],
    systemTools,
    systemPromptSections,
    agents,
    skills,
    messageBreakdown
  } = data;
  const visibleCategories = categories.filter((cat) => cat.tokens > 0 && cat.name !== "Free space" && cat.name !== RESERVED_CATEGORY_NAME && !cat.isDeferred);
  const hasDeferredMcpTools = categories.some((cat) => cat.isDeferred && cat.name.includes("MCP"));
  const hasDeferredBuiltinTools = deferredBuiltinTools.length > 0;
  const autocompactCategory = categories.find((cat) => cat.name === RESERVED_CATEGORY_NAME);
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    paddingLeft: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        bold: true,
        children: "Context Usage"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        gap: 2,
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            flexShrink: 0,
            children: gridRows.map((row, rowIndex) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
              flexDirection: "row",
              marginLeft: -1,
              children: row.map((square, colIndex) => {
                if (square.categoryName === "Free space") {
                  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: "\u26F6 "
                  }, colIndex, false, undefined, this);
                }
                if (square.categoryName === RESERVED_CATEGORY_NAME) {
                  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    color: square.color,
                    children: "\u26DD "
                  }, colIndex, false, undefined, this);
                }
                return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                  color: square.color,
                  children: square.squareFullness >= 0.7 ? "\u26C1 " : "\u26C0 "
                }, colIndex, false, undefined, this);
              })
            }, rowIndex, false, undefined, this))
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            gap: 0,
            flexShrink: 0,
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  model,
                  " \xB7 ",
                  formatTokens(totalTokens),
                  "/",
                  formatTokens(rawMaxTokens),
                  " ",
                  "tokens (",
                  percentage,
                  "%)"
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(CollapseStatus, {}, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                children: " "
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                dimColor: true,
                italic: true,
                children: "Estimated usage by category"
              }, undefined, false, undefined, this),
              visibleCategories.map((cat, index) => {
                const tokenDisplay = formatTokens(cat.tokens);
                const percentDisplay = cat.isDeferred ? "N/A" : `${(cat.tokens / rawMaxTokens * 100).toFixed(1)}%`;
                const isReserved = cat.name === RESERVED_CATEGORY_NAME;
                const displayName = cat.name;
                const symbol = cat.isDeferred ? " " : isReserved ? "\u26DD" : "\u26C1";
                return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                      color: cat.color,
                      children: symbol
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                      children: [
                        " ",
                        displayName,
                        ": "
                      ]
                    }, undefined, true, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: [
                        tokenDisplay,
                        " tokens (",
                        percentDisplay,
                        ")"
                      ]
                    }, undefined, true, undefined, this)
                  ]
                }, index, true, undefined, this);
              }),
              (categories.find((c) => c.name === "Free space")?.tokens ?? 0) > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: "\u26F6"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    children: " Free space: "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      formatTokens(categories.find((c) => c.name === "Free space")?.tokens || 0),
                      " ",
                      "(",
                      ((categories.find((c) => c.name === "Free space")?.tokens || 0) / rawMaxTokens * 100).toFixed(1),
                      "%)"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              autocompactCategory && autocompactCategory.tokens > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    color: autocompactCategory.color,
                    children: "\u26DD"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      " ",
                      autocompactCategory.name,
                      ": "
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      formatTokens(autocompactCategory.tokens),
                      " tokens (",
                      (autocompactCategory.tokens / rawMaxTokens * 100).toFixed(1),
                      "%)"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginLeft: -1,
        children: [
          mcpTools.length > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    bold: true,
                    children: "MCP tools"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      " ",
                      "\xB7 /mcp",
                      hasDeferredMcpTools ? " (loaded on-demand)" : ""
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              mcpTools.some((t) => t.isLoaded) && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                marginTop: 1,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: "Loaded"
                  }, undefined, false, undefined, this),
                  mcpTools.filter((t) => t.isLoaded).map((tool, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        children: [
                          "\u2514 ",
                          tool.name,
                          ": "
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: [
                          formatTokens(tool.tokens),
                          " tokens"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, i, true, undefined, this))
                ]
              }, undefined, true, undefined, this),
              hasDeferredMcpTools && mcpTools.some((t) => !t.isLoaded) && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                marginTop: 1,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: "Available"
                  }, undefined, false, undefined, this),
                  mcpTools.filter((t) => !t.isLoaded).map((tool, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: [
                        "\u2514 ",
                        tool.name
                      ]
                    }, undefined, true, undefined, this)
                  }, i, false, undefined, this))
                ]
              }, undefined, true, undefined, this),
              !hasDeferredMcpTools && mcpTools.map((tool, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    children: [
                      "\u2514 ",
                      tool.name,
                      ": "
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      formatTokens(tool.tokens),
                      " tokens"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, i, true, undefined, this))
            ]
          }, undefined, true, undefined, this),
          (systemTools && systemTools.length > 0 || hasDeferredBuiltinTools) && process.env.USER_TYPE === "ant" && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    bold: true,
                    children: "[ANT-ONLY] System tools"
                  }, undefined, false, undefined, this),
                  hasDeferredBuiltinTools && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: " (some loaded on-demand)"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                marginTop: 1,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: "Loaded"
                  }, undefined, false, undefined, this),
                  systemTools?.map((tool, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        children: [
                          "\u2514 ",
                          tool.name,
                          ": "
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: [
                          formatTokens(tool.tokens),
                          " tokens"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, `sys-${i}`, true, undefined, this)),
                  deferredBuiltinTools.filter((t) => t.isLoaded).map((tool, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        children: [
                          "\u2514 ",
                          tool.name,
                          ": "
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: [
                          formatTokens(tool.tokens),
                          " tokens"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, `def-${i}`, true, undefined, this))
                ]
              }, undefined, true, undefined, this),
              hasDeferredBuiltinTools && deferredBuiltinTools.some((t) => !t.isLoaded) && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                marginTop: 1,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: "Available"
                  }, undefined, false, undefined, this),
                  deferredBuiltinTools.filter((t) => !t.isLoaded).map((tool, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: [
                        "\u2514 ",
                        tool.name
                      ]
                    }, undefined, true, undefined, this)
                  }, i, false, undefined, this))
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          systemPromptSections && systemPromptSections.length > 0 && process.env.USER_TYPE === "ant" && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                bold: true,
                children: "[ANT-ONLY] System prompt sections"
              }, undefined, false, undefined, this),
              systemPromptSections.map((section, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    children: [
                      "\u2514 ",
                      section.name,
                      ": "
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      formatTokens(section.tokens),
                      " tokens"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, i, true, undefined, this))
            ]
          }, undefined, true, undefined, this),
          agents.length > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    bold: true,
                    children: "Custom agents"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: " \xB7 /agents"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              Array.from(groupBySource(agents).entries()).map(([sourceDisplay, sourceAgents]) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                marginTop: 1,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: sourceDisplay
                  }, undefined, false, undefined, this),
                  sourceAgents.map((agent, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        children: [
                          "\u2514 ",
                          agent.agentType,
                          ": "
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: [
                          formatTokens(agent.tokens),
                          " tokens"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, i, true, undefined, this))
                ]
              }, sourceDisplay, true, undefined, this))
            ]
          }, undefined, true, undefined, this),
          memoryFiles.length > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    bold: true,
                    children: "Memory files"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: " \xB7 /memory"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              memoryFiles.map((file, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    children: [
                      "\u2514 ",
                      getDisplayPath(file.path),
                      ": "
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      formatTokens(file.tokens),
                      " tokens"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, i, true, undefined, this))
            ]
          }, undefined, true, undefined, this),
          skills && skills.tokens > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    bold: true,
                    children: "Skills"
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: " \xB7 /skills"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              Array.from(groupBySource(skills.skillFrontmatter).entries()).map(([sourceDisplay, sourceSkills]) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                marginTop: 1,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: sourceDisplay
                  }, undefined, false, undefined, this),
                  sourceSkills.map((skill, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        children: [
                          "\u2514 ",
                          skill.name,
                          ": "
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: [
                          formatTokens(skill.tokens),
                          " tokens"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, i, true, undefined, this))
                ]
              }, sourceDisplay, true, undefined, this))
            ]
          }, undefined, true, undefined, this),
          messageBreakdown && process.env.USER_TYPE === "ant" && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                bold: true,
                children: "[ANT-ONLY] Message breakdown"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                marginLeft: 1,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        children: "Tool calls: "
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: [
                          formatTokens(messageBreakdown.toolCallTokens),
                          " tokens"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        children: "Tool results: "
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: [
                          formatTokens(messageBreakdown.toolResultTokens),
                          " tokens"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        children: "Attachments: "
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: [
                          formatTokens(messageBreakdown.attachmentTokens),
                          " tokens"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        children: "Assistant messages (non-tool): "
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: [
                          formatTokens(messageBreakdown.assistantMessageTokens),
                          " tokens"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        children: "User messages (non-tool-result): "
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: [
                          formatTokens(messageBreakdown.userMessageTokens),
                          " tokens"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              messageBreakdown.toolCallsByType.length > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                marginTop: 1,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    bold: true,
                    children: "[ANT-ONLY] Top tools"
                  }, undefined, false, undefined, this),
                  messageBreakdown.toolCallsByType.slice(0, 5).map((tool, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    marginLeft: 1,
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        children: [
                          "\u2514 ",
                          tool.name,
                          ": "
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: [
                          "calls ",
                          formatTokens(tool.callTokens),
                          ", results",
                          " ",
                          formatTokens(tool.resultTokens)
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, i, true, undefined, this))
                ]
              }, undefined, true, undefined, this),
              messageBreakdown.attachmentsByType.length > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                marginTop: 1,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                    bold: true,
                    children: "[ANT-ONLY] Top attachments"
                  }, undefined, false, undefined, this),
                  messageBreakdown.attachmentsByType.slice(0, 5).map((attachment, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    marginLeft: 1,
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        children: [
                          "\u2514 ",
                          attachment.name,
                          ": "
                        ]
                      }, undefined, true, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: [
                          formatTokens(attachment.tokens),
                          " tokens"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, i, true, undefined, this))
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ContextSuggestions, {
        suggestions: generateContextSuggestions(data)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime2, RESERVED_CATEGORY_NAME = "Autocompact buffer", SOURCE_DISPLAY_ORDER;
var init_ContextVisualization = __esm(() => {
  init_src();
  init_contextSuggestions();
  init_file();
  init_format();
  init_constants();
  init_stringUtils();
  init_ContextSuggestions();
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
  SOURCE_DISPLAY_ORDER = [
    "Project",
    "User",
    "Managed",
    "Plugin",
    "Built-in"
  ];
});

// src/commands/context/context.tsx
function toApiView(messages) {
  let view = getMessagesAfterCompactBoundary(messages);
  if (false) {}
  return view;
}
async function call(onDone, context) {
  const {
    messages,
    getAppState,
    options: { mainLoopModel, tools }
  } = context;
  const apiView = toApiView(messages);
  const { messages: compactedMessages } = await microcompactMessages(apiView);
  const terminalWidth = process.stdout.columns || 80;
  const appState = getAppState();
  const data = await analyzeContextUsage(compactedMessages, mainLoopModel, async () => appState.toolPermissionContext, tools, appState.agentDefinitions, terminalWidth, context, undefined, apiView);
  const output = await renderToAnsiString(/* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ContextVisualization, {
    data
  }, undefined, false, undefined, this));
  onDone(output);
  return null;
}
var jsx_dev_runtime3;
var init_context = __esm(() => {
  init_ContextVisualization();
  init_microCompact();
  init_analyzeContext();
  init_messages();
  init_staticRender();
  jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
});
init_context();

export {
  call
};
