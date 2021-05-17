import React from "react";
import Burger from "./Burger";
import Links from "./Links";

export const Dropdown = props => {
  return (
    <>
      <Burger {...props} />
      <Links open={props.open} />
    </>
  );
};
