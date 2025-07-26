import { useState, useRef } from 'react'
import axios from 'axios'

import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'
import WeatherInformations5Days from './components/WeatherInformations5Days/WeatherInformations5Days'

function App() {
  const [weather, setWeather] = useState()  //[valor atual, funcao que atualiza o valor do weather]
  const [weather5Days,  setWeather5Days] = useState()

  const inputRef = useRef()    //useRef pega algo de referencia, no caso ele esta guardando dentro dele as informacoes do input1

  async function searchCity() {    //async e await andam lado a lado // uteis aqui pois estamos tratando de daos externos

    const city = inputRef.current.value
    const key = "39722ef6b31e65a62d8c2d2d68ff6c8a"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5days = await axios.get(url5days)

    setWeather(apiInfo.data)
    setWeather5Days(apiInfo5days.data)
  }

  return ( 
    <div className='container'>
      <h1>LumerWeather</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/> {/*esse é o input1 */}
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations infoWeather={weather}/>} {/*Os componentes so aparecem por causa dessa validacao, ate porque o weather comeca como false(undefined/null), quando clicamos no botao, o weather ganha um valor(apiInfo.data),logo se torna true,e se é true ele roda o outro lado do &&*/}
      {weather5Days && <WeatherInformations5Days infoWeather5Days = {weather5Days}/>} 
    </div>
  )
}

export default App
