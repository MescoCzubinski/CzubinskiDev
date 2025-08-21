import { useState, useEffect } from "react";
import PortfolioCard from "../../components/PortfolioCards/PortfolioCard";
import { useTranslation } from "react-i18next";
export default function Portfolio() {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const segments = [
    <PortfolioCard
      id="KalkulacjaStraczkowe"
      name={t("kalkulacja-straczkowe-title")}
      description={[
        t("kalkulacja-straczkowe-description-1"),
        t("kalkulacja-straczkowe-description-2"),
      ]}
      backgroundColor="var(--color-topagrar)"
      textColor="var(--color-white)"
      organisationName="TopAgrar"
      ghLink="https://github.com/MescoCzubinski/KalkulacjaStraczkowe"
      goLiveLink="https://www.topagrar.pl/kalkulatory/jak-policzyc-oplacalnosc-uprawy-straczkowych-2529371"
    />,
    <PortfolioCard
      id="PorownywarkaOdmian"
      name={t("porownywarka-odmian-title")}
      description={[
        t("porownywarka-odmian-description-1"),
        t("porownywarka-odmian-description-2"),
      ]}
      backgroundColor="var(--color-topagrar)"
      textColor="var(--color-white)"
      organisationName="TopAgrar"
      ghLink="https://github.com/MescoCzubinski/PorownywarkaOdmian"
      goLiveLink="https://www.topagrar.pl/porownywarki/porownywarka-odmian-zboz-jarych-2025-aplikacja-pokaze-liste-dla-twojego-wojewodztwa-2526125"
    />,
    <PortfolioCard
      id="KalkulatorRozpylaczy"
      name={t("kalkulator-rozpylaczy-title")}
      description={[
        t("kalkulator-rozpylaczy-description-1"),
        t("kalkulator-rozpylaczy-description-2"),
      ]}
      backgroundColor="var(--color-topagrar)"
      textColor="var(--color-white)"
      organisationName="TopAgrar"
      ghLink="https://github.com/MescoCzubinski/KalkulatorDoboruRozpylaczy"
      goLiveLink="https://www.topagrar.pl/kalkulatory/jak-dobrac-rozpylacz-i-parametry-opryskiwacza-2531836"
    />,
    <PortfolioCard
      id="WMS_DEV"
      name={t("wms-dev-title")}
      description={[t("wms-dev-description-1"), t("wms-dev-description-2")]}
      backgroundColor="var(--color-white)"
      textColor="var(--color-background)"
      organisationName="WMS_DEV"
      ghLink="https://github.com/WMS-DEV/homepage"
      goLiveLink="https://wmsdev.pl/"
    />,
    <PortfolioCard
      id="arvalis"
      name={t("arvalis-title")}
      description={[t("arvalis-description-1"), t("arvalis-description-2")]}
      backgroundColor="var(--color-arvalis)"
      textColor="var(--color-white)"
      organisationName="Arvalis"
      ghLink="https://github.com/MescoCzubinski/arvalis"
      goLiveLink="https://www.arvalis.czubinski.dev/"
    />,
  ];

  useEffect(() => {
    const selectedElement = window.location.pathname.replace("/", "");
    if (selectedElement === "arvalis") {
      setSelectedIndex(segments.length - 1);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % segments.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [selectedIndex]);

  return (
    <div
      className="w-screen h-screen bg-[var(--color-background)] pt-[calc(var(--navbar-width)*1)] md:pt-0 flex justify-center items-center"
      key="portfolio"
      id="portfolio"
    >
      <div className="h-full w-7/10 xl:w-3/5 flex justify-center py-10 pl-2 gap-x-20 overflow-hidden">
        <div className="h-full w-full relative overflow-hidden rounded-md shadow-frame ">
          <div
            className="h-full w-full transition-all duration-900 ease-in-out"
            style={{
              transform: `translateY(-${selectedIndex * 100}%)`,
            }}
          >
            {segments.map((Segment, index) => (
              <div key={index} className="h-full w-full">
                {Segment}
              </div>
            ))}
          </div>
        </div>

        <div className="h-full w-4 justify-center flex flex-col gap-y-10">
          {segments.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-450 ease-in-out cursor-pointer hover:bg-[var(--color-primary)] ${
                index === selectedIndex
                  ? "bg-[var(--color-white)]"
                  : "bg-[var(--color-detail)]"
              }`}
              onClick={() => setSelectedIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
