# Numclaw based on Claude Code

## ⚡ 快速开始

### 方式一：全局安装（推荐，无需克隆仓库）

```bash
# 安装
bun i -g numclaw
bun pm -g trust numclaw

# 启动（命令名就是 numclaw）
numclaw
```

> 如果你之前安装的是 `claude-code-best`，命令是 `ccb`；新版包名改为 `numclaw`，命令也改为 `numclaw`。

⚠️ 国内 GitHub 网络较差时，先设置这个环境变量再安装：

```bash
export DEFAULT_RELEASE_BASE=https://ghproxy.net/https://github.com/microsoft/ripgrep-prebuilt/releases/download/v15.0.1
bun i -g numclaw
```

### 方式二：源码版（开发 / 二次开发）

#### ⚙️ 环境要求

一定要最新版本的 bun，不然一堆奇奇怪怪的 BUG！`bun upgrade`！

- 📦 [Bun](https://bun.sh/) >= 1.3.11

#### 📥 安装依赖

```bash
git clone https://github.com/numclaw/numclaw.git
cd numclaw
bun install
```

⚠️ 国内 GitHub 网络较差时：

```bash
DEFAULT_RELEASE_BASE=https://ghproxy.net/https://github.com/microsoft/ripgrep-prebuilt/releases/download/v15.0.1 bun install
```

#### ▶️ 运行

```bash
# 开发模式（看到版本号 888 说明成功）
bun run dev

# 构建产物到 dist/
bun run build

# 构建后全局链接（可用 numclaw 命令启动）
bun link
numclaw
```

构建采用 code splitting 多文件打包（`build.ts`），产物输出到 `dist/` 目录（入口 `dist/cli.js` + 约 450 个 chunk 文件）。构建产物 bun 和 node 均可运行，可发布到私有 npm 源。

如果遇到 bug 请直接提 issue，我们优先解决。

### 👤 新人配置 /login

首次运行后，在 REPL 中输入 `/login` 命令进入登录配置界面，选择 **Anthropic Compatible** 即可对接第三方 API 兼容服务（无需 Anthropic 官方账号）。
选择 OpenAI 和 Gemini 对应的栏目都是支持相应协议的

需要填写的字段：

| 📌 字段 | 📝 说明 | 💡 示例 |
|------|------|------|
| Base URL | API 服务地址 | `https://api.example.com/v1` |
| API Key | 认证密钥 | `sk-xxx` |
| Haiku Model | 快速模型 ID | `claude-haiku-4-5-20251001` |
| Sonnet Model | 均衡模型 ID | `claude-sonnet-4-6` |
| Opus Model | 高性能模型 ID | `claude-opus-4-6` |

- ⌨️ **Tab / Shift+Tab** 切换字段，**Enter** 确认并跳到下一个，最后一个字段按 Enter 保存


> ℹ️ 支持所有 Anthropic API 兼容服务（如 OpenRouter、AWS Bedrock 代理等），只要接口兼容 Messages API 即可。

---

## 🖥️ 本地模型配置（Local Model）

numclaw 新增了 **`local` provider**，可以对接任何兼容 OpenAI Chat Completions API 的本地推理服务器，无需联网、无需 API Key。

### 支持的后端

| 后端 | 默认地址 | API Key |
|------|---------|---------|
| [Ollama](https://ollama.ai) | `http://localhost:11434/v1` | `ollama`（任意字符串） |
| [LM Studio](https://lmstudio.ai) | `http://localhost:1234/v1` | `lm-studio`（任意字符串） |
| [vLLM](https://github.com/vllm-project/vllm) | `http://localhost:8000/v1` | 任意字符串 |
| [llama.cpp server](https://github.com/ggerganov/llama.cpp) | `http://localhost:8080/v1` | 任意字符串 |

### 方式一：通过 `/login` 界面配置（推荐）

启动后在 REPL 中输入 `/login`，选择 **Local Model**，填写以下字段：

| 📌 字段 | 📝 说明 | 💡 示例 |
|------|------|------|
| Base URL | 本地服务地址（**必填**） | `http://localhost:11434/v1` |
| API Key | 认证密钥（可选，大多数本地服务不需要） | `ollama` |
| Haiku Model | 快速/轻量模型 ID | `qwen2.5:7b` |
| Sonnet Model | 均衡模型 ID | `qwen2.5:14b` |
| Opus Model | 高性能模型 ID | `qwen2.5:72b` |

配置保存到 `~/.claude/settings.json`，下次启动自动生效。

### 方式二：通过环境变量配置

```bash
# 必填：本地服务地址
export LOCAL_BASE_URL=http://localhost:11434/v1

# 可选：API Key（大多数本地服务接受任意字符串）
export LOCAL_API_KEY=ollama

# 可选：统一指定所有请求使用的模型
export LOCAL_MODEL=qwen2.5:14b

# 可选：按角色分别指定模型（优先级低于 LOCAL_MODEL）
export LOCAL_DEFAULT_HAIKU_MODEL=qwen2.5:7b      # 快速任务
export LOCAL_DEFAULT_SONNET_MODEL=qwen2.5:14b    # 均衡任务
export LOCAL_DEFAULT_OPUS_MODEL=qwen2.5:72b      # 复杂任务

# 启用 local provider
export CLAUDE_CODE_USE_LOCAL=1
bun run dev
```

### 方式三：通过 settings.json 配置

编辑 `~/.claude/settings.json`：

```json
{
  "modelType": "local",
  "env": {
    "LOCAL_BASE_URL": "http://localhost:11434/v1",
    "LOCAL_API_KEY": "ollama",
    "LOCAL_DEFAULT_HAIKU_MODEL": "qwen2.5:7b",
    "LOCAL_DEFAULT_SONNET_MODEL": "qwen2.5:14b",
    "LOCAL_DEFAULT_OPUS_MODEL": "qwen2.5:72b"
  }
}
```

### 方式四：通过 `/provider` 命令切换

在 REPL 中随时切换 provider：

```
/provider local      # 切换到本地模型
/provider anthropic  # 切换回 Anthropic
/provider            # 查看当前 provider
```

### 快速上手示例（Ollama）

```bash
# 1. 安装并启动 Ollama
brew install ollama
ollama serve

# 2. 拉取模型
ollama pull qwen2.5:14b

# 3. 配置并启动 numclaw
LOCAL_BASE_URL=http://localhost:11434/v1 \
LOCAL_API_KEY=ollama \
LOCAL_MODEL=qwen2.5:14b \
CLAUDE_CODE_USE_LOCAL=1 \
bun run dev
```

### 模型 ID 解析优先级

```
LOCAL_MODEL（全局覆盖）
  └─ LOCAL_DEFAULT_OPUS_MODEL / LOCAL_DEFAULT_SONNET_MODEL / LOCAL_DEFAULT_HAIKU_MODEL（按角色）
       └─ 透传原始 Anthropic 模型 ID（适用于兼容代理）
```

> ℹ️ 本地模型通过 OpenAI Chat Completions 协议通信，与 `openai` provider 共享底层 SDK，但使用独立的环境变量（`LOCAL_*`）避免与 OpenAI 配置冲突。

---

## Feature Flags

所有功能开关通过 `FEATURE_<FLAG_NAME>=1` 环境变量启用，例如：

```bash
FEATURE_BUDDY=1 FEATURE_FORK_SUBAGENT=1 bun run dev
```

各 Feature 的详细说明见 [`docs/features/`](docs/features/) 目录，欢迎投稿补充。

## VS Code 调试

TUI (REPL) 模式需要真实终端，无法直接通过 VS Code launch 启动调试。使用 **attach 模式**：

### 步骤

1. **终端启动 inspect 服务**：
   ```bash
   bun run dev:inspect
   ```
   会输出类似 `ws://localhost:8888/xxxxxxxx` 的地址。

2. **VS Code 附着调试器**：
   - 在 `src/` 文件中打断点
   - F5 → 选择 **"Attach to Bun (TUI debug)"**


## Teach Me 学习项目

我们新加了一个 teach-me skills, 通过问答式引导帮你理解这个项目的任何模块。(调整 [sigma skill 而来](https://github.com/sanyuan0704/sanyuan-skills))

```bash
# 在 REPL 中直接输入
/teach-me Claude Code 架构
/teach-me React Ink 终端渲染 --level beginner
/teach-me Tool 系统 --resume
```

### 它能做什么

- **诊断水平** — 自动评估你对相关概念的掌握程度，跳过已知的、聚焦薄弱的
- **构建学习路径** — 将主题拆解为 5-15 个原子概念，按依赖排序逐步推进
- **苏格拉底式提问** — 用选项引导思考，而非直接给答案
- **错误概念追踪** — 发现并纠正深层误解
- **断点续学** — `--resume` 从上次进度继续

### 学习记录

学习进度保存在 `.claude/skills/teach-me/` 目录下，支持跨主题学习者档案。

