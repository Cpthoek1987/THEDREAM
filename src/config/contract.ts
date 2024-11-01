export const CONTRACT_ADDRESS = '0x0000000000000000000000000000000000000000'; // Replace with your contract address
export const CONTRACT_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)',
  'function tokenURI(uint256 tokenId) view returns (string)',
] as const;