import * as express from "express";

export class BaseController {
  router: express.Router;
  protected url: string;
  constructor() {
    this.router = express.Router();
  }
}
