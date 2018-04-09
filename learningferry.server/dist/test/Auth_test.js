"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
describe("# Auth", () => {
    const endpoint = process.env.API_BASE + "login";
    it("should retrieve the token", () => {
        return common_1.login().then(res => {
            res.status.should.equal(200);
            res.body.token.should.not.be.empty; // jshint ignore:line
        });
    });
});
//# sourceMappingURL=Auth_test.js.map