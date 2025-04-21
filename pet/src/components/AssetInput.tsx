import React from 'react';
import { ChevronDown } from 'lucide-react';
import { CryptoAsset } from '../types/types';

interface AssetInputProps {
  value: string;
  onChange: (value: string) => void;
  asset: string;
  assetList: CryptoAsset[];
  onSelectAsset: () => void;
  placeholder?: string;
  disabled?: boolean;
}

const AssetInput: React.FC<AssetInputProps> = ({
  value,
  onChange,
  asset,
  assetList,
  onSelectAsset,
  placeholder = "0.00",
  disabled = false,
}) => {
  const assetInfo = assetList.find(crypto => crypto.symbol === asset);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and a single decimal point
    if (/^[0-9]*\.?[0-9]*$/.test(value) || value === '') {
      onChange(value);
    }
  };
  
  return (
    <div className="flex items-center rounded-xl overflow-hidden border border-gray-700/50 bg-gray-800/50 hover:bg-gray-800/70 focus-within:ring-2 focus-within:ring-blue-500/50 transition-all duration-200">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`bg-transparent text-white px-4 py-3 flex-1 outline-none ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
      />
      
      <button
        onClick={onSelectAsset}
        className="flex items-center px-4 py-3 bg-gray-700/50 hover:bg-gray-700/80 transition-colors duration-150 text-white"
        type="button"
      >
        <div className="flex items-center">
          {assetInfo && (
            <div className="w-6 h-6 mr-2">
              <img 
                src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/128/color/${asset.toLowerCase()}.png`} 
                alt={asset}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback for missing icons
                  (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/svg/color/generic.svg';
                }}
              />
            </div>
          )}
          <span className="font-medium">{asset}</span>
          <ChevronDown size={16} className="ml-2" />
        </div>
      </button>
    </div>
  );
};

export default AssetInput;