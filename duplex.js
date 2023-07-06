const { Duplex } = require('stream')

const inoutStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString())
        callback()
    },
    read(size){
        const char = String.fromCharCode(this.currentCharCode++)
        this.push(char)
        if(this.currentCharCode > 90){  // "Z"
            this.push(null)   // 数据推送结束
        }
    }
})

inoutStream.currentCharCode = 65 // 'A'

process.stdin.pipe(inoutStream).pipe(process.stdout)