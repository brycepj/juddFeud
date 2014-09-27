var http = require('http');
var q = require('q');
var v = require('./validation');
var u = require('./url');


function request(options) {

	var deferred = q.defer();

	var options = {
		host: u.getHost(),
		path: u.buildRequestPath(options.route),
		method: v.method(options.method),
	};

	var req = http.request(options, function(res) {
		res.on('data', function(data) {
			deferred.resolve(data);
		});
	});

	req.on('error', function(e) {
	  deferred.reject(e);
	});

	return deferred.promise;
}


module.exports = {
	request : request,
};