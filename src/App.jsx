import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const APIKEY='b54a9d77500b05f1bebcb118a5eef36e'
   const url='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
  return (
    <div className="App">
      
    </div>
  )
}

export default App
