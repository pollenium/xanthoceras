import { xanthoceras } from '../../'
import { EngineReader } from 'pollenium-alchemilla'
import { provider } from './provider'
import { Address, Bytes32 } from 'pollenium-buttercup'

export interface EngineState {
  owner: Address,
  executorOracle: Address,
  orderSalt: Bytes32,
  dowvsSalt: Bytes32
}

export async function fetchEngineState(): Promise<EngineState> {
  const address = new Address(xanthoceras.get('engine'))
  const reader = new EngineReader({ provider, address })
  return {
    owner: await reader.fetchOwner(),
    executorOracle: await reader.fetchExecutorOracle(),
    orderSalt: await reader.fetchOrderSalt(),
    dowvsSalt: await reader.fetchDowvsSalt()
  }
}
