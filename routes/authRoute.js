import express from "express";
import {
  loginController,
  protectedRouteController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// Register || Method Post
router.post("/register", registerController);

// Login post
router.post("/login", loginController);

// test routes
router.get("/test", requireSignIn, isAdmin, testController);

// protected route auth
// user
router.get("/user-auth", requireSignIn, protectedRouteController);

// admin
router.get("/admin-auth", requireSignIn, isAdmin, protectedRouteController);

export default router;
