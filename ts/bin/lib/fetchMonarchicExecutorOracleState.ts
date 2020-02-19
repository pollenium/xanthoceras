import { xanthoceras } from '../../'
import { MonarchicExecutorOracleReader } from 'pollenium-alchemilla'
import { provider } from './provider'
import { Address } from 'pollenium-buttercup'

export interface MonarchicExecutorOracleState {
  owner: Address,
  hot: Address,
  cold: Address
}

export async function fetchMonarchicExecutorOracleState(): Promise<MonarchicExecutorOracleState> {
  const address = new Address(xanthoceras.get('monarchicExecutorOracle'))
  const reader = new MonarchicExecutorOracleReader({ provider, address })
  return {
    owner: await reader.fetchOwner(),
    hot: await reader.fetchHot(),
    cold: await reader.fetchCold()
  }
}
