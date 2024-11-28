import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Center from "./components/Center";
import ToDoList from "./components/ToDoList";
import SwiperSection from "./components/SwiperSection";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  // Estados e funções aqui...

  const slideImages = ["/images/1.png", "/images/2.png", "/images/3.png"];

  return (
    <div className="App">
      <Menu
        isLoggedIn={isLoggedIn}
        loginData={loginData}
        handleLogout={handleLogout}
        setIsLoginModalOpen={setIsLoginModalOpen}
      />
      <Center />
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
      <SwiperSection images={slideImages} />
      <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
