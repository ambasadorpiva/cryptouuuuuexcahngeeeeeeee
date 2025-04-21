import React from 'react';
import { motion } from 'framer-motion';

const FloatingCoins: React.FC = () => {
  // Use common cryptocurrency symbols for the floating coins
  const coins = [
    { symbol: 'btc', size: 48, delay: 0 },
    { symbol: 'eth', size: 40, delay: 2.2 },
    { symbol: 'usdt', size: 32, delay: 0.5 },
    { symbol: 'bnb', size: 36, delay: 1.5 },
    { symbol: 'sol', size: 38, delay: 3.1 },
    { symbol: 'ada', size: 30, delay: 1.8 },
    { symbol: 'xrp', size: 28, delay: 0.9 },
    { symbol: 'doge', size: 35, delay: 2.7 },
  ];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {coins.map((coin, index) => {
        // Generate random positions
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        return (
          <motion.div
            key={index}
            className="absolute opacity-20"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: coin.size,
              height: coin.size,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: coin.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/128/color/${coin.symbol}.png`} 
              alt={coin.symbol}
              className="w-full h-full"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/svg/color/generic.svg';
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingCoins;