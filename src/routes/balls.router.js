const express = require('express')
const router = express.Router()
const ballsController = require('../controllers/balls.controller')

router.route('/:id').get(ballsController.view).delete(ballsController.delete)
router.route('/').post(ballsController.create).get(ballsController.list).delete(ballsController.trash)

module.exports = router
