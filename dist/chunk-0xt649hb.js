// @bun
import {
  readLastFetchTime
} from "./chunk-c5vkve4j.js";
import {
  filterExistingPaths,
  getKnownPathsForRepo
} from "./chunk-ph950hfy.js";
import {
  MACOS_BUNDLE_ID,
  init_parseDeepLink,
  init_registerProtocol,
  parseDeepLink
} from "./chunk-fyymq1vt.js";
import"./chunk-4nspekjp.js";
import {
  getGlobalConfig,
  init_config1 as init_config
} from "./chunk-dme2fwws.js";
import"./chunk-sg66v252.js";
import"./chunk-8bwqtasa.js";
import"./chunk-j9gxwbe3.js";
import"./chunk-qtptjcpp.js";
import"./chunk-1cwdhk7a.js";
import"./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import"./chunk-gx8016vp.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-f5ma3nh5.js";
import"./chunk-tv9pcdnz.js";
import"./chunk-3c25bcsw.js";
import"./chunk-n9ktjngj.js";
import"./chunk-q82r31er.js";
import"./chunk-p2816w9z.js";
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
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-m74w3187.js";
import"./chunk-b81hd3m6.js";
import"./chunk-y3r7v9pq.js";
import"./chunk-8tnsngw2.js";
import {
  init_which,
  which
} from "./chunk-awb4vc41.js";
import"./chunk-cbrt5vsb.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  init_debug,
  init_slowOperations,
  jsonStringify,
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
  __require
} from "./chunk-qp2qdcda.js";

// src/utils/deepLink/protocolHandler.ts
init_parseDeepLink();
init_debug();
import { homedir } from "os";
init_slowOperations();
init_registerProtocol();

