"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("../../controller/UserController");
const express_1 = require("express");
var router = express_1.Router();
class UserRoute {
    constructor() {
        this.userController = new UserController_1.default;
    }
    get Routes() {
        console.log(process.env.API_BASE);
        router.get(process.env.API_BASE + "users", this.userController.findAll);
        router.post(process.env.API_BASE + "user", this.userController.create);
        router.get(process.env.API_BASE + "users/:_id", this.userController.findById);
        router.delete(process.env.API_BASE + "users/:_id", this.userController.delete);
        router.put(process.env.API_BASE + "users", this.userController.update);
        return router;
    }
}
exports.default = UserRoute;
//# sourceMappingURL=UserRoute.js.map