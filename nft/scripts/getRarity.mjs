const contractAddress = "0xA1c43802E433CeA20Bd72befEeFa148C56f1975F"
const id_token = 2

async function getRarity() {
   const Cat = await ethers.getContractFactory("Cat")
   const [owner] = await ethers.getSigners()

   let rarity = await Cat.attach(contractAddress).getRarity(id_token)
   
   console.log("Raridade da NFT de Gato eh =  " + rarity)
}

getRarity()
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });