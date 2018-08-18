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
const CourseBusiness_1 = require("../app/business/CourseBusiness");
class CourseController {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                var course = req.body;
                console.table(course);
                var courseBusiness = new CourseBusiness_1.default();
                yield courseBusiness.create(course, (error, result) => {
                    if (error)
                        res.send({ error: error });
                    else
                        res.send({ success: "success" });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ error: "error in your request" });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let course = req.body;
                let id = req.params._id;
                let courseBusiness = new CourseBusiness_1.default();
                yield courseBusiness.update(id, course, (error, result) => {
                    if (error)
                        res.send({ error: "error" });
                    else
                        res.send({ success: "success", course: result });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ error: "error in your reqeust" });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params._id;
                let courseBusiness = new CourseBusiness_1.default();
                yield courseBusiness.delete(id, (error, result) => {
                    if (error)
                        res.send({ error: "error" });
                    else
                        res.send({ success: "success" });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ error: "error in your reqeust" });
            }
        });
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let courseBusiness = new CourseBusiness_1.default();
                yield courseBusiness.findAll((error, result) => {
                    if (error)
                        res.send({ error: "error" });
                    else
                        res.send({ success: "success", coursess: result });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ error: "error in your reqeust" });
            }
        });
        this.findById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params._id;
                let courseBusiness = new CourseBusiness_1.default();
                yield courseBusiness.findById(id, (error, result) => {
                    if (error)
                        res.send({ error: "error" });
                    else
                        res.send({ success: "success", course: result });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ error: "error in your reqeust" });
            }
        });
    }
}
exports.default = CourseController;
//# sourceMappingURL=CourseController.js.map