import * as express from "express"
import * as bodyParser from "body-parser"
import * as http from "http";

export class App {
    public app: express.Application
    public http: http.Server

    constructor() {
        this.app = express()
        this.http = http.createServer(this.app)
        this.config()
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json())
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }))
    }
}