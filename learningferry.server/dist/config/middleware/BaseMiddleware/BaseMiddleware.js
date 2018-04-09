"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BodyParser = require("body-parser");
const MethodOveride_1 = require("../MethodOveride");
//const dotenv = require('dotenv').config();
const express = require("express");
const BaseRoute_1 = require("../../routes/BaseRoute");
const morgan = require("morgan");
const AuthController_1 = require("../../../authenticate/controller/AuthController");
const expressValidator = require("express-validator");
class BaseMidlleware {
    static get configuration() {
        console.log('BaseMidleware');
        var app = express();
        app.use(BodyParser.urlencoded({ extended: true }));
        app.use(BodyParser.json());
        app.use(expressValidator({
            customValidators: {
                isArray: function (value) {
                    return Array.isArray(value);
                }
            }
        }));
        app.enable("trust proxy");
        app.use(morgan('dev'));
        app.use(AuthController_1.default.initialize());
        app.get("/", (req, res) => res.status(200).json({ message: "Welcome to the TODO API. Check the documentation for the list of available endpoints" }));
        app.use(BaseRoute_1.default.routes);
        // If no route is matched by now, it must be a 404
        app.use((req, res, next) => {
            res.status(404).json({ "error": "Endpoint not found" });
            next();
        });
        app.use((error, req, res, next) => {
            if (process.env.NODE_ENV === "production") {
                return res.status(500).json({ "error": "Unexpected error: " + error });
            }
            next(error);
        });
        app.use(MethodOveride_1.default.configuration);
        return app;
    }
}
exports.default = BaseMidlleware;
//# sourceMappingURL=BaseMiddleware.js.map