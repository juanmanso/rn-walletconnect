import React, { PropsWithChildren, useState } from 'react';
import { Core } from '@walletconnect/core';
import { ICore } from '@walletconnect/types';
import { IWeb3Wallet } from '@walletconnect/web3wallet';
// @ts-expect-error - env is a virtualized module via Babel config.
import { ENV_PROJECT_ID, ENV_RELAY_URL } from '@env';
import { Wallet } from 'ethers';

import { createCtx } from '.';
import { createWeb3Wallet } from '../utils/web3';
import { createWallet } from '../utils/wallet';

// State variables only
interface WalletContextState {
  wallet?: Wallet;
  web3Core: ICore;
  web3Wallet?: IWeb3Wallet;
}

// This interface differentiates from State
// because it holds any other option or fx
// that handle the state in some way
interface WalletContext extends WalletContextState {
  initContext: (mnemonic?: string) => Promise<void>;
  initWallet: (mnemonic?: string) => void;
}

const INITIAL_STATE: WalletContextState = {
  web3Core: new Core({
    // @notice: If you want the debugger / logs
    // logger: 'debug',
    projectId: ENV_PROJECT_ID,
    relayUrl: ENV_RELAY_URL,
  }),
};

const [useContext, WalletContextProvider] =
  createCtx<WalletContext>('walletContext');

export const WalletProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<WalletContextState>(INITIAL_STATE);

  const initContext = async (mnemonic?: string) =>
    await createWeb3Wallet(state.web3Core)
      .then(web3Wallet => setState(prevState => ({ ...prevState, web3Wallet })))
      .then(() => initWallet(mnemonic));

  const initWallet = (mnemonic?: string) => {
    const wallet = createWallet(mnemonic);
    setState(prevState => ({ ...prevState, wallet }));
  };

  return (
    <WalletContextProvider value={{ ...state, initContext, initWallet }}>
      {children}
    </WalletContextProvider>
  );
};

export const useWalletContext = useContext;
