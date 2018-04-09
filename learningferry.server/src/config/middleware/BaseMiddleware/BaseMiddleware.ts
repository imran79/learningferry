import * as BodyParser from 'body-parser';
import MethodOverride from '../MethodOveride';
//const dotenv = require('dotenv').config();

import * as express from 'express';
import BaseRoute from '../../routes/BaseRoute';
import * as morgan from 'morgan';
import AuthController from '../../../authenticate/controller/AuthController';
const expressValidator = require("express-validator");

class BaseMidlleware {

    static get configuration(): any {
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
        app.use(AuthController.initialize());
        app.get("/", (req, res) => res.status(200).json({ message: "Welcome to the TODO API. Check the documentation for the list of available endpoints" }));


        app.use(BaseRoute.routes);

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
        app.use(MethodOverride.configuration);
        return app;
    }
}

export default BaseMidlleware;