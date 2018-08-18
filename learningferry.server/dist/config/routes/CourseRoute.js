"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CourseController_1 = require("../../controller/CourseController");
const express_1 = require("express");
var router = express_1.Router();
class CourseRoute {
    constructor() {
        this.courseController = new CourseController_1.default();
    }
    get Routes() {
        router.get(process.env.API_BASE + "courses", this.courseController.findAll);
        router.post(process.env.API_BASE + "courses", this.courseController.create);
        router.get(process.env.API_BASE + "courses/:_id", this.courseController.findById);
        router.delete(process.env.API_BASE + "courses/:_id", this.courseController.delete);
        router.put(process.env.API_BASE + "courses/:_id", this.courseController.update);
        return router;
    }
}
exports.default = CourseRoute;
//# sourceMappingURL=CourseRoute.js.map