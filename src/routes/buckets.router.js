const express = require('express')
const router = express.Router()
const bucketController = require('../controllers/bucket.controller')

router.get('/fill-buckets', bucketController.fillBuckets)
router.route('/:id').get(bucketController.view).delete(bucketController.delete)
router.route('/').post(bucketController.create).get(bucketController.list).delete(bucketController.trash)

module.exports = router
