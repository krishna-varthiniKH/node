const http1=require("http");//import server lib like http


const webserver=http1.createServer((req,res)=>{//create server
    res.end("hello,welcome to node");//response to client
});


const port=3500;//assign the port number for the server


webserver.listen(port,()=>{//listenting the server
    console.log("The current server is runing ");
})