import "./GetAllCustomers.css";
import React, { useState } from "react";
import Web3 from "web3";
import NavBar from "../../NavBar";
import { abi, myWallet, myPrvKey, contractAddress, ipBlockChain ,useCustomerState} from "../constants.js";

function GetAllCustomers() {
  const { id, setId, name, setNome, email, setEmail, phone, setTelefone, age, setIdade, customers, setCustomers, web3 } = useCustomerState();


  async function getAllCustomers() {
    console.log("Iniciando -> getAllCustomers");
    let contrato = new web3.eth.Contract(abi, contractAddress);
    let receipt = await contrato.methods.getAllCustomers().call();
    setCustomers(receipt);
    console.log(receipt);
  };

  return (
    <NavBar />,
    <div className="CreateContract">
      <header className="CreateContract-header">
        <h2>Trazer Clientes!</h2>
        <button onClick={getAllCustomers}>getAllCustomers</button><br></br>
        <h3>Lista de Clientes</h3>
        <ul>
          {customers.map((customer, index) => (
            <li key={index}>
              Id: {customer.id}<br></br>Nome: {customer.name}<br></br> Email: {customer.email}<br></br> Telefone: {customer.phone}<br></br> Idade: {customer.age}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default GetAllCustomers;
