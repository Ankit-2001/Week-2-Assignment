const fs = require('fs');

fs.readFile('3-readFile.txt',"UTF-8",(err,data) => {
    let str = data;
    str += " I love watching cricket. Virat kohli is my favourite player.";
    fs.writeFile('3-readFile.txt', str, (writeErr) => {
        if (writeErr) {
            console.error('Error writing to file:', writeErr);
        } else {
            console.log('File successfully updated.');
        }
    });
})