// @bun
import {
  getDoctorDiagnostic,
  getLatestVersion,
  getPackageManager,
  gracefulShutdown,
  init_autoUpdater,
  init_doctorDiagnostic,
  init_gracefulShutdown,
  init_localInstaller,
  init_nativeInstaller,
  init_packageManagers,
  installGlobalPackage,
  installLatest,
  installOrUpdateClaudePackage,
  localInstallationExists,
  removeInstalledSymlink
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
import {
  init_completionCache,
  regenerateCompletionCache
} from "./chunk-eb45z2nb.js";
import"./chunk-5pevjsyw.js";
import"./chunk-xnav6j8h.js";
import {
  gte,
  init_semver
} from "./chunk-ps49ymvj.js";
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
  getGlobalConfig,
  getInitialSettings,
  init_config1 as init_config,
  init_settings1 as init_settings,
  saveGlobalConfig
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
import {
  init_source,
  source_default
} from "./chunk-cmsknj6n.js";
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
import"./chunk-qp2qdcda.js";

// src/cli/update.ts
init_source();
init_analytics();
init_autoUpdater();
init_completionCache();
init_config();
init_debug();
init_doctorDiagnostic();
init_gracefulShutdown();
init_localInstaller();
init_nativeInstaller();
init_packageManagers();
init_process();
init_semver();
init_settings();
async function update() {
  logEvent("tengu_update_check", {});
  writeToStdout(`Current version: ${"2.1.888"}
`);
  const channel = getInitialSettings()?.autoUpdatesChannel ?? "latest";
  writeToStdout(`Checking for updates to ${channel} version...
`);
  logForDebugging("update: Starting update check");
  logForDebugging("update: Running diagnostic");
  const diagnostic = await getDoctorDiagnostic();
  logForDebugging(`update: Installation type: ${diagnostic.installationType}`);
  logForDebugging(`update: Config install method: ${diagnostic.configInstallMethod}`);
  if (diagnostic.multipleInstallations.length > 1) {
    writeToStdout(`
`);
    writeToStdout(source_default.yellow("Warning: Multiple installations found") + `
`);
    for (const install of diagnostic.multipleInstallations) {
      const current = diagnostic.installationType === install.type ? " (currently running)" : "";
      writeToStdout(`- ${install.type} at ${install.path}${current}
`);
    }
  }
  if (diagnostic.warnings.length > 0) {
    writeToStdout(`
`);
    for (const warning of diagnostic.warnings) {
      logForDebugging(`update: Warning detected: ${warning.issue}`);
      logForDebugging(`update: Showing warning: ${warning.issue}`);
      writeToStdout(source_default.yellow(`Warning: ${warning.issue}
`));
      writeToStdout(source_default.bold(`Fix: ${warning.fix}
`));
    }
  }
  const config = getGlobalConfig();
  if (!config.installMethod && diagnostic.installationType !== "package-manager") {
    writeToStdout(`
`);
    writeToStdout(`Updating configuration to track installation method...
`);
    let detectedMethod = "unknown";
    switch (diagnostic.installationType) {
      case "npm-local":
        detectedMethod = "local";
        break;
      case "native":
        detectedMethod = "native";
        break;
      case "npm-global":
        detectedMethod = "global";
        break;
      default:
        detectedMethod = "unknown";
    }
    saveGlobalConfig((current) => ({
      ...current,
      installMethod: detectedMethod
    }));
    writeToStdout(`Installation method set to: ${detectedMethod}
`);
  }
  if (diagnostic.installationType === "development") {
    writeToStdout(`
`);
    writeToStdout(source_default.yellow("Warning: Cannot update development build") + `
`);
    await gracefulShutdown(1);
  }
  if (diagnostic.installationType === "package-manager") {
    const packageManager = await getPackageManager();
    writeToStdout(`
`);
    if (packageManager === "homebrew") {
      writeToStdout(`Claude is managed by Homebrew.
`);
      const latest = await getLatestVersion(channel);
      if (latest && !gte("2.1.888", latest)) {
        writeToStdout(`Update available: ${"2.1.888"} \u2192 ${latest}
`);
        writeToStdout(`
`);
        writeToStdout(`To update, run:
`);
        writeToStdout(source_default.bold("  brew upgrade claude-code") + `
`);
      } else {
        writeToStdout(`Claude is up to date!
`);
      }
    } else if (packageManager === "winget") {
      writeToStdout(`Claude is managed by winget.
`);
      const latest = await getLatestVersion(channel);
      if (latest && !gte("2.1.888", latest)) {
        writeToStdout(`Update available: ${"2.1.888"} \u2192 ${latest}
`);
        writeToStdout(`
`);
        writeToStdout(`To update, run:
`);
        writeToStdout(source_default.bold("  winget upgrade Anthropic.ClaudeCode") + `
`);
      } else {
        writeToStdout(`Claude is up to date!
`);
      }
    } else if (packageManager === "apk") {
      writeToStdout(`Claude is managed by apk.
`);
      const latest = await getLatestVersion(channel);
      if (latest && !gte("2.1.888", latest)) {
        writeToStdout(`Update available: ${"2.1.888"} \u2192 ${latest}
`);
        writeToStdout(`
`);
        writeToStdout(`To update, run:
`);
        writeToStdout(source_default.bold("  apk upgrade claude-code") + `
`);
      } else {
        writeToStdout(`Claude is up to date!
`);
      }
    } else {
      writeToStdout(`Claude is managed by a package manager.
`);
      writeToStdout(`Please use your package manager to update.
`);
    }
    await gracefulShutdown(0);
  }
  if (config.installMethod && diagnostic.configInstallMethod !== "not set" && diagnostic.installationType !== "package-manager") {
    const runningType = diagnostic.installationType;
    const configExpects = diagnostic.configInstallMethod;
    const typeMapping = {
      "npm-local": "local",
      "npm-global": "global",
      native: "native",
      development: "development",
      unknown: "unknown"
    };
    const normalizedRunningType = typeMapping[runningType] || runningType;
    if (normalizedRunningType !== configExpects && configExpects !== "unknown") {
      writeToStdout(`
`);
      writeToStdout(source_default.yellow("Warning: Configuration mismatch") + `
`);
      writeToStdout(`Config expects: ${configExpects} installation
`);
      writeToStdout(`Currently running: ${runningType}
`);
      writeToStdout(source_default.yellow(`Updating the ${runningType} installation you are currently using`) + `
`);
      saveGlobalConfig((current) => ({
        ...current,
        installMethod: normalizedRunningType
      }));
      writeToStdout(`Config updated to reflect current installation method: ${normalizedRunningType}
`);
    }
  }
  if (diagnostic.installationType === "native") {
    logForDebugging("update: Detected native installation, using native updater");
    try {
      const result = await installLatest(channel, true);
      if (result.lockFailed) {
        const pidInfo = result.lockHolderPid ? ` (PID ${result.lockHolderPid})` : "";
        writeToStdout(source_default.yellow(`Another Claude process${pidInfo} is currently running. Please try again in a moment.`) + `
`);
        await gracefulShutdown(0);
      }
      if (!result.latestVersion) {
        process.stderr.write(`Failed to check for updates
`);
        await gracefulShutdown(1);
      }
      if (result.latestVersion === "2.1.888") {
        writeToStdout(source_default.green(`Claude Code is up to date (${"2.1.888"})`) + `
`);
      } else {
        writeToStdout(source_default.green(`Successfully updated from ${"2.1.888"} to version ${result.latestVersion}`) + `
`);
        await regenerateCompletionCache();
      }
      await gracefulShutdown(0);
    } catch (error) {
      process.stderr.write(`Error: Failed to install native update
`);
      process.stderr.write(String(error) + `
`);
      process.stderr.write(`Try running "claude doctor" for diagnostics
`);
      await gracefulShutdown(1);
    }
  }
  if (config.installMethod !== "native") {
    await removeInstalledSymlink();
  }
  logForDebugging("update: Checking npm registry for latest version");
  logForDebugging(`update: Package URL: ${""}`);
  const npmTag = channel === "stable" ? "stable" : "latest";
  const npmCommand = `npm view ${""}@${npmTag} version`;
  logForDebugging(`update: Running: ${npmCommand}`);
  const latestVersion = await getLatestVersion(channel);
  logForDebugging(`update: Latest version from npm: ${latestVersion || "FAILED"}`);
  if (!latestVersion) {
    logForDebugging("update: Failed to get latest version from npm registry");
    process.stderr.write(source_default.red("Failed to check for updates") + `
`);
    process.stderr.write(`Unable to fetch latest version from npm registry
`);
    process.stderr.write(`
`);
    process.stderr.write(`Possible causes:
`);
    process.stderr.write(`  \u2022 Network connectivity issues
`);
    process.stderr.write(`  \u2022 npm registry is unreachable
`);
    process.stderr.write(`  \u2022 Corporate proxy/firewall blocking npm
`);
    if ("") {}
    process.stderr.write(`
`);
    process.stderr.write(`Try:
`);
    process.stderr.write(`  \u2022 Check your internet connection
`);
    process.stderr.write(`  \u2022 Run with --debug flag for more details
`);
    const packageName = process.env.USER_TYPE === "ant" ? "@anthropic-ai/claude-cli" : "@anthropic-ai/claude-code";
    process.stderr.write(`  \u2022 Manually check: npm view ${packageName} version
`);
    process.stderr.write(`  \u2022 Check if you need to login: npm whoami
`);
    await gracefulShutdown(1);
  }
  if (latestVersion === "2.1.888") {
    writeToStdout(source_default.green(`Claude Code is up to date (${"2.1.888"})`) + `
`);
    await gracefulShutdown(0);
  }
  writeToStdout(`New version available: ${latestVersion} (current: ${"2.1.888"})
`);
  writeToStdout(`Installing update...
`);
  let useLocalUpdate = false;
  let updateMethodName = "";
  switch (diagnostic.installationType) {
    case "npm-local":
      useLocalUpdate = true;
      updateMethodName = "local";
      break;
    case "npm-global":
      useLocalUpdate = false;
      updateMethodName = "global";
      break;
    case "unknown": {
      const isLocal = await localInstallationExists();
      useLocalUpdate = isLocal;
      updateMethodName = isLocal ? "local" : "global";
      writeToStdout(source_default.yellow("Warning: Could not determine installation type") + `
`);
      writeToStdout(`Attempting ${updateMethodName} update based on file detection...
`);
      break;
    }
    default:
      process.stderr.write(`Error: Cannot update ${diagnostic.installationType} installation
`);
      await gracefulShutdown(1);
  }
  writeToStdout(`Using ${updateMethodName} installation update method...
`);
  logForDebugging(`update: Update method determined: ${updateMethodName}`);
  logForDebugging(`update: useLocalUpdate: ${useLocalUpdate}`);
  let status;
  if (useLocalUpdate) {
    logForDebugging("update: Calling installOrUpdateClaudePackage() for local update");
    status = await installOrUpdateClaudePackage(channel);
  } else {
    logForDebugging("update: Calling installGlobalPackage() for global update");
    status = await installGlobalPackage();
  }
  logForDebugging(`update: Installation status: ${status}`);
  switch (status) {
    case "success":
      writeToStdout(source_default.green(`Successfully updated from ${"2.1.888"} to version ${latestVersion}`) + `
`);
      await regenerateCompletionCache();
      break;
    case "no_permissions":
      process.stderr.write(`Error: Insufficient permissions to install update
`);
      if (useLocalUpdate) {
        process.stderr.write(`Try manually updating with:
`);
        process.stderr.write(`  cd ~/.claude/local && npm update ${""}
`);
      } else {
        process.stderr.write(`Try running with sudo or fix npm permissions
`);
        process.stderr.write(`Or consider using native installation with: claude install
`);
      }
      await gracefulShutdown(1);
      break;
    case "install_failed":
      process.stderr.write(`Error: Failed to install update
`);
      if (useLocalUpdate) {
        process.stderr.write(`Try manually updating with:
`);
        process.stderr.write(`  cd ~/.claude/local && npm update ${""}
`);
      } else {
        process.stderr.write(`Or consider using native installation with: claude install
`);
      }
      await gracefulShutdown(1);
      break;
    case "in_progress":
      process.stderr.write(`Error: Another instance is currently performing an update
`);
      process.stderr.write(`Please wait and try again later
`);
      await gracefulShutdown(1);
      break;
  }
  await gracefulShutdown(0);
}
export {
  update
};
