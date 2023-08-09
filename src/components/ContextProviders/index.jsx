'use client'

import { createContext, useState, useEffect, useContext } from "react"
import { useRouter } from "next/navigation"

const GlobalContext = createContext({
    forecast: {
        lat: null,
        lon: null,
        placeName: null,
        forecast:{        
            forecastCurrent: null,
            forecastWeek: null,
            forecastDay: null,
            hasForecast: false
        }

    },
    setForecast: () => { },  
    onChangeForecastPlace: () => {}
})

export default function ContextProviders( { children } ) {

    const [ forecast, setForecast ] = useState( null )
    const [ isValidForecast, setIsValidForecast ] = useState( null )
    const router = useRouter()


    function onChangeForecastPlace( forecast ) {
        const { lat, lon } = forecast
        getForecastResponse( lat, lon )
    }

    async function getForecastResponse( lat, lon ) {
        const res = (lat && lon) && await fetch( `https://api.openweathermap.org/data/3.0/onecall?lat=${ lat }&lon=${ lon }&lang=pt_br&exclude=minutely,alerts&appid=2933fdc575fb70fe1fc480000280d512` )
        return res.json().then( ( newForecast ) => setForecast(  { 
            lat: lat,
            lon: lon,
            forecast: newForecast 
            }
        ))
    }

    function verifyIfForecastIsValid() {
        forecast.forecast === null && false
        forecast.lat === forecast.forecast.lat || false 
        forecast.lon === forecast.forecast.lon || false 
        return true
    }

    function getCurrentForecast(){
        if(isValidForecast){
            return forecast.forecast.current
        } else {
            router.push("/")
        }
    }
    function getDayForecast(){
        if(isValidForecast){
            return forecast.hourly
        } else {
            router.push("/")
        }
    }
    function getWeekForecast(){
        if(isValidForecast) {
            return forecast.daily
        } else {
            router.push("/")
        }
    }
    
    useEffect( () => {
        console.log( forecast )
        // verificar
        if(forecast != null)
            setIsValidForecast( verifyIfForecastIsValid() )
    }, [ forecast ] )

    useEffect(() => {
        console.log( isValidForecast )
        if( isValidForecast ){
            // Redirecionar para a pagina de previsão
            router.push("/forecast")

        } else {
            // Redirecionar para a pagina principal
            router.push("/")
        }
    },[ isValidForecast ])

    return (
        <GlobalContext.Provider value={ { 
            forecast,
            setForecast,
            onChangeForecastPlace,
            getCurrentForecast, 
            getDayForecast, 
            getWeekForecast 
        } }>
            { children }
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext( GlobalContext )