import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/"); // Перехід на головну сторінку
  };

  return (
    <div>
      <h2>Це контактна сторінка</h2>
      <button onClick={goToHome}>Повернутися на головну</button>
    </div>
  );
};

export default Contact;
