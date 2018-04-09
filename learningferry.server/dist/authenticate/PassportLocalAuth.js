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
const passportlocal = require("passport-local");
const UserSchema_1 = require("../app/dataaccess/schema/UserSchema");
class localAuthStrategy extends passportlocal.Strategy {
    /*interface VerifyFunction {
        (username: string, password: string, done: (error: any, user?: any, options?: IVerifyOptions) => void): void;
    }*/
    constructor(options, verify) {
        super(options, verify);
    }
    static verifyFunction(username, password, done) {
        return __awaiter(this, void 0, void 0, function* () {
            // fetch the user from database based on the username and password
            // return the done callback  User
            try {
                const user = yield UserSchema_1.model.findOne({ email: username }).exec();
                if (user) {
                    if (yield user.comparePassword(password)) {
                        done(null, user, { message: 'User is valid' });
                    }
                    else {
                        done(null, null, { message: 'Password is not correct' });
                    }
                }
                else {
                    done(null, null, { message: 'this email is not registered' });
                }
            }
            catch (ex) {
                done(ex);
            }
        });
    }
}
localAuthStrategy.getLocalAuthStrategy = () => {
    console.log('reach local auth');
    const params = {
        usernameField: 'username',
        passwordField: 'password'
    };
    return new localAuthStrategy(params, localAuthStrategy.verifyFunction);
};
exports.default = localAuthStrategy;
//# sourceMappingURL=PassportLocalAuth.js.map