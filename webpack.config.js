const path = require('path');

module.exports = function() {
  const dev = true;

  return {
    mode: dev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: dev ? 'mp.js' : 'mp.min.js',
      sourceMapFilename: dev ? 'mp.map' : 'mp.min.map',
      libraryTarget: 'umd',
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/i,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    devServer: {
      port: 8000,
      open: true,
    },
  };
};
