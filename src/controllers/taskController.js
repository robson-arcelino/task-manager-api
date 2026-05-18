const Task = require("../models/Task");

const createTask = async (req, res) => {

  try {

    const { title } = req.body;

    const newTask = await Task.create({
      title
    });

    res.status(201).json(newTask);

  } catch (error) {

    res.status(500).json({
      message: "Erro ao criar tarefa"
    });

  }

};

const getAllTasks = async (req, res) => {

  try {

    const tasks = await Task.find();

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: "Erro ao buscar tarefas"
    });

  }

};

const updateTask = async (req, res) => {

  try {

    const { id } = req.params;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true
      }
    );

    res.status(200).json(updatedTask);

  } catch (error) {

    res.status(500).json({
      message: "Erro ao atualizar tarefa"
    });

  }

};

const deleteTask = async (req, res) => {

  try {

    const { id } = req.params;

    await Task.findByIdAndDelete(id);

    res.status(200).json({
      message: "Tarefa deletada com sucesso"
    });

  } catch (error) {

    res.status(500).json({
      message: "Erro ao deletar tarefa"
    });

  }

};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask
};