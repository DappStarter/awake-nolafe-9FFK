require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski street dash ranch coast gown light army gate'; 
let testAccounts = [
"0x543693a2e2c6a663264d59542adc73875041bd445f4fc90fb8e0d6014d3c9f1e",
"0x5230d2ecc83f3499884f3c71870990d8a88af0d036adf7732b1211b15a6aa487",
"0x82ac194df15dc90f7df744b1ad522865e9661dca03bbac3efb967c97c0d9e56c",
"0xbe822b14390c7283618b58ad42d913f9bf500f251a1c76b13014bd4b8bc566b9",
"0xcb618f6ef85707861b1b921ee0f51f531ae0eb99e8907ece84ef768617d4ca98",
"0xec144fd1bb9e794043a4073c66be7e227bc7f22bbf4299b444c91f4bb78b5323",
"0x5f3d438bd6360cc08a9d2e98e0170e1d64dfc30c76ea4ef7718fbacda4b2e4ee",
"0xaaa612bd113ace2d5e57212fec24931d58909cc6aabbce4539cfed2adf30c200",
"0x1f1cf926872fcecc99a7e86e39ea7ad7a913689903dbc37a7f35076118e352b7",
"0x8c3b5f82875ef44982a21bc04cd5c3c38ecc646869c1f34d6732dccabc015cc8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

