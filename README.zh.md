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

## ElectricSQL / PGlite 解决方法

**问题:** `@electric-sql/pglite` 所需的 WASM 文件未被 WXT 的默认构建过程正确处理。

**解决方法:** 将必要的 `@electric-sql/pglite` 文件（JS、WASM、数据、块、向量、工作线程）手动复制到 `public/@electric-sql/pglite/` 目录中。这确保它们包含在最终的扩展构建中，尽管它绕过了这些特定文件的标准依赖项管理。

*（请参阅下面有关使用的特定 `cp` 命令的原始 README 注释）。*

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

*ElectricSQL 手动复制命令：*
```sh
# 注意：原始路径是绝对路径，如有必要请进行调整
TARGET_DIR="./public/@electric-sql/pglite"
SOURCE_DIR="./node_modules/@electric-sql/pglite"
mkdir -p "$TARGET_DIR"
cp "$SOURCE_DIR/index.js" "$TARGET_DIR/"
cp "$SOURCE_DIR/postgres.wasm" "$TARGET_DIR/"
cp "$SOURCE_DIR/postgres.data" "$TARGET_DIR/"
cp "$SOURCE_DIR/chunk-*.js" "$TARGET_DIR/"
cp -R "$SOURCE_DIR/vector" "$TARGET_DIR/"
cp -R "$SOURCE_DIR/worker" "$TARGET_DIR/"
cp "$SOURCE_DIR/templating.js" "$TARGET_DIR/"
``` 