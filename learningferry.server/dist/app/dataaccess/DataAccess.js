"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Constants_1 = require("../../config/constants/Constants");
const logger_1 = require("../../config/logger/logger");
class DataAccess {
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseInstance = mongoose.connect(Constants_1.default.getConnectionString());
        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to mongoDB.");
        });
        this.mongooseConnection.on('error', logger_1.default.log.error.bind(console, 'connection error:'));
        return this.mongooseInstance;
    }
    constructor() {
        console.log('constructor');
        DataAccess.connect();
    }
}
DataAccess.connect();
exports.default = DataAccess;
//# sourceMappingURL=DataAccess.js.map