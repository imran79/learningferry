import CourseController from "../../controller/CourseController";
import { Router } from "express";
var router = Router();
class CourseRoute {
  private courseController: CourseController;
  constructor() {
    this.courseController = new CourseController();
  }

  get Routes() {
    router.get(process.env.API_BASE + "courses", this.courseController.findAll);
    router.post(process.env.API_BASE + "courses", this.courseController.create);
    router.get(
      process.env.API_BASE + "courses/:_id",
      this.courseController.findById
    );
    router.delete(
      process.env.API_BASE + "courses/:_id",
      this.courseController.delete
    );
    router.put(
      process.env.API_BASE + "courses/:_id",
      this.courseController.update
    );
    return router;
  }
}
export default CourseRoute;
