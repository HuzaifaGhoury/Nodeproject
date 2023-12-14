const fs = require("fs");
const http = require("http");
const data = require('./data')
const port = process.env.PORT || 3100;
const express = require('express')

//HTTP ROUTES

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.statusCode = 200;
    const data = fs.readFileSync("home.html");
    res.end(data.toString());
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("<h1>This is About Page</h1>");
  } else if (req.url === "/page") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    const data = fs.readFileSync("contact.html");
    res.end(data.toString());
  } else {
    res.statusCode = 404;
    res.end("<h1>Page is not found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Running in port ${port}`);
});

//POSTMAN API

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(data));
  res.end();
}).listen(3000);

//USE EXPRESS

const app = express()
app.get('/',(req,res)=>{
    res.send("HELLO : This is home page")
})
app.get('/about',(req,res)=>{
    res.send("HELLO : This is about page")
})
app.listen(3110)