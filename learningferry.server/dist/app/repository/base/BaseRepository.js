"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class BaseReposiotry {
    constructor(schemaModel) {
        this.model = schemaModel;
    }
    create(item, callback) {
        this.model.create(item, callback);
    }
    update(id, item, callback) {
        this.model.update({ _id: id }, item, callback);
    }
    delete(id, callback) {
        this.model.remove({ _id: this.toObjectId(id) }, (err) => callback(err, null));
    }
    findAll(callback) {
        this.model.find(callback);
    }
    findById(id, callback) {
        this.model.findById(id, callback);
    }
    toObjectId(_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}
exports.default = BaseReposiotry;
//# sourceMappingURL=BaseRepository.js.map