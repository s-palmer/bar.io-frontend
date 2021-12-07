import { useState, useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import getBars from "./services/getBars";
import Bars from "./components/Bars";
import UserInputForm from "./components/UserInputForm";
import MapComponent from "./components/MapComponent";
import Header from "./components/Header";
import "./App.css";
import "./loadingAnimation.css";


const Apikey = process.env.REACT_APP_PLACES_API_KEY;

function App() {
  const [bars, setBars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState({});
  const [userInputPresent, setUserInputPresent] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: Apikey,
    region: "uk",
  });

  const fetchBars = async (location) => {
    const barsFromServer = await getBars(location);
    setBars(barsFromServer);
    setLoading(false);
  };

  return (
    <div className="main">
      <Header />
      { isLoaded && 
      <div className="container">
        <UserInputForm
          setUserLocation={setUserLocation}
          fetchBars={fetchBars}
          setUserInputPresent={setUserInputPresent}
        />
        {userInputPresent ? (
          <div className="bars-maps">
            {loading ? (
            <div id="load">
              <div>G</div>
              <div>N</div>
              <div>I</div>
              <div>D</div>
              <div>A</div>
              <div>O</div>
              <div>L</div>
            </div>
            ) : (
              <>
                <MapComponent bars={bars} location={userLocation} zoom={13} />
                {bars.length > 0 ? (
                  <Bars bars={bars} />
                ) : (
                  <p>No bars found...</p>
                )}
              </>
            )}
          </div>
        ) : (
          <>
            <h2>Please enter your location</h2>
          </>
        )}
      </div>
      }
    </div>
  );
}

export default App;
