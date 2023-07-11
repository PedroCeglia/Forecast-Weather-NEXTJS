import { InitialPagePadding } from "./style"
import HeaderContainer from "./HeaderContainer"
import GoogleAutocomplete from "./GoogleAutocomplete"
import Link from "next/link"
import ChangeTheme from "./ChangeTheme"

export default function Header() {
    return (
        <>
            <HeaderContainer>
                <Link href="/">Forecast Weather</Link>
                <GoogleAutocomplete />
                <ChangeTheme />
            </HeaderContainer>      
            <InitialPagePadding />  
        </>

    )
}