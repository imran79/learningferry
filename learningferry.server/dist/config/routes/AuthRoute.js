"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController_1 = require("../../controller/AuthController");
const express_1 = require("express");
var router = express_1.Router();
class AuthRoute {
    constructor() {
        this.authController = new AuthController_1.default;
    }
    get Routes() {
        router.get("/auth/facebook", this.authController.facebookAuth);
        router.post("/auth/facebook/callback", this.authController.facebookAuthCallback);
        router.post("/login", this.authController.localAuth);
        return router;
    }
}
exports.default = AuthRoute;
//# sourceMappingURL=AuthRoute.js.map