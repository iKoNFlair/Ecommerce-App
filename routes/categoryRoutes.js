import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// routes

// create
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update

router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// getAll

router.get("/get-category", getCategoryController);

// get single category

router.get("/single-category/:slug", singleCategoryController);

// delete

router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
