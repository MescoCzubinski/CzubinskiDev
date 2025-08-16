import Navigation from "./components/Navigation/Navigation";
import Carusel from "./components/Carusel/Carusel";
import Home from "./screens/Home/Home";
import About from "./screens/About";
import Portfolio from "./screens/Portfolio";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const pathId = window.location.pathname.replace("/", "");

    if (pathId) {
      const element = document.getElementById(pathId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      window.history.replaceState({}, "", "/");
    }
  }, []);

  return (
    <div className="">
      <Navigation />
      <Carusel>
        <Home />
        <About />
        <Portfolio />
      </Carusel>
    </div>
  );
}

export default App;
