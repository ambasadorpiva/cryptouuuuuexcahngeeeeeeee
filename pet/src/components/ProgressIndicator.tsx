import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface NetworkSelectorProps {
  networks: string[];
  selectedNetwork: string;
  onSelectNetwork: (network: string) => void;
}

const NetworkSelector: React.FC<NetworkSelectorProps> = ({
  networks,
  selectedNetwork,
  onSelectNetwork
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleNetworkSelect = (network: string) => {
    onSelectNetwork(network);
    setIsOpen(false);
  };
  
  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full flex items-center justify-between bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      >
        <span>{selectedNetwork || 'Select network'}</span>
        <ChevronDown size={18} className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700/50 rounded-xl shadow-lg py-1 max-h-60 overflow-auto">
          {networks.length === 0 ? (
            <div className="px-4 py-2 text-gray-400">No networks available</div>
          ) : (
            networks.map((network, index) => (
              <button
                key={index}
                onClick={() => handleNetworkSelect(network)}
                className={`w-full text-left px-4 py-2 ${
                  network === selectedNetwork 
                    ? 'bg-blue-600/20 text-blue-300' 
                    : 'text-white hover:bg-gray-700/50'
                }`}
              >
                {network}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NetworkSelector;