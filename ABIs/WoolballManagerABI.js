const WoolballManagerABI = {
  "address": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract IWoolball",
          "name": "woolball",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "resolverAddress",
          "type": "address"
        }
      ],
      "name": "registerName",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x608060405234801561001057600080fd5b506040516104a83803806104a883398101604081905261002f916100ad565b6100383361005d565b600180546001600160a01b0319166001600160a01b03929092169190911790556100dd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100bf57600080fd5b81516001600160a01b03811681146100d657600080fd5b9392505050565b6103bc806100ec6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063715018a6146100515780637b59af161461005b5780638da5cb5b1461006e578063f2fde38b1461008d575b600080fd5b6100596100a0565b005b61005961006936600461027d565b6100b4565b600054604080516001600160a01b039092168252519081900360200190f35b61005961009b3660046102fe565b610139565b6100a86101b7565b6100b26000610211565b565b600154604051634671afe960e01b81526001600160a01b0390911690634671afe9906100f09086908690339063688772aa908890600401610320565b6020604051808303816000875af115801561010f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610133919061036d565b50505050565b6101416101b7565b6001600160a01b0381166101ab5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6101b481610211565b50565b6000546001600160a01b031633146100b25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101a2565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461027857600080fd5b919050565b60008060006040848603121561029257600080fd5b833567ffffffffffffffff808211156102aa57600080fd5b818601915086601f8301126102be57600080fd5b8135818111156102cd57600080fd5b8760208285010111156102df57600080fd5b6020928301955093506102f59186019050610261565b90509250925092565b60006020828403121561031057600080fd5b61031982610261565b9392505050565b60808152846080820152848660a0830137600060a08683018101919091526001600160a01b039485166020830152604082019390935292166060830152601f909201601f19160101919050565b60006020828403121561037f57600080fd5b505191905056fea2646970667358221220f17d5d474962fa176f4b3d9ccdf015605084203b0b885a6a0dbbdc30fab11fd464736f6c63430008140033",
    "sourceMap": "250:286:39:-:0;;;313:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;936:32:18;719:10:28;936:18:18;:32::i;:::-;349:9:39;:20;;-1:-1:-1;;;;;;349:20:39;-1:-1:-1;;;;;349:20:39;;;;;;;;;;250:286;;2426:187:18;2499:16;2518:6;;-1:-1:-1;;;;;2534:17:18;;;-1:-1:-1;;;;;;2534:17:18;;;;;;2566:40;;2518:6;;;;;;;2566:40;;2499:16;2566:40;2489:124;2426:187;:::o;14:309:45:-;103:6;156:2;144:9;135:7;131:23;127:32;124:52;;;172:1;169;162:12;124:52;198:16;;-1:-1:-1;;;;;243:31:45;;233:42;;223:70;;289:1;286;279:12;223:70;312:5;14:309;-1:-1:-1;;;14:309:45:o;:::-;250:286:39;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c8063715018a6146100515780637b59af161461005b5780638da5cb5b1461006e578063f2fde38b1461008d575b600080fd5b6100596100a0565b005b61005961006936600461027d565b6100b4565b600054604080516001600160a01b039092168252519081900360200190f35b61005961009b3660046102fe565b610139565b6100a86101b7565b6100b26000610211565b565b600154604051634671afe960e01b81526001600160a01b0390911690634671afe9906100f09086908690339063688772aa908890600401610320565b6020604051808303816000875af115801561010f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610133919061036d565b50505050565b6101416101b7565b6001600160a01b0381166101ab5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6101b481610211565b50565b6000546001600160a01b031633146100b25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101a2565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461027857600080fd5b919050565b60008060006040848603121561029257600080fd5b833567ffffffffffffffff808211156102aa57600080fd5b818601915086601f8301126102be57600080fd5b8135818111156102cd57600080fd5b8760208285010111156102df57600080fd5b6020928301955093506102f59186019050610261565b90509250925092565b60006020828403121561031057600080fd5b61031982610261565b9392505050565b60808152846080820152848660a0830137600060a08683018101919091526001600160a01b039485166020830152604082019390935292166060830152601f909201601f19160101919050565b60006020828403121561037f57600080fd5b505191905056fea2646970667358221220f17d5d474962fa176f4b3d9ccdf015605084203b0b885a6a0dbbdc30fab11fd464736f6c63430008140033",
    "sourceMap": "250:286:39:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1824:101:18;;;:::i;:::-;;378:155:39;;;;;;:::i;:::-;;:::i;1201:85:18:-;1247:7;1273:6;1201:85;;;-1:-1:-1;;;;;1273:6:18;;;1015:51:45;;1201:85:18;;;;;1003:2:45;1201:85:18;;;2074:198;;;;;;:::i;:::-;;:::i;1824:101::-;1094:13;:11;:13::i;:::-;1888:30:::1;1915:1;1888:18;:30::i;:::-;1824:101::o:0;378:155:39:-;465:9;;:64;;-1:-1:-1;;;465:64:39;;-1:-1:-1;;;;;465:9:39;;;;:17;;:64;;483:4;;;;489:10;;501;;513:15;;465:64;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;378:155;;;:::o;2074:198:18:-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2162:22:18;::::1;2154:73;;;::::0;-1:-1:-1;;;2154:73:18;;2347:2:45;2154:73:18::1;::::0;::::1;2329:21:45::0;2386:2;2366:18;;;2359:30;2425:34;2405:18;;;2398:62;-1:-1:-1;;;2476:18:45;;;2469:36;2522:19;;2154:73:18::1;;;;;;;;;2237:28;2256:8;2237:18;:28::i;:::-;2074:198:::0;:::o;1359:130::-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:18;719:10:28;1422:23:18;1414:68;;;;-1:-1:-1;;;1414:68:18;;2754:2:45;1414:68:18;;;2736:21:45;;;2773:18;;;2766:30;2832:34;2812:18;;;2805:62;2884:18;;1414:68:18;2552:356:45;2426:187:18;2499:16;2518:6;;-1:-1:-1;;;;;2534:17:18;;;-1:-1:-1;;;;;;2534:17:18;;;;;;2566:40;;2518:6;;;;;;;2566:40;;2499:16;2566:40;2489:124;2426:187;:::o;14:173:45:-;82:20;;-1:-1:-1;;;;;131:31:45;;121:42;;111:70;;177:1;174;167:12;111:70;14:173;;;:::o;192:672::-;272:6;280;288;341:2;329:9;320:7;316:23;312:32;309:52;;;357:1;354;347:12;309:52;397:9;384:23;426:18;467:2;459:6;456:14;453:34;;;483:1;480;473:12;453:34;521:6;510:9;506:22;496:32;;566:7;559:4;555:2;551:13;547:27;537:55;;588:1;585;578:12;537:55;628:2;615:16;654:2;646:6;643:14;640:34;;;670:1;667;660:12;640:34;717:7;710:4;701:6;697:2;693:15;689:26;686:39;683:59;;;738:1;735;728:12;683:59;769:4;761:13;;;;-1:-1:-1;793:6:45;-1:-1:-1;818:40:45;;837:20;;;-1:-1:-1;818:40:45;:::i;:::-;808:50;;192:672;;;;;:::o;1077:186::-;1136:6;1189:2;1177:9;1168:7;1164:23;1160:32;1157:52;;;1205:1;1202;1195:12;1157:52;1228:29;1247:9;1228:29;:::i;:::-;1218:39;1077:186;-1:-1:-1;;;1077:186:45:o;1268:683::-;1528:3;1517:9;1510:22;1569:6;1563:3;1552:9;1548:19;1541:35;1627:6;1619;1613:3;1602:9;1598:19;1585:49;1684:1;1678:3;1654:22;;;1650:32;;1643:43;;;;-1:-1:-1;;;;;1834:15:45;;;1827:4;1812:20;;1805:45;1881:2;1866:18;;1859:34;;;;1929:15;;1924:2;1909:18;;1902:43;1747:2;1726:15;;;-1:-1:-1;;1722:29:45;1707:45;1703:55;;;-1:-1:-1;1268:683:45:o;1956:184::-;2026:6;2079:2;2067:9;2058:7;2054:23;2050:32;2047:52;;;2095:1;2092;2085:12;2047:52;-1:-1:-1;2118:16:45;;1956:184;-1:-1:-1;1956:184:45:o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "owner()": "8da5cb5b",
    "registerName(string,address)": "7b59af16",
    "renounceOwnership()": "715018a6",
    "transferOwnership(address)": "f2fde38b"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract IWoolball\",\"name\":\"woolball\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"resolverAddress\",\"type\":\"address\"}],\"name\":\"registerName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"A contract to manage Woolball Registry\",\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/WoolballManager.sol\":\"WoolballManager\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32\",\"dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5bce51e11f7d194b79ea59fe00c9e8de9fa2c5530124960f29a24d4c740a3266\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7e66dfde185df46104c11bc89d08fa0760737aa59a2b8546a656473d810a8ea4\",\"dweb:/ipfs/QmXvyqtXPaPss2PD7eqPoSao5Szm2n6UMoiG8TZZDjmChR\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"src/WoolballManager.sol\":{\"keccak256\":\"0x0e321c12e378d00e8a23011c0d576e34286837ad37cd0d4f1c3e74a56b0b2c66\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://69c693e2ef7300a28dc5675526e8a2abe3afc87be8806986a53a42d6a15a5628\",\"dweb:/ipfs/QmNoTvCSFzNyzK54VjmsPHNehuFhXGFocEBLVrHrt8mRMc\"]},\"src/interfaces/IWoolball.sol\":{\"keccak256\":\"0x64290716ad7c310c93cd5f8fb0fd2412eb0c5230a2cf853a1cd0c21a4226faf9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0e59897aacba58accdcf75619e7ecdae649299e24b78b1d3c4830b9c25a4d568\",\"dweb:/ipfs/QmNUxCkwi2gmvHdcYWdSQjJRJbzG6CZ4ZJ3XcjgTTaQBpt\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "contract IWoolball",
              "name": "woolball",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "previousOwner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipTransferred",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "resolverAddress",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "registerName"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "renounceOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferOwnership"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "owner()": {
            "details": "Returns the address of the current owner."
          },
          "renounceOwnership()": {
            "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
          },
          "transferOwnership(address)": {
            "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "openzeppelin/=lib/openzeppelin-contracts/contracts/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "src/WoolballManager.sol": "WoolballManager"
      },
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
        "keccak256": "0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218",
        "urls": [
          "bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32",
          "dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol": {
        "keccak256": "0x5bce51e11f7d194b79ea59fe00c9e8de9fa2c5530124960f29a24d4c740a3266",
        "urls": [
          "bzz-raw://7e66dfde185df46104c11bc89d08fa0760737aa59a2b8546a656473d810a8ea4",
          "dweb:/ipfs/QmXvyqtXPaPss2PD7eqPoSao5Szm2n6UMoiG8TZZDjmChR"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        "keccak256": "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
        "urls": [
          "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
          "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1",
        "urls": [
          "bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f",
          "dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"
        ],
        "license": "MIT"
      },
      "src/WoolballManager.sol": {
        "keccak256": "0x0e321c12e378d00e8a23011c0d576e34286837ad37cd0d4f1c3e74a56b0b2c66",
        "urls": [
          "bzz-raw://69c693e2ef7300a28dc5675526e8a2abe3afc87be8806986a53a42d6a15a5628",
          "dweb:/ipfs/QmNoTvCSFzNyzK54VjmsPHNehuFhXGFocEBLVrHrt8mRMc"
        ],
        "license": "MIT"
      },
      "src/interfaces/IWoolball.sol": {
        "keccak256": "0x64290716ad7c310c93cd5f8fb0fd2412eb0c5230a2cf853a1cd0c21a4226faf9",
        "urls": [
          "bzz-raw://0e59897aacba58accdcf75619e7ecdae649299e24b78b1d3c4830b9c25a4d568",
          "dweb:/ipfs/QmNUxCkwi2gmvHdcYWdSQjJRJbzG6CZ4ZJ3XcjgTTaQBpt"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "src/WoolballManager.sol",
    "id": 34824,
    "exportedSymbols": {
      "Context": [
        30978
      ],
      "IERC165": [
        31243
      ],
      "IERC721": [
        30550
      ],
      "IWoolball": [
        35599
      ],
      "Ownable": [
        29479
      ],
      "WoolballManager": [
        34823
      ]
    },
    "nodeType": "SourceUnit",
    "src": "66:470:39",
    "nodes": [
      {
        "id": 34785,
        "nodeType": "PragmaDirective",
        "src": "66:25:39",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".17"
        ]
      },
      {
        "id": 34786,
        "nodeType": "ImportDirective",
        "src": "94:36:39",
        "nodes": [],
        "absolutePath": "src/interfaces/IWoolball.sol",
        "file": "./interfaces/IWoolball.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 34824,
        "sourceUnit": 35600,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 34787,
        "nodeType": "ImportDirective",
        "src": "132:61:39",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/access/Ownable.sol",
        "file": "openzeppelin-contracts/contracts/access/Ownable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 34824,
        "sourceUnit": 29480,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 34823,
        "nodeType": "ContractDefinition",
        "src": "250:286:39",
        "nodes": [
          {
            "id": 34793,
            "nodeType": "VariableDeclaration",
            "src": "290:19:39",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_woolball",
            "nameLocation": "300:9:39",
            "scope": 34823,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IWoolball_$35599",
              "typeString": "contract IWoolball"
            },
            "typeName": {
              "id": 34792,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 34791,
                "name": "IWoolball",
                "nameLocations": [
                  "290:9:39"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 35599,
                "src": "290:9:39"
              },
              "referencedDeclaration": 35599,
              "src": "290:9:39",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IWoolball_$35599",
                "typeString": "contract IWoolball"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 34804,
            "nodeType": "FunctionDefinition",
            "src": "313:60:39",
            "nodes": [],
            "body": {
              "id": 34803,
              "nodeType": "Block",
              "src": "345:28:39",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 34801,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 34799,
                      "name": "_woolball",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34793,
                      "src": "349:9:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IWoolball_$35599",
                        "typeString": "contract IWoolball"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 34800,
                      "name": "woolball",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34796,
                      "src": "361:8:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IWoolball_$35599",
                        "typeString": "contract IWoolball"
                      }
                    },
                    "src": "349:20:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IWoolball_$35599",
                      "typeString": "contract IWoolball"
                    }
                  },
                  "id": 34802,
                  "nodeType": "ExpressionStatement",
                  "src": "349:20:39"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 34797,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34796,
                  "mutability": "mutable",
                  "name": "woolball",
                  "nameLocation": "335:8:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 34804,
                  "src": "325:18:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IWoolball_$35599",
                    "typeString": "contract IWoolball"
                  },
                  "typeName": {
                    "id": 34795,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 34794,
                      "name": "IWoolball",
                      "nameLocations": [
                        "325:9:39"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 35599,
                      "src": "325:9:39"
                    },
                    "referencedDeclaration": 35599,
                    "src": "325:9:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IWoolball_$35599",
                      "typeString": "contract IWoolball"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "324:20:39"
            },
            "returnParameters": {
              "id": 34798,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "345:0:39"
            },
            "scope": 34823,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 34822,
            "nodeType": "FunctionDefinition",
            "src": "378:155:39",
            "nodes": [],
            "body": {
              "id": 34821,
              "nodeType": "Block",
              "src": "461:72:39",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 34814,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34806,
                        "src": "483:4:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        }
                      },
                      {
                        "expression": {
                          "id": 34815,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "489:3:39",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 34816,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "493:6:39",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "489:10:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "31373533373037313738",
                        "id": 34817,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "501:10:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1753707178_by_1",
                          "typeString": "int_const 1753707178"
                        },
                        "value": "1753707178"
                      },
                      {
                        "id": 34818,
                        "name": "resolverAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34808,
                        "src": "513:15:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_rational_1753707178_by_1",
                          "typeString": "int_const 1753707178"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 34811,
                        "name": "_woolball",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34793,
                        "src": "465:9:39",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IWoolball_$35599",
                          "typeString": "contract IWoolball"
                        }
                      },
                      "id": 34813,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "475:7:39",
                      "memberName": "newName",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 35598,
                      "src": "465:17:39",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_uint256_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (string memory,address,uint256,address) external returns (uint256)"
                      }
                    },
                    "id": 34819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "465:64:39",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34820,
                  "nodeType": "ExpressionStatement",
                  "src": "465:64:39"
                }
              ]
            },
            "functionSelector": "7b59af16",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "registerName",
            "nameLocation": "387:12:39",
            "parameters": {
              "id": 34809,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34806,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "419:4:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 34822,
                  "src": "403:20:39",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34805,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "403:6:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34808,
                  "mutability": "mutable",
                  "name": "resolverAddress",
                  "nameLocation": "435:15:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 34822,
                  "src": "427:23:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34807,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:7:39",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "399:54:39"
            },
            "returnParameters": {
              "id": 34810,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "461:0:39"
            },
            "scope": 34823,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 34789,
              "name": "Ownable",
              "nameLocations": [
                "278:7:39"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 29479,
              "src": "278:7:39"
            },
            "id": 34790,
            "nodeType": "InheritanceSpecifier",
            "src": "278:7:39"
          }
        ],
        "canonicalName": "WoolballManager",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 34788,
          "nodeType": "StructuredDocumentation",
          "src": "195:54:39",
          "text": " @dev A contract to manage Woolball Registry"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          34823,
          29479,
          30978
        ],
        "name": "WoolballManager",
        "nameLocation": "259:15:39",
        "scope": 34824,
        "usedErrors": [],
        "usedEvents": [
          29380
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 39
};

export default WoolballManagerABI;