import { forgetmenot } from './forgetmenot'
import { MonarchicExecutorOracleReader } from 'pollenium-orchid'
import { provider } from './provider'
import { Address } from 'pollenium-buttercup'

export interface MonarchicExecutorOracleState {
  owner: Address,
  hot: Address,
  cold: Address
}

export async function fetchMonarchicExecutorOracleState(): Promise<MonarchicExecutorOracleState> {
  const address = new Address(forgetmenot.get('monarchicExecutorOracle'))
  const reader = new MonarchicExecutorOracleReader(provider, address)
  return {
    owner: await reader.fetchOwner(),
    hot: await reader.fetchHot(),
    cold: await reader.fetchCold()
  }
}
