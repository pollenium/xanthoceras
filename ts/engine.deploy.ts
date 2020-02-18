import { promptFetchSigner } from './lib/promptFetchSigner'
import { EngineDeployer } from 'pollenium-orchid'
import { forgetmenot } from './lib/forgetmenot'

async function run() {
  const signer = await promptFetchSigner('admin')
  const deployer = new EngineDeployer(signer)
  const address = await deployer.deploy()
  forgetmenot.set('engine', address)
}

run()
