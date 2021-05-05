import React, { useEffect, useState } from "react";
import { DropdownMenu } from "../Menu/Menu";

import "./header.css";

const Header = ({ pageHandler, isPage }) => {
  const [isVisible, setVisible] = useState(false);
  const [menu, setMenu] = useState(false);

  const changePageHandler = () => {
    pageHandler();
    setMenu(value => !value);
  };

  useEffect(() => {
    setTimeout(() => {
      setVisible(value => !value);
    }, 1800);
  }, []);
  return (
    <>
      <DropdownMenu
        changePageHandler={changePageHandler}
        isPage={isPage}
        isVisible={isVisible}
        menu={menu}
      ></DropdownMenu>
    </>
  );
};

export default Header;
