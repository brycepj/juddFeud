var u = require('./utils');

function method(str) {
	var _str = str.toLowerCase();
	var validMethods = [ 'put', 'get', 'post', 'delete' ];

	if (!u.arrHas(_str, validMethods)) {
		throw new Error('Invalid request method.')
	};
	
	return str.toUpperCase();
}



module.exports = {
	method : method,
};