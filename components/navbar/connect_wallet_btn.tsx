import { Box, Button } from '@chakra-ui/react'
import { useState, useEffect, useCallback, useContext } from 'react';
import { ethers } from "ethers";
import "@ethersproject/shims"; // shims protecting ethers.js security
import { Web3Context } from "contexts/web3";

export default function ConnectWalletBtn() {
  const [buttonText, setButtonText] = useState("Connect");

  const {
    web3Signer,
    setWeb3Provider,
    setWeb3Signer,
    walletOwnedName
  } = useContext(Web3Context);

  /**
   * Function to connect to an Ethereum wallet.
   * Checks for wallet existence and if it's on the right chain before connecting.
   */
  const connectEthWallet = useCallback(async () => {
    // Check if wallet exists
    if (typeof window.ethereum === 'undefined') {
      window.alert("No Ethereum wallet deteceted!");
      return;
    }
  
    // Check if wallet is on the right chain
    const walletChainId = await window.ethereum.request({ method: 'eth_chainId' });
    const woolballChainID = process.env.NEXT_PUBLIC_CHAIN_ID;

    if (walletChainId !== woolballChainID) {
       window.alert("Wallet is on the wrong chain!");
       return;
    }

    // if wallet exists and on the right chain, connect to wallet
    let newProvider = new ethers.BrowserProvider(window.ethereum);
    let newSigner = await newProvider.getSigner();

    // Set state variables
    setWeb3Provider(newProvider);
    setWeb3Signer(newSigner);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setWeb3Provider, walletOwnedName]);

  /**
   * Effect to set the text in case the wallet is connected
   */
  useEffect(() => {
    if (web3Signer !== null) {
      if (walletOwnedName !== null)
        setButtonText(walletOwnedName); // sets the profile ID 
      else 
        setButtonText("Connected");
    }

  }, [walletOwnedName, web3Signer]);



  return (
    <Box
      display={{ base: 'none', md: 'flex' }}
      alignItems="center"
      as="a"
      aria-label="Connect Wallet"
      target="_blank"
      rel="noopener noreferrer"
      bg={'woolball.400'}
      borderWidth="1px"
      borderColor="woolball.200"
      px="1em"
      minH="36px"
      rounded="2xl"
      fontSize="sm"
      color="white"
      outline="0"
      transition="all 0.3s"
      _hover={{
        bg: 'woolball.300',
        borderColor: 'woolball.400',
      }}
      _active={{
        borderColor: 'woolball.200',
      }}
      _focus={{
        boxShadow: 'outline',
      }}
      ml={5}
    >
      <Box as="strong" lineHeight="inherit" fontWeight="semibold" onClick={connectEthWallet}>
        {buttonText}
      </Box>
    </Box>
  )
}
