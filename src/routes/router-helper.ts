import { Application } from "express"

export class RouterHelper {
    
    private readonly app: Application

    constructor(app: Application) {
        this.app = app;
    }
    
    public aplyRoute(route: string, fn) {
        this.app.get(`/api/${route}`, (req, res) => this.reply(req, res, fn))
    }

    public reply(req, res, fn) {
        res.send(fn(req, res))
    }

    public aply404Route() {
        this.app.get('*', function(req, res){
            res.status(404).send();
        });
    }

}