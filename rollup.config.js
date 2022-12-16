// @ts-check
import { readFileSync } from 'fs'
import esbuild, { minify } from 'rollup-plugin-esbuild'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import css from 'rollup-plugin-postcss'

import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

const packageJson = JSON.parse(
  readFileSync('./package.json', { encoding: 'utf-8' }),
)

const umdName = packageJson.name

const globals = {
  // @ts-ignore
  ...(packageJson?.dependencies || {}),
}

const dir = 'dist'

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
        file: `${dir}/index.umd.js`,
        format: 'umd',
        sourcemap: true,
        name: umdName,
      },
      {
        file: `${dir}/index.umd.min.js`,
        format: 'umd',
        sourcemap: true,
        name: umdName,
        plugins: [minify()],
      },
      {
        file: `${dir}/index.iife.min.js`,
        format: 'iife',
        name: umdName,
        plugins: [minify()],
      },
      {
        file: `${dir}/index.cjs`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${dir}/index.min.cjs`,
        format: 'cjs',
        sourcemap: true,
        plugins: [minify()],
      },
      {
        file: `${dir}/index.js`,
        format: 'esm',
        sourcemap: true,
      },
      {
        file: `${dir}/index.min.js`,
        format: 'esm',
        sourcemap: true,
        plugins: [minify()],
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs({ include: 'node_modules/**' }),
      typescript({
        tsconfig: './tsconfig.build.json',
        declaration: false,
      }),
      css({
        // extract: true,
      }),
      esbuild({
        include: /\.[jt]sx?$/,
        exclude: /node_modules/,
        sourceMap: false,
        minify: process.env.NODE_ENV === 'production',
        target: 'es2017',
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
        tsconfig: './tsconfig.json',
        loaders: {
          '.json': 'json',
          '.js': 'jsx',
        },
      }),
      // @ts-ignore
      peerDepsExternal(),
    ],

    treeshake: true,
  },
]

export default config
