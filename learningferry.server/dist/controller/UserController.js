"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserBusiness_1 = require("../app/business/UserBusiness");
class UserController {
    create(req, res) {
        try {
            var user = req.body;
            console.table(user);
            var userBusiness = new UserBusiness_1.default();
            userBusiness.create(user, (error, result) => {
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
    }
    update(req, res) {
        try {
            let user = req.body;
            let id = req.params._id;
            let userBusiness = new UserBusiness_1.default();
            userBusiness.update(id, user, (error, result) => {
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
    }
    delete(req, res) {
        try {
            let id = req.params._id;
            let userBusiness = new UserBusiness_1.default();
            userBusiness.delete(id, (error, result) => {
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
    }
    findAll(req, res) {
        try {
            let userBusiness = new UserBusiness_1.default();
            userBusiness.findAll((error, result) => {
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
    }
    findById(req, res) {
        try {
            let id = req.params._id;
            let userBusiness = new UserBusiness_1.default();
            userBusiness.findById(id, (error, result) => {
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
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map