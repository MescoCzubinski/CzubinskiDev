import Code from "./icons/Code.svg?react";
import GoLive from "./icons/GoLive.svg?react";
import TopAgrarPlIcon from "./icons/TopAgrarPl.svg?react";
import ArvalisIcon from "./icons/Arvalis.svg?react";
import WMS_DEVIcon from "./icons/WMS_DEV.svg?react";
import KalkulacjaStraczkoweView from "./views/KalkulacjaStraczkoweView.svg?react";
import KalkulatorRozpylaczyView from "./views/KalkulatorRozpylaczyView.svg?react";
import PorownywarkaOdmianView from "./views/PorownywarkaOdmianView.svg?react";
import ArvalisView from "./views/arvalisView.svg?react";
import WMS_DEVView from "./views/WMS_DEVView.svg?react";

export default function PortfolioCard({
  id,
  name,
  description,
  backgroundColor,
  textColor,
  organisationName,
  ghLink,
  goLiveLink,
}: {
  id?: string;
  name?: string;
  description?: string[];
  backgroundColor: string;
  textColor: string;
  organisationName?: string;
  ghLink?: string;
  goLiveLink?: string;
}) {
  return (
    <div
      className="w-full h-full flex justify-around p-8 gap-x-8"
      id={id}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className="flex flex-col max-w-1/2 justify-center gap-y-4"
        style={{ color: textColor }}
      >
        <div className="text-2xl font-bold">{name}</div>
        <div className="text-xl flex flex-col gap-y-2 text-justify">
          {description?.map((paragraph, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
        <div className="flex w-full h-fit items-center justify-between">
          <div>
            {organisationName === "TopAgrar" && (
              <TopAgrarPlIcon
                className="h-16 w-fit"
                onClick={() =>
                  window.open(goLiveLink, "_blank", "noopener,noreferrer")
                }
              />
            )}
            {organisationName === "WMS_DEV" && (
              <WMS_DEVIcon
                className="h-12 w-fit"
                onClick={() =>
                  window.open(
                    "https://www.wmsdev.pl/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              />
            )}
            {organisationName === "Arvalis" && (
              <ArvalisIcon
                className="h-10 w-fit"
                onClick={() =>
                  window.open(
                    "https://www.arvalis.fr/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              />
            )}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => window.open(ghLink, "_blank", "noopener,noreferrer")}
            title="Click to view the code"
          >
            <Code
              className={
                textColor === "var(--color-white)" ? "w-10 white" : "w-10 dark"
              }
            />
          </div>
        </div>
      </div>
      <div
        className={`cursor-pointer w-fit max-w-1/2 h-full flex items-center`}
        onClick={() => {
          window.open(goLiveLink, "_blank", "noopener,noreferrer");
        }}
      >
        {id === "KalkulacjaStraczkowe" && (
          <KalkulacjaStraczkoweView className="h-full w-fit" />
        )}
        {id === "PorownywarkaOdmian" && (
          <PorownywarkaOdmianView className="h-full w-fit" />
        )}
        {id === "KalkulatorRozpylaczy" && (
          <KalkulatorRozpylaczyView className="h-full w-fit" />
        )}
        {id === "WMS_DEV" && <WMS_DEVView className="h-full w-fit" />}
        {id === "arvalis" && <ArvalisView className="h-full w-fit" />}
      </div>
    </div>
  );
}
