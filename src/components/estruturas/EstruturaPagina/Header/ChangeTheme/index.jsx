'use client' 

import { useThemeProvider } from "@/src/style/ThemeProvider"

export default function ChangeTheme() {

    const { toggleThemeToDarkOrLight } = useThemeProvider()

    return (
        <button
            onClick={ toggleThemeToDarkOrLight }
        >
            Mudar Thema
        </button>
    )
}