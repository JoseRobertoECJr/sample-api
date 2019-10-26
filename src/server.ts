import { App } from "./app";
import { Routes } from "./routes/routes"

const PORT = 3000;
const app = new App()

app.app.use('/', new Routes().app)


app.http.listen(PORT, () => {
    console.info("Express server listening on port " + PORT)
})