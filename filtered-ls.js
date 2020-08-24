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

//const fs = require('fs')
    //const path = require('path')

   // const folder = process.argv[2]
    //const ext = '.' + process.argv[3]

    //fs.readdir(folder, function (err, files) {
    //  if (err) return console.error(err)
     // files.forEach(function (file) {
      //  if (path.extname(file) === ext) {
        //  console.log(file)
        //}
      //})
    //})