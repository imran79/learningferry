import * as express from 'express';
import IUser from '../app/model/interface/UserModel';
import UserBusiness from '../app/business/UserBusiness';
import IBaseController from './interface/base/BaseController';
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import facebookAuthStrategy from '../authenticate/PassportFacebookAuth';

import UserModel from '../app/model/UserModel';
import * as moment from 'moment';
import JwtAuthStrategy from '../authenticate/PassportJwtAuth';
import localAuthStrategy from '../authenticate/PassportLocalAuth';


class AuthController {


    private userBusiness: UserBusiness;
    private secret: string = 'God is one';

    constructor() {
        this.userBusiness = new UserBusiness();
    }

    initialize = () => {
        passport.use('jwt', JwtAuthStrategy.getJwtAuth());
        passport.use('facebook', facebookAuthStrategy.getfacebookAuthStrategy);
        passport.use('local', localAuthStrategy.getLocalAuthStrategy());
        passport.initialize();
    }

    facebookAuth = passport.authenticate('facebook', {
        scope: ['user_status', 'user_checkins']
    });


    facebookAuthCallback = passport.authenticate('facebook', {
        successRedirect: 'http://localhost:4200/',
        failureRedirect: '/'
    });


    private getToken = (user: IUser): Object => {

        const expires = moment().utc().add({ days: 7 }).unix();
        let token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: user.username
        }, this.secret);

        return {
            token: token,
            expiry: moment.unix(expires).format(),
            user: user._id
        };

    }


    jwtAuth = (callback) => passport.authenticate("jwt", { session: false, failWithError: true }, callback);

    localAuth(req: express.Request, res: express.Response, next: express.NextFunction): void {

        passport.authenticate('local', function (err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function (err) {
                if (err) { return next(err); }
                return res.status(200).json(this.getToken(user));
            });
        })(req, res, next);
    }
}
export default AuthController;