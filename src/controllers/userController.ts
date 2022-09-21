import { Request, Response } from "express";
import { User } from "../interfaces/User";
import userModel from "../models/userModel";

class UserController {
  async getAllUsers(req: Request, res: Response): Promise<any> {
    const users: User[] = await userModel.find({});
    res.json(users);
  }
  async addUser(req: Request, res: Response): Promise<any> {
    const { name, email, password, status }: User = req.body;
    const user = new userModel({
      name,
      email,
      password,
      status,
    });

    const result = await user.save();
    res.json(result);
  }
}

export default new UserController();
