"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_facebook_1 = require("passport-facebook");
class facebookAuthStrategy extends passport_facebook_1.Strategy {
    constructor(options, verify) {
        super(options, verify);
    }
    static configureFacebookStrategyOption() {
        this.strategyOption = new Object();
        this.strategyOption.clientID = '1447216448661076';
        this.strategyOption.clientSecret = '75792c437f1083936ffacd691ec09dff';
        this.strategyOption.callbackURL = 'http://localhost:5000/login/facebook/callback';
    }
    static get getfacebookAuthStrategy() {
        console.log('reach passportAuth');
        this.configureFacebookStrategyOption();
        return new facebookAuthStrategy(this.strategyOption, this.verifyFunction);
    }
    static verifyFunction(accessToken, refreshToken, profile, done) {
        console.log('accessToken :' + accessToken);
        console.log(refreshToken);
        console.log(profile);
        done(null, profile);
    }
}
exports.default = facebookAuthStrategy;
//# sourceMappingURL=PassportFacebookAuth.js.map