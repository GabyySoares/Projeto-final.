// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract EduCollectNFT is ERC721URIStorage, Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    using Strings for uint256;
    mapping (uint256 => string) private _tokenURIs;

    string private _baseURIextended;

    mapping(uint256 => string) private _badgeNames;
    mapping(uint256 => string) private _badgeDescriptions;
    mapping(uint256 => address) private _ownerAddresses;

    //caso exista uma api, ele adicionaria o baseurl dela
    function setBaseURI(string memory baseURI_) external onlyOwner() {
        _baseURIextended = baseURI_;
    }
    //funcao que altera apenas a imagem de algum badge
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual override {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }
    //funcao que seta a baseURL, caso fosse uma api/{id} por exemplo
    function _baseURI() internal view virtual override returns (string memory) {
        return _baseURIextended;
    }

    //funcao que retorna a imagem em si para o metamask
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory _tokenURI = _tokenURIs[tokenId];
        string memory base = _baseURI();
    
        if (bytes(base).length == 0) {
            return _tokenURI;
        }
        if (bytes(_tokenURI).length > 0) {
            return string(abi.encodePacked(base, _tokenURI));
        }
        return string(abi.encodePacked(base, tokenId.toString()));
    }

    constructor() ERC721("EduCollectNFT", "EDUC") {}

    //mintar o badge ( contruir ele / criar ele)
    function createBadge(
        address recipient,
        string memory name,
        string memory description,
        string memory hashDataId
    ) external returns (uint256) {

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _ownerAddresses[newItemId] = recipient;
        _badgeNames[newItemId] = name;
        _badgeDescriptions[newItemId] = description;
        _setTokenURI(newItemId, hashDataId);

        return newItemId;
    }

    //pegar o badge pelo id
    function getBadgeById(uint256 badgeId) external view returns (
            uint256 id,
            string memory name,
            string memory description,
            string memory metadados
        )
    {
        require(_exists(badgeId), "Badge does not exist");

        return (badgeId, _badgeNames[badgeId], _badgeDescriptions[badgeId], tokenURI(badgeId));
    }

    struct Badge {
        uint id;
        address owner;
        string name;
        string description;
        string metadata;
        }
    //atualizar o badge pelo id
    function updateBadgeById(
        uint256 badgeId,
        string memory name,
        string memory description,
        string memory metadata
    ) external returns (Badge memory){
        require(_exists(badgeId), "Badge does not exist");
        _badgeNames[badgeId] = name;
        _badgeDescriptions[badgeId] = description;
        _setTokenURI(badgeId, metadata);
        return Badge(badgeId,_ownerAddresses[badgeId], name, description, metadata);
    }

    //deletar o badge pelo id
    function deleteBadgeById(uint256 badgeId) external {
        require(_exists(badgeId), "Badge does not exist");
        _burn(badgeId);
    }

    //pegar o dono do badge pelo id
    function getBadgeOwner(uint256 badgeId) external view returns (address) {
        return _ownerAddresses[badgeId];
    }

    //pegar o metadata do badge pelo id
    function getBadgeMetadata(uint256 badgeId)
        external
        view
        returns (
            string memory metadata
        )
    {
        require(_exists(badgeId), "Badge does not exist");
        return _tokenURIs[badgeId];
    }
}
