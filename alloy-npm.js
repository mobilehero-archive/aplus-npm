var path = require("path");
var _ = require('lodash');

function alloy_npm(params, directory) {
	var args = Array.prototype.slice.call(arguments);
	//console.log("args: " + JSON.stringify(args));

	directory = directory || params.event.dir.lib;
	params.logger.trace("running npm in directory: " + directory);

	var spawn = require("./spawn");
	return spawn.sync("npm", ["install"], {
		cwd: directory
	});
}

module.exports = alloy_npm;