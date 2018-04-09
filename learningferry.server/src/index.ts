require('dotenv').config();
import express = require("express");
import BaseMiddleware from './config/middleware/BaseMiddleware/BaseMiddleware';

var app = express();
var port = parseInt(process.env.PORT, 10) || 5000;
app.set("port", port);
app.use(BaseMiddleware.configuration);

export const server = app.listen(port, () => {
  console.log("Node app is running at localhost:" + port);

});