import { useState, useEffect } from "react";
import JavaScriptIcon from "./icons/JavaScript.svg?react";
import TypeScriptIcon from "./icons/TypeScript.svg?react";
import ReactIcon from "./icons/React.svg?react";
import GitIcon from "./icons/Git.svg?react";
import FigmaIcon from "./icons/Figma.svg?react";
import TailwindCSSIcon from "./icons/TailwindCSS.svg?react";
import ExcelIcon from "./icons/Excel.svg?react";
import RIcon from "./icons/R.svg?react";
import HTMLIcon from "./icons/HTML.svg?react";
import CSSIcon from "./icons/CSS.svg?react";
import PythonIcon from "./icons/Python.svg?react";
import CppIcon from "./icons/Cpp.svg?react";

const positions = ["Developer.", "Project Manager.", "Frontend Developer."];

export default function Home() {
  const [positionIndex, setPositionIndex] = useState(0);
  const [displayedPosition, setDisplayedPosition] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPosition = positions[positionIndex];
    let timeout: number;

    if (isDeleting) {
      if (displayedPosition.length > 0) {
        //delete
        timeout = setTimeout(() => {
          setDisplayedPosition(
            currentPosition.substring(0, displayedPosition.length - 1)
          );
        }, 100);
      } else {
        setIsDeleting(false);
        setPositionIndex((prevIndex) => (prevIndex + 1) % positions.length);
      }
    } else {
      if (displayedPosition.length < currentPosition.length) {
        //type
        timeout = setTimeout(() => {
          setDisplayedPosition(
            currentPosition.substring(0, displayedPosition.length + 1)
          );
        }, 150);
      } else {
        //break
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedPosition, isDeleting, positionIndex]);

  return (
    <div
      className="w-screen h-screen md:pl-[calc(var(--navbar-width)*1.5)] z-10"
      key="home"
      id="home"
    >
      <div className="h-full flex flex-col items-start justify-center text-[var(--color-light)] pl-3 gap-y-14 md:gap-y-6">
        <div className="flex flex-col gap-y-1">
          <h2># Hi,</h2>
          <div className="flex">
            <h2 className="mr-3"># I'm </h2>
            <h3>Mieszko</h3>
            <h2>,</h2>
          </div>
          <h2>
            {"# " + displayedPosition}
            <span className="animate-pulse">|</span>
          </h2>
        </div>
        <div className="flex gap-3 md:gap-2 flex-wrap pr-3">
          <JavaScriptIcon className="h-12 w-12 md:h-8 md:w-8 home-fill" />
          <ReactIcon className="h-12 md:h-8 w-fit home-fill" />
          <TypeScriptIcon className="h-12 md:h-8 w-12 md:w-8 home-fill" />
          <FigmaIcon className="h-12 md:h-8 w-fit home-stroke" />
          <TailwindCSSIcon className="h-12 md:h-8 w-11 md:w-10 home-fill" />
          <ExcelIcon
            className="h-12 md:h-8 w-12 md:w-8 home-fill"
            title="only ONLYOFFICE :D"
          />
          <GitIcon className="h-12 md:h-8 w-12 md:w-8 home-fill" />
          <RIcon className="h-12 md:h-8 w-fit home-fill" />
          <HTMLIcon className="h-12 md:h-8 w-fit home-fill" />
          <CSSIcon
            className="h-12 md:h-8 w-fit home-fill"
            title="I dunno center a div"
          />
          <CppIcon
            className="h-12 md:h-8 w-fit home-fill"
            title="What is a pointer?"
          />
          <PythonIcon
            className="h-12 md:h-8 w-12 md:w-8 home-fill"
            title="Where types?"
          />
        </div>
        <div
          className="text-2xl md:text-sm px-2 py-1 md:px-1 md:py-[1px] rounded-sm border-3 md:border-2 border-[var(--color-primary)] text-[var(--color-primary)] tracking-widest font-bold hover:border-[var(--color-light)] hover:text-[var(--color-light)] transition"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/messaging/thread/new/?recipient=mieszko-czubinski",
              "_blank",
              "noopener,noreferrer"
            )
          }
          title="In any case, let's chat!"
        >
          CONTACT ME
        </div>
      </div>
    </div>
  );
}
