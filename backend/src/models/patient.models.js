import mongoose from "mongoose";

const Patient = new mongoose.Schema({
  name: String,
  phone: String,
  message: String,
  date: { type: Date, default: Date.now },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Patient", Patient);
