
import * as passportlocal from 'passport-local';
import * as express from 'express';



class localAuthStrategy extends passportlocal.Strategy {

    /*interface VerifyFunction {
        (username: string, password: string, done: (error: any, user?: any, options?: IVerifyOptions) => void): void;
    }*/
    static verifyFunction(username: string, password: string, done: (error: any, user?: any) => void): void {
        // fetch the user from database based on the username and password
        // return the done callback  

    }

}

export default localAuthStrategy;
