//here global is the global object just like window in the browser js
// console.log(global);

const os=require('os');
console.log(os.platform(),os.homedir());

//lets talk about ho to read and write files using fs module
const fs = require("fs");
// reading using fs module 
//Its is async in nature
fs.readFile('./blog.txt',(err,data)=>{
    if(err){
        console.log(err);}
        console.log(data);
});

//writing files and deletting file
fs.writeFile('./blog.txt','hello,world',()=>{
    console.log("file written successfully");
});
// dicrectories
if(!fs.existsSync('./assets'))
{fs.mkdir('./assets',(err)=>{
if(err) {console.log(err);}
console.log(`file created succesfully`);
});}
else {
    fs.rmdir('./assets',(err)=>{
        if (err){console.log(err);}
        console.log("file deleted successfuly");
    })
}