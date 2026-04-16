// @bun
import {
  ConfigurableShortcutHint,
  capitalize_default,
  estimateSkillFrontmatterTokens,
  getCommandName,
  getSkillsPath,
  init_ConfigurableShortcutHint,
  init_capitalize,
  init_commands1 as init_commands,
  init_loadSkillsDir
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
  getDisplayPath,
  getSettingSourceName,
  init_constants,
  init_file,
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
import {
  formatTokens,
  init_format
} from "./chunk-64hks9ax.js";
import"./chunk-crmjpsqe.js";
import {
  Dialog,
  ThemedBox_default,
  ThemedText,
  init_src
} from "./chunk-cmsknj6n.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-g338npwr.js";
import"./chunk-h0rbjg6x.js";
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
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/skills/SkillsMenu.tsx
function getSourceTitle(source) {
  if (source === "plugin") {
    return "Plugin skills";
  }
  if (source === "mcp") {
    return "MCP skills";
  }
  return `${capitalize_default(getSettingSourceName(source))} skills`;
}
function getSourceSubtitle(source, skills) {
  if (source === "mcp") {
    const servers = [
      ...new Set(skills.map((s) => {
        const idx = s.name.indexOf(":");
        return idx > 0 ? s.name.slice(0, idx) : null;
      }).filter((n) => n != null))
    ];
    return servers.length > 0 ? servers.join(", ") : undefined;
  }
  const skillsPath = getDisplayPath(getSkillsPath(source, "skills"));
  const hasCommandsSkills = skills.some((s) => s.loadedFrom === "commands_DEPRECATED");
  return hasCommandsSkills ? `${skillsPath}, ${getDisplayPath(getSkillsPath(source, "commands"))}` : skillsPath;
}
function SkillsMenu({ onExit, commands }) {
  const skills = import_react.useMemo(() => {
    return commands.filter((cmd) => cmd.type === "prompt" && (cmd.loadedFrom === "skills" || cmd.loadedFrom === "commands_DEPRECATED" || cmd.loadedFrom === "plugin" || cmd.loadedFrom === "mcp"));
  }, [commands]);
  const skillsBySource = import_react.useMemo(() => {
    const groups = {
      policySettings: [],
      userSettings: [],
      projectSettings: [],
      localSettings: [],
      flagSettings: [],
      plugin: [],
      mcp: []
    };
    for (const skill of skills) {
      const source = skill.source;
      if (source in groups) {
        groups[source].push(skill);
      }
    }
    for (const group of Object.values(groups)) {
      group.sort((a, b) => getCommandName(a).localeCompare(getCommandName(b)));
    }
    return groups;
  }, [skills]);
  const handleCancel = () => {
    onExit("Skills dialog dismissed", { display: "system" });
  };
  if (skills.length === 0) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
      title: "Skills",
      subtitle: "No skills found",
      onCancel: handleCancel,
      hideInputGuide: true,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Create skills in .claude/skills/ or ~/.claude/skills/"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          italic: true,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "close"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  const getScopeTag = (source) => {
    switch (source) {
      case "projectSettings":
      case "localSettings":
        return { label: "local", color: "yellow" };
      case "userSettings":
        return { label: "global", color: "cyan" };
      case "policySettings":
        return { label: "managed", color: "magenta" };
      default:
        return;
    }
  };
  const renderSkill = (skill) => {
    const estimatedTokens = estimateSkillFrontmatterTokens(skill);
    const tokenDisplay = `~${formatTokens(estimatedTokens)}`;
    const pluginName = skill.source === "plugin" ? skill.pluginInfo?.pluginManifest.name : undefined;
    const scopeTag = getScopeTag(skill.source);
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: getCommandName(skill)
        }, undefined, false, undefined, this),
        scopeTag && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: scopeTag.color,
          children: [
            " [",
            scopeTag.label,
            "]"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            pluginName ? ` \xB7 ${pluginName}` : "",
            " \xB7 ",
            tokenDisplay,
            " description tokens"
          ]
        }, undefined, true, undefined, this)
      ]
    }, `${skill.name}-${skill.source}`, true, undefined, this);
  };
  const renderSkillGroup = (source) => {
    const groupSkills = skillsBySource[source];
    if (groupSkills.length === 0)
      return null;
    const title = getSourceTitle(source);
    const subtitle = getSourceSubtitle(source, groupSkills);
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              dimColor: true,
              children: title
            }, undefined, false, undefined, this),
            subtitle && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                " (",
                subtitle,
                ")"
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        groupSkills.map((skill) => renderSkill(skill))
      ]
    }, source, true, undefined, this);
  };
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Skills",
    subtitle: `${skills.length} ${plural(skills.length, "skill")}`,
    onCancel: handleCancel,
    hideInputGuide: true,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          renderSkillGroup("projectSettings"),
          renderSkillGroup("localSettings"),
          renderSkillGroup("userSettings"),
          renderSkillGroup("flagSettings"),
          renderSkillGroup("policySettings"),
          renderSkillGroup("plugin"),
          renderSkillGroup("mcp")
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        italic: true,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "close"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react, jsx_dev_runtime;
var init_SkillsMenu = __esm(() => {
  init_capitalize();
  init_commands();
  init_src();
  init_loadSkillsDir();
  init_file();
  init_format();
  init_constants();
  init_stringUtils();
  init_ConfigurableShortcutHint();
  init_src();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/skills/skills.tsx
async function call(onDone, context) {
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(SkillsMenu, {
    onExit: onDone,
    commands: context.options.commands
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime2;
var init_skills = __esm(() => {
  init_SkillsMenu();
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});
init_skills();

export {
  call
};
