import AuthController from '../../controller/AuthController'
import { Router } from 'express'
var router = Router();
class AuthRoute {
    private authController: AuthController;
    constructor() {
        this.authController = new AuthController;
    }

    get Routes() {
        router.get("/auth/facebook", this.authController.facebookAuth);
        router.post("/auth/facebook/callback", this.authController.facebookAuthCallback)
        router.post("auth/login", this.authController.localAuth);
        return router;
    }

}
export default AuthRoute;