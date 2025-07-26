import './WeatherInformations5Days.css'

function WeatherInformations5Days({ infoWeather5Days }) {

    let dailyForecast = {}

    for (let forecast of infoWeather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    const next5DaysForecast = Object.values(dailyForecast).slice(1, 6)

    if (!infoWeather5Days) {
        return <p>carregando</p>
    }

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })

        return newDate
    }


    return (
        <div className='weather-container'>

            <h3>Previsão próximos 5 dias:</h3>

            <div className='weather-list'>

                {next5DaysForecast.map(forecast => (

                    <div key={forecast.dt} className='weather-item'>
                        <p className='forecastDay'>{convertDate(forecast)}</p>
                        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                        <p className='forecastDescript'>{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C max</p>
                    </div>

                ))}
            </div>
        </div>
    )
}


export default WeatherInformations5Days