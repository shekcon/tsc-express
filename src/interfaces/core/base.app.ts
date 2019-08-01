import * as express from "express";

export class BaseApp {
  protected port: number;
  protected app: express.Application;
  constructor(){
      this.app = express();
  }
}
