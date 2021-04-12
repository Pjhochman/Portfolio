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
      <footer></footer>
    </>
  );
};

export default Footer;
