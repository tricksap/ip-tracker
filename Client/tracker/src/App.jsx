import React from "react";
import "./style.css";
import Leaflet from "./Components/Leaflet";
import Upper from "./Components/Upper";
import Overlay from "./Components/Overlay";
function App() {
  return (
    <div>
      <Overlay />
      <Upper />
      <Leaflet />
    </div>
  );
}

export default App;
