const fs  = require('fs')
const s = fs.createReadStream('./big_file.txt')
const stream = require('stream')
const events = require('events')

// console.log(s);
// console.log(stream.Readable.prototype)
console.log(events.EventEmitter.prototype);
