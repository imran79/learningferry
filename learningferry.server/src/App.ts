
import * as path from 'path';
import * as express from 'express'
import * as bodyparser from 'body-parser'
import * as logger from 'morgan';
import BaseMiddleware from './config/middleware/BaseMiddleware/BaseMiddleware';
import BaseRoute from './config/routes/BaseRoute'

class App {
  public express

  constructor() {
    this.express = express();
    App.getMiddlewareConfiguration();

  }
  static get getMiddlewareConfiguration() {
    console.log('basemiddlewareconfiguration');
    return BaseMiddleware.configuration;
  }

}

export default new App().express