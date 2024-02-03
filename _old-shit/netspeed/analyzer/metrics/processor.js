const { convertToMs } = require('../helpers/format')
const { extractTimeline } = require('./extractors')
const { extractTimespan } = require('./extractors')

/**
 * Attempts to parse cURL's raw output.
 * @param rawData - cURL string output.
 * @returns parsed cURL data as json.
 */
function parseRaw(rawData) {
  const data = JSON.parse(rawData)
  Object.keys(data).forEach((key) => {
    const val = parseFloat(data[key])
    data[key] = convertToMs(val)
  })
  return data
}

/**
 * Attempts to post-process data received
 * from the cURL, and extracts metrics.
 * @param rawData - cURL string output.
 * @returns network metrics.
 */
module.exports = (rawData) => {
  const data = parseRaw(rawData)
  const timeline = extractTimeline(data)
  const timespan = extractTimespan(data)
  return { timeline, timespan, }
}