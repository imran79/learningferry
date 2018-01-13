import { TutorialModel as ITutorialModel } from './interface/TutorialModel'
import { UserModel as IUserModel } from './interface/UserModel';


class TutorialModel {

    private _tutorial: ITutorialModel;

    constructor(model: ITutorialModel) {
        this._tutorial = model;
    }

    get createdAt(): Date {
        return this._tutorial.createdat;
    }

    get author(): IUserModel {
        return this._tutorial.author;
    }

    get title(): string {
        return this._tutorial.title;
    }

    get isDraft(): boolean {
        return this._tutorial.isdraft;
    }

    get isPublish(): boolean {
        return this._tutorial.ispublish;
    }
    get isArchive(): boolean {
        return this._tutorial.isarchive;
    }
    get content(): string {
        return this._tutorial.content;
    }

    get publishDate(): Date {
        return this._tutorial.publishdate;
    }


}

export default TutorialModel;