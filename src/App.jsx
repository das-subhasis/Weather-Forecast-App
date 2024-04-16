import { useEffect, useState } from 'react'
import CurrentWeather from './componenets/CurrentWeather'
import Navbar from './componenets/Navbar'
import WeatherForecast from './componenets/WeatherForecast'
import getFormattedWeatherData from './services/weatherService'

import './App.css'

function App() {
  const [query, setQuery] = useState({ q: 'Tokyo', units: 'metric' })
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      await getFormattedWeatherData({ ...query }).then(data => setWeather(data))
      console.log(query)
    }
    fetchWeatherData()
  }, [query])

  return (
    <>
      {weather && (
        <div className={`max-w-full bg-gradient-to-t from-indigo-600 to-purple-800`}>
          <div className='max-w-screen-md min-h-screen px-10 py-5 flex flex-col gap-5 mx-auto bg-white bg-opacity-25 font-titillium font-bold text-xl'>
            <Navbar setQuery={setQuery} weather={weather} />
            <CurrentWeather weather={weather} />
            <WeatherForecast weather={weather} />
          </div>
        </div>
      )}

    </>
  )
}

export default App
