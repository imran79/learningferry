"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserBusiness_1 = require("../app/business/UserBusiness");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const PassportFacebookAuth_1 = require("../authenticate/PassportFacebookAuth");
const moment = require("moment");
const PassportJwtAuth_1 = require("../authenticate/PassportJwtAuth");
const PassportLocalAuth_1 = require("../authenticate/PassportLocalAuth");
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
        this.getToken = (user) => {
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
        };
        this.allPathValid = (req, res, next) => {
            if (req.headers["authorization"]) {
                let authController = new AuthController();
                console.log(req.headers["authorization"]);
                return authController.jwtAuth((err, user, info) => {
                    if (err) {
                        return next(err);
                    }
                    if (!user) {
                        if (info.name === "TokenExpiredError") {
                            return res.status(401).json({ message: "Your token has expired. Please generate a new one" });
                        }
                        else {
                            return res.status(401).json({ message: info.message });
                        }
                    }
                    //   app.set("user", user);
                    return next();
                })(req, res, next);
            }
            next();
        };
        this.jwtAuth = (callback) => passport.authenticate("jwt", { session: false, failWithError: true }, callback);
        this.localAuth = (req, res, next) => {
            passport.authenticate('local', (err, user, info) => {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    return res.redirect('/login');
                }
                req.logIn(user, (err) => {
                    if (err) {
                        return next(err);
                    }
                    return res.status(200).json(this.getToken(user));
                });
            })(req, res, next);
        };
        this.userBusiness = new UserBusiness_1.default();
    }
}
AuthController.initialize = () => {
    passport.use('jwt', PassportJwtAuth_1.default.getJwtAuth());
    passport.use('facebook', PassportFacebookAuth_1.default.getfacebookAuthStrategy);
    passport.use('local', PassportLocalAuth_1.default.getLocalAuthStrategy());
    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
    return passport.initialize();
};
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map