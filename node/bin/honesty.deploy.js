// import { promptFetchAdminSigner } from './lib/promptFetchAdminSigner'
// import { OverseerDeployer } from 'pollenium-honesty'
// import { Forgetmenot } from '../'
// import { Uu } from 'pollenium-uvaursi'
// import prompt from 'prompt-promise'
//
// const forgetmenot = new Forgetmenot(`${__dirname}/../../ts/overseers`)
// const dai = Uu.fromHexish('0x6B175474E89094C44Da98b954EedeAC495271d0F')
//
// async function run() {
//   const slug = await prompt('slug: ')
//   const signer = await promptFetchAdminSigner()
//   const deployer = new OverseerDeployer({signer })
//   const { address } = await deployer.deploy({
//     alchemillaEngine: xanthoceras.get('engine'),
//     dai
//   })
//   forgetmenot.set({ key: slug, value: address })
// }
//
// run()
