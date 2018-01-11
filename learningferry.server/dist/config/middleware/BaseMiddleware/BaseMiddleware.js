"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BodyParser = require("body-parser");
const MethodOveride_1 = require("../MethodOveride");
const express = require("express");
const BaseRoute_1 = require("../../routes/BaseRoute");
const morgan = require("morgan");
class BaseMidlleware {
    static get configuration() {
        var app = express();
        app.use(BodyParser.urlencoded({ extended: true }));
        app.use(BodyParser.json());
        app.use(morgan('dev'));
        app.use(BaseRoute_1.default.routes);
        app.use(MethodOveride_1.default.configuration);
        return app;
    }
}
exports.default = BaseMidlleware;
//# sourceMappingURL=BaseMiddleware.js.map