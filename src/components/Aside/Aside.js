import React, { useState, useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { FadeInLeft, FadeInRight, FadeIn } from "./animations";
import { technologies } from "./data";
import "./styles/aside.css";

const Aside = () => {
  const mediaWidthDesktop = 1100;
  const [gradient, setGradient] = useState(true);
  const [display, setDisplay] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const { width } = useWindowSize();

  const toggleGradient = () => setGradient(value => !value);
  const toggleDisplay = () => setDisplay(value => !value);

  useEffect(() => {
    setTimeout(() => {
      setVisible(value => !value);
    }, 1000);
  }, []);

  return (
    <>
      <div
        style={gradient ? { width: "100%" } : { width: "0%" }}
        className="colorPalette active"
      ></div>
      <aside>
        <div id="designerContainer">
          {isVisible && (
            <FadeInLeft>
              <h2 className="designer-title title" onClick={toggleGradient}>
                designer
              </h2>
              <p className="description">
                I have a passion for designing beautiful and functional
                experiences.
              </p>
            </FadeInLeft>
          )}
        </div>
        <div id="filler"></div>
        <div id="coderContainer">
          {isVisible && (
            <FadeInRight>
              <h2 className="coder-title title" onClick={toggleDisplay}>
                coder
              </h2>
              <p className="description">
                {width > mediaWidthDesktop
                  ? "Front-End Developer who focuses on writing clean, elegant and efficient code."
                  : "Focusing on writing clean, elegant and efficient code."}
              </p>

              <FadeIn
                style={display ? { display: "flex" } : { display: "none" }}
              >
                <div className="content">
                  <p className="content__container__text">I'm skilled in</p>

                  <div className="content__container">
                    <ul className="content__container__list">
                      {technologies.map((item, index) => {
                        return (
                          <li
                            className="content__container__list__item"
                            key={index}
                            style={{ margin: "0" }}
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </FadeInRight>
          )}
        </div>
      </aside>
    </>
  );
};

export default Aside;
