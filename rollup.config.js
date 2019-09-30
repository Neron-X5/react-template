import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

const production = !process.env.ROLLUP_WATCH || true;

const outputConfigs = [
  {
    file: 'dist/cjs/bundle.js',
    format: 'cjs'
  },
  {
    file: 'dist/esm/bundle.js',
    format: 'esm'
  },
  {
    file: 'dist/umd/bundle.js',
    format: 'umd',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    name: 'ReactTemplate'
  }
];

const commonConfigs = {
  external: ['react'],
  input: 'src/index.js',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    production && terser(),
    postcss({
      // extract: true,
      minimize: true
    })
  ]
};

export default outputConfigs.map(output => ({ ...commonConfigs, output }));
