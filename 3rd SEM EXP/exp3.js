//200-OK,201-CREATED,400-BAD RESPONSE,404-NOT FOUND,500-INTERNAL
const http=require("http");
const server=http.createServer((req,res)=>{
   res.writeHead(200,{
    "content-type":'text/plaintext',
    "Server":'nodejs'
   })
     res.end("Hello World");

})
port=3005;
server.listen(port,()=>{
   console.log(`server is running on http://localhost:${port}`);

})
