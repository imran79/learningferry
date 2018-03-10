import * as express from 'express';
import UserRoute from './UserRoute';
import TutorialRoute from './TutorialRoute';
import AuthController from '../../controller/AuthController';
import AuthRoute from './AuthRoute';
var app = express();
class BaseRoute {

    static get routes() {
        app.all('*', (req, res, next) => {
            if (req.headers["authorization"]) {
                let authController = new AuthController();
                authController.initialize();
                return authController.jwtAuth((err, user, info) => {
                    if (err) { return next(err); }
                    if (!user) {
                        if (info.name === "TokenExpiredError") {
                            return res.status(401).json({ message: "Your token has expired. Please generate a new one" });
                        } else {
                            return res.status(401).json({ message: info.message });
                        }
                    }

                    app.set("user", user);
                    return next();
                })(req, res, next);
            }
            if (req.path.includes('Auth')) {
                let authController = new AuthController();
                authController.initialize();
                return next();
            }
        });
        app.use("/", new AuthRoute().Routes)
        app.use("/", new UserRoute().Routes);
        app.use("/", new TutorialRoute().Routes);

        return app;
    }
}
export default BaseRoute;
