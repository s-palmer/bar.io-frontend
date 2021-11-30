import { useState, useEffect } from 'react';
import getBars from './services/getBars';
import './App.css';

function App() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const fetchBars = async () => {
      const barsFromServer = await getBars();
      setBars(barsFromServer)
    }

    fetchBars();
  }, []);

  return (
    <div className="App">
      
      {bars.length > 0 ? 
        <ul>
          {bars.map(bar => <li key={bar.id}>{bar.name}</li>)}
        </ul>
        : <p> No bars found</p>
      }
      
    </div>
  );
}

export default App;
