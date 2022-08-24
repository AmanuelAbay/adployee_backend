import Employee from "../models/Employee.js";

export const createEmployee = async (req, res, next) => {
  console.log("employee created!");
  const employee = new Employee(req.body);
  try {
    await employee.save();
    res.status(200).json("Employee has been successfully created!");
  } catch (error) {
    next(error);
  }
};
export const updateEmployee = async (req, res, next) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("Employee has been updated!!");
  } catch (err) {
    next(err);
  }
};
export const getEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};
export const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
};
export const deleteEmployee = async (req, res, next) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json("Employee has been deleted.");
  } catch (err) {
    next(err);
  }
};
