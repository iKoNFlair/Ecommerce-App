import mongoose from "mongoose";

const taskModel = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("task", taskModel);
