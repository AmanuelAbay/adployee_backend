import Admin from "../models/Admin.js";

export const createAdmin = async (req, res, next) => {
  const admin = new Admin(req.body);
  try {
    await admin.save();
    res.status(200).json("Admin has been successfully created!");
  } catch (error) {
    next(error);
  }
};

export const updateAdmin = async (req, res, next) => {
  try {
    await Admin.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("admin has been updated!");
  } catch (err) {
    next(err);
  }
};

export const getAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.find();
    res.status(200).json(admin);
  } catch (error) {
    next(error);
  }
};
export const deleteAdmin = async (req, res, next) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.status(200).json("Admin has been deleted.");
  } catch (err) {
    next(err);
  }
};
