var io = require('./base');
var fb = require('./firebase');

function get() {
	var req = io.request({
		route:'/judds',
		method:'GET',
	});

	return req.then(function(data) {
		console.log('Successful Get!');
		console.log(data);
	});
}
function create(user) {
	// var req = io.request({
	// 	route: '/judds',
	// 	method: 'POST',
	// 	user: user,
	// });		

	// return req.then(function() {
	// 	console.log('post request made');
	// });

	fb.users_ref.push(user);
}
function destroy(arguments) {
	// body...
}
function save(arguments) {
	// body...
}
function getAll(arguments) {
	// body...
}
// require all modules

// separate modules for each type of request
// a base request module

module.exports = {
	get : get,
	create : create,
	destroy : destroy, 
	save : save,
	getAll : getAll,
};