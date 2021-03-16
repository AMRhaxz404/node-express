let users = [
	{id: 1, name: 'Muhammad', email: 'muhammad@gmail.com'},
	{id: 2, name: 'amrin', email: 'amrin@gmail.com'}
]

module.exports = {
	index: function(request, response){
		if(users.length > 0) {
			response.json({
				status: true,
				method: request.method,
				url: request.url
			})
		} else {
			response.json({
				status: false,
				message: 'Data User Masih Kosong !'
			})
		}
		
		},
		store: function(request, response){
		users.push(request.body)
		response.send({
			status: true,
			data: users,
			message: 'Data User Berhasil Di Simpan !',
			method: request.method,
			url: request.url
		})
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