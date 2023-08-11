import { ICore } from '@walletconnect/types';
import { Web3Wallet } from '@walletconnect/web3wallet';

export const createWeb3Wallet = async (core: ICore) =>
  await Web3Wallet.init({
    core,
    metadata: {
      name: 'Demo React Native Wallet',
      description: 'Demo RN Wallet to interface with Dapps',
      url: 'https://walletconnect.com/',
      icons: ['https://avatars.githubusercontent.com/u/37784886'],
      redirect: {
        native: 'w3wrnsample://',
      },
    },
  });

export const pair = async ({ core, uri }: { core: ICore; uri: string }) =>
  await core.pairing.pair({ uri });
