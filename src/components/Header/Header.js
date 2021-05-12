import React, { useEffect, useState } from "react";
import { DropdownMenu } from "./DropdownMenu";
import "./styles/header.css";

const Header = ({ pageHandler, isPage }) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(value => !value);
    }, 1800);
  }, []);
  return (
    <>
      <DropdownMenu
        changePageHandler={pageHandler}
        isPage={isPage}
        isVisible={isVisible}
      ></DropdownMenu>
    </>
  );
};

export default Header;
