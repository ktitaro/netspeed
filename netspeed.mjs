import 'zx/globals'

const url = 'https://ozon.ru/'
const template = `{
  "time_appconnect": %{time_appconnect},
  "time_connect": %{time_connect},
  "time_namelookup": %{time_namelookup},
  "time_pretransfer": %{time_pretransfer},
  "time_redirect": %{time_redirect},
  "ttfb": %{time_starttransfer},
  "ttlb": %{time_total}
}`

const output = await $`
  curl -L \
    --silent \
    --show-error \
    --output /dev/null \
    --write-out ${template} \
    ${url}
`

const data = JSON.parse(output.stdout)
console.log(data)