import { Strategy, ExtractJwt, StrategyOptions, VerifyCallbackWithRequest } from "passport-jwt";
import * as express from 'express';
import { model as User } from '../../app/dataaccess/schema/UserSchema';
import { UserModel as IUserModel } from '../../app/model/interface/UserModel';

class JwtAuthStrategy extends Strategy {

    constructor(opt: StrategyOptions, verify: VerifyCallbackWithRequest) {
        super(opt, verify);
    }


    static VerifyCallbackWithRequest = (req: express.Request, payload: any,
        done: (error: any, user?: any, info?: any) => void): void => {
        User.findOne({ username: payload.username }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, null, { message: 'token has been expired' });
            }
            return done(null, user, { message: 'token is valid' });
        });
    }

    static getJwtAuth = (): JwtAuthStrategy => {
        const params = {
            secretOrKey: 'God is one',
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
            passReqToCallback: true
        };
        return new JwtAuthStrategy(params, JwtAuthStrategy.VerifyCallbackWithRequest);
    }

}

export default JwtAuthStrategy;