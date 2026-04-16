import OpenAI from 'openai'
import { getProxyFetchOptions } from 'src/utils/proxy.js'

/**
 * Local model provider client — wraps any OpenAI-compatible local inference server.
 *
 * Supported backends (non-exhaustive):
 *   - Ollama:    LOCAL_BASE_URL=http://localhost:11434/v1  LOCAL_API_KEY=ollama
 *   - LM Studio: LOCAL_BASE_URL=http://localhost:1234/v1   LOCAL_API_KEY=lm-studio
 *   - vLLM:      LOCAL_BASE_URL=http://localhost:8000/v1   LOCAL_API_KEY=<any>
 *   - llama.cpp: LOCAL_BASE_URL=http://localhost:8080/v1   LOCAL_API_KEY=<any>
 *
 * Environment variables:
 *
 *   LOCAL_BASE_URL  Required. Base URL of the local OpenAI-compatible server.
 *                   e.g. http://localhost:11434/v1
 *   LOCAL_API_KEY   Optional. API key (many local servers accept any non-empty string).
 *                   Defaults to "local" when not set.
 *   LOCAL_ORG_ID    Optional. Organization ID.
 *   LOCAL_PROJECT_ID Optional. Project ID.
 */

let cachedClient: OpenAI | null = null

export function getLocalClient(options?: {
  maxRetries?: number
  fetchOverride?: typeof fetch
  source?: string
}): OpenAI {
  if (cachedClient) return cachedClient

  const apiKey = process.env.LOCAL_API_KEY || 'local'
  const baseURL = process.env.LOCAL_BASE_URL || 'http://localhost:11434/v1'

  const client = new OpenAI({
    apiKey,
    baseURL,
    maxRetries: options?.maxRetries ?? 0,
    timeout: parseInt(process.env.API_TIMEOUT_MS || String(600 * 1000), 10),
    dangerouslyAllowBrowser: true,
    ...(process.env.LOCAL_ORG_ID && { organization: process.env.LOCAL_ORG_ID }),
    ...(process.env.LOCAL_PROJECT_ID && { project: process.env.LOCAL_PROJECT_ID }),
    fetchOptions: getProxyFetchOptions({ forAnthropicAPI: false }) as unknown as RequestInit,
    ...(options?.fetchOverride && { fetch: options.fetchOverride }),
  })

  if (!options?.fetchOverride) {
    cachedClient = client
  }

  return client
}

/** Clear the cached client (useful when env vars change). */
export function clearLocalClientCache(): void {
  cachedClient = null
}
