import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Copy, ExternalLink } from 'lucide-react';
import NetworkSelector from './NetworkSelector';
import { CryptoAsset } from '../types/types';

interface SendingDetailsProps {
  sourceAsset: string;
  sourceAmount: string;
  targetAsset: string;
  targetAmount: string;
  cryptoAssets: CryptoAsset[];
  sourceNetwork: string;
  setSourceNetwork: (network: string) => void;
  receivingAddress: string;
  targetNetwork: string;
  onBack: () => void;
  onComplete: () => void;
}

const SendingDetails: React.FC<SendingDetailsProps> = ({
  sourceAsset,
  sourceAmount,
  targetAsset,
  targetAmount,
  cryptoAssets,
  sourceNetwork,
  setSourceNetwork,
  receivingAddress,
  targetNetwork,
  onBack,
  onComplete,
}) => {
  const assetInfo = cryptoAssets.find(crypto => crypto.symbol === sourceAsset);
  const networks = assetInfo?.networks ? Object.keys(assetInfo.networks) : [];
  
  // Mock merchant address from network information
  const getMerchantAddress = (): string => {
    if (!assetInfo?.networks || !sourceNetwork) return "Address not available";
    return assetInfo.networks[sourceNetwork] || "Address not available";
  };
  
  const merchantAddress = getMerchantAddress();
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add toast notification here
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-2"
    >
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 mr-3">
            <img 
              src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/128/color/${sourceAsset.toLowerCase()}.png`} 
              alt={sourceAsset}
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/svg/color/generic.svg';
              }}
            />
          </div>
          <div className="text-xl font-medium text-white">
            Send {sourceAsset}
          </div>
        </div>
        
        <div className="mb-4">
          <div className="mb-2 text-gray-300 font-medium">Send Amount</div>
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-xl font-medium text-white">
            {sourceAmount} {sourceAsset}
          </div>
        </div>
        
        <div className="mb-4">
          <div className="mb-2 text-gray-300 font-medium">Select Network</div>
          <NetworkSelector
            networks={networks}
            selectedNetwork={sourceNetwork}
            onSelectNetwork={setSourceNetwork}
          />
        </div>
      </div>
      
      <div className="mb-8 border border-gray-700/50 rounded-xl p-4 bg-gray-800/30">
        <div className="mb-2 text-gray-300 font-medium">Send To This Address</div>
        <div className="flex items-center justify-between bg-gray-800/70 rounded-lg p-3 border border-gray-700/50 mb-2 break-all">
          <div className="text-sm text-gray-300 mr-2">{merchantAddress}</div>
          <button 
            onClick={() => copyToClipboard(merchantAddress)}
            className="p-2 rounded-md hover:bg-gray-700/70 text-gray-400 hover:text-white transition-colors"
          >
            <Copy size={16} />
          </button>
        </div>
        
        <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg text-sm text-blue-300">
          <div className="flex items-start">
            <div className="text-blue-400 mr-2">ℹ️</div>
            <div>
              <p className="mb-2">Send exactly <span className="font-medium text-white">{sourceAmount} {sourceAsset}</span> to this address.</p>
              <p>Transaction may take 10-30 minutes to complete depending on network congestion.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="text-gray-300 font-medium mb-2">Order Summary</div>
        <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 p-4">
          <div className="flex justify-between mb-2">
            <div className="text-gray-400">You Send</div>
            <div className="text-white font-medium">{sourceAmount} {sourceAsset}</div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="text-gray-400">Network</div>
            <div className="text-white">{sourceNetwork}</div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="text-gray-400">You Receive</div>
            <div className="text-white font-medium">{targetAmount} {targetAsset}</div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="text-gray-400">To Address</div>
            <div className="text-white truncate max-w-[200px]">{receivingAddress.substring(0, 8)}...{receivingAddress.substring(receivingAddress.length - 8)}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-400">Network</div>
            <div className="text-white">{targetNetwork}</div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-3 rounded-lg flex items-center text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
        >
          <ChevronLeft size={20} className="mr-1" />
          Back
        </button>
        
        <button
          onClick={onComplete}
          className="px-6 py-3 rounded-lg flex items-center font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all"
        >
          <ExternalLink size={18} className="mr-2" />
          View Transaction
        </button>
      </div>
    </motion.div>
  );
};

export default SendingDetails;