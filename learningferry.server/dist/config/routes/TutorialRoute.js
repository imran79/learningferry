"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TutorialController_1 = require("../../controller/TutorialController");
const express_1 = require("express");
var router = express_1.Router();
class TutorialRoute {
    constructor() {
        this.tutorialController = new TutorialController_1.default;
    }
    get Routes() {
        router.get(process.env.API_BASE + "tutorials", this.tutorialController.findAll);
        router.post(process.env.API_BASE + "tutorials", this.tutorialController.create);
        router.get(process.env.API_BASE + "tutorials/:_id", this.tutorialController.findById);
        router.delete(process.env.API_BASE + "tutorials/:_id", this.tutorialController.delete);
        router.put(process.env.API_BASE + "tutorials", this.tutorialController.update);
        return router;
    }
}
exports.default = TutorialRoute;
//# sourceMappingURL=TutorialRoute.js.map