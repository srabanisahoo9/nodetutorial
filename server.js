

const http = require('http')

const server=http.createServer((req, res)=>{
    if (req.url==='/'){
        res.end('welcome to my page')
    }
    if (req.url==='/about'){
        res.end('here is our short history')
    }
    res.end(`
    <h1>opps!<h1>
    <p>we cannot eem to find the page you are looking for<p>
    <a href="/">back home</a>
    `)
})
 