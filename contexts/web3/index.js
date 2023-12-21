/* global BigInt */

import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import "@ethersproject/shims" // shims protecting ethers.js security
import WoolballABI from "../../ABIs/WoolballABI.js";
import WoolballManagerABI from "../../ABIs/WoolballManagerABI.js";

// Web3 context to manage Ethereum-related state
export const Web3Context = createContext({
  web3Provider: null,       // Current Ethereum provider
  setWeb3Provider: null,    // Function to set the Ethereum provider
  web3Signer: null,         // Current Ethereum signer (in case of connected wallet)
  setWeb3Signer: null,      // Function to set the Ethereum signer
  woolballContract: null,   // Woolball Smart contract
  woolballManagerContract: null,   // Woolball Smart contract
  walletOwnedName: null,    // Name owned by the connected wallet
})

export const Web3 = ({ children }) => {
    // Web3 provider
    const [web3Provider, setWeb3Provider] = useState(null);
    
    // Web3 signer
    const [web3Signer, setWeb3Signer] = useState(null);

    // Smart contract holding the IDs
    const [woolballContract, setWoolballContract] = useState(null);

    // Smart contract managing registration and transfer of IDs
    const [woolballManagerContract, setWoolballManagerContract] = useState(null);

    // Which name, if any, this wallet holds?
    const [walletOwnedName, setWalletOwnedName]  = useState(null);

    const value = {
      web3Provider, setWeb3Provider, web3Signer, setWeb3Signer, 
      woolballContract, woolballManagerContract, walletOwnedName 
    };

    /**
     * Effect to initialize state variables
     */
    useEffect(() => {
        async function setWeb3() {
            // Set Web3 Provider
            var NewWeb3Provider = null;

            // Check for a wallet provider
            if (typeof window.ethereum !== 'undefined') { 
              // Check if the wallet provider on the right chain
              let chainId = await window.ethereum.request({ method: 'eth_chainId' });

              if (chainId === process.env.NEXT_PUBLIC_CHAIN_ID) {
                // Check for connected accounts
                NewWeb3Provider = new ethers.BrowserProvider(window.ethereum);
                const connectedAccountsArray = await NewWeb3Provider.listAccounts();

                // Set both provider and signer in case of connected accounts
                if (connectedAccountsArray.length > 0) {
                  const newWeb3Signer = await NewWeb3Provider.getSigner();
                  setWeb3Provider(NewWeb3Provider);
                  setWeb3Signer(newWeb3Signer);
                }
              } 
            } 

            // Set default provider if there was no browser wallet
            if (NewWeb3Provider == null) {
              NewWeb3Provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_CHAIN_RPC_URLS)
              setWeb3Provider(NewWeb3Provider);
            }

            // Set Woolbal contract object
            const woolballContractAddress = process.env.NEXT_PUBLIC_WOOLBALL_ADDRESS;
            const woolballContractAbi = WoolballABI.abi;
            var newWoolballContract = new ethers.Contract(woolballContractAddress, woolballContractAbi, NewWeb3Provider);
            setWoolballContract(newWoolballContract);

            const woolballManagerContractAddress = process.env.NEXT_PUBLIC_WOOLBALL_MANAGER_ADDRESS;
            const woolballManagerContractAbi = WoolballManagerABI.abi;
            var newWoolballManagerContract = new ethers.Contract(woolballManagerContractAddress, woolballManagerContractAbi, NewWeb3Provider);
            setWoolballManagerContract(newWoolballManagerContract);
        }
    setWeb3();
    }, []);    

    /**
     * Effect to fetch the name and profile of a connected wallet
     */
    useEffect(() => {
        async function fetchDataOfWallet(newWoolballContract) {
          let wallet = await web3Signer.getAddress();

          // how many names does the profile own?
          let amountOfNamesOwned = await newWoolballContract.balanceOf(wallet);
          amountOfNamesOwned = ethers.formatUnits(amountOfNamesOwned, 0);

          console.log("amountOfNamesOwned: ", amountOfNamesOwned);
          
          // Iterate owned name till we reach the first base name
          for (let i=0; i < amountOfNamesOwned; i++) {
            const walletOwnedNameID = await newWoolballContract.tokenOfOwnerByIndex(wallet, i);
            const fetchedWalletOwnedName = await newWoolballContract.getName(walletOwnedNameID);
            console.log("fetchedWalletOwnedName: ", fetchedWalletOwnedName);
            let fetchedWalletOwnedNameType = await newWoolballContract.getNameType(walletOwnedNameID);
            fetchedWalletOwnedNameType = ethers.formatUnits(fetchedWalletOwnedNameType, 0);

            // name type 1 means it's a base name
            if (fetchedWalletOwnedNameType == 1) {
              setWalletOwnedName(fetchedWalletOwnedName);
              break;
            }
          }

        }

        // Create Woolball contract object again, since web3Provider or web3Signer were changed
        // const woolballContractAddress = WoolballABI.address;
        const woolballContractAddress = process.env.NEXT_PUBLIC_WOOLBALL_ADDRESS;
        let woolballContractAbi = WoolballABI.abi;

        const woolballManagerContractAddress = process.env.NEXT_PUBLIC_WOOLBALL_MANAGER_ADDRESS;
        const woolballManagerContractAbi = WoolballManagerABI.abi;

        var newWoolballContract, newWoolballManagerContract;
        if (web3Provider !== null) {
          if (web3Signer === null) {
              newWoolballContract = new ethers.Contract(woolballContractAddress, woolballContractAbi, web3Provider);
              newWoolballManagerContract = new ethers.Contract(woolballManagerContractAddress, woolballManagerContractAbi, web3Provider);
          } else {
              newWoolballContract = new ethers.Contract(woolballContractAddress, woolballContractAbi, web3Signer);
              var newWoolballManagerContract = new ethers.Contract(woolballManagerContractAddress, woolballManagerContractAbi, web3Signer);

              fetchDataOfWallet(newWoolballContract);
            }
        }

        setWoolballContract(newWoolballContract);
        setWoolballManagerContract(newWoolballManagerContract);

    }, [web3Provider, web3Signer])

    return (
        <Web3Context.Provider
            value={value}>
            {children}
        </Web3Context.Provider>
    )
}