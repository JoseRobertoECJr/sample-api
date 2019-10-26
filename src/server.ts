import { App } from "./app";

const PORT = 3000;
const app = new App()

app.http.listen(PORT, () => {
    console.info("Express server listening on port " + PORT)
})