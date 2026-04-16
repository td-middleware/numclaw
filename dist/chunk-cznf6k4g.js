// @bun
import {
  init_browser,
  openBrowser
} from "./chunk-xkt36p6r.js";
import"./chunk-m74w3187.js";
import"./chunk-b81hd3m6.js";
import"./chunk-y3r7v9pq.js";
import"./chunk-8tnsngw2.js";
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
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/commands/stickers/stickers.ts
async function call() {
  const url = "https://www.stickermule.com/claudecode";
  const success = await openBrowser(url);
  if (success) {
    return { type: "text", value: "Opening sticker page in browser\u2026" };
  } else {
    return {
      type: "text",
      value: `Failed to open browser. Visit: ${url}`
    };
  }
}
var init_stickers = __esm(() => {
  init_browser();
});
init_stickers();

export {
  call
};
