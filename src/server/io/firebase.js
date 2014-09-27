var fb = require('firebase');

var users = new fb('https://luminous-fire-7004.firebaseio.com/judds');

function users_ref() {
	return users;
}

module.exports = {
	users_ref : users,
};