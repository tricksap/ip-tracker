import React, { useState } from "react";
import axios from "axios";
import "../style.css";

function Upper() {
  const [address, setAddress] = useState("");

  function createPost(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/", { address: address })
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <div className="upper">
      <h1>IP Address Tracker</h1>
      <form onSubmit={createPost}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className="button">
          <img src={process.env.PUBLIC_URL + "icon-arrow.svg"} alt="arrow" />
        </button>
      </form>
    </div>
  );
}

export default Upper;
