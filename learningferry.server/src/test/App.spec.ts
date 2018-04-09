require('dotenv').config();
import { chai, login, clearUsers } from './common';
describe("# Auth", () => {
  const endpoint = process.env.API_BASE + "login";

  it("should retrieve the token", async () => {
    debugger;
    return await clearUsers().then(async res => {
      return await login().then(res => {
        if (res) {
          res.status.should.equal(200);
          res.body.token.should.not.be.empty;
        } // jshint ignore:line
      });
    });//
  });

});