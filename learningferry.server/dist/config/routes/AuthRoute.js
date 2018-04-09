"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController_1 = require("../../authenticate/controller/AuthController");
const express_1 = require("express");
var router = express_1.Router();
class AuthRoute {
    constructor() {
        this.authController = new AuthController_1.default;
    }
    get Routes() {
        //  router.all(process.env.API_BASE + '*', this.authController.allPathValid)
        router.get(process.env.API_BASE + "auth/facebook", this.authController.facebookAuth);
        router.post(process.env.API_BASE + "auth/facebook/callback", this.authController.facebookAuthCallback);
        router.post(process.env.API_BASE + "auth/login", this.authController.localAuth);
        return router;
    }
}
exports.default = AuthRoute;
//# sourceMappingURL=AuthRoute.js.map