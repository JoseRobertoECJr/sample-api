import { App } from "./app";
import { Routes } from "./routes/routes"
import * as swaggerUi from "swagger-ui-express"
import { swaggerDocument } from "./routes/swagger"

const PORT = 3000;
const app = new App()

app.app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.app.use('/api', new Routes().appl)

app.http.listen(PORT, () => {
    console.info("Express server listening on port " + PORT)
})