import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return <div className="bg-white dark:bg-black">{t("title")}</div>;
}

export default App;
