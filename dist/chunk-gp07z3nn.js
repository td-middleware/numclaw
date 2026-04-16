// @bun
import {
  OpenAI,
  adaptOpenAIStreamToAnthropic,
  anthropicMessagesToOpenAI,
  anthropicToolChoiceToOpenAI,
  anthropicToolsToOpenAI,
  init_convertMessages,
  init_convertTools,
  init_openai,
  init_streamAdapter
} from "./chunk-rhw4ayb1.js";
import {
  addToTotalSessionCost,
  createAssistantAPIErrorMessage,
  init_api,
  init_cost_tracker,
  init_messages1 as init_messages,
  normalizeContentFromAPI,
  normalizeMessagesForAPI,
  toolToAPISchema
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
  calculateUSDCost,
  init_modelCost
} from "./chunk-dme2fwws.js";
import"./chunk-sg66v252.js";
import"./chunk-8bwqtasa.js";
import"./chunk-j9gxwbe3.js";
import {
  getProxyFetchOptions,
  init_proxy
} from "./chunk-qtptjcpp.js";
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
import"./chunk-cmsknj6n.js";
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
import"./chunk-y3r7v9pq.js";
import"./chunk-8tnsngw2.js";
import"./chunk-awb4vc41.js";
import"./chunk-cbrt5vsb.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  init_debug,
  logForDebugging
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
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/api/local/client.ts
function getLocalClient(options) {
  if (cachedClient)
    return cachedClient;
  const apiKey = process.env.LOCAL_API_KEY || "local";
  const baseURL = process.env.LOCAL_BASE_URL || "http://localhost:11434/v1";
  const client = new OpenAI({
    apiKey,
    baseURL,
    maxRetries: options?.maxRetries ?? 0,
    timeout: parseInt(process.env.API_TIMEOUT_MS || String(600 * 1000), 10),
    dangerouslyAllowBrowser: true,
    ...process.env.LOCAL_ORG_ID && { organization: process.env.LOCAL_ORG_ID },
    ...process.env.LOCAL_PROJECT_ID && { project: process.env.LOCAL_PROJECT_ID },
    fetchOptions: getProxyFetchOptions({ forAnthropicAPI: false }),
    ...options?.fetchOverride && { fetch: options.fetchOverride }
  });
  if (!options?.fetchOverride) {
    cachedClient = client;
  }
  return client;
}
function clearLocalClientCache() {
  cachedClient = null;
}
var cachedClient = null;
var init_client = __esm(() => {
  init_openai();
  init_proxy();
});

// src/services/api/local/modelMapping.ts
function getModelFamily(model) {
  if (/haiku/i.test(model))
    return "haiku";
  if (/opus/i.test(model))
    return "opus";
  if (/sonnet/i.test(model))
    return "sonnet";
  return null;
}
function resolveLocalModel(anthropicModel) {
  if (process.env.LOCAL_MODEL) {
    return process.env.LOCAL_MODEL;
  }
  const cleanModel = anthropicModel.replace(/\[1m\]$/, "");
  const family = getModelFamily(cleanModel);
  if (family) {
    const envVar = `LOCAL_DEFAULT_${family.toUpperCase()}_MODEL`;
    const override = process.env[envVar];
    if (override)
      return override;
  }
  return cleanModel;
}
var init_modelMapping = () => {};

