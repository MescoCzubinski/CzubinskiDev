import TextContainer from "../TextContainer";
import { useTranslation } from "react-i18next";
import TopAgrarPolskaIcon from "./icons/TopAgrarPolska.svg?react";
import ButtonsContainer from "../ButtonsContainer";
export default function KalkulacjaStraczkowe() {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex items-center" id="KalkulacjaStraczkowe">
      <div className="w-1/3 flex flex-col items-center justify-center gap-y-10">
        <TopAgrarPolskaIcon className="w-54" />
        <ButtonsContainer
          goLiveLink="https://www.topagrar.pl/kalkulatory/jak-policzyc-oplacalnosc-uprawy-straczkowych-2529371"
          githubLink="https://github.com/MescoCzubinski/KalkulacjaStraczkowe"
        />
      </div>
      <div className="w-2/3 px-10">
        <TextContainer
          title={t("kalkulacja-straczkowe-title")}
          paragraphs={[
            t("kalkulacja-straczkowe-description-0"),
            t("kalkulacja-straczkowe-description-1"),
            t("kalkulacja-straczkowe-description-2"),
          ]}
        />
      </div>
    </div>
  );
}
