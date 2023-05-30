// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract PussNFT is ERC721 {

	address public admin;

	struct Metadata {
		uint8 number;
		string title;
	}

	mapping(uint256 => Metadata) public id_to_number;

	constructor() ERC721("PussNFT","PUSSNFT"){
		admin = msg.sender;

		
		mint(0,"Tinoca");
		mint(1,"Frajolis");
	}


	function mint(uint8 number, string memory title) internal {
		id_to_number[number] = Metadata(number,title);
		_safeMint(admin, number);
	}

	function _baseURI() override internal view virtual returns (string memory) {
		return "https://acrianft.us.aldryn.io/token/";
	}

	function contractURI() public pure returns (string memory) {
		return "https://acrianft.us.aldryn.io/contract";
	}
	 
	function claim(uint8 number) external {
		_transfer(admin, msg.sender, number);
	}
}