import { CryptoAsset } from '../types/types';

export function calculateExchangeRate(
  amount: string,
  sourceAsset: string,
  targetAsset: string,
  assets: CryptoAsset[],
  applyBonus: boolean = false
): { convertedAmount: string; bonus: string } {
  if (!amount || assets.length === 0) {
    return { convertedAmount: "0", bonus: "0" };
  }
  
  const parsedAmount = parseFloat(amount);
  if (isNaN(parsedAmount)) {
    return { convertedAmount: "0", bonus: "0" };
  }
  
  const sourceInfo = assets.find(asset => asset.symbol === sourceAsset);
  const targetInfo = assets.find(asset => asset.symbol === targetAsset);
  
  if (!sourceInfo?.quote?.USD?.price || !targetInfo?.quote?.USD?.price) {
    return { convertedAmount: "0", bonus: "0" };
  }
  
  const sourceUsdValue = parsedAmount * sourceInfo.quote.USD.price;
  const baseConvertedAmount = sourceUsdValue / targetInfo.quote.USD.price;
  
  if (applyBonus && sourceUsdValue >= 50) {
    const bonusMultiplier = 1.05; // 5% bonus
    const withBonus = baseConvertedAmount * bonusMultiplier;
    const bonusAmount = withBonus - baseConvertedAmount;
    
    return {
      convertedAmount: withBonus.toFixed(8),
      bonus: bonusAmount.toFixed(8)
    };
  }
  
  return {
    convertedAmount: baseConvertedAmount.toFixed(8),
    bonus: "0"
  };
}

export function hasEligibleBonus(sourceAsset: string, targetAsset: string): boolean {
  return (
    (sourceAsset === 'ETH' || sourceAsset === 'SOL') &&
    (targetAsset === 'USDT' || targetAsset === 'USDC')
  );
}