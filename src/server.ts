import "reflect-metadata";
import {InversifyExpressServer } from 'inversify-express-utils';
import { App } from "./app";
 
const app = new App();

const server = new InversifyExpressServer(app.container);

server.setConfig(app.config);
 
server.build().listen(process.env.PORT, () => {
    console.info("Application listening on port " + process.env.PORT)
});