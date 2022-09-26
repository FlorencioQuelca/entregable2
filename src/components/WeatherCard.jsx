import React, { useState } from 'react'
const WeatherCard = ({weather,temperature}) => {
const [isCelsius, setIsCelsius] = useState(true)
const chanceTemperature = ()=>setIsCelsius(!isCelsius)
  return (
    <article className='card'>
           <h1>Weather  App</h1>
           <h2>{weather?.name}, {weather?.sys.country}</h2>
            <section>
               <img src={weather ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`: ''} alt="cloud" /> 
            </section>
            <section>
              <h3>"{weather?.weather[0].description}"</h3>
              <ul className='card_list'> 
                 <li><span>Wind speed</span>{weather?.wind.speed} m/s</li>    
                 <li><span>Clouds</span> {weather?.clouds.all} %</li>    
                 <li><span>Pressure</span> {weather?.main.pressure} hPa</li>    
              </ul>
            </section>
               <h3>{ isCelsius ? `${temperature?.celsius} °C`: `${temperature?.farenheit} °F` }</h3>
            <button  onClick={chanceTemperature}>
                 {isCelsius ?  'chance to °F': 'chance to °C'}
            </button>

    </article>
  )
  
}

export default WeatherCard
//<img src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="cloud" />   // corto circuito