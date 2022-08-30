import mongoose from "mongoose";

const DeletedEmployeeSchema = mongoose.Schema({
  profile_img: {
    type: String
  },
  full_name: {
    type: String,
    require: "name is required!",
  },
  email: {
    type: String,
    unique: true
  },
  date_of_birth: {
    type: String,
    required: "date of birth is required!",
  },
  gender: {
    type: String,
    required: "gender is required",
  },
  salary: {
    type: Number,
    required: "Salary not specified!",
  },
  address: {
    type: String,
  },
  joined_date: {
    type: String,
  },
  position: {
    type: String,
  },
});

export default mongoose.model("DeletedEmployee", DeletedEmployeeSchema);
