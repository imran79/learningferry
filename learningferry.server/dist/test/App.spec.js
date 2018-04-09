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
const common_1 = require("./common");
describe("# Auth", () => {
    const endpoint = process.env.API_BASE + "login";
    it("should retrieve the token", () => __awaiter(this, void 0, void 0, function* () {
        debugger;
        return yield common_1.clearUsers().then((res) => __awaiter(this, void 0, void 0, function* () {
            return yield common_1.login().then(res => {
                if (res) {
                    res.status.should.equal(200);
                    res.body.token.should.not.be.empty;
                } // jshint ignore:line
            });
        })); //
    }));
});
//# sourceMappingURL=App.spec.js.map