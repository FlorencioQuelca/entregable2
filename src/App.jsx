import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'
import WeaterCard from './components/WeaterCard'

function App() {

  const [coords , setCoords] = useState()
  const [weater , setWeater] = useState()
  
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
    setWeater(res.data)
      }).catch(err=>{
        console.log(err)
      })
    }

  },[coords]) 


  return (
    <div className="App">
         <WeaterCard  weater={weater}/>
    </div>
  )
}

export default App
