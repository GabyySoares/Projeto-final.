import "./GetBadgeById.css";
import React, {useState} from "react";
import Web3 from "web3";
import NavBar from "../../NavBar";
import {abi, myWallet, myPrvKey, contractAddress, ipBlockChain, useCustomerState} from "../constants.js";
import axios from "axios";

function GetBadgeById() {
    const {id, setId, badgeName, setBadgeName, badgeDescription, setBadgeDescription, badgeAddress, setBadgeAddress, setImageUrl, imageUrl} = useCustomerState();

    const web3 = new Web3(ipBlockChain);

    async function getBadge() {
        console.log("Iniciando -> getBadgeById");

        try {
            const response = await axios.get(`http://localhost:8080/badge/${id}`);
            setId(response.data.data.id);
            setBadgeName(response.data.data.name);
            setBadgeDescription(response.data.data.description);
            setBadgeAddress(response.data.data.owner);
            setImageUrl(response.data.data.image);
        } catch (error) {
            console.error('Erro:', error);
        }

    };

    return (
        <NavBar/>,
            <div className="CreateContract">
                <header className="CreateContract-header">
                    <h2>Escolher Um Badge</h2>
                    <label>
                        Id:
                        <input type="number" value={id} onChange={(event) => setId(event.target.value)} />
                    </label>
                    <br/>
                    <button onClick={getBadge}>getCustomer</button>
                    <br></br>
                    <label>
                        Nome do Badge:
                        <input type="text" value={badgeName} onChange={(event) => badgeName(event.target.value)} />
                    </label>
                    <br/>
                    <label>
                        Descricao Do Badge:
                        <input type="text" value={badgeDescription} onChange={(event) => badgeDescription(event.target.value)} />
                    </label>
                    <br/>
                    <label>
                        Endereco do Dono do Badge:
                        <input type="text" value={badgeAddress} onChange={(event) => badgeAddress(event.target.value)} />
                    </label>
                    <br/>
                    <label>
                        Imagem do Badge:
                        <input type="text" value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} /> <br></br>
                        <img src={imageUrl} alt="" />
                    </label>
                    <br/>
                </header>
            </div>
    );
}

export default GetBadgeById;
