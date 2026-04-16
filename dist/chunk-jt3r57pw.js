// @bun
import {
  init_useKeybinding,
  useKeybindings
} from "./chunk-xnav6j8h.js";
import {
  getOAuthHeaders,
  init_api,
  prepareApiRequest
} from "./chunk-x4z03fw8.js";
import {
  getGlobalConfig,
  getOauthAccountInfo,
  getSubscriptionType,
  init_auth,
  init_config1 as init_config,
  isClaudeAISubscriber,
  saveGlobalConfig
} from "./chunk-dme2fwws.js";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-q82r31er.js";
import {
  init_src,
  use_app_default
} from "./chunk-cmsknj6n.js";
import {
  require_react
} from "./chunk-g338npwr.js";
import {
  init_log,
  init_privacyLevel,
  isEssentialTrafficOnly,
  logError
} from "./chunk-y3r7v9pq.js";
import {
  init_debug,
  logForDebugging
} from "./chunk-404qm8xt.js";
import {
  axios_default,
  init_axios
} from "./chunk-nh3cd07f.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/hooks/useDoublePress.ts
function useDoublePress(setPending, onDoublePress, onFirstPress) {
  const lastPressRef = import_react.useRef(0);
  const timeoutRef = import_react.useRef(undefined);
  const clearTimeoutSafe = import_react.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }, []);
  import_react.useEffect(() => {
    return () => {
      clearTimeoutSafe();
    };
  }, [clearTimeoutSafe]);
  return import_react.useCallback(() => {
    const now = Date.now();
    const timeSinceLastPress = now - lastPressRef.current;
    const isDoublePress = timeSinceLastPress <= DOUBLE_PRESS_TIMEOUT_MS && timeoutRef.current !== undefined;
    if (isDoublePress) {
      clearTimeoutSafe();
      setPending(false);
      onDoublePress();
    } else {
      onFirstPress?.();
      setPending(true);
      clearTimeoutSafe();
      timeoutRef.current = setTimeout((setPending2, timeoutRef2) => {
        setPending2(false);
        timeoutRef2.current = undefined;
      }, DOUBLE_PRESS_TIMEOUT_MS, setPending, timeoutRef);
    }
    lastPressRef.current = now;
  }, [setPending, onDoublePress, onFirstPress, clearTimeoutSafe]);
}
var import_react, DOUBLE_PRESS_TIMEOUT_MS = 800;
var init_useDoublePress = __esm(() => {
  import_react = __toESM(require_react(), 1);
});

// src/hooks/useExitOnCtrlCD.ts
function useExitOnCtrlCD(useKeybindingsHook, onInterrupt, onExit, isActive = true) {
  const { exit } = use_app_default();
  const [exitState, setExitState] = import_react2.useState({
    pending: false,
    keyName: null
  });
  const exitFn = import_react2.useMemo(() => onExit ?? exit, [onExit, exit]);
  const handleCtrlCDoublePress = useDoublePress((pending) => setExitState({ pending, keyName: "Ctrl-C" }), exitFn);
  const handleCtrlDDoublePress = useDoublePress((pending) => setExitState({ pending, keyName: "Ctrl-D" }), exitFn);
  const handleInterrupt = import_react2.useCallback(() => {
    if (onInterrupt?.())
      return;
    handleCtrlCDoublePress();
  }, [handleCtrlCDoublePress, onInterrupt]);
  const handleExit = import_react2.useCallback(() => {
    handleCtrlDDoublePress();
  }, [handleCtrlDDoublePress]);
  const handlers = import_react2.useMemo(() => ({
    "app:interrupt": handleInterrupt,
    "app:exit": handleExit
  }), [handleInterrupt, handleExit]);
  useKeybindingsHook(handlers, { context: "Global", isActive });
  return exitState;
}
var import_react2;
var init_useExitOnCtrlCD = __esm(() => {
  init_src();
  init_useDoublePress();
  import_react2 = __toESM(require_react(), 1);
});

// src/hooks/useExitOnCtrlCDWithKeybindings.ts
function useExitOnCtrlCDWithKeybindings(onExit, onInterrupt, isActive) {
  return useExitOnCtrlCD(useKeybindings, onInterrupt, onExit, isActive);
}
var init_useExitOnCtrlCDWithKeybindings = __esm(() => {
  init_useKeybinding();
  init_useExitOnCtrlCD();
});

