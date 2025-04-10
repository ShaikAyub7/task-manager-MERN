import Task from "../schema/tasks.js";

export const getTask = async (req, res) => {
  try {
    if (!req.user || !req.user.userId) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No user ID found" });
    }

    const tasks = await Task.find({ userId: req.user.userId }).sort({
      createdAt: -1,
    });

    if (!tasks.length) {
      return res.json({ message: "No tasks found for this user" });
    }

    res.status(200).json({ tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Please enter a title" });
    }

    if (!description) {
      return res.status(400).json({ message: "Please enter a description" });
    }
    const task = await Task.create({
      title,
      description,
      status: status,
      userId: req.user.userId,
    });

    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, status } = req.body;

    if (!description) {
      res.json({ message: "description is required" });
    }
    const updatedTask = await Task.findOneAndUpdate(
      { _id: id },
      { description, status },
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task updated", updatedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTask = await Task.findOneAndDelete(id);

    res.json({ message: "task deleted", deletedTask: deleteTask });
  } catch (error) {
    console.log(error);
  }
};
