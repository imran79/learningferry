import UserSchema from '../dataaccess/schema/UserSchema';
import IUser from '../model/interface/UserModel';
import * as mongoose from 'mongoose';
import BaseRepository from './base/BaseRepository';

class UserRepository extends BaseRepository<IUser>
{

    constructor() {
        super(UserSchema);
    }

}
export default UserRepository;


