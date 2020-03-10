"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
var pollenium_buttercup_1 = require("pollenium-buttercup");
var _overseers = __importStar(require("./overseers"));
exports.dai = new pollenium_buttercup_1.Address(pollenium_uvaursi_1.Uu.fromHexish('6B175474E89094C44Da98b954EedeAC495271d0F'));
var engine_1 = require("./addresses/engine");
exports.engine = engine_1.engine;
var monarchicExecutorOracle_1 = require("./addresses/monarchicExecutorOracle");
exports.monarchicExecutorOracle = monarchicExecutorOracle_1.monarchicExecutorOracle;
exports.overseers = _overseers;
