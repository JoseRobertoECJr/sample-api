import * as express from "express"
import { SampleController } from "../controller/SampleController"
import { RouterHelper } from "./router-helper"

export class Routes {
  
    private readonly app: express.Application
    get appl() { return this.app }
    private readonly router: RouterHelper

    constructor() {
        this.app = express()
        this.router = new RouterHelper(this.app)

        this.sampleControllerRoutes()

        this.router.aply404Route()
    }

    private sampleControllerRoutes(): void {
        const sampleController = new SampleController()
        const controllerPath = 'sample'
        this.router.aplyGetRoute(controllerPath, 'do-something/:defautParam', sampleController.doSomething)
        this.router.aplyPostRoute(controllerPath, 'do-another-thing', sampleController.doAnotherThing)
    }
}