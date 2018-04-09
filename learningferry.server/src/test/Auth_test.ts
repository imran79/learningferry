import { chai, login, clearUsers } from './common';


describe("# Auth", () => {
    const endpoint = process.env.API_BASE + "login";

    it("should retrieve the token", () => {

        return login().then(res => {
            res.status.should.equal(200);
            res.body.token.should.not.be.empty; // jshint ignore:line
        });

    });

});