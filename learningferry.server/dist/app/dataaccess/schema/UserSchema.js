"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
const mongoose = require("mongoose");
var mongooseConnection = DataAccess_1.default.mongooseConnection;
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
const schema = mongooseConnection.model("User", UserSchema.schema);
exports.default = schema;
//# sourceMappingURL=UserSchema.js.map