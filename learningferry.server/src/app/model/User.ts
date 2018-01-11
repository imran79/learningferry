import { Model, Schema, Document, model } from 'mongoose';
import { IUser } from './interface/User'


interface IUserModel extends Model<IUser> {

  createdat: Date;
  updatedat: Date;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;

}

export default IUserModel;





