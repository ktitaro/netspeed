# Netspeed Auditor

Utility that helps to measure network performance metrics using cURL. While its not recommended to rely on this tool for getting insights about your frontends ([read more](https://blog.cloudflare.com/ttfb-is-not-what-it-used-to-be/)), its very handy to measure your backends or microservices network stats. This tool is highly inspired by the content of [this article](https://blog.cloudflare.com/a-question-of-timing/).

## How to run it

Using node.js:
```sh
$ yarn install
$ node ./netspeed -u https://example.com -n 5 > net.json
```

Using docker:
```sh
$ docker build -t netspeed .
$ docker container run -it netspeed \
  -u https://example.com -n 5 > net.json
```

## Network metrics

All metrics are measured in milliseconds (ms)

```json
[
  {
    "timeline": {
      "domainLookupAt": 5,
      "tcpHandshakeAt": 1180,
      "sslHandshakeAt": 1537,
      "redirectDoneAt": 0,
      "requestStartAt": 1537,
      "responseStartAt": 1711,
      "responseFinishAt": 1712
    },
    "timespan": {
      "domainLookupTook": 5,
      "tcpHandshakeTook": 1175,
      "sslHandshakeTook": 357,
      "serverHandleTook": 174
    }
  }
]

```
