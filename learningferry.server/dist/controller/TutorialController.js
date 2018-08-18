"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const TutorialBusiness_1 = require("../app/business/TutorialBusiness");
class TutorialController {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                var tutorial = req.body;
                console.table(tutorial);
                var tutorialBusiness = new TutorialBusiness_1.default();
                yield tutorialBusiness.create(tutorial, (error, result) => {
                    if (error)
                        res.send({ error: error });
                    else
                        res.send({ success: "success" });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ error: "error in your request" });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let tutorial = req.body;
                console.log(req.params);
                let id = req.params._id;
                let tutorialBusiness = new TutorialBusiness_1.default();
                yield tutorialBusiness.update(id, tutorial, (error, result) => {
                    if (error)
                        res.send({ error: "error" });
                    else
                        res.send({ success: "success", tutorial: result });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ error: "error in your reqeust" });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params._id;
                let tutorialBusiness = new TutorialBusiness_1.default();
                yield tutorialBusiness.delete(id, (error, result) => {
                    if (error)
                        res.send({ error: "error" });
                    else
                        res.send({ success: "success" });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ error: "error in your reqeust" });
            }
        });
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let tutorialBusiness = new TutorialBusiness_1.default();
                yield tutorialBusiness.findAll((error, result) => {
                    if (error)
                        res.send({ error: "error" });
                    else
                        res.send({ success: "success", tutorials: result });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ error: "error in your reqeust" });
            }
        });
        this.findById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params._id;
                let tutorialBusiness = new TutorialBusiness_1.default();
                yield tutorialBusiness.findById(id, (error, result) => {
                    if (error)
                        res.send({ error: "error" });
                    else
                        res.send({ success: "success", tutorials: result });
                });
            }
            catch (e) {
                console.log(e);
                res.send({ error: "error in your reqeust" });
            }
        });
    }
}
exports.default = TutorialController;
//# sourceMappingURL=TutorialController.js.map