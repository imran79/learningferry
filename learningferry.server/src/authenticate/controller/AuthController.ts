import * as express from 'express';
import IUser from '../../app/model/interface/UserModel';
import UserBusiness from '../../app/business/UserBusiness';

import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import facebookAuthStrategy from '../strategy/PassportFacebookAuth';

import * as moment from 'moment';
import JwtAuthStrategy from '../strategy/PassportJwtAuth';
import localAuthStrategy from '../strategy/PassportLocalAuth';


export class AuthController {


    private userBusiness: UserBusiness;
    private secret: string = 'God is one';

    constructor() {
        this.userBusiness = new UserBusiness();
    }

    static initialize = () => {

        passport.use('jwt', JwtAuthStrategy.getJwtAuth());
        passport.use('facebook', facebookAuthStrategy.getfacebookAuthStrategy);
        passport.use('local', localAuthStrategy.getLocalAuthStrategy());
        passport.serializeUser(function (user, done) {
            done(null, user);
        });

        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
        return passport.initialize();
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



    allPathValid = (req, res, next): void => {

        if (req.headers["authorization"]) {
            let authController = new AuthController();
            console.log(req.headers["authorization"]);
            return authController.jwtAuth((err, user, info) => {
                if (err) { return next(err); }
                if (!user) {
                    if (info.name === "TokenExpiredError") {
                        return res.status(401).json({ message: "Your token has expired. Please generate a new one" });
                    } else {
                        return res.status(401).json({ message: info.message });
                    }
                }
                //   app.set("user", user);
                return next();
            })(req, res, next);
        }

        next();

    }

    jwtAuth = (callback) => passport.authenticate("jwt", { session: false, failWithError: true }, callback);

    localAuth = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
        passport.authenticate('local', (err, user, info) => {
            if (err) { return next(err); }
            if (!user) { return res.status(400).json({ 'message': 'imran check' }) }
            req.logIn(user, (err) => {
                if (err) { return next(err); }
                return res.status(200).json(this.getToken(user));
            });
        })(req, res, next);
    }
}
export default AuthController;