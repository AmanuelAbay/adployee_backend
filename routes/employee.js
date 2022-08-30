import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/employee.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createEmployee);
router.put("/:id", verifyToken, updateEmployee);
router.delete("/:id", verifyToken, deleteEmployee);
router.get("/", getEmployees);
router.get("/:id", getEmployee);

export default router;
