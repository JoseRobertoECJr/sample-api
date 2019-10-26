import * as express from "express"

export class Routes {
  
    public app: express.Application

    constructor() {
        this.app = express()

        this.app.get('/', (req, res) => {
            res.send('<h1>Home</h1>')
        })
    }
}