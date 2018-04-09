"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const UserRoute_1 = require("./UserRoute");
const TutorialRoute_1 = require("./TutorialRoute");
const AuthRoute_1 = require("./AuthRoute");
var app = express();
class BaseRoute {
    static get routes() {
        app.use("/", new AuthRoute_1.default().Routes);
        app.use("/", new UserRoute_1.default().Routes);
        app.use("/", new TutorialRoute_1.default().Routes);
        return app;
    }
}
exports.default = BaseRoute;
//# sourceMappingURL=BaseRoute.js.map