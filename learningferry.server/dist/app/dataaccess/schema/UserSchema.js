"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var mongooseConnection = DataAccess_1.default.mongooseConnection;
exports.userSchema = new mongoose.Schema({
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
        default: "",
        required: true
    },
    lastname: {
        type: String,
        default: "",
        required: true
    },
    username: {
        type: String,
        default: "",
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        default: "",
        required: true,
        unique: true
    },
    isadmin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        default: "",
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
exports.userSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        this.password = hash;
        next();
    });
});
exports.userSchema.pre("update", function (next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        this.password = hash;
        next();
    });
});
exports.userSchema.methods.comparePassword = function (candidatePassword) {
    let password = this.password;
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, password, (err, success) => {
            if (err)
                return reject(err);
            return resolve(success);
        });
    });
};
exports.model = mongoose.model("User", exports.userSchema);
exports.cleanCollection = () => exports.model.remove({}).exec();
exports.default = exports.model;
//# sourceMappingURL=UserSchema.js.map