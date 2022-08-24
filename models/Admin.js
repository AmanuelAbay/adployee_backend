import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
  name: {
    type: String,
    required: "empty name!",
  },
  profile_img: {
    type: String,
  },
  password: {
    type: String,
    required: "fill your password!!",
  },
  position: {
    type: String,
    default: "admin",
  },
});

export default mongoose.model("Admin", AdminSchema);
