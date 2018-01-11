import * as express from 'express';

interface IWriteController<T> {

    create: express.RequestHandler;
    update: express.RequestHandler;
    delete: express.RequestHandler;
}

export default IWriteController;