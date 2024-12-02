import React from "react";
import "./styles.css";

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          ×
        </button>
        <img
          src="/images/login.png"
          alt="Login Icon"
        />
        <h2>Sign in</h2>
        <p>to access your list</p>
        <form>
          <label htmlFor="username">User:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit" className="button-submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
