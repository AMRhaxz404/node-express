const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/user')

router.route('/users')
	.get(usercontroller.index)
	.post(usercontroller.store)

router.get('/users/create', usercontroller.create)
router.put('/users/:id', usercontroller.update)
router.delete('/users/:userId', usercontroller.delete)

module.exports = router
