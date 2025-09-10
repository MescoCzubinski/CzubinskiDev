import { useEffect } from "react";
import { changeLanguage } from "i18next";
import Navigation from "./components/Navigation/Navigation";
import Background from "./components/Background/Background";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Portfolio from "./screens/Portfolio/Portfolio";

function App() {
  useEffect(() => {
    let selectedElement = window.location.pathname.split("/")[1];
    if (selectedElement === "arvalis") {
      changeLanguage("en");
      selectedElement = "portfolio";
    }

    if (selectedElement) {
      const element = document.getElementById(selectedElement);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <Navigation />
      <Background>
        <Home />
        <About />
        <Portfolio />
      </Background>
    </>
  );
}

export default App;
