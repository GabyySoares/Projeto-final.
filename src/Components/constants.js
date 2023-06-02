import { useState } from 'react';
import web3 from "web3";

const { CONTRACT_ABI, CONTRACT_ADDRESS, ACCOUNT_ADDRESS, BLOCKCHAIN_ADDRESS , PRIVATE_KEY } = process.env;
export const abi = CONTRACT_ABI;
export const myWallet = ACCOUNT_ADDRESS;
export const myPrvKey = PRIVATE_KEY;
export const contractAddress = CONTRACT_ADDRESS;
export const ipBlockChain = BLOCKCHAIN_ADDRESS;

export const useCustomerState = () => {
  const [id, setId] = useState(0);
  const [badgeName, setBadgeName] = useState('');
  const [badgeDescription, setBadgeDescription] = useState('');
  const [badgeAddress, setBadgeAddress] = useState('');
  const [imageUrl, setImageUrl] = useState('https://img2.gratispng.com/20171127/068/gold-seal-with-ribbon-png-clipart-image-5a1cd9d5e062a9.8623857515118402139191.jpg');

  return { id, setId,imageUrl,setImageUrl, badgeName, setBadgeName,  badgeDescription,  setBadgeDescription,  badgeAddress, setBadgeAddress, web3 };
};