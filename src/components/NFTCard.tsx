import React from 'react';
import { Download } from 'lucide-react';

interface NFTCardProps {
  tokenId: string;
  imageUrl: string;
  modelUrl: string;
}

export function NFTCard({ tokenId, imageUrl, modelUrl }: NFTCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={`NFT #${tokenId}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">#{tokenId}</h3>
          <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
            Owned
          </span>
        </div>
        <a
          href={modelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download size={16} />
          Download 3D Model
        </a>
      </div>
    </div>
  );
}