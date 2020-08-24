var http = require("http");
var urlMod = require("url");


var requestedPort = 8080;
if (process.argv[2] !== undefined) {
	requestedPort = parseInt(process.argv[2], 10);
}

var server = http.createServer(function(req, res) {

	if (req.url === '/favicon.ico') {
		res.writeHead(200, {
			'Content-Type': 'image/x-icon'
		});
		res.end();
		return;
	}


	var urlStr = req.url;
	var urlObj = urlMod.parse(req.url, true);
	var pathname = urlObj.pathname.toLowerCase();


	var query = urlObj.query;
	var iso = query.iso;

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	var date = new Date(iso);

	var dataObj = null;
	if (pathname === "/api/parsetime") {
		dataObj = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		};
	}
	else if (pathname === "/api/unixtime") {
		dataObj = {
			"unixtime": date.getTime()
		};
	}
	else {
		res.write("No data here!");
	}

	// JSON
	if (dataObj !== null) {
		var dataToSend = JSON.stringify(dataObj);
		res.write(dataToSend);
	}

	res.end();

});

server.listen(requestedPort);
// const http = require('http')

//function parsetime (time) {
    //return {
      //hour: time.getHours(),
      //minute: time.getMinutes(),
      //second: time.getSeconds()
    //}
  //}

  //function unixtime (time) {
  //  return { unixtime: time.getTime() }
  //}

  //const server = http.createServer(function (req, res) {
   // const parsedUrl = new URL(req.url, 'http://example.com')
    //const time = new Date(parsedUrl.searchParams.get('iso'))
    //let result

   // if (/^\/api\/parsetime/.test(req.url)) {
     // result = parsetime(time)
    //} else if (/^\/api\/unixtime/.test(req.url)) {
     // result = unixtime(time)
    //}

   // if (result) {
      //res.writeHead(200, { 'Content-Type': 'application/json' })
      //res.end(JSON.stringify(result))
    //} else {
     // res.writeHead(404)
     // res.end()
    //}
  //})
  //server.listen(Number(process.argv[2]))
