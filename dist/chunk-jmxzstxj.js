// @bun
import {
  getChicagoEnabled,
  getChicagoSubGates,
  init_gates
} from "./chunk-25m3pw9q.js";
import {
  createCliExecutor,
  init_executor
} from "./chunk-wkth813t.js";
import {
  init_swiftLoader,
  requireComputerUseSwift
} from "./chunk-6mpw9h55.js";
import {
  JSONRPCMessageSchema,
  init_types
} from "./chunk-4cp6193g.js";
import {
  COMPUTER_USE_MCP_SERVER_NAME,
  init_common
} from "./chunk-tv9pcdnz.js";
import {
  init_debug,
  logForDebugging
} from "./chunk-404qm8xt.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/computerUse/hostAdapter.ts
import { format } from "util";

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
function getComputerUseHostAdapter() {
  if (cached)
    return cached;
  cached = {
    serverName: COMPUTER_USE_MCP_SERVER_NAME,
    logger: new DebugLogger,
    executor: createCliExecutor({
      getMouseAnimationEnabled: () => getChicagoSubGates().mouseAnimation,
      getHideBeforeActionEnabled: () => getChicagoSubGates().hideBeforeAction
    }),
    ensureOsPermissions: async () => {
      if (process.platform !== "darwin")
        return { granted: true };
      const cu = requireComputerUseSwift();
      const accessibility = cu.tcc.checkAccessibility();
      const screenRecording = cu.tcc.checkScreenRecording();
      return accessibility && screenRecording ? { granted: true } : { granted: false, accessibility, screenRecording };
    },
    isDisabled: () => !getChicagoEnabled(),
    getSubGates: getChicagoSubGates,
    getAutoUnhideEnabled: () => true,
    cropRawPatch: () => null
  };
  return cached;
}
var cached;
var init_hostAdapter = __esm(() => {
  init_debug();
  init_common();
  init_executor();
  init_gates();
  init_swiftLoader();
});

// node_modules/.bun/@modelcontextprotocol+sdk@1.29.0/node_modules/@modelcontextprotocol/sdk/dist/esm/shared/stdio.js
class ReadBuffer {
  append(chunk) {
    this._buffer = this._buffer ? Buffer.concat([this._buffer, chunk]) : chunk;
  }
  readMessage() {
    if (!this._buffer) {
      return null;
    }
    const index = this._buffer.indexOf(`
`);
    if (index === -1) {
      return null;
    }
    const line = this._buffer.toString("utf8", 0, index).replace(/\r$/, "");
    this._buffer = this._buffer.subarray(index + 1);
    return deserializeMessage(line);
  }
  clear() {
    this._buffer = undefined;
  }
}
function deserializeMessage(line) {
  return JSONRPCMessageSchema.parse(JSON.parse(line));
}
function serializeMessage(message) {
  return JSON.stringify(message) + `
`;
}
var init_stdio = __esm(() => {
  init_types();
});

export { ReadBuffer, serializeMessage, init_stdio, getComputerUseHostAdapter, init_hostAdapter };
