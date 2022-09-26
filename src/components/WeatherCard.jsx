import React, { useState } from 'react'
const WeatherCard = ({weather,temperature}) => {
const [isCelsius, setIsCelsius] = useState(true)
const chanceTemperature = ()=>setIsCelsius(!isCelsius)
  return (
    <article className='card'>
           <h1  className='card__title'>Weather  App</h1>
           <h2 className='card__subtitle'>{weather?.name}, {weather?.sys.country}</h2>
            <section className='card__first-section'>
               <img src={weather ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`: ''} alt="cloud" /> 
            </section>
            <section className='card__second-section'>
              <h3  className='card__description'>"{weather?.weather[0].description}"</h3>
              <ul className='card__list'> 
                 <li className='card__item'><span className='card__span'>Wind speed</span>{weather?.wind.speed} m/s</li>    
                 <li className='card__item'><span className='card__span'>Clouds</span> {weather?.clouds.all} %</li>    
                 <li className='card__item'><span className='card__span'>Pressure</span> {weather?.main.pressure} hPa</li>    
              </ul>
            </section>
               <h3 className='card__temperature'>{ isCelsius ? `${temperature?.celsius} °C`: `${temperature?.farenheit} °F` }</h3>
            <button   className='card__btn' onClick={chanceTemperature}>
                 {isCelsius ?  'chance to °F': 'chance to °C'}
            </button>

    </article>
  )
  
}

export default WeatherCard
//<img src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="cloud" />   // corto circuito