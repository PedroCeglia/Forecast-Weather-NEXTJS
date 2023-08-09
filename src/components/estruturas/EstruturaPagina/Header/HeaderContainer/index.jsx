'use client'

import { HeaderContainerStyle } from "./style"
import { useThemeProvider } from "@/src/style/ThemeProvider"

export default function HeaderContainer( { children } ) {

    const { theme } = useThemeProvider()

    return (
        <HeaderContainerStyle theme={ theme }>
            { children }
        </HeaderContainerStyle>
    )
}