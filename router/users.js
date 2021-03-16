const express = require('express')
const router = express.Router()

router.route('/users')
	.get(function(request, response){
	response.send('Get User')
	})
	.post(function(request, response){
	response.send('Post User')
	})

router.put('/users/:id', function(request, response){
	const id = request.params
	response.send(id)
})

router.delete('/users/:userId', function(request, response){
	response.send(request.params.userId)
})

module.exports = router