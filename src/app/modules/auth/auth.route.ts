import { NextFunction, Request, Response, Router } from "express";
import { loginUser, logoutUser, registerUser } from "./auth.controller";
import { authZodSchema } from "./auth.validate";
import { fileUploader } from "../../../utils/fileUploader";

const authRoute = Router();

authRoute.post(
  "/register",
  fileUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = authZodSchema.userCreateZodSchema.parse(
      JSON.parse(req.body.data)
    );
    return registerUser(req, res, next);
  }
);

authRoute.post(
  "/login",
  loginUser
);

authRoute.post("/logout", logoutUser);
export default authRoute;
