// @bun
import {
  init_useVoice,
  normalizeLanguageForSTT
} from "./chunk-6ras6188.js";
import"./chunk-02z8n04y.js";
import {
  getShortcutDisplay,
  init_changeDetector,
  init_shortcutFormat,
  settingsChangeDetector
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
import {
  init_voiceModeEnabled,
  isVoiceModeEnabled
} from "./chunk-9q28teyx.js";
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
  getGlobalConfig,
  getInitialSettings,
  init_auth,
  init_config1 as init_config,
  init_settings1 as init_settings,
  isAnthropicAuthEnabled,
  saveGlobalConfig,
  updateSettingsForSource
} from "./chunk-dme2fwws.js";
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
import"./chunk-404qm8xt.js";
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
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/commands/voice/voice.ts
var LANG_HINT_MAX_SHOWS = 2, call = async () => {
  if (!isVoiceModeEnabled()) {
    if (!isAnthropicAuthEnabled()) {
      return {
        type: "text",
        value: "Voice mode requires a Claude.ai account. Please run /login to sign in."
      };
    }
    return {
      type: "text",
      value: "Voice mode is not available."
    };
  }
  const currentSettings = getInitialSettings();
  const isCurrentlyEnabled = currentSettings.voiceEnabled === true;
  if (isCurrentlyEnabled) {
    const result2 = updateSettingsForSource("userSettings", {
      voiceEnabled: false
    });
    if (result2.error) {
      return {
        type: "text",
        value: "Failed to update settings. Check your settings file for syntax errors."
      };
    }
    settingsChangeDetector.notifyChange("userSettings");
    logEvent("tengu_voice_toggled", { enabled: false });
    return {
      type: "text",
      value: "Voice mode disabled."
    };
  }
  const { isVoiceStreamAvailable } = await import("./chunk-x7hqkz97.js");
  const { checkRecordingAvailability } = await import("./chunk-mn61mk4v.js");
  const recording = await checkRecordingAvailability();
  if (!recording.available) {
    return {
      type: "text",
      value: recording.reason ?? "Voice mode is not available in this environment."
    };
  }
  if (!isVoiceStreamAvailable()) {
    return {
      type: "text",
      value: "Voice mode requires a Claude.ai account. Please run /login to sign in."
    };
  }
  const { checkVoiceDependencies, requestMicrophonePermission } = await import("./chunk-mn61mk4v.js");
  const deps = await checkVoiceDependencies();
  if (!deps.available) {
    const hint = deps.installCommand ? `
Install audio recording tools? Run: ${deps.installCommand}` : `
Install SoX manually for audio recording.`;
    return {
      type: "text",
      value: `No audio recording tool found.${hint}`
    };
  }
  if (!await requestMicrophonePermission()) {
    let guidance;
    if (process.platform === "win32") {
      guidance = "Settings \u2192 Privacy \u2192 Microphone";
    } else if (process.platform === "linux") {
      guidance = "your system's audio settings";
    } else {
      guidance = "System Settings \u2192 Privacy & Security \u2192 Microphone";
    }
    return {
      type: "text",
      value: `Microphone access is denied. To enable it, go to ${guidance}, then run /voice again.`
    };
  }
  const result = updateSettingsForSource("userSettings", { voiceEnabled: true });
  if (result.error) {
    return {
      type: "text",
      value: "Failed to update settings. Check your settings file for syntax errors."
    };
  }
  settingsChangeDetector.notifyChange("userSettings");
  logEvent("tengu_voice_toggled", { enabled: true });
  const key = getShortcutDisplay("voice:pushToTalk", "Chat", "Space");
  const stt = normalizeLanguageForSTT(currentSettings.language);
  const cfg = getGlobalConfig();
  const langChanged = cfg.voiceLangHintLastLanguage !== stt.code;
  const priorCount = langChanged ? 0 : cfg.voiceLangHintShownCount ?? 0;
  const showHint = !stt.fellBackFrom && priorCount < LANG_HINT_MAX_SHOWS;
  let langNote = "";
  if (stt.fellBackFrom) {
    langNote = ` Note: "${stt.fellBackFrom}" is not a supported dictation language; using English. Change it via /config.`;
  } else if (showHint) {
    langNote = ` Dictation language: ${stt.code} (/config to change).`;
  }
  if (langChanged || showHint) {
    saveGlobalConfig((prev) => ({
      ...prev,
      voiceLangHintShownCount: priorCount + (showHint ? 1 : 0),
      voiceLangHintLastLanguage: stt.code
    }));
  }
  return {
    type: "text",
    value: `Voice mode enabled. Hold ${key} to record.${langNote}`
  };
};
var init_voice = __esm(() => {
  init_useVoice();
  init_shortcutFormat();
  init_analytics();
  init_auth();
  init_config();
  init_changeDetector();
  init_settings();
  init_voiceModeEnabled();
});
init_voice();

export {
  call
};
