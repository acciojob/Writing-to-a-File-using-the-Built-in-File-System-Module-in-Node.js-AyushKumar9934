const fs = require('fs');

// TODO: Write the message "Hello, World!" to the file "output.txt"
const express=require('express')
const app=express();
fs.writeFile('./output.txt',"Hello, World!",(err)=>{
    console.log("any err if ",err);

})

app.listen(3000,()=>{
    console.log("we are linstening to port 3000")
})
