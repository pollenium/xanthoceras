import { Address, Bytes32 } from 'pollenium-buttercup';
import * as _overseers from './overseers';
export declare const dai: Address;
export { engine } from './addresses/engine';
export { monarchicExecutorOracle } from './addresses/monarchicExecutorOracle';
export declare const overseers: typeof _overseers;
export declare const applicationIds: {
    alchemilla: {
        signedOrders: {
            v0: Bytes32;
        };
    };
};
export declare const signalingServerUrls: string[];
