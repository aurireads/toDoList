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
      <div className="card to-do" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("toDo")}>
        <div className={`card-header ${toDoTasks.length > 0 ? "to-do" : "done"}`}>
          To-do
        </div>
        <div className="card-subtitle">Take a breath. Start doing.</div>
        <ul>
          {toDoTasks.map((task, index) => (
            <li key={index} draggable onDragStart={() => handleDragStart(task, "toDo")}>
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
        <button onClick={() => eraseAll("toDo")}>Erase All To-Do</button>
      </div>

      <div className="card done" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("done")}>
        <div className={`card-header ${doneTasks.length > 0 ? "done" : "to-do"}`}>
          Done
        </div>
        <div className="card-subtitle">Congratulations! You have done {doneTasks.length} tasks</div>
        <ul>
          {doneTasks.map((task, index) => (
            <li key={index} draggable onDragStart={() => handleDragStart(task, "done")}>
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
  );
};

export default ToDoList;
