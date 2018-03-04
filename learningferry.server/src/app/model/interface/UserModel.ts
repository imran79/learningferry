import { Document, Schema } from 'mongoose'

export interface UserModel extends Document {

    createdat: Date;
    updatedat: Date;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    comparePassword(candidatePassword: string): Promise<boolean>;

}
export default UserModel;

