import GoLiveIcon from "./PortfolioCards/icons/GoLive.svg?react";
import CodeIcon from "./PortfolioCards/icons/Code.svg?react";
export default function ButtonsContainer({
  goLiveLink,
  githubLink,
}: {
  goLiveLink: string;
  githubLink: string;
}) {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-y-8 buttons-container text-3xl text-[var(--color-white)]">
      <div
        className="flex items-center gap-x-1 cursor-pointer"
        onClick={() => window.open(goLiveLink, "_blank")}
      >
        <p>Go live</p>
        <GoLiveIcon className="h-12" />
      </div>
      <div
        className="flex items-center gap-x-1 cursor-pointer"
        onClick={() => window.open(githubLink, "_blank")}
      >
        <CodeIcon className="h-12" />
        <p>Code</p>
      </div>
    </div>
  );
}
