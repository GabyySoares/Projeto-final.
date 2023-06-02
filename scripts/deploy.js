async function deployContract() {
    const EduCollectNFT = await ethers.getContractFactory("EduCollectNFT")
    const EduCollectNFTDeployed = await EduCollectNFT.deploy()
    await EduCollectNFTDeployed.deployed()
    const txHash = EduCollectNFTDeployed.deployTransaction.hash
    const txReceipt = await ethers.provider.waitForTransaction(txHash)
    const contractAddress = txReceipt.contractAddress
    console.log("Contrato implantado no endereço:", contractAddress)
   }
   deployContract()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
   