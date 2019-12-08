import { App } from "./app";
import * as swaggerUi from "swagger-ui-express"
import { swaggerDocument } from "./routes/swagger"
import * as bodyParser from 'body-parser';
 
import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
 
// declare metadata by @controller annotation
import "./controller/SampleController";
import { SampleService } from "domain/impl/SampleService";
import { ISampleService } from "domain/ISampleService";
 
// set up container
let container = new Container();

container.bind<App>("App").toSelf();
container.bind<ISampleService>('SampleService').to(SampleService);


let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});
 
let app = server.build();
app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.listen(3000, () => {
    console.info("Express server listening on port " + 3000)
});