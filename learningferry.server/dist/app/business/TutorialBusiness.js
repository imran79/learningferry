"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TutorialRepository_1 = require("../repository/TutorialRepository");
class TutorialBusiness {
    constructor() {
        this.tutorialRepository = new TutorialRepository_1.default();
    }
    create(item, callback) {
        this.tutorialRepository.create(item, callback);
    }
    update(id, item, callback) {
        this.tutorialRepository.findById(id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this.tutorialRepository.update(res._id, item, callback);
        });
    }
    delete(id, callback) {
        this.tutorialRepository.delete(id, callback);
    }
    findAll(callback) {
        this.tutorialRepository.findAll(callback);
    }
    findById(id, callback) {
        this.tutorialRepository.findById(id, callback);
    }
}
exports.default = TutorialBusiness;
//# sourceMappingURL=TutorialBusiness.js.map