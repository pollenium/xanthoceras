import { Address, Bytes32 } from 'pollenium-buttercup';
export interface EngineState {
    owner: Address;
    executorOracle: Address;
    orderSalt: Bytes32;
    dowvsSalt: Bytes32;
}
export declare function fetchEngineState(): Promise<EngineState>;
