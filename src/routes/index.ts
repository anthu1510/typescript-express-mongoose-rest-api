import { Express, Request, Response } from "express";
import userRouter from "./userRouter";

export default (app: Express) => {
  app.use("/test", (req: Request, res: Response) => res.sendStatus(200));

  app.use("/api/users", userRouter);
};
