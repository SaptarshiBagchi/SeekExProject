const express = require('express')
const app = express()
const bucketRouter = require('./src/routes/buckets.router')
const ballsRouter = require('./src/routes/balls.router')
const connectDb = require('./db')
/**
 * The basic setup
 */
app.use(express.json())

//------------The routes--------

app.use('/buckets', bucketRouter)
app.use('/balls', ballsRouter)

// ----------------------------

/**
 * The 404 router
 */

app.get('*', (_, res, next) => {
  return res.status(404).json({
    success: false,
    message: 'It seems you have landed on the wrong page',
  })
})

/**
 * The error handler function
 */

app.use((err, _, res, _2) => {
  console.log(err)
  const errorMessage = {
    success: false,
    message: 'Oops! Something went wrong',
    error: err,
  }
  return res.status(500).json(errorMessage)
})
app.listen(3000, async () => {
  console.log('Server started')
  await connectDb()
})
