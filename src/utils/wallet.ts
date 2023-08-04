import { Core } from '@walletconnect/core';
import { ICore } from '@walletconnect/types';
import { Web3Wallet } from '@walletconnect/web3wallet';

// @ts-expect-error - env is a virtualised module via Babel config.
import { ENV_PROJECT_ID, ENV_RELAY_URL } from '@env';

let core: ICore;

export const createWeb3Wallet = async () => {
  core = new Core({
    // @notice: If you want the debugger / logs
    // logger: 'debug',
    projectId: ENV_PROJECT_ID,
    relayUrl: ENV_RELAY_URL,
  });

  const web3wallet = await Web3Wallet.init({
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

  return { web3wallet };
};

export const pair = async ({ uri }: { uri: string }) =>
  await core.pairing.pair({ uri });
