import AuthController from '../../authenticate/controller/AuthController'
import { Router } from 'express'
import { request } from 'http';
var router = Router();
class AuthRoute {
    private authController: AuthController;
    constructor() {
        this.authController = new AuthController;
    }

    get Routes() {
        //  router.all(process.env.API_BASE + '*', this.authController.allPathValid)
        router.get(process.env.API_BASE + "auth/facebook", this.authController.facebookAuth);
        router.post(process.env.API_BASE + "auth/facebook/callback", this.authController.facebookAuthCallback)
        router.post(process.env.API_BASE + "auth/login", this.authController.localAuth);
        return router;
    }

}
export default AuthRoute;