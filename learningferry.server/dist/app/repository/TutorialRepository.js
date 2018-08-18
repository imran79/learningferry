"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TutorialSchema_1 = require("../dataaccess/schema/TutorialSchema");
const BaseRepository_1 = require("./base/BaseRepository");
class TutorialRepository extends BaseRepository_1.default {
    constructor() {
        super(TutorialSchema_1.default);
    }
}
exports.default = TutorialRepository;
//# sourceMappingURL=TutorialRepository.js.map