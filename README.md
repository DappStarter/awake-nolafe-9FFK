# My Dapp

This project is for the blockchain application My Dapp. It contains code for the Smart Contract, web-based dapp and NodeJS server. 

# Pre-requisites

In order to develop and build "My Dapp," the following pre-requisites must be installed:

* [Visual Studio Code](https://code.visualstudio.com/download) (or any IDE for editing Javascript)
* [NodeJS](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install) (DappStarter uses [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces))

### Windows Users

Before you proceed with installation, it's important to note that many blockchain libraries either don't work or generate errors on Windows. If you try installation and can't get the startup scripts to completion, this may be the problem. In that case, it's best to install and run DappStarter using Windows Subsystem for Linux (WSL). Here's a [guide to help you install WSL](https://docs.decentology.com/guides/windows-subsystem-for-linux-wsl).

Blockchains known to require WSL: Solana
# Installation

Using a terminal (or command prompt), change to the folder containing the project files and type: `yarn` This will fetch all required dependencies. The process will take 1-3 minutes and while it is in progress you can move on to the next step.

# Yarn Errors

You might see failures related to the `node-gyp` package when Yarn installs dependencies.
These failures occur because the node-gyp package requires certain additional build tools
to be installed on your computer. Follow the [instructions](https://www.npmjs.com/package/node-gyp) for adding build tools and then try running `yarn` again.

# Build, Deploy and Test
Using a terminal (or command prompt), change to the folder containing the project files and type: `yarn start` This will run all the dev scripts in each project package.json.


## File Locations
Here are the locations of some important files:
* Contract Code: [packages/dapplib/contracts](packages/dapplib/contracts)
* Dapp Library: [packages/dapplib/src/dapp-lib.js](packages/dapplib/src/dapp-lib.js) 
* Blockchain Interactions: [packages/dapplib/src/blockchain.js](packages/dapplib/src/blockchain.js)
* Unit Tests: [packages/dapplib/tests](packages/dapplib/tests)
* UI Test Harnesses: [packages/client/src/dapp/harness](packages/client/src/dapp/harness)


To view your dapp, open your browser to http://localhost:5000 for the DappStarter Workspace.

We ♥️ developers and want you to have an awesome experience. You should be experiencing Dappiness at this point. If not, let us know and we will help. Join our [Discord](https://discord.gg/ZzaaqwMmVG) or hit us up on Twitter [@Decentology](https://twitter.com/decentology).

## Smart Contract

`yarn migrate` to compile contracts/*.sol files, deploy them to the blockchain. 

## Dapp

Run the dapp in a separate terminal. You *must* have run `npm run deploy` for the dapp to see most recent smart contract changes.

`yarn dapp` runs the dapp on http://localhost:5001 using webpack dev server

## Server

Run the server in a separate terminal. You *must* have run `npm run deploy` for the dapp to see most recent smart contract changes.

`yarn server` runs NodeJS server app on port 5002 with NestJS

## Testing

`test-config.js` contains settings used by test scripts

Run tests using `yarn test --script=[test file]`

## Production Builds

DappStarter currently does not provide blockchain migration scripts to be used in production. However, here are the scripts for generating production builds:

`yarn build:prod` generates dapp bundle for production.

