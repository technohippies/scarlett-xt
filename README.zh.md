[English](README.md) | [简体中文](README.zh.md)
---

# Scarlett AI：导师、生活教练、朋友。

通过 Scarlett 增强学习、专注力和数字福祉。

**功能:**
*   **LLM 集成:** 支持 Ollama、OpenRouter 和 Venice 后端。
*   **网页剪藏:** 从网页文本生成抽认卡和完形填空，用于记忆和语言学习。
*   **书签:** 保存带有上下文的链接并执行语义搜索。
*   **浏览器历史分析:** 对浏览活动进行分类（成瘾性、分散注意力、生产性、中性）。
*   **专注追踪:** 监控工作期间的上下文切换。

**进行中:**
*   浏览器内 FSRS 抽认卡系统。
*   改进的聊天界面和功能。
*   对 Anki、Obsidian、AnyNote 的同步支持。
*   通过 Lit Protocol 进行安全云备份。

## 设置

1.  安装依赖项：
    ```sh
    pnpm install
    ```

## 开发

*   **Chrome:** 运行开发服务器并将 `dist/` 目录作为未打包的扩展加载。
    ```sh
    pnpm dev
    ```
*   **Firefox:** 为 Firefox 运行开发服务器并将 `dist/` 目录作为临时附加组件加载。
    ```sh
    pnpm dev:firefox
    ```

## 构建

*   **Chrome:** 在 `.output/chrome-mv3` 目录中创建生产构建。
    ```sh
    pnpm build
    ```
*   **Firefox:** 在 `.output/firefox-mv3` 目录中创建生产构建。
    ```sh
    pnpm build:firefox
    ```

## 打包

*   **Chrome:** 在 `.output/chrome-mv3.zip` 中为 Chrome Web Store 创建一个 zip 文件。
    ```sh
    pnpm zip
    ```
*   **Firefox:** 在 `.output/firefox-mv3.zip` 中为 Firefox Add-ons 创建一个 zip 文件。
    ```sh
    pnpm zip:firefox
    ```

## Storybook

使用 Storybook 独立开发和测试 UI 组件。

```sh
pnpm storybook
```

*（可选：如果需要，请参阅下面有关手动设置 Storybook 的原始 README 注释）。*

---

***原始注释（供参考）：***

*Storybook 手动设置步骤（如果 `pnpm storybook` 最初不起作用）：*
1. 从此示例创建 `.storybook/vite.config.ts` 文件
2. 安装 vite 构建器：`pnpm i @storybook/builder-vite`
3. 像往常一样运行 `storybook init`：`pnpm dlx storybook@latest init`
4. 更新 `.storybook/main.ts` 以使用 `./.storybook/vite.config.ts`：
   ```diff
   framework: {
     name: "@storybook/react-vite",
     options: {
   +   builder: {
   +     viteConfigPath: ".storybook/vite.config.ts",
   +   },
     },
   },
   ```
