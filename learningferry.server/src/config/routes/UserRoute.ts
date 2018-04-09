import UserController from '../../controller/UserController'
import { Router } from 'express'
var router = Router();
class UserRoute {
    private userController: UserController;
    constructor() {
        this.userController = new UserController;
    }

    get Routes() {
        console.log(process.env.API_BASE);
        router.get(process.env.API_BASE + "users", this.userController.findAll);
        router.post(process.env.API_BASE + "user", this.userController.create)
        router.get(process.env.API_BASE + "users/:_id", this.userController.findById);
        router.delete(process.env.API_BASE + "users/:_id", this.userController.delete);
        router.put(process.env.API_BASE + "users", this.userController.update);
        return router;
    }

}
export default UserRoute;