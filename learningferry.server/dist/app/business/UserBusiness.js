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
const UserRepository_1 = require("../repository/UserRepository");
class UserBusiness {
    constructor() {
        this.create = (item, callback) => __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.create(item, callback);
        });
        this.update = (id, item, callback) => __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.findById(id, (err, res) => {
                if (err)
                    callback(err, res);
                else
                    this.userRepository.update(res._id, item, callback);
            });
        });
        this.delete = (id, callback) => __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.delete(id, callback);
        });
        this.findAll = (callback) => __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.findAll(callback);
        });
        this.findById = (id, callback) => __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.findById(id, callback);
        });
        this.userRepository = new UserRepository_1.default();
    }
}
exports.default = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map