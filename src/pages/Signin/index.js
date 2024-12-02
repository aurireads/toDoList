import React from 'react';
import './styles.css';

const Signin = () => {
  return (
    <div className="modal-container">
      <span className="close-btn">&times;</span>
      <img src="/images/icon.png" alt="Logo" />

      <h2>Sign in</h2>
      <p>to access your list</p>
      <input type="text" placeholder="User" />
      <input type="password" placeholder="Password" />
      <button>Sign in</button>
    </div>
  );
};

export default Signin;
