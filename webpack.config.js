const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${__dirname}/public/index.html`
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
