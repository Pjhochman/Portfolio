import { useEffect, useRef } from "react";

export const useClickOutside = callback => {
  const ref = useRef();
  const handleClick = e => {
    if (!ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return ref;
};
