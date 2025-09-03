import { useEffect, useRef } from "react";

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
      className="w-screen md:h-screen md:overflow-x-auto md:overflow-y-hidden hide-scrollbar md:snap-x md:snap-mandatory"
    >
      <div className="w-screen flex-col md:flex-row md:w-[300vw] md:h-screen flex bg-[var(--color-background)] relative">
        <img
          src="./background.webp"
          alt="Background"
          className="w-[300vw] h-screen object-cover absolute top-0 left-0 hidden md:block"
        />
        <img
          src="./background_mobile.webp"
          alt="Background"
          className="h-full w-screen object-cover absolute top-0 left-0 md:hidden"
        />
        {children}
      </div>
    </div>
  );
}
