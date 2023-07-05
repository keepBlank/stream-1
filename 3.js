const fs = require('fs')
const http = require('http')

const server = http.createServer();
server.on('request',(request,response)=>{
    const stream = fs.createReadStream('./big_file.txt')
    stream.pipe(response)
    stream.on('end',()=> console.log('done'))
})

server.listen(8888)

