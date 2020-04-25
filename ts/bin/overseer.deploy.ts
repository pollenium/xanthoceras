import { promptFetchAdminSigner } from './lib/promptFetchAdminSigner'
import { OverseerDeployer } from 'pollenium-honesty'
import { Uu } from 'pollenium-uvaursi'
import { overseersFmn } from './lib/fmns'
import { engine, dai } from '../'
import prompt from 'prompt-promise'

async function run() {
  const name = await prompt('name: ')
  const signer = await promptFetchAdminSigner()
  const deployer = new OverseerDeployer({signer })
  const { address } = await deployer.deploy({
    alchemillaEngine: engine,
    dai
  })
  overseersFmn.set({ key: name, value: address })
}

run()
