//@ts-check
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: 'src/index.ts',
  // ignore lib
  external: ['react', 'react-dom', 'lodash', 'lodash-es'],

  output: [
    {
      file: 'publish/index.umd.js',
      format: 'umd',
      name: 'shuffle-article',
      sourcemap: true,
    },
    {
      file: 'publish/index.umd.min.js',
      format: 'umd',
      name: 'shuffle-article',
      sourcemap: false,
      plugins: [terser()],
    },
    {
      file: 'publish/index.cjs.min.js',
      format: 'cjs',
      name: 'shuffle-article',
      sourcemap: false,
      plugins: [terser()],
    },
    {
      file: 'publish/index.esm.js',
      format: 'esm',
      name: 'shuffle-article',
      sourcemap: true,
    },
    {
      file: 'publish/index.esm.min.js',
      format: 'esm',
      name: 'shuffle-article',
      sourcemap: false,
      plugins: [terser()],
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs({ include: 'node_modules/**' }),
    typescript({
      tsconfig: './src/tsconfig.json',
    }),
    // babel({}),
  ],

  treeshake: true,
}

export default config
