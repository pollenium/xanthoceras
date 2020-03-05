import { provider } from './provider'
import { ethers } from 'ethers'
import { Bytes32 } from 'pollenium-buttercup'
import { EngineDeployer } from 'pollenium-alchemilla'
import { utils, users } from 'pollenium-xeranthemum'

export async function promptFetchAdminSigner() {
  const keypair = await utils.promptComputeKeypair()
  if (!keypair.getAddress().uu.getIsEqual(users.admin)) {
    throw new Error('Address mismatch')
  }
  return new ethers.Wallet(keypair.privateKey.u, provider)
}
