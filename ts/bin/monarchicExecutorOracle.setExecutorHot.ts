import { promptFetchAdminSigner } from './lib/promptFetchAdminSigner'
import { MonarchicExecutorOracleWriter } from 'pollenium-alchemilla'
import prompt from 'prompt-promise'
import { Address } from 'pollenium-buttercup'
import { Uu } from 'pollenium-uvaursi'
import { monarchicExecutorOracle } from '../'

async function run() {
  const executorHotHex = await prompt('executorHot (hex): ')

  const executorHot = new Address(Uu.fromHexish(executorHotHex))

  const signer = await promptFetchAdminSigner()

  await new MonarchicExecutorOracleWriter({
    signer,
    address: monarchicExecutorOracle
  }).setHot(executorHot)

}

run()
