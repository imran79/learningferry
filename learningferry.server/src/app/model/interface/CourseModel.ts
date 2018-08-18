import { Document, Schema } from "mongoose";
import { UserModel } from "./UserModel";
import { SectionModel } from "./SectionModel";

export interface CourseModel extends Document {
  createdat: Date;
  lastupdatedat: Date;
  title: string;
  isdraft: boolean;
  ispublish: boolean;
  publishdate: Date;
  isarchive: boolean;
  sections: SectionModel[];
  author: UserModel;
  completiontime: number;
}

export default CourseModel;
