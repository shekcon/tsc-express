import express = require("express");

export function logger(req: express.Request, res: express.Response, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
