const express = require('express')
const userRouter = require('./router/users')
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var myLogger = function (require, response, next) {
	console.log('LOGGED')
	// request.time = new Date()
	next()
}

app.use(myLogger)

app.set('view engine', 'ejs')
app.use('/assets', express.static('public'))

app.get('/', function(request, response) {
	const kelas = {
		id: 1,
		nama: 'JavaScript'
		// date: request.time.toString()
	}

	// console.log('Hello World !')
	response.render('pages/index', {kelas: kelas})
})

app.get('/about', function(request, response){
	response.render('pages/about')
})

app.get('/galeri', function(request, response){
	response.render('pages/galeri')
})

app.get('/contact', function(request, response){
	response.render('pages/contact')
})

app.use(userRouter)

app.listen(3000, function(){
	console.log('server baik-baik saja boss !')
})