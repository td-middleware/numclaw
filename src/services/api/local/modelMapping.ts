/**
 * Model mapping for the local provider.
 *
 * The local provider uses LOCAL_MODEL / LOCAL_DEFAULT_{FAMILY}_MODEL env vars
 * to map Anthropic model names to whatever model IDs your local server exposes.
 *
 * Priority (highest → lowest):
 *   1. LOCAL_MODEL                          — override for ALL requests
 *   2. LOCAL_DEFAULT_{HAIKU|SONNET|OPUS}_MODEL — per-family override
 *   3. Pass through the original Anthropic model name (useful when the local
 *      server is an Anthropic-compatible proxy that accepts the same IDs)
 */

/**
 * Determine the model family (haiku / sonnet / opus) from an Anthropic model ID.
 */
function getModelFamily(model: string): 'haiku' | 'sonnet' | 'opus' | null {
  if (/haiku/i.test(model)) return 'haiku'
  if (/opus/i.test(model)) return 'opus'
  if (/sonnet/i.test(model)) return 'sonnet'
  return null
}

/**
 * Resolve the local model name for a given Anthropic model.
 *
 * Priority:
 * 1. LOCAL_MODEL env var (override all)
 * 2. LOCAL_DEFAULT_{FAMILY}_MODEL env var (e.g. LOCAL_DEFAULT_SONNET_MODEL)
 * 3. Pass through original model name
 */
export function resolveLocalModel(anthropicModel: string): string {
  // Highest priority: explicit override for all requests
  if (process.env.LOCAL_MODEL) {
    return process.env.LOCAL_MODEL
  }

  // Strip [1m] suffix if present (Claude-specific modifier)
  const cleanModel = anthropicModel.replace(/\[1m\]$/, '')

  // Check family-specific overrides
  const family = getModelFamily(cleanModel)
  if (family) {
    const envVar = `LOCAL_DEFAULT_${family.toUpperCase()}_MODEL`
    const override = process.env[envVar]
    if (override) return override
  }

  // Fall through: pass the model name as-is (works for Anthropic-compatible proxies)
  return cleanModel
}