// src/utils/deepLink/terminalLauncher.ts
init_config();
init_debug();
init_execFileNoThrow();
init_which();
import { spawn } from "child_process";
import { basename } from "path";
var MACOS_TERMINALS = [
  { name: "iTerm2", bundleId: "com.googlecode.iterm2", app: "iTerm" },
  { name: "Ghostty", bundleId: "com.mitchellh.ghostty", app: "Ghostty" },
  { name: "Kitty", bundleId: "net.kovidgoyal.kitty", app: "kitty" },
  { name: "Alacritty", bundleId: "org.alacritty", app: "Alacritty" },
  { name: "WezTerm", bundleId: "com.github.wez.wezterm", app: "WezTerm" },
  {
    name: "Terminal.app",
    bundleId: "com.apple.Terminal",
    app: "Terminal"
  }
];
var LINUX_TERMINALS = [
  "ghostty",
  "kitty",
  "alacritty",
  "wezterm",
  "gnome-terminal",
  "konsole",
  "xfce4-terminal",
  "mate-terminal",
  "tilix",
  "xterm"
];
async function detectMacosTerminal() {
  const stored = getGlobalConfig().deepLinkTerminal;
  if (stored) {
    const match = MACOS_TERMINALS.find((t) => t.app === stored);
    if (match) {
      return { name: match.name, command: match.app };
    }
  }
  const termProgram = process.env.TERM_PROGRAM;
  if (termProgram) {
    const normalized = termProgram.replace(/\.app$/i, "").toLowerCase();
    const match = MACOS_TERMINALS.find((t) => t.app.toLowerCase() === normalized || t.name.toLowerCase() === normalized);
    if (match) {
      return { name: match.name, command: match.app };
    }
  }
  for (const terminal of MACOS_TERMINALS) {
    const { code, stdout } = await execFileNoThrow("mdfind", [`kMDItemCFBundleIdentifier == "${terminal.bundleId}"`], { timeout: 5000, useCwd: false });
    if (code === 0 && stdout.trim().length > 0) {
      return { name: terminal.name, command: terminal.app };
    }
  }
  for (const terminal of MACOS_TERMINALS) {
    const { code: lsCode } = await execFileNoThrow("ls", [`/Applications/${terminal.app}.app`], { timeout: 1000, useCwd: false });
    if (lsCode === 0) {
      return { name: terminal.name, command: terminal.app };
    }
  }
  return { name: "Terminal.app", command: "Terminal" };
}
async function detectLinuxTerminal() {
  const termEnv = process.env.TERMINAL;
  if (termEnv) {
    const resolved = await which(termEnv);
    if (resolved) {
      return { name: basename(termEnv), command: resolved };
    }
  }
  const xte = await which("x-terminal-emulator");
  if (xte) {
    return { name: "x-terminal-emulator", command: xte };
  }
  for (const terminal of LINUX_TERMINALS) {
    const resolved = await which(terminal);
    if (resolved) {
      return { name: terminal, command: resolved };
    }
  }
  return null;
}
async function detectWindowsTerminal() {
  const wt = await which("wt.exe");
  if (wt) {
    return { name: "Windows Terminal", command: wt };
  }
  const pwsh = await which("pwsh.exe");
  if (pwsh) {
    return { name: "PowerShell", command: pwsh };
  }
  const powershell = await which("powershell.exe");
  if (powershell) {
    return { name: "PowerShell", command: powershell };
  }
  return { name: "Command Prompt", command: "cmd.exe" };
}
async function detectTerminal() {
  switch (process.platform) {
    case "darwin":
      return detectMacosTerminal();
    case "linux":
      return detectLinuxTerminal();
    case "win32":
      return detectWindowsTerminal();
    default:
      return null;
  }
}
async function launchInTerminal(claudePath, action) {
  const terminal = await detectTerminal();
  if (!terminal) {
    logForDebugging("No terminal emulator detected", { level: "error" });
    return false;
  }
  logForDebugging(`Launching in terminal: ${terminal.name} (${terminal.command})`);
  const claudeArgs = ["--deep-link-origin"];
  if (action.repo) {
    claudeArgs.push("--deep-link-repo", action.repo);
    if (action.lastFetchMs !== undefined) {
      claudeArgs.push("--deep-link-last-fetch", String(action.lastFetchMs));
    }
  }
  if (action.query) {
    claudeArgs.push("--prefill", action.query);
  }
  switch (process.platform) {
    case "darwin":
      return launchMacosTerminal(terminal, claudePath, claudeArgs, action.cwd);
    case "linux":
      return launchLinuxTerminal(terminal, claudePath, claudeArgs, action.cwd);
    case "win32":
      return launchWindowsTerminal(terminal, claudePath, claudeArgs, action.cwd);
    default:
      return false;
  }
}
async function launchMacosTerminal(terminal, claudePath, claudeArgs, cwd) {
  switch (terminal.command) {
    case "iTerm": {
      const shCmd = buildShellCommand(claudePath, claudeArgs, cwd);
      const script = `tell application "iTerm"
  if running then
    create window with default profile
  else
    activate
  end if
  tell current session of current window
    write text ${appleScriptQuote(shCmd)}
  end tell
end tell`;
      const { code } = await execFileNoThrow("osascript", ["-e", script], {
        useCwd: false
      });
      if (code === 0)
        return true;
      break;
    }
    case "Terminal": {
      const shCmd = buildShellCommand(claudePath, claudeArgs, cwd);
      const script = `tell application "Terminal"
  do script ${appleScriptQuote(shCmd)}
  activate
end tell`;
      const { code } = await execFileNoThrow("osascript", ["-e", script], {
        useCwd: false
      });
      return code === 0;
    }
    case "Ghostty": {
      const args = [
        "-na",
        terminal.command,
        "--args",
        "--window-save-state=never"
      ];
      if (cwd)
        args.push(`--working-directory=${cwd}`);
      args.push("-e", claudePath, ...claudeArgs);
      const { code } = await execFileNoThrow("open", args, { useCwd: false });
      if (code === 0)
        return true;
      break;
    }
    case "Alacritty": {
      const args = ["-na", terminal.command, "--args"];
      if (cwd)
        args.push("--working-directory", cwd);
      args.push("-e", claudePath, ...claudeArgs);
      const { code } = await execFileNoThrow("open", args, { useCwd: false });
      if (code === 0)
        return true;
      break;
    }
    case "kitty": {
      const args = ["-na", terminal.command, "--args"];
      if (cwd)
        args.push("--directory", cwd);
      args.push(claudePath, ...claudeArgs);
      const { code } = await execFileNoThrow("open", args, { useCwd: false });
      if (code === 0)
        return true;
      break;
    }
    case "WezTerm": {
      const args = ["-na", terminal.command, "--args", "start"];
      if (cwd)
        args.push("--cwd", cwd);
      args.push("--", claudePath, ...claudeArgs);
      const { code } = await execFileNoThrow("open", args, { useCwd: false });
      if (code === 0)
        return true;
      break;
    }
  }
  logForDebugging(`Failed to launch ${terminal.name}, falling back to Terminal.app`);
  return launchMacosTerminal({ name: "Terminal.app", command: "Terminal" }, claudePath, claudeArgs, cwd);
}
async function launchLinuxTerminal(terminal, claudePath, claudeArgs, cwd) {
  let args;
  let spawnCwd;
  switch (terminal.name) {
    case "gnome-terminal":
      args = cwd ? [`--working-directory=${cwd}`, "--"] : ["--"];
      args.push(claudePath, ...claudeArgs);
      break;
    case "konsole":
      args = cwd ? ["--workdir", cwd, "-e"] : ["-e"];
      args.push(claudePath, ...claudeArgs);
      break;
    case "kitty":
      args = cwd ? ["--directory", cwd] : [];
      args.push(claudePath, ...claudeArgs);
      break;
    case "wezterm":
      args = cwd ? ["start", "--cwd", cwd, "--"] : ["start", "--"];
      args.push(claudePath, ...claudeArgs);
      break;
    case "alacritty":
      args = cwd ? ["--working-directory", cwd, "-e"] : ["-e"];
      args.push(claudePath, ...claudeArgs);
      break;
    case "ghostty":
      args = cwd ? [`--working-directory=${cwd}`, "-e"] : ["-e"];
      args.push(claudePath, ...claudeArgs);
      break;
    case "xfce4-terminal":
    case "mate-terminal":
      args = cwd ? [`--working-directory=${cwd}`, "-x"] : ["-x"];
      args.push(claudePath, ...claudeArgs);
      break;
    case "tilix":
      args = cwd ? [`--working-directory=${cwd}`, "-e"] : ["-e"];
      args.push(claudePath, ...claudeArgs);
      break;
    default:
      args = ["-e", claudePath, ...claudeArgs];
      spawnCwd = cwd;
      break;
  }
  return spawnDetached(terminal.command, args, { cwd: spawnCwd });
}
async function launchWindowsTerminal(terminal, claudePath, claudeArgs, cwd) {
  const args = [];
  switch (terminal.name) {
    case "Windows Terminal":
      if (cwd)
        args.push("-d", cwd);
      args.push("--", claudePath, ...claudeArgs);
      break;
    case "PowerShell": {
      const cdCmd = cwd ? `Set-Location ${psQuote(cwd)}; ` : "";
      args.push("-NoExit", "-Command", `${cdCmd}& ${psQuote(claudePath)} ${claudeArgs.map(psQuote).join(" ")}`);
      break;
    }
    default: {
      const cdCmd = cwd ? `cd /d ${cmdQuote(cwd)} && ` : "";
      args.push("/k", `${cdCmd}${cmdQuote(claudePath)} ${claudeArgs.map((a) => cmdQuote(a)).join(" ")}`);
      break;
    }
  }
  return spawnDetached(terminal.command, args, {
    windowsVerbatimArguments: terminal.name === "Command Prompt"
  });
}
function spawnDetached(command, args, opts = {}) {
  return new Promise((resolve) => {
    const child = spawn(command, args, {
      detached: true,
      stdio: "ignore",
      cwd: opts.cwd,
      windowsVerbatimArguments: opts.windowsVerbatimArguments
    });
    child.once("error", (err) => {
      logForDebugging(`Failed to spawn ${command}: ${err.message}`, {
        level: "error"
      });
      resolve(false);
    });
    child.once("spawn", () => {
      child.unref();
      resolve(true);
    });
  });
}
function buildShellCommand(claudePath, claudeArgs, cwd) {
  const cdPrefix = cwd ? `cd ${shellQuote(cwd)} && ` : "";
  return `${cdPrefix}${[claudePath, ...claudeArgs].map(shellQuote).join(" ")}`;
}
function shellQuote(s) {
  return `'${s.replace(/'/g, "'\\''")}'`;
}
function appleScriptQuote(s) {
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`;
}
function psQuote(s) {
  return `'${s.replace(/'/g, "''")}'`;
}
function cmdQuote(arg) {
  const stripped = arg.replace(/"/g, "").replace(/%/g, "%%");
  const escaped = stripped.replace(/(\\+)$/, "$1$1");
  return `"${escaped}"`;
}

// src/utils/deepLink/protocolHandler.ts
async function handleDeepLinkUri(uri) {
  logForDebugging(`Handling deep link URI: ${uri}`);
  let action;
  try {
    action = parseDeepLink(uri);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Deep link error: ${message}`);
    return 1;
  }
  logForDebugging(`Parsed deep link action: ${jsonStringify(action)}`);
  const { cwd, resolvedRepo } = await resolveCwd(action);
  const lastFetch = resolvedRepo ? await readLastFetchTime(cwd) : undefined;
  const launched = await launchInTerminal(process.execPath, {
    query: action.query,
    cwd,
    repo: resolvedRepo,
    lastFetchMs: lastFetch?.getTime()
  });
  if (!launched) {
    console.error("Failed to open a terminal. Make sure a supported terminal emulator is installed.");
    return 1;
  }
  return 0;
}
async function handleUrlSchemeLaunch() {
  if (process.env.__CFBundleIdentifier !== MACOS_BUNDLE_ID) {
    return null;
  }
  try {
    const { waitForUrlEvent } = await import("./chunk-feyzykye.js");
    const url = waitForUrlEvent(5000);
    if (!url) {
      return null;
    }
    return await handleDeepLinkUri(await url);
  } catch {
    return null;
  }
}
async function resolveCwd(action) {
  if (action.cwd) {
    return { cwd: action.cwd };
  }
  if (action.repo) {
    const known = getKnownPathsForRepo(action.repo);
    const existing = await filterExistingPaths(known);
    if (existing[0]) {
      logForDebugging(`Resolved repo ${action.repo} \u2192 ${existing[0]}`);
      return { cwd: existing[0], resolvedRepo: action.repo };
    }
    logForDebugging(`No local clone found for repo ${action.repo}, falling back to home`);
  }
  return { cwd: homedir() };
}
export {
  handleUrlSchemeLaunch,
  handleDeepLinkUri
};
