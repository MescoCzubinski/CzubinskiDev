import Navigation from "./components/Navigation/Navigation";
import Carusel from "./components/Carusel/Carusel";
import Home from "./screens/Home";
import First from "./screens/First";
import Second from "./screens/Second";
function App() {
  return (
    <div className="">
      <Navigation />
      <Carusel>
        <Home />
        <First />
        <Second />
      </Carusel>
    </div>
  );
}

export default App;
