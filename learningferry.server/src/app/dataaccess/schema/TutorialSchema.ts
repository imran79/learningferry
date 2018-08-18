import { UserModel as IUser } from "../../model/interface/UserModel";
import DataAccess from "../DataAccess";
import * as mongoose from "mongoose";
import { TutorialModel as ITutorial } from "../../model/interface/TutorialModel";

var mongooseConnection = DataAccess.mongooseConnection;
class TutorialSchema {
  static get schema() {
    var tutorialSchema = new mongoose.Schema({
      createdat: {
        type: Date,
        default: Date.now
      },
      lastupdatedat: {
        type: Date,
        default: Date.now
      },

      title: {
        type: String,
        default: "",
        required: true
      },
      content: {
        type: String,
        default: ""
      },
      isdraft: {
        type: Boolean,
        default: false
      },
      isarchive: {
        type: Boolean,
        default: false
      },
      ispublish: {
        type: Boolean,
        default: false
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      duration: {
        type: Number,
        default: 0
      }
    });
    return tutorialSchema;
  }
}

const schema = mongooseConnection.model<ITutorial>(
  "Tutorial",
  TutorialSchema.schema
);
export default schema;
