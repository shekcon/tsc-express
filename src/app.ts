import * as bodyParser from "body-parser";
import { BaseController, BaseApp } from "./interfaces";
import { logger } from "./middlewares/logger";
import * as cors from "cors";

export class App extends BaseApp {
  constructor(private controllers: BaseController[]) {
    super();
    this.initMiddleware();
    this.initControllers();
    this.handleError();
  }
  initMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(logger);
    this.app.use(cors());
  }
  initControllers() {
    this.controllers.forEach(c => this.app.use("", c.router));
  }

  handleError() {
    this.app.use((req, res, next) => {
      return res.status(404).send({ message: req.url + " not found." });
    });
    this.app.use(function(err, req, res, next) {
      return res.status(500).send({ error: err });
    });
  }

  listen(port: number) {
    this.port = port;
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
