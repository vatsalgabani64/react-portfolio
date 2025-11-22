import { useEffect, useState } from "react";

export const useScrollDirection = () => {
  const [direction, setDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const update = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 80) {
        setDirection("down");
      } else {
        setDirection("up");
      }
      lastScrollY = current;
    };

    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return direction;
};
