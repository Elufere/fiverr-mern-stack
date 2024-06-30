import express from "express";
import { deleteUser } from "../controller/user"

const router = express.Router();

router.get("/test", deleteUser);

export default router;