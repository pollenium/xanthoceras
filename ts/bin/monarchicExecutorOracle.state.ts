import { MonarchicExecutorOracleReader } from 'pollenium-alchemilla'
import { provider } from './lib/provider'
import { Address } from 'pollenium-buttercup'
import { monarchicExecutorOracle } from '../'

async function run() {
  const reader = new MonarchicExecutorOracleReader({ provider, address: monarchicExecutorOracle })

  console.dir({
    owner: (await reader.fetchOwner()).uu.toHex(),
    hot: (await reader.fetchHot()).uu.toHex(),
    cold: (await reader.fetchCold()).uu.toHex()
  })
}

run()
