import * as ITutorialBusiness from './base/interface/TutorialBusiness';
import TutorialRepository from '../repository/TutorialRepository';
import { TutorialModel as ITutorial } from '../model/interface/TutorialModel';

class TutorialBusiness implements ITutorialBusiness.default {
    private tutorialRepository: TutorialRepository;

    constructor() {
        this.tutorialRepository = new TutorialRepository();
    }

    public create(item: ITutorial, callback: (results: any, error: any) => void) {
        this.tutorialRepository.create(item, callback);
    }

    public update(id: string, item: ITutorial, callback: (results: any, error: any) => void) {
        this.tutorialRepository.findById(id, (err, res) => {
            if (err) callback(err, res);

            else
                this.tutorialRepository.update(res._id, item, callback);

        });
    }

    public delete(id: string, callback: (results: any, error: any) => void) {
        this.tutorialRepository.delete(id, callback);

    }

    public findAll(callback: (results: any, error: any) => void) {
        this.tutorialRepository.findAll(callback);
    }


    public findById(id: string, callback: (results: any, error: any) => void) {
        this.tutorialRepository.findById(id, callback);
    }


}

export default TutorialBusiness;