import UserSchema from '../dataaccess/schema/UserSchema';
import ITutorial from '../model/interface/TutorialModel'
import BaseRepository from './base/BaseRepository';

class TutorialRepository extends BaseRepository<ITutorial>
{

    constructor() {
        super(UserSchema);
    }

}
export default TutorialRepository;
