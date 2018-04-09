import * as express from 'express';
import UserRoute from './UserRoute';
import TutorialRoute from './TutorialRoute';
import AuthController from '../../authenticate/controller/AuthController';
import AuthRoute from './AuthRoute';
var app = express();
class BaseRoute {

    static get routes() {

        app.use("/", new AuthRoute().Routes)
        app.use("/", new UserRoute().Routes);
        app.use("/", new TutorialRoute().Routes);

        return app;
    }
}
export default BaseRoute;
