import React from "react";
import "../style.css";

function Overlay(props) {
  return (
    <div className="overlay">
      <div class="flex-container">
        <p class="flex-item">
          Address <br />
          <span>{props.add}</span>
        </p>
        <p class="flex-item">
          Location <br />
          <span>{props.loc}</span>
        </p>
        <p class="flex-item">
          Timezone <br />
          <span>{props.timeZone}</span>
        </p>
        <p class="flex-item">
          ISP
          <br />
          <span>{props.ISP}</span>
        </p>
      </div>
    </div>
  );
}

export default Overlay;
