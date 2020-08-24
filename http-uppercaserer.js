var http = require("http");
var map = require("through2-map");


var requestedPort = 8080;
if (process.argv[2] !== undefined) {
	requestedPort = parseInt(process.argv[2], 10);
}

var server = http.createServer(function(req, res) {

	if (req.method != "POST") {
		res.end("POST method requested!");
		return;
	}

	var upperCaseMap = map(function(chunk) {
		return chunk.toString().toUpperCase();
	});

	var valueToReturn = req.pipe(upperCaseMap);

	valueToReturn.pipe(res);

});

server.listen(requestedPort);