"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function operacion(param1, param2, operationName) {
    return __awaiter(this, void 0, void 0, function* () {
        let resul = 0;
        switch (operationName) {
            case "suma":
                let { Add } = yield Promise.resolve().then(() => __importStar(require("./src/addClass")));
                let suma = new Add(param1, param2);
                resul = suma.getResult();
                break;
            case "resta":
                let { Subtract } = yield Promise.resolve().then(() => __importStar(require("./src/subtractClass")));
                let resta = new Subtract(param1, param2);
                resul = resta.getResult();
                break;
            default:
                break;
        }
        return resul;
    });
}
function operaciones() {
    operacion(5, 5, 'suma').then(e => console.log(e));
    operacion(5, 4, 'resta').then(e => console.log(e));
    operacion(5, -9, 'suma').then(e => console.log(e));
    operacion(5, -7, 'resta').then(e => console.log(e));
    operacion(5, 5, 'sumas').then(e => console.log(e));
}
operaciones();
