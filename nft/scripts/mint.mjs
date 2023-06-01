const CONTRACT_ADDRESS = "0xA1c43802E433CeA20Bd72befEeFa148C56f1975F"

const gato1 = "ipfs://bafyreif6phmldhsuxte4ecgtn54t32m6hkf4hyglgbz5dwpi4slck7pbmu"
const gato2 = "ipfs://bafyreider2smjwhwqpx6yutxwejsw5lylgzflikpfuqz5t3klabymrotky"
const gato3 = "ipfs://bafyreic5z65lj4xewlcyyteboqunxu3dro5mzhevg4cw2sjlmgy3jxkf5a"

async function mintNFT(contractAddress) {
   const Cat = await ethers.getContractFactory("Cat")
   const [owner] = await ethers.getSigners()

   await Cat.attach(contractAddress).mintNFT(owner.address, gato1,5)
   await Cat.attach(contractAddress).mintNFT(owner.address, gato2,10)
   await Cat.attach(contractAddress).mintNFT(owner.address, gato3,6)
   
   console.log("Cat cunhado para: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });