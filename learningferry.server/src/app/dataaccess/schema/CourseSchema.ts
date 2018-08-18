import { SectionModel as ISection } from "../../model/interface/SectionModel";
import DataAccess from "../DataAccess";
import * as mongoose from "mongoose";
import { CourseModel as ICourse } from "../../model/interface/CourseModel";
import SectionSchema from "./SectionSchema";

var mongooseConnection = DataAccess.mongooseConnection;
class CourseSchema {
  static get schema() {
    var courseSchema = new mongoose.Schema({
      createdat: {
        type: Date,
        default: Date.now
      },
      lastupdatedat: {
        type: Date,
        default: Date.now
      },
      createBy: {
        type: String,
        default: "",
        required: false
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
      sections: [SectionSchema.schema]
    });
    return courseSchema;
  }
}

const schema = mongooseConnection.model<ICourse>("Course", CourseSchema.schema);
export default schema;
