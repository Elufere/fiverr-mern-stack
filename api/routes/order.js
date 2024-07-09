import express from "express";
import { verifyToken } from "../middleware/jwt";
import {  createOrder, getOrders} from "../controller/order.js";

const router = express.Router();

router.post("/", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);

export default router;