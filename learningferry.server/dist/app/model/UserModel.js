"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    constructor(model) {
        this._user = model;
    }
    get createdAt() {
        return this._user.createdat;
    }
    get updatedAt() {
        return this._user.updatedat;
    }
    get firstName() {
        return this._user.firstname;
    }
    get lastName() {
        return this._user.lastname;
    }
    get username() {
        return this._user.username;
    }
    get email() {
        return this._user.email;
    }
    get password() {
        return this._user.password;
    }
    comparePassword(candidatePassword) {
        return this._user.comparePassword(candidatePassword);
    }
}
exports.UserModel = UserModel;
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map