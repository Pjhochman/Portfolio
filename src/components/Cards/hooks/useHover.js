import { useState, useRef, useEffect } from "react";

export const useHover = () => {
  const [isHovered, setHovered] = useState(false);

  const ref = useRef(null);

  const handleMouseover = () => setHovered(true);
  const handleMouseout = () => setHovered(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseover", handleMouseover);
      ref.current.addEventListener("mouseout", handleMouseout);

      return () => {
        ref.current.removeEventListener("mouseover", handleMouseover);
        ref.current.removeEventListener("mouseout", handleMouseout);
      };
    }
  }, []);

  return [ref, isHovered];
};
