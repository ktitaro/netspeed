const exec = require('./helpers/exec')
const process = require('./metrics/process')
const template = require('./metrics/template')

module.exports = async function(url, num) {
  const cmd = `curl -L -S -s -o /dev/null -w '${template}' ${url}`
  const res = await Promise.all(new Array(num).fill(exec(cmd)))
  const out = res.map((val) => process(val.stdout))
  console.log(out)
}