const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' :'text/html; charset=utf-8'});
    res.write('<h1>Hello Node~!</h1>');
    res.end();
}).listen(8080, () => {
    console.log("connect 8080 port")
});