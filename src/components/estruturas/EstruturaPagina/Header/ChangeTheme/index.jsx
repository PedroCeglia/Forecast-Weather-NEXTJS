'use client' 

import { SwitchThemeButton } from "./style"
import { useThemeProvider } from "@/src/style/ThemeProvider"

export default function ChangeTheme() {

    const { theme, toggleThemeToDarkOrLight } = useThemeProvider()

    return (
        <SwitchThemeButton
            onClick={ toggleThemeToDarkOrLight }
            theme={ theme }
        >
        </SwitchThemeButton>
    )
}