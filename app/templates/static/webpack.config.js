const {join} = require('path'),
  ManifestPlugin = require('webpack-manifest-plugin'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, argv) => ({
  name:'browser',
  entry: {
    'app': join(__dirname, 'src', 'app.js')
  },
  output: {
    path: join(__dirname, 'htdocs', 'js'),
    filename: `[name]_${require('./package.json').version.replace(/\./g, '-')}.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                'targets': 'last 2 versions, ie 10, safari >= 7'
              }],
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        // Match woff2 and patterns like .woff?v=1.1.1.
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            mimetype: 'application/font-woff',
            name: 'fonts/[name].[ext]',
            publicPath: 'js/',
          },
        },
      },
    ]
  },
  plugins:[
    new ManifestPlugin({
      fileName:join(__dirname, 'js', 'lib', 'manifest.json'),
      publicPath:'js/'
    }),
    new CleanWebpackPlugin()
  ],
  devtool: argv.mode === 'development' ? 'source-map' : false,
  performance: {
    maxEntrypointSize: 2000000,
    maxAssetSize: 2000000
  }
})
