import React from 'react'
import { FaTemperatureHigh, FaWater, FaWind, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";

const CurrentWeather = ({ weather: { name, country, details, icon, sunrise, sunset, speed, main } }) => {
  return (
    <div className='flex flex-col justify-center items-center font-medium'>
      <div className='location font-semibold text-3xl text-white'>
        <h1 className='drop-shadow-glow'>{name}, {country}</h1>
      </div>
      <div className='flex flex-col justify-center items-center gap-2 mt-7 text-xl text-white'>
        <section className='curr-w-stat font-semibold text-2xl'>
          <h1>{details}</h1>
        </section>
        <section className='flex justify-between items-center gap-32'>
          <span className=''><img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}alt="" /></span>
          <span className='temperature text-5xl'>{main.temp.toFixed()}°</span>
          <div className='flex flex-col justify-center items-center gap-2 text-lg'>
            <span className='flex items-center gap-2'>
              <FaTemperatureHigh />
              <p>Feels Like : {main.feels_like.toFixed()}°</p>
            </span>
            <span className='flex items-center gap-2'>
              <FaWater />
              <p>Humidity : {main.humidity.toFixed()}%</p>
            </span>
            <span className='flex items-center gap-2'>
              <FaWind />
              <p>Wind : {speed} km/h</p>
            </span>
          </div>
        </section>
        <section className='flex justify-center items-center gap-2 text-base mt-4'>
          <span className='flex items-center gap-2'>
            <WiSunrise size={22} />
            <p>Rise : <span>{sunrise}</span></p>
          </span>
          <span>|</span>
          <span className='flex items-center gap-2'>
            <TbSunset2 size={22} />
            <p>Set : <span>{sunset}</span></p>
          </span>
          <span>|</span>
          <span className='flex items-center gap-2'>
            <FaArrowUp size={20} />
            <p>High : <span>{main.temp_max.toFixed()}°</span></p>
          </span>
          <span>|</span>
          <span className='flex items-center gap-2'>
            <FaArrowDown size={20} />
            <p>Low : <span>{main.temp_min.toFixed()}°</span></p>
          </span>
        </section>
      </div>
    </div>
  )
}

export default CurrentWeather