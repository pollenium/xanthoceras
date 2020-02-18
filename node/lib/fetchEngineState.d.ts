import { Address } from 'pollenium-buttercup';
export interface EngineState {
    owner: Address;
    executorOracle: Address;
}
export declare function fetchEngineState(): Promise<EngineState>;
