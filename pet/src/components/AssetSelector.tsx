import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { CryptoAsset } from '../types/types';

interface AssetSelectorProps {
  show: boolean;
  onClose: () => void;
  assets: CryptoAsset[];
  onSelect: (symbol: string) => void;
  currentAsset: string;
}

const AssetSelector: React.FC<AssetSelectorProps> = ({
  show,
  onClose,
  assets,
  onSelect,
  currentAsset
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // Focus search input when modal opens
  useEffect(() => {
    if (show && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [show]);
  
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (show) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [show, onClose]);
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);
  
  // Filter assets by search term
  const filteredAssets = assets.filter(asset => 
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    asset.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (!show) return null;
  
  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
        <motion.div 
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-gray-900 border border-gray-700/50 rounded-xl w-full max-w-md max-h-[80vh] flex flex-col shadow-2xl"
        >
          <div className="p-4 border-b border-gray-700/50 flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">Select Asset</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-4 border-b border-gray-700/50">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or symbol"
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
          </div>
          
          <div className="overflow-y-auto flex-1">
            {filteredAssets.length === 0 ? (
              <div className="p-4 text-center text-gray-400">
                No assets found
              </div>
            ) : (
              <div className="p-2">
                {filteredAssets.map((asset) => (
                  <button
                    key={asset.symbol}
                    onClick={() => onSelect(asset.symbol)}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors text-left ${
                      asset.symbol === currentAsset 
                        ? 'bg-blue-600/20 text-blue-300' 
                        : 'hover:bg-gray-800 text-white'
                    }`}
                  >
                    <div className="w-8 h-8 mr-3 flex-shrink-0">
                      <img 
                        src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/128/color/${asset.symbol.toLowerCase()}.png`} 
                        alt={asset.symbol}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback for missing icons
                          (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/svg/color/generic.svg';
                        }}
                      />
                    </div>
                    <div>
                      <div className="font-medium">{asset.name}</div>
                      <div className="text-sm text-gray-400">{asset.symbol}</div>
                    </div>
                    {asset.price && (
                      <div className="ml-auto text-right">
                        <div className="font-medium">${asset.price.toLocaleString()}</div>
                        <div className={`text-sm ${
                          asset.priceChange24h > 0 
                            ? 'text-green-500' 
                            : 'text-red-500'
                        }`}>
                          {asset.priceChange24h > 0 ? '+' : ''}{asset.priceChange24h.toFixed(2)}%
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AssetSelector;