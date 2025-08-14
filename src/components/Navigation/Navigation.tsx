import GearIcon from "./icons/gear.svg?react";
import HomeIcon from "./icons/home.svg?react";
import PortfolioIcon from "./icons/portfolio.svg?react";
import GithubIcon from "./icons/github.svg?react";
import LinkedinIcon from "./icons/linkedin.svg?react";
import EmailIcon from "./icons/email.svg?react";
import "./NavigationStyle.css";
import { useState } from "react";

export default function Navigation() {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mieszkoczubinski@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 700);
  };
  return (
    <div className="fixed left-0 z-50 w-full h-14 md:h-screen md:w-14 bg-[var(--color-detail)]">
      <div className="flex h-full md:flex-col items-center">
        <div className="ml-4 md:mt-4 md:ml-0">
          <GearIcon className="stroke w-9 h-9 cursor-pointer" />
        </div>
        <div className="flex md:flex-col w-full md:h-full justify-center md:items-center md:gap-y-14">
          <div className="flex md:flex-col gap-4">
            <div title="Home" onClick={() => (window.location.href = "/")}>
              <HomeIcon className="fill w-9 h-9 selected cursor-pointer" />
            </div>
            <div
              title="Portfolio"
              onClick={() => (window.location.href = "/portfolio")}
              className="cursor-pointer"
            >
              <PortfolioIcon className="stroke w-9 h-9 cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col gap-y-4 hidden md:flex">
            <div
              title="Github"
              onClick={() =>
                window.open(
                  "https://github.com/MescoCzubinski",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="cursor-pointer"
            >
              <GithubIcon className="fill w-9 h-9" />
            </div>
            <div
              title="Linkedin"
              onClick={() =>
                window.open(
                  "https://linkedin.com/in/mieszko-czubinski",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="cursor-pointer"
            >
              <LinkedinIcon className="fill w-9 h-9" />
            </div>
            <div
              title="Email"
              className="cursor-pointer relative"
              onClick={() => copyEmail()}
            >
              <EmailIcon className="stroke w-9 h-9" />
              {isCopied && (
                <span className="absolute left-13 top-2 text-[var(--color-primary)]">
                  Copied!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
