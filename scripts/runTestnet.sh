#!/usr/bin/env bash
source ~/.evoenv

unset NUXT_DAPIADDRESSES
unset NUXT_DPNS_CONTRACT_ID
unset NUXT_LOCALNODE

# export NUXT_DAPIADDRESSES='["54.184.140.221:3000"]'

export NUXT_ENV_RUN="testnet"

node ./scripts/registerContracts.js

source ./env/datacontracts_$NUXT_ENV_RUN.env

echo
echo "ENV VARS"
echo
printenv | grep NUXT
echo

nuxt --port 3342
