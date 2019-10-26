"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
class App {
    constructor() {
        this.app = express();
        this.http = http.createServer(this.app);
        this.config();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map