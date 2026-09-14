import { useEffect } from "react";

const useSlider = (items, onChange, delay = 5000) => {
  useEffect(() => {
    if (items.length === 0) return;

    const timer = setInterval(() => {
      onChange();
    }, delay);

    return () => clearInterval(timer);
  }, [items, onChange, delay]);
};

export default useSlider;
