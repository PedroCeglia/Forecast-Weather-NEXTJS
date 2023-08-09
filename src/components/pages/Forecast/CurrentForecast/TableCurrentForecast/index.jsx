'use client'

import { ItemTableCurrentForecastStyle, TableCurrentForecastStyle } from "./style"
import { useThemeProvider } from "@/src/style/ThemeProvider"
import { useGlobalContext } from "@/src/components/ContextProviders"

export default function TableCurrentForecast() {

    const { theme } = useThemeProvider()
    const { getCurrentForecast } = useGlobalContext()

    const currentForecast = getCurrentForecast()
    
    const tableList = [
        { title : "Temperatura", content: currentForecast.temp},
        { title : "Sensação Térmica", content: currentForecast.feels_like},
        { title : "Velocidade do Vento", content: currentForecast.wind_speed},
        { title : "Chances de Chuva", content: currentForecast.rain == null ? 0 : currentForecast.rain },
    ]

    return (
        <TableCurrentForecastStyle theme={ theme }>
            {
                tableList.map( ( item, key ) => {
                    return (
                        <ItemTableCurrentForecastStyle key={ key }>
                            <h3> { item.title } </h3>
                            <span> { item.content } </span>
                        </ItemTableCurrentForecastStyle>
                    )
                })
            }
        </TableCurrentForecastStyle>
    )
}