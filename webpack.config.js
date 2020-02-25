const path = require('path');


module.exports = function() {
  const dev = false;

  return {
    mode: dev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: dev ? 'ga.js' : 'ga.min.js',
      sourceMapFilename: dev ? 'ga.map' : 'ga.min.map',
      libraryTarget: "commonjs2",
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
