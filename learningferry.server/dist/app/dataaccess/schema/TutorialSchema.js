"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
const mongoose = require("mongoose");
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class TutorialSchema {
    static get schema() {
        var tutorialSchema = new mongoose.Schema({
            createdat: {
                type: Date,
                default: Date.now
            },
            lastupdatedat: {
                type: Date,
                default: Date.now
            },
            createBy: {
                type: String,
                default: '',
                required: true
            },
            title: {
                type: String,
                default: '',
                required: true
            },
            content: {
                type: String,
                default: ''
            },
            isdraft: {
                type: Boolean,
                default: false
            },
            isarchive: {
                type: Boolean,
                default: false
            },
            ispublish: {
                type: Boolean,
                default: false
            },
            author: {
                type: mongoose.Schema.Types.ObjectId, ref: 'User'
            }
        });
        return tutorialSchema;
    }
}
const schema = mongooseConnection.model("Tutorial", TutorialSchema.schema);
exports.default = schema;
//# sourceMappingURL=TutorialSchema.js.map