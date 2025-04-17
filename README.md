---
name: Storybook
description: Integrate Storybook with WXT to develop components.
---

```sh
pnpm i
pnpm storybook
```

To add storybook:

1. Create the `.storybook/vite.config.ts` file from this example
2. Install the vite builder
   ```sh
   pnpm i @storybook/builder-vite
   ```
3. Run `storybook init` like usual
   ```sh
   pnpm dlx storybook@latest init
   ```
4. Update `.storybook/main.ts` to use `./.storybook/vite.config.ts` instead of `./vite.config.ts`
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


because of electric-sql pglite wasm not working with wxt
    mkdir -p /media/xo42/th427/Code/scarlett-wxt-storybook/public/@electric-sql/pglite
    # Core JS file
    cp /media/xo42/th427/Code/scarlett-wxt-storybook/node_modules/@electric-sql/pglite/index.js /media/xo42/th427/Code/scarlett-wxt-storybook/public/@electric-sql/pglite/

    # Core WASM and data
    cp /media/xo42/th427/Code/scarlett-wxt-storybook/node_modules/@electric-sql/pglite/postgres.wasm /media/xo42/th427/Code/scarlett-wxt-storybook/public/@electric-sql/pglite/
    cp /media/xo42/th427/Code/scarlett-wxt-storybook/node_modules/@electric-sql/pglite/postgres.data /media/xo42/th427/Code/scarlett-wxt-storybook/public/@electric-sql/pglite/

    # JS chunks (use wildcard)
    cp /media/xo42/th427/Code/scarlett-wxt-storybook/node_modules/@electric-sql/pglite/chunk-*.js /media/xo42/th427/Code/scarlett-wxt-storybook/public/@electric-sql/pglite/

    # Vector extension directory (use -R for recursive)
    cp -R /media/xo42/th427/Code/scarlett-wxt-storybook/node_modules/@electric-sql/pglite/vector /media/xo42/th427/Code/scarlett-wxt-storybook/public/@electric-sql/pglite/

    # Worker directory (use -R for recursive)
    cp -R /media/xo42/th427/Code/scarlett-wxt-storybook/node_modules/@electric-sql/pglite/worker /media/xo42/th427/Code/scarlett-wxt-storybook/public/@electric-sql/pglite/

    # Templating JS file (if needed)
    cp /media/xo42/th427/Code/scarlett-wxt-storybook/node_modules/@electric-sql/pglite/templating.js /media/xo42/th427/Code/scarlett-wxt-storybook/public/@electric-sql/pglite/