import { promptFetchSigner } from './lib/promptFetchSigner'
import { EngineDeployer } from 'pollenium-orchid'
import { xanthoceras } from '../'

async function run() {
  const signer = await promptFetchSigner('admin')
  const deployer = new EngineDeployer(signer)
  const address = await deployer.deploy()
  xanthoceras.set('engine', address)
}

run()
