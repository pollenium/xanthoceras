import { promptFetchAdminSigner } from './lib/promptFetchAdminSigner'
import { MonarchicExecutorOracleDeployer } from 'pollenium-alchemilla'
import { addressesFmn } from './lib/fmns'

async function run() {
  const signer = await promptFetchAdminSigner()
  const deployer = new MonarchicExecutorOracleDeployer({ signer })
  const { address } = await deployer.deploy()
  addressesFmn.set({ key: 'monarchicExecutorOracle', value: address })
}

run()
