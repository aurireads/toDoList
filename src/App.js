import React, { useRef } from "react";
import Menu from "./components/Menu/Menu";
import Center from "./components/Center/Center";
import ToDoList from "./components/ToDoList/ToDoList";
import SwiperSection from "./components/Swiper/SwiperSection";
import Form from "./components/Form/Form";
import { useToDoTasks } from "./hooks/useToDoTasks";
import { useDragAndDrop } from "./hooks/useDragAndDrop";
import { useLogin } from "./hooks/useLogin";
import { useForm } from "./hooks/useForm";
import "./App.css";

const App = () => {
  const {
    toDoTasks,
    doneTasks,
    newTask,
    setNewTask,
    addTask,
    deleteTask,
    eraseAll,
  } = useToDoTasks();

  const { handleDragStart, handleDrop } = useDragAndDrop(
    toDoTasks,
    setNewTask,
    doneTasks,
    setNewTask
  );

  const { isLoggedIn, loginData, handleLogout } = useLogin();
  const { formData, handleChange, handleSubmit } = useForm();

  const slideImages = ["/images/1.png", "/images/2.png", "/images/3.png"];

  const toDoListRef = useRef(null);

  const scrollToTodoList = () => {
    if (toDoListRef.current) {
      toDoListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Menu
        isLoggedIn={isLoggedIn}
        loginData={loginData}
        handleLogout={handleLogout}
      />
      <Center scrollToTodoList={scrollToTodoList} />
      <div ref={toDoListRef}>
        <ToDoList
          toDoTasks={toDoTasks}
          doneTasks={doneTasks}
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          eraseAll={eraseAll}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          deleteTask={deleteTask}
        />
      </div>
      <SwiperSection images={slideImages} />
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
