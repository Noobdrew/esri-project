import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

export default function EmbeddedMap({ initialCenter, name }) {
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <MapContainer center={initialCenter} zoom={13} className="map-outer">
      <ChangeView center={initialCenter} zoom={13} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {
        <Marker position={initialCenter}>
          <Popup>{name}</Popup>
        </Marker>
      }

      {/* Add other map components like markers, popups, etc. */}
    </MapContainer>
  );
}
