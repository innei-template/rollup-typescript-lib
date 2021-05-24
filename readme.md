# Rollup Typescript library template

Please use pnpm do this.

```sh
pnpm i
```

# Usage

### Package

Bundle your source code via tsc, rollup.

```
yarn package
```

### Dev

Start dev mode by Vite.

```
yarn dev
```

### Delopy

Delopy example to GitHub Pages.

```
yarn delopy
yarn publish
```

# Additional

If you want to bundle React JSX with rollup. Add additional packages.

```
pnpm i -D @babel/preset-react @babel/core @rollup/plugin-babel
```

And, un-comment this in `.babelrc`.

```json
{
  "presets": ["@babel/preset-react"]
}
```

Un-comment this in `rollup.config.js`

```js
import { babel } from '@rollup/plugin-babel'

// ...

plugins: [
    // ...
   babel({}),
  ],
//...
```
