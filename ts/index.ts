import { Uu } from 'pollenium-uvaursi'
import { Address, Bytes32 } from 'pollenium-buttercup'
import * as _overseers from './overseers'

export const dai = new Address(Uu.fromHexish('6B175474E89094C44Da98b954EedeAC495271d0F'))

export { engine } from './addresses/engine'
export { monarchicExecutorOracle } from './addresses/monarchicExecutorOracle'

export const overseers = _overseers

export const applicationIds = {
  alchemilla: {
    signedOrders: {
      v0: new Bytes32(Uu.fromUtf8('alchemilla.signedOrders.v0').genPaddedLeft(32))
    }
  }
}

export const signalingServerUrls: string[] = [
    'wss://begonia-us-1.herokuapp.com',
    'wss://begonia-eu-1.herokuapp.com'
  ]
