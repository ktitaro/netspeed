import 'zx/globals'

const template = `{
  "time_total": %{time_total},
  "time_connect": %{time_connect},
  "time_redirect": %{time_redirect},
  "time_appconnect": %{time_appconnect},
  "time_namelookup": %{time_namelookup},
  "time_pretransfer": %{time_pretransfer},
  "time_starttransfer": %{time_starttransfer}
}`

async function main() {
  if (!argv.u) {
    let output = 'Target url is required! '
    output += 'Please, provide the target '
    output += 'url using "-u" argument.'
    console.error(output)
    process.exit(1)
  }

  const url = argv.u
  const num = (argv.n ?? 3)
  console.log(`
    \rPreparing to analyze...
    \rTarget URL: "${url}"
    \rIterations: "${num}"
  `)

  const result = {}

  await spinner(async () => {
    const records = []
    for (let i = 0; i < num; i++) {
      const cmd = $`curl -L -S -s -o /dev/null -w ${template} ${url}`
      const res = await retry(3, () => cmd.quiet())
      records.push(JSON.parse(res.stdout))
    }
  
    const aggregate = {}
    for (const record of records) {
      const entries = Object.entries(record)
      for (const [key, val] of entries) {
        aggregate[key] = (aggregate[key] ?? [])
        aggregate[key].push(val)
      }
    }
  
    for (const key in aggregate) {
      const sum = (a, b) => a + b
      const len = aggregate[key].length
      const min = Math.min(...aggregate[key])
      const max = Math.max(...aggregate[key])
      const avg = aggregate[key].reduce(sum)/len
      result[key] = { min, max, avg }
    }
  })

  console.log(JSON.stringify(
    result, null, 2))
}

main()