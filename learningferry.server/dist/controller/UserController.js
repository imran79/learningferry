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
const UserBusiness_1 = require("../app/business/UserBusiness");
class UserController {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                var user = req.body;
                console.table(user);
                var userBusiness = new UserBusiness_1.default();
                yield userBusiness.create(user, (error, result) => {
                    if (error)
                        res.send({ "error": error });
                    else
                        res.send({ "success": "success" });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ "error": "error in your request" });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let user = req.body;
                let id = req.params._id;
                let userBusiness = new UserBusiness_1.default();
                yield userBusiness.update(id, user, (error, result) => {
                    if (error)
                        res.send({ "error": "error" });
                    else
                        res.send({ "success": "success", "users": result });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ "error": "error in your reqeust" });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params._id;
                let userBusiness = new UserBusiness_1.default();
                yield userBusiness.delete(id, (error, result) => {
                    if (error)
                        res.send({ "error": "error" });
                    else
                        res.send({ "success": "success" });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ "error": "error in your reqeust" });
            }
        });
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('find all');
                let userBusiness = new UserBusiness_1.default();
                yield userBusiness.findAll((error, result) => {
                    if (error)
                        res.send({ "error": "error" });
                    else
                        res.send({ "success": "success", "users": result });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ "error": "error in your reqeust" });
            }
        });
        this.findById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params._id;
                let userBusiness = new UserBusiness_1.default();
                yield userBusiness.findById(id, (error, result) => {
                    if (error)
                        res.send({ "error": "error" });
                    else
                        res.send({ "success": "success", "users": result });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ "error": "error in your reqeust" });
            }
        });
    }
}
exports.UserController = UserController;
exports.default = UserController;
//# sourceMappingURL=UserController.js.map