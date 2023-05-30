import { useState } from 'react';
import Web3 from 'web3';

export const abi = [];

export const myWallet = "0xC9B2ABC2De3759A1c54639A389B6786aE1A284D4";

export const myPrvKey = "0x2e9cd6e1524e56858f35a06a3ec439c8cb07376b24a7fa8e878cee955fe6bb08";

export const contractAddress = "0x0274132B70F983748c236Aed272754d4E1243220";

export const ipBlockChain = "http://127.0.0.1:7545";

export const useCustomerState = () => {
  const [id, setId] = useState(0);
  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setTelefone] = useState('');
  const [age, setIdade] = useState('');
  const [customers, setCustomers] = useState([]);
  const web3 = new Web3(ipBlockChain);

  return { id, setId, name, setNome, email, setEmail, phone, setTelefone, age, setIdade, customers, setCustomers, web3 };
};