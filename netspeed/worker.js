const exec = require('./exec')

const template = JSON.stringify({
  timeTotal: '%{time_total}',
  timeConnect: '%{time_connect}',
  timeRedirect: '%{time_redirect}',
  timeAppconnect: '%{time_appconnect}',
  timeNamelookup: '%{time_namelookup}',
  timePretransfer: '%{time_pretransfer}',
  timeStarttransfer: '%{time_starttransfer}',
})

async function analyze(url, num) {
  const cmd = `curl -L -S -s -o /dev/null -w '${template}' ${url}`
  const res = await Promise.all(new Array(num).fill(exec(cmd)))
  const out = res.map((val) => JSON.parse(val.stdout))
  console.log(out)
}

module.exports = analyze