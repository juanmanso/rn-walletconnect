import React, { PropsWithChildren, useState } from 'react';
import { Core } from '@walletconnect/core';
import { ICore } from '@walletconnect/types';
import { IWeb3Wallet } from '@walletconnect/web3wallet';
// @ts-expect-error - env is a virtualised module via Babel config.
import { ENV_PROJECT_ID, ENV_RELAY_URL } from '@env';

import { createCtx } from '.';
import { createWeb3Wallet } from '../utils/wallet';

// State variables only
interface WalletContextState {
  core: ICore;
  wallet?: IWeb3Wallet;
}

// This interface differentiates from State
// because it holds any other option or fx
// that handle the state in some way
interface WalletContext extends WalletContextState {
  initWallet: () => Promise<void>;
}

const INITIAL_STATE: WalletContextState = {
  core: new Core({
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

  const initWallet = async () =>
    await createWeb3Wallet(state.core).then(wallet =>
      setState(prevState => ({ ...prevState, wallet })),
    );

  return (
    <WalletContextProvider value={{ ...state, initWallet }}>
      {children}
    </WalletContextProvider>
  );
};

export const useWalletContext = useContext;
