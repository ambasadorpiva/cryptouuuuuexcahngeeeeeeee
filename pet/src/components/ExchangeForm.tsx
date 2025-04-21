import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownUp, Sparkles } from 'lucide-react';
import AssetInput from './AssetInput';
import AssetSelector from './AssetSelector';
import { CryptoAsset } from '../types/types';
import { calculateExchangeRate, hasEligibleBonus } from '../utils/exchangeUtils';

interface ExchangeFormProps {
  sourceAsset: string;
  targetAsset: string;
  sourceAmount: string;
  targetAmount: string;
  bonusValue: string;
  cryptoAssets: CryptoAsset[];
  setSourceAsset: (asset: string) => void;
  setTargetAsset: (asset: string) => void;
  setSourceAmount: (amount: string) => void;
  setTargetAmount: (amount: string) => void;
  setBonusValue: (bonus: string) => void;
  onContinue: () => void;
  isLoading: boolean;
}

const ExchangeForm: React.FC<ExchangeFormProps> = ({
  sourceAsset,
  targetAsset,
  sourceAmount,
  targetAmount,
  bonusValue,
  cryptoAssets,
  setSourceAsset,
  setTargetAsset,
  setSourceAmount,
  setTargetAmount,
  setBonusValue,
  onContinue,
  isLoading,
}) => {
  const [showSourceSelector, setShowSourceSelector] = useState(false);
  const [showTargetSelector, setShowTargetSelector] = useState(false);
  const [minimumWarning, setMinimumWarning] = useState(false);
  
  // Check if the current exchange is eligible for a bonus
  const exchangeHasBonus = hasEligibleBonus(sourceAsset, targetAsset);
  
  // Calculate minimum amount
  const getMinimumAmount = (): string => {
    if (cryptoAssets.length === 0) return "0";
    
    const sourceCrypto = cryptoAssets.find(crypto => crypto.symbol === sourceAsset);
    if (!sourceCrypto?.price) return "0";
    
    // $50 USD equivalent in the source currency
    const minAmount = 50 / sourceCrypto.price;
    return minAmount.toFixed(8);
  };
  
  // Check if amount is below minimum
  const checkMinimumAmount = (amount: string): boolean => {
    if (!amount || cryptoAssets.length === 0) return false;
    
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) return false;
    
    const minAmount = parseFloat(getMinimumAmount());
    return numAmount < minAmount;
  };
  
  const handleSourceAmountChange = (value: string) => {
    setSourceAmount(value);
    
    if (!value) {
      setTargetAmount("");
      setBonusValue("0");
      setMinimumWarning(false);
      return;
    }
    
    const { convertedAmount, bonus } = calculateExchangeRate(
      value, 
      sourceAsset, 
      targetAsset, 
      cryptoAssets,
      exchangeHasBonus
    );
    
    setTargetAmount(convertedAmount);
    setBonusValue(bonus);
    setMinimumWarning(checkMinimumAmount(value));
  };
  
  const handleSwapAssets = () => {
    setSourceAsset(targetAsset);
    setTargetAsset(sourceAsset);
    setSourceAmount(targetAmount);
    handleSourceAmountChange(targetAmount);
  };
  
  useEffect(() => {
    if (sourceAmount) {
      handleSourceAmountChange(sourceAmount);
    }
  }, [sourceAsset, targetAsset]);
  
  const continueDisabled = !sourceAmount || minimumWarning || isLoading || sourceAmount === "0";
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Source Asset */}
      <div className="mb-6">
        <div className="mb-2 text-gray-300 font-medium">You Send</div>
        <AssetInput 
          value={sourceAmount}
          onChange={handleSourceAmountChange}
          asset={sourceAsset}
          assetList={cryptoAssets}
          onSelectAsset={() => setShowSourceSelector(true)}
          placeholder="0.00"
          disabled={isLoading}
        />
        
        {minimumWarning && (
          <div className="mt-2 flex items-center text-red-400 text-sm bg-red-900/20 p-2 rounded-md border border-red-700/30">
            <div className="mr-2">⚠️</div>
            <div>Minimum amount: {getMinimumAmount()} {sourceAsset} (≈ $50)</div>
          </div>
        )}
      </div>
      
      {/* Swap Button */}
      <div className="flex justify-center -my-2">
        <button 
          onClick={handleSwapAssets}
          className="bg-blue-600/30 hover:bg-blue-600/40 p-2 rounded-full border border-blue-500/30 transition-all duration-200 transform hover:scale-110"
          aria-label="Swap currencies"
        >
          <ArrowDownUp size={20} className="text-blue-400" />
        </button>
      </div>
      
      {/* Target Asset */}
      <div className="mb-6">
        <div className="mb-2 text-gray-300 font-medium">You Receive</div>
        <AssetInput 
          value={targetAmount}
          onChange={() => {}}
          asset={targetAsset}
          assetList={cryptoAssets}
          onSelectAsset={() => setShowTargetSelector(true)}
          placeholder="0.00"
          disabled={true}
        />
        
        {exchangeHasBonus && parseFloat(bonusValue) > 0 && (
          <div className="mt-2">
            <div className="inline-flex items-center bg-yellow-900/20 text-yellow-500 text-xs px-2 py-1 rounded-full border border-yellow-600/30">
              <Sparkles size={12} className="mr-1" />
              +5% Bonus Applied
            </div>
            <div className="text-yellow-500 text-xs mt-1">
              You get +{bonusValue} {targetAsset} extra
            </div>
          </div>
        )}
      </div>
      
      {/* Continue Button */}
      <button
        onClick={onContinue}
        disabled={continueDisabled}
        className={`w-full py-3 px-4 rounded-lg text-center font-medium transition-all duration-200 ${
          continueDisabled
            ? 'bg-blue-900/30 text-blue-300/50 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-blue-700/25'
        }`}
      >
        Continue
      </button>
      
      {/* Asset Selectors */}
      <AssetSelector
        show={showSourceSelector}
        onClose={() => setShowSourceSelector(false)}
        assets={cryptoAssets}
        onSelect={(symbol) => {
          setSourceAsset(symbol);
          setShowSourceSelector(false);
        }}
        currentAsset={sourceAsset}
      />
      
      <AssetSelector
        show={showTargetSelector}
        onClose={() => setShowTargetSelector(false)}
        assets={cryptoAssets}
        onSelect={(symbol) => {
          setTargetAsset(symbol);
          setShowTargetSelector(false);
        }}
        currentAsset={targetAsset}
      />
    </motion.div>
  );
};

export default ExchangeForm;