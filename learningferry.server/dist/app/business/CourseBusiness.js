"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CourseRepository_1 = require("../repository/CourseRepository");
class CourseBusiness {
    constructor() {
        this.courseRepository = new CourseRepository_1.default();
    }
    create(item, callback) {
        this.courseRepository.create(item, callback);
    }
    update(id, item, callback) {
        this.courseRepository.findById(id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this.courseRepository.update(res._id, item, callback);
        });
    }
    delete(id, callback) {
        this.courseRepository.delete(id, callback);
    }
    findAll(callback) {
        this.courseRepository.findAll(callback);
    }
    findById(id, callback) {
        this.courseRepository.findCourseById(id, callback);
    }
}
exports.default = CourseBusiness;
//# sourceMappingURL=CourseBusiness.js.map