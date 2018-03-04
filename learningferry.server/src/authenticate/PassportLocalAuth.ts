
import * as passportlocal from 'passport-local';
import * as express from 'express';
import { model as User } from '../app/dataaccess/schema/UserSchema';
import { UserModel as IUserModel } from '../app/model/interface/UserModel';





class localAuthStrategy extends passportlocal.Strategy {

    /*interface VerifyFunction {
        (username: string, password: string, done: (error: any, user?: any, options?: IVerifyOptions) => void): void;
    }*/
    static async  verifyFunction(username: string, password: string, done: (error: any, user?: any) => void) {


        // fetch the user from database based on the username and password
        // return the done callback  User

        const user = await User.findOne({ email: username }).exec();
        if (user) {

            if (await user.comparePassword(password)) {

                done(null, user);
            } else {
                done('Password is not correct', null)
            }

        } else {
            done('email is not registered', null);
        }

    }

}

export default localAuthStrategy;
