import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import mapMarker from "./map-marker.png";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import React from "react";
import { Icon } from "leaflet";

export default function EmbeddedMap({ initialCenter, name }) {
  const customIcon = new Icon({
    iconUrl: mapMarker,
    iconSize: [32, 32], // Specify the width and height of the icon
  });
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
        <Marker position={initialCenter} icon={customIcon}>
          <Popup>{name}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
