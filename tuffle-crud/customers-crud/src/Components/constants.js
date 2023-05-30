import { useState } from 'react';
import Web3 from 'web3';

export const abi = [ { "inputs": [ { "internalType": "uint32", "name": "", "type": "uint32" } ], "name": "customers", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "string", "name": "phone", "type": "string" }, { "internalType": "uint256", "name": "age", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "finalCount", "outputs": [ { "internalType": "uint32", "name": "", "type": "uint32" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [ { "components": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "string", "name": "phone", "type": "string" }, { "internalType": "uint256", "name": "age", "type": "uint256" } ], "internalType": "struct StoreCustomers.Customer", "name": "newCustomer", "type": "tuple" } ], "name": "addCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint32", "name": "_id", "type": "uint32" } ], "name": "getCustomer", "outputs": [ { "components": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "string", "name": "phone", "type": "string" }, { "internalType": "uint256", "name": "age", "type": "uint256" } ], "internalType": "struct StoreCustomers.Customer", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "getAllCustomers", "outputs": [ { "components": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "string", "name": "phone", "type": "string" }, { "internalType": "uint256", "name": "age", "type": "uint256" } ], "internalType": "struct StoreCustomers.Customer[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [ { "internalType": "uint32", "name": "_id", "type": "uint32" }, { "components": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "email", "type": "string" }, { "internalType": "string", "name": "phone", "type": "string" }, { "internalType": "uint256", "name": "age", "type": "uint256" } ], "internalType": "struct StoreCustomers.Customer", "name": "customer", "type": "tuple" } ], "name": "updateCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint32", "name": "_id", "type": "uint32" } ], "name": "deleteCustomer", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ];

export const myWallet = "0x30C3C7c9b824fDf362012A883FE83c45524Db94F";

export const myPrvKey = "0x25a40932ddf227fe297e687525da5d9b6bcf8a6b321c4f784ce84e542c51a1d8";

export const contractAddress = "0xcA478bFb80f7Ce8dcf565b298B3CE08Be8afa5A6";

export const ipBlockChain = "http://127.0.0.1:7545";

export const useCustomerState = () => {
  const [id, setId] = useState(0);
  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setTelefone] = useState('');
  const [age, setIdade] = useState('');
  const [customers, setCustomers] = useState([]);

  return { id, setId, name, setNome, email, setEmail, phone, setTelefone, age, setIdade, customers, setCustomers, web3 };
};