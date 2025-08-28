import MyPhoto from "./icons/MyPhoto.svg?react";
import RubberDuck from "./icons/RubberDuck.svg?react";
import { useTranslation } from "react-i18next";
import "./duck-animation.css";

export default function About() {
  const { t } = useTranslation();
  return (
    <div
      className="w-screen h-screen pt-[calc(var(--navbar-width)*2)] md:pt-0 flex justify-center relative z-10 border-b-2 border-[var(--color-detail)] md:border-0"
      key="about"
      id="about"
    >
      <div className="h-full w-full md:w-3/5 flex items-center  flex-col md:flex-row  px-5 py-5 md:py-10 gap-x-10 text-[var(--color-white)">
        <div className="h-full w-full flex flex-col gap-y-5 text-[var(--color-white)]">
          <div className="text-3xl font-bold tracking-wide text-shadow-primary">
            {t("about-title")}
          </div>
          <div className="flex text-xl md:text-lg flex-col gap-y-3">
            {[
              t("about-description-1"),
              t("about-description-2"),
              t("about-description-3"),
            ].map((paragraph, index) => (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              ></div>
            ))}
          </div>
        </div>
        <div className="h-full w-full flex md:flex-col gap-y-5 mt-10 md:mt-0">
          <div className=" w-full hidden md:flex items-center">
            <MyPhoto className="w-fit cursor-pointer rounded-md shadow-frame" />
          </div>
          <div className="h-full w-full">
            <div className="h-full w-full flex flex-col gap-y-5 text-[var(--color-white)]">
              <div className="text-3xl font-bold tracking-wide text-shadow-primary">
                {t("wmsdev-title")}
              </div>
              <div className="flex text-xl md:text-lg flex-col gap-y-3">
                {[t("wmsdev-description-1"), t("wmsdev-description-2")].map(
                  (paragraph, index) => (
                    <div
                      key={index}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    ></div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-1 duck-animation">
        <RubberDuck />
      </div>
    </div>
  );
}
