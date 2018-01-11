import UserController from '../../controller/UserController'
import { Router } from 'express'
var router = Router();
class UserRoute {
    private userController: UserController;
    constructor() {
        this.userController = new UserController;
    }

    get Routes() {
        router.get("/users", this.userController.findAll);
        router.post("/user", this.userController.create)
        router.get("/users/:_id", this.userController.findById);
        router.delete("/users/:_id", this.userController.delete);
        router.put("/users", this.userController.update);
        return router;
    }

}
export default UserRoute;