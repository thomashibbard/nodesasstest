var express = require('express')
	, path = require('path')
	, sassMiddleware = require('node-sass-middleware')
	, app = express()
	, port = 3000;

app.listen(port, function(){
	console.log('the server is on %d', port);
});

app.get('/', function(req, res){
	res.sendFile( __dirname + '/public/index.html');
});

var srcPath = __dirname + '/sass/';
var destPath = __dirname + '/public/styles';

app.use('/styles', sassMiddleware({
	src: srcPath,
	dest: destPath,
	// debug: true,
	// outputStyle: 'compressed'
}));

app.use(express.static(path.join(__dirname, 'public')));