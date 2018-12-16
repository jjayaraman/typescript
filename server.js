const http = require('http')

http.createServer((req, res) => {
    res.end('server strted and listening...')
}).listen(3000);