import React, { useState } from "react";
import PopupCoords from "./PopupCoords";

export default function Suggested({
  text,
  setShowSuggested,

  setSearch,
}) {
  const apiAdress = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&SingleLine=${encodeURIComponent(
    text
  )}`;

  async function getAdress() {
    setShowSuggested(false);
    try {
      // const resp = await fetch(apiAdress);
      // const data = await resp.json();
      // console.log(data);

      setSearch(text);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <h4 className="suggested-text" onClick={getAdress}>
      {text}
      {/* {popupOpen && <PopupCoords coordsX={adress?.location?.x} coordsY={adress?.location?.y} />} */}
    </h4>
  );
}
