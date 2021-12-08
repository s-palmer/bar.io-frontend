import { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import Bars from "./components/Bars";
import UserInputForm from "./components/UserInputForm";
import MapComponent from "./components/MapComponent";
import Header from "./components/Header";
import "./App.css";
import sendUserRequest from "./services/sendUserRequest";
import "./loadingAnimation.css";
import LoadingComponent from "./components/LoadingComponent";

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

  const fetchBars = async (res, mins) => {
    const barsFromServer = await sendUserRequest(res, mins);
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
              <LoadingComponent />
            ) : (
              <>
                <MapComponent bars={bars} location={userLocation} zoom={13} />
                {bars.length > 0 ? (
                  <Bars bars={bars} location={userLocation}/>
                ) : (
                  <p>No bars found...</p>
                )}
              </>
            )}
          </div>
        ) : (
          <>
            <h2 className="centre location-h2">Please enter your location</h2>
          </>
        )}
      </div>
      }
    </div>
  );
}

export default App;
