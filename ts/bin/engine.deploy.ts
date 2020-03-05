import { promptFetchAdminSigner } from './lib/promptFetchAdminSigner'
import { EngineDeployer } from 'pollenium-alchemilla'
import { addressesFmn } from './lib/fmns'

async function run() {
  const signer = await promptFetchAdminSigner()
  const deployer = new EngineDeployer({ signer })
  const { address } = await deployer.deploy()
  addressesFmn.set({ key: 'engine', value: address })
}

run()
