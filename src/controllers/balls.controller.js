const Controller = require('../base/controller')
const ballsModel = require('../models/balls')

class BallsController extends Controller {
  constructor() {
    super(ballsModel)
  }
}

module.exports = new BallsController()
