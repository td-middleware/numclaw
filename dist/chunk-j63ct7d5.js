// @bun
import {
  Select,
  extractTextContent,
  g,
  init_marked_esm,
  init_messages1 as init_messages,
  init_select,
  stripPromptXMLTags
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
import"./chunk-xnav6j8h.js";
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
  countCharInString,
  getGlobalConfig,
  init_config1 as init_config,
  init_stringUtils,
  saveGlobalConfig
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
import"./chunk-64hks9ax.js";
import"./chunk-crmjpsqe.js";
import {
  Byline,
  KeyboardShortcutHint,
  Pane,
  ThemedBox_default,
  ThemedText,
  init_src,
  setClipboard,
  stringWidth
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

// src/commands/copy/copy.tsx
import { mkdir, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
function extractCodeBlocks(markdown) {
  const tokens = g.lexer(stripPromptXMLTags(markdown));
  const blocks = [];
  for (const token of tokens) {
    if (token.type === "code") {
      const codeToken = token;
      blocks.push({ code: codeToken.text, lang: codeToken.lang });
    }
  }
  return blocks;
}
function collectRecentAssistantTexts(messages) {
  const texts = [];
  for (let i = messages.length - 1;i >= 0 && texts.length < MAX_LOOKBACK; i--) {
    const msg = messages[i];
    if (msg?.type !== "assistant" || msg.isApiErrorMessage)
      continue;
    const content = msg.message.content;
    if (!Array.isArray(content))
      continue;
    const text = extractTextContent(content, `

`);
    if (text)
      texts.push(text);
  }
  return texts;
}
function fileExtension(lang) {
  if (lang) {
    const sanitized = lang.replace(/[^a-zA-Z0-9]/g, "");
    if (sanitized && sanitized !== "plaintext") {
      return `.${sanitized}`;
    }
  }
  return ".txt";
}
async function writeToFile(text, filename) {
  const filePath = join(COPY_DIR, filename);
  await mkdir(COPY_DIR, { recursive: true });
  await writeFile(filePath, text, "utf-8");
  return filePath;
}
async function copyOrWriteToFile(text, filename) {
  const raw = await setClipboard(text);
  if (raw)
    process.stdout.write(raw);
  const lineCount = countCharInString(text, `
`) + 1;
  const charCount = text.length;
  try {
    const filePath = await writeToFile(text, filename);
    return `Copied to clipboard (${charCount} characters, ${lineCount} lines)
Also written to ${filePath}`;
  } catch {
    return `Copied to clipboard (${charCount} characters, ${lineCount} lines)`;
  }
}
function truncateLine(text, maxLen) {
  const firstLine = text.split(`
`)[0] ?? "";
  if (stringWidth(firstLine) <= maxLen) {
    return firstLine;
  }
  let result = "";
  let width = 0;
  const targetWidth = maxLen - 1;
  for (const char of firstLine) {
    const charWidth = stringWidth(char);
    if (width + charWidth > targetWidth)
      break;
    result += char;
    width += charWidth;
  }
  return result + "\u2026";
}
function CopyPicker({
  fullText,
  codeBlocks,
  messageAge,
  onDone
}) {
  const focusedRef = import_react.useRef("full");
  const options = [
    {
      label: "Full response",
      value: "full",
      description: `${fullText.length} chars, ${countCharInString(fullText, `
`) + 1} lines`
    },
    ...codeBlocks.map((block, index) => {
      const blockLines = countCharInString(block.code, `
`) + 1;
      return {
        label: truncateLine(block.code, 60),
        value: index,
        description: [block.lang, blockLines > 1 ? `${blockLines} lines` : undefined].filter(Boolean).join(", ") || undefined
      };
    }),
    {
      label: "Always copy full response",
      value: "always",
      description: "Skip this picker in the future (revert via /config)"
    }
  ];
  function getSelectionContent(selected) {
    if (selected === "full" || selected === "always") {
      return { text: fullText, filename: RESPONSE_FILENAME };
    }
    const block = codeBlocks[selected];
    return {
      text: block.code,
      filename: `copy${fileExtension(block.lang)}`,
      blockIndex: selected
    };
  }
  async function handleSelect(selected) {
    const content = getSelectionContent(selected);
    if (selected === "always") {
      if (!getGlobalConfig().copyFullResponse) {
        saveGlobalConfig((c) => ({ ...c, copyFullResponse: true }));
      }
      logEvent("tengu_copy", {
        block_count: codeBlocks.length,
        always: true,
        message_age: messageAge
      });
      const result2 = await copyOrWriteToFile(content.text, content.filename);
      onDone(`${result2}
Preference saved. Use /config to change copyFullResponse`);
      return;
    }
    logEvent("tengu_copy", {
      selected_block: content.blockIndex,
      block_count: codeBlocks.length,
      message_age: messageAge
    });
    const result = await copyOrWriteToFile(content.text, content.filename);
    onDone(result);
  }
  async function handleWrite(selected) {
    const content = getSelectionContent(selected);
    logEvent("tengu_copy", {
      selected_block: content.blockIndex,
      block_count: codeBlocks.length,
      message_age: messageAge,
      write_shortcut: true
    });
    try {
      const filePath = await writeToFile(content.text, content.filename);
      onDone(`Written to ${filePath}`);
    } catch (e) {
      onDone(`Failed to write file: ${e instanceof Error ? e.message : e}`);
    }
  }
  function handleKeyDown(e) {
    if (e.key === "w") {
      e.preventDefault();
      handleWrite(focusedRef.current);
    }
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pane, {
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Select content to copy:"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
          options,
          hideIndexes: false,
          onFocus: (value) => {
            focusedRef.current = value;
          },
          onChange: (selected) => {
            handleSelect(selected);
          },
          onCancel: () => {
            onDone("Copy cancelled", { display: "system" });
          }
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
                shortcut: "enter",
                action: "copy"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
                shortcut: "w",
                action: "write to file"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
                shortcut: "esc",
                action: "cancel"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime, COPY_DIR, RESPONSE_FILENAME = "response.md", MAX_LOOKBACK = 20, call = async (onDone, context, args) => {
  const texts = collectRecentAssistantTexts(context.messages);
  if (texts.length === 0) {
    onDone("No assistant message to copy");
    return null;
  }
  let age = 0;
  const arg = args?.trim();
  if (arg) {
    const n = Number(arg);
    if (!Number.isInteger(n) || n < 1) {
      onDone(`Usage: /copy [N] where N is 1 (latest), 2, 3, \u2026 Got: ${arg}`);
      return null;
    }
    if (n > texts.length) {
      onDone(`Only ${texts.length} assistant ${texts.length === 1 ? "message" : "messages"} available to copy`);
      return null;
    }
    age = n - 1;
  }
  const text = texts[age];
  const codeBlocks = extractCodeBlocks(text);
  const config = getGlobalConfig();
  if (codeBlocks.length === 0 || config.copyFullResponse) {
    logEvent("tengu_copy", {
      always: config.copyFullResponse,
      block_count: codeBlocks.length,
      message_age: age
    });
    const result = await copyOrWriteToFile(text, RESPONSE_FILENAME);
    onDone(result);
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CopyPicker, {
    fullText: text,
    codeBlocks,
    messageAge: age,
    onDone
  }, undefined, false, undefined, this);
};
var init_copy = __esm(() => {
  init_marked_esm();
  init_select();
  init_src();
  init_src();
  init_analytics();
  init_config();
  init_messages();
  init_stringUtils();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
  COPY_DIR = join(tmpdir(), "claude");
});
init_copy();

export {
  fileExtension,
  collectRecentAssistantTexts,
  call
};
