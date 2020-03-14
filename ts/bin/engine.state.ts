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
    depositSalt: (await reader.fetchDepositSalt()).uu.toHex(),
    withdrawSalt: (await reader.fetchWithdrawSalt()).uu.toHex(),
    withdrawAndNotifySalt: (await reader.fetchWithdrawAndNotifySalt()).uu.toHex()
  })
}

run()
