import React from "react";

export default function Suggested({
  text,
  setShowSuggested,
  setCoords,
  setSearch,
  formatFind,
  setMapName,
}) {
  // Format the address API URL
  const addressApiUrl = formatFind(text);

  // Fetch and set address details when a suggestion is clicked
  async function handleSuggestionClick() {
    setShowSuggested(false);
    try {
      const responce = await fetch(addressApiUrl);
      const data = await responce.json();
      const location = data.candidates[0].location;
      setCoords([location.y, location.x]);
      setSearch(text);
      setMapName(text);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <h4 className="suggested-text" onClick={handleSuggestionClick}>
      {text}
    </h4>
  );
}
