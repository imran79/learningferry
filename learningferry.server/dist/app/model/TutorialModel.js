"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TutorialModel {
    constructor(model) {
        this._tutorial = model;
    }
    get createdAt() {
        return this._tutorial.createdat;
    }
    get author() {
        return this._tutorial.author;
    }
    get title() {
        return this._tutorial.title;
    }
    get isDraft() {
        return this._tutorial.isdraft;
    }
    get isPublish() {
        return this._tutorial.ispublish;
    }
    get isArchive() {
        return this._tutorial.isarchive;
    }
    get content() {
        return this._tutorial.content;
    }
    get publishDate() {
        return this._tutorial.publishdate;
    }
}
exports.default = TutorialModel;
//# sourceMappingURL=TutorialModel.js.map