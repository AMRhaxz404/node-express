const { v4: uuid } = require('uuid')

let users = [
	{id: 1, name: 'Muhammad', email: 'muhammad@gmail.com'},
	{id: 2, name: 'amrin', email: 'amrin@gmail.com'},
	{id: 3, name: 'Mukhodas', email: 'mukhodas@gmail.com'}
]

module.exports = {
	index: function(request, response){
		response.render('pages/user/index', {users})
		},
		// show: function(request, response){
		// 	const id = request.params.id
		// 	const data = users.filter(user => {
		// 		return user.id == id
		// 	})
		// },
		create: function(request, response){
			response.render('pages/user/create')
		},
		store: function(request, response){
			users.push({
				id: uuidv4,
				name: request.body.name,
				email: request.body.email
			})

			response.send(users)
		},
		update: function(request, response){
			const id = request.params.id
			users.filter(user => {
				if(user.id == id) {
					user.id = id
					user.name = request.body.name
					user.email = request.body.email

					return user
				}
			})

		response.json({
			status: true,
			data: users,
			message: 'Data User Berhasil Di Edit !',
			method: request.method,
			url: request.url
		})
	},
	delete: function(request, response){
		let id = request.params.userId
		users = users.filter(user => user.id != id)
		response.send({
			status: true,
			data: users,
			message: 'Data User Berhasil Di Hapus !',
			method: request.method,
			url: request.url
		})
	}
}