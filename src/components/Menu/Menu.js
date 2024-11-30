import React, { useState } from "react";
import Modal from "./Modal"; // Importando o componente Modal
import "./styles.css";

const Menu = ({ isLoggedIn, loginData, handleLogout }) => {
  // Aqui é definido o estado para controlar a abertura e o fechamento do modal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Função para abrir o modal
  const handleOpenModal = () => {
    setIsLoginModalOpen(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="menu">
      <div className="logo">
      </div>
      <div className="item-menu">
        {isLoggedIn ? (
          <>
            <span>Welcome, {loginData.username}!</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          // Quando o usuário não está logado, exibimos o botão "Entrar" que abre o modal
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
