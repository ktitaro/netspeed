const { formatFloat } = require('../helpers/format')

/**
 * Extracts timings of essentials events
 * on the HTTP request timeline such as:
 * 1. When the DNS Lookup complete?
 * 2. When the TCP Handshake complete?
 * 3. When the SSL Handshake complete?
 * 4. When all the redirects complete?
 * 5. When the request was sent to the server?
 * 6. When the first byte of the response received?
 * 7. When the last byte of the response received?
 * @param data - parsed cURL output.
 * @returns HTTP request timings.
 */
function extractTimeline(data) {
  let timeline = {
    dnsLookupAt: data.timeNamelookup,
    tcpHandshakeAt: data.timeConnect,
    sslHandshakeAt: data.timeAppconnect,
  }

  // If there was no redirects, skip it.
  if (data.timeRedirect > 0) {
    const redirectedAt = data.timeRedirect
    timeline = { ...timeline, redirectedAt }
  }

  timeline = {
    ...timeline,
    requestWasSentAt: data.timePretransfer,
    timeToFirstByteAt: data.timeStarttransfer,
    timeToLastByteAt: data.timeTotal,
  }

  return timeline
}

/**
 * Extracts data to answer the questions:
 * 1. How long it took for DNS Lookup to complete?
 * 2. How long it took for TCP Handshake to complete?
 * 3. How long it took for SSL Handshake to complete?
 * 4. How long it took for server to process request?
 * @param data - parsed cURL output.
 * @returns info about timespans.
 */
function extractTimespan(data) {
  const dnsLookupTook = data.timeNamelookup
  const tcpHandshakeTook = formatFloat(data.timeConnect - data.timeNamelookup)
  const sslHandshakeTook = formatFloat(data.timeAppconnect - data.timeConnect)
  const serverProcessTook = formatFloat(data.timeStarttransfer - data.timePretransfer)
  return { dnsLookupTook, tcpHandshakeTook,sslHandshakeTook, serverProcessTook }
}

module.exports = {
  extractTimeline,
  extractTimespan,
}