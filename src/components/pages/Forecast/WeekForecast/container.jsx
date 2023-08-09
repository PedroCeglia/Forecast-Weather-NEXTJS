'use client'

import { ArticleWeekForecast } from "./style";
import { useThemeProvider } from "@/src/style/ThemeProvider";

export default function WeekForecastContainer( { children } ) {
    
    const { theme } = useThemeProvider()

    return (
        <ArticleWeekForecast theme={ theme }>
            { children }
        </ArticleWeekForecast>
    )
} 