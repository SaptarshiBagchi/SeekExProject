const Controller = require('../base/controller')
const BucketSolver = require('../tasks/bucket_solver')
const bucketModel = require('../models/bucket')
const ballsModel = require('../models/balls')

class BucketController extends Controller {
  constructor() {
    // console.log(bucketModel)
    super(bucketModel)
  }

  fillBuckets = async (_, res, next) => {
    try {
      const buckets = await bucketModel.list({})
      const balls = await ballsModel.list({})

      const bucketSolver = new BucketSolver(buckets, balls)
      const message = {
        status: true,
        result: bucketSolver.buckets,
      }
      return res.status(200).json(message)
    } catch (e) {
      // console.log(e)
      return next(e)
    }
  }
}

module.exports = new BucketController()
