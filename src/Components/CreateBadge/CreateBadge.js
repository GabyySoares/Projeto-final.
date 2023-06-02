import "./CreateBadge.css";
import React, {useState} from "react";
import Web3 from "web3";
import NavBar from "../../NavBar";
import {ipBlockChain, useCustomerState} from "../constants";

const axios = require('axios');
const baseUrl = 'http://localhost:8080/badge';

function CreateBadge() {
    const {
        id,
        setId,
        badgeName,
        setBadgeName,
        badgeDescription,
        setBadgeDescription,
        badgeAddress,
        setBadgeAddress,
        imageUrl,
        setImageUrl
    } = useCustomerState();
    const web3 = new Web3(ipBlockChain);

    async function createCustomer() {
        // CREATE
        try {
            const response = await axios.post('http://localhost:8080/badge/', {
                badgeAddress,
                badgeName,
                badgeDescription,
                imageUrl
            });
            setId(response.data.id);
            setBadgeName(response.data.badgeName);
            setBadgeDescription(response.data.badgeDescription);
            setBadgeAddress(response.data.badgeAddress);
            setImageUrl(response.data.imageUrl);
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <NavBar/>,
            <div className="CreateContract">
                <header className="CreateContract-header">

                    <h2>Cadastrar um Badge</h2>
                    <label>
                        Address para onde o Badge será Mintado:
                        <input type="text" value={badgeName} onChange={(event) => setBadgeName(event.target.value)}/>
                    </label>
                    <label>
                        Nome do Badge:
                        <input type="text" value={badgeName} onChange={(event) => setBadgeName(event.target.value)}/>
                    </label>
                    <label>
                        Descricao do Badge:
                        <input type="text" value={badgeName}
                               onChange={(event) => setBadgeDescription(event.target.value)}/>
                    </label>
                    <label>
                        HashId do Badge:
                        <input type="text" value={badgeName} onChange={(event) => setBadgeName(event.target.value)}/>
                    </label>
                    <button onClick={createCustomer}>createCustomer</button>
                    <br></br>

                </header>
            </div>
    );
}

export default CreateBadge;
