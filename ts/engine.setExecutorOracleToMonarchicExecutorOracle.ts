import { promptFetchSigner } from './lib/promptFetchSigner'
import { EngineWriter } from 'pollenium-orchid'
import { forgetmenot } from './lib/forgetmenot'
import { fetchEngineState } from './lib/fetchEngineState'
import { Address } from 'pollenium-buttercup'

async function run() {

  const engine = new Address(forgetmenot.get('engine'))
  const monarchicExecutorOracle = new Address(forgetmenot.get('monarchicExecutorOracle'))

  const engineState = await fetchEngineState()
  if (engineState.executorOracle.uu.getIsEqual(monarchicExecutorOracle)) {
    throw new Error('Already set')
  }

  const signer = await promptFetchSigner('admin')
  const writer = new EngineWriter(signer, engine)

  await writer.setExecutorOracle(monarchicExecutorOracle)
}

run()
