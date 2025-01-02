import React, { useState, useEffect } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup do evento quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`my-container header ${isActive ? "ativo" : ""}`}>
      <div className="logo">
        <img src="images/logo.png" alt="Logo" />
      </div>
      <div className="my-nav">
        <a href="#whatido">What I Do</a>
        <a href="#aboutme">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Header;
