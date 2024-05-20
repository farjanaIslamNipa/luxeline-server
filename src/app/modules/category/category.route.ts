import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { CategoryValidation } from "./category.validation";
import { CategoryControllers } from "./category.controller";

const router = Router();

router.post(
  '/create-category',
  validateRequest(CategoryValidation.categoryCreateValidation),
  CategoryControllers.createCategory
)
router.get(
  '/',
  CategoryControllers.getAllCategories
)
router.get(
  '/:id',
  CategoryControllers.getSingleCategory
)
router.patch(
  '/:id',
  validateRequest(CategoryValidation.categoryUpdateValidation),
  CategoryControllers.updateCategory
)

export const CategoryRoutes = router;