"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Constants {
}
Constants.DB_Connection_String = "mongodb://localhost:27017/";
Constants.getConnectionString = () => {
    let dbName;
    console.log(process.env.NODE_ENV);
    console.log(process.env.DB_IP);
    switch (process.env.NODE_ENV) {
        case "test":
            dbName = "learnandconnect_test";
            break;
        case "production":
            dbName = "learnandconnect";
            break;
        default:
            dbName = "learnandconnect";
    }
    return `mongodb://${process.env.DB_IP}:27017/${dbName}`;
};
Object.seal(Constants);
exports.default = Constants;
//# sourceMappingURL=Constants.js.map