import { useState, useEffect } from "react";
import Intro from "./Segments/Intro";
import TopAgrarPolska from "./Segments/TopAgrarPolska";
import WMS_DEV from "./Segments/WMS_DEV";
import Arvalis from "./Segments/Arvalis";
import "./PortfolioStyles.css";

export default function Portfolio() {
  const segments = [Intro, TopAgrarPolska, WMS_DEV, Arvalis];
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % segments.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".selected");
    elements.forEach((element) => element.classList.remove("selected"));

    const element = document.getElementById(
      segments[selectedIndex].toString() + "-btn"
    );
    element?.classList.add("selected");
  }, [selectedIndex]);

  return (
    <div
      className="w-screen h-screen bg-[var(--color-background)] pt-[calc(var(--navbar-width)*1)] md:pt-0 flex justify-center items-center"
      key="portfolio"
      id="portfolio"
    >
      <div className="h-full w-3/5 flex justify-center py-10 gap-x-20">
        <div className="h-full w-full">{segments[selectedIndex]()}</div>

        <div className="h-full justify-center flex flex-col gap-y-20">
          {segments.map((element, index) => (
            <div
              key={index}
              id={element.toString() + "-btn"}
              className="w-3 h-3 rounded-full bg-[var(--color-detail)] transition"
              onClick={() => setSelectedIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
