const WoolballABI = {
  "address": "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
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
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fromTokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_toTokenId",
          "type": "uint256"
        }
      ],
      "name": "BatchMetadataUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "MetadataUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "CTContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "CTId",
          "type": "uint256"
        }
      ],
      "name": "NewDependence",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fromID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "targetID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "linkID",
          "type": "uint256"
        }
      ],
      "name": "NewLink",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "LockingContract",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "LockingId",
          "type": "uint256"
        }
      ],
      "name": "NewLocking",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        }
      ],
      "name": "NewName",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "subname",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "subnameID",
          "type": "uint256"
        }
      ],
      "name": "NewSubname",
      "type": "event"
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "CTContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "CTId",
          "type": "uint256"
        }
      ],
      "name": "RemovedDependence",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Unlocked",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "LockedContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "LockedID",
          "type": "uint256"
        }
      ],
      "name": "addLockedToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        }
      ],
      "name": "expirationTimestamp",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
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
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        }
      ],
      "name": "getName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        }
      ],
      "name": "getNameType",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "incomingLinkIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "whitelistAddress",
          "type": "address"
        }
      ],
      "name": "isAddressWhitelisted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "isBurnable",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "CTContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "CTID",
          "type": "uint256"
        }
      ],
      "name": "isDependent",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "isDependentBurnable",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "isDependentTransferable",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "transferToAddress",
          "type": "address"
        }
      ],
      "name": "isDependentTransferableToAddress",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "isLocked",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "isTokenBurnable",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "isTokenTransferable",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "transferToAddress",
          "type": "address"
        }
      ],
      "name": "isTokenTransferableToAddress",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "isTransferable",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "addressToTransferTo",
          "type": "address"
        }
      ],
      "name": "isTransferableToAddress",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        }
      ],
      "name": "linkTo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        }
      ],
      "name": "linksAmountIncoming",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        }
      ],
      "name": "linksAmountOutgoing",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "LockingContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "LockingID",
          "type": "uint256"
        }
      ],
      "name": "lock",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "fromID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "targetID",
          "type": "uint256"
        }
      ],
      "name": "newLink",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
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
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "expiration",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "resolverAddress",
          "type": "address"
        }
      ],
      "name": "newName",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "subname",
          "type": "string"
        }
      ],
      "name": "newSubname",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "outgoingLinkIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
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
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "CTContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "CTID",
          "type": "uint256"
        }
      ],
      "name": "removeDependence",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "LockedContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "LockedID",
          "type": "uint256"
        }
      ],
      "name": "removeLockedToken",
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
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        }
      ],
      "name": "resolver",
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
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "burnable",
          "type": "bool"
        }
      ],
      "name": "setBurnable",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "CTContractAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "CTID",
          "type": "uint256"
        }
      ],
      "name": "setDependence",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newTimeStamp",
          "type": "uint256"
        }
      ],
      "name": "setExpirationDate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "nameResolver",
          "type": "address"
        }
      ],
      "name": "setResolver",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        }
      ],
      "name": "setTokenURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "whitelistAddress",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isWhitelisted",
          "type": "bool"
        }
      ],
      "name": "setTransferWhitelist",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "transferable",
          "type": "bool"
        }
      ],
      "name": "setTransferable",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "subdomainIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        }
      ],
      "name": "parentID",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nameID",
          "type": "uint256"
        }
      ],
      "name": "subdomainsAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
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
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenID",
          "type": "uint256"
        }
      ],
      "name": "unlock",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x60806040523480156200001157600080fd5b506040516200581138038062005811833981016040819052620000349162000197565b81818181600062000046838262000290565b50600162000055828262000290565b5050505050620000746200006e6200007c60201b60201c565b62000080565b50506200035c565b3390565b600c80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000fa57600080fd5b81516001600160401b0380821115620001175762000117620000d2565b604051601f8301601f19908116603f01168101908282118183101715620001425762000142620000d2565b816040528381526020925086838588010111156200015f57600080fd5b600091505b8382101562000183578582018301518183018401529082019062000164565b600093810190920192909252949350505050565b60008060408385031215620001ab57600080fd5b82516001600160401b0380821115620001c357600080fd5b620001d186838701620000e8565b93506020850151915080821115620001e857600080fd5b50620001f785828601620000e8565b9150509250929050565b600181811c908216806200021657607f821691505b6020821081036200023757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200028b57600081815260208120601f850160051c81016020861015620002665750805b601f850160051c820191505b81811015620002875782815560010162000272565b5050505b505050565b81516001600160401b03811115620002ac57620002ac620000d2565b620002c481620002bd845462000201565b846200023d565b602080601f831160018114620002fc5760008415620002e35750858301515b600019600386901b1c1916600185901b17855562000287565b600085815260208120601f198616915b828110156200032d578886015182559484019460019091019084016200030c565b50858210156200034c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6154a5806200036c6000396000f3fe608060405234801561001057600080fd5b50600436106103995760003560e01c80637827136b116101e9578063b88d4fde1161010f578063ddaec205116100ad578063edee39651161007c578063edee3965146108ac578063eee40354146108bf578063f2fde38b146108d2578063f6aacfb1146108e557600080fd5b8063ddaec20514610837578063dfe28fbf1461084a578063e5c8e4311461085d578063e985e9c51461087057600080fd5b8063c87b56dd116100e9578063c87b56dd146107c1578063cf27cfc4146107d4578063d1af032c146107e7578063d6034c261461082457600080fd5b8063b88d4fde14610772578063bc7b6d6214610785578063c6f88d4a1461079857600080fd5b806395d89b4111610187578063a6ed7ada11610156578063a6ed7ada14610715578063ac3e2c6f14610728578063b25645691461073b578063b5916ab21461075f57600080fd5b806395d89b41146106d457806399d112fa146106dc578063a22cb465146106ef578063a4aec0751461070257600080fd5b80638117af2b116101c35780638117af2b1461068a57806386c048c51461069d5780638da5cb5b146106b05780638fc76be7146106c157600080fd5b80637827136b146106515780637aadccdb1461066457806380d273301461067757600080fd5b806342842e0e116102ce5780635d57bf7c1161026c5780636b8ff5741161023b5780636b8ff5741461060057806370a0823114610613578063715018a61461062657806372fdc40e1461062e57600080fd5b80635d57bf7c146105945780636198e339146105b75780636352211e146105ca578063692c85ab146105dd57600080fd5b8063460727b1116102a8578063460727b1146105335780634671afe9146105465780634f6ccce714610559578063515f85661461056c57600080fd5b806342842e0e146104fa57806342966c681461050d5780634541eda31461052057600080fd5b806318160ddd1161033b5780632f745c59116103155780632f745c591461049e57806332f4da4a146104b157806333699624146104c457806336f4ede4146104d757600080fd5b806318160ddd1461046657806323b872dd146104785780632e5466e61461048b57600080fd5b8063095ea7b311610377578063095ea7b3146104065780630ae5fa411461041b578063108eaa4e14610440578063162094c41461045357600080fd5b806301ffc9a71461039e57806306fdde03146103c6578063081812fc146103db575b600080fd5b6103b16103ac366004614696565b610917565b60405190151581526020015b60405180910390f35b6103ce61095d565b6040516103bd9190614703565b6103ee6103e9366004614716565b6109ef565b6040516001600160a01b0390911681526020016103bd565b610419610414366004614744565b610a16565b005b61042e610429366004614716565b610b30565b60405160ff90911681526020016103bd565b6103ee61044e366004614716565b610b56565b6104196104613660046147b9565b610bac565b6009545b6040519081526020016103bd565b610419610486366004614805565b610c19565b610419610499366004614854565b610cc9565b61046a6104ac366004614744565b610d2a565b6103b16104bf366004614896565b610dc0565b6104196104d23660046148c6565b610efa565b61046a6104e5366004614716565b6000908152600d602052604090206009015490565b610419610508366004614805565b610f46565b61041961051b366004614716565b610f61565b6103b161052e366004614716565b6112ba565b6104196105413660046148eb565b6113ec565b61046a61055436600461490d565b611536565b61046a610567366004614716565b611910565b61057f61057a366004614716565b6119a3565b604080519283526020830191909152016103bd565b61046a6105a2366004614716565b6000908152600d602052604090206007015490565b6104196105c5366004614716565b611a3c565b6103ee6105d8366004614716565b611a96565b61046a6105eb366004614716565b6000908152600d602052604090206008015490565b6103ce61060e366004614716565b611af6565b61046a610621366004614981565b611c16565b610419611c9c565b61046a61063c366004614716565b6000908152600d602052604090206002015490565b6103b161065f366004614716565b611cb0565b61046a610672366004614716565b611cd8565b61046a6106853660046148eb565b611d67565b61046a6106983660046148eb565b611d9d565b6103b16106ab366004614716565b611dc0565b600c546001600160a01b03166103ee565b6103b16106cf36600461499e565b611ee9565b6103ce611f2d565b6103b16106ea366004614896565b611f3c565b6104196106fd3660046149c5565b611f86565b61046a6107103660046148eb565b611f91565b61046a6107233660046148eb565b61222c565b6103b1610736366004614896565b61224f565b6103b1610749366004614716565b6000908152600b602052604090205460ff161590565b61046a61076d3660046147b9565b61226c565b610419610780366004614a09565b612647565b610419610793366004614896565b6126f7565b6103b16107a6366004614716565b6000908152600b6020526040902054610100900460ff161590565b6103ce6107cf366004614716565b61275a565b6104196107e236600461499e565b61284a565b6103b16107f5366004614896565b6000828152600b602090815260408083206001600160a01b038516845260030190915290205460ff1692915050565b61041961083236600461499e565b61292f565b6103b1610845366004614716565b612961565b6104196108583660046148c6565b612984565b61041961086b36600461499e565b6129cb565b6103b161087e366004614ae9565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6104196108ba36600461499e565b612c45565b6104196108cd36600461499e565b612e99565b6104196108e0366004614981565b61326c565b6108f86108f3366004614716565b6132e5565b604080516001600160a01b0390931683526020830191909152016103bd565b60006001600160e01b03198216631e6f6d8b60e31b148061094857506001600160e01b0319821663012a552760e41b145b8061095757506109578261330c565b92915050565b60606000805461096c90614b17565b80601f016020809104026020016040519081016040528092919081815260200182805461099890614b17565b80156109e55780601f106109ba576101008083540402835291602001916109e5565b820191906000526020600020905b8154815290600101906020018083116109c857829003601f168201915b5050505050905090565b60006109fa82613331565b506000908152600460205260409020546001600160a01b031690565b6000610a2182611a96565b9050806001600160a01b0316836001600160a01b031603610a935760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b0382161480610aaf5750610aaf813361087e565b610b215760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610a8a565b610b2b8383613390565b505050565b6000818152600d602052604081206001015460ff16600481111561095757610957614b4b565b6000818152600d602052604081206002015482904210610b885760405162461bcd60e51b8152600401610a8a90614b61565b6000838152600d60205260409020600501546001600160a01b031691505b50919050565b82610bb733826133fe565b610bd35760405162461bcd60e51b8152600401610a8a90614b98565b610c138484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061347c92505050565b50505050565b806000610c25826132e5565b9150508015610c90576000828152600b60205260409020600601546001600160a01b0316331480610c6f57506000828152600b60205260409020600601546001600160a01b031630145b610c8b5760405162461bcd60e51b8152600401610a8a90614be5565b610cb7565b610c9b335b836133fe565b610cb75760405162461bcd60e51b8152600401610a8a90614b98565b610cc2858585613547565b5050505050565b82610cd433826133fe565b610cf05760405162461bcd60e51b8152600401610a8a90614b98565b506000928352600b602090815260408085206001600160a01b03949094168552600390930190529120805460ff1916911515919091179055565b6000610d3583611c16565b8210610d975760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610a8a565b506001600160a01b03919091166000908152600760209081526040808320938352929052205490565b6000805b6000848152600b6020526040902060010154811015610ef0576000848152600b60205260408120600101805483908110610e0057610e00614c68565b60009182526020808320600290920290910154878352600b9091526040822060010180546001600160a01b0390921693509084908110610e4257610e42614c68565b600091825260209091206001600290920201015460405163ac3e2c6f60e01b8152600481018290526001600160a01b0387811660248301529192509083169063ac3e2c6f90604401602060405180830381865afa158015610ea7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ecb9190614c7e565b610edb5760009350505050610957565b50508080610ee890614cb1565b915050610dc4565b5060019392505050565b81610f0533826133fe565b610f215760405162461bcd60e51b8152600401610a8a90614b98565b506000918252600b6020526040909120805461ff001916911561010002919091179055565b610b2b83838360405180602001604052806000815250612647565b80610f6c33826133fe565b610f885760405162461bcd60e51b8152600401610a8a90614b98565b610f9182611cb0565b6110035760405162461bcd60e51b815260206004820152603e60248201527f4c43543a2074686520746f6b656e206f72206f6e65206f662069747320436f6d60448201527f6d616e64657220546f6b656e7320617265206e6f74206275726e61626c6500006064820152608401610a8a565b60005b6000838152600b602052604090206004015481101561110d576000838152600b6020526040812060040180548390811061104257611042614c68565b60009182526020808320600290920290910154868352600b9091526040822060040180546001600160a01b039092169350908490811061108457611084614c68565b9060005260206000209060020201600101549050816001600160a01b03166342966c68826040518263ffffffff1660e01b81526004016110c691815260200190565b600060405180830381600087803b1580156110e057600080fd5b505af11580156110f4573d6000803e3d6000fd5b505050505050808061110590614cb1565b915050611006565b5060005b6000838152600b60205260409020600401548110156111bb576000838152600b6020526040812060040180548390811061114d5761114d614c68565b60009182526020808320604080518082018252600290940290910180546001600160a01b039081168552600190910154848401908152898652600b845282862094519091168552600590930182528084209251845291905281205550806111b381614cb1565b915050611111565b5060005b6000838152600b6020526040902060010154811015611267576000838152600b602052604081206001018054839081106111fb576111fb614c68565b60009182526020808320604080518082018252600294850290920180546001600160a01b0390811684526001909101548385019081528a8752600b855282872093519091168652919093018252828420905184529052812055508061125f81614cb1565b9150506111bf565b506000828152600b60205260408120805461ffff191681559061128d600183018261463a565b61129b60048301600061463a565b506006810180546001600160a01b031916905560006007909101555050565b6000805b6000838152600b60205260409020600101548110156113e3576000838152600b602052604081206001018054839081106112fa576112fa614c68565b60009182526020808320600290920290910154868352600b9091526040822060010180546001600160a01b039092169350908490811061133c5761133c614c68565b9060005260206000209060020201600101549050816001600160a01b031663ddaec205826040518263ffffffff1660e01b815260040161137e91815260200190565b602060405180830381865afa15801561139b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113bf9190614c7e565b6113ce57506000949350505050565b505080806113db90614cb1565b9150506112be565b50600192915050565b6113f46136b8565b6000828152600d6020526040902060020154829042106114265760405162461bcd60e51b8152600401610a8a90614b61565b6000838152600d60205260409020600201546114a35760405162461bcd60e51b815260206004820152603660248201527f576f6f6c62616c6c3a206e616d654944206d757374206265206f662061207265604482015275676973746572656420576f6f6c62616c6c206e616d6560501b6064820152608401610a8a565b6000838152600d602052604090206002015482116115205760405162461bcd60e51b815260206004820152603460248201527f576f6f6c62616c6c3a206e657754696d655374616d70206d757374206265206160448201527366746572207468652063757272656e74206f6e6560601b6064820152608401610a8a565b506000918252600d602052604090912060020155565b60008585735fbdb2315678afecb367f032d93f642f64180aa3635f8b54e883836040518363ffffffff1660e01b8152600401611573929190614cf3565b602060405180830381865af4158015611590573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b49190614c7e565b156115d15760405162461bcd60e51b8152600401610a8a90614d1a565b604051630bf16a9d60e31b8152735fbdb2315678afecb367f032d93f642f64180aa390635f8b54e89061160a9085908590600401614d6c565b602060405180830381865af4158015611627573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061164b9190614c7e565b156116685760405162461bcd60e51b8152600401610a8a90614d93565b604051630bf16a9d60e31b8152735fbdb2315678afecb367f032d93f642f64180aa390635f8b54e8906116a19085908590600401614de5565b602060405180830381865af41580156116be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e29190614c7e565b156116ff5760405162461bcd60e51b8152600401610a8a90614e0c565b6117076136b8565b60006002898960405160200161171e929190614e5e565b60408051601f198184030181529082905261173891614e6e565b602060405180830381855afa158015611755573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906117789190614e8a565b6000818152600d602052604090206002015490915042116117e75760405162461bcd60e51b8152602060048201526024808201527f576f6f6c62616c6c3a206e616d6520697320616c726561647920726567697374604482015263195c995960e21b6064820152608401610a8a565b42861161184b5760405162461bcd60e51b815260206004820152602c60248201527f576f6f6c62616c6c3a2065787069726174696f6e54696d657374616d7020697360448201526b081a5b881d1a19481c185cdd60a21b6064820152608401610a8a565b6118558782613712565b6000818152600d6020526040902061186e898b83614ee9565b506000818152600d6020526040908190206001808201805460ff19169091179055600281018890556003810180546001600160a01b038b81166001600160a01b0319928316179092556005909201805491891691909216179055517ff91c779959a8a2bcdd04028a67de654d91aa5933a98103778ad00b550811c9da906118fc908b908b9085908c90614fa9565b60405180910390a198975050505050505050565b600061191b60095490565b821061197e5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610a8a565b6009828154811061199157611991614c68565b90600052602060002001549050919050565b6000808260046000828152600d602052604090206001015460ff1660048111156119cf576119cf614b4b565b14611a1c5760405162461bcd60e51b815260206004820152601860248201527f6e616d654944206973206e6f74206f662061206c696e6b2e00000000000000006044820152606401610a8a565b5050506000908152600d6020526040902060048101546006909101549091565b6000818152600b60205260409020600601546001600160a01b031633811480611a6d57506001600160a01b03811630145b611a895760405162461bcd60e51b8152600401610a8a90614fde565b611a92826138ab565b5050565b6000818152600260205260408120546001600160a01b0316806109575760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610a8a565b606060046000838152600d602052604090206001015460ff166004811115611b2057611b20614b4b565b03611b78576000828152600d60209081526040808320600481015460069091015481855282852081865294839020925191949093611b60939192016150ae565b60405160208183030381529060405292505050919050565b6000828152600d602052604090208054611b9190614b17565b80601f0160208091040260200160405190810160405280929190818152602001828054611bbd90614b17565b8015611c0a5780601f10611bdf57610100808354040283529160200191611c0a565b820191906000526020600020905b815481529060010190602001808311611bed57829003601f168201915b50505050509050919050565b60006001600160a01b038216611c805760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610a8a565b506001600160a01b031660009081526003602052604090205490565b611ca46136b8565b611cae600061390e565b565b6000818152600b6020526040812054610100900460ff16158015610957575061095782611dc0565b60008160036000828152600d602052604090206001015460ff166004811115611d0357611d03614b4b565b14611d505760405162461bcd60e51b815260206004820152601b60248201527f6e616d654944206973206e6f74206f662061207375626e616d652e00000000006044820152606401610a8a565b50506000908152600d602052604090206004015490565b6000828152600d60205260408120600701805483908110611d8a57611d8a614c68565b9060005260206000200154905092915050565b6000828152600d60205260408120600901805483908110611d8a57611d8a614c68565b6000805b6000838152600b60205260409020600101548110156113e3576000838152600b60205260408120600101805483908110611e0057611e00614c68565b60009182526020808320600290920290910154868352600b9091526040822060010180546001600160a01b0390921693509084908110611e4257611e42614c68565b9060005260206000209060020201600101549050816001600160a01b0316637827136b826040518263ffffffff1660e01b8152600401611e8491815260200190565b602060405180830381865afa158015611ea1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ec59190614c7e565b611ed457506000949350505050565b50508080611ee190614cb1565b915050611dc4565b6000838152600b602090815260408083206001600160a01b03861684526002018252808320848452909152812054611f22576000611f25565b60015b949350505050565b60606001805461096c90614b17565b6000828152600b602052604081205460ff161580611f7f57506000838152600b602090815260408083206001600160a01b038616845260030190915290205460ff165b9392505050565b611a92338383613960565b6000828152600d602052604081206002015483904210611fc35760405162461bcd60e51b8152600401610a8a90614b61565b6000838152600d602052604090206002015483904210611ff55760405162461bcd60e51b8152600401610a8a90614b61565b843361200082611a96565b6001600160a01b0316146120265760405162461bcd60e51b8152600401610a8a906150d7565b6000600261203388613a2e565b61203c88613a2e565b60405160200161204d92919061511b565b60408051601f198184030181529082905261206791614e6e565b602060405180830381855afa158015612084573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906120a79190614e8a565b9050600080828152600d602052604090206001015460ff1660048111156120d0576120d0614b4b565b1461211d5760405162461bcd60e51b815260206004820152601d60248201527f576f6f6c62616c6c3a206c696e6b2065786973747320616c72656164790000006044820152606401610a8a565b61212f61212988611a96565b82613712565b6000818152600d6020908152604080832060018082018054600460ff1991821681179092558d8752848720600280820154908601559184018e9055600684018d90556005909301805462ffffff60a01b19166201010160a01b17905560070180548083018255908652848620018690558a85528285206008018054808301825590865284862001869055858552600b909352922080549092161790556121d6873083613ac1565b6121e1813089613c53565b60408051888152602081018890529081018290527fb332c07fcda76beaf360cc5272ab41e8bda746e3d35777c5a1853137f6dc26829060600160405180910390a19695505050505050565b6000828152600d60205260408120600801805483908110611d8a57611d8a614c68565b600061225b8383611f3c565b8015611f7f5750611f7f8383610dc0565b60008282735fbdb2315678afecb367f032d93f642f64180aa3635f8b54e883836040518363ffffffff1660e01b81526004016122a9929190614cf3565b602060405180830381865af41580156122c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122ea9190614c7e565b156123075760405162461bcd60e51b8152600401610a8a90614d1a565b604051630bf16a9d60e31b8152735fbdb2315678afecb367f032d93f642f64180aa390635f8b54e8906123409085908590600401614d6c565b602060405180830381865af415801561235d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123819190614c7e565b1561239e5760405162461bcd60e51b8152600401610a8a90614d93565b604051630bf16a9d60e31b8152735fbdb2315678afecb367f032d93f642f64180aa390635f8b54e8906123d79085908590600401614de5565b602060405180830381865af41580156123f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124189190614c7e565b156124355760405162461bcd60e51b8152600401610a8a90614e0c565b853361244082611a96565b6001600160a01b0316146124665760405162461bcd60e51b8152600401610a8a906150d7565b6000600261247389613a2e565b888860405160200161248793929190615157565b60408051601f19818403018152908290526124a191614e6e565b602060405180830381855afa1580156124be573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906124e19190614e8a565b9050600080828152600d602052604090206001015460ff16600481111561250a5761250a614b4b565b146125575760405162461bcd60e51b815260206004820181905260248201527f576f6f6c62616c6c3a207375626e616d652065786973747320616c72656164796044820152606401610a8a565b61256361212989611a96565b6000818152600d6020526040902061257c878983614ee9565b506000818152600d602052604080822060018101805460ff191660031790558a835290822060029081015492849052810191909155600481018990556005018054600160a01b60ff60a01b199091161790556125d981308a613c53565b6000888152600d6020908152604080832060090180546001810182559084529190922001829055517fcabede45d7c427af7b3ecf568d620c149b3c9b2373edad216ae759238cef13599061263490899089908c90869061518e565b60405180910390a1979650505050505050565b816000612653826132e5565b91505080156126be576000828152600b60205260409020600601546001600160a01b031633148061269d57506000828152600b60205260409020600601546001600160a01b031630145b6126b95760405162461bcd60e51b8152600401610a8a90614be5565b6126e3565b6126c733610c95565b6126e35760405162461bcd60e51b8152600401610a8a90614b98565b6126ef86868686613ea0565b505050505050565b813361270282611a96565b6001600160a01b0316146127285760405162461bcd60e51b8152600401610a8a906150d7565b506000918252600d602052604090912060050180546001600160a01b0319166001600160a01b03909216919091179055565b606061276582613331565b6000828152600660205260408120805461277e90614b17565b80601f01602080910402602001604051908101604052809291908181526020018280546127aa90614b17565b80156127f75780601f106127cc576101008083540402835291602001916127f7565b820191906000526020600020905b8154815290600101906020018083116127da57829003601f168201915b50505050509050600061281560408051602081019091526000815290565b90508051600003612827575092915050565b815115612841578082604051602001611b609291906151b5565b611f2584613ed3565b8261285533826133fe565b6128715760405162461bcd60e51b8152600401610a8a90614b98565b838383816001600160a01b0316636352211e826040518263ffffffff1660e01b81526004016128a291815260200190565b602060405180830381865afa1580156128bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128e391906151e4565b6001600160a01b03166128f584611a96565b6001600160a01b03161461291b5760405162461bcd60e51b8152600401610a8a90615201565b612926878787613c53565b50505050505050565b8261293a33826133fe565b6129565760405162461bcd60e51b8152600401610a8a90614b98565b610c13848484613ac1565b6000818152600b602052604081205460ff161580156109575750610957826112ba565b8161298f33826133fe565b6129ab5760405162461bcd60e51b8152600401610a8a90614b98565b506000918252600b6020526040909120805460ff19169115919091179055565b6000838152600b602090815260408083206001600160a01b03861684526005018252808320848452909152902054612a7e5760405162461bcd60e51b815260206004820152604a60248201527f4c6f636b656420546f6b656e3a204c6f636b6564494420696e20636f6e74726160448201527f6374204c6f636b6564436f6e7472616374206973206e6f74206c6f636b6564206064820152691d1bc81d1bdad95b925160b21b608482015260a401610a8a565b6000838152600b602090815260408083206001600160a01b03861684526005018252808320848452909152812054612ab890600190615254565b6000858152600b602081815260408084206001600160a01b038916855260058101835281852088865283529084208490558884529190526004015491925090612b0390600190615254565b6000868152600b6020526040902060040180549192509082908110612b2a57612b2a614c68565b9060005260206000209060020201600b60008781526020019081526020016000206004018381548110612b5f57612b5f614c68565b60009182526020808320845460029093020180546001600160a01b0319166001600160a01b039093169290921782556001938401549390910192909255868152600b90915260409020600401805480612bba57612bba615267565b6000828152602081206002600019939093019283020180546001600160a01b0319168155600101559055604051636198e33960e01b8152600481018490526001600160a01b03851690636198e33990602401600060405180830381600087803b158015612c2657600080fd5b505af1158015612c3a573d6000803e3d6000fd5b505050505050505050565b828282816001600160a01b0316636352211e826040518263ffffffff1660e01b8152600401612c7691815260200190565b602060405180830381865afa158015612c93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cb791906151e4565b6001600160a01b0316612cc984611a96565b6001600160a01b031614612cef5760405162461bcd60e51b8152600401610a8a90615201565b846001600160a01b038116331480612d0f57506001600160a01b03811630145b612d2b5760405162461bcd60e51b8152600401610a8a90614fde565b6000878152600b602090815260408083206001600160a01b038a168452600501825280832088845290915290205415612de55760405162461bcd60e51b815260206004820152605060248201527f4c6f636b656420546f6b656e3a20746f6b656e494420697320616c726561647960448201527f206c6f636b656420746f204c6f636b656449442066726f6d20636f6e7472616360648201526f1d08131bd8dad95910dbdb9d1c9858dd60821b608482015260a401610a8a565b6040805180820182526001600160a01b0388168152602080820188905260008a8152600b9091529190912060040154612e1f90600161527d565b6000988952600b60208181526040808c206001600160a01b039b8c168d52600581018352818d209a8d529982528b209290925581526004909601805460018082018355918a529887902082516002909a020180546001600160a01b0319169990981698909817875590940151949095019390935550505050565b6000838152600b602090815260408083206001600160a01b038616845260020182528083208484529091529020548290612f495760405162461bcd60e51b815260206004820152604560248201527f4c43543a20746f6b656e4944206973206e6f7420646570656e64656e74206f6e60448201527f20435469642066726f6d20636f6e7472616374204354436f6e74726163744164606482015264647265737360d81b608482015260a401610a8a565b612f5333856133fe565b8015612fc3575060405163b256456960e01b8152600481018390526001600160a01b0382169063b256456990602401602060405180830381865afa158015612f9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fc39190614c7e565b8015613033575060405163637c46a560e11b8152600481018390526001600160a01b0382169063c6f88d4a90602401602060405180830381865afa15801561300f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130339190614c7e565b806130465750336001600160a01b038416145b6130ac5760405162461bcd60e51b815260206004820152603160248201527f4c43543a2073656e646572206973206e6f74207065726d697474656420746f2060448201527072656d6f766520646570656e64656e637960781b6064820152608401610a8a565b6000848152600b602090815260408083206001600160a01b038716845260020182528083208584529091528120546130e690600190615254565b6000868152600b602081815260408084206001600160a01b038a168552600281018352818520898652835290842084905589845291905260019081015492935090916131329190615254565b6000878152600b602052604090206001018054919250908290811061315957613159614c68565b9060005260206000209060020201600b6000888152602001908152602001600020600101838154811061318e5761318e614c68565b60009182526020808320845460029093020180546001600160a01b0319166001600160a01b0390931692909217825560019384015491840191909155888252600b905260409020018054806131e5576131e5615267565b60008281526020812060026000199093019283020180546001600160a01b03191681556001015590556040517f690094bc4403e5fdf0ec1828b799e4015d5b39b33cfeb65df06a242febf4daf49061325c908890889088909283526001600160a01b03919091166020830152604082015260600190565b60405180910390a1505050505050565b6132746136b8565b6001600160a01b0381166132d95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610a8a565b6132e28161390e565b50565b6000908152600b6020526040902060068101546007909101546001600160a01b0390911691565b60006001600160e01b0319821663780e9d6360e01b1480610957575061095782613f46565b6000818152600260205260409020546001600160a01b03166132e25760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610a8a565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906133c582611a96565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061340a83611a96565b9050806001600160a01b0316846001600160a01b0316148061345157506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80611f255750836001600160a01b031661346a846109ef565b6001600160a01b031614949350505050565b6000828152600260205260409020546001600160a01b03166134f75760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610a8a565b600082815260066020526040902061350f8282615290565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b826001600160a01b031661355a82611a96565b6001600160a01b0316146135805760405162461bcd60e51b8152600401610a8a90615350565b6001600160a01b0382166135e25760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610a8a565b6135ef8383836001613f96565b826001600160a01b031661360282611a96565b6001600160a01b0316146136285760405162461bcd60e51b8152600401610a8a90615350565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600c546001600160a01b03163314611cae5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a8a565b6001600160a01b0382166137685760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610a8a565b6000818152600260205260409020546001600160a01b0316156137cd5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610a8a565b6137db600083836001613f96565b6000818152600260205260409020546001600160a01b0316156138405760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610a8a565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000818152600b60205260408082206006810180546001600160a01b031916905560070191909155517ff27b6ce5b2f5e68ddb2fd95a8a909d4ecf1daaac270935fff052feacb24f1842906139039083815260200190565b60405180910390a150565b600c80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b0316036139c15760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610a8a565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b60606000613a3b836141a4565b600101905060008167ffffffffffffffff811115613a5b57613a5b6149f3565b6040519080825280601f01601f191660200182016040528015613a85576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084613a8f57509392505050565b6000838152600b602090815260408083206001600160a01b0386168452600201825280832084845290915290205415613b625760405162461bcd60e51b815260206004820152603b60248201527f4c43543a20746f6b656e494420616c726561647920646570656e6473206f6e2060448201527f435469642066726f6d204354436f6e74726163744164647265737300000000006064820152608401610a8a565b6040805180820182526001600160a01b038416815260208082018490526000868152600b90915291909120600190810154613b9c9161527d565b6000858152600b602081815260408084206001600160a01b03898116808752600280840186528488208b89528652848820989098559484526001918201805480840182559087529584902088519690970290960180546001600160a01b0319169590961694909417855585820151949093019390935581518781529283015281018390527f142495d58c8fd8701db1b1d5a807743699bc5f87d97a4b64006eaeb9e9ac5e899060600160405180910390a150505050565b600080613c5f856132e5565b9150915080600014613cc35760405162461bcd60e51b815260206004820152602760248201527f4c6f636b656420546f6b656e3a20746f6b656e494420697320616c7265616479604482015266081b1bd8dad95960ca1b6064820152608401610a8a565b60405163f6aacfb160e01b8152600481018490526001600160a01b0385169063f6aacfb1906024016040805180830381865afa158015613d07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613d2b9190615395565b90925090506001600160a01b03821630141580613d485750848114155b613dbc576040805162461bcd60e51b81526020600482015260248101919091527f4c6f636b656420546f6b656e3a20446561646c6f636b2064657465636574656460448201527f21204c6f636b696e674944206973206c6f636b656420746f20746f6b656e49446064820152608401610a8a565b6000858152600b6020526040908190206006810180546001600160a01b0319166001600160a01b0388169081179091556007909101859055905163edee396560e01b8152600481018590523060248201526044810187905263edee396590606401600060405180830381600087803b158015613e3757600080fd5b505af1158015613e4b573d6000803e3d6000fd5b5050604080518881526001600160a01b03881660208201529081018690527f697d86e6398a689ac7b8bea2b6f3f65704d1b113d2d31863c6d26501e7265cff9250606001905060405180910390a15050505050565b613eab848484613547565b613eb78484848461427c565b610c135760405162461bcd60e51b8152600401610a8a906153c3565b6060613ede82613331565b6000613ef560408051602081019091526000815290565b90506000815111613f155760405180602001604052806000815250611f7f565b80613f1f84613a2e565b604051602001613f309291906151b5565b6040516020818303038152906040529392505050565b60006001600160e01b031982166380ac58cd60e01b1480613f7757506001600160e01b03198216635b5e139f60e01b145b8061095757506301ffc9a760e01b6001600160e01b0319831614610957565b613fa28484848461437d565b613fac8284611f3c565b6140105760405162461bcd60e51b815260206004820152602f60248201527f4c43543a2074686520746f6b656e207374617475732069732073657420746f2060448201526e6e6f6e7472616e7366657261626c6560881b6064820152608401610a8a565b61401a8284610dc0565b61408c5760405162461bcd60e51b815260206004820152603c60248201527f4c43543a2074686520746f6b656e20646570656e6473206f6e206174206c656160448201527f7374206f6e65206e6f6e7472616e7366657261626c6520746f6b656e000000006064820152608401610a8a565b60005b6000838152600b6020526040902060040154811015610cc2576000838152600b602052604081206004018054839081106140cb576140cb614c68565b60009182526020808320600290920290910154868352600b9091526040822060040180546001600160a01b039092169350908490811061410d5761410d614c68565b60009182526020909120600160029092020101546040516323b872dd60e01b81526001600160a01b038981166004830152888116602483015260448201839052919250908316906323b872dd90606401600060405180830381600087803b15801561417757600080fd5b505af115801561418b573d6000803e3d6000fd5b505050505050808061419c90614cb1565b91505061408f565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106141e35772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef8100000000831061420f576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061422d57662386f26fc10000830492506010015b6305f5e1008310614245576305f5e100830492506008015b612710831061425957612710830492506004015b6064831061426b576064830492506002015b600a83106109575760010192915050565b60006001600160a01b0384163b1561437257604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906142c0903390899088908890600401615415565b6020604051808303816000875af19250505080156142fb575060408051601f3d908101601f191682019092526142f891810190615452565b60015b614358573d808015614329576040519150601f19603f3d011682016040523d82523d6000602084013e61432e565b606091505b5080516000036143505760405162461bcd60e51b8152600401610a8a906153c3565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611f25565b506001949350505050565b60018111156143ec5760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b6064820152608401610a8a565b816001600160a01b0385166144485761444381600980546000838152600a60205260408120829055600182018355919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0155565b61446b565b836001600160a01b0316856001600160a01b03161461446b5761446b85826144aa565b6001600160a01b0384166144875761448281614547565b610cc2565b846001600160a01b0316846001600160a01b031614610cc257610cc284826145f6565b600060016144b784611c16565b6144c19190615254565b600083815260086020526040902054909150808214614514576001600160a01b03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b5060009182526008602090815260408084208490556001600160a01b039094168352600781528383209183525290812055565b60095460009061455990600190615254565b6000838152600a60205260408120546009805493945090928490811061458157614581614c68565b9060005260206000200154905080600983815481106145a2576145a2614c68565b6000918252602080832090910192909255828152600a909152604080822084905585825281205560098054806145da576145da615267565b6001900381819060005260206000200160009055905550505050565b600061460183611c16565b6001600160a01b039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b50805460008255600202906000526020600020908101906132e291905b8082111561467c5780546001600160a01b031916815560006001820155600201614657565b5090565b6001600160e01b0319811681146132e257600080fd5b6000602082840312156146a857600080fd5b8135611f7f81614680565b60005b838110156146ce5781810151838201526020016146b6565b50506000910152565b600081518084526146ef8160208601602086016146b3565b601f01601f19169290920160200192915050565b602081526000611f7f60208301846146d7565b60006020828403121561472857600080fd5b5035919050565b6001600160a01b03811681146132e257600080fd5b6000806040838503121561475757600080fd5b82356147628161472f565b946020939093013593505050565b60008083601f84011261478257600080fd5b50813567ffffffffffffffff81111561479a57600080fd5b6020830191508360208285010111156147b257600080fd5b9250929050565b6000806000604084860312156147ce57600080fd5b83359250602084013567ffffffffffffffff8111156147ec57600080fd5b6147f886828701614770565b9497909650939450505050565b60008060006060848603121561481a57600080fd5b83356148258161472f565b925060208401356148358161472f565b929592945050506040919091013590565b80151581146132e257600080fd5b60008060006060848603121561486957600080fd5b83359250602084013561487b8161472f565b9150604084013561488b81614846565b809150509250925092565b600080604083850312156148a957600080fd5b8235915060208301356148bb8161472f565b809150509250929050565b600080604083850312156148d957600080fd5b8235915060208301356148bb81614846565b600080604083850312156148fe57600080fd5b50508035926020909101359150565b60008060008060006080868803121561492557600080fd5b853567ffffffffffffffff81111561493c57600080fd5b61494888828901614770565b909650945050602086013561495c8161472f565b92506040860135915060608601356149738161472f565b809150509295509295909350565b60006020828403121561499357600080fd5b8135611f7f8161472f565b6000806000606084860312156149b357600080fd5b8335925060208401356148358161472f565b600080604083850312156149d857600080fd5b82356149e38161472f565b915060208301356148bb81614846565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215614a1f57600080fd5b8435614a2a8161472f565b93506020850135614a3a8161472f565b925060408501359150606085013567ffffffffffffffff80821115614a5e57600080fd5b818701915087601f830112614a7257600080fd5b813581811115614a8457614a846149f3565b604051601f8201601f19908116603f01168101908382118183101715614aac57614aac6149f3565b816040528281528a6020848701011115614ac557600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215614afc57600080fd5b8235614b078161472f565b915060208301356148bb8161472f565b600181811c90821680614b2b57607f821691505b602082108103610ba657634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b6020808252601e908201527f576f6f6c62616c6c3a206e616d65494420646f65736e27742065786973740000604082015260600190565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b60208082526058908201527f4c6f636b656420546f6b656e3a20746f6b656e4944206973206c6f636b65642060408201527f616e642063616c6c6572206973206e6f742074686520636f6e7472616374206860608201527f6f6c64696e6720746865206c6f636b696e6720746f6b656e0000000000000000608082015260a00190565b634e487b7160e01b600052603260045260246000fd5b600060208284031215614c9057600080fd5b8151611f7f81614846565b634e487b7160e01b600052601160045260246000fd5b600060018201614cc357614cc3614c9b565b5060010190565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b604081526000614d07604083018486614cca565b9050601760f91b60208301529392505050565b60208082526032908201527f576f6f6c62616c6c3a206e616d652063616e2774206861766520272e2720636860408201527130b930b1ba32b939903bb4ba3434b71034b760711b606082015260800190565b604081526000614d80604083018486614cca565b9050602360f81b60208301529392505050565b60208082526032908201527f576f6f6c62616c6c3a206e616d652063616e277420686176652027232720636860408201527130b930b1ba32b939903bb4ba3434b71034b760711b606082015260800190565b604081526000614df9604083018486614cca565b9050601d60f91b60208301529392505050565b60208082526032908201527f576f6f6c62616c6c3a206e616d652063616e2774206861766520273a2720636860408201527130b930b1ba32b939903bb4ba3434b71034b760711b606082015260800190565b8183823760009101908152919050565b60008251614e808184602087016146b3565b9190910192915050565b600060208284031215614e9c57600080fd5b5051919050565b601f821115610b2b57600081815260208120601f850160051c81016020861015614eca5750805b601f850160051c820191505b818110156126ef57828155600101614ed6565b67ffffffffffffffff831115614f0157614f016149f3565b614f1583614f0f8354614b17565b83614ea3565b6000601f841160018114614f495760008515614f315750838201355b600019600387901b1c1916600186901b178355610cc2565b600083815260209020601f19861690835b82811015614f7a5786850135825560209485019460019092019101614f5a565b5086821015614f975760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b606081526000614fbd606083018688614cca565b6020830194909452506001600160a01b039190911660409091015292915050565b6020808252603f908201527f4c6f636b656420546f6b656e3a207472616e73616374696f6e206973206e6f7460408201527f2073656e742066726f6d2074686520636f727265637420636f6e747261637400606082015260800190565b6000815461504881614b17565b600182811680156150605760018114615075576150a4565b60ff19841687528215158302870194506150a4565b8560005260208060002060005b8581101561509b5781548a820152908401908201615082565b50505082870194505b5050505092915050565b60006150ba828561503b565b602360f81b81526150ce600182018561503b565b95945050505050565b60208082526024908201527f53656e646572206973206e6f7420746865206f776e6572206f6620746865206e60408201526330b6b29760e11b606082015260800190565b6000835161512d8184602088016146b3565b602360f81b908301908152835161514b8160018401602088016146b3565b01600101949350505050565b600084516151698184602089016146b3565b601760f91b908301908152838560018301376000930160010192835250909392505050565b6060815260006151a2606083018688614cca565b6020830194909452506040015292915050565b600083516151c78184602088016146b3565b8351908301906151db8183602088016146b3565b01949350505050565b6000602082840312156151f657600080fd5b8151611f7f8161472f565b60208082526033908201527f4c6f636b656420546f6b656e3a2074686520746f6b656e7320646f206e6f74206040820152723430bb32903a34329039b0b6b29037bbb732b960691b606082015260800190565b8181038181111561095757610957614c9b565b634e487b7160e01b600052603160045260246000fd5b8082018082111561095757610957614c9b565b815167ffffffffffffffff8111156152aa576152aa6149f3565b6152be816152b88454614b17565b84614ea3565b602080601f8311600181146152f357600084156152db5750858301515b600019600386901b1c1916600185901b1785556126ef565b600085815260208120601f198616915b8281101561532257888601518255948401946001909101908401615303565b50858210156153405787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b600080604083850312156153a857600080fd5b82516153b38161472f565b6020939093015192949293505050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090615448908301846146d7565b9695505050505050565b60006020828403121561546457600080fd5b8151611f7f8161468056fea2646970667358221220a997d21a2aa1541c1cceaabeb54cd9c27e4330140e8ba43480ca4c665e35348b64736f6c63430008140033",
    "sourceMap": "313:9493:38:-:0;;;2539:96;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2619:4;2625:6;2619:4;2625:6;1456:5:22;:13;2619:4:38;1456:5:22;:13;:::i;:::-;-1:-1:-1;1479:7:22;:17;1489:7;1479;:17;:::i;:::-;;1390:113;;3299:99:35;;936:32:18;955:12;:10;;;:12;;:::i;:::-;936:18;:32::i;:::-;2539:96:38;;313:9493;;640:96:28;719:10;;640:96::o;2426:187:18:-;2518:6;;;-1:-1:-1;;;;;2534:17:18;;;-1:-1:-1;;;;;;2534:17:18;;;;;;;2566:40;;2518:6;;;2534:17;2518:6;;2566:40;;2499:16;;2566:40;2489:124;2426:187;:::o;14:127:44:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:840;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;294:13;;-1:-1:-1;;;;;356:10:44;;;353:36;;;369:18;;:::i;:::-;444:2;438:9;412:2;498:13;;-1:-1:-1;;494:22:44;;;518:2;490:31;486:40;474:53;;;542:18;;;562:22;;;539:46;536:72;;;588:18;;:::i;:::-;628:10;624:2;617:22;663:2;655:6;648:18;685:4;675:14;;730:3;725:2;720;712:6;708:15;704:24;701:33;698:53;;;747:1;744;737:12;698:53;769:1;760:10;;779:133;793:2;790:1;787:9;779:133;;;881:14;;;877:23;;871:30;850:14;;;846:23;;839:63;804:10;;;;779:133;;;954:1;932:15;;;928:24;;;921:35;;;;936:6;146:840;-1:-1:-1;;;;146:840:44:o;991:562::-;1090:6;1098;1151:2;1139:9;1130:7;1126:23;1122:32;1119:52;;;1167:1;1164;1157:12;1119:52;1194:16;;-1:-1:-1;;;;;1259:14:44;;;1256:34;;;1286:1;1283;1276:12;1256:34;1309:61;1362:7;1353:6;1342:9;1338:22;1309:61;:::i;:::-;1299:71;;1416:2;1405:9;1401:18;1395:25;1379:41;;1445:2;1435:8;1432:16;1429:36;;;1461:1;1458;1451:12;1429:36;;1484:63;1539:7;1528:8;1517:9;1513:24;1484:63;:::i;:::-;1474:73;;;991:562;;;;;:::o;1558:380::-;1637:1;1633:12;;;;1680;;;1701:61;;1755:4;1747:6;1743:17;1733:27;;1701:61;1808:2;1800:6;1797:14;1777:18;1774:38;1771:161;;1854:10;1849:3;1845:20;1842:1;1835:31;1889:4;1886:1;1879:15;1917:4;1914:1;1907:15;1771:161;;1558:380;;;:::o;2069:545::-;2171:2;2166:3;2163:11;2160:448;;;2207:1;2232:5;2228:2;2221:17;2277:4;2273:2;2263:19;2347:2;2335:10;2331:19;2328:1;2324:27;2318:4;2314:38;2383:4;2371:10;2368:20;2365:47;;;-1:-1:-1;2406:4:44;2365:47;2461:2;2456:3;2452:12;2449:1;2445:20;2439:4;2435:31;2425:41;;2516:82;2534:2;2527:5;2524:13;2516:82;;;2579:17;;;2560:1;2549:13;2516:82;;;2520:3;;;2160:448;2069:545;;;:::o;2790:1352::-;2910:10;;-1:-1:-1;;;;;2932:30:44;;2929:56;;;2965:18;;:::i;:::-;2994:97;3084:6;3044:38;3076:4;3070:11;3044:38;:::i;:::-;3038:4;2994:97;:::i;:::-;3146:4;;3210:2;3199:14;;3227:1;3222:663;;;;3929:1;3946:6;3943:89;;;-1:-1:-1;3998:19:44;;;3992:26;3943:89;-1:-1:-1;;2747:1:44;2743:11;;;2739:24;2735:29;2725:40;2771:1;2767:11;;;2722:57;4045:81;;3192:944;;3222:663;2016:1;2009:14;;;2053:4;2040:18;;-1:-1:-1;;3258:20:44;;;3376:236;3390:7;3387:1;3384:14;3376:236;;;3479:19;;;3473:26;3458:42;;3571:27;;;;3539:1;3527:14;;;;3406:19;;3376:236;;;3380:3;3640:6;3631:7;3628:19;3625:201;;;3701:19;;;3695:26;-1:-1:-1;;3784:1:44;3780:14;;;3796:3;3776:24;3772:37;3768:42;3753:58;3738:74;;3625:201;-1:-1:-1;;;;;3872:1:44;3856:14;;;3852:22;3839:36;;-1:-1:-1;2790:1352:44:o;:::-;313:9493:38;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106103995760003560e01c80637827136b116101e9578063b88d4fde1161010f578063ddaec205116100ad578063edee39651161007c578063edee3965146108ac578063eee40354146108bf578063f2fde38b146108d2578063f6aacfb1146108e557600080fd5b8063ddaec20514610837578063dfe28fbf1461084a578063e5c8e4311461085d578063e985e9c51461087057600080fd5b8063c87b56dd116100e9578063c87b56dd146107c1578063cf27cfc4146107d4578063d1af032c146107e7578063d6034c261461082457600080fd5b8063b88d4fde14610772578063bc7b6d6214610785578063c6f88d4a1461079857600080fd5b806395d89b4111610187578063a6ed7ada11610156578063a6ed7ada14610715578063ac3e2c6f14610728578063b25645691461073b578063b5916ab21461075f57600080fd5b806395d89b41146106d457806399d112fa146106dc578063a22cb465146106ef578063a4aec0751461070257600080fd5b80638117af2b116101c35780638117af2b1461068a57806386c048c51461069d5780638da5cb5b146106b05780638fc76be7146106c157600080fd5b80637827136b146106515780637aadccdb1461066457806380d273301461067757600080fd5b806342842e0e116102ce5780635d57bf7c1161026c5780636b8ff5741161023b5780636b8ff5741461060057806370a0823114610613578063715018a61461062657806372fdc40e1461062e57600080fd5b80635d57bf7c146105945780636198e339146105b75780636352211e146105ca578063692c85ab146105dd57600080fd5b8063460727b1116102a8578063460727b1146105335780634671afe9146105465780634f6ccce714610559578063515f85661461056c57600080fd5b806342842e0e146104fa57806342966c681461050d5780634541eda31461052057600080fd5b806318160ddd1161033b5780632f745c59116103155780632f745c591461049e57806332f4da4a146104b157806333699624146104c457806336f4ede4146104d757600080fd5b806318160ddd1461046657806323b872dd146104785780632e5466e61461048b57600080fd5b8063095ea7b311610377578063095ea7b3146104065780630ae5fa411461041b578063108eaa4e14610440578063162094c41461045357600080fd5b806301ffc9a71461039e57806306fdde03146103c6578063081812fc146103db575b600080fd5b6103b16103ac366004614696565b610917565b60405190151581526020015b60405180910390f35b6103ce61095d565b6040516103bd9190614703565b6103ee6103e9366004614716565b6109ef565b6040516001600160a01b0390911681526020016103bd565b610419610414366004614744565b610a16565b005b61042e610429366004614716565b610b30565b60405160ff90911681526020016103bd565b6103ee61044e366004614716565b610b56565b6104196104613660046147b9565b610bac565b6009545b6040519081526020016103bd565b610419610486366004614805565b610c19565b610419610499366004614854565b610cc9565b61046a6104ac366004614744565b610d2a565b6103b16104bf366004614896565b610dc0565b6104196104d23660046148c6565b610efa565b61046a6104e5366004614716565b6000908152600d602052604090206009015490565b610419610508366004614805565b610f46565b61041961051b366004614716565b610f61565b6103b161052e366004614716565b6112ba565b6104196105413660046148eb565b6113ec565b61046a61055436600461490d565b611536565b61046a610567366004614716565b611910565b61057f61057a366004614716565b6119a3565b604080519283526020830191909152016103bd565b61046a6105a2366004614716565b6000908152600d602052604090206007015490565b6104196105c5366004614716565b611a3c565b6103ee6105d8366004614716565b611a96565b61046a6105eb366004614716565b6000908152600d602052604090206008015490565b6103ce61060e366004614716565b611af6565b61046a610621366004614981565b611c16565b610419611c9c565b61046a61063c366004614716565b6000908152600d602052604090206002015490565b6103b161065f366004614716565b611cb0565b61046a610672366004614716565b611cd8565b61046a6106853660046148eb565b611d67565b61046a6106983660046148eb565b611d9d565b6103b16106ab366004614716565b611dc0565b600c546001600160a01b03166103ee565b6103b16106cf36600461499e565b611ee9565b6103ce611f2d565b6103b16106ea366004614896565b611f3c565b6104196106fd3660046149c5565b611f86565b61046a6107103660046148eb565b611f91565b61046a6107233660046148eb565b61222c565b6103b1610736366004614896565b61224f565b6103b1610749366004614716565b6000908152600b602052604090205460ff161590565b61046a61076d3660046147b9565b61226c565b610419610780366004614a09565b612647565b610419610793366004614896565b6126f7565b6103b16107a6366004614716565b6000908152600b6020526040902054610100900460ff161590565b6103ce6107cf366004614716565b61275a565b6104196107e236600461499e565b61284a565b6103b16107f5366004614896565b6000828152600b602090815260408083206001600160a01b038516845260030190915290205460ff1692915050565b61041961083236600461499e565b61292f565b6103b1610845366004614716565b612961565b6104196108583660046148c6565b612984565b61041961086b36600461499e565b6129cb565b6103b161087e366004614ae9565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6104196108ba36600461499e565b612c45565b6104196108cd36600461499e565b612e99565b6104196108e0366004614981565b61326c565b6108f86108f3366004614716565b6132e5565b604080516001600160a01b0390931683526020830191909152016103bd565b60006001600160e01b03198216631e6f6d8b60e31b148061094857506001600160e01b0319821663012a552760e41b145b8061095757506109578261330c565b92915050565b60606000805461096c90614b17565b80601f016020809104026020016040519081016040528092919081815260200182805461099890614b17565b80156109e55780601f106109ba576101008083540402835291602001916109e5565b820191906000526020600020905b8154815290600101906020018083116109c857829003601f168201915b5050505050905090565b60006109fa82613331565b506000908152600460205260409020546001600160a01b031690565b6000610a2182611a96565b9050806001600160a01b0316836001600160a01b031603610a935760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b0382161480610aaf5750610aaf813361087e565b610b215760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610a8a565b610b2b8383613390565b505050565b6000818152600d602052604081206001015460ff16600481111561095757610957614b4b565b6000818152600d602052604081206002015482904210610b885760405162461bcd60e51b8152600401610a8a90614b61565b6000838152600d60205260409020600501546001600160a01b031691505b50919050565b82610bb733826133fe565b610bd35760405162461bcd60e51b8152600401610a8a90614b98565b610c138484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061347c92505050565b50505050565b806000610c25826132e5565b9150508015610c90576000828152600b60205260409020600601546001600160a01b0316331480610c6f57506000828152600b60205260409020600601546001600160a01b031630145b610c8b5760405162461bcd60e51b8152600401610a8a90614be5565b610cb7565b610c9b335b836133fe565b610cb75760405162461bcd60e51b8152600401610a8a90614b98565b610cc2858585613547565b5050505050565b82610cd433826133fe565b610cf05760405162461bcd60e51b8152600401610a8a90614b98565b506000928352600b602090815260408085206001600160a01b03949094168552600390930190529120805460ff1916911515919091179055565b6000610d3583611c16565b8210610d975760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610a8a565b506001600160a01b03919091166000908152600760209081526040808320938352929052205490565b6000805b6000848152600b6020526040902060010154811015610ef0576000848152600b60205260408120600101805483908110610e0057610e00614c68565b60009182526020808320600290920290910154878352600b9091526040822060010180546001600160a01b0390921693509084908110610e4257610e42614c68565b600091825260209091206001600290920201015460405163ac3e2c6f60e01b8152600481018290526001600160a01b0387811660248301529192509083169063ac3e2c6f90604401602060405180830381865afa158015610ea7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ecb9190614c7e565b610edb5760009350505050610957565b50508080610ee890614cb1565b915050610dc4565b5060019392505050565b81610f0533826133fe565b610f215760405162461bcd60e51b8152600401610a8a90614b98565b506000918252600b6020526040909120805461ff001916911561010002919091179055565b610b2b83838360405180602001604052806000815250612647565b80610f6c33826133fe565b610f885760405162461bcd60e51b8152600401610a8a90614b98565b610f9182611cb0565b6110035760405162461bcd60e51b815260206004820152603e60248201527f4c43543a2074686520746f6b656e206f72206f6e65206f662069747320436f6d60448201527f6d616e64657220546f6b656e7320617265206e6f74206275726e61626c6500006064820152608401610a8a565b60005b6000838152600b602052604090206004015481101561110d576000838152600b6020526040812060040180548390811061104257611042614c68565b60009182526020808320600290920290910154868352600b9091526040822060040180546001600160a01b039092169350908490811061108457611084614c68565b9060005260206000209060020201600101549050816001600160a01b03166342966c68826040518263ffffffff1660e01b81526004016110c691815260200190565b600060405180830381600087803b1580156110e057600080fd5b505af11580156110f4573d6000803e3d6000fd5b505050505050808061110590614cb1565b915050611006565b5060005b6000838152600b60205260409020600401548110156111bb576000838152600b6020526040812060040180548390811061114d5761114d614c68565b60009182526020808320604080518082018252600290940290910180546001600160a01b039081168552600190910154848401908152898652600b845282862094519091168552600590930182528084209251845291905281205550806111b381614cb1565b915050611111565b5060005b6000838152600b6020526040902060010154811015611267576000838152600b602052604081206001018054839081106111fb576111fb614c68565b60009182526020808320604080518082018252600294850290920180546001600160a01b0390811684526001909101548385019081528a8752600b855282872093519091168652919093018252828420905184529052812055508061125f81614cb1565b9150506111bf565b506000828152600b60205260408120805461ffff191681559061128d600183018261463a565b61129b60048301600061463a565b506006810180546001600160a01b031916905560006007909101555050565b6000805b6000838152600b60205260409020600101548110156113e3576000838152600b602052604081206001018054839081106112fa576112fa614c68565b60009182526020808320600290920290910154868352600b9091526040822060010180546001600160a01b039092169350908490811061133c5761133c614c68565b9060005260206000209060020201600101549050816001600160a01b031663ddaec205826040518263ffffffff1660e01b815260040161137e91815260200190565b602060405180830381865afa15801561139b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113bf9190614c7e565b6113ce57506000949350505050565b505080806113db90614cb1565b9150506112be565b50600192915050565b6113f46136b8565b6000828152600d6020526040902060020154829042106114265760405162461bcd60e51b8152600401610a8a90614b61565b6000838152600d60205260409020600201546114a35760405162461bcd60e51b815260206004820152603660248201527f576f6f6c62616c6c3a206e616d654944206d757374206265206f662061207265604482015275676973746572656420576f6f6c62616c6c206e616d6560501b6064820152608401610a8a565b6000838152600d602052604090206002015482116115205760405162461bcd60e51b815260206004820152603460248201527f576f6f6c62616c6c3a206e657754696d655374616d70206d757374206265206160448201527366746572207468652063757272656e74206f6e6560601b6064820152608401610a8a565b506000918252600d602052604090912060020155565b60008585735fbdb2315678afecb367f032d93f642f64180aa3635f8b54e883836040518363ffffffff1660e01b8152600401611573929190614cf3565b602060405180830381865af4158015611590573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b49190614c7e565b156115d15760405162461bcd60e51b8152600401610a8a90614d1a565b604051630bf16a9d60e31b8152735fbdb2315678afecb367f032d93f642f64180aa390635f8b54e89061160a9085908590600401614d6c565b602060405180830381865af4158015611627573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061164b9190614c7e565b156116685760405162461bcd60e51b8152600401610a8a90614d93565b604051630bf16a9d60e31b8152735fbdb2315678afecb367f032d93f642f64180aa390635f8b54e8906116a19085908590600401614de5565b602060405180830381865af41580156116be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e29190614c7e565b156116ff5760405162461bcd60e51b8152600401610a8a90614e0c565b6117076136b8565b60006002898960405160200161171e929190614e5e565b60408051601f198184030181529082905261173891614e6e565b602060405180830381855afa158015611755573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906117789190614e8a565b6000818152600d602052604090206002015490915042116117e75760405162461bcd60e51b8152602060048201526024808201527f576f6f6c62616c6c3a206e616d6520697320616c726561647920726567697374604482015263195c995960e21b6064820152608401610a8a565b42861161184b5760405162461bcd60e51b815260206004820152602c60248201527f576f6f6c62616c6c3a2065787069726174696f6e54696d657374616d7020697360448201526b081a5b881d1a19481c185cdd60a21b6064820152608401610a8a565b6118558782613712565b6000818152600d6020526040902061186e898b83614ee9565b506000818152600d6020526040908190206001808201805460ff19169091179055600281018890556003810180546001600160a01b038b81166001600160a01b0319928316179092556005909201805491891691909216179055517ff91c779959a8a2bcdd04028a67de654d91aa5933a98103778ad00b550811c9da906118fc908b908b9085908c90614fa9565b60405180910390a198975050505050505050565b600061191b60095490565b821061197e5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610a8a565b6009828154811061199157611991614c68565b90600052602060002001549050919050565b6000808260046000828152600d602052604090206001015460ff1660048111156119cf576119cf614b4b565b14611a1c5760405162461bcd60e51b815260206004820152601860248201527f6e616d654944206973206e6f74206f662061206c696e6b2e00000000000000006044820152606401610a8a565b5050506000908152600d6020526040902060048101546006909101549091565b6000818152600b60205260409020600601546001600160a01b031633811480611a6d57506001600160a01b03811630145b611a895760405162461bcd60e51b8152600401610a8a90614fde565b611a92826138ab565b5050565b6000818152600260205260408120546001600160a01b0316806109575760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610a8a565b606060046000838152600d602052604090206001015460ff166004811115611b2057611b20614b4b565b03611b78576000828152600d60209081526040808320600481015460069091015481855282852081865294839020925191949093611b60939192016150ae565b60405160208183030381529060405292505050919050565b6000828152600d602052604090208054611b9190614b17565b80601f0160208091040260200160405190810160405280929190818152602001828054611bbd90614b17565b8015611c0a5780601f10611bdf57610100808354040283529160200191611c0a565b820191906000526020600020905b815481529060010190602001808311611bed57829003601f168201915b50505050509050919050565b60006001600160a01b038216611c805760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610a8a565b506001600160a01b031660009081526003602052604090205490565b611ca46136b8565b611cae600061390e565b565b6000818152600b6020526040812054610100900460ff16158015610957575061095782611dc0565b60008160036000828152600d602052604090206001015460ff166004811115611d0357611d03614b4b565b14611d505760405162461bcd60e51b815260206004820152601b60248201527f6e616d654944206973206e6f74206f662061207375626e616d652e00000000006044820152606401610a8a565b50506000908152600d602052604090206004015490565b6000828152600d60205260408120600701805483908110611d8a57611d8a614c68565b9060005260206000200154905092915050565b6000828152600d60205260408120600901805483908110611d8a57611d8a614c68565b6000805b6000838152600b60205260409020600101548110156113e3576000838152600b60205260408120600101805483908110611e0057611e00614c68565b60009182526020808320600290920290910154868352600b9091526040822060010180546001600160a01b0390921693509084908110611e4257611e42614c68565b9060005260206000209060020201600101549050816001600160a01b0316637827136b826040518263ffffffff1660e01b8152600401611e8491815260200190565b602060405180830381865afa158015611ea1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ec59190614c7e565b611ed457506000949350505050565b50508080611ee190614cb1565b915050611dc4565b6000838152600b602090815260408083206001600160a01b03861684526002018252808320848452909152812054611f22576000611f25565b60015b949350505050565b60606001805461096c90614b17565b6000828152600b602052604081205460ff161580611f7f57506000838152600b602090815260408083206001600160a01b038616845260030190915290205460ff165b9392505050565b611a92338383613960565b6000828152600d602052604081206002015483904210611fc35760405162461bcd60e51b8152600401610a8a90614b61565b6000838152600d602052604090206002015483904210611ff55760405162461bcd60e51b8152600401610a8a90614b61565b843361200082611a96565b6001600160a01b0316146120265760405162461bcd60e51b8152600401610a8a906150d7565b6000600261203388613a2e565b61203c88613a2e565b60405160200161204d92919061511b565b60408051601f198184030181529082905261206791614e6e565b602060405180830381855afa158015612084573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906120a79190614e8a565b9050600080828152600d602052604090206001015460ff1660048111156120d0576120d0614b4b565b1461211d5760405162461bcd60e51b815260206004820152601d60248201527f576f6f6c62616c6c3a206c696e6b2065786973747320616c72656164790000006044820152606401610a8a565b61212f61212988611a96565b82613712565b6000818152600d6020908152604080832060018082018054600460ff1991821681179092558d8752848720600280820154908601559184018e9055600684018d90556005909301805462ffffff60a01b19166201010160a01b17905560070180548083018255908652848620018690558a85528285206008018054808301825590865284862001869055858552600b909352922080549092161790556121d6873083613ac1565b6121e1813089613c53565b60408051888152602081018890529081018290527fb332c07fcda76beaf360cc5272ab41e8bda746e3d35777c5a1853137f6dc26829060600160405180910390a19695505050505050565b6000828152600d60205260408120600801805483908110611d8a57611d8a614c68565b600061225b8383611f3c565b8015611f7f5750611f7f8383610dc0565b60008282735fbdb2315678afecb367f032d93f642f64180aa3635f8b54e883836040518363ffffffff1660e01b81526004016122a9929190614cf3565b602060405180830381865af41580156122c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122ea9190614c7e565b156123075760405162461bcd60e51b8152600401610a8a90614d1a565b604051630bf16a9d60e31b8152735fbdb2315678afecb367f032d93f642f64180aa390635f8b54e8906123409085908590600401614d6c565b602060405180830381865af415801561235d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123819190614c7e565b1561239e5760405162461bcd60e51b8152600401610a8a90614d93565b604051630bf16a9d60e31b8152735fbdb2315678afecb367f032d93f642f64180aa390635f8b54e8906123d79085908590600401614de5565b602060405180830381865af41580156123f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124189190614c7e565b156124355760405162461bcd60e51b8152600401610a8a90614e0c565b853361244082611a96565b6001600160a01b0316146124665760405162461bcd60e51b8152600401610a8a906150d7565b6000600261247389613a2e565b888860405160200161248793929190615157565b60408051601f19818403018152908290526124a191614e6e565b602060405180830381855afa1580156124be573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906124e19190614e8a565b9050600080828152600d602052604090206001015460ff16600481111561250a5761250a614b4b565b146125575760405162461bcd60e51b815260206004820181905260248201527f576f6f6c62616c6c3a207375626e616d652065786973747320616c72656164796044820152606401610a8a565b61256361212989611a96565b6000818152600d6020526040902061257c878983614ee9565b506000818152600d602052604080822060018101805460ff191660031790558a835290822060029081015492849052810191909155600481018990556005018054600160a01b60ff60a01b199091161790556125d981308a613c53565b6000888152600d6020908152604080832060090180546001810182559084529190922001829055517fcabede45d7c427af7b3ecf568d620c149b3c9b2373edad216ae759238cef13599061263490899089908c90869061518e565b60405180910390a1979650505050505050565b816000612653826132e5565b91505080156126be576000828152600b60205260409020600601546001600160a01b031633148061269d57506000828152600b60205260409020600601546001600160a01b031630145b6126b95760405162461bcd60e51b8152600401610a8a90614be5565b6126e3565b6126c733610c95565b6126e35760405162461bcd60e51b8152600401610a8a90614b98565b6126ef86868686613ea0565b505050505050565b813361270282611a96565b6001600160a01b0316146127285760405162461bcd60e51b8152600401610a8a906150d7565b506000918252600d602052604090912060050180546001600160a01b0319166001600160a01b03909216919091179055565b606061276582613331565b6000828152600660205260408120805461277e90614b17565b80601f01602080910402602001604051908101604052809291908181526020018280546127aa90614b17565b80156127f75780601f106127cc576101008083540402835291602001916127f7565b820191906000526020600020905b8154815290600101906020018083116127da57829003601f168201915b50505050509050600061281560408051602081019091526000815290565b90508051600003612827575092915050565b815115612841578082604051602001611b609291906151b5565b611f2584613ed3565b8261285533826133fe565b6128715760405162461bcd60e51b8152600401610a8a90614b98565b838383816001600160a01b0316636352211e826040518263ffffffff1660e01b81526004016128a291815260200190565b602060405180830381865afa1580156128bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128e391906151e4565b6001600160a01b03166128f584611a96565b6001600160a01b03161461291b5760405162461bcd60e51b8152600401610a8a90615201565b612926878787613c53565b50505050505050565b8261293a33826133fe565b6129565760405162461bcd60e51b8152600401610a8a90614b98565b610c13848484613ac1565b6000818152600b602052604081205460ff161580156109575750610957826112ba565b8161298f33826133fe565b6129ab5760405162461bcd60e51b8152600401610a8a90614b98565b506000918252600b6020526040909120805460ff19169115919091179055565b6000838152600b602090815260408083206001600160a01b03861684526005018252808320848452909152902054612a7e5760405162461bcd60e51b815260206004820152604a60248201527f4c6f636b656420546f6b656e3a204c6f636b6564494420696e20636f6e74726160448201527f6374204c6f636b6564436f6e7472616374206973206e6f74206c6f636b6564206064820152691d1bc81d1bdad95b925160b21b608482015260a401610a8a565b6000838152600b602090815260408083206001600160a01b03861684526005018252808320848452909152812054612ab890600190615254565b6000858152600b602081815260408084206001600160a01b038916855260058101835281852088865283529084208490558884529190526004015491925090612b0390600190615254565b6000868152600b6020526040902060040180549192509082908110612b2a57612b2a614c68565b9060005260206000209060020201600b60008781526020019081526020016000206004018381548110612b5f57612b5f614c68565b60009182526020808320845460029093020180546001600160a01b0319166001600160a01b039093169290921782556001938401549390910192909255868152600b90915260409020600401805480612bba57612bba615267565b6000828152602081206002600019939093019283020180546001600160a01b0319168155600101559055604051636198e33960e01b8152600481018490526001600160a01b03851690636198e33990602401600060405180830381600087803b158015612c2657600080fd5b505af1158015612c3a573d6000803e3d6000fd5b505050505050505050565b828282816001600160a01b0316636352211e826040518263ffffffff1660e01b8152600401612c7691815260200190565b602060405180830381865afa158015612c93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cb791906151e4565b6001600160a01b0316612cc984611a96565b6001600160a01b031614612cef5760405162461bcd60e51b8152600401610a8a90615201565b846001600160a01b038116331480612d0f57506001600160a01b03811630145b612d2b5760405162461bcd60e51b8152600401610a8a90614fde565b6000878152600b602090815260408083206001600160a01b038a168452600501825280832088845290915290205415612de55760405162461bcd60e51b815260206004820152605060248201527f4c6f636b656420546f6b656e3a20746f6b656e494420697320616c726561647960448201527f206c6f636b656420746f204c6f636b656449442066726f6d20636f6e7472616360648201526f1d08131bd8dad95910dbdb9d1c9858dd60821b608482015260a401610a8a565b6040805180820182526001600160a01b0388168152602080820188905260008a8152600b9091529190912060040154612e1f90600161527d565b6000988952600b60208181526040808c206001600160a01b039b8c168d52600581018352818d209a8d529982528b209290925581526004909601805460018082018355918a529887902082516002909a020180546001600160a01b0319169990981698909817875590940151949095019390935550505050565b6000838152600b602090815260408083206001600160a01b038616845260020182528083208484529091529020548290612f495760405162461bcd60e51b815260206004820152604560248201527f4c43543a20746f6b656e4944206973206e6f7420646570656e64656e74206f6e60448201527f20435469642066726f6d20636f6e7472616374204354436f6e74726163744164606482015264647265737360d81b608482015260a401610a8a565b612f5333856133fe565b8015612fc3575060405163b256456960e01b8152600481018390526001600160a01b0382169063b256456990602401602060405180830381865afa158015612f9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612fc39190614c7e565b8015613033575060405163637c46a560e11b8152600481018390526001600160a01b0382169063c6f88d4a90602401602060405180830381865afa15801561300f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130339190614c7e565b806130465750336001600160a01b038416145b6130ac5760405162461bcd60e51b815260206004820152603160248201527f4c43543a2073656e646572206973206e6f74207065726d697474656420746f2060448201527072656d6f766520646570656e64656e637960781b6064820152608401610a8a565b6000848152600b602090815260408083206001600160a01b038716845260020182528083208584529091528120546130e690600190615254565b6000868152600b602081815260408084206001600160a01b038a168552600281018352818520898652835290842084905589845291905260019081015492935090916131329190615254565b6000878152600b602052604090206001018054919250908290811061315957613159614c68565b9060005260206000209060020201600b6000888152602001908152602001600020600101838154811061318e5761318e614c68565b60009182526020808320845460029093020180546001600160a01b0319166001600160a01b0390931692909217825560019384015491840191909155888252600b905260409020018054806131e5576131e5615267565b60008281526020812060026000199093019283020180546001600160a01b03191681556001015590556040517f690094bc4403e5fdf0ec1828b799e4015d5b39b33cfeb65df06a242febf4daf49061325c908890889088909283526001600160a01b03919091166020830152604082015260600190565b60405180910390a1505050505050565b6132746136b8565b6001600160a01b0381166132d95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610a8a565b6132e28161390e565b50565b6000908152600b6020526040902060068101546007909101546001600160a01b0390911691565b60006001600160e01b0319821663780e9d6360e01b1480610957575061095782613f46565b6000818152600260205260409020546001600160a01b03166132e25760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610a8a565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906133c582611a96565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061340a83611a96565b9050806001600160a01b0316846001600160a01b0316148061345157506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80611f255750836001600160a01b031661346a846109ef565b6001600160a01b031614949350505050565b6000828152600260205260409020546001600160a01b03166134f75760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610a8a565b600082815260066020526040902061350f8282615290565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b826001600160a01b031661355a82611a96565b6001600160a01b0316146135805760405162461bcd60e51b8152600401610a8a90615350565b6001600160a01b0382166135e25760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610a8a565b6135ef8383836001613f96565b826001600160a01b031661360282611a96565b6001600160a01b0316146136285760405162461bcd60e51b8152600401610a8a90615350565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600c546001600160a01b03163314611cae5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a8a565b6001600160a01b0382166137685760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610a8a565b6000818152600260205260409020546001600160a01b0316156137cd5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610a8a565b6137db600083836001613f96565b6000818152600260205260409020546001600160a01b0316156138405760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610a8a565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000818152600b60205260408082206006810180546001600160a01b031916905560070191909155517ff27b6ce5b2f5e68ddb2fd95a8a909d4ecf1daaac270935fff052feacb24f1842906139039083815260200190565b60405180910390a150565b600c80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b0316036139c15760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610a8a565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b60606000613a3b836141a4565b600101905060008167ffffffffffffffff811115613a5b57613a5b6149f3565b6040519080825280601f01601f191660200182016040528015613a85576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084613a8f57509392505050565b6000838152600b602090815260408083206001600160a01b0386168452600201825280832084845290915290205415613b625760405162461bcd60e51b815260206004820152603b60248201527f4c43543a20746f6b656e494420616c726561647920646570656e6473206f6e2060448201527f435469642066726f6d204354436f6e74726163744164647265737300000000006064820152608401610a8a565b6040805180820182526001600160a01b038416815260208082018490526000868152600b90915291909120600190810154613b9c9161527d565b6000858152600b602081815260408084206001600160a01b03898116808752600280840186528488208b89528652848820989098559484526001918201805480840182559087529584902088519690970290960180546001600160a01b0319169590961694909417855585820151949093019390935581518781529283015281018390527f142495d58c8fd8701db1b1d5a807743699bc5f87d97a4b64006eaeb9e9ac5e899060600160405180910390a150505050565b600080613c5f856132e5565b9150915080600014613cc35760405162461bcd60e51b815260206004820152602760248201527f4c6f636b656420546f6b656e3a20746f6b656e494420697320616c7265616479604482015266081b1bd8dad95960ca1b6064820152608401610a8a565b60405163f6aacfb160e01b8152600481018490526001600160a01b0385169063f6aacfb1906024016040805180830381865afa158015613d07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613d2b9190615395565b90925090506001600160a01b03821630141580613d485750848114155b613dbc576040805162461bcd60e51b81526020600482015260248101919091527f4c6f636b656420546f6b656e3a20446561646c6f636b2064657465636574656460448201527f21204c6f636b696e674944206973206c6f636b656420746f20746f6b656e49446064820152608401610a8a565b6000858152600b6020526040908190206006810180546001600160a01b0319166001600160a01b0388169081179091556007909101859055905163edee396560e01b8152600481018590523060248201526044810187905263edee396590606401600060405180830381600087803b158015613e3757600080fd5b505af1158015613e4b573d6000803e3d6000fd5b5050604080518881526001600160a01b03881660208201529081018690527f697d86e6398a689ac7b8bea2b6f3f65704d1b113d2d31863c6d26501e7265cff9250606001905060405180910390a15050505050565b613eab848484613547565b613eb78484848461427c565b610c135760405162461bcd60e51b8152600401610a8a906153c3565b6060613ede82613331565b6000613ef560408051602081019091526000815290565b90506000815111613f155760405180602001604052806000815250611f7f565b80613f1f84613a2e565b604051602001613f309291906151b5565b6040516020818303038152906040529392505050565b60006001600160e01b031982166380ac58cd60e01b1480613f7757506001600160e01b03198216635b5e139f60e01b145b8061095757506301ffc9a760e01b6001600160e01b0319831614610957565b613fa28484848461437d565b613fac8284611f3c565b6140105760405162461bcd60e51b815260206004820152602f60248201527f4c43543a2074686520746f6b656e207374617475732069732073657420746f2060448201526e6e6f6e7472616e7366657261626c6560881b6064820152608401610a8a565b61401a8284610dc0565b61408c5760405162461bcd60e51b815260206004820152603c60248201527f4c43543a2074686520746f6b656e20646570656e6473206f6e206174206c656160448201527f7374206f6e65206e6f6e7472616e7366657261626c6520746f6b656e000000006064820152608401610a8a565b60005b6000838152600b6020526040902060040154811015610cc2576000838152600b602052604081206004018054839081106140cb576140cb614c68565b60009182526020808320600290920290910154868352600b9091526040822060040180546001600160a01b039092169350908490811061410d5761410d614c68565b60009182526020909120600160029092020101546040516323b872dd60e01b81526001600160a01b038981166004830152888116602483015260448201839052919250908316906323b872dd90606401600060405180830381600087803b15801561417757600080fd5b505af115801561418b573d6000803e3d6000fd5b505050505050808061419c90614cb1565b91505061408f565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106141e35772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef8100000000831061420f576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061422d57662386f26fc10000830492506010015b6305f5e1008310614245576305f5e100830492506008015b612710831061425957612710830492506004015b6064831061426b576064830492506002015b600a83106109575760010192915050565b60006001600160a01b0384163b1561437257604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906142c0903390899088908890600401615415565b6020604051808303816000875af19250505080156142fb575060408051601f3d908101601f191682019092526142f891810190615452565b60015b614358573d808015614329576040519150601f19603f3d011682016040523d82523d6000602084013e61432e565b606091505b5080516000036143505760405162461bcd60e51b8152600401610a8a906153c3565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611f25565b506001949350505050565b60018111156143ec5760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b6064820152608401610a8a565b816001600160a01b0385166144485761444381600980546000838152600a60205260408120829055600182018355919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0155565b61446b565b836001600160a01b0316856001600160a01b03161461446b5761446b85826144aa565b6001600160a01b0384166144875761448281614547565b610cc2565b846001600160a01b0316846001600160a01b031614610cc257610cc284826145f6565b600060016144b784611c16565b6144c19190615254565b600083815260086020526040902054909150808214614514576001600160a01b03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b5060009182526008602090815260408084208490556001600160a01b039094168352600781528383209183525290812055565b60095460009061455990600190615254565b6000838152600a60205260408120546009805493945090928490811061458157614581614c68565b9060005260206000200154905080600983815481106145a2576145a2614c68565b6000918252602080832090910192909255828152600a909152604080822084905585825281205560098054806145da576145da615267565b6001900381819060005260206000200160009055905550505050565b600061460183611c16565b6001600160a01b039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b50805460008255600202906000526020600020908101906132e291905b8082111561467c5780546001600160a01b031916815560006001820155600201614657565b5090565b6001600160e01b0319811681146132e257600080fd5b6000602082840312156146a857600080fd5b8135611f7f81614680565b60005b838110156146ce5781810151838201526020016146b6565b50506000910152565b600081518084526146ef8160208601602086016146b3565b601f01601f19169290920160200192915050565b602081526000611f7f60208301846146d7565b60006020828403121561472857600080fd5b5035919050565b6001600160a01b03811681146132e257600080fd5b6000806040838503121561475757600080fd5b82356147628161472f565b946020939093013593505050565b60008083601f84011261478257600080fd5b50813567ffffffffffffffff81111561479a57600080fd5b6020830191508360208285010111156147b257600080fd5b9250929050565b6000806000604084860312156147ce57600080fd5b83359250602084013567ffffffffffffffff8111156147ec57600080fd5b6147f886828701614770565b9497909650939450505050565b60008060006060848603121561481a57600080fd5b83356148258161472f565b925060208401356148358161472f565b929592945050506040919091013590565b80151581146132e257600080fd5b60008060006060848603121561486957600080fd5b83359250602084013561487b8161472f565b9150604084013561488b81614846565b809150509250925092565b600080604083850312156148a957600080fd5b8235915060208301356148bb8161472f565b809150509250929050565b600080604083850312156148d957600080fd5b8235915060208301356148bb81614846565b600080604083850312156148fe57600080fd5b50508035926020909101359150565b60008060008060006080868803121561492557600080fd5b853567ffffffffffffffff81111561493c57600080fd5b61494888828901614770565b909650945050602086013561495c8161472f565b92506040860135915060608601356149738161472f565b809150509295509295909350565b60006020828403121561499357600080fd5b8135611f7f8161472f565b6000806000606084860312156149b357600080fd5b8335925060208401356148358161472f565b600080604083850312156149d857600080fd5b82356149e38161472f565b915060208301356148bb81614846565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215614a1f57600080fd5b8435614a2a8161472f565b93506020850135614a3a8161472f565b925060408501359150606085013567ffffffffffffffff80821115614a5e57600080fd5b818701915087601f830112614a7257600080fd5b813581811115614a8457614a846149f3565b604051601f8201601f19908116603f01168101908382118183101715614aac57614aac6149f3565b816040528281528a6020848701011115614ac557600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215614afc57600080fd5b8235614b078161472f565b915060208301356148bb8161472f565b600181811c90821680614b2b57607f821691505b602082108103610ba657634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b6020808252601e908201527f576f6f6c62616c6c3a206e616d65494420646f65736e27742065786973740000604082015260600190565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b60208082526058908201527f4c6f636b656420546f6b656e3a20746f6b656e4944206973206c6f636b65642060408201527f616e642063616c6c6572206973206e6f742074686520636f6e7472616374206860608201527f6f6c64696e6720746865206c6f636b696e6720746f6b656e0000000000000000608082015260a00190565b634e487b7160e01b600052603260045260246000fd5b600060208284031215614c9057600080fd5b8151611f7f81614846565b634e487b7160e01b600052601160045260246000fd5b600060018201614cc357614cc3614c9b565b5060010190565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b604081526000614d07604083018486614cca565b9050601760f91b60208301529392505050565b60208082526032908201527f576f6f6c62616c6c3a206e616d652063616e2774206861766520272e2720636860408201527130b930b1ba32b939903bb4ba3434b71034b760711b606082015260800190565b604081526000614d80604083018486614cca565b9050602360f81b60208301529392505050565b60208082526032908201527f576f6f6c62616c6c3a206e616d652063616e277420686176652027232720636860408201527130b930b1ba32b939903bb4ba3434b71034b760711b606082015260800190565b604081526000614df9604083018486614cca565b9050601d60f91b60208301529392505050565b60208082526032908201527f576f6f6c62616c6c3a206e616d652063616e2774206861766520273a2720636860408201527130b930b1ba32b939903bb4ba3434b71034b760711b606082015260800190565b8183823760009101908152919050565b60008251614e808184602087016146b3565b9190910192915050565b600060208284031215614e9c57600080fd5b5051919050565b601f821115610b2b57600081815260208120601f850160051c81016020861015614eca5750805b601f850160051c820191505b818110156126ef57828155600101614ed6565b67ffffffffffffffff831115614f0157614f016149f3565b614f1583614f0f8354614b17565b83614ea3565b6000601f841160018114614f495760008515614f315750838201355b600019600387901b1c1916600186901b178355610cc2565b600083815260209020601f19861690835b82811015614f7a5786850135825560209485019460019092019101614f5a565b5086821015614f975760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b606081526000614fbd606083018688614cca565b6020830194909452506001600160a01b039190911660409091015292915050565b6020808252603f908201527f4c6f636b656420546f6b656e3a207472616e73616374696f6e206973206e6f7460408201527f2073656e742066726f6d2074686520636f727265637420636f6e747261637400606082015260800190565b6000815461504881614b17565b600182811680156150605760018114615075576150a4565b60ff19841687528215158302870194506150a4565b8560005260208060002060005b8581101561509b5781548a820152908401908201615082565b50505082870194505b5050505092915050565b60006150ba828561503b565b602360f81b81526150ce600182018561503b565b95945050505050565b60208082526024908201527f53656e646572206973206e6f7420746865206f776e6572206f6620746865206e60408201526330b6b29760e11b606082015260800190565b6000835161512d8184602088016146b3565b602360f81b908301908152835161514b8160018401602088016146b3565b01600101949350505050565b600084516151698184602089016146b3565b601760f91b908301908152838560018301376000930160010192835250909392505050565b6060815260006151a2606083018688614cca565b6020830194909452506040015292915050565b600083516151c78184602088016146b3565b8351908301906151db8183602088016146b3565b01949350505050565b6000602082840312156151f657600080fd5b8151611f7f8161472f565b60208082526033908201527f4c6f636b656420546f6b656e3a2074686520746f6b656e7320646f206e6f74206040820152723430bb32903a34329039b0b6b29037bbb732b960691b606082015260800190565b8181038181111561095757610957614c9b565b634e487b7160e01b600052603160045260246000fd5b8082018082111561095757610957614c9b565b815167ffffffffffffffff8111156152aa576152aa6149f3565b6152be816152b88454614b17565b84614ea3565b602080601f8311600181146152f357600084156152db5750858301515b600019600386901b1c1916600185901b1785556126ef565b600085815260208120601f198616915b8281101561532257888601518255948401946001909101908401615303565b50858210156153405787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b600080604083850312156153a857600080fd5b82516153b38161472f565b6020939093015192949293505050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090615448908301846146d7565b9695505050505050565b60006020828403121561546457600080fd5b8151611f7f8161468056fea2646970667358221220a997d21a2aa1541c1cceaabeb54cd9c27e4330140e8ba43480ca4c665e35348b64736f6c63430008140033",
    "sourceMap": "313:9493:38:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;24617:339:35;;;;;;:::i;:::-;;:::i;:::-;;;565:14:44;;558:22;540:41;;528:2;513:18;24617:339:35;;;;;;;;2471:98:22;;;:::i;:::-;;;;;;;:::i;3935:167::-;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;1697:32:44;;;1679:51;;1667:2;1652:18;3935:167:22;1533:203:44;3468:406:22;;;;;;:::i;:::-;;:::i;:::-;;9129:127:38;;;;;;:::i;:::-;;:::i;:::-;;;2369:4:44;2357:17;;;2339:36;;2327:2;2312:18;9129:127:38;2197:184:44;7514:140:38;;;;;;:::i;:::-;;:::i;21626:153:35:-;;;;;;:::i;:::-;;:::i;1997:111:39:-;2084:10;:17;1997:111;;;3369:25:44;;;3357:2;3342:18;1997:111:39;3223:177:44;22095:282:35;;;;;;:::i;:::-;;:::i;11240:253::-;;;;;;:::i;:::-;;:::i;1673::39:-;;;;;;:::i;:::-;;:::i;12510:611:35:-;;;;;;:::i;:::-;;:::i;8046:181::-;;;;;;:::i;:::-;;:::i;7807:136:38:-;;;;;;:::i;:::-;7878:7;7904:14;;;:6;:14;;;;;:25;;:32;;7807:136;4974:149:22;;;;;;:::i;:::-;;:::i;19906:1611:35:-;;;;;;:::i;:::-;;:::i;8984:537::-;;;;;;:::i;:::-;;:::i;6344:593:38:-;;;;;;:::i;:::-;;:::i;2675:912::-;;;;;;:::i;:::-;;:::i;2180:240:39:-;;;;;;:::i;:::-;;:::i;8912:181:38:-;;;;;;:::i;:::-;;:::i;:::-;;;;6266:25:44;;;6322:2;6307:18;;6300:34;;;;6239:18;8912:181:38;6092:248:44;8424:148:38;;;;;;:::i;:::-;8498:7;8524:14;;;:6;:14;;;;;:20;;:41;;8424:148;14657:204:35;;;;;;:::i;:::-;;:::i;2190:219:22:-;;;;;;:::i;:::-;;:::i;8270:148:38:-;;;;;;:::i;:::-;8344:7;8370:14;;;:6;:14;;;;;:34;;:41;;8270:148;9424:379;;;;;;:::i;:::-;;:::i;1929:204:22:-;;;;;;:::i;:::-;;:::i;1824:101:18:-;;;:::i;7660:141:38:-;;;;;;:::i;:::-;7734:7;7760:14;;;:6;:14;;;;;:34;;;;7660:141;10711:175:35;;;;;;:::i;:::-;;:::i;8104:160:38:-;;;;;;:::i;:::-;;:::i;8745:161::-;;;;;;:::i;:::-;;:::i;7949:149::-;;;;;;:::i;:::-;;:::i;9674:529:35:-;;;;;;:::i;:::-;;:::i;1201:85:18:-;1273:6;;-1:-1:-1;;;;;1273:6:18;1201:85;;7400:299:35;;;;;;:::i;:::-;;:::i;2633:102:22:-;;;:::i;11921:400:35:-;;;;;;:::i;:::-;;:::i;4169:153:22:-;;;;;;:::i;:::-;;:::i;4836:1502:38:-;;;;;;:::i;:::-;;:::i;8578:161::-;;;;;;:::i;:::-;;:::i;13219:288:35:-;;;;;;:::i;:::-;;:::i;8372:156::-;;;;;;:::i;:::-;8465:4;8489:16;;;:7;:16;;;;;:32;;;8488:33;;8372:156;3593:1237:38;;;;;;:::i;:::-;;:::i;22536:264:35:-;;;;;;:::i;:::-;;:::i;7118:221:38:-;;;;;;:::i;:::-;;:::i;8669:148:35:-;;;;;;:::i;:::-;8758:4;8782:16;;;:7;:16;;;;;:28;;;;;;8781:29;;8669:148;7248:608:39;;;;;;:::i;:::-;;:::i;14219:304:35:-;;;;;;:::i;:::-;;:::i;11565:208::-;;;;;;:::i;:::-;11699:4;11722:16;;;:7;:16;;;;;;;;-1:-1:-1;;;;;11722:44:35;;;;:26;;:44;;;;;;;;11565:208;;;;;3872:261;;;;;;:::i;:::-;;:::i;10366:187::-;;;;;;:::i;:::-;;:::i;7777:197::-;;;;;;:::i;:::-;;:::i;16697:1358::-;;;;;;:::i;:::-;;:::i;4388:162:22:-;;;;;;:::i;:::-;-1:-1:-1;;;;;4508:25:22;;;4485:4;4508:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;4388:162;15355:1242:35;;;;;;:::i;:::-;;:::i;5410:1897::-;;;;;;:::i;:::-;;:::i;2074:198:18:-;;;;;;:::i;:::-;;:::i;14982:238:35:-;;;;;;:::i;:::-;;:::i;:::-;;;;-1:-1:-1;;;;;9360:32:44;;;9342:51;;9424:2;9409:18;;9402:34;;;;9315:18;14982:238:35;9168:274:44;24617:339:35;24753:4;-1:-1:-1;;;;;;24788:48:35;;-1:-1:-1;;;24788:48:35;;:109;;-1:-1:-1;;;;;;;24852:45:35;;-1:-1:-1;;;24852:45:35;24788:109;:161;;;;24913:36;24937:11;24913:23;:36::i;:::-;24769:180;24617:339;-1:-1:-1;;24617:339:35:o;2471:98:22:-;2525:13;2557:5;2550:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2471:98;:::o;3935:167::-;4011:7;4030:23;4045:7;4030:14;:23::i;:::-;-1:-1:-1;4071:24:22;;;;:15;:24;;;;;;-1:-1:-1;;;;;4071:24:22;;3935:167::o;3468:406::-;3548:13;3564:23;3579:7;3564:14;:23::i;:::-;3548:39;;3611:5;-1:-1:-1;;;;;3605:11:22;:2;-1:-1:-1;;;;;3605:11:22;;3597:57;;;;-1:-1:-1;;;3597:57:22;;10034:2:44;3597:57:22;;;10016:21:44;10073:2;10053:18;;;10046:30;10112:34;10092:18;;;10085:62;-1:-1:-1;;;10163:18:44;;;10156:31;10204:19;;3597:57:22;;;;;;;;;719:10:28;-1:-1:-1;;;;;3686:21:22;;;;:62;;-1:-1:-1;3711:37:22;3728:5;719:10:28;4388:162:22;:::i;3711:37::-;3665:170;;;;-1:-1:-1;;;3665:170:22;;10436:2:44;3665:170:22;;;10418:21:44;10475:2;10455:18;;;10448:30;10514:34;10494:18;;;10487:62;10585:31;10565:18;;;10558:59;10634:19;;3665:170:22;10234:425:44;3665:170:22;3846:21;3855:2;3859:7;3846:8;:21::i;:::-;3538:336;3468:406;;:::o;9129:127:38:-;9195:5;9225:14;;;:6;:14;;;;;:23;;;;;9219:30;;;;;;;;:::i;7514:140::-;7598:7;1480:14;;;:6;:14;;;;;:34;;;7581:6;;1517:15;-1:-1:-1;1472:95:38;;;;-1:-1:-1;;;1472:95:38;;;;;;;:::i;:::-;7624:14:::1;::::0;;;:6:::1;:14;::::0;;;;:23:::1;;::::0;-1:-1:-1;;;;;7624:23:38::1;::::0;-1:-1:-1;1577:1:38::1;7514:140:::0;;;;:::o;21626:153:35:-;21721:7;1602:39;1621:10;1633:7;1602:18;:39::i;:::-;1581:131;;;;-1:-1:-1;;;1581:131:35;;;;;;;:::i;:::-;21740:31:::1;21753:7;21762:8;;21740:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;::::0;;;;-1:-1:-1;21740:12:35::1;::::0;-1:-1:-1;;;21740:31:35:i:1;:::-;21626:153:::0;;;;:::o;22095:282::-;22263:7;2490:16;2510:17;2519:7;2510:8;:17::i;:::-;2487:40;-1:-1:-1;;2541:12:35;;2537:544;;2636:16;;;;:7;:16;;;;;:23;;:40;-1:-1:-1;;;;;2636:40:35;2614:10;:63;;:154;;-1:-1:-1;2727:16:35;;;;:7;:16;;;;;:23;;:40;-1:-1:-1;;;;;2727:40:35;2710:4;2702:66;2614:154;2567:342;;;;-1:-1:-1;;;2567:342:35;;;;;;;:::i;:::-;2537:544;;;2961:41;719:10:28;2980:12:35;2994:7;2961:18;:41::i;:::-;2936:145;;;;-1:-1:-1;;;2936:145:35;;;;;;;:::i;:::-;22335:35:::1;22352:4;22358:2;22362:7;22335:16;:35::i;:::-;2477:622:::0;22095:282;;;;:::o;11240:253::-;11407:7;1602:39;1621:10;1633:7;1602:18;:39::i;:::-;1581:131;;;;-1:-1:-1;;;1581:131:35;;;;;;;:::i;:::-;-1:-1:-1;11426:16:35::1;::::0;;;:7:::1;:16;::::0;;;;;;;-1:-1:-1;;;;;11426:44:35;;;::::1;::::0;;:26:::1;::::0;;::::1;:44:::0;;;;:60;;-1:-1:-1;;11426:60:35::1;::::0;::::1;;::::0;;;::::1;::::0;;11240:253::o;1673::39:-;1770:7;1805:23;1822:5;1805:16;:23::i;:::-;1797:5;:31;1789:87;;;;-1:-1:-1;;;1789:87:39;;12268:2:44;1789:87:39;;;12250:21:44;12307:2;12287:18;;;12280:30;12346:34;12326:18;;;12319:62;-1:-1:-1;;;12397:18:44;;;12390:41;12448:19;;1789:87:39;12066:407:44;1789:87:39;-1:-1:-1;;;;;;1893:19:39;;;;;;;;:12;:19;;;;;;;;:26;;;;;;;;;1673:253::o;12510:611:35:-;12657:4;;12673:420;12697:16;;;;:7;:16;;;;;:29;;:36;12693:40;;12673:420;;;12754:26;12799:16;;;:7;:16;;;;;:46;;:49;;12846:1;;12799:49;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:83;12912:16;;;:7;:16;;;;;;12799:83;12912:29;:32;;-1:-1:-1;;;;;12799:83:35;;;;-1:-1:-1;12912:29:35;12942:1;;12912:32;;;;;;:::i;:::-;;;;;;;;;:40;:32;;;;;:40;;12972:64;;-1:-1:-1;;;12972:64:35;;;;;12784:25:44;;;-1:-1:-1;;;;;12845:32:44;;;12825:18;;;12818:60;12912:40:35;;-1:-1:-1;12972:39:35;;;;;;12757:18:44;;12972:64:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12967:116;;13063:5;13056:12;;;;;;;12967:116;12740:353;;12735:3;;;;;:::i;:::-;;;;12673:420;;;-1:-1:-1;13110:4:35;;12510:611;-1:-1:-1;;;12510:611:35:o;8046:181::-;8161:7;1602:39;1621:10;1633:7;1602:18;:39::i;:::-;1581:131;;;;-1:-1:-1;;;1581:131:35;;;;;;;:::i;:::-;-1:-1:-1;8180:16:35::1;::::0;;;:7:::1;:16;::::0;;;;;:40;;-1:-1:-1;;8180:40:35::1;8211:9:::0;::::1;8180:40;;::::0;;;::::1;::::0;;8046:181::o;4974:149:22:-;5077:39;5094:4;5100:2;5104:7;5077:39;;;;;;;;;;;;:16;:39::i;19906:1611:35:-;20008:7;1602:39;1621:10;1633:7;1602:18;:39::i;:::-;1581:131;;;;-1:-1:-1;;;1581:131:35;;;;;;;:::i;:::-;20035:24:::1;20051:7;20035:15;:24::i;:::-;20027:99;;;::::0;-1:-1:-1;;;20027:99:35;;13613:2:44;20027:99:35::1;::::0;::::1;13595:21:44::0;13652:2;13632:18;;;13625:30;13691:34;13671:18;;;13664:62;13762:32;13742:18;;;13735:60;13812:19;;20027:99:35::1;13411:426:44::0;20027:99:35::1;20249:6;20244:312;20261:16;::::0;;;:7:::1;:16;::::0;;;;:29:::1;;:36:::0;20257:40;::::1;20244:312;;;20318:23;20357:16:::0;;;:7:::1;:16;::::0;;;;:46:::1;;:49:::0;;20404:1;;20357:49;::::1;;;;;:::i;:::-;;::::0;;;::::1;::::0;;;::::1;::::0;;::::1;::::0;;::::1;:83:::0;20470:16;;;:7:::1;:16:::0;;;;;;:29:::1;;:32:::0;;-1:-1:-1;;;;;20357:83:35;;::::1;::::0;-1:-1:-1;20470:29:35;20500:1;;20470:32;::::1;;;;;:::i;:::-;;;;;;;;;;;:40;;;20455:55;;20524:10;-1:-1:-1::0;;;;;20524:15:35::1;;20540:4;20524:21;;;;;;;;;;;;;3369:25:44::0;;3357:2;3342:18;;3223:177;20524:21:35::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;20304:252;;20299:3;;;;;:::i;:::-;;;;20244:312;;;;20683:6;20678:237;20695:16;::::0;;;:7:::1;:16;::::0;;;;:29:::1;;:36:::0;20693:38;::::1;20678:237;;;20752:23;20779:16:::0;;;:7:::1;:16;::::0;;;;:29:::1;;:32:::0;;20809:1;;20779:32;::::1;;;;;:::i;:::-;;::::0;;;::::1;::::0;;;20752:59:::1;::::0;;;;::::1;::::0;;20779:32:::1;::::0;;::::1;::::0;;::::1;20752:59:::0;;-1:-1:-1;;;;;20752:59:35;;::::1;::::0;;;;;::::1;::::0;;;::::1;::::0;;;20832:16;;;:7:::1;:16:::0;;;;;20871:19;;20832:60;;::::1;::::0;;:30:::1;::::0;;::::1;:60:::0;;;;;20893:10;;20832:72;;;;;;;20825:79;-1:-1:-1;20733:3:35;::::1;::::0;::::1;:::i;:::-;;;;20678:237;;;;21047:6;21042:241;21059:16;::::0;;;:7:::1;:16;::::0;;;;:29:::1;;:36:::0;21057:38;::::1;21042:241;;;21116:23;21143:16:::0;;;:7:::1;:16;::::0;;;;:29:::1;;:32:::0;;21173:1;;21143:32;::::1;;;;;:::i;:::-;;::::0;;;::::1;::::0;;;21116:59:::1;::::0;;;;::::1;::::0;;21143:32:::1;::::0;;::::1;::::0;;::::1;21116:59:::0;;-1:-1:-1;;;;;21116:59:35;;::::1;::::0;;;;;::::1;::::0;;;::::1;::::0;;;21196:16;;;:7:::1;:16:::0;;;;;21239:19;;21196:64;;::::1;::::0;;:34;;;::::1;:64:::0;;;;;21261:10;;21196:76;;;;;;21189:83;-1:-1:-1;21097:3:35;::::1;::::0;::::1;:::i;:::-;;;;21042:241;;;-1:-1:-1::0;21327:16:35::1;::::0;;;:7:::1;:16;::::0;;;;21320:23;;-1:-1:-1;;21320:23:35;;;21327:16;21320:23:::1;::::0;;::::1;21327:16:::0;21320:23:::1;:::i;:::-;;;::::0;::::1;;;:::i;:::-;-1:-1:-1::0;21320:23:35::1;::::0;::::1;::::0;;-1:-1:-1;;;;;;21320:23:35::1;::::0;;::::1;::::0;;;;;-1:-1:-1;;19906:1611:35:o;8984:537::-;9086:4;;9102:391;9126:16;;;;:7;:16;;;;;:29;;:36;9122:40;;9102:391;;;9183:26;9228:16;;;:7;:16;;;;;:46;;:49;;9275:1;;9228:49;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:83;9341:16;;;:7;:16;;;;;;9228:83;9341:29;:32;;-1:-1:-1;;;;;9228:83:35;;;;-1:-1:-1;9341:29:35;9371:1;;9341:32;;;;;;:::i;:::-;;;;;;;;;;;:40;;;9326:55;;9400:10;-1:-1:-1;;;;;9400:30:35;;9431:4;9400:36;;;;;;;;;;;;;3369:25:44;;3357:2;3342:18;;3223:177;9400:36:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;9395:88;;-1:-1:-1;9463:5:35;;8984:537;-1:-1:-1;;;;8984:537:35:o;9395:88::-;9169:324;;9164:3;;;;;:::i;:::-;;;;9102:391;;;-1:-1:-1;9510:4:35;;8984:537;-1:-1:-1;;8984:537:35:o;6344:593:38:-;1094:13:18;:11;:13::i;:::-;1480:14:38::1;::::0;;;:6:::1;:14;::::0;;;;:34:::1;;::::0;6470:6;;1517:15:::1;-1:-1:-1::0;1472:95:38::1;;;;-1:-1:-1::0;;;1472:95:38::1;;;;;;;:::i;:::-;6628:1:::2;6591:14:::0;;;:6:::2;:14;::::0;;;;:34:::2;;::::0;6583:105:::2;;;::::0;-1:-1:-1;;;6583:105:38;;14044:2:44;6583:105:38::2;::::0;::::2;14026:21:44::0;14083:2;14063:18;;;14056:30;14122:34;14102:18;;;14095:62;-1:-1:-1;;;14173:18:44;;;14166:52;14235:19;;6583:105:38::2;13842:418:44::0;6583:105:38::2;6764:14;::::0;;;:6:::2;:14;::::0;;;;:34:::2;;::::0;:49;-1:-1:-1;6756:114:38::2;;;::::0;-1:-1:-1;;;6756:114:38;;14467:2:44;6756:114:38::2;::::0;::::2;14449:21:44::0;14506:2;14486:18;;;14479:30;14545:34;14525:18;;;14518:62;-1:-1:-1;;;14596:18:44;;;14589:50;14656:19;;6756:114:38::2;14265:416:44::0;6756:114:38::2;-1:-1:-1::0;6881:14:38::2;::::0;;;:6:::2;:14;::::0;;;;;:34:::2;;:49:::0;6344:593::o;2675:912::-;2828:7;2801:4;;1721:11;:26;1748:4;;1721:37;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1720:38;1711:104;;;;-1:-1:-1;;;1711:104:38;;;;;;;:::i;:::-;1835:37;;-1:-1:-1;;;1835:37:38;;:11;;:26;;:37;;1862:4;;;;1835:37;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1834:38;1825:104;;;;-1:-1:-1;;;1825:104:38;;;;;;;:::i;:::-;1949:37;;-1:-1:-1;;;1949:37:38;;:11;;:26;;:37;;1976:4;;;;1949:37;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1948:38;1939:104;;;;-1:-1:-1;;;1939:104:38;;;;;;;:::i;:::-;1094:13:18::1;:11;:13::i;:::-;2847:14:38::2;2872:30;2896:4;;2879:22;;;;;;;;;:::i;:::-;;::::0;;-1:-1:-1;;2879:22:38;;::::2;::::0;;;;;;;2872:30:::2;::::0;::::2;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2864:39;2970:14:::0;;;:6:::2;:14;::::0;;;;:34:::2;;::::0;2864:39;;-1:-1:-1;3007:15:38::2;-1:-1:-1::0;2961:102:38::2;;;::::0;-1:-1:-1;;;2961:102:38;;18346:2:44;2961:102:38::2;::::0;::::2;18328:21:44::0;18385:2;18365:18;;;18358:30;18424:34;18404:18;;;18397:62;-1:-1:-1;;;18475:18:44;;;18468:34;18519:19;;2961:102:38::2;18144:400:44::0;2961:102:38::2;3155:15;3142:10;:28;3133:86;;;::::0;-1:-1:-1;;;3133:86:38;;18751:2:44;3133:86:38::2;::::0;::::2;18733:21:44::0;18790:2;18770:18;;;18763:30;18829:34;18809:18;;;18802:62;-1:-1:-1;;;18880:18:44;;;18873:42;18932:19;;3133:86:38::2;18549:408:44::0;3133:86:38::2;3246:22;3252:7;3261:6;3246:5;:22::i;:::-;3279:14;::::0;;;:6:::2;:14;::::0;;;;:26:::2;3301:4:::0;;3279:14;:26:::2;:::i;:::-;-1:-1:-1::0;3315:14:38::2;::::0;;;:6:::2;:14;::::0;;;;;;3341:13:::2;3315:23:::0;;::::2;:39:::0;;-1:-1:-1;;3315:39:38::2;::::0;;::::2;::::0;;3364:34:::2;::::0;::::2;:47:::0;;;3421:28:::2;::::0;::::2;:38:::0;;-1:-1:-1;;;;;3421:38:38;;::::2;-1:-1:-1::0;;;;;;3421:38:38;;::::2;;::::0;;;3469:23:::2;::::0;;::::2;:41:::0;;;;::::2;::::0;;;::::2;;::::0;;3526:30;::::2;::::0;::::2;::::0;3534:4;;;;3315:14;;3421:38;;3526:30:::2;:::i;:::-;;;;;;;;3574:6:::0;2675:912;-1:-1:-1;;;;;;;;2675:912:38:o;2180:240:39:-;2255:7;2290:40;2084:10;:17;;1997:111;2290:40;2282:5;:48;2274:105;;;;-1:-1:-1;;;2274:105:39;;21642:2:44;2274:105:39;;;21624:21:44;21681:2;21661:18;;;21654:30;21720:34;21700:18;;;21693:62;-1:-1:-1;;;21771:18:44;;;21764:42;21823:19;;2274:105:39;21440:408:44;2274:105:39;2396:10;2407:5;2396:17;;;;;;;;:::i;:::-;;;;;;;;;2389:24;;2180:240;;;:::o;8912:181:38:-;8992:7;;8971:6;2296:13;2269:14;;;;:6;:14;;;;;:23;;;;;:40;;;;;;;;:::i;:::-;;2261:77;;;;-1:-1:-1;;;2261:77:38;;22055:2:44;2261:77:38;;;22037:21:44;22094:2;22074:18;;;22067:30;22133:26;22113:18;;;22106:54;22177:18;;2261:77:38;21853:348:44;2261:77:38;-1:-1:-1;;;9032:14:38::1;::::0;;;:6:::1;:14;::::0;;;;:28:::1;::::0;::::1;::::0;9062:23:::1;::::0;;::::1;::::0;9032:28;;8912:181::o;14657:204:35:-;14781:16;;;;:7;:16;;;;;:23;;:40;-1:-1:-1;;;;;14781:40:35;2228:10;2209:29;;;:82;;-1:-1:-1;;;;;;2259:32:35;;2286:4;2259:32;2209:82;2168:227;;;;-1:-1:-1;;;2168:227:35;;;;;;;:::i;:::-;14838:16:::1;14846:7;14838;:16::i;:::-;14657:204:::0;;:::o;2190:219:22:-;2262:7;6794:16;;;:7;:16;;;;;;-1:-1:-1;;;;;6794:16:22;;2324:56;;;;-1:-1:-1;;;2324:56:22;;22840:2:44;2324:56:22;;;22822:21:44;22879:2;22859:18;;;22852:30;-1:-1:-1;;;22898:18:44;;;22891:54;22962:18;;2324:56:22;22638:348:44;9424:379:38;9478:13;9534;9507:14;;;;:6;:14;;;;;:23;;;;;:40;;;;;;;;:::i;:::-;;9503:294;;9563:12;9578:14;;;:6;:14;;;;;;;;:28;;;;9633:23;;;;;9691:12;;;;;;9713:10;;;;;;;9677:52;;9578:28;;9633:23;;9677:52;;9691:12;;9677:52;;:::i;:::-;;;;;;;;;;;;;9670:59;;;;9424:379;;;:::o;9503:294::-;9767:14;;;;:6;:14;;;;;9760:26;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9424:379;;;:::o;1929:204:22:-;2001:7;-1:-1:-1;;;;;2028:19:22;;2020:73;;;;-1:-1:-1;;;2020:73:22;;24354:2:44;2020:73:22;;;24336:21:44;24393:2;24373:18;;;24366:30;24432:34;24412:18;;;24405:62;-1:-1:-1;;;24483:18:44;;;24476:39;24532:19;;2020:73:22;24152:405:44;2020:73:22;-1:-1:-1;;;;;;2110:16:22;;;;;:9;:16;;;;;;;1929:204::o;1824:101:18:-;1094:13;:11;:13::i;:::-;1888:30:::1;1915:1;1888:18;:30::i;:::-;1824:101::o:0;10711:175:35:-;10805:4;8782:16;;;:7;:16;;;;;:28;;;;;;8781:29;10828:51;;;;;10851:28;10871:7;10851:19;:28::i;8104:160:38:-;8199:7;8178:6;2147:16;2120:14;;;;:6;:14;;;;;:23;;;;;:43;;;;;;;;:::i;:::-;;2112:83;;;;-1:-1:-1;;;2112:83:38;;24764:2:44;2112:83:38;;;24746:21:44;24803:2;24783:18;;;24776:30;24842:29;24822:18;;;24815:57;24889:18;;2112:83:38;24562:351:44;2112:83:38;-1:-1:-1;;8229:14:38::1;::::0;;;:6:::1;:14;::::0;;;;:28:::1;;::::0;;8104:160::o;8745:161::-;8832:7;8858:14;;;:6;:14;;;;;:20;;:41;;8893:5;;8858:41;;;;;;:::i;:::-;;;;;;;;;8851:48;;8745:161;;;;:::o;7949:149::-;8033:7;8059:14;;;:6;:14;;;;;:25;;:32;;8085:5;;8059:32;;;;;;:::i;9674:529:35:-;9772:4;;9788:387;9812:16;;;;:7;:16;;;;;:29;;:36;9808:40;;9788:387;;;9869:26;9914:16;;;:7;:16;;;;;:46;;:49;;9961:1;;9914:49;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:83;10027:16;;;:7;:16;;;;;;9914:83;10027:29;:32;;-1:-1:-1;;;;;9914:83:35;;;;-1:-1:-1;10027:29:35;10057:1;;10027:32;;;;;;:::i;:::-;;;;;;;;;;;:40;;;10012:55;;10086:10;-1:-1:-1;;;;;10086:26:35;;10113:4;10086:32;;;;;;;;;;;;;3369:25:44;;3357:2;3342:18;;3223:177;10086:32:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;10081:84;;-1:-1:-1;10145:5:35;;9674:529;-1:-1:-1;;;;9674:529:35:o;10081:84::-;9855:320;;9850:3;;;;;:::i;:::-;;;;9788:387;;7400:299;7547:4;7582:16;;;:7;:16;;;;;;;;-1:-1:-1;;;;;7582:53:35;;;;:34;;:53;;;;;:59;;;;;;;;;:110;;7687:5;7582:110;;;7664:4;7582:110;7563:129;7400:299;-1:-1:-1;;;;7400:299:35:o;2633:102:22:-;2689:13;2721:7;2714:14;;;;;:::i;11921:400:35:-;12061:4;8489:16;;;:7;:16;;;;;:32;;;8488:33;12239:74;;;-1:-1:-1;12266:16:35;;;;:7;:16;;;;;;;;-1:-1:-1;;;;;12266:47:35;;;;:26;;:47;;;;;;;;12239:74;12231:83;11921:400;-1:-1:-1;;;11921:400:35:o;4169:153:22:-;4263:52;719:10:28;4296:8:22;4306;4263:18;:52::i;4836:1502:38:-;5001:7;1480:14;;;:6;:14;;;;;:34;;;4923:6;;1517:15;-1:-1:-1;1472:95:38;;;;-1:-1:-1;;;1472:95:38;;;;;;;:::i;:::-;1480:14:::1;::::0;;;:6:::1;:14;::::0;;;;:34:::1;;::::0;4944:8;;1517:15:::1;-1:-1:-1::0;1472:95:38::1;;;;-1:-1:-1::0;;;1472:95:38::1;;;;;;;:::i;:::-;4968:6:::0;1349:10:::2;1330:15;4968:6:::0;1330:7:::2;:15::i;:::-;-1:-1:-1::0;;;;;1330:29:38::2;;1322:78;;;;-1:-1:-1::0;;;1322:78:38::2;;;;;;;:::i;:::-;5082:14:::3;5107:83;5131:24;5148:6;5131:16;:24::i;:::-;5162:26;5179:8;5162:16;:26::i;:::-;5114:75;;;;;;;;;:::i;:::-;;::::0;;-1:-1:-1;;5114:75:38;;::::3;::::0;;;;;;;5107:83:::3;::::0;::::3;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5099:92:::0;-1:-1:-1;5099:92:38::3;5247:14:::0;;;;:6:::3;:14;::::0;;;;:23:::3;;::::0;::::3;;:40;::::0;::::3;;;;;;:::i;:::-;;5239:82;;;::::0;-1:-1:-1;;;5239:82:38;;26170:2:44;5239:82:38::3;::::0;::::3;26152:21:44::0;26209:2;26189:18;;;26182:30;26248:31;26228:18;;;26221:59;26297:18;;5239:82:38::3;25968:353:44::0;5239:82:38::3;5332:30;5338:15;5346:6;5338:7;:15::i;:::-;5355:6;5332:5;:30::i;:::-;5373:14;::::0;;;:6:::3;:14;::::0;;;;;;;:23:::3;::::0;;::::3;:39:::0;;5399:13:::3;-1:-1:-1::0;;5373:39:38;;::::3;::::0;::::3;::::0;;;5459:14;;;;;;:34:::3;::::0;;::::3;::::0;5422;;::::3;:71:::0;5562:28;;::::3;:37:::0;;;5609:23:::3;::::0;::::3;:34:::0;;;5653:22:::3;::::0;;::::3;:29:::0;;-1:-1:-1;;;;5734:29:38;-1:-1:-1;;;5734:29:38;;;5822:20:::3;;:47:::0;;;;::::3;::::0;;;;;;;;::::3;::::0;;;5879:16;;;;;;:36;;:49;;;;::::3;::::0;;;;;;;;::::3;::::0;;;6029:19;;;:11:::3;:19:::0;;;;;:42;;;;::::3;;::::0;;6142:45:::3;5459:14:::0;6173:4:::3;5373:14:::0;6142::::3;:45::i;:::-;6197:36;6203:6;6219:4;6226:6;6197:5;:36::i;:::-;6274:33;::::0;;26528:25:44;;;26584:2;26569:18;;26562:34;;;26612:18;;;26605:34;;;6274:33:38::3;::::0;26516:2:44;26501:18;6274:33:38::3;;;;;;;6325:6:::0;4836:1502;-1:-1:-1;;;;;;4836:1502:38:o;8578:161::-;8665:7;8691:14;;;:6;:14;;;;;:34;;:41;;8726:5;;8691:41;;;;;;:::i;13219:288:35:-;13362:4;13385:51;13409:7;13418:17;13385:23;:51::i;:::-;:115;;;;;13440:60;13473:7;13482:17;13440:32;:60::i;3593:1237:38:-;3743:7;3687;;1721:11;:26;1748:4;;1721:37;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1720:38;1711:104;;;;-1:-1:-1;;;1711:104:38;;;;;;;:::i;:::-;1835:37;;-1:-1:-1;;;1835:37:38;;:11;;:26;;:37;;1862:4;;;;1835:37;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1834:38;1825:104;;;;-1:-1:-1;;;1825:104:38;;;;;;;:::i;:::-;1949:37;;-1:-1:-1;;;1949:37:38;;:11;;:26;;:37;;1976:4;;;;1949:37;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1948:38;1939:104;;;;-1:-1:-1;;;1939:104:38;;;;;;;:::i;:::-;3710:6;1349:10:::1;1330:15;3710:6:::0;1330:7:::1;:15::i;:::-;-1:-1:-1::0;;;;;1330:29:38::1;;1322:78;;;;-1:-1:-1::0;;;1322:78:38::1;;;;;;;:::i;:::-;3844:17:::2;3872:64;3896:24;3913:6;3896:16;:24::i;:::-;3927:7;;3879:56;;;;;;;;;;:::i;:::-;;::::0;;-1:-1:-1;;3879:56:38;;::::2;::::0;;;;;;;3872:64:::2;::::0;::::2;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3864:73:::0;-1:-1:-1;3864:73:38::2;3995:17:::0;;;;:6:::2;:17;::::0;;;;:26:::2;;::::0;::::2;;:43;::::0;::::2;;;;;;:::i;:::-;;3987:88;;;::::0;-1:-1:-1;;;3987:88:38;;27475:2:44;3987:88:38::2;::::0;::::2;27457:21:44::0;;;27494:18;;;27487:30;27553:34;27533:18;;;27526:62;27605:18;;3987:88:38::2;27273:356:44::0;3987:88:38::2;4086:33;4092:15;4100:6;4092:7;:15::i;4086:33::-;4130:17;::::0;;;:6:::2;:17;::::0;;;;:32:::2;4155:7:::0;;4130:17;:32:::2;:::i;:::-;-1:-1:-1::0;4172:17:38::2;::::0;;;:6:::2;:17;::::0;;;;;:26:::2;::::0;::::2;:45:::0;;-1:-1:-1;;4172:45:38::2;4201:16;4172:45;::::0;;4267:14;;;;;;:34:::2;::::0;;::::2;::::0;4227:17;;;;:37;::::2;:74:::0;;;;4311:31:::2;::::0;::::2;:40:::0;;;4361:25:::2;;:32:::0;;-1:-1:-1;;;;;;;4361:32:38;;::::2;;::::0;;4539:39:::2;4172:17:::0;4564:4:::2;4267:14:::0;4539:5:::2;:39::i;:::-;4623:14;::::0;;;:6:::2;:14;::::0;;;;;;;:25:::2;;:41:::0;;::::2;::::0;::::2;::::0;;;;;;;;;::::2;::::0;;;4758:38;::::2;::::0;::::2;::::0;4769:7;;;;4630:6;;4654:9;;4758:38:::2;:::i;:::-;;;;;;;;4814:9:::0;3593:1237;-1:-1:-1;;;;;;;3593:1237:38:o;22536:264:35:-;22735:7;2490:16;2510:17;2519:7;2510:8;:17::i;:::-;2487:40;-1:-1:-1;;2541:12:35;;2537:544;;2636:16;;;;:7;:16;;;;;:23;;:40;-1:-1:-1;;;;;2636:40:35;2614:10;:63;;:154;;-1:-1:-1;2727:16:35;;;;:7;:16;;;;;:23;;:40;-1:-1:-1;;;;;2727:40:35;2710:4;2702:66;2614:154;2567:342;;;;-1:-1:-1;;;2567:342:35;;;;;;;:::i;:::-;2537:544;;;2961:41;719:10:28;2980:12:35;640:96:28;2961:41:35;2936:145;;;;-1:-1:-1;;;2936:145:35;;;;;;;:::i;:::-;22755:38:::1;22769:4;22775:2;22779:7;22788:4;22755:13;:38::i;:::-;2477:622:::0;22536:264;;;;;:::o;7118:221:38:-;7228:6;1349:10;1330:15;7228:6;1330:7;:15::i;:::-;-1:-1:-1;;;;;1330:29:38;;1322:78;;;;-1:-1:-1;;;1322:78:38;;;;;;;:::i;:::-;-1:-1:-1;7246:14:38::1;::::0;;;:6:::1;:14;::::0;;;;;:23:::1;;:38:::0;;-1:-1:-1;;;;;;7246:38:38::1;-1:-1:-1::0;;;;;7246:38:38;;::::1;::::0;;;::::1;::::0;;7118:221::o;7248:608:39:-;7321:13;7346:23;7361:7;7346:14;:23::i;:::-;7380;7406:19;;;:10;:19;;;;;7380:45;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7435:18;7456:10;3395:9:22;;;;;;;;;-1:-1:-1;3395:9:22;;;3319:92;7456:10:39;7435:31;;7545:4;7539:18;7561:1;7539:23;7535:70;;-1:-1:-1;7585:9:39;7248:608;-1:-1:-1;;7248:608:39:o;7535:70::-;7707:23;;:27;7703:106;;7781:4;7787:9;7764:33;;;;;;;;;:::i;7703:106::-;7826:23;7841:7;7826:14;:23::i;14219:304:35:-;14396:7;1602:39;1621:10;1633:7;1602:18;:39::i;:::-;1581:131;;;;-1:-1:-1;;;1581:131:35;;;;;;;:::i;:::-;14423:7:::1;14432:15;14449:9;1970:21;-1:-1:-1::0;;;;;1963:37:35::1;;2001:8;1963:47;;;;;;;;;;;;;3369:25:44::0;;3357:2;3342:18;;3223:177;1963:47:35::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;1935:75:35::1;:24;1950:8;1935:14;:24::i;:::-;-1:-1:-1::0;;;;;1935:75:35::1;;1914:173;;;;-1:-1:-1::0;;;1914:173:35::1;;;;;;;:::i;:::-;14474:42:::2;14480:7;14489:15;14506:9;14474:5;:42::i;:::-;1722:1:::1;;;14219:304:::0;;;;:::o;3872:261::-;4055:7;1602:39;1621:10;1633:7;1602:18;:39::i;:::-;1581:131;;;;-1:-1:-1;;;1581:131:35;;;;;;;:::i;:::-;4078:48:::1;4093:7;4102:17;4121:4;4078:14;:48::i;10366:187::-:0;10464:4;8489:16;;;:7;:16;;;;;:32;;;8488:33;10487:59;;;;;10514:32;10538:7;10514:23;:32::i;7777:197::-;7900:7;1602:39;1621:10;1633:7;1602:18;:39::i;:::-;1581:131;;;;-1:-1:-1;;;1581:131:35;;;;;;;:::i;:::-;-1:-1:-1;7919:16:35::1;::::0;;;:7:::1;:16;::::0;;;;;:48;;-1:-1:-1;;7919:48:35::1;7954:13:::0;::::1;7919:48:::0;;;::::1;::::0;;7777:197::o;16697:1358::-;17006:1;16947:16;;;:7;:16;;;;;;;;-1:-1:-1;;;;;16947:46:35;;;;:30;;:46;;;;;:56;;;;;;;;;16926:181;;;;-1:-1:-1;;;16926:181:35;;29407:2:44;16926:181:35;;;29389:21:44;29446:2;29426:18;;;29419:30;29485:34;29465:18;;;29458:62;29556:34;29536:18;;;29529:62;-1:-1:-1;;;29607:19:44;;;29600:41;29658:19;;16926:181:35;29205:478:44;16926:181:35;17350:17;17370:16;;;:7;:16;;;;;;;;-1:-1:-1;;;;;17370:46:35;;;;:30;;:46;;;;;:56;;;;;;;;;:60;;17429:1;;17370:60;:::i;:::-;17546:1;17487:16;;;:7;:16;;;;;;;;-1:-1:-1;;;;;17487:46:35;;;;:30;;;:46;;;;;:56;;;;;;;;:60;;;17726:16;;;;;;:29;;:36;17350:80;;-1:-1:-1;17546:1:35;17726:40;;17765:1;;17726:40;:::i;:::-;17819:16;;;;:7;:16;;;;;:29;;:70;;17698:68;;-1:-1:-1;17819:29:35;17698:68;;17819:70;;;;;;:::i;:::-;;;;;;;;;;;17776:7;:16;17784:7;17776:16;;;;;;;;;;;:29;;17806:9;17776:40;;;;;;;;:::i;:::-;;;;;;;;;:113;;:40;;;;;:113;;-1:-1:-1;;;;;;17776:113:35;-1:-1:-1;;;;;17776:113:35;;;;;;;;;;;;;;;;;;;;;;17899:16;;;:7;:16;;;;;;:29;;:35;;;;;;;:::i;:::-;;;;;;;;;-1:-1:-1;;17899:35:35;;;;;;;;;;-1:-1:-1;;;;;;17899:35:35;;;-1:-1:-1;17899:35:35;;;;18003:45;;-1:-1:-1;;;18003:45:35;;;;;3369:25:44;;;-1:-1:-1;;;;;18003:35:35;;;;;3342:18:44;;18003:45:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16837:1218;;16697:1358;;;:::o;15355:1242::-;15534:7;15543:14;15559:8;1970:21;-1:-1:-1;;;;;1963:37:35;;2001:8;1963:47;;;;;;;;;;;;;3369:25:44;;3357:2;3342:18;;3223:177;1963:47:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1935:75:35;:24;1950:8;1935:14;:24::i;:::-;-1:-1:-1;;;;;1935:75:35;;1914:173;;;;-1:-1:-1;;;1914:173:35;;;;;;;:::i;:::-;15590:14;-1:-1:-1;;;;;2209:29:35;::::1;2228:10;2209:29;::::0;:82:::1;;-1:-1:-1::0;;;;;;2259:32:35;::::1;2286:4;2259:32;2209:82;2168:227;;;;-1:-1:-1::0;;;2168:227:35::1;;;;;;;:::i;:::-;15725:16:::2;::::0;;;:7:::2;:16;::::0;;;;;;;-1:-1:-1;;;;;15725:46:35;::::2;::::0;;:30:::2;;:46:::0;;;;;:56;;;;;;;;;:61;15704:188:::2;;;::::0;-1:-1:-1;;;15704:188:35;;30155:2:44;15704:188:35::2;::::0;::::2;30137:21:44::0;30194:2;30174:18;;;30167:30;30233:34;30213:18;;;30206:62;30304:34;30284:18;;;30277:62;-1:-1:-1;;;30355:19:44;;;30348:47;30412:19;;15704:188:35::2;29953:484:44::0;15704:188:35::2;-1:-1:-1::0;;;;;;;;;;;;;16008:44:35;::::2;::::0;;-1:-1:-1;;;;16062:29:35;;;-1:-1:-1;16439:16:35;;;:7:::2;:16:::0;;;;;;;:42:::2;;:62:::0;:64:::2;::::0;16502:1:::2;16439:64;:::i;:::-;16380:16;::::0;;;:7:::2;:16;::::0;;;;;;;-1:-1:-1;;;;;16380:46:35;;::::2;::::0;;:30:::2;::::0;::::2;:46:::0;;;;;:56;;;;;;;;:123;;;;16544:16;;:29:::2;::::0;;::::2;:46:::0;;::::2;::::0;;::::2;::::0;;;;;;;;;;;::::2;::::0;;::::2;;::::0;;-1:-1:-1;;;;;;16544:46:35::2;::::0;;;::::2;::::0;;;::::2;::::0;;;;::::2;::::0;;;;::::2;::::0;;;;-1:-1:-1;;;;15355:1242:35:o;5410:1897::-;5618:26;5772:16;;;:7;:16;;;;;;;;-1:-1:-1;;;;;5772:53:35;;;;:34;;:53;;;;;:59;;;;;;;;;5663:17;;5751:179;;;;-1:-1:-1;;;5751:179:35;;30774:2:44;5751:179:35;;;30756:21:44;30813:2;30793:18;;;30786:30;30852:34;30832:18;;;30825:62;30923:34;30903:18;;;30896:62;-1:-1:-1;;;30974:19:44;;;30967:36;31020:19;;5751:179:35;30572:473:44;5751:179:35;6118:39;6137:10;6149:7;6118:18;:39::i;:::-;:86;;;;-1:-1:-1;6173:31:35;;-1:-1:-1;;;6173:31:35;;;;;3369:25:44;;;-1:-1:-1;;;;;6173:25:35;;;;;3342:18:44;;6173:31:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6118:129;;;;-1:-1:-1;6220:27:35;;-1:-1:-1;;;6220:27:35;;;;;3369:25:44;;;-1:-1:-1;;;;;6220:21:35;;;;;3342:18:44;;6220:27:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6116:184;;;-1:-1:-1;6267:10:35;-1:-1:-1;;;;;6267:31:35;;;6116:184;6095:280;;;;-1:-1:-1;;;6095:280:35;;31252:2:44;6095:280:35;;;31234:21:44;31291:2;31271:18;;;31264:30;31330:34;31310:18;;;31303:62;-1:-1:-1;;;31381:18:44;;;31374:47;31438:19;;6095:280:35;31050:413:44;6095:280:35;6616:23;6642:16;;;:7;:16;;;;;;;;-1:-1:-1;;;;;6642:53:35;;;;:34;;:53;;;;;:59;;;;;;;;;:61;;6702:1;;6642:61;:::i;:::-;6772:16;;;;:7;:16;;;;;;;;-1:-1:-1;;;;;6772:53:35;;;;:34;;;:53;;;;;:59;;;;;;;;6765:66;;;7027:16;;;;;;7066:1;7027:29;;;:36;6616:87;;-1:-1:-1;6772:16:35;;7027:40;;7066:1;7027:40;:::i;:::-;7126:16;;;;:7;:16;;;;;:42;;:62;;6998:69;;-1:-1:-1;7126:42:35;6998:69;;7126:62;;;;;;:::i;:::-;;;;;;;;;;;7077:7;:16;7085:7;7077:16;;;;;;;;;;;:29;;7107:15;7077:46;;;;;;;;:::i;:::-;;;;;;;;;:111;;:46;;;;;:111;;-1:-1:-1;;;;;;7077:111:35;-1:-1:-1;;;;;7077:111:35;;;;;;;;;;;;;;;;;;;;;7198:16;;;:7;:16;;;;;:29;:35;;;;;;;:::i;:::-;;;;;;;;;-1:-1:-1;;7198:35:35;;;;;;;;;-1:-1:-1;;;;;;7198:35:35;;;;;;;;7249:51;;;;;;7267:7;;7276:17;;7295:4;;31670:25:44;;;-1:-1:-1;;;;;31731:32:44;;;;31726:2;31711:18;;31704:60;31795:2;31780:18;;31773:34;31658:2;31643:18;;31468:345;7249:51:35;;;;;;;;5548:1759;;;5410:1897;;;:::o;2074:198:18:-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2162:22:18;::::1;2154:73;;;::::0;-1:-1:-1;;;2154:73:18;;32020:2:44;2154:73:18::1;::::0;::::1;32002:21:44::0;32059:2;32039:18;;;32032:30;32098:34;32078:18;;;32071:62;-1:-1:-1;;;32149:18:44;;;32142:36;32195:19;;2154:73:18::1;31818:402:44::0;2154:73:18::1;2237:28;2256:8;2237:18;:28::i;:::-;2074:198:::0;:::o;14982:238:35:-;15069:7;15118:16;;;:7;:16;;;;;:23;;;:40;15172:31;;;;;-1:-1:-1;;;;;15118:40:35;;;;14982:238::o;1372:222:39:-;1474:4;-1:-1:-1;;;;;;1497:50:39;;-1:-1:-1;;;1497:50:39;;:90;;;1551:36;1575:11;1551:23;:36::i;13240:133:22:-;7185:4;6794:16;;;:7;:16;;;;;;-1:-1:-1;;;;;6794:16:22;13313:53;;;;-1:-1:-1;;;13313:53:22;;22840:2:44;13313:53:22;;;22822:21:44;22879:2;22859:18;;;22852:30;-1:-1:-1;;;22898:18:44;;;22891:54;22962:18;;13313:53:22;22638:348:44;12572:171:22;12646:24;;;;:15;:24;;;;;:29;;-1:-1:-1;;;;;;12646:29:22;-1:-1:-1;;;;;12646:29:22;;;;;;;;:24;;12699:23;12646:24;12699:14;:23::i;:::-;-1:-1:-1;;;;;12690:46:22;;;;;;;;;;;12572:171;;:::o;7404:261::-;7497:4;7513:13;7529:23;7544:7;7529:14;:23::i;:::-;7513:39;;7581:5;-1:-1:-1;;;;;7570:16:22;:7;-1:-1:-1;;;;;7570:16:22;;:52;;;-1:-1:-1;;;;;;4508:25:22;;;4485:4;4508:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;7590:32;7570:87;;;;7650:7;-1:-1:-1;;;;;7626:31:22;:20;7638:7;7626:11;:20::i;:::-;-1:-1:-1;;;;;7626:31:22;;7562:96;7404:261;-1:-1:-1;;;;7404:261:22:o;8041:253:39:-;7185:4:22;6794:16;;;:7;:16;;;;;;-1:-1:-1;;;;;6794:16:22;8132:75:39;;;;-1:-1:-1;;;8132:75:39;;32427:2:44;8132:75:39;;;32409:21:44;32466:2;32446:18;;;32439:30;32505:34;32485:18;;;32478:62;-1:-1:-1;;;32556:18:44;;;32549:44;32610:19;;8132:75:39;32225:410:44;8132:75:39;8217:19;;;;:10;:19;;;;;:31;8239:9;8217:19;:31;:::i;:::-;-1:-1:-1;8264:23:39;;3369:25:44;;;8264:23:39;;3357:2:44;3342:18;8264:23:39;;;;;;;8041:253;;:::o;11257:1203:22:-;11381:4;-1:-1:-1;;;;;11354:31:22;:23;11369:7;11354:14;:23::i;:::-;-1:-1:-1;;;;;11354:31:22;;11346:81;;;;-1:-1:-1;;;11346:81:22;;;;;;;:::i;:::-;-1:-1:-1;;;;;11445:16:22;;11437:65;;;;-1:-1:-1;;;11437:65:22;;34605:2:44;11437:65:22;;;34587:21:44;34644:2;34624:18;;;34617:30;34683:34;34663:18;;;34656:62;-1:-1:-1;;;34734:18:44;;;34727:34;34778:19;;11437:65:22;34403:400:44;11437:65:22;11513:42;11534:4;11540:2;11544:7;11553:1;11513:20;:42::i;:::-;11682:4;-1:-1:-1;;;;;11655:31:22;:23;11670:7;11655:14;:23::i;:::-;-1:-1:-1;;;;;11655:31:22;;11647:81;;;;-1:-1:-1;;;11647:81:22;;;;;;;:::i;:::-;11797:24;;;;:15;:24;;;;;;;;11790:31;;-1:-1:-1;;;;;;11790:31:22;;;;;;-1:-1:-1;;;;;12265:15:22;;;;;;:9;:15;;;;;:20;;-1:-1:-1;;12265:20:22;;;12299:13;;;;;;;;;:18;;11790:31;12299:18;;;12337:16;;;:7;:16;;;;;;:21;;;;;;;;;;12374:27;;11813:7;;12374:27;;;3538:336;3468:406;;:::o;1359:130:18:-;1273:6;;-1:-1:-1;;;;;1273:6:18;719:10:28;1422:23:18;1414:68;;;;-1:-1:-1;;;1414:68:18;;35010:2:44;1414:68:18;;;34992:21:44;;;35029:18;;;35022:30;35088:34;35068:18;;;35061:62;35140:18;;1414:68:18;34808:356:44;8925:920:22;-1:-1:-1;;;;;9004:16:22;;8996:61;;;;-1:-1:-1;;;8996:61:22;;35371:2:44;8996:61:22;;;35353:21:44;;;35390:18;;;35383:30;35449:34;35429:18;;;35422:62;35501:18;;8996:61:22;35169:356:44;8996:61:22;7185:4;6794:16;;;:7;:16;;;;;;-1:-1:-1;;;;;6794:16:22;7208:31;9067:58;;;;-1:-1:-1;;;9067:58:22;;35732:2:44;9067:58:22;;;35714:21:44;35771:2;35751:18;;;35744:30;35810;35790:18;;;35783:58;35858:18;;9067:58:22;35530:352:44;9067:58:22;9136:48;9165:1;9169:2;9173:7;9182:1;9136:20;:48::i;:::-;7185:4;6794:16;;;:7;:16;;;;;;-1:-1:-1;;;;;6794:16:22;7208:31;9271:58;;;;-1:-1:-1;;;9271:58:22;;35732:2:44;9271:58:22;;;35714:21:44;35771:2;35751:18;;;35744:30;35810;35790:18;;;35783:58;35858:18;;9271:58:22;35530:352:44;9271:58:22;-1:-1:-1;;;;;9671:13:22;;;;;;:9;:13;;;;;;;;:18;;9688:1;9671:18;;;9710:16;;;:7;:16;;;;;;:21;;-1:-1:-1;;;;;;9710:21:22;;;;;9747:33;9718:7;;9671:13;;9747:33;;9671:13;;9747:33;14657:204:35;;:::o;19334:243::-;19490:1;19439:16;;;:7;:16;;;;;;:23;;;:53;;-1:-1:-1;;;;;;19439:53:35;;;19502:31;;:35;;;;19553:17;;;;;19447:7;3369:25:44;;3357:2;3342:18;;3223:177;19553:17:35;;;;;;;;19334:243;:::o;2426:187:18:-;2518:6;;;-1:-1:-1;;;;;2534:17:18;;;-1:-1:-1;;;;;;2534:17:18;;;;;;;2566:40;;2518:6;;;2534:17;2518:6;;2566:40;;2499:16;;2566:40;2489:124;2426:187;:::o;12879:277:22:-;12999:8;-1:-1:-1;;;;;12990:17:22;:5;-1:-1:-1;;;;;12990:17:22;;12982:55;;;;-1:-1:-1;;;12982:55:22;;36089:2:44;12982:55:22;;;36071:21:44;36128:2;36108:18;;;36101:30;36167:27;36147:18;;;36140:55;36212:18;;12982:55:22;35887:349:44;12982:55:22;-1:-1:-1;;;;;13047:25:22;;;;;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;:46;;-1:-1:-1;;13047:46:22;;;;;;;;;;13108:41;;540::44;;;13108::22;;513:18:44;13108:41:22;;;;;;;12879:277;;;:::o;447:696:29:-;503:13;552:14;569:17;580:5;569:10;:17::i;:::-;589:1;569:21;552:38;;604:20;638:6;627:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;627:18:29;-1:-1:-1;604:41:29;-1:-1:-1;765:28:29;;;781:2;765:28;820:280;-1:-1:-1;;851:5:29;-1:-1:-1;;;985:2:29;974:14;;969:30;851:5;956:44;1044:2;1035:11;;;-1:-1:-1;1064:21:29;820:280;1064:21;-1:-1:-1;1120:6:29;447:696;-1:-1:-1;;;447:696:29:o;4139:1160:35:-;4367:16;;;;:7;:16;;;;;;;;-1:-1:-1;;;;;4367:53:35;;;;:34;;:53;;;;;:59;;;;;;;;;:64;4346:170;;;;-1:-1:-1;;;4346:170:35;;36575:2:44;4346:170:35;;;36557:21:44;36614:2;36594:18;;;36587:30;36653:34;36633:18;;;36626:62;36724:29;36704:18;;;36697:57;36771:19;;4346:170:35;36373:423:44;4346:170:35;-1:-1:-1;;;;;;;;;;;;;4652:50:35;;;;-1:-1:-1;;;;4712:28:35;;;-1:-1:-1;5104:16:35;;;:7;:16;;;;;;;:29;;;;:36;:38;;;:::i;:::-;5030:16;;;;:7;:16;;;;;;;;-1:-1:-1;;;;;5030:53:35;;;;;;:34;;;;:53;;;;;:59;;;;;;;;:112;;;;5180:16;;;:29;;;;:49;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;5180:49:35;;;;;;;;;;;;;;;;;;;;;;;5245:47;;31670:25:44;;;31711:18;;;31704:60;31780:18;;31773:34;;;5245:47:35;;31658:2:44;31643:18;5245:47:35;;;;;;;4272:1027;4139:1160;;;:::o;18085:1217::-;18265:22;18289:16;18309:17;18318:7;18309:8;:17::i;:::-;18264:62;;;;18344:8;18356:1;18344:13;18336:65;;;;-1:-1:-1;;;18336:65:35;;37003:2:44;18336:65:35;;;36985:21:44;37042:2;37022:18;;;37015:30;37081:34;37061:18;;;37054:62;-1:-1:-1;;;37132:18:44;;;37125:37;37179:19;;18336:65:35;36801:403:44;18336:65:35;18719:49;;-1:-1:-1;;;18719:49:35;;;;;3369:25:44;;;-1:-1:-1;;;;;18719:38:35;;;;;3342:18:44;;18719:49:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;18690:78;;-1:-1:-1;18690:78:35;-1:-1:-1;;;;;;18786:31:35;;18812:4;18786:31;;;:54;;;18833:7;18821:8;:19;;18786:54;18778:144;;;;;-1:-1:-1;;;18778:144:35;;37728:2:44;18778:144:35;;;37710:21:44;37747:18;;;37740:30;;;;37806:34;37786:18;;;37779:62;37877:34;37857:18;;;37850:62;37929:19;;18778:144:35;37526:428:44;18778:144:35;18955:16;;;;:7;:16;;;;;;;:23;;;:58;;-1:-1:-1;;;;;;18955:58:35;-1:-1:-1;;;;;18955:58:35;;;;;;;;19023:31;;;;:43;;;19153:79;;-1:-1:-1;;;19153:79:35;;;;;31670:25:44;;;19217:4:35;31711:18:44;;;31704:60;31780:18;;;31773:34;;;19153:44:35;;31643:18:44;;19153:79:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;19248:47:35;;;31670:25:44;;;-1:-1:-1;;;;;31731:32:44;;31726:2;31711:18;;31704:60;31780:18;;;31773:34;;;19248:47:35;;-1:-1:-1;31658:2:44;31643:18;;-1:-1:-1;19248:47:35;;;;;;;18212:1090;;18085:1217;;;:::o;6326:267:22:-;6438:28;6448:4;6454:2;6458:7;6438:9;:28::i;:::-;6484:47;6507:4;6513:2;6517:7;6526:4;6484:22;:47::i;:::-;6476:110;;;;-1:-1:-1;;;6476:110:22;;;;;;;:::i;2801:276::-;2874:13;2899:23;2914:7;2899:14;:23::i;:::-;2933:21;2957:10;3395:9;;;;;;;;;-1:-1:-1;3395:9:22;;;3319:92;2957:10;2933:34;;3008:1;2990:7;2984:21;:25;:86;;;;;;;;;;;;;;;;;3036:7;3045:18;:7;:16;:18::i;:::-;3019:45;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2977:93;2801:276;-1:-1:-1;;;2801:276:22:o;1570:300::-;1672:4;-1:-1:-1;;;;;;1707:40:22;;-1:-1:-1;;;1707:40:22;;:104;;-1:-1:-1;;;;;;;1763:48:22;;-1:-1:-1;;;1763:48:22;1707:104;:156;;;-1:-1:-1;;;;;;;;;;937:40:30;;;1827:36:22;829:155:30;23516:1034:35;23682:77;23730:4;23736:2;23740:7;23749:9;23682:47;:77::i;:::-;23795:36;23819:7;23828:2;23795:23;:36::i;:::-;23770:142;;;;-1:-1:-1;;;23770:142:35;;38580:2:44;23770:142:35;;;38562:21:44;38619:2;38599:18;;;38592:30;38658:34;38638:18;;;38631:62;-1:-1:-1;;;38709:18:44;;;38702:45;38764:19;;23770:142:35;38378:411:44;23770:142:35;23948:45;23981:7;23990:2;23948:32;:45::i;:::-;23923:164;;;;-1:-1:-1;;;23923:164:35;;38996:2:44;23923:164:35;;;38978:21:44;39035:2;39015:18;;;39008:30;39074:34;39054:18;;;39047:62;39145:30;39125:18;;;39118:58;39193:19;;23923:164:35;38794:424:44;23923:164:35;24219:6;24214:330;24231:16;;;;:7;:16;;;;;:29;;:36;24227:40;;24214:330;;;24288:23;24327:16;;;:7;:16;;;;;:46;;:49;;24374:1;;24327:49;;;;;;:::i;:::-;;;;;;;;;;;;;;;;:83;24440:16;;;:7;:16;;;;;;:29;;:32;;-1:-1:-1;;;;;24327:83:35;;;;-1:-1:-1;24440:29:35;24470:1;;24440:32;;;;;;:::i;:::-;;;;;;;;;:40;:32;;;;;:40;;24494:39;;-1:-1:-1;;;24494:39:35;;-1:-1:-1;;;;;39481:15:44;;;24494:39:35;;;39463:34:44;39533:15;;;39513:18;;;39506:43;39565:18;;;39558:34;;;24440:40:35;;-1:-1:-1;24494:23:35;;;;;;39398:18:44;;24494:39:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;24274:270;;24269:3;;;;;:::i;:::-;;;;24214:330;;10139:916:32;10192:7;;-1:-1:-1;;;10267:17:32;;10263:103;;-1:-1:-1;;;10304:17:32;;;-1:-1:-1;10349:2:32;10339:12;10263:103;10392:8;10383:5;:17;10379:103;;10429:8;10420:17;;;-1:-1:-1;10465:2:32;10455:12;10379:103;10508:8;10499:5;:17;10495:103;;10545:8;10536:17;;;-1:-1:-1;10581:2:32;10571:12;10495:103;10624:7;10615:5;:16;10611:100;;10660:7;10651:16;;;-1:-1:-1;10695:1:32;10685:11;10611:100;10737:7;10728:5;:16;10724:100;;10773:7;10764:16;;;-1:-1:-1;10808:1:32;10798:11;10724:100;10850:7;10841:5;:16;10837:100;;10886:7;10877:16;;;-1:-1:-1;10921:1:32;10911:11;10837:100;10963:7;10954:5;:16;10950:66;;11000:1;10990:11;11042:6;10139:916;-1:-1:-1;;10139:916:32:o;13925:831:22:-;14074:4;-1:-1:-1;;;;;14094:13:22;;1702:19:27;:23;14090:660:22;;14129:71;;-1:-1:-1;;;14129:71:22;;-1:-1:-1;;;;;14129:36:22;;;;;:71;;719:10:28;;14180:4:22;;14186:7;;14195:4;;14129:71;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;14129:71:22;;;;;;;;-1:-1:-1;;14129:71:22;;;;;;;;;;;;:::i;:::-;;;14125:573;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14367:6;:13;14384:1;14367:18;14363:321;;14409:60;;-1:-1:-1;;;14409:60:22;;;;;;;:::i;14363:321::-;14636:6;14630:13;14621:6;14617:2;14613:15;14606:38;14125:573;-1:-1:-1;;;;;;14250:51:22;-1:-1:-1;;;14250:51:22;;-1:-1:-1;14243:58:22;;14090:660;-1:-1:-1;14735:4:22;13925:831;;;;;;:::o;2489:890:39:-;2748:1;2736:9;:13;2732:219;;;2877:63;;-1:-1:-1;;;2877:63:39;;40553:2:44;2877:63:39;;;40535:21:44;40592:2;40572:18;;;40565:30;40631:34;40611:18;;;40604:62;-1:-1:-1;;;40682:18:44;;;40675:51;40743:19;;2877:63:39;40351:417:44;2732:219:39;2979:12;-1:-1:-1;;;;;3006:18:39;;3002:183;;3040:40;3072:7;4188:10;:17;;4161:24;;;;:15;:24;;;;;:44;;;4215:24;;;;;;;;;;;;4085:161;3040:40;3002:183;;;3109:2;-1:-1:-1;;;;;3101:10:39;:4;-1:-1:-1;;;;;3101:10:39;;3097:88;;3127:47;3160:4;3166:7;3127:32;:47::i;:::-;-1:-1:-1;;;;;3198:16:39;;3194:179;;3230:45;3267:7;3230:36;:45::i;:::-;3194:179;;;3302:4;-1:-1:-1;;;;;3296:10:39;:2;-1:-1:-1;;;;;3296:10:39;;3292:81;;3322:40;3350:2;3354:7;3322:27;:40::i;4863:970::-;5125:22;5175:1;5150:22;5167:4;5150:16;:22::i;:::-;:26;;;;:::i;:::-;5186:18;5207:26;;;:17;:26;;;;;;5125:51;;-1:-1:-1;5337:28:39;;;5333:323;;-1:-1:-1;;;;;5403:18:39;;5381:19;5403:18;;;:12;:18;;;;;;;;:34;;;;;;;;;5452:30;;;;;;:44;;;5568:30;;:17;:30;;;;;:43;;;5333:323;-1:-1:-1;5749:26:39;;;;:17;:26;;;;;;;;5742:33;;;-1:-1:-1;;;;;5792:18:39;;;;;:12;:18;;;;;:34;;;;;;;5785:41;4863:970::o;6121:1061::-;6395:10;:17;6370:22;;6395:21;;6415:1;;6395:21;:::i;:::-;6426:18;6447:24;;;:15;:24;;;;;;6815:10;:26;;6370:46;;-1:-1:-1;6447:24:39;;6370:46;;6815:26;;;;;;:::i;:::-;;;;;;;;;6793:48;;6877:11;6852:10;6863;6852:22;;;;;;;;:::i;:::-;;;;;;;;;;;;:36;;;;6956:28;;;:15;:28;;;;;;;:41;;;7125:24;;;;;7118:31;7159:10;:16;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;6192:990;;;6121:1061;:::o;3673:217::-;3757:14;3774:20;3791:2;3774:16;:20::i;:::-;-1:-1:-1;;;;;3804:16:39;;;;;;;:12;:16;;;;;;;;:24;;;;;;;;:34;;;3848:26;;;:17;:26;;;;;;:35;;;;-1:-1:-1;3673:217:39:o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:131:44:-;-1:-1:-1;;;;;;88:32:44;;78:43;;68:71;;135:1;132;125:12;150:245;208:6;261:2;249:9;240:7;236:23;232:32;229:52;;;277:1;274;267:12;229:52;316:9;303:23;335:30;359:5;335:30;:::i;592:250::-;677:1;687:113;701:6;698:1;695:13;687:113;;;777:11;;;771:18;758:11;;;751:39;723:2;716:10;687:113;;;-1:-1:-1;;834:1:44;816:16;;809:27;592:250::o;847:271::-;889:3;927:5;921:12;954:6;949:3;942:19;970:76;1039:6;1032:4;1027:3;1023:14;1016:4;1009:5;1005:16;970:76;:::i;:::-;1100:2;1079:15;-1:-1:-1;;1075:29:44;1066:39;;;;1107:4;1062:50;;847:271;-1:-1:-1;;847:271:44:o;1123:220::-;1272:2;1261:9;1254:21;1235:4;1292:45;1333:2;1322:9;1318:18;1310:6;1292:45;:::i;1348:180::-;1407:6;1460:2;1448:9;1439:7;1435:23;1431:32;1428:52;;;1476:1;1473;1466:12;1428:52;-1:-1:-1;1499:23:44;;1348:180;-1:-1:-1;1348:180:44:o;1741:131::-;-1:-1:-1;;;;;1816:31:44;;1806:42;;1796:70;;1862:1;1859;1852:12;1877:315;1945:6;1953;2006:2;1994:9;1985:7;1981:23;1977:32;1974:52;;;2022:1;2019;2012:12;1974:52;2061:9;2048:23;2080:31;2105:5;2080:31;:::i;:::-;2130:5;2182:2;2167:18;;;;2154:32;;-1:-1:-1;;;1877:315:44:o;2386:348::-;2438:8;2448:6;2502:3;2495:4;2487:6;2483:17;2479:27;2469:55;;2520:1;2517;2510:12;2469:55;-1:-1:-1;2543:20:44;;2586:18;2575:30;;2572:50;;;2618:1;2615;2608:12;2572:50;2655:4;2647:6;2643:17;2631:29;;2707:3;2700:4;2691:6;2683;2679:19;2675:30;2672:39;2669:59;;;2724:1;2721;2714:12;2669:59;2386:348;;;;;:::o;2739:479::-;2819:6;2827;2835;2888:2;2876:9;2867:7;2863:23;2859:32;2856:52;;;2904:1;2901;2894:12;2856:52;2940:9;2927:23;2917:33;;3001:2;2990:9;2986:18;2973:32;3028:18;3020:6;3017:30;3014:50;;;3060:1;3057;3050:12;3014:50;3099:59;3150:7;3141:6;3130:9;3126:22;3099:59;:::i;:::-;2739:479;;3177:8;;-1:-1:-1;3073:85:44;;-1:-1:-1;;;;2739:479:44:o;3405:456::-;3482:6;3490;3498;3551:2;3539:9;3530:7;3526:23;3522:32;3519:52;;;3567:1;3564;3557:12;3519:52;3606:9;3593:23;3625:31;3650:5;3625:31;:::i;:::-;3675:5;-1:-1:-1;3732:2:44;3717:18;;3704:32;3745:33;3704:32;3745:33;:::i;:::-;3405:456;;3797:7;;-1:-1:-1;;;3851:2:44;3836:18;;;;3823:32;;3405:456::o;3866:118::-;3952:5;3945:13;3938:21;3931:5;3928:32;3918:60;;3974:1;3971;3964:12;3989:450;4063:6;4071;4079;4132:2;4120:9;4111:7;4107:23;4103:32;4100:52;;;4148:1;4145;4138:12;4100:52;4184:9;4171:23;4161:33;;4244:2;4233:9;4229:18;4216:32;4257:31;4282:5;4257:31;:::i;:::-;4307:5;-1:-1:-1;4364:2:44;4349:18;;4336:32;4377:30;4336:32;4377:30;:::i;:::-;4426:7;4416:17;;;3989:450;;;;;:::o;4444:315::-;4512:6;4520;4573:2;4561:9;4552:7;4548:23;4544:32;4541:52;;;4589:1;4586;4579:12;4541:52;4625:9;4612:23;4602:33;;4685:2;4674:9;4670:18;4657:32;4698:31;4723:5;4698:31;:::i;:::-;4748:5;4738:15;;;4444:315;;;;;:::o;4764:309::-;4829:6;4837;4890:2;4878:9;4869:7;4865:23;4861:32;4858:52;;;4906:1;4903;4896:12;4858:52;4942:9;4929:23;4919:33;;5002:2;4991:9;4987:18;4974:32;5015:28;5037:5;5015:28;:::i;5078:248::-;5146:6;5154;5207:2;5195:9;5186:7;5182:23;5178:32;5175:52;;;5223:1;5220;5213:12;5175:52;-1:-1:-1;;5246:23:44;;;5316:2;5301:18;;;5288:32;;-1:-1:-1;5078:248:44:o;5331:756::-;5429:6;5437;5445;5453;5461;5514:3;5502:9;5493:7;5489:23;5485:33;5482:53;;;5531:1;5528;5521:12;5482:53;5571:9;5558:23;5604:18;5596:6;5593:30;5590:50;;;5636:1;5633;5626:12;5590:50;5675:59;5726:7;5717:6;5706:9;5702:22;5675:59;:::i;:::-;5753:8;;-1:-1:-1;5649:85:44;-1:-1:-1;;5838:2:44;5823:18;;5810:32;5851:31;5810:32;5851:31;:::i;:::-;5901:5;-1:-1:-1;5953:2:44;5938:18;;5925:32;;-1:-1:-1;6009:2:44;5994:18;;5981:32;6022:33;5981:32;6022:33;:::i;:::-;6074:7;6064:17;;;5331:756;;;;;;;;:::o;6345:247::-;6404:6;6457:2;6445:9;6436:7;6432:23;6428:32;6425:52;;;6473:1;6470;6463:12;6425:52;6512:9;6499:23;6531:31;6556:5;6531:31;:::i;6597:383::-;6674:6;6682;6690;6743:2;6731:9;6722:7;6718:23;6714:32;6711:52;;;6759:1;6756;6749:12;6711:52;6795:9;6782:23;6772:33;;6855:2;6844:9;6840:18;6827:32;6868:31;6893:5;6868:31;:::i;6985:382::-;7050:6;7058;7111:2;7099:9;7090:7;7086:23;7082:32;7079:52;;;7127:1;7124;7117:12;7079:52;7166:9;7153:23;7185:31;7210:5;7185:31;:::i;:::-;7235:5;-1:-1:-1;7292:2:44;7277:18;;7264:32;7305:30;7264:32;7305:30;:::i;7372:127::-;7433:10;7428:3;7424:20;7421:1;7414:31;7464:4;7461:1;7454:15;7488:4;7485:1;7478:15;7504:1266;7599:6;7607;7615;7623;7676:3;7664:9;7655:7;7651:23;7647:33;7644:53;;;7693:1;7690;7683:12;7644:53;7732:9;7719:23;7751:31;7776:5;7751:31;:::i;:::-;7801:5;-1:-1:-1;7858:2:44;7843:18;;7830:32;7871:33;7830:32;7871:33;:::i;:::-;7923:7;-1:-1:-1;7977:2:44;7962:18;;7949:32;;-1:-1:-1;8032:2:44;8017:18;;8004:32;8055:18;8085:14;;;8082:34;;;8112:1;8109;8102:12;8082:34;8150:6;8139:9;8135:22;8125:32;;8195:7;8188:4;8184:2;8180:13;8176:27;8166:55;;8217:1;8214;8207:12;8166:55;8253:2;8240:16;8275:2;8271;8268:10;8265:36;;;8281:18;;:::i;:::-;8356:2;8350:9;8324:2;8410:13;;-1:-1:-1;;8406:22:44;;;8430:2;8402:31;8398:40;8386:53;;;8454:18;;;8474:22;;;8451:46;8448:72;;;8500:18;;:::i;:::-;8540:10;8536:2;8529:22;8575:2;8567:6;8560:18;8615:7;8610:2;8605;8601;8597:11;8593:20;8590:33;8587:53;;;8636:1;8633;8626:12;8587:53;8692:2;8687;8683;8679:11;8674:2;8666:6;8662:15;8649:46;8737:1;8732:2;8727;8719:6;8715:15;8711:24;8704:35;8758:6;8748:16;;;;;;;7504:1266;;;;;;;:::o;8775:388::-;8843:6;8851;8904:2;8892:9;8883:7;8879:23;8875:32;8872:52;;;8920:1;8917;8910:12;8872:52;8959:9;8946:23;8978:31;9003:5;8978:31;:::i;:::-;9028:5;-1:-1:-1;9085:2:44;9070:18;;9057:32;9098:33;9057:32;9098:33;:::i;9447:380::-;9526:1;9522:12;;;;9569;;;9590:61;;9644:4;9636:6;9632:17;9622:27;;9590:61;9697:2;9689:6;9686:14;9666:18;9663:38;9660:161;;9743:10;9738:3;9734:20;9731:1;9724:31;9778:4;9775:1;9768:15;9806:4;9803:1;9796:15;10664:127;10725:10;10720:3;10716:20;10713:1;10706:31;10756:4;10753:1;10746:15;10780:4;10777:1;10770:15;10796:354;10998:2;10980:21;;;11037:2;11017:18;;;11010:30;11076:32;11071:2;11056:18;;11049:60;11141:2;11126:18;;10796:354::o;11155:409::-;11357:2;11339:21;;;11396:2;11376:18;;;11369:30;11435:34;11430:2;11415:18;;11408:62;-1:-1:-1;;;11501:2:44;11486:18;;11479:43;11554:3;11539:19;;11155:409::o;11569:492::-;11771:2;11753:21;;;11810:2;11790:18;;;11783:30;11849:34;11844:2;11829:18;;11822:62;11920:34;11915:2;11900:18;;11893:62;11992:26;11986:3;11971:19;;11964:55;12051:3;12036:19;;11569:492::o;12478:127::-;12539:10;12534:3;12530:20;12527:1;12520:31;12570:4;12567:1;12560:15;12594:4;12591:1;12584:15;12889:245;12956:6;13009:2;12997:9;12988:7;12984:23;12980:32;12977:52;;;13025:1;13022;13015:12;12977:52;13057:9;13051:16;13076:28;13098:5;13076:28;:::i;13139:127::-;13200:10;13195:3;13191:20;13188:1;13181:31;13231:4;13228:1;13221:15;13255:4;13252:1;13245:15;13271:135;13310:3;13331:17;;;13328:43;;13351:18;;:::i;:::-;-1:-1:-1;13398:1:44;13387:13;;13271:135::o;14686:267::-;14775:6;14770:3;14763:19;14827:6;14820:5;14813:4;14808:3;14804:14;14791:43;-1:-1:-1;14879:1:44;14854:16;;;14872:4;14850:27;;;14843:38;;;;14935:2;14914:15;;;-1:-1:-1;;14910:29:44;14901:39;;;14897:50;;14686:267::o;14958:385::-;15215:2;15204:9;15197:21;15178:4;15235:62;15293:2;15282:9;15278:18;15270:6;15262;15235:62;:::i;:::-;15227:70;;-1:-1:-1;;;15328:2:44;15317:9;15313:18;15306:31;14958:385;;;;;:::o;15348:414::-;15550:2;15532:21;;;15589:2;15569:18;;;15562:30;15628:34;15623:2;15608:18;;15601:62;-1:-1:-1;;;15694:2:44;15679:18;;15672:48;15752:3;15737:19;;15348:414::o;15767:385::-;16024:2;16013:9;16006:21;15987:4;16044:62;16102:2;16091:9;16087:18;16079:6;16071;16044:62;:::i;:::-;16036:70;;-1:-1:-1;;;16137:2:44;16126:9;16122:18;16115:31;15767:385;;;;;:::o;16157:414::-;16359:2;16341:21;;;16398:2;16378:18;;;16371:30;16437:34;16432:2;16417:18;;16410:62;-1:-1:-1;;;16503:2:44;16488:18;;16481:48;16561:3;16546:19;;16157:414::o;16576:385::-;16833:2;16822:9;16815:21;16796:4;16853:62;16911:2;16900:9;16896:18;16888:6;16880;16853:62;:::i;:::-;16845:70;;-1:-1:-1;;;16946:2:44;16935:9;16931:18;16924:31;16576:385;;;;;:::o;16966:414::-;17168:2;17150:21;;;17207:2;17187:18;;;17180:30;17246:34;17241:2;17226:18;;17219:62;-1:-1:-1;;;17312:2:44;17297:18;;17290:48;17370:3;17355:19;;16966:414::o;17385:273::-;17570:6;17562;17557:3;17544:33;17526:3;17596:16;;17621:13;;;17596:16;17385:273;-1:-1:-1;17385:273:44:o;17663:287::-;17792:3;17830:6;17824:13;17846:66;17905:6;17900:3;17893:4;17885:6;17881:17;17846:66;:::i;:::-;17928:16;;;;;17663:287;-1:-1:-1;;17663:287:44:o;17955:184::-;18025:6;18078:2;18066:9;18057:7;18053:23;18049:32;18046:52;;;18094:1;18091;18084:12;18046:52;-1:-1:-1;18117:16:44;;17955:184;-1:-1:-1;17955:184:44:o;19088:545::-;19190:2;19185:3;19182:11;19179:448;;;19226:1;19251:5;19247:2;19240:17;19296:4;19292:2;19282:19;19366:2;19354:10;19350:19;19347:1;19343:27;19337:4;19333:38;19402:4;19390:10;19387:20;19384:47;;;-1:-1:-1;19425:4:44;19384:47;19480:2;19475:3;19471:12;19468:1;19464:20;19458:4;19454:31;19444:41;;19535:82;19553:2;19546:5;19543:13;19535:82;;;19598:17;;;19579:1;19568:13;19535:82;;19809:1206;19933:18;19928:3;19925:27;19922:53;;;19955:18;;:::i;:::-;19984:94;20074:3;20034:38;20066:4;20060:11;20034:38;:::i;:::-;20028:4;19984:94;:::i;:::-;20104:1;20129:2;20124:3;20121:11;20146:1;20141:616;;;;20801:1;20818:3;20815:93;;;-1:-1:-1;20874:19:44;;;20861:33;20815:93;-1:-1:-1;;19766:1:44;19762:11;;;19758:24;19754:29;19744:40;19790:1;19786:11;;;19741:57;20921:78;;20114:895;;20141:616;19035:1;19028:14;;;19072:4;19059:18;;-1:-1:-1;;20177:17:44;;;20278:9;20300:229;20314:7;20311:1;20308:14;20300:229;;;20403:19;;;20390:33;20375:49;;20510:4;20495:20;;;;20463:1;20451:14;;;;20330:12;20300:229;;;20304:3;20557;20548:7;20545:16;20542:159;;;20681:1;20677:6;20671:3;20665;20662:1;20658:11;20654:21;20650:34;20646:39;20633:9;20628:3;20624:19;20611:33;20607:79;20599:6;20592:95;20542:159;;;20744:1;20738:3;20735:1;20731:11;20727:19;20721:4;20714:33;20114:895;;19809:1206;;;:::o;21020:415::-;21235:2;21224:9;21217:21;21198:4;21255:62;21313:2;21302:9;21298:18;21290:6;21282;21255:62;:::i;:::-;21348:2;21333:18;;21326:34;;;;-1:-1:-1;;;;;;21396:32:44;;;;21391:2;21376:18;;;21369:60;21247:70;21020:415;-1:-1:-1;;21020:415:44:o;22206:427::-;22408:2;22390:21;;;22447:2;22427:18;;;22420:30;22486:34;22481:2;22466:18;;22459:62;22557:33;22552:2;22537:18;;22530:61;22623:3;22608:19;;22206:427::o;22991:722::-;23041:3;23082:5;23076:12;23111:36;23137:9;23111:36;:::i;:::-;23166:1;23183:18;;;23210:133;;;;23357:1;23352:355;;;;23176:531;;23210:133;-1:-1:-1;;23243:24:44;;23231:37;;23316:14;;23309:22;23297:35;;23288:45;;;-1:-1:-1;23210:133:44;;23352:355;23383:5;23380:1;23373:16;23412:4;23457:2;23454:1;23444:16;23482:1;23496:165;23510:6;23507:1;23504:13;23496:165;;;23588:14;;23575:11;;;23568:35;23631:16;;;;23525:10;;23496:165;;;23500:3;;;23690:6;23685:3;23681:16;23674:23;;23176:531;;;;;22991:722;;;;:::o;23718:429::-;23981:3;24012:38;24046:3;24038:6;24012:38;:::i;:::-;-1:-1:-1;;;24066:5:44;24059:18;24093:48;24138:1;24131:5;24127:13;24119:6;24093:48;:::i;:::-;24086:55;23718:429;-1:-1:-1;;;;;23718:429:44:o;24918:400::-;25120:2;25102:21;;;25159:2;25139:18;;;25132:30;25198:34;25193:2;25178:18;;25171:62;-1:-1:-1;;;25264:2:44;25249:18;;25242:34;25308:3;25293:19;;24918:400::o;25323:640::-;25603:3;25641:6;25635:13;25657:66;25716:6;25711:3;25704:4;25696:6;25692:17;25657:66;:::i;:::-;-1:-1:-1;;;25745:16:44;;;25770:18;;;25813:13;;25835:78;25813:13;25900:1;25889:13;;25882:4;25870:17;;25835:78;:::i;:::-;25933:20;25955:1;25929:28;;25323:640;-1:-1:-1;;;;25323:640:44:o;26650:618::-;26940:3;26978:6;26972:13;26994:66;27053:6;27048:3;27041:4;27033:6;27029:17;26994:66;:::i;:::-;-1:-1:-1;;;27082:16:44;;;27107:18;;;27170:6;27162;27158:1;27147:13;;27134:43;27242:1;27200:18;;27220:1;27196:26;27231:13;;;-1:-1:-1;27196:26:44;;26650:618;-1:-1:-1;;;26650:618:44:o;27634:389::-;27849:2;27838:9;27831:21;27812:4;27869:62;27927:2;27916:9;27912:18;27904:6;27896;27869:62;:::i;:::-;27962:2;27947:18;;27940:34;;;;-1:-1:-1;28005:2:44;27990:18;27983:34;27861:70;27634:389;-1:-1:-1;;27634:389:44:o;28028:496::-;28207:3;28245:6;28239:13;28261:66;28320:6;28315:3;28308:4;28300:6;28296:17;28261:66;:::i;:::-;28390:13;;28349:16;;;;28412:70;28390:13;28349:16;28459:4;28447:17;;28412:70;:::i;:::-;28498:20;;28028:496;-1:-1:-1;;;;28028:496:44:o;28529:251::-;28599:6;28652:2;28640:9;28631:7;28627:23;28623:32;28620:52;;;28668:1;28665;28658:12;28620:52;28700:9;28694:16;28719:31;28744:5;28719:31;:::i;28785:415::-;28987:2;28969:21;;;29026:2;29006:18;;;28999:30;29065:34;29060:2;29045:18;;29038:62;-1:-1:-1;;;29131:2:44;29116:18;;29109:49;29190:3;29175:19;;28785:415::o;29688:128::-;29755:9;;;29776:11;;;29773:37;;;29790:18;;:::i;29821:127::-;29882:10;29877:3;29873:20;29870:1;29863:31;29913:4;29910:1;29903:15;29937:4;29934:1;29927:15;30442:125;30507:9;;;30528:10;;;30525:36;;;30541:18;;:::i;32640:1352::-;32766:3;32760:10;32793:18;32785:6;32782:30;32779:56;;;32815:18;;:::i;:::-;32844:97;32934:6;32894:38;32926:4;32920:11;32894:38;:::i;:::-;32888:4;32844:97;:::i;:::-;32996:4;;33060:2;33049:14;;33077:1;33072:663;;;;33779:1;33796:6;33793:89;;;-1:-1:-1;33848:19:44;;;33842:26;33793:89;-1:-1:-1;;19766:1:44;19762:11;;;19758:24;19754:29;19744:40;19790:1;19786:11;;;19741:57;33895:81;;33042:944;;33072:663;19035:1;19028:14;;;19072:4;19059:18;;-1:-1:-1;;33108:20:44;;;33226:236;33240:7;33237:1;33234:14;33226:236;;;33329:19;;;33323:26;33308:42;;33421:27;;;;33389:1;33377:14;;;;33256:19;;33226:236;;;33230:3;33490:6;33481:7;33478:19;33475:201;;;33551:19;;;33545:26;-1:-1:-1;;33634:1:44;33630:14;;;33646:3;33626:24;33622:37;33618:42;33603:58;33588:74;;33475:201;-1:-1:-1;;;;;33722:1:44;33706:14;;;33702:22;33689:36;;-1:-1:-1;32640:1352:44:o;33997:401::-;34199:2;34181:21;;;34238:2;34218:18;;;34211:30;34277:34;34272:2;34257:18;;34250:62;-1:-1:-1;;;34343:2:44;34328:18;;34321:35;34388:3;34373:19;;33997:401::o;37209:312::-;37288:6;37296;37349:2;37337:9;37328:7;37324:23;37320:32;37317:52;;;37365:1;37362;37355:12;37317:52;37397:9;37391:16;37416:31;37441:5;37416:31;:::i;:::-;37511:2;37496:18;;;;37490:25;37466:5;;37490:25;;-1:-1:-1;;;37209:312:44:o;37959:414::-;38161:2;38143:21;;;38200:2;38180:18;;;38173:30;38239:34;38234:2;38219:18;;38212:62;-1:-1:-1;;;38305:2:44;38290:18;;38283:48;38363:3;38348:19;;37959:414::o;39603:489::-;-1:-1:-1;;;;;39872:15:44;;;39854:34;;39924:15;;39919:2;39904:18;;39897:43;39971:2;39956:18;;39949:34;;;40019:3;40014:2;39999:18;;39992:31;;;39797:4;;40040:46;;40066:19;;40058:6;40040:46;:::i;:::-;40032:54;39603:489;-1:-1:-1;;;;;;39603:489:44:o;40097:249::-;40166:6;40219:2;40207:9;40198:7;40194:23;40190:32;40187:52;;;40235:1;40232;40225:12;40187:52;40267:9;40261:16;40286:30;40310:5;40286:30;:::i",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "addLockedToken(uint256,address,uint256)": "edee3965",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "burn(uint256)": "42966c68",
    "expirationTimestamp(uint256)": "72fdc40e",
    "getApproved(uint256)": "081812fc",
    "getName(uint256)": "6b8ff574",
    "getNameType(uint256)": "0ae5fa41",
    "incomingLinkIndex(uint256,uint256)": "a6ed7ada",
    "isAddressWhitelisted(uint256,address)": "d1af032c",
    "isApprovedForAll(address,address)": "e985e9c5",
    "isBurnable(uint256)": "c6f88d4a",
    "isDependent(uint256,address,uint256)": "8fc76be7",
    "isDependentBurnable(uint256)": "86c048c5",
    "isDependentTransferable(uint256)": "4541eda3",
    "isDependentTransferableToAddress(uint256,address)": "32f4da4a",
    "isLocked(uint256)": "f6aacfb1",
    "isTokenBurnable(uint256)": "7827136b",
    "isTokenTransferable(uint256)": "ddaec205",
    "isTokenTransferableToAddress(uint256,address)": "ac3e2c6f",
    "isTransferable(uint256)": "b2564569",
    "isTransferableToAddress(uint256,address)": "99d112fa",
    "linkTo(uint256)": "515f8566",
    "linksAmountIncoming(uint256)": "692c85ab",
    "linksAmountOutgoing(uint256)": "5d57bf7c",
    "lock(uint256,address,uint256)": "cf27cfc4",
    "name()": "06fdde03",
    "newLink(uint256,uint256)": "a4aec075",
    "newName(string,address,uint256,address)": "4671afe9",
    "newSubname(uint256,string)": "b5916ab2",
    "outgoingLinkIndex(uint256,uint256)": "80d27330",
    "owner()": "8da5cb5b",
    "ownerOf(uint256)": "6352211e",
    "removeDependence(uint256,address,uint256)": "eee40354",
    "removeLockedToken(uint256,address,uint256)": "e5c8e431",
    "renounceOwnership()": "715018a6",
    "resolver(uint256)": "108eaa4e",
    "safeTransferFrom(address,address,uint256)": "42842e0e",
    "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setBurnable(uint256,bool)": "33699624",
    "setDependence(uint256,address,uint256)": "d6034c26",
    "setExpirationDate(uint256,uint256)": "460727b1",
    "setResolver(uint256,address)": "bc7b6d62",
    "setTokenURI(uint256,string)": "162094c4",
    "setTransferWhitelist(uint256,address,bool)": "2e5466e6",
    "setTransferable(uint256,bool)": "dfe28fbf",
    "subdomainIndex(uint256,uint256)": "8117af2b",
    "parentID(uint256)": "7aadccdb",
    "subdomainsAmount(uint256)": "36f4ede4",
    "supportsInterface(bytes4)": "01ffc9a7",
    "symbol()": "95d89b41",
    "tokenByIndex(uint256)": "4f6ccce7",
    "tokenOfOwnerByIndex(address,uint256)": "2f745c59",
    "tokenURI(uint256)": "c87b56dd",
    "totalSupply()": "18160ddd",
    "transferFrom(address,address,uint256)": "23b872dd",
    "transferOwnership(address)": "f2fde38b",
    "unlock(uint256)": "6198e339"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_fromTokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_toTokenId\",\"type\":\"uint256\"}],\"name\":\"BatchMetadataUpdate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"MetadataUpdate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"CTContractAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"CTId\",\"type\":\"uint256\"}],\"name\":\"NewDependence\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fromID\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"targetID\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"linkID\",\"type\":\"uint256\"}],\"name\":\"NewLink\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"LockingContract\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"LockingId\",\"type\":\"uint256\"}],\"name\":\"NewLocking\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"}],\"name\":\"NewName\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"subname\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"subnameID\",\"type\":\"uint256\"}],\"name\":\"NewSubname\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"CTContractAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"CTId\",\"type\":\"uint256\"}],\"name\":\"RemovedDependence\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Unlocked\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"LockedContract\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"LockedID\",\"type\":\"uint256\"}],\"name\":\"addLockedToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"}],\"name\":\"expirationTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"}],\"name\":\"getName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"}],\"name\":\"getNameType\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"incomingLinkIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"whitelistAddress\",\"type\":\"address\"}],\"name\":\"isAddressWhitelisted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"isBurnable\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"CTContractAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"CTID\",\"type\":\"uint256\"}],\"name\":\"isDependent\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"isDependentBurnable\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"isDependentTransferable\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"transferToAddress\",\"type\":\"address\"}],\"name\":\"isDependentTransferableToAddress\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"isLocked\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"isTokenBurnable\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"isTokenTransferable\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"transferToAddress\",\"type\":\"address\"}],\"name\":\"isTokenTransferableToAddress\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"isTransferable\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"addressToTransferTo\",\"type\":\"address\"}],\"name\":\"isTransferableToAddress\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"}],\"name\":\"linkTo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"}],\"name\":\"linksAmountIncoming\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"}],\"name\":\"linksAmountOutgoing\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"LockingContract\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"LockingID\",\"type\":\"uint256\"}],\"name\":\"lock\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"fromID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"targetID\",\"type\":\"uint256\"}],\"name\":\"newLink\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"expiration\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"resolverAddress\",\"type\":\"address\"}],\"name\":\"newName\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"subname\",\"type\":\"string\"}],\"name\":\"newSubname\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"outgoingLinkIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"CTContractAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"CTID\",\"type\":\"uint256\"}],\"name\":\"removeDependence\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"LockedContract\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"LockedID\",\"type\":\"uint256\"}],\"name\":\"removeLockedToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"}],\"name\":\"resolver\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"burnable\",\"type\":\"bool\"}],\"name\":\"setBurnable\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"CTContractAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"CTID\",\"type\":\"uint256\"}],\"name\":\"setDependence\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"newTimeStamp\",\"type\":\"uint256\"}],\"name\":\"setExpirationDate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"nameResolver\",\"type\":\"address\"}],\"name\":\"setResolver\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"tokenURI\",\"type\":\"string\"}],\"name\":\"setTokenURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"whitelistAddress\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"isWhitelisted\",\"type\":\"bool\"}],\"name\":\"setTransferWhitelist\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"transferable\",\"type\":\"bool\"}],\"name\":\"setTransferable\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"subdomainIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"}],\"name\":\"parentID\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"nameID\",\"type\":\"uint256\"}],\"name\":\"subdomainsAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"unlock\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Woolball Registry contractA decentralized ID system \",\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when `owner` enables `approved` to manage the `tokenId` token.\"},\"ApprovalForAll(address,address,bool)\":{\"details\":\"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\"},\"BatchMetadataUpdate(uint256,uint256)\":{\"details\":\"This event emits when the metadata of a range of tokens is changed. So that the third-party platforms such as NFT market could timely update the images and related attributes of the NFTs.\"},\"MetadataUpdate(uint256)\":{\"details\":\"This event emits when the metadata of a token is changed. So that the third-party platforms such as NFT market could timely update the images and related attributes of the NFT.\"},\"NewDependence(uint256,address,uint256)\":{\"details\":\"Emitted when a dependency on CTId from CTContractAddress is added to `tokenId`.\"},\"NewLink(uint256,uint256,uint256)\":{\"details\":\"Emitted when a new link is created\"},\"NewLocking(uint256,address,uint256)\":{\"details\":\"Emitted when tokenId is locked to LockingId from LockingContract.\"},\"NewName(string,uint256,address)\":{\"details\":\"Emitted when a new name is created by a wallet.\"},\"NewSubname(string,uint256,uint256)\":{\"details\":\"Emitted when a subname is created\"},\"RemovedDependence(uint256,address,uint256)\":{\"details\":\"Emitted when a dependency on CTId from CTContractAddress is removed to `tokenId`.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `tokenId` token is transferred from `from` to `to`.\"},\"Unlocked(uint256)\":{\"details\":\"Emitted when a locking tokenId to LockingId from LockingContract is removed.\"}},\"kind\":\"dev\",\"methods\":{\"addLockedToken(uint256,address,uint256)\":{\"details\":\"addLockedToken notifies a Token that another token (LockedID), with the same owner, is locked to it.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"burn(uint256)\":{\"details\":\"burns tokenID.isTokenBurnable must return 'true'.*\"},\"constructor\":{\"details\":\"Initializes the contract by setting a `name` and a `symbol` to the token collection.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isAddressWhitelisted(uint256,address)\":{\"details\":\"Checks if an address is whitelisted.*\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"isBurnable(uint256)\":{\"details\":\"Checks the burnable property of tokenID (only of the token itself, not of its dependencies).*\"},\"isDependent(uint256,address,uint256)\":{\"details\":\"Checks if tokenID depends on CTID from CTContractAddress.*\"},\"isDependentBurnable(uint256)\":{\"details\":\"Checks all the tokens that tokenID depends on are burnable (only of the dependencies, not of the token).*\"},\"isDependentTransferable(uint256)\":{\"details\":\"Checks if all the tokens that tokenID depends on are transferable or not (only of the dependencies, not of the token).*\"},\"isDependentTransferableToAddress(uint256,address)\":{\"details\":\"Checks if all the dependences of tokenID can be transferred to addressToTransferTo, TODO: is STID (Solider Token ID?) is a clear name here?*\"},\"isLocked(uint256)\":{\"details\":\"returns (0x0, 0) if token is unlocked or the locking token (contract and id) otherwise\"},\"isTokenBurnable(uint256)\":{\"details\":\"Checks if tokenID can be burned.(meaning, both the token itself and all of its dependncies are transferable).*\"},\"isTokenTransferable(uint256)\":{\"details\":\"Checks if tokenID can be transferred (meaning, both the token itself and all of its dependncies are transferable).*\"},\"isTokenTransferableToAddress(uint256,address)\":{\"details\":\"Checks if tokenID can be transferred to addressToTransferTo.*\"},\"isTransferable(uint256)\":{\"details\":\"Checks the transferable property of tokenID (only of the token itself, not of its dependencies).*\"},\"isTransferableToAddress(uint256,address)\":{\"details\":\"Checks if tokenID can be transferred to addressToTransferTo, without taking its dependence into consideration.*\"},\"lock(uint256,address,uint256)\":{\"details\":\"Locks tokenID tokenID to token LockingID from LockingContract. Both tokens must have the same owner.With such a lock in place, tokenID transfer and burn functions can't be called byits owner as long as the locking is in place.If LckingID is transferred or burned, it also transfers or burns tokenID.If tokenID is nontransferable or unburnable, then a call to the transfer orburn function of the LockingID unlocks the tokenID.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"removeDependence(uint256,address,uint256)\":{\"details\":\"Removes from tokenID the dependency on CTID from contract CTContractAddress.\"},\"removeLockedToken(uint256,address,uint256)\":{\"details\":\"removeLockedToken removes a token that was locked to the tokenID.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"resolver(uint256)\":{\"details\":\"Returns the address of the resolver for the specified name.\",\"params\":{\"nameID\":\"The specified name.\"},\"returns\":{\"_0\":\"address of the resolver.\"}},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"we reimplement this function to add the isApproveOwnerOrLockingContract modifierSee {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"setBurnable(uint256,bool)\":{\"details\":\"Sets the burnable status of tokenID.*\"},\"setDependence(uint256,address,uint256)\":{\"details\":\"Adds to tokenID dependency on CTID from contract CTContractAddress.A token can be transfered or burned only if all the tokens it depends on are transferable or burnable, correspondingly.The caller must be the owner, opertaor or approved to use tokenID.\"},\"setResolver(uint256,address)\":{\"details\":\"Sets the resolver address for the specified name.\",\"params\":{\"nameID\":\"The name to update.\",\"nameResolver\":\"The address of the resolver.\"}},\"setTokenURI(uint256,string)\":{\"details\":\"sets the URI of tokenID.isTokenBurnable must return 'true'.*\"},\"setTransferWhitelist(uint256,address,bool)\":{\"details\":\"Adds or removes an address from the whitelist of tokenID.tokenID can be transferred to whitelisted addresses even when its set to be nontransferable.*\"},\"setTransferable(uint256,bool)\":{\"details\":\"Sets the transferable property of tokenID.*\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"we reimplement this function to add the isApproveOwnerOrLockingContract modifierSee {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"},\"unlock(uint256)\":{\"details\":\"unlocks a a token.This function must be called from the contract that locked tokenID.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/Woolball.sol\":\"Woolball\"},\"evmVersion\":\"paris\",\"libraries\":{\"src/StringUtils.sol:StringUtils\":\"0x5fbdb2315678afecb367f032d93f642f64180aa3\"},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/forge-std/src/console.sol\":{\"keccak256\":\"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70\",\"dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec\"]},\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32\",\"dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0xd04b0f06e0666f29cf7cccc82894de541e19bb30a765b107b1e40bb7fe5f7d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7b652499d098e88d8d878374616bb58434301061cae2253298b3f374044e0ddb\",\"dweb:/ipfs/QmbhAzctqo5jrSKU6idHdVyqfmzCcDbNUPvmx4GiXxfA6q\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC4906.sol\":{\"keccak256\":\"0x2a9dadb806be80dd451821f1f1190eb9aa6f6edae85b185db29d60767cc0c5f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5c25cac8dbe5bd96320053d23c3dacdb875e629d7c53ac00892eb7aa8500bde6\",\"dweb:/ipfs/Qmaf2oqbxxdJA9DphAoH4UCb8aXEAVM8fnu6qMxHJ5ta4A\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC721.sol\":{\"keccak256\":\"0xaf297d12d8d4a57fe01a70f0ef38908f208e3faedc577056d0b728fa2f3ccf0c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fbfaf37123958822a2720a4ea29651be00edab787540b770f73d3e025d286ff8\",\"dweb:/ipfs/QmbzgWeTm8hJVUqWrNAwFjshqbYVyeGpQA8D1huzxQdmw6\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x2c309e7df9e05e6ce15bedfe74f3c61b467fc37e0fae9eab496acf5ea0bbd7ff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7063b5c98711a98018ba4635ac74cee1c1cfa2ea01099498e062699ed9530005\",\"dweb:/ipfs/QmeJ8rGXkcv7RrqLdAW8PCXPAykxVsddfYY6g5NaTwmRFE\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5bce51e11f7d194b79ea59fe00c9e8de9fa2c5530124960f29a24d4c740a3266\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7e66dfde185df46104c11bc89d08fa0760737aa59a2b8546a656473d810a8ea4\",\"dweb:/ipfs/QmXvyqtXPaPss2PD7eqPoSao5Szm2n6UMoiG8TZZDjmChR\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Enumerable.sol\":{\"keccak256\":\"0xd1556954440b31c97a142c6ba07d5cade45f96fafd52091d33a14ebe365aecbf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://26fef835622b46a5ba08b3ef6b46a22e94b5f285d0f0fb66b703bd30217d2c34\",\"dweb:/ipfs/QmZ548qdwfL1qF7aXz3xh1GCdTiST81kGGuKRqVUfYmPZR\"]},\"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0x006dd67219697fe68d7fbfdea512e7c4cb64a43565ed86171d67e844982da6fa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2455248c8ddd9cc6a7af76a13973cddf222072427e7b0e2a7d1aff345145e931\",\"dweb:/ipfs/QmfYjnjRbWqYpuxurqveE6HtzsY1Xx323J428AKQgtBJZm\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x3088eb2868e8d13d89d16670b5f8612c4ab9ff8956272837d8e90106c59c14a0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b81d9ff6559ea5c47fc573e17ece6d9ba5d6839e213e6ebc3b4c5c8fe4199d7f\",\"dweb:/ipfs/QmPCW1bFisUzJkyjroY3yipwfism9RRCigCcK1hbXtVM8n\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xe4455ac1eb7fc497bb7402579e7b4d64d928b846fce7d2b6fde06d366f21c2b3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cc8841b3cd48ad125e2f46323c8bad3aa0e88e399ec62acb9e57efa7e7c8058c\",\"dweb:/ipfs/QmSqE4mXHA2BXW58deDbXE8MTcsL5JSKNDbm23sVQxRLPS\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]},\"src/LCT.sol\":{\"keccak256\":\"0x335acab9450933bbe7caf606959d99ee562fc466b1311c2211c6f77f6fe24e7e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://72c93dc080b014c2720f09e9db402c046a3c946f9f70f66eda8b1f7f0d79c602\",\"dweb:/ipfs/QmR2NhquD8WqNheTrgvDU1QoYwoDMnfqPSHAFw3wVAY9yf\"]},\"src/StringUtils.sol\":{\"keccak256\":\"0x7d83742efcf13831d7e1e6c1275e3d64d0d85fe19edbc15f77f07ff2a0fdcb23\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f2ec899c03a90a34502cac573d4d9f1d8da92d3a137e76cf016755f62647aac4\",\"dweb:/ipfs/QmVHUvi76SPmKGq6zhcpG6Rn9npczV1VnW5MjH1VCrx1AV\"]},\"src/Woolball.sol\":{\"keccak256\":\"0x33f0b0c0dbf500df0c17b6568ac3134a4290ca49769623c6d7245085358bc72f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e3349c43050327c68955fc2e36b2304fcbe479e831f62bb236b910947ff1f514\",\"dweb:/ipfs/QmUYFjHk3jU2Rk1DzskSVGQTwCdSTqk8ZM4VQm53BTnEiW\"]},\"src/interfaces/ERC721EnumerableURIStorage.sol\":{\"keccak256\":\"0xbb12a654a1bc61a66f8162f7466c5c522d8df8e798b9e133df53350b0869ff2b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7876604ef0ff10f63f9a14bd991fec5886e44d6b06830ff390f763eda44e9c6e\",\"dweb:/ipfs/QmfSjwQFuFaME7piR76kDQXC7hNbESourLc4zq9v3QTZbP\"]},\"src/interfaces/ICommanderToken.sol\":{\"keccak256\":\"0xf7d5b9f957ee232129f3e0040411602880005bf94e78fbcefe424b5e8e8e0f38\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://97e7a19b8c6aec6082a84e3aac8bd17522189b160c652eeae57a837fc8e5dd45\",\"dweb:/ipfs/QmdHVUBcagP1jgRLzMwJTuAZer3cCaqyhZJ5rG5dszzYs9\"]},\"src/interfaces/ILockedToken.sol\":{\"keccak256\":\"0x48308f6258d1fbb4b78d8fdffcd8c27b2c15b9fd2600606b824277c6f418627d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bf03ab453309afe77b25c6bdb9d8167c667b6a7d9c7ce85788a9908a93082ef3\",\"dweb:/ipfs/QmeEtF4L2hdfJoitfeVgEN7uTcyqnxGgADG49zdqX9Ctzr\"]},\"src/interfaces/IWoolball.sol\":{\"keccak256\":\"0x64290716ad7c310c93cd5f8fb0fd2412eb0c5230a2cf853a1cd0c21a4226faf9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0e59897aacba58accdcf75619e7ecdae649299e24b78b1d3c4830b9c25a4d568\",\"dweb:/ipfs/QmNUxCkwi2gmvHdcYWdSQjJRJbzG6CZ4ZJ3XcjgTTaQBpt\"]}},\"version\":1}",
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
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "symbol",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "approved",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "ApprovalForAll",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_fromTokenId",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "_toTokenId",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "BatchMetadataUpdate",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "MetadataUpdate",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "address",
              "name": "CTContractAddress",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "CTId",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "NewDependence",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "fromID",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "targetID",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "linkID",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "NewLink",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "address",
              "name": "LockingContract",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "LockingId",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "NewLocking",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "NewName",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "subname",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "subnameID",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "NewSubname",
          "anonymous": false
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
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "address",
              "name": "CTContractAddress",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "CTId",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RemovedDependence",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Unlocked",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "LockedContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "LockedID",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "addLockedToken"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "burn"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "expirationTimestamp",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getApproved",
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
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getName",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getNameType",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "incomingLinkIndex",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "whitelistAddress",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isAddressWhitelisted",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isBurnable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "CTContractAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "CTID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isDependent",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isDependentBurnable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isDependentTransferable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "transferToAddress",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isDependentTransferableToAddress",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isLocked",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isTokenBurnable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isTokenTransferable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "transferToAddress",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isTokenTransferableToAddress",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isTransferable",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "addressToTransferTo",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isTransferableToAddress",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "linkTo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "linksAmountIncoming",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "linksAmountOutgoing",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "LockingContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "LockingID",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "lock"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "fromID",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "targetID",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "newLink",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
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
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "expiration",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "resolverAddress",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "newName",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "subname",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "newSubname",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "outgoingLinkIndex",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
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
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "ownerOf",
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
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "CTContractAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "CTID",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "removeDependence"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "LockedContract",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "LockedID",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "removeLockedToken"
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
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "resolver",
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
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "safeTransferFrom"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setApprovalForAll"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "burnable",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setBurnable"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "CTContractAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "CTID",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setDependence"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "newTimeStamp",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setExpirationDate"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "nameResolver",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setResolver"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "tokenURI",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setTokenURI"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "whitelistAddress",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isWhitelisted",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setTransferWhitelist"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "transferable",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setTransferable"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "subdomainIndex",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "parentID",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "nameID",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "subdomainsAmount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "tokenByIndex",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "tokenOfOwnerByIndex",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom"
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
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenID",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "unlock"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "addLockedToken(uint256,address,uint256)": {
            "details": "addLockedToken notifies a Token that another token (LockedID), with the same owner, is locked to it."
          },
          "approve(address,uint256)": {
            "details": "See {IERC721-approve}."
          },
          "balanceOf(address)": {
            "details": "See {IERC721-balanceOf}."
          },
          "burn(uint256)": {
            "details": "burns tokenID.isTokenBurnable must return 'true'.*"
          },
          "constructor": {
            "details": "Initializes the contract by setting a `name` and a `symbol` to the token collection."
          },
          "getApproved(uint256)": {
            "details": "See {IERC721-getApproved}."
          },
          "isAddressWhitelisted(uint256,address)": {
            "details": "Checks if an address is whitelisted.*"
          },
          "isApprovedForAll(address,address)": {
            "details": "See {IERC721-isApprovedForAll}."
          },
          "isBurnable(uint256)": {
            "details": "Checks the burnable property of tokenID (only of the token itself, not of its dependencies).*"
          },
          "isDependent(uint256,address,uint256)": {
            "details": "Checks if tokenID depends on CTID from CTContractAddress.*"
          },
          "isDependentBurnable(uint256)": {
            "details": "Checks all the tokens that tokenID depends on are burnable (only of the dependencies, not of the token).*"
          },
          "isDependentTransferable(uint256)": {
            "details": "Checks if all the tokens that tokenID depends on are transferable or not (only of the dependencies, not of the token).*"
          },
          "isDependentTransferableToAddress(uint256,address)": {
            "details": "Checks if all the dependences of tokenID can be transferred to addressToTransferTo, TODO: is STID (Solider Token ID?) is a clear name here?*"
          },
          "isLocked(uint256)": {
            "details": "returns (0x0, 0) if token is unlocked or the locking token (contract and id) otherwise"
          },
          "isTokenBurnable(uint256)": {
            "details": "Checks if tokenID can be burned.(meaning, both the token itself and all of its dependncies are transferable).*"
          },
          "isTokenTransferable(uint256)": {
            "details": "Checks if tokenID can be transferred (meaning, both the token itself and all of its dependncies are transferable).*"
          },
          "isTokenTransferableToAddress(uint256,address)": {
            "details": "Checks if tokenID can be transferred to addressToTransferTo.*"
          },
          "isTransferable(uint256)": {
            "details": "Checks the transferable property of tokenID (only of the token itself, not of its dependencies).*"
          },
          "isTransferableToAddress(uint256,address)": {
            "details": "Checks if tokenID can be transferred to addressToTransferTo, without taking its dependence into consideration.*"
          },
          "lock(uint256,address,uint256)": {
            "details": "Locks tokenID tokenID to token LockingID from LockingContract. Both tokens must have the same owner.With such a lock in place, tokenID transfer and burn functions can't be called byits owner as long as the locking is in place.If LckingID is transferred or burned, it also transfers or burns tokenID.If tokenID is nontransferable or unburnable, then a call to the transfer orburn function of the LockingID unlocks the tokenID."
          },
          "name()": {
            "details": "See {IERC721Metadata-name}."
          },
          "owner()": {
            "details": "Returns the address of the current owner."
          },
          "ownerOf(uint256)": {
            "details": "See {IERC721-ownerOf}."
          },
          "removeDependence(uint256,address,uint256)": {
            "details": "Removes from tokenID the dependency on CTID from contract CTContractAddress."
          },
          "removeLockedToken(uint256,address,uint256)": {
            "details": "removeLockedToken removes a token that was locked to the tokenID."
          },
          "renounceOwnership()": {
            "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
          },
          "resolver(uint256)": {
            "details": "Returns the address of the resolver for the specified name.",
            "params": {
              "nameID": "The specified name."
            },
            "returns": {
              "_0": "address of the resolver."
            }
          },
          "safeTransferFrom(address,address,uint256)": {
            "details": "See {IERC721-safeTransferFrom}."
          },
          "safeTransferFrom(address,address,uint256,bytes)": {
            "details": "we reimplement this function to add the isApproveOwnerOrLockingContract modifierSee {IERC721-safeTransferFrom}."
          },
          "setApprovalForAll(address,bool)": {
            "details": "See {IERC721-setApprovalForAll}."
          },
          "setBurnable(uint256,bool)": {
            "details": "Sets the burnable status of tokenID.*"
          },
          "setDependence(uint256,address,uint256)": {
            "details": "Adds to tokenID dependency on CTID from contract CTContractAddress.A token can be transfered or burned only if all the tokens it depends on are transferable or burnable, correspondingly.The caller must be the owner, opertaor or approved to use tokenID."
          },
          "setResolver(uint256,address)": {
            "details": "Sets the resolver address for the specified name.",
            "params": {
              "nameID": "The name to update.",
              "nameResolver": "The address of the resolver."
            }
          },
          "setTokenURI(uint256,string)": {
            "details": "sets the URI of tokenID.isTokenBurnable must return 'true'.*"
          },
          "setTransferWhitelist(uint256,address,bool)": {
            "details": "Adds or removes an address from the whitelist of tokenID.tokenID can be transferred to whitelisted addresses even when its set to be nontransferable.*"
          },
          "setTransferable(uint256,bool)": {
            "details": "Sets the transferable property of tokenID.*"
          },
          "supportsInterface(bytes4)": {
            "details": "See {IERC165-supportsInterface}."
          },
          "symbol()": {
            "details": "See {IERC721Metadata-symbol}."
          },
          "tokenByIndex(uint256)": {
            "details": "See {IERC721Enumerable-tokenByIndex}."
          },
          "tokenOfOwnerByIndex(address,uint256)": {
            "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
          },
          "tokenURI(uint256)": {
            "details": "See {IERC721Metadata-tokenURI}."
          },
          "totalSupply()": {
            "details": "See {IERC721Enumerable-totalSupply}."
          },
          "transferFrom(address,address,uint256)": {
            "details": "we reimplement this function to add the isApproveOwnerOrLockingContract modifierSee {IERC721-transferFrom}."
          },
          "transferOwnership(address)": {
            "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
          },
          "unlock(uint256)": {
            "details": "unlocks a a token.This function must be called from the contract that locked tokenID."
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
        ":ds-test/=lib/forge-std/lib/ds-test/src/",
        ":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        ":forge-std/=lib/forge-std/src/",
        ":openzeppelin-contracts/=lib/openzeppelin-contracts/",
        ":openzeppelin/=lib/openzeppelin-contracts/contracts/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "src/Woolball.sol": "Woolball"
      },
      "libraries": {
        "src/StringUtils.sol:StringUtils": "0x5fbdb2315678afecb367f032d93f642f64180aa3"
      }
    },
    "sources": {
      "lib/forge-std/src/console.sol": {
        "keccak256": "0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba",
        "urls": [
          "bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70",
          "dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
        "keccak256": "0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218",
        "urls": [
          "bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32",
          "dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol": {
        "keccak256": "0xd04b0f06e0666f29cf7cccc82894de541e19bb30a765b107b1e40bb7fe5f7d7a",
        "urls": [
          "bzz-raw://7b652499d098e88d8d878374616bb58434301061cae2253298b3f374044e0ddb",
          "dweb:/ipfs/QmbhAzctqo5jrSKU6idHdVyqfmzCcDbNUPvmx4GiXxfA6q"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/interfaces/IERC4906.sol": {
        "keccak256": "0x2a9dadb806be80dd451821f1f1190eb9aa6f6edae85b185db29d60767cc0c5f4",
        "urls": [
          "bzz-raw://5c25cac8dbe5bd96320053d23c3dacdb875e629d7c53ac00892eb7aa8500bde6",
          "dweb:/ipfs/Qmaf2oqbxxdJA9DphAoH4UCb8aXEAVM8fnu6qMxHJ5ta4A"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/interfaces/IERC721.sol": {
        "keccak256": "0xaf297d12d8d4a57fe01a70f0ef38908f208e3faedc577056d0b728fa2f3ccf0c",
        "urls": [
          "bzz-raw://fbfaf37123958822a2720a4ea29651be00edab787540b770f73d3e025d286ff8",
          "dweb:/ipfs/QmbzgWeTm8hJVUqWrNAwFjshqbYVyeGpQA8D1huzxQdmw6"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol": {
        "keccak256": "0x2c309e7df9e05e6ce15bedfe74f3c61b467fc37e0fae9eab496acf5ea0bbd7ff",
        "urls": [
          "bzz-raw://7063b5c98711a98018ba4635ac74cee1c1cfa2ea01099498e062699ed9530005",
          "dweb:/ipfs/QmeJ8rGXkcv7RrqLdAW8PCXPAykxVsddfYY6g5NaTwmRFE"
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
      "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol": {
        "keccak256": "0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da",
        "urls": [
          "bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708",
          "dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Enumerable.sol": {
        "keccak256": "0xd1556954440b31c97a142c6ba07d5cade45f96fafd52091d33a14ebe365aecbf",
        "urls": [
          "bzz-raw://26fef835622b46a5ba08b3ef6b46a22e94b5f285d0f0fb66b703bd30217d2c34",
          "dweb:/ipfs/QmZ548qdwfL1qF7aXz3xh1GCdTiST81kGGuKRqVUfYmPZR"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol": {
        "keccak256": "0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9",
        "urls": [
          "bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146",
          "dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0x006dd67219697fe68d7fbfdea512e7c4cb64a43565ed86171d67e844982da6fa",
        "urls": [
          "bzz-raw://2455248c8ddd9cc6a7af76a13973cddf222072427e7b0e2a7d1aff345145e931",
          "dweb:/ipfs/QmfYjnjRbWqYpuxurqveE6HtzsY1Xx323J428AKQgtBJZm"
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
      "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
        "keccak256": "0x3088eb2868e8d13d89d16670b5f8612c4ab9ff8956272837d8e90106c59c14a0",
        "urls": [
          "bzz-raw://b81d9ff6559ea5c47fc573e17ece6d9ba5d6839e213e6ebc3b4c5c8fe4199d7f",
          "dweb:/ipfs/QmPCW1bFisUzJkyjroY3yipwfism9RRCigCcK1hbXtVM8n"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
        "keccak256": "0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b",
        "urls": [
          "bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d",
          "dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43"
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
      "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
        "keccak256": "0xe4455ac1eb7fc497bb7402579e7b4d64d928b846fce7d2b6fde06d366f21c2b3",
        "urls": [
          "bzz-raw://cc8841b3cd48ad125e2f46323c8bad3aa0e88e399ec62acb9e57efa7e7c8058c",
          "dweb:/ipfs/QmSqE4mXHA2BXW58deDbXE8MTcsL5JSKNDbm23sVQxRLPS"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
        "keccak256": "0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc",
        "urls": [
          "bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7",
          "dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6"
        ],
        "license": "MIT"
      },
      "src/LCT.sol": {
        "keccak256": "0x335acab9450933bbe7caf606959d99ee562fc466b1311c2211c6f77f6fe24e7e",
        "urls": [
          "bzz-raw://72c93dc080b014c2720f09e9db402c046a3c946f9f70f66eda8b1f7f0d79c602",
          "dweb:/ipfs/QmR2NhquD8WqNheTrgvDU1QoYwoDMnfqPSHAFw3wVAY9yf"
        ],
        "license": "MIT"
      },
      "src/StringUtils.sol": {
        "keccak256": "0x7d83742efcf13831d7e1e6c1275e3d64d0d85fe19edbc15f77f07ff2a0fdcb23",
        "urls": [
          "bzz-raw://f2ec899c03a90a34502cac573d4d9f1d8da92d3a137e76cf016755f62647aac4",
          "dweb:/ipfs/QmVHUvi76SPmKGq6zhcpG6Rn9npczV1VnW5MjH1VCrx1AV"
        ],
        "license": "MIT"
      },
      "src/Woolball.sol": {
        "keccak256": "0x33f0b0c0dbf500df0c17b6568ac3134a4290ca49769623c6d7245085358bc72f",
        "urls": [
          "bzz-raw://e3349c43050327c68955fc2e36b2304fcbe479e831f62bb236b910947ff1f514",
          "dweb:/ipfs/QmUYFjHk3jU2Rk1DzskSVGQTwCdSTqk8ZM4VQm53BTnEiW"
        ],
        "license": "MIT"
      },
      "src/interfaces/ERC721EnumerableURIStorage.sol": {
        "keccak256": "0xbb12a654a1bc61a66f8162f7466c5c522d8df8e798b9e133df53350b0869ff2b",
        "urls": [
          "bzz-raw://7876604ef0ff10f63f9a14bd991fec5886e44d6b06830ff390f763eda44e9c6e",
          "dweb:/ipfs/QmfSjwQFuFaME7piR76kDQXC7hNbESourLc4zq9v3QTZbP"
        ],
        "license": "MIT"
      },
      "src/interfaces/ICommanderToken.sol": {
        "keccak256": "0xf7d5b9f957ee232129f3e0040411602880005bf94e78fbcefe424b5e8e8e0f38",
        "urls": [
          "bzz-raw://97e7a19b8c6aec6082a84e3aac8bd17522189b160c652eeae57a837fc8e5dd45",
          "dweb:/ipfs/QmdHVUBcagP1jgRLzMwJTuAZer3cCaqyhZJ5rG5dszzYs9"
        ],
        "license": "MIT"
      },
      "src/interfaces/ILockedToken.sol": {
        "keccak256": "0x48308f6258d1fbb4b78d8fdffcd8c27b2c15b9fd2600606b824277c6f418627d",
        "urls": [
          "bzz-raw://bf03ab453309afe77b25c6bdb9d8167c667b6a7d9c7ce85788a9908a93082ef3",
          "dweb:/ipfs/QmeEtF4L2hdfJoitfeVgEN7uTcyqnxGgADG49zdqX9Ctzr"
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
    "absolutePath": "src/Woolball.sol",
    "id": 34759,
    "exportedSymbols": {
      "Address": [
        30956
      ],
      "Context": [
        30978
      ],
      "ERC165": [
        31231
      ],
      "ERC721": [
        30434
      ],
      "ERC721EnumerableURIStorage": [
        35237
      ],
      "ICommanderToken": [
        35414
      ],
      "IERC165": [
        31243
      ],
      "IERC4906": [
        29504
      ],
      "IERC721": [
        30550
      ],
      "IERC721Enumerable": [
        30599
      ],
      "IERC721Metadata": [
        30626
      ],
      "IERC721Receiver": [
        30568
      ],
      "ILockedToken": [
        35487
      ],
      "IWoolball": [
        35534
      ],
      "LCT": [
        33723
      ],
      "Math": [
        32109
      ],
      "Ownable": [
        29479
      ],
      "SignedMath": [
        32214
      ],
      "StringUtils": [
        33913
      ],
      "Strings": [
        31207
      ],
      "Woolball": [
        34758
      ],
      "console": [
        21078
      ]
    },
    "nodeType": "SourceUnit",
    "src": "59:9748:38",
    "nodes": [
      {
        "id": 33915,
        "nodeType": "PragmaDirective",
        "src": "59:25:38",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".17"
        ]
      },
      {
        "id": 33916,
        "nodeType": "ImportDirective",
        "src": "86:19:38",
        "nodes": [],
        "absolutePath": "src/LCT.sol",
        "file": "./LCT.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 34759,
        "sourceUnit": 33724,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 33917,
        "nodeType": "ImportDirective",
        "src": "106:27:38",
        "nodes": [],
        "absolutePath": "src/StringUtils.sol",
        "file": "./StringUtils.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 34759,
        "sourceUnit": 33914,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 33918,
        "nodeType": "ImportDirective",
        "src": "134:36:38",
        "nodes": [],
        "absolutePath": "src/interfaces/IWoolball.sol",
        "file": "./interfaces/IWoolball.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 34759,
        "sourceUnit": 35535,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 33919,
        "nodeType": "ImportDirective",
        "src": "172:61:38",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/access/Ownable.sol",
        "file": "openzeppelin-contracts/contracts/access/Ownable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 34759,
        "sourceUnit": 29480,
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 34758,
        "nodeType": "ContractDefinition",
        "src": "313:9493:38",
        "nodes": [
          {
            "id": 33932,
            "nodeType": "EnumDefinition",
            "src": "518:48:38",
            "nodes": [],
            "canonicalName": "Woolball.NameType",
            "members": [
              {
                "id": 33927,
                "name": "NONE",
                "nameLocation": "533:4:38",
                "nodeType": "EnumValue",
                "src": "533:4:38"
              },
              {
                "id": 33928,
                "name": "BASE",
                "nameLocation": "539:4:38",
                "nodeType": "EnumValue",
                "src": "539:4:38"
              },
              {
                "id": 33929,
                "name": "MAIN",
                "nameLocation": "545:4:38",
                "nodeType": "EnumValue",
                "src": "545:4:38"
              },
              {
                "id": 33930,
                "name": "SUBNAME",
                "nameLocation": "551:7:38",
                "nodeType": "EnumValue",
                "src": "551:7:38"
              },
              {
                "id": 33931,
                "name": "LINK",
                "nameLocation": "560:4:38",
                "nodeType": "EnumValue",
                "src": "560:4:38"
              }
            ],
            "name": "NameType",
            "nameLocation": "523:8:38"
          },
          {
            "id": 33960,
            "nodeType": "StructDefinition",
            "src": "572:395:38",
            "nodes": [],
            "canonicalName": "Woolball.Name",
            "members": [
              {
                "constant": false,
                "id": 33934,
                "mutability": "mutable",
                "name": "name",
                "nameLocation": "606:4:38",
                "nodeType": "VariableDeclaration",
                "scope": 33960,
                "src": "594:16:38",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 33933,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "594:6:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 33937,
                "mutability": "mutable",
                "name": "nameType",
                "nameLocation": "632:8:38",
                "nodeType": "VariableDeclaration",
                "scope": 33960,
                "src": "620:20:38",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_enum$_NameType_$33932",
                  "typeString": "enum Woolball.NameType"
                },
                "typeName": {
                  "id": 33936,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 33935,
                    "name": "NameType",
                    "nameLocations": [
                      "620:8:38"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 33932,
                    "src": "620:8:38"
                  },
                  "referencedDeclaration": 33932,
                  "src": "620:8:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_NameType_$33932",
                    "typeString": "enum Woolball.NameType"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 33939,
                "mutability": "mutable",
                "name": "expirationTimestamp",
                "nameLocation": "662:19:38",
                "nodeType": "VariableDeclaration",
                "scope": 33960,
                "src": "650:31:38",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 33938,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "650:7:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 33941,
                "mutability": "mutable",
                "name": "creatorWallet",
                "nameLocation": "703:13:38",
                "nodeType": "VariableDeclaration",
                "scope": 33960,
                "src": "691:25:38",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 33940,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "691:7:38",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 33943,
                "mutability": "mutable",
                "name": "creatorNameID",
                "nameLocation": "738:13:38",
                "nodeType": "VariableDeclaration",
                "scope": 33960,
                "src": "726:25:38",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 33942,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "726:7:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 33945,
                "mutability": "mutable",
                "name": "resolver",
                "nameLocation": "773:8:38",
                "nodeType": "VariableDeclaration",
                "scope": 33960,
                "src": "761:20:38",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 33944,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "761:7:38",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 33947,
                "mutability": "mutable",
                "name": "noNames",
                "nameLocation": "803:7:38",
                "nodeType": "VariableDeclaration",
                "scope": 33960,
                "src": "791:19:38",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 33946,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "791:4:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 33949,
                "mutability": "mutable",
                "name": "noSubnames",
                "nameLocation": "832:10:38",
                "nodeType": "VariableDeclaration",
                "scope": 33960,
                "src": "820:22:38",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 33948,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "820:4:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 33951,
                "mutability": "mutable",
                "name": "noLinks",
                "nameLocation": "864:7:38",
                "nodeType": "VariableDeclaration",
                "scope": 33960,
                "src": "852:19:38",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 33950,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "852:4:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 33953,
                "mutability": "mutable",
                "name": "linkToID",
                "nameLocation": "893:8:38",
                "nodeType": "VariableDeclaration",
                "scope": 33960,
                "src": "881:20:38",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 33952,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "881:7:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 33956,
                "mutability": "mutable",
                "name": "links",
                "nameLocation": "923:5:38",
                "nodeType": "VariableDeclaration",
                "scope": 33960,
                "src": "911:17:38",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Links_$33967_storage_ptr",
                  "typeString": "struct Woolball.Links"
                },
                "typeName": {
                  "id": 33955,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 33954,
                    "name": "Links",
                    "nameLocations": [
                      "911:5:38"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 33967,
                    "src": "911:5:38"
                  },
                  "referencedDeclaration": 33967,
                  "src": "911:5:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Links_$33967_storage_ptr",
                    "typeString": "struct Woolball.Links"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 33959,
                "mutability": "mutable",
                "name": "subdomains",
                "nameLocation": "950:10:38",
                "nodeType": "VariableDeclaration",
                "scope": 33960,
                "src": "938:22:38",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 33957,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "938:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 33958,
                  "nodeType": "ArrayTypeName",
                  "src": "938:9:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                    "typeString": "uint256[]"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Name",
            "nameLocation": "579:4:38",
            "scope": 34758,
            "visibility": "public"
          },
          {
            "id": 33967,
            "nodeType": "StructDefinition",
            "src": "1033:153:38",
            "nodes": [],
            "canonicalName": "Woolball.Links",
            "members": [
              {
                "constant": false,
                "id": 33963,
                "mutability": "mutable",
                "name": "outgoingLinks",
                "nameLocation": "1131:13:38",
                "nodeType": "VariableDeclaration",
                "scope": 33967,
                "src": "1119:25:38",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 33961,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1119:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 33962,
                  "nodeType": "ArrayTypeName",
                  "src": "1119:9:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                    "typeString": "uint256[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 33966,
                "mutability": "mutable",
                "name": "incomingLinks",
                "nameLocation": "1166:13:38",
                "nodeType": "VariableDeclaration",
                "scope": 33967,
                "src": "1154:25:38",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 33964,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1154:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 33965,
                  "nodeType": "ArrayTypeName",
                  "src": "1154:9:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                    "typeString": "uint256[]"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Links",
            "nameLocation": "1040:5:38",
            "scope": 34758,
            "visibility": "public"
          },
          {
            "id": 33972,
            "nodeType": "VariableDeclaration",
            "src": "1227:39:38",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_names",
            "nameLocation": "1260:6:38",
            "scope": 34758,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
              "typeString": "mapping(uint256 => struct Woolball.Name)"
            },
            "typeName": {
              "id": 33971,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 33968,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1235:7:38",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1227:24:38",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                "typeString": "mapping(uint256 => struct Woolball.Name)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 33970,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 33969,
                  "name": "Name",
                  "nameLocations": [
                    "1246:4:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 33960,
                  "src": "1246:4:38"
                },
                "referencedDeclaration": 33960,
                "src": "1246:4:38",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Name_$33960_storage_ptr",
                  "typeString": "struct Woolball.Name"
                }
              }
            },
            "visibility": "private"
          },
          {
            "id": 33988,
            "nodeType": "ModifierDefinition",
            "src": "1273:145:38",
            "nodes": [],
            "body": {
              "id": 33987,
              "nodeType": "Block",
              "src": "1312:106:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 33982,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 33978,
                              "name": "nameID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33974,
                              "src": "1338:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 33977,
                            "name": "ownerOf",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29653,
                            "src": "1330:7:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view returns (address)"
                            }
                          },
                          "id": 33979,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1330:15:38",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "id": 33980,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1349:3:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 33981,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1353:6:38",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1349:10:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1330:29:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "53656e646572206973206e6f7420746865206f776e6572206f6620746865206e616d652e",
                        "id": 33983,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1361:38:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_82fbe1aba901bc0d5ca1bcb45c158a9639b26d7dd8e2c68968682bb810bf9033",
                          "typeString": "literal_string \"Sender is not the owner of the name.\""
                        },
                        "value": "Sender is not the owner of the name."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_82fbe1aba901bc0d5ca1bcb45c158a9639b26d7dd8e2c68968682bb810bf9033",
                          "typeString": "literal_string \"Sender is not the owner of the name.\""
                        }
                      ],
                      "id": 33976,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1322:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 33984,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1322:78:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33985,
                  "nodeType": "ExpressionStatement",
                  "src": "1322:78:38"
                },
                {
                  "id": 33986,
                  "nodeType": "PlaceholderStatement",
                  "src": "1410:1:38"
                }
              ]
            },
            "name": "onlyNameOwner",
            "nameLocation": "1282:13:38",
            "parameters": {
              "id": 33975,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33974,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "1304:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 33988,
                  "src": "1296:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33973,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1296:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1295:16:38"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 34005,
            "nodeType": "ModifierDefinition",
            "src": "1424:161:38",
            "nodes": [],
            "body": {
              "id": 34004,
              "nodeType": "Block",
              "src": "1462:123:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 33999,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 33993,
                              "name": "_names",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33972,
                              "src": "1480:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                              }
                            },
                            "id": 33995,
                            "indexExpression": {
                              "id": 33994,
                              "name": "nameID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33990,
                              "src": "1487:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1480:14:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Name_$33960_storage",
                              "typeString": "struct Woolball.Name storage ref"
                            }
                          },
                          "id": 33996,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1495:19:38",
                          "memberName": "expirationTimestamp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33939,
                          "src": "1480:34:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "expression": {
                            "id": 33997,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "1517:5:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 33998,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1523:9:38",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "1517:15:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1480:52:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "576f6f6c62616c6c3a206e616d65494420646f65736e2774206578697374",
                        "id": 34000,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1534:32:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6dd892af43a6ea8349f6b1088dcd3a5191b3a3031e61d86a03c1e3d7cc8e98bb",
                          "typeString": "literal_string \"Woolball: nameID doesn't exist\""
                        },
                        "value": "Woolball: nameID doesn't exist"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_6dd892af43a6ea8349f6b1088dcd3a5191b3a3031e61d86a03c1e3d7cc8e98bb",
                          "typeString": "literal_string \"Woolball: nameID doesn't exist\""
                        }
                      ],
                      "id": 33992,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1472:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 34001,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1472:95:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34002,
                  "nodeType": "ExpressionStatement",
                  "src": "1472:95:38"
                },
                {
                  "id": 34003,
                  "nodeType": "PlaceholderStatement",
                  "src": "1577:1:38"
                }
              ]
            },
            "name": "nameIDExists",
            "nameLocation": "1433:12:38",
            "parameters": {
              "id": 33991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33990,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "1454:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34005,
                  "src": "1446:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33989,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1446:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1445:16:38"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 34041,
            "nodeType": "ModifierDefinition",
            "src": "1591:470:38",
            "nodes": [],
            "body": {
              "id": 34040,
              "nodeType": "Block",
              "src": "1632:429:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 34015,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1720:38:38",
                        "subExpression": {
                          "arguments": [
                            {
                              "id": 34012,
                              "name": "name",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34007,
                              "src": "1748:4:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_calldata_ptr",
                                "typeString": "string calldata"
                              }
                            },
                            {
                              "hexValue": "2e",
                              "id": 34013,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1754:3:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                "typeString": "literal_string \".\""
                              },
                              "value": "."
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_calldata_ptr",
                                "typeString": "string calldata"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                "typeString": "literal_string \".\""
                              }
                            ],
                            "expression": {
                              "id": 34010,
                              "name": "StringUtils",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33913,
                              "src": "1721:11:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_StringUtils_$33913_$",
                                "typeString": "type(library StringUtils)"
                              }
                            },
                            "id": 34011,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1733:14:38",
                            "memberName": "isCharInString",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 33912,
                            "src": "1721:26:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_delegatecall_pure$_t_string_memory_ptr_$_t_bytes1_$returns$_t_bool_$",
                              "typeString": "function (string memory,bytes1) pure returns (bool)"
                            }
                          },
                          "id": 34014,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1721:37:38",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "576f6f6c62616c6c3a206e616d652063616e2774206861766520272e2720636861726163746572732077697468696e20696e",
                        "id": 34016,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1760:52:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_419162cbd10eff75e638189ec187efcdedbf522c23e97b17af23f4a6b36767b5",
                          "typeString": "literal_string \"Woolball: name can't have '.' characters within in\""
                        },
                        "value": "Woolball: name can't have '.' characters within in"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_419162cbd10eff75e638189ec187efcdedbf522c23e97b17af23f4a6b36767b5",
                          "typeString": "literal_string \"Woolball: name can't have '.' characters within in\""
                        }
                      ],
                      "id": 34009,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1711:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 34017,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1711:104:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34018,
                  "nodeType": "ExpressionStatement",
                  "src": "1711:104:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 34025,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1834:38:38",
                        "subExpression": {
                          "arguments": [
                            {
                              "id": 34022,
                              "name": "name",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34007,
                              "src": "1862:4:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_calldata_ptr",
                                "typeString": "string calldata"
                              }
                            },
                            {
                              "hexValue": "23",
                              "id": 34023,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1868:3:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_ace738c68088218d015fbdce138f062893d86818ac98932f7ce2907c5976fbde",
                                "typeString": "literal_string \"#\""
                              },
                              "value": "#"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_calldata_ptr",
                                "typeString": "string calldata"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_ace738c68088218d015fbdce138f062893d86818ac98932f7ce2907c5976fbde",
                                "typeString": "literal_string \"#\""
                              }
                            ],
                            "expression": {
                              "id": 34020,
                              "name": "StringUtils",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33913,
                              "src": "1835:11:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_StringUtils_$33913_$",
                                "typeString": "type(library StringUtils)"
                              }
                            },
                            "id": 34021,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1847:14:38",
                            "memberName": "isCharInString",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 33912,
                            "src": "1835:26:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_delegatecall_pure$_t_string_memory_ptr_$_t_bytes1_$returns$_t_bool_$",
                              "typeString": "function (string memory,bytes1) pure returns (bool)"
                            }
                          },
                          "id": 34024,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1835:37:38",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "576f6f6c62616c6c3a206e616d652063616e277420686176652027232720636861726163746572732077697468696e20696e",
                        "id": 34026,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1874:52:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5bcabd6848f344bf577516903f62558ccc510a9b0731562f81dee6ee9d19634d",
                          "typeString": "literal_string \"Woolball: name can't have '#' characters within in\""
                        },
                        "value": "Woolball: name can't have '#' characters within in"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5bcabd6848f344bf577516903f62558ccc510a9b0731562f81dee6ee9d19634d",
                          "typeString": "literal_string \"Woolball: name can't have '#' characters within in\""
                        }
                      ],
                      "id": 34019,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1825:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 34027,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1825:104:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34028,
                  "nodeType": "ExpressionStatement",
                  "src": "1825:104:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 34035,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "1948:38:38",
                        "subExpression": {
                          "arguments": [
                            {
                              "id": 34032,
                              "name": "name",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34007,
                              "src": "1976:4:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_calldata_ptr",
                                "typeString": "string calldata"
                              }
                            },
                            {
                              "hexValue": "3a",
                              "id": 34033,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1982:3:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_96d280011b274d9410ea6c6fc28e2bb076b01d2fac329c49c4b29a719ec4650c",
                                "typeString": "literal_string \":\""
                              },
                              "value": ":"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_calldata_ptr",
                                "typeString": "string calldata"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_96d280011b274d9410ea6c6fc28e2bb076b01d2fac329c49c4b29a719ec4650c",
                                "typeString": "literal_string \":\""
                              }
                            ],
                            "expression": {
                              "id": 34030,
                              "name": "StringUtils",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33913,
                              "src": "1949:11:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_StringUtils_$33913_$",
                                "typeString": "type(library StringUtils)"
                              }
                            },
                            "id": 34031,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1961:14:38",
                            "memberName": "isCharInString",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 33912,
                            "src": "1949:26:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_delegatecall_pure$_t_string_memory_ptr_$_t_bytes1_$returns$_t_bool_$",
                              "typeString": "function (string memory,bytes1) pure returns (bool)"
                            }
                          },
                          "id": 34034,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1949:37:38",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "576f6f6c62616c6c3a206e616d652063616e2774206861766520273a2720636861726163746572732077697468696e20696e",
                        "id": 34036,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1988:52:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_49ed81a8d447653c38371f2e297ac77a7132d825192646b7897dff1a95899ebd",
                          "typeString": "literal_string \"Woolball: name can't have ':' characters within in\""
                        },
                        "value": "Woolball: name can't have ':' characters within in"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_49ed81a8d447653c38371f2e297ac77a7132d825192646b7897dff1a95899ebd",
                          "typeString": "literal_string \"Woolball: name can't have ':' characters within in\""
                        }
                      ],
                      "id": 34029,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1939:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 34037,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1939:104:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34038,
                  "nodeType": "ExpressionStatement",
                  "src": "1939:104:38"
                },
                {
                  "id": 34039,
                  "nodeType": "PlaceholderStatement",
                  "src": "2053:1:38"
                }
              ]
            },
            "name": "validName",
            "nameLocation": "1600:9:38",
            "parameters": {
              "id": 34008,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34007,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "1626:4:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34041,
                  "src": "1610:20:38",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34006,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1610:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1609:22:38"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 34058,
            "nodeType": "ModifierDefinition",
            "src": "2067:146:38",
            "nodes": [],
            "body": {
              "id": 34057,
              "nodeType": "Block",
              "src": "2102:111:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_enum$_NameType_$33932",
                          "typeString": "enum Woolball.NameType"
                        },
                        "id": 34052,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 34046,
                              "name": "_names",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33972,
                              "src": "2120:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                              }
                            },
                            "id": 34048,
                            "indexExpression": {
                              "id": 34047,
                              "name": "nameID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34043,
                              "src": "2127:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2120:14:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Name_$33960_storage",
                              "typeString": "struct Woolball.Name storage ref"
                            }
                          },
                          "id": 34049,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2135:8:38",
                          "memberName": "nameType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33937,
                          "src": "2120:23:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_NameType_$33932",
                            "typeString": "enum Woolball.NameType"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "id": 34050,
                            "name": "NameType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33932,
                            "src": "2147:8:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_NameType_$33932_$",
                              "typeString": "type(enum Woolball.NameType)"
                            }
                          },
                          "id": 34051,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2156:7:38",
                          "memberName": "SUBNAME",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33930,
                          "src": "2147:16:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_NameType_$33932",
                            "typeString": "enum Woolball.NameType"
                          }
                        },
                        "src": "2120:43:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6e616d654944206973206e6f74206f662061207375626e616d652e",
                        "id": 34053,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2165:29:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_90ffb927bb66ed8d103465780b046eb9bd099826e14d4e4b01e53f1beff4b584",
                          "typeString": "literal_string \"nameID is not of a subname.\""
                        },
                        "value": "nameID is not of a subname."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_90ffb927bb66ed8d103465780b046eb9bd099826e14d4e4b01e53f1beff4b584",
                          "typeString": "literal_string \"nameID is not of a subname.\""
                        }
                      ],
                      "id": 34045,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2112:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 34054,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2112:83:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34055,
                  "nodeType": "ExpressionStatement",
                  "src": "2112:83:38"
                },
                {
                  "id": 34056,
                  "nodeType": "PlaceholderStatement",
                  "src": "2205:1:38"
                }
              ]
            },
            "name": "isSubname",
            "nameLocation": "2076:9:38",
            "parameters": {
              "id": 34044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34043,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "2094:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34058,
                  "src": "2086:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34042,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2086:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2085:16:38"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 34075,
            "nodeType": "ModifierDefinition",
            "src": "2219:137:38",
            "nodes": [],
            "body": {
              "id": 34074,
              "nodeType": "Block",
              "src": "2251:105:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_enum$_NameType_$33932",
                          "typeString": "enum Woolball.NameType"
                        },
                        "id": 34069,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 34063,
                              "name": "_names",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33972,
                              "src": "2269:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                              }
                            },
                            "id": 34065,
                            "indexExpression": {
                              "id": 34064,
                              "name": "nameID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34060,
                              "src": "2276:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2269:14:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Name_$33960_storage",
                              "typeString": "struct Woolball.Name storage ref"
                            }
                          },
                          "id": 34066,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2284:8:38",
                          "memberName": "nameType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33937,
                          "src": "2269:23:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_NameType_$33932",
                            "typeString": "enum Woolball.NameType"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "id": 34067,
                            "name": "NameType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33932,
                            "src": "2296:8:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_NameType_$33932_$",
                              "typeString": "type(enum Woolball.NameType)"
                            }
                          },
                          "id": 34068,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "2305:4:38",
                          "memberName": "LINK",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33931,
                          "src": "2296:13:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_NameType_$33932",
                            "typeString": "enum Woolball.NameType"
                          }
                        },
                        "src": "2269:40:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6e616d654944206973206e6f74206f662061206c696e6b2e",
                        "id": 34070,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2311:26:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_53b62e80c0c15cb4e93b9533e73ec8be2072dc0999bd3853ee6da8b21ea4977b",
                          "typeString": "literal_string \"nameID is not of a link.\""
                        },
                        "value": "nameID is not of a link."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_53b62e80c0c15cb4e93b9533e73ec8be2072dc0999bd3853ee6da8b21ea4977b",
                          "typeString": "literal_string \"nameID is not of a link.\""
                        }
                      ],
                      "id": 34062,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2261:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 34071,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2261:77:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34072,
                  "nodeType": "ExpressionStatement",
                  "src": "2261:77:38"
                },
                {
                  "id": 34073,
                  "nodeType": "PlaceholderStatement",
                  "src": "2348:1:38"
                }
              ]
            },
            "name": "isLink",
            "nameLocation": "2228:6:38",
            "parameters": {
              "id": 34061,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34060,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "2243:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34075,
                  "src": "2235:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34059,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2235:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2234:16:38"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 34088,
            "nodeType": "FunctionDefinition",
            "src": "2539:96:38",
            "nodes": [],
            "body": {
              "id": 34087,
              "nodeType": "Block",
              "src": "2633:2:38",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 34076,
              "nodeType": "StructuredDocumentation",
              "src": "2426:108:38",
              "text": " @dev Initializes the contract by setting a `name` and a `symbol` to the token collection."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 34083,
                    "name": "name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34078,
                    "src": "2619:4:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "id": 34084,
                    "name": "symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34080,
                    "src": "2625:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 34085,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 34082,
                  "name": "LCT",
                  "nameLocations": [
                    "2615:3:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 33723,
                  "src": "2615:3:38"
                },
                "nodeType": "ModifierInvocation",
                "src": "2615:17:38"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 34081,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34078,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2574:4:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34088,
                  "src": "2560:18:38",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34077,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2560:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34080,
                  "mutability": "mutable",
                  "name": "symbol",
                  "nameLocation": "2602:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34088,
                  "src": "2588:20:38",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34079,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2588:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2550:64:38"
            },
            "returnParameters": {
              "id": 34086,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2633:0:38"
            },
            "scope": 34758,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 34187,
            "nodeType": "FunctionDefinition",
            "src": "2675:912:38",
            "nodes": [],
            "body": {
              "id": 34186,
              "nodeType": "Block",
              "src": "2837:750:38",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    34107
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34107,
                      "mutability": "mutable",
                      "name": "nameID",
                      "nameLocation": "2855:6:38",
                      "nodeType": "VariableDeclaration",
                      "scope": 34186,
                      "src": "2847:14:38",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34106,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2847:7:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 34117,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 34113,
                                "name": "name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34090,
                                "src": "2896:4:38",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              ],
                              "expression": {
                                "id": 34111,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "2879:3:38",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 34112,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "2883:12:38",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "2879:16:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 34114,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2879:22:38",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 34110,
                          "name": "sha256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -22,
                          "src": "2872:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 34115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2872:30:38",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 34109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2864:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 34108,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2864:7:38",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 34116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2864:39:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2847:56:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 34125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 34119,
                              "name": "_names",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33972,
                              "src": "2970:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                              }
                            },
                            "id": 34121,
                            "indexExpression": {
                              "id": 34120,
                              "name": "nameID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34107,
                              "src": "2977:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2970:14:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Name_$33960_storage",
                              "typeString": "struct Woolball.Name storage ref"
                            }
                          },
                          "id": 34122,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2985:19:38",
                          "memberName": "expirationTimestamp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33939,
                          "src": "2970:34:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "expression": {
                            "id": 34123,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "3007:5:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 34124,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3013:9:38",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "3007:15:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2970:52:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "576f6f6c62616c6c3a206e616d6520697320616c72656164792072656769737465726564",
                        "id": 34126,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3024:38:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_2e161c8be61b96c6042ca5d610a39f5a23df5649528d9ac9045c5905a10ec188",
                          "typeString": "literal_string \"Woolball: name is already registered\""
                        },
                        "value": "Woolball: name is already registered"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_2e161c8be61b96c6042ca5d610a39f5a23df5649528d9ac9045c5905a10ec188",
                          "typeString": "literal_string \"Woolball: name is already registered\""
                        }
                      ],
                      "id": 34118,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2961:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 34127,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2961:102:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34128,
                  "nodeType": "ExpressionStatement",
                  "src": "2961:102:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 34133,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 34130,
                          "name": "expiration",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34094,
                          "src": "3142:10:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "expression": {
                            "id": 34131,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "3155:5:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 34132,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3161:9:38",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "3155:15:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3142:28:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "576f6f6c62616c6c3a2065787069726174696f6e54696d657374616d7020697320696e207468652070617374",
                        "id": 34134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3172:46:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_189a7696235a0e720ec671bdfbe0dc885698126f8ccaae570d4cbb5f684ca2e7",
                          "typeString": "literal_string \"Woolball: expirationTimestamp is in the past\""
                        },
                        "value": "Woolball: expirationTimestamp is in the past"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_189a7696235a0e720ec671bdfbe0dc885698126f8ccaae570d4cbb5f684ca2e7",
                          "typeString": "literal_string \"Woolball: expirationTimestamp is in the past\""
                        }
                      ],
                      "id": 34129,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3133:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 34135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3133:86:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34136,
                  "nodeType": "ExpressionStatement",
                  "src": "3133:86:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 34138,
                        "name": "creator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34092,
                        "src": "3252:7:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 34139,
                        "name": "nameID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34107,
                        "src": "3261:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 34137,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30108,
                      "src": "3246:5:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3246:22:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34141,
                  "nodeType": "ExpressionStatement",
                  "src": "3246:22:38"
                },
                {
                  "expression": {
                    "id": 34147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34142,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "3279:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34144,
                        "indexExpression": {
                          "id": 34143,
                          "name": "nameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34107,
                          "src": "3286:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3279:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34145,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3294:4:38",
                      "memberName": "name",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33934,
                      "src": "3279:19:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 34146,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34090,
                      "src": "3301:4:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_calldata_ptr",
                        "typeString": "string calldata"
                      }
                    },
                    "src": "3279:26:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 34148,
                  "nodeType": "ExpressionStatement",
                  "src": "3279:26:38"
                },
                {
                  "expression": {
                    "id": 34155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34149,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "3315:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34151,
                        "indexExpression": {
                          "id": 34150,
                          "name": "nameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34107,
                          "src": "3322:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3315:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34152,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3330:8:38",
                      "memberName": "nameType",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33937,
                      "src": "3315:23:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_NameType_$33932",
                        "typeString": "enum Woolball.NameType"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 34153,
                        "name": "NameType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33932,
                        "src": "3341:8:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_NameType_$33932_$",
                          "typeString": "type(enum Woolball.NameType)"
                        }
                      },
                      "id": 34154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "3350:4:38",
                      "memberName": "BASE",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33928,
                      "src": "3341:13:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_NameType_$33932",
                        "typeString": "enum Woolball.NameType"
                      }
                    },
                    "src": "3315:39:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_NameType_$33932",
                      "typeString": "enum Woolball.NameType"
                    }
                  },
                  "id": 34156,
                  "nodeType": "ExpressionStatement",
                  "src": "3315:39:38"
                },
                {
                  "expression": {
                    "id": 34162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34157,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "3364:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34159,
                        "indexExpression": {
                          "id": 34158,
                          "name": "nameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34107,
                          "src": "3371:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3364:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34160,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3379:19:38",
                      "memberName": "expirationTimestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33939,
                      "src": "3364:34:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 34161,
                      "name": "expiration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34094,
                      "src": "3401:10:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3364:47:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34163,
                  "nodeType": "ExpressionStatement",
                  "src": "3364:47:38"
                },
                {
                  "expression": {
                    "id": 34169,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34164,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "3421:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34166,
                        "indexExpression": {
                          "id": 34165,
                          "name": "nameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34107,
                          "src": "3428:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3421:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34167,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3436:13:38",
                      "memberName": "creatorWallet",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33941,
                      "src": "3421:28:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 34168,
                      "name": "creator",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34092,
                      "src": "3452:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3421:38:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 34170,
                  "nodeType": "ExpressionStatement",
                  "src": "3421:38:38"
                },
                {
                  "expression": {
                    "id": 34176,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34171,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "3469:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34173,
                        "indexExpression": {
                          "id": 34172,
                          "name": "nameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34107,
                          "src": "3476:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3469:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34174,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3484:8:38",
                      "memberName": "resolver",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33945,
                      "src": "3469:23:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 34175,
                      "name": "resolverAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34096,
                      "src": "3495:15:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3469:41:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 34177,
                  "nodeType": "ExpressionStatement",
                  "src": "3469:41:38"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 34179,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34090,
                        "src": "3534:4:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        }
                      },
                      {
                        "id": 34180,
                        "name": "nameID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34107,
                        "src": "3540:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 34181,
                        "name": "creator",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34092,
                        "src": "3548:7:38",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 34178,
                      "name": "NewName",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 35502,
                      "src": "3526:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (string memory,uint256,address)"
                      }
                    },
                    "id": 34182,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3526:30:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34183,
                  "nodeType": "EmitStatement",
                  "src": "3521:35:38"
                },
                {
                  "expression": {
                    "id": 34184,
                    "name": "nameID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34107,
                    "src": "3574:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34105,
                  "id": 34185,
                  "nodeType": "Return",
                  "src": "3567:13:38"
                }
              ]
            },
            "baseFunctions": [
              35533
            ],
            "functionSelector": "4671afe9",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 34099,
                    "name": "name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34090,
                    "src": "2801:4:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_calldata_ptr",
                      "typeString": "string calldata"
                    }
                  }
                ],
                "id": 34100,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 34098,
                  "name": "validName",
                  "nameLocations": [
                    "2791:9:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 34041,
                  "src": "2791:9:38"
                },
                "nodeType": "ModifierInvocation",
                "src": "2791:15:38"
              },
              {
                "arguments": [],
                "id": 34102,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 34101,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "2807:9:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 29398,
                  "src": "2807:9:38"
                },
                "nodeType": "ModifierInvocation",
                "src": "2807:11:38"
              }
            ],
            "name": "newName",
            "nameLocation": "2684:7:38",
            "parameters": {
              "id": 34097,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34090,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2708:4:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34187,
                  "src": "2692:20:38",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34089,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2692:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34092,
                  "mutability": "mutable",
                  "name": "creator",
                  "nameLocation": "2722:7:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34187,
                  "src": "2714:15:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34091,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2714:7:38",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34094,
                  "mutability": "mutable",
                  "name": "expiration",
                  "nameLocation": "2739:10:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34187,
                  "src": "2731:18:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34093,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2731:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34096,
                  "mutability": "mutable",
                  "name": "resolverAddress",
                  "nameLocation": "2759:15:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34187,
                  "src": "2751:23:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34095,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2751:7:38",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2691:84:38"
            },
            "returnParameters": {
              "id": 34105,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34104,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34187,
                  "src": "2828:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34103,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2828:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2827:9:38"
            },
            "scope": 34758,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34302,
            "nodeType": "FunctionDefinition",
            "src": "3593:1237:38",
            "nodes": [],
            "body": {
              "id": 34301,
              "nodeType": "Block",
              "src": "3752:1078:38",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    34203
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34203,
                      "mutability": "mutable",
                      "name": "subnameID",
                      "nameLocation": "3852:9:38",
                      "nodeType": "VariableDeclaration",
                      "scope": 34301,
                      "src": "3844:17:38",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34202,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3844:7:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 34218,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 34211,
                                    "name": "nameID",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34189,
                                    "src": "3913:6:38",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "id": 34209,
                                    "name": "Strings",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 31207,
                                    "src": "3896:7:38",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_Strings_$31207_$",
                                      "typeString": "type(library Strings)"
                                    }
                                  },
                                  "id": 34210,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "3904:8:38",
                                  "memberName": "toString",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 31037,
                                  "src": "3896:16:38",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                    "typeString": "function (uint256) pure returns (string memory)"
                                  }
                                },
                                "id": 34212,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3896:24:38",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "2e",
                                "id": 34213,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3922:3:38",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                  "typeString": "literal_string \".\""
                                },
                                "value": "."
                              },
                              {
                                "id": 34214,
                                "name": "subname",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 34191,
                                "src": "3927:7:38",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_6f010af653ebe3cb07d297a4ef13366103d392ceffa68dd48232e6e9ff2187bf",
                                  "typeString": "literal_string \".\""
                                },
                                {
                                  "typeIdentifier": "t_string_calldata_ptr",
                                  "typeString": "string calldata"
                                }
                              ],
                              "expression": {
                                "id": 34207,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "3879:3:38",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 34208,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "3883:12:38",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "3879:16:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 34215,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3879:56:38",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 34206,
                          "name": "sha256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -22,
                          "src": "3872:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 34216,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3872:64:38",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 34205,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3864:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 34204,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3864:7:38",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 34217,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3864:73:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3844:93:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_enum$_NameType_$33932",
                          "typeString": "enum Woolball.NameType"
                        },
                        "id": 34226,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 34220,
                              "name": "_names",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33972,
                              "src": "3995:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                              }
                            },
                            "id": 34222,
                            "indexExpression": {
                              "id": 34221,
                              "name": "subnameID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34203,
                              "src": "4002:9:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3995:17:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Name_$33960_storage",
                              "typeString": "struct Woolball.Name storage ref"
                            }
                          },
                          "id": 34223,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4013:8:38",
                          "memberName": "nameType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33937,
                          "src": "3995:26:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_NameType_$33932",
                            "typeString": "enum Woolball.NameType"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "id": 34224,
                            "name": "NameType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33932,
                            "src": "4025:8:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_NameType_$33932_$",
                              "typeString": "type(enum Woolball.NameType)"
                            }
                          },
                          "id": 34225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "4034:4:38",
                          "memberName": "NONE",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33927,
                          "src": "4025:13:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_NameType_$33932",
                            "typeString": "enum Woolball.NameType"
                          }
                        },
                        "src": "3995:43:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "576f6f6c62616c6c3a207375626e616d652065786973747320616c7265616479",
                        "id": 34227,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4040:34:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4bbfedd72d0d587f3e7becbf1894fd198b4fd018d23e198c25177a088b443aa1",
                          "typeString": "literal_string \"Woolball: subname exists already\""
                        },
                        "value": "Woolball: subname exists already"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_4bbfedd72d0d587f3e7becbf1894fd198b4fd018d23e198c25177a088b443aa1",
                          "typeString": "literal_string \"Woolball: subname exists already\""
                        }
                      ],
                      "id": 34219,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3987:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 34228,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3987:88:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34229,
                  "nodeType": "ExpressionStatement",
                  "src": "3987:88:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 34232,
                            "name": "nameID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34189,
                            "src": "4100:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 34231,
                          "name": "ownerOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 29653,
                          "src": "4092:7:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                            "typeString": "function (uint256) view returns (address)"
                          }
                        },
                        "id": 34233,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4092:15:38",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 34234,
                        "name": "subnameID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34203,
                        "src": "4109:9:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 34230,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30108,
                      "src": "4086:5:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34235,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4086:33:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34236,
                  "nodeType": "ExpressionStatement",
                  "src": "4086:33:38"
                },
                {
                  "expression": {
                    "id": 34242,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34237,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "4130:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34239,
                        "indexExpression": {
                          "id": 34238,
                          "name": "subnameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34203,
                          "src": "4137:9:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4130:17:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34240,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4148:4:38",
                      "memberName": "name",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33934,
                      "src": "4130:22:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 34241,
                      "name": "subname",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34191,
                      "src": "4155:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_calldata_ptr",
                        "typeString": "string calldata"
                      }
                    },
                    "src": "4130:32:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 34243,
                  "nodeType": "ExpressionStatement",
                  "src": "4130:32:38"
                },
                {
                  "expression": {
                    "id": 34250,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34244,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "4172:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34246,
                        "indexExpression": {
                          "id": 34245,
                          "name": "subnameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34203,
                          "src": "4179:9:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4172:17:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34247,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4190:8:38",
                      "memberName": "nameType",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33937,
                      "src": "4172:26:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_NameType_$33932",
                        "typeString": "enum Woolball.NameType"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 34248,
                        "name": "NameType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33932,
                        "src": "4201:8:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_NameType_$33932_$",
                          "typeString": "type(enum Woolball.NameType)"
                        }
                      },
                      "id": 34249,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "4210:7:38",
                      "memberName": "SUBNAME",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33930,
                      "src": "4201:16:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_NameType_$33932",
                        "typeString": "enum Woolball.NameType"
                      }
                    },
                    "src": "4172:45:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_NameType_$33932",
                      "typeString": "enum Woolball.NameType"
                    }
                  },
                  "id": 34251,
                  "nodeType": "ExpressionStatement",
                  "src": "4172:45:38"
                },
                {
                  "expression": {
                    "id": 34260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34252,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "4227:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34254,
                        "indexExpression": {
                          "id": 34253,
                          "name": "subnameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34203,
                          "src": "4234:9:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4227:17:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34255,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4245:19:38",
                      "memberName": "expirationTimestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33939,
                      "src": "4227:37:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34256,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "4267:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34258,
                        "indexExpression": {
                          "id": 34257,
                          "name": "nameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34189,
                          "src": "4274:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4267:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34259,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4282:19:38",
                      "memberName": "expirationTimestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33939,
                      "src": "4267:34:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4227:74:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34261,
                  "nodeType": "ExpressionStatement",
                  "src": "4227:74:38"
                },
                {
                  "expression": {
                    "id": 34267,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34262,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "4311:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34264,
                        "indexExpression": {
                          "id": 34263,
                          "name": "subnameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34203,
                          "src": "4318:9:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4311:17:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34265,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4329:13:38",
                      "memberName": "creatorNameID",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33943,
                      "src": "4311:31:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 34266,
                      "name": "nameID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34189,
                      "src": "4345:6:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4311:40:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34268,
                  "nodeType": "ExpressionStatement",
                  "src": "4311:40:38"
                },
                {
                  "expression": {
                    "id": 34274,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34269,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "4361:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34271,
                        "indexExpression": {
                          "id": 34270,
                          "name": "subnameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34203,
                          "src": "4368:9:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4361:17:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34272,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "4379:7:38",
                      "memberName": "noNames",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33947,
                      "src": "4361:25:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 34273,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4389:4:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "4361:32:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 34275,
                  "nodeType": "ExpressionStatement",
                  "src": "4361:32:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 34277,
                        "name": "subnameID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34203,
                        "src": "4545:9:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 34280,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "4564:4:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Woolball_$34758",
                              "typeString": "contract Woolball"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Woolball_$34758",
                              "typeString": "contract Woolball"
                            }
                          ],
                          "id": 34279,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "4556:7:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 34278,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "4556:7:38",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 34281,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4556:13:38",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 34282,
                        "name": "nameID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34189,
                        "src": "4571:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 34276,
                      "name": "_lock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33358,
                      "src": "4539:5:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 34283,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4539:39:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34284,
                  "nodeType": "ExpressionStatement",
                  "src": "4539:39:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 34290,
                        "name": "subnameID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34203,
                        "src": "4654:9:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "expression": {
                          "baseExpression": {
                            "id": 34285,
                            "name": "_names",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33972,
                            "src": "4623:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                              "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                            }
                          },
                          "id": 34287,
                          "indexExpression": {
                            "id": 34286,
                            "name": "nameID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34189,
                            "src": "4630:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4623:14:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Name_$33960_storage",
                            "typeString": "struct Woolball.Name storage ref"
                          }
                        },
                        "id": 34288,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4638:10:38",
                        "memberName": "subdomains",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 33959,
                        "src": "4623:25:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34289,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4649:4:38",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "4623:30:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_uint256_$dyn_storage_ptr_$_t_uint256_$returns$__$attached_to$_t_array$_t_uint256_$dyn_storage_ptr_$",
                        "typeString": "function (uint256[] storage pointer,uint256)"
                      }
                    },
                    "id": 34291,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4623:41:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34292,
                  "nodeType": "ExpressionStatement",
                  "src": "4623:41:38"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 34294,
                        "name": "subname",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34191,
                        "src": "4769:7:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_calldata_ptr",
                          "typeString": "string calldata"
                        }
                      },
                      {
                        "id": 34295,
                        "name": "nameID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34189,
                        "src": "4778:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 34296,
                        "name": "subnameID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34203,
                        "src": "4786:9:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 34293,
                      "name": "NewSubname",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 35511,
                      "src": "4758:10:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (string memory,uint256,uint256)"
                      }
                    },
                    "id": 34297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4758:38:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34298,
                  "nodeType": "EmitStatement",
                  "src": "4753:43:38"
                },
                {
                  "expression": {
                    "id": 34299,
                    "name": "subnameID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34203,
                    "src": "4814:9:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34201,
                  "id": 34300,
                  "nodeType": "Return",
                  "src": "4807:16:38"
                }
              ]
            },
            "functionSelector": "b5916ab2",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 34194,
                    "name": "subname",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34191,
                    "src": "3687:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_calldata_ptr",
                      "typeString": "string calldata"
                    }
                  }
                ],
                "id": 34195,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 34193,
                  "name": "validName",
                  "nameLocations": [
                    "3677:9:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 34041,
                  "src": "3677:9:38"
                },
                "nodeType": "ModifierInvocation",
                "src": "3677:18:38"
              },
              {
                "arguments": [
                  {
                    "id": 34197,
                    "name": "nameID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34189,
                    "src": "3710:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 34198,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 34196,
                  "name": "onlyNameOwner",
                  "nameLocations": [
                    "3696:13:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 33988,
                  "src": "3696:13:38"
                },
                "nodeType": "ModifierInvocation",
                "src": "3696:21:38"
              }
            ],
            "name": "newSubname",
            "nameLocation": "3602:10:38",
            "parameters": {
              "id": 34192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34189,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "3630:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34302,
                  "src": "3622:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34188,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3622:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34191,
                  "mutability": "mutable",
                  "name": "subname",
                  "nameLocation": "3663:7:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34302,
                  "src": "3647:23:38",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34190,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3647:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3612:64:38"
            },
            "returnParameters": {
              "id": 34201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34200,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34302,
                  "src": "3743:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34199,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3743:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3742:9:38"
            },
            "scope": 34758,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34465,
            "nodeType": "FunctionDefinition",
            "src": "4836:1502:38",
            "nodes": [],
            "body": {
              "id": 34464,
              "nodeType": "Block",
              "src": "5010:1328:38",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    34321
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34321,
                      "mutability": "mutable",
                      "name": "linkID",
                      "nameLocation": "5090:6:38",
                      "nodeType": "VariableDeclaration",
                      "scope": 34464,
                      "src": "5082:14:38",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 34320,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5082:7:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 34339,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 34329,
                                    "name": "fromID",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34304,
                                    "src": "5148:6:38",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "id": 34327,
                                    "name": "Strings",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 31207,
                                    "src": "5131:7:38",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_Strings_$31207_$",
                                      "typeString": "type(library Strings)"
                                    }
                                  },
                                  "id": 34328,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "5139:8:38",
                                  "memberName": "toString",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 31037,
                                  "src": "5131:16:38",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                    "typeString": "function (uint256) pure returns (string memory)"
                                  }
                                },
                                "id": 34330,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5131:24:38",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "hexValue": "23",
                                "id": 34331,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "5157:3:38",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_ace738c68088218d015fbdce138f062893d86818ac98932f7ce2907c5976fbde",
                                  "typeString": "literal_string \"#\""
                                },
                                "value": "#"
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 34334,
                                    "name": "targetID",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 34306,
                                    "src": "5179:8:38",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "id": 34332,
                                    "name": "Strings",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 31207,
                                    "src": "5162:7:38",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_Strings_$31207_$",
                                      "typeString": "type(library Strings)"
                                    }
                                  },
                                  "id": 34333,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "5170:8:38",
                                  "memberName": "toString",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 31037,
                                  "src": "5162:16:38",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                    "typeString": "function (uint256) pure returns (string memory)"
                                  }
                                },
                                "id": 34335,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5162:26:38",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_ace738c68088218d015fbdce138f062893d86818ac98932f7ce2907c5976fbde",
                                  "typeString": "literal_string \"#\""
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "expression": {
                                "id": 34325,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "5114:3:38",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 34326,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "5118:12:38",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "5114:16:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 34336,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5114:75:38",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 34324,
                          "name": "sha256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -22,
                          "src": "5107:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 34337,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5107:83:38",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 34323,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5099:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 34322,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5099:7:38",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 34338,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5099:92:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5082:109:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_enum$_NameType_$33932",
                          "typeString": "enum Woolball.NameType"
                        },
                        "id": 34347,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 34341,
                              "name": "_names",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33972,
                              "src": "5247:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                              }
                            },
                            "id": 34343,
                            "indexExpression": {
                              "id": 34342,
                              "name": "linkID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34321,
                              "src": "5254:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5247:14:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Name_$33960_storage",
                              "typeString": "struct Woolball.Name storage ref"
                            }
                          },
                          "id": 34344,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5262:8:38",
                          "memberName": "nameType",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33937,
                          "src": "5247:23:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_NameType_$33932",
                            "typeString": "enum Woolball.NameType"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "expression": {
                            "id": 34345,
                            "name": "NameType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33932,
                            "src": "5274:8:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_NameType_$33932_$",
                              "typeString": "type(enum Woolball.NameType)"
                            }
                          },
                          "id": 34346,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "5283:4:38",
                          "memberName": "NONE",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33927,
                          "src": "5274:13:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_NameType_$33932",
                            "typeString": "enum Woolball.NameType"
                          }
                        },
                        "src": "5247:40:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "576f6f6c62616c6c3a206c696e6b2065786973747320616c7265616479",
                        "id": 34348,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5289:31:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_01499e42397e382a63ecb952f52431e3b8b3810760db06b674d8c534960a7169",
                          "typeString": "literal_string \"Woolball: link exists already\""
                        },
                        "value": "Woolball: link exists already"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_01499e42397e382a63ecb952f52431e3b8b3810760db06b674d8c534960a7169",
                          "typeString": "literal_string \"Woolball: link exists already\""
                        }
                      ],
                      "id": 34340,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "5239:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 34349,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5239:82:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34350,
                  "nodeType": "ExpressionStatement",
                  "src": "5239:82:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 34353,
                            "name": "fromID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34304,
                            "src": "5346:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 34352,
                          "name": "ownerOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 29653,
                          "src": "5338:7:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                            "typeString": "function (uint256) view returns (address)"
                          }
                        },
                        "id": 34354,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5338:15:38",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 34355,
                        "name": "linkID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34321,
                        "src": "5355:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 34351,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30108,
                      "src": "5332:5:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34356,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5332:30:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34357,
                  "nodeType": "ExpressionStatement",
                  "src": "5332:30:38"
                },
                {
                  "expression": {
                    "id": 34364,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34358,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "5373:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34360,
                        "indexExpression": {
                          "id": 34359,
                          "name": "linkID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34321,
                          "src": "5380:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5373:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34361,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "5388:8:38",
                      "memberName": "nameType",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33937,
                      "src": "5373:23:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_NameType_$33932",
                        "typeString": "enum Woolball.NameType"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 34362,
                        "name": "NameType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33932,
                        "src": "5399:8:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_NameType_$33932_$",
                          "typeString": "type(enum Woolball.NameType)"
                        }
                      },
                      "id": 34363,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "5408:4:38",
                      "memberName": "LINK",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33931,
                      "src": "5399:13:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_NameType_$33932",
                        "typeString": "enum Woolball.NameType"
                      }
                    },
                    "src": "5373:39:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_NameType_$33932",
                      "typeString": "enum Woolball.NameType"
                    }
                  },
                  "id": 34365,
                  "nodeType": "ExpressionStatement",
                  "src": "5373:39:38"
                },
                {
                  "expression": {
                    "id": 34374,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34366,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "5422:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34368,
                        "indexExpression": {
                          "id": 34367,
                          "name": "linkID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34321,
                          "src": "5429:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5422:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34369,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "5437:19:38",
                      "memberName": "expirationTimestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33939,
                      "src": "5422:34:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34370,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "5459:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34372,
                        "indexExpression": {
                          "id": 34371,
                          "name": "fromID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34304,
                          "src": "5466:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5459:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34373,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5474:19:38",
                      "memberName": "expirationTimestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33939,
                      "src": "5459:34:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5422:71:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34375,
                  "nodeType": "ExpressionStatement",
                  "src": "5422:71:38"
                },
                {
                  "expression": {
                    "id": 34381,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34376,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "5562:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34378,
                        "indexExpression": {
                          "id": 34377,
                          "name": "linkID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34321,
                          "src": "5569:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5562:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34379,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "5577:13:38",
                      "memberName": "creatorNameID",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33943,
                      "src": "5562:28:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 34380,
                      "name": "fromID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34304,
                      "src": "5593:6:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5562:37:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34382,
                  "nodeType": "ExpressionStatement",
                  "src": "5562:37:38"
                },
                {
                  "expression": {
                    "id": 34388,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34383,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "5609:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34385,
                        "indexExpression": {
                          "id": 34384,
                          "name": "linkID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34321,
                          "src": "5616:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5609:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34386,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "5624:8:38",
                      "memberName": "linkToID",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33953,
                      "src": "5609:23:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 34387,
                      "name": "targetID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34306,
                      "src": "5635:8:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5609:34:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34389,
                  "nodeType": "ExpressionStatement",
                  "src": "5609:34:38"
                },
                {
                  "expression": {
                    "id": 34395,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34390,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "5653:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34392,
                        "indexExpression": {
                          "id": 34391,
                          "name": "linkID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34321,
                          "src": "5660:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5653:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34393,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "5668:7:38",
                      "memberName": "noNames",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33947,
                      "src": "5653:22:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 34394,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5678:4:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "5653:29:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 34396,
                  "nodeType": "ExpressionStatement",
                  "src": "5653:29:38"
                },
                {
                  "expression": {
                    "id": 34402,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34397,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "5692:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34399,
                        "indexExpression": {
                          "id": 34398,
                          "name": "linkID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34321,
                          "src": "5699:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5692:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34400,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "5707:10:38",
                      "memberName": "noSubnames",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33949,
                      "src": "5692:25:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 34401,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5720:4:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "5692:32:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 34403,
                  "nodeType": "ExpressionStatement",
                  "src": "5692:32:38"
                },
                {
                  "expression": {
                    "id": 34409,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34404,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "5734:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34406,
                        "indexExpression": {
                          "id": 34405,
                          "name": "linkID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34321,
                          "src": "5741:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "5734:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34407,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "5749:7:38",
                      "memberName": "noLinks",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33951,
                      "src": "5734:22:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 34408,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5759:4:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "5734:29:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 34410,
                  "nodeType": "ExpressionStatement",
                  "src": "5734:29:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 34417,
                        "name": "linkID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34321,
                        "src": "5862:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "expression": {
                          "expression": {
                            "baseExpression": {
                              "id": 34411,
                              "name": "_names",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33972,
                              "src": "5822:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                              }
                            },
                            "id": 34413,
                            "indexExpression": {
                              "id": 34412,
                              "name": "fromID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34304,
                              "src": "5829:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5822:14:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Name_$33960_storage",
                              "typeString": "struct Woolball.Name storage ref"
                            }
                          },
                          "id": 34414,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5837:5:38",
                          "memberName": "links",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33956,
                          "src": "5822:20:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Links_$33967_storage",
                            "typeString": "struct Woolball.Links storage ref"
                          }
                        },
                        "id": 34415,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5843:13:38",
                        "memberName": "outgoingLinks",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 33963,
                        "src": "5822:34:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34416,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5857:4:38",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "5822:39:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_uint256_$dyn_storage_ptr_$_t_uint256_$returns$__$attached_to$_t_array$_t_uint256_$dyn_storage_ptr_$",
                        "typeString": "function (uint256[] storage pointer,uint256)"
                      }
                    },
                    "id": 34418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5822:47:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34419,
                  "nodeType": "ExpressionStatement",
                  "src": "5822:47:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 34426,
                        "name": "linkID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34321,
                        "src": "5921:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "expression": {
                          "expression": {
                            "baseExpression": {
                              "id": 34420,
                              "name": "_names",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33972,
                              "src": "5879:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                              }
                            },
                            "id": 34422,
                            "indexExpression": {
                              "id": 34421,
                              "name": "targetID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34306,
                              "src": "5886:8:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "5879:16:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Name_$33960_storage",
                              "typeString": "struct Woolball.Name storage ref"
                            }
                          },
                          "id": 34423,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5896:5:38",
                          "memberName": "links",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33956,
                          "src": "5879:22:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Links_$33967_storage",
                            "typeString": "struct Woolball.Links storage ref"
                          }
                        },
                        "id": 34424,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5902:13:38",
                        "memberName": "incomingLinks",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 33966,
                        "src": "5879:36:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 34425,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5916:4:38",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "5879:41:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_uint256_$dyn_storage_ptr_$_t_uint256_$returns$__$attached_to$_t_array$_t_uint256_$dyn_storage_ptr_$",
                        "typeString": "function (uint256[] storage pointer,uint256)"
                      }
                    },
                    "id": 34427,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5879:49:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34428,
                  "nodeType": "ExpressionStatement",
                  "src": "5879:49:38"
                },
                {
                  "expression": {
                    "id": 34436,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "expression": {
                            "id": 34429,
                            "name": "LCT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33723,
                            "src": "6029:3:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_LCT_$33723_$",
                              "typeString": "type(contract LCT)"
                            }
                          },
                          "id": 34432,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6033:7:38",
                          "memberName": "_tokens",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 32405,
                          "src": "6029:11:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_LCToken_$32283_storage_$",
                            "typeString": "mapping(uint256 => struct LCT.LCToken storage ref)"
                          }
                        },
                        "id": 34433,
                        "indexExpression": {
                          "id": 34431,
                          "name": "linkID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34321,
                          "src": "6041:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "6029:19:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_LCToken_$32283_storage",
                          "typeString": "struct LCT.LCToken storage ref"
                        }
                      },
                      "id": 34434,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6049:15:38",
                      "memberName": "nontransferable",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 32253,
                      "src": "6029:35:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "hexValue": "74727565",
                      "id": 34435,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6067:4:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "6029:42:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 34437,
                  "nodeType": "ExpressionStatement",
                  "src": "6029:42:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 34439,
                        "name": "fromID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34304,
                        "src": "6157:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 34442,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "6173:4:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Woolball_$34758",
                              "typeString": "contract Woolball"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Woolball_$34758",
                              "typeString": "contract Woolball"
                            }
                          ],
                          "id": 34441,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6165:7:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 34440,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "6165:7:38",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 34443,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6165:13:38",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 34444,
                        "name": "linkID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34321,
                        "src": "6180:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 34438,
                      "name": "_setDependence",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 32510,
                      "src": "6142:14:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 34445,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6142:45:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34446,
                  "nodeType": "ExpressionStatement",
                  "src": "6142:45:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 34448,
                        "name": "linkID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34321,
                        "src": "6203:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 34451,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "6219:4:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Woolball_$34758",
                              "typeString": "contract Woolball"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Woolball_$34758",
                              "typeString": "contract Woolball"
                            }
                          ],
                          "id": 34450,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "6211:7:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 34449,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "6211:7:38",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 34452,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "6211:13:38",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 34453,
                        "name": "fromID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34304,
                        "src": "6226:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 34447,
                      "name": "_lock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33358,
                      "src": "6197:5:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,address,uint256)"
                      }
                    },
                    "id": 34454,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6197:36:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34455,
                  "nodeType": "ExpressionStatement",
                  "src": "6197:36:38"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 34457,
                        "name": "fromID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34304,
                        "src": "6282:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 34458,
                        "name": "targetID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34306,
                        "src": "6290:8:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 34459,
                        "name": "linkID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34321,
                        "src": "6300:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 34456,
                      "name": "NewLink",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 35520,
                      "src": "6274:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256)"
                      }
                    },
                    "id": 34460,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6274:33:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34461,
                  "nodeType": "EmitStatement",
                  "src": "6269:38:38"
                },
                {
                  "expression": {
                    "id": 34462,
                    "name": "linkID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34321,
                    "src": "6325:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34319,
                  "id": 34463,
                  "nodeType": "Return",
                  "src": "6318:13:38"
                }
              ]
            },
            "functionSelector": "a4aec075",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 34309,
                    "name": "fromID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34304,
                    "src": "4923:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 34310,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 34308,
                  "name": "nameIDExists",
                  "nameLocations": [
                    "4910:12:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 34005,
                  "src": "4910:12:38"
                },
                "nodeType": "ModifierInvocation",
                "src": "4910:20:38"
              },
              {
                "arguments": [
                  {
                    "id": 34312,
                    "name": "targetID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34306,
                    "src": "4944:8:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 34313,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 34311,
                  "name": "nameIDExists",
                  "nameLocations": [
                    "4931:12:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 34005,
                  "src": "4931:12:38"
                },
                "nodeType": "ModifierInvocation",
                "src": "4931:22:38"
              },
              {
                "arguments": [
                  {
                    "id": 34315,
                    "name": "fromID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34304,
                    "src": "4968:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 34316,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 34314,
                  "name": "onlyNameOwner",
                  "nameLocations": [
                    "4954:13:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 33988,
                  "src": "4954:13:38"
                },
                "nodeType": "ModifierInvocation",
                "src": "4954:21:38"
              }
            ],
            "name": "newLink",
            "nameLocation": "4845:7:38",
            "parameters": {
              "id": 34307,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34304,
                  "mutability": "mutable",
                  "name": "fromID",
                  "nameLocation": "4870:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34465,
                  "src": "4862:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34303,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4862:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34306,
                  "mutability": "mutable",
                  "name": "targetID",
                  "nameLocation": "4895:8:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34465,
                  "src": "4887:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34305,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4887:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4852:57:38"
            },
            "returnParameters": {
              "id": 34319,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34318,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34465,
                  "src": "5001:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34317,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5001:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5000:9:38"
            },
            "scope": 34758,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34505,
            "nodeType": "FunctionDefinition",
            "src": "6344:593:38",
            "nodes": [],
            "body": {
              "id": 34504,
              "nodeType": "Block",
              "src": "6478:459:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 34483,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 34478,
                              "name": "_names",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33972,
                              "src": "6591:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                              }
                            },
                            "id": 34480,
                            "indexExpression": {
                              "id": 34479,
                              "name": "nameID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34467,
                              "src": "6598:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6591:14:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Name_$33960_storage",
                              "typeString": "struct Woolball.Name storage ref"
                            }
                          },
                          "id": 34481,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6606:19:38",
                          "memberName": "expirationTimestamp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33939,
                          "src": "6591:34:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 34482,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6628:1:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "6591:38:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "576f6f6c62616c6c3a206e616d654944206d757374206265206f662061207265676973746572656420576f6f6c62616c6c206e616d65",
                        "id": 34484,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6631:56:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_d9ae683baf2504d8249e004e1a20fb7f6d1763e0620a525d1267f64033ba40b3",
                          "typeString": "literal_string \"Woolball: nameID must be of a registered Woolball name\""
                        },
                        "value": "Woolball: nameID must be of a registered Woolball name"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_d9ae683baf2504d8249e004e1a20fb7f6d1763e0620a525d1267f64033ba40b3",
                          "typeString": "literal_string \"Woolball: nameID must be of a registered Woolball name\""
                        }
                      ],
                      "id": 34477,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "6583:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 34485,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6583:105:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34486,
                  "nodeType": "ExpressionStatement",
                  "src": "6583:105:38"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 34493,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 34488,
                              "name": "_names",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33972,
                              "src": "6764:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                              }
                            },
                            "id": 34490,
                            "indexExpression": {
                              "id": 34489,
                              "name": "nameID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34467,
                              "src": "6771:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "6764:14:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Name_$33960_storage",
                              "typeString": "struct Woolball.Name storage ref"
                            }
                          },
                          "id": 34491,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6779:19:38",
                          "memberName": "expirationTimestamp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33939,
                          "src": "6764:34:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "id": 34492,
                          "name": "newTimeStamp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34469,
                          "src": "6801:12:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6764:49:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "576f6f6c62616c6c3a206e657754696d655374616d70206d757374206265206166746572207468652063757272656e74206f6e65",
                        "id": 34494,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6815:54:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_cebd4c8f155922f73fb6dcb8896b15bcb419db1956f26b80a5292e25c3dc3505",
                          "typeString": "literal_string \"Woolball: newTimeStamp must be after the current one\""
                        },
                        "value": "Woolball: newTimeStamp must be after the current one"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_cebd4c8f155922f73fb6dcb8896b15bcb419db1956f26b80a5292e25c3dc3505",
                          "typeString": "literal_string \"Woolball: newTimeStamp must be after the current one\""
                        }
                      ],
                      "id": 34487,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "6756:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 34495,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6756:114:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34496,
                  "nodeType": "ExpressionStatement",
                  "src": "6756:114:38"
                },
                {
                  "expression": {
                    "id": 34502,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34497,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "6881:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34499,
                        "indexExpression": {
                          "id": 34498,
                          "name": "nameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34467,
                          "src": "6888:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "6881:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34500,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "6896:19:38",
                      "memberName": "expirationTimestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33939,
                      "src": "6881:34:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 34501,
                      "name": "newTimeStamp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34469,
                      "src": "6918:12:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6881:49:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 34503,
                  "nodeType": "ExpressionStatement",
                  "src": "6881:49:38"
                }
              ]
            },
            "functionSelector": "460727b1",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 34472,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 34471,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "6447:9:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 29398,
                  "src": "6447:9:38"
                },
                "nodeType": "ModifierInvocation",
                "src": "6447:9:38"
              },
              {
                "arguments": [
                  {
                    "id": 34474,
                    "name": "nameID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34467,
                    "src": "6470:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 34475,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 34473,
                  "name": "nameIDExists",
                  "nameLocations": [
                    "6457:12:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 34005,
                  "src": "6457:12:38"
                },
                "nodeType": "ModifierInvocation",
                "src": "6457:20:38"
              }
            ],
            "name": "setExpirationDate",
            "nameLocation": "6353:17:38",
            "parameters": {
              "id": 34470,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34467,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "6388:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34505,
                  "src": "6380:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34466,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6380:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34469,
                  "mutability": "mutable",
                  "name": "newTimeStamp",
                  "nameLocation": "6413:12:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34505,
                  "src": "6405:20:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34468,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6405:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6370:61:38"
            },
            "returnParameters": {
              "id": 34476,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6478:0:38"
            },
            "scope": 34758,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34524,
            "nodeType": "FunctionDefinition",
            "src": "7118:221:38",
            "nodes": [],
            "body": {
              "id": 34523,
              "nodeType": "Block",
              "src": "7236:103:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 34521,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 34516,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "7246:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34518,
                        "indexExpression": {
                          "id": 34517,
                          "name": "nameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34508,
                          "src": "7253:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "7246:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34519,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "7261:8:38",
                      "memberName": "resolver",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33945,
                      "src": "7246:23:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 34520,
                      "name": "nameResolver",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34510,
                      "src": "7272:12:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7246:38:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 34522,
                  "nodeType": "ExpressionStatement",
                  "src": "7246:38:38"
                }
              ]
            },
            "documentation": {
              "id": 34506,
              "nodeType": "StructuredDocumentation",
              "src": "6943:170:38",
              "text": " @dev Sets the resolver address for the specified name.\n @param nameID The name to update.\n @param nameResolver The address of the resolver."
            },
            "functionSelector": "bc7b6d62",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 34513,
                    "name": "nameID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34508,
                    "src": "7228:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 34514,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 34512,
                  "name": "onlyNameOwner",
                  "nameLocations": [
                    "7214:13:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 33988,
                  "src": "7214:13:38"
                },
                "nodeType": "ModifierInvocation",
                "src": "7214:21:38"
              }
            ],
            "name": "setResolver",
            "nameLocation": "7127:11:38",
            "parameters": {
              "id": 34511,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34508,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "7156:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34524,
                  "src": "7148:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34507,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7148:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34510,
                  "mutability": "mutable",
                  "name": "nameResolver",
                  "nameLocation": "7180:12:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34524,
                  "src": "7172:20:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34509,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7172:7:38",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7138:60:38"
            },
            "returnParameters": {
              "id": 34515,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7236:0:38"
            },
            "scope": 34758,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34541,
            "nodeType": "FunctionDefinition",
            "src": "7514:140:38",
            "nodes": [],
            "body": {
              "id": 34540,
              "nodeType": "Block",
              "src": "7607:47:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "baseExpression": {
                        "id": 34535,
                        "name": "_names",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33972,
                        "src": "7624:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                          "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                        }
                      },
                      "id": 34537,
                      "indexExpression": {
                        "id": 34536,
                        "name": "nameID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34527,
                        "src": "7631:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "7624:14:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Name_$33960_storage",
                        "typeString": "struct Woolball.Name storage ref"
                      }
                    },
                    "id": 34538,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "7639:8:38",
                    "memberName": "resolver",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 33945,
                    "src": "7624:23:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 34534,
                  "id": 34539,
                  "nodeType": "Return",
                  "src": "7617:30:38"
                }
              ]
            },
            "documentation": {
              "id": 34525,
              "nodeType": "StructuredDocumentation",
              "src": "7345:164:38",
              "text": " @dev Returns the address of the resolver for the specified name.\n @param nameID The specified name.\n @return address of the resolver."
            },
            "functionSelector": "108eaa4e",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 34530,
                    "name": "nameID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34527,
                    "src": "7581:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 34531,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 34529,
                  "name": "nameIDExists",
                  "nameLocations": [
                    "7568:12:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 34005,
                  "src": "7568:12:38"
                },
                "nodeType": "ModifierInvocation",
                "src": "7568:20:38"
              }
            ],
            "name": "resolver",
            "nameLocation": "7523:8:38",
            "parameters": {
              "id": 34528,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34527,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "7540:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34541,
                  "src": "7532:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34526,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7532:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7531:16:38"
            },
            "returnParameters": {
              "id": 34534,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34533,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34541,
                  "src": "7598:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34532,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7598:7:38",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7597:9:38"
            },
            "scope": 34758,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34554,
            "nodeType": "FunctionDefinition",
            "src": "7660:141:38",
            "nodes": [],
            "body": {
              "id": 34553,
              "nodeType": "Block",
              "src": "7743:58:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "baseExpression": {
                        "id": 34548,
                        "name": "_names",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33972,
                        "src": "7760:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                          "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                        }
                      },
                      "id": 34550,
                      "indexExpression": {
                        "id": 34549,
                        "name": "nameID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34543,
                        "src": "7767:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "7760:14:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Name_$33960_storage",
                        "typeString": "struct Woolball.Name storage ref"
                      }
                    },
                    "id": 34551,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "7775:19:38",
                    "memberName": "expirationTimestamp",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 33939,
                    "src": "7760:34:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34547,
                  "id": 34552,
                  "nodeType": "Return",
                  "src": "7753:41:38"
                }
              ]
            },
            "functionSelector": "72fdc40e",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "expirationTimestamp",
            "nameLocation": "7669:19:38",
            "parameters": {
              "id": 34544,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34543,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "7697:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34554,
                  "src": "7689:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34542,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7689:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7688:16:38"
            },
            "returnParameters": {
              "id": 34547,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34546,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34554,
                  "src": "7734:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34545,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7734:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7733:9:38"
            },
            "scope": 34758,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34568,
            "nodeType": "FunctionDefinition",
            "src": "7807:136:38",
            "nodes": [],
            "body": {
              "id": 34567,
              "nodeType": "Block",
              "src": "7887:56:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "baseExpression": {
                          "id": 34561,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "7904:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34563,
                        "indexExpression": {
                          "id": 34562,
                          "name": "nameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34556,
                          "src": "7911:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "7904:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34564,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7919:10:38",
                      "memberName": "subdomains",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33959,
                      "src": "7904:25:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34565,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "7930:6:38",
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "src": "7904:32:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34560,
                  "id": 34566,
                  "nodeType": "Return",
                  "src": "7897:39:38"
                }
              ]
            },
            "functionSelector": "36f4ede4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "subdomainsAmount",
            "nameLocation": "7816:16:38",
            "parameters": {
              "id": 34557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34556,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "7841:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34568,
                  "src": "7833:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34555,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7833:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7832:16:38"
            },
            "returnParameters": {
              "id": 34560,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34559,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34568,
                  "src": "7878:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34558,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7878:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7877:9:38"
            },
            "scope": 34758,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34585,
            "nodeType": "FunctionDefinition",
            "src": "7949:149:38",
            "nodes": [],
            "body": {
              "id": 34584,
              "nodeType": "Block",
              "src": "8042:56:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 34577,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "8059:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34579,
                        "indexExpression": {
                          "id": 34578,
                          "name": "nameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34570,
                          "src": "8066:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "8059:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34580,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8074:10:38",
                      "memberName": "subdomains",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33959,
                      "src": "8059:25:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34582,
                    "indexExpression": {
                      "id": 34581,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34572,
                      "src": "8085:5:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "8059:32:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34576,
                  "id": 34583,
                  "nodeType": "Return",
                  "src": "8052:39:38"
                }
              ]
            },
            "functionSelector": "8117af2b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "subdomainIndex",
            "nameLocation": "7958:14:38",
            "parameters": {
              "id": 34573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34570,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "7981:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34585,
                  "src": "7973:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34569,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7973:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34572,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "7997:5:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34585,
                  "src": "7989:13:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34571,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7989:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7972:31:38"
            },
            "returnParameters": {
              "id": 34576,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34575,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34585,
                  "src": "8033:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34574,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8033:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8032:9:38"
            },
            "scope": 34758,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34601,
            "nodeType": "FunctionDefinition",
            "src": "8104:160:38",
            "nodes": [],
            "body": {
              "id": 34600,
              "nodeType": "Block",
              "src": "8212:52:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "baseExpression": {
                        "id": 34595,
                        "name": "_names",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33972,
                        "src": "8229:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                          "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                        }
                      },
                      "id": 34597,
                      "indexExpression": {
                        "id": 34596,
                        "name": "nameID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34587,
                        "src": "8236:6:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "8229:14:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Name_$33960_storage",
                        "typeString": "struct Woolball.Name storage ref"
                      }
                    },
                    "id": 34598,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "8244:13:38",
                    "memberName": "creatorNameID",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 33943,
                    "src": "8229:28:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34594,
                  "id": 34599,
                  "nodeType": "Return",
                  "src": "8222:35:38"
                }
              ]
            },
            "functionSelector": "7aadccdb",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 34590,
                    "name": "nameID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34587,
                    "src": "8178:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 34591,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 34589,
                  "name": "isSubname",
                  "nameLocations": [
                    "8168:9:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 34058,
                  "src": "8168:9:38"
                },
                "nodeType": "ModifierInvocation",
                "src": "8168:17:38"
              }
            ],
            "name": "parentID",
            "nameLocation": "8113:17:38",
            "parameters": {
              "id": 34588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34587,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "8139:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34601,
                  "src": "8131:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34586,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8131:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8130:16:38"
            },
            "returnParameters": {
              "id": 34594,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34593,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34601,
                  "src": "8199:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34592,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8199:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8198:9:38"
            },
            "scope": 34758,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34616,
            "nodeType": "FunctionDefinition",
            "src": "8270:148:38",
            "nodes": [],
            "body": {
              "id": 34615,
              "nodeType": "Block",
              "src": "8353:65:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "expression": {
                          "baseExpression": {
                            "id": 34608,
                            "name": "_names",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33972,
                            "src": "8370:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                              "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                            }
                          },
                          "id": 34610,
                          "indexExpression": {
                            "id": 34609,
                            "name": "nameID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34603,
                            "src": "8377:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "8370:14:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Name_$33960_storage",
                            "typeString": "struct Woolball.Name storage ref"
                          }
                        },
                        "id": 34611,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8385:5:38",
                        "memberName": "links",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 33956,
                        "src": "8370:20:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Links_$33967_storage",
                          "typeString": "struct Woolball.Links storage ref"
                        }
                      },
                      "id": 34612,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8391:13:38",
                      "memberName": "incomingLinks",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33966,
                      "src": "8370:34:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34613,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "8405:6:38",
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "src": "8370:41:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34607,
                  "id": 34614,
                  "nodeType": "Return",
                  "src": "8363:48:38"
                }
              ]
            },
            "functionSelector": "692c85ab",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "linksAmountIncoming",
            "nameLocation": "8279:19:38",
            "parameters": {
              "id": 34604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34603,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "8307:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34616,
                  "src": "8299:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34602,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8299:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8298:16:38"
            },
            "returnParameters": {
              "id": 34607,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34606,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34616,
                  "src": "8344:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34605,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8344:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8343:9:38"
            },
            "scope": 34758,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34631,
            "nodeType": "FunctionDefinition",
            "src": "8424:148:38",
            "nodes": [],
            "body": {
              "id": 34630,
              "nodeType": "Block",
              "src": "8507:65:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "expression": {
                          "baseExpression": {
                            "id": 34623,
                            "name": "_names",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33972,
                            "src": "8524:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                              "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                            }
                          },
                          "id": 34625,
                          "indexExpression": {
                            "id": 34624,
                            "name": "nameID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34618,
                            "src": "8531:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "8524:14:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Name_$33960_storage",
                            "typeString": "struct Woolball.Name storage ref"
                          }
                        },
                        "id": 34626,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8539:5:38",
                        "memberName": "links",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 33956,
                        "src": "8524:20:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Links_$33967_storage",
                          "typeString": "struct Woolball.Links storage ref"
                        }
                      },
                      "id": 34627,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8545:13:38",
                      "memberName": "outgoingLinks",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33963,
                      "src": "8524:34:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34628,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "8559:6:38",
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "src": "8524:41:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34622,
                  "id": 34629,
                  "nodeType": "Return",
                  "src": "8517:48:38"
                }
              ]
            },
            "functionSelector": "5d57bf7c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "linksAmountOutgoing",
            "nameLocation": "8433:19:38",
            "parameters": {
              "id": 34619,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34618,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "8461:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34631,
                  "src": "8453:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34617,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8453:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8452:16:38"
            },
            "returnParameters": {
              "id": 34622,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34621,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34631,
                  "src": "8498:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34620,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8498:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8497:9:38"
            },
            "scope": 34758,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34649,
            "nodeType": "FunctionDefinition",
            "src": "8578:161:38",
            "nodes": [],
            "body": {
              "id": 34648,
              "nodeType": "Block",
              "src": "8674:65:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "expression": {
                          "baseExpression": {
                            "id": 34640,
                            "name": "_names",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33972,
                            "src": "8691:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                              "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                            }
                          },
                          "id": 34642,
                          "indexExpression": {
                            "id": 34641,
                            "name": "nameID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34633,
                            "src": "8698:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "8691:14:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Name_$33960_storage",
                            "typeString": "struct Woolball.Name storage ref"
                          }
                        },
                        "id": 34643,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8706:5:38",
                        "memberName": "links",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 33956,
                        "src": "8691:20:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Links_$33967_storage",
                          "typeString": "struct Woolball.Links storage ref"
                        }
                      },
                      "id": 34644,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8712:13:38",
                      "memberName": "incomingLinks",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33966,
                      "src": "8691:34:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34646,
                    "indexExpression": {
                      "id": 34645,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34635,
                      "src": "8726:5:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "8691:41:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34639,
                  "id": 34647,
                  "nodeType": "Return",
                  "src": "8684:48:38"
                }
              ]
            },
            "functionSelector": "a6ed7ada",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "incomingLinkIndex",
            "nameLocation": "8587:17:38",
            "parameters": {
              "id": 34636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34633,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "8613:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34649,
                  "src": "8605:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34632,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8605:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34635,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "8629:5:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34649,
                  "src": "8621:13:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34634,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8621:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8604:31:38"
            },
            "returnParameters": {
              "id": 34639,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34638,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34649,
                  "src": "8665:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34637,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8665:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8664:9:38"
            },
            "scope": 34758,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34667,
            "nodeType": "FunctionDefinition",
            "src": "8745:161:38",
            "nodes": [],
            "body": {
              "id": 34666,
              "nodeType": "Block",
              "src": "8841:65:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "baseExpression": {
                      "expression": {
                        "expression": {
                          "baseExpression": {
                            "id": 34658,
                            "name": "_names",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33972,
                            "src": "8858:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                              "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                            }
                          },
                          "id": 34660,
                          "indexExpression": {
                            "id": 34659,
                            "name": "nameID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34651,
                            "src": "8865:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "8858:14:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Name_$33960_storage",
                            "typeString": "struct Woolball.Name storage ref"
                          }
                        },
                        "id": 34661,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8873:5:38",
                        "memberName": "links",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 33956,
                        "src": "8858:20:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Links_$33967_storage",
                          "typeString": "struct Woolball.Links storage ref"
                        }
                      },
                      "id": 34662,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8879:13:38",
                      "memberName": "outgoingLinks",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33963,
                      "src": "8858:34:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "id": 34664,
                    "indexExpression": {
                      "id": 34663,
                      "name": "index",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34653,
                      "src": "8893:5:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "8858:41:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 34657,
                  "id": 34665,
                  "nodeType": "Return",
                  "src": "8851:48:38"
                }
              ]
            },
            "functionSelector": "80d27330",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "outgoingLinkIndex",
            "nameLocation": "8754:17:38",
            "parameters": {
              "id": 34654,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34651,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "8780:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34667,
                  "src": "8772:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34650,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8772:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34653,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "8796:5:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34667,
                  "src": "8788:13:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34652,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8788:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8771:31:38"
            },
            "returnParameters": {
              "id": 34657,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34656,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34667,
                  "src": "8832:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34655,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8832:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8831:9:38"
            },
            "scope": 34758,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34690,
            "nodeType": "FunctionDefinition",
            "src": "8912:181:38",
            "nodes": [],
            "body": {
              "id": 34689,
              "nodeType": "Block",
              "src": "9014:79:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "expression": {
                          "baseExpression": {
                            "id": 34679,
                            "name": "_names",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33972,
                            "src": "9032:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                              "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                            }
                          },
                          "id": 34681,
                          "indexExpression": {
                            "id": 34680,
                            "name": "nameID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34669,
                            "src": "9039:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "9032:14:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Name_$33960_storage",
                            "typeString": "struct Woolball.Name storage ref"
                          }
                        },
                        "id": 34682,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9047:13:38",
                        "memberName": "creatorNameID",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 33943,
                        "src": "9032:28:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "baseExpression": {
                            "id": 34683,
                            "name": "_names",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33972,
                            "src": "9062:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                              "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                            }
                          },
                          "id": 34685,
                          "indexExpression": {
                            "id": 34684,
                            "name": "nameID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34669,
                            "src": "9069:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "9062:14:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Name_$33960_storage",
                            "typeString": "struct Woolball.Name storage ref"
                          }
                        },
                        "id": 34686,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9077:8:38",
                        "memberName": "linkToID",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 33953,
                        "src": "9062:23:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 34687,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "9031:55:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 34678,
                  "id": 34688,
                  "nodeType": "Return",
                  "src": "9024:62:38"
                }
              ]
            },
            "functionSelector": "515f8566",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 34672,
                    "name": "nameID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 34669,
                    "src": "8971:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 34673,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 34671,
                  "name": "isLink",
                  "nameLocations": [
                    "8964:6:38"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 34075,
                  "src": "8964:6:38"
                },
                "nodeType": "ModifierInvocation",
                "src": "8964:14:38"
              }
            ],
            "name": "linkTo",
            "nameLocation": "8921:6:38",
            "parameters": {
              "id": 34670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34669,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "8936:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34690,
                  "src": "8928:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34668,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8928:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8927:16:38"
            },
            "returnParameters": {
              "id": 34678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34675,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34690,
                  "src": "8992:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34674,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8992:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34677,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34690,
                  "src": "9001:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34676,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9001:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8991:18:38"
            },
            "scope": 34758,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34706,
            "nodeType": "FunctionDefinition",
            "src": "9129:127:38",
            "nodes": [],
            "body": {
              "id": 34705,
              "nodeType": "Block",
              "src": "9202:54:38",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "baseExpression": {
                            "id": 34699,
                            "name": "_names",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 33972,
                            "src": "9225:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                              "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                            }
                          },
                          "id": 34701,
                          "indexExpression": {
                            "id": 34700,
                            "name": "nameID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34692,
                            "src": "9232:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "9225:14:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Name_$33960_storage",
                            "typeString": "struct Woolball.Name storage ref"
                          }
                        },
                        "id": 34702,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9240:8:38",
                        "memberName": "nameType",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 33937,
                        "src": "9225:23:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_NameType_$33932",
                          "typeString": "enum Woolball.NameType"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_NameType_$33932",
                          "typeString": "enum Woolball.NameType"
                        }
                      ],
                      "id": 34698,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "9219:5:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint8_$",
                        "typeString": "type(uint8)"
                      },
                      "typeName": {
                        "id": 34697,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "9219:5:38",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 34703,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9219:30:38",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 34696,
                  "id": 34704,
                  "nodeType": "Return",
                  "src": "9212:37:38"
                }
              ]
            },
            "functionSelector": "0ae5fa41",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getNameType",
            "nameLocation": "9138:11:38",
            "parameters": {
              "id": 34693,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34692,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "9158:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34706,
                  "src": "9150:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34691,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9150:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9149:16:38"
            },
            "returnParameters": {
              "id": 34696,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34695,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34706,
                  "src": "9195:5:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 34694,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "9195:5:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9194:7:38"
            },
            "scope": 34758,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 34757,
            "nodeType": "FunctionDefinition",
            "src": "9424:379:38",
            "nodes": [],
            "body": {
              "id": 34756,
              "nodeType": "Block",
              "src": "9493:310:38",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_enum$_NameType_$33932",
                      "typeString": "enum Woolball.NameType"
                    },
                    "id": 34719,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 34713,
                          "name": "_names",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 33972,
                          "src": "9507:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                            "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                          }
                        },
                        "id": 34715,
                        "indexExpression": {
                          "id": 34714,
                          "name": "nameID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34708,
                          "src": "9514:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "9507:14:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Name_$33960_storage",
                          "typeString": "struct Woolball.Name storage ref"
                        }
                      },
                      "id": 34716,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9522:8:38",
                      "memberName": "nameType",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33937,
                      "src": "9507:23:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_NameType_$33932",
                        "typeString": "enum Woolball.NameType"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "expression": {
                        "id": 34717,
                        "name": "NameType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33932,
                        "src": "9534:8:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_NameType_$33932_$",
                          "typeString": "type(enum Woolball.NameType)"
                        }
                      },
                      "id": 34718,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberLocation": "9543:4:38",
                      "memberName": "LINK",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 33931,
                      "src": "9534:13:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_NameType_$33932",
                        "typeString": "enum Woolball.NameType"
                      }
                    },
                    "src": "9507:40:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 34754,
                    "nodeType": "Block",
                    "src": "9746:51:38",
                    "statements": [
                      {
                        "expression": {
                          "expression": {
                            "baseExpression": {
                              "id": 34749,
                              "name": "_names",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33972,
                              "src": "9767:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                              }
                            },
                            "id": 34751,
                            "indexExpression": {
                              "id": 34750,
                              "name": "nameID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34708,
                              "src": "9774:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "9767:14:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Name_$33960_storage",
                              "typeString": "struct Woolball.Name storage ref"
                            }
                          },
                          "id": 34752,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9782:4:38",
                          "memberName": "name",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33934,
                          "src": "9767:19:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "functionReturnParameters": 34712,
                        "id": 34753,
                        "nodeType": "Return",
                        "src": "9760:26:38"
                      }
                    ]
                  },
                  "id": 34755,
                  "nodeType": "IfStatement",
                  "src": "9503:294:38",
                  "trueBody": {
                    "id": 34748,
                    "nodeType": "Block",
                    "src": "9549:191:38",
                    "statements": [
                      {
                        "assignments": [
                          34721
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 34721,
                            "mutability": "mutable",
                            "name": "from",
                            "nameLocation": "9571:4:38",
                            "nodeType": "VariableDeclaration",
                            "scope": 34748,
                            "src": "9563:12:38",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 34720,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "9563:7:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 34726,
                        "initialValue": {
                          "expression": {
                            "baseExpression": {
                              "id": 34722,
                              "name": "_names",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33972,
                              "src": "9578:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                              }
                            },
                            "id": 34724,
                            "indexExpression": {
                              "id": 34723,
                              "name": "nameID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34708,
                              "src": "9585:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "9578:14:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Name_$33960_storage",
                              "typeString": "struct Woolball.Name storage ref"
                            }
                          },
                          "id": 34725,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9593:13:38",
                          "memberName": "creatorNameID",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33943,
                          "src": "9578:28:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "9563:43:38"
                      },
                      {
                        "assignments": [
                          34728
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 34728,
                            "mutability": "mutable",
                            "name": "to",
                            "nameLocation": "9628:2:38",
                            "nodeType": "VariableDeclaration",
                            "scope": 34748,
                            "src": "9620:10:38",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 34727,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "9620:7:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 34733,
                        "initialValue": {
                          "expression": {
                            "baseExpression": {
                              "id": 34729,
                              "name": "_names",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 33972,
                              "src": "9633:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                              }
                            },
                            "id": 34731,
                            "indexExpression": {
                              "id": 34730,
                              "name": "nameID",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34708,
                              "src": "9640:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "9633:14:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Name_$33960_storage",
                              "typeString": "struct Woolball.Name storage ref"
                            }
                          },
                          "id": 34732,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9648:8:38",
                          "memberName": "linkToID",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 33953,
                          "src": "9633:23:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "9620:36:38"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "baseExpression": {
                                  "id": 34737,
                                  "name": "_names",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 33972,
                                  "src": "9691:6:38",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                    "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                                  }
                                },
                                "id": 34739,
                                "indexExpression": {
                                  "id": 34738,
                                  "name": "from",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 34721,
                                  "src": "9698:4:38",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "9691:12:38",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Name_$33960_storage",
                                  "typeString": "struct Woolball.Name storage ref"
                                }
                              },
                              "id": 34740,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9704:4:38",
                              "memberName": "name",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 33934,
                              "src": "9691:17:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_storage",
                                "typeString": "string storage ref"
                              }
                            },
                            {
                              "hexValue": "23",
                              "id": 34741,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "9709:3:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_ace738c68088218d015fbdce138f062893d86818ac98932f7ce2907c5976fbde",
                                "typeString": "literal_string \"#\""
                              },
                              "value": "#"
                            },
                            {
                              "expression": {
                                "baseExpression": {
                                  "id": 34742,
                                  "name": "_names",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 33972,
                                  "src": "9713:6:38",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Name_$33960_storage_$",
                                    "typeString": "mapping(uint256 => struct Woolball.Name storage ref)"
                                  }
                                },
                                "id": 34744,
                                "indexExpression": {
                                  "id": 34743,
                                  "name": "to",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 34728,
                                  "src": "9720:2:38",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "9713:10:38",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Name_$33960_storage",
                                  "typeString": "struct Woolball.Name storage ref"
                                }
                              },
                              "id": 34745,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9724:4:38",
                              "memberName": "name",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 33934,
                              "src": "9713:15:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_storage",
                                "typeString": "string storage ref"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_storage",
                                "typeString": "string storage ref"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_ace738c68088218d015fbdce138f062893d86818ac98932f7ce2907c5976fbde",
                                "typeString": "literal_string \"#\""
                              },
                              {
                                "typeIdentifier": "t_string_storage",
                                "typeString": "string storage ref"
                              }
                            ],
                            "expression": {
                              "id": 34735,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "9677:6:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                "typeString": "type(string storage pointer)"
                              },
                              "typeName": {
                                "id": 34734,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "9677:6:38",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 34736,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9684:6:38",
                            "memberName": "concat",
                            "nodeType": "MemberAccess",
                            "src": "9677:13:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_stringconcat_pure$__$returns$_t_string_memory_ptr_$",
                              "typeString": "function () pure returns (string memory)"
                            }
                          },
                          "id": 34746,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9677:52:38",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "functionReturnParameters": 34712,
                        "id": 34747,
                        "nodeType": "Return",
                        "src": "9670:59:38"
                      }
                    ]
                  }
                }
              ]
            },
            "functionSelector": "6b8ff574",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getName",
            "nameLocation": "9433:7:38",
            "parameters": {
              "id": 34709,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34708,
                  "mutability": "mutable",
                  "name": "nameID",
                  "nameLocation": "9449:6:38",
                  "nodeType": "VariableDeclaration",
                  "scope": 34757,
                  "src": "9441:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34707,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9441:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9440:16:38"
            },
            "returnParameters": {
              "id": 34712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34711,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 34757,
                  "src": "9478:13:38",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34710,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9478:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9477:15:38"
            },
            "scope": 34758,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 33921,
              "name": "IWoolball",
              "nameLocations": [
                "334:9:38"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 35534,
              "src": "334:9:38"
            },
            "id": 33922,
            "nodeType": "InheritanceSpecifier",
            "src": "334:9:38"
          },
          {
            "baseName": {
              "id": 33923,
              "name": "LCT",
              "nameLocations": [
                "345:3:38"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 33723,
              "src": "345:3:38"
            },
            "id": 33924,
            "nodeType": "InheritanceSpecifier",
            "src": "345:3:38"
          },
          {
            "baseName": {
              "id": 33925,
              "name": "Ownable",
              "nameLocations": [
                "350:7:38"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 29479,
              "src": "350:7:38"
            },
            "id": 33926,
            "nodeType": "InheritanceSpecifier",
            "src": "350:7:38"
          }
        ],
        "canonicalName": "Woolball",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 33920,
          "nodeType": "StructuredDocumentation",
          "src": "235:77:38",
          "text": " @dev Woolball Registry contract\n @dev A decentralized ID system "
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          34758,
          29479,
          33723,
          35237,
          29504,
          30599,
          30434,
          30626,
          35487,
          35414,
          35534,
          30550,
          31231,
          31243,
          30978
        ],
        "name": "Woolball",
        "nameLocation": "322:8:38",
        "scope": 34759,
        "usedErrors": [],
        "usedEvents": [
          29380,
          29496,
          29503,
          30449,
          30458,
          30467,
          35252,
          35261,
          35429,
          35434,
          35502,
          35511,
          35520
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 38
};

export default WoolballABI;