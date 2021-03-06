import { useEffect, useRef } from 'react';

const useClickOutside = (callback) => {
  const ref = useRef();
  const clickHandler = (e) => {
    if (!ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
    };
  });
  return ref;
};

export default useClickOutside;
