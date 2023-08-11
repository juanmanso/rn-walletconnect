import { Wallet } from 'ethers';

export const createWallet = (mnemonic?: string) =>
  mnemonic ? Wallet.fromMnemonic(mnemonic) : Wallet.createRandom();
