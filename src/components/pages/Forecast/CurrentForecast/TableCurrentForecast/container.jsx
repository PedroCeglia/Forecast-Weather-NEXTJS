'use client'

import { TableCurrentForecastStyle } from "./style";
import { useThemeProvider } from "@/src/style/ThemeProvider";

export default function TableCurrentForecastContainer( { children } ) {
    
    const { theme } = useThemeProvider()
    
    return (
        <TableCurrentForecastStyle theme={ theme }>
            { children }
        </TableCurrentForecastStyle>
    )
}