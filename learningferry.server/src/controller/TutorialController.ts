import * as express from "express";
import ITutorial from "../app/model/interface/TutorialModel";
import TutorialBusiness from "../app/business/TutorialBusiness";
import IBaseController from "./interface/base/BaseController";

class TutorialController implements IBaseController<TutorialBusiness> {
  create = async (req: express.Request, res: express.Response) => {
    try {
      var tutorial: ITutorial = <ITutorial>req.body;
      console.table(tutorial);
      var tutorialBusiness = new TutorialBusiness();
      await tutorialBusiness.create(tutorial, (error, result) => {
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
      let tutorial: ITutorial = <ITutorial>req.body;
      console.log(req.params);
      let id: string = req.params._id;
      let tutorialBusiness = new TutorialBusiness();
      await tutorialBusiness.update(id, tutorial, (error, result) => {
        if (error) res.send({ error: "error" });
        else res.send({ success: "success", tutorial: result });
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your reqeust" });
    }
  };

  delete = async (req: express.Request, res: express.Response) => {
    try {
      let id: string = req.params._id;
      let tutorialBusiness = new TutorialBusiness();
      await tutorialBusiness.delete(id, (error, result) => {
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
      let tutorialBusiness = new TutorialBusiness();
      await tutorialBusiness.findAll((error, result) => {
        if (error) res.send({ error: "error" });
        else res.send({ success: "success", tutorials: result });
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your reqeust" });
    }
  };

  findById = async (req: express.Request, res: express.Response) => {
    try {
      let id: string = req.params._id;
      let tutorialBusiness = new TutorialBusiness();
      await tutorialBusiness.findById(id, (error, result) => {
        if (error) res.send({ error: "error" });
        else res.send({ success: "success", tutorials: result });
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your reqeust" });
    }
  };
}

export default TutorialController;
