import * as BodyParser from 'body-parser';
import MethodOverride from '../MethodOveride';
import * as express from 'express';
import BaseRoute from '../../routes/BaseRoute';
import * as morgan from 'morgan';

class BaseMidlleware {

    static get configuration(): any {
        var app = express();
        app.use(BodyParser.urlencoded({ extended: true }));
        app.use(BodyParser.json());
        app.use(morgan('dev'));
        app.use(BaseRoute.routes);
        app.use(MethodOverride.configuration);

        return app;
    }
}

export default BaseMidlleware;