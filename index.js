// const simple = require("./moduleExport")
// console.log(simple())
const fs = require('fs')
const http = require("http")
const port = process.env.PORT || 3000

const server = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/html')
    if(req.url == '/'){
        res.statusCode = 200
        res.end('<h1>This is home Page</h1>')
        // const data = fs.readFileSync(index.html)
        // res.end(data.toString())
    }
   else if(req.url == '/about'){
        res.statusCode = 200
        res.end('<h1>This is About Page</h1>')
    }
    else{
        res.statusCode = 404
        res.end('<h1>Page is not found</h1>')
    }

})

server.listen(port,()=>{
    console.log(`Running in port ${port}`)
})