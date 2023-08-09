'use client'

import { ArticleCurrentForecast } from "./style"
import { useThemeProvider } from "@/src/style/ThemeProvider"

export default function CurrentForecastContainer( { children } ) {

    const { theme } = useThemeProvider()

    return (
        <ArticleCurrentForecast theme={ theme }>
            { children }
        </ArticleCurrentForecast>
    )
}