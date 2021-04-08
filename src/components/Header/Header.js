import React from "react";

const Header = () => {
  return (
    <header>
      <div className="information-container">
        <h1 id="name">Peter Hochman</h1>
        <h1 id="profession">Frontend Developer</h1>
      </div>
      <div className="contact-container">
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/peter-hochman/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          id="github"
          href="https://github.com/Pjhochman"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a id="contact" href="mailto:peter.hochman.dev@gmail.com">
          Say Hi!
        </a>
      </div>
    </header>
  );
};

export default Header;
