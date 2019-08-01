import { IUser } from "../models/user";
import * as Exception from "http-errors";
export interface IAuthService {
  login(username: string, password: string): IUser;
  register(username: string, password: string): IUser;
}

export class AuthService implements IAuthService {
  private Users: IUser[] = [
    {
      id: Math.random().toString(),
      username: "lsang",
      password: "123456"
    },
    {
      id: Math.random().toString(),
      username: "bjmnyx",
      password: "123456"
    }
  ];

  login(username: string, password: string): IUser {
    const user: IUser = this.Users.find(
      u => u.username == username && u.password == password
    );
    if (!user) {
      throw new Exception.BadRequest("User is not found");
    }
    return user;
  }

  register(username: string, password: string): IUser {
    const user: IUser = {
      id: Math.random().toString(),
      username: username,
      password: password
    };
    this.Users.push(user);
    return user;
  }
}
