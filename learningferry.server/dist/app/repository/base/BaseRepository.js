"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class BaseReposiotry {
    constructor(schemaModel) {
        this.create = (item, callback) => __awaiter(this, void 0, void 0, function* () {
            yield this.model.create(item, callback);
        });
        this.update = (id, item, callback) => __awaiter(this, void 0, void 0, function* () {
            yield this.model.update({ _id: id }, item, callback);
        });
        this.delete = (id, callback) => __awaiter(this, void 0, void 0, function* () {
            this.model.remove({ _id: this.toObjectId(id) }, (err) => callback(err, null));
        });
        this.findAll = (callback) => __awaiter(this, void 0, void 0, function* () {
            this.model.find(callback);
        });
        this.findById = (id, callback) => __awaiter(this, void 0, void 0, function* () {
            this.model.findById(id, callback);
        });
        this.toObjectId = (_id) => {
            return mongoose.Types.ObjectId.createFromHexString(_id);
        };
        this.model = schemaModel;
    }
}
exports.default = BaseReposiotry;
//# sourceMappingURL=BaseRepository.js.map