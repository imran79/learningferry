import * as express from 'express';
import IUser from '../app/model/interface/User';
import UserBusiness from '../app/business/UserBusiness';
import IBaseController from './interface/base/BaseController';
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import facebookAuthStrategy from '../authenticate/PassportFacebookAuth';
import localAuthStrategy from '../authenticate/PassportLocalAuth';


class AuthController {


    private userBusiness: UserBusiness;
    private secret: string = 'God is one';

    constructor() {
        this.userBusiness = new UserBusiness();
    }

    facebookAuth = passport.authenticate('facebook', {
        scope: ['user_status', 'user_checkins']
    });


    facebookAuthCallback = passport.authenticate('facebook', {
        successRedirect: 'http://localhost:4200/',
        failureRedirect: '/'
    });

    localAuth(req: express.Request, res: express.Response): void {
        if (req.body.username === 'imran' && req.body.password === 'khan') {
            const jwtToken = jwt.sign('imrankhan', this.secret);
            res.send({ 'success': 'login is successful', 'token': jwtToken })
        }
    };

}

export default AuthController;