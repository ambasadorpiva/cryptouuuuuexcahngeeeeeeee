import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NetworkSelector from './NetworkSelector';
import { CryptoAsset } from '../types/types';

interface ReceivingDetailsProps {
  targetAsset: string;
  cryptoAssets: CryptoAsset[];
  targetNetwork: string;
  setTargetNetwork: (network: string) => void;
  receivingAddress: string;
  setReceivingAddress: (address: string) => void;
  onContinue: () => void;
  onBack: () => void;
}

const ReceivingDetails: React.FC<ReceivingDetailsProps> = ({
  targetAsset,
  cryptoAssets,
  targetNetwork,
  setTargetNetwork,
  receivingAddress,
  setReceivingAddress,
  onContinue,
  onBack,
}) => {
  const assetInfo = cryptoAssets.find(crypto => crypto.symbol === targetAsset);
  const networks = assetInfo?.networks ? Object.keys(assetInfo.networks) : [];
  
  const continueDisabled = !targetNetwork || !receivingAddress;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-2"
    >
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 mr-3">
          <img 
            src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/128/color/${targetAsset.toLowerCase()}.png`} 
            alt={targetAsset}
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/svg/color/generic.svg';
            }}
          />
        </div>
        <div className="text-xl font-medium text-white">
          Receive {targetAsset}
        </div>
      </div>
      
      <div className="mb-6">
        <div className="mb-2 text-gray-300 font-medium">Select Network</div>
        <NetworkSelector
          networks={networks}
          selectedNetwork={targetNetwork}
          onSelectNetwork={setTargetNetwork}
        />
        
        {targetNetwork && (
          <div className="mt-1 text-xs text-gray-400">
            Make sure the receiving address supports {targetNetwork} network
          </div>
        )}
      </div>
      
      <div className="mb-8">
        <div className="mb-2 text-gray-300 font-medium">Your {targetAsset} Receiving Address</div>
        <input
          type="text"
          value={receivingAddress}
          onChange={(e) => setReceivingAddress(e.target.value)}
          placeholder={`Enter your ${targetAsset} address`}
          className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        />
        <div className="mt-2 text-xs text-gray-400">
          Double-check your address. Transactions cannot be reversed.
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
          onClick={onContinue}
          disabled={continueDisabled}
          className={`px-6 py-3 rounded-lg flex items-center font-medium transition-all ${
            continueDisabled
              ? 'bg-blue-900/30 text-blue-300/50 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
          }`}
        >
          Continue
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default ReceivingDetails;