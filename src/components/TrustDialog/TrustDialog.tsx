import { homedir } from 'os'
import React from 'react'
import { logEvent } from 'src/services/analytics/index.js'
import { setSessionTrustAccepted } from '../../bootstrap/state.js'
import type { Command } from '../../commands.js'
import { useExitOnCtrlCDWithKeybindings } from '../../hooks/useExitOnCtrlCDWithKeybindings.js'
import { Box, Link, Text, useStdin } from '@anthropic/ink'
import { useRegisterOverlay } from '../../context/overlayContext.js'
import { getMcpConfigsByScope } from '../../services/mcp/config.js'
import { BASH_TOOL_NAME } from '../../tools/BashTool/toolName.js'
import {
  checkHasTrustDialogAccepted,
  saveCurrentProjectConfig,
} from '../../utils/config.js'
import { getCwd } from '../../utils/cwd.js'
import { getFsImplementation } from '../../utils/fsOperations.js'
import { gracefulShutdownSync } from '../../utils/gracefulShutdown.js'
import { PermissionDialog } from '../permissions/PermissionDialog.js'
import {
  getApiKeyHelperSources,
  getAwsCommandsSources,
  getBashPermissionSources,
  getDangerousEnvVarsSources,
  getGcpCommandsSources,
  getHooksSources,
  getOtelHeadersHelperSources,
} from './utils.js'

type Props = {
  onDone(): void
  commands?: Command[]
}

