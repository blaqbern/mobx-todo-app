const path = require('path')
const express = require('express')
const app = express()

const port = 8080

const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const compiler = webpack(webpackConfig)

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
    },
  })
)
app.use( require('webpack-hot-middleware')(compiler) )

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log('DEV_SERVER ERROR:', err)
  } else {
    console.log(`Development server listening on port ${port}`)
  }
})
