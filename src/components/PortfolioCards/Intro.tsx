import TextContainer from "../TextContainer";
import TopAgrarPolskaIcon from "./icons/TopAgrarPolska.svg?react";
import WMS_DEVIcon from "./icons/WMS_DEV.svg?react";
import { useTranslation } from "react-i18next";
export default function Intro({
  setSelectedIndex,
}: {
  setSelectedIndex: (index: number) => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex items-center" id="Intro">
      <div className="w-1/2 px-10">
        <TextContainer
          title={t("portfolio-title")}
          paragraphs={[
            t("portfolio-description-0"),
            t("portfolio-description-1"),
          ]}
        />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <TopAgrarPolskaIcon
          className="w-72 test"
          onClick={() => setSelectedIndex(1)}
        />
        <WMS_DEVIcon
          className="w-72 test"
          onClick={() => setSelectedIndex(4)}
        />
      </div>
    </div>
  );
}
