import React, { useState, useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { FadeInLeft, FadeInRight, FadeIn } from "./animations";
import { technologies } from "./data";
import styled from "styled-components";
import "./styles/aside.css";

const StyledGradient = styled.div`
  width: ${({ gradient }) => (gradient ? "100%" : "0%")};
  position: absolute;
  height: 100vh;
  top: 0;
  z-index: 0;
  transition: all 1s ease-in-out;
   touch-action: none;
    background: linear-gradient(
      -45deg,
      #b6aca5,
      #677174,
      #e9f0fb,
      #757c78,
      #f5efe8
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  } 
`;

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
      <StyledGradient gradient={gradient}></StyledGradient>
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

              {display && (
                <FadeIn>
                  <div>
                    <div className="content">
                      <p className="content__container__text">I'm skilled in</p>

                      <div className="content__container">
                        <ul className="content__container__list">
                          {technologies.map((item, index) => {
                            return (
                              <li
                                className="content__container__list__item"
                                key={index}
                              >
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )}
            </FadeInRight>
          )}
        </div>
      </aside>
    </>
  );
};

export default Aside;
