"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const BaseMiddleware_1 = require("./config/middleware/BaseMiddleware/BaseMiddleware");
var app = express();
var port = parseInt(process.env.PORT, 10) || 5000;
app.set("port", port);
app.use(BaseMiddleware_1.default.configuration);
app.listen(port, () => {
    console.log("Node app is running at localhost:" + port);
});
//# sourceMappingURL=index.js.map