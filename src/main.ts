import { App } from "./app";
import { AuthController } from "./controllers/auth.controller";

const app = new App([new AuthController()]);
app.listen(3000);
