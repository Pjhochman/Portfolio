import React, { useState, useEffect } from "react";
import { projects } from "./data/data";
import CardItem from "./CardItem";
import { ColorPalette } from "./CardList/ColorPalette";
import { Project11 } from "./CardList/Project11";
import { HyperIsland } from "./CardList/HyperIsland";
import { BandPlanner } from "./CardList/BandPlanner";
import { Accedo } from "./CardList/Accedo";
import Parallax from "parallax-js";
import { keyframes } from "styled-components";
import "./cards.css";
import {
  fadeIn,
  fadeInLeft,
  fadeInRight,
  fadeInDownBig,
  fadeInUpBig
} from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;
const fadeInDownAnimation = keyframes`${fadeInDownBig}`;
const fadeInUpAnimation = keyframes`${fadeInUpBig}`;

const Cards = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    const scene = document.getElementById("js-scene");
    if (width > "1100") {
      new Parallax(scene, { hoverOnly: false });
    } else {
      new Parallax(scene, { scalarX: "0", scalarY: "0" });
    }
  }, [width]);

  return (
    <div className="items">
      <div className="items__inner" id="js-scene">
        <CardItem
          dataDepth={projects[0].dataDepth}
          dataTitle={projects[0].dataTitle}
          startAnimation={fadeInLeftAnimation}
          wait={700}
        >
          <ColorPalette />
        </CardItem>
        <CardItem
          dataDepth={projects[1].dataDepth}
          dataTitle={projects[1].dataTitle}
          startAnimation={fadeInRightAnimation}
          wait={700}
        >
          <HyperIsland />
        </CardItem>
        <CardItem
          dataDepth={projects[2].dataDepth}
          dataTitle={projects[2].dataTitle}
          startAnimation={fadeInUpAnimation}
          wait={800}
        >
          <Project11 />
        </CardItem>
        <CardItem
          dataDepth={projects[3].dataDepth}
          dataTitle={projects[3].dataTitle}
          startAnimation={fadeInDownAnimation}
          wait={800}
        >
          <BandPlanner />
        </CardItem>
        <CardItem
          dataDepth={projects[4].dataDepth}
          dataTitle={projects[4].dataTitle}
          startAnimation={fadeInAnimation}
          wait={0}
        >
          <Accedo />
        </CardItem>
      </div>
    </div>
  );
};

export default Cards;
