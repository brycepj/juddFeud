var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var router = express.Router();
var io = require('./io/index');


// static files
app.use(express.static(__dirname + '/static'));
app.use('/partials', express.static(__dirname + '/partials'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile('./static/index.html');
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

router.use(function(req, res, next) {
	var r = req;
	console.log('Request Made: ');
	console.log('URL: ', r.url);
	console.log('Method: ', r.method);

	next();
});

// create a Judd
// get a Judd
// update a Judd
// Delete a Judd
// Get all Judds
router.route('/judds')
	.get(function(req,res) {
		io.get().then(function() {
			console.log('fuck yeah!');
			res.json({ message: 'Successfully GOT ALL JUDDS' });
		});
	})
	.post(function(req,res) {

		var data = req.body;

		console.log(data) 

		io.create(data);
	});

router.route('/judds/:judd_id')
	.get(function(req,res) {
		res.json({ message: 'Successfully GOT' });
	})
	.put(function(req,res) {
		res.json({ message: 'Successfully PUT' });
	})
	.delete(function(req,res) {
		res.json({ message: 'Successfully DELETED' });
	})
	;

app.use('/api', router);

app.get('latest', function(req, res) {
	
});

app.post('save' , function(req, res) {
	console.log('saving something!');
	res.end();
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});