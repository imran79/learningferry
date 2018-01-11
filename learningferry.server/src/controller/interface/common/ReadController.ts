import * as express from 'express'
interface IReadController<T> {
    findAll: express.RequestHandler;
    findById: express.RequestHandler;

}

export default IReadController;