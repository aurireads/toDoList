import React from 'react';
import "./styles.css";

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // Se o modal não estiver aberto, não renderiza nada

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <form>
          <label>
            Usuário:
            <input type="text" name="username" />
          </label>
          <label>
            Senha:
            <input type="password" name="password" />
          </label>
          <button type="submit">Entrar</button>
        </form>
        <button onClick={closeModal}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;
