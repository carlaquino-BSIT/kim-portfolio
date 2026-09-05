"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
  type="button"
  onClick={scrollToTop}
  aria-label="Scroll to top"
  className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center bg-[var(--green)] text-white shadow-sm transition-all duration-300 hover:bg-[var(--green-dark)] ${
    visible
      ? "translate-y-0 opacity-100"
      : "pointer-events-none translate-y-3 opacity-0"
  }`}
>
  <i
    className="ri-arrow-up-line text-lg"
    aria-hidden="true"
  />
</button>
  );
}