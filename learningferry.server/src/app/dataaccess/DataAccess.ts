import * as mongoose from 'mongoose';
import Constants from '../../config/constants/Constants';

class DataAccess {
    public static mongooseInstance: any;
    public static mongooseConnection: mongoose.Connection;
    static connect(): mongoose.Connection {
        if (this.mongooseInstance) return this.mongooseInstance;
        this.mongooseInstance = mongoose.connect(Constants.DB_Connection_String);
        this.mongooseConnection = mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to mongoDB.");
        });

        this.mongooseConnection.on('error', console.error.bind(console, 'connection error:'));

        return this.mongooseInstance;
    }

    constructor() {
        console.log('constructor')
        DataAccess.connect();

    }
}
DataAccess.connect();
export default DataAccess;