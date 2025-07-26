import './WeatherInformations.css'

function WeatherInformations({ infoWeather }) {

    if (!infoWeather) {
        return <p>carregando</p>
    }

    return (
        <div className='weather-container'>
            <h2>{infoWeather.name}</h2>

            <div className='weather-info'>
                <img src={`https://openweathermap.org/img/wn/${infoWeather.weather[0].icon}@4x.png`} alt="img-weather"/>
                <p className='temperature'>{Math.round(infoWeather.main.temp)}°C</p>
            </div>

            <p className='description'> {infoWeather.weather[0].description}</p>

            <div className='details'>
                <p>Sensação Teŕmica: {Math.round(infoWeather.main.feels_like)}°C</p>
                <p>Umidade: {infoWeather.main.humidity}</p>
                <p>Pressão: {infoWeather.main.pressure}</p>
            </div>

        </div>
    )
}


export default WeatherInformations