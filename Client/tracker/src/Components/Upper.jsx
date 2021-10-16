import React from "react";
import "../style.css";

function Upper() {
  return (
    <div className="upper">
      <h1>IP Address Tracker</h1>
      <form>
        <input type="text" />
        <button className="button">
          <img src={process.env.PUBLIC_URL + "icon-arrow.svg"} alt="arrow" />
        </button>
      </form>
    </div>
  );
}

export default Upper;
