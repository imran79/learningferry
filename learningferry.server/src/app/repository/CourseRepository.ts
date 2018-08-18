import CourseSchema from "../dataaccess/schema/CourseSchema";
import ICourse from "../model/interface/CourseModel";
import BaseRepository from "./base/BaseRepository";

class CourseRepository extends BaseRepository<ICourse> {
  constructor() {
    super(CourseSchema);
  }

  findCourseById = (
    id: string,
    callback: (er: any, results: ICourse) => void
  ) => {
    console.log("reach findCourseById");
    CourseSchema.findById(id)
      .populate({
        path: "sections.tutorials",

        select: "title duration"
      })
      .exec(callback);
  };
}
export default CourseRepository;
