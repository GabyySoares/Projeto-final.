// Importing the required modules





// Function to get the metadata of an NFT: accepts the NFT contract address and the token ID to get the metadata of
async function getNFTMetadata(nftContractAddress, tokenId) {
  // Making a call to the Alchemy API to get the metadata
  const response = await alchemy.nft.getNftMetadata(
    nftContractAddress,
    tokenId
  );
  return response; // returning the metadata
}

// main function that runs the script
async function main() {
  // Getting the NFT metadata through the `getNFTMetadata` method
  const response = await getNFTMetadata(
    "0xe785E82358879F061BC3dcAC6f0444462D4b5330", //  World of Women NFT contract address: Replace with your own NFT contract address
    "44" // Replace with the token id you want to get the metadata of
  );
  console.log("NFT Metadata:\n", response); // logging the metadata to the console
}

// calling the main function to run the script
main();