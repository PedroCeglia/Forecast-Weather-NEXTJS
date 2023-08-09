'use client'

import { createContext, useState, useContext } from "react"

import light from "./light"
import dark from "./dark"

const ThemeContext = createContext( {
    theme : dark,
    toggleThemeToDarkOrLight : () => {}
} )

export default function ThemeProvider( { children } ) {

    const [ theme, setTheme ] = useState( dark )

    function toggleThemeToDarkOrLight() {
        if ( theme.type == "dark")
            setTheme( light )
        
        if (theme.type == "light")
            setTheme( dark )

        console.log(theme.type)
    }

    return (
        <ThemeContext.Provider value={ { theme, toggleThemeToDarkOrLight } }>
            { children }
        </ThemeContext.Provider>
    )
}

export const useThemeProvider = () => useContext( ThemeContext )