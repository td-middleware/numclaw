// @bun
import {
  cliError,
  cliOk
} from "./chunk-z2dp53wn.js";
import {
  AppStateProvider,
  ConfigurableShortcutHint,
  KeybindingSetup,
  SelectMulti,
  addMcpConfig,
  clearMcpClientConfig,
  clearServerTokensFromLocalStorage,
  connectToServer,
  describeMcpConfigFilePath,
  ensureConfigScope,
  getAllMcpConfigs,
  getMcpClientConfig,
  getMcpConfigByName,
  getMcpConfigsByScope,
  getMcpServerConnectionBatchSize,
  getScopeLabel,
  gracefulShutdown,
  init_AppState,
  init_ConfigurableShortcutHint,
  init_KeybindingProviderSetup,
  init_SelectMulti,
  init_auth,
  init_client,
  init_config as init_config2,
  init_gracefulShutdown,
  init_utils,
  readClientSecret,
  removeMcpConfig,
  saveMcpClientSecret
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
import {
  init_p_map,
  pMap
} from "./chunk-2gzv8nrw.js";
import"./chunk-8h6sdj66.js";
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
import"./chunk-9e0p91vr.js";
import"./chunk-25m3pw9q.js";
import"./chunk-wkth813t.js";
import"./chunk-chsyvavm.js";
import"./chunk-6mpw9h55.js";
import {
  getCurrentProjectConfig,
  getGlobalConfig,
  init_config1 as init_config,
  init_stringUtils,
  plural,
  saveCurrentProjectConfig
} from "./chunk-q1w4qzqg.js";
import {
  init_json,
  safeParseJSON
} from "./chunk-sg66v252.js";
import"./chunk-8bwqtasa.js";
import"./chunk-j9gxwbe3.js";
import"./chunk-qtptjcpp.js";
import"./chunk-1cwdhk7a.js";
import"./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import {
  getPlatform,
  init_platform
} from "./chunk-gx8016vp.js";
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
  Dialog,
  KeyboardShortcutHint,
  ThemedBox_default,
  ThemedText,
  color,
  init_src,
  root_default,
  useTheme
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
import {
  init_errors,
  isFsInaccessible
} from "./chunk-404qm8xt.js";
import {
  init_process,
  writeToStdout
} from "./chunk-fbv4apne.js";
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
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/cli/handlers/mcp.tsx
init_p_map();
import { stat } from "fs/promises";
import { cwd } from "process";

