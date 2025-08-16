import JavaScriptIcon from "./languages/JavaScript.svg?react";
import TypeScriptIcon from "./languages/TypeScript.svg?react";
import ReactIcon from "./languages/React.svg?react";
import GitIcon from "./languages/Git.svg?react";
import FigmaIcon from "./languages/Figma.svg?react";
import TailwindCSSIcon from "./languages/TailwindCSS.svg?react";
import HTMLIcon from "./languages/HTML.svg?react";
import CSSIcon from "./languages/CSS.svg?react";
import DockerIcon from "./languages/Docker.svg?react";
import PythonIcon from "./languages/Python.svg?react";
import CppIcon from "./languages/Cpp.svg?react";

import { useState, useEffect } from "react";
import "./HomeStyles.css";

const positions = ["Developer", "Project Manager", "Frontend Developer"];

export default function Home() {
  const [positionIndex, setPositionIndex] = useState(0);
  const [displayedPosition, setDisplayedPosition] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPosition = positions[positionIndex];
    let timeout: number;

    if (isDeleting) {
      if (displayedPosition.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedPosition(currentPosition.substring(0, displayedPosition.length - 1));
        }, 100);
      } else {
        setIsDeleting(false);
        setPositionIndex((prevIndex) => (prevIndex + 1) % positions.length);
      }
    } else {
      if (displayedPosition.length < currentPosition.length) {
        timeout = setTimeout(() => {
          setDisplayedPosition(currentPosition.substring(0, displayedPosition.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedPosition, isDeleting, positionIndex]);

  return (
    <div
      className="w-screen h-screen bg-[var(--color-background)]"
      key="home"
      id="home"
    >
      <div className="h-full ml-[calc(var(--navbar-width)*1.5)] flex flex-col items-start justify-center  text-[var(--color-white)] text-shadow gap-y-6">
        <div className="flex flex-col text-4xl font-bold tracking-wide">
          <div>Hi,</div>
          <div>
            I'm{" "}
            <span className="text-[var(--color-primary)] text-shadow-2">
              Mieszko
            </span>
            ,
          </div>
          <div>{displayedPosition}<span className="animate-pulse">|</span></div>
        </div>
        <div className="flex gap-x-1 ">
          <JavaScriptIcon className="h-8 w-8 home-fill" />
          <TypeScriptIcon className="h-8 w-8 home-fill" />
          <ReactIcon className="h-8 w-8 home-fill" />
          <GitIcon className="h-8 w-8 home-fill" />
          <FigmaIcon className="h-8 w-8 home-stroke" />
          <TailwindCSSIcon className="h-8 w-8 home-fill" />
          <HTMLIcon className="h-8 w-8 home-fill" />
          <CSSIcon className="h-8 w-8 home-fill" />
          <DockerIcon className="h-8 w-8 home-fill" />
          <PythonIcon className="h-8 w-8 home-fill" />
          <CppIcon className="h-8 w-8 home-fill" />
        </div>
        <div
          className="text-xs px-1 py-[1px] rounded-sm border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:border-[var(--color-primary)]/75 hover:text-[var(--color-primary)]/75 tracking-widest cursor-pointer text-shadow-1 font-medium"
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
