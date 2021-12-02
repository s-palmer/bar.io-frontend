import { useState, useEffect } from "react";
import getBars from "./services/getBars";
import Bars from "./components/Bars";
import UserInputForm from "./components/UserInputForm";
import MapComponent from "./components/MapComponent";
import "./App.css";

function App() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const fetchBars = async () => {
      const barsFromServer = await getBars();
      setBars(barsFromServer);
    };

    fetchBars();
  }, []);

  return (
    <div className="container">
      <UserInputForm />
      <div className="bars-maps">
        <MapComponent />
        {bars.length > 0 ? <Bars bars={bars} /> : <p>No bars found...</p>}
      </div>
    </div>
  );
}

export default App;
