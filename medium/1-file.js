const fs = require("fs");

fs.readFile('1-file.text',"UTF-8",(err,data) =>{
    let str = data.replace(/\s+/g, ' ').trim();
    fs.writeFile('1-file.text',str,(err)=>{
        if(err)
        {
            console.log("File not updated");
        }
        else
        {
            console.log("File successfully updated");
        }
    })
})