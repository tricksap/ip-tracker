import React, { useState } from "react";
import "./style.css";
import Leaflet from "./Components/Leaflet";
import Upper from "./Components/Upper";
import Overlay from "./Components/Overlay";
function App() {
  const [location, setLocation] = useState({
    Add: "---",
    Loc: "---",
    TimeZone: "---",
    Isp: "---",
    Lat: -0.09,
    Long: 51.505,
  });

  return (
    <div>
      <Overlay
        add={location.Add}
        loc={location.Loc}
        timeZone={location.TimeZone}
        ISP={location.Isp}
      />
      <Upper onAdd={setLocation} />
      <Leaflet Long={location.Long} Lat={location.Lat} />
    </div>
  );
}

export default App;
