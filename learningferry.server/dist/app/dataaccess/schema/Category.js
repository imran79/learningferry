"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
const mongoose = require("mongoose");
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class CategorySchema {
    static get schema() {
        var categorySchema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
                default: ''
            },
            parentcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false },
            description: {
                type: String,
                required: false,
                default: ''
            }
        });
        return categorySchema;
    }
}
const schema = mongooseConnection.model("Category", CategorySchema.schema);
exports.default = schema;
//# sourceMappingURL=Category.js.map