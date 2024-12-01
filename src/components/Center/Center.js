import React from "react";
import "./styles.css";

const Center = ({ scrollToTodoList }) => {
  return (
    <div className="center">
      <div className="middle">
        <h2>Organize</h2>
        <h3>your daily jobs</h3>
        <p>The only way to get things done</p>
        <button onClick={scrollToTodoList}>Go to To-do list</button>
      </div>
      <div className="image-container">
        <img src="/images/BG.png" alt="Background" className="bg-image" />
        <img src="/images/foto.png" alt="Foreground" className="foto-image" />
      </div>
    </div>
  );
};

export default Center;
