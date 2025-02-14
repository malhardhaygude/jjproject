import React from "react";
import "../css/WhatsAppButton.css";

const WhatsAppButton = () => {
  const handleClick = () => {
    // Replace with your WhatsApp number and message
    const phoneNumber = "+919920549954";
    const message = "Hello, I need assistance! I want to know more about JandJ Global Trade and its Services";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </button>
  );
};

export default WhatsAppButton;
