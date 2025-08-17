// import WMS_DEVIcon from "./icons/WMS_DEV.svg?react";
import MyPhoto from "./icons/MyPhoto.svg?react";
import RubberDuck from "./icons/RubberDuck.svg?react";
import TextContainer from "../../components/TextContainer";
import { useTranslation } from "react-i18next";
import "./aboutStyles.css";

export default function About() {
  const { t } = useTranslation();
  return (
    <div
      className="w-screen h-screen bg-[var(--color-background)] pt-[calc(var(--navbar-width)*1)] md:pt-0 flex justify-center relative"
      key="about"
      id="about"
    >
      <div className="h-full w-full md:w-3/5 flex items-center justify-center px-5 py-10 gap-x-10 text-[var(--color-white)">
        <TextContainer
          title={t("about-title")}
          paragraphs={[
            t("about-description-1"),
            t("about-description-2"),
            t("about-description-3"),
          ]}
        />
        <div className="h-full w-full flex flex-col gap-y-5">
          <div className=" w-full flex items-center justify-center">
            <MyPhoto className="w-fit cursor-pointer photo-shadow" />
          </div>
          <div className="h-full w-full">
            <TextContainer
              title={t("wmsdev-title")}
              paragraphs={[
                t("wmsdev-description-1"),
                t("wmsdev-description-2"),
              ]}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-1 animate-duck-patrol">
        <RubberDuck />
      </div>
    </div>
  );
}
