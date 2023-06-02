import "./UpdateBadgeById.css";
import React, { useState } from "react";
import Web3 from "web3";
import { abi, myWallet, myPrvKey, contractAddress, ipBlockChain, useCustomerState } from "../constants.js";

function UpdateBadgeById() {
  const { id, setId, badgeName, setBadgeName, badgeDescription, setBadgeDescription, badgeAddress, setBadgeAddress, age, setIdade, customers, setCustomers } = useCustomerState();

  const web3 = new Web3(ipBlockChain);

  async function getCustomer() {
    // console.log("Iniciando -> getCustomer");
    // let contrato = new web3.eth.Contract(abi, contractAddress);
    // let receipt = await contrato.methods.getCustomer(id).call();
    // console.log(receipt);
    // setId(receipt.id);
    // setBadgeName(receipt.name);
    // setBadgeDescription(receipt.email);
    // setBadgeAddress(receipt.phone);
    // setIdade(receipt.age);
  }
;
  async function updateCustomer() {
    // console.log("Iniciando -> updateCustomer");
    // let contrato = new web3.eth.Contract(abi, contractAddress);
    // let receipt = await contrato.methods.updateCustomer(id, { id, badgeName: badgeName, badgeAddress: badgeDescription, badgeAddress: badgeAddress, age }).send({ from: myWallet, gas: 3000000 });
    // console.log(receipt);
  }

  return (
    <div className="CreateContract">
      <header className="CreateContract-header">

        <h2>Escolher Um Cliente</h2>
        <label>
          Id:
          <input type="number" value={id} onChange={(event) => setId(event.target.value)} />
        </label>
        <br />
        <button onClick={getCustomer}>getCustomer</button><br></br>
        <h2>Cadastrar um Cliente</h2>
        <label>
          Nome:
          <input type="text" value={badgeName} onChange={(event) => setBadgeName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={badgeDescription} onChange={(event) => setBadgeDescription(event.target.value)} />
        </label>
        <br />
        <label>
          Telefone:
          <input type="text" value={badgeAddress} onChange={(event) => setBadgeAddress(event.target.value)} />
        </label>
        <br />
        <label>
          Idade:
          <input type="number" value={age} onChange={(event) => setIdade(event.target.value)} />
        </label>
        <br />
        <h2>Modificar um Cliente</h2>
        <button onClick={updateCustomer}>updateCustomer</button><br></br>

      </header>
    </div>
  );
}

export default UpdateBadgeById;
