import { Next, Request, Response } from "jcc-express-mvc/core/http";

export const UserMiddleware = (req: Request, res: Response, next: Next) => {
  console.log("first");
  next();
};
