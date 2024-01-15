import taskModel from "../models/taskModel";

// create a task
export const createTask = async (req, res) => {
  try {
    // takes input from request
    const { task } = req.field;

    // if task is empty -> throws error
    if (!task) return res.status(500).send({ error: "Task cannot be empty" });

    // Creates new document
    // and saves both task & timestamps
    const newTask = new taskModel({ task });
    await newTask.save();
  } catch (error) {
    console.log(error);

    return res.status(500).send(error);
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    // takes task name by params
    const task = req.params.task;

    // searches the task to delete and deletes it
    const taskToDelete = await taskModel.findOneAndRemove({ task: task });

    // if not found, it throws error
    if (!taskToDelete) {
      return res.status(404).send(error);
    }

    // returns the deleted task to client
    res.status(200).send(taskToDelete);
  } catch (error) {
    console.log(error);

    res.status(500).send(error);
  }
};
