import mongoose from "mongoose";

const taskModel = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
});

export default mongoose.model("task", taskModel);
