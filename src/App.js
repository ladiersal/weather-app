import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './App.css';
require('dotenv').config()

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e6992e0e449e3729ee30b2a04a8e5e5a&units=metric`;
  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
    
  }


  return (
    <div className="app">
      <div className="search">
        <input 
        type="text"
        onChange={event => setLocation(event.target.value)}
        placeholder='Enter Location'
        onKeyPress={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1 className='bold'>{data.main.temp}</h1> : null}
            
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="button">
          <div className="feels">
            
          {data.weather ? <p className='bold'>{data.main.feels_like}</p> : null}

            <p>Feels Like</p>
          </div>
          <div className="humidity">
          {data.weather ? <p className='bold'>{data.main.humidity}</p> : null}

            <p>Humiditys</p>
          </div>
          <div className="wind">
          {data.weather ? <p className='bold'>{data.wind.speed}</p> : null}

            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
