import { fetchEngineState } from './lib/fetchEngineState'

async function run() {
  const state = await fetchEngineState()
  console.dir({
    owner: state.owner.uu.toHex(),
    executorOracle: state.executorOracle.uu.toHex()
  })
}

run()
