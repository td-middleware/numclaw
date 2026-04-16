// @bun
import {
  ERROR_MESSAGE_INCOMPLETE_RESPONSE,
  ERROR_MESSAGE_NOT_ENOUGH_MESSAGES,
  ERROR_MESSAGE_USER_ABORT,
  buildEffectiveSystemPrompt,
  compactConversation,
  executePreCompactHooks,
  getMessagesAfterCompactBoundary,
  getShortcutDisplay,
  getSystemContext,
  getSystemPrompt,
  getUpgradeMessage,
  getUserContext,
  init_compact,
  init_compactWarningState,
  init_context,
  init_contextWindowUpgradeCheck,
  init_hooks1 as init_hooks,
  init_messages1 as init_messages,
  init_microCompact,
  init_postCompactCleanup,
  init_promptCacheBreakDetection,
  init_prompts1 as init_prompts,
  init_sessionMemoryCompact,
  init_sessionMemoryUtils,
  init_shortcutFormat,
  init_systemPrompt,
  mergeHookInstructions,
  microcompactMessages,
  notifyCompaction,
  runPostCompactCleanup,
  setLastSummarizedMessageId,
  suppressCompactWarning,
  trySessionMemoryCompaction
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
import"./chunk-64hks9ax.js";
import"./chunk-crmjpsqe.js";
import {
  init_source,
  source_default
} from "./chunk-cmsknj6n.js";
import"./chunk-g338npwr.js";
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
import"./chunk-qajrkk97.js";
import {
  hasExactErrorMessage,
  init_errors
} from "./chunk-404qm8xt.js";
import"./chunk-fbv4apne.js";
import"./chunk-jaaxk89e.js";
import {
  init_state,
  markPostCompaction
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
  __esm
} from "./chunk-qp2qdcda.js";

// src/commands/compact/compact.ts
async function compactViaReactive(messages, context, customInstructions, reactive) {
  context.onCompactProgress?.({
    type: "hooks_start",
    hookType: "pre_compact"
  });
  context.setSDKStatus?.("compacting");
  try {
    const [hookResult, cacheSafeParams] = await Promise.all([
      executePreCompactHooks({ trigger: "manual", customInstructions: customInstructions || null }, context.abortController.signal),
      getCacheSharingParams(context, messages)
    ]);
    const mergedInstructions = mergeHookInstructions(customInstructions, hookResult.newCustomInstructions);
    context.setStreamMode?.("requesting");
    context.setResponseLength?.(() => 0);
    context.onCompactProgress?.({ type: "compact_start" });
    const outcome = await reactive.reactiveCompactOnPromptTooLong(messages, cacheSafeParams, { customInstructions: mergedInstructions, trigger: "manual" });
    if (!outcome.ok) {
      switch (outcome.reason) {
        case "too_few_groups":
          throw new Error(ERROR_MESSAGE_NOT_ENOUGH_MESSAGES);
        case "aborted":
          throw new Error(ERROR_MESSAGE_USER_ABORT);
        case "exhausted":
        case "error":
        case "media_unstrippable":
          throw new Error(ERROR_MESSAGE_INCOMPLETE_RESPONSE);
      }
    }
    setLastSummarizedMessageId(undefined);
    runPostCompactCleanup();
    suppressCompactWarning();
    getUserContext.cache.clear?.();
    const combinedMessage = [hookResult.userDisplayMessage, outcome.result.userDisplayMessage].filter(Boolean).join(`
`) || undefined;
    return {
      type: "compact",
      compactionResult: {
        ...outcome.result,
        userDisplayMessage: combinedMessage
      },
      displayText: buildDisplayText(context, combinedMessage)
    };
  } finally {
    context.setStreamMode?.("requesting");
    context.setResponseLength?.(() => 0);
    context.onCompactProgress?.({ type: "compact_end" });
    context.setSDKStatus?.(null);
  }
}
function buildDisplayText(context, userDisplayMessage) {
  const upgradeMessage = getUpgradeMessage("tip");
  const expandShortcut = getShortcutDisplay("app:toggleTranscript", "Global", "ctrl+o");
  const dimmed = [
    ...context.options.verbose ? [] : [`(${expandShortcut} to see full summary)`],
    ...userDisplayMessage ? [userDisplayMessage] : [],
    ...upgradeMessage ? [upgradeMessage] : []
  ];
  return source_default.dim("Compacted " + dimmed.join(`
`));
}
async function getCacheSharingParams(context, forkContextMessages) {
  const appState = context.getAppState();
  const defaultSysPrompt = await getSystemPrompt(context.options.tools, context.options.mainLoopModel, Array.from(appState.toolPermissionContext.additionalWorkingDirectories.keys()), context.options.mcpClients);
  const systemPrompt = buildEffectiveSystemPrompt({
    mainThreadAgentDefinition: undefined,
    toolUseContext: context,
    customSystemPrompt: context.options.customSystemPrompt,
    defaultSystemPrompt: defaultSysPrompt,
    appendSystemPrompt: context.options.appendSystemPrompt
  });
  const [userContext, systemContext] = await Promise.all([
    getUserContext(),
    getSystemContext()
  ]);
  return {
    systemPrompt,
    userContext,
    systemContext,
    toolUseContext: context,
    forkContextMessages
  };
}
var reactiveCompact = null, call = async (args, context) => {
  const { abortController } = context;
  let { messages } = context;
  messages = getMessagesAfterCompactBoundary(messages);
  if (messages.length === 0) {
    throw new Error("No messages to compact");
  }
  const customInstructions = args.trim();
  try {
    if (!customInstructions) {
      const sessionMemoryResult = await trySessionMemoryCompaction(messages, context.agentId);
      if (sessionMemoryResult) {
        getUserContext.cache.clear?.();
        runPostCompactCleanup();
        if (true) {
          notifyCompaction(context.options.querySource ?? "compact", context.agentId);
        }
        markPostCompaction();
        suppressCompactWarning();
        return {
          type: "compact",
          compactionResult: sessionMemoryResult,
          displayText: buildDisplayText(context)
        };
      }
    }
    if (reactiveCompact?.isReactiveOnlyMode()) {
      return await compactViaReactive(messages, context, customInstructions, reactiveCompact);
    }
    const microcompactResult = await microcompactMessages(messages, context);
    const messagesForCompact = microcompactResult.messages;
    const result = await compactConversation(messagesForCompact, context, await getCacheSharingParams(context, messagesForCompact), false, customInstructions, false);
    setLastSummarizedMessageId(undefined);
    suppressCompactWarning();
    getUserContext.cache.clear?.();
    runPostCompactCleanup();
    return {
      type: "compact",
      compactionResult: result,
      displayText: buildDisplayText(context, result.userDisplayMessage)
    };
  } catch (error) {
    if (abortController.signal.aborted) {
      throw new Error("Compaction canceled.");
    } else if (hasExactErrorMessage(error, ERROR_MESSAGE_NOT_ENOUGH_MESSAGES)) {
      throw new Error(ERROR_MESSAGE_NOT_ENOUGH_MESSAGES);
    } else if (hasExactErrorMessage(error, ERROR_MESSAGE_INCOMPLETE_RESPONSE)) {
      throw new Error(ERROR_MESSAGE_INCOMPLETE_RESPONSE);
    } else {
      logError(error);
      throw new Error(`Error during compaction: ${error}`);
    }
  }
};
var init_compact2 = __esm(() => {
  init_source();
  init_state();
  init_prompts();
  init_context();
  init_shortcutFormat();
  init_promptCacheBreakDetection();
  init_compact();
  init_compactWarningState();
  init_microCompact();
  init_postCompactCleanup();
  init_sessionMemoryCompact();
  init_sessionMemoryUtils();
  init_errors();
  init_hooks();
  init_log();
  init_messages();
  init_contextWindowUpgradeCheck();
  init_systemPrompt();
});
init_compact2();

export {
  call
};
