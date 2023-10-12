const util = require('util') 
const proc = require('child_process')
const exec = util.promisify(proc.exec)
module.exports = exec