import * as ICourseBusiness from "./base/interface/CourseBusiness";
import CourseRepository from "../repository/CourseRepository";
import { CourseModel as ICourse } from "../model/interface/CourseModel";

class CourseBusiness implements ICourseBusiness.default {
  private courseRepository: CourseRepository;

  constructor() {
    this.courseRepository = new CourseRepository();
  }

  public create(item: ICourse, callback: (results: any, error: any) => void) {
    this.courseRepository.create(item, callback);
  }

  public update(
    id: string,
    item: ICourse,
    callback: (results: any, error: any) => void
  ) {
    this.courseRepository.findById(id, (err, res) => {
      if (err) callback(err, res);
      else this.courseRepository.update(res._id, item, callback);
    });
  }

  public delete(id: string, callback: (results: any, error: any) => void) {
    this.courseRepository.delete(id, callback);
  }

  public findAll(callback: (results: any, error: any) => void) {
    this.courseRepository.findAll(callback);
  }

  public findById(id: string, callback: (results: any, error: any) => void) {
    this.courseRepository.findCourseById(id, callback);
  }
}

export default CourseBusiness;
