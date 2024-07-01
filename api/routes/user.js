import express from "express";
import { deleteUser } from "../controller/user.js"
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteUser);

export default router;