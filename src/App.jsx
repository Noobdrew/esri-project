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

  const api = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&text=${search}`;

  useEffect(() => {
    async function fetchAdress() {
      try {
        let resp = await fetch(api);
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
          />
        );
      })
    );
  }, [suggested]);

  function handleChange(e) {
    setSearch(e.target.value);
    setShowSuggested(true);
  }
  let long = 70;
  return (
    <div className="site-wrapper">
      <div className="input-container">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Въведете адрес..."
        />
        <img src={searchImg} alt="search" className="search-img" />
      </div>

      {showSuggested && (
        <div className="suggested-elements">{suggestedElements}</div>
      )}
      <EmbeddedMap longitude={100} latitude={0} />
    </div>
  );
}

export default App;