// src/services/api/referral.ts
async function fetchReferralEligibility(campaign = "claude_code_guest_pass") {
  const { accessToken, orgUUID } = await prepareApiRequest();
  const headers = {
    ...getOAuthHeaders(accessToken),
    "x-organization-uuid": orgUUID
  };
  const url = `${getOauthConfig().BASE_API_URL}/api/oauth/organizations/${orgUUID}/referral/eligibility`;
  const response = await axios_default.get(url, {
    headers,
    params: { campaign },
    timeout: 5000
  });
  return response.data;
}
async function fetchReferralRedemptions(campaign = "claude_code_guest_pass") {
  const { accessToken, orgUUID } = await prepareApiRequest();
  const headers = {
    ...getOAuthHeaders(accessToken),
    "x-organization-uuid": orgUUID
  };
  const url = `${getOauthConfig().BASE_API_URL}/api/oauth/organizations/${orgUUID}/referral/redemptions`;
  const response = await axios_default.get(url, {
    headers,
    params: { campaign },
    timeout: 1e4
  });
  return response.data;
}
function shouldCheckForPasses() {
  return !!(getOauthAccountInfo()?.organizationUuid && isClaudeAISubscriber() && getSubscriptionType() === "max");
}
function checkCachedPassesEligibility() {
  if (!shouldCheckForPasses()) {
    return {
      eligible: false,
      needsRefresh: false,
      hasCache: false
    };
  }
  const orgId = getOauthAccountInfo()?.organizationUuid;
  if (!orgId) {
    return {
      eligible: false,
      needsRefresh: false,
      hasCache: false
    };
  }
  const config = getGlobalConfig();
  const cachedEntry = config.passesEligibilityCache?.[orgId];
  if (!cachedEntry) {
    return {
      eligible: false,
      needsRefresh: true,
      hasCache: false
    };
  }
  const { eligible, timestamp } = cachedEntry;
  const now = Date.now();
  const needsRefresh = now - timestamp > CACHE_EXPIRATION_MS;
  return {
    eligible,
    needsRefresh,
    hasCache: true
  };
}
function formatCreditAmount(reward) {
  const symbol = CURRENCY_SYMBOLS[reward.currency] ?? `${reward.currency} `;
  const amount = reward.amount_minor_units / 100;
  const formatted = amount % 1 === 0 ? amount.toString() : amount.toFixed(2);
  return `${symbol}${formatted}`;
}
function getCachedReferrerReward() {
  const orgId = getOauthAccountInfo()?.organizationUuid;
  if (!orgId)
    return null;
  const config = getGlobalConfig();
  const cachedEntry = config.passesEligibilityCache?.[orgId];
  return cachedEntry?.referrer_reward ?? null;
}
function getCachedRemainingPasses() {
  const orgId = getOauthAccountInfo()?.organizationUuid;
  if (!orgId)
    return null;
  const config = getGlobalConfig();
  const cachedEntry = config.passesEligibilityCache?.[orgId];
  return cachedEntry?.remaining_passes ?? null;
}
async function fetchAndStorePassesEligibility() {
  if (fetchInProgress) {
    logForDebugging("Passes: Reusing in-flight eligibility fetch");
    return fetchInProgress;
  }
  const orgId = getOauthAccountInfo()?.organizationUuid;
  if (!orgId) {
    return null;
  }
  fetchInProgress = (async () => {
    try {
      const response = await fetchReferralEligibility();
      const cacheEntry = {
        ...response,
        timestamp: Date.now()
      };
      saveGlobalConfig((current) => ({
        ...current,
        passesEligibilityCache: {
          ...current.passesEligibilityCache,
          [orgId]: cacheEntry
        }
      }));
      logForDebugging(`Passes eligibility cached for org ${orgId}: ${response.eligible}`);
      return response;
    } catch (error) {
      logForDebugging("Failed to fetch and cache passes eligibility");
      logError(error);
      return null;
    } finally {
      fetchInProgress = null;
    }
  })();
  return fetchInProgress;
}
async function getCachedOrFetchPassesEligibility() {
  if (!shouldCheckForPasses()) {
    return null;
  }
  const orgId = getOauthAccountInfo()?.organizationUuid;
  if (!orgId) {
    return null;
  }
  const config = getGlobalConfig();
  const cachedEntry = config.passesEligibilityCache?.[orgId];
  const now = Date.now();
  if (!cachedEntry) {
    logForDebugging("Passes: No cache, fetching eligibility in background (command unavailable this session)");
    fetchAndStorePassesEligibility();
    return null;
  }
  if (now - cachedEntry.timestamp > CACHE_EXPIRATION_MS) {
    logForDebugging("Passes: Cache stale, returning cached data and refreshing in background");
    fetchAndStorePassesEligibility();
    const { timestamp: timestamp2, ...response2 } = cachedEntry;
    return response2;
  }
  logForDebugging("Passes: Using fresh cached eligibility data");
  const { timestamp, ...response } = cachedEntry;
  return response;
}
async function prefetchPassesEligibility() {
  if (isEssentialTrafficOnly()) {
    return;
  }
  getCachedOrFetchPassesEligibility();
}
var CACHE_EXPIRATION_MS, fetchInProgress = null, CURRENCY_SYMBOLS;
var init_referral = __esm(() => {
  init_axios();
  init_oauth();
  init_auth();
  init_config();
  init_debug();
  init_log();
  init_privacyLevel();
  init_api();
  CACHE_EXPIRATION_MS = 24 * 60 * 60 * 1000;
  CURRENCY_SYMBOLS = {
    USD: "$",
    EUR: "\u20AC",
    GBP: "\xA3",
    BRL: "R$",
    CAD: "CA$",
    AUD: "A$",
    NZD: "NZ$",
    SGD: "S$"
  };
});

export { useDoublePress, init_useDoublePress, useExitOnCtrlCDWithKeybindings, init_useExitOnCtrlCDWithKeybindings, fetchReferralRedemptions, checkCachedPassesEligibility, formatCreditAmount, getCachedReferrerReward, getCachedRemainingPasses, getCachedOrFetchPassesEligibility, prefetchPassesEligibility, init_referral };
