import { BaseController } from "../interfaces";
import express = require("express");
import { IAuthService, AuthService } from "../services/auth.service";

export class AuthController extends BaseController {
  private readonly service: IAuthService;
  constructor() {
    super();
    this.url = "/api/auth";
    this.service = new AuthService();
    this.initRoute();
  }

  initRoute() {
    this.router.post(`${this.url}/login`, this.login);
    this.router.post(`${this.url}/register`, this.register);
  }

  login = (req: express.Request, res: express.Response) => {
    const { username, password } = req.body;
    const user = this.service.login(username, password);
    return res.status(200).send(user);
  };

  register = (req: express.Request, res: express.Response) => {
    const { username, password } = req.body;
    const user = this.service.register(username, password);
    return res.status(201).send(user);
  };
}
