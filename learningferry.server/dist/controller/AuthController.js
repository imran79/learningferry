"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserBusiness_1 = require("../app/business/UserBusiness");
const passport = require("passport");
const jwt = require("jsonwebtoken");
class AuthController {
    constructor() {
        this.secret = 'God is one';
        this.facebookAuth = passport.authenticate('facebook', {
            scope: ['user_status', 'user_checkins']
        });
        this.facebookAuthCallback = passport.authenticate('facebook', {
            successRedirect: 'http://localhost:4200/',
            failureRedirect: '/'
        });
        this.userBusiness = new UserBusiness_1.default();
    }
    localAuth(req, res) {
        if (req.body.username === 'imran' && req.body.password === 'khan') {
            const jwtToken = jwt.sign('imrankhan', this.secret);
            res.send({ 'success': 'login is successful', 'token': jwtToken });
        }
    }
    ;
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map