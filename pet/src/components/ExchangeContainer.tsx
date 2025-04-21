import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExchangeForm from './ExchangeForm';
import ReceivingDetails from './ReceivingDetails';
import SendingDetails from './SendingDetails';
import ProgressIndicator from './ProgressIndicator';
import { CryptoAsset } from '../types/types';
import { fetchCryptoData } from '../utils/api';

const ExchangeContainer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [sourceAsset, setSourceAsset] = useState<string>("BTC");
  const [targetAsset, setTargetAsset] = useState<string>("ETH");
  const [sourceAmount, setSourceAmount] = useState<string>("");
  const [targetAmount, setTargetAmount] = useState<string>("");
  const [bonusValue, setBonusValue] = useState<string>("0");
  const [cryptoAssets, setCryptoAssets] = useState<CryptoAsset[]>([]);
  const [receivingAddress, setReceivingAddress] = useState<string>("");
  const [sourceNetwork, setSourceNetwork] = useState<string>("");
  const [targetNetwork, setTargetNetwork] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const totalSteps = 3;

  useEffect(() => {
    // Simulating API call to fetch crypto data
    fetchCryptoData()
      .then(data => {
        setCryptoAssets(data);
        setIsLoading(false);
        
        // Set default networks
        if (data.length > 0) {
          const defaultSourceNetworks = Object.keys(data.find(crypto => 
            crypto.symbol === sourceAsset)?.networks || {});
          const defaultTargetNetworks = Object.keys(data.find(crypto => 
            crypto.symbol === targetAsset)?.networks || {});
            
          if (defaultSourceNetworks.length > 0) {
            setSourceNetwork(defaultSourceNetworks[0]);
          }
          if (defaultTargetNetworks.length > 0) {
            setTargetNetwork(defaultTargetNetworks[0]);
          }
        }
      })
      .catch(error => {
        console.error("Failed to fetch crypto data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleContinue = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <motion.div 
      className="w-full bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-6 py-5 border-b border-gray-700/50">
        <h1 className="text-2xl font-bold text-white text-center">Quantum Exchange</h1>
      </div>
      
      <div className="p-6">
        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
        
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <ExchangeForm 
              key="exchange-form"
              sourceAsset={sourceAsset}
              targetAsset={targetAsset}
              sourceAmount={sourceAmount}
              targetAmount={targetAmount}
              bonusValue={bonusValue}
              cryptoAssets={cryptoAssets}
              setSourceAsset={setSourceAsset}
              setTargetAsset={setTargetAsset}
              setSourceAmount={setSourceAmount}
              setTargetAmount={setTargetAmount}
              setBonusValue={setBonusValue}
              onContinue={handleContinue}
              isLoading={isLoading}
            />
          )}
          
          {currentStep === 1 && (
            <ReceivingDetails
              key="receiving-details"
              targetAsset={targetAsset}
              cryptoAssets={cryptoAssets}
              targetNetwork={targetNetwork}
              setTargetNetwork={setTargetNetwork}
              receivingAddress={receivingAddress}
              setReceivingAddress={setReceivingAddress}
              onContinue={handleContinue}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 2 && (
            <SendingDetails
              key="sending-details"
              sourceAsset={sourceAsset}
              sourceAmount={sourceAmount}
              targetAsset={targetAsset}
              targetAmount={targetAmount}
              cryptoAssets={cryptoAssets}
              sourceNetwork={sourceNetwork}
              setSourceNetwork={setSourceNetwork}
              receivingAddress={receivingAddress}
              targetNetwork={targetNetwork}
              onBack={handleBack}
              onComplete={() => {
                // Navigate to thank you page or show success
                console.log("Transaction initiated");
                // Route to thank you page
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ExchangeContainer;