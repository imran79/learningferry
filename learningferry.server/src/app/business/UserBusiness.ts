import * as IUserBusiness from './base/interface/UserBusiness';
import UserRepository from '../repository/UserRepository';
import IUser from '../model/interface/UserModel';

class UserBusiness implements IUserBusiness.default {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    create = async (item: IUser, callback: (results: any, error: any) => void) => {
        await this.userRepository.create(item, callback);
    }

    update = async (id: string, item: IUser, callback: (results: any, error: any) => void) => {
        await this.userRepository.findById(id, (err, res) => {
            if (err) callback(err, res);
            else
                this.userRepository.update(res._id, item, callback);
        });
    }

    delete = async (id: string, callback: (results: any, error: any) => void) => {
        await this.userRepository.delete(id, callback);
    }

    findAll = async (callback: (results: any, error: any) => void) => {
        await this.userRepository.findAll(callback);
    }

    findById = async (id: string, callback: (results: any, error: any) => void) => {
        await this.userRepository.findById(id, callback);
    }
}

export default UserBusiness;