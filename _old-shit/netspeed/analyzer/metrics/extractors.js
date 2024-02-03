/**
 * Extracts HTTP request timeline timings
 * of the most important request events.
 * @param data - parsed cURL data.
 * @returns HTTP request timeline.
 */
exports.extractTimeline = (data) => {
  const domainLookupAt = data.timeNamelookup
  const tcpHandshakeAt = data.timeConnect
  const sslHandshakeAt = data.timeAppconnect
  const redirectDoneAt = data.timeRedirect
  const requestStartAt = data.timePretransfer
  const responseStartAt = data.timeStarttransfer
  const responseFinishAt = data.timeTotal
  return {
    domainLookupAt,
    tcpHandshakeAt,
    sslHandshakeAt,
    redirectDoneAt,
    requestStartAt,
    responseStartAt,
    responseFinishAt,
  }
}

/**
 * Extracts few very informative timespans
 * based on the data received from cURL.
 * @param data - parsed cURL data.
 * @returns timespan metrics.
 */
exports.extractTimespan = (data) => {
  const tcpHandshakeAt = data.timeConnect
  const sslHandshakeAt = data.timeAppconnect
  const requestStartAt = data.timePretransfer
  const responseStartAt = data.timeStarttransfer
  const domainLookupTook = data.timeNamelookup
  const sslHandshakeTook = (sslHandshakeAt - tcpHandshakeAt)
  const serverHandleTook = (responseStartAt - requestStartAt)
  const tcpHandshakeTook = (tcpHandshakeAt - domainLookupTook)
  return {
    domainLookupTook,
    tcpHandshakeTook,
    sslHandshakeTook,
    serverHandleTook,
  }
}