import React from "react";
import Card1 from "./CardList/Card2";
import Card2 from "./CardList/Card1";
import Card3 from "./CardList/Card3";
import Card4 from "./CardList/Card4";
import Card5 from "./CardList/Card5";

const Cards = () => {
  return (
    <div className="items">
      <div className="items__inner" id="js-scene" data-hover-only="false">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
      </div>
    </div>
  );
};

export default Cards;
