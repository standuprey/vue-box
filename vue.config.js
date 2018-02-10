module.exports = {
  lintOnSave: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process': {},
      }),
    ]
  }
}
