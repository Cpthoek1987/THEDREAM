import React from 'react';
import { useAccount, useReadContract } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../config/contract';
import { NFTCard } from './NFTCard';
import { Loader2 } from 'lucide-react';

export function NFTGallery() {
  const { address, isConnected } = useAccount();
  
  const { data: balance, isLoading: isLoadingBalance } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'balanceOf',
    args: [address!],
    query: {
      enabled: !!address,
    },
  });

  const { data: tokenIds, isLoading: isLoadingTokens } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'tokenOfOwnerByIndex',
    args: [address!, 0n],
    query: {
      enabled: !!balance && balance > 0n,
    },
  });

  if (!isConnected) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Connect your wallet to view your NFTs
        </h2>
        <p className="text-gray-600">
          You'll be able to see your owned NFTs and download their 3D models.
        </p>
      </div>
    );
  }

  if (isLoadingBalance || isLoadingTokens) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (balance === 0n) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          No NFTs Found
        </h2>
        <p className="text-gray-600">
          You don't own any NFTs from this collection yet.
        </p>
      </div>
    );
  }

  // Example data - replace with actual NFT metadata fetching logic
  const nfts = [
    {
      tokenId: '1',
      imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e',
      modelUrl: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID',
    },
    // Add more NFTs here
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Your NFTs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {nfts.map((nft) => (
          <NFTCard key={nft.tokenId} {...nft} />
        ))}
      </div>
    </div>
  );
}