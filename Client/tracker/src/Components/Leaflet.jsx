import React from "react";
import "../style.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Leaflet(props) {
  const position = [props.Long, props.Lat];
  return (
    <div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup></Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Leaflet;
