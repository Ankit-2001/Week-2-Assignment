const fs = require('fs');

fs.readFile('3-readFile.txt',"UTF-8",(err,data) => {
    console.log(data);
})