import React, { useState } from "react";
import './App.css';

function App() {
  // Estados para armazenar as tarefas
  const [toDoTasks, setToDoTasks] = useState([
    "Develop the To-do list page",
    "Create the drag-and-drop function",
    "Add new tasks",
    "Delete items",
  ]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [newTask, setNewTask] = useState(""); // Nova tarefa
  const [draggedTask, setDraggedTask] = useState(null); // Tarefa sendo arrastada

  // Adicionar nova tarefa
  const addTask = () => {
    if (newTask.trim() !== "") {
      setToDoTasks([...toDoTasks, newTask]);
      setNewTask("");
    }
  };

  // Função para iniciar o "drag" (ao arrastar uma tarefa)
  const handleDragStart = (task, from) => {
    setDraggedTask({ task, from });
  };

  // Função para soltar a tarefa em outra lista
  const handleDrop = (to) => {
    if (draggedTask) {
      const { task, from } = draggedTask;

      if (from === "toDo" && to === "done") {
        setToDoTasks(toDoTasks.filter((t) => t !== task));
        setDoneTasks([...doneTasks, task]);
      } else if (from === "done" && to === "toDo") {
        setDoneTasks(doneTasks.filter((t) => t !== task));
        setToDoTasks([...toDoTasks, task]);
      }

      setDraggedTask(null); // Limpa o estado da tarefa arrastada
    }
  };

  // Deletar tarefa da lista "Done"
  const deleteTask = (index) => {
    setDoneTasks(doneTasks.filter((_, i) => i !== index));
  };

  // Função para apagar todas as tarefas de uma lista
  const eraseAll = (list) => {
    if (list === "toDo") {
      setToDoTasks([]); // Limpa todas as tarefas da lista To-do
    } else if (list === "done") {
      setDoneTasks([]); // Limpa todas as tarefas da lista Done
    }
  };

  return (
    <div className="App">
      <div className="main">
        {/* Menu */}
        <div className="menu">
          <div className="logo">
            <img src="/images/icon.png" alt="Logo" />
          </div>
          <div className="item-menu">
            <a href="#">entrar</a>
          </div>
        </div>

        {/* Centro */}
        <div className="center">
          {/* Conteúdo Central */}
          <div className="middle">
            <h2>Organize</h2>
            <h3>your daily jobs</h3>
            <p>The only way to get things done</p>
            <button>Go to To-do list</button>
          </div>

          {/* Imagens */}
          <div className="image-container">
            <img src="/images/BG.png" alt="Background" className="bg-image" />
            <img src="/images/foto.png" alt="Foreground" className="foto-image" />
          </div>

        </div>

        {/* To-Do List */}

        <div className="container">
          <img src="/images/Black.png" alt="Blackground" className="foto-black" />

          <div
            className="card to-do"
            onDragOver={(e) => e.preventDefault()} // Permite soltar itens aqui
            onDrop={() => handleDrop("toDo")} // Handle quando um item é solto
          >
            <div className="card-header">To-do</div>
            <div className="card-subtitle">Take a breath. Start doing.</div>
            <ul>
              {toDoTasks.map((task, index) => (
                <li
                  key={index}
                  draggable // Torna o item arrastável
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
              onKeyDown={(e) => e.key === "Enter" && addTask()} // Adiciona ao pressionar Enter
            />
            <button onClick={addTask}>Add Task</button>
            <button onClick={() => eraseAll("toDo")}>Erase All To-Do</button>
          </div>

          {/* Done List */}
          <div
            className="card done"
            onDragOver={(e) => e.preventDefault()} // Permite soltar itens aqui
            onDrop={() => handleDrop("done")} // Handle quando um item é solto
          >
            <div className="card-header">Done</div>
            <div className="card-subtitle">
              Congratulations! You have done {doneTasks.length} tasks
            </div>
            <ul>
              {doneTasks.map((task, index) => (
                <li
                  key={index}
                  draggable // Torna o item arrastável
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
            <button onClick={() => eraseAll("done")}>Erase All Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
