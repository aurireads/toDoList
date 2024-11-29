import React, { useState, useEffect } from "react";
import Menu from "./components/Menu/Menu";
import Center from "./components/Center/Center";
import ToDoList from "./components/ToDoList/ToDoList";
import SwiperSection from "./components/Swiper/SwiperSection";
import Form from "./components/Form/Form";
import "./App.css";

const App = () => {

  const slideImages = ["/images/1.png", "/images/2.png", "/images/3.png"];

  const [toDoTasks, setToDoTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [draggedTask, setDraggedTask] = useState(null);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setIsLoggedIn(true);
      setLoginData({ username: savedUser, password: "" });
    }
  }, []);


  const handleLogout = () => {
    setIsLoggedIn(false); 
    setLoginData({ username: "", password: "" });
    localStorage.removeItem("loggedInUser"); 
  };
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      telephone: "",
      message: "",
    });
  };

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

  const handleDragStart = (task, from) => {
    setDraggedTask({ task, from });
  };

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

      setDraggedTask(null);
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

  return (
    <div className="App">
      <div>
        <Menu
          isLoggedIn={isLoggedIn}
          loginData={loginData}
          handleLogout={handleLogout}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
        <Center />
      </div>
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
