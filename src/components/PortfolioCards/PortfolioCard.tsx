import Code from "./icons/Code.svg?react";
import TopAgrarPlIcon from "./icons/TopAgrarPl.svg?react";
import ArvalisIcon from "./icons/Arvalis.svg?react";
import WMS_DEVIcon from "./icons/WMS_DEV.svg?react";
import KalkulacjaStraczkoweView from "./views/KalkulacjaStraczkoweView.svg?react";
import KalkulatorRozpylaczyView from "./views/KalkulatorRozpylaczyView.svg?react";
import PorownywarkaOdmianView from "./views/PorownywarkaOdmianView.svg?react";
import ArvalisView from "./views/arvalisView.svg?react";
import WMS_DEVView from "./views/WMS_DEVView.svg?react";
import ClickIcon from "./icons/Click.svg?react";
import MagnifyingGlassIcon from "./icons/MagnifyingGlass.svg?react";

export default function PortfolioCard({
  id,
  name,
  description,
  click,
  backgroundColor,
  textColor,
  organisationName,
  ghLink,
  goLiveLink,
}: {
  id?: string;
  name?: string;
  description?: string;
  click?: string;
  backgroundColor: string;
  textColor: string;
  organisationName?: string;
  ghLink?: string;
  goLiveLink?: string;
}) {
  return (
    <div
      className="w-full h-full flex flex-col md:flex-row justify-around p-5 gap-x-5"
      id={id}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className="flex flex-col md:max-w-1/2 justify-around gap-y-4"
        style={{ color: textColor }}
      >
        <div className="text-3xl md:text-3xl font-bold test">{name}</div>
        <div
          className="text-xl md:text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div
          className="text-xl md:text-lg"
          dangerouslySetInnerHTML={{ __html: click }}
        />
        <div className="flex w-full h-fit items-center justify-between">
          <div>
            {organisationName === "TopAgrar" && (
              <TopAgrarPlIcon
                className="h-14 w-fit"
                onClick={() =>
                  window.open(goLiveLink, "_blank", "noopener,noreferrer")
                }
              />
            )}
            {organisationName === "WMS_DEV" && (
              <WMS_DEVIcon
                className="h-10 w-fit"
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
                className="h-8 w-fit"
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
        className={`cursor-pointer w-fit md:max-w-1/2 h-full flex items-start md:items-center relative overflow-hidden`}
        onClick={() => {
          window.open(goLiveLink, "_blank", "noopener,noreferrer");
        }}
      >
        {id === "KalkulacjaStraczkowe" && (
          <KalkulacjaStraczkoweView className="w-full md:h-full md:w-fit" />
        )}
        {id === "PorownywarkaOdmian" && (
          <PorownywarkaOdmianView className="w-full md:h-full md:w-fit" />
        )}
        {id === "KalkulatorRozpylaczy" && (
          <KalkulatorRozpylaczyView className="w-full md:h-full md:w-fit" />
        )}
        {id === "WMS_DEV" && (
          <WMS_DEVView className="w-full md:h-full md:w-fit" />
        )}
        {id === "arvalis" && (
          <ArvalisView className="w-full md:h-full md:w-fit" />
        )}
        <div className="hidden md:block absolute w-fit h-fit top-4 right-4">
          <ClickIcon className="w-14 h-14" />
        </div>
        <div className="md:hidden absolute w-fit h-fit top-0 right-0">
          <MagnifyingGlassIcon className="w-14 h-14" />
        </div>
      </div>
    </div>
  );
}
