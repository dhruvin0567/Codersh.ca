import { useEffect, useState } from "react";

export default function useScrollPosition() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return scroll;
}
