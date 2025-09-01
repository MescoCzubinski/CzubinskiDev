import { useTranslation } from "react-i18next";
import "./duck-animation.css";
import MyPhoto from "./icons/MyPhoto.svg?react";
import RubberDuck from "./icons/RubberDuck.svg?react";

export default function About() {
  const { t } = useTranslation();
  return (
    <div
      className="w-screen h-screen pt-[calc(var(--navbar-width)*2)] md:pt-0 flex justify-center relative z-10 border-b-2 border-[var(--color-dark)] md:border-0"
      key="about"
      id="about"
    >
      <div className="h-full w-full md:w-3/5 flex items-center  flex-col md:flex-row  px-5 py-5 md:py-10 gap-x-10">
        <div className="h-full w-full flex flex-col gap-y-5 2xl:gap-y-7">
          <h1>{t("about-title")}</h1>
          <div className="flex flex-col gap-y-3 2xl:gap-y-5">
            <p
              dangerouslySetInnerHTML={{ __html: t("about-description-1") }}
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: t("about-description-2") }}
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: t("about-description-3") }}
            ></p>
          </div>
        </div>
        <div className="h-full w-full flex md:flex-col gap-y-5 2xl:gap-y-7 mt-10 md:mt-0">
          <div className=" w-full hidden md:flex items-center">
            <MyPhoto className="w-fit rounded-md border-2 border-[var(--color-dark)]" />
          </div>
          <div className="h-full w-full">
            <div className="h-full w-full flex flex-col gap-y-5 2xl:gap-y-7">
              <h1>{t("wmsdev-title")}</h1>
              <div className="flex flex-col gap-y-3 2xl:gap-y-5">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("wmsdev-description-1"),
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("wmsdev-description-2"),
                  }}
                ></p>
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
