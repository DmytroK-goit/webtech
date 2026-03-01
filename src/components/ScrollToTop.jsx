"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12 md:w-14 md:h-14
        rounded-full
        bg-[#377dff]
        text-white
        flex items-center justify-center
        shadow-lg
        transition-all duration-300
        hover:bg-[#2f6ae6]
        hover:scale-110 cursor-pointer
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <ChevronUp size={26} />
    </button>
  );
}
