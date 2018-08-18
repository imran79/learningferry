import { Document, Schema } from "mongoose";
import { TutorialModel } from "./TutorialModel";

export interface SectionModel extends Document {
  _id: Schema.Types.ObjectId;
  title: String;
  tutorials: TutorialModel[];
}

export default SectionModel;
