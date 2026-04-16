// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/sanitization.ts
function partiallySanitizeUnicode(prompt) {
  let current = prompt;
  let previous = "";
  let iterations = 0;
  const MAX_ITERATIONS = 10;
  while (current !== previous && iterations < MAX_ITERATIONS) {
    previous = current;
    current = current.normalize("NFKC");
    current = current.replace(/[\p{Cf}\p{Co}\p{Cn}]/gu, "");
    current = current.replace(/[\u200B-\u200F]/g, "").replace(/[\u202A-\u202E]/g, "").replace(/[\u2066-\u2069]/g, "").replace(/[\uFEFF]/g, "").replace(/[\uE000-\uF8FF]/g, "");
    iterations++;
  }
  if (iterations >= MAX_ITERATIONS) {
    throw new Error(`Unicode sanitization reached maximum iterations (${MAX_ITERATIONS}) for input: ${prompt.slice(0, 100)}`);
  }
  return current;
}
function recursivelySanitizeUnicode(value) {
  if (typeof value === "string") {
    return partiallySanitizeUnicode(value);
  }
  if (Array.isArray(value)) {
    return value.map(recursivelySanitizeUnicode);
  }
  if (value !== null && typeof value === "object") {
    const sanitized = {};
    for (const [key, val] of Object.entries(value)) {
      sanitized[recursivelySanitizeUnicode(key)] = recursivelySanitizeUnicode(val);
    }
    return sanitized;
  }
  return value;
}
var init_sanitization = () => {};

// src/utils/xdg.ts
import { homedir as osHomedir } from "os";
import { join } from "path";
function resolveOptions(options) {
  return {
    env: options?.env ?? process.env,
    home: options?.homedir ?? process.env.HOME ?? osHomedir()
  };
}
function getXDGStateHome(options) {
  const { env, home } = resolveOptions(options);
  return env.XDG_STATE_HOME ?? join(home, ".local", "state");
}
function getXDGCacheHome(options) {
  const { env, home } = resolveOptions(options);
  return env.XDG_CACHE_HOME ?? join(home, ".cache");
}
function getXDGDataHome(options) {
  const { env, home } = resolveOptions(options);
  return env.XDG_DATA_HOME ?? join(home, ".local", "share");
}
function getUserBinDir(options) {
  const { home } = resolveOptions(options);
  return join(home, ".local", "bin");
}
var init_xdg = () => {};

export { partiallySanitizeUnicode, recursivelySanitizeUnicode, init_sanitization, getXDGStateHome, getXDGCacheHome, getXDGDataHome, getUserBinDir, init_xdg };
