"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = require("../repository/UserRepository");
class UserBusiness {
    constructor() {
        this.userRepository = new UserRepository_1.default();
    }
    create(item, callback) {
        this.userRepository.create(item, callback);
    }
    update(id, item, callback) {
        this.userRepository.findById(id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this.userRepository.update(res._id, item, callback);
        });
    }
    delete(id, callback) {
        this.userRepository.delete(id, callback);
    }
    findAll(callback) {
        this.userRepository.findAll(callback);
    }
    findById(id, callback) {
        this.userRepository.findById(id, callback);
    }
}
exports.default = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map