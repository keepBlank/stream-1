const { Readable } = require('stream')

// 输出 A-Z
const inStream = new Readable({
    read(size){
        const char = String.fromCharCode(this.currentCharCode++)
        this.push(char)
        console.log(`推了${char}`)
        if(this.currentCharCode > 90){  // "Z"
            this.push(null)   // 不再推了
        }
    }
})

inStream.currentCharCode = 65  // “A”

inStream.pipe(process.stdout)