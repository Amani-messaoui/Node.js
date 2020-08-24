const fs = require('fs');
const test = '.' + process.argv[3]

fs.readdir(process.argv[2], (err, data) => {
    if (err) { 
        console.error(err); 
    } else {
        data.filter(file => {
            if (file.substring(file.length - test.length) === test) {
                console.log(file)
            }
        })  
    }
});

