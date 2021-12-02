import { useState, useEffect } from "react";
import getBars from "./services/getBars";
import Bars from './components/Bars'
import UserInputForm from './components/UserInputForm'
import "./App.css";
import MapWrapper from "./components/Wrapper";


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
    <UserInputForm/>
    <MapWrapper />
      <div style={{ height: "200px" }} id="map"></div>
      {bars.length > 0 ? <Bars bars={bars} /> : <p>No bars found...</p>}
    </div>
  
  );
}
      
export default App;
