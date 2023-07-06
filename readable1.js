const { Readable } = require('stream')

const inStream = new Readable()

inStream.push('ABCDEFGHIJKLM')
inStream.push('NOPQRSTUVWXYZ')
inStream.push(null)      // no more data

// inStream.pipe(process.stdout)
inStream.on('data',(chunk)=>{
    process.stdout.write(chunk)
    console.log('写了一次数据')
})
