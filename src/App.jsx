import React, { memo, useEffect, useState } from "react";
import searchImg from "./search-img.png";
import "./App.css";
import Suggested from "./Suggested";
import EmbeddedMap from "./EmbeddedMap";

const MemoizedEmbeddedMap = memo(EmbeddedMap);
function App() {
  // State variables
  const [suggested, setSuggested] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestedElements, setSuggestedElements] = useState([]);
  const [showSuggested, setShowSuggested] = useState(false);
  const [coords, setCoords] = useState([0, 0]);
  const [mapName, setMapName] = useState("");

  // API endpoints
  const apiBaseUrl =
    "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";
  const apiSuggested = `${apiBaseUrl}/suggest?f=json&text=${search}`;
  const apiFind = `${apiBaseUrl}/findAddressCandidates?f=json&SingleLine=`;

  // Get user location using Geolocation API
  function getUserLocation() {
    return new Promise((resolve, reject) => {
      const successCallback = (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        resolve([lat, long]);
      };

      const errorCallback = (error) => {
        console.log(error);
        reject(error);
      };

      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    });
  }

  // Fetch user location on component mount
  useEffect(() => {
    async function fetchUserLocation() {
      try {
        const userCoords = await getUserLocation();
        setCoords(userCoords);
      } catch (error) {
        setCoords([0, 0]); // Fallback to initialCenter on error
      }
    }

    fetchUserLocation();
  }, []);

  // Function to format the Find API URL
  function formatFind(text) {
    return apiFind + encodeURIComponent(text);
  }

  // Fetch address suggestions from API
  useEffect(() => {
    async function fetchAddressSuggestions() {
      try {
        const responce = await fetch(apiSuggested);
        const data = await responce.json();

        setSuggested(data);
      } catch (err) {
        console.log(err);
      }
    }
    if (search) {
      fetchAddressSuggestions();
    }
  }, [search]);

  // Populate suggestedElements array with Suggested components
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
            formatFind={formatFind}
            setMapName={setMapName}
          />
        );
      })
    );
  }, [suggested]);

  // Handle input change
  function handleChange(e) {
    const newSearch = e.target.value;
    setSearch(newSearch);
    setShowSuggested(true);
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const responce = await fetch(formatFind(search));
      const data = await responce.json();
      const location = data.candidates[0].location;

      setSearch(data.candidates[0].address);
      setCoords([location.y, location.x]);
      setMapName(search);
    } catch (err) {
      console.log(err);
    } finally {
      setShowSuggested(false);
    }
  }

  return (
    <div className="site-wrapper">
      <div className="input-container">
        <form action="" onSubmit={handleSubmit}>
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

      <MemoizedEmbeddedMap name={mapName} initialCenter={coords} />
    </div>
  );
}

export default App;
