import * as express from 'express';
import ITutorial from '../app/model/interface/TutorialModel';
import TutorialBusiness from '../app/business/TutorialBusiness';
import IBaseController from './interface/base/BaseController'

class TutorialController implements IBaseController<TutorialBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {
            var tutorial: ITutorial = <ITutorial>req.body;
            console.table(tutorial);
            var tutorialBusiness = new TutorialBusiness();
            tutorialBusiness.create(tutorial, (error, result) => {
                if (error) res.send({ "error": error });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }

    }
    update(req: express.Request, res: express.Response): void {
        try {
            let tutorial: ITutorial = <ITutorial>req.body;
            let id: string = req.params._id;
            let tutorialBusiness = new TutorialBusiness();
            tutorialBusiness.update(id, tutorial, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success", "tutorial": result });
            });

        } catch (e) {

            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }

    }

    delete(req: express.Request, res: express.Response): void {
        try {

            let id: string = req.params._id;
            let tutorialBusiness = new TutorialBusiness();
            tutorialBusiness.delete(id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });

        } catch (e) {

            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }

    }

    findAll(req: express.Request, res: express.Response): void {
        try {
            let tutorialBusiness = new TutorialBusiness();
            tutorialBusiness.findAll((error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success", "tutorials": result });
            });

        } catch (e) {

            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }

    }

    findById(req: express.Request, res: express.Response): void {

        try {
            let id: string = req.params._id;
            let tutorialBusiness = new TutorialBusiness();
            tutorialBusiness.findById(id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success", "users": result });
            });

        } catch (e) {

            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }
    }

}

export default TutorialController;