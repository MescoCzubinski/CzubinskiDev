import GearIcon from "./icons/gear.svg?react";
import HomeIcon from "./icons/home.svg?react";
import PortfolioIcon from "./icons/portfolio.svg?react";
import GithubIcon from "./icons/github.svg?react";
import LinkedinIcon from "./icons/linkedin.svg?react";
import EmailIcon from "./icons/email.svg?react";
import "./NavigationStyle.css";

export default function Navigation() {
  return (
    <div className="fixed left-0 z-50 w-full h-14 md:h-screen md:w-14 bg-[var(--color-detail)]">
      <div className="flex h-full md:flex-col items-center">
        <div className="ml-4 md:mt-4 md:ml-0">
          <GearIcon className="stroke w-9 h-9" />
        </div>
        <div className="flex md:flex-col w-full md:h-full justify-center md:items-center md:gap-y-14">
          <div className="flex md:flex-col gap-4">
            <a href="/" title="Home">
              <HomeIcon className="fill w-9 h-9 selected " />
            </a>
            <PortfolioIcon className="stroke w-9 h-9" />
          </div>
          <div className="flex flex-col gap-y-4 hidden md:flex">
            <a
              href="https://github.com/MescoCzubinski"
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="fill w-9 h-9" />
            </a>
            <a
              href="https://linkedin.com/in/mieszko-czubinski"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
            >
              <LinkedinIcon className="fill w-9 h-9" />
            </a>
            <a
              href="mailto:mieszkoczubinski@gmail.com"
              title="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon className="stroke w-9 h-9" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
