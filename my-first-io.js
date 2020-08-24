const fs = require('fs');
var filePath = process.argv[2];
var output = fs.readFileSync(filePath);
output = output.toString().split('\n');
console.log(output.length - 1);

//const fs = require('fs')

    //const contents = fs.readFileSync(process.argv[2])
    //const lines = contents.toString().split('\n').length - 1
    //console.log(lines)