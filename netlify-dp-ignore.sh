#!/usr/bin/env bash

git log -1 --pretty=oneline | sed '/^$/d' | grep -v '\[build\]'
