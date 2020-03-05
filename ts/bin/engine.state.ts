import { EngineReader } from 'pollenium-alchemilla'
import { provider } from './lib/provider'
import { Address, Bytes32 } from 'pollenium-buttercup'
import { engine } from '../'

async function run() {
  const reader = new EngineReader({ provider, address: engine })
  console.dir({
    owner: (await reader.fetchOwner()).uu.toHex(),
    executorOracle: (await reader.fetchExecutorOracle()).uu.toHex(),
    orderSalt: (await reader.fetchOrderSalt()).uu.toHex(),
    dowvsSalt: (await reader.fetchDowvsSalt()).uu.toHex()
  })
}

run()
