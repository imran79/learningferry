
import * as passportlocal from 'passport-local';
import * as express from 'express';
import { model as User } from '../app/dataaccess/schema/UserSchema';
import { UserModel as IUserModel } from '../app/model/interface/UserModel';
import { IStrategyOptions, VerifyFunction } from 'passport-local';






class localAuthStrategy extends passportlocal.Strategy {

    /*interface VerifyFunction {
        (username: string, password: string, done: (error: any, user?: any, options?: IVerifyOptions) => void): void;
    }*/

    constructor(options: IStrategyOptions, verify: VerifyFunction) {
        super(options, verify);
    }
    static async  verifyFunction(username: string, password: string, done: (error: any, user?: any, message?: any) => void) {


        // fetch the user from database based on the username and password
        // return the done callback  User
        try {
            const user = await User.findOne({ email: username }).exec();

            if (user) {

                if (await user.comparePassword(password)) {
                    done(null, user, { message: 'User is valid' });
                } else {
                    done(null, null, { message: 'Password is not correct' });
                }

            } else {
                done(null, null, { message: 'this email is not registered' });
            }
        } catch (ex) {
            done(ex);
        }

    }

    static getLocalAuthStrategy = (): localAuthStrategy => {
        const params = {
            usernameField: 'username',
            passwordField: 'password'

        };
        return new localAuthStrategy(params, localAuthStrategy.verifyFunction);
    }

}

export default localAuthStrategy;
