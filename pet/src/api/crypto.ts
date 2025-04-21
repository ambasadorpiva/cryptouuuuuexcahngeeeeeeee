import { CryptoAsset } from '../types/types';
import { networks } from './networks';

const CMC_API_KEY = "48fdb852-68b4-482b-8aa2-601e1d6df7ea";
const CMC_API_URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

export async function fetchCryptoData(): Promise<CryptoAsset[]> {
  try {
    const response = await fetch(CMC_API_URL, {
      headers: {
        'X-CMC_PRO_API_KEY': CMC_API_KEY,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    // Filter for supported cryptocurrencies (ones we have network addresses for)
    const supportedSymbols = Object.keys(networks);
    const filteredData = data.data
      .filter((crypto: any) => supportedSymbols.includes(crypto.symbol))
      .map((crypto: any) => ({
        ...crypto,
        networks: networks[crypto.symbol] || {},
      }));

    return filteredData;
  } catch (error) {
    console.error("Failed to fetch crypto data:", error);
    // Return empty array instead of throwing to prevent app from crashing
    return [];
  }
}