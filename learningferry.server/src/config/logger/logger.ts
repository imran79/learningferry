import * as winston from 'winston';

class logger {

    constructor() {
        winston.emitErrs = true;

    }

    static get log(): any {
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
        })
    };


}

export default logger;

