import { useState, useEffect } from "react";
import Intro from "../../components/PortfolioCards/Intro";
import KalkulacjaStraczkowe from "../../components/PortfolioCards/KalkulacjaStraczkowe";
import KalkulatorRozpylaczy from "../../components/PortfolioCards/KalkulatorRozpylaczy";
import PorownywarkaOdmian from "../../components/PortfolioCards/PorownywarkaOdmian";
import WMS_DEV from "../../components/PortfolioCards/WMS_DEV";
import Arvalis from "../../components/PortfolioCards/Arvalis";

export default function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const segments = [
    <Intro setSelectedIndex={setSelectedIndex} />,
    <KalkulacjaStraczkowe />,
    <KalkulatorRozpylaczy />,
    <PorownywarkaOdmian />,
    <WMS_DEV />,
    <Arvalis />,
  ];

  useEffect(() => {
    const selectedElement = window.location.pathname.replace("/", "");
    if (selectedElement === "arvalis") {
      setSelectedIndex(segments.length - 1);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % segments.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [selectedIndex]);

  return (
    <div
      className="w-screen h-screen bg-[var(--color-background)] pt-[calc(var(--navbar-width)*1)] md:pt-0 flex justify-center items-center"
      key="portfolio"
      id="portfolio"
    >
      <div className="h-full w-3/5 flex justify-center py-10 gap-x-20 overflow-hidden">
        <div className="h-full w-full relative overflow-hidden">
          <div
            className="h-full w-full transition-all duration-900 ease-in-out"
            style={{
              transform: `translateY(-${selectedIndex * 100}%)`,
            }}
          >
            {segments.map((Segment, index) => (
              <div key={index} className="h-full w-full">
                {Segment}
              </div>
            ))}
          </div>
        </div>

        <div className="h-full w-4 justify-center flex flex-col gap-y-10">
          {segments.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-900 ease-in-out cursor-pointer ${
                index === selectedIndex
                  ? "bg-[var(--color-primary)]"
                  : "bg-[var(--color-detail)]"
              }`}
              onClick={() => setSelectedIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
