// @bun
import {
  createClaudeForChromeMcpServer,
  init_src
} from "./chunk-ym5r3jnk.js";
import {
  StdioServerTransport,
  init_stdio
} from "./chunk-4g88kv6h.js";
import {
  init_sink,
  initializeAnalyticsSink
} from "./chunk-0g6vqkgd.js";
import {
  init_sideQuery,
  sideQuery
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
import {
  getAllSocketPaths,
  getSecureSocketPath,
  init_common
} from "./chunk-8h6sdj66.js";
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
import {
  init_datadog,
  shutdownDatadog
} from "./chunk-9e0p91vr.js";
import"./chunk-25m3pw9q.js";
import"./chunk-wkth813t.js";
import"./chunk-chsyvavm.js";
import"./chunk-6mpw9h55.js";
import {
  enableConfigs,
  getClaudeAIOAuthTokens,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getGlobalConfig,
  init_auth,
  init_config1 as init_config,
  init_firstPartyEventLogger,
  init_growthbook,
  saveGlobalConfig,
  shutdown1PEventLogging
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
import"./chunk-64hks9ax.js";
import"./chunk-crmjpsqe.js";
import"./chunk-cmsknj6n.js";
import"./chunk-g338npwr.js";
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
  init_debug,
  logForDebugging
} from "./chunk-404qm8xt.js";
import"./chunk-fbv4apne.js";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-jaaxk89e.js";
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

// src/utils/claudeInChrome/mcpServer.ts
import { format } from "util";
function isPermissionMode(raw) {
  return PERMISSION_MODES.some((m) => m === raw);
}
function getChromeBridgeUrl() {
  const bridgeEnabled = process.env.USER_TYPE === "ant" || getFeatureValue_CACHED_MAY_BE_STALE("tengu_copper_bridge", false);
  if (!bridgeEnabled) {
    return;
  }
  if (isEnvTruthy(process.env.USE_LOCAL_OAUTH) || isEnvTruthy(process.env.LOCAL_BRIDGE)) {
    return "ws://localhost:8765";
  }
  if (isEnvTruthy(process.env.USE_STAGING_OAUTH)) {
    return "wss://bridge-staging.claudeusercontent.com";
  }
  return "wss://bridge.claudeusercontent.com";
}
function isLocalBridge() {
  return isEnvTruthy(process.env.USE_LOCAL_OAUTH) || isEnvTruthy(process.env.LOCAL_BRIDGE);
}
function createChromeContext(env) {
  const logger = new DebugLogger;
  const chromeBridgeUrl = getChromeBridgeUrl();
  logger.info(`Bridge URL: ${chromeBridgeUrl ?? "none (using native socket)"}`);
  const rawPermissionMode = env?.CLAUDE_CHROME_PERMISSION_MODE ?? process.env.CLAUDE_CHROME_PERMISSION_MODE;
  let initialPermissionMode;
  if (rawPermissionMode) {
    if (isPermissionMode(rawPermissionMode)) {
      initialPermissionMode = rawPermissionMode;
    } else {
      logger.warn(`Invalid CLAUDE_CHROME_PERMISSION_MODE "${rawPermissionMode}". Valid values: ${PERMISSION_MODES.join(", ")}`);
    }
  }
  return {
    serverName: "Claude in Chrome",
    logger,
    socketPath: getSecureSocketPath(),
    getSocketPaths: getAllSocketPaths,
    clientTypeId: "claude-code",
    onAuthenticationError: () => {
      logger.warn("Authentication error occurred. Please ensure you are logged into the Claude browser extension with the same claude.ai account as Claude Code.");
    },
    onToolCallDisconnected: () => {
      return `Browser extension is not connected. Please ensure the Claude browser extension is installed and running (${EXTENSION_DOWNLOAD_URL}), and that you are logged into claude.ai with the same account as Claude Code. If this is your first time connecting to Chrome, you may need to restart Chrome for the installation to take effect. If you continue to experience issues, please report a bug: ${BUG_REPORT_URL}`;
    },
    onExtensionPaired: (deviceId, name) => {
      saveGlobalConfig((config) => {
        if (config.chromeExtension?.pairedDeviceId === deviceId && config.chromeExtension?.pairedDeviceName === name) {
          return config;
        }
        return {
          ...config,
          chromeExtension: {
            pairedDeviceId: deviceId,
            pairedDeviceName: name
          }
        };
      });
      logger.info(`Paired with "${name}" (${deviceId.slice(0, 8)})`);
    },
    getPersistedDeviceId: () => {
      return getGlobalConfig().chromeExtension?.pairedDeviceId;
    },
    ...chromeBridgeUrl && {
      bridgeConfig: {
        url: chromeBridgeUrl,
        getUserId: async () => {
          return getGlobalConfig().oauthAccount?.accountUuid;
        },
        getOAuthToken: async () => {
          return getClaudeAIOAuthTokens()?.accessToken ?? "";
        },
        ...isLocalBridge() && { devUserId: "dev_user_local" }
      }
    },
    ...initialPermissionMode && { initialPermissionMode },
    ...process.env.USER_TYPE === "ant" && {
      callAnthropicMessages: async (req) => {
        const response = await sideQuery({
          model: req.model,
          system: req.system,
          messages: req.messages,
          max_tokens: req.max_tokens,
          stop_sequences: req.stop_sequences,
          signal: req.signal,
          skipSystemPromptPrefix: true,
          tools: [],
          querySource: "chrome_mcp"
        });
        const textBlocks = [];
        for (const b of response.content) {
          if (b.type === "text") {
            textBlocks.push({ type: "text", text: b.text });
          }
        }
        return {
          content: textBlocks,
          stop_reason: response.stop_reason,
          usage: {
            input_tokens: response.usage.input_tokens,
            output_tokens: response.usage.output_tokens
          }
        };
      }
    },
    trackEvent: (eventName, metadata) => {
      const safeMetadata = {};
      if (metadata) {
        for (const [key, value] of Object.entries(metadata)) {
          const safeKey = key === "status" ? "bridge_status" : key;
          if (typeof value === "boolean" || typeof value === "number") {
            safeMetadata[safeKey] = value;
          } else if (typeof value === "string" && SAFE_BRIDGE_STRING_KEYS.has(safeKey)) {
            safeMetadata[safeKey] = value;
          }
        }
      }
      logEvent(eventName, safeMetadata);
    }
  };
}
async function runClaudeInChromeMcpServer() {
  enableConfigs();
  initializeAnalyticsSink();
  const context = createChromeContext();
  const server = createClaudeForChromeMcpServer(context);
  const transport = new StdioServerTransport;
  let exiting = false;
  const shutdownAndExit = async () => {
    if (exiting) {
      return;
    }
    exiting = true;
    await shutdown1PEventLogging();
    await shutdownDatadog();
    process.exit(0);
  };
  process.stdin.on("end", () => void shutdownAndExit());
  process.stdin.on("error", () => void shutdownAndExit());
  logForDebugging("[Claude in Chrome] Starting MCP server");
  await server.connect(transport);
  logForDebugging("[Claude in Chrome] MCP server started");
}

class DebugLogger {
  silly(message, ...args) {
    logForDebugging(format(message, ...args), { level: "debug" });
  }
  debug(message, ...args) {
    logForDebugging(format(message, ...args), { level: "debug" });
  }
  info(message, ...args) {
    logForDebugging(format(message, ...args), { level: "info" });
  }
  warn(message, ...args) {
    logForDebugging(format(message, ...args), { level: "warn" });
  }
  error(message, ...args) {
    logForDebugging(format(message, ...args), { level: "error" });
  }
}
var EXTENSION_DOWNLOAD_URL = "https://claude.ai/chrome", BUG_REPORT_URL = "https://github.com/anthropics/claude-code/issues/new?labels=bug,claude-in-chrome", SAFE_BRIDGE_STRING_KEYS, PERMISSION_MODES;
var init_mcpServer = __esm(() => {
  init_src();
  init_sink();
  init_stdio();
  init_datadog();
  init_firstPartyEventLogger();
  init_growthbook();
  init_analytics();
  init_auth();
  init_config();
  init_debug();
  init_envUtils();
  init_sideQuery();
  init_common();
  SAFE_BRIDGE_STRING_KEYS = new Set([
    "bridge_status",
    "error_type",
    "tool_name"
  ]);
  PERMISSION_MODES = [
    "ask",
    "skip_all_permission_checks",
    "follow_a_plan"
  ];
});
init_mcpServer();

export {
  runClaudeInChromeMcpServer,
  createChromeContext
};
