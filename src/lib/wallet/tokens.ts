// GCRM Wallet - Token Configurations
import type { Token } from '@/types/wallet';

export const NATIVE_TOKENS: Record<number, Omit<Token, 'balance' | 'valueUsd'>> = {
  1: { symbol: 'ETH', name: 'Ethereum', address: '0x0', decimals: 18, chainId: 1 },
  56: { symbol: 'BNB', name: 'BNB', address: '0x0', decimals: 18, chainId: 56 },
  137: { symbol: 'POL', name: 'Polygon', address: '0x0', decimals: 18, chainId: 137 },
  101: { symbol: 'SOL', name: 'Solana', address: '0x0', decimals: 9, chainId: 101 },
  42161: { symbol: 'ETH', name: 'Arbitrum ETH', address: '0x0', decimals: 18, chainId: 42161 },
  8453: { symbol: 'ETH', name: 'Base ETH', address: '0x0', decimals: 18, chainId: 8453 },
};

// GCRM Token - Global Currency Restart Master
export const GCRM_TOKEN: Record<number, Omit<Token, 'balance' | 'valueUsd'>> = {
  1: {
    symbol: 'GCRM',
    name: 'Global Currency Restart Master',
    address: process.env.NEXT_PUBLIC_GCRM_ADDRESS_ETH || '0x2ae2d0dfdb1b3b03a771167c43b983a97b65b9b3',
    decimals: 18,
    chainId: 1,
  },
  56: {
    symbol: 'GCRM',
    name: 'Global Currency Restart Master',
    address: process.env.NEXT_PUBLIC_GCRM_ADDRESS_BSC || '0x0000000000000000000000000000000000000000',
    decimals: 18,
    chainId: 56,
  },
  137: {
    symbol: 'GCRM',
    name: 'Global Currency Restart Master',
    address: process.env.NEXT_PUBLIC_GCRM_ADDRESS_POLYGON || '0x0000000000000000000000000000000000000000',
    decimals: 18,
    chainId: 137,
  },
  101: {
    symbol: 'GCRM',
    name: 'Global Currency Restart Master',
    address: process.env.NEXT_PUBLIC_GCRM_ADDRESS_SOLANA || '11111111111111111111111111111111',
    decimals: 9,
    chainId: 101,
  },
  42161: {
    symbol: 'GCRM',
    name: 'Global Currency Restart Master',
    address: process.env.NEXT_PUBLIC_GCRM_ADDRESS_ARB || '0x0000000000000000000000000000000000000000',
    decimals: 18,
    chainId: 42161,
  },
  8453: {
    symbol: 'GCRM',
    name: 'Global Currency Restart Master',
    address: process.env.NEXT_PUBLIC_GCRM_ADDRESS_BASE || '0x0000000000000000000000000000000000000000',
    decimals: 18,
    chainId: 8453,
  },
};

// Custom GCRM Ecosystem Tokens
export const GCRM_ECOSYSTEM_TOKENS: Record<number, Omit<Token, 'balance' | 'valueUsd'>[]> = {
  1: [
    { symbol: 'NESG', name: 'NESG Token', address: '0x0000000000000000000000000000000000000001', decimals: 18, chainId: 1 },
    { symbol: 'QFS', name: 'QFS Token', address: '0x0000000000000000000000000000000000000002', decimals: 18, chainId: 1 },
    { symbol: 'Ala', name: 'Ala Token', address: '0x0000000000000000000000000000000000000003', decimals: 18, chainId: 1 },
  ],
  56: [
    { symbol: 'NESG', name: 'NESG Token', address: '0x0000000000000000000000000000000000000001', decimals: 18, chainId: 56 },
    { symbol: 'QFS', name: 'QFS Token', address: '0x0000000000000000000000000000000000000002', decimals: 18, chainId: 56 },
    { symbol: 'Ala', name: 'Ala Token', address: '0x0000000000000000000000000000000000000003', decimals: 18, chainId: 56 },
  ],
  137: [
    { symbol: 'NESG', name: 'NESG Token', address: '0x0000000000000000000000000000000000000001', decimals: 18, chainId: 137 },
    { symbol: 'QFS', name: 'QFS Token', address: '0x0000000000000000000000000000000000000002', decimals: 18, chainId: 137 },
    { symbol: 'Ala', name: 'Ala Token', address: '0x0000000000000000000000000000000000000003', decimals: 18, chainId: 137 },
  ],
  101: [
    { symbol: 'NESG', name: 'NESG Token', address: 'NESGToken1111111111111111111111111111', decimals: 9, chainId: 101 },
    { symbol: 'QFS', name: 'QFS Token', address: 'QFSToken111111111111111111111111111111', decimals: 9, chainId: 101 },
    { symbol: 'Ala', name: 'Ala Token', address: 'AlaToken1111111111111111111111111111111', decimals: 9, chainId: 101 },
  ],
  42161: [
    { symbol: 'NESG', name: 'NESG Token', address: '0x0000000000000000000000000000000000000001', decimals: 18, chainId: 42161 },
    { symbol: 'QFS', name: 'QFS Token', address: '0x0000000000000000000000000000000000000002', decimals: 18, chainId: 42161 },
    { symbol: 'Ala', name: 'Ala Token', address: '0x0000000000000000000000000000000000000003', decimals: 18, chainId: 42161 },
  ],
  8453: [
    { symbol: 'NESG', name: 'NESG Token', address: '0x0000000000000000000000000000000000000001', decimals: 18, chainId: 8453 },
    { symbol: 'QFS', name: 'QFS Token', address: '0x0000000000000000000000000000000000000002', decimals: 18, chainId: 8453 },
    { symbol: 'Ala', name: 'Ala Token', address: '0x0000000000000000000000000000000000000003', decimals: 18, chainId: 8453 },
  ],
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
  101: [],
  42161: [
    { symbol: 'USDT', name: 'Tether USD', address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', decimals: 6, chainId: 42161 },
    { symbol: 'USDC', name: 'USD Coin', address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', decimals: 6, chainId: 42161 },
  ],
  8453: [
    { symbol: 'USDC', name: 'USD Coin', address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', decimals: 6, chainId: 8453 },
  ],
};

// Get all available tokens for a chain (native + GCRM + ecosystem + popular)
export function getAvailableTokens(chainId: number): Omit<Token, 'balance' | 'valueUsd'>[] {
  const tokens: Omit<Token, 'balance' | 'valueUsd'>[] = [];
  const native = NATIVE_TOKENS[chainId];
  if (native) tokens.push(native);
  const gcrm = GCRM_TOKEN[chainId];
  if (gcrm) tokens.push(gcrm);
  const ecosystem = GCRM_ECOSYSTEM_TOKENS[chainId] || [];
  tokens.push(...ecosystem);
  const popular = POPULAR_TOKENS[chainId] || [];
  tokens.push(...popular);
  return tokens;
}
