"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = require("passport-jwt");
const UserSchema_1 = require("../app/dataaccess/schema/UserSchema");
class JwtAuthStrategy extends passport_jwt_1.Strategy {
    constructor(opt, verify) {
        super(opt, verify);
    }
}
JwtAuthStrategy.VerifyCallbackWithRequest = (req, payload, done) => {
    UserSchema_1.model.findOne({ username: payload.username }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, null, { message: 'token has been expired' });
        }
        return done(null, user, { message: 'token is valid' });
    });
};
JwtAuthStrategy.getJwtAuth = () => {
    const params = {
        secretOrKey: 'God is one',
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        passReqToCallback: true
    };
    return new JwtAuthStrategy(params, JwtAuthStrategy.VerifyCallbackWithRequest);
};
exports.default = JwtAuthStrategy;
//# sourceMappingURL=PassportJwtAuth.js.map