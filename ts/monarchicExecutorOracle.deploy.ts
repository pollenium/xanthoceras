import { promptFetchSigner } from './lib/promptFetchSigner'
import { MonarchicExecutorOracleDeployer } from 'pollenium-orchid'
import { forgetmenot } from './lib/forgetmenot'

async function run() {
  const signer = await promptFetchSigner('admin')
  const deployer = new MonarchicExecutorOracleDeployer(signer)
  const address = await deployer.deploy()
  forgetmenot.set('monarchicExecutorOracle', address)
}

run()
