import { provider } from './provider'
import { ethers } from 'ethers'
import { Bytes32 } from 'pollenium-buttercup'
import { EngineDeployer } from 'pollenium-alchemilla'
import { promptFetchKeypair } from 'pollenium-xeranthemum'

export async function promptFetchSigner(name: string) {
  const keypair = await promptFetchKeypair(name)
  return new ethers.Wallet(keypair.privateKey.u, provider)
}
