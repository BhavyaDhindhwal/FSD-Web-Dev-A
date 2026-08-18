const http = require("http");

const data=[{name:"Deven",age:21,city:"Rajkot"},
            {name:"Rohit",age:22,city:"Ahmedabad"},
            {name:"Jay",age:23,city:"Surat"}];
const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    res.writeHead(200, { "Content-Type": "application/json" });
    // res.write(`<h1>Hello from http </h1>`);
    // res.write(`<h1>Hello from http </h1>`);
    res.end(JSON.stringify(data));
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});