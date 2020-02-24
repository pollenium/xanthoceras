import { promptFetchSigner } from './lib/promptFetchSigner'
import { OverseerDeployer } from 'pollenium-honesty'
import { xanthoceras } from '../'
import { Uu } from 'pollenium-uvaursi'
import prompt from 'prompt-promise'

const dai = Uu.fromHexish('0x6B175474E89094C44Da98b954EedeAC495271d0F')

async function run() {
  const slug = await prompt('slug: ')
  if (slug.indexOf(' ') > -1) {
    throw new Error('Slug cannot contain spaces')
  }
  const signer = await promptFetchSigner('admin')
  const deployer = new OverseerDeployer({signer })
  const { address } = await deployer.deploy({
    alchemillaEngine: xanthoceras.get('engine'),
    dai
  })
  xanthoceras.set(`overseer.${slug}`, address)
}

run()
