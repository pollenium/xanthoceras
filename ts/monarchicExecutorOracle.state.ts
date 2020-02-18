import { fetchMonarchicExecutorOracleState } from './lib/fetchMonarchicExecutorOracleState'

async function run() {
  const state = await fetchMonarchicExecutorOracleState()
  console.dir({
    owner: state.owner.uu.toHex(),
    hot: state.hot.uu.toHex(),
    cold: state.cold.uu.toHex()
  })
}

run()
