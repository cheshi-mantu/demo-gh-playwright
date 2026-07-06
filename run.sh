#!/bin/sh
rm -rf ./allure-results
npm install
TESTS_SUCCESS=always
TARGET=EGOR

export ALLURE_TOKEN=$(security find-generic-password -a "$USER" -s "${TARGET}_ALLURE_TOKEN" -w)
export ALLURE_ENDPOINT=$(security find-generic-password -a "$USER" -s "${TARGET}_ALLURE_ENDPOINT" -w)
export ALLURE_RESULTS="allure-results"
export ALLURE_PROJECT_ID=1
export ALLURE_LAUNCH_NAME="$(date "+%Y-%m-%d %H%M%S") allurectl local upload target: ${TARGET} ${ALLURE_RESULTS} Prj: ${ALLURE_PROJECT_ID} "
export ALLURE_LAUNCH_TAGS="upload, full-test"
export TESTS_BROWSER="lalal"

allurectl watch -- npm run test test/attachments/
