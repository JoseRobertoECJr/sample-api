import "reflect-metadata";
import * as bodyParser from 'body-parser';
import * as swaggerUi from "swagger-ui-express";
import { Application } from "express";
import { Container } from "inversify";

import "./controller/exports";
import { swaggerDocument } from "./swagger";
import { Domain, Gateway, Config } from "./types";
import { ISampleService } from "./domain/ISampleService";
import { SampleService } from "./domain/impl/SampleService";
import { ISampleGateway } from "domain/igateway/ISampleGateway";

export class App {

    private _container: Container;
    public get container() { return this._container }

    constructor() {
        this._container = new Container()
        this.injectDependencies();
    }

    private injectDependencies() {

        // CONFIG

        // DOMAIN
        this._container.bind<ISampleService>(Domain.SampleService).to(SampleService);

        // GATEWAY
        this._container.bind<ISampleGateway>(Gateway.SampleGateway).to(SampleService);
    }

    public config(app: Application): void {
        // support application/json type post data
        app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        app.use(bodyParser.urlencoded({ extended: false }));
        // application swagger
        app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }
}