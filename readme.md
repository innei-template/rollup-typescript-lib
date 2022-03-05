# Rollup Typescript library template

Please use pnpm do this.

```sh
pnpm i
```

# Usage

### Package

Bundle your source code via tsc, rollup.

```
npm run package
```

### Dev

Start dev mode by Vite.

```
npm run dev
```

### Delopy

Delopy example to GitHub Pages.

```
npm run delopy
npm run publish
```

# Additional

## Babel & React

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

## PostCSS & CSS Module

Create `postcss.config.js` in root folder, copy follow content.

```js
module.exports = {
  plugins: {
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
        'nesting-rules': false,
      },
    },
  },
}
```

And, install dependencies.

```bash
pnpm i postcss postcss-preset-env rollup-plugin-postcss -D
```

Then, add rollup plugin.

```js
// rollup.config.js
import postcss from 'rollup-plugin-postcss'

// plugins: [

postcss({})
// ],
```
