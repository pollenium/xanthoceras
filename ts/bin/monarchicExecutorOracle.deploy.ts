import { promptFetchSigner } from './lib/promptFetchSigner'
import { MonarchicExecutorOracleDeployer } from 'pollenium-orchid'
import { xanthoceras } from '../'

async function run() {
  const signer = await promptFetchSigner('admin')
  const deployer = new MonarchicExecutorOracleDeployer(signer)
  const address = await deployer.deploy()
  xanthoceras.set('monarchicExecutorOracle', address)
}

run()
