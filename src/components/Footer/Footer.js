import React, { useState } from "react";

const Footer = () => {
  const [hover, setHover] = useState("colorPalette");
  const [width, setWidth] = useState({ width: "0vw" });

  const onHover = () => {
    setHover("colorPalette active");
    setWidth({ width: "50vw" });
  };
  const onLeave = () => {
    setHover("colorPalette active");
    setWidth({ width: "0vw" });
  };
  return (
    <>
      <div style={width} className={hover}></div>
      <footer>
        {/* <div id="designer" onMouseEnter={onHover} onMouseLeave={onLeave}>
          <h2 className="title">designer</h2>
          <p className="description">
            Passion for designing beautiful and functional experiences.
          </p>
        </div>
        <div id="coder">
          <h2 className="title">&#60;coder&#62;</h2>
          <p className="description">
            Front End Developer who focuses on writing clean, elegant and
            efficient code.
          </p>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
