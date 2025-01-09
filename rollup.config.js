import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

export default [
  {
    input: 'src/checkout.js',
    output: {
      name: '$checkout',
      file: 'dist/esm/checkout.js',
      format: 'esm',
    },
    plugins: [commonjs({}), resolve({})],
  },
  {
    input: 'src/checkout.js',
    output: {
      file: 'dist/cjs/checkout.js',
      format: 'cjs',
      exports: 'named',
    },
    plugins: [
      commonjs({}),
      resolve({}),
      babel({
        babelHelpers: 'bundled',
      }),
    ],
  },
  {
    input: 'src/checkout.js',
    output: [
      {
        file: 'dist/umd/checkout.js',
        format: 'umd',
        name: '$checkout',
        exports: 'named',
      },
      {
        file: 'dist/umd/checkout.min.js',
        format: 'umd',
        sourcemap: true,
        name: '$checkout',
        exports: 'named',
        plugins: [terser()],
      },
    ],
    plugins: [
      commonjs(),
      resolve({}),
      babel({
        presets: ['@babel/preset-env'],
        babelHelpers: 'bundled',
      }),
    ],
  },
]
