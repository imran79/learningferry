"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CourseSchema_1 = require("../dataaccess/schema/CourseSchema");
const BaseRepository_1 = require("./base/BaseRepository");
class CourseRepository extends BaseRepository_1.default {
    constructor() {
        super(CourseSchema_1.default);
        this.findCourseById = (id, callback) => {
            console.log("reach findCourseById");
            CourseSchema_1.default.findById(id)
                .populate({
                path: "sections.tutorials",
                select: "title duration"
            })
                .exec(callback);
        };
    }
}
exports.default = CourseRepository;
//# sourceMappingURL=CourseRepository.js.map