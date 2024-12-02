import React, { useState } from "react";
import Modal from "./Modal";
import "./styles.css";

const Menu = ({ isLoggedIn, loginData, handleLogout }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpenModal = () => setIsLoginModalOpen(true);
  const handleCloseModal = () => setIsLoginModalOpen(false);

  return (
    <div className="menu">
      <div className="logo">
        <img src="/images/icon.png" alt="App Icon" className="image-icon" />
      </div>

      <div className="item-menu">
        {isLoggedIn ? (
          <>
            <span>Welcome, {loginData.username}!</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button className="button-login" onClick={handleOpenModal}>
            Entrar
          </button>
        )}
      </div>

      <Modal isOpen={isLoginModalOpen} closeModal={handleCloseModal} />
    </div>
  );
};

export default Menu;
