import 'zx/globals'

const url = 'https://ozon.ru/'
const template = `
  time_appconnect: %{time_appconnect}
  time_connect: %{time_connect}
  time_namelookup: %{time_namelookup}
  time_pretransfer: %{time_pretransfer}
  time_redirect: %{time_redirect}
  time_starttransfer: %{time_starttransfer}
  time_total: %{time_total}
`

await $`
  curl \
    --silent \
    --show-error \
    --output /dev/null \
    --write-out ${template} \
    ${url}
`