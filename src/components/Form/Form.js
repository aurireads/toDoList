import React from "react";
import "./style.css";

const Form = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="form-container">
      <div className="form-header">
        <img src="/images/icon-mail.png" className="icon-mail" alt="Mail Icon" />
        <h1>
          GET IN <span>TOUCH</span>
        </h1>
      </div>

      <img src="/images/tatiana.png" className="img-form" alt="Illustration" />

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
  );
};

export default Form;
