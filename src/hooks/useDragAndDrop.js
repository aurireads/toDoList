import { useState } from "react";

export const useDragAndDrop = () => {
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (task, from) => {
    setDraggedTask({ task, from });
  };

  const handleDrop = (to, toDoTasks, doneTasks, setToDoTasks, setDoneTasks) => {
    if (draggedTask) {
      const { task, from } = draggedTask;

      if (from === "toDo" && to === "done") {
        setToDoTasks(toDoTasks.filter((t) => t !== task));
        setDoneTasks([...doneTasks, task]);
      } else if (from === "done" && to === "toDo") {
        setDoneTasks(doneTasks.filter((t) => t !== task));
        setToDoTasks([...toDoTasks, task]);
      }

      setDraggedTask(null);
    }
  };

  return { handleDragStart, handleDrop };
};
