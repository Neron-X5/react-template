const config = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    },
    {
      name: 'ReactTemplate',
      file: 'dist/bundle.umd.js',
      format: 'umd'
    }
  ]
};

export default config;
