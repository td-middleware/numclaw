// @bun
import {
  init_computerUseLock,
  isLockHeldLocally,
  releaseComputerUseLock
} from "./chunk-2t0xa4dt.js";
import {
  init_escHotkey,
  init_withResolvers,
  unregisterEscHotkey,
  withResolvers
} from "./chunk-6mpw9h55.js";
import {
  errorMessage,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-404qm8xt.js";
import"./chunk-fbv4apne.js";
import"./chunk-jaaxk89e.js";
import"./chunk-h4b85amj.js";
import"./chunk-07069jq1.js";
import"./chunk-vf612n57.js";
import"./chunk-d4mdda98.js";
import"./chunk-4g3v8y12.js";
import"./chunk-7739pg2c.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/utils/computerUse/cleanup.ts
async function cleanupComputerUseAfterTurn(ctx) {
  const appState = ctx.getAppState();
  const hidden = appState.computerUseMcpState?.hiddenDuringTurn;
  if (hidden && hidden.size > 0) {
    const { unhideComputerUseApps } = await import("./chunk-h0rfzrj8.js");
    const unhide = unhideComputerUseApps([...hidden]).catch((err) => logForDebugging(`[Computer Use MCP] auto-unhide failed: ${errorMessage(err)}`));
    const timeout = withResolvers();
    const timer = setTimeout(timeout.resolve, UNHIDE_TIMEOUT_MS);
    await Promise.race([unhide, timeout.promise]).finally(() => clearTimeout(timer));
    ctx.setAppState((prev) => prev.computerUseMcpState?.hiddenDuringTurn === undefined ? prev : {
      ...prev,
      computerUseMcpState: {
        ...prev.computerUseMcpState,
        hiddenDuringTurn: undefined
      }
    });
  }
  if (!isLockHeldLocally())
    return;
  try {
    unregisterEscHotkey();
  } catch (err) {
    logForDebugging(`[Computer Use MCP] unregisterEscHotkey failed: ${errorMessage(err)}`);
  }
  if (await releaseComputerUseLock()) {
    ctx.sendOSNotification?.({
      message: "Claude is done using your computer",
      notificationType: "computer_use_exit"
    });
  }
}
var UNHIDE_TIMEOUT_MS = 5000;
var init_cleanup = __esm(() => {
  init_debug();
  init_errors();
  init_withResolvers();
  init_computerUseLock();
  init_escHotkey();
});
init_cleanup();

export {
  cleanupComputerUseAfterTurn
};
