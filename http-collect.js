const http = require('http');
const url = process.argv[2].toString();
const bl = require('bl');
http.get(url, function(response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
            }
            data = data.toString()
            console.log(data.length)
console.log(data)
}))
});
//const http = require('http')
//const bl = require('bl')

//http.get(process.argv[2], function (response) {
 // response.pipe(bl(function (err, data) {
   // if (err) {
     // return console.error(err)
    //}
    //data = data.toString()
    //console.log(data.length)
    //console.log(data)
  //}))
//})