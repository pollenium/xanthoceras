import { xanthoceras } from '../../'
import { EngineReader } from 'pollenium-orchid'
import { provider } from './provider'
import { Address } from 'pollenium-buttercup'

export interface EngineState {
  owner: Address,
  executorOracle: Address,
}

export async function fetchEngineState(): Promise<EngineState> {
  const address = new Address(xanthoceras.get('engine'))
  const reader = new EngineReader(provider, address)
  return {
    owner: await reader.fetchOwner(),
    executorOracle: await reader.fetchExecutorOracle()
  }
}
