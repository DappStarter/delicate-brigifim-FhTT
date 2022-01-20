require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remain exact harvest deputy flower spoil'; 
let testAccounts = [
"0xe852255ff9bdafa9f1e83a03de30378bdfeed67ea47320960531ce70486b74a2",
"0xcb72d27d4a199930d73565b34e9b7f116f32ff8fb96a05d122a8e6c5d0277db5",
"0xc255d30aefee63dcf55bb6624742fc61d4527f6e1edc5922c4a328b68a2b99de",
"0x8de8a5449e41df42285555b34d8e217ab010153263bb91ceba13ef03e26618a7",
"0xe40c93a9e8a16b81e348b55375348f362c3bc6e743261d82f8edc7419ef42c04",
"0xc7e938550da04ef5814af37e2e5e1f990b89fb82dc9efb1d8509971337313091",
"0xc230e8bcdbadf91c276cb5f12b782a770e2ecb3dff764f7490cec97b048106f6",
"0xbafa0994fbef60cc0539f82b3198507f60fbb9f8794afc87593f1264a3eed9a9",
"0x668c9d8779a126aa2762768a1675e4ef12fd7c8f77813d66cd717936fd86a7b8",
"0x110129c75822400f7888148e9ea851571272e41a32f92ae4ffc8d518f6c3c617"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


