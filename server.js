const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
 
    console.log(req.url,req.method);
    res.setHeader('content-Type','text/html')
   //sending  an html file
   fs.readFile('./Views/index.html',(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else 
    {
        //res.write(data);
        res.end(data);
    }
   })
});//as an argument it takes a call back function


server.listen(3000,'localhost',()=>{
    console.log('listning for request on port 3000');
});

 