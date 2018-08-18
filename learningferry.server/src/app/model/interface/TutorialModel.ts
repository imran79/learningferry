import { Document, Schema } from "mongoose";
import { UserModel } from "./UserModel";

export interface TutorialModel extends Document {
  createdat: Date;
  lastupdatedat: Date;
  title: string;
  isdraft: boolean;
  ispublish: boolean;
  publishdate: Date;
  isarchive: boolean;
  content: string;
  author: UserModel;
  duration: number;
}

export default TutorialModel;
