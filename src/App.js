import React, { useState } from "react";
import "./App.css";

// Importações do Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Imagens do Swiper (exemplo, substitua pelos seus caminhos)
const slide_image_1 = "/images/1.png";
const slide_image_2 = "/images/2.png";
const slide_image_3 = "/images/3.png";

function App() {
  // Estados para armazenar as tarefas
  const [toDoTasks, setToDoTasks] = useState([
    "Develop the To-do list page",
    "Create the drag-and-drop function",
    "Add new tasks",
    "Delete items",
  ]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [draggedTask, setDraggedTask] = useState(null);

  // Estados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  // Funções para o formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Exibe um alerta de confirmação
    alert("Message sent successfully!");

    // Resetar o formulário
    setFormData({
      name: "",
      email: "",
      telephone: "",
      message: "",
    });
  };

  // Funções para tarefas
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
      {/* Menu */}
      <div className="menu">
        <div className="logo">
          <img src="/images/icon.png" alt="Logo" />
        </div>
        <div className="item-menu">
          <a href="#">Entrar</a>
        </div>
      </div>

      {/* Centro */}
      <div className="center">
        <div className="middle">
          <h2>Organize</h2>
          <h3>Your daily jobs</h3>
          <p>The only way to get things done</p>
          <button>Go to To-do list</button>
        </div>
        <div className="image-container">
          <img src="/images/BG.png" alt="Background" className="bg-image" />
          <img src="/images/foto.png" alt="Foreground" className="foto-image" />
        </div>
      </div>

      {/* To-Do List */}
      <div className="container">
        <div className="card to-do" onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop("toDo")}>
          <div className="card-header">To-do</div>
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
          <div className="card-header">Done</div>
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

      {/* Swiper */}
      <div className="swiper-container">
        <h1 className="heading">good things</h1>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image_1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image_2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image_3" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Formulário */}
      <div className="form-container">
        <img src="/images/tatiana.png" className="img-form"></img>
        <h1>Get in Touch</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Type your name here..."
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="telephone">Telephone*</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="( ) ___-____"
            value={formData.telephone}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type what you want to say to us"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="button-form" type="submit">Send Now</button>
        </form>
      </div>
    </div>
  );
}

export default App;
