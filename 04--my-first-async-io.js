const fs = require('fs');
const file = process .argv[2];
output = fs.readFile(file, 'utf8', function(err, content){
    console.log(content.split('\n').length - 1);
});
