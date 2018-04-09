import * as express from 'express';
import IUser from '../app/model/interface/UserModel';
import UserBusiness from '../app/business/UserBusiness';
import IBaseController from './interface/base/BaseController'

export class UserController implements IBaseController<UserBusiness> {

    create = async (req: express.Request, res: express.Response) => {
        try {
            var user: IUser = <IUser>req.body;
            console.table(user);
            var userBusiness = new UserBusiness();
            await userBusiness.create(user, (error, result) => {
                if (error) res.send({ "error": error });
                else res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    update = async (req: express.Request, res: express.Response) => {
        try {
            let user: IUser = <IUser>req.body;
            let id: string = req.params._id;
            let userBusiness = new UserBusiness();
            await userBusiness.update(id, user, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success", "users": result });
            });

        } catch (e) {
            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }

    }

    delete = async (req: express.Request, res: express.Response) => {
        try {

            let id: string = req.params._id;
            let userBusiness = new UserBusiness();
            await userBusiness.delete(id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success" });
            });

        } catch (e) {

            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }

    }

    findAll = async (req: express.Request, res: express.Response) => {
        try {
            console.log('find all');
            let userBusiness = new UserBusiness();
            await userBusiness.findAll((error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send({ "success": "success", "users": result });
            });

        } catch (e) {

            console.log(e);
            res.send({ "error": "error in your reqeust" });
        }

    }

    findById = async (req: express.Request, res: express.Response) => {

        try {
            let id: string = req.params._id;
            let userBusiness = new UserBusiness();
            await userBusiness.findById(id, (error, result) => {
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