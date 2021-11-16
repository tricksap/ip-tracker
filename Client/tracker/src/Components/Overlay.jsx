import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";

function Overlay() {
  const [Info, setInfo] = useState({});
  useEffect(() => {
    axios.get("http://localhost:3001/").then(function (response) {
      console.log(response);
    });
  }, [Info]);

  return (
    <div className="overlay">
      <div class="flex-container">
        <p class="flex-item">
          Address <br />
          <span>--</span>
        </p>
        <p class="flex-item">
          Location <br />
          <span>--</span>
        </p>
        <p class="flex-item">
          Timezone <br />
          <span>--</span>
        </p>
        <p class="flex-item">
          ISP
          <br />
          <span>--</span>
        </p>
      </div>
    </div>
  );
}

export default Overlay;
