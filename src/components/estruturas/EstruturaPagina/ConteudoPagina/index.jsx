'use client'

import { ConteudoPaginaContainerStyle } from "./style"
import { useThemeProvider } from "@/src/style/ThemeProvider"

export default function ConteudoPaginaContainer( { children } ) {

    const { theme } = useThemeProvider()

    return (
        <ConteudoPaginaContainerStyle theme={ theme }>
            { children }
        </ConteudoPaginaContainerStyle>
    )
}