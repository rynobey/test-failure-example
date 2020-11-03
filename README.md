# Instructions

This repo reproduces an issue that seems to have been introduced in truffle versions starting with v5.1.50. The cause of the problem is not entirely clear, but it is suspected to be related to the way the polling is done to retrieve transaction receipts. 

## Getting Started

To get started, clone this repo and run `npm install`. This will install truffle v5.1.51 and solidity-coverage. Execute `npx truffle run coverage` to run the tests, which should result in all tests passing except the last one. 

## Observations

1. Changing the version of truffle to 5.1.49 results in no test failures
2. Using `netstat -anp | grep :8555 | grep ESTABLISHED | wc -l` to inspect the number of established http connections made to the in-process ganache server show thousands of http connections being made during the last test before it fails on v5.1.51, and only 2 when it succeeds on v5.1.49.
