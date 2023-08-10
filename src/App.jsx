import { useEffect, useState } from "react";
import searchImg from "./assets/search-img.png";
import "./App.css";
import Suggested from "./Suggested";
import EmbeddedMap from "./EmbededMap";

function App() {
  const [suggested, setSuggested] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestedElements, setSuggestedElements] = useState([]);
  const [showSuggested, setShowSuggested] = useState(false);
  const [coords, setCoords] = useState([0, 0]);
  const [currCenter, setCurrCenter] = useState([0, 0]);
  const apiSuggested = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&text=${search}`;
  const apiFind = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&SingleLine=`;

  function formatFind(text) {
    return apiFind + encodeURIComponent(text);
  }

  useEffect(() => {
    setCurrCenter(coords);
  }, [coords]);

  useEffect(() => {
    async function fetchAdress() {
      try {
        let resp = await fetch(apiSuggested);
        let data = await resp.json();

        setSuggested(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchAdress();
  }, [search]);

  useEffect(() => {
    setSuggestedElements(
      suggested?.suggestions?.map((item) => {
        return (
          <Suggested
            key={item.magicKey}
            text={item.text}
            setSearch={setSearch}
            setShowSuggested={setShowSuggested}
            setCoords={setCoords}
          />
        );
      })
    );
  }, [suggested]);

  function handleChange(e) {
    setSearch(e.target.value);
    setShowSuggested(true);
  }

  return (
    <div className="site-wrapper">
      <div className="input-container">
        <form action="">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Въведете адрес..."
          />
          <button>
            {" "}
            <img src={searchImg} alt="search" className="search-img" />
          </button>
        </form>
      </div>

      {showSuggested && search && (
        <div className="suggested-elements-outer">
          <div className="suggested-elements">{suggestedElements}</div>
        </div>
      )}

      <EmbeddedMap name={search} initialCenter={currCenter} />
    </div>
  );
}

export default App;
