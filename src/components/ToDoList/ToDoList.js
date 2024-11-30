import React, { useState } from "react";
import "./styles.css";

const ToDoList = () => {
  // Estados para gerenciar tarefas
  const [toDoTasks, setToDoTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [draggedTask, setDraggedTask] = useState(null);
  const [draggedFrom, setDraggedFrom] = useState(null);

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (newTask.trim() === "") return;
    setToDoTasks((prev) => [...prev, newTask.trim()]);
    setNewTask("");
  };

  // Função para apagar todas as tarefas de uma categoria
  const eraseAll = (target) => {
    if (target === "toDo") setToDoTasks([]);
    if (target === "done") setDoneTasks([]);
  };

  // Função de arrastar início
  const handleDragStart = (task, from) => {
    setDraggedTask(task);
    setDraggedFrom(from);
  };

  // Função para soltar tarefas em uma nova categoria
  const handleDrop = (target) => {
    if (!draggedTask || !draggedFrom) return;

    if (target === "toDo" && draggedFrom === "done") {
      setToDoTasks((prev) => [...prev, draggedTask]);
      setDoneTasks((prev) => prev.filter((task) => task !== draggedTask));
    } else if (target === "done" && draggedFrom === "toDo") {
      setDoneTasks((prev) => [...prev, draggedTask]);
      setToDoTasks((prev) => prev.filter((task) => task !== draggedTask));
    }

    setDraggedTask(null);
    setDraggedFrom(null);
  };

  // Função para deletar uma tarefa específica
  const deleteTask = (index) => {
    setDoneTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      {/* Cabeçalho */}
      <div className="header">
        <img src="/images/Black.png" alt="Logo" className="header-image" />
        <div className="header-content">
          <h1 className="header-text">To-do List</h1>
          <p>
            Drag and drop to set your main priorities, check when done and
            create what´s new.
          </p>
        </div>
      </div>

      {/* Seção To-Do */}
      <div className="card-container">
        <div
          className="card to-do"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop("toDo")}
        >
          <div
            className={`card-header ${toDoTasks.length > 0 ? "to-do" : "done"}`}
          >
            To-do
          </div>
          <div className="card-content">
            <div className="card-subtitle">Take a breath. Start doing.</div>
            <ul>
              {(toDoTasks || []).map((task, index) => (
                <li
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(task, "toDo")}
                >
                  {task}
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
            />
            <button onClick={addTask}>add task</button>
            <button onClick={() => eraseAll("toDo")}>erase all</button>
          </div>
        </div>

        {/* Seção Done */}
        <div
          className="card done"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop("done")}
        >
          <div
            className={`card-header ${doneTasks.length > 0 ? "done" : "to-do"}`}
          >
            Done
          </div>
          <div className="card-content">
            <div className="card-subtitle">
              Congratulations! You have done {doneTasks.length} tasks
            </div>
            <ul>
              {(doneTasks || []).map((task, index) => (
                <li
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(task, "done")}
                >
                  <div className="task-text">
                    <span className="checked">✔</span>
                    {task}
                  </div>
                  <span className="delete" onClick={() => deleteTask(index)}>
                    delete
                  </span>
                </li>
              ))}
            </ul>
            <button onClick={() => eraseAll("done")}>erase all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
