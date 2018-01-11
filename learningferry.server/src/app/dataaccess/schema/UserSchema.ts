import IUserModel from '../../model/User';
import IUser from '../../model/interface/User'
import DataAccess from '../DataAccess'
import * as mongoose from 'mongoose';


var mongooseConnection = DataAccess.mongooseConnection;
class UserSchema {

    static get schema() {

        var userSchema = new mongoose.Schema({

            createdat: {
                type: Date,
                default: Date.now
            },
            updatedat: {
                type: Date,
                default: Date.now
            },
            firstname: {
                type: String,
                default: '',
                required: true
            },
            lastname: {
                type: String,
                default: '',
                required: true
            },
            username: {
                type: String,
                default: '',
                required: true,
                unique: true,
                lowercase: true
            },
            email: {
                type: String,
                default: '',
                required: true
            },
            password: {
                type: String,
                default: '',
                required: true
            },
            facebook: {
                fbid: {
                    type: String,
                    trim: true
                },
                token: {
                    type: String
                },
                displayName: {
                    type: String
                },
                email: {
                    type: String
                },
                profileUrl: {
                    type: String
                }

            }
        });
        return userSchema;
    }
}

const User = mongooseConnection.model<IUser>("User", UserSchema.schema) as IUserModel;
export default User; 
