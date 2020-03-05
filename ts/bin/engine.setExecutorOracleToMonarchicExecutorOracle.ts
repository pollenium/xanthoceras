import { promptFetchAdminSigner } from './lib/promptFetchAdminSigner'
import { EngineWriter } from 'pollenium-alchemilla'
import { engine, monarchicExecutorOracle } from '../'

async function run() {

  const signer = await promptFetchAdminSigner()
  const writer = new EngineWriter({ signer, address: engine })

  await writer.setExecutorOracle(monarchicExecutorOracle)
}

run()
