import { useState } from "react";

export const useForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      telephone: "",
      message: "",
    });
  };

  return { formData, handleChange, handleSubmit };
};
