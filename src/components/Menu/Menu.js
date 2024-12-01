import React, { useState } from "react";
import Modal from "./Modal"; // Importando o componente Modal
import "./styles.css";

const Menu = ({ isLoggedIn, loginData, handleLogout }) => {
  // Estado para controlar o modal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Função para abrir e fechar o modal
  const handleOpenModal = () => setIsLoginModalOpen(true);
  const handleCloseModal = () => setIsLoginModalOpen(false);

  return (
    <div className="menu">
      {/* Logo */}
      <div className="logo">
        <img src="/images/icon.png" alt="App Icon" className="image-icon" />
      </div>

      {/* Botões e mensagem de login */}
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

      {/* Modal */}
      <Modal isOpen={isLoginModalOpen} closeModal={handleCloseModal} />
    </div>
  );
};

export default Menu;
