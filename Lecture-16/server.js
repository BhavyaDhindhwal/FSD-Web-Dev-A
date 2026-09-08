const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000;

const logMiddleware = (req, res, next) => {  //custom middleware 
    console.log("Request URL:", req.url , "Request Method:", req.method,"Date:", new Date().toLocaleString() );
    next();
}

const apiCheckMiddleware = (req, res, next) => {  //custom middleware
    if (req.query.API_KEY == '12345') {
        next();
    } else {
        res.status(401).send('Unauthorized: Invalid API Key');
    }
}
app.use(morgan('dev'));
// app.use(logMiddleware); // global middleware
// app.use(apiCheckMiddleware);
app.get('/', (req, res) => {
    console.log("Hello World!");
    // res.send('Hello World!');
    res.send('Hello World!');
});

app.get("/students" , (req, res) => {
    console.log("Hello Students");
    res.send("Hello Students");
});
app.get("/students", (req, res) => {
    console.log("Hello Students");
    res.send("Hello Students");

});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);});        
 