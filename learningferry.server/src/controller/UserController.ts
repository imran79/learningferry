import * as express from 'express';
import IUser from '../app/model/interface/User';
import UserBusiness from '../app/business/UserBusiness';
import IBaseController from './interface/base/BaseController'

class UserController implements IBaseController<UserBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {
            var user: IUser = <IUser>req.body;
            console.table(user);
            var userBusiness = new UserBusiness();
            userBusiness.create(user, (error, result) => {
                if (error) res.send({ "error": error });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }

    }
    update(req: express.Request, res: express.Response): void {
        try {
            let user: IUser = <IUser>req.body;
            let id: string = req.params._id;
            let userBusiness = new UserBusiness();
            userBusiness.update(id, user, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success", "users": result });
            });

        } catch (e) {

            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }

    }

    delete(req: express.Request, res: express.Response): void {
        try {

            let id: string = req.params._id;
            let userBusiness = new UserBusiness();
            userBusiness.delete(id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });

        } catch (e) {

            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }

    }

    findAll(req: express.Request, res: express.Response): void {
        try {
            let userBusiness = new UserBusiness();
            userBusiness.findAll((error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success", "users": result });
            });

        } catch (e) {

            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }

    }

    findById(req: express.Request, res: express.Response): void {

        try {
            let id: string = req.params._id;
            let userBusiness = new UserBusiness();
            userBusiness.findById(id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success", "users": result });
            });

        } catch (e) {

            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }
    }

}

export default UserController;