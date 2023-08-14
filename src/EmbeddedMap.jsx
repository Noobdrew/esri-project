import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import React from "react";

export default function EmbeddedMap({ initialCenter, name }) {
  // Component to change the view of the map
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  console.log(initialCenter);
  return (
    <MapContainer center={initialCenter} zoom={13} className="map-outer">
      <ChangeView center={initialCenter} zoom={13} />

      {/* Add the base tile layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add other map components like markers, popups, etc. */}
      {name && (
        <Marker position={initialCenter}>
          <Popup>{name}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
