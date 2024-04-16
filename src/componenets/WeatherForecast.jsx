import React from 'react'

const WeatherForecast = ({weather : {hourly}}) => {
  return (
    <div className='flex flex-col mt-5 px-12'>
      <section className='text-lg font-bold uppercase text-white'>
        <h1>Hourly Forecast</h1>
      </section>
      <hr className='my-2 border' />
      <section className='forecast flex gap-16 items-center justify-center py-3'>
      {
          hourly.map((item, id) => {
            return <div key={id} className='flex flex-col justify-center items-center'>
              <span className='text-white text-sm font-medium flex flex-col gap-3 items-center justify-center'>
                <h1>{item.localdate.split(" ")[0].substring(0,3)}</h1>
                <h1>{item.localTime}</h1>
              </span>
              <span>
                <img src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} alt="" className='w-16' />
              </span>
              <span className='text-white'>
                {item.temp.toFixed()}°
              </span>
            </div>
          })
        }
      </section>
    </div>
  )
}

export default WeatherForecast