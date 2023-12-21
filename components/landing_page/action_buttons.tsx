import { Flex, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useContext } from 'react';
import { ethers } from "ethers";
import "@ethersproject/shims"; // shims protecting ethers.js security
import { Web3Context } from "contexts/web3";
import { DISCORD_LINK } from '../constants/social_profiles'

export default function ActionButtons(props) {
  const {
    web3Signer,
    woolballManagerContract,
    walletOwnedName
  } = useContext(Web3Context);

  async function handleNewName() {
    const walletAddress = await web3Signer.getAddress();

    const newNameTx = await woolballManagerContract.registerName(props.name, ethers.ZeroAddress);
    await newNameTx.wait();
  }

  return (
    <Flex
      flex={1}
      justify={{ base: 'center', md: 'left' }}
      w={'100%'}
      direction={'row'}
    >
        <Button
          onClick={handleNewName}
          rounded={'full'}
          size={'lg'}
          fontWeight={'bold'}
          colorScheme={'red'}
          bg={'woolball.400'}
          _hover={{ bg: 'woolball.500' }}
          px={{ base: 6, md: 16, sm: 8 }}
          shadow={'sm'}
        >
          Register ID
        </Button>
    </Flex>
  )
}

function timestampNextyear() {
  // Get the current date
  const currentDate = new Date();

  // Add one year to the current date
  const nextYearDate = new Date(currentDate);
  nextYearDate.setFullYear(currentDate.getFullYear() + 1);

  // Get the Unix timestamp of the date one year from now
  const timestampOneYearFromNow = Math.floor(nextYearDate.getTime() / 1000);

  return timestampOneYearFromNow;
}
