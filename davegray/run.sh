#!/usr/bin/bash

# sourceFile=$1
# fileName=${sourceFile%%.*}
# targetFile="$fileName.js"

# clear

# tsc $fileName && node $targetFile

# # rm -rf *.js

clear
tsc main.ts && node main.js