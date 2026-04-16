// @bun
import {
  disableAllPlugins,
  disablePlugin,
  enablePlugin,
  installPlugin,
  uninstallPlugin,
  updatePluginCli
} from "./chunk-p9dtyzq2.js";
import {
  cliError,
  cliOk
} from "./chunk-z2dp53wn.js";
import {
  getInstallCounts,
  init_installCounts,
  init_parseMarketplaceInput,
  init_validatePlugin,
  parseMarketplaceInput,
  validateManifest,
  validatePluginContents
} from "./chunk-6aed3v5g.js";
import {
  VALID_INSTALLABLE_SCOPES,
  VALID_UPDATE_SCOPES
} from "./chunk-4s1ffnrh.js";
import"./chunk-mny3s2t8.js";
import {
  addMarketplaceSource,
  clearAllCaches,
  createPluginId,
  getPluginErrorMessage,
  init_cacheUtils,
  init_installedPluginsManager,
  init_marketplaceHelpers,
  init_marketplaceManager,
  init_mcpPluginIntegration,
  init_plugin,
  init_pluginIdentifier,
  init_pluginLoader,
  isPluginInstalled,
  loadAllPlugins,
  loadInstalledPluginsV2,
  loadKnownMarketplacesConfig,
  loadMarketplacesWithGracefulDegradation,
  loadPluginMcpServers,
  parsePluginIdentifier,
  refreshAllMarketplaces,
  refreshMarketplace,
  removeMarketplaceSource,
  saveMarketplaceToSettings,
  scopeToSettingSource
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
  init_stringUtils,
  plural
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
import {
  init_log,
  logError
} from "./chunk-y3r7v9pq.js";
import"./chunk-8tnsngw2.js";
import"./chunk-awb4vc41.js";
import"./chunk-cbrt5vsb.js";
import"./chunk-5z28bqne.js";
import {
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
import {
  errorMessage,
  init_errors,
  init_slowOperations,
  jsonStringify
} from "./chunk-404qm8xt.js";
import"./chunk-fbv4apne.js";
import"./chunk-jaaxk89e.js";
import {
  init_state,
  setUseCoworkPlugins
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
  __require
} from "./chunk-qp2qdcda.js";

// src/cli/handlers/plugins.ts
init_figures();
init_state();
init_analytics();
import { basename, dirname } from "path";
init_plugin();
init_errors();
init_log();
init_cacheUtils();
init_installCounts();
init_installedPluginsManager();
init_marketplaceHelpers();
init_marketplaceManager();
init_mcpPluginIntegration();
init_parseMarketplaceInput();
init_pluginIdentifier();
init_pluginLoader();
init_validatePlugin();
init_slowOperations();
init_stringUtils();
function handleMarketplaceError(error, action) {
  logError(error);
  cliError(`${figures_default.cross} Failed to ${action}: ${errorMessage(error)}`);
}
function printValidationResult(result) {
  if (result.errors.length > 0) {
    console.log(`${figures_default.cross} Found ${result.errors.length} ${plural(result.errors.length, "error")}:
`);
    result.errors.forEach((error) => {
      console.log(`  ${figures_default.pointer} ${error.path}: ${error.message}`);
    });
    console.log("");
  }
  if (result.warnings.length > 0) {
    console.log(`${figures_default.warning} Found ${result.warnings.length} ${plural(result.warnings.length, "warning")}:
`);
    result.warnings.forEach((warning) => {
      console.log(`  ${figures_default.pointer} ${warning.path}: ${warning.message}`);
    });
    console.log("");
  }
}
async function pluginValidateHandler(manifestPath, options) {
  if (options.cowork)
    setUseCoworkPlugins(true);
  try {
    const result = await validateManifest(manifestPath);
    console.log(`Validating ${result.fileType} manifest: ${result.filePath}
`);
    printValidationResult(result);
    let contentResults = [];
    if (result.fileType === "plugin") {
      const manifestDir = dirname(result.filePath);
      if (basename(manifestDir) === ".claude-plugin") {
        contentResults = await validatePluginContents(dirname(manifestDir));
        for (const r of contentResults) {
          console.log(`Validating ${r.fileType}: ${r.filePath}
`);
          printValidationResult(r);
        }
      }
    }
    const allSuccess = result.success && contentResults.every((r) => r.success);
    const hasWarnings = result.warnings.length > 0 || contentResults.some((r) => r.warnings.length > 0);
    if (allSuccess) {
      cliOk(hasWarnings ? `${figures_default.tick} Validation passed with warnings` : `${figures_default.tick} Validation passed`);
    } else {
      console.log(`${figures_default.cross} Validation failed`);
      process.exit(1);
    }
  } catch (error) {
    logError(error);
    console.error(`${figures_default.cross} Unexpected error during validation: ${errorMessage(error)}`);
    process.exit(2);
  }
}
async function pluginListHandler(options) {
  if (options.cowork)
    setUseCoworkPlugins(true);
  logEvent("tengu_plugin_list_command", {});
  const installedData = loadInstalledPluginsV2();
  const { getPluginEditableScopes } = await import("./chunk-9k291t8z.js");
  const enabledPlugins = getPluginEditableScopes();
  const pluginIds = Object.keys(installedData.plugins);
  const {
    enabled: loadedEnabled,
    disabled: loadedDisabled,
    errors: loadErrors
  } = await loadAllPlugins();
  const allLoadedPlugins = [...loadedEnabled, ...loadedDisabled];
  const inlinePlugins = allLoadedPlugins.filter((p) => p.source.endsWith("@inline"));
  const inlineLoadErrors = loadErrors.filter((e) => e.source.endsWith("@inline") || e.source.startsWith("inline["));
  if (options.json) {
    const loadedPluginMap = new Map(allLoadedPlugins.map((p) => [p.source, p]));
    const plugins = [];
    for (const pluginId of pluginIds.sort()) {
      const installations = installedData.plugins[pluginId];
      if (!installations || installations.length === 0)
        continue;
      const pluginName = parsePluginIdentifier(pluginId).name;
      const pluginErrors = loadErrors.filter((e) => e.source === pluginId || ("plugin" in e) && e.plugin === pluginName).map(getPluginErrorMessage);
      for (const installation of installations) {
        const loadedPlugin = loadedPluginMap.get(pluginId);
        let mcpServers;
        if (loadedPlugin) {
          const servers = loadedPlugin.mcpServers || await loadPluginMcpServers(loadedPlugin);
          if (servers && Object.keys(servers).length > 0) {
            mcpServers = servers;
          }
        }
        plugins.push({
          id: pluginId,
          version: installation.version || "unknown",
          scope: installation.scope,
          enabled: enabledPlugins.has(pluginId),
          installPath: installation.installPath,
          installedAt: installation.installedAt,
          lastUpdated: installation.lastUpdated,
          projectPath: installation.projectPath,
          mcpServers,
          errors: pluginErrors.length > 0 ? pluginErrors : undefined
        });
      }
    }
    for (const p of inlinePlugins) {
      const servers = p.mcpServers || await loadPluginMcpServers(p);
      const pErrors = inlineLoadErrors.filter((e) => e.source === p.source || ("plugin" in e) && e.plugin === p.name).map(getPluginErrorMessage);
      plugins.push({
        id: p.source,
        version: p.manifest.version ?? "unknown",
        scope: "session",
        enabled: p.enabled !== false,
        installPath: p.path,
        mcpServers: servers && Object.keys(servers).length > 0 ? servers : undefined,
        errors: pErrors.length > 0 ? pErrors : undefined
      });
    }
    for (const e of inlineLoadErrors.filter((e2) => e2.source.startsWith("inline["))) {
      plugins.push({
        id: e.source,
        version: "unknown",
        scope: "session",
        enabled: false,
        installPath: "path" in e ? e.path : "",
        errors: [getPluginErrorMessage(e)]
      });
    }
    if (options.available) {
      const available = [];
      try {
        const [config, installCounts] = await Promise.all([
          loadKnownMarketplacesConfig(),
          getInstallCounts()
        ]);
        const { marketplaces } = await loadMarketplacesWithGracefulDegradation(config);
        for (const {
          name: marketplaceName,
          data: marketplace
        } of marketplaces) {
          if (marketplace) {
            for (const entry of marketplace.plugins) {
              const pluginId = createPluginId(entry.name, marketplaceName);
              if (!isPluginInstalled(pluginId)) {
                available.push({
                  pluginId,
                  name: entry.name,
                  description: entry.description,
                  marketplaceName,
                  version: entry.version,
                  source: entry.source,
                  installCount: installCounts?.get(pluginId)
                });
              }
            }
          }
        }
      } catch {}
      cliOk(jsonStringify({ installed: plugins, available }, null, 2));
    } else {
      cliOk(jsonStringify(plugins, null, 2));
    }
  }
  if (pluginIds.length === 0 && inlinePlugins.length === 0) {
    if (inlineLoadErrors.length === 0) {
      cliOk("No plugins installed. Use `claude plugin install` to install a plugin.");
    }
  }
  if (pluginIds.length > 0) {
    console.log(`Installed plugins:
`);
  }
  for (const pluginId of pluginIds.sort()) {
    const installations = installedData.plugins[pluginId];
    if (!installations || installations.length === 0)
      continue;
    const pluginName = parsePluginIdentifier(pluginId).name;
    const pluginErrors = loadErrors.filter((e) => e.source === pluginId || ("plugin" in e) && e.plugin === pluginName);
    for (const installation of installations) {
      const isEnabled = enabledPlugins.has(pluginId);
      const status = pluginErrors.length > 0 ? `${figures_default.cross} failed to load` : isEnabled ? `${figures_default.tick} enabled` : `${figures_default.cross} disabled`;
      const version = installation.version || "unknown";
      const scope = installation.scope;
      console.log(`  ${figures_default.pointer} ${pluginId}`);
      console.log(`    Version: ${version}`);
      console.log(`    Scope: ${scope}`);
      console.log(`    Status: ${status}`);
      for (const error of pluginErrors) {
        console.log(`    Error: ${getPluginErrorMessage(error)}`);
      }
      console.log("");
    }
  }
  if (inlinePlugins.length > 0 || inlineLoadErrors.length > 0) {
    console.log(`Session-only plugins (--plugin-dir):
`);
    for (const p of inlinePlugins) {
      const pErrors = inlineLoadErrors.filter((e) => e.source === p.source || ("plugin" in e) && e.plugin === p.name);
      const status = pErrors.length > 0 ? `${figures_default.cross} loaded with errors` : `${figures_default.tick} loaded`;
      console.log(`  ${figures_default.pointer} ${p.source}`);
      console.log(`    Version: ${p.manifest.version ?? "unknown"}`);
      console.log(`    Path: ${p.path}`);
      console.log(`    Status: ${status}`);
      for (const e of pErrors) {
        console.log(`    Error: ${getPluginErrorMessage(e)}`);
      }
      console.log("");
    }
    for (const e of inlineLoadErrors.filter((e2) => e2.source.startsWith("inline["))) {
      console.log(`  ${figures_default.pointer} ${e.source}: ${figures_default.cross} ${getPluginErrorMessage(e)}
`);
    }
  }
  cliOk();
}
async function marketplaceAddHandler(source, options) {
  if (options.cowork)
    setUseCoworkPlugins(true);
  try {
    const parsed = await parseMarketplaceInput(source);
    if (!parsed) {
      cliError(`${figures_default.cross} Invalid marketplace source format. Try: owner/repo, https://..., or ./path`);
    }
    if ("error" in parsed) {
      cliError(`${figures_default.cross} ${parsed.error}`);
    }
    const scope = options.scope ?? "user";
    if (scope !== "user" && scope !== "project" && scope !== "local") {
      cliError(`${figures_default.cross} Invalid scope '${scope}'. Use: user, project, or local`);
    }
    const settingSource = scopeToSettingSource(scope);
    let marketplaceSource = parsed;
    if (options.sparse && options.sparse.length > 0) {
      if (marketplaceSource.source === "github" || marketplaceSource.source === "git") {
        marketplaceSource = {
          ...marketplaceSource,
          sparsePaths: options.sparse
        };
      } else {
        cliError(`${figures_default.cross} --sparse is only supported for github and git marketplace sources (got: ${marketplaceSource.source})`);
      }
    }
    console.log("Adding marketplace...");
    const { name, alreadyMaterialized, resolvedSource } = await addMarketplaceSource(marketplaceSource, (message) => {
      console.log(message);
    });
    saveMarketplaceToSettings(name, { source: resolvedSource }, settingSource);
    clearAllCaches();
    let sourceType = marketplaceSource.source;
    if (marketplaceSource.source === "github") {
      sourceType = marketplaceSource.repo;
    }
    logEvent("tengu_marketplace_added", {
      source_type: sourceType
    });
    cliOk(alreadyMaterialized ? `${figures_default.tick} Marketplace '${name}' already on disk \u2014 declared in ${scope} settings` : `${figures_default.tick} Successfully added marketplace: ${name} (declared in ${scope} settings)`);
  } catch (error) {
    handleMarketplaceError(error, "add marketplace");
  }
}
async function marketplaceListHandler(options) {
  if (options.cowork)
    setUseCoworkPlugins(true);
  try {
    const config = await loadKnownMarketplacesConfig();
    const names = Object.keys(config);
    if (options.json) {
      const marketplaces = names.sort().map((name) => {
        const marketplace = config[name];
        const source = marketplace?.source;
        return {
          name,
          source: source?.source,
          ...source?.source === "github" && { repo: source.repo },
          ...source?.source === "git" && { url: source.url },
          ...source?.source === "url" && { url: source.url },
          ...source?.source === "directory" && { path: source.path },
          ...source?.source === "file" && { path: source.path },
          installLocation: marketplace?.installLocation
        };
      });
      cliOk(jsonStringify(marketplaces, null, 2));
    }
    if (names.length === 0) {
      cliOk("No marketplaces configured");
    }
    console.log(`Configured marketplaces:
`);
    names.forEach((name) => {
      const marketplace = config[name];
      console.log(`  ${figures_default.pointer} ${name}`);
      if (marketplace?.source) {
        const src = marketplace.source;
        if (src.source === "github") {
          console.log(`    Source: GitHub (${src.repo})`);
        } else if (src.source === "git") {
          console.log(`    Source: Git (${src.url})`);
        } else if (src.source === "url") {
          console.log(`    Source: URL (${src.url})`);
        } else if (src.source === "directory") {
          console.log(`    Source: Directory (${src.path})`);
        } else if (src.source === "file") {
          console.log(`    Source: File (${src.path})`);
        }
      }
      console.log("");
    });
    cliOk();
  } catch (error) {
    handleMarketplaceError(error, "list marketplaces");
  }
}
async function marketplaceRemoveHandler(name, options) {
  if (options.cowork)
    setUseCoworkPlugins(true);
  try {
    await removeMarketplaceSource(name);
    clearAllCaches();
    logEvent("tengu_marketplace_removed", {
      marketplace_name: name
    });
    cliOk(`${figures_default.tick} Successfully removed marketplace: ${name}`);
  } catch (error) {
    handleMarketplaceError(error, "remove marketplace");
  }
}
async function marketplaceUpdateHandler(name, options) {
  if (options.cowork)
    setUseCoworkPlugins(true);
  try {
    if (name) {
      console.log(`Updating marketplace: ${name}...`);
      await refreshMarketplace(name, (message) => {
        console.log(message);
      });
      clearAllCaches();
      logEvent("tengu_marketplace_updated", {
        marketplace_name: name
      });
      cliOk(`${figures_default.tick} Successfully updated marketplace: ${name}`);
    } else {
      const config = await loadKnownMarketplacesConfig();
      const marketplaceNames = Object.keys(config);
      if (marketplaceNames.length === 0) {
        cliOk("No marketplaces configured");
      }
      console.log(`Updating ${marketplaceNames.length} marketplace(s)...`);
      await refreshAllMarketplaces();
      clearAllCaches();
      logEvent("tengu_marketplace_updated_all", {
        count: marketplaceNames.length
      });
      cliOk(`${figures_default.tick} Successfully updated ${marketplaceNames.length} marketplace(s)`);
    }
  } catch (error) {
    handleMarketplaceError(error, "update marketplace(s)");
  }
}
async function pluginInstallHandler(plugin, options) {
  if (options.cowork)
    setUseCoworkPlugins(true);
  const scope = options.scope || "user";
  if (options.cowork && scope !== "user") {
    cliError("--cowork can only be used with user scope");
  }
  if (!VALID_INSTALLABLE_SCOPES.includes(scope)) {
    cliError(`Invalid scope: ${scope}. Must be one of: ${VALID_INSTALLABLE_SCOPES.join(", ")}.`);
  }
  const { name, marketplace } = parsePluginIdentifier(plugin);
  logEvent("tengu_plugin_install_command", {
    _PROTO_plugin_name: name,
    ...marketplace && {
      _PROTO_marketplace_name: marketplace
    },
    scope
  });
  await installPlugin(plugin, scope);
}
async function pluginUninstallHandler(plugin, options) {
  if (options.cowork)
    setUseCoworkPlugins(true);
  const scope = options.scope || "user";
  if (options.cowork && scope !== "user") {
    cliError("--cowork can only be used with user scope");
  }
  if (!VALID_INSTALLABLE_SCOPES.includes(scope)) {
    cliError(`Invalid scope: ${scope}. Must be one of: ${VALID_INSTALLABLE_SCOPES.join(", ")}.`);
  }
  const { name, marketplace } = parsePluginIdentifier(plugin);
  logEvent("tengu_plugin_uninstall_command", {
    _PROTO_plugin_name: name,
    ...marketplace && {
      _PROTO_marketplace_name: marketplace
    },
    scope
  });
  await uninstallPlugin(plugin, scope, options.keepData);
}
async function pluginEnableHandler(plugin, options) {
  if (options.cowork)
    setUseCoworkPlugins(true);
  let scope;
  if (options.scope) {
    if (!VALID_INSTALLABLE_SCOPES.includes(options.scope)) {
      cliError(`Invalid scope "${options.scope}". Valid scopes: ${VALID_INSTALLABLE_SCOPES.join(", ")}`);
    }
    scope = options.scope;
  }
  if (options.cowork && scope !== undefined && scope !== "user") {
    cliError("--cowork can only be used with user scope");
  }
  if (options.cowork && scope === undefined) {
    scope = "user";
  }
  const { name, marketplace } = parsePluginIdentifier(plugin);
  logEvent("tengu_plugin_enable_command", {
    _PROTO_plugin_name: name,
    ...marketplace && {
      _PROTO_marketplace_name: marketplace
    },
    scope: scope ?? "auto"
  });
  await enablePlugin(plugin, scope);
}
async function pluginDisableHandler(plugin, options) {
  if (options.all && plugin) {
    cliError("Cannot use --all with a specific plugin");
  }
  if (!options.all && !plugin) {
    cliError("Please specify a plugin name or use --all to disable all plugins");
  }
  if (options.cowork)
    setUseCoworkPlugins(true);
  if (options.all) {
    if (options.scope) {
      cliError("Cannot use --scope with --all");
    }
    logEvent("tengu_plugin_disable_command", {});
    await disableAllPlugins();
    return;
  }
  let scope;
  if (options.scope) {
    if (!VALID_INSTALLABLE_SCOPES.includes(options.scope)) {
      cliError(`Invalid scope "${options.scope}". Valid scopes: ${VALID_INSTALLABLE_SCOPES.join(", ")}`);
    }
    scope = options.scope;
  }
  if (options.cowork && scope !== undefined && scope !== "user") {
    cliError("--cowork can only be used with user scope");
  }
  if (options.cowork && scope === undefined) {
    scope = "user";
  }
  const { name, marketplace } = parsePluginIdentifier(plugin);
  logEvent("tengu_plugin_disable_command", {
    _PROTO_plugin_name: name,
    ...marketplace && {
      _PROTO_marketplace_name: marketplace
    },
    scope: scope ?? "auto"
  });
  await disablePlugin(plugin, scope);
}
async function pluginUpdateHandler(plugin, options) {
  if (options.cowork)
    setUseCoworkPlugins(true);
  const { name, marketplace } = parsePluginIdentifier(plugin);
  logEvent("tengu_plugin_update_command", {
    _PROTO_plugin_name: name,
    ...marketplace && {
      _PROTO_marketplace_name: marketplace
    }
  });
  let scope = "user";
  if (options.scope) {
    if (!VALID_UPDATE_SCOPES.includes(options.scope)) {
      cliError(`Invalid scope "${options.scope}". Valid scopes: ${VALID_UPDATE_SCOPES.join(", ")}`);
    }
    scope = options.scope;
  }
  if (options.cowork && scope !== "user") {
    cliError("--cowork can only be used with user scope");
  }
  await updatePluginCli(plugin, scope);
}
export {
  pluginValidateHandler,
  pluginUpdateHandler,
  pluginUninstallHandler,
  pluginListHandler,
  pluginInstallHandler,
  pluginEnableHandler,
  pluginDisableHandler,
  marketplaceUpdateHandler,
  marketplaceRemoveHandler,
  marketplaceListHandler,
  marketplaceAddHandler,
  handleMarketplaceError,
  VALID_UPDATE_SCOPES,
  VALID_INSTALLABLE_SCOPES
};
