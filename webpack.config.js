const webpack = require('webpack');


module.exports = (env, options) => {

  const prod = (options.mode === 'production');
  console.log(`Production mode': ${prod}`);

  let plugins, outputFilename;

  //Production mode
  if (prod) {

    plugins = [];
    outputFilename = 'o.min.js';

  } else

  //Development mode
  {
    
    plugins = [
      new webpack.HotModuleReplacementPlugin()
    ];
    outputFilename = 'bundle.js'

  }

  return {
    entry: [
      './src/o.js'
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: outputFilename
    },
    plugins: plugins,
    devServer: {
      contentBase: './',
      hot: true
    }
  }
}
