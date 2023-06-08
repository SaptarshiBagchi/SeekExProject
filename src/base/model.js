const mongoose = require('mongoose')

class Model {
  constructor(entity, schema) {
    this.entity = entity
    // this.schema = new mongoose.Schema(schema)
    // console.log(entity, schema)
    this.model = mongoose.model(this.entity, new mongoose.Schema(schema))
  }

  list = async (find_query) => {
    return await this.model.find(find_query)
  }

  view = async (id) => {
    return (await this.model.findOne({ _id: id })).lean()
  }

  delete = async (id) => {
    return await this.model.deleteOne({ _id: id })
  }

  trash = async () => {
    return await this.model.deleteMany({})
  }

  save = async (fields) => {
    return await this.model.create(fields)
  }
}

module.exports = Model
