'use client'

import StyledComponentsRegistry from "./StyleComponentRegistry"
import ThemeProvider from "./ThemeProvider"
import StyleGlobal from "./StyleGlobal"

export default function StyleSettigns( { children } ) {
    return (
        <StyledComponentsRegistry>
            <StyleGlobal />
            <ThemeProvider>
                { children }
            </ThemeProvider>
        </StyledComponentsRegistry>
    )
}