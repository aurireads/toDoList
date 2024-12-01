import React from "react";
import "./styles.css";

const ToDoList = ({
  toDoTasks,
  doneTasks,
  newTask,
  setNewTask,
  addTask,
  eraseAll,
  handleDragStart,
  handleDrop,
  deleteTask,
}) => {
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
            <button onClick={addTask}>Add Task</button>
            <button onClick={() => eraseAll("toDo")}>Erase All</button>
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
                    Delete
                  </span>
                </li>
              ))}
            </ul>
            <button onClick={() => eraseAll("done")}>Erase All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
