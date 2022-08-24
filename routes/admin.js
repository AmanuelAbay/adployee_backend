import express from "express";
import {
  createAdmin,
  deleteAdmin,
  getAdmin,
  updateAdmin,
} from "../controllers/admin.js";

const router = express.Router();

router.post("/", createAdmin);
router.put("/", updateAdmin);
router.delete("/", deleteAdmin);
router.get("/", getAdmin);

export default router;
