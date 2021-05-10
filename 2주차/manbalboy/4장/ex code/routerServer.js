const http = require('http');
const user = {}; //db대신

http.createServer(async (req, res) => {
    try {
        console.log(req.method, req.url);
        if(req.method === 'GET') {
            if(req.url === '/') {
                res.writeHead(200, {'Content-Type' :'application/json; charset=utf-8'});
                return res.end(JSON.stringify({root : 1}));
            } else if(req.url === '/users') {
                res.writeHead(200, {'Content-Type' :'application/json; charset=utf-8'});
                return res.end(JSON.stringify(user));
            }
        } else if(req.method === 'POST') {
            if(req.url === '/users') {

                let body ='';
                req.on('data' , (data) =>{
                    body += data;
                });

                return req.on('end', ()=>{
                    const {name} = JSON.parse(body);
                    const id = Date.now();
                    user[id] = name;
                    res.writeHead(201);
                    return res.end(JSON.stringify(user));
                })
            }
        } else if(req.method === 'PUT') {
            if(req.url.startsWith('/user/') ) {
                const key = req.url.split('/')[2];
                let body = '';
                req.on('data' , (data) =>{
                    body += data;
                });

                return req.on('end', ()=>{
                    const {name} = JSON.parse(body);
                    user[key] = name;
                    res.writeHead(201);
                    return res.end(JSON.stringify(user));
                })
            }
        } else if(req.method === 'DELETE') {
            if(req.url.startsWith('/user/') ) {
                const key = req.url.split('/')[2];
                delete user[key];

                return res.end(JSON.stringify(user));
            }
        }

        res.writeHead(404);
        return res.end(404);
    } catch (err) {
        console.log(err);
        res.writeHead(500);
        return res.end(err);
    }
}).listen(8080, () => {
    console.log("connect 8080 port")
});