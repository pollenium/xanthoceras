import { promptFetchSigner } from './lib/promptFetchSigner'
import { EngineWriter } from 'pollenium-orchid'
import { xanthoceras } from '../'
import { fetchEngineState } from './lib/fetchEngineState'
import { Address } from 'pollenium-buttercup'

async function run() {

  const engine = new Address(xanthoceras.get('engine'))
  const monarchicExecutorOracle = new Address(xanthoceras.get('monarchicExecutorOracle'))

  const engineState = await fetchEngineState()
  if (engineState.executorOracle.uu.getIsEqual(monarchicExecutorOracle)) {
    throw new Error('Already set')
  }

  const signer = await promptFetchSigner('admin')
  const writer = new EngineWriter(signer, engine)

  await writer.setExecutorOracle(monarchicExecutorOracle)
}

run()
