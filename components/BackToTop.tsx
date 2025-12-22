"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / docHeight) * 100;
      setProgress(percent);

      if (scrollTop > 300) setShow(true);
      else setShow(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "scale(1)" : "scale(.8)",
        transition: "all .35s ease",
        background: `conic-gradient(#000 ${progress}%, #d1d5db ${progress}%)`,
      }}
      className="fixed cursor-pointer bottom-5 right-5 z-[9999] h-12 w-12 rounded-full flex items-center justify-center shadow-lg text-black"
    >
      <span className="bg-white h-9 w-9 rounded-full flex items-center justify-center text-black font-bold">
        ↑
      </span>
    </button>
  );
}
