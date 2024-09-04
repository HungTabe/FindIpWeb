import { useEffect, useState } from 'react';
import logo from './logo.svg';
import Axios from 'axios'; 
import Map from './Components/Map/Map'; 
import './App.css'; 

function App() {

  // Setting up the initial state vars
  const [ipDetails, setIpDetails] = useState([]);
  const [lat, setLat] = useState(22.5726)
  const [lon, setLon] = useState(88.3832)

  // Fetching the API once when the 
  // component is mounted

  useEffect(() => {
    Axios.get('https://ipapi.co/json/').then((res) => {
      setIpDetails(res.data);
      setLat(res.data.latitude);
      setLon(res.data.longitude);
    });
  }, [])
  return (
    <>
      <h1 className='heading'>IP Address Finder</h1>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This project is pending because I don't have VISA get MapBox token
          </p>
        </header>
        <div className='left'>
          <h4>What is my IPv4 address?</h4>
          <h1 id="ip">{ipDetails.ip}</h1>
          <h4>Approximate location: </h4>
          <p>{ipDetails.city}, {ipDetails.region}, {ipDetails.country_name}</p>
          <h4>Internet Service Provider(ISP):</h4>
          <p>{ipDetails.org}</p>

        </div>
        <Map lat={lat} lon={lon} /> 
      </div>
    </>
  );
}

export default App;
