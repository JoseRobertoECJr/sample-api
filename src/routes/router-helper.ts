import { Application } from "express"

export class RouterHelper {
    
    private readonly app: Application

    constructor(app: Application) {
        this.app = app;
    }
    
    public aplyGetRoute(controllerPath: string, route: string, fn) {
        this.app.get(`/${controllerPath}/${route}`, (req, res) => this.reply(req, res, fn))
    }

    public aplyPostRoute(controllerPath: string, route: string, fn) {
        this.app.post(`/${controllerPath}/${route}`, (req, res) => this.reply(req, res, fn))
    }

    public reply(req, res, fn) {
        res.send(JSON.stringify(fn(req.params)))
    }

    public aply404Route() {
        this.app.get('*', function(req, res){
            res.status(404).send();
        });
    }

}