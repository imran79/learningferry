import * as express from 'express';
import UserRoute from './UserRoute';
import TutorialRoute from './TutorialRoute';
var app = express();
class BaseRoute {

    static get routes() {
        app.use("/", new UserRoute().Routes);
        app.use("/", new TutorialRoute().Routes)

        return app;
    }
}
export default BaseRoute;
