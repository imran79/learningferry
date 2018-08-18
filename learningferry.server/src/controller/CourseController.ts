import * as express from "express";
import ICourse from "../app/model/interface/CourseModel";
import CourseBusiness from "../app/business/CourseBusiness";
import IBaseController from "./interface/base/BaseController";

class CourseController implements IBaseController<CourseBusiness> {
  create = async (req: express.Request, res: express.Response) => {
    try {
      var course: ICourse = <ICourse>req.body;
      console.table(course);
      var courseBusiness = new CourseBusiness();
      await courseBusiness.create(course, (error, result) => {
        if (error) res.send({ error: error });
        else res.send({ success: "success" });
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your request" });
    }
  };
  update = async (req: express.Request, res: express.Response) => {
    try {
      let course: ICourse = <ICourse>req.body;
      let id: string = req.params._id;
      let courseBusiness = new CourseBusiness();
      await courseBusiness.update(id, course, (error, result) => {
        if (error) res.send({ error: "error" });
        else res.send({ success: "success", course: result });
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your reqeust" });
    }
  };

  delete = async (req: express.Request, res: express.Response) => {
    try {
      let id: string = req.params._id;
      let courseBusiness = new CourseBusiness();
      await courseBusiness.delete(id, (error, result) => {
        if (error) res.send({ error: "error" });
        else res.send({ success: "success" });
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your reqeust" });
    }
  };

  findAll = async (req: express.Request, res: express.Response) => {
    try {
      let courseBusiness = new CourseBusiness();
      await courseBusiness.findAll((error, result) => {
        if (error) res.send({ error: "error" });
        else res.send({ success: "success", coursess: result });
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your reqeust" });
    }
  };

  findById = async (req: express.Request, res: express.Response) => {
    try {
      let id: string = req.params._id;
      let courseBusiness = new CourseBusiness();
      await courseBusiness.findById(id, (error, result) => {
        if (error) res.send({ error: "error" });
        else res.send({ success: "success", course: result });
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your reqeust" });
    }
  };
}

export default CourseController;
