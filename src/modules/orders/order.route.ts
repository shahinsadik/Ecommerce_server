import express from "express";
import { orderController } from "./order.controller";

const router = express.Router();

router.post("/", orderController.crateOrder);
router.get("/", orderController.getAllOrder);
router.get("/by-email", orderController.getOrdersByEmail);

export const OrderRoutes = router;