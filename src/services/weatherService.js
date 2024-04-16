const API_KEY = 'c33e0c809127bc794f005550404b1236'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

const getWeatherData = (info, params) => {
    const url = new URL(BASE_URL + info) // retrieves the params from the url 
    url.search = new URLSearchParams({ ...params, appid: API_KEY }) // creates a new URLSearchParams which add each params with initializing it with '&'.

    // Fetch API - takes resource as arguement and returns a promise
    return fetch(url).then(response => response.json()).then(data => data)
}

const formatCurrentWeatherData = (data) => {
    let {
        main,
        name,
        sys: { country, sunrise, sunset },
        dt,
        timezone,
        weather,
        wind: { speed }
    } = data
    sunrise = formatToLocalTime(timezone, sunrise).localTime
    sunset = formatToLocalTime(timezone, sunset).localTime
    const localdate = formatToLocalTime(timezone, dt).localdate
    const localTime = formatToLocalTime(timezone, dt).localTime
    const { main: details, icon } = weather[0]

    return { name, country, main, localdate, localTime, sunrise, sunset, details, icon, speed }
}

const formatForecastData = (data) => {
    let { city: { timezone }, list } = data

    let hourly = list.map(d => {
        return {
            localdate: formatToLocalTime(timezone, d.dt).localdate,
            localTime: formatToLocalTime(timezone, d.dt).localTime,
            temp: d.main.temp,
            icon: d.weather[0].icon
        }
    }
    )
    return { hourly }
}


const getFormattedWeatherData = async (searchParams) => {
    const formattedWeatherData = await getWeatherData('weather', searchParams).then(formatCurrentWeatherData)

    const formattedForecastData = await getWeatherData('forecast', { ...searchParams, cnt: 5, exclude: 'current,minutely,alerts' }).then(formatForecastData)

    return { ...formattedWeatherData, ...formattedForecastData }
}

const formatToLocalTime = (timezone, timestamp) => {
    // debugger
    const timezoneOffsetSeconds = timezone;
    const date = new Date(timestamp * 1000 + timezoneOffsetSeconds * 1000);
    const [day, formattedDate, localTime] = [date.toLocaleString('en-US', { weekday: 'long' }), date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'UTC'  })];
    const localdate = day + ' ' + formattedDate

    return { localdate, localTime }
}

export default getFormattedWeatherData