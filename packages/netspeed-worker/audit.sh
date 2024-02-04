#!/bin/sh

url=$1

curl -s -w "%{json}" -o /dev/null $url | jq > audit.json
