const fs = require('fs')
const http = require('http')

const server = http.createServer();
server.on('request',(request,response)=>{
    const stream = fs.createReadStream('./big_file.txt')
    stream.pipe(response)
    // 流的暂停
    stream.pause()
    setTimeout(()=>{
        // 流的恢复
        stream.resume()
    },3000)
})

server.listen(8888)

