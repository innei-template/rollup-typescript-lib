//@ts-check
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

// import esbuild from 'rollup-plugin-esbuild'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

// import { babel } from '@rollup/plugin-babel'

import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const packageJson = require('./package.json')

const umdName = packageJson.name

const globals = {
  ...packageJson.devDependencies,
}

const dir = 'build'

/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = [
  {
    input: 'src/index.ts',
    // ignore lib
    external: [
      'react',
      'react-dom',
      'lodash',
      'lodash-es',
      ...Object.keys(globals),
    ],

    output: [
      {
        file: dir + '/index.umd.js',
        format: 'umd',
        sourcemap: true,
        name: umdName,
      },
      {
        file: dir + '/index.umd.min.js',
        format: 'umd',
        sourcemap: true,
        name: umdName,
        plugins: [terser()],
      },
      {
        file: dir + '/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: dir + '/index.cjs.min.js',
        format: 'cjs',
        sourcemap: true,
        plugins: [terser()],
      },
      {
        file: dir + '/index.esm.js',
        format: 'es',
        sourcemap: true,
      },
      {
        file: dir + '/index.esm.min.js',
        format: 'es',
        sourcemap: true,
        plugins: [terser()],
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs({ include: 'node_modules/**' }),
      typescript({ tsconfig: './src/tsconfig.json', declaration: false }),
      // esbuild({
      //   include: /\.[jt]sx?$/,
      //   exclude: /node_modules/,
      //   sourceMap: false,
      //   minify: process.env.NODE_ENV === 'production',
      //   target: 'es2017',
      //   jsxFactory: 'React.createElement',
      //   jsxFragment: 'React.Fragment',
      //   define: {
      //     __VERSION__: '"x.y.z"',
      //   },
      //   tsconfig: './src/tsconfig.json',
      //   loaders: {
      //     '.json': 'json',
      //     '.js': 'jsx',
      //   },
      // }),
      // @ts-ignore
      peerDepsExternal(),
      // babel({}),
    ],

    treeshake: true,
  },
]

export default config
