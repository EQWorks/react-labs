#!/usr/bin/env bash

git log -1 --pretty=%B | grep -v '\[build\]'
