// @bun
import {
  BashTool,
  ShellProgressMessage,
  UserBashInputMessage,
  createSyntheticUserCaveatMessage,
  createUserInterruptionMessage,
  createUserMessage,
  escapeXml,
  exports_PowerShellTool,
  init_BashTool,
  init_PowerShellTool,
  init_ShellProgressMessage,
  init_UserBashInputMessage,
  init_messages1 as init_messages,
  init_shellToolUtils,
  init_toolResultStorage,
  init_xml,
  isPowerShellToolEnabled,
  prepareUserContent,
  processToolResultBlock
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
  getInitialSettings,
  init_settings1 as init_settings
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
  ThemedBox_default,
  init_src
} from "./chunk-cmsknj6n.js";
import {
  require_jsx_dev_runtime
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
import {
  ShellError,
  errorMessage,
  init_errors
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
  __toCommonJS,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/utils/processUserInput/processBashCommand.tsx
import { randomUUID } from "crypto";

// src/components/BashModeProgress.tsx
init_src();
init_BashTool();
init_UserBashInputMessage();
init_ShellProgressMessage();
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function BashModeProgress({
  input,
  progress,
  verbose
}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    marginTop: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(UserBashInputMessage, {
        addMargin: false,
        param: { text: `<bash-input>${input}</bash-input>`, type: "text" }
      }, undefined, false, undefined, this),
      progress ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ShellProgressMessage, {
        fullOutput: progress.fullOutput,
        output: progress.output,
        elapsedTimeSeconds: progress.elapsedTimeSeconds,
        totalLines: progress.totalLines,
        verbose
      }, undefined, false, undefined, this) : BashTool.renderToolUseProgressMessage?.([], {
        verbose,
        tools: [],
        terminalSize: undefined
      })
    ]
  }, undefined, true, undefined, this);
}

// src/utils/processUserInput/processBashCommand.tsx
init_BashTool();
init_analytics();
init_errors();
init_messages();

// src/utils/shell/resolveDefaultShell.ts
init_settings();
function resolveDefaultShell() {
  return getInitialSettings().defaultShell ?? "bash";
}

// src/utils/processUserInput/processBashCommand.tsx
init_shellToolUtils();
init_toolResultStorage();
init_xml();
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
async function processBashCommand(inputString, precedingInputBlocks, attachmentMessages, context, setToolJSX) {
  const usePowerShell = isPowerShellToolEnabled() && resolveDefaultShell() === "powershell";
  logEvent("tengu_input_bash", { powershell: usePowerShell });
  const userMessage = createUserMessage({
    content: prepareUserContent({
      inputString: `<bash-input>${inputString}</bash-input>`,
      precedingInputBlocks
    })
  });
  let jsx;
  setToolJSX({
    jsx: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(BashModeProgress, {
      input: inputString,
      progress: null,
      verbose: context.options.verbose
    }, undefined, false, undefined, this),
    shouldHidePromptInput: false
  });
  try {
    const bashModeContext = {
      ...context,
      setToolJSX: (_) => {
        jsx = _?.jsx;
      }
    };
    const onProgress = (progress) => {
      setToolJSX({
        jsx: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(jsx_dev_runtime2.Fragment, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(BashModeProgress, {
              input: inputString,
              progress: progress.data,
              verbose: context.options.verbose
            }, undefined, false, undefined, this),
            jsx
          ]
        }, undefined, true, undefined, this),
        shouldHidePromptInput: false,
        showSpinner: false
      });
    };
    let PowerShellTool = null;
    if (usePowerShell) {
      PowerShellTool = (init_PowerShellTool(), __toCommonJS(exports_PowerShellTool)).PowerShellTool;
    }
    const shellTool = PowerShellTool ?? BashTool;
    const response = PowerShellTool ? await PowerShellTool.call({ command: inputString, dangerouslyDisableSandbox: true }, bashModeContext, undefined, undefined, onProgress) : await BashTool.call({
      command: inputString,
      dangerouslyDisableSandbox: true
    }, bashModeContext, undefined, undefined, onProgress);
    const data = response.data;
    if (!data) {
      throw new Error("No result received from shell command");
    }
    const stderr = data.stderr;
    const mapped = await processToolResultBlock(shellTool, { ...data, stderr: "" }, randomUUID());
    const stdout = typeof mapped.content === "string" ? mapped.content : escapeXml(data.stdout);
    return {
      messages: [
        createSyntheticUserCaveatMessage(),
        userMessage,
        ...attachmentMessages,
        createUserMessage({
          content: `<bash-stdout>${stdout}</bash-stdout><bash-stderr>${escapeXml(stderr)}</bash-stderr>`
        })
      ],
      shouldQuery: false
    };
  } catch (e) {
    if (e instanceof ShellError) {
      if (e.interrupted) {
        return {
          messages: [
            createSyntheticUserCaveatMessage(),
            userMessage,
            createUserInterruptionMessage({ toolUse: false }),
            ...attachmentMessages
          ],
          shouldQuery: false
        };
      }
      return {
        messages: [
          createSyntheticUserCaveatMessage(),
          userMessage,
          ...attachmentMessages,
          createUserMessage({
            content: `<bash-stdout>${escapeXml(e.stdout)}</bash-stdout><bash-stderr>${escapeXml(e.stderr)}</bash-stderr>`
          })
        ],
        shouldQuery: false
      };
    }
    return {
      messages: [
        createSyntheticUserCaveatMessage(),
        userMessage,
        ...attachmentMessages,
        createUserMessage({
          content: `<bash-stderr>Command failed: ${escapeXml(errorMessage(e))}</bash-stderr>`
        })
      ],
      shouldQuery: false
    };
  } finally {
    setToolJSX(null);
  }
}
export {
  processBashCommand
};
