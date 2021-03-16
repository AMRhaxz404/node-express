const express = require('express')
const router = express.Router()

cons usercontroller = require('../controllers/user')

router.route('/users')
	.get(usercontroller.index)
	.post(usercontroller.store)

router.put('/users/:id', usercontroller.update)
router.delete('/users/:userId', usercontroller.delete)

module.exports = router