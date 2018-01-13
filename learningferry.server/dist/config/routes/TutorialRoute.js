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
        router.get("/tutorials", this.tutorialController.findAll);
        router.post("/tutorials", this.tutorialController.create);
        router.get("/tutorials/:_id", this.tutorialController.findById);
        router.delete("/tutorials/:_id", this.tutorialController.delete);
        router.put("/tutorials", this.tutorialController.update);
        return router;
    }
}
exports.default = TutorialRoute;
//# sourceMappingURL=TutorialRoute.js.map