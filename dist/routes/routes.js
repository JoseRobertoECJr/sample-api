"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const SampleController_1 = require("../controller/SampleController");
const router_helper_1 = require("./router-helper");
class Routes {
    get appl() { return this.app; }
    constructor() {
        this.app = express();
        this.router = new router_helper_1.RouterHelper(this.app);
        this.sampleControllerRoutes();
    }
    sampleControllerRoutes() {
        const sampleController = new SampleController_1.SampleController();
        this.router.aplyRoute('', sampleController.doSomething);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map