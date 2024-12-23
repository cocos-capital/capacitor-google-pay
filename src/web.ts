import { WebPlugin } from '@capacitor/core';

import type { GooglePayPlugin } from './definitions';

export class GooglePayWeb extends WebPlugin implements GooglePayPlugin {
  getEnvironment(): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  getStableHardwareId(): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  getActiveWalletID(): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  createWallet(): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  getTokenStatus(): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  listTokens(): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  isTokenized(): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  pushProvision(): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  resumeTokenization(): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  requestSelectToken(): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  requestDeleteToken(): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  isGPayDefaultNFCApp(): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  setGPayAsDefaultNFCApp(): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }

  registerDataChangedListener(): Promise<any> {
    throw this.unimplemented('Not implemented on web.');
  }
}
