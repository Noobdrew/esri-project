export default function Suggested({
  text,
  setShowSuggested,
  setCoords,
  setSearch,
  formatFind,
}) {
  const adress = formatFind(text);

  async function getAdress() {
    setShowSuggested(false);
    try {
      const resp = await fetch(adress);
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
