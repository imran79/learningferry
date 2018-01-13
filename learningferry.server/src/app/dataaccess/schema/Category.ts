import DataAccess from '../DataAccess'
import * as mongoose from 'mongoose';
import { CategoryModel as ICategory } from '../../model/interface/CategoryModel';



var mongooseConnection = DataAccess.mongooseConnection;
class CategorySchema {

    static get schema() {

        var categorySchema = new mongoose.Schema({

            name: {
                type: String,
                required: true,
                default: ''
            },
            parentcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false },
            description: {
                type: String,
                required: false,
                default: ''
            }
        });
        return categorySchema;
    }
}

const schema = mongooseConnection.model<ICategory>("Category", CategorySchema.schema);
export default schema; 
