const BaseModel = require('../base/model')

class BallsModel extends BaseModel {
  constructor() {
    const schema = {
      name: { type: String, required: true },
      size: { type: Number, required: true },
      quantity: { type: Number, required: true },
    }
    super('balls', schema)
  }
}

module.exports = new BallsModel()
