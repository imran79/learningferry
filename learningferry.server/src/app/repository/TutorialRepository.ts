import TutorialSchema from "../dataaccess/schema/TutorialSchema";
import ITutorial from "../model/interface/TutorialModel";
import BaseRepository from "./base/BaseRepository";

class TutorialRepository extends BaseRepository<ITutorial> {
  constructor() {
    super(TutorialSchema);
  }
}
export default TutorialRepository;
