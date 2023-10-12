const { formatFloat } = require('../helpers/format')
const { extractTimeline } = require('./extract')
const { extractTimespan } = require('./extract')

/**
 * Attempts to parse raw cURL output,
 * converts metric values into floats.
 * @param json - json cURL output.
 * @returns parsed cURL output.
 */
function parseRaw(json) {
  const clone = structuredClone(json)
  Object.keys(clone).forEach((key) => {
    const val = parseFloat(clone[key])
    clone[key] = formatFloat(val)
  })
  return clone
}

/**
 * Attempts to process raw cURL output,
 * and to calculate metrics based on it.
 * @param raw  - cURL string output.
 * @returns parsed network metrics.
 */
module.exports = function (raw) {
  const data = parseRaw(JSON.parse(raw))
  const timeline = extractTimeline(data)
  const timespan = extractTimespan(data)
  return { timeline, timespan, }
}