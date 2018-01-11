import { Document, Schema } from 'mongoose'

export interface IUser extends Document {

    createdat: Date;
    updatedat: Date;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;

}
export default IUser;