// src/services/api/local/index.ts
import { randomUUID } from "crypto";
async function* queryModelLocal(messages, systemPrompt, tools, signal, options) {
  try {
    const localModel = resolveLocalModel(options.model);
    const messagesForAPI = normalizeMessagesForAPI(messages, tools);
    const toolSchemas = await Promise.all(tools.map((tool) => toolToAPISchema(tool, {
      getToolPermissionContext: options.getToolPermissionContext,
      tools,
      agents: options.agents,
      allowedAgentTypes: options.allowedAgentTypes,
      model: options.model
    })));
    const standardTools = toolSchemas.filter((t) => {
      const anyT = t;
      return anyT.type !== "advisor_20260301" && anyT.type !== "computer_20250124";
    });
    const openaiMessages = anthropicMessagesToOpenAI(messagesForAPI, systemPrompt);
    const openaiTools = anthropicToolsToOpenAI(standardTools);
    const openaiToolChoice = anthropicToolChoiceToOpenAI(options.toolChoice);
    const client = getLocalClient({
      maxRetries: 0,
      fetchOverride: options.fetchOverride,
      source: options.querySource
    });
    logForDebugging(`[Local] Calling model=${localModel}, messages=${openaiMessages.length}, tools=${openaiTools.length}`);
    const stream = await client.chat.completions.create({
      model: localModel,
      messages: openaiMessages,
      ...openaiTools.length > 0 && {
        tools: openaiTools,
        ...openaiToolChoice && { tool_choice: openaiToolChoice }
      },
      stream: true,
      stream_options: { include_usage: true },
      ...options.temperatureOverride !== undefined && {
        temperature: options.temperatureOverride
      }
    }, {
      signal
    });
    const adaptedStream = adaptOpenAIStreamToAnthropic(stream, localModel);
    const contentBlocks = {};
    let partialMessage = undefined;
    let usage = {
      input_tokens: 0,
      output_tokens: 0,
      cache_creation_input_tokens: 0,
      cache_read_input_tokens: 0
    };
    let ttftMs = 0;
    const start = Date.now();
    for await (const event of adaptedStream) {
      switch (event.type) {
        case "message_start": {
          partialMessage = event.message;
          ttftMs = Date.now() - start;
          if (event.message?.usage) {
            usage = {
              ...usage,
              ...event.message.usage
            };
          }
          break;
        }
        case "content_block_start": {
          const idx = event.index;
          const cb = event.content_block;
          if (cb.type === "tool_use") {
            contentBlocks[idx] = { ...cb, input: "" };
          } else if (cb.type === "text") {
            contentBlocks[idx] = { ...cb, text: "" };
          } else if (cb.type === "thinking") {
            contentBlocks[idx] = { ...cb, thinking: "", signature: "" };
          } else {
            contentBlocks[idx] = { ...cb };
          }
          break;
        }
        case "content_block_delta": {
          const idx = event.index;
          const delta = event.delta;
          const block = contentBlocks[idx];
          if (!block)
            break;
          if (delta.type === "text_delta") {
            block.text = (block.text || "") + delta.text;
          } else if (delta.type === "input_json_delta") {
            block.input = (block.input || "") + delta.partial_json;
          } else if (delta.type === "thinking_delta") {
            block.thinking = (block.thinking || "") + delta.thinking;
          } else if (delta.type === "signature_delta") {
            block.signature = delta.signature;
          }
          break;
        }
        case "content_block_stop": {
          const idx = event.index;
          const block = contentBlocks[idx];
          if (!block || !partialMessage)
            break;
          const m = {
            message: {
              ...partialMessage,
              content: normalizeContentFromAPI([block], tools, options.agentId)
            },
            requestId: undefined,
            type: "assistant",
            uuid: randomUUID(),
            timestamp: new Date().toISOString()
          };
          yield m;
          break;
        }
        case "message_delta": {
          const deltaUsage = event.usage;
          if (deltaUsage) {
            usage = { ...usage, ...deltaUsage };
          }
          break;
        }
        case "message_stop":
          break;
      }
      if (event.type === "message_stop" && usage.input_tokens + usage.output_tokens > 0) {
        const costUSD = calculateUSDCost(localModel, usage);
        addToTotalSessionCost(costUSD, usage, options.model);
      }
      yield {
        type: "stream_event",
        event,
        ...event.type === "message_start" ? { ttftMs } : undefined
      };
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logForDebugging(`[Local] Error: ${errorMessage}`, { level: "error" });
    yield createAssistantAPIErrorMessage({
      content: `Local API Error: ${errorMessage}`,
      apiError: "api_error",
      error: error instanceof Error ? error : new Error(String(error))
    });
  }
}
var init_local = __esm(() => {
  init_client();
  init_modelMapping();
  init_client();
  init_modelMapping();
  init_convertMessages();
  init_convertTools();
  init_streamAdapter();
  init_messages();
  init_api();
  init_debug();
  init_cost_tracker();
  init_modelCost();
  init_messages();
});
init_local();

export {
  resolveLocalModel,
  queryModelLocal,
  getLocalClient,
  clearLocalClientCache
};
