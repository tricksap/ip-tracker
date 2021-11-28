import React, { useState } from "react";
import axios from "axios";
import "../style.css";

function Upper(props) {
  const [address, setAddress] = useState("");

  function createPost(e) {
    axios
      .post("http://localhost:3001/", { address: address })
      .then((response) => {
        console.log(response.data);
      });
    e.preventDefault();
    getPost();
  }

  function getPost() {
    axios.get("http://localhost:3001/").then(function (response) {
      props.onAdd({
        Add: response.data.ip,
        Loc: response.data.location.city,
        TimeZone: response.data.location.timezone,
        Isp: response.data.isp,
        Lat: response.data.location.lat,
        Long: response.data.location.lng,
      });
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
