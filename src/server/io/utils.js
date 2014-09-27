function arrHas(str, arr) {
	var idx = arr.indexOf(str)
	return idx > -1 ? true : false;
}

module.exports = {
	arrHas : arrHas
};