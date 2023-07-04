'use client'

import { createContext, useState, useEffect, useContext } from "react"

const GlobalContext = createContext({
    forecast: {
        lat: null,
        lng: null,
        placeName: null
    },
    setForecast: () => { },  
})

export default function ContextProviders( { children } ) {
    const [ forecast, setForecast ] = useState( {
        lat: null,
        lng: null,
        placeName: null
    })

    useEffect( () => {
        console.log( forecast )
    }, [ forecast ] )

    return (
        <GlobalContext.Provider value={ { forecast, setForecast } }>
            { children }
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext( GlobalContext )