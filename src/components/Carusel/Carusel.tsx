import { useEffect, useRef } from "react";
import "./CaruselStyles.css";

export default function Carusel({ children }: { children: React.ReactNode }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        const scrollAmount =
          e.deltaY > 0 ? window.innerWidth : -window.innerWidth;
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }, 50);
    };

    carousel.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      carousel.removeEventListener("wheel", handleWheel);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      className="w-screen h-screen overflow-x-auto overflow-y-hidden hide-scrollbar snap-x snap-mandatory"
    >
      <div className="w-[300vw] h-screen flex">{children}</div>
    </div>
  );
}
