async function deployContract() {
     // Obter a fábrica do contrato "Cat" usando ethers.js
    const CAT = await ethers.getContractFactory("Cat")
      // Fazer o deploy do contrato "Cat"
    const cat = await CAT.deploy()
     // Aguardar o deploy do contrato ser concluído
    await cat.deployed()
     // Obter o hash da transação de deploy
    const txHash = cat.deployTransaction.hash
    // Aguardar a confirmação da transação
    const txReceipt = await ethers.provider.waitForTransaction(txHash)
    // Obter o endereço do contrato deployado
    const contractAddress = txReceipt.contractAddress
    // Imprimir o endereço do contrato deployado
    console.log("Contrato implantado no endereço:", contractAddress)
   }
   // Chamar a função deployContract e lidar com as promessas resultantes
   deployContract()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
   