import { describe, expect, test, mock } from "bun:test";
import type { Command } from "../../../types/command.js";
import { BASH_TOOL_NAME } from "../../../tools/BashTool/toolName.js";

// Mock the module functions
const { checkHasTrustDialogAccepted } = await import("../../../utils/config.js");

// Helper function to create test command objects
function createTestCommand(overrides: Partial<Command> = {}): Command {
  const base: Command = {
    type: 'prompt',
    name: 'test-command',
    description: 'Test command',
    progressMessage: 'Running test...',
    contentLength: 100,
    source: 'builtin',
    getPromptForCommand: async () => [],
    ...overrides,
  } as Command;

  return base;
}

describe("TrustDialog - hasSkillsBash logic", () => {
  // Mock the config module
  mock.module("../../../utils/config.js", () => ({
    checkHasTrustDialogAccepted: () => false,
  }));

  test("returns false when commands is undefined", () => {
    const commands = undefined;
    const result = commands?.some(
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
    ) ?? false;

    expect(result).toBe(false);
  });

  test("returns false when commands is empty array", () => {
    const commands: Command[] = [];
    const result = commands?.some(
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
    ) ?? false;

    expect(result).toBe(false);
  });

  test("returns false when command is not prompt type", () => {
    const commands = [
      createTestCommand({
        type: 'local',
        loadedFrom: 'skills',
        source: 'projectSettings',
        allowedTools: [BASH_TOOL_NAME],
      }),
    ] as Command[];

    const result = commands.some(
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
    );

    expect(result).toBe(false);
  });

  test("returns false when loadedFrom is not skills or plugin", () => {
    const commands = [
      createTestCommand({
        type: 'prompt',
        loadedFrom: 'commands_DEPRECATED',
        source: 'projectSettings',
        allowedTools: [BASH_TOOL_NAME],
      }),
    ] as Command[];

    const result = commands.some(
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
    );

    expect(result).toBe(false);
  });

  test("returns false when source is not allowed", () => {
    const commands = [
      createTestCommand({
        type: 'prompt',
        loadedFrom: 'skills',
        source: 'builtin',
        allowedTools: [BASH_TOOL_NAME],
      }),
    ] as Command[];

    const result = commands.some(
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
    );

    expect(result).toBe(false);
  });

  test("returns false when allowedTools is undefined", () => {
    const commands = [
      createTestCommand({
        type: 'prompt',
        loadedFrom: 'skills',
        source: 'projectSettings',
        allowedTools: undefined,
      }),
    ] as Command[];

    const result = commands.some(
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
    );

    expect(result).toBe(false);
  });

  test("returns false when allowedTools is empty", () => {
    const commands = [
      createTestCommand({
        type: 'prompt',
        loadedFrom: 'skills',
        source: 'projectSettings',
        allowedTools: [],
      }),
    ] as Command[];

    const result = commands.some(
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
    );

    expect(result).toBe(false);
  });

  test("returns true when meets all criteria with Bash tool", () => {
    const commands = [
      createTestCommand({
        type: 'prompt',
        loadedFrom: 'skills',
        source: 'projectSettings',
        allowedTools: [BASH_TOOL_NAME],
      }),
    ] as Command[];

    const result = commands.some(
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
    );

    expect(result).toBe(true);
  });

  test("returns true when loadedFrom is plugin", () => {
    const commands = [
      createTestCommand({
        type: 'prompt',
        loadedFrom: 'plugin',
        source: 'localSettings',
        allowedTools: [BASH_TOOL_NAME],
      }),
    ] as Command[];

    const result = commands.some(
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
    );

    expect(result).toBe(true);
  });

  test("returns true when source is plugin", () => {
    const commands = [
      createTestCommand({
        type: 'prompt',
        loadedFrom: 'skills',
        source: 'plugin',
        allowedTools: [BASH_TOOL_NAME],
      }),
    ] as Command[];

    const result = commands.some(
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
    );

    expect(result).toBe(true);
  });

  test("returns true when Bash tool starts with Bash(", () => {
    const commands = [
      createTestCommand({
        type: 'prompt',
        loadedFrom: 'skills',
        source: 'projectSettings',
        allowedTools: [`${BASH_TOOL_NAME}(read-only)`],
      }),
    ] as Command[];

    const result = commands.some(
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
    );

    expect(result).toBe(true);
  });

  test("returns false when tool is not Bash", () => {
    const commands = [
      createTestCommand({
        type: 'prompt',
        loadedFrom: 'skills',
        source: 'projectSettings',
        allowedTools: ['FileRead', 'Grep'],
      }),
    ] as Command[];

    const result = commands.some(
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
    );

    expect(result).toBe(false);
  });

  test("returns true when multiple tools include Bash", () => {
    const commands = [
      createTestCommand({
        type: 'prompt',
        loadedFrom: 'skills',
        source: 'projectSettings',
        allowedTools: ['FileRead', BASH_TOOL_NAME, 'Grep'],
      }),
    ] as Command[];

    const result = commands.some(
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
    );

    expect(result).toBe(true);
  });

  test("returns true for multiple commands where one matches", () => {
    const commands = [
      createTestCommand({
        type: 'prompt',
        loadedFrom: 'commands_DEPRECATED',
        source: 'projectSettings',
        allowedTools: ['FileRead'],
      }),
      createTestCommand({
        type: 'local',
        loadedFrom: 'skills',
        source: 'projectSettings',
        allowedTools: [BASH_TOOL_NAME],
      }),
      createTestCommand({
        type: 'prompt',
        loadedFrom: 'skills',
        source: 'localSettings',
        allowedTools: [`${BASH_TOOL_NAME}(read-only)`],
      }),
    ] as Command[];

    const result = commands.some(
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
    );

    expect(result).toBe(true);
  });
});

describe("TrustDialog - hasSlashCommandBash logic", () => {
  test("returns true for slash commands with Bash tool", () => {
    const commands = [
      createTestCommand({
        type: 'prompt',
        loadedFrom: 'commands_DEPRECATED',
        source: 'projectSettings',
        allowedTools: [BASH_TOOL_NAME],
      }),
    ] as Command[];

    const result = commands.some(
      command =>
        command.type === 'prompt' &&
        command.loadedFrom === 'commands_DEPRECATED' &&
        (command.source === 'projectSettings' ||
          command.source === 'localSettings') &&
        command.allowedTools?.some(
          (tool: string) =>
            tool === BASH_TOOL_NAME || tool.startsWith(BASH_TOOL_NAME + '('),
        ),
    );

    expect(result).toBe(true);
  });

  test("returns false for slash commands without Bash tool", () => {
    const commands = [
      createTestCommand({
        type: 'prompt',
        loadedFrom: 'commands_DEPRECATED',
        source: 'projectSettings',
        allowedTools: ['FileRead'],
      }),
    ] as Command[];

    const result = commands.some(
      command =>
        command.type === 'prompt' &&
        command.loadedFrom === 'commands_DEPRECATED' &&
        (command.source === 'projectSettings' ||
          command.source === 'localSettings') &&
        command.allowedTools?.some(
          (tool: string) =>
            tool === BASH_TOOL_NAME || tool.startsWith(BASH_TOOL_NAME + '('),
        ),
    );

    expect(result).toBe(false);
  });
});