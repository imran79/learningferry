import * as IUserBusiness from './base/interface/UserBusiness';
import UserRepository from '../repository/UserRepository';
import IUser from '../model/interface/UserModel';

class UserBusiness implements IUserBusiness.default {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public create(item: IUser, callback: (results: any, error: any) => void) {
        this.userRepository.create(item, callback);
    }

    public update(id: string, item: IUser, callback: (results: any, error: any) => void) {
        this.userRepository.findById(id, (err, res) => {
            if (err) callback(err, res);

            else
                this.userRepository.update(res._id, item, callback);

        });
    }

    public delete(id: string, callback: (results: any, error: any) => void) {
        this.userRepository.delete(id, callback);

    }

    public findAll(callback: (results: any, error: any) => void) {
        this.userRepository.findAll(callback);
    }


    public findById(id: string, callback: (results: any, error: any) => void) {
        this.userRepository.findById(id, callback);
    }


}

export default UserBusiness;