"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const hello = (event, context, callback) => __awaiter(this, void 0, void 0, function* () {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Hello ${Math.floor(Math.random() * 10)}`
        })
    };
    // callback(undefined, response);
    return response;
});
exports.hello = hello;
//# sourceMappingURL=handler.js.map