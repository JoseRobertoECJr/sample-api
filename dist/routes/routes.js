"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Routes {
    constructor() {
        this.app = express();
        this.app.get('/', (req, res) => {
            res.send('<h1>Home</h1>');
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map