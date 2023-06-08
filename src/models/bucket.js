const BaseModel = require('../base/model')

class BucketModel extends BaseModel {
  constructor() {
    const schema = {
      name: { type: String, required: true },
      space: { type: Number, required: true },
      balls: { type: Array, default: [] },
    }
    super('buckets', schema)
  }
}

module.exports = new BucketModel()
