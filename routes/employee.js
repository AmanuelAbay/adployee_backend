import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/employee.js";

const router = express.Router();

router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
router.get("/", getEmployees);
router.get("/:id", getEmployee);

export default router;
