import * as express from 'express';
import UserRoute from './UserRoute'
var app = express();
class BaseRoute {

    static get routes() {
        app.use("/", new UserRoute().Routes);

        return app;
    }
}
export default BaseRoute;
