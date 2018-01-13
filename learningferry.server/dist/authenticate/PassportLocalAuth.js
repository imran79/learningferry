"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passportlocal = require("passport-local");
class localAuthStrategy extends passportlocal.Strategy {
    /*interface VerifyFunction {
        (username: string, password: string, done: (error: any, user?: any, options?: IVerifyOptions) => void): void;
    }*/
    static verifyFunction(username, password, done) {
        // fetch the user from database based on the username and password
        // return the done callback  
    }
}
exports.default = localAuthStrategy;
//# sourceMappingURL=PassportLocalAuth.js.map