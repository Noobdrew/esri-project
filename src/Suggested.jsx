export default function Suggested({
  text,
  setShowSuggested,
  setCoords,
  setSearch,
}) {
  const apiAdress = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&SingleLine=${encodeURIComponent(
    text
  )}`;

  async function getAdress() {
    setShowSuggested(false);
    try {
      const resp = await fetch(apiAdress);
      const data = await resp.json();
      console.log(data.candidates[0].location);
      setCoords([data.candidates[0].location.y, data.candidates[0].location.x]);
      setSearch(text);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <h4 className="suggested-text" onClick={getAdress}>
      {text}
    </h4>
  );
}
