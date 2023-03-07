#!/bin/bash

set -e

BASE_PATH=$(
    cd $(dirname $0)/..
    pwd
)

cd $BASE_PATH

rm -rf ./dist

LIB_NAMES='ReactSyntaxHighlighter'

for item in $LIB_NAMES; do
    LIB_NAME=$item npm run vite-build
done
