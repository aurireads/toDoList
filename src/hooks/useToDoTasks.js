import { useState, useEffect } from "react";

export const useToDoTasks = () => {
  const [toDoTasks, setToDoTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const savedToDoTasks = JSON.parse(localStorage.getItem("toDoTasks")) || [];
    const savedDoneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];
    setToDoTasks(savedToDoTasks);
    setDoneTasks(savedDoneTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("toDoTasks", JSON.stringify(toDoTasks));
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
  }, [toDoTasks, doneTasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setToDoTasks([...toDoTasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index, list) => {
    if (list === "toDo") {
      setToDoTasks(toDoTasks.filter((_, i) => i !== index));
    } else {
      setDoneTasks(doneTasks.filter((_, i) => i !== index));
    }
  };

  const eraseAll = (list) => {
    if (list === "toDo") {
      setToDoTasks([]);
    } else if (list === "done") {
      setDoneTasks([]);
    }
  };

  const handleDrop = (task, targetList) => {
    if (!Array.isArray(toDoTasks) || !Array.isArray(doneTasks)) {
      console.error("As listas de tarefas não estão corretamente definidas.");
      return;
    }

    if (targetList === "done") {
      const updatedToDoTasks = toDoTasks.filter((t) => t !== task);
      const updatedDoneTasks = [...doneTasks, task];
      setToDoTasks(updatedToDoTasks);
      setDoneTasks(updatedDoneTasks);
    }

    else if (targetList === "toDo") {
      const updatedDoneTasks = doneTasks.filter((t) => t !== task);
      const updatedToDoTasks = [...toDoTasks, task];
      setToDoTasks(updatedToDoTasks);
      setDoneTasks(updatedDoneTasks);
    }
  };

  return {
    toDoTasks,
    doneTasks,
    newTask,
    setNewTask,
    addTask,
    deleteTask,
    eraseAll,
    handleDrop,
  };
};
