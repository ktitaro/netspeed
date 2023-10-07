# NetSpeed

Utility that helps to measure network performance metrics using cURL ✨ 
While its not recommended to rely on this tool for getting insights about your frontends ([read more](https://blog.cloudflare.com/ttfb-is-not-what-it-used-to-be/)), its very handy to measure your backends or microservices network stats.

## How to run it

```sh
$ yarn install
$ yarn start -u https://example.com -n 5
```

## Network metrics

```json
{
  "time_total": {
    "min": 0.787695,
    "max": 1.470299,
    "avg": 0.8801224800000002
  },
  "time_connect": {
    "min": 0.198321,
    "max": 0.29705,
    "avg": 0.21884231999999992
  },
  "time_redirect": {
    "min": 0.370254,
    "max": 0.837215,
    "avg": 0.4419513000000002
  },
  "time_appconnect": {
    "min": 0.603826,
    "max": 1.16023,
    "avg": 0.6699872599999999
  },
  "time_namelookup": {
    "min": 0.006924,
    "max": 0.078889,
    "avg": 0.013042020000000003
  },
  "time_pretransfer": {
    "min": 0.604491,
    "max": 1.16099,
    "avg": 0.6707111600000001
  },
  "time_starttransfer": {
    "min": 0.786604,
    "max": 1.470005,
    "avg": 0.8793156299999998
  }
}
```