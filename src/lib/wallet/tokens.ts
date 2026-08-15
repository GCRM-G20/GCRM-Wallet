// GCRM Wallet - Token Configurations
import type { Token } from '@/types/wallet';

export const NATIVE_TOKENS: Record<number, Omit<Token, 'balance' | 'valueUsd'>> = {
  1: { symbol: 'ETH', name: 'Ethereum', address: '0x0', decimals: 18, chainId: 1 },
  56: { symbol: 'BNB', name: 'BNB', address: '0x0', decimals: 18, chainId: 56 },
  137: { symbol: 'MATIC', name: 'Polygon', address: '0x0', decimals: 18, chainId: 137 },
  42161: { symbol: 'ETH', name: 'Arbitrum ETH', address: '0x0', decimals: 18, chainId: 42161 },
  8453: { symbol: 'ETH', name: 'Base ETH', address: '0x0', decimals: 18, chainId: 8453 },
  59144: { symbol: 'ETH', name: 'Linea ETH', address: '0x0', decimals: 18, chainId: 59144 },
};

// GCRM Token - Contract address must be configured per chain from secure config
// These are placeholder addresses for demo. In production, load from environment variables.
export const GCRM_TOKEN: Record<number, Omit<Token, 'balance' | 'valueUsd'>> = {
  1: {
    symbol: 'GCRM',
    name: 'GCRM Token',
    address: process.env.NEXT_PUBLIC_GCRM_ADDRESS_ETH || '0x0000000000000000000000000000000000000000',
    decimals: 18,
    chainId: 1,
  },
  56: {
    symbol: 'GCRM',
    name: 'GCRM Token',
    address: process.env.NEXT_PUBLIC_GCRM_ADDRESS_BSC || '0x0000000000000000000000000000000000000000',
    decimals: 18,
    chainId: 56,
  },
  137: {
    symbol: 'GCRM',
    name: 'GCRM Token',
    address: process.env.NEXT_PUBLIC_GCRM_ADDRESS_POLYGON || '0x0000000000000000000000000000000000000000',
    decimals: 18,
    chainId: 137,
  },
  42161: {
    symbol: 'GCRM',
    name: 'GCRM Token',
    address: process.env.NEXT_PUBLIC_GCRM_ADDRESS_ARB || '0x0000000000000000000000000000000000000000',
    decimals: 18,
    chainId: 42161,
  },
  8453: {
    symbol: 'GCRM',
    name: 'GCRM Token',
    address: process.env.NEXT_PUBLIC_GCRM_ADDRESS_BASE || '0x0000000000000000000000000000000000000000',
    decimals: 18,
    chainId: 8453,
  },
  59144: {
    symbol: 'GCRM',
    name: 'GCRM Token',
    address: process.env.NEXT_PUBLIC_GCRM_ADDRESS_LINEA || '0x0000000000000000000000000000000000000000',
    decimals: 18,
    chainId: 59144,
  },
};

export const POPULAR_TOKENS: Record<number, Omit<Token, 'balance' | 'valueUsd'>[]> = {
  1: [
    { symbol: 'USDT', name: 'Tether USD', address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', decimals: 6, chainId: 1 },
    { symbol: 'USDC', name: 'USD Coin', address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', decimals: 6, chainId: 1 },
  ],
  56: [
    { symbol: 'USDT', name: 'Tether USD', address: '0x55d398326f99059fF775485246999027B3197955', decimals: 18, chainId: 56 },
    { symbol: 'USDC', name: 'USD Coin', address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', decimals: 18, chainId: 56 },
  ],
  137: [
    { symbol: 'USDT', name: 'Tether USD', address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', decimals: 6, chainId: 137 },
    { symbol: 'USDC', name: 'USD Coin', address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', decimals: 6, chainId: 137 },
  ],
  42161: [
    { symbol: 'USDT', name: 'Tether USD', address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', decimals: 6, chainId: 42161 },
    { symbol: 'USDC', name: 'USD Coin', address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', decimals: 6, chainId: 42161 },
  ],
  8453: [
    { symbol: 'USDC', name: 'USD Coin', address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', decimals: 6, chainId: 8453 },
  ],
  59144: [],
};
