'use client'

import { ArticleDayForecast } from "./style"
import { useThemeProvider } from "@/src/style/ThemeProvider"

export default function DayForecastContainer( { children } ) {

    const { theme } = useThemeProvider()

    return (
        <ArticleDayForecast theme={ theme }>
            { children }
        </ArticleDayForecast>
    )
}