export function TrustDialog({ onDone, commands }: Props): React.ReactNode {
  const { servers: projectServers } = getMcpConfigsByScope('project')

  // In all cases, we generally check only the project-level and
  // project-local-level settings, which we assume that users do not configure
  // directly compared to user-level settings.

  // Check for MCPs
  const hasMcpServers = Object.keys(projectServers).length > 0
  // Check for hooks
  const hooksSettingSources = getHooksSources()
  const hasHooks = hooksSettingSources.length > 0
  // Check whether code execution is allowed in permissions and slash commands
  const bashSettingSources = getBashPermissionSources()
  // Check for apiKeyHelper which executes arbitrary commands
  const apiKeyHelperSources = getApiKeyHelperSources()
  const hasApiKeyHelper = apiKeyHelperSources.length > 0
  // Check for AWS commands which execute arbitrary commands
  const awsCommandsSources = getAwsCommandsSources()
  const hasAwsCommands = awsCommandsSources.length > 0
  // Check for GCP commands which execute arbitrary commands
  const gcpCommandsSources = getGcpCommandsSources()
  const hasGcpCommands = gcpCommandsSources.length > 0
  // Check for otelHeadersHelper which executes arbitrary commands
  const otelHeadersHelperSources = getOtelHeadersHelperSources()
  const hasOtelHeadersHelper = otelHeadersHelperSources.length > 0
  // Check for dangerous environment variables (not in SAFE_ENV_VARS)
  const dangerousEnvVarsSources = getDangerousEnvVarsSources()
  const hasDangerousEnvVars = dangerousEnvVarsSources.length > 0

  const hasSlashCommandBash =
    commands?.some(
      command =>
        command.type === 'prompt' &&
        command.loadedFrom === 'commands_DEPRECATED' &&
        (command.source === 'projectSettings' ||
          command.source === 'localSettings') &&
        command.allowedTools?.some(
          (tool: string) =>
            tool === BASH_TOOL_NAME || tool.startsWith(BASH_TOOL_NAME + '('),
        ),
    ) ?? false

  const hasSkillsBash =
    commands?.some(
      command =>
        command.type === 'prompt' &&
        (command.loadedFrom === 'skills' || command.loadedFrom === 'plugin') &&
        (command.source === 'projectSettings' ||
          command.source === 'localSettings' ||
          command.source === 'plugin') &&
        command.allowedTools?.some(
          (tool: string) =>
            tool === BASH_TOOL_NAME || tool.startsWith(BASH_TOOL_NAME + '('),
        ),
    ) ?? false

  const hasAnyBashExecution =
    bashSettingSources.length > 0 || hasSlashCommandBash || hasSkillsBash

  const hasTrustDialogAccepted = checkHasTrustDialogAccepted()

  // Register as modal overlay so PromptInput's chat:submit (Enter) handler
  // is deactivated while TrustDialog is showing. Without this, the Chat context's
  // enter:chat:submit binding fires first and stopImmediatePropagation() prevents
  // our useInput handler from ever receiving the Enter key.
  useRegisterOverlay('trust-dialog')

  // focused: 0 = Yes (trust), 1 = No (exit)
  const [focused, setFocused] = React.useState(0)

  React.useEffect(() => {
    const isHomeDir = homedir() === getCwd()
    logEvent('tengu_trust_dialog_shown', {
      isHomeDir,
      hasMcpServers,
      hasHooks,
      hasBashExecution: hasAnyBashExecution,
      hasApiKeyHelper,
      hasAwsCommands,
      hasGcpCommands,
      hasOtelHeadersHelper,
      hasDangerousEnvVars,
    })
  }, [
    hasMcpServers,
    hasHooks,
    hasAnyBashExecution,
    hasApiKeyHelper,
    hasAwsCommands,
    hasGcpCommands,
    hasOtelHeadersHelper,
    hasDangerousEnvVars,
  ])

  function onChange(value: 'enable_all' | 'exit') {
    if (value === 'exit') {
      gracefulShutdownSync(1)
      return
    }

    const isHomeDir = homedir() === getCwd()

    logEvent('tengu_trust_dialog_accept', {
      isHomeDir,
      hasMcpServers,
      hasHooks,
      hasBashExecution: hasAnyBashExecution,
      hasApiKeyHelper,
      hasAwsCommands,
      hasGcpCommands,
      hasOtelHeadersHelper,
      hasDangerousEnvVars,
    })

    if (isHomeDir) {
      // For home directory, store trust in session memory only (not persisted to disk)
      // This allows hooks and other trust-requiring features to work during this session
      // while preserving the security intent of not permanently trusting home dir
      setSessionTrustAccepted(true)
    } else {
      saveCurrentProjectConfig(current => ({
        ...current,
        hasTrustDialogAccepted: true,
      }))
    }

    // Do NOT write MCP server settings here. handleMcpjsonServerApprovals in
    // interactiveHelpers.tsx runs right after this dialog and shows the per-server approval
    // UI. Writing enabledMcpjsonServers/enableAllProjectMcpServers here would
    // mark every server 'approved' and silently skip that dialog. See #15558.

    onDone()
  }

  // Default onExit is useApp().exit() → Ink.unmount(), which tears down the
  // React tree but never calls onDone(). showSetupScreens() in
  // interactiveHelpers.tsx awaits a Promise that only resolves via onDone,
  // so the default would hang the await forever. With keybinding
  // customization enabled, the chokidar watcher (persistent: true) keeps the
  // event loop alive and the process freezes. Explicitly exit 1 like "No".
  const exitState = useExitOnCtrlCDWithKeybindings(() =>
    gracefulShutdownSync(1),
  )

  // Handle keyboard input via Ink's internal_eventEmitter, registered with
  // prependListener so our handler fires FIRST (before ChordInterceptor and
  // all other useInput handlers). We call stopImmediatePropagation() after
  // handling each key so no other handler sees the same event.
  const { internal_eventEmitter } = useStdin()
  const focusedRef = React.useRef(focused)
  focusedRef.current = focused
  const onChangeRef = React.useRef(onChange)
  onChangeRef.current = onChange

  React.useEffect(() => {
    const handleInput = (event: { input: string; key: { upArrow: boolean; downArrow: boolean; return: boolean; escape: boolean }; stopImmediatePropagation: () => void }) => {
      const { input, key } = event
      if (key.upArrow || input === 'k') {
        setFocused(f => Math.max(0, f - 1))
        event.stopImmediatePropagation()
      } else if (key.downArrow || input === 'j') {
        setFocused(f => Math.min(1, f + 1))
        event.stopImmediatePropagation()
      } else if (key.return) {
        onChangeRef.current(focusedRef.current === 0 ? 'enable_all' : 'exit')
        event.stopImmediatePropagation()
      } else if (key.escape) {
        onChangeRef.current('exit')
        event.stopImmediatePropagation()
      } else if (input === '1') {
        onChangeRef.current('enable_all')
        event.stopImmediatePropagation()
      } else if (input === '2') {
        onChangeRef.current('exit')
        event.stopImmediatePropagation()
      }
    }

    internal_eventEmitter.prependListener('input', handleInput)
    return () => {
      internal_eventEmitter.removeListener('input', handleInput)
    }
  }, [internal_eventEmitter])

  // Automatically resolve the trust dialog if there is nothing to be shown.
  if (hasTrustDialogAccepted) {
    setTimeout(onDone)
    return null
  }

  const options = [
    { label: 'Yes, I trust this folder', value: 'enable_all' as const },
    { label: 'No, exit', value: 'exit' as const },
  ]

  return (
    <PermissionDialog
      color="warning"
      titleColor="warning"
      title="Accessing workspace:"
    >
      <Box flexDirection="column" gap={1} paddingTop={1}>
        <Text bold>{getFsImplementation().cwd()}</Text>

        <Text>
          Quick safety check: Is this a project you created or one you trust?
          (Like your own code, a well-known open source project, or work from
          your team). If not, take a moment to review what{"'"}s in this folder
          first.
        </Text>
        <Text>
          Numina{"'"}ll be able to read, edit, and execute files here.
        </Text>

        <Text dimColor>
          <Link url="https://code.claude.com/docs/en/security">
            Security guide
          </Link>
        </Text>

        <Box flexDirection="column">
          {options.map((opt, i) => (
            <Box key={opt.value}>
              <Text bold={focused === i}>
                {focused === i ? '❯ ' : '  '}
                {i + 1}. {opt.label}
              </Text>
            </Box>
          ))}
        </Box>

        <Text dimColor>
          {exitState.pending ? (
            <>Press {exitState.keyName} again to exit</>
          ) : (
            <>↑↓ to move · Enter to confirm · Esc to cancel</>
          )}
        </Text>
      </Box>
    </PermissionDialog>
  )
}
