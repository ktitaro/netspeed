/**
 * Template that will be used for the cURL `--write-out`:
 * https://everything.curl.dev/usingcurl/verbose/writeout
 */
module.exports = JSON.stringify({
  timeTotal: '%{time_total}',
  timeConnect: '%{time_connect}',
  timeRedirect: '%{time_redirect}',
  timeNamelookup: '%{time_namelookup}',
  timeAppconnect: '%{time_appconnect}',
  timePretransfer: '%{time_pretransfer}',
  timeStarttransfer: '%{time_starttransfer}',
})