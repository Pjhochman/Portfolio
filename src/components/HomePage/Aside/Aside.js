import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useWindowSize from '../../../hooks/useWindowSize';

import { FadeInLeft, FadeInRight, FadeIn } from './animations';
import { technologies } from './data.json';
import './styles/aside.css';

const Aside = ({ clickHandler }) => {
  const mediaWidthDesktop = 1100;
  const [display, setDisplay] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const { width } = useWindowSize();
  const toggleDisplay = () => setDisplay((value) => !value);

  useEffect(() => {
    setTimeout(() => {
      setVisible((value) => !value);
    }, 1500);
  }, []);
  return (
    <aside>
      <div type="button" id="designerContainer">
        {isVisible && (
          <FadeInLeft>
            <h2
              aria-hidden="true"
              type="button"
              className="designer-title title"
              onClick={() => width > mediaWidthDesktop && clickHandler()}
            >
              designer
            </h2>
            <p className="description">
              I have a passion for designing beautiful and functional
              experiences.
            </p>
          </FadeInLeft>
        )}
      </div>
      <div id="filler" />
      <div id="coderContainer">
        {isVisible && (
          <FadeInRight>
            <h2
              aria-hidden="true"
              type="button"
              className="coder-title title"
              onClick={toggleDisplay}
            >
              coder
            </h2>
            <p className="description">
              {width > mediaWidthDesktop
                ? 'Front-End Developer who focuses on writing clean, elegant and efficient code.'
                : 'Focusing on writing clean, elegant and efficient code.'}
            </p>

            {display && (
              <FadeIn>
                <div>
                  <div className="content">
                    <p className="content__container__text">
                      I&#39;m skilled in
                    </p>
                    <div className="content__container">
                      <ul className="content__container__list">
                        {technologies.map((item) => (
                          <li
                            className="content__container__list__item"
                            key={item}
                          >
                            {item}
                          </li>
                        ))}
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
  );
};

Aside.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Aside;
