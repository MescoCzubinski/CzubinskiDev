import { useState } from "react";
import Code from "./icons/Code.svg?react";
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
  click,
  organisationName,
  showCode,
  ghLink,
  goLiveLink,
}: {
  id?: string;
  name?: string;
  description?: string;
  click?: string;
  organisationName?: string;
  showCode: boolean;
  ghLink?: string;
  goLiveLink?: string;
}) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const [isOpen, setIsOpen] = useState(!isMobile);
  return (
    <div
      className="w-full h-full flex flex-col md:flex-row p-5 gap-x-5 relative bg-[var(--color-background)]"
      id={id}
    >
      <div className="flex flex-col md:w-1/2 justify-around gap-y-6 md:gap-y-4">
        <h1>{name}</h1>
        <p dangerouslySetInnerHTML={{ __html: description ?? "" }}></p>
        <p dangerouslySetInnerHTML={{ __html: click ?? "" }}></p>
        <div
          className={`flex w-full h-fit items-center ${
            showCode ? " justify-between" : "justify-around"
          }`}
        >
          <div>
            {organisationName === "TopAgrar" && (
              <TopAgrarPlIcon
                className="h-14 w-fit fill"
                onClick={() =>
                  window.open(goLiveLink, "_blank", "noopener,noreferrer")
                }
              />
            )}
            {organisationName === "WMS_DEV" && (
              <WMS_DEVIcon
                className="h-10 w-fit fill"
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
                className="h-8 w-fit fill"
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
          {showCode && (
            <div
              className="cursor-pointer"
              onClick={() =>
                window.open(ghLink, "_blank", "noopener,noreferrer")
              }
              title="Click to view the code"
            >
              <Code className="h-12 w-12 stroke" />
            </div>
          )}
        </div>
      </div>
      <div
        className={`absolute -bottom-90 md:bottom-0 md:top-0 right-0 p-5 md:h-full md:max-w-1/2 transition ${
          isOpen ? "bottom-0" : ""
        } ${isMobile ? "opacity-100" : "opacity-75"}`}
        onClick={() => {
          if (isOpen || !isMobile) {
            window.open(goLiveLink, "_blank", "noopener,noreferrer");
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        }}
      >
        {id === "KalkulacjaStraczkowe" && (
          <KalkulacjaStraczkoweView className="w-full h-fit md:h-full " />
        )}
        {id === "PorownywarkaOdmian" && (
          <PorownywarkaOdmianView className="w-full h-fit md:h-full" />
        )}
        {id === "KalkulatorRozpylaczy" && (
          <KalkulatorRozpylaczyView className="w-full h-fit md:h-full" />
        )}
        {id === "WMS_DEV" && <WMS_DEVView className="w-full h-fit md:h-full" />}
        {id === "arvalis" && <ArvalisView className="w-full h-fit md:h-full" />}
      </div>
    </div>
  );
}
