import TutorialController from '../../controller/TutorialController'
import { Router } from 'express'
var router = Router();
class TutorialRoute {
    private tutorialController: TutorialController;
    constructor() {
        this.tutorialController = new TutorialController;
    }

    get Routes() {
        router.get(process.env.API_BASE + "tutorials", this.tutorialController.findAll);
        router.post(process.env.API_BASE + "tutorials", this.tutorialController.create)
        router.get(process.env.API_BASE + "tutorials/:_id", this.tutorialController.findById);
        router.delete(process.env.API_BASE + "tutorials/:_id", this.tutorialController.delete);
        router.put(process.env.API_BASE + "tutorials", this.tutorialController.update);
        return router;
    }

}
export default TutorialRoute;