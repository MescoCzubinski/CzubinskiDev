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

import { useState, useEffect } from "react";

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
      className="w-screen h-screen md:pl-[calc(var(--navbar-width)*1.5)] relative  z-10"
      key="home"
      id="home"
    >
      <div className="h-full flex flex-col items-start justify-center text-[var(--color-white)] pl-3 gap-y-6">
        <div className="flex flex-col text-4xl font-bold tracking-wide text-shadow-primary">
          <div>Hi,</div>
          <div>
            I'm{" "}
            <span className="text-[var(--color-primary)] text-shadow-white">
              Mieszko
            </span>
            ,
          </div>
          <div>
            {displayedPosition}
            <span className="animate-pulse">|</span>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <JavaScriptIcon className="h-8 w-8 home-fill" />
          <ReactIcon className="h-8 w-fit home-fill" />
          <TypeScriptIcon className="h-8 w-8 home-fill" />
          <FigmaIcon className="h-8 w-fit home-stroke" />
          <TailwindCSSIcon className="h-8 w-10 home-fill" />
          <ExcelIcon className="h-8 w-8 home-fill" title="only ONLYOFFICE :D" />
          <GitIcon className="h-8 w-8 home-fill" />
          <RIcon className="h-8 w-fit home-fill" />
          <HTMLIcon className="h-8 w-fit home-fill" />
          <CSSIcon
            className="h-8 w-fit home-fill"
            title="I dunno center a div"
          />
          <CppIcon className="h-8 w-fit home-fill" title="What is a pointer?" />
          <PythonIcon className="h-8 w-8 home-fill" title="Where types?" />
        </div>
        <div
          className="text-xs px-1 py-[1px] rounded-sm border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:border-[var(--color-primary)]/75 hover:text-[var(--color-primary)]/75 tracking-widest cursor-pointer font-medium"
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
      <div className="absolute top-0 -right-13 text-[150px] rotate-[45deg] font-detail hidden md:block text-[var(--color-white)] font-bold tracking-wider">
        <div className="pl-44 text-[var(--color-primary)] text-shadow-white-xl">
          Mieszko
        </div>
        <div className="text-shadow-primary-xl">Czubiński</div>
      </div>
    </div>
  );
}
