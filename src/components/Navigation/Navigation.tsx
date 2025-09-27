import { useState } from "react";
import i18next from "../../i18next";
import GearIcon from "./icons/gear.svg?react";
import HomeIcon from "./icons/home.svg?react";
import About from "./icons/about.svg?react";
import PortfolioIcon from "./icons/portfolio.svg?react";
// import TextsIcon from "./icons/texts.svg?react";
import GitLabIcon from "./icons/gitlab.svg?react";
import GithubIcon from "./icons/github.svg?react";
import LinkedinIcon from "./icons/linkedin.svg?react";
import EmailIcon from "./icons/email.svg?react";

export default function Navigation() {
  const [isCopied, setIsCopied] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const copyTexts = [
    "Copied!",
    "Double copy!",
    "Triple copy!",
    "Four times!",
    "Can't you stop?",
    "Ultimate copy!",
  ];
  const [copyTextIndex, setCopyTextIndex] = useState(0);
  const [copyText, setCopyText] = useState(copyTexts[copyTextIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText("mieszkoczubinski@gmail.com");
    setIsCopied(true);
    setCopyText(copyTexts[copyTextIndex]);
    if (copyTextIndex < copyTexts.length - 1) {
      setCopyTextIndex(copyTextIndex + 1);
    }
    setTimeout(() => setIsCopied(false), 800);
  };

  const scroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  function setLanguage(language: string) {
    i18next.changeLanguage(language);
  }

  return (
    <div className="fixed left-0 z-20 w-full h-[calc(var(--navbar-width)*1.5)] md:h-screen md:w-[var(--navbar-width)] bg-[var(--color-dark)]">
      <div className="flex h-full md:flex-col pt-[calc((var(--navbar-width)-9px)/2)] md:pt-0 md:items-center">
        <div className="ml-[calc(var(--navbar-width)/2-10px)] md:mt-[calc(var(--navbar-width)/2-10px)] md:ml-0">
          <GearIcon
            className="stroke w-9 h-9 md:w-7 md:h-7 mb-5 md:mb-1"
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          />
          <div
            className={`flex flex-col w-full items-center gap-y-1 transition overflow-hidden ${
              isSettingsOpen ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <div
              onClick={() => {
                setLanguage("pl");
              }}
              className="text-[var(--color-light)] hover:text-[var(--color-primary)] text-xl md:text-lg transition"
            >
              PL
            </div>
            <div
              onClick={() => {
                setLanguage("en");
              }}
              className="text-[var(--color-light)] hover:text-[var(--color-primary)] text-xl md:text-lg transition"
            >
              EN
            </div>
          </div>
        </div>
        <div className="flex md:flex-col w-full md:h-full justify-end md:justify-center md:items-center gap-x-14 md:gap-y-14">
          <div className="flex md:flex-col gap-4">
            <div
              title="Home"
              onClick={() => {
                scroll("home");
              }}
            >
              <HomeIcon
                className="fill w-9 h-9 md:w-6 md:h-6 cursor-pointer"
                id="home-icon"
              />
            </div>
            <div
              title="About me"
              onClick={() => {
                scroll("about");
              }}
            >
              <About
                className="fill w-9 h-9 md:w-6 md:h-6 cursor-pointer"
                id="about-icon"
              />
            </div>
            <div
              title="Portfolio"
              onClick={() => {
                scroll("portfolio");
              }}
            >
              <PortfolioIcon
                className="stroke w-9 h-9 md:w-6 md:h-6 cursor-pointer"
                id="portfolio-icon"
              />
            </div>
            {/* <div title="Texts" onClick={() => scroll("texts")}>
              <TextsIcon className="stroke w-7 h-7 cursor-pointer" id="texts-icon" />
            </div> */}
          </div>
          <div className="flex md:flex-col gap-4">
            <div
              title="GitLab"
              onClick={() =>
                window.open(
                  "https://gitlab.com/MescoCzubinski",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="transition"
            >
              <GitLabIcon className="fill w-9 h-9 md:w-6 md:h-6" />
            </div>
            <div
              title="Github"
              onClick={() =>
                window.open(
                  "https://github.com/MescoCzubinski",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="transition"
            >
              <GithubIcon className="fill w-9 h-9 md:w-6 md:h-6" />
            </div>
            <div
              title="LinkedIn"
              onClick={() =>
                window.open(
                  "https://linkedin.com/in/mieszko-czubinski",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="transition"
            >
              <LinkedinIcon className="fill w-9 h-9 md:w-6 md:h-6" />
            </div>
            <div
              title="Email"
              className="relative transition"
              onClick={() => copyEmail()}
            >
              <EmailIcon className="stroke w-6 h-6 hidden md:block" />
              {isCopied && (
                <span className="absolute left-[var(--navbar-width)] top-[1px] text-[var(--color-primary)] text-nowrap">
                  {copyText}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
