import { useState, useRef, useEffect } from "react";

export const useHover = () => {
  const [isHovered, setHovered] = useState(false);

  const ref = useRef(null);

  const handleMouseover = () => setHovered(true);
  const handleMouseout = () => setHovered(false);

  useEffect(node => {
    if (ref.current) {
      ref.current.addEventListener("mouseover", handleMouseover);
      ref.current.addEventListener("mouseout", handleMouseout);
    }
    if (node) {
      ref.current.removeEventListener("mouseover", handleMouseover);
      ref.current.removeEventListener("mouseout", handleMouseout);
    }

    ref.current = node;
  }, []);

  return [ref, isHovered];
};
