import { Uu } from 'pollenium-uvaursi'
import { Address } from 'pollenium-buttercup'
import * as _overseers from './overseers'

export const dai = new Address(Uu.fromHexish('6B175474E89094C44Da98b954EedeAC495271d0F'))

export { engine } from './addresses/engine'
export { monarchicExecutorOracle } from './addresses/monarchicExecutorOracle'

export const overseers = _overseers
