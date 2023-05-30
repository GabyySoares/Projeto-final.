import "./DeleteCustomer.css";
import React, { useState } from "react";
import Web3 from "web3";
import NavBar from "../../NavBar";
import { abi, myWallet, myPrvKey, contractAddress, ipBlockChain } from "../constants.js";

function DeleteCustomer() {
  const [id, setId] = useState(0);

  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setTelefone] = useState('');
  const [age, setIdade] = useState('');

  const [customers, setCustomers] = useState([]);

  const web3 = new Web3(ipBlockChain);

;
  async function deleteCustomer() {
    console.log("Iniciando -> deleteCustomer");
    let contrato = new web3.eth.Contract(abi, contractAddress);
    let receipt = await contrato.methods.deleteCustomer(id).send({ from: myWallet, gas: 3000000 });
    console.log(receipt);
    setId('')
    setNome('');
    setEmail('');
    setTelefone('');
    setIdade('');
  }

  return (
    <NavBar />,
    <div className="CreateContract">
      <header className="CreateContract-header">
        
        <h2>Escolher Um Cliente</h2>
        <label>
          Id:
          <input type="number" value={id} onChange={(event) => setId(event.target.value)} />
        </label>
        <br />
        <button onClick={deleteCustomer}>deleteCustomer</button><br></br>

      </header>
    </div>
  );
}

export default DeleteCustomer;
