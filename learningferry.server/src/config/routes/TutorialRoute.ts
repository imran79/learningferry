import TutorialController from '../../controller/TutorialController'
import { Router } from 'express'
var router = Router();
class TutorialRoute {
    private tutorialController: TutorialController;
    constructor() {
        this.tutorialController = new TutorialController;
    }

    get Routes() {
        router.get("/tutorials", this.tutorialController.findAll);
        router.post("/tutorials", this.tutorialController.create)
        router.get("/tutorials/:_id", this.tutorialController.findById);
        router.delete("/tutorials/:_id", this.tutorialController.delete);
        router.put("/tutorials", this.tutorialController.update);
        return router;
    }

}
export default TutorialRoute;