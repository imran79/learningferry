import { Document, Schema } from 'mongoose'
import { UserModel } from './UserModel';

export interface CategoryModel extends Document {
    name: string,
    description: string,
    parentcategory: CategoryModel
}

export default CategoryModel;