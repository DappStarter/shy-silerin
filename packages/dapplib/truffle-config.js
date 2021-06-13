require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure traffic nothing crawl situate column coral light army giggle'; 
let testAccounts = [
"0x6da84c5a69fe28e544571accb69b7f22661cafe84a8fc88fef0b349eb7e2a601",
"0xa64cba94e74fb1bda37ebf17397bf7d9febca58909beb25bb2bcd6e6318044e1",
"0x7990b358290dfa45ca30609e617d674193b4e09d5fe48d8d830255fefaf3731f",
"0x585489c549339a9f3a86911775aac402c71e29ca74e313c689a30b2e06ee1053",
"0xfc3c98fac9a307140467addfe3c4d9793f91a312d449234284876b75dfcfd035",
"0x1ebda9cab4f175a0816e8c154ef8ca698bf2e5f4503e41945293e13c6fb9f031",
"0xf204ce67cd6705d5bb3b71f097c6e0a20dd7b8a44eb71f0590e33eedfb2cc086",
"0xcca0963db0bdae8be2a75c285d82f639692e48a3ecf9d5c050948fe45a0f907a",
"0x268de3638cb38643282c28681062594885389d981e5326ada1d132892f1a1548",
"0xfa95f6f59ec8a937ad5ac8d44f8659a04a10bc26b39833044cd3dfee33123c54"
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

