import * as bodyParser from "body-parser";
import { BaseController, BaseApp } from "./interfaces";
import { logger } from "./middlewares/logger";
import * as cors from "cors";

export class App extends BaseApp {
  constructor(private controllers: BaseController[]) {
    super();
    this.initMiddleware();
    this.initControllers();
  }
  initMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(logger);
    this.app.use(cors());
  }
  initControllers() {
    this.controllers.forEach(c => this.app.use("", c.router));
  }
  listen(port: number) {
    this.port = port;
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
