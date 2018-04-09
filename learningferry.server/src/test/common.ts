process.env.NODE_ENV = 'test';
import { UserModel as IUser } from '../app/model/interface/UserModel';
import { model as User } from '../app/dataaccess/schema/UserSchema';
import BaseMidlleware from '../config/middleware/BaseMiddleware/BaseMiddleware';
export const chai = require('chai');
export const chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect;
chai.use(chaiHttp);
import { server } from '../index';
const testUser = { "username": "testuser", "firstname": 'testFirstName', "lastname": 'testlastname', "password": "mytestpass", "email": "test@email.com" };

const createTestUser = async (): Promise<IUser> => {
    console.log('createTest');
    const user = new User(testUser);
    return await User.create(user);

}

const getUser = async () => {
    console.log('getUser');
    let users = await User.find({});
    if (users.length === 0) {
        await createTestUser();
        return await getUser();
    } else {
        return users[0];
    }
}

export const login = async (): Promise<any> => {
    let user = await getUser();
    return chai.request(server).post(process.env.API_BASE + 'auth/login').send({ "username": user.email, "password": testUser.password });
}


export const clearUsers = async () => {
    await User.remove({}).exec();
}








