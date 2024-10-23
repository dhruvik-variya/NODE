const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        fs.readfile("index.html", "utf8", (err, data) => {
            if(err){
                console.log(err);
            }
            else{
                res.end(data)
            }
        }) 
    }
    else if(req.url == "/login"){
        res.end("User login Successfully !!");
    }
    else if(req.url == "/signup"){
        res.end("User Signup Successfully !!");
    }
    else if(req.url == "/contact"){
        res.end("contact Successfully !!");
    }
    else if(req.url == "/services"){
        res.end("services Successfully !!");
    }
})

server.listen(8090, () => {
    console.log("Server is running on 8090");
})