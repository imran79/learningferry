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
        router.get("/users", this.userController.findAll);
        router.post("/user", this.userController.create);
        router.get("/users/:_id", this.userController.findById);
        router.delete("/users/:_id", this.userController.delete);
        router.put("/users", this.userController.update);
        return router;
    }
}
exports.default = UserRoute;
//# sourceMappingURL=UserRoute.js.map