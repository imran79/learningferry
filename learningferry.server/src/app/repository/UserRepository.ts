import UserSchema from '../dataaccess/schema/UserSchema';
import IUser from '../model/interface/UserModel'
import BaseRepository from './base/BaseRepository';

class UserRepository extends BaseRepository<IUser>
{

    constructor() {
        super(UserSchema);
    }

}
export default UserRepository;


