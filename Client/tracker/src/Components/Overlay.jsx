import React from "react";
import "../style.css";

function Overlay() {
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
