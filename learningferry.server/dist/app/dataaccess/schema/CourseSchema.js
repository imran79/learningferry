"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
const mongoose = require("mongoose");
const SectionSchema_1 = require("./SectionSchema");
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class CourseSchema {
    static get schema() {
        var courseSchema = new mongoose.Schema({
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
                default: "",
                required: false
            },
            title: {
                type: String,
                default: "",
                required: true
            },
            content: {
                type: String,
                default: ""
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
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            sections: [SectionSchema_1.default.schema]
        });
        return courseSchema;
    }
}
const schema = mongooseConnection.model("Course", CourseSchema.schema);
exports.default = schema;
//# sourceMappingURL=CourseSchema.js.map