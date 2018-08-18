import { TutorialModel as ITutorial } from "../../model/interface/TutorialModel";
import DataAccess from "../DataAccess";
import * as mongoose from "mongoose";
import { SectionModel as ISection } from "../../model/interface/SectionModel";

var mongooseConnection = DataAccess.mongooseConnection;
class SectionSchema {
  static get schema() {
    var sectionSchema = new mongoose.Schema({
      title: {
        type: String,
        default: "",
        required: true
      },

      tutorials: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Tutorial"
        }
      ]
    });
    return sectionSchema;
  }
}

export default SectionSchema;
