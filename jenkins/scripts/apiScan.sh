#!/usr/bin/env sh

curl -vgw "\n" -X POST 'http://192.168.56.103:1337/v0.1/scan' -d '{"urls":["http://192.168.56.101:3000/"]}'