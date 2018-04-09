"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const BaseMiddleware_1 = require("./config/middleware/BaseMiddleware/BaseMiddleware");
class App {
    constructor() {
        this.express = express();
        App.getMiddlewareConfiguration();
    }
    static get getMiddlewareConfiguration() {
        console.log('basemiddlewareconfiguration');
        return BaseMiddleware_1.default.configuration;
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map