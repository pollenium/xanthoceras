import { promptFetchAdminSigner } from './lib/promptFetchAdminSigner'
import { OverseerDeployer } from 'pollenium-honesty'
import { Uu } from 'pollenium-uvaursi'
import { overseersFmn } from './lib/fmns'
import { engine } from '../'
import prompt from 'prompt-promise'

const dai = Uu.fromHexish('0x6B175474E89094C44Da98b954EedeAC495271d0F')

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
