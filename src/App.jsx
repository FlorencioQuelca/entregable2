import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'
import Loadding from './components/Loadding'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords , setCoords] = useState()
  const [weather , setWeather] = useState()
  const [temperature, setTemperature] = useState()
  
  useEffect(() => {
    const success=(pos)=>{
      const obj={
          lat:pos.coords.latitude,
          lon:pos.coords.longitude
         }
     setCoords(obj);
    // console.log(obj)
    }
    navigator.geolocation.getCurrentPosition(success) 
  }, [])
  
  console.log(coords)
  useEffect(()=>{
    
    if(coords){
      console.log(coords)
      const APIKEY='b54a9d77500b05f1bebcb118a5eef36e'
      const url=`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`

      axios.get(url).then(res =>{
            const celsius=(res.data.main.temp-273.15).toFixed(0)
            const farenheit =(celsius*9/5+32).toFixed(0)
            setTemperature({celsius,farenheit})
           setWeather(res.data)
      }).catch(err=>{
        console.log(err)
      })
    }

  },[coords]) 
 console.log(weather)

  return (
    <div className="App">
      {
        weather ?
        <WeatherCard  weather={weather}
                      temperature={temperature}  
        />
        :
        <Loadding/>
      }
    </div>
  )
}

export default App
