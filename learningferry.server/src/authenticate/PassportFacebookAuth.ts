
import { Profile as facebookProfile, VerifyFunction, StrategyOption as facebookStrategyOption, Strategy } from 'passport-facebook';
import * as express from 'express';



class facebookAuthStrategy extends Strategy {

    static strategyOption: any;
    profile: facebookProfile;


    constructor(options: facebookStrategyOption, verify: VerifyFunction) {

        super(options, verify);

    }

    static configureFacebookStrategyOption(): void {
        this.strategyOption = new Object();
        this.strategyOption.clientID = '1447216448661076';
        this.strategyOption.clientSecret = '75792c437f1083936ffacd691ec09dff';
        this.strategyOption.callbackURL = 'http://localhost:5000/login/facebook/callback';
    }

    public static get getfacebookAuthStrategy(): facebookAuthStrategy {
        console.log('reach passportAuth');
        this.configureFacebookStrategyOption();
        return new facebookAuthStrategy(this.strategyOption, this.verifyFunction);
    }

    static verifyFunction(accessToken: string, refreshToken: string, profile: facebookProfile, done: (error: any, users?: any) => void): void {
        console.log('accessToken :' + accessToken);
        console.log(refreshToken);
        console.log(profile);
        done(null, profile);
    }

}


export default facebookAuthStrategy;











