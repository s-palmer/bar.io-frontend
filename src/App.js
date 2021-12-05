import { useState, useEffect } from "react";
import getBars from "./services/getBars";
import Bars from "./components/Bars";
import UserInputForm from "./components/UserInputForm";
import MapComponent from "./components/MapComponent";
import Header from "./components/Header"
import "./App.css";

function App() {
  const [bars, setBars] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBars = async () => {
      const barsFromServer = await getBars();
      setBars(barsFromServer);

      setLoading(false)
    };

    fetchBars();
  }, []);

  return (
    <div className="main">
      <Header />
      <div className="container">
        <UserInputForm />
        <div className="bars-maps">
          {loading ? (
            <h3>Loading...</h3>
          ) : (
          <>
          <MapComponent bars={bars}/>
          {bars.length > 0 ? <Bars bars={bars} /> : <p>No bars found...</p>}
          </>
          )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
