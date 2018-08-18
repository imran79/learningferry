"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
const mongoose = require("mongoose");
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class SectionSchema {
    static get schema() {
        var sectionSchema = new mongoose.Schema({
            title: {
                type: String,
                default: "",
                required: true
            },
            tutorials: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Tutorial"
                }
            ]
        });
        return sectionSchema;
    }
}
exports.default = SectionSchema;
//# sourceMappingURL=SectionSchema.js.map