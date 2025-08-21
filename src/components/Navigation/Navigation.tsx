import GearIcon from "./icons/gear.svg?react";
import InfoIcon from "./icons/info.svg?react";
import HomeIcon from "./icons/home.svg?react";
import About from "./icons/about.svg?react";
import PortfolioIcon from "./icons/portfolio.svg?react";
// import TextsIcon from "./icons/texts.svg?react";
import GithubIcon from "./icons/github.svg?react";
import LinkedinIcon from "./icons/linkedin.svg?react";
import EmailIcon from "./icons/email.svg?react";
import { useState } from "react";
import i18next from "../../i18next";

export default function Navigation() {
  const [isCopied, setIsCopied] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [, setLanguage] = useState(i18next.language);
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

  return (
    <div className="fixed left-0 z-50 w-full h-[var(--navbar-width)] md:h-screen md:w-[var(--navbar-width)] bg-[var(--color-detail)]">
      <div className="flex h-full md:flex-col items-center">
        <div className="ml-[calc(var(--navbar-width)/2-10px)] md:mt-[calc(var(--navbar-width)/2-10px)] md:ml-0">
          <GearIcon
            className="nav-stroke w-7 h-7 cursor-pointer md:mb-1"
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
                window.location.href = "/pl";
              }}
              className="text-[var(--color-white)] hover:text-[var(--color-primary)] cursor-pointer text-lg transition"
            >
              PL
            </div>
            <div
              onClick={() => {
                setLanguage("en");
                window.location.href = "/en";
              }}
              className="text-[var(--color-white)] hover:text-[var(--color-primary)] cursor-pointer text-lg transition"
            >
              EN
            </div>
            <InfoIcon className="nav-stroke cursor-pointer w-7 h-7 mt-1" />
          </div>
        </div>
        <div className="flex md:flex-col w-full md:h-full justify-center md:items-center md:gap-y-14">
          <div className="flex md:flex-col gap-4">
            <div
              title="Home"
              onClick={() => {
                scroll("home");
              }}
            >
              <HomeIcon
                className="nav-fill w-7 h-7 cursor-pointer"
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
                className="nav-fill w-7 h-7 cursor-pointer"
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
                className="nav-stroke w-7 h-7 cursor-pointer"
                id="portfolio-icon"
              />
            </div>
            {/* <div title="Texts" onClick={() => scroll("texts")}>
              <TextsIcon className="nav-stroke w-7 h-7 cursor-pointer" id="texts-icon" />
            </div> */}
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
              className="cursor-pointer transition"
            >
              <GithubIcon className="nav-fill w-7 h-7" />
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
              className="cursor-pointer transition"
            >
              <LinkedinIcon className="nav-fill w-7 h-7" />
            </div>
            <div
              title="Email"
              className="cursor-pointer relative transition"
              onClick={() => copyEmail()}
            >
              <EmailIcon className="nav-stroke w-7 h-7" />
              {isCopied && (
                <span className="absolute left-[var(--navbar-width)] top-[2px] text-[var(--color-primary)] text-nowrap">
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