// src/components/MCPServerDesktopImportDialog.tsx
init_gracefulShutdown();
init_process();
init_src();
init_config2();
init_stringUtils();
init_ConfigurableShortcutHint();
init_SelectMulti();
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function MCPServerDesktopImportDialog({
  servers,
  scope,
  onDone
}) {
  const serverNames = Object.keys(servers);
  const [existingServers, setExistingServers] = import_react.useState({});
  import_react.useEffect(() => {
    getAllMcpConfigs().then(({ servers: servers2 }) => setExistingServers(servers2));
  }, []);
  const collisions = serverNames.filter((name) => existingServers[name] !== undefined);
  async function onSubmit(selectedServers) {
    let importedCount = 0;
    for (const serverName of selectedServers) {
      const serverConfig = servers[serverName];
      if (serverConfig) {
        let finalName = serverName;
        if (existingServers[finalName] !== undefined) {
          let counter = 1;
          while (existingServers[`${serverName}_${counter}`] !== undefined) {
            counter++;
          }
          finalName = `${serverName}_${counter}`;
        }
        await addMcpConfig(finalName, serverConfig, scope);
        importedCount++;
      }
    }
    done(importedCount);
  }
  const [theme] = useTheme();
  const done = import_react.useCallback((importedCount) => {
    if (importedCount > 0) {
      writeToStdout(`
${color("success", theme)(`Successfully imported ${importedCount} MCP ${plural(importedCount, "server")} to ${scope} config.`)}
`);
    } else {
      writeToStdout(`
No servers were imported.`);
    }
    onDone();
    gracefulShutdown();
  }, [theme, scope, onDone]);
  const handleEscCancel = import_react.useCallback(() => {
    done(0);
  }, [done]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
        title: "Import MCP Servers from Claude Desktop",
        subtitle: `Found ${serverNames.length} MCP ${plural(serverNames.length, "server")} in Claude Desktop.`,
        color: "success",
        onCancel: handleEscCancel,
        hideInputGuide: true,
        children: [
          collisions.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color: "warning",
            children: "Note: Some servers already exist with the same name. If selected, they will be imported with a numbered suffix."
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "Please select the servers you want to import:"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SelectMulti, {
            options: serverNames.map((server) => ({
              label: `${server}${collisions.includes(server) ? " (already exists)" : ""}`,
              value: server
            })),
            defaultValue: serverNames.filter((name) => !collisions.includes(name)),
            onSubmit,
            onCancel: handleEscCancel,
            hideIndexes: true
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        paddingX: 1,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          italic: true,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Space",
                action: "select"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter",
                action: "confirm"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}

// src/cli/handlers/mcp.tsx
init_src();
init_KeybindingProviderSetup();
init_analytics();
init_auth();
init_client();
init_config2();
init_utils();
init_AppState();
init_config();
init_errors();
init_gracefulShutdown();
init_json();
init_platform();
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
async function checkMcpServerHealth(name, server) {
  try {
    const result = await connectToServer(name, server);
    if (result.type === "connected") {
      return "\u2713 Connected";
    } else if (result.type === "needs-auth") {
      return "! Needs authentication";
    } else {
      return "\u2717 Failed to connect";
    }
  } catch (_error) {
    return "\u2717 Connection error";
  }
}
async function mcpServeHandler({
  debug,
  verbose
}) {
  const providedCwd = cwd();
  logEvent("tengu_mcp_start", {});
  try {
    await stat(providedCwd);
  } catch (error) {
    if (isFsInaccessible(error)) {
      cliError(`Error: Directory ${providedCwd} does not exist`);
    }
    throw error;
  }
  try {
    const { setup } = await import("./chunk-wzths1xg.js");
    await setup(providedCwd, "default", false, false, undefined, false);
    const { startMCPServer } = await import("./chunk-e9hts9z3.js");
    await startMCPServer(providedCwd, debug ?? false, verbose ?? false);
  } catch (error) {
    cliError(`Error: Failed to start MCP server: ${error}`);
  }
}
async function mcpRemoveHandler(name, options) {
  const serverBeforeRemoval = getMcpConfigByName(name);
  const cleanupSecureStorage = () => {
    if (serverBeforeRemoval && (serverBeforeRemoval.type === "sse" || serverBeforeRemoval.type === "http")) {
      clearServerTokensFromLocalStorage(name, serverBeforeRemoval);
      clearMcpClientConfig(name, serverBeforeRemoval);
    }
  };
  try {
    if (options.scope) {
      const scope = ensureConfigScope(options.scope);
      logEvent("tengu_mcp_delete", {
        name,
        scope
      });
      await removeMcpConfig(name, scope);
      cleanupSecureStorage();
      process.stdout.write(`Removed MCP server ${name} from ${scope} config
`);
      cliOk(`File modified: ${describeMcpConfigFilePath(scope)}`);
    }
    const projectConfig = getCurrentProjectConfig();
    const globalConfig = getGlobalConfig();
    const { servers: projectServers } = getMcpConfigsByScope("project");
    const mcpJsonExists = !!projectServers[name];
    const scopes = [];
    if (projectConfig.mcpServers?.[name])
      scopes.push("local");
    if (mcpJsonExists)
      scopes.push("project");
    if (globalConfig.mcpServers?.[name])
      scopes.push("user");
    if (scopes.length === 0) {
      cliError(`No MCP server found with name: "${name}"`);
    } else if (scopes.length === 1) {
      const scope = scopes[0];
      logEvent("tengu_mcp_delete", {
        name,
        scope
      });
      await removeMcpConfig(name, scope);
      cleanupSecureStorage();
      process.stdout.write(`Removed MCP server "${name}" from ${scope} config
`);
      cliOk(`File modified: ${describeMcpConfigFilePath(scope)}`);
    } else {
      process.stderr.write(`MCP server "${name}" exists in multiple scopes:
`);
      scopes.forEach((scope) => {
        process.stderr.write(`  - ${getScopeLabel(scope)} (${describeMcpConfigFilePath(scope)})
`);
      });
      process.stderr.write(`
To remove from a specific scope, use:
`);
      scopes.forEach((scope) => {
        process.stderr.write(`  claude mcp remove "${name}" -s ${scope}
`);
      });
      cliError();
    }
  } catch (error) {
    cliError(error.message);
  }
}
async function mcpListHandler() {
  logEvent("tengu_mcp_list", {});
  const { servers: configs } = await getAllMcpConfigs();
  if (Object.keys(configs).length === 0) {
    console.log("No MCP servers configured. Use `claude mcp add` to add a server.");
  } else {
    console.log(`Checking MCP server health...
`);
    const entries = Object.entries(configs);
    const results = await pMap(entries, async ([name, server]) => ({
      name,
      server,
      status: await checkMcpServerHealth(name, server)
    }), { concurrency: getMcpServerConnectionBatchSize() });
    for (const { name, server, status } of results) {
      if (server.type === "sse") {
        console.log(`${name}: ${server.url} (SSE) - ${status}`);
      } else if (server.type === "http") {
        console.log(`${name}: ${server.url} (HTTP) - ${status}`);
      } else if (server.type === "claudeai-proxy") {
        console.log(`${name}: ${server.url} - ${status}`);
      } else if (!server.type || server.type === "stdio") {
        const args = Array.isArray(server.args) ? server.args : [];
        console.log(`${name}: ${server.command} ${args.join(" ")} - ${status}`);
      }
    }
  }
  await gracefulShutdown(0);
}
async function mcpGetHandler(name) {
  logEvent("tengu_mcp_get", {
    name
  });
  const server = getMcpConfigByName(name);
  if (!server) {
    cliError(`No MCP server found with name: ${name}`);
  }
  console.log(`${name}:`);
  console.log(`  Scope: ${getScopeLabel(server.scope)}`);
  const status = await checkMcpServerHealth(name, server);
  console.log(`  Status: ${status}`);
  if (server.type === "sse") {
    console.log(`  Type: sse`);
    console.log(`  URL: ${server.url}`);
    if (server.headers) {
      console.log("  Headers:");
      for (const [key, value] of Object.entries(server.headers)) {
        console.log(`    ${key}: ${value}`);
      }
    }
    if (server.oauth?.clientId || server.oauth?.callbackPort) {
      const parts = [];
      if (server.oauth.clientId) {
        parts.push("client_id configured");
        const clientConfig = getMcpClientConfig(name, server);
        if (clientConfig?.clientSecret)
          parts.push("client_secret configured");
      }
      if (server.oauth.callbackPort)
        parts.push(`callback_port ${server.oauth.callbackPort}`);
      console.log(`  OAuth: ${parts.join(", ")}`);
    }
  } else if (server.type === "http") {
    console.log(`  Type: http`);
    console.log(`  URL: ${server.url}`);
    if (server.headers) {
      console.log("  Headers:");
      for (const [key, value] of Object.entries(server.headers)) {
        console.log(`    ${key}: ${value}`);
      }
    }
    if (server.oauth?.clientId || server.oauth?.callbackPort) {
      const parts = [];
      if (server.oauth.clientId) {
        parts.push("client_id configured");
        const clientConfig = getMcpClientConfig(name, server);
        if (clientConfig?.clientSecret)
          parts.push("client_secret configured");
      }
      if (server.oauth.callbackPort)
        parts.push(`callback_port ${server.oauth.callbackPort}`);
      console.log(`  OAuth: ${parts.join(", ")}`);
    }
  } else if (server.type === "stdio") {
    console.log(`  Type: stdio`);
    console.log(`  Command: ${server.command}`);
    const args = Array.isArray(server.args) ? server.args : [];
    console.log(`  Args: ${args.join(" ")}`);
    if (server.env) {
      console.log("  Environment:");
      for (const [key, value] of Object.entries(server.env)) {
        console.log(`    ${key}=${value}`);
      }
    }
  }
  console.log(`
To remove this server, run: claude mcp remove "${name}" -s ${server.scope}`);
  await gracefulShutdown(0);
}
async function mcpAddJsonHandler(name, json, options) {
  try {
    const scope = ensureConfigScope(options.scope);
    const parsedJson = safeParseJSON(json);
    const needsSecret = options.clientSecret && parsedJson && typeof parsedJson === "object" && "type" in parsedJson && (parsedJson.type === "sse" || parsedJson.type === "http") && "url" in parsedJson && typeof parsedJson.url === "string" && "oauth" in parsedJson && parsedJson.oauth && typeof parsedJson.oauth === "object" && "clientId" in parsedJson.oauth;
    const clientSecret = needsSecret ? await readClientSecret() : undefined;
    await addMcpConfig(name, parsedJson, scope);
    const transportType = parsedJson && typeof parsedJson === "object" && "type" in parsedJson ? String(parsedJson.type || "stdio") : "stdio";
    if (clientSecret && parsedJson && typeof parsedJson === "object" && "type" in parsedJson && (parsedJson.type === "sse" || parsedJson.type === "http") && "url" in parsedJson && typeof parsedJson.url === "string") {
      saveMcpClientSecret(name, { type: parsedJson.type, url: parsedJson.url }, clientSecret);
    }
    logEvent("tengu_mcp_add", {
      scope,
      source: "json",
      type: transportType
    });
    cliOk(`Added ${transportType} MCP server ${name} to ${scope} config`);
  } catch (error) {
    cliError(error.message);
  }
}
async function mcpAddFromDesktopHandler(options) {
  try {
    const scope = ensureConfigScope(options.scope);
    const platform = getPlatform();
    logEvent("tengu_mcp_add", {
      scope,
      platform,
      source: "desktop"
    });
    const { readClaudeDesktopMcpServers } = await import("./chunk-1h1tc4mw.js");
    const servers = await readClaudeDesktopMcpServers();
    if (Object.keys(servers).length === 0) {
      cliOk("No MCP servers found in Claude Desktop configuration or configuration file does not exist.");
    }
    const { unmount } = await root_default(/* @__PURE__ */ jsx_dev_runtime2.jsxDEV(AppStateProvider, {
      children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(KeybindingSetup, {
        children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(MCPServerDesktopImportDialog, {
          servers,
          scope,
          onDone: () => {
            unmount();
          }
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this), { exitOnCtrlC: true });
  } catch (error) {
    cliError(error.message);
  }
}
async function mcpResetChoicesHandler() {
  logEvent("tengu_mcp_reset_mcpjson_choices", {});
  saveCurrentProjectConfig((current) => ({
    ...current,
    enabledMcpjsonServers: [],
    disabledMcpjsonServers: [],
    enableAllProjectMcpServers: false
  }));
  cliOk(`All project-scoped (.mcp.json) server approvals and rejections have been reset.
You will be prompted for approval next time you start Claude Code.`);
}
export {
  mcpServeHandler,
  mcpResetChoicesHandler,
  mcpRemoveHandler,
  mcpListHandler,
  mcpGetHandler,
  mcpAddJsonHandler,
  mcpAddFromDesktopHandler
};
