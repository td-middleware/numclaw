// @bun
import {
  StdioServerTransport,
  init_stdio
} from "./chunk-hgv3n1a9.js";
import {
  createAbortController,
  createAssistantMessage,
  findToolByName,
  getDefaultAppState,
  getEmptyToolPermissionContext,
  getErrorParts,
  getTools,
  hasPermissionsToUseTool,
  init_AppStateStore,
  init_Shell,
  init_Tool,
  init_abortController,
  init_messages1 as init_messages,
  init_permissions,
  init_review,
  init_toolErrors,
  init_tools1 as init_tools,
  init_zodToJsonSchema,
  review_default,
  setCwd,
  zodToJsonSchema
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
import {
  createFileStateCacheWithSizeLimit,
  init_fileStateCache
} from "./chunk-j5bth84e.js";
import"./chunk-62vdjjxx.js";
import"./chunk-5pevjsyw.js";
import"./chunk-xnav6j8h.js";
import"./chunk-ps49ymvj.js";
import"./chunk-zk2wsm7d.js";
import"./chunk-2t0xa4dt.js";
import"./chunk-wyhtrn3j.js";
import"./chunk-9q28teyx.js";
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
  getMainLoopModel,
  init_model
} from "./chunk-dme2fwws.js";
import"./chunk-sg66v252.js";
import"./chunk-8bwqtasa.js";
import"./chunk-j9gxwbe3.js";
import"./chunk-qtptjcpp.js";
import"./chunk-1cwdhk7a.js";
import"./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import"./chunk-gx8016vp.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Server,
  init_server,
  init_types
} from "./chunk-4cp6193g.js";
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
import"./chunk-h0rbjg6x.js";
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
import"./chunk-qajrkk97.js";
import {
  init_slowOperations,
  jsonStringify
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
import"./chunk-qp2qdcda.js";

// src/entrypoints/mcp.ts
init_server();
init_stdio();
init_types();
init_AppStateStore();
init_review();
init_Tool();
init_tools();
init_abortController();
init_fileStateCache();
init_log();
init_messages();
init_model();
init_permissions();
init_Shell();
init_slowOperations();
init_toolErrors();
init_zodToJsonSchema();
var MCP_COMMANDS = [review_default];
async function startMCPServer(cwd, debug, verbose) {
  const READ_FILE_STATE_CACHE_SIZE = 100;
  const readFileStateCache = createFileStateCacheWithSizeLimit(READ_FILE_STATE_CACHE_SIZE);
  setCwd(cwd);
  const server = new Server({
    name: "claude/tengu",
    version: "2.1.888"
  }, {
    capabilities: {
      tools: {}
    }
  });
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    const toolPermissionContext = getEmptyToolPermissionContext();
    const tools = getTools(toolPermissionContext);
    return {
      tools: await Promise.all(tools.map(async (tool) => {
        let outputSchema;
        if (tool.outputSchema) {
          const convertedSchema = zodToJsonSchema(tool.outputSchema);
          if (typeof convertedSchema === "object" && convertedSchema !== null && "type" in convertedSchema && convertedSchema.type === "object") {
            outputSchema = convertedSchema;
          }
        }
        return {
          ...tool,
          description: await tool.prompt({
            getToolPermissionContext: async () => toolPermissionContext,
            tools,
            agents: []
          }),
          inputSchema: zodToJsonSchema(tool.inputSchema),
          outputSchema
        };
      }))
    };
  });
  server.setRequestHandler(CallToolRequestSchema, async ({ params: { name, arguments: args } }) => {
    const toolPermissionContext = getEmptyToolPermissionContext();
    const tools = getTools(toolPermissionContext);
    const tool = findToolByName(tools, name);
    if (!tool) {
      throw new Error(`Tool ${name} not found`);
    }
    const toolUseContext = {
      abortController: createAbortController(),
      options: {
        commands: MCP_COMMANDS,
        tools,
        mainLoopModel: getMainLoopModel(),
        thinkingConfig: { type: "disabled" },
        mcpClients: [],
        mcpResources: {},
        isNonInteractiveSession: true,
        debug,
        verbose,
        agentDefinitions: { activeAgents: [], allAgents: [] }
      },
      getAppState: () => getDefaultAppState(),
      setAppState: () => {},
      messages: [],
      readFileState: readFileStateCache,
      setInProgressToolUseIDs: () => {},
      setResponseLength: () => {},
      updateFileHistoryState: () => {},
      updateAttributionState: () => {}
    };
    try {
      if (!tool.isEnabled()) {
        throw new Error(`Tool ${name} is not enabled`);
      }
      const validationResult = await tool.validateInput?.(args ?? {}, toolUseContext);
      if (validationResult && !validationResult.result) {
        throw new Error(`Tool ${name} input is invalid: ${validationResult.message}`);
      }
      const finalResult = await tool.call(args ?? {}, toolUseContext, hasPermissionsToUseTool, createAssistantMessage({
        content: []
      }));
      return {
        content: [
          {
            type: "text",
            text: typeof finalResult === "string" ? finalResult : jsonStringify(finalResult.data)
          }
        ]
      };
    } catch (error) {
      logError(error);
      const parts = error instanceof Error ? getErrorParts(error) : [String(error)];
      const errorText = parts.filter(Boolean).join(`
`).trim() || "Error";
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: errorText
          }
        ]
      };
    }
  });
  async function runServer() {
    const transport = new StdioServerTransport;
    await server.connect(transport);
  }
  return await runServer();
}
export {
  startMCPServer
};
