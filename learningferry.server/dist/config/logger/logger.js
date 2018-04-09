"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
class logger {
    constructor() {
        winston.emitErrs = true;
    }
    static get log() {
        return new winston.Logger({
            transports: [
                new winston.transports.Console({
                    level: "debug",
                    handleExceptions: true,
                    json: false,
                    colorize: true
                })
            ],
            exitOnError: false
        });
    }
    ;
}
exports.default = logger;
//# sourceMappingURL=logger.js.map