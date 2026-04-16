// @bun
import {
  getClaudeAIOAuthTokens,
  init_auth
} from "./chunk-q1w4qzqg.js";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-q82r31er.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/bridge/bridgeConfig.ts
function getBridgeTokenOverride() {
  return process.env.USER_TYPE === "ant" && process.env.CLAUDE_BRIDGE_OAUTH_TOKEN || undefined;
}
function getBridgeBaseUrlOverride() {
  return process.env.USER_TYPE === "ant" && process.env.CLAUDE_BRIDGE_BASE_URL || undefined;
}
function getBridgeAccessToken() {
  return getBridgeTokenOverride() ?? getClaudeAIOAuthTokens()?.accessToken;
}
function getBridgeBaseUrl() {
  return getBridgeBaseUrlOverride() ?? getOauthConfig().BASE_API_URL;
}
var init_bridgeConfig = __esm(() => {
  init_oauth();
  init_auth();
});

export { getBridgeTokenOverride, getBridgeBaseUrlOverride, getBridgeAccessToken, getBridgeBaseUrl, init_bridgeConfig };
