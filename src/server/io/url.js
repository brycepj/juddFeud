function buildRequestPath(options) {
	return options.path + '.json';
}
function getHost() {
	return 'https://luminous-fire-7004.firebaseio.com/';
}

module.exports = {
	buildRequestPath : buildRequestPath,
	getHost : getHost,
};