"use strict";
exports.__esModule = true;
var provider_1 = require("./provider");
var ethers_1 = require("ethers");
function genSigner(privateKey) {
    return new ethers_1.ethers.Wallet(privateKey.u, provider_1.provider);
}
exports.genSigner = genSigner;
