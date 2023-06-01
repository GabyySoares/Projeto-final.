// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Cat is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping (uint256 => uint32) private tokenRarity;

    constructor() ERC721("Cats", "YCat") {}

    function mintNFT(address recipient, string memory tokenURI, uint32 _rarity)
       public onlyOwner
       returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        tokenRarity[newItemId] = _rarity;

        return newItemId;
    }

    function getRarity(uint256 tokenId) public view returns (uint32) {
        return tokenRarity[tokenId];
    }

}