import { Router } from "express";
import { CategoryRoutes } from "../modules/category/category.route";
import { ProductRoutes } from "../modules/products/product.route";
import { TaskRoutes } from "../modules/task/task.route";

const router = Router();

const moduleRoutes = [
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/tasks',
    route: TaskRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router;