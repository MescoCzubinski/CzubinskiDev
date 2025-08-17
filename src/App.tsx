import Navigation from "./components/Navigation/Navigation";
import Carusel from "./components/Carusel/Carusel";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Portfolio from "./screens/Portfolio";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const selectedElement = window.location.pathname.replace("/", "");
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
      <Carusel>
        <Home />
        <About />
        <Portfolio />
      </Carusel>
    </>
  );
}

export default App;
