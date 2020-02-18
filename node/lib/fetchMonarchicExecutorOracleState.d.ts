import { Address } from 'pollenium-buttercup';
export interface MonarchicExecutorOracleState {
    owner: Address;
    hot: Address;
    cold: Address;
}
export declare function fetchMonarchicExecutorOracleState(): Promise<MonarchicExecutorOracleState>;
