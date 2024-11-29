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

  const deleteTask = (index) => {
    setDoneTasks(doneTasks.filter((_, i) => i !== index));
  };

  const eraseAll = (list) => {
    if (list === "toDo") {
      setToDoTasks([]);
    } else if (list === "done") {
      setDoneTasks([]);
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
  };
};
