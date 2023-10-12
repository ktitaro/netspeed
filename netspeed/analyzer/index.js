const exec = require('./helpers/exec')
const template = require('./metrics/template')
const postProcess = require('./metrics/processor')

/**
 * Runs network audits using cURL.
 * @param url - target website URL.
 * @param num - total iterations num.
 * @returns processed network metrics.
 */
module.exports = async (url, num) => {
  const cmd = `curl -L -S -s -o /dev/null -w '${template}' ${url}`
  const resp = await Promise.all(new Array(num).fill(exec(cmd)))
  return resp.map((result) => postProcess(result.stdout))
}