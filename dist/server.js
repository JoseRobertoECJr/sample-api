"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const routes_1 = require("./routes/routes");
const PORT = 3000;
const app = new app_1.App();
app.app.use('/', new routes_1.Routes().app);
app.http.listen(PORT, () => {
    console.info("Express server listening on port " + PORT);
});
//# sourceMappingURL=server.js.map