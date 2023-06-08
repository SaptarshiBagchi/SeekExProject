class Controller {
  constructor(model) {
    this.model = model
    // console.log(this.model)
  }

  list = async (_, res, next) => {
    try {
      const result = await this.model.list({})
      return res.status(200).json({
        status: true,
        message: 'List fetched successfully',
        result,
      })
    } catch (e) {
      return next(e)
    }
  }
  view = async (req, res, next) => {
    try {
      const result = await this.model.view(req.params.id)
      return res.status(200).json({
        status: true,
        message: 'Document fetched successfully',
        result: result,
      })
    } catch (e) {
      return next(e)
    }
  }
  create = async (req, res, next) => {
    try {
      const result = await this.model.save(req.body)
      return res.status(200).json({
        status: true,
        message: 'Document saved successfully',
        result,
      })
    } catch (e) {
      return next(e)
    }
  }

  delete = async (req, res, next) => {
    try {
      const result = await this.model.delete(req.params.id)
      return res.status(200).json({
        status: true,
        message: 'Document deleted successfully',
        result,
      })
    } catch (e) {
      return next(e)
    }
  }

  trash = async (req, res, next) => {
    try {
      const result = await this.model.trash()
      return res.status(200).json({
        status: true,
        message: 'Collection trashed successfully',
        result,
      })
    } catch (e) {}
  }
}

module.exports = Controller
