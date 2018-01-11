"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserSchema_1 = require("../dataaccess/schema/UserSchema");
const BaseRepository_1 = require("./base/BaseRepository");
class UserRepository extends BaseRepository_1.default {
    constructor() {
        super(UserSchema_1.default);
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map