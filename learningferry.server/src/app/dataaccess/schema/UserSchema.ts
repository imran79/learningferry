
import { UserModel as IUser } from '../../model/interface/UserModel'
import DataAccess from '../DataAccess'
import * as mongoose from 'mongoose';
import * as bcrypt from "bcryptjs";


var mongooseConnection = DataAccess.mongooseConnection;

export const userSchema = new mongoose.Schema({

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
        required: true,
        unique: true,
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

userSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        this.password = hash;
        next();
    });
});

userSchema.pre("update", function (next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        this.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function (candidatePassword: string): Promise<boolean> {
    let password = this.password;
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, password, (err, success) => {
            if (err) return reject(err);
            return resolve(success);
        });
    });

};




export const model = mongoose.model<IUser>("User", userSchema);
export const cleanCollection = () => model.remove({}).exec();
export default model; 
