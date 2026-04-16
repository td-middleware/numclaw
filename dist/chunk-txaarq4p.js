// @bun
import {
  init_claudemd,
  init_withRetry
} from "./chunk-68t3k84h.js";
import {
  init_auth,
  init_config1 as init_config,
  init_growthbook,
  init_internalWrites,
  init_providers,
  init_settings1 as init_settings,
  init_userAgent
} from "./chunk-dme2fwws.js";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-64c1avct.js";
import {
  init_sleep
} from "./chunk-8g5pe1gr.js";
import {
  init_v4
} from "./chunk-8g747a8x.js";
import {
  exports_external
} from "./chunk-d7886r6a.js";
import {
  init_oauth
} from "./chunk-q82r31er.js";
import {
  init_analytics
} from "./chunk-h0rbjg6x.js";
import {
  init_diagLogs,
  init_git
} from "./chunk-36b2q5fg.js";
import {
  init_errors
} from "./chunk-404qm8xt.js";
import {
  init_settingsCache,
  init_state
} from "./chunk-h4b85amj.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/settingsSync/types.ts
var UserSyncContentSchema, UserSyncDataSchema;
var init_types = __esm(() => {
  init_v4();
  init_lazySchema();
  UserSyncContentSchema = lazySchema(() => exports_external.object({
    entries: exports_external.record(exports_external.string(), exports_external.string())
  }));
  UserSyncDataSchema = lazySchema(() => exports_external.object({
    userId: exports_external.string(),
    version: exports_external.number(),
    lastModified: exports_external.string(),
    checksum: exports_external.string(),
    content: UserSyncContentSchema()
  }));
});

// src/services/settingsSync/index.ts
var MAX_FILE_SIZE_BYTES;
var init_settingsSync = __esm(() => {
  init_state();
  init_oauth();
  init_auth();
  init_claudemd();
  init_config();
  init_diagLogs();
  init_errors();
  init_git();
  init_providers();
  init_internalWrites();
  init_settings();
  init_settingsCache();
  init_sleep();
  init_userAgent();
  init_growthbook();
  init_analytics();
  init_withRetry();
  init_types();
  MAX_FILE_SIZE_BYTES = 500 * 1024;
});

export { init_settingsSync };
