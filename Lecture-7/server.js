const http = require("http");

const users=[
    {id:1, name:"Deven", email:"GZDlC@example.com"},
    {id:2, name:"Ravi", email:"ravi@com"},
    {id:3, name:"alex", email:"ravi@com"},
    {id:4, name:"vasu", email:"ravi@com"},]

const server = http.createServer((req, res) => {
    if(req.url=="/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to Home Page</h1>");
        res.end();
    }else if(req.url=="/about"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to About Page</h1>");
        res.end();
    }else if(req.url=="/users" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "application/json"});
        
        res.write(JSON.stringify(users));
        res.end();
    }else if(req.url=="/users/count" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "application/json"});
        const response={
            success:true,
            userscount:users.length
        }
        res.write(JSON.stringify(response));
        res.end();
    }else if( req.method==="POST" && req.url=="/users"){
        try{
            let body="";
        req.on("data", (chunk) => {
            body+=chunk;
        });
        req.on("end", () => {
            const user=JSON.parse(body);
            users.push(user);
            res.writeHead(201, {"Content-Type": "application/json"});
            res.write(JSON.stringify(user));
            res.end();
        });
        }catch(err){
            console.log(err);
             res.writeHead(201, {"Content-Type": "application/json"});
            res.write({
                success:false,
                message:err.message
            });
            res.end();   
        }

    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h1>404 Page Not Found</h1>");
        res.end();
    }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});