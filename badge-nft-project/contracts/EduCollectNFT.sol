// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract EduCollectNFT is ERC721 {
    struct Badge {
        uint256 id;
        string name;
        string description;
        string imageUrl;
    }

    Badge[] public badges;
    mapping(uint256 => address) private badgeOwners;

    constructor() ERC721("EduCollectNFT", "EDUC") {}

    //mintar o badge ( contruir ele / criar ele)
    function mintBadge(
        address recipient,
        string memory name,
        string memory description,
        string memory imageUrl
    ) external returns (uint256) {
        uint256 badgeId = badges.length;
        Badge memory newBadge = Badge(badgeId, name, description, imageUrl);
        badges.push(newBadge);

        _mint(recipient, badgeId);
        badgeOwners[badgeId] = recipient;

        return badgeId;
    }

    //pegar o badge pelo id
    function getBadgeById(uint256 badgeId)
        external
        view
        returns (
            uint256 id,
            string memory name,
            string memory description,
            string memory imageUrl
        )
    {
        require(_exists(badgeId), "Badge does not exist");
        Badge memory badge = badges[badgeId];
        return (badge.id, badge.name, badge.description, badge.imageUrl);
    }

    //Nao funcional, falta rever a logica, porque o id comeca no 0 e nao no 1
    function getAllBadges() external view returns (Badge[] memory) {
        uint32 counter = 0;
        for (uint32 i = 0; i < badges.length ; i++) {
            if (badges[i].id != 0) {
                counter++;
            }
        }
        Badge[] memory result = new Badge[](counter);
        uint32 counterTwo = 0;
        for (uint32 i = 0; i < badges.length; i++) {
            if (badges[i].id != 0) {
                result[counterTwo++] = badges[i];
            }
        }
        return result;
    }

    //atualizar o badge pelo id
    function updateBadgeById(
        uint256 badgeId,
        string memory name,
        string memory description,
        string memory imageUrl
    ) external {
        require(_exists(badgeId), "Badge does not exist");
        Badge storage badge = badges[badgeId];
        badge.name = name;
        badge.description = description;
        badge.imageUrl = imageUrl;
    }

    //deletar o badge pelo id
    function deleteBadgeById(uint256 badgeId) external {
        require(_exists(badgeId), "Badge does not exist");
        delete badges[badgeId];
    }

    //pegar o dono do badge pelo id
    function getBadgeOwner(uint256 badgeId) external view returns (address) {
        return badgeOwners[badgeId];
    }

    //pegar o metadata do badge pelo id
    function getBadgeMetadata(uint256 badgeId)
        external
        view
        returns (
            string memory name,
            string memory description,
            string memory imageUrl
        )
    {
        require(_exists(badgeId), "Badge does not exist");
        Badge memory badge = badges[badgeId];
        return (badge.name, badge.description, badge.imageUrl);
    }
}



