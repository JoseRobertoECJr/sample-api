"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RouterHelper {
    constructor(app) {
        this.app = app;
    }
    aplyRoute(route, fn) {
        this.app.get(`/api/${route}`, (req, res) => this.reply(req, res, fn));
    }
    reply(req, res, fn) {
        res.send(fn(req, res));
    }
    aply404Route() {
        this.app.get('*', function (req, res) {
            res.status(404).send();
        });
    }
}
exports.RouterHelper = RouterHelper;
//# sourceMappingURL=router-helper.js.map