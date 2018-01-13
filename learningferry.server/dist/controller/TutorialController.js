"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TutorialBusiness_1 = require("../app/business/TutorialBusiness");
class TutorialController {
    create(req, res) {
        try {
            var tutorial = req.body;
            console.table(tutorial);
            var tutorialBusiness = new TutorialBusiness_1.default();
            tutorialBusiness.create(tutorial, (error, result) => {
                if (error)
                    res.send({ "error": error });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    update(req, res) {
        try {
            let tutorial = req.body;
            let id = req.params._id;
            let tutorialBusiness = new TutorialBusiness_1.default();
            tutorialBusiness.update(id, tutorial, (error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success", "tutorial": result });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }
    }
    delete(req, res) {
        try {
            let id = req.params._id;
            let tutorialBusiness = new TutorialBusiness_1.default();
            tutorialBusiness.delete(id, (error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }
    }
    findAll(req, res) {
        try {
            let tutorialBusiness = new TutorialBusiness_1.default();
            tutorialBusiness.findAll((error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success", "tutorials": result });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }
    }
    findById(req, res) {
        try {
            let id = req.params._id;
            let tutorialBusiness = new TutorialBusiness_1.default();
            tutorialBusiness.findById(id, (error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success", "users": result });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }
    }
}
exports.default = TutorialController;
//# sourceMappingURL=TutorialController.js.map