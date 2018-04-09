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
process.env.NODE_ENV = 'test';
const UserSchema_1 = require("../app/dataaccess/schema/UserSchema");
exports.chai = require('chai');
exports.chaiHttp = require('chai-http');
let should = exports.chai.should();
let expect = exports.chai.expect;
exports.chai.use(exports.chaiHttp);
const index_1 = require("../index");
const testUser = { "username": "testuser", "firstname": 'testFirstName', "lastname": 'testlastname', "password": "mytestpass", "email": "test@email.com" };
const createTestUser = () => __awaiter(this, void 0, void 0, function* () {
    console.log('createTest');
    const user = new UserSchema_1.model(testUser);
    return yield UserSchema_1.model.create(user);
});
const getUser = () => __awaiter(this, void 0, void 0, function* () {
    console.log('getUser');
    let users = yield UserSchema_1.model.find({});
    if (users.length === 0) {
        yield createTestUser();
        return yield getUser();
    }
    else {
        return users[0];
    }
});
exports.login = () => __awaiter(this, void 0, void 0, function* () {
    let user = yield getUser();
    return exports.chai.request(index_1.server).post(process.env.API_BASE + 'auth/login').send({ "username": user.email, "password": testUser.password });
});
exports.clearUsers = () => __awaiter(this, void 0, void 0, function* () {
    yield UserSchema_1.model.remove({}).exec();
});
//# sourceMappingURL=common.js.map