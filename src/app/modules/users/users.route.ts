import { Router } from "express";
import { Role } from "./users.interface";
import { auth } from "../../../middleware/auth";
import {
  changeUserRole,
  deleteUser,
  getAllUser,
  getMe,
  getSingleUser,
  getUserProfileDetails,
  toggleUserStatus,
  updateUser,
} from "./users.controller";
import { validateRequest } from "../../../middleware/validateRequest";
import { userZodSchema } from "./users.validate";

const userRoute = Router();

userRoute.get("/all", getAllUser);
userRoute.get("/me", auth([Role.ADMIN, Role.GUIDE, Role.TOURIST]), getMe);
userRoute.get(
  "/profile-details/:id",
  auth([Role.ADMIN, Role.GUIDE, Role.TOURIST]),
  getUserProfileDetails
);
userRoute.get("/:id", getSingleUser);
userRoute.patch(
  "/:id",
  auth([Role.ADMIN, Role.GUIDE, Role.TOURIST]),
  validateRequest(userZodSchema.updateUserZodSchema),
  updateUser
);
userRoute.delete("/:id", auth([Role.ADMIN]), deleteUser); 
userRoute.patch("/:id/role", auth([Role.ADMIN]), changeUserRole); 
userRoute.patch("/:id/status", auth([Role.ADMIN]), toggleUserStatus); 

export default userRoute;
