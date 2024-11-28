import React from "react";
import "./Menu.css";

const Menu = ({ isLoggedIn, loginData, handleLogout, setIsLoginModalOpen }) => {
  return (
    <div className="menu">
      <div className="logo">
        <img src="/images/icon.png" alt="Logo" />
      </div>
      <div className="item-menu">
        {isLoggedIn ? (
          <>
            <span>Welcome, {loginData.username}!</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={() => setIsLoginModalOpen(true)}>Entrar</button>
        )}
      </div>
    </div>
  );
};

export default Menu;
